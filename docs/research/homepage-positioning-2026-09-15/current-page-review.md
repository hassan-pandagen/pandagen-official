# Homepage positioning: current-page review

Reviewed 15 September 2026 from current source and prior local research. No application changes, external competitor benchmark or conversion experiment were performed here. The subsequent [four-width render check](render-check.md) confirms the visible migration framing and catches the compact mobile header's remaining “Get a plan” label. Working assumption: business websites and ecommerce lead; custom software and automation are a secondary route, pending the owner's clarification.

## Judgment

**Move platform names out of the H1. They identify one starting situation, not the full value the company delivers.** The current headline clearly identifies migration work, but makes the company sound like a specialist for three builders. A buyer wanting a new website, a custom shop, or work on Shopify/Webflow can reasonably think they are in the wrong place.

Replacing those names with an abstract slogan would be equally unhelpful. Name the thing being bought—custom websites or websites and online stores—and explain the benefit through concrete control, features and ease of operation. Platform names remain useful in the migration/service section, with links to specific services.

The migration-first positioning is deliberate, not an accidental typo: [company facts](../../../src/data/company-facts.ts), lines 70–75, explicitly name it the primary offer. The current site also supports broader work. This review recommends a broader hierarchy under the stated assumption; it does not silently redefine the business's priorities.

## What the buyer currently encounters

The [hero](../../../src/components/sections/Hero.tsx) presents a migration badge, a redesign/migration H1 naming WordPress/Wix/Squarespace, a subhead about moving pages and integrations, a migration-result claim, and “Get your migration plan.” Its right column is already a broader enquiry form inviting questions. The words on the button ask for a more defined commitment than that form does.

The rendered source sequence in [the homepage route](../../../src/app/page.tsx), lines 277–343, is:

Hero/form → migration-heavy summary → finished work → reviews → services → custom features → pricing selection → process → founders → FAQs → blog → footer.

Work appears before lengthy service explanations, which is worth keeping. But a new H1 alone would leave the summary, service headings, process, FAQ and footer arguing for migration. Metadata and page-schema names also remain migration-first. Align these surfaces if the owner adopts the broader positioning.

The current H1 omits Shopify, Webflow and GoHighLevel despite service routes for them. Simply adding those names would make the headline longer without solving its narrowness. New-build and ecommerce buyers need their use case named, not a larger inventory of software brands.

## What supports a broader offer

| Grounded strength | How to express it to a buyer |
| --- | --- |
| Editor and training included in website scope | Your team can update content and run the functions already built. New templates/features remain separate work. |
| Custom calculators, finders and enquiry routing | The website can support the customer's pricing rules and buying process. Do not imply every feature is included at $1,500. |
| Website and commerce implementation | A site can be a new build, a replacement or a connected storefront; migration is one delivery situation. |
| Written scope, price and acceptance | The buyer knows what is being delivered, what they pay and how it is checked. |
| Client control of code/accounts | Explain ownership and provider costs precisely; optional support does not imply zero operating cost. |
| Inspectable finished projects | Show relevant work with the actual relationship and role, rather than another generic claim of expertise. |

Sources: [company facts](../../../src/data/company-facts.ts), lines 96–109; [custom features](../../../src/components/home/CustomFeatures.tsx), lines 33–96; [work previews](../../../src/components/home/WorkPreviews.tsx), lines 39–65.

These are defensible differentiators as a combination. Do not claim nobody else offers them. “Fast,” “modern,” “bespoke” and “founder-led” need the concrete explanation and work beside them; alone they do not explain why to choose this firm.

## A direction supported by the offer

Illustrative copy, not an applied change or a claim that this wording has been tested:

> **Custom websites that work the way your business does.**
>
> We design and build business websites and online stores, with the features you need and an editor your team can use. Launch something new or improve what you already have.
>
> Website projects from $1,500. Fixed scope. Code you own.

Keep “See our work” as the visual proof route. “Ask us about your site” fits the existing short enquiry experience better than “Get your migration plan.” The body already welcomes new builds; the form itself asks about projects and questions. If custom software becomes equally primary, revisit this wording rather than adding an all-services list to the H1.

Put the platform list in a clearly labelled migration section. Preserve a distinct commerce route and a separate software/automation route. “We migrate you off” currently appears above a list including Shopify, while the commerce card explains retaining the backend: change that category framing so buyers are not told they must leave a platform that may remain part of the solution. [ServicesHub](../../../src/components/sections/ServicesHub.tsx), lines 66–89 and 162–164.

## Below-fold message improvements

- Shorten the [answer-first summary](../../../src/app/page.tsx), line 281. It repeats the platform list and compresses pricing, timing, performance, ownership and AI claims into one paragraph. Its “no retainer” wording is stale alongside optional services, and “no monthly platform fees” is too broad for retained Shopify or external providers. An extractable summary should remain an accurate buyer explanation.
- Keep finished work early, but use buyer language. Emblematic's “typed registry” and “single runtime route” explain implementation, not why its catalogue/quote flow mattered. Its project record can carry those technical details. The current homepage selection is NorthDeck, MyCustomPatches and Emblematic; it differs from the owner-requested order on the work index. Do not silently assume that index order was already applied here.
- Keep the custom-feature examples: they explain the offer better than migration mechanics alone. The separate quoted software route is useful and prevents the $1,500 website floor being interpreted as an app price.
- The process is currently migration inventory/architecture/cutover. Broaden it to assessment, agreed scope, build/review and launch/handover, retaining migration-specific controls where relevant. [Process source](../../../src/components/HowItWorksSimple.tsx), lines 125–151.
- The AI foundations card links to About even though a commercial AI SEO service now exists. Use the relevant destination when describing ongoing help; preserve the distinction between included build foundations and a retainer. [ServicesHub](../../../src/components/sections/ServicesHub.tsx), lines 140–146.

## Claims to avoid carrying into new hero copy

The current “Last move: 200+ pages…” proof line is unnamed and does not show its measurement window or a direct source. Prefer an identifiable project link or a concise statement of delivered work. Do not elevate an owner-reported migration result into a universal “no ranking losses” promise. Current homepage metadata also says “without losing the traffic you already have,” stronger than the documented migration controls.

Keep performance claims tied to the agreed representative-page lab acceptance, not guaranteed sales, field performance or rankings. Do not imply custom code eliminates provider bills or future maintenance. “No minimum project size” beside a $1,500 starting price can confuse buyers; the concrete starting scope usually does more work.

The review section's shared-owner wording should match the newly clarified relationship; it still says “we ... hold no ownership stake.” Clarify the shared individual owner without treating the companies as the same entity. [SocialProof](../../../src/components/home/SocialProof.tsx), shared-owner block.

## Layout constraints for implementation

The H1 is server-rendered in [Hero.tsx](../../../src/components/sections/Hero.tsx), with responsive sizing and a two-column layout beginning at `lg`. Preserve stable first paint when changing copy.

CTA slots reserve **132/60/84/60 px** at base/`sm`/`lg`/`xl`. The source records a historical 1024px wrapping/CLS problem; those old scores are not a current measurement. Recheck **390, 768, 1024 and 1440px**, as required by the [release checklist](../../operations/RELEASE_CHECKLIST.md), line 22, plus breakpoint edges if wrapping changes.

Update both [loading CTA](../../../src/components/sections/HeroClient.tsx), lines 6–20, and [loaded CTA](../../../src/components/sections/HeroAnimated.tsx), lines 19–35. The current loading fallback already renders buttons; the older comment saying the server sends nothing should not be repeated as current fact. Labels and icon space must fit consistently before and after hydration. The [inline form](../../../src/components/forms/HeroLeadForm.tsx), lines 135–145, also reserves height. Verify font loading, wrapping, focus, modal behaviour and actual layout shifts after any change. No new CLS result is claimed here.
