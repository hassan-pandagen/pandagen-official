# Before/after business, buyer, evidence and competitor audit

Completed 15 September 2026 against checkout **93ec417ae9cc73678c856db51417fd0953655ebf**. This pass changes research artifacts only. No application files, advertisements, public profiles, forms, indexing settings or deployments were changed.

**Later source review:** [Follow-up at `10335a6` / `e23be37`](follow-up-10335a6.md) supersedes the affected open items and the immediate homepage-H1 suggestion below. The homepage headings, ecommerce opening and migration-plan CTA mismatch are fixed. MyCustomPatches remains partly inconsistent, and additional Enterprise Ops enforcement gaps are documented. This report's captures, counts and before/after tables remain the original `93ec417` snapshot, not a fresh crawl of the newer checkout.

**Latest Enterprise Ops review:** [Recheck at `95339fa`](enterprise-ops-review-95339fa.md) confirms new case facts, business-workflow copy, metadata extraction and post-build CI guards. It also records still-visible conflicting scope counts, withdrawn FAQ figures and unresolved attribution claims. Read it instead of treating the earlier Enterprise Ops open-items list as current.

## Executive assessment

**The local site has made substantial progress from a migration-only first impression to a credible website/store offer, with a much clearer enquiry experience and a defined monthly AI SEO service. It has not yet completed the broader website/software/measurement positioning. It is not accurate to say all claims are reconciled or that search and sales results have already improved.**

The largest improvements are the homepage opening, work index, contact experience, shared company description and AI SEO scope. The largest remaining gaps are the migration-heavy service hierarchy, an ecommerce opening that excludes first-store buyers, difficult-to-find standalone tracking work, and contradictions within the proof/canon documents.

The business should welcome a first website, a replacement website, an online store, a software workflow, a tracking problem or ongoing AI search work. Each buyer needs a recognisable route, relevant proof and its own scope. That does not mean every small website includes custom software, CAPI and a monthly SEO programme.

### Scope and limits of this audit

- Compared the preserved **13 September 10:08 UTC** public-page baseline with current localhost HTML, using the same text parser on eleven corresponding pages. Git commit `3f9a1ca` is an additional pre-correction source reference; it is not presented as the exact deployment hash of that earlier HTTP capture.
- Inspected all **145 URLs in the current local sitemap**. First pass: 144 HTTP 200 responses and one HTTP 500 at the ecommerce hub. That hub returned 200 on a targeted retry; retained both observations instead of reporting a persistent outage.
- Rechecked **12 representative public pages at 16:37 UTC**. Many latest improvements remain local: public homepage, contact, services, pricing, About and AI information still carried the old titles. The public AI SEO page still opened with a built-in/not-monthly proposition and competitor-price comparison that the local revision removed. Work index changes were already visible publicly.
- Rendered homepage, services index, ecommerce, custom engineering, AI SEO and work at **1440px and 390px**, in an isolated Chromium session. All twelve cases returned 200 with no captured page errors or horizontal overflow. Inspected representative screenshots. This is a layout/readability sample, not a usability experiment, Lighthouse measurement or complete browser-compatibility test.
- Reviewed six selected article flows and twelve competitors through primary company sources; dates, age uncertainties and evidence limitations are in the supporting reports.
- Recomputed preserved evidence where available. No post-change analytics, current keyword-account export, private customer ledger or separate store/CRM production configuration was authenticated.

## 1. Measurable progress in the current local site

| Area | Before, 13 September | Current local version | Business interpretation |
| --- | --- | --- | --- |
| Homepage opening | “Move off WordPress, Wix or Squarespace without losing your traffic.” | “Websites built for the way you do business.” Subhead names business websites and online stores. | A buyer without an existing site can recognise the offer; the unconditional traffic promise is gone. |
| Homepage title | Website Migration to Custom Next.js You Own | Custom Website Design & Development | Familiar commercial category replaces platform-first positioning. |
| Homepage content volume | 4,098 words; 17 H2s | 2,924 words; 11 H2s | About **28.6% less text** by the same extraction method. This is a copy-volume reduction, not a 28.6% conversion improvement. |
| Work index | 715 words; methodology-led H1 | 321 words; “Selected work”; visible project groups/screenshots and publication-policy link | Visitors reach projects with less explanatory overhead. Keep relationship disclosures. |
| Contact | 513 words; “Plan the move before you build.” | 309 words; “Talk directly to the founders.” | The request is open to websites, stores, software and questions; the form asks for less visible detail. |
| Pricing | Migration-scope framing | Project-scope framing; websites/stores from $1,500 | Better alignment with first sites and small stores. Complex software still needs its own clear pricing explanation. |
| AI SEO | No service page in the September 13 baseline | Dedicated service with $500 monthly entry scope and separately scoped additions | A real commercial destination now exists for informational AI-search content. |
| Software page | 2,873 words; spreadsheet/scope H1 | 2,886 words; substantially the same H1 and hierarchy | Capability already existed; do not credit the homepage rewrite with creating it. The software buying journey still needs work. |
| Ecommerce page | 3,584 words; existing-store/app-performance H1 | 3,616 words; same existing-store H1 | A weak link in the new-store journey remains. |

Word counts exclude semantic nav/header/footer and script/style/head/noscript text, but include body FAQs and server-rendered hidden content. H2 counts are headings, not a guaranteed one-to-one section count. [Exact comparison](before-current-comparison.json).

The current AI SEO page measures 1,534 words with this parser. Its entry month names ten questions, two agreed AI surfaces, up to five priority pages, one implemented improvement and verification, a revision round, reporting and review. The improvement over earlier revisions is **an offer a buyer can evaluate**, not simply a shorter page.

## 2. Buyer assessment: where the promise still breaks

| Buyer | Current first impression | Remaining friction | Priority |
| --- | --- | --- | --- |
| Owner needing a first website | Homepage explicitly includes them; editor/training/ownership and starting price are clear. | The services section still opens “Migrations engineered around what can break”; the first services-index card is WordPress Migration. | High |
| Owner opening a first store | Homepage says online stores from $1,500. | Ecommerce page opens “Shopify Speed Optimization” and “We migrate high-volume brands.” A first-store buyer does not match that description. | Highest commercial gap |
| Existing-site owner | Strong migration/platform routes and continuity explanations remain. | Some pages still make broad assumptions about slowness, app effects, plugin costs or timelines. Keep diagnosis and scope-specific claims. | High claim cleanup; retain useful routes |
| Operations lead needing software | Real internal-tools, SaaS and CRM work exists; CTA now asks about the workflow. | Homepage hero does not name software. The software H1 is long and foregrounds scope validation; first capability H2 is below 1,290px on desktop in the sampled render. | High |
| Marketer needing Meta CAPI | Relevant articles, screenshots and operations-case descriptions exist. | No clear standalone service destination; the CAPI cost article still closes with a migration-plan/calendar CTA. | High |
| Owner needing source-to-lead/order reporting | Engineering reporting section and founder-owned store experience are relevant. | Method descriptions conflict; no compact service scope/evidence packet makes this easy to buy. | High |
| Buyer considering monthly AI SEO | Now sees service, price and monthly activities clearly. | Proof is mainly the firm's own visibility and founder-affiliated store observations, not completed client-retainer results. Explain that distinction once beside the evidence. | Medium |
| French/German visitor | Existing translations and language links work. | Critical retired-hosting and reply-language fixes landed in `93ec417`, but general positioning, prices/retainer language and founder/contact presentation remain behind English. | High before promotion |

The current header contains nine specific service links, **five explicitly labelled migrations**, plus a GoHighLevel platform route; WordPress Migration appears first. “Custom Engineering” is accurate internal terminology but less immediately recognisable than “Custom software.” CAPI and attribution are not obvious menu choices.

The homepage also retains “Common questions about migrating your platform.” Its process section remains after pricing/quiz. In the 390px render, the inline form heading begins around 685px and the work section heading around 2,000px. That is a meaningful design tradeoff: visitors can enquire quickly, but must scroll past the form to see proof. The “See our work” shortcut helps. Test or deliberately choose this order; do not claim it is known to cause or prevent bouncing.

The new homepage is visually clearer than the earlier screenshots. Several service heroes still devote most of a desktop viewport to a long diagnostic sentence and a second scope/validation sentence. The software page H1 alone is roughly 450px tall at 1440px. Shorter buyer-facing headings would reveal examples and next steps sooner without deleting useful scope details.

## 3. Recommended offer architecture and copy direction

Use five buying routes, with platforms and technologies beneath the relevant route:

| Buyer route | What is being bought | Evidence to show | Existing destination / recommendation |
| --- | --- | --- | --- |
| New websites and online stores | A working site/store, editing workflow, handover and defined build scope | Relevant finished website/store, screenshots and an editing example | Make `/services` and `/services/ecommerce` explicitly include creation; do not default every enquiry to migration. |
| Redesigns and migrations | Improve or replace an existing site with agreed continuity controls | Actual scoped move, URL/template inventory and supported validation | Preserve current specific platform pages; group them under this route. |
| Custom software and integrations | A business workflow, portal, dashboard or connection between systems | Redacted workflow, roles, connected systems and acceptance checks | Improve `/services/custom-engineering`; “Custom software” can be the visible label without changing its URL. |
| Tracking and lead attribution | Capture and carry permitted source/event information to the systems that need it | Event map, dated test/reconciliation example, redacted source-to-record demonstration | One clear commercial page if sold standalone. CAPI is a named capability inside it, with its own scope. Avoid several near-identical CAPI/attribution pages. |
| Monthly AI SEO | Agreed research, monitoring and implemented improvements | Sample monthly work record, chosen pages, verified changes, accurately qualified observations | Keep `/services/ai-seo`; maintain one destination for closely related AEO/GEO terminology. |

If software is meant to be as visible as websites, a suitable homepage direction is **“Websites and software built around your business.”** Suggested supporting sentence: **“We design and build business websites, online stores and custom software. Start from scratch or improve what you already have, with scope and price agreed before work begins.”** These are proposed copy, not implemented changes or volume-winning headline claims. Keep the website/store $1,500 starting price visibly scoped; do not imply the same price covers any software project.

Continue using **“Talk to the founders”** for a general enquiry. Use contextual CTAs for specialist pages: “Ask us about your workflow,” “Discuss your tracking setup,” and “Ask about monthly AI SEO.” Booking buttons should describe a call; forms should describe a message/enquiry. A button label should not imply a ready-made deliverable the next screen does not provide.

The earlier reasoning that a natural homepage H1 “targets no phrase with published volume” overstates the importance of exact-match wording. Google explicitly describes matching pages to related queries without every exact phrase appearing. The title, headings, descriptive body, links and page purpose work together. Preserve specific commercial vocabulary naturally; do not stuff every service acronym into one heading. [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## 4. Receipts exist; not every claim is reconciled

The strongest defensible answer to “we have receipts, right?” is **yes, for specific observations and implementation examples; the evidence is uneven by service and does not authenticate every published claim.**

- Preserved GSC CSV archives support historical agency-site visibility counts. They do not establish client-retainer outcomes or the effect of the new copy.
- The Panda Patches aggregate dataset recomputes to 63 AI-classified orders and $16,783.76 over 1 March–18 August, within 760 total orders. Underlying customer/order classification was not independently audited here. Recorded source is not incremental revenue caused by an assistant.
- A real Meta screenshot shows **10.4% additional reported Lead events** and a displayed Lead match-quality score of 9.0 over its shown comparison. That is not 10.4% more actual leads/sales or proof of current production configuration.
- Project screens and descriptions demonstrate delivered interfaces and scope. Founder-owned projects are legitimate experience, but remain founder-affiliated evidence.
- This checkout exposes source-capture and browser Pixel code. It does not contain the separate store/operations CAPI implementation needed to verify its production event, refund and reconciliation claims.

The most important unresolved canon problems are the stale release-control claims register, incompatible attribution-method descriptions, unsubstantiated **95% process automation**, incomplete qualification of an internal **9/10** review, and conflicting MyCustomPatches ranking status. The 48-site accessibility study also has two missing files at its recorded source paths. None should be fixed by inventing a stronger story.

Canonical means the statement has an agreed owner and location. It does not make it independently true. Use one active fact record with source location, period, relationship, approved wording and retirement state; mark conflicting historical registers as superseded. Keep a short limitation beside each published result and the detailed method one link away.

The detailed [proof and keyword audit](proof-and-keywords.md) provides the receipt inventory, calculations, exact file references and proposed evidence packets. Private source records should remain private; publish redacted summaries that actually support the displayed claim.

## 5. Keywords and queries: coverage improved; results are not established

The service architecture now has a dedicated commercial AI SEO page, broader homepage/services metadata and corrected company descriptions. The current HTML capture contains **11 in-body links to `/services/ai-seo` across nine blog URLs**; shared navigation links are excluded. This is the rendered observation, not a claim that eleven separate articles each have a new link.

Preserved September DataForSEO evidence includes 83 reconstructed rows and 16 separately captured rows, US/English only. Its arrays stop in February 2026 and the headline period is not fully documented. Therefore the estimates below indicate previously reported category demand, not freshly verified September demand or future traffic:

| Family | Illustrative preserved phrase and estimate | Evidence status | Current coverage |
| --- | --- | --- | --- |
| New business websites | `website for small business` — 1,900/month | 13 Sep reconstruction | Better homepage/title; new-build service path still weak. |
| Website redesign | `website redesign services` — 6,600/month | 14 Sep captured response | Retain within broad services and relevant redesign content. |
| Ecommerce creation | `ecommerce website development` — 1,300/month | 13 Sep reconstruction | Current destination still heavily frames existing-store migration. |
| Migration | `website migration services` — 720/month | 14 Sep captured response | Strong existing service coverage; does not need to define the whole firm. |
| AI SEO | `ai seo services` — 1,300/month | 14 Sep captured response | Dedicated recurring offer now matches commercial intent. |
| Software/CAPI/attribution | No adequate September measurement for these service families | Not validated | Real capabilities/related content, incomplete commercial routing. |

Do not add these volumes together as unique people or treat low KD as a ranking forecast. `NO_VOLUME_REPORTED` does not identify why the provider returned no value. The full provenance and term-level caveats are in [proof-and-keywords.md](proof-and-keywords.md).

Next external candidates should include `custom software development`, `web application development`, `CRM integration services`, `Meta Conversions API setup`, `server-side tracking services`, and `marketing attribution setup`, plus tasks such as `track website enquiry source in CRM` and `fix duplicate Meta Purchase events`. These remain unvalidated candidates; competitor vocabulary alone does not establish volume.

The existing GSC archives cover **12 June–11 September, before these changes**. A new post-deployment comparison is required to say queries, clicks or leads improved. Record deployment and recrawl observations, then compare page/query groups and qualified enquiries by service. At this traffic level, do not make a percentage claim from a handful of enquiries. The repeated edits also prevent assigning any later change to one isolated headline revision. An observational before/after remains observational.

## 6. Blogs: useful answer blocks, unfinished navigation and CTA cleanup

The six inspected articles are roughly 3,663–5,712 words under the same extractor. Divi has “The answer in one minute”; GHL, WooCommerce and WordPress/Next.js have a short-answer block; the AEO playbook has a labelled short-answer paragraph. These are useful existing structures, not all newly created by the latest work.

No article-contents links were present in the server-rendered markup of those six samples; the only in-page link found was the global skip link. Add concise contents navigation to long guides and keep the first useful answer near the opening. Avoid repeating an identical answer in a standfirst, TLDR and short-summary block.

CTA alignment improved on Divi/GHL (now a named call) and WooCommerce (a store question). The CAPI cost article still asks for a migration plan and opens a calendar. That is a direct mismatch with the reader's tracking problem. The article should lead to tracking help and the relevant evidence/service, while retaining its cost-focused title.

Keep problem-specific headings and genuine platform articles. The broad company positioning should update company blurbs, factual promises and relevant conversion paths; it should not turn each article into a list of everything PandaCodeGen sells. [Sample evidence](blog-flow-sample.json).

## 7. Twelve competitors: established plus genuinely newer firms

All are comparisons of published positioning and evidence presentation, not verified client outcomes or rankings. Founding dates are not invented where primary sources conflict. No price represents equivalent scope to PandaCodeGen's entry website or retainer.

| Competitor | Cohort | Most useful benchmark |
| --- | --- | --- |
| [WebFX](https://www.webfx.com/) | Established, mid-1990s origins | Connect services to pipeline and CRM attribution; attribution is valuable but not unique to PandaCodeGen. |
| [Hallam](https://hallam.agency/) | Established; its About page describes 25 years | Group services by business purpose and show named relevant work early. |
| [thoughtbot](https://thoughtbot.com/services) | Established, 2003 | Give software buyers a clear discovery/product/delivery journey. |
| [ScienceSoft](https://www.scnsoft.com/about/how-we-work/pricing-models) | Established, 1989 | Explain pricing models, scope changes and delivery responsibility. |
| [SmartSites](https://www.smartsites.com/web-design/) | Established, 2011 | Ownership, editing, approvals and handover are explicit; these are shared benefits rather than exclusive claims. |
| [Coalition Technologies](https://coalitiontechnologies.com/) | Established, 2009 | Separate platforms, business goals and monthly work; make project relationships clear. |
| [Bejamas](https://bejamas.com/services) | Specialist, 2017/18 origins | Name actual outputs and the editorial/operational handover. |
| [Blazity](https://www.blazity.com/services) | Established specialist; exact founding date not established here | Five problem-based engineering routes keep broad capability understandable. |
| [FocusReactive](https://focusreactive.com/) | Specialist; founding year not established here | Show projects with industry, scope and stack so buyers recognise relevant experience. |
| [Flowout](https://www.flowout.com/pricing) | Newer, 2021 | Retainer packages explain disciplines, queues and what recurring delivery means. |
| [Omnius](https://www.omnius.so/data-tracking-analytics) | Newer, own sources differ between 2021/22 | Tracking and attribution have their own commercial destination. |
| [MeasureMinds](https://measuremindsgroup.com/google-tag-manager-agency) | Newer, 2021 | Measurement implementation has stages: workshop, audit, setup, training and support. |

PandaCodeGen's useful combination is direct founder access, a clear small-project starting point, engineering execution, editing independence and honest first-party experience. Several competitors offer ownership, editors and attribution too. Do not make uniqueness claims from capabilities they also advertise.

Competitors are not a flawless standard. This research found inconsistent price units and growth arithmetic in some large/polished sites. Learn from their structure and scope clarity; validate every claim independently. Full source-linked comparisons: [six established agencies](established-competitors.md), [six specialists/newer agencies](newer-competitors.md).

## 8. Prioritised remaining work

1. **Reconcile evidence and canon:** source-capture method, automation/internal-rating claims, ranking-status conflict and stale claims register. Retain valid project work and useful disclosures.
2. **Finish the broad buying journey:** homepage expertise/FAQ headings, service-menu order, new-store ecommerce opening and software's visible name/examples. Preserve specific migration pages.
3. **Define standalone tracking work:** agreed event/source scope, systems supported, implementation versus advice, deliverables, testing, handover, ongoing costs and actual pricing method. Then give it one clear commercial destination and link the CAPI articles to it.
4. **Publish compact proof per offer:** one relevant project or redacted implementation example, source/date, what it demonstrates and the specific limitation. Add a sample AI SEO monthly work record when available; do not pass old store data off as client-retainer results.
5. **Finish locale parity and blog navigation:** prices, offer, founder contact, language expectations, social previews and contextual article CTAs. The critical September 15 locale fix is progress, not a complete translation refresh.
6. **Deploy the coherent revision and record the boundary:** public pages still differed materially during this audit. Treat later business/search observation as a new comparison, without attributing it to one headline or promising immediate rankings.

No arbitrary overall “9/10” is assigned. The observable conclusion is **strong progress in the first impression, enquiry and work presentation; partial progress in service discovery and canonical consistency; no demonstrated post-change acquisition lift yet**.

## Evidence files

- [Before/current same-method comparison](before-current-comparison.json)
- [All local sitemap pages](local-current.json)
- [Twelve current public pages](public-current.json)
- [Transient ecommerce-hub retry](ecommerce-hub-recheck.json)
- [Desktop/mobile render measurements](buyer-render.json)
- [Render screenshot directory](screenshots/)
- [Six article samples](blog-flow-sample.json)
- [Proof, canon and keywords](proof-and-keywords.md)
- [Established competitor source inventory](established-competitor-sources.json)
- Reproduction: `python docs/research/business-progress-audit-2026-09-15/capture-progress.py`; public sample by passing `https://www.pandacodegen.com`; visual sample via `render-buyer.cjs` using the existing local Playwright installation.
