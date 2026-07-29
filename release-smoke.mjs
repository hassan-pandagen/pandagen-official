#!/usr/bin/env node

const input = process.argv[2] ?? "http://localhost:3000";
let baseUrl;

try {
  baseUrl = new URL(input);
} catch {
  console.error("Usage: node release-smoke.mjs [http(s)://host]");
  process.exit(2);
}

if (!/^https?:$/.test(baseUrl.protocol) || baseUrl.username || baseUrl.password) {
  console.error("Base URL must use HTTP(S) and must not contain credentials.");
  process.exit(2);
}

const failures = [];

async function request(path, init = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    return await fetch(new URL(path, baseUrl), {
      redirect: "manual",
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function expect(condition, message) {
  if (!condition) failures.push(message);
}

function containsDirective(value, directive) {
  return value.toLowerCase().split(";").some((part) => part.trim() === directive.toLowerCase());
}

async function checkStatus(path, expected) {
  const response = await request(path);
  expect(response.status === expected, `${path}: expected ${expected}, received ${response.status}`);
  return response;
}

try {
  const home = await checkStatus("/", 200);
  const csp = home.headers.get("content-security-policy") ?? "";
  const cspReportOnly = home.headers.get("content-security-policy-report-only") ?? "";

  for (const directive of [
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
  ]) {
    expect(containsDirective(csp, directive), `/: enforced CSP is missing ${directive}`);
  }

  expect(cspReportOnly.includes("default-src 'self'"), "/: report-only vendor CSP is missing");
  expect(home.headers.get("x-content-type-options") === "nosniff", "/: X-Content-Type-Options must be nosniff");
  expect(home.headers.get("x-frame-options") === "DENY", "/: X-Frame-Options must be DENY");
  expect(home.headers.get("x-xss-protection") === "0", "/: X-XSS-Protection must disable the legacy filter");
  expect(home.headers.get("referrer-policy") === "strict-origin-when-cross-origin", "/: unexpected Referrer-Policy");
  expect(home.headers.get("permissions-policy")?.includes("geolocation=()"), "/: geolocation must be disabled by Permissions-Policy");
  expect(home.headers.get("cross-origin-opener-policy") === "same-origin-allow-popups", "/: unexpected Cross-Origin-Opener-Policy");
  expect(home.headers.has("strict-transport-security"), "/: Strict-Transport-Security is missing");
  expect(!home.headers.has("x-powered-by"), "/: framework disclosure header must be disabled");

  await checkStatus("/robots.txt", 200);
  await checkStatus("/sitemap.xml", 200);
  await checkStatus("/manifest.json", 200);
  await checkStatus("/site.webmanifest", 404);
  await checkStatus("/ai.txt", 404);
  await checkStatus("/yandex_059f4080fe1cdf8a.html", 404);
  await checkStatus("/demo/featured-products", 404);
  await checkStatus("/api/google-index", 404);
  await checkStatus("/api/indexnow", 404);

  const securityText = await checkStatus("/.well-known/security.txt", 200);
  const securityBody = await securityText.text();
  expect(securityBody.includes("Contact: mailto:"), "security.txt: Contact field is missing");
  expect(securityBody.includes("Expires:"), "security.txt: Expires field is missing");
  expect(securityBody.includes("Canonical:"), "security.txt: Canonical field is missing");

  const missing = await checkStatus("/__release-smoke_missing_page__", 404);
  const missingHtml = await missing.text();
  expect(/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(missingHtml), "404: noindex metadata is missing");
  expect(!/<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/www\.pandacodegen\.com\/?["']/i.test(missingHtml), "404: must not canonicalize to the homepage");

  const hostileAudit = await request("/api/audit/analyze", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://attacker.invalid" },
    body: JSON.stringify({ url: "https://example.com" }),
  });
  expect(hostileAudit.status === 403, `/api/audit/analyze: cross-origin POST expected 403, received ${hostileAudit.status}`);

  const hostileQuoteBody = new FormData();
  hostileQuoteBody.set("name", "Smoke Test");
  hostileQuoteBody.set("email", "smoke@example.com");
  const hostileQuote = await request("/api/submit-quote", {
    method: "POST",
    headers: { origin: "https://attacker.invalid", "sec-fetch-site": "cross-site" },
    body: hostileQuoteBody,
  });
  expect(hostileQuote.status === 403, `/api/submit-quote: cross-origin POST expected 403, received ${hostileQuote.status}`);
} catch (error) {
  failures.push(`Smoke check did not complete: ${error instanceof Error ? error.message : String(error)}`);
}

if (failures.length > 0) {
  console.error(`Release smoke failures (${failures.length})`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Release smoke passed: ${baseUrl.origin}`);
