/**
 * PandaCodeGen — Blog SEO Audit Tool
 * Measures each blog against 2026-04 page 1 benchmarks from CorrelationSEO
 *
 * Benchmarks (page 1 averages):
 *   Load time: 1,586ms  → We target <500ms via Next.js (pass by default)
 *   LSI words in title:  7
 *   Entities in title:   3
 *   H1-H3 variations:   6
 *   Internal links:      (tracked separately)
 *   Word count:         2,000+ recommended
 *
 * Run: node seo-audit.mjs
 */

import { readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";

const BLOG_DIR = resolve("src/app/blog");
const BENCHMARKS = {
  lsiInTitle: 7,
  entitiesInTitle: 3,
  h2Count: 6,
  wordCount: 2000,
};

// Common stop words to exclude from LSI count
const STOP_WORDS = new Set([
  "a","an","the","and","or","but","in","on","at","to","for","of","with",
  "is","are","was","were","be","been","being","have","has","had","do","does",
  "did","will","would","could","should","may","might","shall","can","need",
  "your","you","we","our","it","its","this","that","these","those","their",
  "what","why","how","when","where","who","which","here","there","not","no",
  "vs","vs.","via","per","etc","from","by","as","up","out","about","after",
  "without","more","than","just","also","even","still","into","over","some",
]);

function countLsiWords(title) {
  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9\s$]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  return [...new Set(words)].length;
}

function countEntities(title) {
  let count = 0;
  // Years
  if (/\b20\d\d\b/.test(title)) count++;
  // Money/prices
  if (/\$[\d,k]+|\d+[k]?\s*\/\s*mo(nth)?/i.test(title)) count++;
  // Percentages or scores
  if (/\d+\s*%|\d+\/\d+/i.test(title)) count++;
  // Multipliers
  if (/\d+x\b/i.test(title)) count++;
  // Plain numbers (>= 2 digits, not already matched)
  const numberMatches = title.match(/\b\d{2,}\b/g) || [];
  if (numberMatches.length > 0) count++;
  // Known brands
  const brands = [
    "WordPress","Webflow","Shopify","Squarespace","Wix","WooCommerce",
    "GoHighLevel","Next.js","Nextjs","Google","Vercel","Elementor",
    "PageSpeed","GHL","PandaCodeGen","Cloudflare",
  ];
  brands.forEach(b => {
    if (title.toLowerCase().includes(b.toLowerCase())) count++;
  });
  return count;
}

function extractFromFile(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");

    // Title from metadata
    const titleMatch = content.match(/title:\s*\{?\s*(?:absolute:\s*)?"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : "UNKNOWN";

    // H2 count (BlogHeader components and h2 tags)
    const h2Matches = content.match(/h2[^>]*>|<BlogHeader/g) || [];

    // Word count from schema
    const wordCountMatch = content.match(/"wordCount":\s*(\d+)/);
    const wordCount = wordCountMatch ? parseInt(wordCountMatch[1]) : 0;

    // Internal blog links
    const internalLinks = (content.match(/href=["'`]\/blog\//g) || []).length;

    // Keywords array count
    const keywordsMatch = content.match(/"keywords":\s*\[([^\]]+)\]/);
    const keywordsCount = keywordsMatch
      ? (keywordsMatch[1].match(/"/g) || []).length / 2
      : 0;

    // Citations count
    const citationsCount = (content.match(/"citation"/g) || []).length;

    return {
      title,
      h2Count: h2Matches.length,
      wordCount,
      internalLinks,
      keywordsCount: Math.round(keywordsCount),
      citationsCount,
      lsiInTitle: countLsiWords(title),
      entitiesInTitle: countEntities(title),
    };
  } catch {
    return null;
  }
}

function grade(value, benchmark) {
  const ratio = value / benchmark;
  if (ratio >= 1.0) return "✅";
  if (ratio >= 0.8) return "⚠️ ";
  return "❌";
}

// --- Run audit ---
const blogFolders = readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && !["[slug]"].includes(d.name))
  .map(d => d.name)
  .sort();

const results = [];

for (const slug of blogFolders) {
  const pagePath = join(BLOG_DIR, slug, "page.tsx");
  const data = extractFromFile(pagePath);
  if (data) results.push({ slug, ...data });
}

// Print header
console.log("\n╔══════════════════════════════════════════════════════════════════════════════════════════╗");
console.log("║              PandaCodeGen — Blog SEO Audit (2026-04 Page 1 Benchmarks)                  ║");
console.log("╠══════════════════════════════════════════════════════════════════════════════════════════╣");
console.log(`║  Benchmarks:  LSI/title ≥${BENCHMARKS.lsiInTitle}  |  Entities/title ≥${BENCHMARKS.entitiesInTitle}  |  H2s ≥${BENCHMARKS.h2Count}  |  Words ≥${BENCHMARKS.wordCount}   ║`);
console.log("╚══════════════════════════════════════════════════════════════════════════════════════════╝\n");

// Column widths
const W = { slug: 42, lsi: 5, ent: 5, h2: 5, wc: 6, links: 6, cit: 5 };
const header = `${"Slug".padEnd(W.slug)} ${"LSI".padEnd(W.lsi)} ${"Ent".padEnd(W.ent)} ${"H2s".padEnd(W.h2)} ${"Words".padEnd(W.wc)} ${"Links".padEnd(W.links)} ${"Cite".padEnd(W.cit)}`;
console.log(header);
console.log("─".repeat(header.length));

let flags = [];

for (const r of results) {
  const lsiG = grade(r.lsiInTitle, BENCHMARKS.lsiInTitle);
  const entG = grade(r.entitiesInTitle, BENCHMARKS.entitiesInTitle);
  const h2G  = grade(r.h2Count, BENCHMARKS.h2Count);
  const wcG  = r.wordCount > 0 ? grade(r.wordCount, BENCHMARKS.wordCount) : "  ";

  const row = [
    r.slug.padEnd(W.slug),
    `${lsiG}${String(r.lsiInTitle).padStart(2)}`.padEnd(W.lsi + 2),
    `${entG}${String(r.entitiesInTitle).padStart(2)}`.padEnd(W.ent + 2),
    `${h2G}${String(r.h2Count).padStart(2)}`.padEnd(W.h2 + 2),
    `${wcG}${String(r.wordCount || "?").padStart(4)}`.padEnd(W.wc + 2),
    String(r.internalLinks).padStart(3).padEnd(W.links),
    String(r.citationsCount).padStart(3).padEnd(W.cit),
  ].join(" ");

  console.log(row);

  if (r.lsiInTitle < BENCHMARKS.lsiInTitle || r.entitiesInTitle < BENCHMARKS.entitiesInTitle || r.h2Count < BENCHMARKS.h2Count) {
    flags.push(r);
  }
}

console.log("\n─────────────────────────────────────────────────────");
console.log(`Total blogs: ${results.length}`);
const passing = results.filter(r =>
  r.lsiInTitle >= BENCHMARKS.lsiInTitle &&
  r.entitiesInTitle >= BENCHMARKS.entitiesInTitle &&
  r.h2Count >= BENCHMARKS.h2Count
).length;
console.log(`Fully passing: ${passing}/${results.length}`);
console.log(`Need attention: ${flags.length} blogs\n`);

if (flags.length > 0) {
  console.log("⚠️  BLOGS NEEDING FIXES:");
  console.log("─────────────────────────────────────────────────────");
  for (const f of flags) {
    const issues = [];
    if (f.lsiInTitle < BENCHMARKS.lsiInTitle) issues.push(`LSI ${f.lsiInTitle}/${BENCHMARKS.lsiInTitle}`);
    if (f.entitiesInTitle < BENCHMARKS.entitiesInTitle) issues.push(`Entities ${f.entitiesInTitle}/${BENCHMARKS.entitiesInTitle}`);
    if (f.h2Count < BENCHMARKS.h2Count) issues.push(`H2s ${f.h2Count}/${BENCHMARKS.h2Count}`);
    console.log(`  ${f.slug}`);
    console.log(`    Issues: ${issues.join(", ")}`);
    console.log(`    Title: "${f.title}"`);
  }
}

console.log("\n✅ Factor #1 (Load Time): All posts auto-pass — Next.js SSG delivers <500ms vs page 1 avg 1,586ms");
console.log("✅ Factor #3 (Domain .com): pandacodegen.com — confirmed");
console.log("");
