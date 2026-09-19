# Blog and topic-hub positioning inventory

The broader homepage offer should be reflected in company descriptions, accurate prices, optional support terms and relevant commercial links. It should not turn every article into a general website-design page. A visitor arriving with a Divi, WooCommerce or AI-search question still needs that particular question answered first.

This is a read-only source review on 15 September 2026. It samples five relevant articles, shared navigation components and the topic registry. It is not a fresh technical fact-check of every statement in those articles, a rendered interaction test, or a production-deployment check. No application files were changed.

## Shared architecture and what actually needs alignment

| Surface | Current source finding | Bounded action |
| --- | --- | --- |
| `src/components/blog/TopicUpLink.tsx` | Reads the canonical hub and commercial destination from the registries. Already includes the anchor “our AI SEO services” for `/services/ai-seo`. | Keep the contextual article-to-service route. Do not redirect every article to the homepage. |
| `src/components/ui/RelatedPosts.tsx` | Selects articles using topical overlap and gives canonical-hub siblings priority. Uses titles and excerpts from `src/data/blog.ts`. | Preserve the topical relationship logic. Correct any changed factual excerpt in the registry as well as the article body. |
| `src/data/topical-map.ts:387` | The `seo-aeo` cluster correctly has `/services/ai-seo` as its commercial destination. | The earlier missing-commercial-page gap is resolved in this registry. Do not report it as still pointing to editorial policy. |
| `src/data/hubs.ts:220` | The SEO/AI hub still sets its closing CTA to `/pricing`. Its policy sentence uses `[[money]]`, which now resolves to the AI SEO service. | Send the commercial close to `/services/ai-seo`; give editorial policy a separate correctly labelled link. Rewrite the policy sentence so it does not promise policy information on a service page. |
| `src/app/blog/topic/[topic]/page.tsx:51` | `MONEY_LABEL` lacks `/services/ai-seo`, so the service gets the generic fallback “our services”. | Add a specific AI SEO service label alongside the corrected hub CTA. Check the rendered intro, middle service link and closing link together. |
| `src/app/blog/page.tsx:8` and `BlogPageClient.tsx` | Index metadata and H1 lead with migration, SEO and speed. The description also mentions commerce, costs and architecture. | A broader index label such as “Website, ecommerce and search guides” is a reasonable later editorial change. Keep the topic chips and useful guide taxonomy. It is not needed to make an individual migration guide truthful. |
| `src/components/blog/EvidenceSafeArticle.tsx` | Contains a migration-plan CTA, but the source scan found **no current article imports** of this component. | Do not treat editing this unused template as fixing the live blog CTAs. |

The AEO hub mismatch is particularly concrete. Its final introduction paragraph currently says “How we source, date, and correct what we publish is written up in [[money]].” Since the money destination was changed, that sentence now points to the service with the anchor “our AI SEO services”. This is a label/destination error produced by a partial taxonomy update.

There is also a small shared copy issue in `TopicUpLink`: it says the parent collects the topic “in reading order” even when the parent is a service-owned cluster rather than a hub. Use wording conditional on the parent type when this component is next revised.

## Five article samples

### Divi performance

Source: `src/app/blog/divi-theme-slow/page.tsx`.

The title and H1 are “Divi Theme Slow? A 2026 Diagnostic and Fix Guide”. The opening diagnoses the current website and asks the reader to locate the cause before paying for another plugin or committing to a rebuild. This is the right subject for that URL. Its platform name belongs in its title and opening even if the homepage removes platform names from its H1.

An early paragraph at line 190 adds the $1,500 rebuild offer. That can remain topic-specific; it does not need an extra sentence advertising new websites. If moving sales copy is part of a later flow revision, place that offer beside the help section instead of adding more company description to the answer.

The close at lines 563–572 says “Get your Divi migration plan”, but uses `CalModalButton`. The actual next step is calendar consent/booking, not instant delivery of a migration plan. Either retain a genuinely described booking action or use an enquiry action with the approved question wording. Do not change only the visible words and leave an unexpected interaction behind them.

### GoHighLevel performance

Source: `src/app/blog/gohighlevel-website-speed/page.tsx`.

The H1 “GoHighLevel Site Slow? Diagnose and Fix It in 2026” and short answer are specific to the reader's problem. The article considers fixing the existing site before a hybrid frontend and explains that HighLevel can remain the CRM. Preserve this distinction; a general statement about migrating away from every platform would make the advice less accurate.

The entry-price sentence appears in the short answer at line 193. The close at lines 539–546 uses “Get Your Migration Plan” on `CalModalButton`, the same interaction mismatch as Divi. Keep the `/services/gohighlevel` contextual link and the integration requirements rather than redirecting the reader to a broad homepage pitch.

### WooCommerce performance

Source: `src/app/blog/woocommerce-too-slow/page.tsx`.

The title “WooCommerce Too Slow? A 2026 Diagnosis and Fix Guide” and early summary prioritise repairing the store before considering replacement. Keep that intent, URL, H1 and diagnostic order. At line 199 the page adds a $1,500 rebuild entry point; at line 569 it lists three planning tiers without saying every store must start at $5,000. This sample alone does not establish a store-minimum contradiction on this particular article.

Its close at lines 597–605 is headed “Get evidence before choosing the fix” and uses `QuoteModalButton`, unlike Divi and GoHighLevel. “Ask us about your site” fits that enquiry action better than “Get your migration plan”. The paragraph should describe the initial conversation and scoped work without suggesting the form itself immediately supplies a diagnostic deliverable.

### llms.txt explanation

Source: `src/app/blog/what-is-llms-txt/page.tsx`.

This remains an informational format/example article. Preserve its informational focus rather than adding generic website-design terms to the H1. Its shared `TopicUpLink` now provides a route to the AI SEO service.

The final bespoke CTA says “Book a 30-minute technical discovery call” but links to `/contact`. Align the action with that destination, or provide a real booking action if a calendar is intended. The “How we ship it” section contains claims about universal build inclusions and why AI systems quote content; those need an evidence and scope review separately from the homepage positioning exercise. This inventory has not reverified those technical claims.

### AEO playbook

Source: `src/app/blog/aeo-playbook-built-into-every-website/page.tsx`.

The playbook is an informational guide and can retain its topic. Two company descriptions are narrow: line 328 says the business does rebuilds and migrations for owners of slow platforms, and line 634 calls PandaCodeGen a website-migration and engineering brand. Align those factual business descriptions with the new-build, ecommerce, redesign and migration offer.

The late sales material concentrates on website builds, price tiers and a discovery call. The now-existing monthly AI SEO service deserves a concise contextual link for readers who already have a suitable website. Do not imply that buying a new website is the only route to help with the guide's subject. The shared uplink does already expose that service, so the issue is the bespoke sales narrative rather than a completely absent link.

## Cross-blog facts and CTA inventory

A case-insensitive search found **68 article files** containing “Get your migration plan”. This is a triage count, not 68 confirmed defective buttons: matches include headings, different capitalisation, different interaction components and contextually relevant migration pages. There are **87 article files** importing or referencing `TopicUpLink`; the shared relationship system already exists.

One additional factual example is `src/app/blog/is-it-cheaper-to-build-your-own-website/page.tsx:316`: “There is no retainer.” The agreed company position is that a retainer is optional, including monthly AI SEO; “No compulsory retainer” expresses the relevant build condition. The neighbouring hosting-cost sentence should also be checked against the current per-client hosting arrangement before being repeated elsewhere.

Do not update every author biography merely because it describes migration or performance experience. A topic-specific account of relevant expertise can remain true. Update a biography if it falsely restricts the company to migration only or conflicts with current roles or ownership facts.

## Suggested rollout

1. Correct explicit current-offer contradictions and the AEO hub's wrong policy/service destinations. Use the agreed offer as the source and record the actual deployment date.
2. Audit the five sampled closing actions as a small batch. Match button wording to enquiry, calendar or service-page navigation. Reuse the approved reassurance near actual enquiry submission.
3. Review the remaining 68-match queue by topic and destination. Keep diagnosis-led openings and use a contextual service link. Do not perform a blind search-and-replace across buttons or article titles.
4. Consider broader blog-index copy and contents navigation as a separate structure pass. The sampled articles' lack of a contents-navigation component is a navigation question, not a reason to rewrite their factual answers.
5. Verify affected pages, the hub and shared header/footer together. Check links, mobile layout, CTA consent/booking behaviour and relevant existing claim/link checks. Date only substantive article changes accurately; do not present unchanged guides as newly researched.

`docs/evidence-audit/BASELINE_2026-09-13.md` records a 28-day measurement plan and a factual-correction exception. Its existing assertions that any edit “destroys” measurement are stronger than this inventory adopts. An edit changes the comparison and needs an annotation; it does not erase all performance data. Those records should be updated to describe the actual released batch and exposure. They are context for measurement, not a reason to leave a false price or wrong link in place, and no additional approval requirement is inferred here.

Success would mean truthful consistent commercial information and clearer next steps while articles continue to answer their own search questions. This is not a promise of a sitewide ranking boost.
