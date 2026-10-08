import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const [id, source] = process.argv.slice(2);
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? "") || !source) {
  throw new Error("Usage: node scripts/import-generated-blog-photo.mjs ARTICLE_ID SOURCE_PNG");
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "blog-photo-sources", "unique");
await mkdir(out, { recursive: true });
await sharp(source).webp({ quality: 85, effort: 5 }).toFile(path.join(out, `${id}.webp`));
console.log(`Imported ${id}`);
