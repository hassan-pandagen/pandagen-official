/**
 * Qualify outreach prospects: detect the stack, then score the page.
 *
 * SCORING SOURCE, in preference order
 *   1. PageSpeed Insights API, when PAGESPEED_API_KEY is set. This is the number
 *      a prospect sees when they check themselves at pagespeed.web.dev, which is
 *      the only number worth quoting to them.
 *   2. Local Lighthouse, when no key is set. Same engine, simulated throttling,
 *      but it is OUR run and not a PSI score. Never quote it as one.
 * Every row records which source produced it, because the distinction decides
 * whether a number can go in an email.
 *
 * WHY THREE RUNS
 * A single Lighthouse or PSI run is not a stable number. Measuring the same ten
 * sites twice on 28 Aug 2026 moved one from 49 to 39 and another from 38 to 50.
 * A prospect who checks a one-run figure and sees something else has caught you
 * being sloppy. Our own delivery standard is three recorded runs, so prospect
 * measurement uses the same rule and reports the median with the spread.
 *
 *   node audit_prospects.mjs                      # built-in candidate list
 *   node audit_prospects.mjs https://a.com ...    # specific URLs
 *   RUNS=1 node audit_prospects.mjs ...           # quick pass, spread unknown
 */
import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import fs from 'node:fs';

const KEY = process.env.PAGESPEED_API_KEY || '';
const RUNS = Math.max(1, Math.min(5, Number(process.env.RUNS || 3)));
const SOURCE = KEY ? 'PageSpeed Insights API' : 'local Lighthouse';

const DEFAULT_CANDIDATES = [
  'https://www.instituteplasticsurgery.com/',
  'https://centralohioplasticsurgery.com/',
  'https://sanantonioplasticsurgery.com/',
  'https://www.edinaplasticsurgery.com/',
  'https://yournashvilleplasticsurgeon.com/',
  'https://www.advancedcosmeticsurgerykc.com/',
  'https://myhoustonsurgeons.com/',
  'https://tcplasticsurgery.com/',
  'https://usaplasticsurgery.com/',
  'https://www.fortworthplasticsurgery.com/',
];

const CANDIDATES = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_CANDIDATES;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : Math.round((s[s.length / 2 - 1] + s[s.length / 2]) / 2);
};

async function detectStack(browser, url) {
  const ctx = await browser.newContext({ userAgent: UA });
  const page = await ctx.newPage();
  const out = { reachable: false };
  try {
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    out.status = res ? res.status() : null;
    out.reachable = Boolean(res && res.status() < 400);
    out.finalUrl = page.url();
    Object.assign(
      out,
      await page.evaluate(() => {
        const html = document.documentElement.innerHTML.toLowerCase();
        const gen = document.querySelector('meta[name="generator"]');
        const has = (s) => html.includes(s);
        return {
          title: document.title.slice(0, 68),
          generator: gen ? gen.content.slice(0, 50) : null,
          wordpress: has('/wp-content/') || has('/wp-includes/'),
          divi: has('/themes/divi') || has('et_pb_') || has('et-core'),
          elementor: has('elementor'),
          wpbakery: has('js_composer') || has('vc_row'),
          scripts: document.querySelectorAll('script[src]').length,
          images: document.querySelectorAll('img').length,
          lazyImages: document.querySelectorAll('img[loading="lazy"]').length,
        };
      })
    );
  } catch (err) {
    out.error = String(err.message || err).slice(0, 90);
  } finally {
    await ctx.close();
  }
  return out;
}

/** One PSI run. Returns the same shape as one Lighthouse run. */
async function scorePsi(url) {
  const api =
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}` +
    `&key=${KEY}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`;
  const res = await fetch(api);
  if (!res.ok) throw new Error(`PSI ${res.status}`);
  const lhr = (await res.json()).lighthouseResult;
  return shape(lhr);
}

async function scoreLighthouse(url, port) {
  const run = await lighthouse(
    url,
    { port, output: 'json', logLevel: 'error', screenEmulation: { mobile: true } },
    {
      extends: 'lighthouse:default',
      settings: { formFactor: 'mobile', onlyCategories: ['performance', 'seo', 'accessibility', 'best-practices'] },
    }
  );
  return shape(run.lhr);
}

function shape(lhr) {
  const c = lhr.categories || {};
  const a = lhr.audits || {};
  const pct = (k) => (c[k] && c[k].score !== null ? Math.round(c[k].score * 100) : null);
  const v = (k) => a[k]?.displayValue ?? null;
  return {
    performance: pct('performance'),
    seo: pct('seo'),
    accessibility: pct('accessibility'),
    bestPractices: pct('best-practices'),
    lcp: v('largest-contentful-paint'),
    tbt: v('total-blocking-time'),
    cls: v('cumulative-layout-shift'),
    weight: v('total-byte-weight'),
  };
}

const browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9333'] });
const results = [];

console.log(`scoring via ${SOURCE}, ${RUNS} run(s) per site, median reported\n`);

for (const url of CANDIDATES) {
  process.stdout.write(`  ${url.padEnd(48)} `);
  const stack = await detectStack(browser, url);
  if (!stack.reachable) {
    console.log(`unreachable (${stack.error ? stack.error.split('\n')[0] : stack.status})`);
    results.push({ url, source: SOURCE, ...stack });
    continue;
  }

  const target = stack.finalUrl || url;
  const runs = [];
  let failure = null;
  for (let i = 0; i < RUNS; i++) {
    try {
      runs.push(KEY ? await scorePsi(target) : await scoreLighthouse(target, 9333));
    } catch (err) {
      failure = String(err.message || err).slice(0, 70);
      break;
    }
  }

  if (!runs.length) {
    console.log(`score failed (${failure})`);
    results.push({ url, source: SOURCE, ...stack, error: failure });
    continue;
  }

  const perfs = runs.map((r) => r.performance).filter((n) => typeof n === 'number');
  const row = {
    url,
    source: SOURCE,
    ...stack,
    ...runs[runs.length - 1],
    performance: median(perfs),
    performanceRuns: perfs,
    performanceSpread: perfs.length > 1 ? Math.max(...perfs) - Math.min(...perfs) : null,
    runsCompleted: runs.length,
  };
  results.push(row);

  const builder = stack.divi ? 'Divi' : stack.elementor ? 'Elementor' : stack.wpbakery ? 'WPBakery' : stack.wordpress ? 'WP' : 'not WP';
  const spread = row.performanceSpread === null ? '' : ` (spread ${row.performanceSpread}, runs ${perfs.join('/')})`;
  console.log(`${builder.padEnd(9)} perf ${row.performance}${spread}`);
}

await browser.close();
fs.writeFileSync('prospect-audit.json', JSON.stringify({ source: SOURCE, runs: RUNS, results }, null, 2));

const scored = results.filter((r) => typeof r.performance === 'number');
const qualified = scored.filter((r) => r.wordpress && r.performance < 50).sort((a, b) => a.performance - b.performance);

console.log('\n' + '='.repeat(104));
console.log(`QUALIFIED  (WordPress or a page builder, median mobile performance under 50)   source: ${SOURCE}`);
console.log('='.repeat(104));
console.log(
  `${'site'.padEnd(34)} ${'builder'.padEnd(10)} ${'perf'.padEnd(5)} ${'+/-'.padEnd(4)} ${'SEO'.padEnd(4)} ${'a11y'.padEnd(5)} ${'LCP'.padEnd(9)} ${'TBT'.padEnd(9)} weight`
);
for (const r of qualified) {
  const host = new URL(r.url).host.replace(/^www\./, '');
  const builder = r.divi ? 'Divi' : r.elementor ? 'Elementor' : r.wpbakery ? 'WPBakery' : 'WP';
  console.log(
    `${host.slice(0, 34).padEnd(34)} ${builder.padEnd(10)} ${String(r.performance).padEnd(5)} ` +
      `${String(r.performanceSpread ?? '-').padEnd(4)} ${String(r.seo).padEnd(4)} ${String(r.accessibility).padEnd(5)} ` +
      `${String(r.lcp ?? '-').padEnd(9)} ${String(r.tbt ?? '-').padEnd(9)} ${r.weight ?? '-'}`
  );
}
console.log(`\nscored ${scored.length} of ${results.length}; ${qualified.length} qualified`);
if (!KEY) {
  console.log('\nNOTE: no PAGESPEED_API_KEY set, so these are local Lighthouse runs.');
  console.log('They are NOT PageSpeed Insights scores and must not be quoted as such.');
}
console.log('full data: scripts/scan/prospect-audit.json');
