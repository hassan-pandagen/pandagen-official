# Homepage revision follow-up audit

**Keep the broader headline, the shared $1,500 starting price and the clearer enquiry labels. The implementation is better, but the handoff overstates its completeness and what can be inferred about customer behaviour.** The most urgent remaining defect is a pricing selector that still sends every store to $5,000, contradicting the new hero on the same page.

This audit checks the working tree at commit `5c76e708a4551a74d0e4a4157b801cb7c5dabfca` and the existing local production build on 15 September 2026. It also checks primary guidance on interface labels, experimentation, service measurement and search relevance. No application files were changed, forms submitted, new build produced or deployment performed. The earlier eight-agency benchmark remains useful context; its observations do not establish conversion outcomes.

## Verdict on the handoff

| Statement | Finding |
| --- | --- |
| Websites and online stores can start at $1,500 | Supported by the existing ecommerce Starter offer and the owner's clarification. |
| The split in pricing has been resolved | Incomplete. The homepage FAQ, quiz, pricing page and machine-readable summaries retain the older blanket store floor. |
| The response note is now directly under submit | Verified in source and the local render. Its current wording is about response time, fit and scope. |
| The reassuring permission not to buy is now under submit | Not literally true. That clause remains in the introduction above the fields. |
| Inline and modal form journeys now match | Their headings and submit labels match; their introductory wording and field sets still differ. |
| Send your question asks for less | It describes the action more clearly. The required fields have not decreased; a lower perceived commitment has not been measured. |
| The old H1 was turning away buyers | A plausible interpretation risk, not an established behavioural result. |
| Measurement is gone | Incorrect as an absolute. Isolating the effect of each edit is difficult; performance measurement remains possible. |

## Price: correct decision, incomplete propagation

The ecommerce Starter card already lists a small storefront from $1,500, including up to 20 products, Shopify Storefront API integration, Next.js and a content editor. It exists in the parent of the correction commit; the matching price phrase appears in history by 8 September. This supports the entry price without inventing a new offer. It does not mean every platform migration or store configuration fits that scope. [Ecommerce source](../../../src/app/services/ecommerce/PageContent.tsx)

The earlier recommendation in this research folder to advertise all online stores from $5,000 was wrong. It relied on the company facts without reconciling the already-published ecommerce entry package. The shared $1,500 floor should remain, with scope explained on the relevant pricing route.

The key defects are:

1. **The homepage quiz makes the wrong recommendation.** Selecting that the business sells products assigns `scale`, and the highest answer determines the result. Starter also says there is nothing to buy. This requires a decision-rule correction, not just a text replacement. Until simple and complex commerce can be distinguished honestly, store buyers can be directed to the existing ecommerce scope table. [TierQuiz.tsx](../../../src/components/sections/TierQuiz.tsx), lines 22, 73 and 90.
2. **The homepage FAQ still gives stores a $5,000 floor.** That array also feeds its FAQ schema. A visitor can encounter incompatible price explanations without leaving the homepage. [page.tsx](../../../src/app/page.tsx), lines 93 and 239.
3. **Other commercial surfaces repeat the old boundary.** Pricing cards and FAQs, the services index, company reference and `llms.txt` still place a shop at Scale without explaining additional scope. [Full pricing inventory](pricing-follow-up.md)
4. **Headless is not the price boundary.** The ecommerce introduction contrasts smaller catalogues at $1,500 with headless commerce at $5,000, although Starter already uses a headless implementation. Catalogue, features, integrations and migration requirements can distinguish scope; the architecture label alone cannot. [Ecommerce source](../../../src/app/services/ecommerce/PageContent.tsx), line 84.

The company-facts correction also places internal revision history inside a value displayed publicly: the sentence explaining what `/services/ecommerce` has always quoted belongs in a comment or audit record. The customer-facing value should contain only the scope. Separately, ecommerce Starter says up to 20 products while Growth says 30–100. The 21–29 range needs an explicit route based on the actual offer; it should not be assigned an invented price. [Pricing follow-up](pricing-follow-up.md)

This is the necessary completion work. It does not require replacing the newly agreed headline or introducing another price strategy.

## Form: retain the labels, finish the wording

The local render confirms the new heading and submit label, and places the response note immediately after the button. The compact mobile header now says **Ask a question**, an appropriate short version of the enquiry action. Desktop and the expanded navigation retain the longer site-specific invitation. [Render evidence](follow-up-render/README.md)

The note below submit currently says the first reply will establish fit and what a scope would involve, followed by a denial that it is a sales sequence. The more useful permission statement—that every message receives an answer whether or not it becomes a quote—remains above the fields. Moving `replyNote` did not move that exact statement. [HeroLeadForm.tsx](../../../src/components/forms/HeroLeadForm.tsx), lines 17, 35 and 237.

Use the already agreed reassurance beside submit:

> A founder replies, usually within one business day. Every message gets an answer, whether or not it turns into a quote.

The introductions also still presume an existing website. The inline form asks visitors to share their website; the modal asks what they are trying to fix. The details placeholder begins with migration and redesign. To support new-build customers consistently, a suitable shared introduction is:

> Tell us what you'd like to build or improve. A brief question is welcome too.

The modal calls its message field **Project details**, whereas the inline form uses **What you have in mind**. The modal has an optional phone field; the inline form has an optional website field. Those differences are not necessarily defects, but they mean the journeys are not identical. Keep fields that help the specific route; align the invitation and expectations. [QuoteModal.tsx](../../../src/components/ui/QuoteModal.tsx), lines 241–285.

NN/G recommends succinct button labels that describe the action. That supports **Send your question** as clearer than an unspecified pronoun. It does not establish reduced anxiety, fewer required actions or a conversion uplift on this website. [Kelley Gordon, Button States, 25 April 2025](https://www.nngroup.com/articles/button-states-communicate-interaction/)

One adjacent mismatch remains: the visible email address is a button that opens the quote modal, despite surrounding copy offering email as an alternative to the form. Either offer an actual email link or label the modal action as a message action. Do not describe a second form as an email channel. [HeroLeadForm.tsx](../../../src/components/forms/HeroLeadForm.tsx), direct-contact block.

## Positioning and information flow

The new H1 and lead are broader. The badge directly above them still says **Website migrations**, and the following summary still defines the business through rebuilding slow platform sites. It also says there are no monthly platform fees and no retainer, which needs reconciliation with retained commerce subscriptions and optional ongoing services. The services section continues to lead with migration failure points and an instruction about migrating off platforms. [Hero](../../../src/components/sections/Hero.tsx), line 42; [homepage summary](../../../src/app/page.tsx), line 281; [service cards](../../../src/components/sections/ServicesHub.tsx).

Use **Website design & development** for the badge and a short, accurate general summary. Put existing-platform detail inside the relevant service route. This completes the accepted positioning; it is not another reversal.

Moving the response note within the form did not resolve the earlier proof-placement finding. In the new local render, the work heading starts around 2,174px down at 390px width, and 1,344px at desktop width. The full form and summary still precede it on mobile. The hero work button remains useful, but inline proof has not been moved earlier. If earlier project visibility is the goal, that requires a deliberate ordering change. [Current layout measurements](follow-up-render/README.md)

The reported 2,980 words should not be treated as evidence of a good information flow. The independent render count uses a different inclusion rule and therefore does not directly validate or contradict that figure. Counts need the same boundaries for comparison. More importantly, what appears before the projects and the clarity of each buying route matter more than preserving an arbitrary total.

The code comment also describes the broader H1's lack of reported exact-phrase volume as a definite SEO cost. That is too strong. Google's guidance says its language-matching systems can relate pages to queries without those exact terms, and that there is no magic word-count target. Keep descriptive category language and specialist service routes, but do not infer a ranking loss from the slogan's exact-match volume. [Google Search Central, SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Measurement: separate performance from causality

Several edits in a short period make it harder to attribute a subsequent change to the headline, button, price presentation or form placement individually. A simple before/after comparison was not a controlled causal test even before the second edit. The records are still useful for describing traffic, engagement, failures, enquiries and whether the resulting enquiries match the business.

Microsoft's experimentation guidance emphasises a clear hypothesis, appropriate metrics, valid assignment and enough affected users to detect an effect. Those conditions support causal interpretation; a calendar boundary or a stable headline alone does not supply them. The practical implication here is to treat the final published revision as one bundle unless a suitable controlled test can separate its elements. [Microsoft Research, 31 July 2020](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/)

Start with the deployment record. The local commits at 18:18 and 18:25 on 15 September establish source revisions, not exposure to visitors. The stored tracking branch was 14 commits behind local `main` when checked; that is not a fresh deployment inventory. The public web-reader result still contained the older migration opening, while a fresh browser navigation was blocked by the environment. Deployment of the revised copy was therefore not independently verified. No conclusion about October exposure should be based on these commit timestamps alone. [Public homepage](https://www.pandacodegen.com/), [browser access record](follow-up-render/public-homepage.json)

For the actual published revision, retain the exact deployment time and copy snapshot. Record a version identifier alongside events where practical. The current hero click still uses the legacy identifier `get_migration_plan`, which can remain a stable historical identifier if documented; it should not be interpreted as the visible label after this change. The inspected form instrumentation records form and page identifiers but no copy version. [HeroAnimated.tsx](../../../src/components/sections/HeroAnimated.tsx), line 21; [form funnel](../../../src/hooks/useLeadFormFunnel.ts), common parameters.

Evaluate qualified enquiries, homepage-to-work visits, form starts, submit success and errors, with comparable denominators and consent coverage. Segment by source and device where the sample supports it. Use customer feedback to investigate why someone stops. GOV.UK's performance guidance explicitly combines completion data, segmentation and user research to diagnose problems; its government-service KPI requirements are not being imposed on this commercial site. [Government Digital Service, updated 6 April 2022](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction)

A more accurate handoff would say:

> These changes make individual effects difficult to isolate. We will record when the final version goes live and evaluate the combined revision using enquiries, engagement and user feedback. Before/after differences will be observations, not proof that one sentence caused them.

## Recommended completion

Retain the accepted hero and price. Correct the quiz and price descriptions across the buying journey, remove the remaining migration-only framing from the opening, and use the intended reassurance under submit. Then verify the rendered results and record the actual publication boundary. Further headline experimentation can wait until the page expresses one coherent offer.

No new customer offer, guaranteed business outcome or ranking improvement is recommended. The change is commercially reasonable; the remaining work is consistency, accurate reporting and measurement discipline.

## Evidence

- [Pricing source audit and correction inventory](pricing-follow-up.md).
- [Current local render, screenshots, measurements and limits](follow-up-render/README.md).
- [Earlier homepage research](README.md), including the eight-agency benchmark; its blanket $5,000 store recommendation is superseded by this audit.
- [NN/G, Button States: Communicate Interaction](https://www.nngroup.com/articles/button-states-communicate-interaction/), 25 April 2025; checked 15 September 2026.
- [Microsoft Research, Patterns of Trustworthy Experimentation: Pre-Experiment Stage](https://www.microsoft.com/en-us/research/articles/patterns-of-trustworthy-experimentation-pre-experiment-stage/), 31 July 2020; checked 15 September 2026.
- [GOV.UK, Using performance data to improve your service](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction), updated 6 April 2022; checked 15 September 2026.
- [Google Search Central, SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), checked 15 September 2026.
