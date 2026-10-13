// Covers for the stack guides in src/data/stack-guides.ts (8 Oct 2026).
// generate-blog-covers.mjs reads only blog.ts, so these posts had no cover and their
// blog cards and social previews pointed at missing files. Each cover is cut from a
// public project screenshot already shown on the site, or from a source photo that no
// other post uses as its cover. Run with: node scripts/stack-guide-covers.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const covers = {
  "sanity-vs-wordpress": ["public/work/panda-patches-editor-blog.png", "top", { left: 352, top: 52, width: 1268, height: 862 }],
  "sanity-vs-supabase": ["public/work/a-step-above-medical-portal-dashboard.png", "left top"],
  "product-catalog-website-without-cart": ["public/work/emblematic-studio-library.png", "top"],
  "website-monthly-running-cost": ["assets/blog-photo-sources/server-cables.webp", "attention"],
};
for (const [id, [source, position, region]] of Object.entries(covers)) {
  // region: crop to the useful part of a wide screenshot first, so cards show the content.
  // The blog's featured card is narrower than the cover (about 1.27:1) and crops the sides,
  // so a region is shrunk into the middle 952px of a white canvas: every card crop keeps all of it.
  const input = region ? await sharp(path.join(root, source)).extract(region).toBuffer() : path.join(root, source);
  for (const [dir, height] of [["public/blog-covers", 750], ["public/blog-covers/og", 675]]) {
    const file = path.join(root, dir, `${id}.webp`);
    const img = region
      ? sharp({ create: { width: 1200, height, channels: 3, background: "#ffffff" } }).composite([{ input: await sharp(input).resize(952, height - 60, { fit: "inside" }).toBuffer(), gravity: "centre" }])
      : sharp(input).resize(1200, height, { fit: "cover", position });
    await img.webp({ quality: 80, effort: 5 }).toFile(file);
  }
  console.log("cover", id);
}
