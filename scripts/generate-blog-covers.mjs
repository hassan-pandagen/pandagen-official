import { access, readFile, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
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

// Keep one photograph from each source. These are the articles where that
// photograph has the clearest subject match or was specifically approved.
const preferredPhotoArticle = {
  "site-plan": "ai-built-website-checklist",
  "stopwatch-phone": "core-web-vitals-explained",
  "invoice-detail": "is-it-cheaper-to-build-your-own-website",
  "code-notes": "nextjs-sanity-stack",
  "google-screen": "lovable-site-not-showing-on-google",
  "wordpress-screen": "wordpress-april-2026-evidence",
  // 4 Oct 2026: why-is-my-website-loading-so-slow was merged into how-to-speed-up-your-website
  // and removed. Nobody keeps this photo now, so no remaining cover changes on a re-run.
  "server-cables": null,
  "wireframe-wall": "how-long-does-a-custom-website-take",
  "migration-board": "wordpress-migration-cost",
  "parcel-bench": "shopify-stocky-sunset-date-2026",
  "performance-alt": "how-to-achieve-100-pagespeed",
  "search-closeup": "how-website-speed-affects-seo",
  "contract-handover": "do-you-own-your-website",
  "agency-room": "for-agencies-offer-custom-web-development",
  "analytics-print": "ai-referral-revenue-2026",
  "plugin-papers": "wordpress-plugin-security-2026",
  "performance": "wix-too-slow",
  "shopify": "shopify-store-speed-optimization",
  "subscription-papers": "saas-price-increases-2026-tracker",
  "pricing": "webflow-true-cost",
};

const articlesByPhoto = Map.groupBy(posts, (post) => photoFor(post));
const photoKeeper = new Map();
for (const [photo, articles] of articlesByPhoto) {
  const preferred = preferredPhotoArticle[photo];
  if (preferred === null) continue; // deliberately no keeper, see the map above
  const keeper = preferred ? articles.find((article) => article.id === preferred) : articles[0];
  if (!keeper) throw new Error(`Preferred article ${preferred} does not use photo ${photo}`);
  photoKeeper.set(photo, keeper.id);
}

await mkdir(path.join(out, "og"), { recursive: true });
const manifest = [];
for (const post of posts) {
  const scenario = scenarioFor(post);
  const photo = photoFor(post);
  const keepPhoto = photoKeeper.get(photo) === post.id && post.id !== "how-to-speed-up-your-website";
  const filename = `${post.id}.webp`;
  const sourcePhoto = keepPhoto
    ? path.join(root, "public", "blog-photo-sources", photoSources[photo])
    : path.join(root, "public", "blog-photo-sources", "unique", filename);
  try {
    await access(sourcePhoto);
  } catch {
    throw new Error(`Missing editorial photo for ${post.id}: ${sourcePhoto}`);
  }
  await sharp(sourcePhoto).resize(1200, 750, { fit: "cover", position: "attention" }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, filename));
  await sharp(sourcePhoto).resize(1200, 675, { fit: "cover", position: "attention" }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, "og", filename));
  manifest.push({ id: post.id, title: post.title, scenario, photo: keepPhoto ? photo : `unique/${filename}`, subject: keepPhoto ? "editorial photograph" : "generated editorial photograph", file: filename, ogFile: `og/${filename}` });
}
for (const folder of [out, path.join(out, "og")]) {
  const hashes = await Promise.all(manifest.map(async ({ file }) =>
    createHash("sha256").update(await readFile(path.join(folder, file))).digest("hex"),
  ));
  if (new Set(hashes).size !== manifest.length) throw new Error(`Repeated cover in ${folder}`);
}
await writeFile(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Generated ${manifest.length} unique photographic blog covers (${manifest.filter((entry) => entry.photo.startsWith("unique/")).length} newly generated) in ${out}`);
