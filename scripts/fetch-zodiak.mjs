// Downloads Zodiak Bold from Fontshare into public/fonts/zodiak/ before each build,
// so the site serves it from its own domain instead of visitors' browsers calling
// Fontshare (which sent every visitor's IP to a third party before any consent).
//
// Why a download and not a committed file: Zodiak's ITF Free Font License v2.0
// forbids making the font files available through a repository, and this repo is
// public on GitHub. The folder is gitignored, so the file only ever exists in the
// build output. The licence also forbids subsetting or converting the files, so
// the woff2 is saved byte for byte as Fontshare serves it.
//
// A failed download never fails the build: the page falls back to Georgia.
import { mkdir, writeFile, stat } from "node:fs/promises";

const CSS_URL = "https://api.fontshare.com/v2/css?f[]=zodiak@700&display=swap";
const OUT_DIR = new URL("../public/fonts/zodiak/", import.meta.url);
const OUT_FILE = new URL("zodiak-700.woff2", OUT_DIR);

async function main() {
  try {
    const existing = await stat(OUT_FILE).catch(() => null);
    if (existing && existing.size > 0) {
      console.log("[fetch-zodiak] already present, skipping");
      return;
    }
    const css = await (await fetch(CSS_URL)).text();
    const match = css.match(/url\('?(\/\/cdn\.fontshare\.com\/[^')]+\.woff2)'?\)/);
    if (!match) throw new Error("no woff2 URL in the Fontshare CSS");
    const res = await fetch(`https:${match[1]}`);
    if (!res.ok) throw new Error(`font download returned ${res.status}`);
    const bytes = Buffer.from(await res.arrayBuffer());
    await mkdir(OUT_DIR, { recursive: true });
    await writeFile(OUT_FILE, bytes);
    console.log(`[fetch-zodiak] saved ${bytes.length} bytes`);
  } catch (err) {
    console.warn(`[fetch-zodiak] WARNING: ${err.message}. Zodiak headings will fall back to Georgia.`);
  }
}

await main();
