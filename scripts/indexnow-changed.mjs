// Submit only the pages whose content changed since the last production deploy.
//
// Added 27 Oct 2026. Bing's IndexNow log showed nothing submitted between 4 March
// and 27 October, so ChatGPT, Copilot and Grok (which lean on Bing) were quoting
// pages from before the redesign. Runs from .github/workflows/indexnow.yml after
// Vercel reports a successful production deployment.
//
// How it decides "changed": every URL in the live sitemap is fetched and reduced
// to a fingerprint of (a) its visible markup and (b) its search metadata: JSON-LD,
// canonical and hreflang links, and the robots meta tag. Other scripts, styles,
// nonces and hashed /_next/static paths are stripped, because those change on
// every build even when the page did not. The first version stripped every
// script and link tag, so a JSON-LD-only or canonical-only change went unnoticed
// (caught in review, 27 Oct 2026).
//
// URLs that were in the previous sitemap and are gone now are submitted too, so
// search engines recrawl them and see the 404 or redirect.
//
// With no state file (first run, or GitHub evicted the cache after 7 days without
// a deploy) there is nothing to compare against. It then submits every URL whose
// sitemap <lastmod> falls in the last LASTMOD_FALLBACK_DAYS, says so as a CI
// warning, and records a fresh baseline.
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
const LASTMOD_FALLBACK_DAYS = 14;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const stateIndex = args.indexOf("--state");
const statePath = stateIndex >= 0 ? args[stateIndex + 1] : ".indexnow-state/fingerprints.json";

function fingerprint(html) {
  const seo = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
    ...html.matchAll(/<link\b[^>]*rel="(?:canonical|alternate)"[^>]*>/gi),
    ...html.matchAll(/<meta\b[^>]*name="robots"[^>]*>/gi),
  ].map(m => m[0].replace(/\snonce="[^"]*"/gi, ""));
  const visible = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/\snonce="[^"]*"/gi, "")
    .replace(/\/_next\/static\/[^"'\s)]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(seo.join("\n")).update("\n").update(visible).digest("hex");
}

async function fetchText(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000), headers: { "User-Agent": "pandacodegen-indexnow-check" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function fetchWithRetry(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fetchText(url);
    } catch (error) {
      if (attempt >= 3) throw error;
      await new Promise(resolve => setTimeout(resolve, 1500 * attempt));
    }
  }
}

const sitemap = await fetchWithRetry(`${BASE}/sitemap.xml`);
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => ({
  url: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1].trim(),
  lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1].trim(),
})).filter(e => e.url);
if (entries.length === 0) throw new Error("The live sitemap listed no URLs.");
const urls = entries.map(e => e.url);

const current = {};
const failed = [];
for (let i = 0; i < urls.length; i += CONCURRENCY) {
  await Promise.all(urls.slice(i, i + CONCURRENCY).map(async url => {
    try {
      current[url] = fingerprint(await fetchWithRetry(url));
    } catch (error) {
      failed.push(url);
      console.warn(`Skipped ${url}: ${error.message}`);
    }
  }));
}

const previous = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : null;
let toSubmit;
if (previous) {
  const changed = Object.keys(current).filter(url => previous[url] !== current[url]);
  const removed = Object.keys(previous).filter(url => !urls.includes(url));
  if (removed.length) console.log(`${removed.length} URL(s) left the sitemap:\n${removed.join("\n")}`);
  toSubmit = [...changed, ...removed];
} else {
  const cutoff = Date.now() - LASTMOD_FALLBACK_DAYS * 86_400_000;
  toSubmit = entries.filter(e => e.lastmod && Date.parse(e.lastmod) >= cutoff).map(e => e.url);
  console.log(`::warning::No previous IndexNow state (first run or evicted cache). Falling back to the ${toSubmit.length} sitemap URL(s) with lastmod in the last ${LASTMOD_FALLBACK_DAYS} days, and recording a new baseline.`);
}

// Keep the old fingerprint for pages that failed to load, so a temporary error
// does not make them look changed next time.
const next = { ...current };
for (const url of failed) if (previous?.[url]) next[url] = previous[url];

if (toSubmit.length === 0) {
  console.log(`Checked ${Object.keys(current).length} pages. Nothing to submit.`);
} else {
  console.log(`${toSubmit.length} URL(s) to submit:\n${toSubmit.join("\n")}`);
  if (dryRun) {
    console.log("Dry run: not submitted.");
  } else {
    for (let i = 0; i < toSubmit.length; i += BATCH) {
      const result = spawnSync(process.execPath, ["indexnow-ping.mjs", ...toSubmit.slice(i, i + BATCH)], { stdio: "inherit" });
      if (result.status !== 0) {
        // Leave the state untouched so the same pages are tried again next deploy.
        process.exit(1);
      }
    }
  }
}

if (!dryRun) {
  mkdirSync(dirname(statePath), { recursive: true });
  writeFileSync(statePath, JSON.stringify(next, null, 2));
}
