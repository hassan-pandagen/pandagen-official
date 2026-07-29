# PandaCodeGen SEO, AEO, and GEO strategy

This document explains the search and content strategy implemented by the repository. It is a planning guide, not evidence that a page ranks, is indexed, appears in an AI-generated response, or produces a commercial result.

The public-claim rules in [`CLAIMS_REGISTER.md`](./CLAIMS_REGISTER.md) and the editorial controls in [`EDITORIAL_FACT_CHECK.md`](./EDITORIAL_FACT_CHECK.md) take precedence over this document. The relationship data in [`src/data/topical-map.ts`](../src/data/topical-map.ts) supports navigation and internal linking; it is not an authority for public factual or commercial claims.

## 1. Primary offer and audience

The primary offer is:

> SEO-safe migrations for revenue-generating WordPress, Webflow, and GoHighLevel sites.

"SEO-safe" describes continuity controls such as URL and content inventories, redirect planning, metadata and analytics continuity, staged QA, acceptance criteria, cutover planning, monitoring, and rollback responsibilities. It is not a guarantee of rankings, indexing, traffic, leads, revenue, or AI citations.

The primary buyer is a founder, marketing lead, ecommerce lead, or operations leader whose current site has become a measurable constraint. Useful buying triggers include a redesign, rebrand, acquisition, content consolidation, recurring platform failures, slow campaign iteration, high maintenance cost, poor measured performance, or concern about losing organic visibility during a necessary rebuild.

Custom Next.js, commerce, and application engineering remain secondary capabilities when the migration requires them. Agency partnerships and white-label work must be described only within the limits recorded in the claims register.

## 2. Search-intent model

| Intent | Main pages | Job |
|---|---|---|
| Commercial | `/`, `/services/*`, `/pricing`, `/work` | Explain migration fit, scope controls, pricing anchors, and the evidence standard. |
| Transactional | Homepage audit, quote modal, `/contact`, consented scheduling or chat | Help a qualified visitor request a migration plan or optional review. |
| Navigational | `/about`, `/work`, `/manifesto`, policy pages | Provide consistent company, delivery, evidence, and policy information. |
| Informational | `/blog/*` | Answer a distinct buyer or implementation question and link to the most relevant commercial page. |

Every indexable page should have one clear primary purpose. Do not create a separate page merely to repeat a keyword variation, restate another page, or maintain a second version of company facts.

## 3. SEO, AEO, and GEO principles

For Google Search, generative search features use the same underlying crawlability, indexability, quality, and usefulness foundations as ordinary search. No special AI text file, schema type, page length, or content-chunking tactic guarantees inclusion.

The practical strategy is to:

- make important content available in reliable, crawlable HTML;
- use descriptive titles, headings, links, and page structure for people first;
- keep canonical URLs, redirects, metadata, and sitemap entries consistent;
- use structured data only when it accurately reflects visible content;
- publish original, permissioned evidence with a dated method and limitations;
- name accountable authors or organizations accurately;
- cite current primary sources for mutable third-party facts;
- reduce duplicate and commodity content;
- measure Search Console, referral, lead, and revenue outcomes without claiming causation from visibility alone; and
- withdraw or qualify facts that can no longer be verified.

`llms.txt` is maintained only as a concise factual navigation aid. It is not treated as a Google ranking or AI-citation mechanism. The visible page, claims register, and applicable signed agreement remain authoritative.

## 4. Topic and entity boundaries

The core subject area is website-platform migration and the engineering controls needed to preserve intended behavior and measurement. Supporting topics may include:

- WordPress, Webflow, and GoHighLevel migration planning;
- URL, redirect, content-model, integration, analytics, and consent continuity;
- measured performance and Core Web Vitals;
- accessibility, security, privacy, and release verification;
- ecommerce and custom engineering when relevant to a migration decision;
- ownership, licensing, support, change control, and total operating cost; and
- evidence-led SEO, AEO, and GEO measurement.

Avoid unrelated general marketing management, generic coding tutorials, standalone branding services, and content created only to chase a trend. Platform limits, prices, incidents, legal requirements, and product capabilities require current primary sources and a review date.

## 5. Internal-linking rules

- **Vertical:** Service pillars link to genuinely relevant supporting articles, and supporting articles link back to the best-fit service or planning page.
- **Horizontal:** Related services and articles are selected by shared user task and topic, not at random and not solely by a broad category label.
- **Navigational:** Deep pages use breadcrumbs and important pages remain reachable through crawlable server-rendered links.
- **Contextual:** Anchor text should describe the destination naturally. Do not stuff keywords or link to a page that does not continue the reader's task.
- **Canonical:** Internal links should point directly to the canonical destination rather than relying on a redirect.

The clusters in `src/data/topical-map.ts` may help select and order related content, but editors must review the resulting links for actual relevance. Relationship data must be updated when pages are consolidated, redirected, or retired.

## 6. Content and evidence standard

Useful format variation can improve comprehension, but no visual or structural pattern is assumed to be a ranking signal. Choose prose, lists, tables, diagrams, screenshots, or interactive elements because they help the intended reader understand or verify the subject.

Before publishing a material assertion, apply the editorial fact-check workflow. In particular:

- distinguish first-party results, third-party facts, estimates, and opinions;
- record the source, checked date, method, scope, and material limitations;
- keep lab performance separate from field performance;
- do not present correlation as causation;
- obtain permission for customer names, logos, quotes, screenshots, and results;
- never publish customer-level operational data or personal information as proof; and
- keep visible copy, metadata, structured data, images, and social copy aligned.

Case-study and testimonial claims remain withheld except for wording explicitly allowed by the claims register.

## 7. Freshness and date integrity

`src/data/blog.ts` is the sitemap source for each article's `lastModified` value. The corresponding page's visible update date and Article structured data must describe the same real editorial change.

- `datePublished` records the original publication date and does not change during an update.
- `dateModified`, visible update wording, and sitemap `lastModified` must agree when an article receives a material update.
- Do not change a date without reviewing the content, and do not materially change content while leaving contradictory date evidence.
- Recheck volatile product, price, policy, legal, security, market, and current-year claims on the cadence in `EDITORIAL_FACT_CHECK.md`.
- If a claim misses its review date or cannot be reverified, qualify or remove it.

A structural crawler can confirm URL status, canonical handling, and other machine-checkable page structure. It cannot by itself prove that sitemap dates, visible dates, structured-data dates, or factual assertions are truthful and mutually consistent. That requires an editorial record and a dedicated consistency check.

## 8. Measurement

Evaluate the strategy with outcomes that can inform decisions:

- index coverage and canonical selection;
- non-brand impressions, clicks, and click-through rate by query and page;
- visibility in generative-search reporting where the property is eligible;
- accurate referral sessions from search and AI-assisted products;
- qualified migration-plan starts and submissions;
- booked-review attendance, proposal rate, win rate, and won revenue;
- average contract value, gross margin, delivery variance, rework, support load, and refunds; and
- performance and conversion trends segmented by route and device.

Installed-platform share, impressions, mentions, and automated scores can provide context, but none proves PandaCodeGen-specific demand or business growth. Review the migration-led positioning as a commercial hypothesis and narrow it further if one platform or customer segment consistently produces better qualified conversion and delivery economics.
