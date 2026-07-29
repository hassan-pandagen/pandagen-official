import { ogImageForPath } from "@/lib/seo/og";
import { Activity, ArrowLeft, ArrowRight, BarChart3, Gauge, SearchCheck, Wrench } from "lucide-react";
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

const postId = "wordpress-traffic-drop-speed";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WordPress Traffic Drop in 2026: Speed, SEO, Tracking or Demand?";
const description =
    "Diagnose a WordPress traffic drop across measurement, technical changes, search demand, Google updates, content, competition and page experience before choosing a fix.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WordPress traffic drop",
        "WordPress SEO traffic down",
        "website traffic dropped",
        "WordPress speed SEO",
        "Google Search Console traffic drop",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-01-28",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wordpress-traffic-drop-speed")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Google debugging traffic drops", url: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
    { name: "Google Search status dashboard", url: "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history" },
    { name: "Google core update guidance", url: "https://developers.google.com/search/updates/core-updates" },
    { name: "Google page experience guidance", url: "https://developers.google.com/search/docs/appearance/page-experience" },
    { name: "Google Core Web Vitals", url: "https://web.dev/articles/vitals" },
    { name: "Search Console performance report", url: "https://support.google.com/webmasters/answer/7576553" },
    { name: "Google Analytics data collection", url: "https://developers.google.com/analytics/devguides/collection/ga4" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-01-28",
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
            articleSection: "SEO diagnostics",
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

export default function WordPressTrafficDropPage() {
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
                            { label: "WordPress traffic drop", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Search diagnostics</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WordPress Traffic Drop <span className="italic text-cognac">Find the Cause Before the Fix</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Traffic can fall for a lot of reasons. Your analytics broke. Google stopped crawling or
                            indexing pages. Something shipped and changed the site. Fewer people are searching for it.
                            A competitor got better. The content was thin. Google changed its ranking. Or the page is
                            unpleasant to use. Speed is one possible cause on that list, not the answer.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current Google documentation on July 24, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Jan 28, 2026" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">First response</h2>
                        <BlogList
                            items={[
                                "Work out what actually fell. Clicks from Search? Impressions? Sessions in your analytics? Conversions? Money?",
                                "Then narrow it down. Which dates, which pages, which searches, which countries, which devices, and which channels.",
                                "Check the obvious culprits: did anyone change your tracking, has Search Console sent you a message, are pages still indexed, is the server misbehaving, and what shipped recently.",
                                "Check whether Google was having a bad day, and whether people simply stopped searching for it.",
                                "Do not migrate, roll back to a backup, or blame speed until the evidence points there.",
                            ]}
                        />
                    </section>

                    <InsightBox variant="info" label="Why no percentage is attached to speed here">
                        This guide gives no fixed share of traffic lost to a given delay, and it does not treat speed as
                        the cause of a ranking change. Clicks move with demand, competition, content, indexing, releases,
                        measurement and page experience at the same time, so a percentage taken from another site cannot
                        explain what happened on yours. Nothing here presents free hosting, AI citations or a traffic
                        recovery as an automatic result of moving off WordPress either. Work the evidence in order and
                        let it name the cause.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: BarChart3, title: "Measure", body: "Search Console, analytics and business events." },
                            { icon: Wrench, title: "Technical", body: "Release, crawl, index, render and server behavior." },
                            { icon: SearchCheck, title: "Search", body: "Queries, demand, competition, content and updates." },
                            { icon: Gauge, title: "Experience", body: "Field performance and affected journeys." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="define">Define the drop precisely</BlogHeader>
                    <BlogList
                        items={[
                            "Start and end date, comparison period and timezone",
                            "Absolute and percentage change, with normal variation shown",
                            "Search clicks and impressions versus analytics sessions",
                            "Affected landing pages, templates, queries, devices and countries",
                            "Branded versus non-branded demand where query data permits",
                            "Conversions, transactions, errors and revenue for the same cohorts",
                        ]}
                    />
                    <BlogText>
                        A sitewide analytics decline with stable Search Console clicks may be tracking. Falling
                        impressions may indicate demand, visibility or indexing. Stable impressions with lower clicks
                        may involve position, result appearance, competition or intent. Start from the pattern.
                    </BlogText>

                    <BlogHeader id="measurement">Path one: measurement changed</BlogHeader>
                    <BlogList
                        items={[
                            "Analytics tag, container, property, stream or consent configuration changed",
                            "Cookie choice now prevents analytics until consent",
                            "A route, template, domain or payment handoff lost tracking",
                            "Filters, attribution, identity, timezone or channel rules changed",
                            "Browser or server events duplicate, fail or use different event definitions",
                        ]}
                    />
                    <BlogText>
                        Compare analytics with Search Console, server logs and business systems. Test consent states,
                        browsers, routes and transaction handoffs. Repair collection before interpreting the apparent
                        decline as lost users.
                    </BlogText>

                    <BlogHeader id="technical">Path two: a technical or release problem</BlogHeader>
                    <BlogList
                        items={[
                            "Noindex, robots, authentication or firewall behavior changed",
                            "Canonicals, redirects, status codes, hreflang or sitemaps changed",
                            "Templates lost rendered content, metadata, links or structured data",
                            "Server errors, timeouts, DNS, certificate or cache failures increased",
                            "A plugin, theme, WordPress, hosting or content release aligns with the decline",
                            "Internal links or navigation stopped exposing important pages",
                        ]}
                    />
                    <BlogText>
                        Use URL Inspection on representative pages and compare rendered output with the accepted
                        baseline. Review release, hosting, plugin and incident logs. Check whether the affected page
                        groups share a template or change. Attributing work to a named component is covered in our{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">WordPress plugin audit guide</Link>.
                    </BlogText>

                    <BlogHeader id="demand">Path three: demand or seasonality changed</BlogHeader>
                    <BlogText>
                        Google&apos;s traffic-drop guidance recommends using Google Trends to understand whether interest
                        changed. Compare equivalent seasonal periods, campaign activity, brand search, inventory and
                        market events. A technically healthy site can receive fewer impressions when fewer people search
                        for its topics or when language and intent shift.
                    </BlogText>

                    <BlogHeader id="search">Path four: search systems, content or competition changed</BlogHeader>
                    <BlogList
                        items={[
                            "Compare the dates with the Google Search status dashboard.",
                            "Segment pages and queries instead of attributing a sitewide cause immediately.",
                            "Review whether the content still meets the searcher's task better than available alternatives.",
                            "Inspect title and result appearance changes, SERP features and competing pages.",
                            "For a broad core update, use Google's current core-update guidance and avoid quick-fix claims.",
                            "Improve people-first usefulness rather than writing for a supposed platform preference.",
                        ]}
                    />

                    <BlogHeader id="speed">Where speed and Core Web Vitals fit</BlogHeader>
                    <BlogText>
                        Google says <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals</Link> are used by its ranking systems, but page experience is not one
                        signal and good scores do not guarantee top rankings. Use field data for the affected page group
                        where available. Check whether performance changed before the decline and whether the pages,
                        devices and countries align. A Lighthouse score taken after the event does not prove causation.
                        The wider evidence on{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how website speed affects SEO</Link>{" "}
                        sets out what page experience can and cannot explain.
                    </BlogText>
                    <InsightBox variant="info" label="A useful performance test">
                        Compare field distributions and release dates, then run controlled diagnostics on representative
                        affected and unaffected pages. Look for a shared slow template, origin regression, asset,
                        third-party script or interaction. Treat the result as one evidence stream.
                    </InsightBox>

                    <BlogHeader id="console">A Search Console investigation sequence</BlogHeader>
                    <BlogList
                        items={[
                            "Open the Performance report and set the exact decline and comparison periods.",
                            "Inspect clicks, impressions, average position and click-through rate separately.",
                            "Segment by page, query, country, device and search appearance.",
                            "Export affected and unaffected groups for comparison.",
                            "Review indexing, manual actions, security issues and Core Web Vitals reports.",
                            "Inspect representative URLs and confirm the selected canonical and rendered output.",
                            "Annotate releases, incidents, content changes and Google status events.",
                        ]}
                    />

                    <BlogHeader id="patterns">How to read common patterns</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1020px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Pattern</th><th className="p-4">Possible explanations</th><th className="p-4">Next check</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Analytics down, Search clicks stable</td><td className="p-4">Collection, consent, filtering or channel change</td><td className="p-4">Tag and event validation by route and consent state</td></tr>
                                <tr><td className="p-4 font-bold">Impressions down for one template</td><td className="p-4">Indexing, rendering, internal links, content or demand</td><td className="p-4">Template output, URL Inspection and query trend</td></tr>
                                <tr><td className="p-4 font-bold">Impressions stable, clicks down</td><td className="p-4">Position, result appearance, intent or competitors</td><td className="p-4">Query and page result comparison</td></tr>
                                <tr><td className="p-4 font-bold">All channels down</td><td className="p-4">Tracking, outage, brand demand, campaign or business change</td><td className="p-4">Server, business systems and channel source data</td></tr>
                                <tr><td className="p-4 font-bold">Drop follows release</td><td className="p-4">Technical, content, analytics or performance regression</td><td className="p-4">Change diff, affected group and rollback criteria</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="timeline">Do not invent a recovery window</BlogHeader>
                    <BlogText>
                        Recovery depends on the cause. Tracking data may recover only after collection is repaired.
                        Technical fixes still need recrawling and processing. Demand may not rebound on a chosen
                        schedule. Core-update assessment can extend beyond the rollout. Record checkpoints and evidence
                        instead of promising rankings return within a fixed number of days.
                    </BlogText>

                    <BlogHeader id="actions">Match the action to the cause</BlogHeader>
                    <BlogList
                        items={[
                            "Measurement: repair collection, consent and event definitions.",
                            "Technical: restore crawl, index, render, link, status and server correctness.",
                            "Demand: adjust forecast, content and acquisition strategy to observed intent.",
                            "Content: improve usefulness, accuracy, structure and differentiation for affected tasks.",
                            "Performance: repair measured route and interaction bottlenecks.",
                            "Platform: optimize or migrate only when the implementation or operating model is the demonstrated constraint.",
                        ]}
                    />
                    <BlogText>
                        When the evidence points at the performance path, work through our{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">evidence-led methods for fixing a slow WordPress site</Link>{" "}
                        before changing platform.
                    </BlogText>

                    <BlogHeader id="migrate">Will migrating from WordPress recover traffic?</BlogHeader>
                    <BlogText>
                        Not automatically. Migration can repair defined technical or performance constraints but can
                        also create URL, content, rendering, analytics and cutover risk. Compare a WordPress repair with
                        the target architecture. Use a dated inventory, stable URLs where practical, relevant redirects,
                        rendered checks, Search Console monitoring and rollback conditions. Rankings, traffic and timing
                        are not guaranteed. The controls are listed in order in our{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">step-by-step WordPress to Next.js migration guide</Link>, the
                        search risk in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">what a migration does to existing rankings</Link>, and
                        the platform trade-offs in{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress and Next.js side by side</Link>. Delivery
                        scope sits on our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration service page</Link>{" "}
                        and planning tiers on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>.
                    </BlogText>

                    <BlogHeader id="ai">AI citations and search features</BlogHeader>
                    <BlogText>
                        Do not use anecdotal prompt tests as a traffic-recovery guarantee. Keep content crawlable,
                        accurate, source-linked and clear about entities and evidence. Follow current crawler and product
                        documentation. No framework, schema type, `llms.txt` file or performance score guarantees
                        inclusion, citation or recommendation by an AI system.
                    </BlogText>

                    <BlogHeader id="handoff">Investigation handoff</BlogHeader>
                    <BlogList
                        items={[
                            "Defined metric, date, magnitude and affected cohorts",
                            "Search Console, analytics, server and business-system comparison",
                            "Release and incident timeline",
                            "Google status and demand context",
                            "Supported and rejected hypotheses with evidence",
                            "Chosen intervention, owner, acceptance and rollback",
                            "Post-change monitoring schedule without guaranteed outcomes",
                        ]}
                    />

                    <BlogHeader id="related">Related reading</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        <li><Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">Diagnosing a slow Divi build</Link></li>
                        <li><Link href="/blog/elementor-kills-seo" className="text-cognac hover:underline">Testing Elementor pages for search and speed problems</Link></li>
                        <li><Link href="/work/mycustompatches" className="text-cognac hover:underline">A dated WordPress migration we delivered</Link></li>
                    </ul>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Activity className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Diagnose the decline before proposing migration</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We can map search, analytics, releases and technical evidence, then scope the smallest
                            defensible repair or migration plan.
                        </p>
                        <QuoteModalButton cta="wordpress_traffic_drop_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
