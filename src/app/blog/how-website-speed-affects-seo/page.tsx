import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, ChartNoAxesCombined, Gauge, SearchCheck } from "lucide-react";
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
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "how-website-speed-affects-seo";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How Website Speed Affects SEO: Evidence and Limits in 2026";
const description =
    "How Core Web Vitals fit Google's page-experience systems, why Lighthouse is not a ranking cutoff, and how to test search and business effects without assuming causation.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how website speed affects SEO",
        "website speed ranking factor",
        "Core Web Vitals SEO",
        "PageSpeed ranking",
        "slow website SEO impact",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-09",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-website-speed-affects-seo")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Google Search Central: Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { name: "Google Search Central: page experience", url: "https://developers.google.com/search/docs/appearance/page-experience" },
    { name: "Google Search Central: debugging Search traffic drops", url: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" },
    { name: "PageSpeed Insights documentation", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    { name: "Google Search Central: mobile-first indexing", url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" },
    { name: "web.dev case study: Swappie", url: "https://web.dev/case-studies/swappie" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-09",
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
            articleSection: "SEO and performance",
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

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function SpeedAndSeoGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Website speed and SEO", href: `/blog/${postId}` }]} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">SEO and performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How Website Speed Affects SEO <span className="italic text-cognac">Without a Fake Formula</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Google uses Core Web Vitals in its broader ranking systems and recommends good page
                            experience. It also says good scores do not guarantee top rankings and relevance remains
                            fundamental. There is no universal “100 milliseconds equals one percent” rule.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Google Search, PageSpeed and web.dev guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="March 9, 2026" readTime="11 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The defensible answer</h2>
                        <BlogList
                            items={[
                                "Core Web Vitals contribute to Google's broader ranking systems; they are not the whole ranking algorithm.",
                                "Google publishes no Lighthouse score that guarantees a position or triggers a fixed penalty.",
                                "Mobile-first indexing concerns the mobile version's content; a mobile lab score is not an indexing grade.",
                                "Performance can affect whether a visitor can use a page, but commercial impact depends on the route, audience and funnel.",
                                "Use Search Console, field performance, analytics and a release log to test a property-specific hypothesis.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Search", body: "Pages, queries, impressions, clicks, positions, indexing and SERP context." },
                            { icon: Gauge, title: "Experience", body: "Field LCP, INP and CLS plus repeated lab diagnostics." },
                            { icon: ChartNoAxesCombined, title: "Business", body: "Journey, traffic source, device, conversion, value and confounders." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What Google confirms about Core Web Vitals</BlogHeader>
                    <BlogText>
                        Google&apos;s current guidance defines Core Web Vitals as real-user metrics for loading,
                        responsiveness and visual stability. At the 75th percentile, the published “good” thresholds are
                        LCP within 2.5 seconds, INP within 200 milliseconds and CLS at or below 0.1. Google says its
                        ranking systems use these metrics, while also stating that strong page experience does not
                        override relevance and good report scores do not guarantee top rank.
                    </BlogText>
                    <BlogText>
                        There is no single “most important SEO speed metric” disclosed by Google for every query.{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            LCP, INP and CLS
                        </Link>{" "}
                        cover different parts of experience. A technically relevant issue is the one that
                        affects the visitor journey and fails the measured distribution.
                    </BlogText>

                    <BlogHeader>PageSpeed score is not a ranking cutoff</BlogHeader>
                    <BlogText>
                        PageSpeed Insights can show eligible field data and a Lighthouse lab result. The 0-to-100
                        Lighthouse performance score is a weighted diagnostic generated under a synthetic profile. It
                        changes with page state, test conditions and tool versions. Google does not publish 70, 90 or
                        100 as a direct ranking requirement. Our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">
                            repeatable process for improving a Lighthouse score
                        </Link>{" "}
                        explains how to record the test profile so the number means something.
                    </BlogText>
                    <InsightBox variant="warning" label="Common category error">
                        Search Console Core Web Vitals, CrUX field data and a mobile Lighthouse score are related
                        performance tools, not interchangeable values. Label the source, population, period and
                        conditions every time.
                    </InsightBox>

                    <BlogHeader>Mobile-first indexing does not mean “mobile score decides rank”</BlogHeader>
                    <BlogText>
                        Google primarily uses the mobile version of content for indexing and ranking. Its guidance
                        focuses on keeping mobile content, metadata, structured data, images and crawl access equivalent
                        and usable. This does not turn one mobile Lighthouse run into a ranking score.
                    </BlogText>

                    <BlogHeader>Why speed and search results can move together</BlogHeader>
                    <BlogText>
                        Several mechanisms can produce that pattern, and they are worth separating before deciding what
                        to fix. The technical side is covered in{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className="text-cognac hover:underline">
                            why a website loads slowly
                        </Link>
                        , and the search side in our{" "}
                        <Link href="/blog/why-competitor-outranks-you" className="text-cognac hover:underline">
                            competitor ranking gap analysis
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "Core Web Vitals are one part of Google's broader systems.",
                            "Server failure, blocked resources or broken rendering can affect crawl and usable content as well as performance.",
                            "A redesign or migration often changes content, internal links, metadata, layout, tracking and platform behavior at the same time.",
                            "Demand, competition, SERP presentation, links, seasonality and Google updates can move while performance changes.",
                        ]}
                    />
                    <BlogText>
                        The presence of a correlation does not identify the mechanism or prove a fixed effect. Claims
                        that bounce rate automatically lowers rank, every 100 milliseconds creates the same revenue
                        change, or speed alone moves a page a fixed number of positions exceed Google&apos;s guidance.
                    </BlogText>

                    <BlogHeader>How to measure a search effect</BlogHeader>
                    <BlogList
                        items={[
                            "Annotate the exact release and list all material content, link, design, tracking, URL and technical changes.",
                            "Compare Search Console pages and queries by country, device and search type across sensible periods.",
                            "Check indexing, crawl, statuses, robots, canonicals, rendered content, sitemaps and server errors.",
                            "Compare URL or template field Core Web Vitals where eligible data exists and retain lab traces for diagnosis.",
                            "Use unaffected pages or staged rollouts as a comparison where the site and risk permit it.",
                            "Report uncertainty and competing explanations instead of assigning the full change to speed.",
                        ]}
                    />
                    <BlogText>
                        If the timing lines up with a Google rollout rather than one of your releases, check the dates
                        against the{" "}
                        <Link href="/blog/google-march-2026-update" className="text-cognac hover:underline">
                            record of the March 2026 core update
                        </Link>{" "}
                        before acting. Where the site runs on WordPress and the change followed a speed regression, the{" "}
                        <Link href="/blog/wordpress-traffic-drop-speed" className="text-cognac hover:underline">
                            WordPress traffic drop walkthrough
                        </Link>{" "}
                        covers the same evidence in platform terms.
                    </BlogText>

                    <BlogHeader>How to measure business impact</BlogHeader>
                    <BlogList
                        items={[
                            "Define the affected journey and event, including test, refund and attribution treatment.",
                            "Segment by route, device, traffic source, market, new or returning visitor and experiment state.",
                            "Track usability and failure signals such as interaction delay, form error, abandonment and support contacts.",
                            "Control or document offer, price, campaign, creative, inventory, seasonality and other releases.",
                            "Use a range and confidence level; do not linearly extrapolate another company's case study.",
                        ]}
                    />

                    <BlogHeader>How to read performance case studies</BlogHeader>
                    <BlogText>
                        A web.dev case study can show that a named company changed particular metrics and observed
                        particular outcomes during a stated period. It does not establish the same multiplier for
                        another industry, traffic mix, implementation or experiment. Use it to generate hypotheses and
                        study methods, then measure your own property.
                    </BlogText>

                    <BlogHeader id="our-own-rebuild">Our own rebuild, and what it does not prove</BlogHeader>
                    <BlogText>
                        <Link href="/work/panda-patches" className="text-cognac hover:underline">
                            Panda Patches
                        </Link>{" "}
                        is owned by a PandaCodeGen co-founder, so this is founder-affiliated evidence rather
                        than an independent client result. It ran on WordPress and WooCommerce for three years at roughly
                        64 mobile PageSpeed with an LCP near 5.8 seconds. We rebuilt it on Next.js, Sanity, Supabase and
                        Square, and the mobile lab scores moved into the 90s.
                    </BlogText>
                    <InsightBox variant="warning" label="Read this the way we just told you to read case studies">
                        The paragraph above is exactly the kind of evidence the previous section warns about, so hold it to
                        the same standard. It is a lab measurement on one property, taken before and after a rebuild that
                        changed the platform, the hosting, the templates and the images all at once. It does not isolate
                        which change produced the result, it does not establish a multiplier for your site, and it is not
                        a search-ranking claim. We publish it because it is our own property and we can state the
                        conditions, not because it proves what a rebuild will do for you.
                    </InsightBox>

                    <BlogHeader>Framework and platform choice</BlogHeader>
                    <BlogText>
                        WordPress, Shopify, Webflow, Wix, Squarespace and Next.js do not have universal score or ranking
                        ceilings. Compare representative routes, content, integrations, field data, editor needs,
                        security, ownership, operating cost and available controls. Optimize the current platform first
                        when it can meet the requirement; migrate when residual constraints and total cost justify it.
                    </BlogText>
                    <BlogText>
                        Where the platform is the suspected constraint, start from the route-level diagnostic for that
                        stack:{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">
                            fixing a slow WordPress site
                        </Link>
                        ,{" "}
                        <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">
                            testing a slow Wix site
                        </Link>
                        ,{" "}
                        <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">
                            testing a slow Squarespace site
                        </Link>{" "}
                        or{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline">
                            diagnosing a Shopify Dawn theme
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Migration protects controls, not outcomes</BlogHeader>
                    <BlogText>
                        These are the controls a migration plan should name, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what a migration does to search visibility
                        </Link>{" "}
                        explains how each one is tested. Scoping and delivery sit under{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">
                            our WordPress migration service
                        </Link>{" "}
                        and{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "Keep valuable URLs stable where practical and map every approved change to a relevant destination.",
                            "Preserve content, metadata, canonicals, internal links, media and structured data.",
                            "Crawl staging and production, test redirects and errors, submit sitemaps and keep rollback.",
                            "Record representative performance acceptance and monitor Search Console after launch.",
                        ]}
                    />
                    <BlogText>
                        These practices reduce avoidable technical risk. They do not guarantee ranking retention,
                        recovery, traffic growth or a timeline because search engines control those outcomes. What a
                        scoped engagement covers is set out on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">
                            pricing page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a></li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your SEO-safe performance plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will connect route-level field and lab evidence to search and funnel data, then scope
                            optimization or migration without inventing a ranking or revenue result.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
