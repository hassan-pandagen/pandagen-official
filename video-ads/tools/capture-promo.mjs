// Captures the sections the website promo (Film 02) shows, from the redesigned site running
// locally (npx next dev -p 3001 in the repo root). Sections that name or picture the founders,
// quote clients, list client projects or carry "independent client" labels are left out on purpose
// (owner's direction, 13 Oct 2026). /services and /manifesto were checked and dropped for that reason.
// Usage: node tools/capture-promo.mjs [baseUrl] [outDir]
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = process.argv[2] || "http://localhost:3001";
const OUT = process.argv[3] || "films/02-website-promo/assets/site";
await mkdir(OUT, { recursive: true });

const HIDE = 'nextjs-portal,[data-cookie-control],button[aria-label^="Open Panda Assistant"]{display:none!important}';
const VP = {
  d: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 },
  m: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
};
// [file, viewport, path, what]. what = "top" (first screen), {heading, pad} (the <section> whose
// first heading starts with this text) or {clipTo: heading} (page top down to that heading's bottom).
const SHOTS = [
  ["home-head", "d", "/", { clipTo: "Websites built for the way you do business." }],
  ["home-services", "d", "/", { heading: "Engineered around how your business runs" }],
  ["home-automation", "d", "/", { heading: "You run the business. We automate the busywork." }],
  ["home-process", "d", "/", { heading: "From First Call to Launch." }],
  ["audit-top", "d", "/free-audit", "top"],
  ["blog-top", "d", "/blog", "top"],
  ["aiinfo-top", "d", "/ai-info", "top"],
  ["m-home-head", "m", "/", { clipTo: "Websites built for the way you do business." }],
  ["m-home-services", "m", "/", { heading: "Engineered around how your business runs" }],
  ["m-home-automation", "m", "/", { heading: "You run the business. We automate the busywork." }],
  ["m-home-process", "m", "/", { heading: "From First Call to Launch." }],
  ["m-audit-top", "m", "/free-audit", "top"],
];

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const ctxs = {};
for (const [k, o] of Object.entries(VP)) ctxs[k] = await browser.newContext({ ...o, reducedMotion: "reduce" });
const pages = {};
async function open(vp, path) {
  const key = vp + path;
  if (pages[key]) return pages[key];
  const page = await ctxs[vp].newPage();
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 180000 });
  await page.addStyleTag({ content: HIDE });
  for (const label of ["Reject non-essential", "Reject", "Decline", "Accept"]) {
    const b = page.getByRole("button", { name: new RegExp(`^${label}`, "i") }).first();
    if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); break; }
  }
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = VP[vp].viewport.height;
  for (let y = 0; y < h; y += vh / 2) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(80); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  return (pages[key] = page);
}
for (const [file, vp, path, what] of SHOTS) {
  const page = await open(vp, path);
  const W = VP[vp].viewport.width;
  let clip;
  if (what === "top") clip = { x: 0, y: 0, width: W, height: VP[vp].viewport.height };
  else clip = await page.evaluate(([w, W]) => {
    const hs = [...document.querySelectorAll("h1,h2")];
    const norm = (s) => s.replace(/\s+/g, " ").trim().toLowerCase();
    const h = hs.find((e) => norm(e.textContent).startsWith(norm(w.heading || w.clipTo)));
    if (!h) return null;
    if (w.clipTo) { const r = h.getBoundingClientRect(); return { x: 0, y: 0, width: W, height: Math.ceil(r.bottom + scrollY + 28) }; }
    const s = h.closest("section"); const r = s.getBoundingClientRect();
    return { x: 0, y: Math.floor(r.top + scrollY), width: W, height: Math.ceil(r.height) };
  }, [what, W]);
  if (!clip) { console.log("MISSING", file); continue; }
  await page.screenshot({ path: `${OUT}/${file}.png`, fullPage: true, clip });
  console.log("captured", file, JSON.stringify(clip));
}
await browser.close();
