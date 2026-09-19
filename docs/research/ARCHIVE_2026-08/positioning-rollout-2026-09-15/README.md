# Positioning consistency rollout

**Align the current business facts across the website and maintained external profiles. Preserve each article's subject and search intent.** This is a useful accuracy and navigation improvement; it is not a guaranteed ranking or AI-visibility boost.

The company now describes its primary offer as custom business websites and online stores, including first builds and replacements. Migration is one delivery situation. That broader offer should be reflected wherever the site describes the company. It does not require every WordPress, WooCommerce or AEO article to become a general website-design page.

## Expected benefit

Consistent facts remove contradictory prices, outdated scope and misleading next steps. Relevant internal links give readers a route from their question to an appropriate service. The likely commercial benefit is a clearer buying journey; any increase in qualified enquiries must be observed after publication rather than promised.

Google says Organization structured data can help identify and distinguish an organization, and allows links to relevant social or review profiles. That supports accurate identity information; it does not establish a ranking reward for copying an identical biography everywhere. [Google Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization)

For Google's AI Overviews and AI Mode, ordinary search eligibility and helpful content remain relevant. Google explicitly says that additional AI text files or special markup are not required. Keeping `/ai-info` and `llms.txt` accurate is sensible maintenance, but neither is an automatic route into AI answers. This guidance concerns Google's features, not every assistant's undocumented selection process. [Google AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features)

## Source of truth

Keep [company-facts.ts](../../../src/data/company-facts.ts) as the shared factual source. The [copy packet](canonical-copy.md) is a proposed expression of those facts, not a competing authority. Centralise reusable price boundaries and short company descriptions where possible, so page cards, FAQs and machine-readable summaries do not each maintain a different commercial rule.

The facts to keep aligned are the company identity, primary services, website/simple-store starting price, separately quoted software, optional AI SEO and support, content editing and handover, hosting arrangements, contact details, and project relationships. Price floors must agree with the actual entry scope. Larger scope can legitimately have a higher starting point when the reason is stated.

Historical measurements and customer quotations are separate evidence. Do not rewrite them to match a new marketing line. Correct inaccurate claims with the relevant source and correction record; preserve dates and measurement conditions.

## Rollout order

| Order | Surfaces | Concrete work |
| --- | --- | --- |
| 1 | Shared facts, homepage, pricing, service cards and quiz | Finish the $1,500 simple-store reconciliation. Selling products must not automatically produce a $5,000 recommendation. Align the broader company description and enquiry route. |
| 2 | About, `/ai-info`, reference subpages, metadata, schema and `llms.txt` | Update current company descriptions, price summaries, optional services and ownership wording from the agreed facts. Check both visible text and generated metadata. |
| 3 | Hubs, cluster links and shared related-service components | Make policy links go to policy, AI SEO service links go to the AI SEO page, and pricing links accurately describe their destination. Preserve informational hub titles. |
| 4 | Blog company descriptions, offer boxes, FAQs and CTAs | Correct stale business statements and route-specific actions. Keep useful article titles, URLs and diagnostic explanations unless they have their own documented problem. |
| 5 | Maintained company profiles and sales materials | Adapt the same facts to each profile's format. Verify profile identity and website links. Publish only the fields the company controls; do not alter independent reviews. |

## Current findings that make this necessary

The primary offer in company facts already reflects new websites and online stores. `/ai-info` still contains older migration-only descriptions and pricing text that treats a shop as automatically Scale. The `llms.txt` introduction is broader, but its separate primary-offer and Scale descriptions remain stale. The homepage pricing quiz and FAQ retain the same store-pricing contradiction. The [canon inventory](canon-inventory.md) records the current locations.

The AEO cluster's `pillarHref` already points to `/services/ai-seo`; it should not be changed again. However, its hub introduction still describes the `[[money]]` link as the place explaining publication policy, although that link now resolves to AI SEO services. The hub also retains a general-pricing CTA and the shared destination-label map lacks an AI SEO entry. Those are specific wording/destination defects, not a reason to rename the entire cluster. [hubs.ts](../../../src/data/hubs.ts), [hub renderer](../../../src/app/blog/topic/[topic]/page.tsx), [topical map](../../../src/data/topical-map.ts)

The sampled blogs show why a global label replacement is unsuitable. A migration-labelled action can open a calendar on one article and an enquiry modal on another. Replacing both with an enquiry label while retaining those different behaviours would create a new mismatch. Decide the intended interaction and make its label and destination agree. The [blog and hub inventory](blog-hub-inventory.md) gives examples and a bounded sequence.

## How to handle blog wording

A WooCommerce troubleshooting article should continue to solve a WooCommerce problem. Its company-description paragraph can acknowledge broader capabilities, but the primary service link should still match the reader's situation. An AEO explainer should answer the informational question before inviting a reader to examine the monthly AI SEO service. A platform migration guide can retain migration-specific language where that is the service being discussed.

Change a title, opening or heading when the article's accuracy, usefulness or actual intent requires it. Do not do so merely because the homepage has a broader slogan. Likewise, do not add an identical promotional paragraph to every post or refresh dates simply to suggest newness. Google's stated goal is helpful, reliable content for people. [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

For content being observed in a measurement window, record factual and CTA corrections with the actual deployment date. Preserve genuine article substance when correcting its company boilerplate. A batch may be operationally convenient, but it cannot isolate the effect of every individual edit in a later before/after comparison.

## Social and external profiles

Use the same offer and identity with context-appropriate wording. A short profile can name websites, stores, new builds and rebuilds. A longer agency description can include the starting price, founder involvement, editing, ownership and optional services. Founder biographies should describe the person's actual role; they should not be treated as interchangeable with the company's profile.

Begin with the organization profiles already listed in [company-facts.ts](../../../src/data/company-facts.ts), then verify which URLs still resolve to the correct company and which fields are editable. The repository's prior verification date is not a new live profile audit. This turn did not edit or publish social profiles, send messages, or claim that their current biographies were checked.

The wording should not promise that all websites have no running costs, that every integration fits the entry price, that every platform must be replaced, or that speed, rankings and citations are guaranteed. Keep affiliated projects clearly labelled wherever they appear. The [canonical copy packet](canonical-copy.md) supplies short and long versions using the agreed offer.

## Verification and observation

Review representative rendered pages after implementation: homepage and quiz, pricing FAQ/schema, company reference, `llms.txt`, the AEO hub and a sample of article CTAs. Check that an enquiry label opens an enquiry and a call label opens the call route. Test the simple-store example against all published starting-price explanations.

Record the publication boundary and the versions of profile copy. Evaluate qualified enquiries, relevant service clicks and successful form completion, alongside search visibility on affected pages. Report observations without asserting that repeated wording itself caused a boost.

This document and its supporting inventories are a rollout specification. Application and external-profile changes have not been applied by this review.
