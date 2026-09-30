import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { photoFor, photoSources } from "./blog-photo-sources.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "blog-covers");
const source = await readFile(path.join(root, "src", "data", "blog.ts"), "utf8");
const matches = [...source.matchAll(/^\s*id:\s*"([^"]+)",/gm)];
const posts = matches.map((match, index) => {
  const segment = source.slice(match.index, matches[index + 1]?.index ?? source.length);
  const title = segment.match(/^\s*title:\s*"([^"]+)",/m)?.[1];
  const type = segment.match(/^\s*illustrationType:\s*["']([^"']+)["']/m)?.[1];
  if (!title || !type) throw new Error(`Missing cover metadata for ${match[1]}`);
  return { id: match[1], title, type };
});

function scenarioFor(post) {
  const id = post.id;
  if (/accessibility/.test(id)) return "accessibility";
  if (/security|plugin/.test(id)) return "security";
  if (/migrat|leaving|sunset|replace|redesign|rebuild/.test(id)) return "migration";
  if (/cost|pricing|cheap|bill|hosting|cheaper|5000/.test(id)) return "cost";
  if (/tracking|referral|revenue|conversion|orders|sales|ads|capi/.test(id)) return "analytics";
  if (/speed|slow|pagespeed|web-vitals|performance/.test(id)) return "performance";
  if (/seo|google|ranking|traffic|outranks|visibility|aeo|llms|agentic/.test(id)) return "search";
  if (/shopify|woocommerce|commerce|store/.test(id)) return "commerce";
  if (/agency|agencies|developer/.test(id)) return "agency";
  if (/wordpress|webflow|wix|squarespace|sanity|gohighlevel|cms|elementor/.test(id)) return "editor";
  return "architecture";
}

await mkdir(path.join(out, "og"), { recursive: true });
const manifest = [];
for (const post of posts) {
  const scenario = scenarioFor(post);
  const photo = photoFor(post, scenario);
  const sourcePhoto = path.join(root, "public", "blog-photo-sources", photoSources[photo]);
  const filename = `${post.id}.webp`;
  await sharp(sourcePhoto).resize(1200, 750, { fit: "cover", position: "attention" }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, filename));
  await sharp(sourcePhoto).resize(1200, 675, { fit: "cover", position: "attention" }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, "og", filename));
  manifest.push({ id: post.id, title: post.title, scenario, photo, subject: "editorial photograph", file: filename, ogFile: `og/${filename}` });
}
await writeFile(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Generated ${manifest.length} blog covers from ${new Set(manifest.map((entry) => entry.photo)).size} photographic sources in ${out}`);
