import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Blocks, Code2, Gauge, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox, StatCard } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const PageSpeedAnimation = dynamicImport(() => import("@/components/blog/PageSpeedAnimation"));

const postId = "shopify-dawn-theme-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify Dawn Theme Slow? Diagnose the Store, Not the Name";
const description =
    "Use Shopify field data, controlled theme previews and route-level traces to find whether media, apps, third-party code, customization or theme code is slowing a Dawn store.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Shopify Dawn theme slow",
        "Shopify Dawn performance",
        "speed up Dawn theme",
        "Shopify Core Web Vitals",
        "Shopify theme performance",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-07",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-dawn-theme-slow")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Shopify Dawn source repository", url: "https://github.com/Shopify/dawn" },
    {
        name: "Shopify theme performance best practices",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
    },
    {
        name: "Shopify theme architecture",
        url: "https://shopify.dev/docs/storefronts/themes/architecture",
    },
    {
        name: "Shopify storefront app performance",
        url: "https://shopify.dev/docs/apps/build/performance/storefront",
    },
    {
        name: "Shopify web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
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
            datePublished: "2026-03-07",
            dateModified: "2026-08-19",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Shopify", "Shopify themes", "Liquid", "Core Web Vitals", "Web performance optimization", "Next.js", "Headless commerce"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Shopify performance",
            inLanguage: "en-US",
            wordCount: 3427,
            timeRequired: "PT17M",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify Dawn", sameAs: ["https://github.com/Shopify/dawn"] },
                { "@type": "Organization", name: "Shopify", sameAs: ["https://www.shopify.com"] },
                { "@type": "Thing", name: "Shopify Online Store 2.0" },
                { "@type": "Thing", name: "Core Web Vitals" },
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
                { "@type": "ListItem", position: 3, name: "Dawn performance", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrlForPath(`/blog/${postId}`) },
            datePublished: "2026-03-07",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function ShopifyDawnThemeSlowPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Dawn performance")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify Dawn Theme Slow? <span className="italic text-cognac">Diagnose the Store</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Dawn is Shopify&apos;s source-available reference theme and was built with performance in
                            mind. A slow Dawn store needs route-level diagnosis. The theme name alone does not identify
                            the cause, impose a <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> ceiling or prove that headless is required.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 2, 2026 against current Shopify documentation and the Dawn repository.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 7, 2026" readTime="9 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogText>
                            Dawn is slow on a specific store for one of four reasons, and all four are things you added
                            rather than things the theme shipped with: oversized images and video, too many sections on
                            a template, the apps and third-party code you installed, and custom code someone put in the
                            theme. Shopify&apos;s{" "}
                            <a href="https://shopify.dev/docs/storefronts/themes/best-practices/performance" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>theme performance best practices</a>{" "}
                            document those four, and separately document what the platform already handles for you,
                            including CDN delivery, automatic image optimization, gzip on CSS and JavaScript, a
                            one-year browser cache and HTTP/2. Read August 2, 2026. None of those last five is the
                            thing you are about to fix.
                        </BlogText>
                        <BlogText>
                            Find your own cause in two moves. Open Shopify&apos;s{" "}
                            <a href="https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Web Performance report</a>{" "}
                            and read the 75th percentile by page type and device to see which routes and which real
                            visitors have a problem. Then reproduce the worst route in a repeated lab test and take the
                            median. The same performance documentation gives a 16 KB target for a theme&apos;s minified
                            JavaScript bundle, which is one number you can check in DevTools in about a minute.
                        </BlogText>
                    </section>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Start with four evidence layers</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Gather all four before changing anything, because each one answers a question the others
                            cannot. Field data says which real visitors are affected but not why. A lab trace says why
                            but not how common it is. The per-route inventory names the specific asset or script. And a
                            clean Dawn preview is the only thing that separates what the theme does from what your
                            configuration does to it.
                        </p>
                        <BlogList
                            items={[
                                "Shopify real-user LCP, INP and CLS by URL, page type, device and time.",
                                "Repeatable lab tests for representative home, collection, product and cart states.",
                                "A network, main-thread, media and third-party inventory for each affected route.",
                                "A controlled preview that separates base Dawn from the production configuration.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Gauge, title: "Field data", body: "Find the users and routes with a real problem." },
                            { icon: Blocks, title: "Apps", body: "Trace embeds, scripts, pixels and dependencies." },
                            { icon: ImageIcon, title: "Media", body: "Inspect dimensions, formats and loading priority." },
                            { icon: Code2, title: "Theme", body: "Compare custom code with a controlled preview." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="my-10">
                        <PageSpeedAnimation />
                    </div>

                    <BlogHeader>What Dawn is in 2026</BlogHeader>
                    <BlogText>
                        Shopify describes Dawn as an HTML-first, JavaScript-only-as-needed reference theme with
                        performance and Online Store 2.0 features built in. It uses server-rendered Liquid HTML,
                        progressive enhancement, sections, blocks, snippets and supporting assets. A merchant&apos;s
                        production store can differ substantially after apps, sections, media, tracking and custom code
                        are added.
                    </BlogText>
                    <BlogText>
                        Dawn shipped in 2021 as the reference theme for Online Store 2.0 and became the theme most new
                        stores started from. Shopify has since introduced Horizon as the reference theme for new
                        stores; check the current position in{" "}
                        <a href="https://shopify.dev/docs/storefronts/themes/architecture" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Shopify&apos;s theme architecture documentation</a>{" "}
                        rather than here, because default themes change. Dawn remains free and source-available, and the{" "}
                        <a href="https://github.com/Shopify/dawn" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>public repository</a>{" "}
                        was still active when read on August 2, 2026. If you are on Dawn today, you are not on a
                        deprecated theme. You are on a supported one that has been customized for several years, and
                        the customization history is where the evidence usually is.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no Dawn score ceiling here">
                        You will not find a PageSpeed figure that Dawn supposedly cannot pass. Shopify publishes no such
                        universal ceiling, and scores move with the route, the content, the code layered on top of the
                        theme, the test environment and the individual run. Treating a headless rebuild as the only way
                        past an imagined ceiling skips the diagnosis entirely. Measure your own routes across repeated
                        runs, work out which layer owns the time, and decide from that.
                    </InsightBox>

                    <BlogHeader>What is actually in the page, and who owns it</BlogHeader>
                    <BlogText>
                        Before you change anything, split the payload by owner. In the production Dawn stores we have traced, the
                        bytes and the main-thread time belong to four different parties, and only one of them is the
                        theme. This is the reason switching to another Shopify theme can change less than expected: three
                        of the four layers travel with the store, not with the theme.
                    </BlogText>

                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Layer</th><th className="p-4">Who controls it</th><th className="p-4">What to do about it</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">App scripts</td><td className="p-4">App vendors, via app embeds and injected storefront code</td><td className="p-4">Inventory, justify, restrict to the routes that need them, remove the rest</td></tr>
                                <tr><td className="p-4 font-bold">Platform scripts</td><td className="p-4">Shopify</td><td className="p-4">Budget around them. They are not a theme-level lever</td></tr>
                                <tr><td className="p-4 font-bold">Media</td><td className="p-4">You, through uploads and section settings</td><td className="p-4">Size, format and loading priority per rendered slot</td></tr>
                                <tr><td className="p-4 font-bold">Theme and custom code</td><td className="p-4">You and whoever has edited the theme</td><td className="p-4">Compare against a clean preview to isolate what was added</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogQuote>
                        The theme name alone never identifies the cause. What you installed on top of it usually does.
                    </BlogQuote>

                    <BlogHeader>Audit the app layer by name</BlogHeader>
                    <BlogText>
                        Apps add storefront JavaScript through app embeds and theme app extensions. That code runs on
                        your customers&apos; devices. It is versioned by the vendor rather than by you, and it often loads
                        on routes where the app has no visible interface. Go through your installed apps by
                        category and write down what each one actually costs on the routes you care about. Do not take a
                        vendor&apos;s word for its weight. Measure it in your own trace.
                    </BlogText>
                    <BlogList
                        items={[
                            "Reviews and user-generated content: Judge.me, Okendo, Yotpo, Loox and similar.",
                            "Live chat and helpdesk: Gorgias, Tidio, Intercom and similar.",
                            "Email, SMS and popups: Klaviyo, Privy, Attentive and similar.",
                            "Loyalty, referrals and rewards: Smile.io, LoyaltyLion and similar.",
                            "Upsell, bundling, subscription, currency, wishlist and search apps.",
                            "Tag managers, pixels, heatmaps, A/B tools and anything a marketer installed directly.",
                        ]}
                    />
                    <BlogText>
                        For each one, record the owner inside your business, the routes it needs, the routes it actually
                        loads on, its measured transfer size and its main-thread cost in a trace. Apps that no longer have an owner are the easiest thing to remove. Uninstalling an app does not always remove
                        its code, so check the theme for leftover snippets and script tags after every removal.
                    </BlogText>
                    <InsightBox variant="info" label="Why a theme swap rarely fixes this">
                        Your app payload is attached to the store, not to the theme. Install the same apps on a
                        different Shopify theme and the same third-party scripts follow you across. Test that claim on
                        your own store with a duplicated theme before you pay anyone to re-theme for speed reasons.
                    </InsightBox>

                    <BlogHeader>What Shopify loads regardless of your theme</BlogHeader>
                    <BlogText>
                        Some storefront JavaScript belongs to the platform. Analytics and web pixels, cart behaviour,
                        payment and checkout-related code and Shopify&apos;s own performance instrumentation are managed
                        by Shopify rather than by your theme. You can influence how much of your own work competes with
                        them, but removing them is not a theme-level option on the standard storefront. Treat that as
                        fixed cost in your performance budget rather than something a developer failed to fix.
                    </BlogText>
                    <BlogText>
                        Liquid is server-rendered on request. Shopify generates the HTML for each page view and returns
                        it, so expensive loops, heavy section logic and large numbers of rendered products show up as
                        server time before the browser starts work. A pre-rendered or cached custom frontend moves that
                        work to build time instead. That is a real architectural difference, but it is not free: it
                        moves work rather than deleting it, and it adds a codebase you have to own.
                    </BlogText>

                    <BlogHeader>1. Read the field report first</BlogHeader>
                    <BlogText>
                        Shopify&apos;s{" "}
                        <a href="https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports" target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>Web Performance reports</a>{" "}
                        use real-user data and show LCP, INP and CLS over time, by URL and by page type, with the
                        summary at the 75th percentile. The reporting delay and retention window in the list below come
                        from the same document, read August 2, 2026. Use the report to locate the affected population
                        instead of treating one homepage Lighthouse run as the whole store.
                    </BlogText>
                    <BlogList
                        items={[
                            "Compare mobile and desktop distributions.",
                            "Separate home, collection, product and other page types.",
                            "Annotate app installs, theme releases, campaigns and media changes.",
                            "Wait before judging a release. Shopify documents that the report may be delayed by up to 36 hours.",
                            "Remember the window. Shopify keeps only the last 90 days of web performance data, so export before you need it.",
                            "Expect gaps on a new or password-protected store, and larger swings on a low-traffic store. Shopify says so directly.",
                        ]}
                    />

                    <BlogHeader>2. Create controlled comparisons</BlogHeader>
                    <BlogText>
                        This is the step that proves which layer owns the time, and it works by holding everything
                        constant except the one thing you are testing. Duplicate the production theme, stand up a clean
                        Dawn preview beside it, then keep the route, screen size, connection, cache state and consent
                        choice identical across both. Repeat each run and take the median. A single run of two
                        different pages proves nothing at all.
                    </BlogText>
                    <BlogList
                        items={[
                            "Duplicate the current production theme and preserve a rollback point.",
                            "Create a current clean-theme preview with representative content where practical.",
                            "Test the same pages and products, at the same screen size, on the same connection, with the same cache and consent state.",
                            "Repeat runs and use the median rather than selecting the best screenshot.",
                            "Compare one change at a time when isolating an app, section or custom feature.",
                        ]}
                    />
                    <BlogText>
                        Shopify&apos;s own theme guidance tests home, product and collection pages and recommends repeated
                        runs. Your store may need additional routes such as search, cart, account and high-traffic
                        landing pages.
                    </BlogText>

                    <BlogHeader>3. Inspect JavaScript and third parties</BlogHeader>
                    <BlogText>
                        Shopify advises theme developers to minimize JavaScript, avoid parser-blocking scripts and load
                        noncritical resources on interaction where appropriate. It also advises app developers to use
                        theme app extensions and limit resources to the pages where they are needed.
                    </BlogText>
                    <BlogList
                        items={[
                            "List every script by owner, purpose, route and consent category.",
                            "Measure your theme bundle against the 16 KB minified JavaScript target in Shopify's theme performance best practices, then list what else loads on top of it.",
                            "Check your fonts. Shopify notes that a system font avoids the client downloading another resource before text can render.",
                            "Find long tasks, duplicate libraries, synchronous work and global listeners.",
                            "Check whether an app embed loads on routes where its interface is absent.",
                            "Remove abandoned tags and residual theme code only after dependency review.",
                            "Preserve accessibility, analytics and purchase behavior when deferring work.",
                        ]}
                    />

                    <BlogHeader>4. Fix media and loading priority</BlogHeader>
                    <BlogText>
                        Media is where most Dawn stores lose their largest paint, and the fix is two rules rather than
                        a compression setting. Size every image to the slot it actually renders into, and never
                        lazy-load the one image that is the largest element on screen, because deferring it defers the
                        metric you are trying to improve. Everything below follows from those two.
                    </BlogText>
                    <BlogList
                        items={[
                            "Serve responsive images sized for their rendered slot.",
                            "Do not lazy-load the likely above-the-fold LCP image.",
                            "Lazy-load below-the-fold media and reserve dimensions to prevent layout shift.",
                            "Question the hero itself, not just its priority. A banner repeated across every template is a cost paid on every route.",
                            "Embed video from an external host rather than uploading large video files into the theme.",
                            "Replace animated GIFs with a static image, or with video if the motion earns its place.",
                            "Avoid large autoplay video or carousel work unless measured business value justifies it.",
                            "Host theme assets through Shopify's supported delivery path where applicable.",
                        ]}
                    />

                    <BlogHeader>5. Review Liquid, sections and custom code</BlogHeader>
                    <BlogText>
                        Use Shopify Theme Check and browser traces to find large assets, blocking resources and expensive
                        custom work. Review layout-level inclusions because they affect every route. Inspect product and
                        collection loops, section settings and repeated snippets using the actual production data that
                        triggers the problem.
                    </BlogText>

                    <BlogHeader>6. Validate the fix</BlogHeader>
                    <BlogText>
                        A change is validated across four layers, and each carries a guardrail that has to survive it.
                        Lab evidence shows the mechanism moved, field evidence shows real visitors felt it, functional
                        testing shows the store still takes orders, and the business layer shows whether it was worth
                        doing. That last guardrail is the strictest: measure what changed, and do not convert it into a
                        causal revenue claim you cannot support.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Layer</th><th className="p-4">Before and after</th><th className="p-4">Guardrail</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Lab</td><td className="p-4">Repeated representative route tests</td><td className="p-4">Same profile and page state</td></tr>
                                <tr><td className="p-4 font-bold">Field</td><td className="p-4">P75 LCP, INP and CLS after enough traffic</td><td className="p-4">Device and route distribution</td></tr>
                                <tr><td className="p-4 font-bold">Functional</td><td className="p-4">Browse, variant, cart and checkout flows</td><td className="p-4">No broken feature or event</td></tr>
                                <tr><td className="p-4 font-bold">Business</td><td className="p-4">Defined funnel and operating metrics</td><td className="p-4">No unsupported causal claim</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What moves the number, and what only feels like it does</BlogHeader>
                    <BlogText>
                        The left column is the work. The right column is how you prove it on your own store rather than
                        taking anyone&apos;s word for the size of the effect. Measure before and after on the same route,
                        the same profile and the same page state.
                    </BlogText>

                    <p className="mb-2 mt-4 text-xs font-bold text-cognac md:hidden">Swipe to see more</p>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Action</th><th className="p-4">Worth doing</th><th className="p-4">How to verify on your store</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4">Remove apps with no current business owner</td><td className="p-4 font-bold text-green-700">Yes</td><td className="p-4">Trace the route before and after, then check for leftover theme snippets</td></tr>
                                <tr><td className="p-4">Resize and compress hero and section images before upload</td><td className="p-4 font-bold text-green-700">Yes</td><td className="p-4">Compare delivered file size against the rendered slot size in DevTools</td></tr>
                                <tr><td className="p-4">Stop lazy-loading the above-the-fold LCP image</td><td className="p-4 font-bold text-green-700">Yes</td><td className="p-4">Confirm the LCP element and its request timing in a trace</td></tr>
                                <tr><td className="p-4">Restrict app embeds to the routes that use them</td><td className="p-4 font-bold text-green-700">Yes</td><td className="p-4">Load a product page and a policy page, then diff the script list</td></tr>
                                <tr><td className="p-4">Remove unused sections, snippets and legacy tracking</td><td className="p-4 font-bold text-green-700">Yes</td><td className="p-4">Diff against a clean theme preview, and regression-test the purchase flow</td></tr>
                                <tr><td className="p-4">Switch to another theme marketed as fast</td><td className="p-4 font-bold text-red-600">Rarely</td><td className="p-4">Duplicate the theme, keep the apps, and test before you buy anything</td></tr>
                                <tr><td className="p-4">Install a speed-optimizer app</td><td className="p-4 font-bold text-red-600">Rarely</td><td className="p-4">Check whether it added a script of its own, and test with it disabled</td></tr>
                                <tr><td className="p-4">Add a third-party CDN in front of the storefront</td><td className="p-4 font-bold text-red-600">No</td><td className="p-4">Shopify already serves the storefront through its own CDN</td></tr>
                                <tr><td className="p-4">Upgrade the plan to fix storefront rendering</td><td className="p-4 font-bold text-red-600">No</td><td className="p-4">A plan change does not remove app scripts or oversized media from your routes</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>When to keep Dawn, change theme or go headless</BlogHeader>
                    <BlogText>
                        Keep Dawn when the measurement points at your own media, sections and apps, because those
                        travel with the store and a new theme inherits them. Change theme when the customization
                        history has made the current one unmaintainable, which is a code-quality reason rather than a
                        speed one. Go headless only when you have done the first two and the remaining constraint is
                        how Shopify renders and delivers the page, and only if you are prepared to own a codebase.
                    </BlogText>
                    <BlogList
                        items={[
                            "Keep and optimize Dawn when the required experience fits the theme model and measured issues are removable.",
                            "Consider another theme when its tested capabilities better match the merchandising and editorial requirements.",
                            "Consider custom theme work when the business needs a controlled Shopify-native experience and can maintain it.",
                            "Consider headless when requirements, integrations and ownership justify a separate storefront, not as a default speed patch.",
                        ]}
                    />

                    <BlogHeader>Is a rebuild right for your store?</BlogHeader>
                    <BlogText>
                        A rebuild is not automatically the right answer for a store that asks about it. Use your own numbers, not a
                        theme name, to decide. These are the signals we look for before we will quote a headless or
                        custom storefront project at all.
                    </BlogText>
                    <p className="mb-2 mt-6 font-bold text-charcoal">A rebuild is worth costing out when:</p>
                    <BlogList
                        items={[
                            "Your Shopify field report shows a failing Core Web Vitals distribution on high-intent routes, not a single bad lab run.",
                            "You have already removed the removable apps and media problems and the constraint is still there.",
                            "The experience you need does not fit the section and block model without fighting it every release.",
                            "You have enough traffic that a small conversion or crawl change is measurable rather than noise.",
                            "You have someone, internal or contracted, who will own a codebase after handover.",
                        ]}
                    />
                    <p className="mb-2 mt-6 font-bold text-charcoal">Stay on Dawn and fix it in place when:</p>
                    <BlogList
                        items={[
                            "The store is new, traffic is low and you have no conversion baseline to improve against.",
                            "You have not yet run a controlled clean-theme comparison, so you do not know what is causing the problem.",
                            "Your catalogue and merchandising fit the theme model and the pain is a handful of specific routes.",
                            "You depend on apps whose functionality you are not prepared to rebuild or replace.",
                            "Nobody in the business wants to own a separate frontend, its releases and its incidents.",
                        ]}
                    />
                    <InsightBox variant="info" label="Honest answer">
                        If the second list describes you, keep Dawn. A focused repair on the routes that are failing is
                        cheaper, faster and lower risk than a rebuild, and it is the work we will recommend even when
                        you came in asking to go headless.
                    </InsightBox>

                    <BlogHeader>What to check before you accept a Shopify speed quote</BlogHeader>
                    <BlogText>
                        Speed engagements disappoint more often at the scoping stage than at the engineering stage. A cheap quote is usually cheap because it leaves some of these out, and you find out at handover.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which routes are in scope. Home, collection, product, search, cart and account behave differently.",
                            "Which devices and profiles the acceptance test uses, and how many runs are recorded.",
                            "What happens to the apps: which are kept, which are replaced, which functionality disappears.",
                            "Who owns analytics, consent, pixels and conversion tracking continuity through the change.",
                            "URL, redirect, structured data and Merchant Center continuity if the storefront layer changes.",
                            "Who owns the code, the repository and the deployment account after handover.",
                            "Third-party running costs after launch: hosting, image delivery, search, reviews and monitoring.",
                            "What the rollback plan is on a revenue-generating route, and who executes it.",
                        ]}
                    />

                    <BlogHeader>What our engagements cost</BlogHeader>
                    <BlogText>
                        Engagements start at $1,500 and run to $10,000 for integration-heavy commerce work, in the three tiers below. Those are planning anchors, not a quote. The accepted written terms control the final
                        price, the page inventory and the acceptance protocol.
                    </BlogText>
                    <div className="my-6 grid gap-4 sm:grid-cols-3">
                        <StatCard stat="$1,500" label="Starter" context="Small, clearly bounded scope" />
                        <StatCard stat="$3,500" label="Growth" context="Larger migration, CMS or content-continuity scope" />
                        <StatCard stat="$5,000+" label="Scale" context="$5,000 to $10,000 for integration-heavy commerce work" />
                    </div>
                    <BlogText>
                        Where a 90-plus Lighthouse result is included, it is written as a handover target on mobile and
                        desktop for the representative pages named in the scope, verified across three recorded runs
                        under stated conditions before handover. It is a lab acceptance target. It is not a promise
                        about rankings, traffic or revenue, and no honest supplier can give you one of those.
                    </BlogText>

                    <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
                        <p className="mb-2 font-bold text-charcoal">Not sure whether your Dawn store needs a repair or a rebuild?</p>
                        <p className="mb-5 text-sm text-stone-600">
                            Run the audit on your own URL first, or bring the store to a call and we will trace it with
                            you and tell you which of the two it is.
                        </p>
                        <div className="flex flex-col justify-center gap-3 sm:flex-row">
                            <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-white hover:bg-stone-800">
                                Run the free audit <ArrowRight className="h-4 w-4" />
                            </Link>
                            <QuoteModalButton cta="shopify_dawn_mid_quote" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-bold text-charcoal hover:border-charcoal">
                                Get a quote
                            </QuoteModalButton>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-bold text-charcoal hover:border-charcoal">
                                Book a call
                            </CalModalButton>
                        </div>
                    </div>

                    <BlogHeader>Key takeaways</BlogHeader>
                    <ol className="mb-10 list-inside list-decimal space-y-3 leading-relaxed text-stone-700">
                        <li><strong className="text-charcoal">The theme name is not a diagnosis.</strong> Dawn is a performance-oriented reference theme, and a slow Dawn store is a store-level question about apps, media, custom code and content.</li>
                        <li><strong className="text-charcoal">Start with field data.</strong> Shopify&apos;s Web Performance reports tell you which real users and which routes have a problem. One homepage Lighthouse run does not.</li>
                        <li><strong className="text-charcoal">Most of the payload is not the theme&apos;s.</strong> App scripts and platform scripts travel with the store, which is why re-theming for speed disappoints so often.</li>
                        <li><strong className="text-charcoal">Prove every change on your own store.</strong> Same route, same profile, same page state, repeated runs, median rather than best run.</li>
                        <li><strong className="text-charcoal">Headless is a requirements decision.</strong> Choose it when experience, integration and ownership requirements justify it, not as a default fix for a slow route.</li>
                    </ol>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Gauge className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will audit representative routes, trace the production configuration and show whether a
                            focused Dawn repair, theme change or SEO-conscious headless migration fits the evidence. Our{" "}
                            <Link href="/services/ecommerce?ref=blog/shopify-dawn-theme-slow" className="font-semibold text-amber-300 underline underline-offset-4">
                                e-commerce development service
                            </Link>{" "}
                            covers the full transition, including analytics, redirect and structured-data continuity.
                        </p>
                        <QuoteModalButton cta="shopify_dawn_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

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

                    <BlogHeader>Related reading</BlogHeader>
                    <BlogText>
                        For the full diagnostic playbook across any Shopify theme, see our{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="font-medium text-cognac hover:underline">Shopify speed optimization guide</Link>.
                        For what a headless build actually involves, read{" "}
                        <Link href="/blog/shopify-headless" className="font-medium text-cognac hover:underline">headless Shopify on Next.js</Link>.
                        For the same question on the enterprise plan, see{" "}
                        <Link href="/blog/shopify-plus-still-slow" className="font-medium text-cognac hover:underline">why Shopify Plus can still be slow</Link>.
                        To reason about conversion impact with your own data rather than borrowed statistics, see{" "}
                        <Link href="/blog/shopify-conversion-rate-speed-fix" className="font-medium text-cognac hover:underline">Shopify conversion rate and speed</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-slow-losing-sales" className="font-medium text-cognac hover:underline">is a slow Shopify store losing sales</Link>.
                        For the cost comparison over a multi-year horizon, see{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="font-medium text-cognac hover:underline">Shopify versus a custom website</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="font-medium text-cognac hover:underline">what your Shopify app stack really costs each month</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
