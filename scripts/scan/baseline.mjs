/**
 * Capture a "before" baseline for a site we are about to replace.
 *
 * Same browser and same axe build the post-launch measurement will use, because
 * comparing counts across tools is a measurement error rather than a result.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SCAN = HERE;
const AXE = fs.readFileSync(path.join(SCAN, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8');
const WCAG = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const TARGET = process.argv[2];
const PAGES = process.argv.slice(3);

async function measure(browser, url) {
    const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 } });
    const page = await ctx.newPage();
    const resources = [];
    page.on('response', async (r) => {
        try {
            const h = r.headers();
            resources.push({
                type: r.request().resourceType(),
                status: r.status(),
                bytes: Number(h['content-length'] || 0),
                url: r.url().slice(0, 120),
            });
        } catch { /* ignore */ }
    });

    const t0 = Date.now();
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
    await page.waitForLoadState('networkidle', { timeout: 30_000 }).catch(() => {});
    const wall = Date.now() - t0;
    await page.waitForTimeout(1500);

    const timing = await page.evaluate(() => {
        const n = performance.getEntriesByType('navigation')[0] || {};
        const lcp = performance.getEntriesByType('largest-contentful-paint').pop();
        const fcp = performance.getEntriesByName('first-contentful-paint')[0];
        return {
            ttfbMs: Math.round(n.responseStart || 0),
            domContentLoadedMs: Math.round(n.domContentLoadedEventEnd || 0),
            loadEventMs: Math.round(n.loadEventEnd || 0),
            firstContentfulPaintMs: fcp ? Math.round(fcp.startTime) : null,
            largestContentfulPaintMs: lcp ? Math.round(lcp.startTime) : null,
            domNodes: document.getElementsByTagName('*').length,
            scripts: document.querySelectorAll('script[src]').length,
            inlineScripts: document.querySelectorAll('script:not([src])').length,
            stylesheets: document.querySelectorAll('link[rel=stylesheet]').length,
            images: document.querySelectorAll('img').length,
            imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
            iframes: document.querySelectorAll('iframe').length,
            htmlBytes: document.documentElement.outerHTML.length,
        };
    });

    await page.addScriptTag({ content: AXE });
    const axe = await page.evaluate(
        async (tags) => {
            const r = await window.axe.run({ include: [['html']], exclude: [['iframe']] },
                { runOnly: { type: 'tag', values: tags }, iframes: false });
            return {
                nodes: r.violations.reduce((a, v) => a + v.nodes.length, 0),
                byRule: Object.fromEntries(r.violations.map((v) => [v.id, v.nodes.length])),
                axeVersion: r.testEngine.version,
            };
        }, WCAG);

    const byType = {};
    let total = 0;
    for (const r of resources) {
        byType[r.type] = byType[r.type] || { count: 0, bytes: 0 };
        byType[r.type].count++; byType[r.type].bytes += r.bytes; total += r.bytes;
    }
    const shot = url.replace(/[^a-z0-9]+/gi, '-').slice(0, 60) + '.png';
    await page.screenshot({ path: path.join(HERE, shot), fullPage: false });
    await ctx.close();
    return { url, finalUrl: page.url(), wallClockMs: wall, timing, axe,
             requests: resources.length, transferredBytes: total, byType, screenshot: shot };
}

const browser = await chromium.launch({ headless: true });
const out = { capturedAt: new Date().toISOString().slice(0, 10), browser: browser.version(), target: TARGET, pages: [] };
for (const p of [TARGET, ...PAGES]) {
    process.stderr.write(`measuring ${p}\n`);
    try { out.pages.push(await measure(browser, p)); }
    catch (e) { out.pages.push({ url: p, error: String(e.message).split('\n')[0] }); }
}
await browser.close();
fs.writeFileSync(path.join(HERE, 'baseline.json'), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2).slice(0, 400));
process.stderr.write('\nwrote baseline.json\n');
