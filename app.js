let projects = window.COMPANY_PROJECTS;

if (!Array.isArray(projects) || projects.length === 0) {
  throw new Error("Company project data is missing or empty.");
}

const sevanaUnitTerms = { loadingRate: 30, maintenanceDepositRate: 8 };
const projectUnitTerms = {
  "karma-la-vida": { loadingRate: 25, maintenanceDepositRate: 5 },
  sevana: sevanaUnitTerms,
  "سيفانا": sevanaUnitTerms,
  karnak: { loadingRate: 25, maintenanceDepositRate: 8 },
  "el-hijaz-hub": { loadingRate: 30, maintenanceDepositRate: 5 },
  "el-hadaba-point": { loadingRate: 25, maintenanceDepositRate: 8 },
};

const planImages = {
  sevana: {},
  karnak: {
    "101": "assets/karnak/101.jpg",
    "201": "assets/karnak/101.jpg",
    "301": "assets/karnak/101.jpg",
    "401": "assets/karnak/101.jpg",
    "102": "assets/karnak/102.jpg",
    "202": "assets/karnak/102.jpg",
    "302": "assets/karnak/102.jpg",
    "402": "assets/karnak/102.jpg",
    "103": "assets/karnak/103.jpg",
    "203": "assets/karnak/103.jpg",
    "303": "assets/karnak/103.jpg",
    "403": "assets/karnak/103.jpg",
    "104": "assets/karnak/104.jpg",
    "204": "assets/karnak/104.jpg",
    "304": "assets/karnak/104.jpg",
    "404": "assets/karnak/104.jpg",
    "105": "assets/karnak/105.jpg",
    "205": "assets/karnak/105.jpg",
    "305": "assets/karnak/105.jpg",
    "405": "assets/karnak/105.jpg",
    "106": "assets/karnak/106.jpg",
    "206": "assets/karnak/106.jpg",
    "306": "assets/karnak/106.jpg",
    "406": "assets/karnak/106.jpg",
    "107": "assets/karnak/107.jpg",
    "207": "assets/karnak/107.jpg",
    "307": "assets/karnak/107.jpg",
    "407": "assets/karnak/107.jpg",
    "108": "assets/karnak/108.jpg",
    "208": "assets/karnak/108.jpg",
    "308": "assets/karnak/108.jpg",
    "408": "assets/karnak/108.jpg",
    "109": "assets/karnak/109.jpg",
    "209": "assets/karnak/109.jpg",
    "309": "assets/karnak/109.jpg",
    "409": "assets/karnak/109.jpg",
    "110": "assets/karnak/110.jpg",
    "210": "assets/karnak/110.jpg",
    "310": "assets/karnak/110.jpg",
    "410": "assets/karnak/110.jpg",
    "111": "assets/karnak/111.jpg",
    "211": "assets/karnak/111.jpg",
    "311": "assets/karnak/111.jpg",
    "411": "assets/karnak/111.jpg",
    "112": "assets/karnak/112.jpg",
    "212": "assets/karnak/112.jpg",
    "312": "assets/karnak/112.jpg",
    "412": "assets/karnak/112.jpg",
    "113": "assets/karnak/113.jpg",
    "213": "assets/karnak/113.jpg",
    "313": "assets/karnak/113.jpg",
    "413": "assets/karnak/113.jpg",
    "114": "assets/karnak/114.jpg",
    "214": "assets/karnak/114.jpg",
    "314": "assets/karnak/114.jpg",
    "414": "assets/karnak/114.jpg",
    "116": "assets/karnak/116.jpg",
    "216": "assets/karnak/116.jpg",
    "316": "assets/karnak/116.jpg",
    "416": "assets/karnak/116.jpg",
    "117": "assets/karnak/117.jpg",
    "217": "assets/karnak/117.jpg",
    "317": "assets/karnak/117.jpg",
    "417": "assets/karnak/117.jpg",
    G10: "assets/karnak/G10.jpg",
    G11: "assets/karnak/G11.jpg",
    G12: "assets/karnak/G12.jpg",
  },
  talia: {
    B01: "assets/talia/B-01.jpg",
    B02: "assets/talia/B-02.jpg",
    B03: "assets/talia/B-03.jpg",
    B04: "assets/talia/B-04.jpg",
    B05: "assets/talia/B-05.jpg",
    B06: "assets/talia/B-06.jpg",
    B07: "assets/talia/B-07.jpg",
    B08: "assets/talia/B-08.jpg",
  },
  "golden-home-2": {
    "101": "assets/golden-home-2/101.jpg",
    "102": "assets/golden-home-2/102.jpg",
    "103": "assets/golden-home-2/103.jpg",
    "104": "assets/golden-home-2/104.jpg",
    "105": "assets/golden-home-2/105.jpg",
    "106": "assets/golden-home-2/106.jpg",
  },
  "al-jawhara": {
    "12": "assets/al-jawhara/12.jpg",
    "13": "assets/al-jawhara/13.jpg",
    "14": "assets/al-jawhara/14.jpg",
    "15": "assets/al-jawhara/15.jpg",
    "16": "assets/al-jawhara/16.jpg",
  },
  "el-inter": {
    "14": "assets/el-inter/14.jpg",
    "15": "assets/el-inter/15.jpg",
    "16": "assets/el-inter/16.jpg",
    "17": "assets/el-inter/17.jpg",
    "18": "assets/el-inter/18.jpg",
    "19": "assets/el-inter/19.jpg",
    "20": "assets/el-inter/20.jpg",
    "21": "assets/el-inter/21.jpg",
    "22": "assets/el-inter/22.jpg",
    "23": "assets/el-inter/23.jpg",
    "24": "assets/el-inter/24.jpg",
    "26": "assets/el-inter/26.jpg",
    "27": "assets/el-inter/27.jpg",
  },
  "ibiza-bay": {
    "103": "assets/ibiza/layout-103.jpg",
    "105": "assets/ibiza/layout-105.jpg",
    "110": "assets/ibiza/layout-110.jpg",
    "113": "assets/ibiza/layout-113.jpg",
    "114": "assets/ibiza/layout-114.jpg",
    "116": "assets/ibiza/layout-116.jpg",
    "117": "assets/ibiza/layout-117.jpg",
    "128": "assets/ibiza/layout-128.jpg",
  },
};
const sevanaProject = projects.find((project) => project.id === "sevana");
const sevanaLayoutsByArea = {
  25: "assets/sevana-layouts/25-layout.jpg",
  49: "assets/sevana-layouts/49-layout.jpg",
  51: "assets/sevana-layouts/51-layout.jpg",
  52: "assets/sevana-layouts/52-layout.jpg",
  56: "assets/sevana-layouts/56-layout.jpg",
  59: "assets/sevana-layouts/59-layout.jpg",
  65: "assets/sevana-layouts/65-layout.jpg",
  70: "assets/sevana-layouts/70-layout.jpg",
  95: "assets/sevana-layouts/95-layout.jpg",
  139: "assets/sevana-layouts/139-layout.jpg",
};
const planImagesByArea = new Map();

function rebuildPlanLookups(projectList) {
  planImagesByArea.clear();

  for (const project of projectList) {
    if (project.id === "sevana") {
      planImages.sevana = {};
      for (const unit of project.units) {
        const imagePath = sevanaLayoutsByArea[Number(unit.area)];
        if (imagePath) planImages.sevana[String(unit.number)] = imagePath;
      }
    }

    const projectImages = planImages[project.id];
    if (!projectImages) continue;

    const unitsByNumber = new Map(project.units.map((unit) => [String(unit.number), unit]));
    const imagesByArea = new Map();
    for (const [unitNumber, imagePath] of Object.entries(projectImages)) {
      const sourceUnit = unitsByNumber.get(unitNumber);
      if (!sourceUnit) {
        continue;
      }

      const area = Number(sourceUnit.area);
      if (!Number.isFinite(area) || area <= 0) {
        continue;
      }
      if (!imagesByArea.has(area)) imagesByArea.set(area, imagePath);
    }
    planImagesByArea.set(project.id, imagesByArea);
  }

  if (projectList.some((project) => project.id === "sevana")) {
    const sevanaImagesByArea = new Map(
      Object.entries(sevanaLayoutsByArea).map(([area, imagePath]) => [Number(area), imagePath]),
    );
    planImagesByArea.set("sevana", sevanaImagesByArea);
  }
}

rebuildPlanLookups(projects);

const statusClassNames = {
  "متاحة": "status-available",
  "محجوزة": "status-reserved",
  "مباعة": "status-sold",
  "موقوفة": "status-stopped",
};
const viewLabels = {
  "غير محددة": "NOT SPECIFIED",
  "حديقة": "GARDEN VIEW",
  "شارع": "STREET VIEW",
  "إطلالة بحرية بانورامية": "PANORAMIC SEA VIEW",
  "إطلالة بحرية وحمام سباحة": "SEA & POOL VIEW",
  "إطلالة بحرية": "SEA VIEW",
  "إطلالة على المسبح": "POOL VIEW",
  "بانوراما": "PANORAMIC VIEW",
  "حمام السباحة": "POOL VIEW",
  "حمام سباحة": "POOL VIEW",
  "pool": "POOL VIEW",
  "أمامي": "FRONT VIEW",
  "امامي": "FRONT VIEW",
  "لاند سكيب": "LANDSCAPE VIEW",
  "شارع الكهف الرئيسي": "EL KAHF MAIN STREET VIEW",
  "شارع الحجاز الرئيسي": "EL HIJAZ MAIN STREET VIEW",
  "شارع المدرسة": "SCHOOL STREET VIEW",
  "شارع B": "STREET B VIEW",
  "شارع A": "STREET A VIEW",
  "شارع رئيسي": "MAIN STREET VIEW",
  "خلفى": "REAR VIEW",
  "إطلالة بحرية كاملة": "FULL SEA VIEW",
  "واجهة بحرية": "FULL SEA VIEW",
  "مسبح وإطلالة بحرية": "POOL & SEA VIEW",
  "إطلالة على المسبح": "POOL VIEW",
  "شارع وحمام سباحة": "STREET & POOL VIEW",
  "لاند سكيب وشارع الحجاز": "LANDSCAPE & EL HIJAZ STREET VIEW",
  "بانوراما": "PANORAMIC VIEW",
};
const numberFormatter = new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 2 });
const landingView = document.querySelector("#landing-view");
const projectView = document.querySelector("#project-view");
const projectDialog = document.querySelector("#project-dialog");
const projectSearch = document.querySelector("#project-search");
const projectOptions = document.querySelector("#project-options");
const unitDialog = document.querySelector("#unit-dialog");
const unitFacts = document.querySelector("#unit-facts");
const unitPaymentDetails = document.querySelector("#unit-payment-details");
const unitPlanImage = document.querySelector("#unit-plan-image");
const unitPlanReuseNote = document.querySelector("#unit-plan-reuse-note");
const planUnavailable = document.querySelector("#plan-unavailable");
const unitPlanAction = document.querySelector("#unit-plan-action");
const unitDetailsAction = document.querySelector("#unit-details-action");
const unitActionFeedback = document.querySelector("#unit-action-feedback");
const unitMessagePreview = document.querySelector("#unit-message-preview");
let selectedProject = null;
let activeUnit = null;
let activePlanImagePath = null;
let showAllUnits = false;

unitPlanImage.addEventListener("click", () => {
  if (unitPlanImage.hidden) return;
  unitPlanImage.classList.toggle("is-expanded");
  unitPlanImage.setAttribute("aria-expanded", String(unitPlanImage.classList.contains("is-expanded")));
});

unitPlanImage.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && !unitPlanImage.hidden) {
    event.preventDefault();
    unitPlanImage.classList.toggle("is-expanded");
    unitPlanImage.setAttribute("aria-expanded", String(unitPlanImage.classList.contains("is-expanded")));
  } else if (event.key === "Escape" && unitPlanImage.classList.contains("is-expanded")) {
    unitPlanImage.classList.remove("is-expanded");
    unitPlanImage.setAttribute("aria-expanded", "false");
  }
});

function formatNumber(value) {
  return Number.isFinite(Number(value)) ? numberFormatter.format(Number(value)) : "غير متوفر";
}

function formatPrice(value) {
  return Number.isFinite(Number(value)) ? `${formatNumber(value)} ج.م` : "غير متوفر";
}

function getProjectUnitTerms(project) {
  const projectName = typeof project.name === "string" ? project.name.trim() : "";
  const staticTerms = projectUnitTerms[project.id] || projectUnitTerms[projectName] || projectUnitTerms[projectName.toLocaleLowerCase("en")] || null;
  return {
    loadingRate: project.loadingRate ?? project.unitTerms?.loadingRate ?? staticTerms?.loadingRate,
    maintenanceDepositRate:
      project.maintenanceDepositRate ??
      project.unitTerms?.maintenanceDepositRate ??
      staticTerms?.maintenanceDepositRate,
  };
}

function isValidProjectRate(value) {
  if (value === undefined || value === null || String(value).trim() === "") return false;
  const rate = Number(value);
  return Number.isFinite(rate) && rate >= 0 && rate <= 100;
}

function formatProjectRate(value) {
  return isValidProjectRate(value) ? `${formatNumber(value)}%` : "بانتظار البيانات";
}

function calculateNetArea(area, loadingRate) {
  if (area === undefined || area === null || String(area).trim() === "" || !isValidProjectRate(loadingRate)) return null;
  const grossArea = Number(area);
  if (!Number.isFinite(grossArea) || grossArea <= 0) return null;
  return grossArea * (1 - Number(loadingRate) / 100);
}

function formatView(value) {
  if (value === undefined || value === null || value === "") return "NOT SPECIFIED";
  const normalized = String(value).trim();
  return viewLabels[normalized] || (/^[\x00-\x7F]+$/.test(normalized) ? normalized.toUpperCase() : "OTHER VIEW");
}

function calculateUnitPayment(unit, paymentPlan) {
  const price = Number(unit.price);
  if (!Number.isFinite(price) || price <= 0 || !paymentPlan) return null;

  const downPaymentRate = Number(paymentPlan.downPaymentRate);
  const cashDiscountRate = Number(paymentPlan.cashDiscountRate);
  const maintenanceRate = Number(paymentPlan.maintenanceRate);
  const years = Number(paymentPlan.years);
  const paymentsPerYear = Number(paymentPlan.paymentsPerYear);
  const rates = [downPaymentRate, cashDiscountRate, maintenanceRate];
  if (
    !rates.every((rate) => Number.isFinite(rate) && rate >= 0 && rate <= 100) ||
    !Number.isFinite(years) ||
    years <= 0 ||
    !Number.isFinite(paymentsPerYear) ||
    paymentsPerYear <= 0
  ) {
    return null;
  }

  const installmentCount = years * paymentsPerYear;
  const downPaymentAmount = (price * downPaymentRate) / 100;
  const cashDiscountAmount = (price * cashDiscountRate) / 100;
  const installmentBalance = price - downPaymentAmount;
  return {
    price,
    downPaymentRate,
    downPaymentAmount,
    cashDiscountRate,
    cashDiscountAmount,
    cashPrice: price - cashDiscountAmount,
    maintenanceRate,
    maintenanceAmount: (price * maintenanceRate) / 100,
    years,
    paymentsPerYear,
    installmentCount,
    installmentBalance,
    installmentAmount: installmentBalance / installmentCount,
  };
}

function getInstallmentFrequency(paymentsPerYear) {
  if (paymentsPerYear === 12) return "الشهري";
  if (paymentsPerYear === 4) return "الربع سنوي";
  return "لكل دفعة";
}

function formatYears(value) {
  if (value === 1) return "سنة";
  if (value === 2) return "سنتان";
  const suffix =
    Number.isInteger(value) && value >= 3 && value <= 10
      ? "سنوات"
      : "سنة";
  return `${formatNumber(value)} ${suffix}`;
}

function formatInstallmentCount(value) {
  if (value === 1) return "دفعة واحدة";
  if (value === 2) return "دفعتان";
  const suffix = Number.isInteger(value) && value >= 3 && value <= 10 ? "دفعات" : "دفعة";
  return `${formatNumber(value)} ${suffix}`;
}

function getProjectDeliveryDate(project) {
  return project.deliveryDate || "يُرجى تأكيده من الشركة";
}

function addOrbitCards() {
  const orbitContainer = document.querySelector("#project-orbits");
  const cards = projects.slice(0, 6).map((project, index) => {
    const card = document.createElement("span");
    card.className = "orbit-card";
    card.textContent = project.name;
    card.style.setProperty("--delay", `${index * -1.2}s`);
    orbitContainer.append(card);
    return card;
  });

  if (projects.length <= cards.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let nextProjectIndex = cards.length;
  let activeCardIndex = 0;
  let rotationTimeout;

  const scheduleNextSwap = () => {
    if (prefersReducedMotion.matches) return;
    rotationTimeout = window.setTimeout(() => {
      if (!prefersReducedMotion.matches) {
        cards[activeCardIndex].classList.add("orbit-card-falling");
      }
    }, 2800);
  };

  const stopRotation = () => {
    window.clearTimeout(rotationTimeout);
    cards.forEach((card) => card.classList.remove("orbit-card-falling", "orbit-card-dropping"));
  };

  cards.forEach((card) => {
    card.addEventListener("animationend", (event) => {
      if (event.target !== card || prefersReducedMotion.matches) return;

      if (event.animationName === "orbit-card-fall") {
        card.textContent = projects[nextProjectIndex].name;
        nextProjectIndex = (nextProjectIndex + 1) % projects.length;
        card.classList.remove("orbit-card-falling");
        card.classList.add("orbit-card-dropping");
      } else if (event.animationName === "orbit-card-drop") {
        card.classList.remove("orbit-card-dropping");
        activeCardIndex = (activeCardIndex + 1) % cards.length;
        scheduleNextSwap();
      }
    });
  });

  const handleMotionPreferenceChange = () => {
    stopRotation();
    if (!prefersReducedMotion.matches) scheduleNextSwap();
  };

  if (typeof prefersReducedMotion.addEventListener === "function") {
    prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);
  } else {
    prefersReducedMotion.addListener(handleMotionPreferenceChange);
  }

  scheduleNextSwap();
}

function openProjectPicker() {
  renderProjectOptions(projectSearch.value);
  projectDialog.showModal();
  projectSearch.focus();
}

function renderProjectOptions(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("ar");
  projectOptions.replaceChildren();

  const matches = projects.filter((project) => project.name.toLocaleLowerCase("ar").includes(normalizedQuery));
  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "لا يوجد مشروع بهذا الاسم.";
    projectOptions.append(empty);
    return;
  }

  matches.forEach((project) => {
    const option = document.createElement("button");
    option.className = "project-option";
    option.type = "button";
    option.setAttribute("role", "listitem");

    const details = document.createElement("span");
    const name = document.createElement("strong");
    const count = document.createElement("span");
    name.textContent = project.name;
    count.textContent = `${formatNumber(project.units.length)} وحدة`;
    details.append(name, count);

    const arrow = document.createElement("span");
    arrow.className = "project-option-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↙";
    option.append(details, arrow);
    option.addEventListener("click", () => selectProject(project));
    projectOptions.append(option);
  });
}

function renderPaymentPlan(target, project, detailed = false) {
  target.replaceChildren();
  const paymentPlan = project.paymentPlan;
  const unitTerms = getProjectUnitTerms(project);

  const title = document.createElement(detailed ? "p" : "p");
  title.className = detailed ? "eyebrow" : "payment-plan-title";
  title.textContent = "معلومات المشروع والخطة المالية";
  target.append(title);

  const values = [];
  if (paymentPlan && typeof paymentPlan === "object") {
    values.push(
      ["المقدم", paymentPlan.downPaymentRate, "%"],
      ["خصم الكاش", paymentPlan.cashDiscountRate, "%"],
      ["رسوم الصيانة", paymentPlan.maintenanceRate, "%"],
      ["مدة السداد", paymentPlan.years, " سنة"],
      ["عدد الدفعات سنويًا", paymentPlan.paymentsPerYear, " دفعة"],
    );
    if (Array.isArray(paymentPlan.downPaymentAlternatives)) {
      paymentPlan.downPaymentAlternatives.forEach((alternative, index) => {
        values.push([
          `خطة السداد ${index + 1}`,
          `${formatNumber(alternative.downPaymentRate)}% مقدمًا على ${formatYears(alternative.years)} بأقساط ${alternative.paymentsPerYear ? `ربع سنوية ×${Number(alternative.years) * Number(alternative.paymentsPerYear)}` : ""}`.trim(),
          "",
        ]);
      });
    }
  }
  values.push(
    ["نسبة التحميل", formatProjectRate(unitTerms?.loadingRate), ""],
    ["وديعة الصيانة", formatProjectRate(unitTerms?.maintenanceDepositRate), ""],
  );

  values.forEach(([label, value, suffix]) => {
    if (value === undefined || value === null) return;
    const item = document.createElement("div");
    item.className = detailed ? "payment-detail" : "plan-chip";
    const caption = document.createElement("span");
    const displayedValue = document.createElement("strong");
    caption.textContent = label;
    displayedValue.textContent =
      label === "مدة السداد"
        ? formatYears(Number(value))
        : typeof value === "boolean"
          ? value
            ? "نعم"
            : "لا"
          : Number.isFinite(Number(value)) && String(value).trim() !== ""
            ? `${formatNumber(value)}${suffix}`
            : String(value);
    item.append(caption, displayedValue);
    target.append(item);
  });
}

function selectProject(project) {
  selectedProject = project;
  showAllUnits = false;
  projectDialog.close();
  landingView.hidden = true;
  projectView.hidden = false;
  document.querySelector("#project-title").textContent = project.name;
  document.querySelector("#unit-search").value = "";
  document.querySelector("#unit-sort").value = "default";
  renderPaymentPlan(document.querySelector("#payment-plan"), project);
  renderUnitModeControls();
  renderUnits();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isAvailableUnit(unit) {
  return unit.status === "متاحة";
}

function renderUnitModeControls() {
  const availableCount = selectedProject.units.filter(isAvailableUnit).length;
  document.querySelector("#project-unit-count").textContent = formatNumber(
    showAllUnits ? selectedProject.units.length : availableCount,
  );
  document.querySelector("#project-unit-count-label").textContent = showAllUnits ? "وحدة مسجلة" : "وحدة متاحة";
  document.querySelector("#units-heading").textContent = showAllUnits ? "كل وحدات المشروع" : "الوحدات المتاحة";
  document.querySelector("#unit-mode-toggle").setAttribute("aria-pressed", String(showAllUnits));
  document.querySelector("#unit-mode-label").textContent = showAllUnits ? "عرض المتاحة فقط" : "عرض كل الوحدات";
  document.querySelector("#unit-mode-count").textContent = formatNumber(
    showAllUnits ? availableCount : selectedProject.units.length,
  );
}

function createUnitCard(unit) {
  const card = document.createElement("button");
  card.className = "unit-card";
  card.type = "button";
  card.setAttribute("aria-label", `عرض تفاصيل الوحدة ${unit.number} في ${selectedProject.name}`);

  const top = document.createElement("span");
  top.className = "unit-card-top";
  const nameGroup = document.createElement("span");
  const number = document.createElement("strong");
  number.className = "unit-number";
  number.textContent = `وحدة ${unit.number}`;
  const type = document.createElement("span");
  type.className = "unit-type";
  type.textContent = unit.type || "النوع غير موضح";
  nameGroup.append(number, type);

  const status = document.createElement("span");
  status.className = `status-pill ${statusClassNames[unit.status] || ""}`;
  status.textContent = unit.status || "الحالة غير موضحة";
  top.append(nameGroup, status);

  const meta = document.createElement("span");
  meta.className = "unit-card-meta";
  [
    ["المساحة", `${formatNumber(unit.area)} م²`],
    ["المبنى", unit.building || "غير موضح"],
    ["الدور", unit.floor || "غير موضح"],
    ["الإطلالة", formatView(unit.view)],
    ["السعر قبل الخصم", formatPrice(unit.price)],
  ].forEach(([label, value], index) => {
    const item = document.createElement("span");
    const itemLabel = document.createElement("span");
    const itemValue = document.createElement("strong");
    if (index === 3) itemValue.className = "unit-card-price";
    itemLabel.textContent = label;
    itemValue.textContent = value;
    item.append(itemLabel, itemValue);
    meta.append(item);
  });

  card.append(top, meta);
  card.addEventListener("click", () => openUnitDetails(unit));
  return card;
}

function renderUnits() {
  const grid = document.querySelector("#units-grid");
  const query = document.querySelector("#unit-search").value.trim().toLocaleLowerCase("ar");
  const matches = selectedProject.units.filter((unit) => {
    const searchable = [unit.number, unit.building, unit.type, unit.view, unit.floor, unit.status, unit.area]
      .filter((value) => value !== undefined && value !== null)
      .join(" ")
      .toLocaleLowerCase("ar");
    return searchable.includes(query) && (showAllUnits || isAvailableUnit(unit));
  });
  const sortOptions = {
    "area-asc": { field: "area", direction: 1 },
    "area-desc": { field: "area", direction: -1 },
    "price-asc": { field: "price", direction: 1 },
    "price-desc": { field: "price", direction: -1 },
  };
  const sort = sortOptions[document.querySelector("#unit-sort").value];
  if (sort) {
    matches.sort((first, second) => {
      const firstValue = Number(first[sort.field]);
      const secondValue = Number(second[sort.field]);
      const hasFirstValue = Number.isFinite(firstValue) && firstValue > 0;
      const hasSecondValue = Number.isFinite(secondValue) && secondValue > 0;
      if (!hasFirstValue || !hasSecondValue) {
        return hasFirstValue === hasSecondValue ? 0 : hasFirstValue ? -1 : 1;
      }
      return (firstValue - secondValue) * sort.direction;
    });
  }

  grid.replaceChildren();
  document.querySelector("#unit-results-count").textContent = showAllUnits
    ? `${formatNumber(matches.length)} من ${formatNumber(selectedProject.units.length)} وحدة`
    : `${formatNumber(matches.length)} وحدة متاحة`;
  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = showAllUnits
      ? "لا توجد وحدات مطابقة لبحثك."
      : "لا توجد وحدات متاحة مطابقة؛ اعرض كل الوحدات لرؤية بقية الحالات.";
    grid.append(empty);
    return;
  }
  matches.forEach((unit) => grid.append(createUnitCard(unit)));
}

function addFact(label, value, isPrice = false) {
  const fact = document.createElement("div");
  fact.className = `fact-card${isPrice ? " fact-price" : ""}`;
  const caption = document.createElement("span");
  const detail = document.createElement("strong");
  caption.textContent = label;
  detail.textContent = value === undefined || value === null || value === "" ? "غير متوفر في البيانات المحلية" : String(value);
  fact.append(caption, detail);
  unitFacts.append(fact);
}

function getUnitPlanImage(project, unit) {
  const projectImages = planImages[project.id];
  const directPath = projectImages?.[String(unit.number)];
  if (directPath) return { path: directPath, reusedByArea: false };

  const area = Number(unit.area);
  const areaPath = Number.isFinite(area) && area > 0 ? planImagesByArea.get(project.id)?.get(area) : null;
  return { path: areaPath || null, reusedByArea: Boolean(areaPath) };
}

function openUnitDetails(unit) {
  activeUnit = unit;
  unitPlanImage.classList.remove("is-expanded");
  unitPlanImage.setAttribute("aria-expanded", "false");
  const planImage = getUnitPlanImage(selectedProject, unit);
  activePlanImagePath = planImage.path;
  const unitTerms = getProjectUnitTerms(selectedProject);
  const netArea = calculateNetArea(unit.area, unitTerms?.loadingRate);
  const netAreaValue =
    netArea !== null
      ? `${formatNumber(netArea)} م²`
      : isValidProjectRate(unitTerms?.loadingRate)
        ? "غير متوفرة في البيانات المحلية"
        : "بانتظار نسبة التحميل";
  unitActionFeedback.hidden = true;
  unitActionFeedback.textContent = "";
  unitMessagePreview.hidden = true;
  unitMessagePreview.value = "";
  unitPlanAction.hidden = true;
  document.querySelector("#unit-dialog-title").textContent = `${selectedProject.name} · وحدة ${unit.number}`;
  unitFacts.replaceChildren();
  [
    ["المشروع", selectedProject.name],
    ["رقم الوحدة", unit.number],
    ["الحالة", unit.status],
    ["نوع الوحدة", unit.type],
    ["المساحة الإجمالية", Number.isFinite(Number(unit.area)) && Number(unit.area) > 0 ? `${formatNumber(unit.area)} م²` : null],
    ["نسبة التحميل", formatProjectRate(unitTerms?.loadingRate)],
    ["صافي المساحة بعد التحميل", netAreaValue],
    ["وديعة الصيانة", formatProjectRate(unitTerms?.maintenanceDepositRate)],
    ["المبنى", unit.building],
    ["الدور", unit.floor],
    ["الإطلالة", formatView(unit.view)],
    ["سعر المتر", Number.isFinite(Number(unit.meterPrice)) ? formatPrice(unit.meterPrice) : null],
    ["السعر الإجمالي قبل الخصم", Number.isFinite(Number(unit.price)) ? formatPrice(unit.price) : null],
  ].forEach(([label, value]) => addFact(label, value, label === "السعر الإجمالي قبل الخصم"));
  renderUnitPaymentDetails(unitPaymentDetails, selectedProject, unit);

  unitPlanImage.hidden = true;
  unitPlanReuseNote.hidden = true;
  planUnavailable.hidden = Boolean(activePlanImagePath);
  unitPlanImage.onload = () => {
    const aspectRatio = unitPlanImage.naturalWidth / unitPlanImage.naturalHeight;
    unitPlanImage.dataset.orientation =
      aspectRatio >= 1.12 ? "wide" : aspectRatio < 0.9 ? "portrait" : "square";
    unitPlanImage.hidden = false;
    unitPlanReuseNote.hidden = !planImage.reusedByArea;
    planUnavailable.hidden = true;
    unitPlanAction.hidden = false;
  };
  unitPlanImage.onerror = () => {
    unitPlanImage.hidden = true;
    unitPlanReuseNote.hidden = true;
    planUnavailable.hidden = false;
    unitPlanAction.hidden = true;
  };
  if (activePlanImagePath) {
    unitPlanImage.src = activePlanImagePath;
    unitPlanImage.alt = `المخطط والتصميم الهندسي للوحدة ${unit.number} في ${selectedProject.name}`;
  } else {
    unitPlanImage.removeAttribute("src");
    unitPlanImage.alt = "";
  }
  unitDialog.showModal();
}

function renderUnitPaymentDetails(target, project, unit) {
  target.replaceChildren();
  const title = document.createElement("p");
  title.className = "eyebrow";
  title.textContent = "تفاصيل السداد لهذه الوحدة";
  target.append(title);

  const summary = calculateUnitPayment(unit, project.paymentPlan);
  if (!summary) {
    const unavailable = document.createElement("p");
    unavailable.className = "payment-calculation-note";
    unavailable.textContent = "تعذر حساب تفاصيل السداد؛ راجع سعر الوحدة وخطة المشروع المسجلة.";
    target.append(unavailable);
  } else {
    const frequency = getInstallmentFrequency(summary.paymentsPerYear);
    const details = [
      [`مقدم الوحدة (${formatNumber(summary.downPaymentRate)}%)`, formatPrice(summary.downPaymentAmount)],
      [`سعر الكاش بعد خصم ${formatNumber(summary.cashDiscountRate)}%`, formatPrice(summary.cashPrice)],
      [`قيمة خصم الكاش (${formatNumber(summary.cashDiscountRate)}%)`, formatPrice(summary.cashDiscountAmount)],
      ["المتبقي للتقسيط بعد المقدم", formatPrice(summary.installmentBalance)],
      [
        `القسط ${frequency} (${formatInstallmentCount(summary.installmentCount)})`,
        formatPrice(summary.installmentAmount),
      ],
      ["مدة السداد", formatYears(summary.years)],
    ];
    if (summary.maintenanceRate > 0) {
      details.push([
        `رسوم الصيانة (${formatNumber(summary.maintenanceRate)}%)`,
        formatPrice(summary.maintenanceAmount),
      ]);
    }

    details.forEach(([label, value]) => {
      const item = document.createElement("div");
      item.className = "payment-detail";
      const caption = document.createElement("span");
      const displayedValue = document.createElement("strong");
      caption.textContent = label;
      displayedValue.textContent = value;
      item.append(caption, displayedValue);
      target.append(item);
    });

    const note = document.createElement("p");
    note.className = "payment-calculation-note";
    note.textContent = "القسط تقديري ومقسّم بالتساوي حسب مدة وعدد الدفعات المسجلين؛ رسوم الصيانة معروضة منفصلة.";
    target.append(note);
  }

  const delivery = document.createElement("div");
  delivery.className = "payment-detail payment-delivery";
  const deliveryCaption = document.createElement("span");
  const deliveryValue = document.createElement("strong");
  deliveryCaption.textContent = "موعد تسليم المشروع";
  deliveryValue.textContent = getProjectDeliveryDate(project);
  delivery.append(deliveryCaption, deliveryValue);
  target.append(delivery);
}

function buildUnitMessage(project, unit) {
  const hasNumber = (value) =>
    value !== undefined &&
    value !== null &&
    String(value).trim() !== "" &&
    Number.isFinite(Number(value));
  const displayValue = (value) =>
    value !== undefined && value !== null && String(value).trim() !== ""
      ? String(value)
      : "غير متوفر في البيانات المحلية";
  const unitTerms = getProjectUnitTerms(project);
  const netArea = calculateNetArea(unit.area, unitTerms?.loadingRate);
  const netAreaValue =
    netArea !== null
      ? `${formatNumber(netArea)} م²`
      : isValidProjectRate(unitTerms?.loadingRate)
        ? "غير متوفرة في البيانات المحلية"
        : "بانتظار نسبة التحميل";
  const details = [
    ["🏗️", "المشروع", displayValue(project.name)],
    ["🔢", "رقم الوحدة", displayValue(unit.number)],
    ["🔖", "الحالة", displayValue(unit.status)],
    ["🏠", "نوع الوحدة", displayValue(unit.type)],
    ["📐", "المساحة الإجمالية", hasNumber(unit.area) && Number(unit.area) > 0 ? `${formatNumber(unit.area)} م²` : "غير متوفرة في البيانات المحلية"],
    ["📊", "نسبة التحميل", formatProjectRate(unitTerms?.loadingRate)],
    ["📏", "صافي المساحة بعد التحميل", netAreaValue],
    ["🧰", "وديعة الصيانة", formatProjectRate(unitTerms?.maintenanceDepositRate)],
    ["🏢", "المبنى", displayValue(unit.building)],
    ["🪜", "الطابق", unit.floor === "غير موضح في النص" ? "غير محدد" : displayValue(unit.floor)],
    ["🌅", "الإطلالة", formatView(unit.view)],
    ["📏", "سعر المتر", hasNumber(unit.meterPrice) && Number(unit.meterPrice) > 0 ? formatPrice(unit.meterPrice) : "غير متوفر في البيانات المحلية"],
    ["🚚", "موعد تسليم المشروع", getProjectDeliveryDate(project)],
  ];
  const summary = calculateUnitPayment(unit, project.paymentPlan);
  const price = summary
    ? formatPrice(summary.price)
    : hasNumber(unit.price) && Number(unit.price) > 0
      ? formatPrice(unit.price)
      : "غير متوفر في البيانات المحلية";
  const paymentDetails = summary
    ? [
        `💳 *مقدم الوحدة (${formatNumber(summary.downPaymentRate)}%):* ${formatPrice(summary.downPaymentAmount)}`,
        `📉 *خصم الكاش (${formatNumber(summary.cashDiscountRate)}%):* ${formatPrice(summary.cashDiscountAmount)}`,
        `💰 *سعر الكاش بعد الخصم:* ${formatPrice(summary.cashPrice)}`,
        `🧾 *المتبقي للتقسيط بعد المقدم:* ${formatPrice(summary.installmentBalance)}`,
        `📅 *الأقساط:* ${getInstallmentFrequency(summary.paymentsPerYear)} — ${formatInstallmentCount(summary.installmentCount)} × ${formatPrice(summary.installmentAmount)}`,
        `🛠️ *رسوم الصيانة (${formatNumber(summary.maintenanceRate)}%):* ${formatPrice(summary.maintenanceAmount)}`,
        `⏳ *مدة السداد:* ${formatYears(summary.years)}`,
        "📌 *تنويه:* القسط تقديري ومقسّم بالتساوي حسب مدة وعدد الدفعات المسجلين؛ رسوم الصيانة معروضة منفصلة.",
      ]
    : ["⚠️ تعذر حساب تفاصيل السداد؛ راجع سعر الوحدة وخطة المشروع المسجلة."];

  return [
    "🏘️ *EL KARMA | تفاصيل الوحدة*",
    "━━━━━━━━━━━━━━━━━━━━",
    ...details.map(([icon, label, value]) => `${icon} *${label}:* ${value}`),
    "",
    "💳 *خطة السداد*",
    "━━━━━━━━━━━━━━━━━━━━",
    `💵 *سعر الوحدة قبل الخصم:* ${price}`,
    ...paymentDetails,
    "",
    "⚠️ الأسعار والتوافر يخضعان للتأكيد وقت الحجز.",
  ].join("\n");
}

function setUnitActionFeedback(message, isError = false) {
  unitActionFeedback.textContent = message;
  unitActionFeedback.dataset.state = isError ? "error" : "success";
  unitActionFeedback.hidden = false;
}

function showUnitMessageForManualCopy(message) {
  unitMessagePreview.value = message;
  unitMessagePreview.hidden = false;
  unitMessagePreview.focus();
  unitMessagePreview.select();
}

async function shareUnitDetails() {
  if (!selectedProject || !activeUnit) return;

  const message = buildUnitMessage(selectedProject, activeUnit);
  let shareFailed = false;
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({
        title: `${selectedProject.name} · وحدة ${activeUnit.number}`,
        text: message,
      });
      setUnitActionFeedback("تم فتح قائمة المشاركة.");
      return;
    } catch (error) {
      if (error.name === "AbortError") {
        setUnitActionFeedback("تم إلغاء المشاركة.");
        return;
      }
      shareFailed = true;
    }
  }

  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(message);
      setUnitActionFeedback(
        shareFailed
          ? "تعذرت المشاركة المباشرة؛ تم نسخ الرسالة. الصقها في التطبيق المطلوب."
          : "تم نسخ الرسالة. الصقها في واتساب أو تطبيق المشاركة.",
      );
      return;
    } catch (error) {
      showUnitMessageForManualCopy(message);
      const detail = error instanceof Error ? ` (${error.message})` : "";
      setUnitActionFeedback(`تعذر النسخ التلقائي${detail}؛ الرسالة جاهزة للتحديد والنسخ أدناه.`, true);
      return;
    }
  }

  showUnitMessageForManualCopy(message);
  setUnitActionFeedback("المشاركة والنسخ التلقائي غير متاحين؛ انسخ الرسالة المحددة أدناه.", true);
}

function triggerUnitPlanDownload(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
}

function getUnitPlanFilename(project, unit, imagePath) {
  const extension = imagePath.match(/\.([a-z0-9]+)(?:[?#].*)?$/i)?.[1] || "jpg";
  return `el-karma-${project.id}-unit-${unit.number}.${extension}`;
}

async function shareUnitPlan() {
  if (!selectedProject || !activeUnit || !activePlanImagePath) return;

  const filename = getUnitPlanFilename(selectedProject, activeUnit, activePlanImagePath);
  if (window.location.protocol === "file:") {
    triggerUnitPlanDownload(activePlanImagePath, filename);
    setUnitActionFeedback("بدأ تنزيل المخطط؛ ستجده في التنزيلات لإرفاقه عند المشاركة.");
    return;
  }

  try {
    const response = await fetch(activePlanImagePath);
    if (!response.ok) throw new Error(`Plan image request failed: ${response.status}`);
    const blob = await response.blob();
    if (typeof File === "function") {
      const file = new File([blob], filename, { type: blob.type || "image/jpeg" });
      if (
        typeof navigator.share === "function" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [file] })
      ) {
        try {
          await navigator.share({
            files: [file],
            title: `${selectedProject.name} · وحدة ${activeUnit.number}`,
            text: `مخطط ${selectedProject.name} - الوحدة ${activeUnit.number}`,
          });
          setUnitActionFeedback("تم فتح قائمة مشاركة المخطط.");
        } catch (error) {
          if (error.name === "AbortError") {
            setUnitActionFeedback("تم إلغاء مشاركة المخطط.");
            return;
          }
          throw error;
        }
        return;
      }
    }

    const downloadUrl = URL.createObjectURL(blob);
    triggerUnitPlanDownload(downloadUrl, filename);
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 60000);
    setUnitActionFeedback("المشاركة المباشرة للصور غير مدعومة؛ بدأ تنزيل المخطط لإرفاقه يدويًا.");
  } catch (error) {
    const detail = error instanceof Error ? ` (${error.message})` : "";
    setUnitActionFeedback(`تعذر تجهيز المخطط للمشاركة أو التنزيل${detail}. أعد تحميل الصفحة وحاول مرة أخرى.`, true);
  }
}

function returnToHome() {
  selectedProject = null;
  activeUnit = null;
  activePlanImagePath = null;
  projectView.hidden = true;
  landingView.hidden = false;
  document.querySelector("#project-picker-trigger").focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeDialogOnBackdrop(dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

document.querySelector("#landing-project-count").textContent = formatNumber(projects.length);
document.querySelector("#landing-unit-count").textContent = formatNumber(
  projects.reduce((total, project) => total + project.units.length, 0),
);
addOrbitCards();
document.querySelector("#project-picker-trigger").addEventListener("click", openProjectPicker);
projectSearch.addEventListener("input", () => renderProjectOptions(projectSearch.value));
projectDialog.addEventListener("close", () => { projectSearch.value = ""; });
document.querySelectorAll("[data-close-project]").forEach((button) => button.addEventListener("click", () => projectDialog.close()));
document.querySelectorAll("[data-close-unit]").forEach((button) => button.addEventListener("click", () => unitDialog.close()));
document.querySelector("#back-to-home").addEventListener("click", returnToHome);

const adminDialog = document.querySelector("#admin-dialog");
const adminLoginForm = document.querySelector("#admin-login-form");
const adminEditor = document.querySelector("#admin-editor");
const adminProjectSelect = document.querySelector("#admin-project-select");
const adminUnitSelect = document.querySelector("#admin-unit-select");
let editingProjectIndex = 0;
let editingUnitIndex = 0;

document.querySelector("#admin-open-button").addEventListener("click", () => adminDialog.showModal());
document.querySelector("[data-close-admin]").addEventListener("click", () => adminDialog.close());
closeDialogOnBackdrop(adminDialog);

function setAdminFeedback(message, isError = false) {
  const target = document.querySelector("#admin-editor-feedback");
  target.textContent = message;
  target.dataset.state = isError ? "error" : "success";
  target.hidden = false;
}

function fillProjectSelect() {
  adminProjectSelect.replaceChildren();
  projects.forEach((project, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = project.name;
    adminProjectSelect.append(option);
  });
}

function fillUnitSelect() {
  const project = projects[editingProjectIndex];
  adminUnitSelect.replaceChildren();
  project.units.forEach((unit, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${unit.number} — ${unit.area || "-"} م²`;
    adminUnitSelect.append(option);
  });
  editingUnitIndex = Math.min(editingUnitIndex, project.units.length - 1);
  adminUnitSelect.value = String(Math.max(editingUnitIndex, 0));
}

function fillProjectForm() {
  const project = projects[editingProjectIndex];
  const payment = project.paymentPlan || {};
  const unitTerms = getProjectUnitTerms(project);
  document.querySelector("#admin-project-name").value = project.name || "";
  document.querySelector("#admin-down-payment").value = payment.downPaymentRate ?? "";
  document.querySelector("#admin-cash-discount").value = payment.cashDiscountRate ?? "";
  document.querySelector("#admin-maintenance-rate").value = payment.maintenanceRate ?? "";
  document.querySelector("#admin-years").value = payment.years ?? "";
  document.querySelector("#admin-payments-per-year").value = payment.paymentsPerYear ?? "";
  document.querySelector("#admin-loading-rate").value = unitTerms.loadingRate ?? "";
  document.querySelector("#admin-maintenance-deposit").value = unitTerms.maintenanceDepositRate ?? "";
}

function fillUnitForm() {
  const unit = projects[editingProjectIndex].units[editingUnitIndex];
  if (!unit) return;
  [
    ["#admin-unit-number", "number"],
    ["#admin-unit-area", "area"],
    ["#admin-unit-type", "type"],
    ["#admin-unit-floor", "floor"],
    ["#admin-unit-building", "building"],
    ["#admin-unit-view", "view"],
    ["#admin-unit-meter-price", "meterPrice"],
    ["#admin-unit-price", "price"],
  ].forEach(([selector, field]) => {
    document.querySelector(selector).value = unit[field] ?? "";
  });
  document.querySelector("#admin-unit-status").value = unit.status || "متاحة";
}

function openAdminEditor() {
  adminLoginForm.hidden = true;
  adminEditor.hidden = false;
  fillProjectSelect();
  fillUnitSelect();
  fillProjectForm();
  fillUnitForm();
}

adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#admin-login-feedback");
  feedback.hidden = true;
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: document.querySelector("#admin-password").value }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "تعذر تسجيل الدخول.");
    openAdminEditor();
  } catch (error) {
    feedback.textContent = error.message;
    feedback.dataset.state = "error";
    feedback.hidden = false;
  }
});

adminProjectSelect.addEventListener("change", () => {
  editingProjectIndex = Number(adminProjectSelect.value);
  editingUnitIndex = 0;
  fillUnitSelect();
  fillProjectForm();
  fillUnitForm();
});

adminUnitSelect.addEventListener("change", () => {
  editingUnitIndex = Number(adminUnitSelect.value);
  fillUnitForm();
});

document.querySelector("#admin-project-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const project = projects[editingProjectIndex];
  project.name = document.querySelector("#admin-project-name").value.trim();
  project.loadingRate = Number(document.querySelector("#admin-loading-rate").value);
  project.maintenanceDepositRate = Number(document.querySelector("#admin-maintenance-deposit").value);
  project.paymentPlan = {
    ...(project.paymentPlan || {}),
    downPaymentRate: Number(document.querySelector("#admin-down-payment").value),
    cashDiscountRate: Number(document.querySelector("#admin-cash-discount").value),
    maintenanceRate: Number(document.querySelector("#admin-maintenance-rate").value),
    years: Number(document.querySelector("#admin-years").value),
    paymentsPerYear: Number(document.querySelector("#admin-payments-per-year").value),
  };
  await saveProjectsFromAdmin();
  fillProjectSelect();
  adminProjectSelect.value = String(editingProjectIndex);
});

document.querySelector("#admin-unit-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const unit = projects[editingProjectIndex].units[editingUnitIndex];
  unit.number = document.querySelector("#admin-unit-number").value.trim();
  unit.area = Number(document.querySelector("#admin-unit-area").value);
  unit.type = document.querySelector("#admin-unit-type").value.trim();
  unit.status = document.querySelector("#admin-unit-status").value;
  unit.floor = document.querySelector("#admin-unit-floor").value.trim();
  unit.building = document.querySelector("#admin-unit-building").value.trim();
  unit.view = document.querySelector("#admin-unit-view").value.trim();
  unit.meterPrice = Number(document.querySelector("#admin-unit-meter-price").value);
  unit.price = Number(document.querySelector("#admin-unit-price").value);
  await saveProjectsFromAdmin();
  fillUnitSelect();
  adminUnitSelect.value = String(editingUnitIndex);
});

document.querySelector("#admin-add-unit").addEventListener("click", async () => {
  const project = projects[editingProjectIndex];
  const unit = {
    number: `UNIT-${project.units.length + 1}`,
    area: 0,
    type: "",
    view: "غير محددة",
    meterPrice: 0,
    floor: "",
    building: "",
    status: "متاحة",
    price: 0,
  };
  project.units.push(unit);
  editingUnitIndex = project.units.length - 1;
  await saveProjectsFromAdmin();
  fillUnitSelect();
  fillUnitForm();
});

document.querySelector("#admin-delete-unit").addEventListener("click", async () => {
  const project = projects[editingProjectIndex];
  if (!confirm(`حذف وحدة ${project.units[editingUnitIndex].number}؟`)) return;
  project.units.splice(editingUnitIndex, 1);
  editingUnitIndex = Math.max(0, editingUnitIndex - 1);
  await saveProjectsFromAdmin();
  fillUnitSelect();
  fillUnitForm();
});

document.querySelector("#admin-add-project").addEventListener("click", async () => {
  const project = {
    id: `project-${Date.now()}`,
    name: "مشروع جديد",
    paymentPlan: {
      downPaymentRate: 0,
      cashDiscountRate: 0,
      maintenanceRate: 0,
      years: 1,
      paymentsPerYear: 12,
    },
    units: [],
  };
  projects.push(project);
  editingProjectIndex = projects.length - 1;
  editingUnitIndex = 0;
  await saveProjectsFromAdmin();
  fillProjectSelect();
  adminProjectSelect.value = String(editingProjectIndex);
  fillUnitSelect();
  fillProjectForm();
  fillUnitForm();
});

document.querySelector("#admin-import-button").addEventListener("click", async () => {
  const nameInput = document.querySelector("#admin-import-project-name");
  const fileInput = document.querySelector("#admin-import-file");
  const name = nameInput.value.trim();
  const file = fileInput.files[0];
  if (!name) {
    setAdminFeedback("أدخل اسم المشروع الجديد أولًا.", true);
    nameInput.focus();
    return;
  }
  if (!file) {
    setAdminFeedback("اختر ملف السعر القائمة أولًا.", true);
    fileInput.focus();
    return;
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  const data = btoa(binary);

  try {
    const response = await fetch("/api/admin/import-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        filename: file.name,
        data,
        downPaymentRate: 0,
        cashDiscountRate: 0,
        maintenanceRate: 0,
        years: 1,
        paymentsPerYear: 12,
        loadingRate: Number(document.querySelector("#admin-import-loading-rate").value),
        maintenanceDepositRate: Number(document.querySelector("#admin-import-maintenance-rate").value),
      }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "تعذر استيراد المشروع.");
    projects.push(result.project);
    editingProjectIndex = projects.length - 1;
    editingUnitIndex = 0;
    await loadProjectsFromServer();
    fillProjectSelect();
    adminProjectSelect.value = String(editingProjectIndex);
    fillUnitSelect();
    fillProjectForm();
    fillUnitForm();
    nameInput.value = "";
    fileInput.value = "";
    setAdminFeedback(`تم إنشاء المشروع واستيراد ${formatNumber(result.count)} وحدة.`);
  } catch (error) {
    setAdminFeedback(error instanceof Error ? error.message : "تعذر استيراد المشروع.", true);
  }
});

document.querySelector("#admin-delete-project").addEventListener("click", async () => {
  const project = projects[editingProjectIndex];
  if (!project || !confirm(`حذف مشروع "${project.name}" وكل وحداته؟`)) return;
  projects.splice(editingProjectIndex, 1);
  editingProjectIndex = Math.max(0, editingProjectIndex - 1);
  editingUnitIndex = 0;
  await saveProjectsFromAdmin();
  fillProjectSelect();
  adminProjectSelect.value = String(editingProjectIndex);
  fillUnitSelect();
  fillProjectForm();
  fillUnitForm();
});

document.querySelector("#admin-logout").addEventListener("click", async () => {
  await fetch("/api/admin/logout", { method: "POST" });
  adminEditor.hidden = true;
  adminLoginForm.hidden = false;
  document.querySelector("#admin-password").value = "";
});

async function saveProjectsFromAdmin() {
  try {
    const response = await fetch("/api/admin/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projects),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "تعذر حفظ التعديلات.");
    window.COMPANY_PROJECTS = projects;
    document.querySelector("#landing-project-count").textContent = formatNumber(projects.length);
    document.querySelector("#landing-unit-count").textContent = formatNumber(projects.reduce((sum, project) => sum + project.units.length, 0));
    if (selectedProject) {
      renderPaymentPlan(document.querySelector("#payment-plan"), selectedProject);
      renderUnitModeControls();
      renderUnits();
    }
    setAdminFeedback("تم الحفظ. التغييرات متاحة الآن لجميع الزوار.");
  } catch (error) {
    setAdminFeedback(error.message, true);
  }
}

async function loadProjectsFromServer() {
  if (window.location.protocol === "file:") return;
  try {
    const response = await fetch("/api/projects", { cache: "no-store" });
    if (!response.ok) return;
    const remoteProjects = await response.json();
    if (!Array.isArray(remoteProjects) || remoteProjects.length === 0) return;
    projects = remoteProjects;
    window.COMPANY_PROJECTS = remoteProjects;
    rebuildPlanLookups(projects);
    document.querySelector("#landing-project-count").textContent = formatNumber(projects.length);
    document.querySelector("#landing-unit-count").textContent = formatNumber(projects.reduce((sum, project) => sum + project.units.length, 0));
  } catch {}
}

loadProjectsFromServer();
document.querySelector("#unit-search").addEventListener("input", renderUnits);
document.querySelector("#unit-sort").addEventListener("change", renderUnits);
unitDetailsAction.addEventListener("click", shareUnitDetails);
unitPlanAction.addEventListener("click", shareUnitPlan);
document.querySelector("#unit-mode-toggle").addEventListener("click", () => {
  showAllUnits = !showAllUnits;
  renderUnitModeControls();
  renderUnits();
});
closeDialogOnBackdrop(projectDialog);
closeDialogOnBackdrop(unitDialog);

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (!projectDialog.open) openProjectPicker();
  }
});
