// Captures the redesigned site running locally (npm run dev -- -p 3001 in the repo root).
// Usage: node tools/capture-screens.mjs [baseUrl]
// Output: screens/<slug>-<viewport>.png (viewport) and screens/<slug>-<viewport>-full.png (full page)
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";

const BASE = process.argv[2] || "http://localhost:3001";
const PAGES = [
  ["home", "/"],
  ["work-emblematic-studio", "/work/emblematic-studio"],
  ["work-ladies-4-jesus", "/work/ladies-4-jesus"],
  ["work", "/work"],
  ["contact", "/contact"],
];
const VIEWPORTS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 2, isMobile: false },
  mobile: { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
};

await mkdir("screens", { recursive: true });
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor, isMobile: vp.isMobile, hasTouch: vp.hasTouch, reducedMotion: "reduce" });
  for (const [slug, path] of PAGES) {
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 120000 });
    // Hide floating overlays that sit on top of the page rather than in it: the Next.js dev
    // badge (dev servers only), the cookie choices control and the assistant launcher button.
    // Page content, including the in-page assistant card, is left as is.
    await page.addStyleTag({ content: 'nextjs-portal,[data-cookie-control],button[aria-label^="Open Panda Assistant"]{display:none!important}' });
    // Dismiss the consent banner the way a visitor would, if present.
    for (const label of ["Reject non-essential", "Reject", "Decline", "Accept"]) {
      const b = page.getByRole("button", { name: new RegExp(`^${label}`, "i") }).first();
      if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); break; }
    }
    // Walk the page so lazy images and in-view reveals settle.
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += vp.height / 2) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(120); }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    await page.screenshot({ path: `screens/${slug}-${vpName}.png` });
    await page.screenshot({ path: `screens/${slug}-${vpName}-full.png`, fullPage: true });
    // The 9:16 film pans down the mobile homepage past the first viewport: keep its top 1200 CSS px.
    if (slug === "home" && vpName === "mobile") await page.screenshot({ path: "screens/home-mobile-top.png", fullPage: true, clip: { x: 0, y: 0, width: 390, height: 1200 } });
    console.log("captured", slug, vpName);
    await page.close();
  }
  await ctx.close();
}
await browser.close();
