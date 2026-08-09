// ─────────────────────────────────────────────────────────────────────────────
// HUBS: the cluster layer, rendered from the topical map
// ─────────────────────────────────────────────────────────────────────────────
// One hub per cluster that is NOT already owned by a /services page. Everything
// structural here is derived from `clusters` in topical-map.ts: membership,
// money page, adjacency. What is authored per hub is the part a generator
// cannot fake -- the intro prose, the query-language H1, and the metadata.
//
// Framework-pure, like topical-map.ts: no `server-only`, no import of
// `@/data/blog`. The blog module is server-only, so hubs are keyed by post id
// and callers resolve ids to post objects themselves.
//
// WHY THREE CLUSTERS HAVE NO HUB
//   `wix`, `woocommerce` and `gohighlevel` are marked serviceOwned in
//   topical-map.ts. A hub for them would compete with the /services page built
//   to win that same query. Their posts still get a parent and an UP-link; both
//   resolve to the service page. See `parentForPost`.
// ─────────────────────────────────────────────────────────────────────────────

import { clusters, type Cluster } from './topical-map';

export interface Hub {
    /** URL segment under /blog/topic/. Deliberately never equal to a /services slug. */
    slug: string;
    clusterId: string;
    /** Visible H1. Carries query language, not a house strapline. */
    h1: string;
    /** <title>. */
    title: string;
    /** Meta description. */
    description: string;
    /** Short label for breadcrumbs and blog cards. */
    shortLabel: string;
    /**
     * 150-300 words of authored prose, as paragraphs. Exactly one paragraph
     * contains the marker `[[money]]`, which the renderer replaces with a link
     * to `moneyAnchor`. Keeping the marker in the data means the prose and the
     * commercial link cannot drift apart in separate files.
     */
    intro: string[];
    /** Anchor text for the money-page link. Descriptive, never "learn more". */
    moneyAnchor: string;
}

/**
 * Authored hub content, keyed by cluster id. Structure comes from the cluster;
 * only the writing lives here.
 *
 * CLAIM SAFETY: no outcome promises, no unsourced statistics, no third-party
 * behaviour stated as something we control. Performance language is acceptance-
 * target phrasing, matching /pricing and the written project terms.
 */
const HUB_CONTENT: Record<string, Omit<Hub, 'clusterId'>> = {
    wordpress: {
        slug: 'wordpress',
        shortLabel: 'WordPress',
        h1: 'WordPress Migration Guides',
        title: 'WordPress Migration Guides: Moving Off WordPress to Custom Code',
        description:
            'Guides on migrating WordPress to a custom Next.js build: what it costs, how long it takes, what breaks, and how to decide whether the migration is worth doing at all.',
        moneyAnchor: 'our WordPress migration service',
        intro: [
            'WordPress runs a large share of the web, and most of the time it runs fine. The guides collected here are about the cases where it stopped running fine: a site carrying dozens of plugins nobody dares remove, a page builder that ships a heavy DOM before the first paragraph of text, a maintenance bill that grows every year while the site gets slower.',
            'The recurring question in this cluster is not "is WordPress bad". It is narrower and more useful: which specific costs are you carrying, and would rebuilding actually remove them. Some of them a migration removes outright, such as plugin update risk and page-builder markup. Others follow you regardless, such as content modelling and the work of writing. Several of these posts exist to talk people out of a migration they do not need, because the honest answer to "should I move off WordPress" is often no.',
            'Where a rebuild is the right call, the risk that matters most is search continuity, and that is a process problem rather than a technology one. URL inventory, redirect mapping, and post-launch monitoring are what keep a migration from costing traffic. No provider controls rankings, and any migration can be done badly.',
            'If you are weighing a specific site rather than the general question, [[money]] sets out the scope, the acceptance criteria, and what is excluded.',
        ],
    },

    shopify: {
        slug: 'shopify',
        shortLabel: 'Shopify',
        h1: 'Shopify Speed and Migration Guides',
        title: 'Shopify Speed and Migration Guides: Themes, Apps and Headless',
        description:
            'Guides on Shopify store performance: what the app stack actually costs, why themes get slow, when headless is justified, and when staying on a standard theme is the better decision.',
        moneyAnchor: 'our commerce engineering service',
        intro: [
            'Shopify handles the parts of commerce that are genuinely hard to build: checkout, payments, fraud, tax, compliance. The guides here are about the layer above that, which is where most store performance problems actually live.',
            'Two costs dominate this cluster. The first is the app stack, where a store accumulates a dozen subscriptions that each inject scripts into every page, and the monthly total is rarely written down anywhere. The second is the theme, where a design built for a demo catalogue meets a real one and starts losing to its own image handling. Both are measurable before anything is rebuilt, and several of these posts are about how to measure them properly rather than by feel.',
            'Headless comes up constantly and deserves a straight answer: it is a real option, it is not a default, and it moves work rather than removing it. A decoupled storefront gives you control over rendering and payload, and in exchange you own more of the frontend than a theme ever asked you to. That trade is worth making for some catalogues and not for others.',
            'For a store where the diagnosis is already done and the question is what a rebuild involves, [[money]] covers the scope and the handover terms.',
        ],
    },

    webflow: {
        slug: 'webflow',
        shortLabel: 'Webflow',
        h1: 'Webflow Migration Guides',
        title: 'Webflow Migration Guides: Costs, CMS Limits and Moving to Next.js',
        description:
            'Guides on leaving Webflow: the full cost of the plan stack, the CMS item ceiling, localisation pricing, and what a migration to a custom Next.js build involves.',
        moneyAnchor: 'our Webflow migration service',
        intro: [
            'Webflow is a strong design tool, and teams rarely leave it because they dislike building in it. They leave when they hit a boundary the plan cannot move: a CMS item ceiling, localisation priced as an add-on, a workflow that needs server-side logic the platform does not run.',
            'The guides here try to price that boundary honestly. The published plan figure is usually the smallest part of the real bill once you add the seats, the localisation tier, and whatever sits alongside Webflow to cover what it does not do. Several posts in this cluster exist to get that full number written down, because a migration decision made against the plan price alone is being made against the wrong number.',
            'The other recurring theme is what leaving actually involves. Webflow exports code, but an export is not a working application, and the CMS content, the redirects, and the form handling all need somewhere to land. Knowing that in advance is the difference between a planned migration and a stalled one.',
            'Platform pricing changes, so figures in these posts are dated and sourced, and the official pricing page is the authority on the day you read this. If you are costing a specific move, [[money]] sets out scope and exclusions.',
        ],
    },

    squarespace: {
        slug: 'squarespace',
        shortLabel: 'Squarespace',
        h1: 'Squarespace Migration Guides',
        title: 'Squarespace Migration Guides: SEO Limits, Speed and Moving Off',
        description:
            'Guides on Squarespace constraints: what you can and cannot control in markup and schema, why templates hit a ceiling, and what migrating to a custom build involves.',
        moneyAnchor: 'our Squarespace migration service',
        intro: [
            'Squarespace is built around a promise that the platform makes the technical decisions for you. That is genuinely useful until the day one of those decisions is the thing standing between you and something you need.',
            'The constraints that bring people to these guides are mostly about control rather than quality. Markup and structured data are largely the platform\'s to decide, code injection has boundaries, and template behaviour is not yours to override past a certain point. None of that makes a Squarespace site bad, and plenty of them perform well. It does mean that when a specific requirement lands outside what the platform exposes, there is often no configuration that reaches it.',
            'So the useful question in this cluster is not whether Squarespace is good for SEO in the abstract. It is whether the specific thing you need to change is something the platform lets you change. Several of these posts work through that check, because it usually resolves the decision faster than any general comparison does.',
            'For sites where the answer is that the requirement sits outside the platform, [[money]] describes what a rebuild covers and what is handed over at the end.',
        ],
    },

    custom: {
        slug: 'custom-development',
        shortLabel: 'Custom Development',
        h1: 'Custom Website Development Guides',
        title: 'Custom Website Development Guides: Scope, Timelines and Ownership',
        description:
            'Guides on commissioning custom web development: what a given budget includes, how long a build takes, what build-versus-buy actually compares, and who owns the result.',
        moneyAnchor: 'our custom engineering service',
        intro: [
            'Custom development is bought less often than templated platforms, so buyers usually have less to compare against and fewer reference points for whether a quote is reasonable. The guides here are mostly about that gap.',
            'The questions that repeat are practical. What does a given budget actually include once you subtract discovery, content, and revisions. How long does a build take, and which parts of that timeline depend on you rather than the developer. What does build-versus-buy compare when the subscription is cheap now and the switching cost arrives later. Who owns the code, the design files, and the production accounts when the project ends.',
            'That last one is worth stating plainly because it is the easiest to leave unasked and the most expensive to get wrong. Ownership should be written into the terms, not inferred from goodwill, and it should cover source code, design files, content models, and the accounts the site runs on.',
            'These posts describe how we scope and hand over work, which is one approach rather than the only one. The written project terms are what govern any specific engagement; website copy is not the agreement. If you are scoping a build now, [[money]] sets out the stack, the acceptance criteria, and what is excluded.',
        ],
    },

    agency: {
        slug: 'agencies',
        shortLabel: 'For Agencies',
        h1: 'White-Label Web Development Guides for Agencies',
        title: 'White-Label Web Development Guides for Agencies and Studios',
        description:
            'Guides for agencies subcontracting web development: how white-label engagements are structured, how to evaluate a development partner, and what cheap development actually costs.',
        moneyAnchor: 'our agency partnership terms',
        intro: [
            'Agencies that sell design, brand, or marketing regularly need custom development they do not staff for, and the usual options are hiring, refusing the work, or subcontracting it. The guides here are about the third one.',
            'Most of what goes wrong in a subcontracted build is not technical. It is unclear ownership of the client relationship, a scope that was agreed in a call and never written down, and no agreement about who answers the phone when something breaks after launch. Those are contract problems, and they are cheaper to fix before a project than during one.',
            'This cluster also covers evaluating a development partner, which is harder than evaluating a designer because the work is less visible from the outside. A portfolio shows what shipped; it does not show what the handover looked like, whether the code was documented, or whether the client could take it elsewhere afterwards. The posts here suggest what to ask instead.',
            'The counterpart to that is the guide on cheap development, which is about the same question from the other end: what gets removed to reach a low price, and which of those removals you will end up paying for later.',
            'If you are considering subcontracting a specific project, [[money]] covers how we work under an agency\'s brand and where the boundaries sit.',
        ],
    },

    performance: {
        slug: 'website-speed',
        shortLabel: 'Speed & Core Web Vitals',
        h1: 'Website Speed and Core Web Vitals Guides',
        title: 'Website Speed and Core Web Vitals Guides: Diagnosis and Fixes',
        description:
            'Guides on diagnosing a slow website: reading lab and field data correctly, finding which layer is actually slow, and choosing fixes that hold up on a real page.',
        moneyAnchor: 'a free performance audit of your own site',
        intro: [
            'Almost every performance problem gets diagnosed before it gets measured, which is why so many of them get fixed in the wrong place. The guides in this cluster are ordered around measuring first.',
            'The distinction that resolves the most confusion is lab versus field. A Lighthouse run is a single test on simulated hardware, and it is repeatable and useful for comparing changes. Field data comes from real visitors on real devices and networks, and it is what Core Web Vitals reports. The two disagree routinely, and neither is wrong when that happens; they are measuring different things. Reading a score without knowing which one you are looking at is how teams end up optimising something their visitors never experience.',
            'From there the guides work through the layers where time actually goes: images and media, fonts, third-party scripts, render-blocking work, and the data fetching behind the page. Most sites are slow in one or two of these, not all of them, which is why the diagnosis is worth the hour it takes.',
            'A note on scores. Our own commercial terms use a 90+ Lighthouse acceptance target on named pages, verified across recorded runs before handover. That is a lab acceptance criterion, not a promise about rankings, traffic, or field metrics after later changes.',
            'To see where a specific site is losing time rather than reading about it generally, start with [[money]].',
        ],
    },

    pricing: {
        slug: 'website-cost',
        shortLabel: 'Cost & SaaS Spend',
        h1: 'Website Cost and SaaS Spend Guides',
        title: 'Website Cost and SaaS Spend Guides: What Builds and Software Cost',
        description:
            'Guides on what websites and software actually cost: build and redesign pricing, three-year operating cost, SaaS price increases, and how to audit a subscription stack.',
        moneyAnchor: 'our published pricing tiers',
        intro: [
            'Web development pricing is opaque in both directions. Buyers cannot tell whether a quote is high, and the same brief genuinely does produce very different numbers depending on what is included. The guides here try to make the components visible enough to compare.',
            'The other half of this cluster is the bill you already have. Subscription costs are easy to approve individually and hard to see in total, and the total is what a build-versus-buy comparison should be measured against. A tool at forty dollars a month is a small decision; the same tool over three years, with its seat growth and its price increases, is a different one. Several posts here are about getting that number written down before anything is compared to it.',
            'SaaS pricing moves, and it has moved a lot recently, so figures in these posts are dated and linked to their sources. Treat any price you read here as accurate on its stated date and check the vendor\'s current page before acting on it.',
            'None of this argues that custom is always cheaper. It frequently is not, especially at small scale, and the guides say so. What it argues is that the comparison should use the whole operating cost on both sides rather than the sticker price on one.',
            'Our own numbers are not hidden: [[money]] lists the tiers and what each one includes.',
        ],
    },

    migration: {
        slug: 'website-migration',
        shortLabel: 'Migration',
        h1: 'Website Migration Guides',
        title: 'Website Migration Guides: Cost, SEO Risk and Platform Moves',
        description:
            'Cross-platform website migration guides: what a migration costs across seven platforms, how to protect search visibility, and what has to be inventoried before cutover.',
        moneyAnchor: 'our migration service',
        intro: [
            'This cluster covers the parts of a migration that are the same regardless of which platform you are leaving. The platform-specific guides live in their own hubs; what follows applies to all of them.',
            'The fear that stops most migrations is losing search visibility, and it is a reasonable fear, because it happens. It happens for identifiable reasons though, and nearly all of them are process failures rather than technology ones: URLs that changed without redirects, content that was quietly dropped during the rebuild, metadata that was never carried across, a cutover nobody monitored afterwards. Each of those is preventable with an inventory taken before the work starts.',
            'So the guides here are organised around that inventory. Every URL that currently exists and receives traffic. Every redirect the old site already serves, because chained and broken ones are inherited. Content, metadata, and structured data as they stand today. What integrations write to the site and what reads from it.',
            'Being straightforward about the limits: careful process reduces avoidable risk and does not guarantee an outcome. Search results are controlled by search engines, rankings move for reasons unrelated to any migration, and any provider claiming otherwise is describing something they do not control.',
            'For a specific site, [[money]] covers how the inventory, cutover, and post-launch monitoring are scoped.',
        ],
    },

    'seo-aeo': {
        slug: 'seo-and-ai-search',
        shortLabel: 'SEO & AI Search',
        h1: 'SEO and AI Search Guides',
        title: 'SEO and AI Search Guides: Answer Engines, Schema and Indexing',
        description:
            'Guides on search and AI answer engines: what structured data and llms.txt do and do not do, why competitors outrank you, and why a site may not be indexed at all.',
        moneyAnchor: 'our editorial and evidence policy',
        intro: [
            'AI search generated a large amount of advice very quickly, and a lot of it was published before anyone could test it. The guides in this cluster try to separate the parts that are documented by the platforms from the parts that are inference.',
            'What is documented is narrower than the advice suggests. Structured data can make a page eligible for certain result types; eligibility is not selection, and Google removes support for result types periodically. llms.txt is read by some AI systems and explicitly not used by Google, which makes it cheap to publish and dishonest to sell as a lever. Content in server-rendered HTML is more reliably available to crawlers than content assembled by client-side JavaScript, and that has been true for a long time.',
            'What is not documented is why any specific answer cited any specific source, and no one outside those systems can tell you. Anything written with confidence about citation mechanics, including anything here, is a description of observed patterns rather than of the rules.',
            'The practical throughline is that content which answers a question directly, in HTML, with something in it the other sources do not have, is the part that survives every change to how results are assembled. The rest is hygiene worth doing and not worth overclaiming.',
            'How we source, date, and correct what we publish is written up in [[money]].',
        ],
    },

    'ecommerce-strategy': {
        slug: 'ecommerce',
        shortLabel: 'Ecommerce & Tracking',
        h1: 'Ecommerce Strategy and Ad Tracking Guides',
        title: 'Ecommerce Strategy and Ad Tracking Guides: Headless, Speed, Attribution',
        description:
            'Guides on ecommerce architecture and measurement: what headless commerce is, how storefront speed relates to conversion, and why ad platforms and analytics disagree.',
        moneyAnchor: 'our commerce engineering service',
        intro: [
            'This hub covers two things that are usually treated as separate departments and are almost always the same person\'s problem: how the storefront is built, and whether you can trust what it reports.',
            'On architecture, the recurring question is headless, which gets discussed as a tier rather than a trade. Decoupling the storefront from the commerce backend gives you control over rendering, payload, and integration; it also gives you a frontend to maintain that a hosted theme was maintaining for you. Worth it for some catalogues, clearly not for others, and the guides here try to say which is which rather than recommending it generally.',
            'On measurement, the problem most stores actually have is that the ad platform, the analytics tool, and the actual order count all disagree, and the gaps widened as browser tracking restrictions tightened. Server-side event forwarding is the usual response, and the guides cover what it involves and what it costs to set up. It is worth being clear that it changes how events are collected and attributed, which is not the same as changing how many orders happen.',
            'The link between the two halves is that both are measurement problems before they are engineering problems. Use your own baseline; published conversion statistics were measured on someone else\'s traffic and cannot tell you what yours is doing.',
            'For a store where the architecture decision is already made, [[money]] covers the build scope.',
        ],
    },
};

/**
 * When a post belongs to more than one hub cluster, this order decides its
 * canonical parent: earlier wins. Platform clusters outrank cross-cutting
 * concept clusters, because "the Shopify one" is how readers and search
 * queries actually name those posts.
 */
const HUB_PRIORITY: string[] = [
    'wordpress', 'shopify', 'webflow', 'squarespace',
    'custom', 'agency', 'migration', 'pricing',
    'ecommerce-strategy', 'performance', 'seo-aeo',
];

/**
 * Posts where the priority order picks the wrong parent, with the reason.
 * Kept explicit rather than encoded as more priority rules, because three
 * exceptions are easier to audit than a rule that produces them.
 */
const PRIMARY_HUB_OVERRIDE: Record<string, string> = {
    // A glossary of AI-search vocabulary that happens to include perf terms.
    'aeo-web-performance-glossary': 'seo-aeo',
    // An indexing problem, not a migration one. The site was never migrated.
    'lovable-site-not-showing-on-google': 'seo-aeo',
    // Ad tracking moved into ecommerce-strategy with the tracking-ads merge.
    'meta-conversions-api-setup-cost': 'ecommerce-strategy',
};

/** Every generated hub, in HUB_PRIORITY order. */
export const hubs: Hub[] = HUB_PRIORITY.map((clusterId) => {
    const content = HUB_CONTENT[clusterId];
    if (!content) {
        throw new Error(
            `hubs.ts: cluster "${clusterId}" is in HUB_PRIORITY but has no HUB_CONTENT entry. ` +
            `Every hub needs authored prose; a generated hub with template filler is worse than no hub.`
        );
    }
    return { ...content, clusterId };
});

/**
 * Build-time consistency check. Runs on import, so a taxonomy edit that leaves
 * a cluster without a hub, or a hub without a cluster, fails the build rather
 * than shipping a 404 in a breadcrumb.
 */
(function assertTaxonomyMatchesHubs() {
    const hubbable = clusters.filter((c) => !c.serviceOwned).map((c) => c.id);
    const declared = new Set(HUB_PRIORITY);

    const missing = hubbable.filter((id) => !declared.has(id));
    if (missing.length) {
        throw new Error(
            `hubs.ts: cluster(s) [${missing.join(', ')}] are not serviceOwned and have no hub. ` +
            `Either add HUB_CONTENT and a HUB_PRIORITY entry, or mark them serviceOwned in topical-map.ts.`
        );
    }

    const orphans = HUB_PRIORITY.filter((id) => !clusters.some((c) => c.id === id));
    if (orphans.length) {
        throw new Error(`hubs.ts: hub(s) [${orphans.join(', ')}] reference clusters that no longer exist.`);
    }

    for (const hub of hubs) {
        const cluster = clusters.find((c) => c.id === hub.clusterId)!;
        if (!cluster.pillarHref) {
            throw new Error(
                `hubs.ts: hub "${hub.slug}" has no money page. Its cluster "${cluster.id}" has no pillarHref. ` +
                `A hub with nothing to point at is a dead end.`
            );
        }
        if (!hub.intro.some((p) => p.includes('[[money]]'))) {
            throw new Error(
                `hubs.ts: hub "${hub.slug}" intro never links its money page. Put [[money]] in one paragraph.`
            );
        }
    }
})();

export function hubBySlug(slug: string): Hub | undefined {
    return hubs.find((h) => h.slug === slug);
}

export function clusterForHub(hub: Hub): Cluster {
    return clusters.find((c) => c.id === hub.clusterId)!;
}

/** The money page a hub points at, resolved from its cluster. */
export function moneyHref(hub: Hub): string {
    return clusterForHub(hub).pillarHref!;
}

/** Post ids belonging to a hub, in the cluster's declared order. */
export function hubPostIds(hub: Hub): string[] {
    return clusterForHub(hub).postIds;
}

/**
 * The single canonical hub for a post, or null when the post lives only in
 * service-owned clusters. Deterministic: override first, then HUB_PRIORITY.
 */
export function hubForPost(postId: string): Hub | null {
    const override = PRIMARY_HUB_OVERRIDE[postId];
    if (override) return hubs.find((h) => h.clusterId === override) ?? null;
    return hubs.find((h) => clusterForHub(h).postIds.includes(postId)) ?? null;
}

export interface Crumb {
    label: string;
    href?: string;
}

/**
 * The breadcrumb parent for a post: its hub, or for a service-owned cluster,
 * the service page that owns the intent.
 *
 * A service page as a blog post's breadcrumb parent is deliberate. Breadcrumbs
 * describe topical position, not URL nesting, and the seven posts in
 * service-owned clusters have a real parent -- it just is not under /blog.
 * The alternative was a shorter trail on those seven and a longer one on the
 * other seventy, which is a worse thing to explain to a crawler.
 */
export function parentForPost(postId: string): Crumb {
    const hub = hubForPost(postId);
    if (hub) return { label: hub.shortLabel, href: `/blog/topic/${hub.slug}` };

    const owned = clusters.find((c) => c.serviceOwned && c.postIds.includes(postId));
    if (owned?.pillarHref) return { label: owned.label, href: owned.pillarHref };

    throw new Error(
        `hubs.ts: post "${postId}" has no hub and no service-owned cluster. ` +
        `Add it to a cluster in topical-map.ts -- every post needs a parent.`
    );
}

/** Full breadcrumb trail for a post. `leaf` is the short display title. */
export function postCrumbs(postId: string, leaf: string): Crumb[] {
    return [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        parentForPost(postId),
        { label: leaf },
    ];
}

/** Full breadcrumb trail for a hub page. */
export function hubCrumbs(hub: Hub): Crumb[] {
    return [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: hub.shortLabel },
    ];
}
