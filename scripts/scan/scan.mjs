/**
 * Accessibility scanner for the PandaCodeGen sector scan.
 *
 * WHY THIS EXISTS
 * The WebAIM Million tests one million HOME pages. Our own pillar post says in
 * print that this is the limitation that matters most: "the pages where
 * accessibility failures actually cost someone something are checkouts, booking
 * forms, account settings and search results, and none of those are in this
 * data." Nobody publishes that measurement. This produces it.
 *
 * So every run measures TWO pages per site: the home page, and the highest
 * transactional-intent page reachable from it (contact, booking, quote, get a
 * demo). The home page is not the finding. The DELTA is the finding, and the
 * home page is there so the delta can be computed against a baseline that a
 * reader can check against WebAIM's published figure.
 *
 * WHAT THIS IS NOT
 * It is not a conformance audit of anybody's site. axe-core detects a subset of
 * WCAG failures, exactly as WAVE does for the WebAIM Million. Nothing here may
 * be published as "site X is inaccessible" or "site X is non-conformant". The
 * unit of publication is the aggregate, and the limitation ships with it.
 *
 * NAMED SITES ARE NEVER PUBLISHED INDIVIDUALLY. The raw results keep hostnames
 * so a run is auditable and re-runnable, but the report publishes distributions.
 * Publishing a league table of named businesses' failures is a different product
 * with different ethics, and it is not this one.
 *
 * DETERMINISM AND HONESTY
 *  - Every run records the axe version, the browser version, the WCAG tag set,
 *    the viewport, the date, and the per-URL outcome INCLUDING failures.
 *  - Sites that could not be measured are recorded as errors and counted in the
 *    denominator disclosure. Silently dropping unreachable sites would bias the
 *    result toward sites that are well-run in every other respect too.
 *  - No retries beyond the configured count, and the count is recorded.
 *
 * USAGE
 *   node scan.mjs --sample sample.json --out ../../src/data/scan/<date>.json
 *   node scan.mjs --sample sample.json --limit 10        # pilot
 */

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const AXE_SOURCE = fs.readFileSync(
    path.join(HERE, 'node_modules', 'axe-core', 'axe.min.js'),
    'utf8'
);

/** The conformance target the study measures against. Recorded in every result. */
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const CONFIG = {
    viewport: { width: 1366, height: 900 },
    navTimeoutMs: 30_000,
    settleMs: 2_000,
    retries: 1,
    concurrency: 4,
    userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/151.0.0.0 Safari/537.36 PandaCodeGenA11yScan/1.0 (+https://www.pandacodegen.com/editorial-policy)',
};

/**
 * Patterns for the transactional page, most specific first.
 *
 * Ordered on purpose: a site with both /book and /contact is measured on /book,
 * because a booking flow is the higher-intent surface and the one where a
 * failure costs the business money directly. Recorded per result as `matchedBy`
 * so the choice is auditable rather than opaque.
 */
const INTENT_PATTERNS = [
    { name: 'booking', re: /\b(book|booking|schedule|appointment|reserve)\b/i },
    { name: 'quote', re: /\b(quote|estimate|get-started|get_started|start-project)\b/i },
    { name: 'demo', re: /\b(demo|request-demo|talk-to-sales|contact-sales)\b/i },
    { name: 'contact', re: /\b(contact|enquir|inquir|get-in-touch)\b/i },
];

function arg(flag, fallback = null) {
    const i = process.argv.indexOf(flag);
    return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

/** axe result -> the small, stable shape the report renders from. */
function summarise(result) {
    const byRule = {};
    let nodes = 0;
    for (const v of result.violations) {
        byRule[v.id] = { impact: v.impact, nodes: v.nodes.length, tags: v.tags };
        nodes += v.nodes.length;
    }
    return {
        violationTypes: result.violations.length,
        violationNodes: nodes,
        // The three failure types the WebAIM data is dominated by, isolated so
        // the report can compare like with like against the published figure.
        contrast: result.violations.find((v) => v.id === 'color-contrast')?.nodes.length ?? 0,
        missingAltText: result.violations.find((v) => v.id === 'image-alt')?.nodes.length ?? 0,
        unlabelledFormFields:
            (result.violations.find((v) => v.id === 'label')?.nodes.length ?? 0) +
            (result.violations.find((v) => v.id === 'select-name')?.nodes.length ?? 0),
        formFieldCount: result.formFieldCount,
        byRule,
    };
}

async function auditPage(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: CONFIG.navTimeoutMs });
    await page.waitForTimeout(CONFIG.settleMs);
    await page.addScriptTag({ content: AXE_SOURCE });
    const result = await page.evaluate(async (tags) => {
        const r = await window.axe.run(document, { runOnly: { type: 'tag', values: tags } });
        r.formFieldCount = document.querySelectorAll(
            'input:not([type=hidden]):not([type=submit]):not([type=button]), select, textarea'
        ).length;
        return r;
    }, WCAG_TAGS);
    return { summary: summarise(result), axeVersion: result.testEngine.version, finalUrl: page.url() };
}

/** Find the highest-intent internal page linked from the home page. */
async function findIntentPage(page, origin) {
    const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a[href]')).map((a) => ({
            href: a.href,
            text: (a.textContent || '').trim().slice(0, 80),
        }))
    );
    const sameOrigin = links.filter((l) => {
        try {
            return new URL(l.href).origin === origin;
        } catch {
            return false;
        }
    });
    for (const pattern of INTENT_PATTERNS) {
        const hit = sameOrigin.find((l) => pattern.re.test(l.href) || pattern.re.test(l.text));
        if (hit) return { url: hit.href, matchedBy: pattern.name, anchorText: hit.text };
    }
    return null;
}

async function scanSite(browser, site) {
    const record = { site: site.url, label: site.label ?? null, home: null, intent: null, error: null };
    const context = await browser.newContext({
        viewport: CONFIG.viewport,
        userAgent: CONFIG.userAgent,
        ignoreHTTPSErrors: false,
    });
    const page = await context.newPage();
    try {
        try {
            record.home = await auditPage(page, site.url);
        } catch (first) {
            const wwwUrl = site.url.replace(/^https:\/\/(?!www\.)/, 'https://www.');
            if (wwwUrl === site.url) throw first;
            record.home = await auditPage(page, wwwUrl);
            record.usedWww = true;
        }
        const origin = new URL(page.url()).origin;
        const target = await findIntentPage(page, origin);
        if (!target) {
            record.intent = { skipped: 'no-intent-page-found' };
        } else {
            const audited = await auditPage(page, target.url);
            record.intent = { ...audited, matchedBy: target.matchedBy, anchorText: target.anchorText };
        }
    } catch (e) {
        const msg = String(e.message).split('\n')[0].slice(0, 200);
        record.error = msg;
        // Tranco ranks by DNS resolution volume, so a large share of any band is
        // CDN, telemetry and nameserver domains that serve no page at all. Those
        // are OUT OF SCOPE, not measurement failures, and reporting them as
        // failures would make our own harness look flaky when it is not.
        record.notAWebsite = /ERR_NAME_NOT_RESOLVED|ERR_CONNECTION_REFUSED|ERR_CONNECTION_RESET/.test(msg);
    } finally {
        await context.close();
    }
    return record;
}

async function main() {
    const samplePath = arg('--sample', path.join(HERE, 'sample.json'));
    const outPath = arg('--out', null);
    const limit = Number(arg('--limit', '0')) || 0;

    const sample = JSON.parse(fs.readFileSync(samplePath, 'utf8'));
    const sites = limit ? sample.sites.slice(0, limit) : sample.sites;

    const browser = await chromium.launch({ headless: true });
    const version = browser.version();
    const results = [];
    let done = 0;

    const queue = [...sites];
    const workers = Array.from({ length: Math.min(CONFIG.concurrency, queue.length) }, async () => {
        while (queue.length) {
            const site = queue.shift();
            let record = null;
            for (let attempt = 0; attempt <= CONFIG.retries; attempt++) {
                record = await scanSite(browser, site);
                if (!record.error) break;
            }
            results.push(record);
            done++;
            process.stderr.write(
                `  [${String(done).padStart(3)}/${sites.length}] ${record.error ? 'ERR ' : 'ok  '}${site.url}\n`
            );
        }
    });
    await Promise.all(workers);
    await browser.close();

    const measured = results.filter((r) => !r.error);
    const withIntent = measured.filter((r) => r.intent && !r.intent.skipped);
    const notWebsites = results.filter((r) => r.notAWebsite);

    const run = {
        $comment: [
            'RAW OUTPUT OF scripts/scan/scan.mjs. Not for direct publication.',
            'axe-core detects a SUBSET of WCAG failures. A page with no detected',
            'violations is not necessarily conformant. Never publish a named site.',
            'Sites that could not be measured are retained above, and the',
            'denominator disclosure below must ship with any figure derived here.',
        ],
        method: {
            tool: 'axe-core',
            axeVersion: measured[0]?.home?.axeVersion ?? null,
            browser: version,
            wcagTags: WCAG_TAGS,
            viewport: CONFIG.viewport,
            settleMs: CONFIG.settleMs,
            navTimeoutMs: CONFIG.navTimeoutMs,
            retries: CONFIG.retries,
            intentPatternOrder: INTENT_PATTERNS.map((p) => p.name),
            sample: { file: path.basename(samplePath), frame: sample.frame, definedAt: sample.definedAt },
        },
        denominator: {
            attempted: sites.length,
            measured: measured.length,
            notAWebsite: notWebsites.length,
            failedToLoad: results.length - measured.length - notWebsites.length,
            withIntentPage: withIntent.length,
            noIntentPageFound: measured.length - withIntent.length,
        },
        results,
    };

    const json = JSON.stringify(run, null, 2);
    if (outPath) {
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, json, 'utf8');
        process.stderr.write(`\nwrote ${outPath}\n`);
    } else {
        process.stdout.write(json);
    }
    process.stderr.write(
        `\nattempted ${sites.length} | measured ${measured.length} | ` +
        `intent page found ${withIntent.length} | failed ${results.length - measured.length}\n`
    );
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
