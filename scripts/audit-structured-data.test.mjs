import test from "node:test";
import assert from "node:assert/strict";
import { auditStructuredData, auditSchemaContent } from "./audit-structured-data.mjs";

const html = value => `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`;
const trail = {
  "@type": "BreadcrumbList", "@id": "https://example.com/post#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://example.com/" },
    { "@type": "ListItem", position: 2, name: "Post" },
  ],
};

test("a valid trail needs no list-level name or final URL", () => {
  assert.deepEqual(auditStructuredData(html(trail)).errors, []);
});
test("missing entry names and one-entry trails are detected", () => {
  const broken = structuredClone(trail);
  delete broken.itemListElement[0].name;
  assert.ok(auditStructuredData(html(broken)).errors.includes("Missing breadcrumb entry name"));
  broken.itemListElement.pop();
  assert.ok(auditStructuredData(html(broken)).errors.includes("BreadcrumbList needs at least two entries"));
});
test("an old graph trail plus a visible component trail fails the site convention", () => {
  assert.ok(auditStructuredData(html({ "@graph": [trail] }) + html(trail)).errors.some(error => error.startsWith("Multiple breadcrumb trails")));
});
test("cross-script breadcrumb references survive consolidation", () => {
  const page = { "@type": "WebPage", breadcrumb: { "@id": trail["@id"] } };
  assert.deepEqual(auditStructuredData(html(page) + html(trail)).errors, []);
  assert.ok(auditStructuredData(html(page)).errors.includes("Unresolved breadcrumb reference"));
});
test("malformed JSON, empty FAQ and misplaced serviceType are detected", () => {
  assert.ok(auditStructuredData('<script type="application/ld+json">{</script>').errors.includes("Invalid JSON-LD"));
  assert.ok(auditStructuredData(html({ "@type": "FAQPage", mainEntity: [] })).errors.includes("Empty FAQPage"));
  assert.ok(auditStructuredData(html({ "@type": "Organization", serviceType: "Development" })).errors.length);
});
test("script-like answer text is safely parsed without truncation", () => {
  const faq = { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Example?", acceptedAnswer: { "@type": "Answer", text: "A </script> tag" } }] };
  assert.deepEqual(auditStructuredData(html(faq)).errors, []);
});

test("serialized FAQ text does not substitute for a rendered answer", () => {
  const faq = { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Who helps?", acceptedAnswer: { "@type": "Answer", text: "Our team." } }] };
  assert.equal(auditSchemaContent(html(faq), [faq]).length, 2);
  assert.deepEqual(auditSchemaContent(html(faq) + '<h2>Who helps?</h2><p>Our <strong>team.</strong></p>', [faq]), []);
});
test("a valid but outdated breadcrumb hierarchy is detected", () => {
  assert.deepEqual(auditSchemaContent('<nav aria-label="Breadcrumb">Home <span>Post</span></nav>', [trail]), []);
  assert.ok(auditSchemaContent('<nav aria-label="Breadcrumb">Home Topic Post</nav>', [trail]).length);
});

test("datasets require meaningful descriptions, but no invented license or download", () => {
  const dataset = { "@type": "Dataset", name: "Measured orders", description: "Orders and revenue grouped by acquisition source for the stated reporting period." };
  assert.deepEqual(auditStructuredData(html(dataset)).errors, []);
  assert.ok(auditStructuredData(html({ ...dataset, description: "Too short" })).errors.includes("Dataset description must contain 50 to 5000 characters"));
  assert.ok(auditStructuredData(html({ ...dataset, distribution: { "@type": "DataDownload", contentUrl: "/missing.csv" } })).errors.length);
});

test("profile pages resolve their named person across JSON-LD blocks", () => {
  const profile = { "@type": "ProfilePage", mainEntity: { "@id": "https://example.com/#author" } };
  assert.ok(auditStructuredData(html(profile)).errors.length);
  assert.deepEqual(auditStructuredData(html(profile) + html({ "@type": "Person", "@id": "https://example.com/#author", name: "Author" })).errors, []);
});

test("company review stars cannot be reintroduced as an SEO shortcut", () => {
  const company = { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", aggregateRating: { "@type": "AggregateRating", ratingValue: 5, ratingCount: 20 } };
  assert.ok(auditStructuredData(html(company)).errors.includes("Self-serving company review markup is ineligible for Google review stars"));
});
