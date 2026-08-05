import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
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
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-website-speed-affects-seo")],
    },
    twitter: { card: "summary_large_image", title, description },
};

// Google and web.dev documentation is verified before publication but is deliberately not listed
// as a page source and not emitted into citation[]. Claims drawn from it are attributed in prose.
// Do not reintroduce a `sources` array of Google URLs here.

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/how-website-speed-affects-seo"),
            description,
            datePublished: "2026-03-09",
            dateModified: "2026-08-03",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Web performance", "Core Web Vitals", "Lighthouse", "Rendering strategies", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO and performance",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
                { "@type": "Thing", name: "Core Web Vitals", sameAs: ["https://en.wikipedia.org/wiki/Core_Web_Vitals"] },
                { "@type": "SoftwareApplication", name: "Lighthouse", sameAs: ["https://en.wikipedia.org/wiki/Lighthouse_(software)"] },
            ],
            wordCount: 2013,
            timeRequired: "PT10M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/how-website-speed-affects-seo#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Website speed and SEO", item: "https://www.pandacodegen.com/blog/how-website-speed-affects-seo" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/how-website-speed-affects-seo#webpage",
            url: "https://www.pandacodegen.com/blog/how-website-speed-affects-seo",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/how-website-speed-affects-seo#breadcrumb" },
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
                            Reviewed August 3, 2026 against current Google Search and PageSpeed guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="March 9, 2026" readTime="5 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The defensible answer</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Yes, site speed affects SEO, and it does so through one narrow channel: Core Web Vitals
                            feed Google&apos;s ranking systems as one input among many. What it does not do is set a
                            score you have to clear. There is no Lighthouse number that guarantees a position or
                            triggers a penalty, and a fast page that answers the query badly still loses to a slower
                            page that answers it well. Five propositions hold up; everything else you will read on
                            this topic is inference from them.
                        </p>
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

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">Three evidence streams, and why you need all three</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        A speed-and-search argument is only as good as the evidence behind it, and no single stream
                        settles it. Search data tells you what changed in rankings and impressions but not why.
                        Experience data tells you what real visitors met and what a lab trace blames it on. Business
                        data tells you whether any of it was worth money. Read one stream alone and you will attribute
                        a traffic change to speed that a competitor&apos;s new page actually caused.
                    </p>
                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Search", body: "What Search Console shows, and what else was on the page." },
                            { icon: Gauge, title: "Experience", body: "Field LCP, INP and CLS plus repeated lab diagnostics." },
                            { icon: ChartNoAxesCombined, title: "Business", body: "What people did, what it was worth, and what else changed." },
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
                        Google&apos;s guidance, as read on August 3, 2026, defines Core Web Vitals as real-user metrics for loading,
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
                        changes with page state, test conditions and tool versions. The 90-to-100 range is Lighthouse&apos;s
                        own &ldquo;good&rdquo; band, meaning the tool&apos;s verdict on its own weighted diagnostic, and
                        that is the whole of what it means. Google does not publish 70, 90 or 100 as a direct ranking
                        requirement. Our{" "}
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
                            "A redesign or migration usually changes the content, the internal links, the metadata, the layout, the tracking and the platform all at once.",
                            "Demand, competitors, how results are displayed, your links, the season and Google itself can all shift while you are changing speed.",
                        ]}
                    />
                    <BlogText>
                        The presence of a correlation does not identify the mechanism or prove a fixed effect. Claims
                        that bounce rate automatically lowers rank, every 100 milliseconds creates the same revenue
                        change, or speed alone moves a page a fixed number of positions exceed Google&apos;s guidance.
                    </BlogText>

                    <BlogHeader id="grading-the-claims">Four things you will be told, graded</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Search this question and four claims come back almost every time. They are not equally
                            true, and the weakest one is usually stated with the most confidence. Taking them in order
                            of how well they hold up.
                        </BlogText>
                    </div>
                    <BlogText>
                        <strong>Core Web Vitals are used by ranking systems. True.</strong> Google says so directly,
                        and also says good scores do not guarantee top rankings and that relevance remains
                        fundamental. Both halves are the claim; quoting only the first half is where the trouble
                        starts.
                    </BlogText>
                    <BlogText>
                        <strong>Mobile-first indexing means mobile speed matters most. Half true, and the wrong
                        half is usually the one repeated.</strong> Google primarily uses the mobile version of
                        content for indexing, which is about the content being present and crawlable on mobile. It
                        does not mean a mobile Lighthouse score decides rank.
                    </BlogText>
                    <BlogText>
                        <strong>Faster pages get crawled more, so speed helps via crawl budget. Overstated for
                        almost every site that asks.</strong> Crawl budget is real and server response time does
                        affect it, but Google has said it is not something most sites need to think about; it becomes
                        a live concern at large URL counts or on sites generating pages faster than they can be
                        crawled. If you have a few hundred pages, this is not your problem.
                    </BlogText>
                    <BlogText>
                        <strong>Visitors leave after three seconds, and that bounce signals poor quality to search
                        engines. This is the myth.</strong> The first half is a usability observation that varies
                        enormously by intent, device and what the visitor came for. The second half is the part to
                        reject: your analytics bounce rate is not a ranking input, and a specific second-count
                        threshold is not something Google publishes. The claim survives because it sounds like it
                        should be true, and because it is repeated in forum answers that predate the current guidance
                        entirely.
                    </BlogText>

                    <BlogHeader>How to measure a search effect</BlogHeader>
                    <BlogText>
                        Proving that a search change came from speed means ruling out everything else that shipped with
                        it, which is why the release log comes first and the performance data comes fourth. Six steps
                        do that. The last one is the one that gets skipped: report the competing explanations you could
                        not eliminate, because a finding that names its own uncertainty is the only kind worth acting
                        on.
                    </BlogText>
                    <BlogList
                        items={[
                            "Note the exact release, and list every content, link, design, tracking, URL and technical change that went with it.",
                            "Compare Search Console pages and queries by country, device and search type across sensible periods.",
                            "Check indexing, crawling, status codes, robots rules, canonicals, what actually renders, the sitemaps, and server errors.",
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
                    <BlogText>
                        Value a speed change from your own funnel rather than by borrowing somebody else&apos;s
                        multiplier. Define the journey, segment it, watch the failure signals rather than only the
                        conversions, and control for everything else that moved. Then state the result as a range with
                        a confidence level. A single number with no range is the shape of a claim that was not
                        measured. The evidentiary standard behind all of this is set out in our{" "}
                        <Link href="/editorial-policy" className="text-cognac hover:underline">editorial policy</Link>, and{" "}
                        <Link href="/blog/aeo-web-performance-glossary" className="text-cognac hover:underline">the performance glossary</Link>{" "}
                        defines the terms precisely.
                    </BlogText>
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
                        A vendor-published case study can show that a named company changed particular metrics and observed
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
                        than an independent client result. It ran on WordPress and WooCommerce before we rebuilt it on
                        Next.js, Sanity, Supabase and Square. <strong>We are not publishing before-and-after scores for
                        it here</strong>, because we do not hold dated test records with the device profile, network
                        conditions and run count that would make those numbers mean anything. A figure without its
                        method is not evidence, and separating those two things is what this page is about.
                    </BlogText>
                    <InsightBox variant="warning" label="Why there is no number in the paragraph above">
                        Hold us to the standard we just set. We own a rebuilt property and we still cannot show you a
                        defensible before-and-after for it, which is a worse position for us than having one. Even with
                        clean records the figure would not isolate anything, because that rebuild changed the platform,
                        the hosting, the templates and the images in the same release. The number is missing on purpose,
                        and it is the same reason to distrust any single-property figure handed to you without its
                        conditions attached.
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
