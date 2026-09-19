# WordPress migration: buyer, copy and proof audit

Date: 18 September 2026. Scope: the original repository implementation of `/services/wordpress-migration`, its rendered component dependencies and company/project facts. This sub-audit was read-only; line references and observed defects describe that baseline. The later same-day [implementation follow-up](implementation-follow-up.md) records the scoped project-proof changes and supersedes the corresponding recommendations here. No live review pages, vendor prices or performance measurements were independently verified for this sub-audit. Claims described as unsupported mean the inspected page does not supply supporting evidence; they are not declared false solely because a record is absent.

The property-level query report contains **“wordpress to next.js migration services”**, with average position 12.2 and 138 impressions. Because the archived query and page tables are separate, that observation does not identify the landing page, establish why this service page ranks where it does, or predict a top-five outcome. The clearest controllable weaknesses are mismatched first-screen intent, an unclear CMS destination, inconsistent promises, and proof presented less effectively than the underlying records permit.

## 1. Main buyer finding

The page spends too much time convincing a buyer that WordPress is bad before establishing what PandaCodeGen will migrate, where the content will live, how the move is controlled and what it costs. A visitor already searching for a migration service needs vendor selection information. This page repeatedly restarts the problem argument.

- **Search result:** `src/app/services/wordpress-migration/page.tsx:8` names the offer “WordPress Website Migration.” The description at line 9 is a planning checklist. Neither includes Next.js. The inherited title suffix is in `src/app/layout.tsx:50`–52. These are missed opportunities to describe the exact service, not proof of a ranking penalty.
- **First screen:** the H1 says the visitor’s site “got slower every year” and promises to discuss cost/rebuild suitability, not the service they searched for (`PageContent.tsx:49`–61). It assumes facts about the visitor and resembles an informational article. The badge says “WordPress Migration Service,” but still omits the destination (`:36`).
- **The actual offer exists:** the summary at `PageContent.tsx:92` finally names WordPress to custom Next.js, the starting price, timeline and ownership. That is a better foundation for the hero, after removing its overbroad promises.
- **The first substantive section is an attack/comparison:** the platform chart at `:99`–124 precedes scope and process. The migration process does not arrive until `:224`–256, after cost criticism, metrics, four project cards, general testimonials and a company positioning section.
- **The essential scope is scattered:** Sanity is introduced in company positioning (`:189`), editing in pricing (`:488`, `:501`) and FAQ, custom post types in Growth (`:502`), redirect promises throughout. A buyer must assemble the architecture and deliverables themselves.

## 2. Claims and contradictions to fix first

| Finding | Repository evidence | Buyer impact and concrete correction |
|---|---|---|
| “Calculate Savings” has no action | `PageContent.tsx:99`–124 supplies no `onOpenQuote`; `src/components/services/PlatformKillerChart.tsx:116`–120 only calls that optional handler | The page offers a task it cannot perform. Remove the button or wire an actual estimate/request flow and label the result accurately. A contact modal is not a calculator. |
| Published proof policy conflicts with project cards | Page introduction to the grid promises profile/date/conditions (`PageContent.tsx:173`); `CaseStudyGrid.tsx:62`–65, `:87`–101 hardcode scores 92/96/95 and “< 1s” without those details | Add dated, route-specific measurement records or remove the figures until supported. A live project link cannot substantiate a historical measurement. |
| “Real WordPress Migrations” includes other work | Original `PageContent.tsx:170`; `CaseStudyGrid.tsx:81`–101 identifies Saforne as a custom build and Obare as Wix to custom | Resolved for this service in the scoped follow-up: dedicated Panda Patches and Ladies 4 Jesus live examples, plus A Step Above Medical explicitly in progress. MyCustomPatches remains later supporting evidence. This does not establish that the shared grid's other consumers were revised. |
| No monthly fees versus recurring costs | “No monthly fees” at `PageContent.tsx:389`; commercial hosting at `:103`; dependency maintenance at `:111`, `:416`; third-party services in plugin table `:443`–447 | Replace with “No required PandaCodeGen support subscription. Your quote separates hosting, CMS, connected services and optional maintenance.” Company facts already explain optional ongoing work/hosting (`company-facts.ts:104`–105). |
| Ownership on day one versus handover | `PageContent.tsx:370` says “Full code ownership on day one”; `company-facts.ts:109` and `:120` say handover/end | Use handover consistently and identify code, accounts, CMS models, documentation and licences. Do not promise a timing term that differs from the accepted agreement. |
| Absolute ranking answer immediately withdrawn by its qualification | `service-faqs.ts:305`–306 starts “No” to losing rankings, then says no ranking outcome/recovery date is guaranteed | Start “Rankings can fluctuate during a migration.” Explain the controls and monitoring. This shared FAQ also feeds schema (`page.tsx:20`), so correct the shared source. |
| Timeline ceiling contradicts tiers | FAQ says larger sites can run to four weeks (`service-faqs.ts:310`); Scale says 3–6 weeks (`PageContent.tsx:513`); summary says 1–6 (`:92`) | Publish the three planning ranges once; say scope, access, content readiness, integrations and approvals determine dates. Remove the pseudo-universal day-by-day 21-day schedule. |
| “Every migration ships with 90+” broadens a scoped target | `PageContent.tsx:92`; qualified version at `:625`; canonical acceptance is representative pages, mobile/desktop, three recorded Lighthouse runs (`company-facts.ts:108`) | Use the canonical wording near the first performance claim. Distinguish a contractual handover target from measured historical client outcomes. The page currently has no published independent before/after performance proof for its featured client. |
| “Fixed migration quote on the spot” conflicts with scope-first copy | `PageContent.tsx:84`; `PartnerPromise.tsx:47`–59; `PricingTiers.tsx:61`, `:69`–74 | A live PageSpeed result cannot establish the stated content/integration scope. Promise a discussion of requirements and next steps, followed by a written scope and price once reviewed. Only retain instant quoting for an explicitly bounded service that actually supports it. |
| “7 plugins … with zero code” contradicts its own table | `PageContent.tsx:415`; custom React components/API routes/TypeScript are listed at `:441`–447 | Replace with “How we replace the WordPress features you use.” Explain implementation and maintenance, not universal savings. |
| “$0/year” replacements include chargeable services | `PageContent.tsx:416`; Stripe Billing percentage in `:446` | Remove the blanket $0 claim. Separate software licence, usage fees, development and maintenance. The table itself recognises that a percentage can replace a licence. |
| Renewal values gain an extra `/yr` | Array values already contain “/yr” and mixed units at `PageContent.tsx:441`–447; renderer appends `/yr` at `:452` | Fix the presentation if retaining it. The mobile `data-label="Savings"` also contradicts the column heading “Entry price, if you pay it” (`:425`, `:452`). Prefer a feature map over a vendor-price table on this service page. |

Additional unsupported or overbroad persuasion should be removed, rather than surrounded with more disclaimers:

- “WordPress page builder bloat makes you invisible to AI-driven traffic” (`PageContent.tsx:279`). No measurement is supplied; the same sentence admits citations cannot be guaranteed. Replace with an agreed check of rendered content and crawl access if relevant to the engagement.
- “Try to move platforms and you lose rankings, content, and data” and “Investors and acquirers discount WordPress-dependent businesses heavily” (`:282`). The first conflicts with the service’s own migration proposition; neither is supported here. Cut both.
- “Enterprise level security” and guaranteed cheaper long-term maintenance (`:562`–565). Neither defines an acceptance standard or the cost assumptions. State the actual security/maintenance responsibilities in scope.
- “A Single Hack Can End Your Business” and the categorical breach consequences (`:280`). This does not help select a migration provider. Replace the fear panel with security responsibilities for the chosen architecture.
- “Cheaper than market,” “same thing” and “Quality stays the same” (`:186`–192). There is no like-for-like comparison on the page. Explain founder-led delivery and published starting prices directly.
- The “emerging quality challenger” paragraph (`:203`) combines a mutable GitHub contribution claim, withdrawn proof, founder-business revenue and tooling costs, then ends “Younger than established competitors, .” Cut this block. None of those numbers establishes the outcome a new migration buyer can expect.

## 3. Clarify the architecture before selling its benefits

The current service describes **full WordPress replacement**: a new Next.js site, export of the old content and a replacement editor, specifically Sanity in several places (`PageContent.tsx:189`, `:232`–233, `:443`, `:501`). It does not explicitly say whether keeping WordPress as a headless CMS is available. “WordPress to Next.js” can leave a buyer expecting to retain wp-admin.

The site already explains the two architectures accurately enough to serve as the internal content model: `src/app/blog/how-to-migrate-wordpress-to-nextjs/page.tsx:228`–244 distinguishes keeping WordPress behind a Next.js frontend from moving content elsewhere and switching WordPress off. Bring that decision onto the service page. Do not manufacture a headless service or proof because the query might include it.

Ready copy consistent with the current offer:

> **Does WordPress stay after the migration?**
>
> The packages on this page cover replacing WordPress with a Next.js site and an editor for the content in your scope. Sanity is used where the project needs a custom content model or editorial workflow. Your quote identifies what moves, which features are rebuilt and how your team will edit the new site.
>
> If keeping wp-admin is a requirement, include that in your enquiry. A Next.js frontend with WordPress retained as the CMS is a different architecture: WordPress hosting, updates and backend plugins remain. We assess that requirement separately before quoting.

This states what is priced today without asserting that headless delivery has already been demonstrated. If the business confirms headless is a supported offer, show two explicit scope options, each with its own retained systems, editor, responsibility and ongoing-cost explanation.

Also resolve these practical buyer questions in the scope section, rather than leaving them to a sales call:

- Does “7 pages” count published URLs, designed templates, migrated posts or some combination? The Starter card promises a “small blog” and “full … content export” but caps the build at seven pages (`PageContent.tsx:484`–490). Define the counting rule and the quantity of migrated content.
- Which plugin-owned data and workflows are included? Explain mapping for custom post types, taxonomies, ACF fields, forms and SEO metadata; make membership, subscriptions, multilingual content and WooCommerce separately scoped where necessary.
- What can an editor change? Separate editing configured text/images/records from inventing a new page layout. Do not simply promise a dashboard “simpler than WordPress” (`service-faqs.ts:322`). Show a real editor example or bounded feature list.
- Can the current design stay? Define the difference between recreation, redesign and new copy/assets, and how changes affect the price.
- Who maintains dependencies and integrations after the 15/30 support days? The page names dependency maintenance in the comparison but does not give the buyer an operating plan.

## 4. Use the strongest relevant proof

**Updated after the owner's September 18 clarification: lead with Panda Patches and the live Ladies 4 Jesus migration.** Panda's operating WordPress-to-Next.js system, editor, pricing, checkout and connected order workflow show the commerce capability, with founder-affiliation explicit. Ladies 4 Jesus shows owner-managed content and moderation for an independent client. The owner confirmed its WordPress origin and live status. A Step Above Medical is a third project clearly labelled **in progress, launch pending**, with no completed-work image or outcome claims. See [capability evidence](panda-patches-proof.md) and [implemented scope](implementation-follow-up.md). This replaces both the earlier independent-client-first recommendation and the later two-case-only recommendation.

**Use MyCustomPatches as secondary independent evidence.** The record states an independent client relationship and legal entity MC Patches LLC (`case-study-facts.json:34`–39, `:135`). It contains owner-approved records for about 22 days, 200+ URLs, 13 templates and zero downtime at cutover (`:42`–91). It also records no ranking losses in a specifically bounded 30-day post-launch monitoring window (`:94`–104). These facts belong to this project, not Panda Patches, and are not guarantees for every migration.

The original metrics section already reads verified facts (`PageContent.tsx:144`–155), which is a strength. Its heading “What We Can and Cannot Evidence” foregrounds the correction process instead of the work. The original next case grid repeated the same project but presented three absent metric slots (`CaseStudyGrid.tsx:76`–79, `:185`–187). The follow-up replaces that shared grid on this service and retains the MyCustomPatches metric record as later supporting evidence. Renaming and simplifying its evidence-heavy heading remains part of the broader page revision.

Suggested supporting case-module copy:

> **A WordPress migration for MyCustomPatches**
>
> We migrated MyCustomPatches, operated by MC Patches LLC, to a custom Next.js build. The client-approved project record covers 200+ URLs and 13 rebuilt templates, delivered in about 22 days. The recorded cutover had no downtime. These are results from one independent client project, not a delivery promise for every site.
>
> Read the migration scope and project record → `/work/mycustompatches`

Include the record date/method beside the facts, not only in a data file. Retain a concise dated correction and a link to the complete project record: its old performance figures remain withdrawn and the old hosting-cost claim is permanently retired (`case-study-facts.json:106`–132). Do not restore those figures, substitute a newly invented score or erase the correction history. The five currently verified tiles are not five performance measurements.

**Pair the case with the most relevant review.** The MC Patches review is in `src/data/reviews.ts:123`–144; it supports communication/responsiveness, not performance or ranking results. The source is identity-verified on Clutch, while the named attribution is separately permissioned; the source currently uses an anonymous reviewer role according to the repository note. Preserve that distinction. The current carousel starts with the middle array item, Marshall James (`StaggerTestimonials.tsx:148`, `:185`–186; `reviews.ts:103`–110), rather than the relevant migration reviewer. Use a static source-linked excerpt with the case.

**Panda Patches is useful operating experience, explicitly affiliated.** The case fact disclosure states a co-founder owns it (`case-study-facts.json:151`–156). The grid and SocialProof disclose that affiliation (`CaseStudyGrid.tsx:65`; `SocialProof.tsx:95`–97), which is good. Keep that disclosure attached wherever it is used. Do not rely on a disclosure several sections later to qualify the revenue story at `PageContent.tsx:203`. Revenue growth is not demonstrated to be caused by the migration, and the current service-page passage gives no time window or attribution method.

**Move less relevant proof out of the main flow.** Saforne is a new build; Obare moved from Wix; the Woman’s World citation concerns remote AI-training work (`SocialProof.tsx:65`–80). These can support a broader portfolio/about page, but none demonstrates handling WordPress migration risk. The four Reddit cards at `PageContent.tsx:318`–362 use only two threads; the first three come from one thread. They are public anecdotes, not customer endorsements or proof of PandaCodeGen delivery. Cut the entire Reddit section from this service page; it can remain in an appropriate comparison article after source verification.

## 5. CTA destinations and promise alignment

This is the **source-defined behavior**, not an assertion that a particular production calendar environment variable is configured:

| CTA | Defined destination/behavior | Recommendation |
|---|---|---|
| Get Free Consultation; Book Audit; Book Free Discovery Call | `data-cal-link="pandagen/discovery"` at `PageContent.tsx:73`–75, `:628`–630 and `PlatformKillerChart.tsx:123`–125. `CalEmbed.tsx:17`–33 opens the generic enquiry modal if no configured Cal link exists, or preferences if functional consent is absent; with consent/config it loads the calendar (`:39`–64). | Use an explicit calendar label only when booking is actually available; otherwise label the enquiry. Keep the post-click explanation aligned with the route. |
| Calculate Savings | No provided handler, as above | Remove or implement a genuine calculation with buyer-entered inputs and disclosed assumptions. |
| See How It Works | `#how-it-works` (`PageContent.tsx:80`, `:224`) | Functional source anchor. Give pricing/what-moves an equally direct path. |
| See Migration Pricing | `#pricing` (`PageContent.tsx:372`; `PricingTiers.tsx:52`) | Functional source anchor; move the pricing summary much earlier. |
| Tier enquiries | `PricingTiers.tsx:110` dispatches `open-quote-modal` | Pass the service and chosen tier into a visible, editable enquiry context; current click does not do that. |
| Optimize My WordPress / Migrate to Custom Code | Both dispatch the same generic event (`PageContent.tsx:552`, `:571`) | Carry the chosen intent into the form. A different analytics `cta` value does not prefill the user’s request. |
| Project grid cards | Direct external live sites (`CaseStudyGrid.tsx:59`, `:70`, `:84`, `:95`, `:160`) | Make the project record the primary proof link; offer “Visit live site” separately. |

`Header.tsx:110`–116 and `:425`–427 receive the event and mount `QuoteModal`. That modal asks a generic “What would you like help with?” (`QuoteModal.tsx:285`–289); name/email are required, message/website optional (`:303`–359), and the outcome is a founder email reply usually within one business day (`:271`–275, `:392`–393). Its request posts to `/api/submit-quote` (`:203`). No form was submitted for this audit.

Suggested primary CTA: **Discuss my WordPress migration**. If it opens the enquiry modal, supporting copy: **“Send your URL and what needs to move. Hassan or Imran usually replies within one business day.”** If it opens the working calendar, use **“Book a 30-minute migration call”** and explain that the written scope/price follows review. Do not label a generic message form as an instant quote, live audit or booked call.

## 6. Ready hero and SEO copy

Proposed metadata title value:

> WordPress to Next.js Migration Services

With the existing site title template, this becomes “WordPress to Next.js Migration Services | PandaCodeGen.” Keep the current URL; a slug change is not needed to correct intent.

Proposed meta description:

> WordPress to Next.js migration from $1,500. Content, CMS setup, URL checks, launch testing and handover, with a fixed quote after scope review.

Proposed H1:

> WordPress to Next.js migration services

Proposed intro:

> Move your WordPress site to a Next.js build you own at handover. We migrate the agreed content, set up your editor, check URLs and metadata, and test the site before launch. Projects start at $1,500, with the scope, delivery dates and ongoing costs agreed in a fixed-price quote.

Immediately below, show a short planning line: **“Starter: 1–2 weeks · Growth: 2–4 weeks · Scale: 3–6 weeks. Your written scope sets the dates.”** Link to pricing and what moves. Follow the opening offer with the Panda Patches preview, then the full replacement/headless clarification, so the offer is not mistaken for an automatic wp-admin retention service.

Suggested SEO continuity copy:

> **A migration plan for your existing URLs and search signals**
>
> We inventory the URLs in scope, preserve useful existing paths where possible and map changed addresses to relevant replacements. Before launch we check redirects, titles, metadata, canonicals, internal links, structured data, robots rules and sitemaps. The cutover plan includes production checks, monitoring and rollback responsibilities. Rankings can fluctuate while search engines process changes; these controls reduce avoidable migration errors.

This aligns with `company-facts.ts:75`, `:192`–195 and the existing guide at `blog/how-to-migrate-wordpress-to-nextjs/page.tsx:191`, `:290`. It is more precise than promising to redirect every old URL, including those that could keep their existing path.

## 7. Proposed section order; keep, merge and cut

The source currently has roughly twenty substantial blocks, including shared components. There are multiple full sections about cost, credibility, risk, agreements and performance, while the packages appear after the plugin table and PartnerPromise (`PageContent.tsx:470`). More copy does not fill the missing architecture and scope decisions.

Recommended reading order:

1. **Service hero:** exact offer, starting price, primary action; short anchors to scope, work, process and pricing.
2. **Live work and an explicitly unfinished project:** show founder-affiliated Panda Patches and independent Ladies 4 Jesus, with real screenshots and permanent case links. Name A Step Above Medical beneath them as a dated in-progress migration; launch is pending. Keep the MyCustomPatches record and relevant independent review later as supporting evidence. A real editor capture is still a useful future addition. The dedicated proof section is now implemented immediately after the existing offer; the broader hero and flow recommendations remain pending.
3. **Architecture and fit:** full replacement versus retaining WordPress; what the current packages cover; when improving the existing WordPress site may be sufficient.
4. **What moves:** content/fields, images, URLs/metadata, forms/integrations, editor, analytics/consent and handover. Name the exclusions and quantity drivers that affect the quote.
5. **Process and continuity:** audit/inventory, build/import, staging acceptance, cutover/rollback and agreed monitoring. Merge SEO continuity into this rather than repeating a preservation slogan elsewhere.
6. **Pricing and ongoing costs:** retain the three tiers and support windows; clarify page/content counts, design and plugin scope; one concise statement about the written quote and third-party fees.
7. **Editor, ownership and support:** show actual editing capability; specify what transfers at handover and what happens after included support.
8. **Focused FAQ:** retaining wp-admin, editing, content/plugin edge cases, SEO risk, downtime/rollback, cost, schedule, ongoing maintenance. One answer per concern, shared with schema.
9. **Final enquiry:** the same primary action and expected response. Add no more than a few directly relevant guides and a compact team attribution.

Keep the price ladder, real migration controls, ownership, clear support windows, phone/email fallback, founder attribution and source-linked independent review. Merge the current summary into the hero; the process and upgrade cards into one migration scope/process; the performance handover target into acceptance near pricing; and PartnerPromise into a short commercial note. Its current full section repeats what PricingTiers immediately repeats (`PartnerPromise.tsx:43`–145; `PricingTiers.tsx:55`–74, `:106`–119).

Cut the “WordPress Reality Check,” Reddit cards, “emerging quality challenger,” “asset not liability” pitch and “plugin extinction” cost argument. Replace the platform chart with the architecture/ongoing-responsibility comparison. Reduce eight blog links and the unrelated-services grid (`PageContent.tsx:645`–666) to the few resources that answer migration decisions: method, cost and SEO risk. Put WordPress optimization in the fit decision instead of offering it as a competing conversion path near the end.

Do not set a word-count quota. Remove repetition and use the recovered space for concrete migration answers and inspectable proof. This improves the page’s usefulness to the exact-query buyer; it does not establish a guaranteed ranking outcome.

## 8. Verification boundaries before implementation

- Confirm the business’s headless WordPress offering before advertising it as available.
- Confirm package content-count rules, ownership timing, schedule dependencies and support responsibilities with the existing accepted-terms model; avoid making new commitments in copy.
- Obtain dated measurement records before restoring any portfolio score or load-time statistic. Do not treat a fresh test as a historical before/after.
- When implementing, update the shared FAQ source so visible answers and schema remain consistent; consider shared fact sources for commercial promises to prevent drift.
- Check the real browser path for all primary/secondary CTAs in configured-calendar and enquiry-fallback states. A source trace establishes intended behavior, not successful booking or delivery.
- Evaluate subsequent Search Console changes by the same query/page/device/country/time window and look at qualified enquiries as well as visibility. The supplied 138 impressions alone cannot separate copy effects, demand, competition or normal variation.
