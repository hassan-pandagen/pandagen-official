# Follow-up review at 961e2ee

16 September 2026. Reviewed the local repository, including changes since the earlier `3efbfec` audit. HEAD is `961e2ee`; it is 33 commits ahead of the locally recorded upstream. No fetch, public-site comparison, localhost session, application edit, commit or push was performed. Existing build artifacts were supporting evidence only, not a fresh build of this checkout.

**Decision: keep the changes. Most reported corrections are present, but “all four done” overstates the completeness of contents navigation and translated commercial terms.** These are bounded finishing fixes; they do not justify another homepage rewrite.

## Confirmed closed

- FR/DE homepage titles and hero text now cover new websites and online stores. Their contact and About introductions no longer define the business solely through migrations. The English-working-language FAQ and draft-translation markers remain.
- Ecommerce no longer says every app loads JavaScript before a product appears, promises instant loading in three cities, or advertises an unsupported $500/month plugin saving. Step 01 now acknowledges a first store.
- General reference labels in company facts, AI information and llms text have been broadened; homepage Twitter description no longer uses the retired “can quote” proposition.
- The DIY article no longer limits builders to projects without customers or asserts that machine readability itself produces orders. Its one-store result remains explicitly founder-affiliated.
- Earlier intervening commits fixed the homepage FAQ's $5,000 small-store floor, the shared OPS twenty/26-functions conflict, and the shared MyCustomPatches hosting-retirement wording. The header now leads with websites, stores, custom software and AI SEO. Do not carry those old findings forward as unchanged.

## Findings to finish

### 1. The speed-guide contents component cannot render

`src/app/blog/how-to-speed-up-your-website/page.tsx:188` mounts `ArticleContents`, but the page supplies only three eligible `h2[id]` headings: `where-to-start`, `worked-example`, and `faq-heading` from the shared FAQ component. The twelve diagnostic `BlogHeader` sections at lines 354–528 have no IDs.

`src/components/blog/ArticleContents.tsx:45` hides the list unless at least four headings qualify. Consequently this integration produces no contents list after hydration either. This is a functional defect, not merely the documented absence from server HTML.

Add stable IDs to the actual diagnostic sections, then verify every intended section appears exactly once and each fragment resolves. Lowering the threshold alone would leave the most useful diagnostic sections absent.

### 2. FR/DE commercial parity is not complete

The translated pricing terms still state that monthly customers are hosted on the agency account without a separate hosting bill, and that monthly support includes hosting:

- `src/lib/i18n/dictionaries/fr.ts:589` and `:595`
- `src/lib/i18n/dictionaries/de.ts:589` and `:595`

The English canon at `src/data/company-facts.ts:105` says hosting is **not a standard inclusion**: account ownership and charges are agreed per client and written into the quote. The locale pricing renderer uses these terms, so these are active buyer-facing statements, not translation backups.

Translate the actual policy: hosting arrangements and any charges are agreed in the quote; monthly support does not automatically establish inclusion. Preserve the client-account transfer policy.

There are two adjacent copies to align in the same pass:

- Both dictionaries at line 344 say deployment is on the customer's hosting account, not the agency's, without the negotiated-hosting exception.
- Both dictionaries at line 364 still describe MyCustomPatches performance **and hosting cost** as pending reconciliation. English canon at `company-facts.ts:213` now distinguishes pending performance records from permanently retired hosting-cost evidence.

These are factual translation-parity issues, independent of whether a native speaker improves the prose.

### 3. Ecommerce absolutes were reduced, not exhausted

Remaining examples in `src/app/services/ecommerce/PageContent.tsx`:

- Line 186: “Your Store Looks Like 50,000 Other Shopify Stores” and “A custom storefront is the only way to build a brand experience that's 100% yours.” The specific prevalence and exclusivity remain unsupported in this review.
- Line 603: “Load under 1 second.” This is an unqualified outcome in the related-service card, not a scoped acceptance target.
- Line 183 changes “Every app” to “Most apps.” “Most” still asserts prevalence; the change supplies no evidence for that proportion. “Apps that add storefront scripts can affect loading; we inspect what your store loads” avoids inventing a market-wide statistic.

The same page offers Shopify or WooCommerce at lines 59 and 90 but describes all four implementation steps through Shopify at lines 136–139. Either label that sequence as the Shopify example or account for the WooCommerce route. This is a remaining buyer-journey mismatch, not a reason to undo the first-store opening.

### 4. Contents coverage and presentation need a small follow-through

The component is integrated into AEO playbook, WordPress comparison and the general speed guide. The earlier requested Divi, GoHighLevel and WooCommerce-too-slow articles still have no `ArticleContents` import or use. Distinguish completing the current three integrations from covering that original three-article request.

The two currently viable integrations collect 13 and 24 eligible headings respectively. Both include two FAQ entries: an outer article FAQ heading and the shared FAQ component's own heading. These are redundant entries with different IDs, not duplicate IDs. See AEO lines 727–728 and WordPress comparison lines 594–595.

The list is inserted after hydration with no reserved space. That creates a potential layout-shift cost, particularly for 24 entries, but no CLS regression was measured in this source review. Deriving navigation and headings from one server-rendered content structure would also avoid a manually duplicated list. It is not necessary to choose between hand-maintained duplicate headings and client-only navigation.

The labelled nav, real fragment links, keyboard focus styling and global `scroll-padding-top:100px` are present. Do not invent an anchor-obstruction or duplicate-ID defect.

The lint suppression is a tradeoff rather than an automatic correctness failure. Its explanation is too narrow: the rule addresses synchronous effect state updates and extra renders generally, not only values derived from props. React also documents valid DOM-measurement cases. See [React's rule documentation](https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect). No timeout workaround is needed merely to silence lint.

## Smaller remaining copy items

- FR/DE contact intros now welcome first-time buyers, but the checklist still asks first for an existing site/platform and describes the goal as a migration without SEO loss (`fr.ts:661–679`, `de.ts:661–679`). Make the checklist explicitly optional and relevant to new builds too. Their form notes describe scoping in either local language or English while the FAQ promises English scoping/support and translated written exchanges; clarify written translation in both places.
- OPS still has the unsourced “one click, not a 30-minute spreadsheet” comparison at `src/app/work/enterprise-ops/page.tsx:668`. The earlier reporting-time claim is not completely gone.

## Verification and boundaries

- `npm.cmd run typecheck`: pass.
- `npm.cmd run claims:check`: pass. This does not establish that every claim is supported; the examples above remain despite that pass.
- ESLint on `ArticleContents.tsx` and its three integrated article files: pass.
- Source inspection, commit diffs and existing generated HTML confirm the heading-selection defect. No new full build, browser interaction, measured CLS, form submission or delivery test was performed.

No new checklist article was drafted in this review. The previously researched launch-verification angle remains a reasonable distinct article; it should acknowledge builder capabilities and describe what to test. These corrections do not establish higher traffic, rankings or conversions, which require post-deployment measurement.
