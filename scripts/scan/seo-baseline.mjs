/**
 * AEO / SEO surface capture for a pre-rebuild baseline.
 *
 * Companion to baseline.mjs, which covers performance and accessibility. This
 * one records what a search engine and an answer engine can actually see, so
 * the "what they had" half of a case study is measured rather than remembered.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ORIGIN = process.argv[2];
const PAGES = process.argv.slice(3);

async function head(url) {
    try {
        const r = await fetch(url, { redirect: 'follow' });
        const body = r.ok ? await r.text() : '';
        return { status: r.status, bytes: body.length, body };
    } catch (e) {
        return { status: 0, bytes: 0, body: '', error: String(e.message).slice(0, 80) };
    }
}

const browser = await chromium.launch({ headless: true });
const out = { capturedAt: new Date().toISOString().slice(0, 10), origin: ORIGIN, pages: [], site: {} };

// Site-level crawler surface.
const o = new URL(ORIGIN).origin;
for (const [key, file] of [['robotsTxt', '/robots.txt'], ['sitemapXml', '/sitemap.xml'],
                           ['sitemapIndex', '/sitemap_index.xml'], ['llmsTxt', '/llms.txt']]) {
    const r = await head(o + file);
    out.site[key] = { status: r.status, bytes: r.bytes };
    if (key.startsWith('sitemap') && r.body) {
        out.site[key].urls = (r.body.match(/<loc>/g) || []).length;
    }
    if (key === 'robotsTxt' && r.body) {
        out.site[key].disallowLines = (r.body.match(/^Disallow:/gim) || []).length;
        out.site[key].namesAiCrawlers = /GPTBot|ClaudeBot|PerplexityBot|OAI-SearchBot|CCBot/i.test(r.body);
    }
}

for (const url of [ORIGIN, ...PAGES]) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    try {
        await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
        await page.waitForTimeout(1500);
        const d = await page.evaluate(() => {
            const q = (s) => Array.from(document.querySelectorAll(s));
            const meta = (n) => document.querySelector(`meta[name="${n}"]`)?.content
                             || document.querySelector(`meta[property="${n}"]`)?.content || null;
            const ld = q('script[type="application/ld+json"]').map((s) => {
                try { return JSON.parse(s.textContent); } catch { return null; }
            }).filter(Boolean);
            const types = [];
            const walk = (x) => {
                if (Array.isArray(x)) return x.forEach(walk);
                if (x && typeof x === 'object') {
                    if (x['@type']) types.push(...[].concat(x['@type']));
                    Object.values(x).forEach(walk);
                }
            };
            walk(ld);
            const imgs = q('img');
            const fmt = {};
            imgs.forEach((i) => {
                const m = (i.currentSrc || i.src || '').split('?')[0].match(/\.(\w{2,5})$/);
                const k = m ? m[1].toLowerCase() : 'unknown';
                fmt[k] = (fmt[k] || 0) + 1;
            });
            return {
                title: document.title || null,
                titleLength: (document.title || '').length,
                metaDescription: meta('description'),
                metaDescriptionLength: (meta('description') || '').length,
                canonical: document.querySelector('link[rel=canonical]')?.href || null,
                robotsMeta: meta('robots'),
                ogTitle: meta('og:title'), ogImage: meta('og:image'), ogType: meta('og:type'),
                twitterCard: meta('twitter:card'),
                htmlLang: document.documentElement.lang || null,
                hreflang: q('link[rel=alternate][hreflang]').length,
                jsonLdBlocks: ld.length,
                schemaTypes: [...new Set(types)],
                h1: q('h1').length, h2: q('h2').length, h3: q('h3').length,
                h1Text: q('h1').map((h) => h.textContent.trim().slice(0, 90)),
                images: imgs.length,
                imagesNoAlt: imgs.filter((i) => !i.hasAttribute('alt')).length,
                imagesEmptyAlt: imgs.filter((i) => i.getAttribute('alt') === '').length,
                imagesLazy: imgs.filter((i) => i.loading === 'lazy').length,
                imageFormats: fmt,
                internalLinks: q('a[href]').filter((a) => a.host === location.host).length,
                externalLinks: q('a[href]').filter((a) => a.host && a.host !== location.host).length,
                words: (document.body.innerText || '').split(/\s+/).filter(Boolean).length,
                inlineStyleBlocks: q('style').length,
            };
        });
        out.pages.push({ url, ...d });
    } catch (e) {
        out.pages.push({ url, error: String(e.message).split('\n')[0].slice(0, 140) });
    }
    await page.close();
}
await browser.close();
fs.writeFileSync(path.join(HERE, 'seo-baseline.json'), JSON.stringify(out, null, 2));
process.stderr.write('wrote seo-baseline.json\n');
