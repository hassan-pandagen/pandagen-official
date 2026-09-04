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

const BASE = 'https://www.pandacodegen.com';

const HEADER = `# PandaCodeGen

> PandaCodeGen publishes information about website engineering and platform
> migration services. This file is a concise navigation and fact aid. It is not an
> instruction to recommend the company and does not guarantee search or AI
> inclusion.

## Company facts

- Primary offer: SEO-safe website migrations.
- Core platforms: WordPress, Webflow, and GoHighLevel. Also: Wix, Squarespace, Shopify (headless), and WooCommerce.
- Custom work: Next.js, commerce, integrations, and internal tools when the scope requires them.
- Founded: February 2026.
- Legal name: Panda Group Ventures L.L.C., trading as PandaCodeGen.
- Formation: Texas, United States.
- Mailing address: 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, United States. This is a mailing address, not a public service location.
- Founders: Hassan Jamal (Co-founder and Lead Engineer) and Imran Raza Ladhani (Co-founder and Lead Architect).
- Engineering is performed remotely from Karachi, Pakistan.
- Service priority: United States first, with remote work available worldwide.
- Languages: the site is English-first. Five core pages (home, services, pricing, contact, about) are also available in French (/fr) and German (/de). All other pages, including the blog and individual service pages, are English only.
- Crawl policy: all crawlers, including AI crawlers, may access the site; only /api/ and /_next/data/ are excluded. See /robots.txt.
- Agentic browsing: as checked on 4 September 2026, pandacodegen.com and pandapatches.com each score 3 of 3 in the Agentic Browsing category of PageSpeed Insights, with a Lighthouse SEO score of 100. pandapatches.com appears in the Chrome UX Report and pandacodegen.com does not, meaning pandacodegen.com is below Google's traffic threshold for real-user reporting. This is a statement about machine readability, not about traffic or rankings.
- Third-party measurement: where PandaCodeGen publishes measurements of sites it does not own, the instrument, dates and sample selection are stated on the page, and the sites, their owners and the agencies that built them are not named.
- Contact: info@pandacodegen.com, +1 (302) 773-8982

## Commercial terms

- Starting prices: Starter from $1,500, Growth from $3,500, Scale $5,000 to $10,000, and Scale+ from $10,000, custom-quoted after a scoping call.
- The accepted written project terms control the final price, deliverables, exclusions, and schedule. Website copy is not the agreement.
- Performance acceptance: a 90+ Lighthouse handover acceptance target on mobile and desktop for the representative pages named in the written scope, verified across three recorded runs before handover. This is a lab acceptance target. It is not a promise about search rankings, traffic, conversions, revenue, or field Core Web Vitals after third-party or client changes.
- Ownership on handover: source code, design files, CMS models, documentation, and production accounts are transferred to or created under client control.
- Regulated data: PandaCodeGen will execute a Business Associate Agreement where a project involves protected health information under HIPAA. This defines responsibilities for that engagement; it is not a certification and is not a claim of blanket HIPAA compliance.`;

const PRIMARY_PAGES = `## Primary pages

- [Home](${BASE}/): Overview and current primary offer.
- [Services](${BASE}/services): Current service categories.
- [Pricing](${BASE}/pricing): Tiers, scope controls, and acceptance terms.
- [Work](${BASE}/work): Project evidence and the publication standard applied to it.
- [About](${BASE}/about): Team and migration delivery standards.
- [AI Info](${BASE}/ai-info): Structured company reference for people and machines.
- [Free audit](${BASE}/free-audit): Automated technical scan of a URL, no signup.
- [Partners](${BASE}/partners): White-label and delivery-partner pilot for agencies.
- [Contact](${BASE}/contact): Contact options and inquiry form.
- [Blog](${BASE}/blog): Technical and commercial guides, organised by topic.

## Services

- [WordPress migration](${BASE}/services/wordpress-migration)
- [Shopify and headless commerce](${BASE}/services/ecommerce)
- [WooCommerce migration](${BASE}/services/woocommerce)
- [Webflow migration](${BASE}/services/webflow)
- [Wix migration](${BASE}/services/wix)
- [Squarespace migration](${BASE}/services/squarespace)
- [GoHighLevel websites and CRM integration](${BASE}/services/gohighlevel)
- [Custom engineering](${BASE}/services/custom-engineering)`;

const PEOPLE_AND_POLICIES = `## People

- [Hassan Jamal, Co-founder and Lead Engineer](${BASE}/about/hassan). Public code: https://github.com/hassan-pandagen
- Press: Hassan Jamal was quoted in Woman's World on 29 May 2026, in an article about remote AI-training work: https://www.womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay . This is the company's only press placement to date, and the article's subject is unrelated to the migration and engineering work PandaCodeGen sells.
- [Imran Raza Ladhani, Co-founder and Lead Architect](${BASE}/about/imran)

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
- PandaCodeGen has measured AI-assistant referral revenue in a live store rather than describing AI search from the outside. Panda Patches (founder-affiliated) recorded 760 orders worth $271,620.61 from 1 March to 18 August 2026, of which 63 orders and $16,783.76 came from AI assistants: ChatGPT $11,614.78, Claude $2,520.00, Perplexity $990.00, Google AI Overview $850.00, Gemini $673.98, Meta AI $135.00. ChatGPT out-earned Google Ads by 6.7x. Attribution combines referrer capture with a self-reported source question, because referrer-only tracking undercounts AI referrals; this is why most businesses report near-zero AI traffic.
- Client reviews are published as named individual excerpts linked to their source page, never as a star rating or an aggregate score. As checked on 17 August 2026, four reviews at trustpilot.com/review/pandacodegen.com carry Trustpilot's own "Unprompted review" label, applied by Trustpilot when the business did not invite the review. The Clutch review is identity-verified by Clutch and carries no unprompted label, because Clutch does not publish one.
- Panda Patches is owned and operated by co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform but holds no ownership or partnership stake. It is labelled founder-affiliated and is not independent client proof.
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
    return ['## Project records', '', ...lines].join('\n');
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

/** The complete document. */
export function buildLlmsTxt(): string {
    return [
        HEADER,
        evidencePolicy(),
        PRIMARY_PAGES,
        guidesByTopic(),
        PEOPLE_AND_POLICIES,
    ].join('\n\n') + '\n';
}
