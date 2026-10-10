# Website copy before and after the redesign

Reviewed 9 October 2026.

The redesign is a better basis for PandaCodeGen's offer. It is clearer about building a new website, improving an existing one, helping the team edit it and agreeing the price. Keep the design. Correct the remaining claim and scope problems before launch, then make a small pass over headings and calls to action.

This is a copy audit, not a Google approval score. The current candidate is broadly closer to Google's people-first approach, but an attractive layout and passing technical checks do not settle whether its claims are accurate.

## Versions and coverage

The comparison uses the last source versions before the September 30 homepage and service-route switches, and the current development site on October 9. The interval includes later fact corrections, title experiments, new services and the recent ownership work; those improvements cannot all be attributed to visual design.

- Current rendered copy captured on **25 core pages**, including all **12 services**, pricing, contact, work, the company reference and founder/reference subpages.
- Current titles, headings and openings scanned on **92 article pages** from the last verified production build. Selected articles received a deeper claim and framing review.
- Historical source inventory contains **88 article routes**: **85** overlap the current set, **7** current routes are newer and **3** historical paths are absent from the current article inventory. Absence here is not a finding of a broken redirect.
- **77** matched historical article titles can be resolved statically; **6** of those changed. Dynamic historical values are not presented as exact recovered text.
- Historical source was read without checking out or building the old repository. The service baseline is `858aa1bd`; the homepage baseline is `ae4342b1`. A live-site text spot check supports the old headline comparison, but the exact deployed commit was not verified.

[Core comparison](evidence/before-after-core.json), [current core inventory](evidence/current-core-all.json), [article comparison](evidence/article-comparison.json), [visible findings](evidence/visible-copy-findings.json).

The reader walkthrough represents editorial judgement for US business buyers, not a test with recruited customers. Keyword examples below are qualitative intent patterns and proposed variants. No current US volumes, keyword difficulty, backlink advantage or conversion uplift were measured. PandaCodeGen's Search Console was not used to discover demand.

## What improved and what did not change

The homepage headline, **“Websites built for the way you do business.”**, is unchanged. The old homepage already offered business websites and online stores. Ecommerce also already welcomed new builds. The redesign improves the explanation and presentation; it does not introduce those offers for the first time.

| Area | Before | Current candidate | Assessment |
| --- | --- | --- | --- |
| Homepage opening | Business websites and stores, editing, ownership and AI readability | Explicit WordPress/custom/current-platform choices, direct founder access and an editing demonstration | Better buying guidance; the new paragraph is longer and can be tightened |
| Homepage price | Websites and stores generally described as starting at $1,500 | Custom builds start at $1,500; WordPress is quoted to scope | More accurate distinction |
| Services heading | “Website design, redesign and development.” | “Website design. Development, too.” | Both are clear; the current page title still retains redesign |
| Pricing heading | “Example project scopes. A written quote for what you actually need.” | “A better site. A clear price.” | More inviting; the paragraph supplies the necessary concrete prices and scope |
| About opening | Production-code and delivery-process language | The people involved and how a business problem reaches the build team | Easier for an ordinary buyer |
| WordPress offer | The WordPress route redirected to migration | A separate WordPress design/development page | A useful new entry point, partly hidden by the services index |
| CMS and backend | No equivalent pages in this pre-switch baseline | Distinct offers with editor, database, login and handover explanations | Better offer coverage; keep the actual platform names as supporting detail |
| Work and reviews | Some stronger general promises around live examples and adversarial proof language | Client, founder-affiliated, preview and demo distinctions; linked project evidence | Better transparency; project outcomes still need their recorded limits |
| Ownership section | Technical comparison language and exports | Prominent Website assets, buyer questions, sources and labelled mobile comparisons | Strong improvement in readability and extraction |
| Homepage conversion path | A direct enquiry form in the opening | Talk-to-founders action, work preview and inline assistant | Different interaction; conversion improvement is not established |

For the homepage, I would retain the headline and shorten the explanation:

> Work with Hassan and Imran on a business website or online store your team can edit. We can build on WordPress, create a custom site or improve what you already have. You get an agreed price, written instructions and a live editing walkthrough.

Keep the separate custom-build starting price and WordPress quote statement. Do not replace it with “the price of WordPress or Wix”: a builder subscription, a WordPress agency build and a custom development project are different purchases.

## Copy to resolve before launch

**Current status, rechecked 10 October:** all nine copy issues listed in this section are resolved. There are no unanswered owner-policy questions here: the founder, hosting/account and support decisions already come from the owner's earlier answers. Current source retains the withdrawn-count removal, monthly AI SEO scope, balanced security/migration wording and separate visibility/revenue measurements. The table below is the original finding list, not a list of still-open defects. Supporting guide/cost-opening polish and performance verification remain separate work; this status does not clear the whole launch.

The first four rows were the highest-priority corrections in the original audit. All nine rows below are completed; there are no pending fixes in this table.

| Status | Original priority | Location | Original finding (before fixes) | Applied correction |
| --- | --- | --- | --- | --- |
| Resolved | Must fix | [Homepage FAQ](../../../src/data/home-faqs.ts#L66) | The visible FAQ previously republished “200-plus pages” for MyCustomPatches. The evidence file withdrew the 200+ URL count on October 3 and approves no replacement. That was present in the homepage FAQ before the correction. | Removed the withdrawn page count. The FAQ now uses approved delivery, template, downtime and monitoring facts with their limits. |
| Resolved | Must clarify | [Homepage hosting FAQ](../../../src/data/home-faqs.ts#L37) | It does not explain the owner-confirmed included-hosting option. It also describes accounts as always in the client's name, although hosting may be on PandaCodeGen's Vercel account. “Not automatic” alone is not logically incompatible with optional inclusion; the problem is an incomplete policy and the blanket account statement. | Explained optional included hosting, the agency-hosting arrangement, separately quoted arrangements and transfer to a client-named account. |
| Resolved | Must clarify | [Shared handover list](../../../src/data/platform-portability.ts) on /services/ai-seo | The monthly AI SEO offer displays build-specific editor training and Starter-package handover wording under “Your project assets”. Its process heading also says “Build, test and hand over”. A reader could infer build deliverables from a $500 monthly scope. | Replaced build/Starter handover wording with monthly research, agreed improvements, reports, access and review; aligned the shared service facts. |
| Resolved | Must fix | [Security article](../../../src/app/blog/wordpress-plugin-security-2026/page.tsx#L22) | The title calls speed the only real defence; the H1 says nothing is secure, only fast. Those exclusive headlines are stronger than the balanced incident comparison in the body. | Changed the security headline to checks, patching and recovery without claiming that speed is the only defence. |
| Resolved | Should fix | [Migration guide opening](../../../src/app/blog/how-to-migrate-wordpress-to-nextjs/page.tsx#L167) | “Without losing search traffic” introduces the steps as if their outcome can be assured. A later paragraph correctly acknowledges ranking volatility. | Changed the opening to reducing avoidable SEO loss and retained the qualification that rankings can fluctuate. |
| Resolved | Should fix | [AI revenue article](../../../src/app/blog/ai-referral-revenue-2026/page.tsx#L282) | “Google's own instrument agrees” presents impression data as corroboration of a revenue-attribution story. The article admits Google's report knows nothing about the orders. Different outcomes and channels do not independently validate that attribution. | Separated Google AI visibility measurements from order attribution and the recorded revenue comparison. |
| Resolved | Should fix | [Same article](../../../src/app/blog/ai-referral-revenue-2026/page.tsx#L164) | Claims that almost nobody else can publish the data or that it has no equivalent elsewhere exceed the demonstrated search coverage. | Removed unsupported exclusivity claims and described the actual dataset, attribution method and limits. |
| Resolved | Verify or simplify | [Founder copy](../../../src/components/redesign/FoundersDark.tsx#L17), [commitment row](../../../src/components/redesign/HowWeWork.tsx#L25) | “He writes every line of code”, “Every commit is visible” and “All public” need evidence beyond a contribution total. “This year” and “last year” also use different time windows. | Described founder delivery responsibility, AI-assisted workflows and selected public work, with client-requested private repositories acknowledged. |
| Resolved | Reconcile | [Support commitment](../../../src/components/redesign/HowWeWork.tsx#L30) | The 15-to-30-day support promise has a dated owner-decision comment, but is not stated in the shared commercial canon checked here. | Added the owner-confirmed shared policy: 15/30 calendar days from launch, delivered-work fixes and usage help, with new scope quoted separately. |

[The project evidence file](../../../src/data/case-study-facts.json) is decisive for the withdrawn count. The existing metric guard searches stored values literally; “200-plus” does not match “200+”. Passing that guard did not clear this semantic claim.

[WordPress's official hardening guide](https://developer.wordpress.org/advanced-administration/security/hardening/) describes security as risk reduction through appropriate controls. Its coverage includes access, hosting, updates and recovery, so patch speed is not the sole defence.

[GitHub's contribution reference](https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference) distinguishes contribution counts from visible activity details. A graph can include anonymized private contributions and several kinds of activity. The fetched profile did not expose a usable current count, so this audit does not declare 900+ true or false.

## Selected claim coverage

**Current status, clarified 10 October:** the copy corrections are complete. The table below describes what is published now and its evidence limits. Unsupported page counts, universal authorship and universal repository-visibility claims were removed; they were not newly verified. The recorded revenue comparison remains a first-party attribution result, not profit, ROI or causal proof. This section does not independently verify every order or revenue record.

All twelve claim groups have a current disposition:

| Claim group | Current disposition | What is supported or limited |
| --- | --- | --- |
| MyCustomPatches page count | Removed | No replacement count is approved. The FAQ uses approved delivery, template, downtime and monitoring facts instead. |
| Hosting inclusion option | Clarified | Hosting on the agency's Vercel account is included with maintenance or SEO if wanted; other arrangements and charges are recorded in the quote. |
| All production accounts in client name | Corrected | Agency-hosting arrangements are acknowledged. Hosting moves to a client-named account on request or when the engagement ends. |
| Editor/Starter handover within monthly AI SEO | Corrected | Monthly research, agreed improvements, reports, access and review replace website-build handover promises. |
| Patch speed as the only security defence | Corrected | The article now describes checks, patching and recovery without presenting speed as the only security control. |
| Migration steps assure no traffic loss | Corrected | The copy describes reducing avoidable SEO loss and acknowledges that rankings may fluctuate. |
| 6.7x ChatGPT/paid-ads comparison | Retained with limits | A recorded first-party revenue ratio for the stated dataset and period; not a profit, ROI, typical-result or causation claim. Attribution uses captured referral signals and customer-declared discovery, with limitations. |
| Google impressions corroborate attribution | Corrected | Google AI visibility is a separate measurement and does not verify ChatGPT order attribution or the revenue ratio. |
| 900+ current contributions and universal visibility | Removed | Current founder copy links public work and acknowledges private client repositories. No contribution total is used to prove that all work is public. |
| Hassan writes every line | Removed | Current copy describes Hassan's development responsibility and AI-assisted workflows; no universal line-by-line authorship claim remains. |
| 15-to-30-day post-launch support | Owner-confirmed and reconciled | Shared facts state 15 calendar days for Starter and 30 for upgraded builds, starting at launch. Delivered-work fixes and usage help are included; bugs in delivered work remain covered, and new scope is quoted separately. |
| Custom builds from $1,500, WordPress quoted separately | Owner-confirmed and consistent | The separate price statement remains on the homepage. WordPress work is quoted to its own scope. |

No owner-policy question remains in this table. Private client project budgets are not used in this comparison. First-party attribution limits and the withdrawn-count record remain part of the evidence trail.

## Service headlines and search intent

**Current status:** the service-page copy pass is complete. Titles, headings, openings, problem sections and service navigation were updated and verified in [the service-intent follow-up](service-intent-changes.md). The comparison table below is the earlier audit snapshot; its “Current headline” column predates those applied changes. Exact final before/after copy is in [the source capture](evidence/service-intent-before-after-2026-10-09.json). Missing volume estimates remain unmeasured, and no ranking uplift is asserted.

Use descriptive service categories in titles and openings, with headings that explain the reader's decision. H1 means the main page heading. Page titles and descriptions influence the search preview. The examples below come from the development-server capture.

| Service | Pre-switch headline or status | Current headline | Reader and intent assessment |
| --- | --- | --- | --- |
| WordPress | Redirected to WordPress migration | A WordPress site. Made for your business. | Useful separate build intent. Give this page its own services-index entry. |
| WordPress migration | Your WordPress site got slower every year you kept it. | Move from WordPress to Next.js. Keep what works. | Stronger and more accurate. Names the move without assuming every site deteriorates. |
| Ecommerce | Online stores that stay fast as the catalogue grows. | Ecommerce stores. Built around the order. | Clear store topic; slightly less specific performance hook. Preserve product/checkout examples in the opening. Old copy already welcomed new builds. |
| WooCommerce | Your WooCommerce checkout is the slowest page you own. | Your WooCommerce store. Built for buyers. | Safer and broader. Use slow-checkout questions conditionally in the diagnostic section. |
| Wix | The change you need on your Wix site is one Wix will not let you make. | Wix websites. Improve or migrate. | Better choice-based wording. The title still says migration only, while the offer includes building and improving. |
| Squarespace | The change you need on your Squarespace site is one the platform decides. | Your Squarespace site. Built for more. | The paragraph makes the options clear. The headline alone is less specific, and the title still says migration only. |
| Webflow | Webflow optimization and migration services. | Webflow websites. Improve or migrate. | Both are clear; new wording is easier for a business owner. Keep the technical export limitations deeper in the page. |
| GoHighLevel | Your GoHighLevel site is slow, and the CRM is why you cannot just leave. | GoHighLevel websites. Speed, builds and CRM. | Good current recovery of speed/outgrown intent. The opening investigates the cause rather than blaming the CRM. |
| Custom software | The tool your business needs does not exist, so you are running it on spreadsheets. | Custom software. Built around the work. | Broader but less distinctive. A conditional spreadsheet-workflow example would restore specificity. Consider a software/portal title instead of the broader Custom Web Development Agency title. |
| AI SEO | AI SEO services with practical improvements every month. | AI SEO. Answers people can find. | The title and opening identify the service and monthly starting price. Correct the build-oriented process/handover labels. |
| CMS | No page in this baseline | CMS website development. An editor for your team. | A clear offer. Keep WordPress and Sanity visible as the platforms actually supported. |
| Backend | No page in this baseline | Backends. Built around your workflow. | The first sentence usefully names database, login and files. A business-friendly label such as databases, logins and admin screens would make the heading easier. |

All 12 service search descriptions match their social-preview descriptions. They are approximately 138 to 159 characters long in the capture. This is tidy editing, not a Google limit or ranking factor. [Google's snippet guidance](https://developers.google.com/search/docs/appearance/snippet) explains that displayed snippets depend on the query and available space.

Do not revert CMS development to a vendor-only offer. Equally, do not discard Sanity hiring intent because a tool returned zero. [Sanity's agency directory](https://www.sanity.io/agency-partners/otterdev) and [an agency's dedicated developer-hiring page](https://otterdev.io/sanity-developers/) show that this is a real buying category. They do not quantify US demand.

## Reader questions and the right destination

**Current status, clarified 10 October:** service routing and buyer answers are implemented. Separate WordPress build/migration destinations, platform problem questions, CMS/backend/portal answers, custom-software links and AI SEO/AEO/GEO explanations are in the current candidate. The supporting guide work is partly complete: a broader CMS-choice guide and answer-first cost/timeline opening polish remain outstanding. These do not require repeating the owner-policy questions already answered.

The phrases below describe buyer intent. Use the separately recorded keyword evidence for measured estimates; do not treat every variant in this table as a measured keyword or an AI-search volume.

| What a reader types or asks | Current destination | Status and what the page explains |
| --- | --- | --- |
| small business website design; build a website I can edit | `/`, `/services`, `/services/wordpress`, `/services/cms-development` | Implemented: website/store options, editing, founders and separate custom-build/WordPress pricing. The shorter homepage explanation is now applied. |
| redesign my website; improve an existing website | `/services` and the relevant platform service | Implemented: focused repairs, redesigns and rebuilds, with staying on the current platform considered. |
| move from Wix; move Squarespace website | `/services/wix`, `/services/squarespace`, `/blog/website-portability` | Implemented: transfer/rebuild limits and editing arrangements, with supporting comparison guides. |
| slow GoHighLevel website; keep GHL CRM change website | `/services/gohighlevel` and its speed/CRM guides | Implemented: diagnose the public website, retain agreed CRM connections and test the scoped integrations. |
| slow WooCommerce checkout; WooCommerce migration | `/services/woocommerce` and diagnostic guides | Implemented: product, mobile shopping, checkout and connection checks before deciding on a platform change. |
| website CMS; best CMS for my website | Existing Sanity/WordPress comparison and CMS guides; broader choice guide still planned | Outstanding: a balanced general CMS-choice guide covering editing tasks, limitations and running costs. Existing CMS articles are supporting material, not completion of that recommendation. |
| CMS website development; hire Sanity developer | `/services/cms-development` and linked Sanity guides | Implemented: website implementation, editor setup, platform experience, training and handover. |
| database, customer portal or login development | `/services/backend-development`, `/services/custom-engineering` | Implemented: records, permissions, private files, admin work, CRM/portal workflows and separately scoped application work. |
| website redesign cost; how long does a website take | `/pricing` and existing cost/timeline guides | Partly complete: pricing destinations and guides exist. Recommended opening polish remains: answer with the applicable own-offer figures/planning conditions before the longer explanation. |
| AI SEO services; AEO/GEO services; how to get a website cited | `/services/ai-seo` and measurement guides | Implemented: defined monthly work, attribution/visibility evidence, service scope and citation/ranking limits. |

**Navigation corrections are complete:** the services index has separate WordPress build/improvement and WordPress-to-Next.js migration entries. The former homepage label "View Architecture" is now "Explore custom software". These are completed changes, not pending instructions.

The [whole-site internal-link audit](#whole-site-internal-link-audit---10-october) verified all 12 service destinations, service-to-guide and project paths, the article/hub structure and internal HTTP/fragment targets. Commercial pages explain the work you can hire PandaCodeGen to do; comparison guides help a reader choose a platform. The remaining two guide recommendations are content work, not broken service destinations.

## Google guidance comparison

This table records editorial alignment, not a Google-issued compliance percentage.

| Google guidance | Before to after | Current assessment |
| --- | --- | --- |
| Helpful content for an intended audience | Broader build/improvement choices and editing explanations | Stronger, with some build vocabulary still misplaced on AI SEO |
| Accurate information and trustworthy presentation | Better relationship disclosures and scoped prices | Improved, but the withdrawn count and exclusive headlines need correction |
| Original experience or analysis | More visible project/editor evidence and first-party research | A valuable asset; source limits must stay attached to the results |
| Clear authorship and expertise | Named founders and corrected marketing responsibility | Useful; activity counts are weaker proof than inspectable projects |

These principles come from [Google's helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). They favor satisfying the reader and adding original value; they do not require an academic tone.

[Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link) favors distinct, concise, descriptive titles and clear main headings. A slogan is not automatically disallowed when the surrounding copy identifies the subject. Wix/Squarespace title scope and the custom-software title deserve a targeted review.

[The SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) supports language readers understand, useful sections and descriptive links. That supports the new ownership questions and the suggested WordPress navigation correction. It does not supply a required keyword density or a fixed answer length.

[Spam policy](https://developers.google.com/search/docs/essentials/spam-policies) concerns manipulative keyword stuffing and large amounts of unoriginal content with little value. Shared templates and 92 posts alone do not establish abuse. Keep each page's buyer job and supporting evidence distinct.

[Google's AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features) retains ordinary search foundations. More FAQ markup or an AI-labelled section cannot substitute for accurate answers. The recent shared question/answer implementation is useful, but shared data can faithfully repeat a wrong claim.

## How established agencies present their offers

**Current status, clarified 10 October:** comparison research is complete and the applicable presentation changes are implemented: a concrete opening, clearly named services, linked project evidence, separate pricing/scope information and a clear next action. This section is a reference comparison, not an unresolved fix list. It does not require another owner answer.

The agency observations below are the original audit snapshot, not a fresh check of competitor websites or current prices. They do not establish that copying a competitor's wording would improve rankings or enquiries.

The comparison covers larger agencies and established specialists. Their published claims are used to inspect copy structure; client metrics and credentials were not independently certified here.

| Agency and primary page | Pattern observed | What to use at PandaCodeGen |
| --- | --- | --- |
| [Bejamas](https://bejamas.com/) | An outcome-led migration headline, a literal team/offer explanation, publishing problems, service stages and named projects | Pair the expressive headline with a concrete task and inspectable work. Its enterprise migration audience is narrower than your full offer. |
| [Roboto Studio](https://robotostudio.com/services/sanity) | Explicit Sanity specialization, named builds, editorial tasks, implementation detail and buying questions | Keep vendor names where a buyer knows the tool. Show the actual editor and the tasks it supports. Do not borrow partner claims. |
| [FocusReactive](https://focusreactive.com/services/enterprise-headless-solutions/) | Enterprise terminology, content-system complexity and partner positioning | Appropriate for technical/enterprise buyers. It is not a model for making your small-business opening more technical. |
| [thoughtbot](https://thoughtbot.com/services) | Product development and team improvement explained through engagement needs | Describe what the customer can accomplish and who works with them. |
| [WebFX](https://www.webfx.com/web-design/services/) | A plainly named web-design service, published starting price, inclusions, quote drivers and a clear enquiry path | Keep your own price basis and inclusions visible. Its published $8,000 starting point is one differently scoped offer, not proof of the whole market's price. |
| [Netguru](https://www.netguru.com/services/web-development) | Website, ecommerce, application and CMS capabilities separated, followed by process and named cases | Make choosing a service easy; separate a business website from an application project. |
| [Paper Leaf](https://paper-leaf.com/) | A broad digital-product headline clarified by website/app services, Edmonton location and named work | A brand headline can work when the next sentence defines the offer. Useful Canadian benchmark. |
| [TatvaSoft](https://www.tatvasoft.com/software-development-services/web-development) | A direct web-application category, delivery types, cases, technology and process | Put the service category before the stack. Useful Indian benchmark for software/application buyers. |

Pagepro's returned homepage title also foregrounds Next.js and Sanity. Its body was not readable through the retrieved page, so no full homepage-copy verdict is assigned.

The shared pattern is **promise, plain service explanation, proof, buying detail and next step**. Your redesign now has those ingredients. Your strongest appropriate differences are direct founder access, a smaller scoped starting project, editing training and a clear handover. Competitor brand recognition does not prove their copy caused their rankings, and this audit does not measure their links or traffic.

## Blog copy and original evidence

**Current status, clarified 10 October:** the identified claim/evidence wording corrections are complete. Selective editorial polish remains: answer-first cost/timeline openings, clearer headings in affected guides and a repetition pass on the WordPress migration service. The original datasets are retained with their recorded source, period, affiliation and attribution limits; this wording review is not a new independent verification of every underlying record.

The original before/after inventory found six changed metadata titles among 77 matched titles that could be resolved. That count belongs to the captured audit comparison, not a fresh count after every later edit. Established article topics were largely retained.

| Original opportunity | Current status | Remaining action or evidence boundary |
| --- | --- | --- |
| Put cost/schedule answers before a long explanation | Pending editorial polish | Lead with applicable PandaCodeGen starting prices or supported planning information, then explain dependencies. Do not invent market averages or an unconditional schedule. |
| Use plain business questions in headings | Implemented on services; guide review remains | Service headings now name the offer and buying problem. Review the affected cost/timeline guides as part of the remaining opening pass. |
| Trim repeated migration qualifications | Pending editorial polish | Consolidate repetitive surrounding service narrative. Retain the necessary migration-risk answer, acceptance conditions and source limits. |
| Explain original revenue and visibility datasets accurately | Corrected; evidence limits retained | State the business, period, affiliation, captured referral/customer-declared method and dataset limits. Attributed revenue is not profit, ROI or proof that AI generally performs better than advertising. |
| Remove claims that almost nobody else can publish equivalent data | Corrected | Unsupported exclusivity claims were removed. The article describes the actual dataset without claiming equivalent datasets cannot exist elsewhere. |
| Separate citations, impressions, visits, enquiries, orders and revenue | Corrected | Google AI visibility does not independently verify store order attribution or the revenue ratio. The separate measures and their limits are explicit. |

The original [Google report reference](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) supports the visibility/revenue distinction used in the audit. It is not treated as confirmation of Panda Patches transactions.

The agency-comparison articles describe PandaCodeGen's actual website/store/existing-site services and disclose its commercial interest. The historical Next.js shortlist's statement about directory listing refers to Vercel's directory, not exclusion from its own shortlist; this audit does not newly verify present-day directory membership.

No owner-policy question remains for the completed evidence-wording corrections. The remaining items above are editorial work; they have not been marked complete merely because the claim corrections passed.

## Citability and writing review

**Current status, clarified 10 October:** the claim corrections, service context and HTML structure are implemented. Selective writing polish remains. Being available in HTML is not proof that a particular AI system will read, retrieve or cite the content.

| Review area | Current status | Remaining work or limitation |
| --- | --- | --- |
| Repeated qualifications | Editorial polish remains | Consolidate repetitive WordPress migration narrative while retaining the independent FAQ, acceptance conditions and genuine migration risk. The original six-sentence count was an audit snapshot, not a new count. |
| Answer first | Services implemented; guide openings remain | Cost/timeline guides should give the applicable answer before the long explanation, using supported own-offer figures and planning conditions. |
| Standalone answers and offer context | Implemented | Ownership questions name the relevant platform; the monthly AI SEO process and outputs are distinct from website-build handover. Answers remain in initial HTML, including closed native accordions. Visibility-filtering tools may omit closed answers. |
| Plain language and entity names | Core service pass implemented | Business tasks precede implementation detail. The newer independent review's acronym-explanation and repeated-search-section observations remain editorial review items. |
| Approved facts and source limits | Corrected | The withdrawn page count is removed. Project, price, affiliation, period and attribution limits are retained; unsupported universal founder claims were removed. |
| Useful document structure | Implemented | Headings, contextual links, source references, tables and server-rendered answers are present. No indexing, retrieval or citation guarantee is inferred. |

The [independent review](independent-review-2026-10-09.md#check-of-the-other-sessions-10-october-work) also raises FAQ duplication, repeated search-section wording and other presentation observations. These are review candidates, not automatically established ranking defects. Title length alone and repeated legitimate service terminology are not treated as reasons for an automatic rewrite.

No AI-text detector or authorship probability was used. The remaining writing work concerns clarity and repetition; it does not require reopening the already confirmed business policies.

## Suggested copy for the confirmed problems

**Current status, clarified 10 October:** these recommendations have been implemented, using the approved facts and shared policy where appropriate. They are not waiting for another owner approval, and the website wording need not match every original draft verbatim.

| Recommendation | Current result | Source |
| --- | --- | --- |
| Homepage migration FAQ | Removed the withdrawn count; describes migration checks, possible ranking changes, approved project facts and the monitoring-window limit. | `src/data/home-faqs.ts` and `src/data/case-study-facts.json` |
| Homepage hosting arrangements | Describes optional included hosting, agency/client account arrangements, separately agreed charges and transfer to a client-named account. | `src/data/company-facts.ts`; the homepage FAQ reads the shared hosting fact. |
| Founder responsibility | Describes Hassan's development role and AI-assisted workflows, Imran's marketing role, direct founder access and public/private repository distinctions. | `src/components/redesign/FoundersDark.tsx`, `src/components/redesign/HowWeWork.tsx` |
| Monthly AI SEO process and delivery | Agreed questions/pages, baseline, implemented improvement, report and review; monthly outputs replace build/editor/Starter handover wording. | `src/components/pages/services/service-data.ts`, `src/data/platform-portability.ts` |
| Security article title | "WordPress Plugin Security in 2026: Checks, Patching & Recovery" replaces the exclusive speed-only defence claim. | `src/app/blog/wordpress-plugin-security-2026/page.tsx` |

The original proposals were examples for the confirmed defects. The applied result and its evidence boundary are now recorded above; the original source captures remain in the audit evidence.

## Audit limits and release decision

**Current release status, clarified 10 October: full launch clearance remains open.** The original claim/scope corrections and service-navigation work are complete. Their old instructions are not still pending. This is separate from the remaining editorial work and production/performance verification.

| Area | Status | What remains |
| --- | --- | --- |
| Original claim and offer-scope corrections | Complete in source and recorded builds | No further owner-policy answers for those nine findings. |
| Service destinations, FAQs and internal links | Verified within the recorded local-build checks | Recheck the deployed candidate after release changes; local results are not a production deployment. |
| Supporting editorial work | Partly complete | Broader CMS-choice guide, answer-first cost/timeline openings, migration repetition and review of the newer independent copy-polish observations. |
| Lighthouse performance | Not cleared by this copy audit | Fresh measurements on a quiet machine and an HTTPS candidate against the agreed representative-page target. |
| HTTPS preview and physical devices | Not established in this audit | Verify the actual release candidate on HTTPS and real mobile devices, including menus, keyboards and forms. |
| Live form/enquiry delivery | Not newly established by these browser checks | Mocked API interactions do not prove present-day delivery. Existing provider receipts only support their recorded dates. |

The [independent review's 9 October performance measurements](independent-review-2026-10-09.md#performance-measured-9-october) recorded mobile medians of 61 to 71 across five pages and a homepage desktop median of 76. Those local HTTP runs were affected by a busy machine. They are historical lab results, not fresh measurements of every later change; they do not establish the current candidate's score or field performance. The older 75 observation is no longer described as the latest result. No quiet-machine HTTPS result clearing the 90+ handover target is recorded here.

The recorded automated, structural SEO, responsive, FAQ and internal-link checks support the behavior they tested. They do not prove conversion uplift, live ranking improvement, real-device behavior, complete technical-citation accuracy across every article or AI ingestion. Passing a literal-value guard also did not catch the original spelled-out withdrawn count.

**Evidence limits:** owner-supplied keyword estimates now exist with provider/geography/update dates, so keyword demand is not wholly unmeasured. They do not establish organic difficulty, present-day live US rankings, total AI prompt demand or a traffic forecast. This audit has not established an independent customer reading test, conversion uplift, the exact old deployed commit, every technical citation in all 92 posts, fresh field performance or independent verification of every attributed transaction. Unsupported contribution/authorship universals were removed rather than declared verified.

The original comparison stage was read-only; later dated follow-ups applied website copy and navigation changes. This documentation clarification itself changed no website behavior. Nothing in this section is authorization to publish, and it records no commit, push or deployment.

## Approved launch corrections completed on 9 October

**Current status, clarified 10 October:** Completed. All four corrections remain applied. This is the 9 October change/validation record, not a pending launch task or a fresh performance sign-off.

This follow-up changes the status of the four launch corrections above. The original audit describes the pre-fix state; its other recommendations remain open for review one at a time.

1. **Homepage migration FAQ:** removed the withdrawn “200-plus pages” count. Delivery time, rebuilt templates, recorded downtime and the bounded ranking-monitoring result now read from `case-study-facts.ts`. The answer explains that migration checks cannot guarantee Google rankings. It no longer says every old address automatically receives a new destination.
2. **Homepage hosting/account FAQ:** uses the canonical Hosting entry from `company-facts.ts`. It states the included Vercel hosting option on maintenance or SEO packages, a per-client quote outside a package, and account transfer on request or when the engagement ends. It distinguishes ownership/control from the agency-managed hosting arrangement.
3. **AI SEO scope:** replaced website-build editor training and Starter handover outputs with research/baseline, one verified improvement, report/review and the work retained when the engagement ends. The visible list and Service schema use the same `serviceOutputs()` source. Other website services retain their existing build handover. The monthly process heading now reads “Research, improve and review.”
4. **Security article:** title is now “WordPress Plugin Security in 2026: Checks, Patching & Recovery”; the H1 describes checks, patching and recovery. Updated its search/social metadata, catalog title/excerpt and modification date without changing the URL. Regenerated Pagefind so site search receives the corrected title.

The withdrawn-value guard now recognizes numeric and spelled variants of the withdrawn count while retaining its client-attribution rule. Four regression tests exercise actual HTML, metadata and JSON-LD, the case study’s own page, and unrelated/corrected copy. They passed, including subcases for `200+`, `200-plus`, `200 plus`, `two hundred plus` and `two-hundred-plus`.

Validation completed: `npm run check` passed (type checking, lint, existing tests, public claims and dates); the isolated Next.js production build generated all 170 routes; metrics, links, Unicode, spec freshness, glossary and retired-claim checks passed. Pagefind indexed 103 blog/hub pages. Targeted Chromium checks passed on the homepage, AI SEO service, CMS service and security article at 390px and 1440px: visible copy, matching FAQ/service outputs, title/social metadata and no page-width overflow. Production release smoke passed. Structural SEO checked all 158 sitemap URLs with zero failures or warnings. Screenshots were reviewed for the mobile security article and desktop homepage.

Working verification artifacts are in `.tmp/launch-copy-fixes-2026-10-09/`. Tests mock live-chat availability and send no enquiries or assistant requests. The owner’s development server was left running; the isolated production candidate used port 3003.

This clears these four copy issues, not the remaining performance acceptance question or the entire launch. No commit, push or deployment was performed. The existing date-check warnings and Edge Runtime deprecation notice remain separate from these copy corrections.

The research follow-up is documented in [Search-demand follow-up](search-demand-follow-up.md). Volume-tool access was unavailable at this stage; later owner-supplied US keyword estimates are recorded there with their original provider/update dates. They are not represented as fresh measurements taken during this correction pass.

## Owner clarification 1 — founder responsibility

**Current status, clarified 10 October:** Confirmed and applied. Founder responsibility, AI-assisted workflows and public/private repository distinctions are settled; no repeat owner question is needed.

Hassan confirmed he is the founder leading development and uses Codex and Claude in his engineering workflows. His GitHub includes public work, while some client repositories remain private at client request. Updated the founder biography, introduction, GitHub link label and founder commitment row accordingly. Removed “every line of code”, “every commit is visible” and “all public”, along with the rolling contribution count. The supplied profile screenshot shows 2,530 contributions in the last year, but that is not a count of public client commits and is not substituted as an evergreen marketing statistic. Public project links remain.

The follow-up support questions were subsequently answered in clarifications 2 through 6 and incorporated into the shared commercial facts. They are no longer pending.

## Owner clarifications 2 and 3 — included support duration

**Current status, clarified 10 October:** Confirmed and applied. Starter has 15 calendar days and upgraded builds have 30; later clarifications settle coverage and the launch-day start.

Hassan confirmed that Starter builds from $1,500 include 15 days of free post-launch support; upgraded projects include 30 days. He chose calendar days, replacing the business-day wording. Added `POST_LAUNCH_SUPPORT` to the shared commercial facts and used it on the commitments, About, partner, terms and company-reference pages, plus the detailed package guide and its FAQ. Added it to the generated llms.txt so the assistant can retrieve the policy. Reconciled existing support-day claims in 23 blog posts and synchronized their modification dates with the catalog. Client examples and their commercial details were not added to the public policy.

At this stage the duration was confirmed; coverage and the starting milestone were clarified in the subsequent entries. They are now confirmed in the shared policy, and each proposal records the project coverage and launch date.

Verification for the calendar-day correction: type checking, lint, existing tests, claim and date checks passed. The isolated production build generated all 170 routes. An offline check of the actual assistant knowledge index retrieved both the 15- and 30-calendar-day terms and confirmed the canonical sentence is exported by llms.txt. No model call or enquiry was sent. A source scan found no remaining 15/30-business-day or generic 15-to-30-day support wording. The previous founder clarification is included in this production build. No push or deployment was performed.

## Owner clarification 4 — support coverage

**Current status, clarified 10 October:** Confirmed and applied. Support includes delivered-work fixes and help using the site; later clarification 5 also confirms no-charge defect cover after the included period.

Hassan confirmed that support includes fixing issues in delivered work so clients know the agency remains available after delivery. The shared policy now states that included support covers fixing issues in the delivered work and helping clients use it; new pages, features and integrations are scoped and priced separately. The existing shared consumers pick up this wording, including the assistant facts. Clarification 5 subsequently settled the post-window policy: bugs or glitches in delivered work, and anything missing from the agreed scope, are corrected at no extra charge after the included period. This entry does not introduce a separate response-time commitment.

## Owner clarification 5 — help after the included period

**Current status, clarified 10 October:** Confirmed and applied. Bugs/glitches or agreed-scope omissions in delivered work remain covered after the included period; small requests receive practical goodwill help, while new scope is separately quoted.

Hassan confirmed that mistakes or omissions in PandaCodeGen’s delivered work are corrected at no extra charge even after the included support period. Small, straightforward requests can also be helped with free when practical; larger changes and ongoing maintenance are separately scoped and priced. Updated the canonical policy so it no longer implies all help becomes paid after day 15 or 30. The statement does not set an ongoing response-time commitment. The owner’s individual client anecdote and statement about review history were not converted into public client stories or a universal satisfaction claim.

Clarification 6 subsequently confirmed the start milestone as the live day, after handover and acceptance. No starting-milestone question remains.

## Owner clarification 6 — support begins on launch day

**Current status, clarified 10 October:** Confirmed and applied. Handover and client acceptance precede launch; included support begins on the day the website goes live.

Hassan confirmed that handover and client acceptance happen before the website goes live. The 15/30-calendar-day included support period begins on the live day. Updated the shared policy to state this sequence and record the launch date and project coverage in the written proposal. This resolves the support-policy questions raised by this audit. The post-window treatment remains as confirmed above: agency mistakes or omissions are fixed free, small requests receive practical goodwill help, and larger new work and ongoing maintenance are separately priced.

## Applied service-intent pass — 9 October

**Current status, clarified 10 October:** Completed. The service copy, metadata, buying questions and routing were applied. The numbers below record the 9 October pass; later service refinements are documented in subsequent entries.

The owner authorized using the measured terms, researching missing opportunities and replacing weak service-page language with relevant hiring terms and concrete platform problems. Applied the changes documented in [Service pages: hiring language and buying problems](service-intent-changes.md).

Resolved the WordPress navigation mismatch by separating the build/improvement service from WordPress → Next.js migration. Replaced migration-only Wix/Squarespace metadata with design/redesign/migration wording, named Webflow development/redesign explicitly and aligned the custom-software title with portals/internal tools. Updated service headings and openings, made the problem sections concrete, added AEO/GEO definitions within the existing AI SEO offer and replaced “View Architecture” with “Explore custom software”. Existing URLs are retained.

Added 13 shared buyer questions across all 12 services. Their visible answers, FAQ schema and assistant passages use the same source. The supplied keyword results remain estimates with recorded update dates; missing GoHighLevel/Sanity measurements are not treated as zero demand. Additional anonymous API requests received access-denied errors, so unmeasured replacement phrases are supported as service/intent candidates by external primary sources rather than invented monthly counts. No new host-to-host WordPress migration offer was added without owner confirmation.

Verification: `npm run check` passed, and the isolated production build generated all 170 routes. All content guards passed; structural SEO checked 158 sitemap URLs with zero failures or warnings, and release smoke passed. Responsive/accessibility checks passed all 78 cases across 12 services and the 404 page: Chromium at 320/390/768/1440px and WebKit at 390/1440px. All visible service FAQ answers matched their schema; search/social descriptions matched; no tested heading clipping, horizontal overflow or WCAG A/AA violations were found. The actual assistant index retrieved all 13 new answers with the exact text and correct service destinations. Mobile Squarespace and desktop WordPress screenshots were visually reviewed. These checks do not measure ranking or conversion improvement. No commit, push or deployment was performed.

## Owner clarification 8 — WordPress host-to-host migration

**Current status, clarified 10 October:** Confirmed and applied. WordPress host-to-host migration is a separately quoted offer, distinct from a redesign or WordPress-to-Next.js rebuild.

Hassan confirmed that PandaCodeGen also offers moving an existing WordPress site between hosting providers while keeping WordPress, as a separately quoted job. Added the offer to shared service facts, the WordPress page's scope and buyer FAQ, the services index and the generated assistant fact sheet. It is distinct from a redesign or WordPress → Next.js rebuild and carries no invented minimum price, same-day delivery, downtime or ranking guarantee. The scope reviews destination compatibility, files/database, domain/email, stores and connections, with backups, cutover checks and a fallback plan. [WordPress's migration handbook](https://developer.wordpress.org/advanced-administration/upgrade/migrating/) supports the technical distinction and review requirements.

This resolves the outstanding business-scope question. Remaining editorial corrections and performance verification require implementation/evidence work rather than another owner policy answer.

Host-migration validation: type checking and targeted lint passed after correcting a missing import caught by the checks. The final isolated production build generated all 170 routes. The built WordPress scope and visible host-migration FAQ contained the canonical policy, and its FAQ schema matched exactly. The actual assistant index retrieved all 14 shared buyer questions with correct service destinations and no unresolved pins. The public-claim check passed. No commit, push or deployment was performed.

## Remaining article claims corrected — 9 October

**Current status, clarified 10 October:** Completed. Attribution, visibility, exclusivity and migration-risk wording were corrected; the numerical dataset and its evidence limits were retained. This is the recorded correction/validation history.

The owner confirmed Panda Patches' discovery tracking: surviving referrer signals plus customers' “How did you find us?” answers stored in its quote and CRM workflow. Retained that method and the recorded attributed orders/revenue, while distinguishing customer-declared discovery from captured referral clicks. This does not independently establish an incremental sales effect or validate attribution through Google impressions.

Updated the AI referral article's heading to “How we recorded AI discovery”; removed statements about what almost nobody else can publish, the claimed absence of equivalent datasets and the unsupported assertion that most other businesses measure worse. The comparison now describes the detail actually recorded for Panda Patches. Google's report is labelled “Separate Google AI visibility evidence”, and the source record's note/limitation also explain that impressions do not verify order attribution or the revenue ratio. Numerical source rows, periods, affiliation and outlier records were preserved exactly, verified against pre-edit backups.

The WordPress migration guide now introduces reducing avoidable SEO loss, with URL/content/metadata checks and post-launch monitoring. Its title is “WordPress to Next.js Migration: Protecting SEO (2026)” and its main heading names an SEO plan. Search/social metadata, schema, catalog and meaningful modification dates are synchronized. No fixed percentage-loss ceiling or recovery deadline was added: [Google's migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) describes possible fluctuations while pages are recrawled/reindexed and variable processing time.

`npm run check` passed. No order data was fetched, no live client enquiries were sent and no numerical results were re-estimated. Production build and built-copy/search validation are recorded upon completion below. No commit, push or deployment was performed.

Final article validation: the isolated production build generated all 170 routes; both built articles passed copy/date/visible-FAQ/schema agreement checks. Built metrics, links and Unicode checks passed, and Pagefind indexed all 103 blog/hub pages. Both production articles returned 200 at 390px and 1440px, with one main heading, no tested heading clipping and no horizontal overflow. The revised mobile migration heading was visually reviewed. The temporary production candidate was stopped after checks. Initial owner-preview checks encountered a development 500 during the run; production verification used the isolated candidate instead. The final owner-preview status is reported separately and is not inferred from build success.

The final direct recheck of the owner's port-3001 migration preview returned HTTP 200. Its development server was not restarted or stopped.

## FAQ presentation polish — 10 October

**Current status, clarified 10 October:** Completed. The final owner-selected layout is a click-to-expand native accordion with answers in the initial HTML. The expanded-layout iterations and answer counts below are historical; partner FAQ schema was added in a later update.

Historical raw-HTML follow-up at that build: verified 802 accordion answers across all 123 built pages that use the shared component. All answers were present outside scripts/styles before interaction. On the 122 pages carrying FAQ schema, each accordion answer matched a schema answer and every schema answer was present in the rendered HTML text (some service ownership answers appear separately outside the accordion). At that stage the partners page had accordion answers but no FAQ schema; it was verified for HTML presence. A later 10 October update added matching schema for its eight shared answers, as recorded in the independent review. The owner's homepage response also returned 200 with all five accordion answers present before a click. This proves HTML availability, not ingestion by every AI extractor; visibility-only tools may skip closed answers.

**Final layout chosen later on 10 October:** the owner reviewed the expanded layout and explicitly chose a clean click-to-expand accordion. Shared FAQs now use native `details`/`summary`, compact question rows and plus/minus controls, with one answer open at a time. Every answer remains in the initial HTML and can be revealed without application JavaScript; closed answers are not visually displayed. FAQ copy and schema were preserved. Earlier comments requiring always-expanded answers were updated to reflect this decision. Visibility-filtering extraction tools may omit closed answers; markup presence alone is not a guarantee of indexing or AI citation.

The accordion production build generated all 170 routes; type checking, targeted lint and whitespace checks passed. All 48 representative Chromium/WebKit cases passed initial-HTML/schema agreement, Enter/Space keyboard toggling, single-open behavior, answer reveal, horizontal-overflow and FAQ-scoped automated accessibility checks. A separate JavaScript-disabled homepage check confirmed native interaction. Mobile and desktop screenshots were reviewed. The owner's existing port-3001 preview returned 200 and contained the new accordion; it was not restarted. No commit, push or deployment was performed. The expanded-layout notes below describe the earlier iteration.

Historical expanded-layout iteration (superseded by the accordion above): updated the shared FAQ rows and the optional FAQ heading to match the redesign: aligned orange numbering, restrained dividers, clearer typography and responsive question/answer columns. Narrow containers stack each answer beneath its question. All answers remain expanded and server-rendered; no FAQ copy, structured data or client-side interaction was changed.

The isolated production build generated all 170 routes. Type checking, targeted lint and changed-file whitespace checks passed. The actual candidate on port 3004 passed 48 Chromium/WebKit cases across eight representative home, pricing, service, work and blog pages. Checks covered initial-HTML answers, visible text/schema agreement, answer visibility, horizontal overflow, clipping and automated WCAG A/AA checks scoped to the FAQ lists. Mobile and desktop screenshots were visually reviewed. Earlier checks against port 3003 reached an older server and were excluded from the final result. These are browser-engine checks, not physical-device verification or a complete launch sign-off. No commit, push or deployment was performed.


## Assistant welcome redesign - 10 October

**Current status, clarified 10 October:** Completed. The current hero card, popup and launcher use the warm paper/cognac theme. The final compact welcome removes suggested questions; earlier prompt-heavy layouts below are superseded. Recorded API tests used simulated replies.

Replaced the dark homepage menu with a warm paper card, a sentence-case greeting and cognac serif emphasis, a larger writing area before suggested questions, and four concise task prompts. The named "Let's talk" action opens the panel with no question required; typed questions and prompts use the existing conversation flow. The full chat uses the matching greeting, softer panel/composer edges and lighter suggestion rows. AI identification and privacy access remain explicit. Keyboard focus returns to the initiating control, including pointer-triggered prompts in Safari.

The final production build generated all 170 routes, and targeted lint passed. Eight responsive browser cases passed (Chromium at 320/390/768/1024/1440/1920px; WebKit at 390/1440px), covering blank open, typed submission, all four prompts, Escape, focus restoration, viewport bounds and assistant-scoped automated WCAG A/AA checks. Desktop/mobile screenshots were visually reviewed. All API calls in interaction checks were intercepted with simulated responses: no real model conversation, enquiry or Slack message was sent. No commit, push or deployment was performed.


Assistant size follow-up: the owner requested a shorter homepage card and larger surrounding content. Removed homepage suggested questions, shortened the introduction, reduced card padding/heading size and allocated more hero width to the introduction and portfolio screen. The full conversation initially retained its prompts; the matching-popup follow-up below supersedes that choice. At desktop widths the card is about 381px high; the portfolio is 533px wide at a 1440px viewport and 598px at 1920px. Six viewport checks (320-1920px) found no page overflow or tested card text clipping. Blank open and typed submission passed with intercepted API replies, and targeted lint/whitespace checks passed.

Matching-popup follow-up: the popup now uses the homepage card's warm background, shared short greeting and compact writing area, with suggested questions removed. It opens at approximately 440px high, expands for a conversation and returns to the compact welcome on reset. Human contact and privacy controls remain available. Type checking, targeted lint and whitespace checks passed. Six browser cases passed: Chromium at 320/390/768/1440px and WebKit at 390/1440px, including submission, reset, Escape, viewport bounds and dialog-scoped automated WCAG A/AA checks. Mobile tests also checked the composer within a 420px-high viewport. Desktop and mobile screenshots were visually reviewed. All API responses were simulated; no real conversation or enquiry was sent. No commit, push or deployment was performed.

## Custom CRM case study and search intent - 10 October

**Current status, clarified 10 October:** Completed. Panda Patches CRM has the supplied redacted walkthrough images, team-workflow explanations, custom-CRM intent and linked software/backend services. Its existing URL and founder-affiliated disclosure remain.

Owner request: use the additional CRM screenshots, explain the team workflow in plain English, and replace the vague Enterprise Ops naming with a relevant CRM/service category. The public project name is now **Panda Patches CRM**; its case-study heading and metadata lead with custom CRM development. Its existing `/work/enterprise-ops` address and canonical remain, so no redirect or broken project links are introduced. Homepage/work captions, project facts, social-card copy and the assistant/llms facts use the same project name. Founder affiliation and the metric registry remain explicit.

The existing `/services/custom-engineering` page is the hiring destination for custom software and CRM development, with explicit workflow-automation scope and a link to the project as proof. The case study explains what this particular team uses; it does not become a duplicate generic service page. Added direct questions about team CRM tasks, building around an existing workflow and improving an existing CRM versus a new build. Visible answers and FAQ schema share one array.

Search-intent evidence: [ScienceSoft](https://www.scnsoft.com/crm/custom) distinguishes building a CRM from customising an existing platform, while [Curotec](https://www.curotec.com/services/crm-development/) uses custom CRM development for business workflows and integrations. [Sufalam](https://www.sufalamtech.com/workflow-automation) offers workflow automation connecting business systems. [PersonalCRM](https://personalcrm.me/) describes personal contacts and staying in touch, which is a different job from this team CRM. These first-party offers support category/intent selection, not keyword volume or a promise of ranking. No Salesforce/HubSpot specialist capability was added.

The owner supplied seodata.dev estimates: **custom crm 1,600 US searches/month**, **custom crm system 1,900**, **custom crm software 590**, and **custom crm software development 320**. The seed's provider update is 19 September 2026; related terms have no separate dates in the pasted output. All ten related suggestions and the seed are preserved in [the owner evidence](evidence/crm-keywords-owner-2026-10-10.json). Do not sum close variants; CPC and advertiser competition are not organic difficulty, and these are not AI prompt counts. Four direct API probes returned HTTP 403; [the probe record](evidence/crm-keyword-probe-2026-10-10.json) records the limitation. The supplied volume batch was not independently refetched.

Five owner-supplied screenshots were moved from `public/blog-images` to descriptive `public/work/panda-patches-crm-*.png` names, without changing their pixels. The walkthrough covers the empty order form, sign-in, redacted team roles and two reporting views. It provides full-size image links and natural image proportions on mobile. The duplicate unredacted staff list was moved to ignored `private-assets/crm-2026-10-10/staff-list-original.png`; only the supplied redacted permissions image is public. Reporting captures show aggregate figures without a visible date filter; captions describe the interface rather than deriving new revenue/attribution results. Existing dated metrics were not changed.


CRM validation: type checking, targeted lint and the public-claim gate passed. The production build generated 170 routes. Six Chromium/WebKit cases passed at mobile and desktop widths: five walkthrough images loaded, all seven FAQs were present in the initial HTML and matched schema, canonical/headline/status data agreed, and no tested horizontal overflow or walkthrough-scoped WCAG A/AA violations were found. Screenshots were visually reviewed. The unredacted staff original is ignored outside public/. No commit, push or deployment was performed.

## A Step Above Medical build record - 10 October

**Current status, clarified 10 October:** Completed as a website case-study update. ASAM itself is built and in pre-launch testing; this does not say the client replacement website is live or its testing has finished.

Hassan confirmed that the website and portal build are complete and now in testing. Replaced the stale 4 October "80% complete" status with **built, in pre-launch testing**, dated 10 October, in migration facts, company/assistant facts, homepage portfolio, work archive, service proof and the related Sanity/Supabase article. The existing project URL remains. The page, social metadata and CreativeWork schema describe the same release status; no live replacement-site link or production results were added.

Rebuilt the page around the shared case-study walkthrough: course website, course/location editor and class-operations portal. Five previously supplied screenshots appear at their natural proportions with full-size links. The older sample-data dashboard, visibly labelled "Nothing on this screen saves yet", was replaced in current service proof with the later Classes screenshot. The older asset remains an unused historical file. Screenshot dates and displayed counts are not treated as current schedules or measured outcomes. Five buyer/project FAQs share their source with schema and remain in the initial HTML.

The owner clarified that medical keyword research is for PandaCodeGen's buyers. The candidate batch and page mapping are in [the search-demand follow-up](search-demand-follow-up.md#medical-website-and-training-portal-intent---10-october-2026). Practice website design and medical training software are distinct categories. ASAM documents courses and student administration; the separate practice demo is explicitly a concept. No clinical/EHR/patient-portal or compliance capability was inferred from ASAM. At that stage the medical candidate batch was unmeasured. The owner later supplied three dated medical seeds and 30 related rows, recorded in the following medical follow-up; these were not independently refetched.

ASAM validation: type checking, targeted lint, dates, public claims and changed-file whitespace checks passed. The isolated production build generated all 170 routes. Built metrics, links and retired-claim guards passed; the non-strict Unicode report found 10 existing punctuation occurrences on six unrelated pages, with no invisible characters. Six Chromium/WebKit cases passed at 320/390/768/1440px (WebKit at 390/1440px), checking all five walkthrough images, FAQ initial HTML/schema agreement, status wording, viewport bounds and walkthrough-scoped WCAG A/AA checks. Mobile and desktop screenshots were visually reviewed. Homepage carousel and client-work reel checks passed at 390/1440px and showed the ASAM screenshot and testing label. Production HTML, sitemap date and generated assistant fact sheet agree. API routes were intercepted during browser checks; no enquiry or live chat message was sent. No commit, push or deployment was performed.

## Support-row simplification and medical-system clarification - 10 October

**Current status, clarified 10 October:** Implemented. The medical-system framing and shorter support summary are applied; later canonical defect-cover wording supersedes the original 34-word version. Further row-length polish remains an independent-review observation, not an unanswered support-policy question.

The original homepage "Support after launch" simplification produced a 34-word policy summary; the later shared defect-cover wording supersedes that exact word count. That version summarized: free help from launch, 15 calendar days for Starter and 30 for upgraded builds, fixing delivered work and helping clients use it, correcting our own mistakes without charge and separately quoting new features. The full policy remains in terms and company/assistant facts, including small-request goodwill and the proposal's coverage. Both summary and full text read the same day counts.

Hassan clarified that ASAM is a complete built medical system. Its project title/intro, portfolio captions, walkthrough and shared facts now describe a complete medical training management system with a public website, content editor and class/student operations portal. The last FAQ now positively explains what the team manages instead of leading with a patient-system exclusion. Pre-launch testing status, screenshots and evidence limits remain accurate. No private project financials were published.

The three owner-pasted medical keyword seeds and 30 related rows are recorded in [the medical evidence](evidence/medical-keywords-owner-2026-10-10.json), with their dates and limitations. The [search-demand follow-up](search-demand-follow-up.md) recommends medical website design as the main medical hiring category, backed by the actual ASAM system and the labelled practice concept; no organic difficulty or AI prompt volume was inferred.

Follow-up validation: type checking, targeted lint, public claims and whitespace checks passed. The isolated production build generated all 170 routes. Homepage support-row checks passed at 390px and 1440px, and screenshots were visually reviewed. The full support policy remains in the production terms and generated fact sheet. Production ASAM copy and shared facts use the complete-system framing; its five FAQ answers remain in the initial HTML and match schema. No commit, push or deployment was performed.

## Medical template keyword alignment - 10 October

**Current status, clarified 10 October:** Completed. Medical design/development terms and buying answers are applied to the labelled practice demo. The independent review's suggestion to put the demo label directly in the H1 remains a presentation review item; no real-clinic outcome is claimed.

Applied the owner-supplied medical hiring terms to the existing medical practice demo: medical website design is the main heading/title, while medical practice website design, healthcare website design and medical website development appear in relevant introductions, walkthrough and buying questions. Added four concise FAQs with one shared source for visible answers and schema. The page links its actual system example, A Step Above Medical, and its content-editing service destination.

Retained the Medical Template project name and existing URL. The fictional-practice/demo relationship remains explicit in the breadcrumb, introduction, screenshots, disclosure, social card and CreativeWork data. No live clinic, patient results, staff editor in this demo, clinical platform or compliance result was invented. Homepage/work labels and company/assistant facts now explain the same medical design/development concept. The demo complements a future broad medical service page rather than becoming an undisclosed client case or a separate page for every keyword.

Medical template validation: type checking, targeted lint, public claims and whitespace checks passed. The final isolated production build generated all 170 routes. Six Chromium/WebKit cases passed keyword/title/canonical checks, demo disclosure, image loading, viewport bounds, four initial-HTML FAQs matching schema, and automated WCAG A/AA checks scoped to the walkthrough and FAQs. Mobile and desktop screenshots were visually reviewed. Production HTML, company reference and modification dates agree; llms retains the registry's demo disclosure, and the assistant's project passages read the new company-facts entry. Browser API routes were intercepted; no enquiry or chat message was sent. No commit, push or deployment was performed.

## AI SEO, AEO and GEO service targeting - 10 October

**Current status, clarified 10 October:** Completed. The existing service targets these categories with the approved monthly scope, evidence limits and shared buyer answers. FAQ duplication raised by the later independent review remains separate editorial review work.

The owner requested prominent hiring queries instead of vague service wording. The existing AI SEO page already named AI SEO in its main heading and mentioned AEO/GEO in the introduction, but GEO was missing from the title/navigation and the second headline line said "Useful answers. Clear scope." Updated that line to **AEO & GEO**, the title to **AI SEO & GEO Services**, and service discovery labels to **AI SEO & GEO**. The work, scope and price headings now name AI discovery, AI SEO services and AI SEO/GEO pricing. Two named sections explain answer engine optimization services and generative engine optimization services, with the deliverables stated in plain English.

The existing address and canonical remain /services/ai-seo. The page still sells one focused monthly engagement, from $500: ten questions, up to five priority pages, two agreed AI-search surfaces, one improvement, reporting and review. Additional platforms/content/dashboard work remains separately scoped. No training, website-build handover, broad all-platform monitoring, citation guarantee or new measured result was added. Google visibility proof, founder affiliation and order-attribution limits were preserved.

Added shared FAQs explaining the terms, GEO scope and the distinction from automated article production. Visible answers, FAQ schema and assistant passages share their source. Company facts explicitly include the AI SEO/AEO/GEO scope; search/social metadata and the social card use the same service names.

The owner-supplied keyword records support AI SEO services (590 US monthly estimate, updated 12 May), AEO agency (260, 19 July), generative engine optimization services (170, 26 August) and answer engine optimization services (50, 8 June). These are the recorded provider estimates, not fresh October measurements or AI prompt counts. Variants are not added together, and ad competition is not organic ranking difficulty. "AI SEO" has mixed tool/service intent, so the copy says what buyers receive rather than promising automated articles.

[WebFX's AI search/GEO service](https://www.webfx.com/seo/services/ai-search-optimization/) demonstrates this as a commercial service category. [Google's AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) defines AEO/GEO and treats optimization for Google's generative search as SEO; it also advises useful content and discourages unnecessary near-duplicate pages for query variants. The shared service page uses these category terms while grounding the offer in PandaCodeGen's own approved scope.

AI SEO/GEO validation: type checking, targeted lint, public claims and whitespace checks passed. The final isolated production build generated all 170 routes. Six Chromium/WebKit cases passed explicit keyword/title/canonical checks, monthly-scope preservation, initial-HTML FAQ/schema agreement, viewport bounds and automated WCAG A/AA checks scoped to the AEO/GEO and FAQ sections. Desktop/mobile screenshots were visually reviewed. The final production wording labels AEO/GEO as service areas within one monthly service, rather than alternative packages. The assistant retrieved all three new/revised FAQ answers with exact text and the correct service destination; no unresolved pins were found. Production schema, fact sheet and sitemap date agree. Browser API routes were intercepted, with no real enquiry or live chat message sent. No commit, push or deployment was performed.

## Search foundations and clearer buying terms across services - 10 October

**Current status, clarified 10 October:** Completed. All 11 other service pages have tailored public-search foundations, linked monthly services and clearer buying language. Repeated wording and acronym explanations raised in the newer review remain polish candidates; implementation is not a citation/ranking guarantee.

The owner asked for AI SEO/AEO/GEO language on other service pages, explaining that public websites are built so search/AI systems can read them, and requested replacement of vague headings with specific buying terms or useful longer questions.

Added tailored, server-rendered search-foundation sections and one corresponding buyer FAQ to all 11 other service pages. The shared data describes public-page content, metadata, headings, links, appropriate structured data and sitemap/indexing checks, with the service's actual content/publishing/migration context. Each section links to the optional monthly AI SEO/AEO/GEO service. The canon distinguishes included agreed website foundations, existing-platform fixes and optional ongoing research/reporting. Backend and CRM pages explain public website access separately from private records; no private app is offered to crawlers for SEO.

Tightened primary headings to WordPress website development, ecommerce website development, WooCommerce development services, Squarespace website design, Webflow development services, GoHighLevel website design and backend development services. CMS website development and custom software development retain their existing clear main topics. Replaced vague cost/path labels with CMS/backend/CRM development cost, storefront redesign, product-page/checkout repairs, Wix content migration and GoHighLevel website connections. Services-index summaries match the actual offers. Published price figures, platform tradeoffs, project proof and all existing service addresses are unchanged.

The new longer buyer questions are intent-based candidates, not freshly measured keyword estimates. The earlier owner-supplied WordPress, WooCommerce, CMS and custom-CRM keyword results remain the measured evidence with their original dates. Adding an AEO/GEO link and scope description to a website service does not turn that page into another monthly AI SEO landing page.

[Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) supports crawlable content, textual information, useful links and structured data matching visible content, with no special AI schema requirement. [Google's AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) treats its AI features as SEO and advises helpful content over query-variant duplication. Platform implementation references include [Wix's setup checklist](https://support.wix.com/en/article/wix-seo-setup-checklist-creating-your-seo-checklist), [Webflow's title/description documentation](https://help.webflow.com/hc/en-us/articles/33961237278611-Add-SEO-title-and-meta-description), [Shopify's SEO guidance](https://help.shopify.com/en/manual/promoting-marketing/seo) and [GoHighLevel's technical SEO guide](https://www.gohighlevel.com/post/a-practical-guide-to-technical-seo-for-gohighlevel-websites). No external provider's performance or citation guarantee was adopted.

Cross-service validation: type checking, targeted lint, public-claim and whitespace checks passed. The final isolated production build generated all 170 routes. All 66 Chromium/WebKit cases passed across the 11 services (Chromium 320/390/768/1440px, WebKit 390/1440px), checking new search sections, buying headings, canonical URLs, initial-HTML FAQ/schema agreement, monthly-service links, viewport bounds and section-scoped WCAG A/AA checks. Desktop ecommerce and mobile backend screenshots were visually reviewed. All 11 new FAQ answers were retrieved by the actual assistant index with exact text and the right service destinations; no unresolved pins were found. Final production sections, sitemap dates, company reference and generated fact sheet agree. Tests intercepted API routes; no real form submission or live chat message was sent. No commit, push or deployment was performed.

## Whole-site internal-link audit - 10 October

**Current status, clarified 10 October:** Completed for the recorded local production candidate. Findings were fixed and HTTP, fragment, graph and selected browser checks passed. This does not newly audit the deployed site or clear the separate release checks.

Audited the rebuilt production candidate, including all 158 sitemap pages: 92 articles, 11 topic hubs, 12 service pages, 11 project pages, English company/buying/fact/legal pages and the French/German core pages. The HTTP crawl checked 231 distinct targets, including linked files, the 404 utility page and all 12 static legacy redirects. It parsed actual anchors outside scripts and styles, including links inside closed accordions. Sitemap presence alone did not count as an incoming link.

The baseline had **no broken internal links, redirecting navigation links, missing fragments, empty internal anchors or unreachable sitemap pages**. The substantive findings were relevance and buying-path gaps:

| Finding | Applied correction |
| --- | --- |
| Related service depended on array order; examples included WooCommerce to Wix and Webflow to GoHighLevel. | Made related-service data required and explicit. Commerce pages connect to commerce; platform redesign/migration pages connect to CMS development; CRM/software pages connect to backend development and GoHighLevel to custom CRM/workflow development. |
| Two comparison-table entries applied external-link `nofollow` to PandaCodeGen's own service page. | Rendered those two entries as normal internal links to `/services`. Comparison disclosures and external-source link attributes remain. |
| Project links used the repeated label "Open the project". | Named the actual destination, for example "Explore Panda Patches CRM". Topic-to-service labels now describe custom software, GoHighLevel website/CRM work and AI SEO/AEO/GEO more clearly. |
| Some project pages relied on broad service links or the footer for the relevant offer. | Saforne links to ecommerce development; Panda Publisher links to CMS website development; Ladies 4 Jesus also links to CMS development; the CRM case links to backend development as well as custom CRM/workflow development. Preview/concept and ownership disclosures remain. |
| The headless-platform guide had only the blog archive and topic hub as contextual incoming pages. | Added a relevant prose link from the headless-commerce explainer to the platform-support comparison. |
| Delivery principles were reachable through site navigation but had no contextual incoming page. | Linked About's scope/acceptance/handover process to `/manifesto`. |
| The slow WordPress, Divi and Elementor guides offered migration links without a direct service path for keeping WordPress. | Added WordPress development/repair links to their existing closing sections and made those closing headings about getting help with the current site. Migration links remain available. |

The final graph has no contextual-inlink gaps among non-home English sitemap pages. Six translated core pages (`/fr`, `/fr/about`, `/fr/services` and their German equivalents) have navigation/language-switcher incoming links without separate prose incoming links; these are reachable core navigation destinations, not orphaned pages or a launch blocker. All public sitemap pages are reachable from `/` within **three anchor hops** using the full HTML navigation graph: 44 pages at depth one, 105 at depth two and eight at depth three. This measures crawler link paths, including the initially closed site menu and full blog archive; it is not a claim that every destination takes three visible mouse clicks.

Detector calibration included inspection of actual ancestor markup: the English menu is a dialog outside its header, translated navigation has two differently labelled header/navigation wrappers, and service-guide navigation belongs to the page content. These are classified separately so shared menus cannot satisfy contextual coverage. A 404 page's valid skip-to-content fragment is checked against its IDs rather than misreported as a broken destination. The baseline's localized contextual edges were reclassified from the unchanged localized templates; baseline HTTP results and English-page edges were retained.

The existing cluster guard independently passed all 92 articles and 11 hubs: each article reaches its applicable hub/service parent, money page and two to four structural sibling articles. That sibling range is this repository's editorial convention, not a Google-prescribed link quota. The archive links all 92 articles, and the work directory links all 11 projects. Verified all 57 guide links declared in the shared service-guide map, relevant next-service links, and 17 rendered service-to-project proof paths, including the separately rendered WordPress migration page. Checked all 134 distinct internal URLs in the generated `llms.txt`; each returned 200.

This follows [Google's link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable): real `a` elements with `href`, descriptive anchors, relevant context and internal paths to important pages. No arbitrary link quota, keyword repetition or citation/ranking guarantee was added. The six title-pilot article files and their selected incoming-link sets were not changed by this audit; shared topic-link labels were clarified before launch.

Validation: final isolated production build generated 170 routes and passed TypeScript. Targeted lint, public-claim and whitespace checks passed. Structural SEO reported zero failures and warnings. The final HTTP/fragment graph has zero broken links, redirecting link occurrences, missing fragments, empty anchors, internal `nofollow`, placeholder links or unreachable sitemap pages. All 12 legacy redirects return the expected 308 and point to a 200 destination; the missing-page route correctly returns 404 and its recovery links work. Chromium/WebKit checks passed 52 mobile/desktop journeys for the initial fixes and menu navigation, followed by 12 cases for the additional WordPress paths, at 390/1440px. New link labels wrap within the viewport; desktop service and mobile CRM screenshots were visually reviewed. API routes were intercepted during browser tests; no enquiry or live chat message was sent.

Evidence:

- [Before graph](evidence/internal-links-before-2026-10-10.json) and [final graph with HTTP target statuses](evidence/internal-links-after-2026-10-10.json).
- [Service, archive, portfolio, parent-link and fact-sheet coverage](evidence/internal-link-coverage-2026-10-10.json).
- [Initial link journeys](evidence/internal-link-browser-2026-10-10.json) and [additional WordPress journeys](evidence/internal-link-wordpress-browser-2026-10-10.json).

Repeatable checker: `python scripts/internal_link_audit.py --base http://127.0.0.1:3004 --redirects-manifest .next-audit/routes-manifest.json --output .tmp/internal-links-report.json`, after starting an owned local production server. Use `.next/routes-manifest.json` for a normal production build. It separates site navigation/footer links from contextual content links and verifies HTTP status, fragments, reachability and legacy redirects. The manually reviewed relevance decisions are documented above.

Scope: local production candidate, not the deployed site; initial HTML plus the selected browser journeys, not every interactive state. External websites, APIs and form submissions were not crawled. Query views are collapsed to the underlying page path. The development-only featured-products prototype is intentionally unavailable in production and absent from the public sitemap. This is an internal-link audit, not a complete launch sign-off or proof of search/AI ingestion. No commit, push or deployment was performed.

## Homepage explanation approved and applied - 10 October

**Current status, clarified 10 October:** Completed. The owner's exact shorter explanation is applied; the headline and separate custom-build/WordPress pricing statement remain. Its original lint/source checks and the later independent review are recorded separately.

Applied the owner's requested shorter paragraph verbatim in `HomeDesign.tsx`: working with Hassan and Imran, an editable business website/store, WordPress/custom/existing-site choices, an agreed price, written instructions and a live editing walkthrough. Retained the existing homepage headline and the separate statement: "Custom builds from $1,500. WordPress quoted to scope. Price agreed before work starts." No builder-subscription price comparison was introduced.

Rechecked the nine historical "Copy to resolve before launch" findings against current source and the recorded owner decisions. None requires another owner-policy answer. The original finding table remains historical; its status now makes this explicit. Cost/timeline guide openings and performance verification remain separate work. Targeted homepage lint and source/whitespace checks passed; no new browser, performance or production-build result is claimed for this text-only follow-up. No commit, push or deployment was performed.
