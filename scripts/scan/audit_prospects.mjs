/**
 * Qualify outreach prospects: detect the stack, then score with Lighthouse.
 *
 * WHY LIGHTHOUSE LOCALLY AND NOT THE PAGESPEED API
 * The PageSpeed Insights API needs a key for anything past a trickle; keyless
 * requests return 429 immediately. Lighthouse is the same engine PSI runs, and
 * with simulated throttling the mobile performance score is reproducible from
 * any connection, because the network is modelled rather than measured. The
 * number is therefore comparable to a PSI score but is NOT one, and must be
 * labelled as our own run with its date. Never send it to a prospect as
 * "your PageSpeed Insights score".
 *
 * Playwright detects WordPress and the page builder, which is the qualification
 * filter: an old builder-driven WordPress site is the profile worth contacting.
 *
 *   node audit_prospects.mjs                 # audit the built-in candidate list
 *   node audit_prospects.mjs https://a.com   # audit specific URLs
 */
import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import fs from 'node:fs';

const DEFAULT_CANDIDATES = [
  'https://www.tcplasticsurgery.com/',
  'https://omnicosmetic.com/',
  'https://www.edinaplasticsurgery.com/',
  'https://sanantonioplasticsurgery.com/',
  'https://www.fortworthplasticsurgery.com/',
  'https://usaplasticsurgery.com/',
  'https://myhoustonsurgeons.com/',
  'https://www.mybeautifulbody.com/',
  'https://www.goplasticsurgeon.com/',
  'https://www.plasticsurgeryarts.com/',
  'https://www.austin-plasticsurgery.com/',
  'https://www.thplasticsurgery.com/',
];

const CANDIDATES = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_CANDIDATES;
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

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
          jquery: has('jquery'),
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

async function score(url, port) {
  try {
    const run = await lighthouse(
      url,
      { port, output: 'json', logLevel: 'error', screenEmulation: { mobile: true } },
      {
        extends: 'lighthouse:default',
        settings: { formFactor: 'mobile', onlyCategories: ['performance', 'seo', 'accessibility'] },
      }
    );
    const r = run.lhr;
    const v = (k) => r.audits[k]?.displayValue ?? null;
    return {
      performance: Math.round((r.categories.performance?.score ?? 0) * 100),
      seo: Math.round((r.categories.seo?.score ?? 0) * 100),
      accessibility: Math.round((r.categories.accessibility?.score ?? 0) * 100),
      lcp: v('largest-contentful-paint'),
      tbt: v('total-blocking-time'),
      cls: v('cumulative-layout-shift'),
      weight: v('total-byte-weight'),
    };
  } catch (err) {
    return { error: String(err.message || err).slice(0, 80) };
  }
}

const browser = await chromium.launch({ headless: true, args: ['--remote-debugging-port=9333'] });
const results = [];

for (const url of CANDIDATES) {
  process.stdout.write(`  ${url.padEnd(46)} `);
  const stack = await detectStack(browser, url);
  if (!stack.reachable) {
    console.log(`unreachable (${stack.error || stack.status})`);
    results.push({ url, ...stack });
    continue;
  }
  const s = await score(stack.finalUrl || url, 9333);
  results.push({ url, ...stack, ...s });
  const builder = stack.divi
    ? 'Divi'
    : stack.elementor
      ? 'Elementor'
      : stack.wpbakery
        ? 'WPBakery'
        : stack.wordpress
          ? 'WP'
          : 'not WP';
  console.log(`${builder.padEnd(9)} perf ${s.performance ?? s.error}`);
}

await browser.close();
fs.writeFileSync('prospect-audit.json', JSON.stringify(results, null, 2));

const scored = results.filter((r) => typeof r.performance === 'number');
const qualified = scored.filter((r) => r.wordpress && r.performance < 50).sort((a, b) => a.performance - b.performance);

console.log('\n' + '='.repeat(100));
console.log(`QUALIFIED  (WordPress or a page builder, mobile performance under 50)`);
console.log('='.repeat(100));
console.log(
  `${'site'.padEnd(34)} ${'builder'.padEnd(10)} ${'perf'.padEnd(5)} ${'SEO'.padEnd(4)} ${'a11y'.padEnd(5)} ${'LCP'.padEnd(9)} ${'TBT'.padEnd(9)} ${'weight'.padEnd(10)} scripts`
);
for (const r of qualified) {
  const host = new URL(r.url).host.replace(/^www\./, '');
  const builder = r.divi ? 'Divi' : r.elementor ? 'Elementor' : r.wpbakery ? 'WPBakery' : 'WP';
  console.log(
    `${host.slice(0, 34).padEnd(34)} ${builder.padEnd(10)} ${String(r.performance).padEnd(5)} ${String(r.seo).padEnd(4)} ` +
      `${String(r.accessibility).padEnd(5)} ${String(r.lcp ?? '-').padEnd(9)} ${String(r.tbt ?? '-').padEnd(9)} ` +
      `${String(r.weight ?? '-').padEnd(10)} ${r.scripts ?? '-'}`
  );
}
console.log(`\nscored ${scored.length} of ${results.length}; ${qualified.length} qualified`);
console.log('full data: scripts/scan/prospect-audit.json');
