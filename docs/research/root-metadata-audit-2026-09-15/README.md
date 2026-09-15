# Root metadata and services-description audit

Researched 15 September 2026 using repository source, generated HTML, current localhost responses, current public HTTP responses, official search documentation and eight competitor-page HTML captures. Application code was not changed in this research pass.

## Verdict

Correct the outdated company positioning and the services timeline. However, the claim that `layout.tsx:54` is the highest-leverage sentence seen by Google and every assistant is not supported by the implementation or search documentation.

**Zero of 145 indexable HTML candidates in the inspected local build use the root fallback meta description. All 145 render a non-root description. A separate Organization description in the same layout is emitted across all 145.** Editing one field does not edit the other.

The current public homepage also differs from the local homepage: it still serves its older migration-led page-specific metadata. The recommended work is therefore a small, explicit consistency batch, followed by deployment verification, rather than treating the root fallback as a site-wide SEO switch.

## The three descriptions being conflated

| Field | Observed scope | Consequence |
| --- | --- | --- |
| Root `metadata.description`, `src/app/layout.tsx:54` | Fallback for descendants that do not replace it. Used by zero of the 145 generated indexable candidates reviewed. | Update for accurate defaults and future routes. Changing it alone currently changes none of those pages' description tags. |
| Root Organization `description`, `src/app/layout.tsx:142` | Separately emitted JSON-LD on all 145 candidates. Still defines the business through migration from slow/costly platforms. | Align the actual repeated company statement with the broader offer. A child page's meta description does not override this script. |
| Services `metadata.description`, `src/app/services/page.tsx:8` | Explicit description for `/services`; confirmed both locally and in public HTML. | Correct this field directly. A root fallback change cannot remove its “2 to 4 weeks” wording. |

The [implementation report](implementation-scope.md) explains the inventory and exclusions. There were 149 HTML artifacts; errors, a noindex demo and a redirect were excluded. “Indexable candidate” does not mean a URL is indexed by Google. The audit does not claim full coverage of every possible dynamic response. Ten localhost routes confirmed the relevant inheritance findings.

Next.js resolves metadata from outer to inner segments and replaces duplicate fields with later values. Page, Open Graph and Twitter descriptions also need separate attention. [Next.js metadata merging](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging)

Five candidates add another description for the same Organization identifier: the homepage, one WordPress migration guide and three case studies. The homepage also mixes the LLC formation date with the brand's earlier trading date under the same identifier. Those dates can both be true while describing different events; do not flatten the distinction or invent a new date. Consolidate the entity facts without erasing unrelated evidence.

## What the public site currently serves

Unauthenticated GETs at **15:17 UTC on 15 September 2026** returned HTTP 200 for the homepage and `/services`. Exact tags and timestamps are preserved in [public-metadata-capture.json](public-metadata-capture.json).

- Public homepage title: **Website Migration to Custom Next.js You Own | PandaCodeGen**. Its page-specific description still leads with leaving named platforms.
- Local homepage title: **Custom Website Design & Development | PandaCodeGen**, with its own broader website/store description.
- Public `/services`: still has its explicit redesign/migration description and unqualified **2 to 4 weeks**.

This is evidence about the HTTP responses served at capture time, not a record of Google's indexed copy. Local edits and commits are not public exposure. After the intended release, verify the actual public tags before starting a before/after comparison or treating a local fix as something crawlers have seen.

## What Google documents, and what it does not

Google primarily generates snippets from page content and may choose the meta description when it is more useful. Different queries can produce different snippets. It recommends relevant page-specific descriptions, not one identical company paragraph on every URL, and has no fixed character limit for descriptions; displayed snippets may be truncated. A list of keywords is not a useful substitute for a summary. [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet)

Google explicitly stated that it does not use description meta tags in ranking. That direct statement is from its **2009** Search Central article; its current documentation describes their snippet role. Do not present the older article as a newly published algorithm announcement or predict a ranking increase from this edit. [Google's statement](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag), [supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags)

Google's AI Overviews and AI Mode follow the normal search foundations; its guidance does not identify a root description as an authoritative company statement that every assistant must use. Structured data should agree with visible content. These documents concern Google, not a universal rule for all assistants. [Google AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features)

Organization markup can help identify and distinguish a company. This supports correcting inconsistent company facts, but does not establish that rewriting its description produces rankings, citations or a knowledge panel. [Google Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization)

A better description may improve how an eligible search result is understood if it is displayed. That is a potential snippet and buyer-fit benefit, not a measured outcome here. No CTR, ranking or enquiry uplift is assigned to the proposed copy.

## Why the timeline needs correction

The problem is scope, not that “2 to 4 weeks” is false in every context. [company-facts.ts](../../../src/data/company-facts.ts) currently specifies:

| Website tier | Published range |
| --- | --- |
| Starter | 1–2 weeks |
| Growth | 2–4 weeks |
| Scale | 3–6 weeks |

The accepted project terms determine actual dates. `/services` also covers software and links to ongoing AI SEO, which makes a single directory-wide completion time less appropriate still. Remove the universal range from the directory description; retain supported ranges beside their applicable tiers. Replacing it with a universal 1–6-week promise would reproduce the same error.

The directory's visible H1 and introduction remain migration-led, including the requirement that an existing site already earns its keep. Broader metadata alone would still send new-site buyers to a page that sounds as if it excludes them. Align the short introduction, heading, page metadata, CollectionPage schema and its share-image copy together. This does not require retitling specialist migration pages or articles.

## Competitor evidence

The [competitor comparison](competitor-patterns.md) covers actual homepage and service-page HTML for four agencies. All eight public pages returned 200; metadata was extracted from tags rather than inferred from search snippets.

- [Naturaily](https://naturaily.com/) uses a broader web-development/design category and includes commerce expertise. Its [services directory](https://naturaily.com/services) separates service families.
- [Bejamas](https://bejamas.com/) explicitly leads with migrations and client operation of the resulting website. Migration-led positioning can be coherent for a firm choosing that specialty.
- [FocusReactive](https://focusreactive.com/) leads with headless CMS work and names relevant technologies.
- [Blazity](https://www.blazity.com/) currently leads enterprise AI systems, with Next.js engineering and migrations within its service range.

The transferable principle is accurate scope and a clear route to specialist services. These examples do not show that platform names inherently cause bounces or that broad wording automatically ranks better. Broader company wording is appropriate for PandaCodeGen because the company actually offers new builds and stores, not because all competitors have abandoned migration language.

## Recommended order

1. Correct the services timeline and align that directory's short introduction with the actual catalogue.
2. Align the repeated Organization descriptions, preserving legal and brand-event distinctions.
3. Update root default title/description as maintenance. Keep existing relevant page-level descriptions.
4. Reconcile the homepage's own metadata and image-preview text with the intended release, then verify public HTML after deployment.
5. Record the release date, affected fields and routes. Monitor the relevant pages and queries after recrawl; do not attribute a bundled release's movement to a single description.

The existing measurement document permits factual corrections. More fundamentally, the measured exposure is the deployed HTML, not the number of local commits. An annotation does not isolate causality, but a measurement window is not a reason to preserve an inaccurate general delivery promise. If Organization JSON-LD changes across the site, record that shared change rather than describing blog output as completely untouched.

Google says recrawling can take days to weeks and a request does not guarantee immediate inclusion. Repeated requests do not make a URL crawl faster. No indexing requests were submitted during this audit. [Recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

The [recommended copy](recommended-copy.md) provides exact proposed strings for the root fallback, shared company entity and services directory. No new keyword-volume capture was made for this task: the copy expresses the offer and intent, rather than claiming that an entire description is a measured search query.
