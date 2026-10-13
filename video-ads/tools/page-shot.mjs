// Screenshot any workspace page: node tools/page-shot.mjs <path> <out.png> [width] [height] [fullPage]
import { chromium } from "playwright-core";
import { startServer } from "./static-server.mjs";
const [path, out, w = "1280", h = "900", full = "1"] = process.argv.slice(2);
const { server, url } = await startServer(".");
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
await page.goto(`${url}/${path}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, fullPage: full === "1" });
await browser.close(); server.close();
