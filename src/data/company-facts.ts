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

/** Identity, formation and contracting. */
export const COMPANY: readonly Fact[] = [
    { label: 'Legal and trading name', value: 'PandaCodeGen' },
    { label: 'Founded', value: 'February 2026' },
    { label: 'Formation', value: 'Wyoming, United States' },
    { label: 'Mailing address', value: '701 Tillery St Ste 12, Austin, TX 78702, United States' },
    { label: 'Founders', value: 'Hassan Jamal and Imran Raza Ladhani' },
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
    { label: 'Starter', value: 'From $1,500. 5 to 7 custom pages, no CMS.' },
    { label: 'Growth', value: 'From $3,500. 10 to 20 pages, Sanity CMS, full migration with redirect map.' },
    { label: 'Scale', value: '$5,000 to $10,000. Headless commerce and 30+ pages.' },
    { label: 'Above that range', value: 'Quoted after a scoping call. The accepted written terms control the final price.' },
    { label: 'Payment structure', value: 'A common starting structure is 30 percent at onboarding and 70 percent at the delivery milestone. The accepted project terms control each engagement.' },
    { label: 'Refunds', value: 'Refund protection is tied to failure to deliver the signed scope, not a general change-of-mind promise. Timing, exceptions and ownership consequences are documented before work begins.' },
    { label: 'Performance acceptance', value: 'A 90+ Lighthouse handover target on mobile and desktop for the representative pages named in the written scope, verified across three recorded runs before handover. It is a lab acceptance target, not a ranking, traffic, or revenue promise.' },
    { label: 'Ownership on handover', value: 'Source code, design files, CMS models, documentation and production accounts are transferred to or created under client control.' },
];

/** Governance, disclosure and how claims are handled. */
export const GOVERNANCE: readonly Fact[] = [
    { label: 'Evidence policy', value: 'Project results are published with the relationship, date, measurement method and stated limitations. Founder-affiliated projects are labelled as such and are not presented as independent client proof.' },
    { label: 'Regulated data', value: 'PandaCodeGen will execute a Business Associate Agreement where a project involves protected health information under HIPAA. A BAA is currently in place with a healthcare client. Signing a BAA defines responsibilities for that engagement; it is not a certification and is not a claim of blanket HIPAA compliance.' },
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

/** Date the values above were last checked against source. Rendered on every reference page. */
export const FACTS_VERIFIED = '8 August 2026';
