import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, BarChart3, Bot, Search, ShieldCheck } from "lucide-react";
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

const postId = "why-competitor-outranks-you";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Why Does My Competitor Outrank Me? An Evidence-Led SEO Gap Analysis";
const description =
    "Compare query intent, content, crawlability, internal links, reputation, page experience and first-party search data without blaming a CMS or promising rankings.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "why does my competitor outrank me",
        "SEO competitor analysis",
        "ranking gap analysis",
        "competitor organic traffic",
        "AI search visibility audit",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-15",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/why-competitor-outranks-you")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Bing AI Performance", url: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/why-competitor-outranks-you"),
            description,
            datePublished: "2026-02-15",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Next.js", "Website migration", "Web performance", "Technical SEO", "Content management systems"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web development", sameAs: ["https://en.wikipedia.org/wiki/Web_development"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
            ],
            wordCount: 1786,
            timeRequired: "PT9M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/why-competitor-outranks-you#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Competitor ranking gap", item: "https://www.pandacodegen.com/blog/why-competitor-outranks-you" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/why-competitor-outranks-you#webpage",
            url: "https://www.pandacodegen.com/blog/why-competitor-outranks-you",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/why-competitor-outranks-you#breadcrumb" },
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

export default function WhyCompetitorOutranksYouPage() {
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
                            { label: "Competitor ranking gap", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">SEO analysis</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Why Does My Competitor Outrank Me? <span className="italic text-cognac">Find the Actual Gap</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A competitor outranks you because of a gap in one of seven comparable areas: query intent, content depth, crawl and indexing health, links, page experience, entity signals, or something that changed outside your site. Ranking below someone tells you that a difference exists; it does not tell you which of the seven it is. Hold everything steady and change one thing at a time: the same search, the same
                            place, the same device, the same day, the same kind of result. Then make the smallest fix
                            your evidence actually supports.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current Google and Bing guidance on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 15, 2026" readTime="7 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Google uses many systems and signals; no public audit can assign a universal percentage to each cause.",
                                "Your CMS or framework is not an automatic ranking advantage or penalty.",
                                "Search Console is the source of truth for your Google Search performance; competitor-tool traffic is an estimate.",
                                "AI citations and classic rankings are related discovery surfaces, not one interchangeable score.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Search, title: "Query", body: "Intent, result type, locale, device and date." },
                            { icon: BarChart3, title: "Evidence", body: "Your own numbers, kept apart from anyone else's guesses." },
                            { icon: ShieldCheck, title: "Quality", body: "Is it useful, can it be crawled, and is it trusted." },
                            { icon: Bot, title: "AI", body: "Can you be quoted, and can you tell when you were." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="evidence-first">Start with evidence, not a platform verdict</BlogHeader>
                    <BlogText>
                        Record what you actually saw before you theorize about why. The query, the locale, the device, the date and the result type, then your own Search Console and analytics data, then the indexing and manual-action checks. Label every competitor visibility, link or traffic number as an estimate, because nobody outside their analytics can see the real figure.
                    </BlogText>
                    <BlogList
                        items={[
                            "Write down the exact search you ran, in which language and country, on which device, on what date, and what kind of result came back.",
                            "Record the competing URLs, titles, snippets and search features.",
                            "Use Search Console for your queries, pages, clicks, impressions and average position.",
                            "Use analytics for on-site behavior and outcomes, while accounting for attribution differences.",
                            "Label competitor visibility, link and traffic-tool values as third-party estimates.",
                            "Check manual actions, security issues, indexing and recent site changes before rewriting pages.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why we do not quote a competitor traffic multiple">
                        Nobody outside a competitor&apos;s own analytics can see their actual traffic. Third-party tools typically model it from sampled clickstream and estimated click-through rates, so treat any multiple you read as
                        an estimate rather than a measurement. It also cannot tell you why they are ahead: a tool showing
                        a gap does not establish which factor caused it. Work from your own Search Console data for
                        queries and positions you can verify, and use competitor estimates only to decide where to look
                        next.
                    </InsightBox>

                    <BlogHeader id="seven-gaps">Seven evidence groups to compare</BlogHeader>

                    <h3 id="intent" className="mb-4 mt-8 text-2xl font-bold text-charcoal">1. Query intent and result format</h3>
                    <BlogText>
                        The competitor&apos;s page may better match the task behind the query or the format currently
                        shown, such as a local result, product result, guide, comparison or video. Compare the actual
                        page purpose, completeness and freshness needed for that query. Do not copy its word count or
                        headings by default.
                    </BlogText>

                    <h3 id="content" className="mb-4 mt-8 text-2xl font-bold text-charcoal">2. Content usefulness and evidence</h3>
                    <BlogText>
                        Google&apos;s people-first guidance asks whether content adds original information or analysis,
                        demonstrates expertise, is trustworthy and leaves the reader able to achieve the task.
                        Add what only you can add: your own examples, plain definitions, how you decide, where the
                        advice stops working, when you checked, and a link for anything you assert. Then delete the
                        inflated headlines and any number you cannot source.
                    </BlogText>

                    <h3 id="technical" className="mb-4 mt-8 text-2xl font-bold text-charcoal">3. Crawl, index and rendered-output health</h3>
                    <BlogText>
                        Work from the rendered output rather than the editor view. Where the site is a JavaScript app,
                        the{" "}
                        <Link href="/blog/lovable-site-not-showing-on-google" className="text-cognac hover:underline">
                            Lovable indexing diagnostic
                        </Link>{" "}
                        shows how to confirm what Google actually fetched.
                    </BlogText>
                    <BlogList
                        items={[
                            "Index eligibility, robots controls, status codes and canonical choice.",
                            "Rendered main content and crawlable internal links.",
                            "Sitemaps, duplicate URLs, pagination and parameter behavior.",
                            "Accurate titles, descriptions and structured data that matches the visible page.",
                            "Security warnings, manual penalties, and anything left behind from a staging site or an old migration.",
                        ]}
                    />

                    <h3 id="architecture" className="mb-4 mt-8 text-2xl font-bold text-charcoal">4. Information architecture and internal links</h3>
                    <BlogText>
                        A strong page can remain hard to discover when it is orphaned or buried in a confusing
                        structure. Map topic relationships, navigation, breadcrumbs and contextual internal links.
                        Use descriptive anchor text where it helps people understand the destination. Consolidate true
                        duplication instead of publishing many thin pages for close variants.
                    </BlogText>

                    <h3 id="reputation" className="mb-4 mt-8 text-2xl font-bold text-charcoal">5. External reputation, links and local or entity evidence</h3>
                    <BlogText>
                        Two similar pages can separate on reputation: who writes about you, whether your business
                        listings are accurate, your reviews, recognition from people who know the field, and saying
                        the same things about yourself everywhere. Check whether each source is any good and whether
                        it is actually about your topic. Google identifies links created mainly to manipulate rankings as link spam, so a
                        gap analysis is not permission to buy or automate links.
                    </BlogText>

                    <h3 id="experience" className="mb-4 mt-8 text-2xl font-bold text-charcoal">6. Page experience and task completion</h3>
                    <BlogText>
                        Go through the page on a phone the way a customer would. Can they read it and tap things
                        without pinching? Does a popup get in the way? Is it served over HTTPS? Can someone using a
                        screen reader get around it? Does the layout jump while it loads? Then look at your real-user{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            Core Web Vitals
                        </Link>{" "}
                        where data exists. Google says Core Web Vitals
                        are used by ranking systems but also says good scores do not guarantee top rankings and
                        relevance remains fundamental. A Lighthouse score is not a ranking cutoff. The evidence and its
                        limits are set out in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">
                            how website speed affects SEO
                        </Link>
                        , and the testing method in our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">
                            PageSpeed process
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        Test the competing page the same way you test your own. Run both URLs through the same tool, on
                        the same device profile and network conditions, on the same day, and read the field section
                        separately from the lab section on each. A comparison assembled from your throttled mobile run
                        and their unthrottled desktop run is not evidence of anything. Where field data exists for both,
                        that is the more useful half of the comparison, because it reflects the devices and connections
                        real visitors bring.
                    </BlogText>

                    <h3 id="market" className="mb-4 mt-8 text-2xl font-bold text-charcoal">7. Demand, competition and measurement changes</h3>
                    <BlogText>
                        Traffic moves for reasons that have nothing to do with your page. The season changed. Something
                        was in the news. A competitor launched. People started phrasing the search differently. Google
                        updated. Your tracking broke. Or the results page itself changed shape. Compare query and
                        page trends, annotate releases and updates, and avoid assigning causation from one before-and-
                        after chart. Our write-up of the{" "}
                        <Link href="/blog/google-march-2026-update" className="text-cognac hover:underline">
                            March 2026 core update
                        </Link>{" "}
                        shows how to check a rollout window against your own release dates.
                    </BlogText>

                    <BlogHeader id="cms">Does framework choice create an automatic Google advantage?</BlogHeader>
                    <BlogText>
                        Google&apos;s public guidance does not grant a framework-wide ranking bonus. WordPress, Webflow,
                        Shopify and custom applications can each publish crawlable, useful and fast pages, or fail to
                        do so. Diagnose rendered output and user experience on representative routes. Migrate only
                        when measured requirements remain blocked and the business case justifies migration risk.
                    </BlogText>
                    <BlogText>
                        Platform-level diagnostics for the common cases are here:{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">
                            fixing a slow WordPress site
                        </Link>
                        ,{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className="text-cognac hover:underline">
                            auditing Squarespace for SEO
                        </Link>{" "}
                        and{" "}
                        <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">
                            testing a slow Wix site
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader id="ai-discovery">What changes for AEO, GEO and AI search?</BlogHeader>
                    <BlogText>
                        Google&apos;s July 2026 guidance says its existing SEO fundamentals apply to AI Overviews and AI
                        Mode, with no additional technical requirement or special schema needed. Eligible pages must be
                        indexed and able to show a snippet, but inclusion is not guaranteed. Google's advice is ordinary: let crawlers reach the page, link to it from your own site, make it
                        decent to use, put the important things in text rather than an image, support them with media,
                        and keep your structured data matching what a visitor can actually see.
                    </BlogText>
                    <BlogText>
                        Bing introduced AI Performance in Webmaster Tools public preview in February 2026. Its citation counts do not tell you where you appeared, how much
                        authority you have, or how important the page is. Use that
                        product for supported Microsoft surfaces and keep ordinary search, AI citation and business
                        outcome metrics separate. How we structure those signals is set out in our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac hover:underline">
                            answer-engine playbook
                        </Link>{" "}
                        and on our{" "}
                        <Link href="/ai-info" className="text-cognac hover:underline">
                            AI information page
                        </Link>
                        .
                    </BlogText>
                    <InsightBox variant="info" label="No AEO or GEO guarantee">
                        Clear entities, primary evidence and machine-readable facts can improve understanding, but no
                        schema, file, framework or copy pattern guarantees an AI citation or recommendation.
                    </InsightBox>

                    <BlogHeader id="audit-workflow">A practical competitor-gap workflow</BlogHeader>
                    <BlogText>
                        One query-page pair at a time, with a dated snapshot. Validate it in Search Console, inspect the rendered URL, classify the gap against the seven evidence groups, then separate what you observed from what you estimated, inferred and still do not know. One bounded change, one primary metric, guardrails, and an evidence-appropriate wait before you judge it.
                    </BlogText>
                    <BlogList
                        items={[
                            "Choose the highest-value query-page pair and save a dated result snapshot.",
                            "Validate your page in Search Console and inspect the rendered URL.",
                            "Classify the likely gap across the seven evidence groups.",
                            "List what is observed, estimated, inferred and still unknown.",
                            "Choose one bounded intervention with a primary metric and guardrails.",
                            "Record the release and allow an evidence-appropriate observation window.",
                            "Keep, refine or reverse the change based on results and confounders.",
                        ]}
                    />

                    <BlogHeader id="prioritize">How to prioritize the work</BlogHeader>
                    <BlogText>
                        For each thing on your list, ask five questions. What is it worth to the business? How good is
                        the evidence? How much work is it? Can you undo it if it goes wrong? What could it break? Fix
                        anything keeping pages out of the index first, then the serious technical faults. After that,
                        work on whether the page really answers the search, and on the content itself.
                        Treat migrations as higher-risk interventions that require URL inventories, redirects,
                        rendered-output parity, monitoring and rollback. The controls behind that are described in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what a migration does to search visibility
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader id="our-offer">PandaCodeGen&apos;s SEO-safe migration offer</BlogHeader>
                    <BlogText>
                        We start with a free fit audit, separate repair from migration, and prepare a plan for
                        revenue-generating WordPress, Webflow or GoHighLevel sites. If we recommend migrating, that comes with every URL listed, the evidence
                        you sign off against, what protects your search traffic, and the conditions under which we
                        roll it back. We do not
                        promise ranking retention, a traffic multiplier, revenue lift or AI citations. Service detail
                        sits under{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">
                            WordPress migration
                        </Link>{" "}
                        and{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>
                        , and recent builds are on the{" "}
                        <Link href="/work" className="text-cognac hover:underline">
                            work page
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        <Link href="/pricing" className="text-cognac hover:underline">
                            PandaCodeGen planning tiers
                        </Link>{" "}
                        start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to
                        failure to deliver the signed scope. Where the accepted project terms record it, Starter includes 15 business days of launch defect support; Growth and Scale include 30.
                    </BlogText>

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
                        <h2 className="mb-3 font-serif text-3xl">Find the gap before changing platforms</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will separate search evidence from estimates, identify the smallest defensible fix and
                            scope a migration only when it is justified.
                        </p>
                        <QuoteModalButton cta="competitor_seo_gap_audit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
