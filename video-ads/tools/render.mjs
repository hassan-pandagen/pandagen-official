// Deterministic browser-to-video renderer for films 01–03.
//
//   node tools/render.mjs --film films/01-business-website --format 16x9 [--motion reduced]
//        [--fps 60] [--audio path.wav] [--out out.mp4] [--workers 3] [--crf 16]
//   node tools/render.mjs --film ... --format 9x16 --stills 1.2,5.5 --out-dir stills/
//
// Each frame: page.evaluate(seek(t)) then a CDP screenshot, piped as PNG to FFmpeg
// (libx264, yuv420p, BT.709). Frames are a pure function of t, so the work splits into
// contiguous segments rendered in parallel and joined without re-encoding.
import { chromium } from "playwright-core";
import { spawn } from "node:child_process";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { startServer } from "./static-server.mjs";

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, all) => (v.startsWith("--") ? [...a, [v.slice(2), all[i + 1] && !all[i + 1].startsWith("--") ? all[i + 1] : "1"]] : a), []));
const film = args.film, format = args.format || "16x9", motion = args.motion || "full";
const fps = +(args.fps || 60), crf = +(args.crf || 16), workers = +(args.workers || 3);
const SIZES = { "16x9": [1920, 1080], "9x16": [1080, 1920], "1x1": [1080, 1080] };
const [W, H] = SIZES[format];
const CHROME = process.env.CHROME_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const LAUNCH = ["--force-color-profile=srgb", "--font-render-hinting=none", "--disable-lcd-text", "--hide-scrollbars", "--disable-gpu", "--disable-partial-raster", "--deterministic-mode"];

const { server, url } = await startServer(".");
const browser = await chromium.launch({ executablePath: CHROME, args: LAUNCH });

async function openPage() {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => { console.error("page error:", e.message); process.exitCode = 1; });
  await page.goto(`${url}/${film}/index.html?format=${format}&motion=${motion}`, { waitUntil: "load" });
  await page.evaluate(() => window.__ready);
  const cdp = await page.context().newCDPSession(page);
  return { page, cdp };
}
async function frame(p, t) {
  await p.page.evaluate((tt) => window.seek(tt), t);
  const { data } = await p.cdp.send("Page.captureScreenshot", { format: "png", optimizeForSpeed: true, captureBeyondViewport: false });
  return Buffer.from(data, "base64");
}

if (args.stills) {
  const p = await openPage();
  const dir = args["out-dir"] || "stills";
  await mkdir(dir, { recursive: true });
  for (const s of args.stills.split(",")) {
    const t = +s;
    await writeFile(join(dir, `${format}${motion === "reduced" ? "-rm" : ""}-${t.toFixed(2)}.png`), await frame(p, t));
  }
  console.log("stills written to", dir);
} else {
  const duration = +(args.duration || (await (async () => { const p = await browser.newPage(); await p.goto(`${url}/${film}/index.html`); const d = await p.evaluate(() => TIMELINE.duration); await p.close(); return d; })()));
  const total = Math.round(duration * fps);
  const out = resolve(args.out || `${film}/render-${format}.mp4`);
  await mkdir(dirname(out), { recursive: true });
  const tmp = `${out}.parts`;
  await mkdir(tmp, { recursive: true });
  const enc = ["-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p", "-profile:v", "high",
    "-vf", "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-color_range", "tv"];
  const n = Math.max(1, Math.min(workers, total));
  const per = Math.ceil(total / n);
  const t0 = Date.now();
  let done = 0;
  await Promise.all(Array.from({ length: n }, async (_, w) => {
    const a = w * per, b = Math.min(total, a + per);
    if (a >= b) return;
    const p = await openPage();
    const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-", ...enc, "-r", String(fps), join(tmp, `part-${String(w).padStart(2, "0")}.mp4`)], { stdio: ["pipe", "inherit", "inherit"] });
    const closed = new Promise((ok, bad) => ff.on("close", (c) => (c === 0 ? ok() : bad(new Error(`ffmpeg exited ${c}`)))));
    for (let i = a; i < b; i++) {
      const buf = await frame(p, i / fps);
      if (!ff.stdin.write(buf)) await new Promise((ok) => ff.stdin.once("drain", ok));
      if (++done % 300 === 0) console.log(`${done}/${total} frames, ${((Date.now() - t0) / 1000).toFixed(0)} s`);
    }
    ff.stdin.end();
    await closed;
    await p.page.close();
  }));
  const list = Array.from({ length: n }, (_, w) => `file 'part-${String(w).padStart(2, "0")}.mp4'`).join("\n");
  await writeFile(join(tmp, "list.txt"), list + "\n");
  const mux = ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", join(tmp, "list.txt")];
  if (args.audio) mux.push("-i", args.audio, "-map", "0:v", "-map", "1:a", "-c:a", "aac", "-b:a", "256k", "-ar", "48000", "-shortest");
  mux.push("-c:v", "copy", "-movflags", "+faststart", out);
  await new Promise((ok, bad) => spawn("ffmpeg", mux, { stdio: "inherit" }).on("close", (c) => (c === 0 ? ok() : bad(new Error("mux failed")))));
  await rm(tmp, { recursive: true, force: true });
  console.log(`wrote ${out} (${total} frames at ${fps} fps) in ${((Date.now() - t0) / 1000).toFixed(0)} s`);
}
await browser.close();
server.close();
