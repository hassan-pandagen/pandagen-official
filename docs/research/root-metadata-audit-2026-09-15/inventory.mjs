// Read-only page inspection. Writes only this research directory.
// Run from the repository root: node docs/research/root-metadata-audit-2026-09-15/inventory.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const outDir = path.join(root, 'docs/research/root-metadata-audit-2026-09-15');
const buildDir = path.join(root, '.next-audit');
const appDir = path.join(buildDir, 'server/app');
const layout = fs.readFileSync(path.join(root, 'src/app/layout.tsx'), 'utf8');
const rootDescription = layout.match(/\bdescription:\s*"([^"]+)"/)[1];
const organizationId = 'https://www.pandacodegen.com/#organization';
const decode = (s = '') => s.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi, entity => {
  const simple = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
  if (simple[entity]) return simple[entity];
  return String.fromCodePoint(entity[2].toLowerCase() === 'x' ? parseInt(entity.slice(3), 16) : parseInt(entity.slice(2), 10));
});
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m => [m[1].toLowerCase(), decode(m[2] ?? m[3])]));
}
function inspect(html) {
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => attributes(m[0]));
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(m => attributes(m[0]));
  const descriptions = metas.filter(m => m.name === 'description').map(m => m.content);
  const robots = metas.filter(m => m.name === 'robots' || m.name === 'googlebot').map(m => ({ name: m.name, content: m.content }));
  const organizations = [];
  const schemaErrors = [];
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (!Array.isArray(node) && node['@id'] === organizationId && node.description) organizations.push({ id: node['@id'], type: node['@type'], description: node.description, foundingDate: node.foundingDate ?? null });
    for (const v of Object.values(node)) if (v && typeof v === 'object') visit(v);
  }
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attributes(m[1]).type !== 'application/ld+json') continue;
    try { visit(JSON.parse(m[2])); } catch (error) { schemaErrors.push(error.message); }
  }
  return {
    title: decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    descriptions,
    matchesRootDescription: descriptions.includes(rootDescription),
    robots,
    noindex: robots.some(m => /\bnoindex\b/i.test(m.content ?? '')),
    canonical: links.find(m => m.rel === 'canonical')?.href ?? null,
    ogDescriptions: metas.filter(m => m.property === 'og:description').map(m => m.content),
    twitterDescriptions: metas.filter(m => m.name === 'twitter:description').map(m => m.content),
    organizations,
    schemaErrors,
  };
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
}
function artifact(relative) {
  const file = path.join(buildDir, relative);
  if (!fs.existsSync(file)) return null;
  const stat = fs.statSync(file);
  const content = fs.readFileSync(file, 'utf8');
  return { path: `.next-audit/${relative}`, modifiedUtc: stat.mtime.toISOString(), content: relative.endsWith('.json') ? JSON.parse(content) : content.trim() };
}
const rows = walk(appDir).filter(file => file.endsWith('.html')).map(file => {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(appDir, file).replaceAll('\\', '/');
  const route = relative === 'index.html' ? '/' : `/${relative.slice(0, -5)}`;
  const metaFile = file.slice(0, -5) + '.meta';
  const responseMeta = fs.existsSync(metaFile) ? JSON.parse(fs.readFileSync(metaFile, 'utf8')) : null;
  const inspection = inspect(html);
  const exclusionReasons = [];
  if (route.startsWith('/_') || route === '/404' || route === '/500') exclusionReasons.push('framework/error route');
  if (inspection.noindex) exclusionReasons.push('robots noindex');
  if (responseMeta?.status && responseMeta.status !== 200) exclusionReasons.push(`build response status ${responseMeta.status}`);
  return {
    route, file: `.next-audit/server/app/${relative}`, modifiedUtc: fs.statSync(file).mtime.toISOString(),
    bytes: Buffer.byteLength(html), sha256: crypto.createHash('sha256').update(html).digest('hex'),
    status: responseMeta?.status ?? 200,
    ...inspection, exclusionReasons, countAsIndexableCandidate: exclusionReasons.length === 0,
  };
}).sort((a, b) => a.route.localeCompare(b.route));
const candidates = rows.filter(row => row.countAsIndexableCandidate);
const inherited = candidates.filter(row => row.matchesRootDescription);
const manifest = artifact('prerender-manifest.json');
const summary = {
  generatedUtc: new Date().toISOString(), localTimezone: 'Asia/Karachi',
  sourceRoot: root, rootDescription,
  buildId: artifact('BUILD_ID'), diagnostics: artifact('diagnostics/build-diagnostics.json'),
  prerenderManifest: { path: manifest.path, modifiedUtc: manifest.modifiedUtc, routeCount: Object.keys(manifest.content.routes ?? {}).length, notFoundRoutes: manifest.content.notFoundRoutes ?? [] },
  htmlCount: rows.length, indexableCandidateCount: candidates.length,
  rootDescriptionCandidateCount: inherited.length, rootDescriptionCandidateRoutes: inherited.map(row => row.route),
  ownDescriptionCandidateCount: candidates.filter(row => row.descriptions.length && !row.matchesRootDescription).length,
  missingDescriptionCandidateRoutes: candidates.filter(row => !row.descriptions.length).map(row => row.route),
  duplicateDescriptionCandidateRoutes: candidates.filter(row => row.descriptions.length > 1).map(row => row.route),
  organizationDescriptionCandidateCount: candidates.filter(row => row.organizations.length > 0).length,
  multipleOrganizationDescriptionCandidateRoutes: candidates.filter(row => row.organizations.length > 1).map(row => row.route),
  excluded: rows.filter(row => !row.countAsIndexableCandidate).map(row => ({ route: row.route, reasons: row.exclusionReasons })),
  methodLimit: 'Counts rendered .html artifacts only; excludes framework/error and explicit noindex responses. Candidate is not proof of indexing, crawl access, or a complete inventory of dynamically generated/redirected routes. RSC files are excluded by extension. Status defaults to 200 when no override exists in the generated .meta file.',
};
fs.writeFileSync(path.join(outDir, 'built-metadata-inventory.json'), JSON.stringify({ summary, rows }, null, 2) + '\n');

const representativeRoutes = ['/', '/services', '/blog/woocommerce-too-slow', '/about', '/about/hassan', '/ai-info', '/editorial-policy', '/privacy', '/terms', '/cookies'];
const liveRows = [];
for (let i = 0; i < representativeRoutes.length; i += 3) {
  const batch = await Promise.all(representativeRoutes.slice(i, i + 3).map(async route => {
    const checkedUtc = new Date().toISOString();
    const url = `http://localhost:3000${route}`;
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'PandaCodeGen-local-read-only-metadata-audit' } });
      const html = await response.text();
      return { route, url, checkedUtc, finalUrl: response.url, status: response.status, xRobotsTag: response.headers.get('x-robots-tag'), contentType: response.headers.get('content-type'), bytes: Buffer.byteLength(html), sha256: crypto.createHash('sha256').update(html).digest('hex'), ...inspect(html) };
    } catch (error) { return { route, url, checkedUtc, error: error.message }; }
  }));
  liveRows.push(...batch);
}
fs.writeFileSync(path.join(outDir, 'localhost-metadata-capture.json'), JSON.stringify({ generatedUtc: new Date().toISOString(), baseUrl: 'http://localhost:3000', isPublicProduction: false, method: 'HTTP GET raw HTML without browser hydration; no mutation/submission/indexing action.', rows: liveRows }, null, 2) + '\n');
console.log(JSON.stringify({ summary, localhost: liveRows.map(r => ({ route: r.route, status: r.status, root: r.matchesRootDescription, descriptionCount: r.descriptions?.length, organizationCount: r.organizations?.length, error: r.error })) }, null, 2));
