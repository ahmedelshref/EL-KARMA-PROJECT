const http = require("http");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const crypto = require("crypto");
const ExcelJS = require("exceljs");

const root = __dirname;
const dataFile = process.env.DATA_FILE || path.join(root, "data.json");
const password = process.env.ADMIN_PASSWORD || "Elkarma2026";
const port = Number(process.env.PORT || 3000);
const sessions = new Map();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

function send(res, status, value, extraHeaders = {}) {
  const body = typeof value === "string" ? value : JSON.stringify(value);
  res.writeHead(status, {
    "Content-Type": typeof value === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...extraHeaders,
  });
  res.end(body);
}

function parseCookies(header = "") {
  return Object.fromEntries(
    header.split(";").map((item) => item.trim()).filter(Boolean).map((item) => {
      const index = item.indexOf("=");
      return [decodeURIComponent(item.slice(0, index)), decodeURIComponent(item.slice(index + 1))];
    }),
  );
}

function isAuthorized(req) {
  const cookies = parseCookies(req.headers.cookie);
  return Boolean(sessions.get(cookies.admin_session));
}

async function readJson() {
  return JSON.parse(await fsp.readFile(dataFile, "utf8"));
}

async function writeJson(projects) {
  await fsp.mkdir(path.dirname(dataFile), { recursive: true });
  const tempFile = `${dataFile}.tmp-${process.pid}`;
  await fsp.writeFile(tempFile, JSON.stringify(projects), "utf8");
  await fsp.rename(tempFile, dataFile);
}

async function initializeDataFile() {
  try {
    await fsp.access(dataFile);
  } catch {
    await fsp.mkdir(path.dirname(dataFile), { recursive: true });
    const sourceDataFile = path.join(root, "data.json");
    await fsp.copyFile(sourceDataFile, dataFile);
  }
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  if (!text) return {};
  return JSON.parse(text);
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[ـ\s_-]+/g, " ")
    .trim()
    .toLocaleLowerCase("ar");
}

function cleanNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const match = String(value ?? "").match(/-?\d+(?:[.,]\d+)?/);
  return match ? Number(match[0].replace(",", ".")) : null;
}

function findHeaderIndex(headers, names) {
  const normalizedHeaders = headers.map(normalizeText);
  for (const name of names) {
    const normalizedName = normalizeText(name);
    const exact = normalizedHeaders.findIndex((header) => header === normalizedName);
    if (exact >= 0) return exact;
  }
  for (const name of names) {
    const normalizedName = normalizeText(name);
    const partial = normalizedHeaders.findIndex((header) => header.includes(normalizedName));
    if (partial >= 0) return partial;
  }
  return -1;
}

function parsedRowsToUnits(rows) {
  if (!rows.length) return [];
  let headerRowIndex = -1;
  let columns = null;
  for (let index = 0; index < Math.min(rows.length, 30); index += 1) {
    const headers = rows[index].map((value) => String(value ?? ""));
    const numberIndex = findHeaderIndex(headers, ["unit number", "unit no", "رقم الوحدة", "رقم الشقة", "رقم"]);
    const areaIndex = findHeaderIndex(headers, ["area", "مساحة", "المساحة"]);
    if (numberIndex >= 0 && areaIndex >= 0) {
      headerRowIndex = index;
      columns = {
        number: numberIndex,
        area: areaIndex,
        type: findHeaderIndex(headers, ["type", "النوع"]),
        view: findHeaderIndex(headers, ["view", "pool", "الإطلالة", "اطلالة"]),
        floor: findHeaderIndex(headers, ["floor", "الطابق", "الدور"]),
        building: findHeaderIndex(headers, ["building", "المبنى", "عمارة"]),
        meterPrice: findHeaderIndex(headers, ["meter price", "السعر للمتر", "سعر المتر"]),
        price: findHeaderIndex(headers, ["total price", "سعر الوحدة", "السعر الاجمالي", "السعر الإجمالي", "اجمالي السعر"]),
        status: findHeaderIndex(headers, ["status", "الحالة", "التوافر", "حجز"]),
      };
      break;
    }
  }

  if (headerRowIndex < 0 || !columns) {
    throw new Error("لم يتم العثور على أعمدة رقم الوحدة والمساحة في ملف CSV.");
  }

  const units = [];
  for (const row of rows.slice(headerRowIndex + 1)) {
    const number = row[columns.number];
    const area = cleanNumber(row[columns.area]);
    if (!number || String(number).trim() === "" || !area || area <= 0) continue;
    const meterPrice = columns.meterPrice >= 0 ? cleanNumber(row[columns.meterPrice]) : null;
    let price = columns.price >= 0 ? cleanNumber(row[columns.price]) : null;
    if ((!price || price <= 0) && area && meterPrice) price = area * meterPrice;
    const rawStatus = columns.status >= 0 ? String(row[columns.status] ?? "") : "";
    const status = /sold|مبيع|مباعة/i.test(rawStatus)
      ? "مباعة"
      : /hold|محجوز|حجز/i.test(rawStatus)
        ? "محجوزة"
        : /stop|موقف/i.test(rawStatus)
          ? "موقوفة"
          : "متاحة";
    units.push({
      number: String(number).trim(),
      area,
      type: columns.type >= 0 ? String(row[columns.type] ?? "") : "",
      view: columns.view >= 0 ? String(row[columns.view] ?? "غير محددة") : "غير محددة",
      meterPrice,
      floor: columns.floor >= 0 ? String(row[columns.floor] ?? "") : "",
      building: columns.building >= 0 ? String(row[columns.building] ?? "") : "",
      status,
      price,
    });
  }
  if (!units.length) throw new Error("ملف CSV لا يحتوي وحدات بمساحة صالحة.");
  return units;
}

async function parseWorkbookBuffer(buffer) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const units = [];

  for (const sheet of workbook.worksheets) {
    const rows = [];
    sheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      rows[rowNumber - 1] = Array.from({ length: Math.max(row.cellCount, 1) }, (_, index) => {
        const value = row.getCell(index + 1).value;
        if (value && typeof value === "object" && "text" in value) return value.text;
        if (value && typeof value === "object" && "result" in value) return value.result;
        return value;
      });
    });
    if (!rows.length) continue;

    let headerRowIndex = -1;
    let columns = null;
    for (let index = 0; index < Math.min(rows.length, 30); index += 1) {
      const headers = rows[index].map((value) => String(value ?? ""));
      const numberIndex = findHeaderIndex(headers, ["unit number", "unit no", "رقم الوحدة", "رقم الشقة", "رقم"]);
      const areaIndex = findHeaderIndex(headers, ["area", "مساحة", "المساحة"]);
      if (numberIndex >= 0 && areaIndex >= 0) {
        headerRowIndex = index;
        columns = {
          number: numberIndex,
          area: areaIndex,
          type: findHeaderIndex(headers, ["type", "النوع"]),
          view: findHeaderIndex(headers, ["view", "pool", "الإطلالة", "اطلالة"]),
          floor: findHeaderIndex(headers, ["floor", "الطابق", "الدور"]),
          building: findHeaderIndex(headers, ["building", "المبنى", "عمارة"]),
          meterPrice: findHeaderIndex(headers, ["meter price", "السعر للمتر", "سعر المتر"]),
          price: findHeaderIndex(headers, ["total price", "سعر الوحدة", "السعر الاجمالي", "السعر الإجمالي", "اجمالي السعر"]),
          status: findHeaderIndex(headers, ["status", "الحالة", "التوافر", "حجز"]),
        };
        break;
      }
    }

    if (headerRowIndex < 0 || !columns) continue;

    for (const row of rows.slice(headerRowIndex + 1)) {
      const number = row[columns.number];
      if (number === null || number === undefined || String(number).trim() === "") continue;
      const area = cleanNumber(row[columns.area]);
      if (!area || area <= 0) continue;
      const meterPrice = columns.meterPrice >= 0 ? cleanNumber(row[columns.meterPrice]) : null;
      let price = columns.price >= 0 ? cleanNumber(row[columns.price]) : null;
      if ((!price || price <= 0) && area && meterPrice) price = area * meterPrice;

      const rawStatus = columns.status >= 0 ? String(row[columns.status] ?? "") : "";
      let status = "متاحة";
      if (/sold|مبيع|مباعة/i.test(rawStatus)) status = "مباعة";
      else if (/hold|محجوز|حجز/i.test(rawStatus)) status = "محجوزة";
      else if (/stop|موقف/i.test(rawStatus)) status = "موقوفة";

      units.push({
        number: String(number).trim(),
        area: area,
        type: columns.type >= 0 ? String(row[columns.type] ?? "") : "",
        view: columns.view >= 0 ? String(row[columns.view] ?? "غير محددة") : "غير محددة",
        meterPrice: meterPrice,
        floor: columns.floor >= 0 ? String(row[columns.floor] ?? "") : "",
        building: columns.building >= 0 ? String(row[columns.building] ?? "") : "",
        status,
        price,
      });
    }
  }

  if (units.length === 0) throw new Error("لم يتم العثور على صفوف وحدات في الملف. تأكد من وجود أعمدة رقم الوحدة والمساحة.");
  return units;
}

async function serveStatic(req, res) {
  const requestPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const relative = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.resolve(root, relative);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    send(res, 403, "Forbidden");
    return;
  }

  try {
    const stat = await fsp.stat(filePath);
    if (!stat.isFile()) throw new Error("Not a file");
    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    fs.createReadStream(filePath).pipe(res);
  } catch {
    send(res, 404, "Not found");
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");

    if (req.method === "GET" && url.pathname === "/api/projects") {
      send(res, 200, await readJson());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/admin/login") {
      const body = await readBody(req);
      if (body.password !== password) {
        send(res, 401, { error: "كلمة المرور غير صحيحة." });
        return;
      }
      const token = crypto.randomBytes(24).toString("hex");
      sessions.set(token, { createdAt: Date.now() });
      const secure = process.env.RENDER ? "; Secure" : "";
      send(res, 200, { ok: true }, {
        "Set-Cookie": `admin_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=43200${secure}`,
      });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/admin/logout") {
      const cookies = parseCookies(req.headers.cookie);
      sessions.delete(cookies.admin_session);
      send(res, 200, { ok: true }, {
        "Set-Cookie": "admin_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0",
      });
      return;
    }

    if (url.pathname.startsWith("/api/admin/")) {
      if (!isAuthorized(req)) {
        send(res, 401, { error: "يجب تسجيل الدخول أولًا." });
        return;
      }

      if (req.method === "PUT" && url.pathname === "/api/admin/projects") {
        const projects = await readBody(req);
        if (!Array.isArray(projects)) throw new Error("صيغة بيانات المشروعات غير صحيحة.");
        await writeJson(projects);
        send(res, 200, { ok: true, count: projects.length });
        return;
      }

      if (req.method === "POST" && url.pathname === "/api/admin/import-project") {
        const body = await readBody(req);
        if (!body.name || !body.filename || !body.data) throw new Error("أدخل اسم المشروع وارفع ملف السعر.");
        const buffer = Buffer.from(body.data, "base64");
        let units;
        const extension = path.extname(body.filename).toLowerCase();
        if (extension === ".json") {
          const parsed = JSON.parse(buffer.toString("utf8"));
          units = Array.isArray(parsed) ? parsed : parsed.units;
          if (!Array.isArray(units)) throw new Error("ملف JSON يجب أن يحتوي مصفوفة وحدات أو مفتاح units.");
        } else if (extension === ".csv") {
          const text = buffer.toString("utf8").replace(/^\ufeff/, "");
          const lines = text.split(/\r?\n/).filter((line) => line.trim());
          const parsedRows = lines.map((line) => line.split(",").map((value) => value.trim().replace(/^"|"$/g, "")));
          units = parsedRowsToUnits(parsedRows);
        } else {
          units = await parseWorkbookBuffer(buffer);
        }

        const projects = await readJson();
        const idBase = normalizeText(body.name).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `project-${Date.now()}`;
        let id = idBase;
        let suffix = 2;
        while (projects.some((project) => project.id === id)) {
          id = `${idBase}-${suffix}`;
          suffix += 1;
        }
        const project = {
          id,
          name: body.name.trim(),
          loadingRate: cleanNumber(body.loadingRate) ?? 0,
          maintenanceDepositRate: cleanNumber(body.maintenanceDepositRate) ?? 0,
          paymentPlan: {
            downPaymentRate: cleanNumber(body.downPaymentRate) ?? 0,
            cashDiscountRate: cleanNumber(body.cashDiscountRate) ?? 0,
            maintenanceRate: cleanNumber(body.maintenanceRate) ?? 0,
            years: cleanNumber(body.years) ?? 1,
            paymentsPerYear: cleanNumber(body.paymentsPerYear) ?? 12,
          },
          units,
        };
        projects.push(project);
        await writeJson(projects);
        send(res, 200, { ok: true, project, count: units.length });
        return;
      }

      if (req.method === "DELETE" && url.pathname === "/api/admin/projects") {
        const body = await readBody(req);
        const projects = await readJson();
        const remaining = projects.filter((project) => project.id !== body.projectId);
        if (remaining.length === projects.length) throw new Error("المشروع غير موجود.");
        await writeJson(remaining);
        send(res, 200, { ok: true, count: remaining.length });
        return;
      }
    }

    if (req.method === "GET" || req.method === "HEAD") {
      await serveStatic(req, res);
      return;
    }

    send(res, 405, { error: "Method not allowed" });
  } catch (error) {
    send(res, 400, { error: error instanceof Error ? error.message : "حدث خطأ غير متوقع." });
  }
});

initializeDataFile()
  .then(() => {
    server.listen(port, "0.0.0.0", () => {
      console.log(`El Karma Projects server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Could not initialize project data:", error);
    process.exit(1);
  });
