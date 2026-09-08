import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Network, ScanSearch } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
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
        "how to make my website faster",
        "reduce page load time",
        "website speed test",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-30",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-speed-up-your-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Google Search Central: Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { name: "Chrome: Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" },
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
            dateModified: "2026-08-19",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Web performance", "Core Web Vitals", "Lighthouse", "Rendering strategies", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Performance",
            inLanguage: "en-US",
            wordCount: 3119,
            timeRequired: "PT14M",
            about: [
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
                { "@type": "Thing", name: "Core Web Vitals" },
                { "@type": "Thing", name: "Content delivery network", sameAs: ["https://en.wikipedia.org/wiki/Content_delivery_network"] },
                { "@type": "Thing", name: "Website speed optimization" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Speed up your website", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-04-30",
            dateModified: "2026-08-19",
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
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


export default function WebsiteSpeedGuide() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Speed up your website")} />
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
                            Reviewed August 8, 2026 against current Google and Chrome guidance.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="April 30, 2026" readTime="14 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Before the 12 diagnostics</h2>
                        <BlogList
                            items={[
                                "Name the page, what the visitor was doing, the device, the region, what they consented to, and what it is costing you.",
                                "Separate Chrome field data from a Lighthouse lab result.",
                                "Keep at least three comparable runs per agreed profile and preserve raw reports.",
                                "Do not use a universal three-second rule, platform ceiling or sub-second promise.",
                                "After speed work, retest that it still works, is still accessible, still tracks, and still respects consent.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: Network, title: "Delivery", body: "Everything between the click and the first byte." },
                            { icon: ScanSearch, title: "Rendering", body: "Everything between the first byte and a usable page." },
                            { icon: Gauge, title: "Experience", body: "Field LCP, INP and CLS plus the actual visitor journey." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="where-to-start">Where to start, based on your current score</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Twelve diagnostics is the full sweep. You rarely need all twelve, and which ones matter
                            depends on where you are starting from. Get a number first, then jump to the step that
                            fits it.
                        </BlogText>

                        <BlogText>
                            <strong>If you do not have a score yet:</strong> run{" "}
                            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">PageSpeed Insights</a>{" "}
                            on one specific URL, not your homepage by habit. Read the top panel first, not the score.
                            That panel is Chrome field data: real visits, the slowest quarter of them, over the last 28
                            days. The coloured score underneath is a lab simulation of a single load on a throttled
                            mid-range phone. When the two disagree, the field data is the one describing your visitors.
                        </BlogText>

                        <div className="my-8 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                            <table className="w-full min-w-[32rem] border-collapse text-sm">
                                <caption className="sr-only">
                                    Which of the twelve diagnostics to start with, by current PageSpeed Insights result.
                                </caption>
                                <thead>
                                    <tr className="bg-stone-100 text-left">
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">Where you are</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">What it usually means</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal whitespace-nowrap">Start at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Below 50", "One or two things dominate everything else. Almost always an oversized LCP image or render-blocking CSS and JavaScript in the head.", "Steps 5 to 7"],
                                        ["50 to 89", "No single cause left. Script execution, long tasks and third-party tags are usually splitting the remaining time between them.", "Steps 8 and 10"],
                                        ["90 or above", "The lab score is no longer your constraint. Check field INP and CLS, which a lab run measures poorly or not at all.", "Steps 2 and 9"],
                                        ["Field data says “insufficient data”", "Not enough Chrome traffic to report. You are not being penalised for this. Test on a real mid-range phone on cellular instead.", "Step 2"],
                                        ["Fast for you, slow for visitors", "You are testing on better hardware, a better network, and a warm cache. The 75th percentile is the number that matters.", "Steps 1 and 2"],
                                    ].map(([where, means, start]) => (
                                        <tr key={where} className="border-t border-stone-200 align-top">
                                            <td className="px-4 py-3 font-semibold text-charcoal">{where}</td>
                                            <td className="px-4 py-3 text-stone-600">{means}</td>
                                            <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{start}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            The standard advice list, the one you have already read a dozen times, is not wrong. Compress
                            images to WebP or AVIF. Minify CSS and JavaScript. Put a CDN in front of static assets.
                            Enable caching. Defer non-critical scripts. Cut redirect chains. Every item on it is real
                            work that helps some sites.
                        </BlogText>

                        <BlogText>
                            The problem is the order. That list is sorted by how easy each item is to write down, not by
                            how much time it will give you back. Minification saves kilobytes on a site whose actual
                            problem is a 2MB hero image. A CDN does nothing for a page that is slow because it runs 400ms
                            of JavaScript before it renders. Running the list top to bottom means doing five things that
                            change nothing before reaching the one that mattered.
                        </BlogText>

                        <InsightBox variant="warning">
                            Two items on that list get blamed by name before anyone measures them. <strong>Shared
                            hosting</strong> and <strong>plugins</strong> are both real causes of slow sites and neither
                            is a diagnosis on its own. Measure TTFB by template and by region before you conclude hosting
                            is the constraint, and measure what each plugin actually adds to the critical path before you
                            remove it. Moving host or deleting plugins on suspicion is how sites get slower and lose
                            functionality in the same afternoon.
                        </InsightBox>
                    </div>

                    <BlogHeader id="worked-example">A worked example, measured on this page</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Rather than describe the method, here is a run of it against this article, so you can see
                            what the numbers look like and what they do and do not settle. <strong>Measured August 2,
                            2026, headless Chromium 150.0.0.0 on Windows 11, one run, unthrottled connection, no CPU
                            throttling, cold cache, from a single location.</strong> Those conditions are the whole
                            point: change any of them and the numbers change, which is why one lab run is a diagnostic
                            and never a verdict.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Measurement</th><th className="p-4">Value</th><th className="p-4">What it tells you</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Time to first byte (TTFB)</td><td className="p-4">81 ms</td><td className="p-4">The server responded quickly. Whatever is slow here, it is not the origin</td></tr>
                                <tr><td className="p-4 font-bold">DOMContentLoaded</td><td className="p-4">1,952 ms</td><td className="p-4">Nearly two seconds after an 81 ms first byte. The delay is entirely in what happens after the response arrives</td></tr>
                                <tr><td className="p-4 font-bold">HTML over the wire</td><td className="p-4">58.8 KB</td><td className="p-4">Compressed. Uncompressed it is 644 KB, so compression is doing an 11x reduction</td></tr>
                                <tr><td className="p-4 font-bold">Total requests</td><td className="p-4">33</td><td className="p-4">Count alone means little; what they weigh is the useful number</td></tr>
                                <tr><td className="p-4 font-bold">Total transferred</td><td className="p-4">427 KB</td><td className="p-4">Everything the browser fetched to render an article</td></tr>
                                <tr><td className="p-4 font-bold">JavaScript</td><td className="p-4">235 KB across 13 files</td><td className="p-4"><strong>55% of everything transferred, on a page that is mostly text</strong></td></tr>
                                <tr><td className="p-4 font-bold">CSS</td><td className="p-4">93 KB across 3 files</td><td className="p-4">The second largest category</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Read the first two rows together, because that pairing is the most useful thing on this page. An
                        81 ms first byte against a 1,952 ms DOMContentLoaded says the server did its job and the cost is
                        downstream, so anyone selling us faster hosting would be selling a fix for a problem we do not
                        have. That is the single most common misdiagnosis in this whole subject, and you can rule it in
                        or out in about a minute on your own site.
                    </BlogText>
                    <BlogText>
                        The JavaScript row is the uncomfortable one and it stays in. <strong>On an article that is largely
                        text, JavaScript is 55% of what we ship.</strong> That is not a disaster and the page still
                        renders its content in the initial HTML, but it is more than a text page needs, and publishing
                        a speed guide does not exempt us from the finding. If you run the same check and see the same
                        shape, the honest next step is the same for you as for us: find out what each of those files is
                        for, and whether the ones that are not needed for first render can be deferred or dropped.
                    </BlogText>
                    <InsightBox variant="warning" label="What this run does not show">
                        Two things, and they matter more than the numbers above. <strong>Largest Contentful Paint was
                        not captured in this run</strong>, so nothing here tells you when the main content actually
                        appeared, which is the metric a visitor experiences. And a single unthrottled run from one
                        machine on a fast connection is not what your visitors have. Field data from Search Console at
                        the 75th percentile is the only thing that describes them. Treat everything above as a way to
                        find the constraint, never as a score.
                    </InsightBox>
                    <BlogText>
                        You can reproduce this in your own browser without installing anything. Open the page, open
                        developer tools, and in the console read{" "}
                        <code>performance.getEntriesByType(&apos;navigation&apos;)[0]</code> for the timing rows and{" "}
                        <code>performance.getEntriesByType(&apos;resource&apos;)</code> for the per-file weights. Group
                        the second one by <code>initiatorType</code> and you have the table above for any site you can
                        load, including your competitors&apos;.
                    </BlogText>

                    <BlogQuote>
                        The platform label never diagnoses the problem. Following the request from DNS to render does.
                    </BlogQuote>

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
                        Google&apos;s <a href="https://developers.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">PageSpeed Insights</a> can show eligible Chrome User Experience Report data and a Lighthouse lab
                        run. Field data describes real-user distributions; the lab result is a simulated diagnostic.
                        Use both for their intended purpose and state when URL data is unavailable and origin data is
                        substituted. Our{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explainer</Link>{" "}
                        covers what each field metric measures, and{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">our PageSpeed testing method</Link>{" "}
                        shows how we record lab runs.
                    </BlogText>
                    <BlogText>
                        Google <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">publishes a good threshold</a> for each Core Web Vital: Largest Contentful Paint at or under
                        2.5 seconds, Interaction to Next Paint at or under 200 milliseconds, and Cumulative Layout Shift
                        at or under 0.1. Those are the numbers to design an acceptance test around. A <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Lighthouse
                        performance score</a> is a weighted summary of lab metrics, not a fourth vital and not a ranking
                        cutoff.
                    </BlogText>

                    <BlogHeader>Which tool answers which question</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            No single performance tool answers every question, and reaching for the wrong one is how a morning disappears into a metric that was never the constraint. Five tools cover the ground between them, and each has one question it is genuinely best at. Pick by the question you are holding rather than by the tab you already have open.
                        </BlogText>
                    </div>
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
                    <div data-speakable="true">
                        <BlogText>
                            Everything in this step happens before your own code runs, which is why no amount of front-end work will shorten it. The browser has to resolve the hostname, follow any redirects, negotiate TLS and open a connection before the first byte of your document exists. Three checks cover the whole stage.
                        </BlogText>
                    </div>
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
                        Time to first byte (TTFB) sets the floor for everything after it. Nothing you do in the browser starts
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
                    <div data-speakable="true">
                        <BlogText>
                            Most image weight on a slow page is dimensions nobody sees, because a file sized for a large desktop display costs a phone visitor the full download whatever slot it lands in. Serving dimensions close to the rendered size is the largest saving available in this step, and it changes nothing about how the page looks.
                        </BlogText>
                    </div>
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
                    <div data-speakable="true">
                        <BlogText>
                            JavaScript charges the visitor twice, once to download it and once to parse and execute it, and on a mid-range phone the second charge is usually the larger. That is why deleting a small file can beat compressing a large image. The work here is finding the code that ships to this route and is not needed by it.
                        </BlogText>
                    </div>
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
                    <div data-speakable="true">
                        <BlogText>
                            A cache is worth whatever its miss and invalidation behavior is worth, and that is the half nobody tests. A configuration that serves a fast hit and then serves yesterday&apos;s price after an inventory change has bought you nothing. Decide what is cacheable by route and user state, then prove each state behaves the way you decided.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Define what can be cached and for how long by route and user state.",
                            "Verify hit, miss, stale and invalidation behavior after content or inventory changes.",
                            "Keep private, cart, account and personalized data out of shared caches.",
                            "Test cold and warm conditions and document which state the acceptance method uses.",
                        ]}
                    />
                    <BlogText>
                        The usual working convention is a long cache lifetime on fingerprinted static assets, where the
                        filename changes whenever the contents do, and a short one on HTML, which has to be able to
                        change without waiting for a cache to expire. That split is what lets a returning visitor reuse
                        almost everything while still seeing today&apos;s content. It only holds if your build actually
                        fingerprints those filenames, so check that before extending any lifetime.
                    </BlogText>

                    <BlogHeader>12. Add release and regression controls</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Speed work that is not defended by a repeatable test gets undone by a later release, usually by someone who never knew the constraint existed. What defends it is a recorded baseline rather than a memory of a good afternoon. Four controls make the improvement survive the next deploy.
                        </BlogText>
                    </div>
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
                    <div data-speakable="true">
                        <BlogText>
                            Optimize unless the platform itself is blocking a requirement you have already accepted, which is a narrower condition than most rebuild conversations assume. The measured constraint decides this, not the age of the site and not a dislike of the current editor. Three positions cover almost every case.
                        </BlogText>
                    </div>
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
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
