import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, Layers3, RefreshCcw, Scale } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "website-rebuild-cost-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Rebuild Cost in 2026: Scope, Tiers and Decision Guide";
const description =
    "Price a website rebuild from strategy, information architecture, design, content, platform, migration, integrations, acceptance and operation, and separate it from redesign or migration.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "website rebuild cost 2026",
        "website rebuild pricing",
        "rebuild vs redesign vs migration",
        "how much does a website rebuild cost",
        "custom website rebuild",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-19",
        modifiedTime: "2026-08-08",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-rebuild-cost-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
    { name: "OWASP ASVS", url: "https://owasp.org/www-project-application-security-verification-standard/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/website-rebuild-cost-2026"),
            description,
            datePublished: "2026-04-19",
            dateModified: "2026-08-08",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Software cost analysis", "Website project scoping", "Vendor contracts", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Website pricing",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Total cost of ownership", sameAs: ["https://en.wikipedia.org/wiki/Total_cost_of_ownership"] },
            ],
            wordCount: 3077,
            timeRequired: "PT13M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Website rebuild cost", item: "https://www.pandacodegen.com/blog/website-rebuild-cost-2026" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#webpage",
            url: "https://www.pandacodegen.com/blog/website-rebuild-cost-2026",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/website-rebuild-cost-2026#breadcrumb" },
            inLanguage: "en-US",
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: postFAQs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

const linkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WebsiteRebuildCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Website rebuild cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website pricing</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Rebuild Cost: <span className="italic text-cognac">Scope, Tiers and Decisions</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A rebuild changes the platform and materially reworks the site&apos;s structure, experience
                            or content system. Price it as a coordinated strategy, design, engineering and migration
                            project, not as a universal market band.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed August 8, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 19, 2026" readTime="13 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "A rebuild goes past those tiers when the strategy work grows, or the content, or the applications, or the data, or what compliance and governance demand.",
                                "Do not compare a rebuild quote with a visual redesign or like-for-like migration.",
                                "Final price, schedule and remedies belong to a signed scope with acceptance evidence.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: RefreshCcw, title: "Rebuild", body: "New platform plus material site rework." },
                            { icon: Layers3, title: "Scope", body: "Strategy, design, content, code and migration." },
                            { icon: Scale, title: "Compare", body: "Normalize deliverables, evidence and risk." },
                            { icon: Calculator, title: "Operate", body: "Include providers, support and maintenance." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="cost-by-tier">How much does a website rebuild cost in 2026?</BlogHeader>
                    <BlogText>
                        The table below describes PandaCodeGen's own planning tiers and nothing else. We do not publish a market-wide rebuild range, because any single band has to average brochure sites, commerce platforms, regulated journeys and multi-market systems together. Price your own rebuild by writing the scope first, then asking two or three providers to quote that same scope.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">PandaCodeGen tier</th><th className="p-4">Planning range</th><th className="p-4">Potential fit</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, bounded site with limited structure and integration change</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">More pages, structured content, redesign and migration work</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Broader systems, integrations, content and launch risk</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Applications, commerce, compliance, multiple markets or program governance</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="Why there is no market-wide price range here">
                        The table above describes PandaCodeGen&apos;s own planning tiers and nothing else. We do not
                        publish a market-wide rebuild range, because any single band has to average brochure sites,
                        commerce platforms, regulated journeys and multi-market systems together, and the result tells
                        you nothing about your project. Price your own rebuild by writing the scope first, then asking
                        two or three providers to quote that same scope so the numbers describe the same work. Our own
                        tiers and what sits inside each one are set out on the{" "}
                        <Link href="/pricing" className={linkClass}>pricing page</Link>.
                    </InsightBox>

                    <BlogHeader id="why-rebuild-2026">When the rebuild question becomes urgent</BlogHeader>
                    <BlogText>
                        Urgency should follow evidence: security exposure, unsupported dependencies, inaccessible
                        journeys, broken editing, recurring incidents, platform sunsets, failed integrations, content
                        constraints or a business change the current system cannot support. A news event or platform
                        critique does not make every site an urgent rebuild.
                    </BlogText>

                    <BlogHeader id="rebuild-vs-redesign-vs-migration">Rebuild vs redesign vs migration</BlogHeader>
                    <BlogText>
                        Two questions tell you which one you need. First, is the platform itself the problem? Second, has the business outgrown what the site says and how it is organized? If only the first is true, that is a migration. If both are true, that is a rebuild. If neither is true and only the look has gone stale, that is a redesign, and it costs a fraction of the other two.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[880px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Project</th><th className="p-4">What changes</th><th className="p-4">What usually stays</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Redesign</td><td className="p-4">Visual system and selected UX</td><td className="p-4">Platform and much of the content architecture</td></tr>
                                <tr><td className="p-4 font-bold">Migration</td><td className="p-4">Platform or infrastructure</td><td className="p-4">Much of the approved information architecture and experience</td></tr>
                                <tr><td className="p-4 font-bold">Rebuild</td><td className="p-4">Platform plus material structure, experience or content system</td><td className="p-4">Only the validated content, brand and business requirements</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The fastest way to tell which one you need is to ask two separate questions. First: is the
                        platform itself the problem, through speed, security, lock-in or an editing model nobody can
                        use? Second: has the business outgrown what the site says and how it is organized? If only the
                        first is true, that is a migration: move it and keep it recognizable. If both are true, that is
                        a rebuild: new foundation, new structure, new design on top of it. If neither is true and only
                        the look has gone stale, that is a redesign.
                    </BlogText>
                    <BlogText>
                        Each of those three projects carries its own cost model, so read the one that matches the work
                        you actually need before you compare quotes. We break down the visual-only path in the{" "}
                        <Link href="/blog/website-redesign-cost" className={linkClass}>website redesign cost guide</Link>{" "}
                        and the platform-move path in the{" "}
                        <Link href="/blog/website-migration-cost-2026" className={linkClass}>website migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader id="cost-drivers">Seven line items that drive rebuild cost</BlogHeader>
                    <BlogText>
                        Two rebuild quotes for the same page count can sit a long way apart and both be honest. The
                        distance is almost always in these seven variables. Ask any provider to point at the ones
                        driving their number, and ask what each would look like if it were scoped smaller.
                    </BlogText>
                    <BlogList
                        items={[
                            "Research, positioning, information architecture and measurement. This is the line a rebuild has and a migration does not: deciding which pages should exist, how they connect and what the site should say now. If a quote jumps from discovery straight to development, your old structure is being reused by default.",
                            "Brand application, UX, responsive UI and design-system depth. Reusing an approved design is the cheapest path. A light refresh sits above it. A full design system with type scale, tokens and component states is a separate body of work that happens before development starts.",
                            "Copywriting, content migration, media and data cleanup. Migrating existing copy and writing new copy are different jobs, and deciding which pages get merged, split or cut is a third. Missing photography, source files and messy exports all land here.",
                            "Frontend, backend, CMS, search, forms and integrations. A hard-coded static build is the smallest scope. A structured CMS adds a content model and editor training. Each CRM, email, analytics, chat or payment integration adds its own build, test and failure-handling work.",
                            "Commerce, membership, applications and complex business workflows. Anything with accounts, permissions, transactions or state costs more than a page that only renders content, and it carries more acceptance testing.",
                            "Accessibility, security, privacy, SEO, analytics and performance acceptance. Building to a performance and accessibility target from day one is a design constraint on every decision. Retrofitting it after launch is a second project.",
                            "Project governance, launch, rollback, handoff, support and maintenance. Number of approvers, review cycles, environments, training and what happens in the first weeks after launch all sit in this line.",
                        ]}
                    />

                    <BlogHeader id="who-to-hire">Freelancer vs boutique studio vs agency vs enterprise firm</BlogHeader>
                    <BlogText>
                        Provider labels do not determine quality or price. A freelancer can fit a focused scope when
                        the buyer owns direction and QA. A boutique can coordinate a small senior team. A larger agency
                        can provide more disciplines and governance. An enterprise firm may fit regulated or
                        multi-stakeholder programs. Compare the assigned team, scope and evidence. The trade-offs hidden
                        behind an unusually low quote are covered in{" "}
                        <Link href="/blog/cheap-web-developer" className={linkClass}>what a cheap web developer actually involves</Link>,
                        and the questions to put to a shortlist are in our{" "}
                        <Link href="/blog/website-developer-agency" className={linkClass}>guide to choosing a web development agency</Link>.
                    </BlogText>
                    <BlogText>
                        Published market rates cluster in fairly predictable places: freelancers are usually quoted
                        somewhere around $25 to $100 per hour, and agencies around $100 to $250 or more. Those numbers
                        are worth knowing and close to useless on their own. <strong>You are buying rate multiplied by
                        hours, and the buyer can see the rate but not the hours.</strong> A $40 per hour engagement that
                        needs constant direction, redoes work after each review round and has no defined acceptance can
                        cost more in fees and considerably more in your own time than a $150 per hour team that scoped
                        the work properly and finished it. Compare total quoted cost against a written scope. A rate
                        card compared against nothing tells you which provider is cheaper per hour, which is not the
                        question you are trying to answer.
                    </BlogText>

                    <BlogHeader id="published-ranges">Why published rebuild ranges are higher than our packages</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            If you have read any other guide on this, or the summary Google puts above the results, you
                            have been told a small-business rebuild of 10 to 20 pages costs somewhere between $15,000
                            and $40,000. Our comparable package for that page count starts at $3,500. That gap is large
                            enough that it deserves an explanation rather than a boast, because a number well below the
                            stated market is just as likely to mean a smaller job as a better deal.
                        </BlogText>

                        <BlogText>
                            First, the like-for-like. Our <strong>Growth</strong> package is the one that matches that
                            description: 10 to 20 custom pages, Sanity CMS so the team edits content without touching
                            code, blog migration with every URL listed and a redirect map, a 90+ Lighthouse target on
                            mobile and desktop evidenced by three passing runs per agreed page, third-party costs listed
                            before approval, and 30 business days of support. <strong>Our $1,500 Starter is not that
                            job</strong> — it is 5 to 7 pages and no CMS, and comparing it to a 20-page agency rebuild
                            is the same scope error this page warns about everywhere else.
                        </BlogText>

                        <BlogText>
                            Second, what the published band contains that ours does not. Those ranges generally bundle
                            work that is genuinely expensive and genuinely optional: original photography and video,
                            UX research with recruited participants, brand and identity development, copywriting for
                            pages that do not exist yet, and the account-management layer that coordinates all of it.
                            Those are real costs. If your rebuild needs them, they will push any provider&apos;s number
                            up, including ours, and a quote that omits them is not cheaper so much as narrower.
                        </BlogText>

                        <InsightBox variant="info">
                            The honest comparison is never price against price. It is <strong>scope against scope at
                            the same page count, with the exclusions written down on both sides.</strong> Ask any
                            provider quoting you what happens to the number if you supply the copy and the photography,
                            and what it does if you do not. If the answer does not change the price in either direction,
                            the quote was never itemised.
                        </InsightBox>
                    </div>

                    <BlogHeader id="platform-cost">What it costs to leave WordPress, Webflow, Squarespace, Wix or Shopify</BlogHeader>
                    <BlogText>
                        The platform changes extraction and replacement work. WordPress may require theme and plugin
                        mapping; Webflow has documented export exclusions; Squarespace&apos;s export is partial; Wix
                        features require inventory and feature-specific extraction; Shopify adds commerce continuity.
                        Use the platform-specific inventory, not a generic multiplier.
                    </BlogText>
                    <BlogText>
                        We keep a separate breakdown for each starting point:{" "}
                        <Link href="/blog/wordpress-migration-cost" className={linkClass}>WordPress</Link>,{" "}
                        <Link href="/blog/webflow-migration-cost" className={linkClass}>Webflow</Link>,{" "}
                        <Link href="/blog/squarespace-migration-cost" className={linkClass}>Squarespace</Link>,{" "}
                        <Link href="/blog/wix-migration-cost" className={linkClass}>Wix</Link>. For stores,{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={linkClass}>Shopify compared with a custom build</Link>{" "}
                        covers what commerce continuity adds to the scope. Our{" "}
                        <Link href="/services/wordpress-migration" className={linkClass}>WordPress migration service</Link>{" "}
                        page describes how we run the extraction and replacement steps in practice.
                    </BlogText>

                    <BlogHeader id="red-flags">Proposal red flags without accusing a quote of padding</BlogHeader>
                    <BlogText>
                        A high quote may simply include more work or more risk. Six things in a proposal signal a scope problem rather than a pricing one, and the correct response to all six is the same: call the quotes non-comparable until the statements of work are normalized. Do not claim a provider padded it without evidence.
                    </BlogText>
                    <BlogList
                        items={[
                            "No route, template, content, feature or integration inventory.",
                            "Undefined acceptance, assumptions or exclusions.",
                            "A price that excludes essential vendor fees or migration work.",
                            "No named team or disclosure of subcontracting.",
                            "Guaranteed rankings, revenue, AI citations or permanent performance.",
                            "Unclear change-order, ownership, account, handoff or termination terms.",
                        ]}
                    />
                    <BlogText>
                        A high quote may include more work or risk. Call it non-comparable until the statements of work
                        are normalized; do not claim the provider padded it without evidence.
                    </BlogText>
                    <BlogText>
                        Because a rebuild bundles strategy and design work on top of the technical work, the gaps show
                        up in different places than they do on a straight platform move. Four to check line by line:
                    </BlogText>
                    <BlogList
                        items={[
                            "Unlimited design revisions with no sign-off gate. Unlimited sounds generous, and it removes any reason for the project to converge. Ask instead for a defined number of structured rounds tied to named milestones, with extra rounds priced in advance.",
                            "No separate line for information architecture. A rebuild is meant to rethink structure, not just skin it. If no time is budgeted for a new sitemap and navigation model before design starts, you are paying rebuild prices for migration work.",
                            "Content strategy folded into copywriting. Deciding whether a page should still exist, be merged or be cut is a different task from writing the words. If there is no strategy line before the copywriting line, new words are being written for the old structure.",
                            "Design deliverables described in adjectives. Ask what artifacts you receive: a sitemap, a design system, and signed-off layouts for the key page types before development starts. If none of that is itemized, the deliverable is undefined.",
                        ]}
                    />
                    <BlogText>
                        Deposits are a fair question to ask about too. Tie payments to deliverables you can inspect,
                        and be clear on what you have received at the point each one falls due. Our own terms are
                        30 percent at onboarding and 70 percent on delivery, set out below.
                    </BlogText>

                    <BlogHeader id="seo-preservation">Will I lose SEO when I rebuild?</BlogHeader>
                    <BlogText>
                        A rebuild can create migration risk. Google recommends careful site-move planning, relevant
                        redirects, updated internal links and canonicals, sitemaps and monitoring. Keep valuable URLs
                        stable where practical. Search engines still control crawling, indexing, rankings and timing,
                        so no agency can guarantee retention. Our detailed answer on{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={linkClass}>search visibility during a migration</Link>{" "}
                        sets out the controls worth insisting on in the scope.
                    </BlogText>

                    <BlogHeader id="roi-math">How do you calculate rebuild ROI?</BlogHeader>
                    <BlogText>
                        Define the one-time and ongoing cost, then identify measurable cash flow, internal time, risk or
                        capability changes attributable to the rebuild. Use low, central and high scenarios and report
                        uncertainty. A faster site or new design does not establish incremental revenue by itself. Our{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={linkClass}>three-year cost comparison of WordPress and custom code</Link>{" "}
                        shows one way to lay the ongoing side of that calculation out.
                    </BlogText>

                    <BlogHeader id="timeline">How long does a website rebuild take?</BlogHeader>
                    <BlogText>
                        Duration depends on requirements, pages, design, content, data, integrations, review, compliance
                        and acceptance. Plan phases with exit evidence rather than a universal week range. Record client
                        dependencies and change impacts in the schedule. In practice the delays that hurt most are on
                        the buyer&apos;s side: late content, late feedback, late sign-offs. Name one decision-maker,
                        agree a turnaround commitment for feedback in writing, and gather the content you already know
                        is missing before kickoff. We walk through how those phases stack up in{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={linkClass}>how long a custom website takes to build</Link>.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Hidden costs to make explicit</BlogHeader>
                    <BlogText>
                        Because a rebuild reimagines the site instead of porting it, most of the surprises cluster
                        around design and content decisions rather than technical plumbing. Ask about each of these
                        explicitly, and get the answer written into the scope rather than agreed on a call.
                    </BlogText>
                    <BlogList
                        items={[
                            "Content decisions, missing assets, data cleanup and translation. A new sitemap often calls for pages that never existed on the old site, and writing those from scratch is a different job from migrating copy.",
                            "Extra design revision rounds, and what triggers them. A stakeholder who was not in the first reviews asking for changes afterwards is a common cause, and it is a scope change rather than a defect.",
                            "Information architecture rework after development starts. If testing or internal feedback moves the navigation model mid-build, agree upfront how that gets re-quoted.",
                            "Brand asset gaps. A reimagined design frequently needs photography, iconography or logo files in formats and resolutions the business does not currently hold.",
                            "Provider plans, licenses, usage and transaction costs, plus internal review, legal, training and change management time.",
                            "Post-launch monitoring, incidents, maintenance and framework upgrades, and whether early fixes are included or billed.",
                            "Archive, retention, cancellation and old-system decommissioning.",
                        ]}
                    />
                    <BlogText>
                        Two of those have a rough number attached that is worth budgeting against. Content work is
                        commonly quoted somewhere in the region of <strong>$100 to $300 per page</strong> to rewrite or
                        port existing copy, which is why a 30-page site and a 300-page site diverge on content long
                        before they diverge on build. And <strong>ongoing maintenance is usually estimated at 15 to 20
                        percent of the original build cost per year</strong>, covering hosting, security patching,
                        dependency updates and small changes.
                    </BlogText>
                    <BlogText>
                        Run that second one before you sign anything. A $30,000 build carrying 18 percent annual
                        maintenance is roughly $5,400 a year, which is another $16,000 across three years, and it is
                        the line most often left out of the comparison entirely. If you are weighing options over that
                        horizon rather than at the point of purchase,{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className={linkClass}>the three-year cost comparison</Link>{" "}
                        works the same arithmetic through in full.
                    </BlogText>

                    <BlogHeader id="when-not-to-rebuild">When a rebuild does not make sense</BlogHeader>
                    <BlogText>
                        The most common wrong reason to rebuild is that the platform is the only real problem while the structure still describes the business accurately. That is a migration, and it is cheaper. Seven other conditions argue against buying a rebuild, and two of them are about you rather than the site: unresolved content or positioning will stall any build, and nobody having capacity for feedback and approvals will stall it twice.
                    </BlogText>
                    <BlogList
                        items={[
                            "The platform fits and a targeted repair addresses the measured problem.",
                            "Content, positioning or operations are unresolved and will stall any build.",
                            "The business cannot own the target operating model.",
                            "Expected value does not justify cost and migration risk.",
                            "A redesign or isolated integration change meets the requirement.",
                            "You are heading into your busiest trading period. Launch risk is concentrated in the first days after a cutover, and that is the worst week to spend on it.",
                            "Nobody internally has the capacity to supply content, feedback and approvals on the project timeline. Rebuilds need more of this than migrations, because structure and design are genuinely being decided rather than carried across.",
                            "The platform is the only real problem and the structure still describes the business accurately. That is a migration, and it gets you the same speed and security outcome without paying for design and IA work you do not need.",
                        ]}
                    />

                    <BlogHeader id="pandacodegen-pricing">PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to
                        failure to deliver the signed scope, not a change of preference after starting. Starter includes
                        15 business days of launch defect support and Growth and Scale carry 30, where the accepted terms include it. Ownership, licenses,
                        accounts, acceptance and remedies follow the signed project terms. Work that falls outside the
                        standard tiers is scoped through our{" "}
                        <Link href="/services/custom-engineering" className={linkClass}>custom engineering service</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="What to ask for before you trust an outcome claim">
                        Any result a provider shows you should carry four things: the date it was measured, the site it
                        came from, the method used to measure it, and the client&apos;s permission to publish it. Ask for
                        all four, from us and from anyone else you are comparing. Where we cannot show all four, we
                        describe the work and the acceptance criteria instead, and you hold us to the signed scope
                        rather than to a headline. Our <Link href="/work" className={linkClass}>published project work</Link>{" "}
                        is where we apply that same standard to ourselves.
                    </InsightBox>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a rebuild decision and migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will separate repair, redesign, migration and rebuild options, then scope the smallest
                            option that satisfies the accepted requirements.
                        </p>
                        <QuoteModalButton cta="website_rebuild_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
