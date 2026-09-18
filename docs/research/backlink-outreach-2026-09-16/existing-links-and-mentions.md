# Existing links and mentions: verify before counting a gap

Checked 16 September 2026. This is a bounded public-source audit, not a complete backlink index. Links below were inspected in fresh HTTP responses; the PDF was downloaded and its annotations inspected with pypdf. Neither a visible link nor an absent `nofollow` attribute proves Google indexes, credits or ranks through it. No external account was changed and no message was sent in this subtask.

## Owner-supplied Google Search Console baseline

On 17 September 2026, the owner supplied the current **Top linking sites** and **Top linked pages externally** views from the domain property in Google Search Console: **22 displayed linking sites and 249 total external links**. The target-page view contains only two URLs: the homepage has **247 links from 21 sites**, while `/blog/what-is-headless-commerce` has **2 links from 2 sites**. The exact export period and individual source URLs were not included, so this is preserved as a dated observed baseline rather than treated as a complete backlink export. [Raw transcription](captures/gsc-top-linking-sites-owner-supplied-2026-09-17.json)

That means **99.2% of the displayed links point to the homepage**. The two links to the headless-commerce article come from `dev.to` and `storeownertips.com`, one each. The owner identified the DEV item as their own article with a canonical link back, so it is distribution of first-party material rather than independent editorial validation. The Store Owner Tips source is [its JWT glossary page](https://storeownertips.com/glossary/json-web-token-jwt/). It links the words **“0.8 to 1.2 seconds”** to PandaCodeGen even though the cited PandaCodeGen article explicitly publishes no speed-uplift or before-and-after figure. It is therefore an inaccurate numerical attribution that needs correction, not a supporting citation to preserve for link value.

The displayed target-page table consequently contains **no clean independent deep link that was verified in this pass**: one is owner-authored distribution and one misstates what the cited source establishes. No service page, case study or other article appears in the displayed table. The highest-value outreach objective is therefore a relevant deep link earned by a page that actually supplies the evidence or explanation a publisher is referencing. A partner directory may still link the homepage appropriately; technical articles, implementation showcases and citations should point to the matching resource or case study when editorially natural.

| Source group | Sites already observed in GSC | Interpretation for this campaign |
| --- | --- | --- |
| Founder-affiliated / delivered work | `pandapatches.com` (171 pages), `ladies4jesus.com` (6) | Existing relationship links. The 171-page count can reflect repeated placement and must not be read as 171 independent endorsements. Panda Patches shares an owner with PandaCodeGen. |
| Directories, company and review profiles | `designrush.com` (27), `goodfirms.co` (11), `trustpilot.com` (8), `crunchbase.com` (4), `f6s.com` (1) | Already-acquired domains. Profile maintenance can help consistency, but these are not new referring-domain opportunities. |
| Editorial, quotation and syndication | `msn.com` (3), `aol.com` (1), `connectively.us` (1), `qwoted.com` (1), `womansworld.com` (1) | Stronger evidence of press/expert participation. MSN/AOL may be syndication of the same underlying story; confirm URLs before counting separate editorial wins. |
| Developer and community surfaces | `vercel.com` (3), `dev.to` (2 across 2 targets), `indiehackers.com` (1), `reddit.com` (1), `sanity.io` (1), `twitter.com` (1) | Existing technical/community footprint. The article-level DEV link is owner-authored/canonical distribution, not independent editorial validation. Vercel and Sanity partner listings remain separate opportunities, but the domains themselves are not new referring domains. |
| Other observed domains | `seznam.cz` (2), `mnplasticsurgery.com` (1), `storeownertips.com` (1), `wordpress-website-design-agency-in-united-states.com` (1) | The Store Owner Tips deep link is an inaccurate numerical attribution and is queued for correction. Inspect the remaining exact linking pages and anchors before assigning value. |

The strategic gap is therefore narrower than “get directory links.” PandaCodeGen already has profile, review, press, syndication and developer-community domains. The higher-value next work is earning **independent, relevant pages about the actual services and implementations**, pointing to the matching case study, technical resource or service page rather than adding more repeated homepage links.

## Existing footprint

| Source | Actual destination | Classification | Action |
| --- | --- | --- | --- |
| [Woman's World article](https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay) | `https://www.pandacodegen.com/` | Existing editorial quotation and backlink | Preserve; do not treat as a missing link or web-development endorsement. |
| [Sanity community profile](https://www.sanity.io/exchange/community/pandacodegen) | `https://www.pandacodegen.com` | Existing contributor-profile link | Update old claims in the account. Separate from agency-partner eligibility. |
| [Sanity Panda Patches project](https://www.sanity.io/projects/pandapatches) | `https://www.pandapatches.com` | Existing community-submitted project; link benefits the store directly | Maintain the project; do not count this particular link as a direct PandaCodeGen backlink. Contributor links lead to the Sanity profile. |
| [Vercel Community showcase](https://community.vercel.com/t/panda-patches-wordpress-to-next-js-migration-on-vercel-zero-seo-drops-38k-mo-on-25-mo-stack/38222) | `https://www.pandacodegen.com/work/panda-patches` and `https://www.pandacodegen.com` | Existing self-posted showcase links | Correct stale claims before using this post in outreach. This is not a Vercel partner badge or independently commissioned case study. |
| [DC House report](https://dchouse.pl/documents/dc-house-raport-wydajnosci-2026.pdf) | None in the PDF | Confirmed unlinked citation | Citation correction first; conditional source-link request second. |
| [Store Owner Tips JWT glossary](https://storeownertips.com/glossary/json-web-token-jwt/) | `https://www.pandacodegen.com/blog/what-is-headless-commerce` | Existing deep link attached to an unsupported numerical claim | Ask the publisher to remove PandaCodeGen as the source for “0.8 to 1.2 seconds” or replace it with the original benchmark. Preserve a PandaCodeGen link only if its surrounding statement matches the article. |

## DC House: a real unlinked mention, with a sourcing problem

The 14-page report names PandaCodeGen in a source line on page 5 and a bibliography entry on page 13. The downloaded PDF has **zero annotations**, including zero URI links. This is confirmed unlinked credit, not an existing clickable PDF backlink. File SHA-256: `33a0f5a357d1287a93bfe85bfdc18afad7a825ed25ec23bb809b765928e24df5`.

Page 5 groups PandaCodeGen among sources for generalized WordPress performance figures. It does not identify which row came from which source. Our current [comparison](https://www.pandacodegen.com/blog/wordpress-vs-nextjs) explicitly avoids platform-wide scores, costs and security claims. Do not endorse the report or supply our URL as support for that table.

Public route: **kontakt@dchouse.pl**, published in the PDF and on the [official site](https://dchouse.pl/). A correction email is appropriate. Ask them to remove unsupported attribution, then link the current comparison only if they retain a relevant discussion. This is a maintenance prospect, not a high-priority acquisition target or evidence that their benchmarks are sound.

## Woman's World: useful, but keep the context

The article credits Hassan Jamal as PandaCodeGen's founder and lead engineer and links the company homepage. Its subject is remote AI-training work. The byline date is 29 May 2026; an on-page note says a corrected version was updated 15 July 2026. It supports the claim that Hassan was quoted on that topic, not that the publication reviewed our services or validated our performance results. Fresh HTML gives the company link `rel="noopener"`.

No reclamation is needed. If the owner has an existing relationship with the journalist, relevant future expert comments can build on it without requesting another link as a favor.

## Store Owner Tips: the deep link is a citation error

The owner supplied the exact page and a DOM inspection showing this link:

`<a href="https://www.pandacodegen.com/blog/what-is-headless-commerce" target="_blank" rel="noopener noreferrer">0.8 to 1.2 seconds</a>`

The surrounding sentence presents the number as a reported mobile-load-time benchmark. PandaCodeGen's [headless-commerce article](https://www.pandacodegen.com/blog/what-is-headless-commerce) says it publishes no speed uplift and no before/after figure, and explains that headless architecture is not an automatic performance result. The destination therefore does not substantiate the anchor or number.

Use the site's [official contact page](https://storeownertips.com/contact/) to request a source correction. Do not ask them to preserve the backlink, change it to a preferred keyword, or make it dofollow. Removal is preferable to keeping an unsupported attribution. If they retain PandaCodeGen as a general architectural reference, the surrounding copy must describe what the article actually supports.

## Sanity: present already; clean up the submission

The community profile directly links PandaCodeGen with `rel="noopener noreferrer"`. The project page links the store with the same attributes. These are community contributions, not independent testimonials.

The fetched profile still promises universal 95-100 scores and no platform fees; the project summary still claims sub-second loading and 95+ scores. Keep demonstrable implementation details and replace broad outcomes with a dated, scoped case-study reference. Explicitly disclose that Panda Patches and PandaCodeGen share owner Imran Raza Ladhani. Do not submit a duplicate project to earn another link.

## Vercel Community: an additional canon surface to fix

The post contains two direct PandaCodeGen links, both `rel="noopener noreferrer"`. It was posted by the PandaCodeGen account. Its old title/body claim complete ranking preservation, revenue and hosting figures, and an Austin location. It also uses absolute language about WordPress capability. Those claims should be reconciled with the current canon before the post is offered as evidence.

Preserve the technical discussion and existing useful links. Update the title and body through the owner account, with a dated correction explaining revised evidence and the shared-owner relationship. Where editing is unavailable, ask the community moderators for the appropriate correction process; avoid publishing a duplicate showcase. A link from this community is already present, while Vercel agency-partner status is a different opportunity.

## Suggested correction message: DC House

**Status:** Draft only. Recipient is a verified public company contact. English avoids implying Polish-language delivery.

**To:** kontakt@dchouse.pl  
**Subject:** PandaCodeGen source reference in your website-performance report

Hello DC House team,

I'm Hassan, co-founder of PandaCodeGen. I noticed our WordPress/Next.js comparison is credited in your report.

Our current article does not support universal WordPress speed or PageSpeed benchmarks. Please check the attribution to us against the source and remove it from any figures it does not substantiate.

The current comparison is here: https://www.pandacodegen.com/blog/wordpress-vs-nextjs

If you retain a relevant reference to our comparison, a clickable source link would help readers check its context. Please keep it separate from any platform-wide benchmarks.

Thank you,  
Hassan Jamal  
Co-founder, PandaCodeGen

## Reproducible evidence

- [PDF annotation inspection](captures/dchouse-pdf-link-inspection.json): page count, SHA-256, zero annotations, relevant source-credit locations.
- [Existing-link anchor inspection](captures/existing-link-anchors.json): requested URLs, HTTP statuses, link targets, exact `rel` attributes and anchor labels. A null `rel` means no attribute was present on that extracted element.
- [Owner-supplied GSC Top linking sites transcription](captures/gsc-top-linking-sites-owner-supplied-2026-09-17.json): 22 displayed domains and 249 linking pages. Target URLs and export period were not supplied.
- Public comparison corroborates the correction; repository source is `src/app/blog/wordpress-vs-nextjs/page.tsx`, especially the opening and explanation of why it avoids platform-wide numbers.

The PDF screenshot service failed with a cache-miss error. Annotation and text findings come from the downloaded file, not a visual-layout assessment. Temporary parser dependencies and the downloaded PDF were removed after extraction; the digest and structured evidence remain.
