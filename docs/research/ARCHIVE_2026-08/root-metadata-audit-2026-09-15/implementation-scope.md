# Actual scope of the root description

Checked 15 September 2026. This is a read-only source, build-output and localhost audit. No application files, descriptions, structured data or indexing settings were changed for this audit.

**The root `metadata.description` is not the sentence every page presents to Google. In the inspected build, zero of 145 indexable HTML candidates use it. Every candidate renders one non-root description. The separate Organization description in the root layout is emitted across all 145. These are different fields with different effects.**

## What was counted

The complete row-level results are in [built-metadata-inventory.json](./built-metadata-inventory.json). The current localhost sample is in [localhost-metadata-capture.json](./localhost-metadata-capture.json).

| Check | Result |
| --- | --- |
| HTML files in `.next-audit/server/app` | 149 |
| HTML candidates after excluding errors, explicit noindex and redirects | 145 |
| Candidates rendering the root meta description | **0** |
| Candidates rendering a non-root meta description | **145** |
| Candidates with no meta description | 0 |
| Candidates with more than one meta description tag | 0 |
| Candidates rendering the exact root Organization description | **145** |
| Candidates with an additional description for the same Organization `@id` | 5 |

The exclusions are `/_global-error` (500), `/_not-found` (404 and noindex), `/demo/featured-products` (404 and noindex), and `/services/wordpress` (308 redirect). Only the last of these renders the root description. It is a redirect artifact, not an additional indexable service page.

The prerender manifest has 153 routes. Its four routes without corresponding HTML are `/.well-known/traffic-advice`, `/llms.txt`, `/robots.txt`, and `/sitemap.xml`. The dynamic route pattern `/blog/topic/[topic]` has concrete hub HTML in the inventory; the route pattern itself is not counted as another page. RSC payloads, segments and API files are excluded by the `.html` selection.

“Indexable candidate” here means a generated HTML response not excluded by the observed response status or meta robots directives. It does not establish that Google has indexed, crawled or selected the canonical for each URL, or that the production deployment matches this local build.

## Build and capture provenance

- Build directory: `.next-audit`; build ID: `VKBGgrsGmWTydI_QZgPKp`.
- `BUILD_ID` modified: **15 September 2026, 14:41:14 UTC / 19:41:14 PKT**.
- Prerender manifest modified: **14:41:19 UTC / 19:41:19 PKT**.
- Inventory generated: **15:15:07 UTC / 20:15:07 PKT**.
- Build diagnostics report `buildStage: "static-generation"`. The output and manifests exist. This read-only audit did not rerun the build or inspect its process exit status, so their presence is not being described as a fresh successful full build check.
- Localhost responses were captured immediately after the inventory, with a timestamp and HTML SHA-256 for each response. These are raw HTTP responses, not browser screenshots or public production verification.

To reproduce from the repository root:

```powershell
node docs/research/root-metadata-audit-2026-09-15/inventory.mjs
```

The [script](./inventory.mjs) reads the current source root description, generated HTML and adjacent response metadata. It parses rendered meta tags and JSON-LD rather than searching escaped RSC text for an occurrence of a sentence. It writes only the two research JSON files in this directory. Rerunning replaces the captures with the new observation time.

## Why changing the root default does not rewrite these pages

The installed Next.js metadata guide evaluates metadata from the root layout toward the final page, then replaces duplicate keys with the later declaration. An unset child field can inherit a root value; a child `description` replaces it. Open Graph and Twitter descriptions are separate metadata properties and must be checked separately.

Local guide: [generate-metadata.md](../../../node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md), “Ordering”, “Merging” and “Inheriting fields” at lines 1336 onward. Public counterpart: [Next.js metadata merging](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging).

The relevant source declarations are:

| Source | Scope and current finding |
| --- | --- |
| [Root layout](../../../src/app/layout.tsx), line 54 | Fallback meta description about SEO-safe migrations. Overridden on every counted candidate. Updating it is useful default maintenance but changes none of their current description tags. |
| [Homepage](../../../src/app/page.tsx), lines 21–42 | Own meta description already covers custom business websites and online stores. It also has its own OG and Twitter descriptions; the Twitter sentence still has different Next.js/AI emphasis. |
| [Services page](../../../src/app/services/page.tsx), lines 8–20 | Own meta description includes migration platforms, $1,500 and “2 to 4 weeks”. Root editing does not remove this claim. OG and Twitter descriptions also have separate strings. |
| [About](../../../src/app/about/page.tsx), line 8 | Own migration-focused company description. |
| [AI info](../../../src/app/ai-info/page.tsx), line 16 | Own migration-focused reference description. |
| [WooCommerce article](../../../src/app/blog/woocommerce-too-slow/page.tsx), lines 23–30 | Own diagnostic description. Keeping this specific to the article is appropriate. |
| [Privacy](../../../src/app/privacy/page.tsx), [terms](../../../src/app/terms/page.tsx), [cookies](../../../src/app/cookies/page.tsx) | Own policy descriptions. They should continue describing the policy rather than become company sales copy. |

Ten live localhost routes returned HTTP 200 and confirmed non-root description tags: `/`, `/services`, `/blog/woocommerce-too-slow`, `/about`, `/about/hassan`, `/ai-info`, `/editorial-policy`, `/privacy`, `/terms`, and `/cookies`. Their full descriptions, OG descriptions, Twitter descriptions and Organization nodes are saved in the capture. None of those ten responses uses the root default as its meta description.

## The field that actually is repeated across the site

[Root layout](../../../src/app/layout.tsx), line 142, defines `siteGraph`’s Organization description. The script at lines 167–170 outputs it independently of the Metadata API. Therefore child metadata overrides do not remove it.

The exact shared description begins “PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses migrating from slow or costly platforms.” That wording limits the customer context to migration even though the maintained [primary offer](../../../src/data/company-facts.ts), line 71, includes first websites and new stores.

Updating this shared Organization definition would change a company statement present in all 145 candidate HTML responses in this build. That is an observed output footprint, not evidence of a ranking multiplier or that every AI product reads or weights the field.

Five routes additionally emit a different description with the same `https://www.pandacodegen.com/#organization` identifier:

| Route | Additional source |
| --- | --- |
| `/` | [Homepage](../../../src/app/page.tsx), line 133 |
| `/blog/how-to-migrate-wordpress-to-nextjs` | [Article](../../../src/app/blog/how-to-migrate-wordpress-to-nextjs/page.tsx), line 125 |
| `/work/enterprise-ops` | [Case study](../../../src/app/work/enterprise-ops/page.tsx), line 114 |
| `/work/panda-codelab` | [Case study](../../../src/app/work/panda-codelab/page.tsx), line 113 |
| `/work/panda-patches` | [Case study](../../../src/app/work/panda-patches/page.tsx), line 139 |

Multiple same-ID nodes are not inherently an error; complementary properties can describe one entity. Here, independently maintained company descriptions create avoidable drift. Use the maintained company definition for Organization facts, and keep the individual project description on its project/article entity. Preserve disclosures and project-specific facts when doing so.

There is also an actual conflicting date on the homepage's same-ID Organization: root `foundingDate` is **2026-08-12** and homepage `foundingDate` is **2026-02**. [Company facts](../../../src/data/company-facts.ts), “Founded”, distinguishes brand trading since February from LLC formation on 12 August. That distinction belongs in coherent entity modelling; two different dates on the same entity do not express it clearly. The other additional Organization nodes use the less specific year 2026.

## The `/services` timeline needs its own correction

The description’s blanket **“2 to 4 weeks”** is not the full published delivery range. [Company facts](../../../src/data/company-facts.ts), lines 100–102, assigns:

| Build tier | Published range |
| --- | --- |
| Starter | 1 to 2 weeks |
| Growth | 2 to 4 weeks |
| Scale | 3 to 6 weeks, with actual dates controlled by accepted terms |

The `/services` page is a directory covering migrations, custom software and stores. It also links the broader service catalogue. It is not a Growth-tier landing page. Pairing the Starter $1,500 price with the Growth timeline without scope gives an imprecise combined promise. Replacing “2 to 4” with “1 to 6” would still imply all custom software and ongoing services fit a build-tier delivery window.

For this directory, omit the universal delivery duration from the meta description and put time ranges beside the relevant scoped tier or service. State that schedule is agreed with scope where a broad statement is needed. Root metadata changes cannot achieve that correction because `/services` owns this description.

The visible [services hero](../../../src/app/services/PageContent.tsx), lines 43–55, is still “Website redesign and migration services” and “We rebuild business websites that already earn their keep”. That remains a substantive new-build positioning mismatch regardless of hidden metadata wording. The page's pricing cards are at lines 136–153. A coherent service-directory revision should align visible offer, relevant tiers and the route’s own metadata together, while preserving distinct diagnostic and policy pages.

## Priority supported by this evidence

1. Correct the `/services` visible offer and its own unqualified timeline; this is the promise a buyer can encounter on that route.
2. Reconcile the common Organization definition and its same-ID duplicates with the accepted company facts. This reaches the repeated entity statement.
3. Align company/reference page descriptions where they still say migration is the whole offer; check OG/Twitter separately.
4. Refresh the root fallback for future or uncovered pages, without presenting it as a rewrite of every existing search snippet.

The numerical footprint establishes what an edit can change in this codebase. It cannot establish which wording change has the highest business or ranking effect. No mass rewrite of blog descriptions is justified by this inheritance audit.
