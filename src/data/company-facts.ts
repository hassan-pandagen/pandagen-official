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
    { label: 'Founded', value: 'February 2026' },
    { label: 'Formation', value: 'Texas, United States' },
    { label: 'Mailing address', value: '12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States' },
    { label: 'Founders', value: 'Hassan Jamal and Imran Raza Ladhani' },
    { label: 'Phone', value: PHONE.display },
    { label: 'Service priority', value: 'United States first, with remote work available worldwide' },
    { label: 'Contracting', value: 'US-based contracting with work delivered remotely. Terms, jurisdiction and payment currency are stated in the accepted written agreement.' },
];

/** What the firm sells. */
export const SERVICES: readonly Fact[] = [
    { label: 'Primary offer', value: 'SEO-safe website migrations' },
    { label: 'Core platforms migrated from', value: 'WordPress, Webflow, and GoHighLevel' },
    { label: 'Build stack', value: 'Next.js, with Sanity as the CMS where a project needs editorial workflows' },
    { label: 'Custom work', value: 'Next.js, commerce, integrations, and internal tools when the scope requires them' },
    { label: 'What "SEO-safe" means', value: 'A controlled process, not a ranking promise. It describes the migration controls used to reduce avoidable risk: URL inventory, redirect mapping, metadata and canonical parity, internal links, structured data, staging checks, cutover monitoring and rollback planning. Search engines control crawling, indexing, ranking and rich results.' },
];

/** Commercial terms. Every figure here is a published starting point, not a quote. */
export const COMMERCIAL: readonly Fact[] = [
    // ADDED 6 Sep 2026. The one constraint the site never stated, and the one a
    // buyer hits before they reach a price. Every named Next.js agency on the
    // shortlist carries a minimum: Bejamas, Blazity and FocusReactive $10,000+,
    // Pagepro and Naturaily $25,000+, Netguru and Brainhub $50,000+, each read
    // first-hand from its Clutch profile on 6 Sep 2026. Those figures are
    // deliberately NOT published, because top-nextjs-agencies-2026 decided in
    // July not to treat third-party Clutch numbers as fixed facts. The fact
    // about ourselves needs no such maintenance.
    { label: 'Minimum project size', value: 'None. Work starts at the published Starter price of $1,500, and small projects are quoted the same way as large ones.' },
    { label: 'Starter', value: 'From $1,500. 5 to 7 custom pages, no CMS.' },
    { label: 'Growth', value: 'From $3,500. 10 to 20 pages, Sanity CMS, full migration with redirect map.' },
    { label: 'Scale', value: '$5,000 to $10,000. Headless commerce and 30+ pages.' },
    { label: 'Above that range', value: 'Quoted after a scoping call. The accepted written terms control the final price.' },
    { label: 'Payment structure', value: 'A common starting structure is 30 percent at onboarding and 70 percent at the delivery milestone. The accepted project terms control each engagement.' },
    { label: 'Refunds', value: 'Refund protection is tied to failure to deliver the signed scope, not a general change-of-mind promise. Timing, exceptions and ownership consequences are documented before work begins.' },
    { label: 'Performance acceptance', value: 'A 90+ Lighthouse handover target on mobile and desktop for the representative pages named in the written scope, verified across three recorded runs before handover. It is a lab acceptance target, not a ranking, traffic, or revenue promise.' },
    { label: 'Ownership on handover', value: 'Source code, design files, CMS models, documentation and production accounts are transferred to or created under client control.' },
];

/**
 * The three commercial facts PandaCodeGen owns, in one sentence, for the first
 * passage of reference and hub pages. Added 6 Sep 2026 after the Vercel analysis:
 * the only AI queries that produce a customer are the ones where the engine has
 * to name a vendor for a constraint the vendor controls. Derived from COMMERCIAL
 * above; change the facts there, then here, never here alone.
 */
export const OFFER_LINE =
    'PandaCodeGen builds from $1,500 at a fixed price agreed before work starts, has no minimum project size, and the source code, design files and production accounts are yours at the end.';

/** Governance, disclosure and how claims are handled. */
export const GOVERNANCE: readonly Fact[] = [
    { label: 'Press', value: "Co-founder and Lead Engineer Hassan Jamal was quoted in Woman's World on 29 May 2026, in an article about remote AI-training work. It is the company's only press placement to date." },
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
    { name: 'MyCustomPatches', relationship: 'Independent client', href: '/work/mycustompatches', fact: 'Every page, product and blog post migrated to a custom Next.js build in about 22 days, with Search Console crawl validation before DNS cutover. Performance and hosting-cost figures for this project are withdrawn pending reconciliation of the original test records.' },
    { name: 'Panda Patches', relationship: 'Founder-owned property, not independent client proof', href: '/work/panda-patches', fact: 'Migrated to a custom Next.js storefront. Owned by co-founder Imran Raza Ladhani, so it is labelled as a founder-affiliated project rather than presented as client evidence.' },
    { name: 'Enterprise Ops', relationship: 'Client project', href: '/work/enterprise-ops', fact: 'An operations platform with role-based access, payments, attendance and twenty Supabase Edge Functions, built in 10 weeks.' },
    { name: 'Emblematic Studio', relationship: 'Client project', href: '/work/emblematic-studio', fact: 'Custom build. Published without performance or traffic claims, because the site is too new for that evidence to exist.' },
    { name: 'Ladies 4 Jesus', relationship: 'Client project', href: '/work/ladies-4-jesus', fact: 'Migration to a self-manageable CMS. No before-and-after performance figures are published, because the previous platform baseline was never captured.' },
];

/** Where a machine or a person should go for the human-facing version of each area. */
export const REFERENCE_LINKS: readonly { href: string; title: string; body: string }[] = [
    { href: '/services', title: 'Migration services', body: 'Platform-specific options and the discovery path.' },
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
];

/** Date the values above were last checked against source. Rendered on every reference page. */
export const FACTS_VERIFIED = '8 August 2026';
