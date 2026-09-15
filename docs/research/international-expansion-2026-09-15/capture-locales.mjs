// Read-only HTTP inspection. Writes evidence only into this research directory.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const outDir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const baseUrl = process.argv[2] || 'http://localhost:3000';
const pages = ['', '/services', '/pricing', '/contact', '/about'];
const routes = ['', '/fr', '/de'].flatMap(locale => pages.map(page => `${locale}${page}` || '/'));
const decode = value => value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi, entity => {
  const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
  return named[entity] ?? String.fromCodePoint(entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m => [m[1].toLowerCase(), decode(m[2] ?? m[3])]));
const plain = html => decode(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
function inspect(html) {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0]));
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
  const headLinks = [...head.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(m => ({ ...attrs(m[1]), text: plain(m[2]) }));
  const schemas = [];
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attrs(m[1]).type !== 'application/ld+json') continue;
    try { schemas.push(JSON.parse(m[2])); } catch (error) { schemas.push({ parseError: error.message }); }
  }
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  return {
    lang: attrs(html.match(/<html\b[^>]*>/i)?.[0] ?? '').lang,
    title: plain(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    description: meta.filter(m => m.name === 'description').map(m => m.content),
    canonical: links.filter(m => m.rel === 'canonical').map(m => m.href),
    alternates: links.filter(m => m.rel === 'alternate' && m.hreflang).map(m => ({ lang: m.hreflang, href: m.href })),
    alternatesInHead: headLinks.filter(m => m.rel === 'alternate' && m.hreflang).length,
    robots: meta.filter(m => ['robots', 'googlebot'].includes(m.name)).map(m => ({ name: m.name, content: m.content })),
    ogLocale: meta.find(m => m.property === 'og:locale')?.content,
    ogImages: meta.filter(m => m.property === 'og:image').map(m => m.content),
    headings: [...visible.matchAll(/<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m => ({ level: Number(m[1]), text: plain(m[2]) })),
    anchors: anchors.filter(a => a.href && !a.href.startsWith('#')),
    forms: [...visible.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/gi)].map(m => ({ attributes: attrs(m[1]), text: plain(m[2]) })),
    schemas,
    text: plain(visible),
  };
}
const rows = [];
for (let i = 0; i < routes.length; i += 3) {
  rows.push(...await Promise.all(routes.slice(i, i + 3).map(async route => {
    const checkedUtc = new Date().toISOString();
    try {
      const response = await fetch(`${baseUrl}${route}`, { signal: AbortSignal.timeout(25000), headers: { 'User-Agent': 'PandaCodeGen-read-only-locale-audit' } });
      const html = await response.text();
      return { route, checkedUtc, status: response.status, finalUrl: response.url, xRobotsTag: response.headers.get('x-robots-tag'), sha256: crypto.createHash('sha256').update(html).digest('hex'), ...inspect(html) };
    } catch (error) { return { route, checkedUtc, error: error.message }; }
  })));
}
const sources = ['src/lib/i18n/config.ts', 'src/lib/i18n/metadata.ts', 'src/lib/i18n/dictionaries/fr.ts', 'src/lib/i18n/dictionaries/de.ts', 'src/components/i18n/LocalePage.tsx', 'src/components/layout/HtmlShell.tsx'].map(file => {
  const bytes = fs.readFileSync(file);
  return { file, modifiedUtc: fs.statSync(file).mtime.toISOString(), sha256: crypto.createHash('sha256').update(bytes).digest('hex') };
});
const evidence = { checkedUtc: new Date().toISOString(), baseUrl, method: 'HTTP GET raw HTML; no hydration, submissions, indexing requests or application changes. Local responses reflect the running server, not a fresh build or deployment. Source hashes record files at the end of capture.', sources, rows };
const filename = baseUrl.includes('localhost') ? 'localhost-locale-capture.json' : 'public-locale-capture.json';
fs.writeFileSync(path.join(outDir, filename), JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(rows.map(({ route, status, lang, title, alternates, alternatesInHead, forms, error }) => ({ route, status, lang, title, alternateCount: alternates?.length, alternatesInHead, formCount: forms?.length, error })), null, 2));
