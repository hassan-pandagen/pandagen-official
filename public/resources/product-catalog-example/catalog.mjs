// Synthetic teaching example, not extracted client code. MIT licensed.
// Documentation: https://www.pandacodegen.com/blog/product-catalog-website-without-cart
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const exampleProducts = [
  { slug: 'woven-labels', name: 'Woven labels', published: true, quoteable: true, related: ['printed-labels'] },
  { slug: 'printed-labels', name: 'Printed labels', published: true, quoteable: true, related: ['woven-labels'] },
  { slug: 'sample-kit', name: 'Sample kit', published: true, quoteable: false, related: [] },
  { slug: 'prototype', name: 'Unpublished prototype', published: false, quoteable: true, related: [] },
];

const xml = value => String(value).replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]);

/** Validate first, then derive every output from the same public records. */
export function buildCatalog(products, origin) {
  const base = new URL(origin);
  if (!['https:', 'http:'].includes(base.protocol) || base.username || base.password || base.search || base.hash || base.pathname !== '/') {
    throw new Error('Use an HTTP(S) origin without credentials, path, query or fragment.');
  }
  if (!Array.isArray(products)) throw new Error('Products must be an array.');
  const slugs = new Set();
  for (const product of products) {
    if (!product || typeof product.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug)) throw new Error('Invalid product slug.');
    if (slugs.has(product.slug)) throw new Error(`Duplicate slug: ${product.slug}`);
    slugs.add(product.slug);
    if (typeof product.name !== 'string' || !product.name.trim()) throw new Error(`Missing name: ${product.slug}`);
    if (typeof product.published !== 'boolean' || typeof product.quoteable !== 'boolean') throw new Error(`Missing publication or quote flag: ${product.slug}`);
    if (!Array.isArray(product.related) || product.related.some(slug => typeof slug !== 'string')) throw new Error(`Invalid related list: ${product.slug}`);
  }
  for (const product of products) {
    for (const slug of product.related) {
      if (!slugs.has(slug)) throw new Error(`Unknown related product: ${slug}`);
      if (slug === product.slug) throw new Error(`Self-reference: ${slug}`);
    }
  }
  const visible = products.filter(product => product.published);
  const visibleSlugs = new Set(visible.map(product => product.slug));
  const path = slug => `/products/${slug}`;
  const navigation = visible.map(product => ({ label: product.name, href: path(product.slug) }));
  const quoteOptions = visible.filter(product => product.quoteable).map(product => ({ value: product.slug, label: product.name }));
  const pages = visible.map(product => ({ slug: product.slug, path: path(product.slug), relatedPaths: [...new Set(product.related)].filter(slug => visibleSlugs.has(slug)).map(path) }));
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + pages.map(page => `  <url><loc>${xml(new URL(page.path, base).href)}</loc></url>`).join('\n')
    + '\n</urlset>\n';
  return { navigation, quoteOptions, pages, sitemap };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(buildCatalog(exampleProducts, 'https://example.com'), null, 2));
}
