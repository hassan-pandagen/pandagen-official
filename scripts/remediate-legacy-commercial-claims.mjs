import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("src/app/blog");

async function articleFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const resolved = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await articleFiles(resolved));
    if (entry.isFile() && entry.name === "page.tsx") files.push(resolved);
  }
  return files;
}

const replacements = [
  {
    pattern: /AEO Playbook: (?:Get )?Cited by ChatGPT, Claude & Perplexity in 30 Days/gi,
    replacement: "AEO Playbook: Improve Eligibility for AI Search Citations",
  },
  {
    pattern: /Every second of slow load time costs you customers and Google rankings\. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page\. No templates, no bloat, no plugins\./gi,
    replacement: "Hassan Jamal is PandaCodeGen's Co-founder and Lead Engineer. He works on measured migrations, performance diagnostics, and acceptance criteria without promising rankings or conversion outcomes.",
  },
  {
    pattern: /Every second of slow load time costs you customers and Google rankings\. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page\./gi,
    replacement: "Hassan Jamal is PandaCodeGen's Co-founder and Lead Engineer. He works on measured migrations, performance diagnostics, and acceptance criteria without promising rankings or conversion outcomes.",
  },
  {
    pattern: /Hassan rebuilds slow WordPress, Shopify, Wix, and Webflow sites as custom Next\.js builds that load under 1 second\./gi,
    replacement: "Hassan works on SEO-conscious migrations from WordPress, Shopify, Wix, and Webflow to scoped Next.js implementations.",
  },
  {
    pattern: /Hassan has helped businesses migrate off WordPress to custom Next\.js sites that load under 1 second and score 90\+ on Google PageSpeed\. Every migration includes full SEO preservation and planned cutover designed to minimize downtime\./gi,
    replacement: "Hassan works on WordPress-to-Next.js migrations with URL inventories, redirect maps, staged cutovers, and documented performance acceptance conditions. Search outcomes remain controlled by search engines.",
  },
  {
    pattern: /PandaCodeGen builds custom Next\.js websites(?: with [^.]+)?\. Sites load under 1 second, score 90\+ on Google PageSpeed, (?:include server-side ad tracking, and come with |and )?[^.]+\./gi,
    replacement: "PandaCodeGen scopes Next.js migrations with documented performance, tracking, ownership, licensing, hosting, and handover terms. Outcomes and third-party costs depend on the accepted scope and production configuration.",
  },
  {
    pattern: /PandaCodeGen builds custom Next\.js websites that replace slow [^.]+\. Sites load under 1 second(?:, score 90\+ on Google PageSpeed)?,? and cost (?:about )?\$0 a month to host\./gi,
    replacement: "PandaCodeGen scopes Next.js migrations with documented performance and hosting assumptions. Commercial hosting costs depend on the selected provider plan, seats, traffic, and usage.",
  },
  {
    pattern: /A 90\+ mobile score is the practical target and the one we guarantee in writing on every build\./gi,
    replacement: "A 90+ Lighthouse score can be used as a lab acceptance target when the accepted terms name representative pages, mobile and desktop profiles, and three passing runs per agreed page/profile.",
  },
  {
    pattern: /90\+ guaranteed/gi,
    replacement: "90+ scoped target",
  },
  {
    pattern: /Guaranteed 90\+ PageSpeed score/gi,
    replacement: "Scoped 90+ Lighthouse acceptance target",
  },
  {
    pattern: /Guarantee: 90\+ PageSpeed score or we fix it for free/gi,
    replacement: "Acceptance target: the score, test conditions, evidence, and remedy are defined in the accepted project terms",
  },
  {
    pattern: /Guaranteed result: 90\+ PageSpeed, 0\.8-1\.2s load time/gi,
    replacement: "Acceptance result: the named pages and profiles meet the documented target under the recorded conditions",
  },
  {
    pattern: /guarantee a 90\+ Google score \(PageSpeed\)/gi,
    replacement: "can scope a 90+ Lighthouse target under documented conditions",
  },
  {
    pattern: /90\+ Google score guarantee or you do not pay/gi,
    replacement: "90+ Lighthouse target and remedy only when stated in the accepted terms",
  },
  {
    pattern: /90\+ PageSpeed refund guarantee mechanics/gi,
    replacement: "conditional performance-target and remedy terms",
  },
  {
    pattern: /90\+ PageSpeed refund guarantee/gi,
    replacement: "conditional performance-target remedy",
  },
  {
    pattern: /written 90\+ PageSpeed refund guarantee/gi,
    replacement: "written, conditional performance acceptance target",
  },
  {
    pattern: /a full refund of the final payment if we miss it/gi,
    replacement: "the remedy stated in the accepted project terms",
  },
  {
    pattern: /you own outright/gi,
    replacement: "the client may own or license under the accepted project terms",
  },
  {
    pattern: /clients own outright/gi,
    replacement: "clients may own or license under their accepted project terms",
  },
  {
    pattern: /most clients own outright/gi,
    replacement: "clients may own or license after the milestone stated in their accepted project terms",
  },
  {
    pattern: /code you own outright/gi,
    replacement: "code ownership and licensing documented in the accepted project terms",
  },
  {
    pattern: /custom code you own outright/gi,
    replacement: "custom code with ownership and licensing documented in the accepted project terms",
  },
  {
    pattern: /hosting cost is typically free or \$20 a month/gi,
    replacement: "hosting cost depends on the provider's current commercial plan, seats, traffic, and usage",
  },
  {
    pattern: /host it on Vercel starting free \(you only scale to \$20\/month when your business grows\)/gi,
    replacement: "host it on a commercially permitted plan selected for the expected seats, traffic, and usage",
  },
  {
    pattern: /cost about \$0 a month to host/gi,
    replacement: "use hosting whose cost depends on the selected commercial plan and usage",
  },
  {
    pattern: /cost \$0 per month in ongoing platform fees/gi,
    replacement: "use documented third-party plans and usage-based costs",
  },
  {
    pattern: /Zero downtime\./gi,
    replacement: "The cutover is staged to minimize downtime, but zero downtime is not promised.",
  },
  {
    pattern: /Launch with zero downtime/gi,
    replacement: "Use a staged launch designed to minimize downtime",
  },
  {
    pattern: /zero downtime\)/gi,
    replacement: "a staged cutover designed to minimize downtime)",
  },
  {
    pattern: /The tactics that get you cited by Google's AI Overview are the same ones that get you cited by ChatGPT\. There is no separate machine to optimize for\./gi,
    replacement: "The same crawlability, content quality, entity clarity, and evidence practices can help multiple discovery systems understand a page, but no tactic guarantees selection or citation.",
  },
  {
    pattern: /ready to be cited by AI engines from launch day/gi,
    replacement: "structured for crawlability and machine-readable clarity from launch",
  },
  {
    pattern: /optimized for AI search citations from launch day/gi,
    replacement: "structured for crawlability and machine-readable clarity without promising AI inclusion or citation",
  },
  {
    pattern: /We build websites that get cited by ChatGPT, Claude, Perplexity, and Google AI Overview without waiting 12 months for Google SEO\./gi,
    replacement: "We build crawlable, evidence-led websites, while search and AI systems independently control inclusion, ranking, and citation.",
  },
  {
    pattern: /the same site that gets cited by ChatGPT and Google's AI answers/gi,
    replacement: "the same site that gives search and AI systems clearer, crawlable evidence to evaluate",
  },
  {
    pattern: /already cited by ChatGPT, Claude, and Perplexity/gi,
    replacement: "structured for crawlability and machine-readable clarity; any AI citation requires separate dated evidence",
  },
  {
    pattern: /sub-1-second loads are standard on Next\.js builds/gi,
    replacement: "performance depends on route design, content, third parties, device, network, and test conditions",
  },
  {
    pattern: /under 1 second First Contentful Paint, 95 plus PageSpeed Mobile/gi,
    replacement: "the recorded metric, route, device profile, network conditions, and test date",
  },
  {
    pattern: /PandaCodeGen is a custom Next\.js web development studio that builds websites structured for crawlability and machine-readable clarity without promising AI inclusion or citation\. The studio was founded in February 2026 and is co-led by Hassan Jamal \(engineering and brand\) and Imran Raza Ladhani \(architecture and marketing\)\. The studio operates as an Austin TX LLC with engineering based in Karachi, Pakistan\./gi,
    replacement: "PandaCodeGen is a website-migration and engineering brand founded in February 2026. Hassan Jamal is Co-founder and Lead Engineer, and Imran Raza Ladhani is Co-founder and Lead Architect. The Austin address is a mailing address; the exact legal entity and controller identity must be verified before publication.",
  },
  {
    pattern: /PageSpeed (?:went|mobile:?) from 45 to 90\+/gi,
    replacement: "performance improved in the owner-reported project; exact before-and-after figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /PageSpeed (?:went|mobile:?) from 45 to 97/gi,
    replacement: "performance improved in the owner-reported project; exact before-and-after figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /PageSpeed 45 to 90\+/gi,
    replacement: "owner-reported performance improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /45 to 90\+ PageSpeed/gi,
    replacement: "an owner-reported performance improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /45-to-90\+ PageSpeed/gi,
    replacement: "owner-reported performance improvement",
  },
  {
    pattern: /45 to 90\+/gi,
    replacement: "an owner-reported improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /45 to 97/gi,
    replacement: "an owner-reported improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /42 to 97/gi,
    replacement: "an owner-reported improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /64 to 90\+/gi,
    replacement: "an owner-reported improvement with exact figures withheld pending evidence reconciliation",
  },
  {
    pattern: /3\.2s to 0\.7s/gi,
    replacement: "a slower legacy baseline to a faster owner-reported result; exact figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /3\.2-second load time and (?:a )?~?45 PageSpeed score on \$150\/month hosting to a 0\.7-second load time, 90\+ PageSpeed, and \$0\/month hosting/gi,
    replacement: "a slower legacy baseline to a faster owner-reported result; the exact performance and hosting figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /3\.2 seconds to 0\.7 seconds/gi,
    replacement: "a slower legacy baseline to a faster owner-reported result; exact figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /3\.2 second load time and 45 PageSpeed before the rebuild and 0\.7 seconds with 97 PageSpeed after it/gi,
    replacement: "owner-reported before-and-after performance figures that remain withheld pending evidence-record reconciliation",
  },
  {
    pattern: /5\.8 second LCP down to 0\.8 seconds/gi,
    replacement: "a slower legacy LCP to a faster owner-reported result; exact figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /5\.8 seconds to 0\.8 seconds/gi,
    replacement: "a slower legacy baseline to a faster owner-reported result; exact figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /5\.8s LCP, migrated to Next\.js \+ Sanity \+ Supabase \+ Square/gi,
    replacement: "legacy LCP baseline, later migrated to Next.js + Sanity + Supabase + Square; exact figures are withheld pending evidence reconciliation",
  },
  {
    pattern: /hosting (?:cost )?(?:dropped|went|drops?) from \$150 (?:a month|\/month|\/mo) to \$0(?: a month|\/month|\/mo)?/gi,
    replacement: "hosting changed from a managed legacy plan to a usage-dependent commercial plan; exact figures are withheld pending invoice reconciliation",
  },
  {
    pattern: /\$150\/mo to \$0\/mo/gi,
    replacement: "a managed legacy plan to a usage-dependent commercial plan; exact figures are withheld pending invoice reconciliation",
  },
  {
    pattern: /\$150 a month to \$0(?: a month)?/gi,
    replacement: "a managed legacy plan to a usage-dependent commercial plan; exact figures are withheld pending invoice reconciliation",
  },
  {
    pattern: /\$150\/month to \$0/gi,
    replacement: "a managed legacy plan to a usage-dependent commercial plan; exact figures are withheld pending invoice reconciliation",
  },
  {
    pattern: /scaled from \$38K to about \$50K(?:\/mo| a month)?/gi,
    replacement: "grew during the owner-operated period; exact revenue figures are withheld pending reporting-period reconciliation",
  },
  {
    pattern: /scaled from \$38,000 to about \$50,000 a month/gi,
    replacement: "grew during the owner-operated period; exact revenue figures are withheld pending reporting-period reconciliation",
  },
  {
    pattern: /from \$38K to about \$50K(?: a month)?/gi,
    replacement: "growth during the owner-operated period; exact revenue figures are withheld pending reporting-period reconciliation",
  },
  {
    pattern: /from roughly \$38K to \$50K a month/gi,
    replacement: "during the owner-operated period; exact revenue figures are withheld pending reporting-period reconciliation",
  },
  {
    pattern: /about \$55(?:\/mo| a month) (?:in )?(?:total )?tooling/gi,
    replacement: "a usage-dependent tooling stack whose exact cost is withheld pending invoice reconciliation",
  },
  {
    pattern: /roughly \$55\/month in total tooling/gi,
    replacement: "a usage-dependent tooling stack whose exact cost is withheld pending invoice reconciliation",
  },
  {
    pattern: /on about \$55\/mo tooling \(Supabase ~\$25, Vercel ~\$20, and ~\$10 for the FAL Flux Schnell AI patch generator\)/gi,
    replacement: "on a usage-dependent Supabase, Vercel, and image-generation stack; exact costs are withheld pending invoice reconciliation",
  },
  {
    pattern: /on roughly \$55 a month in tooling, a Supabase backend, Vercel hosting, and the FAL AI patch generator/gi,
    replacement: "on a usage-dependent Supabase, Vercel, and image-generation stack; exact costs are withheld pending invoice reconciliation",
  },
  {
    pattern: /bounce rate dropping 34 percent/gi,
    replacement: "behavioral analytics withheld pending a dated measurement record",
  },
  {
    pattern: /Bounce rate dropped 34 percent\. Conversions went up\./gi,
    replacement: "Behavioral and conversion figures are withheld pending a dated measurement record.",
  },
  {
    pattern: /45% conversion jump/gi,
    replacement: "owner-reported conversion change with the exact figure withheld pending analytics reconciliation",
  },
  {
    pattern: /lifted revenue 12x/gi,
    replacement: "supported operational growth; exact revenue attribution is withheld pending reporting-period reconciliation",
  },
  {
    pattern: /tooling cost 87 percent/gi,
    replacement: "tooling cost; the exact percentage is withheld pending invoice reconciliation",
  },
  {
    pattern: /900\+ public GitHub contributions in the past year/gi,
    replacement: "a public engineering profile; contribution counts are withheld until a dated snapshot is recorded",
  },
  {
    pattern: /PandaCodeGen builds custom Next\.js websites and e-commerce stores for businesses frustrated with slow(?: WordPress sites and expensive templates|, expensive platforms)\. We guarantee 90\+ Google PageSpeed(?: Mobile)? (?:in writing )?or a full refund on every build\./gi,
    replacement: "PandaCodeGen plans SEO-conscious migrations and custom Next.js builds. Performance targets and remedies apply only when stated in the accepted project terms and tested under the documented conditions.",
  },
  {
    pattern: /Every build hits 90\+ on Google PageSpeed or the project is fully refunded\./gi,
    replacement: "When selected in the accepted project terms, the Lighthouse acceptance target uses named pages, mobile and desktop profiles, and three recorded passing runs per agreed page/profile.",
  },
  {
    pattern: /Every (?:build|project) ships with (?:a )?(?:written )?90\+ (?:Google )?PageSpeed(?: Mobile)? (?:score )?(?:guarantee|guaranteed)(?: in writing)?(?: or (?:a )?(?:full|100(?: percent|%)?) refund)?/gi,
    replacement: "A 90+ Lighthouse acceptance target applies only when included in the accepted project terms, using named pages, mobile and desktop profiles, and three recorded passing runs per agreed page/profile",
  },
  {
    pattern: /90\+ (?:Google )?PageSpeed(?: Mobile)? (?:score )?guaranteed(?: in writing)?(?: or (?:a )?(?:full|100(?: percent|%)?) refund)?/gi,
    replacement: "90+ Lighthouse acceptance target under the documented mobile and desktop test conditions",
  },
  {
    pattern: /90\+ (?:Google )?PageSpeed(?: Mobile)? (?:guarantee|guarantees)/gi,
    replacement: "90+ Lighthouse acceptance target",
  },
  {
    pattern: /PageSpeed Guarantee/gi,
    replacement: "Performance acceptance target",
  },
  {
    pattern: /guarantees 90\+ (?:on )?(?:Google )?PageSpeed(?: Mobile)?(?: in writing)?/gi,
    replacement: "can define a 90+ Lighthouse acceptance target in the accepted project terms",
  },
  {
    pattern: /guarantee 90\+ (?:on )?(?:Google )?PageSpeed(?: Mobile)?(?: in writing)?/gi,
    replacement: "define a 90+ Lighthouse acceptance target in the accepted project terms",
  },
  {
    pattern: /90\+ (?:on )?(?:Google )?PageSpeed(?: Mobile)?(?: in writing)? or (?:a )?(?:full|100(?: percent|%)?) refund/gi,
    replacement: "90+ Lighthouse acceptance target with the remedy defined in the accepted project terms",
  },
  {
    pattern: /90\+ PageSpeed Mobile or full refund/gi,
    replacement: "90+ Lighthouse target under the agreed mobile and desktop conditions",
  },
  {
    pattern: /or (?:a )?(?:full|100(?: percent|%)?) refund if (?:the )?(?:score|target|90\+)[^.]*\.?/gi,
    replacement: "with any remedy governed by the accepted project terms.",
  },
  {
    pattern: /or (?:a )?(?:full|100(?: percent|%)?) refund/gi,
    replacement: "with any remedy governed by the accepted project terms",
  },
  {
    pattern: /or your money back/gi,
    replacement: "with any remedy governed by the accepted project terms",
  },
  {
    pattern: /100% refund if 90\+ not met/gi,
    replacement: "Remedy defined in accepted terms",
  },
  {
    pattern: /100 percent refund if the score is not met/gi,
    replacement: "the remedy stated in the accepted project terms",
  },
  {
    pattern: /Free post-launch tweaks \([^)]*\)/gi,
    replacement: "Included support follows the accepted project terms",
  },
  {
    pattern: /free post-launch support(?: and tweaks)? for every client \([^)]*\)/gi,
    replacement: "included post-launch support for the period and scope stated in the accepted project terms",
  },
  {
    pattern: /a free month of tweaks/gi,
    replacement: "the included support period stated in the accepted project terms",
  },
  {
    pattern: /Fixed price, no hourly billing ever/gi,
    replacement: "Payment method and change control follow the accepted project terms",
  },
  {
    pattern: /full source code ownership on day one/gi,
    replacement: "client-specific deliverable rights after full payment as defined in the accepted project terms",
  },
  {
    pattern: /full source code handover on day one/gi,
    replacement: "repository handover at the milestone defined in the accepted project terms",
  },
  {
    pattern: /full code ownership from day one/gi,
    replacement: "client-specific deliverable rights after full payment as defined in the accepted project terms",
  },
  {
    pattern: /full code ownership/gi,
    replacement: "documented code ownership and licensing",
  },
  {
    pattern: /full source code ownership/gi,
    replacement: "documented source-code ownership and licensing",
  },
  {
    pattern: /the client owns outright/gi,
    replacement: "the client may own or license under the accepted project terms",
  },
  {
    pattern: /you own the code outright/gi,
    replacement: "code ownership and licensing follow the accepted project terms after full payment",
  },
  {
    pattern: /you own the code/gi,
    replacement: "code ownership and licensing follow the accepted project terms",
  },
  {
    pattern: /zero monthly platform fees/gi,
    replacement: "third-party platform costs documented before approval",
  },
  {
    pattern: /no monthly platform fees/gi,
    replacement: "third-party platform costs documented before approval",
  },
  {
    pattern: /\$0 monthly platform fees/gi,
    replacement: "documented third-party platform costs",
  },
  {
    pattern: /hosting that starts free/gi,
    replacement: "hosting selected according to current commercial terms and expected usage",
  },
  {
    pattern: /hosting bill for a client site is often \$0/gi,
    replacement: "hosting cost depends on the selected commercial plan, seats, traffic, and usage",
  },
  {
    pattern: /\$0 hosting/gi,
    replacement: "usage-dependent hosting",
  },
  {
    pattern: /hosting \$0\/mo/gi,
    replacement: "hosting cost documented for the selected plan and usage",
  },
  {
    pattern: /zero-downtime (?:launch|migration|cutover)/gi,
    replacement: "planned cutover designed to minimize downtime",
  },
  {
    pattern: /zero downtime (?:launch|migration|cutover)/gi,
    replacement: "planned cutover designed to minimize downtime",
  },
  {
    pattern: /rankings preserved/gi,
    replacement: "SEO-continuity controls and post-launch monitoring",
  },
  {
    pattern: /zero SEO drops/gi,
    replacement: "SEO-continuity controls with post-launch monitoring",
  },
  {
    pattern: /no ranking drops/gi,
    replacement: "SEO-continuity controls with post-launch monitoring",
  },
  {
    pattern: /designed to get cited by ChatGPT, Claude, and Perplexity from launch day/gi,
    replacement: "structured for crawlability and machine-readable clarity, without promising inclusion or citation by an AI system",
  },
  {
    pattern: /designed to get cited by ChatGPT, Claude, and Perplexity/gi,
    replacement: "structured for crawlability and machine-readable clarity, without promising AI inclusion or citation",
  },
  {
    pattern: /cited by ChatGPT, Claude, and Perplexity from launch day/gi,
    replacement: "structured for machine-readable clarity; AI inclusion and citation remain outside the developer's control",
  },
  {
    pattern: /sub-1[- ]second load times/gi,
    replacement: "route-level performance targets under documented conditions",
  },
  {
    pattern: /sub-second load times/gi,
    replacement: "route-level performance targets under documented conditions",
  },
  {
    pattern: /loads? in under (?:one|1) second/gi,
    replacement: "targets fast loading under documented conditions",
  },
  {
    pattern: /Sites load under 1 second, score 90\+ on Google PageSpeed, and cost \$20\/month to run\./gi,
    replacement: "Performance targets, test profiles, hosting costs, and remedies follow the accepted project terms and current provider pricing.",
  },
  {
    pattern: /Sites load under 1 second and use hosting whose cost depends on the selected commercial plan and usage\./gi,
    replacement: "Performance is measured under documented conditions, and hosting cost depends on the selected commercial plan and usage.",
  },
  {
    pattern: /load(?:s|ing)? under 1 second/gi,
    replacement: "meet the documented performance budget",
  },
  {
    pattern: /under 1 second load(?: time| times)?/gi,
    replacement: "a documented route-level performance target",
  },
  {
    pattern: /down to under 1 second/gi,
    replacement: "to a faster measured result",
  },
  {
    pattern: /Under 1 second requires/gi,
    replacement: "A materially faster result may require",
  },
  {
    pattern: /under 1 second convert 2 to 3 times better than sites loading in 3\.5 seconds/gi,
    replacement: "faster experiences can reduce friction, but the effect must be measured for the site's actual audience and funnel",
  },
  {
    pattern: /once (?:the )?(?:new )?(?:site|store) is 100% ready/gi,
    replacement: "after the replacement passes the agreed launch checklist",
  },
  {
    pattern: /100% yours forever/gi,
    replacement: "rights defined in the accepted project terms",
  },
  {
    pattern: /You own the entire codebase, and we transfer the repository to you\./gi,
    replacement: "Rights in paid custom deliverables and repository transfer follow the accepted project terms; reusable internal tools and third-party components retain their stated rights and licenses.",
  },
  {
    pattern: /You own the entire codebase/gi,
    replacement: "Rights in paid custom deliverables follow the accepted project terms",
  },
  {
    pattern: /only fix that (?:actually )?works/gi,
    replacement: "evidence-based decision guide",
  },
  {
    pattern: /only solution/gi,
    replacement: "one option",
  },
  {
    pattern: /keeps? 95 to 100% of (?:your )?(?:rankings|traffic)/gi,
    replacement: "uses documented SEO-continuity controls",
  },
  {
    pattern: /95 to 100% of (?:your )?(?:rankings|traffic)/gi,
    replacement: "SEO-continuity controls with post-launch monitoring",
  },
  {
    pattern: /95–100%/gi,
    replacement: "Controlled",
  },
  {
    pattern: /keeping 95 to 100% of rankings/gi,
    replacement: "using documented SEO-continuity controls",
  },
  {
    pattern: /the research is consistent: a well-executed migration [^.]+\. A poorly executed one can lose around 50% of traffic, with an average recovery of more than 500 days\./gi,
    replacement: "Migration outcomes vary. A controlled process reduces avoidable technical risk, while search engines still control indexing, rankings, traffic, and recovery timing.",
  },
  {
    pattern: /A migration done right [^.]+ and leaves you faster than before\./gi,
    replacement: "A controlled migration uses URL mapping, redirect validation, metadata and canonical checks, rendered-output testing, rollback planning, and post-launch monitoring without guaranteeing traffic or ranking outcomes.",
  },
  {
    pattern: /(?:typically|usually) doubles conversion rates within 60 days/gi,
    replacement: "does not guarantee a conversion change or delivery window",
  },
  {
    pattern: /Typical clients see 2-3× traffic increase within 90 days\.[^.]*\./gi,
    replacement: "Traffic outcomes and timing are controlled by search engines and the business funnel; they are not a performance-test result or project guarantee.",
  },
  {
    pattern: /Fix it once, gain \$100K\+ every year after\./gi,
    replacement: "Measure the actual post-change effect before assigning revenue or payback.",
  },
  {
    pattern: /The first month of improved conversion usually covers the entire build cost/gi,
    replacement: "Payback must be calculated from measured first-party outcomes and actual project cost",
  },
  {
    pattern: /the ROI typically arrives in 3 to 6 months/gi,
    replacement: "payback is scenario-specific and is not promised",
  },
  {
    pattern: /A custom Next\.js site costs \$0\/year to run after the build/gi,
    replacement: "A custom Next.js site still has usage-dependent hosting, service, maintenance, and support costs after the build",
  },
  {
    pattern: /A custom Next\.js site costs \$10,000 once, then \$0\/year/gi,
    replacement: "A custom Next.js site's total cost depends on build scope plus ongoing hosting, services, maintenance, and support",
  },
  {
    pattern: /A custom Next\.js site costs \$10K once, then \$0\/year/gi,
    replacement: "A custom Next.js site's total cost depends on build scope plus ongoing hosting, services, maintenance, and support",
  },
  {
    pattern: /Free Vercel hosting, no plugin fees, and no maintenance developer means your only cost is the one-time investment\./gi,
    replacement: "Hosting eligibility, usage, third-party services, maintenance, and support must be priced for the actual workload.",
  },
  {
    pattern: /slow WordPress sites (?:silently )?lose \$50K-\$150K\/year in revenue/gi,
    replacement: "slow WordPress sites can create measurable user friction, but revenue impact must be established from first-party analytics",
  },
  {
    pattern: /slow WordPress sites lose 20 to 30% of organic traffic, translating to \$50K to \$150K\/year in lost revenue/gi,
    replacement: "slow WordPress sites can create measurable user friction, but traffic and revenue impact require first-party evidence",
  },
  {
    pattern: /For a \$500K\/year business: \$50K-\$150K in lost organic revenue annually/gi,
    replacement: "For any business: calculate a range from dated first-party traffic, conversion, margin, and cost data",
  },
  {
    pattern: /For most businesses doing over \$150K\/year, the custom site wins on direct costs alone within 2 years, and wins on total business impact \(traffic \+ revenue \+ time\) within the first year\./gi,
    replacement: "No revenue threshold makes a rebuild automatically worthwhile. Compare dated direct costs, internal time, migration cost, risk, and measured outcomes for the specific business.",
  },
  {
    pattern: /a track record Webflow&apos;s outage history cannot match\. That reliability difference alone can pay for a significant portion of your migration cost over 3 years\./gi,
    replacement: "a separate provider risk profile. Do not convert a third-party incident snapshot into a revenue or payback claim without first-party downtime and transaction evidence.",
  },
  {
    pattern: /The only way to break past it is to rebuild on a custom coded framework like Next\.js that ships minimal JavaScript\./gi,
    replacement: "If measured budgets remain unmet, compare platform-specific optimization, a lighter implementation, or a scoped migration; Next.js is one option, not a universal cure.",
  },
];

let changedFiles = 0;
let replacementsApplied = 0;

for (const file of await articleFiles(root)) {
  const original = await readFile(file, "utf8");
  let updated = original;
  for (const { pattern, replacement } of replacements) {
    updated = updated.replace(pattern, () => {
      replacementsApplied += 1;
      return replacement;
    });
  }
  if (updated !== original) {
    await writeFile(file, updated, "utf8");
    changedFiles += 1;
  }
}

console.log(`Updated ${changedFiles} article files with ${replacementsApplied} bounded commercial-claim replacements.`);
