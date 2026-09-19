# Preserved keyword evidence for homepage copy

Reviewed September 15, 2026. This is a reconciliation of existing external keyword records, not a new keyword-tool capture. No Search Console queries were used to seed demand, and no current Google ranking or country-controlled visibility check is established here.

## What the evidence supports

The preserved records support using familiar service language such as **custom website development**, **custom web design**, **ecommerce website development**, **website redesign**, and **website migration services**. They do not establish that any one of these must be the homepage H1, or that listing platforms in the H1 improves enquiries. They also do not establish search volume for the proposed complete sentence about building new websites and converting old ones.

The useful editorial distinction is a new build versus an existing-site project. Redesign describes changing an existing site's design and experience; migration needs an explicit origin, destination or scope to distinguish this studio's rebuild work from a hosting transfer. Use everyday wording such as “build a new website or rebuild your existing one” for comprehension, with established service terminology in descriptive headings and links. This is a copy recommendation, not a volume claim for that exact sentence.

## Sources and capture boundaries

| Record | Provenance | What it can establish |
|---|---|---|
| [September 13 reconstruction](../../evidence-audit/keyword-evidence/reconstruction-2026-09-13.json) | DataForSEO through Percuity MCP `get_keyword_data`; US `2840`, English `en`, difficulty requested. Written September 14 from reported September 13 responses. | Attributed provisional figures for 83 exact keyword strings across five batches. Original tool responses were not retained contemporaneously. No monthly arrays survive in this file. |
| [September 14 capture](../../evidence-audit/keyword-evidence/capture-2026-09-14.json) | Same provider, wrapper, market, language and difficulty setting; recorded as the response returned on September 14. | A separate 16-term capture. It repeats five relevant redesign/migration terms and some adjacent technical/alternative terms; it does **not** recapture the new-build or ecommerce phrases below. |
| [Evidence README](../../evidence-audit/keyword-evidence/README.md) | Later explanatory record with corrections. | Clarifies capture dates, limits and the corrected interpretation of missing volume. |
| [September 13 qualitative map](../keyword-gap-2026-09-13/keyword-map.md) | External buyer/practitioner discussions and supplier pages; global English research lens, not a metric export. | Candidate language, underlying needs and page ownership. Most strings are normalized or inferred phrases rather than observed search queries. |

The September 14 capture contains six monthly observations per non-null keyword, all spanning **September 2025 through February 2026**. It therefore does not describe demand during the seven months immediately before capture. Its headline `search_volume` values cannot be reconciled to a stated recent 12-month period from the preserved response. The more recent capture date must not be confused with a more recent measurement window.

## Exact relevant metric rows

All figures below use the **US, English** settings above. “Volume” means the provider's reported estimated monthly search volume. KD is its modelled organic difficulty score. CPC is transcribed numerically because neither JSON preserves a currency field; a dollar sign would add an assumption. Null means no value was returned. The dates describe retrieval or reconstruction status, not a new September 15 check.

### Repeated in the September 14 contemporaneous capture

These five rows reproduce the September 13 reconstructed values exactly. Use the September 14 record when citing these specific values, while keeping the outdated trend-window caveat.

| Exact keyword | Volume | KD | CPC | September 14 status |
|---|---:|---:|---:|---|
| website redesign services | 6,600 | 10 | 24.08 | VIABLE |
| website redesign | 2,900 | 24 | 45.64 | VIABLE |
| website migration services | 720 | 3 | 13.30 | VIABLE |
| website redesign cost | 260 | 5 | 57.88 | VIABLE |
| seo migration services | 170 | 0 | null | VIABLE |

The wrapper's `VIABLE` status is not a finding that the term is a profitable target or an easy ranking for PandaCodeGen. For example, service intent and migration scope still need to match the actual offer.

### Present only in the September 13 reconstruction

None of these rows was recaptured in the preserved September 14 response. They should be called **reconstructed September 13 estimates**, not fresh September 14 or September 15 keyword research.

| Exact keyword | Volume | KD | CPC | Original batch |
|---|---:|---:|---:|---|
| web development agency | 3,600 | 27 | 33.92 | General services |
| website for small business | 1,900 | 51 | 30.98 | AI and commercial |
| ecommerce website development | 1,300 | 26 | 49.55 | AI and commercial |
| business website design | 1,300 | 40 | 20.16 | AI and commercial |
| custom website development | 880 | 38 | 31.96 | General services |
| custom web design | 880 | 23 | 21.30 | General services |
| wordpress migration | 720 | 23 | 20.13 | General services |
| website migration | 480 | 13 | 45.56 | General services |
| website development cost | 480 | 26 | 29.94 | General services |
| website migration seo checklist | 260 | 4 | 6.65 | P1 validation |
| website migration consultant | 30 | 42 | null | P1 validation |

“Website for small business” may mix tool shopping, examples, DIY and hired services. “WordPress migration” can mean a WordPress hosting transfer or a move into WordPress. The record does not justify treating all of either audience as buyers of a custom Next.js rebuild.

### Relevant null rows and unmeasured phrases

| Exact keyword in September 13 reconstruction | Volume | KD | CPC |
|---|---:|---:|---:|
| migrate wordpress to nextjs | null | null | null |
| wordpress to nextjs migration | null | null | null |
| website redesign without losing seo | null | null | null |
| webflow to nextjs migration | null | null | null |
| migrate webflow cms to nextjs | null | null | null |
| website traffic dropped after redesign | null | null | null |

All six have `NO_VOLUME_REPORTED`. This means **no value was returned under the recorded settings**. It does not establish zero demand, a reporting floor, low difficulty or a reason to exclude a useful explanation from the page. The reconstruction's old “below reporting floor” note is superseded by the evidence README's explicit correction.

Neither preserved metric file contains an exact row for **website rebuild**, **website rebuilding services**, **new website development**, **convert old website**, **convert website to Next.js**, **website redesign vs rebuild**, or **convert Webflow to NextJS**. They are unmeasured in this evidence, which is different from a measured zero or even a null response. The qualitative map includes the latter comparison/conversion language as candidates with evidence of underlying questions, not monthly volume. “Convert” may also imply an automatic converter or DIY export; do not position a scoped rebuild as a one-click conversion.

## Existing page ownership

This map describes existing routes and a recommended division of purpose. It is not a claim that these pages currently rank, nor a guarantee against overlap.

| Intent | Existing route | Recommended homepage use |
|---|---|---|
| Broad introduction to the studio: new websites, online stores and existing-site rebuilds | `/` | Clear category and service breadth. A concise mention of redesign/migration can coexist with the new-build message. |
| General redesign and migration services | `/services` | Link from an existing-site section. This page already has “Website Redesign and Migration Services” metadata. Do not mint another broad migration page just to fit a synonym. |
| WordPress migration | `/services/wordpress-migration` | Link a useful WordPress service description here. `/services/wordpress` permanently redirects to this route. |
| Ecommerce development/storefront work | `/services/ecommerce` | Own the store service explanation. It currently uses Shopify/WooCommerce storefront-engineering metadata, which should be reviewed for consistency if broader new-store positioning is adopted. |
| Other named platforms | `/services/wix`, `/services/squarespace`, `/services/webflow`, `/services/woocommerce`, `/services/gohighlevel` | Retain descriptive links in a platform/service section rather than adding repeated platform strings across every paragraph. |
| Shopify storefront changes | `/services/ecommerce` | Explain whether Shopify remains the commerce backend. The current service-link array points Shopify here; a blanket “move off every platform” promise would misdescribe this option. |
| Applications, dashboards and internal tools | `/services/custom-engineering` | A distinct service route. Its current metadata targets “Custom Web Development Agency,” so the homepage should introduce the wider business rather than reproduce that entire page. |
| Pricing and budget questions | `/pricing` and the existing website/redesign/migration cost guides | Keep commercial scope and pricing together; use existing guides for detailed questions rather than create duplicate cost pages. |

Source checks: [service index](../../../src/app/services/page.tsx), [WordPress redirect](../../../src/app/services/wordpress/page.tsx), [WordPress migration page](../../../src/app/services/wordpress-migration/page.tsx), [ecommerce metadata](../../../src/app/services/ecommerce/page.tsx), [custom engineering metadata](../../../src/app/services/custom-engineering/page.tsx), and [homepage service-link array](../../../src/components/sections/ServicesHub.tsx). Platform links can help readers identify a relevant path; their presence alone is not a ranking strategy.

## Do not blend the older August record into these figures

[The August 18 research note](../keyword-gap-2026-08-18.md) attributes a different source path: Google Keyword Planner through Percuity, US and English. It contains values such as “custom web development” at 1,000 and “web development agency” at 4,400, plus paid competition and top-of-page bid ranges. Those are different strings or a different dated record from the September DataForSEO estimates. This note is not a preserved raw response and its bid ranges are not the same metric as the September CPC field.

Do not average these numbers, call a difference a trend, treat paid competition as organic KD, or present August URL-derived keyword ideas as pages' rankings. The August statements that missing seeds imply “below the reporting floor” and that migration demand is definitively builder-to-builder are stronger than the preserved evidence establishes.

## Decision and remaining evidence gap

The records are enough to justify familiar service vocabulary and existing page links. They are not enough to select a “winning” exact headline, promise lower bounce, establish current UK demand, or declare the business invisible for every term. Do not add related keyword volumes to estimate unique buyers: close variants may overlap.

A fresh metric run should test the new-build/design/redesign/rebuild/migration/ecommerce families in separate US and UK captures, preserve the original response, record the named 12-month window and monthly breakdown, language, network, currency and wrapper status meanings. Until such a run exists, present any fresh search-result research separately from these dated volume estimates.
