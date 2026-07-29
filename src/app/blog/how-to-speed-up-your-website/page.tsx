import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Network, ScanSearch } from "lucide-react";
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

const postId = "how-to-speed-up-your-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How to Speed Up Your Website in 2026: 12 Diagnostics";
const description =
    "A route-level performance guide covering field and lab measurement, server, cache, media, fonts, JavaScript, layout, third parties and migration decisions.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "how to speed up website",
        "website speed optimization",
        "slow website fixes",
        "PageSpeed optimization",
        "Core Web Vitals",
        "improve website loading speed",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-30",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-speed-up-your-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "PageSpeed Insights documentation", url: "https://developers.google.com/speed/docs/insights/v5/about" },
    { name: "Google Search Central: Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { name: "Chrome: Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" },
    { name: "web.dev: optimize LCP", url: "https://web.dev/articles/optimize-lcp" },
    { name: "web.dev: optimize INP", url: "https://web.dev/articles/optimize-inp" },
    { name: "web.dev: optimize CLS", url: "https://web.dev/articles/optimize-cls" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-04-30",
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
            articleSection: "Performance",
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

export default function WebsiteSpeedGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Speed up your website", href: `/blog/${postId}` }]} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How to Speed Up Your Website <span className="italic text-cognac">With 12 Route-Level Diagnostics</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Platform labels do not diagnose performance. Follow the request from DNS and document
                            delivery through rendering and interaction, fix the measured constraint, and compare the
                            same page state after each change.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Google, Chrome and web.dev guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="April 30, 2026" readTime="13 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Before the 12 diagnostics</h2>
                        <BlogList
                            items={[
                                "Name the route, visitor journey, device, region, consent state and business symptom.",
                                "Separate Chrome field data from a Lighthouse lab result.",
                                "Keep at least three comparable runs per agreed profile and preserve raw reports.",
                                "Do not use a universal three-second rule, platform ceiling or sub-second promise.",
                                "Retest function, accessibility, analytics and consent after performance work.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Network, title: "Delivery", body: "DNS, redirects, connection, cache, CDN, origin and document." },
                            { icon: ScanSearch, title: "Rendering", body: "Discovery, media, CSS, fonts, layout and main-thread work." },
                            { icon: Gauge, title: "Experience", body: "Field LCP, INP and CLS plus the actual visitor journey." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Confirm the route and template</BlogHeader>
                    <BlogText>
                        Test representative templates and states: home, long content, search, product, collection, form,
                        cart, account and error. A homepage result cannot prove a page with different content, scripts
                        or interaction. Record the release and page state with the baseline. If you are still working
                        out the symptom, start with{" "}
                        <Link href="/blog/why-is-my-website-loading-so-slow" className="text-cognac hover:underline">why a site loads slowly</Link>{" "}
                        and come back to this list.
                    </BlogText>

                    <BlogHeader>2. Separate field and lab data</BlogHeader>
                    <BlogText>
                        PageSpeed Insights can show eligible Chrome User Experience Report data and a Lighthouse lab
                        run. Field data describes real-user distributions; the lab result is a simulated diagnostic.
                        Use both for their intended purpose and state when URL data is unavailable and origin data is
                        substituted. Our{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explainer</Link>{" "}
                        covers what each field metric measures, and{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">our PageSpeed testing method</Link>{" "}
                        shows how we record lab runs.
                    </BlogText>
                    <BlogText>
                        Google publishes a good threshold for each Core Web Vital: Largest Contentful Paint at or under
                        2.5 seconds, Interaction to Next Paint at or under 200 milliseconds, and Cumulative Layout Shift
                        at or under 0.1. Those are the numbers to design an acceptance test around. A Lighthouse
                        performance score is a weighted summary of lab metrics, not a fourth vital and not a ranking
                        cutoff.
                    </BlogText>

                    <BlogHeader>Which tool answers which question</BlogHeader>
                    <BlogList
                        items={[
                            "PageSpeed Insights: eligible field data and a Lighthouse lab run for one URL in one place. Use it for the headline diagnosis and the shareable record.",
                            "Chrome DevTools: the Performance panel for main-thread traces and long tasks, the Network panel for request order and sizes, the Coverage panel for unused CSS and JavaScript, and Lighthouse for local runs before you push.",
                            "WebPageTest: repeat runs from chosen locations with chosen connection profiles. Use it when geography or network conditions are part of the complaint.",
                            "A waterfall tool such as GTmetrix: request-by-request timing when you need to see exactly which file blocks which.",
                            "Search Console Core Web Vitals report: which URL groups fail in the field across the whole property, so you test the right templates rather than the homepage.",
                        ]}
                    />
                    <BlogText>
                        Throttle to a mid-range mobile profile when you test. Script that runs in tens of milliseconds on
                        a development laptop can take several times longer on a mid-range Android device, and the mobile
                        result is the one that matches how most visitors arrive.
                    </BlogText>

                    <BlogHeader>3. Trace DNS, redirects and connection setup</BlogHeader>
                    <BlogList
                        items={[
                            "Remove accidental redirect chains and verify canonical host and protocol behavior.",
                            "Inspect DNS, TLS, connection reuse, compression and geographic delivery.",
                            "Do not remove required authentication, locale or campaign behavior merely to shorten a trace.",
                        ]}
                    />
                    <BlogText>
                        Every redirect in a chain is a fresh request and response before the browser has any content to
                        work with, and browser caching of static assets does nothing to shorten it. Point internal
                        navigation, campaign URLs and email links at the final destination rather than relying on a hop.
                    </BlogText>

                    <BlogHeader>4. Profile document and origin time</BlogHeader>
                    <BlogText>
                        Inspect cache status, CDN, origin compute, database, upstream APIs and errors. A host change helps
                        only when the current origin or network path is the constraint. It cannot remove oversized
                        images or main-thread JavaScript, and no list price predicts the page result.
                    </BlogText>
                    <BlogText>
                        Time to first byte sets the floor for everything after it. Nothing you do in the browser starts
                        until the document response arrives, so measure it directly with a request trace or a timed
                        request from the command line before you rewrite front-end code. Compare a cold cache with a
                        warm one, and a request from near the origin with one from a region your visitors actually use.
                        If the document response is the slow part, the fix is in the server, the cache or the network
                        path, not in image formats.
                    </BlogText>

                    <BlogHeader>5. Identify the real LCP element</BlogHeader>
                    <BlogText>
                        Use the trace to find the LCP resource and its delay components. Ensure it is discoverable,
                        prioritized appropriately and not accidentally lazy-loaded. If the element is text, inspect
                        fonts and render-blocking styles rather than optimizing an unrelated image.
                    </BlogText>

                    <BlogHeader>6. Right-size images and video</BlogHeader>
                    <BlogList
                        items={[
                            "Serve dimensions close to the rendered slot with responsive candidates.",
                            "Choose an efficient format and quality that preserves the approved visual requirement.",
                            "Lazy-load offscreen media, not the above-the-fold LCP resource.",
                            "Use posters, user-triggered loads or lighter delivery for video and heavy embeds where acceptable.",
                            "Reserve dimensions to prevent layout shifts.",
                        ]}
                    />

                    <BlogHeader>7. Audit CSS and fonts</BlogHeader>
                    <BlogText>
                        Remove unused style sources carefully, reduce render-blocking work, consolidate where it helps,
                        and verify component states. Limit font families and weights, use appropriate subsets and
                        loading behavior, and test fallback-to-final layout. “Minify everything” is not a complete
                        strategy and can make debugging or caching worse if applied blindly.
                    </BlogText>

                    <BlogHeader>8. Reduce JavaScript and long tasks</BlogHeader>
                    <BlogList
                        items={[
                            "Use coverage and traces to identify unused and expensive code.",
                            "Split non-critical work and avoid shipping admin or feature code to routes that do not use it.",
                            "Keep event handlers small and yield during long processing.",
                            "Test real menus, forms, filters, cart actions and modals for interaction delay.",
                        ]}
                    />
                    <BlogText>
                        A render-blocking script is one the browser must fetch, parse and execute before it can paint,
                        which is what produces the blank screen at the start of a slow load. Add defer to scripts whose
                        execution order still matters, since deferred scripts run in document order after parsing. Add
                        async only where a script is genuinely independent of the rest of the page and of other scripts.
                        Non-critical widgets can wait for a real user signal such as a click or a scroll into view
                        rather than loading with the document.
                    </BlogText>

                    <BlogHeader>9. Stabilize layout</BlogHeader>
                    <BlogText>
                        Reserve media and embed space, keep validation messages predictable, avoid inserting late
                        banners above content, and verify consent, font, ad and personalization states. Exercise loading,
                        success and error paths instead of reading CLS from one clean page load.
                    </BlogText>

                    <BlogHeader>10. Govern third parties and consent</BlogHeader>
                    <BlogText>
                        Inventory analytics, ads, chat, heatmaps, video, maps, reviews, calendars, experimentation and
                        tag-manager loads. Record purpose, owner, consent category, transfer, load condition, cost and
                        failure behavior. Remove or defer only when product and compliance requirements permit it.
                    </BlogText>

                    <BlogHeader>11. Verify cache and CDN behavior</BlogHeader>
                    <BlogList
                        items={[
                            "Define what can be cached and for how long by route and user state.",
                            "Verify hit, miss, stale and invalidation behavior after content or inventory changes.",
                            "Keep private, cart, account and personalized data out of shared caches.",
                            "Test cold and warm conditions and document which state the acceptance method uses.",
                        ]}
                    />

                    <BlogHeader>12. Add release and regression controls</BlogHeader>
                    <BlogList
                        items={[
                            "Repeat the agreed pages and profiles three times and retain reports.",
                            "Record release version, tool version, environment, exclusions and known variance.",
                            "Test responsive behavior, keyboard use, forms, integrations, analytics and consent.",
                            "Monitor real-user distributions and business journeys after release.",
                        ]}
                    />

                    <InsightBox variant="warning" label="No platform score ceiling">
                        WordPress, Shopify, Wix, Squarespace, Webflow and Next.js do not have one universal mobile score.
                        Implementation, content, integrations, visitors and test conditions vary. A custom framework
                        offers different controls, not an automatic 90+ result.
                    </InsightBox>
                    <BlogText>
                        The constraints you actually measure do differ by platform, so we keep route-level diagnostics
                        for{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">slow WordPress sites</Link>,{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline">Shopify storefronts</Link>,{" "}
                        <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline">WooCommerce stores</Link>,{" "}
                        <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">Wix sites</Link>,{" "}
                        <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">Squarespace sites</Link> and{" "}
                        <Link href="/blog/gohighlevel-website-speed" className="text-cognac hover:underline">GoHighLevel pages</Link>.
                    </BlogText>

                    <BlogHeader>When to optimize and when to rebuild</BlogHeader>
                    <BlogList
                        items={[
                            "Optimize when measured constraints are controllable and the current editor, commerce and integration model still fits.",
                            "Rebuild within the platform when the current theme or template is the primary constraint and platform operations remain valuable.",
                            "Migrate when accepted performance, security, ownership, integration or operating requirements remain blocked and a comparable total-cost model supports replacement.",
                        ]}
                    />
                    <BlogText>
                        If a rebuild is on the table, put the performance target in the written scope rather than in the
                        sales conversation. Ours is a handover target of 90 or better on mobile and desktop Lighthouse
                        for the representative pages named in that scope, evidenced by three recorded runs per page and
                        profile before handover. It is a lab acceptance target for delivered work. It is not a promise
                        about rankings, traffic or revenue, because nobody controls those. Planning tiers start at
                        $1,500 for Starter, $3,500 for Growth and $5,000 to $10,000 for Scale.
                    </BlogText>
                    <BlogText>
                        If replacement is the answer, the cost drivers are set out in our{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">website migration cost breakdown</Link>, and the
                        scope of the work itself sits on the{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">WordPress migration</Link> and{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline">storefront engineering</Link> pages.
                    </BlogText>
                    <BlogText>
                        Google uses Core Web Vitals in broader ranking systems but does not publish a Lighthouse ranking
                        cutoff. Do not promise ranking recovery, a conversion multiplier, or payback from speed alone.
                        Measure property-level search and funnel outcomes with a change log and limitations. What the
                        evidence does and does not support is covered in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">how website speed affects SEO</Link>.
                    </BlogText>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>{source.name}</a></li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get your performance migration plan</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will baseline representative routes, isolate the slow layer and compare native fixes with
                            a search-controlled rebuild under written acceptance criteria.
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
