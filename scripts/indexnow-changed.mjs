// Submit only the pages whose content changed since the last production deploy.
//
// Added 27 Oct 2026. Bing's IndexNow log showed nothing submitted between 4 March
// and 27 October, so ChatGPT, Copilot and Grok (which lean on Bing) were quoting
// pages from before the redesign. Runs from .github/workflows/indexnow.yml after
// Vercel reports a successful production deployment.
//
// How it decides "changed": every URL in the live sitemap is fetched and reduced
// to a fingerprint of its visible markup. Scripts, styles, nonces and hashed
// /_next/static paths are stripped first, because those change on every build
// even when the page itself did not. The fingerprints are compared with the
// previous run's, kept in the state file between runs by the workflow's cache.
//
// With no state file (the first run, or after the cache expires) it records a
// baseline and submits nothing. All 162 sitemap URLs were submitted by hand on
// 27 Oct 2026, so the baseline starts from a fresh Bing.
//
// Usage:
//   node scripts/indexnow-changed.mjs [--state <file>] [--dry-run]

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { spawnSync } from "node:child_process";

const BASE = "https://www.pandacodegen.com";
const BATCH = 100; // indexnow-ping.mjs accepts at most 100 URLs per run
const CONCURRENCY = 6;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const stateIndex = args.indexOf("--state");
const statePath = stateIndex >= 0 ? args[stateIndex + 1] : ".indexnow-state/fingerprints.json";

function fingerprint(html) {
  const visible = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/\snonce="[^"]*"/gi, "")
    .replace(/\/_next\/static\/[^"'\s)]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(visible).digest("hex");
}

async function fetchText(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000), headers: { "User-Agent": "pandacodegen-indexnow-check" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

const sitemap = await fetchText(`${BASE}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
if (urls.length === 0) throw new Error("The live sitemap listed no URLs.");

const current = {};
const failed = [];
for (let i = 0; i < urls.length; i += CONCURRENCY) {
  await Promise.all(urls.slice(i, i + CONCURRENCY).map(async url => {
    try {
      current[url] = fingerprint(await fetchText(url));
    } catch (error) {
      failed.push(url);
      console.warn(`Skipped ${url}: ${error.message}`);
    }
  }));
}

const previous = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : null;
const changed = previous ? Object.keys(current).filter(url => previous[url] !== current[url]) : [];

// Keep the old fingerprint for pages that failed to load, so a temporary error
// does not make them look new next time.
const next = { ...current };
for (const url of failed) if (previous?.[url]) next[url] = previous[url];

if (!previous) {
  console.log(`No previous state. Recorded a baseline of ${Object.keys(current).length} pages; nothing submitted.`);
} else if (changed.length === 0) {
  console.log(`Checked ${Object.keys(current).length} pages. None changed.`);
} else {
  console.log(`${changed.length} changed page(s):\n${changed.join("\n")}`);
  if (dryRun) {
    console.log("Dry run: not submitted.");
  } else {
    for (let i = 0; i < changed.length; i += BATCH) {
      const result = spawnSync(process.execPath, ["indexnow-ping.mjs", ...changed.slice(i, i + BATCH)], { stdio: "inherit" });
      if (result.status !== 0) {
        // Leave the state untouched so the same pages are tried again next deploy.
        process.exit(1);
      }
    }
  }
}

if (!dryRun || !previous) {
  mkdirSync(dirname(statePath), { recursive: true });
  writeFileSync(statePath, JSON.stringify(next, null, 2));
}
