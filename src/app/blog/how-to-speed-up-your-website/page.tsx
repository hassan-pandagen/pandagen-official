import Image from "next/image";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import ArticleContents from "@/components/blog/ArticleContents";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "how-to-speed-up-your-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "How to Speed Up Your Website in 2026: 12 Checks";
const description =
    "Find what slows a page down, understand your PageSpeed result and choose the right fix before changing platforms.";

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
        modifiedTime: "2026-10-08",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/how-to-speed-up-your-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Google Search Central: Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { name: "Chrome: Lighthouse performance scoring", url: "https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" },
    { name: "web.dev: field data and lab data", url: "https://web.dev/articles/lab-and-field-data-differences" },
    { name: "Chrome UX Report methodology", url: "https://developer.chrome.com/docs/crux/methodology" },
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
            dateModified: "2026-10-08",
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
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-04-30",
            dateModified: "2026-10-08",
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


function WebsiteSpeedGuideContent({ preview = false }: { preview?: boolean }) {
    const Container = preview ? "div" : "main";
    return (
        <>
            <Container className={preview ? "article-preview-main" : "min-h-screen bg-white pb-24 pt-28"}>
                {!preview && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
                <article className={preview ? "article-preview-content" : "mx-auto max-w-4xl px-5 sm:px-8"}>
                    {!preview && <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "Speed up your website")} />}
                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                        <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            How to Speed Up Your Website. <span className="italic text-cognac">Find the slow part first.</span>
                        </h1>
                        <p className="mt-5 text-base leading-7"><Link href="/free-audit" className="underline underline-offset-4">Want us to check your page? Run a free website audit.</Link></p>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Pick one page that feels slow. Find out where the wait happens, make one useful change,
                            then test that same page again. This guide shows you how to do it without guessing from
                            a platform name or one score.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Last reviewed October 8, 2026, including the Core Web Vitals thresholds on web.dev. Sources and testing notes are linked throughout.
                        </p>
                        </div>
                        <div data-article-hero-screen data-website-example>
                            <figure>
                                <Image src="/blog-covers/how-to-speed-up-your-website.webp?v=20261001" alt="Developer inspecting a website and its network requests on a desktop monitor" width={1200} height={750} sizes="(min-width: 900px) 480px, 90vw" unoptimized />
                            </figure>
                        </div>
                    </header>

                    {preview ? <div data-article-byline className="flex items-center gap-3"><Image src="/team/hassan.png" alt="Hassan Jamal" width={56} height={56} className="h-14 w-14 object-cover" /><p><Link href="/about/hassan" className="font-semibold underline underline-offset-4">Hassan Jamal</Link><span className="block text-sm">Co-founder and Lead Engineer · April 30, 2026 · 14 min read</span></p></div> : <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="how-to-speed-up-your-website" published="2026-04-30" readTime="14 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />}
                    <BlogHeader id="where-to-start">Start with the page that feels slow</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            You do not need to work through all twelve checks. Choose one page that matters to your
                            visitors, get a result for that page, and start with the part causing the wait.
                        </BlogText>
                        <BlogText>
                            Name what feels slow before you test it. A blank first screen, a hero image that arrives
                            late, a menu that ignores a tap and a form that freezes after you submit it are different
                            problems, and each needs different evidence and a different fix. One homepage score
                            can&apos;t stand for every visitor, page, device and interaction.
                        </BlogText>

                        <ArticleContents initiallyOpen={false} />

                        <BlogText>
                            <strong>If you do not have a result yet:</strong> run{" "}
                            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">PageSpeed Insights</a>{" "}
                            on one specific URL. The top panel shows real Chrome visits when enough data exists; this
                            is called field data. The score below comes from one simulated load, called a lab test.
                            If the two disagree, start with what real visitors experienced, then use the lab details
                            to investigate the cause.
                        </BlogText>

                        {preview && <p className="mb-2 text-xs text-stone-500 sm:hidden">Swipe the table sideways to see every column.</p>}
                        <div className="my-8 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                            <table className="w-full min-w-[32rem] border-collapse text-sm">
                                <caption className="sr-only">
                                    Which of the twelve diagnostics to start with, by current PageSpeed Insights result.
                                </caption>
                                <thead>
                                    <tr className="bg-stone-100 text-left">
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">Where you are</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal">What this tells you</th>
                                        <th scope="col" className="px-4 py-3 font-bold text-charcoal whitespace-nowrap">Start at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Below 50", "There is room to improve, but the score alone will not tell you what caused the delay. Open the details for this page.", "Steps 5 to 10"],
                                        ["50 to 89", "Some changes may help. Start with the issues affecting this page.", "Steps 5 to 10"],
                                        ["90 or above", "This test looks good. Check whether real visitors and important actions have the same experience.", "Steps 2 and 9"],
                                        ["Not enough visitor data", "There were not enough visits for a reliable real visitor view. Repeat the test and use your own monitoring if you have it.", "Step 2"],
                                        ["Fast for you, slow for visitors", "Their phone, connection, location or page may differ from yours. Compare those conditions first.", "Steps 1 and 2"],
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
                    {preview && <p className="mb-2 text-xs text-stone-500 sm:hidden">Swipe the table sideways to see every column.</p>}
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
                        Read the first two rows together. An 81 ms first byte against a 1,952 ms DOMContentLoaded
                        points to work after the server responds. Faster hosting would not address the main delay here. Check the same
                        two timings on your own site before paying for a hosting change.
                    </BlogText>
                    <BlogText>
                        The JavaScript row is the uncomfortable one and it stays in. <strong>On an article that is largely
                        text, JavaScript is 55% of what we ship.</strong> That is not a disaster and the page still
                        renders its content in the initial HTML, but it is more than a text page needs, and publishing
                        a speed guide does not exempt us from the finding. If you run the same check and see the same
                        shape, the honest next step is the same for you as for us: find out what each of those files is
                        for, and whether the ones that are not needed for first render can be deferred or dropped.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Weight and readability are two different problems, and only one of them decides
                        whether a machine can read you.</BlogHighlight> A page can be heavy with JavaScript and still
                        serve every word of its content in the first response. A page can also be light and serve an
                        empty <code>&lt;div&gt;</code>. The question that matters for search engines and AI assistants
                        is not how much JavaScript you ship, it is whether your actual sentences are in the HTML before
                        any of it runs.
                    </BlogText>
                    <BlogText>
                        So we measured this page the way a crawler sees it. Requesting it as GPTBot on 13 September 2026
                        returned <strong>716,835 bytes of HTML uncompressed</strong>, of which{" "}
                        <strong>64.1% is inline script, 23.3% inline CSS, 9.1% markup and 3.5% readable text</strong>,
                        about 4,081 words in 24.8 KB. Before you read that as bloat, here is what it actually
                        is. Most of that script is the React Server Component payload Next.js inlines so the browser can
                        hydrate without a second request, and it contains a serialised copy of the same sentences that
                        are already in the HTML. The content is genuinely in the document twice, by design. Compression
                        collapses the duplication almost entirely: the same page leaves our server at{" "}
                        <strong>roughly 60 to 80 KB</strong>, a reduction of about ten times. The uncompressed ratio is
                        a useful thing to understand and a bad thing to optimise against.
                    </BlogText>
                    <BlogText>
                        The raw-response check passed: every sentence in this article, including the uncomfortable one
                        above, is present before client-side JavaScript executes. That is one useful crawlability check,
                        and it takes one command. Fetch your page with a named user agent using{" "}
                        <code>curl -A &quot;GPTBot&quot; https://yoursite.com/</code> and search the output for a
                        sentence only a human reader would see. If it is there, that crawler can receive the text in
                        the initial response and the JavaScript weight remains a separate performance question. If it
                        is missing, investigate rendering and crawler access with the tools for the search or assistant
                        you care about; this curl check alone does not prove what every crawler renders. We wrote up
                        what that failure can look like in{" "}
                        <Link href="/blog/lovable-site-not-showing-on-google" className="text-cognac hover:underline">why AI-built sites are invisible</Link>.
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

                    <BlogHeader id="confirm-route">1. Confirm the route and template</BlogHeader>
                    <BlogText>
                        Test representative templates and states: home, long content, search, product, collection, form,
                        cart, account and error. A homepage result cannot prove a page with different content, scripts
                        or interaction. Record the release and page state with the baseline. If you are still working
                        out the symptom, read{" "}
                        <a href="#fast-for-you" className="text-cognac hover:underline">why a site can seem fast to you and slow to everyone else</a>{" "}
                        and come back to this list.
                    </BlogText>

                    <BlogHeader id="field-vs-lab">2. Separate field and lab data</BlogHeader>
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
                    <BlogText>
                        Google&apos;s{" "}
                        <a href="https://web.dev/articles/defining-core-web-vitals-thresholds" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">threshold article on web.dev</a>,
                        checked October 8, 2026, also sets where poor begins: above 4 seconds for LCP, above 500
                        milliseconds for INP and above 0.25 for CLS. Every one of those lines is judged at the 75th
                        percentile of visits.
                    </BlogText>

                    <BlogHeader id="fast-for-you">Why it seems fast to you and slow to everyone else</BlogHeader>
                    <BlogText>
                        This is usually where an owner starts doubting the report. You open your own site on a good
                        phone, on your own network, with the images already in your browser cache from the last time
                        you looked. Someone arriving for the first time on a mid-range Android over mobile data
                        downloads all of it from scratch. Those are two different page loads, and only one of them is
                        being measured.
                    </BlogText>
                    <BlogText>
                        The 75th percentile settles the argument. Your site isn&apos;t graded on its average visit;
                        it&apos;s graded at roughly the slowest quarter of visits, which is why a site can feel fine every
                        time you check it and still be assessed as poor. To see what your visitors see, test on a
                        throttled mobile profile with an empty cache. When your impression and the field data
                        disagree, the field data is the one describing your customers.
                    </BlogText>

                    <BlogHeader id="which-tool">Which tool answers which question</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            These five tools answer different questions. Start with the problem you are trying to locate, then choose the tool that measures it.
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

                    <BlogHeader id="trace-connection">3. Trace DNS, redirects and connection setup</BlogHeader>
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

                    <BlogHeader id="origin-time">4. Profile document and origin time</BlogHeader>
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

                    <BlogHeader id="lcp-element">5. Identify the real LCP element</BlogHeader>
                    <BlogText>
                        Use the trace to find the LCP resource and its delay components. Ensure it is discoverable,
                        prioritized appropriately and not accidentally lazy-loaded. If the element is text, inspect
                        fonts and render-blocking styles rather than optimizing an unrelated image.
                    </BlogText>

                    <BlogHeader id="images-video">6. Right-size images and video</BlogHeader>
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

                    <BlogHeader id="css-fonts">7. Audit CSS and fonts</BlogHeader>
                    <BlogText>
                        Remove unused style sources carefully, reduce render-blocking work, consolidate where it helps,
                        and verify component states. Limit font families and weights, use appropriate subsets and
                        loading behavior, and test fallback-to-final layout. “Minify everything” is not a complete
                        strategy and can make debugging or caching worse if applied blindly.
                    </BlogText>

                    <BlogHeader id="javascript-long-tasks">8. Reduce JavaScript and long tasks</BlogHeader>
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

                    <BlogHeader id="stabilize-layout">9. Stabilize layout</BlogHeader>
                    <BlogText>
                        Reserve media and embed space, keep validation messages predictable, avoid inserting late
                        banners above content, and verify consent, font, ad and personalization states. Exercise loading,
                        success and error paths instead of reading CLS from one clean page load.
                    </BlogText>

                    <BlogHeader id="third-parties">10. Govern third parties and consent</BlogHeader>
                    <BlogText>
                        Inventory analytics, ads, chat, heatmaps, video, maps, reviews, calendars, experimentation and
                        tag-manager loads. Record purpose, owner, consent category, transfer, load condition, cost and
                        failure behavior. Remove or defer only when product and compliance requirements permit it.
                    </BlogText>

                    <BlogHeader id="cache-cdn">11. Verify cache and CDN behavior</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Check more than how fast a saved page loads. What happens on the first visit, after a price changes, or when a customer signs in? Decide which pages and information can be stored temporarily, and test that visitors still receive the right version.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Define what can be cached and for how long by route and user state.",
                            "Test saved pages, first visits and outdated copies. Confirm that changes to content or stock replace the old information.",
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

                    <BlogHeader id="release-controls">12. Add release and regression controls</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Record a baseline and repeat the same test after each release. These four checks show whether a later release has slowed the site.
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

                    <BlogHeader id="optimize-or-rebuild">When to optimize and when to rebuild</BlogHeader>
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
                        $1,500 for Starter, $3,500 for Growth and $5,000 for Scale.
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
                        <h2 className="mb-3 font-serif text-3xl">Bring us the route that feels slow</h2>
                        <p className="mb-6 leading-relaxed text-stone-300">
                            We will baseline representative routes, isolate the slow layer and tell you whether a
                            focused fix, a larger rebuild or no development work is justified.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-semibold text-white hover:bg-cognac/90">
                            Book a 15-min call <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </Container>
        </>
    );
}

export default function WebsiteSpeedGuide() {
    return <WebsiteSpeedGuideContent />;
}
