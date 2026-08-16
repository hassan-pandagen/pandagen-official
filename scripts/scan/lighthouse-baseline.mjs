/**
 * Lighthouse capture for a before/after case study.
 *
 * WHY THIS EXISTS ALONGSIDE A PAGESPEED INSIGHTS SCREENSHOT
 * PSI is Google's own run, which makes it the more citable number, and it is
 * NOT reproducible by us: we cannot re-run Google's infrastructure on demand,
 * the free API is rate limited, and a screenshot is not a record anyone can
 * check. This runs Lighthouse locally so the after-capture is the same tool at
 * the same version against the same URLs.
 *
 * KEEP BOTH. Publish the PSI numbers as Google's reading with its date, and use
 * these for the before/after delta. Do NOT mix them in one comparison: local
 * Lighthouse and PSI apply throttling differently and will not agree exactly,
 * and comparing across them is the measurement error our own glossary warns
 * about.
 *
 * USAGE
 *   node lighthouse-baseline.mjs https://example.com/ [more urls...]
 *   Writes lighthouse-<host>-<formFactor>.json plus a summary to stdout.
 */
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const URLS = process.argv.slice(2);
if (!URLS.length) {
    console.error('usage: node lighthouse-baseline.mjs <url> [url...]');
    process.exit(1);
}

const CATEGORIES = ['performance', 'accessibility', 'best-practices', 'seo'];

const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
const out = { capturedAt: new Date().toISOString(), lighthouse: null, runs: [] };

for (const formFactor of ['mobile', 'desktop']) {
    for (const url of URLS) {
        const res = await lighthouse(url, {
            port: chrome.port,
            output: 'json',
            logLevel: 'error',
            onlyCategories: CATEGORIES,
            formFactor,
            screenEmulation: formFactor === 'desktop'
                ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }
                : { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
            throttlingMethod: 'simulate',
        });
        const lhr = res.lhr;
        out.lighthouse = lhr.lighthouseVersion;
        const scores = Object.fromEntries(
            CATEGORIES.map((c) => [c, lhr.categories[c] ? Math.round(lhr.categories[c].score * 100) : null])
        );
        const metric = (id) => lhr.audits[id]?.numericValue ?? null;
        const failed = Object.values(lhr.audits)
            .filter((a) => a.score !== null && a.score < 1 && a.scoreDisplayMode === 'binary')
            .map((a) => a.id);
        out.runs.push({
            url, formFactor, scores,
            metrics: {
                firstContentfulPaintMs: Math.round(metric('first-contentful-paint') ?? 0),
                largestContentfulPaintMs: Math.round(metric('largest-contentful-paint') ?? 0),
                totalBlockingTimeMs: Math.round(metric('total-blocking-time') ?? 0),
                cumulativeLayoutShift: Number((metric('cumulative-layout-shift') ?? 0).toFixed(3)),
                speedIndexMs: Math.round(metric('speed-index') ?? 0),
                timeToInteractiveMs: Math.round(metric('interactive') ?? 0),
                totalByteWeight: Math.round(metric('total-byte-weight') ?? 0),
            },
            failedAudits: failed,
        });
        process.stderr.write(`  ${formFactor.padEnd(7)} ${url}  perf ${scores.performance}\n`);
    }
}
await chrome.kill();

const host = new URL(URLS[0]).hostname.replace(/\./g, '-');
const file = path.join(HERE, `lighthouse-${host}.json`);
fs.writeFileSync(file, JSON.stringify(out, null, 2));
process.stderr.write(`\nwrote ${file}\n`);
