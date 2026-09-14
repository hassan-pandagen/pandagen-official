# Revision 2: attribution, dashboards and competitor claims

Reviewed **15 September 2026** against [the rendered revision-2 draft](../ai-seo-page-for-review-2026-09-14.md) and [PageContent.tsx](../../../src/app/services/ai-seo/PageContent.tsx). This is a focused claims review, not a new market census or an inspection of a customer's private order database. No application files were changed.

**Verdict:** retain attribution and dashboard work as separately scoped additions, but remove the unsupported market generalisation and narrow what the tracking can establish. The platform qualification is sensible. It does not resolve the more fundamental limitation: server-side processing can preserve available source evidence, but it cannot reconstruct a missing origin just by running on a server.

## Material findings

| Location / claim | Assessment | Required clarification |
| --- | --- | --- |
| PageContent.tsx:252, most AI reporting ends at visibility | Unsupported majority claim | The researched agencies are a selected sample, not evidence of the market's majority. Remove the comparison and explain the customer's measurement problem directly. |
| PageContent.tsx:235, source comment that competitors structurally cannot match attribution | Contradicted by published competitor capabilities | Two previous comparators explicitly sell conversion/revenue reporting. Correct the internal rationale too, so it is not reused in later copy. |
| An enquiry or order carries where it came from | Too complete without a data-availability qualification | Say available referral/campaign information can be associated with an enquiry/order under an agreed attribution rule. Preserve unknowns. |
| Capability depends on platform | Fair, but incomplete | Inspect native reporting, access, checkout/CRM integration, identifiers and data already collected. Platform is one constraint, not the only one. |
| Panda Patches is proof of AI-referred orders | Needs method qualification | Registry describes both captured referrers and customer-declared sources. Do not present every attributed order as an observed AI click. |
| Live visibility/referral/enquiry dashboard | Ambiguous freshness promise | Distinguish a continuously accessible dashboard from real-time collection, sampled checks and source processing delays. State refresh schedule and timestamps. |

## What server-side attribution can establish

**Verified documentation:** a request can arrive without referrer information. Under `no-referrer`, the browser omits the `Referer` header. Other policies can reduce its detail. A destination server cannot retrieve a header that was never transmitted. [MDN Referrer-Policy documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy)

**Verified example:** GA4's Measurement Protocol sends server/offline events and is designed to supplement existing collection. It does not automatically recreate a customer's acquisition history. Its documented session-attribution path requires an existing session identifier and timing requirements; matched events can inherit source, medium and campaign from that session. [Measurement Protocol overview](https://developers.google.com/analytics/devguides/collection/protocol/ga4), [session-attribution requirements](https://developers.google.com/analytics/devguides/collection/protocol/ga4/use-cases)

**Engineering inference:** source information captured on arrival can be retained and joined to a subsequent lead or paid order using identifiers and a defined rule. This can reduce loss between systems and make the conversion record more useful. It cannot identify a previously unseen AI recommendation if there is no usable referral, tagged URL, recorded customer statement or other evidence. A later same-site checkout request is not itself proof of the original external source.

The page does not need this entire technical explanation. It needs the words **available source information** and one honest boundary. In the scope/reporting method, specify:

- Which source evidence is collected: referrer, campaign tags, recorded session or declared discovery.
- Which evidence wins when several sources appear, and the attribution window.
- How records are joined and duplicate orders/events avoided.
- What remains unknown; do not silently classify every direct visit as AI-originated.
- Whether results describe orders, qualified leads, revenue or another defined outcome.

These are proposed implementation requirements, not assertions that PandaCodeGen's existing system already satisfies all of them. Attributed revenue is also not proof of incremental revenue caused by AI SEO.

## Shopify: assess the actual setup, not a custom-versus-platform stereotype

**Verified native capability:** Shopify's order conversion summary can show a recorded source/referrer and landing page; its documentation even uses `chatgpt.com` as an example. Full journeys may be unavailable when collection is limited, but order-level source details can still exist. It also documents cases with no summary and delays up to 48 hours. [Shopify order conversion summary](https://help.shopify.com/en/manual/fulfillment/managing-orders/analytics/conversion-summary)

**Verified API capability:** the Admin API exposes an order's `CustomerJourneySummary`, including first/last visits and a readiness indicator. Access requires the relevant order scope. `CustomerVisit` includes source, referrer URL, landing page and UTM fields; source may explicitly be unknown. These pages currently resolve to API version 2026-07. [CustomerJourneySummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary), [CustomerVisit](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit)

**Conclusion:** the draft's general platform hedge is fair if it means feasibility is inspected before promising a particular integration. It would be unfair to imply Shopify cannot connect referrals to orders, that attribution always requires replacing the storefront, or that a custom/headless build automatically solves missing data. Shopify is not explicitly named in the current paragraph; there is no need to add a platform criticism.

A stronger qualification is that the agency first checks what the current platform already records, then quotes only the additional connection or reporting work needed. This is a recommended delivery approach, not verification that every Shopify account exposes every field or that an existing PandaCodeGen integration is ready to install.

## Two researched competitors already go beyond visibility

This narrow recheck tests the claimed differentiation; it does not establish what most agencies sell.

| Primary comparator | What it actually publishes | What that establishes |
| --- | --- | --- |
| [WebFX OmniSEO](https://www.webfx.com/technology/revenuecloudfx/omniseo/) | It explicitly connects its AI visibility platform to RevenueCloudFX for sales-data unification and marketing-to-revenue attribution. | Attribution is an advertised competitor capability. Its accuracy and price inclusion were not verified here. |
| [Impression GEO service](https://www.impressiondigital.com/generative-engine-optimisation-agency/) | Its measurement section says it reports LLM-source referrals and how those visits convert, alongside sampled prompt visibility. | This service is not presented as visibility-only reporting. The statement does not independently validate its outcome attribution. |

Two counterexamples do not mathematically disprove a market-wide majority. They do refute the internal claim of a structural capability that competitors cannot match. No representative denominator or coding method supports the public “most” claim. A defensible selling point is **PandaCodeGen can implement the agreed tracking connection as well as discuss the measurements**. It does not need exclusivity.

## Panda Patches: separate observation from declared discovery

The [measurement registry](../../../src/data/first-party-measurements.json) describes the instrument at line 108 as referrer capture **plus email-declared source**, stored in the order system. The [case-page implementation description](../../../src/app/work/panda-patches/page.tsx) lists conversion tracking and server-side handling of campaign identifiers. These support a documented first-party implementation claim; this audit did not inspect the live store's code, order records, matching rules or current dashboard.

“AI-referred” can be read as an observed referral visit. That is not the same evidence as a customer saying they discovered the business through an AI tool. Both can be useful, but they should be labelled separately when reporting figures. The registry's lower-bound interpretation also needs care: missing sources can undercount, while broad or erroneous declared attribution can over-credit. Mixed evidence does not establish a guaranteed floor.

Keep the co-founder relationship disclosure. The service page can offer the capability without asserting that one owner's store proves a repeatable revenue uplift on other platforms. A redacted example showing source type, an associated order and the rule applied would make the implementation inspectable without publishing personal information. That example is a recommendation; no new private evidence was accessed here.

## What “live dashboard” currently promises

The code offers custom dashboard work; it does not contain that customer's eventual dashboard or integration. The Panda Patches case describes operational dashboards, but those are not a demonstration of this proposed combined AI-visibility/referral/enquiry report. An authorised service offering need not already be a finished reusable product, yet its data coverage and refresh promise must be scoped.

**Verified source constraint:** GA4 processes different data at different intervals. Realtime has a limited dimension/metric set; standard intraday processing is typically 2–6 hours, and other reporting can take longer and be revised. A custom front end does not remove those upstream limits. [GA4 data freshness](https://support.google.com/analytics/answer/11198161?hl=en)

**Practical inference:** the dashboard can be available whenever a customer logs in while its AI samples are updated only when checks run and its conversion sources have their own delays. Calling everything live risks implying continuous current visibility across AI systems. Use **dashboard with an agreed refresh schedule**, show last-updated times, and define which systems/metrics are connected. Address source subscriptions, hosting, maintenance and ownership in the quote; do not imply handover eliminates third-party running costs.

## Precise replacement copy

The following is proposed copy, not a new approved service commitment. It preserves the owner's ability to quote tracking and dashboards as additions.

### Attribution block

**Source tracking for enquiries and orders**

> See which recorded sources lead to enquiries or orders. Where your setup supports it, we can connect available referral and campaign information to those records, including server-side tracking where needed. We first check what your platform already captures, then agree the integration and attribution rules. Missing source information can remain unknown; this cannot identify every AI-assisted purchase.

Optional proof sentence, subject to the method remaining accurate:

> On Panda Patches, a business owned by our co-founder, our order tracking uses captured referrers and customer-declared sources. It is first-party implementation experience, not an independent client result.

### Dashboard addition

**A reporting dashboard**

> Bring the agreed visibility, referral and enquiry data into one dashboard, with a stated refresh schedule and clear last-updated times. We scope the integrations, running costs and handover before quoting.

### Minimum edit if the current paragraph is retained

Remove the market-majority opening. Replace the unqualified source promise with “connect available referral and campaign information to enquiries or orders.” Add that missing origins can remain unknown. Replace “live” with “updated on an agreed schedule.” Correct the source comment that competitors cannot offer attribution, and distinguish captured versus declared sources in the Panda Patches evidence.

## Boundaries of this check

All cited online pages were accessed on 15 September 2026. Official platform documentation establishes available mechanisms and documented limits, not that a particular customer's configuration supports the proposed work. Competitor pages establish published offers, not independently verified delivery. Local source/evidence files were read only; no tracking, dashboard, order, account or customer-facing content was changed.
