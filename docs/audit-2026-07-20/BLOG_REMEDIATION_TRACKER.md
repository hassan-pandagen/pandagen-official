# Blog Remediation Tracker

Last updated: 2026-07-24

This is the authoritative execution tracker for the 77 live blog routes. It exists to prevent an automated phrase scan from being reported as a complete editorial audit.

## Current roll-up

- **77/77 routes completed the route-level claim remediation or revalidation.**
- **77/77 routes passed the 24 July localhost MCP Playwright structural render audit.**
- The MCP audit checked HTTP status, title, meta description, Open Graph title, `lang`, exact canonical, one H1, parseable JSON-LD, `main` and `article` landmarks, FAQ presence, image alt attributes, empty links, mojibake, and rendered en/em dashes.
- Representative shared-template checks at 390x844 and 1440x900 found no document-level horizontal overflow on the homepage, blog index, WordPress migration cost article, WooCommerce performance article, or WordPress versus Next.js article. Wide article tables remained inside deliberate horizontal-scroll containers.
- Full repository `npm run check` passed after remediation: TypeScript, ESLint, 35/35 security and form tests, and the prohibited-universal-claim guard.
- The exact final source built with Next.js 16.2.11: 111 pages/routes generated; Pagefind indexed 77 article pages / 4,168 words.
- The production artifact passed release smoke and the structural SEO crawl across 102 sitemap URLs with 0 failures and 0 warnings.
- The final dependency audit reported 0 vulnerabilities.
- With analytics consent granted on localhost, Vercel Analytics correctly remained unmounted and produced no local proxy request; the final production-artifact browser navigation produced 0 new console errors.
- These are **localhost working-copy results**, not a claim about the deployed production site. Deployment remains outside this audit.

## Status rules

- **PENDING**: the current source has not completed the new route-level evidence review.
- **CLAIM-REMEDIATED**: visible copy, metadata, structured data, card data, and FAQs were reconciled; volatile facts were checked against current primary sources; unsupported or overbroad claims were removed, bounded, or explicitly labelled; targeted ESLint passed.
- **REVALIDATED**: an already repaired route was checked again against its current primary sources and did not need another rewrite.
- **RELEASE-VERIFIED**: the complete corpus passed the strict per-route rendered predicate, representative shared-template desktop/mobile and interaction checks, structured-data and internal-link checks, and project release gates.

The inventory column records each route's **editorial disposition**. The corpus-level release-verification result is recorded in the current roll-up because shared-template desktop/mobile and interaction checks are representative rather than 77 separate manual visual certifications.

## Inventory

| # | Route | Baseline verdict | Current state | Batch |
|---:|---|---|---|---:|
| 1 | `/blog/aeo-playbook-built-into-every-website` | FAIL | CLAIM-REMEDIATED | 1 |
| 2 | `/blog/aeo-web-performance-glossary` | FAIL | CLAIM-REMEDIATED | 1 |
| 3 | `/blog/agentic-browsing-pagespeed-score` | NEEDS_REVIEW | CLAIM-REMEDIATED | 1 |
| 4 | `/blog/best-website-builder-for-gohighlevel-agencies` | FAIL | CLAIM-REMEDIATED | 1 |
| 5 | `/blog/build-vs-buy-software-2026-cost-comparison` | NEEDS_REVIEW | CLAIM-REMEDIATED | 1 |
| 6 | `/blog/cheap-web-developer` | FAIL | CLAIM-REMEDIATED | 1 |
| 7 | `/blog/cloudflare-emdash-wordpress-replacement` | PASS | REVALIDATED | 1 |
| 8 | `/blog/core-web-vitals-explained` | FAIL | CLAIM-REMEDIATED | 1 |
| 9 | `/blog/custom-website-5000-whats-included` | FAIL | CLAIM-REMEDIATED | 1 |
| 10 | `/blog/divi-theme-slow` | FAIL | CLAIM-REMEDIATED | 1 |
| 11 | `/blog/do-you-own-your-website` | NEEDS_REVIEW | CLAIM-REMEDIATED | 2 |
| 12 | `/blog/elementor-kills-seo` | FAIL | CLAIM-REMEDIATED | 2 |
| 13 | `/blog/fix-meta-ad-tracking-2026` | FAIL | CLAIM-REMEDIATED | 2 |
| 14 | `/blog/for-agencies-offer-custom-web-development` | FAIL | CLAIM-REMEDIATED | 2 |
| 15 | `/blog/gohighlevel-keep-crm-replace-website` | FAIL | CLAIM-REMEDIATED | 2 |
| 16 | `/blog/gohighlevel-website-speed` | FAIL | CLAIM-REMEDIATED | 2 |
| 17 | `/blog/google-march-2026-update` | PASS | REVALIDATED | 2 |
| 18 | `/blog/google-universal-commerce-protocol-what-it-means-for-your-store` | FAIL | CLAIM-REMEDIATED | 2 |
| 19 | `/blog/how-long-does-a-custom-website-take` | NEEDS_REVIEW | CLAIM-REMEDIATED | 2 |
| 20 | `/blog/how-much-does-a-website-cost` | FAIL | CLAIM-REMEDIATED | 2 |
| 21 | `/blog/how-to-achieve-100-pagespeed` | FAIL | CLAIM-REMEDIATED | 3 |
| 22 | `/blog/how-to-cut-saas-bill-2026` | FAIL | CLAIM-REMEDIATED | 3 |
| 23 | `/blog/how-to-fix-slow-wordpress` | FAIL | CLAIM-REMEDIATED | 3 |
| 24 | `/blog/how-to-migrate-wordpress-to-nextjs` | NEEDS_REVIEW | CLAIM-REMEDIATED | 3 |
| 25 | `/blog/how-to-speed-up-your-website` | FAIL | CLAIM-REMEDIATED | 3 |
| 26 | `/blog/how-website-speed-affects-seo` | FAIL | CLAIM-REMEDIATED | 3 |
| 27 | `/blog/is-squarespace-bad-for-seo` | NEEDS_REVIEW | CLAIM-REMEDIATED | 3 |
| 28 | `/blog/leaving-webflow-2026` | PASS | REVALIDATED | 3 |
| 29 | `/blog/lovable-site-not-showing-on-google` | FAIL | CLAIM-REMEDIATED | 3 |
| 30 | `/blog/meta-conversions-api-setup-cost` | NEEDS_REVIEW | CLAIM-REMEDIATED | 3 |
| 31 | `/blog/nextjs-hosting-zero-cost` | NEEDS_REVIEW | CLAIM-REMEDIATED | 4 |
| 32 | `/blog/nextjs-sanity-stack` | NOT IN 76-ROUTE BASELINE | CLAIM-REMEDIATED | 4 |
| 33 | `/blog/pagepro-alternatives` | FAIL | CLAIM-REMEDIATED | 4 |
| 34 | `/blog/saas-price-increases-2026-tracker` | NEEDS_REVIEW | CLAIM-REMEDIATED | 4 |
| 35 | `/blog/saas-software-pricing-audit-2026` | FAIL | CLAIM-REMEDIATED | 4 |
| 36 | `/blog/shopify-app-costs-real-monthly-bill` | FAIL | CLAIM-REMEDIATED | 4 |
| 37 | `/blog/shopify-conversion-rate-speed-fix` | FAIL | CLAIM-REMEDIATED | 4 |
| 38 | `/blog/shopify-dawn-theme-slow` | FAIL | CLAIM-REMEDIATED | 4 |
| 39 | `/blog/shopify-headless` | FAIL | CLAIM-REMEDIATED | 4 |
| 40 | `/blog/shopify-plus-still-slow` | FAIL | CLAIM-REMEDIATED | 4 |
| 41 | `/blog/shopify-slow-losing-sales` | FAIL | CLAIM-REMEDIATED | 5 |
| 42 | `/blog/shopify-stocky-sunset-date-2026` | NEEDS_REVIEW | CLAIM-REMEDIATED | 5 |
| 43 | `/blog/shopify-store-speed-optimization` | PASS | REVALIDATED | 5 |
| 44 | `/blog/shopify-vs-custom-website` | FAIL | CLAIM-REMEDIATED | 5 |
| 45 | `/blog/spending-more-on-ads-fewer-orders-tracking` | FAIL | CLAIM-REMEDIATED | 5 |
| 46 | `/blog/squarespace-migration-cost` | FAIL | CLAIM-REMEDIATED | 5 |
| 47 | `/blog/squarespace-too-slow` | FAIL | CLAIM-REMEDIATED | 5 |
| 48 | `/blog/squarespace-vs-custom-website` | FAIL | CLAIM-REMEDIATED | 5 |
| 49 | `/blog/top-custom-web-development-agencies-usa-2026` | FAIL | CLAIM-REMEDIATED | 5 |
| 50 | `/blog/top-nextjs-agencies-2026` | FAIL | CLAIM-REMEDIATED | 5 |
| 51 | `/blog/webflow-migration-cost` | FAIL | CLAIM-REMEDIATED | 6 |
| 52 | `/blog/webflow-true-cost` | FAIL | CLAIM-REMEDIATED | 6 |
| 53 | `/blog/webflow-user-accounts-sunset-date-2026` | FAIL | CLAIM-REMEDIATED | 6 |
| 54 | `/blog/webflow-vs-custom-website` | FAIL | CLAIM-REMEDIATED | 6 |
| 55 | `/blog/website-developer-agency` | FAIL | CLAIM-REMEDIATED | 6 |
| 56 | `/blog/website-migration-cost-2026` | FAIL | CLAIM-REMEDIATED | 6 |
| 57 | `/blog/website-rebuild-cost-2026` | FAIL | CLAIM-REMEDIATED | 6 |
| 58 | `/blog/website-redesign-cost` | FAIL | CLAIM-REMEDIATED | 6 |
| 59 | `/blog/what-is-headless-commerce` | NEEDS_REVIEW | CLAIM-REMEDIATED | 6 |
| 60 | `/blog/why-competitor-outranks-you` | FAIL | CLAIM-REMEDIATED | 6 |
| 61 | `/blog/why-is-my-website-loading-so-slow` | PASS | REVALIDATED | 7 |
| 62 | `/blog/why-we-chose-nextjs-over-wordpress-2026` | FAIL | CLAIM-REMEDIATED | 7 |
| 63 | `/blog/will-migrating-hurt-my-seo` | FAIL | CLAIM-REMEDIATED | 7 |
| 64 | `/blog/wix-migration-cost` | NEEDS_REVIEW | CLAIM-REMEDIATED | 7 |
| 65 | `/blog/wix-too-slow` | FAIL | CLAIM-REMEDIATED | 7 |
| 66 | `/blog/wix-vs-custom-website` | FAIL | CLAIM-REMEDIATED | 7 |
| 67 | `/blog/woocommerce-migration-cost` | FAIL | CLAIM-REMEDIATED | 7 |
| 68 | `/blog/woocommerce-too-slow` | FAIL | CLAIM-REMEDIATED | 7 |
| 69 | `/blog/woocommerce-vs-custom-website` | NEEDS_REVIEW | CLAIM-REMEDIATED | 7 |
| 70 | `/blog/wordpress-ai-security-risk-2026` | NEEDS_REVIEW | CLAIM-REMEDIATED | 7 |
| 71 | `/blog/wordpress-april-2026-evidence` | NEEDS_REVIEW | CLAIM-REMEDIATED | 8 |
| 72 | `/blog/wordpress-killer` | FAIL | CLAIM-REMEDIATED | 8 |
| 73 | `/blog/wordpress-migration-cost` | FAIL | CLAIM-REMEDIATED | 8 |
| 74 | `/blog/wordpress-plugins-destroy-speed` | FAIL | CLAIM-REMEDIATED | 8 |
| 75 | `/blog/wordpress-traffic-drop-speed` | FAIL | CLAIM-REMEDIATED | 8 |
| 76 | `/blog/wordpress-vs-custom-code-real-cost-3-years` | FAIL | CLAIM-REMEDIATED | 8 |
| 77 | `/blog/wordpress-vs-nextjs` | FAIL | CLAIM-REMEDIATED | 8 |

## Batch 1 evidence log

1. `/blog/aeo-playbook-built-into-every-website`: removed invented ranking, citation, timing, schema-lift, domain-age, zero-click, and hosting outcomes; rebuilt the playbook around current Google and OpenAI primary guidance and explicit evidence labels.
2. `/blog/aeo-web-performance-glossary`: corrected AI crawler, schema, performance, rendering, `llms.txt`, speakable, Core Web Vitals, TTFB, and redirect definitions; aligned visible copy, metadata, schema, card, and FAQs.
3. `/blog/agentic-browsing-pagespeed-score`: corrected the experimental Lighthouse category, Chrome 150 and origin-trial conditions, fractional result, and limits; labelled both screenshots as dated first-party evidence rather than ranking or causal proof.
4. `/blog/best-website-builder-for-gohighlevel-agencies`: refreshed official vendor facts and replaced invented platform score bands, latency, ad-waste, citation, cost, and superiority claims with a requirements and test matrix.
5. `/blog/build-vs-buy-software-2026-cost-comparison`: replaced adoption, timeline, payback, inflation, contract, anecdote, and universal custom-build claims with a scenario model using dated vendor inputs.
6. `/blog/cheap-web-developer`: replaced the article rather than patching isolated phrases; price bands are planning buckets, owner evidence is labelled, and hiring, SOW, SEO, security, accessibility, ownership, support, and change-control guidance is bounded.
7. `/blog/cloudflare-emdash-wordpress-replacement`: rechecked the April 1 Cloudflare announcement, live repository beta status, Node and Cloudflare paths, paid Dynamic Workers requirement, and Google guidance. The existing repaired copy remains supported.
8. `/blog/core-web-vitals-explained`: replaced universal site-pass rates, revenue math, ranking tiebreakers, platform ceilings, and score promises with current definitions, field/lab methodology, property-specific business measurement, and scoped acceptance criteria.
9. `/blog/custom-website-5000-whats-included`: reconciled the page with the published $1,500, $3,500, and $5,000 to $10,000 planning tiers plus the owner-approved 30/70 payment structure, contract-specific refund, business-day support, 90+ test protocol, ownership, and change control.
10. `/blog/divi-theme-slow`: removed the unsourced 60%, 1.58 million, $20,172, 950,000, benchmark extrapolation, platform ceiling, ranking, and migration-result claims; corrected Divi 5 to its official February 26 release and July 9 version status; rebuilt the route as an optimize, upgrade, rebuild, or migrate decision guide.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`. Rendered and browser validation remains pending and is not represented as complete.

## Batch 2 evidence log

11. `/blog/do-you-own-your-website`: replaced blanket ownership and “developer owns by default” language with a U.S.-focused contract-and-control checklist grounded in Copyright Office guidance and 17 U.S.C. § 204; separated custom deliverables, pre-existing materials, third-party licenses, accounts, data, payment and handoff.
12. `/blog/elementor-kills-seo`: removed the “kills SEO” conclusion, single-demo extrapolation, platform score and traffic claims; rechecked Elementor's June 19, 2026 performance-feature status and Google's current Core Web Vitals and page-experience guidance; rebuilt the route around rendered output and measured implementation evidence.
13. `/blog/fix-meta-ad-tracking-2026`: removed blanket iOS, ad-blocker, CAPI, attribution and privacy claims; reconciled delivery versus attribution, documented Pixel/server deduplication, bounded Event Match Quality, added consent and data-role controls, and labelled the Panda Patches screenshot as limited first-party evidence.
14. `/blog/for-agencies-offer-custom-web-development`: removed claims of 40+ agency use, fixed partner margins, universal capacity, delivery, concealment and outcomes; replaced them with referral, co-delivery and white-label models, a responsibility matrix, project-specific pricing, disclosure, ownership, acceptance and handoff terms.
15. `/blog/gohighlevel-keep-crm-replace-website`: preserved the high-intent hybrid architecture while removing crawler absolutes, fixed scores, unchanged-vendor-bill and workflow promises; rechecked current HighLevel API, OAuth, website and webhook documentation, including the dated legacy-signature deprecation statement.
16. `/blog/gohighlevel-website-speed`: preserved the slug, H1 intent and diagnostic depth but removed the unproven 14-site audit, 20-to-45 range, 1,300ms block, chiropractor outcome and ad/SEO causation; rebuilt the page around field and lab methodology, in-platform fixes and scoped hybrid acceptance.
17. `/blog/google-march-2026-update`: revalidated the March 27 to April 8 rollout against Google's current Search Status record and core-update guidance; corrected the FAQ recovery answer and refreshed the review date. No substantive claim rewrite was needed.
18. `/blog/google-universal-commerce-protocol-what-it-means-for-your-store`: rechecked Google's live UCP merchant guide, FAQ, Merchant API updates and the versioned open specification; separated open protocol capability from waitlisted, allowlisted or approved Google availability and removed platform, adoption, traffic, conversion and revenue predictions.
19. `/blog/how-long-does-a-custom-website-take`: removed universal 1-to-4-week, 7-day, 8-to-16-week and client-blame claims; replaced them with a dependency-based scheduling method, phase exit evidence and quality gates. The owner-approved MyCustomPatches 22-day figure is clearly labelled as a non-comparable first-party example.
20. `/blog/how-much-does-a-website-cost`: removed unsupported market bands, free-hosting assumptions, platform conclusions, ROI arithmetic and universal maintenance costs; published the owner-approved PandaCodeGen tiers, 30/70 arithmetic, support boundaries, total-cost worksheet, dated vendor links and a clearly labelled related-party Panda Patches cost example.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`, and the full TypeScript check passed after the batch. Rendered and browser validation remains pending and is not represented as complete.

## Batch 3 evidence log

21. `/blog/how-to-achieve-100-pagespeed`: removed the anonymous 45-to-90 client story, ranking and traffic claims, universal score promise and refund marketing; rebuilt the route as a repeatable 90-plus acceptance and diagnosis process that separates Lighthouse lab evidence from field Core Web Vitals and makes 100 a non-guaranteed diagnostic outcome.
22. `/blog/how-to-cut-saas-bill-2026`: removed universal 40-to-70-percent savings, unsupported benchmark and payback claims; replaced them with a contract, invoice, usage, owner and exit-ledger process. Corrected current Shopify uninstall billing behavior and used current Microsoft license-removal guidance.
23. `/blog/how-to-fix-slow-wordpress`: removed unsupported load-time, financial-loss, per-second conversion, traffic-band, host-price and automatic Next.js performance claims; rebuilt the route around WordPress's own profiling, hosting, version, theme, plugin, media, caching and monitoring guidance.
24. `/blog/how-to-migrate-wordpress-to-nextjs`: withheld the unretained 3.2-second, 45-score, 0.7-second and 97-score owner-result figures; retained the owner-confirmed MyCustomPatches 22-day delivery as labelled first-party evidence and reconciled metadata, FAQs and the author role.
25. `/blog/how-to-speed-up-your-website`: removed platform ceilings, unretained project metrics, ranking-recovery promises, universal subsecond outcomes and refund language; rebuilt the article around twelve route-level diagnostics, recorded test conditions and contract-defined acceptance.
26. `/blog/how-website-speed-affects-seo`: removed the 100-millisecond revenue formula, ranking-position causation, platform ceilings and universal client results; aligned the article with Google's current Core Web Vitals, page-experience, mobile-first indexing and traffic-diagnostic guidance.
27. `/blog/is-squarespace-bad-for-seo`: removed the unsupported 40-plus-site audit, three-to-five-second LCP range, platform score and ranking ceilings, competitor arithmetic and schema-citation claims; rebuilt the page from current Squarespace and Google guidance as a stay, optimize or migrate diagnostic.
28. `/blog/leaving-webflow-2026`: revalidated the May 2026 Premium plan transition, prices, included CMS items and bandwidth rules against Webflow's July 2 update; rechecked export exclusions and completed Logic and User Accounts sunsets. Existing route logic remains bounded, and its review date was refreshed.
29. `/blog/lovable-site-not-showing-on-google`: corrected the material false premise that Lovable universally sends crawlers an empty client-side shell. Current Lovable documentation says new apps created from May 13, 2026 use TanStack Start SSR and older public React and Vite apps use verified-crawler pre-rendering. Removed unsupported Bolt, Replit, v0, raw-byte and crawler comparisons and rebuilt the route around publishing, URL Inspection, indexing, page signals and measured migration criteria.
30. `/blog/meta-conversions-api-setup-cost`: removed the unsupported $4,000-to-$16,000 market range, labor assumptions, “misses half,” efficiency and infallible-delivery claims; added a scope worksheet, consent and data-governance controls, deduplication tests and acceptance evidence. Retained the owner-provided Panda Patches screenshot only as platform-reported first-party operational evidence, explicitly noting that the visible image does not show its capture year and does not establish incremental conversions.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`, the full TypeScript check passed, and the batch route files contain no en or em dashes. Rendered and browser validation remains pending and is not represented as complete.

## Batch 4 evidence log

31. `/blog/nextjs-hosting-zero-cost`: rechecked Vercel's July 2026 pricing and June 2026 terms; corrected Hobby to personal, non-commercial use, preserved current allowance and Pro pricing only with dated context, added the current model-training term, and withheld unretained MyCustomPatches performance figures.
32. `/blog/nextjs-sanity-stack`: completed the first full evidence audit for the 77th route; replaced default-stack and superiority language with current Sanity integration, visual-editing, localization, security and pricing facts plus a requirements-led fit and acceptance framework.
33. `/blog/pagepro-alternatives`: removed unsupported agency prices, ratings, minimums, guarantees and quality comparisons; replaced them with current first-party service positioning, a commercial disclosure, an RFP evidence matrix and PandaCodeGen's own clearly non-comparative tiers.
34. `/blog/saas-price-increases-2026-tracker`: replaced the unsupported nine-vendor tracker, savings claims and inflation conclusions with three dated primary-source entries covering Microsoft's July 2026 changes, Webflow's May 2026 transition and Klaviyo's earlier active-profile policy where it still affects a 2026 renewal.
35. `/blog/saas-software-pricing-audit-2026`: removed unsupported unused-license, dormant-user, savings, payback and zero-recurring-cost claims; rebuilt the route around invoices, contracts, measured use, security, dependencies, exit risk and scenario-based total cost.
36. `/blog/shopify-app-costs-real-monthly-bill`: removed volatile price tables, universal app-spend bands, supposed equivalent swaps, fixed savings and unreconciled Panda Patches figures; corrected Shopify's uninstall rule and rebuilt the route as an invoice, dependency, performance and total-cost audit.
37. `/blog/shopify-conversion-rate-speed-fix`: removed the claim that a 1.4-percent conversion rate was caused by a four-second load plus fixed abandonment, uplift and revenue-loss figures; rebuilt the route around Shopify's defined funnel, segmentation, field performance, attribution and controlled intervention design.
38. `/blog/shopify-dawn-theme-slow`: removed the invented Dawn PageSpeed ceiling, fixed headless advantage and unretained project metrics; aligned the page with Dawn's current reference-theme status, Shopify field reports, controlled previews, app and theme tracing, and implementation-specific architecture decisions.
39. `/blog/shopify-headless`: removed the universal Liquid bottleneck, unsourced agency cost bands, fixed post-launch timeline, ranking movement, conversion lift and payback claims; rebuilt the route as a theme, Hydrogen or custom Storefront API decision with current analytics, SEO migration, compatibility, ownership and lifecycle controls.
40. `/blog/shopify-plus-still-slow`: removed the assertion that Plus is structurally slower, fixed rendering delays, revenue-loss math, app and catalog generalizations and headless inevitability; rebuilt the route as an enterprise field-and-lab diagnostic with region and contract-sensitive pricing context.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`. The full repository `npm run check` then passed TypeScript, ESLint, all 35 security and form tests, and the narrow public-claim guard. The batch route files contain no en or em dashes. Rendered and browser validation remains pending and is not represented as complete.

## Batch 5 evidence log

41. `/blog/shopify-slow-losing-sales`: removed fixed loss-per-second, compounding revenue, payback and ROI claims; rebuilt the route around joined field and funnel evidence, bounded opportunity scenarios, controlled interventions and measured incremental profit.
42. `/blog/shopify-stocky-sunset-date-2026`: rechecked Shopify's August 31, 2026 cutoff, February 2 delisting, unspecified read-only period, non-transferring records, supplier-export gap and API cutoff; removed volatile replacement prices, motive speculation and permanent-custom-fix language.
43. `/blog/shopify-store-speed-optimization`: revalidated the existing field-first repair against current Shopify performance documentation and refreshed its review date. The route remains implementation-specific and does not prescribe headless as an automatic fix.
44. `/blog/shopify-vs-custom-website`: removed the universal five-sign switch rule, zero-interruption, conversion uplift, no-limit and custom-can-do-everything claims; replaced them with a Shopify theme, headless Shopify and fully custom requirements and responsibility framework.
45. `/blog/spending-more-on-ads-fewer-orders-tracking`: removed the 50-percent-invisible claim, fixed EMQ thresholds and outcomes, platform causation, AI-shopping linkage and automatic package inclusion; rebuilt the route around an event contract, reconciliation, consent, deduplication and current Meta and Google controls.
46. `/blog/squarespace-migration-cost`: removed the unsupported migration median, undercount percentage, zero-downtime implication and universal ROI; rebuilt pricing from PandaCodeGen's published tiers plus actual export gaps, pages, systems, SEO, acceptance, support and operating scope.
47. `/blog/squarespace-too-slow`: removed the 30-to-55 platform ceiling and anonymous outcome; aligned the route with Squarespace's current page-size, font, custom-code and redirect guidance and a stay, optimize or migrate decision.
48. `/blog/squarespace-vs-custom-website`: removed the fixed performance ceiling, low-traffic and monthly-cost thresholds and universal custom superiority; rebuilt the comparison around editing, features, current invoices, export, SEO, lifecycle cost and operating responsibility.
49. `/blog/top-custom-web-development-agencies-usa-2026`: replaced the self-awarded number-one ranking, stale prices and reviews, unsupported competitor criticism and AI recommendation experiment with a disclosed, non-ranked official-source shortlist. It now distinguishes agencies, studios, a WordPress marketplace and a talent network.
50. `/blog/top-nextjs-agencies-2026`: replaced the "most cited by AI" premise, stale third-party ratings and minimums, self-superiority and unverified company claims with an alphabetical, commercially disclosed comparison based on each provider's current first-party services.

Targeted and full ESLint passed, TypeScript passed, all 35 security and form tests passed, and the narrow public-claim guard passed. The batch route files contain no en or em dashes. Rendered and browser validation remains pending and is not represented as complete.

## Batch 6 evidence log

51. `/blog/webflow-migration-cost`: removed unsupported migration-market prices, universal timelines, export completeness, ranking-retention and ROI claims; rebuilt the route around PandaCodeGen's published tiers, current Webflow code and CMS export limits, replacement work and evidence-based quote comparison.
52. `/blog/webflow-true-cost`: removed universal monthly bands, the unsupported $1,476 client example, platform-wide performance ceilings and ranking causation; rebuilt total cost from the actual Website and Workspace invoice, add-ons, usage, external services, internal work, exit and current export constraints.
53. `/blog/webflow-user-accounts-sunset-date-2026`: rechecked the January 31, 2025 enablement cutoff and January 29, 2026 sunset against Webflow's current help, update and developer records; accurately described data, page, gate, login, API, webhook and eligible Stripe-subscription behavior without inventing recovery outcomes.
54. `/blog/webflow-vs-custom-website`: removed universal performance, cost and ownership superiority; rebuilt the choice around editing, requirements, portability, current Webflow export exclusions, lifecycle responsibility, SEO risk and written ownership terms.
55. `/blog/website-developer-agency`: removed zero-hosting, universal 90-plus, market price, platform score, traffic and agency-behavior claims; rebuilt the buyer guide around services, evidence, WCAG 2.2, OWASP ASVS, provider models, ownership and six contract questions.
56. `/blog/website-migration-cost-2026`: removed the fabricated 47-scenario dataset, platform medians, competitor-markup accusation, universal one-week delivery, receipts, zero-cost stack and payback claims; rebuilt all seven platform sections from current export, replacement, acceptance and operating requirements.
57. `/blog/website-rebuild-cost-2026`: removed the unsupported $2,000-to-$250,000 market range, fixed timelines, platform-cost conclusions, rebuild cycle and quote-padding accusations; rebuilt the route around PandaCodeGen's tiers, seven cost drivers, project-type boundaries, SEO safeguards, total cost and contract terms.
58. `/blog/website-redesign-cost`: removed broad market and labor bands, overrun and uplift percentages, agency criticism, universal revision and delivery promises; rebuilt the route around same-platform scope, four pricing variables, valid experiment design, design systems, proposal comparison, change handling and PandaCodeGen's own tiers.
59. `/blog/what-is-headless-commerce`: removed the unsupported 4-second-to-0.8-second claim, product and traffic thresholds, named-brand architecture assumptions and unretained project metrics; rechecked current Shopify Storefront API, Hydrogen, Medusa and Sanity guidance and rebuilt the decision around capabilities, evidence and operational ownership.
60. `/blog/why-competitor-outranks-you`: removed the unsupported three-times-traffic claim, coded-site preference, platform causation and cost conclusions; rebuilt the route around seven evidence groups, Search Console and analytics roles, Google's current ranking and AI-feature guidance, and Bing's 2026 AI Performance limits.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`, TypeScript passed, all 35 security and form tests passed, and the narrow public-claim guard passed. The batch route files and blog data contain no en or em dashes or the identified retired claim strings. Rendered and browser validation remains pending and is not represented as complete.

## Batch 7 evidence log

61. `/blog/why-is-my-website-loading-so-slow`: revalidated the July 23 field-and-lab rewrite against current Google guidance; corrected the remaining generic card FAQs so hosting, caching, network and browser-layer answers now match the article.
62. `/blog/why-we-chose-nextjs-over-wordpress-2026`: removed the false company timeline, permanent platform switch, universal WordPress and Next.js performance claims and unsupported client results; rebuilt the route as a requirements-led explanation of where either platform fits, retaining only the owner-confirmed MyCustomPatches 22-day delivery as labelled first-party evidence.
63. `/blog/will-migrating-hurt-my-seo`: removed the safe-migration certainty, single-cause language, ranking protection language and performance-to-ranking implication; aligned metadata and FAQs with URL dispositions, rendered output, monitoring and non-guaranteed search outcomes.
64. `/blog/wix-migration-cost`: removed the universal no-export, manual-only, low-cost-provider criticism, DIY multiplier and ranking-survival claims; rechecked current Wix CMS, contact, physical-product, order, site and domain transfer paths and rebuilt pricing around PandaCodeGen's own tiers plus actual migration scope.
65. `/blog/wix-too-slow`: removed the fixed performance ceiling, anonymous performance result, platform causation and inevitable-migration language; rebuilt the page around Wix field reporting, controlled lab diagnosis, in-platform repairs and measurable migration criteria.
66. `/blog/wix-vs-custom-website`: removed traffic, monthly-cost, performance and three-year thresholds plus universal custom superiority; rebuilt the comparison around editing, features, current invoices, export limits, SEO, security, ownership and operating responsibility.
67. `/blog/woocommerce-migration-cost`: removed competitor-price criticism, universal data portability, hosting and payback claims; rebuilt the route around products, customers, orders, HPOS state, payments, subscriptions, extensions, privacy, reconciliation and live cutover.
68. `/blog/woocommerce-too-slow`: replaced the high-impression route without reducing its diagnostic breadth; removed invented typical scores, query counts, fixed revenue math, ranking thresholds, architecture certainty, anonymous outcomes and speculative agentic-commerce claims. The new guide covers field and lab evidence, eight cause groups, cart, checkout, admin, HPOS, fix order and repair versus headless versus replacement.
69. `/blog/woocommerce-vs-custom-website`: removed platform score, cost, security and ownership generalizations; rebuilt the route as a WooCommerce, headless WooCommerce and custom-commerce requirements comparison covering capabilities, editing, data, lifecycle, migration and exit.
70. `/blog/wordpress-ai-security-risk-2026`: corrected the false claim that 100,000 sites were exposed or compromised; rechecked the current AI Engine directory entry and Wordfence records, documented dated affected-version and configuration conditions, and added patching, credential rotation, least privilege, privacy, logging and incident-response guidance without presenting custom software as risk-free.

Targeted ESLint passed for all ten route files and `src/data/blog.ts`, TypeScript passed, all 35 security and form tests passed, and the narrow public-claim guard passed. The batch route files and blog data contain no en or em dashes, mojibake markers or the identified retired claim strings. Rendered and browser validation remains pending and is not represented as complete.

## Batch 8 evidence log

71. `/blog/wordpress-april-2026-evidence`: rebuilt the route as a dated record of three verifiable April items. Corrected the WooCommerce merchant-thread date, removed the unsupported memo, attack-count, affected-site and conversion claims, separated advisory facts from platform conclusions, and noted that WordPress 7.0 shipped in May rather than treating it as an April event.
72. `/blog/wordpress-killer`: replaced the fear-led “killer” argument with an invoice-led three-year TCO method. Removed universal WordPress totals, fixed payback, lost-traffic arithmetic and permanently free custom operation; retained the high-intent URL while making the decision depend on like-for-like capability, labor, incidents, roadmap and exit costs.
73. `/blog/wordpress-migration-cost`: preserved the core search and offer intent while reconciling the published $1,500, $3,500 and $5,000-to-$10,000 planning tiers with pages, templates, content, plugins, data, SEO, accessibility, performance acceptance, ownership, payment, support and cutover. Removed conflicting floors, competitor-price criticism, unreconciled performance receipts and ROI claims.
74. `/blog/wordpress-plugins-destroy-speed`: replaced plugin-count causation with a frontend, server, database, scheduled-job and third-party impact audit. Removed fixed revenue loss and “only permanent fix” language and added an isolate, repair, replace or replatform hierarchy.
75. `/blog/wordpress-traffic-drop-speed`: retained the Search Console-led differential diagnosis while separating measurement, technical or release, demand, search or content, and performance hypotheses. Removed the fixed traffic-loss example, permanent-free-hosting claim, automatic AI-citation implication and recovery-window promises.
76. `/blog/wordpress-vs-custom-code-real-cost-3-years`: rebuilt the comparison as an editable, like-for-like three-year model covering capability, delivery, operation, change, risk and exit. Removed universal totals, payback timing, lost-revenue arithmetic and the assumption that custom software has no recurring cost.
77. `/blog/wordpress-vs-nextjs`: rebuilt the route as an integrated-CMS versus assembled-application comparison across architecture, editing, performance, SEO, security, features, TCO, ownership, team capability, headless use and migration. Removed platform-wide score, cost, security, revenue and traffic claims while retaining the owner-confirmed 22-day MyCustomPatches delivery only as labelled first-party evidence.

The batch files, their `src/data/blog.ts` cards and FAQs, and shared visual dependencies were reconciled. The visual audit then found and repaired three missing `article` landmarks plus shared animations that still asserted fixed revenue, ranking, PageSpeed, cost, crawler, ownership or security outcomes. The final localhost MCP sweep checked all 77 routes and returned zero issue routes. `npm run check` passed after those repairs.

## Local release-verification log

- MCP Playwright discovered exactly 77 unique article links from `/blog`.
- All 77 returned 200 and passed the 16-field structural render predicate documented in the current roll-up.
- Phone is optional in the quote dialog and API parser; only name and email are required. The form's native validity check passed with phone empty.
- With no stored consent, no optional GA, Meta, Clarity, Tawk, Cal, Vercel Analytics, IP-geolocation or related vendor request was observed. After all categories were accepted, the available local Vercel Analytics integration loaded; other integrations remained absent because their public IDs are not configured in this localhost session.
- A started-and-closed quote emitted `lead_form_started`, `lead_form_progress`, and `lead_form_abandoned` with aggregate identifiers, counts, elapsed time and reason. The typed value was not included.
- The audit endpoint rejected `http://127.0.0.1:3000` with HTTP 400 and `Cache-Control: no-store`.
- Duplicate consented Web Vitals reports discovered during the browser pass were deduplicated, and legacy FID events were suppressed in favor of the current INP-era reporting model.
- Browser evidence is a localhost working-copy result. Production deployment, production credentials, vendor dashboards, field Core Web Vitals and post-deploy crawl/indexing remain owner-controlled follow-up work.
