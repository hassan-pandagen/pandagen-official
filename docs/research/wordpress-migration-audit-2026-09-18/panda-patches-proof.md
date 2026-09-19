# Panda Patches as the lead migration example

18 September 2026. Addendum reflecting the owner's clarification. The initial source review inspected the existing case page, company/project facts, first-party referral dataset and recorded CRM audit provenance. It did not independently test the storefront code, authenticated editor, payment processing or Search Console account. A later same-day revision implements the owner-confirmed payment sequence and three-project presentation; see [implementation follow-up](implementation-follow-up.md). Source line references below describe the original audit baseline unless noted.

## Proof order and rationale

**Lead with Panda Patches alongside the live independent Ladies 4 Jesus migration; retain MyCustomPatches as supporting independent evidence.** The owner wants the page to show the substantial business the founders operate, its WordPress-to-Next.js move, usable editor and integrated commerce. That is a stronger expression of this particular offer than leading solely with another project's delivery statistics. Founder ownership is a relationship to disclose, not a reason to subordinate an otherwise relevant operating example. A Step Above Medical is a third project explicitly labelled **in progress**, not a third completed migration.

Panda Patches can show what the rebuilt site becomes and how the team continues to operate it: content publishing, product pricing, checkout and connected order operations. Ladies 4 Jesus adds a live unrelated-client example focused on owner-managed publishing and moderation. MyCustomPatches adds a separate independent delivery record and permissioned review. Its 200+ URLs, 13 templates and about 22 days belong to **MyCustomPatches only** (`src/data/case-study-facts.json:34`–104); none may be copied into either live project module or the in-progress project.

Do not frame the choice as “WordPress versus WooCommerce.” WooCommerce supplies commerce within WordPress. The Panda Patches case explicitly says its old stack was **WordPress and WooCommerce** (`src/app/work/panda-patches/page.tsx:38`, `:246`). The WooCommerce service describes MyCustomPatches' evidence as a move off WordPress and WooCommerce (`src/app/services/woocommerce/PageContent.tsx:139`–144). Both examples overlap the WordPress service. The requested distinction is **Panda Patches as the main owned operating showcase; MyCustomPatches as secondary independent, commerce-oriented migration evidence**, not mutually exclusive source platforms.

## What the inspected evidence supports

| Capability or claim | Available support | Appropriate treatment |
|---|---|---|
| Founder-owned, operating business migrated to Next.js | Owner clarification; `company-facts.ts:214`; ownership record at `case-study-facts.json:151`–156; detailed first-party disclosure at `work/panda-patches/page.tsx:313` | Lead with it. State that co-founder Imran Raza Ladhani owns and operates Panda Patches and PandaCodeGen built and maintains the platform. Do not call it an independent client engagement. |
| Content editor after leaving WordPress | Owner confirms a proper editor; case page names Sanity and describes content editing (`:207`, `:678`) | Show the actual editor and name the supported content types/workflows. “Sanity content editor” is supportable as the existing first-party project account. “Edit everything without code” is broader than the evidence needed here. |
| Custom pricing and integrated checkout | Case page describes pricing inputs/calculator (`:236`–242, `:511`–534) and payment integration (`:209`, `:221`, `:672`) | Use the business capability: customers configure a product, receive pricing and proceed to checkout. Avoid transferring timing, response-speed or conversion claims into the service module. |
| Connected order/customer operations | Case page explicitly separates the storefront from the connected staff CRM (`:405`, `:570`); company facts identify the founder-affiliated operations platform (`company-facts.ts:215`) | Explain that the storefront connects to order operations. Do not describe the whole CRM as Next.js or imply every current feature shipped in the initial migration. |
| Genuine trading activity and attributed acquisition | Dated first-party order/referral data exists in `ai-referral-data.json:24`–38, with channel rows and stated method/limitations; Google-source orders appear at `:48`–51 | This supports the owner's operating-business account. It is a first-party dataset, not independently audited accounts or proof that migration caused revenue. The service module does not need revenue figures to make the operating example persuasive. |
| Existing search visibility and continued ranking | Owner assertion; first-party case account of a 30-day monitoring window (`work/panda-patches/page.tsx:34`); GSC-derived visibility summary in `ai-referral-data.json:204`–215 | Describe existing search traffic as part of the business context. Specific ranking preservation/gain claims need the dated query/page records and window. The stored GSC summary concerns generative-surface impressions, not keyword positions or a migration before/after. |
| Performance, savings, size and timing figures | Many numbers are hardcoded in the case page, while the Panda Patches entry in `case-study-facts.json:151`–156 has an empty metrics array | Do not treat the page itself as an independently checked measurement packet. No new numbers are needed for the proposed module. Add individual facts later with appropriate dated records if they improve the buyer's understanding. |

The distinction is **owner-confirmed capability, internally recorded evidence, and independently checked observation**. None should be silently promoted into another. The existing case record is useful first-party evidence; this addendum has not supplied a new independent verification of it.

### Stripe history versus the current payment provider

**Resolved by the owner on September 18:** Panda Patches started with Stripe and later moved to Square, which is the current provider. This confirms the sequence rather than a contradiction between providers. It is recorded in `src/data/migration-projects.ts` and reused on the migration service and case page. An earlier owner account records Stripe/PayPal followed by Square (`docs/research/business-progress-audit-2026-09-15/enterprise-ops-canon-questions.md:233`–246). The separate CRM facts record a Stripe-to-Square change on 1 July 2026, based on a named CRM commit and a 16 September source audit (`case-study-facts.json:393`–403).

Do not overwrite the current Square provider with Stripe or infer that the CRM switch date was the storefront migration date. Safe public wording is: **“Panda Patches started with Stripe. We later moved its payments to Square, which is the current provider.”** The service can also state that Stripe, Square and other payment providers are integrated according to agreed scope, after checking provider availability, API access and required features. “Everything” and “most businesses use Stripe” are not supported by this project history.

## Ready buyer-focused module

> **Panda Patches: the WordPress migration behind our own operating business**
>
> We rebuilt Panda Patches from WordPress and WooCommerce into a Next.js storefront with a Sanity content editor, custom product pricing and integrated checkout. The site connects customer orders to the business's operations, and we continue to build and maintain its platform.
>
> Panda Patches started with Stripe. We later moved its payments to Square, which is the current provider.
>
> The project shows the decisions a migration needs to cover: how the team edits content, how product and ordering features are rebuilt, and how existing URLs and search signals are handled during the move.
>
> **Founder-owned project.** Panda Patches is owned and operated by PandaCodeGen co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform; the businesses share an owner.
>
> **See the Panda Patches migration** → `/work/panda-patches`  
> **Visit the live business** → `https://pandapatches.com`

Pair this with the real storefront screenshot already referenced by the case page (`public/work/panda-patches.png`; `work/panda-patches/page.tsx:279`–283) and an actual dated, appropriately redacted editor capture. A homepage screenshot shows the storefront; it does not independently prove the editor, checkout completion or historical SEO outcome.

Show **Ladies 4 Jesus** beside the Panda Patches lead as a live independent WordPress-to-Next.js/Sanity migration focused on owner-managed content and moderated submissions. The existing real screenshot and case route support a visible, inspectable example without outcome metrics. Beneath the two live cases, name **A Step Above Medical** as a text-only migration in progress, dated September 18, with launch pending. Keep MyCustomPatches as a later supporting record and link to its own case and review. Keep every project's relationship, status and figures attached to that project. On the WordPress page, emphasize content/editor continuity and controlled migration; use the commerce page for detailed checkout, product/order data and payment requirements.

## Guardrails for the linked case record

The lead module should not inherit every claim in its destination. The case page currently includes absolute “Zero SEO Drops” titles, “100 percent of the search equity,” and an assertion that rankings improved because of speed (`work/panda-patches/page.tsx:14`–26, `:423`–435, `:453`). Those claims go beyond the bounded first-party monitoring account. It also mixes present storefront capabilities with migration history (`:405`, `:547`–549). A coordinated future revision should distinguish **what moved at launch**, **what was added later**, and **what is measured today**.

Keep the operating story prominent while the exact numerical outcomes remain attributed and bounded. Do not import MyCustomPatches measurements, promise ranking gains, or use the current case's counts, revenue, cost or speed figures as unqualified outcomes of the WordPress migration.
