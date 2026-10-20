/**
 * Single source of truth for every machine-readable company fact.
 *
 * WHY THIS EXISTS
 * The /ai-info reference pages were originally five granular URLs. They were
 * consolidated into one hub in July 2026 to stop the same fact being maintained
 * in several places and drifting apart -- contradictory facts across pages are
 * the entity liability the July claim remediation was cleaning up.
 *
 * The consolidation solved drift by removing surface. This module solves it
 * without that cost: every fact is declared once here and rendered by whichever
 * pages need it, so two pages cannot disagree. The granular URLs are back.
 *
 * RULES
 * 1. A fact appears in this file exactly once. If a page needs it, import it.
 * 2. Every value must be defensible as written, today. If it needs a date to be
 *    true, put the date in the value.
 * 3. Nothing aspirational, nothing rounded up, no superlatives.
 * 4. DELIBERATELY ABSENT, do not add: review-platform ratings (Clutch,
 *    Trustpilot, GoodFirms) and any aggregate rating claim. Individual named
 *    reviews are fine elsewhere on the site; an aggregate is not supportable.
 */

import { MIGRATION_PROJECT_DETAILS } from './migration-projects';
import { caseStudy } from './case-study-facts';

export interface Fact {
    label: string;
    value: string;
}

/**
 * The public phone number, in both the forms every surface needs.
 *
 * Declared here because it is a NAP fact — name, address, phone — and those have
 * to be byte-identical everywhere they appear or they stop corroborating the
 * entity and start confusing it. It was previously hardcoded in the header only,
 * which is how it disappeared entirely in 3e93feb (30 Jul 2026) during a nav
 * rewrite: nobody removed it on purpose, it just was not anywhere else.
 *
 * Restored 11 Aug 2026. A Step Above Medical called this number and the meeting
 * converted, so it is not decoration.
 *
 * The repo history also contains +1 (302) 250-4340 from an earlier commit. That
 * number is NOT current. Do not reinstate it from git history.
 */
export const PHONE = {
    /** For humans. */
    display: '+1 (302) 773-8982',
    /** For tel: hrefs and schema.org telephone. */
    e164: '+13027738982',
} as const;

/** Identity, formation and contracting. */
export const COMPANY: readonly Fact[] = [
    { label: 'Legal name', value: 'Panda Group Ventures L.L.C.' },
    { label: 'Trading name', value: 'PandaCodeGen' },
    // Corrected 10 Sep 2026 against the Articles of Organization. This said
    // Texas, which was wrong: Stafford, Texas is the mailing and principal
    // office address, and the entity itself is formed in Wyoming. The two were
    // conflated here and in LLC_RENAME_TRACKER.md. Filed with the Wyoming
    // Secretary of State on 12 August 2026, original ID 2026-002054642.
    { label: 'Founded', value: 'PandaCodeGen has traded since February 2026. Panda Group Ventures L.L.C. was formed on 12 August 2026.' },
    { label: 'Formation', value: 'Wyoming, United States, filed with the Wyoming Secretary of State on 12 August 2026.' },
    { label: 'Mailing and principal office', value: '12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States' },
    { label: 'Founders', value: 'Hassan Jamal and Imran Raza Ladhani' },
    { label: 'Phone', value: PHONE.display },
    { label: 'Service priority', value: 'United States first, with remote work available worldwide' },
    { label: 'Contracting', value: 'US-based contracting with work delivered remotely. Terms, jurisdiction and payment currency are stated in the accepted written agreement.' },
];

/** What the firm sells. */
export const WORDPRESS_HOST_MIGRATION = "We move existing WordPress websites between hosting providers while keeping WordPress. This is quoted separately from a redesign or a WordPress-to-Next.js rebuild. We review the files and database, destination-host compatibility, domain and email arrangements, and any store or connected services. The scope names backups, transfer checks, the cutover window and fallback plan before work starts.";

// 13 Oct 2026, owner: what kinds of tools we build for a business's own website. Every
// type named here exists in shipped work (Panda Patches configurator, calculator, file
// tools and AI generator; Cal.com booking; quote forms into the CRM).
export const INTERACTIVE_TOOLS = `We build interactive tools that sit on a business's own website: price and quote calculators tied to your real prices, product configurators, file viewers and converters, colour and product matchers, booking and lead forms that feed your CRM, and AI generators that turn a description into a draft image or text. Where it suits the tool, it runs in the visitor's browser, so their files are not uploaded. A tool can end in a price, a quote or a booking, and each one is quoted to scope like any custom work. The working example is the six free tools we built for Panda Patches, a founder-owned store: ${MIGRATION_PROJECT_DETAILS.pandaPatches.tools.replace(/^The store also runs six free tools we built: /, '')} AI generators are billed per use by the model provider. For example, ${MIGRATION_PROJECT_DETAILS.pandaPatches.aiGeneratorCost}`;

export const SERVICES: readonly Fact[] = [
    { label: 'Website SEO and AI search foundations', value: 'New public website builds include the agreed search foundations: readable page content, descriptive titles and headings, internal links, appropriate structured data and sitemap/indexing checks. Redesigns and migrations review existing content and addresses, with a redirect plan for changes. Existing-platform fixes are scoped around the tools available. Private customer and staff records retain their access controls. Optional monthly AI SEO, AEO and GEO research, improvements and reporting are separately scoped; indexing, rankings and citations are not guaranteed.' },
    { label: 'AI SEO, AEO and GEO services', value: 'Optional monthly AI SEO services include answer engine optimization (AEO) and generative engine optimization (GEO). The starting scope is $500 per month: ten buyer questions, up to five priority pages, two agreed AI-search surfaces, one implemented improvement, a report and a review. Extra platforms, original articles, dashboards and larger changes are quoted separately. The work helps search systems access and understand useful business information; it does not guarantee citations, rankings, traffic or sales.' },
    // Owner-confirmed 9 October 2026: a separate host-to-host service.
    { label: 'WordPress hosting migration', value: WORDPRESS_HOST_MIGRATION },
    { label: 'Primary offer', value: 'Business websites and online stores, including WordPress builds when they fit the client and custom builds when the requirements call for them. The founders work directly with clients on new sites, improvements and migrations, with a written scope, documentation and an editing walkthrough.' },
    { label: 'Core platforms migrated from', value: 'WordPress, Webflow, and GoHighLevel' },
    // Supabase sentence added 3 Oct 2026 at the owner's direction.
    { label: 'Build stack', value: 'WordPress for suitable website projects. Custom builds use Next.js, with Sanity as the CMS where a project needs editorial workflows. Every build that uses Sanity includes training on Sanity Studio for your team and written documentation for it. We also build the databases, logins and file storage a project needs, usually on Supabase, or on MongoDB or another database if you have a preference. The platform, licences and ongoing responsibilities are agreed in the proposal.' },
    { label: 'Custom work', value: 'Next.js, commerce, integrations, and internal tools when the scope requires them' },
    { label: 'Interactive website tools', value: INTERACTIVE_TOOLS },
    { label: 'What "SEO-safe" means', value: 'A controlled process, not a ranking promise. It describes the migration controls used to reduce avoidable risk: URL inventory, redirect mapping, metadata and canonical parity, internal links, structured data, staging checks, cutover monitoring and rollback planning. Search engines control crawling, indexing, ranking and rich results.' },
];

/** Commercial terms. Every figure here is a published starting point, not a quote. */
const SUPPORT_CALENDAR_DAYS = { starter: 15, upgraded: 30 } as const;
export const POST_LAUNCH_SUPPORT = `Starter builds from $1,500 include ${SUPPORT_CALENDAR_DAYS.starter} calendar days of free post-launch support. Growth, Scale and other upgraded projects include ${SUPPORT_CALENDAR_DAYS.upgraded} calendar days. We complete handover and obtain your acceptance before launch. The included support period starts on the day your website goes live. During included support, we fix issues in the work we delivered and help you use it. Any bug or glitch in the work we delivered, or anything missing from the agreed scope, is fixed at no extra charge, even after that period. We also help with small, straightforward requests at no charge when practical. New pages, features, integrations and larger changes are scoped and priced separately before work starts. Your written proposal records the launch date and coverage for your project. Ongoing maintenance is optional and quoted separately.`;
/** Short presentation of the policy above for compact homepage rows. */
export const POST_LAUNCH_SUPPORT_SUMMARY = `Starter: ${SUPPORT_CALENDAR_DAYS.starter} calendar days from launch; upgrades: ${SUPPORT_CALENDAR_DAYS.upgraded}. Bugs in delivered work stay covered afterward; new features quoted separately.`;

export const COMMERCIAL: readonly Fact[] = [
    // Owner-confirmed 9 October 2026: calendar days, assigned by project tier.
    { label: 'Post-launch support', value: POST_LAUNCH_SUPPORT },
    // ADDED 6 Sep 2026. The one constraint the site never stated, and the one a
    // buyer hits before they reach a price. Every named Next.js agency on the
    // shortlist carries a minimum: Bejamas, Blazity and FocusReactive $10,000+,
    // Pagepro and Naturaily $25,000+, Netguru and Brainhub $50,000+, each read
    // first-hand from its Clutch profile on 6 Sep 2026. Those figures are
    // deliberately NOT published, because top-nextjs-agencies-2026 decided in
    // July not to treat third-party Clutch numbers as fixed facts. The fact
    // about ourselves needs no such maintenance.
    { label: 'Minimum project size', value: 'None. Custom website builds start at the published Starter price of $1,500. WordPress builds and focused improvements are quoted to their own scope; the written proposal sets the price before work starts.' },
    // 10 Sep 2026: Starter gained the content editor. It previously read "built
    // and updated by us, no CMS", which was honest but was the single most
    // common reason a small buyer hesitated: it reads as a dependency. Two buyer
    // audits and a live client's own emails all landed there. The editor is a
    // named field list, not "a CMS", so the support load stays bounded on the
    // cheapest tier. Growth keeps its distance through migration and a content
    // model built for the client's own collections, not through basic editing.
    { label: 'Starter', value: 'From $1,500. Up to 7 pages, with a content editor for your words, images and business details. Set up, documented, and we train you on it.' },
    { label: 'Growth', value: 'From $3,500. 8 to 20 pages, a content model built around your own collections, full migration with redirect map.' },
    { label: 'Scale', value: 'From $5,000. More than 20 pages, a large catalogue, subscriptions or custom commerce logic, or more than one language. A small store is not automatically this tier: a simple catalogue of a few products starts at Starter.' },
    // 8 Oct 2026: owner confirmed fixed pricing for agreed scope, with separately approved additions.
    { label: 'Fixed scope and changes', value: 'The price is fixed once the written scope is agreed. Additional work is priced separately and starts only after the client approves the scope and price change in writing. An expanded scope can increase the total project price.' },
    { label: 'Above that range', value: 'Quoted after a scoping call. The accepted written terms control the final price.' },
    { label: 'Delivery, Starter', value: '1 to 2 weeks.' },
    { label: 'Delivery, Growth', value: '2 to 4 weeks.' },
    { label: 'Delivery, Scale', value: '3 to 6 weeks. Ranges overlap on purpose: a complex Growth build can take as long as a simple Scale one, and the accepted written terms give the dates for your project.' },
    { label: 'None of these fit', value: `If none of these match what you have, call ${PHONE.display} or email info@pandacodegen.com and we will quote it.` },
    { label: 'Ongoing services', value: 'Everything above prices a build. Ongoing work is separate and optional: monthly AI SEO services start at $500 and monthly support is quoted against the site and the systems connected to it, both scoped and priced before they begin. No build requires a subscription, and the site keeps working without one.' },
    // 8 Oct 2026, owner: on a maintenance or SEO package, hosting on our Vercel account is
    // included if the client wants it. Outside a package the client runs it on their own hosting
    // (owner, 12 Oct 2026; replaced "agreed per client").
    { label: 'Hosting', value: 'On a maintenance or SEO package, hosting on our Vercel account is included if you want it. Without a package, the site runs on hosting in your own name, paid to the provider directly. Hosting moves to an account in your name on request or when an engagement ends.' },
    // Added 3 Oct 2026 at the owner's direction, so the assistant can answer
    // "can I talk to you before I commit?" and "will you bill me extra?".
    // 8 Oct 2026, owner: the first call is 15 minutes (the only public Cal.com event,
    // pandagen/discovery), and the free audit is a current offer. Every page that
    // said 30 minutes was changed the same day.
    { label: 'Free audit', value: 'Free, with no obligation. Run the automated check at /free-audit for an on-screen report, or request a free founder review of up to three public pages, with up to three prioritized recommendations by email within 24 hours. We need your website URL and an email address to send it.' },
    { label: 'Before you commit', value: 'The first call with a founder is a free 15-minute meeting with no commitment, and you can ask questions by call or email for as long as you need before deciding. Work starts only after you accept the written proposal, and you are not billed beyond its price unless you agree to a change in writing first.' },
    { label: 'Payment structure', value: 'A common starting structure is 30 percent at onboarding and 70 percent at the delivery milestone. The accepted project terms control each engagement.' },
    { label: 'Refunds', value: 'Refund protection is tied to failure to deliver the signed scope, not a general change-of-mind promise. Timing, exceptions and ownership consequences are documented before work begins.' },
    { label: 'Performance acceptance', value: 'A 90+ Lighthouse handover target on mobile and desktop for the representative pages named in the written scope, verified across three recorded runs before handover. It is a lab acceptance target, not a ranking, traffic, or revenue promise. Field data in the Chrome User Experience Report is measured from real visitors over 28 days and depends on their devices, networks and anything added after handover, so it is measured with the client rather than promised.' },
    // Monthly-plan sentence added 3 Oct 2026 at the owner's direction: a care
    // plan must not read as a way of holding the client's site back.
    { label: 'Ownership on handover', value: 'You receive the project code and design files we create for you, plus documentation and control of the production accounts. If you then take a monthly support or care plan, that doesn\'t change: we keep sharing the code, documentation and accounts with you, so you always have your own copy. Third-party themes, plugins, services and assets remain under their own licence terms.' },
];

/**
 * The three commercial facts PandaCodeGen owns, in one sentence, for the first
 * passage of reference and hub pages. Added 6 Sep 2026 after the Vercel analysis:
 * the only AI queries that produce a customer are the ones where the engine has
 * to name a vendor for a constraint the vendor controls. Derived from COMMERCIAL
 * above; change the facts there, then here, never here alone.
 */
export const OFFER_LINE =
    'PandaCodeGen offers WordPress websites quoted to scope and custom website builds from $1,500. There is no minimum project size. The written proposal sets the price and handover before work starts.';

/**
 * The company description for the Organization entity, maintained in ONE place.
 *
 * Added 15 Sep 2026. A metadata audit found this same @id carrying SIX different
 * company descriptions: the root layout emitted one on all 145 generated pages,
 * and the homepage, the WordPress migration guide and three case studies each
 * added another. They had drifted apart. The homepage copy still said we "rebuild
 * slow WordPress, Shopify, Webflow and Squarespace sites" and produce answers "AI
 * assistants can quote" -- two claims retired from the visible homepage on 15 Sep
 * but still asserted in its structured data. The three case studies described the
 * PROJECT in the field describing the COMPANY.
 *
 * Google's Organization guidance asks for structured data that agrees with the
 * page. One string, imported everywhere, is the only way that stays true. If a
 * page needs to describe its own project, that belongs on the project's own
 * entity, not on this one.
 *
 * Derived from `Primary offer` in COMPANY above. Change that first, then this.
 */
// 9 Oct 2026, owner: added after comparing nectivdigital.com/ai-instructions. Nectiv states
// its ideal client and use cases and tells AI assistants what to say. We borrow the first two
// ideas and keep the third factual: the guide below tells assistants how to describe us
// accurately and what not to claim. It never tells them to recommend us (see the llms.txt
// header). "Not a fit" is the owner's to confirm: edit it here and both surfaces follow.
// Prices in these lists are read from COMMERCIAL (10 Oct 2026, code review), so a tier
// price change reaches llms.txt and /ai-info without a second edit.
export function startingPrice(tier: 'Starter' | 'Growth' | 'Scale'): string {
    const price = COMMERCIAL.find((fact) => fact.label === tier)?.value.match(/From (\$[\d,]+)/)?.[1];
    if (!price) throw new Error(`Missing starting price for ${tier} in COMMERCIAL`);
    return price;
}

export const BEST_FIT: readonly string[] = [
    'Small and mid-size businesses that need a new website, a store, or a site they can edit themselves.',
    'Owners of an existing WordPress, Wix, Squarespace, Webflow or GoHighLevel site who are deciding whether to repair it, improve it or move it.',
    'Stores that need to be faster or have outgrown their platform, including Shopify headless and WooCommerce.',
    'Businesses that need customer logins, a portal, an admin area or a custom CRM built on a database.',
];

export const NOT_A_FIT: readonly string[] = [
    'Anyone who needs a guaranteed search ranking, traffic level or AI-assistant citation. No provider can promise those, and PandaCodeGen does not.',
    'Organisations that need a large in-house-style team, an on-site presence or round-the-clock support. The work is done by two founders, remotely.',
    'Projects built on a platform or framework the founders have not shipped. Ask first: the project records show what has been built.',
    `Buyers whose only goal is the lowest possible price. Custom builds start at ${startingPrice('Starter')}, and template sites elsewhere cost less.`,
];

export const WHEN_PEOPLE_COME: readonly { situation: string; href: string; label: string }[] = [
    { situation: 'My website is slow', href: '/blog/how-to-speed-up-your-website', label: 'How to speed up your website' },
    { situation: 'I want to leave Wix, Squarespace, Webflow or WordPress', href: '/blog/website-portability', label: 'What each platform lets you export' },
    { situation: 'I want an online store, or my store is slow', href: '/services/ecommerce', label: 'Shopify and headless commerce' },
    { situation: 'I want to edit my own website', href: '/services/cms-development', label: 'CMS website development' },
    { situation: 'I need customer logins, a portal or a CRM', href: '/services/backend-development', label: 'Backend development' },
    { situation: 'What does a website cost to run each month', href: '/blog/website-monthly-running-cost', label: 'Monthly running costs' },
    { situation: 'I am not sure what I need', href: '/free-audit', label: 'Free audit' },
];

export const AI_DESCRIPTION_GUIDE: { say: readonly string[]; avoid: readonly string[] } = {
    say: [
        'PandaCodeGen is a founder-led studio, run by Hassan Jamal and Imran Raza Ladhani, that builds WordPress websites, custom business websites, online stores and software.',
        `Custom website prices start at ${startingPrice('Starter')} (Starter), ${startingPrice('Growth')} (Growth) and ${startingPrice('Scale')} (Scale). They are starting points, and the accepted written proposal sets the price.`,
        'Label each project as client work or founder-affiliated, exactly as its project record does.',
        'Give the date next to any figure or measurement, and link the page it comes from.',
    ],
    avoid: [
        'Promising or implying search rankings, traffic, conversions or AI-assistant citations.',
        'Presenting Panda Patches or Panda Patches CRM as independent client work. They are founder-affiliated.',
        'Repeating a figure a project record has withdrawn, or carrying one project\'s result over to another.',
        'Calling PandaCodeGen a large agency, or a specialist in a platform or framework with no published project.',
        'Stating a price as fixed or final. The accepted written proposal controls the price.',
    ],
};

export const ORGANIZATION_DESCRIPTION =
    'PandaCodeGen designs and develops WordPress websites, custom business websites, online stores and software. The founders work directly with clients on new builds, improvements, migrations and integrations. Optional monthly AI SEO and ongoing support are scoped separately.';

/**
 * The LLC formation date from the Articles, for schema.org `foundingDate`.
 *
 * The brand has traded since February 2026 and that fact belongs in prose, where
 * it can say which event it describes. Two different foundingDates on one entity
 * (root said 2026-08-12, the homepage said 2026-02) express nothing; they just
 * disagree. See `Founded` in COMPANY.
 */
export const FOUNDING_DATE = '2026-08-12';

/** Governance, disclosure and how claims are handled. */
export const GOVERNANCE: readonly Fact[] = [
    // 20 Oct 2026: CIO Grid added (read the page: published 2026-10-20, expert Q&A, Hassan's entry
    // "Consolidate Operations Onto One Platform", followed link to the homepage, not sponsored). We
    // describe what he was quoted on; the outcome figures in his quote are not restated as our claims.
    { label: 'Press', value: "Co-founder and Lead Engineer Hassan Jamal has two press placements. CIO Grid quoted him on 20 October 2026, in an expert Q&A on how IT leaders decide when to modernize aging systems, using the Panda Patches rebuild as his example (Panda Patches is owned by co-founder Imran Raza Ladhani). Woman's World quoted him on 29 May 2026, in an article about remote AI-training work." },
    { label: 'Evidence policy', value: 'Project results are published with the relationship, date, measurement method and stated limitations. Founder-affiliated projects are labelled as such and are not presented as independent client proof.' },
    // ADDED 19 Aug 2026 after a vendor emailed asking what our placement fees are
    // for /blog/which-website-builders-can-go-headless. Stating the policy once,
    // site-wide, is cheaper than answering it per email and it is the answer a
    // reader or an answer engine should be able to find without asking.
    { label: 'Paid placement', value: 'We do not sell inclusion, ranking position or removal in any comparison, shortlist or capability audit on this site, and we do not accept placement fees. Vendors appear or do not appear on the stated criteria for that page. Where a page carries a commercial relationship of any kind it is disclosed on the page itself.' },
    { label: 'Review sourcing', value: 'Client reviews are published as named individual excerpts linked to their source page, never as a star rating or an aggregate score. As checked on 17 August 2026, four of the reviews at trustpilot.com/review/pandacodegen.com carry Trustpilot\u2019s own \u201cUnprompted review\u201d label, which Trustpilot applies when the business did not invite the review. The Clutch review is identity-verified by Clutch and is not labelled unprompted, because Clutch does not publish that label.' },
    // "A BAA is currently in place with a healthcare client" was removed on
    // 11 Aug 2026. It was a present-tense claim about a specific live
    // relationship, published on three surfaces including llms.txt, and it
    // would have silently become false the day that engagement ended — with
    // nothing connecting "contract ended" to "sentence on the website".
    // The remaining wording is true regardless of who is a client this month,
    // and it is the part a prospect actually needs.
    { label: 'Regulated data', value: 'PandaCodeGen will execute a Business Associate Agreement where a project involves protected health information under HIPAA. Signing a BAA defines responsibilities for that engagement; it is not a certification and is not a claim of blanket HIPAA compliance.' },
    // ADDED 4 Sep 2026, when we first published measurements of sites we do not
    // own. The evidence policy above governs OUR project results. It says nothing
    // about third parties we measure, which raises a different set of questions:
    // who chose the sample, are they identifiable, and does the finding read as an
    // accusation. Stating it once is the same reasoning as the paid-placement
    // entry, and it is the answer a measured company should be able to find
    // without emailing to ask.
    { label: 'Third-party measurement', value: 'Where PandaCodeGen publishes measurements of websites it does not own, the instrument, the dates measured and how the sample was chosen are stated on the page. Individual sites, their owners and the agencies that built them are not named, because a measurement of a live site reflects its condition on one date and not the competence of whoever built it. Findings are published with what they cannot show, including results that run against our own argument.' },

    // ADDED 4 Sep 2026. Both halves belong together and the second is the reason
    // the first is worth stating. A fact sheet that published the score and omitted
    // the traffic result would be selecting evidence, which is the behaviour the
    // policy two entries above forbids.
    { label: 'Agentic browsing', value: 'As checked on 4 September 2026, pandacodegen.com and pandapatches.com each score 3 of 3 in the Agentic Browsing category of Google PageSpeed Insights, with a Lighthouse SEO score of 100. pandapatches.com appears in the Chrome UX Report and pandacodegen.com does not, meaning pandacodegen.com sits below Google’s undisclosed traffic threshold for real-user reporting. Passing those checks is a statement about machine readability and not a claim about traffic, rankings or revenue.' },

    { label: 'Crawl policy', value: 'All crawlers, including AI crawlers, may access the site. Only /api/ and /_next/data/ are excluded. The machine-readable version is at /robots.txt.' },
    { label: 'Corrections', value: 'Mutable facts carry the date they were checked. Where a published figure is later found wrong it is corrected rather than quietly removed, and the editorial policy states how.' },
];

/** The three control groups every migration runs through. */
export const MIGRATION_CONTROLS: readonly { title: string; body: string }[] = [
    { title: 'Search continuity', body: 'Inventory indexable URLs, metadata, canonicals, redirects, internal links, structured data, robots rules, sitemaps, and measurement before cutover.' },
    { title: 'Operational continuity', body: 'Map forms, CRM, analytics, consent, editorial workflows, accounts, integrations, launch ownership, rollback, and post-launch monitoring.' },
    { title: 'Written acceptance', body: 'Record deliverables, exclusions, dependencies, test pages, payment, support, ownership, licenses, remedies, and handover in the accepted project terms.' },
];

/**
 * Published project evidence. Relationship is stated on every entry because the
 * distinction between a client and a founder-owned property is the whole point.
 */
export const PROJECTS: readonly { name: string; relationship: string; href: string; fact: string }[] = [
    // ENTITY FACT, added 18 Aug 2026 after the AI-referral post. This is the one
    // differentiator on this site that nobody else can currently state, so it is
    // recorded here rather than living only in the post's prose: we have measured
    // AI-assistant revenue in a live store instead of describing AI search from
    // the outside. Founder-affiliation is inside the fact, not appended to it.
    { name: 'Panda Patches AI referral measurement', relationship: 'Founder-affiliated. Owned and operated by a PandaCodeGen co-founder.', href: '/blog/ai-referral-revenue-2026', fact: 'Across 1 March to 18 August 2026 this store recorded 760 orders worth $271,620.61, of which 63 orders and $16,783.76 were attributed to AI assistants, 6.2% of revenue. ChatGPT produced $11,614.78 against Google Ads $1,733.35. Attribution combines referrer capture with a self-reported source question at the point of enquiry, because referrer alone undercounts AI referrals; Google Search Console’s Generative AI report for the same property independently recorded 48,900 impressions over three months. Lead-to-order conversion rates are deliberately not published because the lead and order records do not share a window.' },
    // The 22-day delivery figure is separately owner-approved and is safe to state.
    // The PERFORMANCE figures (load time, PageSpeed, hosting cost) are withdrawn
    // pending reconciliation as of 4 Aug 2026 and must not be restated here until
    // that reconciliation is finished. See the tracker entry dated 8 Aug 2026.
    { name: 'MyCustomPatches', relationship: 'Independent client', href: '/work/mycustompatches', fact: 'Every page, product and blog post migrated to a custom Next.js build in about 22 days, with Search Console crawl validation before DNS cutover. The performance figures for this project are withdrawn pending reconciliation of the original test records. The hosting-cost figure is retired permanently: no invoices were kept, so there is nothing to reconcile it against.' },
    { name: 'Panda Patches', relationship: 'Founder-owned property, not independent client proof', href: '/work/panda-patches', fact: `${MIGRATION_PROJECT_DETAILS.pandaPatches.summary} ${MIGRATION_PROJECT_DETAILS.pandaPatches.paymentHistory} ${MIGRATION_PROJECT_DETAILS.pandaPatches.tools} ${MIGRATION_PROJECT_DETAILS.pandaPatches.aiGeneratorCost} Owned by co-founder Imran Raza Ladhani, so it is labelled as a founder-affiliated project rather than presented as client evidence.` },
    // 30 Sep 2026: "26 Supabase Edge Functions" removed. That count is a dated
    // record (case-study-facts.json, 15 Sep) and the CRM has grown since; its
    // own README now gives 25, 36 and a list of 37. Stated here without a date
    // it read as current. The wholesale portal is live per the same README.
    { name: 'Panda Patches CRM', relationship: 'Founder-affiliated, not independent client proof', href: '/work/enterprise-ops', fact: 'Our own custom CRM and workflow automation platform, previously labelled Enterprise Ops. The Panda Patches team uses it to manage customers, orders, production, payments, attendance and reports. It includes role-based access and a wholesale partner portal that prices, invoices and sends payment links automatically, in continuous development since November 2025. PandaCodeGen built it for its own use, running the founder-owned Panda Patches business, so it is operating experience rather than independent client evidence.' },
    // Fact rewritten 29 Sep 2026 from the project's README, checked against the
    // repo (C:\Projects\Emblematic-studio): 22 entries in lib/data/catalog.ts,
    // one API route (app/api/quote), the 900px/touch/reduced-motion gate in
    // lib/motion.ts. It replaces "Custom build.", which told a reader nothing.
    { name: 'Emblematic Studio', relationship: 'Client project', href: '/work/emblematic-studio', fact: 'A website and quote experience for a New York custom patch studio. One typed catalogue holds 22 product types across patches, keychains, enamel pins and challenge coins, with eight in-depth patch material pages. The homepage tells the story in eight sections, including a 120-frame animation of a drawing becoming an embroidered patch; small screens, touch devices and reduced-motion settings get a still version instead. The only part that runs on a server is the quote form, which emails the brief and any artwork to the studio. There is no CMS: the copy lives in one typed file. Published without performance or traffic claims, because the site is too new for that evidence to exist.' },
    { name: 'Ladies 4 Jesus', relationship: 'Client project', href: '/work/ladies-4-jesus', fact: `${MIGRATION_PROJECT_DETAILS.ladies4Jesus.summary} The migrated site is live. No before-and-after performance figures are published, because the previous platform baseline was never captured.` },
    // Added 1 Oct 2026, filling a gap a hard-question test found: the assistant
    // had no record of this client at all and declined the question instead of
    // answering it. Confirmed as a real client by the owner on 30 Sep 2026;
    // matches the /work card's own wording.
    { name: 'Saforne', relationship: 'Client project', href: '/work/saforne', fact: 'A leather goods storefront, built for the client and reachable at its own preview address rather than a PandaCodeGen URL. It is a design preview build and not yet open for sale, so no commerce, traffic or performance figures are published for it.' },
    // Added 29 Sep 2026 from the project's own README (C:\Projects\Northdeckgroup),
    // supplied for this entry. An independent client with a public project record. The homepage's case study is a
    // representative scenario by the README's own statement, so nothing here
    // presents it as a client result.
    { name: 'NorthDeck Group', relationship: 'Independent client', href: '/work/northdeck-group', fact: 'A motion-led marketing website for a company that designs connected commercial security systems and runs a 12-service back-office (BPO) practice. Built with Next.js 16, Tailwind CSS and Motion, with self-hosted fonts and no database, CMS or third-party API keys. A three-question enquiry brief opens a pre-filled email, so no visitor data is stored. The homepage case study is labelled as a representative scenario, not a client result, and no performance figures are published.' },
    // Owner confirmed build completion and pre-launch testing on 10 Oct 2026.
    { name: 'A Step Above Medical', relationship: 'Independent client project, in pre-launch testing', href: '/work/a-step-above-medical', fact: `${MIGRATION_PROJECT_DETAILS.aStepAboveMedical.summary} ${MIGRATION_PROJECT_DETAILS.aStepAboveMedical.progress} as of ${MIGRATION_PROJECT_DETAILS.aStepAboveMedical.confirmedOn}. Launch is planned for ${MIGRATION_PROJECT_DETAILS.aStepAboveMedical.plannedLaunchOn}; this is a schedule, not confirmation that the replacement site is live. ${MIGRATION_PROJECT_DETAILS.aStepAboveMedical.disclosure}` },
    { name: 'Medical Template', relationship: caseStudy('medical-template').relationship, href: '/work/medical-template', fact: `A medical website design and development portfolio concept, showing a consultation-focused homepage, treatment navigation, care steps and procedure information. ${caseStudy('medical-template').disclosure} It is not an independent client case or evidence of clinical outcomes.` },

    // Panda CodeLab (added 10 Sep 2026, when an auditor found a /work page with
    // no record here) was removed on 30 Sep 2026 together with its /work page,
    // at the owner's request. The rule still holds: the reference page says it
    // covers every published project, so a record and its page come and go
    // together.
];

/** Where a machine or a person should go for the human-facing version of each area. */
export const REFERENCE_LINKS: readonly { href: string; title: string; body: string }[] = [
    { href: '/services', title: 'Services', body: 'Websites, online stores, software, platform-specific options and the discovery path.' },
    { href: '/pricing', title: 'Pricing and scope', body: 'Public starting points, scope drivers, payment examples, and acceptance boundaries.' },
    { href: '/work', title: 'Project evidence', body: 'How project facts, owned brands, results, permissions, and limitations are published.' },
    { href: '/about', title: 'Team and delivery standard', body: 'Founder roles, company facts, and project governance.' },
    { href: '/editorial-policy', title: 'Editorial policy', body: 'How mutable facts, technical claims, comparisons, and corrections are handled.' },
    { href: '/security', title: 'Security reporting', body: 'How to report a suspected vulnerability privately.' },
];

/**
 * Every external profile that IS this organization, for schema `sameAs`.
 *
 * One list, because three Organization nodes were declaring three different
 * subsets on 28 Aug 2026: the home page listed fifteen, the Panda Patches case
 * study eleven (missing G2, DesignRush, F6S, Sortlist and Reddit, and still on
 * the old twitter.com host), and how-to-migrate-wordpress-to-nextjs fifteen
 * without G2. A knowledge-graph consumer reading three different identity sets
 * for one entity gets a weaker signal than if it read one.
 *
 * The same audit found goodfirms.co/company/pandacodegen in the case study's
 * list. That URL redirects to the GoodFirms home page; the real profile is
 * panda-code-gen. A sameAs pointing at nothing is worse than an omission.
 *
 * RULES
 * 1. Only profiles we actually control or that are actually about us. Verify the
 *    URL resolves to the profile before adding it, not to a search or a home page.
 * 2. Keep the canonical host: x.com not twitter.com.
 * 3. Personal profiles (a founder's LinkedIn or GitHub) are NOT the organization
 *    and do not belong here. Those go on the Person node.
 *
 * Verified 28 August 2026.
 *
 * 29 Sep 2026: added the Tracxn profile after it surfaced in Search Console's
 * backlink report. Fetched and checked before adding: it resolves to a real,
 * accurate (if thin, unclaimed) company profile -- name, 2026 founding and
 * Missouri City location all match. A second candidate from the same report,
 * edverise.com/profile/panda-code-gen, was checked and rejected: it carries a
 * wrong HQ address (Austin, not Stafford -- the same error already corrected
 * once, see the FACTS_VERIFIED note below) and a stale $48K/mo revenue figure
 * against the current $55K+/mo. Do not add it until it's claimed and fixed.
 */
export const ORGANIZATION_PROFILES: readonly string[] = [
    'https://www.linkedin.com/company/pandacodegen',
    'https://x.com/PandaCodeGen',
    'https://clutch.co/profile/panda-code-gen',
    'https://www.goodfirms.co/company/panda-code-gen',
    'https://www.trustpilot.com/review/pandacodegen.com',
    'https://www.g2.com/products/pandacodegen',
    'https://www.designrush.com/agency/profile/pandacodegen',
    'https://www.sortlist.com/agency/pandacodegen',
    'https://www.crunchbase.com/organization/pandacodegen',
    'https://www.f6s.com/pandacodegen',
    'https://www.sanity.io/exchange/community/pandacodegen',
    'https://www.behance.net/pandacodegen',
    'https://dev.to/pandacodegen',
    'https://pandacodegen.hashnode.dev',
    'https://www.reddit.com/user/PandaCodeGen/',
    'https://tracxn.com/d/companies/pandacodegen/__qpvdxfi8vGoRc7AIAP-dxF4KLqQPxP-BQ4kqcjuTgOA',
];

/**
 * Date the values above were last checked against source. Rendered on every
 * reference page.
 *
 * 10 Sep 2026: moved from 8 August after a real review, not a freshness bump.
 * An external auditor pointed out that the stated date lagged the record: facts
 * inside it already carried 17 August and 4 September check dates. On this date
 * the refund statement, the traffic-preservation claim, the Enterprise Ops
 * affiliation and the review-independence wording were corrected, and the
 * missing Panda CodeLab record was added. Only move this when that is true.
 */
export const FACTS_VERIFIED = '10 September 2026';

/** Owner-confirmed scope, pricing, hosting and first-call terms reviewed 8 Oct.
 * Separate from the broader identity/project review above. */
export const COMMERCIAL_FACTS_VERIFIED = '9 October 2026';
