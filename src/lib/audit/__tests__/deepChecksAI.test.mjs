import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import test from 'node:test';

const nodeRequire = createRequire(import.meta.url);
const ts = nodeRequire('typescript');
const source = await readFile(new URL('../deepChecks.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;

const runtimeModule = { exports: {} };
const localRequire = (specifier) => {
  if (specifier === './publicFetch') {
    return { fetchPublicText: async () => { throw new Error('Network access is not used by these unit tests.'); } };
  }
  throw new Error(`Unexpected test dependency: ${specifier}`);
};

new Function('require', 'module', 'exports', compiled)(localRequire, runtimeModule, runtimeModule.exports);
const { checkSearchAndAIFoundations } = runtimeModule.exports;

const longText = Array.from({ length: 260 }, (_, index) => `evidence-${index}`).join(' ');
const openRobots = 'User-agent: *\nAllow: /';

function contentHtml(extra = '') {
  return `<!doctype html>
    <html>
      <head>
        <title>Evidence-led example page</title>
        <meta name="description" content="A clear description of the page and its purpose.">
        <link rel="canonical" href="https://example.com/">
      </head>
      <body><main><h1>Evidence-led example</h1><p>${longText}</p>${extra}</main></body>
    </html>`;
}

test('experimental AI artifacts and named crawler rules do not change the score', () => {
  const baseline = checkSearchAndAIFoundations(contentHtml(), openRobots, true, false, false);
  const experimentalMarkup = `
    <a href="/ai-info">AI information</a>
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"FAQPage","speakable":{"@type":"SpeakableSpecification"}}
    </script>`;
  const namedRobots = `${openRobots}\n\nUser-agent: ExampleBot\nAllow: /`;
  const withArtifacts = checkSearchAndAIFoundations(
    contentHtml(experimentalMarkup),
    namedRobots,
    true,
    true,
    true,
  );

  assert.equal(baseline.score, 75);
  assert.equal(withArtifacts.score, baseline.score);
  assert.ok(withArtifacts.findings.some((finding) => finding.includes('FAQ/Question markup')));
  assert.ok(withArtifacts.findings.some((finding) => finding.includes('llms.txt and ai.txt')));
  assert.ok(withArtifacts.findings.some((finding) => finding.includes('named crawler directive')));
});

test('crawlability, content, and evidence controls can earn the full score', () => {
  const evidenceMarkup = `
    <a href="/about">About</a>
    <a href="/privacy">Privacy</a>
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"Organization","name":"Example","dateModified":"2026-07-20"}
    </script>`;
  const result = checkSearchAndAIFoundations(contentHtml(evidenceMarkup), openRobots, true, false, false);

  assert.equal(result.score, 100);
  assert.equal(result.status, 'pass');
  assert.match(result.fix, /does not predict inclusion, citations, or recommendations/i);
});

test('a wildcard crawl block or noindex caps the foundations score', () => {
  const blockedHtml = contentHtml(`
    <meta name="robots" content="noindex">
    <a href="/about">About</a>
    <a href="/terms">Terms</a>
    <script type="application/ld+json">
      {"@context":"https://schema.org","@type":"Person","name":"Example Author","author":"Example Author"}
    </script>`);
  const result = checkSearchAndAIFoundations(
    blockedHtml,
    'User-agent: *\nDisallow: /',
    true,
    true,
    true,
  );

  assert.equal(result.score, 40);
  assert.equal(result.status, 'fail');
  assert.ok(result.findings.some((finding) => finding.includes('Score capped at 40')));
});
