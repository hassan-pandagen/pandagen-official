import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCatalog, exampleProducts } from './catalog.mjs';

test('unpublished products are absent from every generated public output', () => {
  const result = buildCatalog(exampleProducts, 'https://example.com');
  assert.equal(result.pages.length, 3);
  assert.equal(result.navigation.length, 3);
  assert.equal(result.quoteOptions.length, 2);
  assert.ok(!JSON.stringify(result).includes('prototype'));
  assert.deepEqual(result.pages.map(p => p.path), result.navigation.map(p => p.href));
  for (const page of result.pages) assert.ok(result.sitemap.includes(`https://example.com${page.path}`));
});
test('publication flags apply to related links as well as the navigation', () => {
  const products = structuredClone(exampleProducts);
  products[0].related.push('prototype');
  assert.deepEqual(buildCatalog(products, 'https://example.com').pages[0].relatedPaths, ['/products/printed-labels']);
});
test('duplicate routes fail before generating a sitemap', () => {
  assert.throws(() => buildCatalog([...exampleProducts, exampleProducts[0]], 'https://example.com'), /Duplicate slug/);
});
test('broken relationships fail explicitly', () => {
  const products = structuredClone(exampleProducts);
  products[0].related = ['missing'];
  assert.throws(() => buildCatalog(products, 'https://example.com'), /Unknown related product/);
});
test('slugs cannot create paths outside the product route', () => {
  for (const slug of ['../admin', 'x?draft=true', 'x/y', '', 'UPPER']) {
    assert.throws(() => buildCatalog([{ ...exampleProducts[0], slug }], 'https://example.com'), /Invalid product slug/);
  }
});
test('origin cannot silently discard a base path or carry credentials', () => {
  for (const origin of ['file:///tmp', 'https://example.com/shop', 'https://user:pass@example.com', 'https://example.com/?x=1', 'https://example.com/#x']) {
    assert.throws(() => buildCatalog(exampleProducts, origin), /HTTP\(S\) origin/);
  }
});
test('input records are not mutated and an empty catalog is valid', () => {
  const before = JSON.stringify(exampleProducts);
  buildCatalog(exampleProducts, 'https://example.com');
  assert.equal(JSON.stringify(exampleProducts), before);
  assert.deepEqual(buildCatalog([], 'https://example.com').pages, []);
});
test('names stay data; HTML rendering is the consumer responsibility', () => {
  const products = structuredClone(exampleProducts);
  products[0].name = 'Labels & <samples>';
  const result = buildCatalog(products, 'https://example.com');
  assert.equal(result.navigation[0].label, 'Labels & <samples>');
  assert.ok(!result.sitemap.includes('<samples>'));
});
