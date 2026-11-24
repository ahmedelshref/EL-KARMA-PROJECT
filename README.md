# EL KARMA PROJECTS

Standalone, lightweight project and unit directory for El Karma Group. This folder is separate from the existing `EL KARMA COLECTION` website and the CRM repository.

## Current preview

- Open `index.html` directly, or serve this folder with a static HTTP server.
- The default unit view and project summary show only units marked `متاحة`. The mode button switches to every unit and back.
- The project picker, unit search, unit details, and confirmed local plan images work without a backend.
- Unit details can share a plan image through the device share sheet when supported, or download it for manual attachment. The unit message is formatted as copy-ready icon-led rows, includes available unit facts and payment amounts, and labels missing local details rather than guessing.
- Project and unit details show the loading rate, net area after loading, and maintenance-deposit rate when provided. Net area is calculated as gross area × (1 − loading rate ÷ 100); the maintenance deposit is shown as a rate only because no monetary calculation basis was supplied. Unknown rates remain marked pending and are kept separate from the installment-plan maintenance fee.
- Unit payment breakdowns use the unit's pre-discount price and the project's recorded rates/term; installments are shown at the recorded cadence (monthly or quarterly) and are marked estimated. A delivery date is shown when present; the current snapshot has no delivery dates and asks sales to confirm.
- The header uses a local El Karma mark. CSS entrance and hover animations stay subtle and respect the device's `prefers-reduced-motion` setting.
- Six quiet background cards cycle through every project name; each card drops out before the next name enters, and the cycle stops when reduced motion is requested.
- The unit grid uses one column up to 480px, two from 481–900px, three from 901–1199px, and four from 1200px. Unit details switch to a single column through 900px, and short landscape viewports use a compact landing layout.
- `data.js` is a minified local snapshot exported from `AI_PriceList/data.js` on 2026-11-23: 11 projects and 924 units, including the fields present in that source.
- Loading and maintenance-deposit terms are maintained separately in `app.js`; current rates were received for Karma La Vida, Karnak, El Hijaz Hub, EL HADABA POINT, and Sevana. Sevana is not present in the current 11-project snapshot, so its rates will display only when that project is added to the source data.
- The directory is not connected to the CRM or a live price-list API. Verify local prices and availability before using the information externally.

## Verification

- `node --check app.js` and `node --check data.js` pass.
- Browser flow checked: open the project picker, search/select a project, filter units, open unit details, display a mapped Ibiza plan, and show the missing-plan state for a unit without a confirmed image.
- Default-available and show-all modes checked against the local status data.
- Responsive layouts were checked from 320 × 568 phones through 2560 × 1440 displays, including landscape phones and short desktop viewports. No horizontal overflow or landing/header overlap appeared; grid thresholds were checked at 320, 568, 768, 1024, 1199, 1200, and 1920px. Project/unit dialogs stayed within the viewport and remained scrollable when needed.

## Plans and drawings

The verified batches from `D:\مشاريع الكرمة` add 59 local plan images, with 107 explicit unit matches. For an otherwise-unmapped unit, the directory may reuse a plan only from the same project and exact same area; an explicit unit match always takes precedence. The first existing mapped plan for that project-area pair is used, and the details dialog labels it as a reused layout. This adds 131 same-project/area matches, for 238 units with a plan image across the six mapped projects.

- Karnak: 19 drawings have 67 explicit unit matches; other units with a matching area in Karnak can reuse a mapped image.
- Talia Al-Hadaba: B01–B08 have 8 explicit matches; same-project, same-area units may reuse those images.
- Ibiza Bay: 8 drawings from its branded `Layout` folder have 8 explicit matches; same-project, same-area units may reuse them.
- Golden Home 2: 101–106 have 6 explicit matches; same-project, same-area units may reuse them.
- Jawhara Point: 12–16 have 5 explicit matches; same-project, same-area units may reuse them.
- Inter Point: 14–24 and 26–27 have 13 explicit matches; same-project, same-area units may reuse them.

Large Talia, Jawhara, Inter Point, and Golden Home 2 source images were resized and recompressed for the nearly-full C: drive; the D: source files were left untouched. Other projects and unmatched units still show the unavailable-plan state. The previous Ibiza Bay mappings for images branded `SOLANA HURGHADA RESORT` were removed from the lookup rather than assuming that Solana and Ibiza Bay are the same project. Those existing local files remain in place but are not linked pending confirmation.

The original image mappings were checked against their project source, any visible branding, printed unit codes, and areas. Never reuse an image across projects or across different areas. An exact unit mapping wins; otherwise the app uses an existing mapped image for the same project and exact numeric area. Areas without a mapped source in their project remain unavailable. The five projects with no confirmed source images in this batch (SOLARIA, EL HADABA POINT, Karma La Vida, El Hijaz Hub, and Golden Home 1) still need their own project layouts; an image from another project must not be used. The current share buttons use the browser/device share sheet when available; otherwise the plan is downloaded and the unit message is copied or shown ready to copy.

### Sevana area layouts

Sevana uses exact-area reuse for repeated units across floors and unit blocks. The Layout folder PDFs are rendered into optimized JPG files inside `assets/sevana-layouts/` for 25, 49, 51, 52, 56, 59, 65, 70, 95, and 139 square meters. A single source mapping per area supplies the matching complete layout to every Sevana unit with that exact area, including units on repeated floors or in repeated unit blocks. Sevana areas 45, 50, 55, 60, and 110 remain unavailable until a confirmed matching layout PDF is provided.

### Layout display

Unit layouts keep their original aspect ratio and are classified from the image dimensions as portrait, square, or wide. Portrait plans are centered with a bounded height, wide plans use the available width, and square plans use a controlled centered width. Clicking or keyboard-activating the image opens a full-screen, `object-fit: contain` preview; this preserves the complete layout and prevents cropping or distortion.

## Files

- `index.html` — landing page, project picker, project/unit views, and details dialog.
- `styles.css` — responsive visual design.
- `app.js` — project selection, search, filters, detail rendering, and plan lookup.
- `data.js` — generated local project/unit snapshot.
- `assets/brand/el-karma-mark.png` — local company mark used in the header.
- `assets/` project subfolders — local plan images referenced by the verified mappings.

## Control panel

- Start locally with `npm start`, then open `http://localhost:3000`.
- Open **لوحة التحكم**, enter the `ADMIN_PASSWORD` value, and edit project or unit fields.
- Project and unit changes are written to `data.json` and returned by `GET /api/projects`, so every device receives the current server data.
- The public website should be deployed with `npm start`, not as a plain static site, so the save APIs remain available.
- Set `ADMIN_PASSWORD` in Render environment variables. Do not rely on the built-in fallback password.
- For permanent data storage across Render restarts/deploys, mount a Render persistent disk and set `DATA_FILE` to a path inside that disk, for example `/var/data/el-karma-data.json`.
- Project editing now includes loading rate and maintenance-deposit rate in addition to payment-plan fields.
- The admin panel can import a new project from `.xlsx`, `.xls`, `.csv`, or `.json`. Excel/CSV imports detect Arabic or English unit-number, area, type, view/floor, meter-price, total-price, and status columns. JSON imports accept a unit array or an object containing a `units` array.
