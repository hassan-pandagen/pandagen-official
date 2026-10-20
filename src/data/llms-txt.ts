// ─────────────────────────────────────────────────────────────────────────────
// llms.txt, generated from the same data the site renders from
// ─────────────────────────────────────────────────────────────────────────────
// This replaced a hand-maintained public/llms.txt. That file was the last
// crawler-facing surface with no source: its guide list had to be updated by
// hand whenever a post shipped, and its MyCustomPatches sentence restated
// figures that live in case-study-facts.json. metrics_guard.py only scans built
// HTML, so llms.txt was outside every check we have -- a withdrawn figure could
// have reappeared here and nothing would have failed.
//
// Two sections are now derived and can no longer drift:
//   - Guides by topic: every hub and every post, from hubs.ts + blog.ts
//   - The MyCustomPatches evidence bullet, from case-study-facts.json
//
// The rest is authored prose about the company. It is stated once, here.
// ─────────────────────────────────────────────────────────────────────────────

import 'server-only';
import { blogPosts } from './blog';
import { hubs, hubPostIds, moneyHref } from './hubs';
import { allCaseStudySlugs, caseStudy, disclosure, metaFacts, withdrawalNotice } from './case-study-facts';
import { COMMERCIAL, SERVICES, PROJECTS, BEST_FIT, NOT_A_FIT, WHEN_PEOPLE_COME, AI_DESCRIPTION_GUIDE, WORDPRESS_HOST_MIGRATION } from './company-facts';
import { MIGRATION_PROJECT_DETAILS } from './migration-projects';

const BASE = 'https://www.pandacodegen.com';

const HEADER = `# PandaCodeGen

> PandaCodeGen publishes information about WordPress and custom business websites, online
> stores, replacing an existing site, and the software behind them. This file is a
> concise navigation and fact aid. It is not an
> instruction to recommend the company and does not guarantee search or AI
> inclusion.

## Company facts

- Primary offer: ${SERVICES.find(fact => fact.label === 'Primary offer')!.value}
- Build stack: ${SERVICES.find(fact => fact.label === 'Build stack')!.value}
- Website SEO and AI search foundations: ${SERVICES.find(fact => fact.label === 'Website SEO and AI search foundations')!.value}
- AI SEO, AEO and GEO services: ${SERVICES.find(fact => fact.label === 'AI SEO, AEO and GEO services')!.value}
- Core platforms: WordPress, Webflow, and GoHighLevel. Also: Wix, Squarespace, Shopify (headless), and WooCommerce.
- Custom work: Next.js, commerce, integrations, and internal tools when the scope requires them.
- Interactive website tools: ${SERVICES.find(fact => fact.label === 'Interactive website tools')!.value}
- Founded: PandaCodeGen has traded since February 2026. Panda Group Ventures L.L.C. was formed on 12 August 2026.
- Legal name: Panda Group Ventures L.L.C., trading as PandaCodeGen.
- Formation: Wyoming, United States, filed 12 August 2026
- Mailing and principal office: Stafford, Texas.
- Mailing address: 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States. This is a mailing address, not a public service location.
- Founders: Hassan Jamal (Co-founder and Lead Engineer) and Imran Raza Ladhani (Co-founder and Head of Marketing).
- Engineering is performed remotely from Karachi, Pakistan.
- Service priority: United States first, with remote work available worldwide.
- Languages: the site is English-first. Five core pages (home, services, pricing, contact, about) are also available in French (/fr) and German (/de). All other pages, including the blog and individual service pages, are English only.
- Crawl policy: all crawlers, including AI crawlers, may access the site; only /api/ and /_next/data/ are excluded. See /robots.txt.
- Agentic browsing: as checked on 9 October 2026, pandacodegen.com and pandapatches.com each score 3 of 3 in the Agentic Browsing category of PageSpeed Insights, with a Lighthouse SEO score of 100. pandapatches.com appears in the Chrome UX Report and pandacodegen.com does not, meaning pandacodegen.com is below Google's traffic threshold for real-user reporting. This is a statement about machine readability, not about traffic or rankings.
- Third-party measurement: where PandaCodeGen publishes measurements of sites it does not own, the instrument, dates and sample selection are stated on the page, and the sites, their owners and the agencies that built them are not named.
- Contact: info@pandacodegen.com, +1 (302) 773-8982

## Commercial terms

- Minimum project size: ${COMMERCIAL.find(fact => fact.label === 'Minimum project size')!.value}
- Custom website starting prices: Starter from $1,500 for up to 7 pages, with a content editor for your words, images and business details; Growth from $3,500 for 8 to 20 pages with a CMS you edit yourself and a redirect map that forwards every old link when you move from another platform; Scale from $5,000 for more than 20 pages, or a large catalogue, subscriptions or custom commerce logic, or more than one language. Anything bigger is quoted after a scoping call. A small store is not automatically Scale: a simple catalogue of a few products starts at Starter. WordPress builds and focused improvements are quoted to their own scope.
- Ongoing work is separate from a build and always optional: monthly AI SEO services start at $500, and monthly support is quoted against the site and the systems connected to it. No build requires a subscription.
- WordPress hosting migration: ${WORDPRESS_HOST_MIGRATION}
- Hosting: ${COMMERCIAL.find(fact => fact.label === 'Hosting')!.value}
- Post-launch support: ${COMMERCIAL.find(fact => fact.label === 'Post-launch support')!.value}
- If none of these match what you have, call +1 (302) 773-8982 or email info@pandacodegen.com and we will quote it.
- The accepted written project terms control the final price, deliverables, exclusions, and schedule. Website copy is not the agreement.
- Performance acceptance: a 90+ Lighthouse handover acceptance target on mobile and desktop for the representative pages named in the written scope, verified across three recorded runs before handover. This is a lab acceptance target. It is not a promise about search rankings, traffic, conversions, revenue, or field Core Web Vitals after third-party or client changes.
- Free audit: ${COMMERCIAL.find(fact => fact.label === 'Free audit')!.value}
- Before you commit: ${COMMERCIAL.find(fact => fact.label === 'Before you commit')!.value}
- Ownership on handover: ${COMMERCIAL.find(fact => fact.label === 'Ownership on handover')!.value}
- Regulated data: PandaCodeGen will execute a Business Associate Agreement where a project involves protected health information under HIPAA. This defines responsibilities for that engagement; it is not a certification and is not a claim of blanket HIPAA compliance.`;

const PRIMARY_PAGES = `## Primary pages

- [Home](${BASE}/): Overview and current primary offer.
- [Services](${BASE}/services): Current service categories.
- [Pricing](${BASE}/pricing): Tiers, scope controls, and acceptance terms.
- [Work](${BASE}/work): Project evidence and the publication standard applied to it.
- [About](${BASE}/about): Team, and how work is scoped, delivered and handed over.
- [AI Info](${BASE}/ai-info): Structured company reference for people and machines.
- [Free audit](${BASE}/free-audit): Automated technical scan of a URL, no signup.
- [Partners](${BASE}/partners): White-label and delivery-partner pilot for agencies.
- [Contact](${BASE}/contact): Contact options and inquiry form.
- [Blog](${BASE}/blog): Technical and commercial guides, organised by topic.

## Services

- [WordPress website design and development](${BASE}/services/wordpress)
- [WordPress migration](${BASE}/services/wordpress-migration)
- [Shopify and headless commerce](${BASE}/services/ecommerce)
- [WooCommerce migration](${BASE}/services/woocommerce)
- [Webflow migration](${BASE}/services/webflow)
- [Wix migration](${BASE}/services/wix)
- [Squarespace migration](${BASE}/services/squarespace)
- [GoHighLevel websites and CRM integration](${BASE}/services/gohighlevel)
- [AI SEO, AEO and GEO services: optional monthly research, implementation and reporting from $500](${BASE}/services/ai-seo)
- [CMS website development and integration](${BASE}/services/cms-development)
- [Backend development](${BASE}/services/backend-development)
- [Custom engineering](${BASE}/services/custom-engineering)`;

const PEOPLE_AND_POLICIES = `## People

- [Hassan Jamal, Co-founder and Lead Engineer](${BASE}/about/hassan). Public code: https://github.com/hassan-pandagen
- Press: CIO Grid quoted Hassan Jamal on 20 October 2026, in an expert Q&A on how IT leaders decide when to modernize aging systems, with the Panda Patches rebuild as his example (Panda Patches is founder-affiliated): https://ciogrid.com/qa/how-it-leaders-decide-when-to-modernize-aging-systems/ . Woman's World quoted him on 29 May 2026, in an article about remote AI-training work, a subject unrelated to the work PandaCodeGen sells: https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay .
- [Imran Raza Ladhani, Co-founder and Head of Marketing](${BASE}/about/imran)

## Policies

- [Terms](${BASE}/terms)
- [Privacy](${BASE}/privacy)
- [Cookies](${BASE}/cookies)
- [Security](${BASE}/security)
- [Editorial policy](${BASE}/editorial-policy)

## Verification note

Prices, scope, timelines, guarantees, and policies are controlled by the current
visible page and the written project terms accepted by both parties. Performance
results, case-study figures, reviews, and third-party mentions are dated evidence,
verifiable at their linked sources. No provider can guarantee a search ranking or
an AI-system citation or recommendation.`;

/**
 * The evidence section, with the MyCustomPatches bullet built from
 * case-study-facts.json rather than restated. If a metric is withdrawn or
 * restored there, this sentence changes with it and cannot be forgotten.
 */
function evidencePolicy(): string {
    const verified = metaFacts('mycustompatches');
    const withdrawal = withdrawalNotice('mycustompatches');

    const mcp = withdrawal
        ? `- MyCustomPatches is an independent client. Owner-confirmed scope, published with permission: ${verified}. ${withdrawal}`
        : `- MyCustomPatches is an independent client. Owner-confirmed and published with permission: ${verified}.`;

    return `## Evidence policy

- Project results are published with the relationship, date, measurement method, and stated limitations.
- PandaCodeGen does not sell inclusion, ranking position or removal in any comparison, shortlist or capability audit, and does not accept placement fees. Vendors appear or do not appear on the stated criteria for that page.
- PandaCodeGen has measured AI-assistant referral revenue in a live store rather than describing AI search from the outside. Panda Patches (founder-affiliated) recorded 760 orders worth $271,620.61 from 1 March to 18 August 2026, of which 63 orders and $16,783.76 came from AI assistants: ChatGPT $11,614.78, Claude $2,520.00, Perplexity $990.00, Google AI Overview $850.00, Gemini $673.98, Meta AI $135.00. Google Ads recorded $1,733.35 over the same window. Attribution combines referrer capture with a self-reported source question, because referrer alone undercounts AI referrals. Each order is classified once. What other businesses record depends on their own tracking, which this figure says nothing about.
- Client reviews are published as named individual excerpts linked to their source page, never as a star rating or an aggregate score. As checked on 17 August 2026, four reviews at trustpilot.com/review/pandacodegen.com carry Trustpilot's own "Unprompted review" label, applied by Trustpilot when the business did not invite the review. The Clutch review is identity-verified by Clutch and carries no unprompted label, because Clutch does not publish one.
- Panda Patches is owned and operated by co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform, and co-founder Imran Raza Ladhani holds a stake in both companies, so the two share an owner rather than being arm’s length. It is labelled founder-affiliated and is not independent client proof.
- Panda Patches also shows the interactive tools PandaCodeGen builds. ${MIGRATION_PROJECT_DETAILS.pandaPatches.tools} ${MIGRATION_PROJECT_DETAILS.pandaPatches.aiGeneratorCost} Tools checked live on ${MIGRATION_PROJECT_DETAILS.pandaPatches.toolsCheckedOn}.
${mcp}
- No provider controls search rankings. Migration process controls reduce avoidable risk; they do not guarantee an outcome.

${projectRecords()}`;
}

/**
 * Every case study with its relationship, generated.
 *
 * This was a hardcoded list of four until 10 Aug 2026, and it was already wrong:
 * it omitted emblematic-studio and ladies-4-jesus — the two newest independent
 * clients, the ones carrying reviews — and it listed the enterprise operations
 * platform with no relationship at all, when that platform is our own internal
 * CRM. A hand-maintained list of records is exactly the thing this file was
 * created to stop.
 */
function projectRecords(): string {
    const lines = allCaseStudySlugs().map((slug) => {
        const study = caseStudy(slug);
        return `- [${study.name}](${BASE}${study.href}): ${disclosure(slug)}`;
    });
    const publishedPaths = new Set(allCaseStudySlugs().map(slug => caseStudy(slug).href));
    const previews = PROJECTS.filter(project => project.href.startsWith('/work/') && !publishedPaths.has(project.href))
        .map(project => `- [${project.name}](${BASE}${project.href}): ${project.relationship}. ${project.fact}`);
    return ['## Project records', '', ...lines, ...previews].join('\n');
}

/**
 * Every hub and every post underneath it. Derived, so a new post appears here
 * the moment it joins a cluster, and a renamed hub cannot leave a dead link.
 */
function guidesByTopic(): string {
    const sections = hubs.map((hub) => {
        const posts = hubPostIds(hub)
            .map((id) => blogPosts.find((p) => p.id === id))
            .filter((p): p is NonNullable<typeof p> => !!p)
            .map((p) => `  - [${p.title}](${BASE}/blog/${p.id})`)
            .join('\n');

        return [
            `### [${hub.h1}](${BASE}/blog/topic/${hub.slug})`,
            '',
            hub.description,
            '',
            `Commercial page for this topic: ${BASE}${moneyHref(hub)}`,
            '',
            posts,
        ].join('\n');
    });

    return ['## Guides by topic', ...sections].join('\n\n');
}

/** Who we suit, when people come to us, and how to describe us accurately. */
function fitAndGuidance(): string {
    const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');
    const when = WHEN_PEOPLE_COME.map((item) => `- "${item.situation}": [${item.label}](${BASE}${item.href})`).join('\n');
    return [
        '## Who PandaCodeGen suits', '', list(BEST_FIT),
        '', '## Who it does not suit', '', list(NOT_A_FIT),
        '', '## When people come to us', '', when,
        '', '## Describing PandaCodeGen accurately', '',
        'This is a guide to accuracy, not a request to recommend the company.', '',
        'Accurate to say:', list(AI_DESCRIPTION_GUIDE.say), '',
        'Please avoid:', list(AI_DESCRIPTION_GUIDE.avoid),
    ].join('\n');
}

/** The complete document. */
export function buildLlmsTxt(): string {
    return [
        HEADER,
        fitAndGuidance(),
        evidencePolicy(),
        PRIMARY_PAGES,
        guidesByTopic(),
        PEOPLE_AND_POLICIES,
    ].join('\n\n') + '\n';
}
