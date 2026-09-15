# Homepage pricing follow-up

The revised hero price is supported by the existing ecommerce offer. The correction is incomplete across the customer journey, however: the homepage itself still gives an online store a $5,000 starting price in its FAQ and directs every product-selling business to the $5,000 tier in its quiz. Keep the corrected hero and repair those contradictions before describing the work as one consistent price floor.

This is a read-only source audit conducted on 15 September 2026. It checks the working tree containing commit `5c76e708a4551a74d0e4a4157b801cb7c5dabfca`. It does not establish what is currently deployed. No application files were edited.

## What the evidence supports

The [ecommerce Starter card](../../../src/app/services/ecommerce/PageContent.tsx) at lines 349–364 already offers a storefront from $1,500: up to 20 products, Shopify Storefront API integration, responsive design, a Lighthouse handover target, Sanity content editing and 15 days of post-launch support. The same card appears in the parent of the correction commit. A Git pickaxe search finds the exact price phrase in the file's history on 8 September. That supports “this offer predates this correction”; it does not require the stronger, unnecessary “all along.”

The ecommerce Growth and Scale cards contain materially larger scopes. Scale includes subscriptions, custom logic and large catalogues. A $5,000 starting point for that scope is compatible with a $1,500 simple store. The problem is describing *any store* as automatically Scale.

The current [hero](../../../src/components/sections/Hero.tsx), line 125, says: “Websites and online stores from $1,500. Scope and price agreed before work starts, and you work directly with the founders.” This is a reasonable umbrella starting-price statement given the existing entry offer and the owner's clarification. It should link or lead to a clear example of the entry scope, rather than acquiring a long list of caveats in the hero.

## Highest-priority contradictions

| Surface | Verified evidence | Minimum repair |
| --- | --- | --- |
| Homepage FAQ, `src/app/page.tsx:93` | “From $5,000 for an online store…” This same FAQ array feeds the JSON-LD at line 239. | State that simple stores start at $1,500 and reserve $5,000 for large catalogues, subscriptions, custom commerce logic or other Scale scope. |
| Homepage quiz, `src/components/sections/TierQuiz.tsx:22,42–44,73,90` | Starter says “Nothing to buy.” Every “Yes, I sell products online” answer maps to `scale`; the highest selected tier wins. The static Scale card also calls itself a headless store before the quiz is completed. | Correct both the text and the decision rule. Selling products alone cannot force Scale. Route store buyers to the existing ecommerce scope table until the quiz can distinguish simple and complex commerce. |
| Pricing page, `src/app/pricing/PricingPageClient.tsx:247` and `src/data/pricing-faqs.ts:44` | Scale is “more than 20 pages, a shop, or more than one language.” The FAQ is reused in pricing JSON-LD. | Replace the blanket “shop” condition with the agreed complex-commerce conditions, and include or link the simple-store entry offer. |
| Services index, `src/app/services/PageContent.tsx:139` | Scale fit still includes “a shop.” | Use the same revised Scale boundary. |
| Company reference, `src/app/ai-info/page.tsx:77,164,294` | FAQ, company summary and pricing table still say a shop/store starts at $5,000. The FAQ also feeds its JSON-LD. | Align all three authored copies with the corrected commercial facts. |
| Machine-readable summary, `src/data/llms-txt.ts:55` | Its starting-prices paragraph still places “a shop” at $5,000. It is independently authored, despite some other parts of this file being generated. | Reuse the agreed commercial scope wording here too. |

These are contradictions in visitor-facing copy and decision logic, not merely stale comments. A passing build cannot detect that two valid strings make incompatible promises.

## Other scope wording to resolve

The Squarespace pricing FAQs (`src/data/service-faqs.ts:174,178`), Webflow FAQ (line 208) and Wix FAQ (line 250) also place a store or shop at $5,000 without saying that additional migration complexity is the reason. A specific replacement may genuinely cost more than a simple store retaining Shopify's backend. If so, say what makes that scope different. Do not automatically apply a $1,500 Shopify storefront offer to every platform migration, and do not retain an unexplained universal store minimum either.

The ecommerce summary (`src/app/services/ecommerce/PageContent.tsx:84`) says $1,500 for smaller catalogues and $5,000 “for headless commerce.” The Starter card is already a headless build: Next.js plus Shopify's Storefront API. The WooCommerce introduction (`src/app/services/woocommerce/PageContent.tsx:70`) makes a similar distinction. “Headless” cannot be the dividing line. Scope and complexity can.

A separate small boundary defect exists inside the ecommerce table: Starter specifies up to 20 products, while Growth says 30–100 products. A buyer with 21–29 products has no clear route. This should be reconciled with the actual service scope; it is not grounds to invent a new tier or silently assume every such project costs $3,500. Product counts also should not replace a review of templates, features and integration requirements.

## Minimal shared wording

For a concise general price explanation:

> Business websites and simple online stores start at $1,500. Larger sites and stores cost more according to their pages, catalogue, integrations and features. We agree the scope and fixed price before work starts.

For the existing Scale description:

> From $5,000 for more than 20 pages, a large catalogue, subscriptions, custom commerce logic or multiple languages. Simple stores can start at $1,500; the features and migration work determine the quote.

For the ecommerce summary's misleading headless distinction:

> Smaller catalogue builds start at $1,500. Growth builds start at $3,500, and larger catalogues, subscriptions or custom commerce logic start at $5,000. The agreed scope determines the price.

These are proposed repairs to known boundaries, not a recommendation to offer every combination of listed features at the entry price.

The new [company facts Scale value](../../../src/data/company-facts.ts), line 98, currently includes the explanation “which is what /services/ecommerce has always quoted.” That is internal change history embedded in a public fact: `src/app/ai-info/pricing-and-guarantees/page.tsx:70` renders `COMMERCIAL` as a table. Move the change-history explanation to a code comment or the review document, leaving only buyer-facing scope in the value.

## Validation needed after repair

Check the visible homepage FAQ, quiz result, pricing cards, reference page and the JSON-LD generated from their FAQ arrays against the same agreed examples: a small business website, a simple store and a complex store. The small-store example must not be assigned Scale merely because it sells products. Retain higher prices where the larger scope is explicit. Preserve third-party operating-cost and optional-support boundaries; a lower build entry price does not remove those costs.

The corrected commercial facts should supply reusable short descriptions or shared structured tier data to these surfaces. Otherwise each copy correction can continue leaving valid but contradictory strings behind.
