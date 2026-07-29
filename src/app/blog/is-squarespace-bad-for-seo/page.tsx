import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, SearchCheck, Waypoints } from "lucide-react";
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

const postId = "is-squarespace-bad-for-seo";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Is Squarespace Bad for SEO? A 2026 Diagnostic";
const description =
    "Squarespace covers many SEO fundamentals. Audit crawlability, page controls, content, structured data and measured performance before deciding to optimize or migrate.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "is Squarespace bad for SEO",
        "Squarespace SEO",
        "Squarespace SEO limitations",
        "improve Squarespace SEO",
        "migrate Squarespace website",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-12",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/is-squarespace-bad-for-seo")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Squarespace: SEO checklist",
        url: "https://support.squarespace.com/hc/en-us/articles/360002090267-SEO-checklist",
    },
    {
        name: "Squarespace: what Squarespace does for SEO",
        url: "https://support.squarespace.com/hc/en-us/articles/206744067-What-Squarespace-does-for-SEO",
    },
    {
        name: "Google Search Central: Core Web Vitals",
        url: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
        name: "Google Search Central: page experience",
        url: "https://developers.google.com/search/docs/appearance/page-experience",
    },
    {
        name: "Google Search Central: debugging traffic drops",
        url: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops",
    },
    {
        name: "Google Search Console: performance report",
        url: "https://support.google.com/webmasters/answer/7576553",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-12",
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
            articleSection: "SEO",
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

export default function IsSquarespaceBadForSEOPage() {
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
                            { label: "Squarespace SEO", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Squarespace SEO</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Is Squarespace Bad for SEO? <span className="italic text-cognac">Run This Diagnostic</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Squarespace is not inherently bad for SEO. It provides many of the controls a business site
                            needs, while content, configuration, competition and route-level performance still vary.
                            Diagnose the property before blaming the platform or proposing a migration.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Squarespace and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 12, 2026" readTime="12 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The defensible answer</h2>
                        <BlogList
                            items={[
                                "Squarespace documents SEO descriptions, page titles, custom slugs, SSL, alt text, sitemaps and search-console connections.",
                                "No platform-wide mobile score, load-time range or ranking ceiling can be inferred without a dated sample and method.",
                                "Core Web Vitals matter within Google's broader systems, but a Lighthouse score is not a ranking guarantee.",
                                "A migration is justified by measured requirements and residual constraints, not a generic platform verdict.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Search evidence", body: "Pages, queries, indexing, canonicals, sitemaps and rendered content." },
                            { icon: Gauge, title: "Performance", body: "Field Core Web Vitals where available plus repeated route-level lab traces." },
                            { icon: Waypoints, title: "Business fit", body: "Editing, commerce, integrations, ownership, operating cost and support." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What Squarespace currently supports</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s current SEO checklist covers site and page SEO descriptions, page-title
                        formats, readable slugs, SSL, a custom 404 page, heading structure, image alt text, Google Search
                        Console and Bing Webmaster Tools. Squarespace also generates a sitemap. These features do not
                        guarantee discovery or ranking, but they contradict the claim that the platform lacks basic SEO
                        controls.
                    </BlogText>
                    <BlogText>
                        Available controls can vary by content type, plan and current product behavior. Confirm the
                        needed feature in the live editor and inspect the published HTML. A help-center feature list is
                        not proof that an individual site configured it correctly.
                    </BlogText>

                    <BlogHeader id="on-page-checklist">The on-page checklist, page by page</BlogHeader>
                    <BlogText>
                        Most Squarespace sites that underperform in search have not hit a platform ceiling. They have pages
                        where the controls above were simply never set. Work through this list on your top templates before
                        concluding the platform is the problem, and verify each item in the published HTML rather than in
                        the editor, because what the editor shows and what ships are not always the same thing. If the
                        complaint is load time rather than search, start from{" "}
                        <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">
                            testing a slow Squarespace site
                        </Link>{" "}
                        instead, and see what we handle on{" "}
                        <Link href="/services/squarespace" className="text-cognac hover:underline">
                            Squarespace projects
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "Page title: unique per page, front-loaded with the term the page is actually about. Check the rendered <title>, not just the editor field, because site title formats append text you may not expect.",
                            "SEO description: written per page. Google may rewrite it, but an empty one guarantees you have no influence at all.",
                            "URL slug: short, lowercase, hyphenated, and stable. Changing a slug on a page that already ranks needs a redirect, not a rename.",
                            "One H1 per page, describing the page rather than the brand, with H2s that follow the questions a reader would actually ask in order.",
                            "Image alt text on anything that carries meaning, and no alt text on purely decorative images. Also confirm images are compressed before upload, since the platform will happily serve what you gave it.",
                            "Canonical: confirm the published page self-references, and watch for duplicate reachable versions of the same content through tags, categories or archive routes.",
                            "Sitemap: Squarespace generates one at /sitemap.xml. Open it, confirm the pages you care about are in it and that the ones you do not want indexed are not.",
                            "Search Console and Bing Webmaster Tools: verified, sitemap submitted, and coverage reports actually read rather than just connected once.",
                            "Custom 404: configured, and returning a real 404 status rather than a soft 200.",
                        ]}
                    />
                    <InsightBox variant="info" label="Where the real ceiling starts">
                        None of the above requires leaving Squarespace, and none of it is where the platform genuinely
                        constrains you. The limits worth migrating over are different: control over structured data beyond
                        what the platform emits, server-level caching and redirect handling at scale, and how much of the
                        page is rendered markup an answer engine can read. Fix the checklist first, then judge the ceiling
                        on what is left.
                    </InsightBox>

                    <BlogHeader>Do not publish a universal Squarespace speed ceiling</BlogHeader>
                    <BlogText>
                        A platform name does not establish a mobile Lighthouse range. Templates, media, fonts, embeds,
                        commerce features, consent tools, custom code, third parties and route content all affect the
                        result. Lab scores also change with the device profile, network, page state and tool version.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no Squarespace speed figure here">
                        We do not publish a load-time range or a mobile score ceiling for Squarespace as a platform.
                        Any such number depends on which sites were sampled, what templates, media, embeds and third
                        parties those sites carried, and on the device profile and tool version used to test them. A
                        figure stated without that sample and method is not something you can plan against. Measure your
                        own routes and judge the platform on what those runs show.
                    </InsightBox>
                    <BlogText>
                        Measure representative URLs with PageSpeed Insights. Label field data and Lighthouse lab data
                        separately. Keep the test date, device profile, location, consent state and page state. Google
                        publishes good field thresholds for{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            LCP, INP and CLS
                        </Link>
                        , while also saying that good page experience does not guarantee top rankings. Our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">
                            repeatable PageSpeed process
                        </Link>{" "}
                        covers how to record those runs so they can be compared later.
                    </BlogText>

                    <BlogHeader>A route-level Squarespace SEO audit</BlogHeader>
                    <BlogList
                        items={[
                            "Confirm the production site is public, returns the intended status and is not blocked from indexing.",
                            "Inspect rendered titles, descriptions, canonicals, headings, body copy, links and structured data on each important template.",
                            "Validate the sitemap, submitted URLs, redirects, 404 behavior and duplicate or parameterized URLs.",
                            "Review Search Console indexing and performance by page, query, device and country before interpreting a traffic change.",
                            "Measure field Core Web Vitals where eligible data exists and use repeated lab runs to diagnose individual routes.",
                            "Inventory images, videos, fonts, embeds, analytics, consent tools, custom code and other third parties.",
                            "Check content quality, search intent, internal links, local signals and competitors instead of reducing SEO to speed.",
                        ]}
                    />
                    <BlogText>
                        The last item is a study in itself. Work it through with our{" "}
                        <Link href="/blog/why-competitor-outranks-you" className="text-cognac hover:underline">
                            competitor ranking gap analysis
                        </Link>
                        , and keep the performance evidence in the frame described in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">
                            how website speed affects SEO
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Image and page-weight guidance needs context</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s checklist currently recommends keeping individual images below 500 KB and
                        pages below 5 MB for faster loading. Treat those values as vendor recommendations, not Google
                        ranking thresholds. The right delivery budget depends on visual quality, route purpose, device
                        mix and measured user experience.
                    </BlogText>

                    <BlogHeader>Structured data and AI visibility</BlogHeader>
                    <BlogText>
                        Inspect the published structured data before declaring a gap. Add only markup that accurately
                        describes visible content and follows the relevant search-engine policy. Structured data can
                        make content eligible for supported search features; it does not force a rich result, AI
                        citation or ranking. Clear entities, useful answers, crawlable content and corroborating
                        evidence matter beyond schema. How we structure that work is described in our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac hover:underline">
                            answer-engine playbook
                        </Link>{" "}
                        and on our{" "}
                        <Link href="/ai-info" className="text-cognac hover:underline">
                            AI information page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Optimize, stay or migrate</BlogHeader>
                    <BlogText>
                        Three outcomes are legitimate, and the decision belongs to the evidence rather than the platform
                        name. If the answer points at leaving, read{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className="text-cognac hover:underline">
                            Squarespace compared with a custom build
                        </Link>{" "}
                        and what goes into{" "}
                        <Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline">
                            costing a Squarespace migration
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "Stay when the site meets its search, editing, integration, performance and ownership requirements.",
                            "Optimize when images, page composition, embeds, metadata, content or internal links explain the measured problem.",
                            "Migrate when accepted requirements remain blocked after reasonable optimization and the expected benefit exceeds migration and operating cost.",
                        ]}
                    />
                    <BlogText>
                        A sound migration scope inventories every indexable URL, preserves valuable URLs where
                        practical, maps approved changes, validates metadata and canonicals, crawls rendered output,
                        tests redirects, submits sitemaps and keeps rollback instructions. This reduces avoidable
                        technical risk. It does not guarantee ranking retention, traffic growth or a recovery date. The
                        search side of that work is covered in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what a migration does to search visibility
                        </Link>
                        , the build side under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>
                        , with scope tiers on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">
                            pricing page
                        </Link>{" "}
                        and finished projects on the{" "}
                        <Link href="/work" className="text-cognac hover:underline">
                            work page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>How to investigate a traffic plateau</BlogHeader>
                    <BlogText>
                        A plateau is not proof that Squarespace caused it. Compare pages and queries in Search Console,
                        then check demand, competitors, SERP changes, content freshness, links, indexing, seasonality,
                        tracking changes and site releases. Google&apos;s traffic-drop guidance recommends examining the
                        shape, timing and affected segments before deciding on a cause. Where the timing overlaps a
                        rollout, compare it against the{" "}
                        <Link href="/blog/google-march-2026-update" className="text-cognac hover:underline">
                            record of the March 2026 core update
                        </Link>{" "}
                        before changing anything.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will audit representative Squarespace routes, identify what can be fixed in place and
                            scope a migration only where the evidence supports it. Performance acceptance, ownership,
                            support and remedies belong in the signed scope.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
