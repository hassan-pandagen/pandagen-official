/**
 * Scan OUR OWN pages for detectable accessibility failures.
 *
 * WHY THIS IS SEPARATE FROM scan.mjs
 * scan.mjs studies other people's sites in the aggregate and publishes
 * distributions. This one is an internal backlog: it names our own pages,
 * because we can act on ours.
 *
 * WHY IT EXISTS AT ALL
 * The 2026 pillar post on this site says low contrast is "a hex value" and
 * the most widespread accessibility failure on the web. The first run of
 * scan.mjs measured 15 contrast failures on our own home page. Publishing
 * research about a failure while shipping it is the single cheapest way to
 * lose the authority the research was meant to build.
 *
 * READS THE SITEMAP, so a new page is covered the moment it ships. Point it at
 * a local `next start` before pushing, or at production to confirm.
 *
 * USAGE
 *   node selfscan.mjs --base http://localhost:3111
 *   node selfscan.mjs --base https://www.pandacodegen.com --out report.json
 *   node selfscan.mjs --base http://localhost:3111 --skip-i18n
 */

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const AXE = fs.readFileSync(path.join(HERE, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8');
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const CONCURRENCY = 4;

const arg = (f, d = null) => {
    const i = process.argv.indexOf(f);
    return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : d;
};

async function sitemapPaths(base) {
    const res = await fetch(`${base}/sitemap.xml`);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    return urls.map((u) => new URL(u).pathname);
}

async function main() {
    const base = arg('--base', 'http://localhost:3111').replace(/\/$/, '');
    const outPath = arg('--out', null);
    const skipI18n = process.argv.includes('--skip-i18n');

    let paths = await sitemapPaths(base);
    if (skipI18n) paths = paths.filter((p) => !/^\/(fr|de)(\/|$)/.test(p));

    const browser = await chromium.launch({ headless: true });
    const results = [];
    const queue = [...paths];
    let done = 0;

    await Promise.all(
        Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
            while (queue.length) {
                const p = queue.shift();
                const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
                try {
                    await page.goto(base + p, { waitUntil: 'domcontentloaded', timeout: 30_000 });
                    await page.waitForTimeout(1500);
                    await page.addScriptTag({ content: AXE });
                    const r = await page.evaluate(
                        async (tags) => await window.axe.run(document, { runOnly: { type: 'tag', values: tags } }),
                        WCAG_TAGS
                    );
                    results.push({
                        path: p,
                        nodes: r.violations.reduce((a, v) => a + v.nodes.length, 0),
                        rules: Object.fromEntries(r.violations.map((v) => [v.id, v.nodes.length])),
                        pairs: r.violations
                            .filter((v) => v.id === 'color-contrast')
                            .flatMap((v) =>
                                v.nodes.map((n) => {
                                    const d = (n.any[0] && n.any[0].data) || {};
                                    return {
                                        fg: d.fgColor,
                                        bg: d.bgColor,
                                        ratio: d.contrastRatio,
                                        html: (n.html || '').replace(/\s+/g, ' ').slice(0, 120),
                                    };
                                })
                            ),
                    });
                } catch (e) {
                    results.push({ path: p, error: String(e.message).split('\n')[0].slice(0, 120) });
                }
                await page.close();
                done++;
                if (done % 10 === 0) process.stderr.write(`  ${done}/${paths.length}\n`);
            }
        })
    );
    await browser.close();

    const ok = results.filter((r) => !r.error);
    const clean = ok.filter((r) => r.nodes === 0);
    const failing = ok.filter((r) => r.nodes > 0).sort((a, b) => b.nodes - a.nodes);

    process.stderr.write(
        `\nscanned ${ok.length} pages (${results.length - ok.length} errors)\n` +
        `  clean:   ${clean.length}\n  failing: ${failing.length}\n` +
        `  total detected violation nodes: ${ok.reduce((a, r) => a + r.nodes, 0)}\n\n`
    );
    for (const f of failing.slice(0, 25)) {
        process.stderr.write(
            `  ${String(f.nodes).padStart(3)}  ${f.path}  ${Object.entries(f.rules).map(([k, v]) => k + ':' + v).join(' ')}\n`
        );
    }
    if (failing.length > 25) process.stderr.write(`  ... and ${failing.length - 25} more failing pages\n`);

    if (outPath) {
        fs.writeFileSync(outPath, JSON.stringify({ base, scannedAt: new Date().toISOString(), results }, null, 2));
        process.stderr.write(`\nwrote ${outPath}\n`);
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
