import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, Database, FileCode2, ListChecks } from "lucide-react";
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

const postId = "webflow-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Webflow Migration Cost in 2026: Scope, Tiers and Evidence";
const description =
    "Price a Webflow migration from the actual pages, CMS, exports, forms, localization, integrations, SEO, acceptance and operating scope, including 50 to 100 page sites.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Webflow migration cost",
        "migrate Webflow to Next.js",
        "Webflow to custom website cost",
        "Webflow migration agency",
        "50 page Webflow migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-25",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/webflow-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Webflow pricing", url: "https://webflow.com/pricing" },
    { name: "Webflow site plans", url: "https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Webflow CMS import and export", url: "https://help.webflow.com/hc/en-us/articles/33961290794771-How-do-I-import-content-into-the-Webflow-CMS" },
    { name: "Webflow exported forms", url: "https://help.webflow.com/hc/en-us/articles/33961341546899-Collect-form-submissions-on-exported-sites" },
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { name: "Google Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-25",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about",
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": canonicalUrl },
            articleSection: "Webflow migration",
            inLanguage: "en-US",
            citation: sources.map((source) => ({ "@type": "WebPage", ...source })),
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WebflowMigrationCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Webflow migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Webflow migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Webflow Migration Cost <span className="italic text-cognac">Scope, Tiers and Evidence</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Any quote worth trusting starts with your actual site and how you need it to run
                            afterwards. Page count matters, but the real work usually sits elsewhere: how your CMS
                            collections relate to each other, the features Webflow will not let you export, what has to
                            keep talking to what, protecting your search traffic, and agreeing how you sign it off.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Webflow and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 25, 2026" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen's public planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "For a 50 to 100 page site we quote after sorting out how many templates you really have and tidying the content, not by multiplying one page price by 100.",
                                "Webflow's code export gives you the front end, not the whole application. Your CMS, store, forms, search, other languages and anything behind a login all need separate work.",
                                "The signed scope is where the final price, the schedule, who owns what, how you sign it off, support and refund terms all live.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: FileCode2, title: "Pages", body: "How many templates you really have, not how many pages." },
                            { icon: Database, title: "Systems", body: "Your CMS, forms, search, store, logins and anything they connect to." },
                            { icon: ListChecks, title: "Acceptance", body: "How you sign it off: content is right, it works, it ranks, people can use it, it is fast." },
                            { icon: Calculator, title: "Operation", body: "What you pay providers, plus support and your own team's time." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>The four planning tiers for a Webflow migration</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th><th className="p-4">What can move it</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, well-defined migration with limited templates and integrations</td><td className="p-4">CMS, content cleanup, forms, redirects and custom behavior</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">Larger marketing site or migration with structured content</td><td className="p-4">Design change, complex CMS, analytics, localization and integrations</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Multi-template, integration-heavy or higher-risk migration</td><td className="p-4">Commerce, user systems, custom applications, data and governance</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Requirements outside the standard tiers</td><td className="p-4">Program size, compliance, multiple markets, complex data or ongoing team</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="warning" label="These are PandaCodeGen planning tiers">
                        They are not market medians, paid-project receipts, competitor quotes or a promise that every
                        site fits a tier. A proposal is valid only for its written scope and date.
                    </InsightBox>
                    <BlogText>
                        The same tiers are set out with their inclusions on the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>, and the delivery process
                        behind them is described on our{" "}
                        <Link href="/services/webflow" className={sourceLinkClass}>Webflow migration service page</Link>.
                    </BlogText>

                    <BlogHeader>Webflow migration cost for a 50 to 100 page website</BlogHeader>
                    <BlogText>
                        Fifty URLs can represent five templates with repeated content or fifty unique layouts with
                        custom interactions. Build a route inventory that assigns every URL to a template, content
                        source, language, canonical, redirect disposition and acceptance test. Normalize repeated
                        patterns before estimating.
                    </BlogText>
                    <BlogList
                        items={[
                            "Static pages grouped by shared layout and component coverage.",
                            "CMS collections, fields, references, multi-references, slugs and item counts.",
                            "Assets, alt text, video, downloads and image transformations.",
                            "Forms, notifications, spam controls, file uploads and historical submissions.",
                            "Search, gated content, ecommerce, localization and custom scripts.",
                            "Metadata, canonicals, structured data, internal links and redirects.",
                            "Review rounds, content owners, approvals and launch dependencies.",
                        ]}
                    />
                    <BlogText>
                        A 50 to 100 page site can fit a standard tier when it collapses into a small set of clean
                        templates. It can also exceed Scale when pages are unique, content is inconsistent or multiple
                        business systems must be replaced. The inventory, not the URL count alone, decides.
                    </BlogText>

                    <BlogHeader>Enterprise Webflow migration pricing</BlogHeader>
                    <BlogText>
                        Enterprise work adds governance rather than only pages: identity, permissions, localization,
                        security review, legal approval, design-system ownership, multiple repositories or sites,
                        deployment environments, release management, observability, incident response and procurement.
                        These requirements should be priced as explicit workstreams with named acceptance evidence.
                        Where the target site is closer to an application than a brochure, that work sits under{" "}
                        <Link href="/services/custom-engineering" className={sourceLinkClass}>custom engineering</Link>{" "}
                        rather than a standard migration tier.
                    </BlogText>

                    <BlogHeader>Factors that increase the migration scope</BlogHeader>
                    <BlogList
                        items={[
                            "More unique templates, components and responsive states.",
                            "CMS reference graphs, rich text embeds, localized fields and inconsistent content.",
                            "Ecommerce catalog, checkout, orders, subscriptions, tax, fraud and customer accounts.",
                            "Forms, search, membership, personalization, experimentation and custom code.",
                            "CRM, marketing automation, analytics, consent and advertising integrations.",
                            "New information architecture, visual redesign, copywriting or asset production.",
                            "Accessibility remediation and regulated privacy or security requirements.",
                            "Compressed schedules, delayed content, additional reviewers or unclear decision rights.",
                        ]}
                    />

                    <BlogHeader>What Webflow actually exports</BlogHeader>
                    <BlogText>
                        Webflow&apos;s current
                        {" "}<a href="https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>code-export documentation</a>
                        {" "}says paid Workspace plans can export HTML, CSS, JavaScript and assets. It also says the
                        exported code excludes CMS databases and functionality, User Accounts, ecommerce databases and
                        functionality, localized content beyond the primary locale, code components, password
                        protection, form processing, existing form submissions and site search. User Accounts is a
                        particular trap here because the product itself was withdrawn; we walk through the consequences in{" "}
                        <Link href="/blog/webflow-user-accounts-sunset-date-2026" className={sourceLinkClass}>our guide to the Webflow User Accounts sunset</Link>.
                    </BlogText>
                    <BlogText>
                        CMS and ecommerce collections can be exported separately as CSV. That is data, not a working
                        target application. The migration still needs schemas, relationships, media, transformations,
                        validation, preview and publishing behavior.
                    </BlogText>

                    <BlogHeader>What a professional migration should include</BlogHeader>
                    <BlogList
                        items={[
                            "Discovery, inventory, dependency map and accepted target architecture.",
                            "Page, component, CMS, content, asset and integration migration.",
                            "Functional states including errors, validation, empty states and permissions.",
                            "Responsive implementation for agreed devices and browsers.",
                            "Accessibility checks against the agreed standard.",
                            "Analytics, consent, tag and conversion-event validation.",
                            "SEO inventory, rendered-output checks, URL mapping, redirects and sitemap.",
                            "Security configuration, credential handling and account ownership.",
                            "QA evidence, rollback plan, cutover, monitoring, handoff and support.",
                        ]}
                    />

                    <BlogHeader>What may not be included in a standard quote</BlogHeader>
                    <BlogText>
                        Ask for exclusions in writing. Common separate workstreams include new brand strategy,
                        photography, video, net-new copy, data cleansing, custom product development, complex
                        integrations, translations, legal or compliance advice, paid vendor plans and ongoing growth
                        work. An exclusion is not a problem when it is visible before signing. The URL mapping and
                        redirect workstream is the one most often assumed rather than quoted, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to your search rankings</Link>{" "}
                        explains why it deserves its own line.
                    </BlogText>

                    <BlogHeader>How to compare migration quotes without calling one padded</BlogHeader>
                    <BlogText>
                        A higher quote may include more work or a different risk allocation. Normalize each proposal
                        line by line before comparing price. Do not infer padding, overcharging or equivalent scope
                        without the underlying statements of work.
                    </BlogText>
                    <BlogList
                        items={[
                            "Same route and template inventory.",
                            "Same design and content responsibilities.",
                            "Same CMS, data, form, search and integration requirements.",
                            "Same SEO, accessibility, security and performance acceptance.",
                            "Same provider fees, support period, warranty and maintenance.",
                            "Same ownership, licensing, account and handoff terms.",
                        ]}
                    />

                    <BlogHeader>Who should you hire?</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Model</th><th className="p-4">Useful when</th><th className="p-4">Buyer must own or verify</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Independent specialist</td><td className="p-4">Scope is narrow and internal direction is strong</td><td className="p-4">Design, project management, QA, continuity and release</td></tr>
                                <tr><td className="p-4 font-bold">Migration studio</td><td className="p-4">A defined site needs accountable end-to-end delivery</td><td className="p-4">Relevant evidence, capacity, terms and handoff</td></tr>
                                <tr><td className="p-4 font-bold">Full-service agency</td><td className="p-4">Brand, content, marketing and engineering must move together</td><td className="p-4">Named team, workstream coordination and comparable scope</td></tr>
                                <tr><td className="p-4 font-bold">Internal team</td><td className="p-4">The organization has product, design and engineering capacity</td><td className="p-4">Opportunity cost, migration expertise and launch ownership</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Whichever model you pick, ask to see finished builds rather than a capability list. Ours are
                        documented in our{" "}
                        <Link href="/work" className={sourceLinkClass}>project case studies</Link>, and the people who do
                        the work are named on our{" "}
                        <Link href="/about" className={sourceLinkClass}>about page</Link>.
                    </BlogText>

                    <BlogHeader>Webflow ongoing costs after migration</BlogHeader>
                    <BlogText>
                        Leaving Webflow does not mean zero recurring cost. Build the target budget from hosting,
                        bandwidth, builds, CMS, database, forms, email, search, analytics, monitoring, backups,
                        security, domains, support and internal time. Use current provider terms and a realistic usage
                        scenario. Free allowances can change and may not fit commercial operation. Our breakdown of{" "}
                        <Link href="/blog/webflow-true-cost" className={sourceLinkClass}>what Webflow costs once every line is counted</Link>{" "}
                        sets out the categories to carry across, and{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={sourceLinkClass}>what Next.js hosting actually costs to run</Link>{" "}
                        does the same for the target side.
                    </BlogText>

                    <BlogText>
                        The two models do not have the same cost lines, which is why comparing a single monthly number is
                        misleading. Build both columns from your own current invoices and your provider&apos;s current
                        published terms. We deliberately do not publish Webflow&apos;s prices here: Webflow restructured
                        its plans in May 2026, pricing varies by plan and region, and a figure typed into an article ages
                        badly. Get each number from the source, on the day you budget.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Cost line</th>
                                    <th className="p-4">On Webflow</th>
                                    <th className="p-4">On a custom Next.js build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Platform / hosting</td><td className="p-4">Site plan, plus a workspace seat cost if more than one person edits</td><td className="p-4">Host plan; can start on a free allowance but commercial use usually needs a paid tier</td></tr>
                                <tr><td className="p-4 font-bold">CMS</td><td className="p-4">Bundled, with item and collection limits set by plan</td><td className="p-4">Separate service or self-hosted; priced by documents, seats or usage</td></tr>
                                <tr><td className="p-4 font-bold">Ecommerce</td><td className="p-4">Plan upgrade where applicable</td><td className="p-4">Commerce backend or payment provider fees, billed separately</td></tr>
                                <tr><td className="p-4 font-bold">Forms and email</td><td className="p-4">Bundled up to plan submission limits</td><td className="p-4">Form handling and transactional email provider</td></tr>
                                <tr><td className="p-4 font-bold">Bandwidth / builds</td><td className="p-4">Included within plan allowances</td><td className="p-4">Metered above the plan allowance; depends on traffic and build frequency</td></tr>
                                <tr><td className="p-4 font-bold">Search, analytics, monitoring</td><td className="p-4">Native or third-party add-ons</td><td className="p-4">Chosen per tool; several have usable free tiers</td></tr>
                                <tr><td className="p-4 font-bold">Maintenance</td><td className="p-4">Platform handles updates and security</td><td className="p-4">Yours or your vendor&apos;s: dependency updates, patching, monitoring</td></tr>
                                <tr><td className="p-4 font-bold">Exit cost</td><td className="p-4">Export is partial; some features do not come with you</td><td className="p-4">You hold the source, so moving host is a redeploy</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="The line people forget">
                        Maintenance. On Webflow it is bundled into the plan price and effectively invisible. On a custom
                        build it is real work that either you do, or you pay someone to do, or nobody does. A comparison
                        that ignores it will always make custom look cheaper than it is.
                    </InsightBox>
                    <BlogText>
                        If you are still deciding whether to move at all rather than how much it costs,{" "}
                        <Link href="/blog/webflow-vs-custom-website" className={sourceLinkClass}>Webflow versus a custom website</Link>{" "}
                        compares the two operating models directly, and{" "}
                        <Link href="/blog/leaving-webflow-2026" className={sourceLinkClass}>why teams are leaving Webflow in 2026</Link>{" "}
                        covers the triggers that usually start the conversation.
                    </BlogText>

                    <BlogHeader>Measure performance separately from rankings</BlogHeader>
                    <BlogText>
                        Webflow has no universal PageSpeed ceiling, and custom code has no automatic 90-plus result.
                        Test representative routes under recorded mobile and desktop conditions and inspect field Core
                        Web Vitals where available. Google says good Core Web Vitals support page experience, while
                        relevance and many other signals still affect search. Do not convert a lab-score change into a
                        promised ranking or revenue result. For what the individual metrics mean and how to read them,
                        see{" "}
                        <Link href="/blog/core-web-vitals-explained" className={sourceLinkClass}>Core Web Vitals explained</Link>{" "}
                        and{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how site speed relates to search performance</Link>.
                    </BlogText>

                    <BlogHeader>Treat availability as a requirement, not an outage anecdote</BlogHeader>
                    <BlogText>
                        An incident count taken over a fixed window is volatile evidence and cannot settle a migration
                        decision on its own. If availability matters, define the required service level, dependencies,
                        monitoring, backup, recovery objective, incident response and remedy for both current and
                        target systems.
                    </BlogText>

                    <BlogHeader>When does a Webflow migration pay for itself?</BlogHeader>
                    <BlogText>
                        There is no universal payback period. Compare the migration and ongoing cost with current
                        invoices, support, internal work and measurable business constraints. Model low, central and
                        high scenarios. After release, compare actual costs and outcomes without attributing every
                        change to the migration. For the cross-platform view of how these budgets are built, see our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={sourceLinkClass}>website migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader>How to get an accurate quote</BlogHeader>
                    <BlogList
                        items={[
                            "Provide read-only access or exports for pages, CMS, assets, forms and integrations.",
                            "Name the target outcomes, non-negotiable journeys and launch constraints.",
                            "Identify content owners, approvers and required review rounds.",
                            "State the expected account, repository, hosting and CMS ownership.",
                            "Ask for assumptions, exclusions, milestones, acceptance, change control and support.",
                            "Require current vendor fees and third-party licenses to be separated from agency price.",
                        ]}
                    />

                    <BlogHeader>PandaCodeGen commercial terms</BlogHeader>
                    <BlogText>
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. A refund is tied to
                        failure to deliver the signed scope, not a change of preference after work begins. Starter
                        includes 15 business days of launch defect support; Growth and Scale include 30 business days.
                        Custom deliverables transfer after full payment under the contract. PandaCodeGen retains
                        reusable tools and pre-existing code, and third-party components keep their licenses.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader>Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get your Webflow migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory templates, CMS, exports, integrations and SEO risk before proposing a
                            tier. Extra pages or features can be discussed against the same written scope.
                        </p>
                        <QuoteModalButton cta="webflow_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
