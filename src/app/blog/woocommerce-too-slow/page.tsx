import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { Activity, ArrowLeft, ArrowRight, Database, Gauge, ShoppingCart, Wrench } from "lucide-react";
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
import ArticleContents from "@/components/blog/ArticleContents";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));
const PageSpeedAnimation = dynamicImport(() => import("@/components/blog/PageSpeedAnimation"));

const postId = "woocommerce-too-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WooCommerce Too Slow? A 2026 Diagnosis and Fix Guide";
const description =
    "Diagnose a slow WooCommerce store with field data, lab tests, server traces and transaction checks. Prioritize repairs before considering headless or replacement.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "WooCommerce slow",
        "WooCommerce too slow",
        "WooCommerce speed optimization",
        "slow WooCommerce checkout",
        "WooCommerce Core Web Vitals",
        "WooCommerce performance audit",
        "headless WooCommerce",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-25",
        modifiedTime: "2026-10-04",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/woocommerce-too-slow")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WooCommerce performance documentation", url: "https://developer.woocommerce.com/docs/best-practices/performance/" },
    { name: "WooCommerce caching configuration", url: "https://developer.woocommerce.com/docs/best-practices/performance/configuring-caching-plugins" },
    { name: "WooCommerce HPOS documentation", url: "https://developer.woocommerce.com/docs/features/high-performance-order-storage" },
    { name: "WooCommerce server requirements", url: "https://woocommerce.com/document/server-requirements/" },
    { name: "WooCommerce Cart and Checkout data flow", url: "https://developer.woocommerce.com/docs/block-development/reference/overview-of-data-flow/" },
    { name: "WooCommerce 8.3.0 release notes (block checkout default)", url: "https://developer.woocommerce.com/2023/11/16/woocommerce-8-3-0-released/" },
    { name: "WooCommerce Cart and Checkout blocks status", url: "https://woocommerce.com/document/cart-checkout-blocks-status/" },
    { name: "WooCommerce classic checkout script (source)", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/client/legacy/js/frontend/checkout.js" },
    { name: "WooCommerce shipping rate caching (source)", url: "https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-shipping.php" },
    { name: "Query Monitor plugin", url: "https://wordpress.org/plugins/query-monitor/" },
    { name: "Chrome DevTools network reference", url: "https://developer.chrome.com/docs/devtools/network/reference" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath(`/blog/${postId}`),
            datePublished: "2026-03-25",
            dateModified: "2026-10-04",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["WooCommerce", "WordPress", "Headless commerce", "Core Web Vitals", "Web performance optimization", "Next.js", "E-commerce migration"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "WooCommerce performance",
            keywords: ["WooCommerce slow", "WooCommerce add to cart slow", "WooCommerce checkout slow", "WooCommerce backend slow", "speed up WooCommerce", "WooCommerce Core Web Vitals", "headless WooCommerce"],
            wordCount: 4941,
            timeRequired: "PT25M",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "WooCommerce", sameAs: ["https://en.wikipedia.org/wiki/WooCommerce", "https://woocommerce.com"] },
                { "@type": "SoftwareApplication", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress", "https://wordpress.org"] },
                { "@type": "Thing", name: "Core Web Vitals", sameAs: "https://web.dev/articles/vitals" },
                { "@type": "Thing", name: "Headless commerce", sameAs: "https://en.wikipedia.org/wiki/Headless_content_management_system" },
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
                { "@type": "ListItem", position: 3, name: "WooCommerce performance", item: canonicalUrl },
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
            datePublished: "2026-03-25",
            dateModified: "2026-10-04",
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

const inlineLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WooCommerceTooSlowPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "WooCommerce performance")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WooCommerce performance</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WooCommerce Too Slow? <span className="italic text-cognac">Diagnose Before You Rebuild</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            WooCommerce is usually slow for a reason you can name and locate: every uncached page is
                            assembled per request by PHP and the database, WooCommerce loads cart-refreshing JavaScript
                            on every page that shows the mini-cart, which many themes put in the header of every page, and cart, checkout and account pages can&apos;t be
                            full-page cached because they hold customer state. Extensions, media and hosting then add
                            to whichever of those is already hurting. Find which layer is responsible on your store
                            before buying another plugin or committing to a new architecture.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current Google and WooCommerce documentation on August 2, 2026. The add to cart and checkout sections were rechecked against WooCommerce&apos;s docs and source code on October 4, 2026.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="woocommerce-too-slow" />
                      </div>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        postId="woocommerce-too-slow" published="2026-03-25"
                        readTime="17 min read"
                        bio="Hassan is PandaCodeGen's co-founder and lead engineer. He audits WooCommerce stores layer by layer, from field data down to the database, and rebuilds storefronts as custom Next.js when the measurement supports it."
                        linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                    />

                    <div className="my-10">
                        <PageSpeedAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "There's no defensible universal PageSpeed range for WooCommerce stores. Test this store, its pages and its real users.",
                                "Use Chrome UX Report field data for user experience and controlled lab runs for diagnosis. They answer different questions.",
                                "Cache public pages where safe, but keep customer-specific cart, checkout and account data dynamic.",
                                "Repair hosting, queries, extensions, assets and transaction flows before deciding that WooCommerce itself must be replaced.",
                                "Choose headless or a full migration only when the business case and operating model justify the added system boundaries.",
                            ]}
                        />
                    </section>

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">Four kinds of evidence, and what each one settles</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        A WooCommerce speed argument usually stalls because two people are holding different evidence.
                        Field data tells you what real customers experienced and can&apos;t tell you why. A lab trace
                        tells you why and can&apos;t tell you how common it is. Backend measurement is the only thing
                        that sees server time, and commerce timing is the only thing that sees whether the order got
                        placed. Collect all four before deciding anything. If the evidence does point to a rebuild, ours is a fixed price from $1,500 with no minimum project size, and you own the code at the end.
                    </p>
                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Activity, title: "Field", body: "Real-user Core Web Vitals by page type, device and geography." },
                            { icon: Gauge, title: "Lab", body: "Repeatable traces, requests, JavaScript, images and rendering." },
                            { icon: Database, title: "Backend", body: "Server time, PHP workers, queries, cache and external calls." },
                            { icon: ShoppingCart, title: "Commerce", body: "Add to cart, shipping, tax, payment and order creation." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <ArticleContents />
                    <BlogHeader id="score">Does WooCommerce have a typical PageSpeed score?</BlogHeader>
                    <BlogText>
                        No reliable platform-wide score applies to every WooCommerce store. <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> is a controlled
                        lab test, and its score changes with the tested URL, device profile, network, CPU, content and
                        run conditions. PageSpeed Insights may also show Chrome UX Report field data collected from real
                        users. Record which dataset you&apos;re discussing.
                    </BlogText>
                    <InsightBox variant="warning" label="A common reporting error">
                        A Lighthouse score of 90 or above is Lighthouse&apos;s own good-score band. It isn&apos;t a Google
                        ranking threshold. Core Web Vitals are used by Google&apos;s ranking systems, but relevance and
                        many other signals count too, and a passing result doesn&apos;t guarantee rankings or revenue. For what each
                        metric measures, see{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>,
                        and for the relationship between the two,{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>how site speed relates to search performance</Link>.
                    </InsightBox>

                    <BlogHeader id="baseline">Build a useful baseline</BlogHeader>
                    <BlogText>
                        Test a real example of each: home, a category, a product, search, the cart, checkout and the account area.
                        Segment field data where enough traffic exists. For lab work, keep the same URL, device profile,
                        network, test region, consent state, account state and data set. Run each case multiple times and
                        keep the median plus the raw results. Note releases, promotions and traffic spikes that could
                        distort comparisons. If you haven&apos;t narrowed the problem to a layer yet,{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>our walkthrough for tracing a slow-loading site</Link>{" "}
                        is the wider starting point.
                    </BlogText>
                    <BlogList
                        items={[
                            "Core Web Vitals field status and metric distributions",
                            "Server response time and cache status for public and dynamic requests",
                            "Largest image and font payloads, render-blocking assets and long JavaScript tasks",
                            "Slow database queries, repeated option loads and remote API calls",
                            "PHP worker, CPU, memory, database and object-cache saturation",
                            "Cart, checkout, payment, webhook and order-processing duration",
                            "Errors, timeouts and performance changes by template, device and geography",
                        ]}
                    />

                    <BlogHeader id="causes">Eight common causes of a slow WooCommerce store</BlogHeader>
                    <BlogText>
                        Slowness on a WooCommerce store almost always traces to one of eight layers: hosting, caching,
                        extensions, the theme or builder, media, the database, third-party scripts, or background
                        operations. Work down the table and gather the evidence in the right-hand column before changing
                        anything, because each layer produces a different symptom and the wrong fix costs you time
                        without moving the number.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Layer</th><th className="p-4">What to inspect</th><th className="p-4">Evidence before changing it</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Hosting</td><td className="p-4">Workers, CPU, memory, storage, database latency and region</td><td className="p-4">Resource graphs, queueing and server traces</td></tr>
                                <tr><td className="p-4 font-bold">Caching</td><td className="p-4">Page, object, browser and CDN cache behavior</td><td className="p-4">Cache headers, hit rates and bypass reasons</td></tr>
                                <tr><td className="p-4 font-bold">Extensions</td><td className="p-4">Queries, hooks, assets, scheduled work and remote calls</td><td className="p-4">Profile with controlled enable and disable tests</td></tr>
                                <tr><td className="p-4 font-bold">Theme and builder</td><td className="p-4">DOM size, CSS, JavaScript, fonts and template work</td><td className="p-4">Coverage, trace and rendered comparison</td></tr>
                                <tr><td className="p-4 font-bold">Media</td><td className="p-4">Dimensions, formats, variants, eager loading and CDN delivery</td><td className="p-4">Request waterfall and visual quality checks</td></tr>
                                <tr><td className="p-4 font-bold">Database</td><td className="p-4">Slow queries, indexes, autoloaded data, sessions and table growth</td><td className="p-4">Query logs, explain plans and table inventory</td></tr>
                                <tr><td className="p-4 font-bold">Third parties</td><td className="p-4">Analytics, ads, chat, reviews, search and payment scripts</td><td className="p-4">Consent-state waterfall and failure simulation</td></tr>
                                <tr><td className="p-4 font-bold">Operations</td><td className="p-4">Cron, imports, feeds, backups, scans and concurrent admin work</td><td className="p-4">Job timing, locks, queues and resource overlap</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogQuote>
                        Every uncached page is assembled per request. That&apos;s the mechanism, not a general complaint about the platform.
                    </BlogQuote>

                    <BlogHeader id="fix-ladder">How to speed up WooCommerce: a measured fix ladder</BlogHeader>
                    <BlogText>
                        Fix a WooCommerce store from the bottom of the stack upward: environment first, then caching,
                        then assets, then the code that runs on each request. The order counts, because a tuning
                        change made on an under-provisioned server or an unsupported PHP version measures nothing.
                        Change one variable at a time and retest the same pages and the same transaction flows after
                        each step.
                    </BlogText>
                    <BlogList
                        items={[
                            "Back up the store and reproduce the issue in a production-like test environment.",
                            "Check the environment against WooCommerce's own recommendations first: PHP 8.3 or greater, MySQL 8.0 or greater (or MariaDB 10.6 or greater), and a WordPress memory limit of 256 MB or greater. A store below these is being slowed by its environment before any tuning starts.",
                            "Fix errors, unsupported runtime versions, failed jobs and resource exhaustion.",
                            "Set up caching properly, and make sure the cart, checkout and account pages are never cached.",
                            "Optimize the largest images, fonts, CSS and JavaScript found in the trace.",
                            "Profile expensive queries, hooks, extension code and remote requests.",
                            "Reduce or replace a component only after an isolated test shows its effect.",
                            "Retest the same pages and transaction flows, then monitor real users after release.",
                        ]}
                    />
                    <BlogText>
                        A faster home page isn&apos;t enough if search, product variations or checkout stop working
                        correctly. Performance work is complete only when functional acceptance still passes. The generic version of this ladder, with the frontend steps
                        expanded, is in{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>our guide to speeding up a website</Link>.
                    </BlogText>

                    <BlogHeader id="mechanisms">Two mechanisms to understand before you buy a plugin</BlogHeader>
                    <BlogText>
                        Most WooCommerce speed advice skips the mechanism and jumps to a product recommendation. These two
                        explain much of what a real audit finds, and knowing them changes which fix you reach for.
                    </BlogText>

                    <h3 className="mt-6 text-xl font-bold text-charcoal">Cart fragments load wherever the mini-cart renders</h3>
                    <BlogText>
                        WooCommerce used to enqueue the cart-fragments script on every page route. That changed in
                        WooCommerce 7.8, released June 2023: the script now loads only where the Cart Widget is
                        rendered, where a third-party script declares it as a dependency, or where it is explicitly
                        enqueued in code. The catch is how often one of those is true. Storefront and many commercial
                        themes hardcode the mini-cart into the header template, so it renders everywhere and the script
                        comes with it. Where that happens, an AJAX request to refresh cart state fires on your homepage,
                        About page and contact page, and because the response varies per visitor, page caching
                        doesn&apos;t remove it. Check your own store instead of assuming either way: load a page that
                        has no cart on it and look for <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc-cart-fragments</code> in the network panel. If it&apos;s there,
                        WooCommerce publishes a filter to scope it to shop pages, and the mini-cart block avoids the API
                        altogether. The same compounding pattern across the wider plugin set is covered
                        in{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className={inlineLinkClass}>how plugins accumulate into a page-weight problem</Link>.
                    </BlogText>

                    <h3 className="mt-6 text-xl font-bold text-charcoal">WooCommerce doesn&apos;t modernize your images for you</h3>
                    <BlogText>
                        WooCommerce generates cropped thumbnails, and WordPress core has emitted
                        <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">srcset</code> and <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">sizes</code> markup since version 4.4, so responsive
                        candidates do exist. What neither does is convert uploads to WebP or AVIF, or enforce an upload
                        size limit. Upload a full-resolution DSLR product photo and the largest candidate mobile
                        browsers can pick is still very close to it.
                        Google reports WebP lossy images as 25 to 34% smaller than comparable JPEG at equivalent SSIM quality index, and without that qualifier the number means little: it&apos;s a saving at matched quality, not a free one. AVIF is typically smaller
                        again. On a product page carrying eight unoptimized photos, that difference is the gap between a
                        page that renders quickly on mobile data and one that doesn&apos;t.
                    </BlogText>

                    <BlogHeader id="cache">Why cart, checkout and account need different caching rules</BlogHeader>
                    <BlogText>
                        WooCommerce&apos;s caching guide says Cart, Checkout and My Account should stay dynamic because
                        they contain customer and session-specific information. That doesn&apos;t mean these journeys
                        can&apos;t be improved. It means a full-page cache must not serve one customer&apos;s state to another.
                        Optimize application work, database access, object caching, APIs and frontend behavior, and
                        keep every result correct.
                    </BlogText>

                    <BlogHeader id="add-to-cart">Why is WooCommerce add to cart slow?</BlogHeader>
                    <BlogText>
                        WooCommerce add to cart is slow because the click isn&apos;t a local update. It&apos;s a server round trip that runs
                        WordPress, resolves the product, checks stock and pricing, writes the cart to the session, and
                        then hands back a fragment for the mini-cart to redraw. In a browser network panel a classic store
                        shows the add as <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc-ajax=add_to_cart</code>, and its response already carries the
                        updated mini-cart. A block-based store uses the Store API instead and posts to <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">/wc/store/v1/cart/add-item</code>,
                        which returns the whole cart. Either way it&apos;s a full server round trip where the shopper expects an instant update. On a variable
                        product it also has to match the chosen variation. Because the response differs per visitor it can&apos;t be served from a
                        page cache, so it lands on PHP every time, competing for the same workers as everything else on
                        the site. Any extension hooked into the add-to-cart action, such as bundles, add-ons,
                        subscriptions or upsell logic, runs inside that same request.
                    </BlogText>
                    <BlogText>
                        Which request you see depends on where the button is. On shop and category pages, the
                        &ldquo;Enable AJAX add to cart buttons on archives&rdquo; setting, on by default, sends the{" "}
                        <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc-ajax=add_to_cart</code> request above.
                        On a single product page in a classic theme, the default template submits the product form
                        instead, so the shopper waits for the whole product page to be rebuilt on the server. If
                        &ldquo;Redirect to the cart page after successful addition&rdquo; is ticked under{" "}
                        <strong>WooCommerce &rarr; Settings &rarr; Products</strong>, they wait for the cart page as
                        well. Both settings were read from{" "}
                        <a href="https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/admin/settings/class-wc-settings-products.php" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>WooCommerce&apos;s source code</a>{" "}
                        on October 4, 2026.
                    </BlogText>
                    <BlogText>
                        Work through these in order to find which part of the round trip is responsible:
                    </BlogText>
                    <BlogList
                        items={[
                            "Separate click responsiveness from the network request and UI update.",
                            "Inspect variation logic, stock checks, pricing rules, bundles and add-on extensions.",
                            "Trace Store API or AJAX requests, database queries and remote dependencies.",
                            "Check for more than one mini-cart on the page. A theme cart, a slide-out cart plugin and a page-builder cart widget can each refresh fragments on the same click, so the work happens two or three times over.",
                            "Check whether analytics or personalization duplicates work after the action.",
                            "Test guest and signed-in states, simple and variable products, and an empty and populated cart.",
                        ]}
                    />

                    <BlogHeader id="checkout">Why is WooCommerce checkout slow?</BlogHeader>
                    <BlogText>
                        WooCommerce checkout is the slowest page in most stores because it&apos;s the one page that can never be
                        full-page cached. WooCommerce&apos;s own caching guidance is explicit that Cart, Checkout and My
                        Account must stay dynamic, since they carry customer and session-specific data. So every load
                        runs the full stack: it holds customer state, calculates shipping and tax, and checks stock.
                        Separate the three stages before you optimise, because they cost different things. The initial
                        load builds the form and the totals. Changing an address or a shipping method fires a
                        recalculation over AJAX, and that is where a slow checkout usually reveals itself, since a
                        shopper triggers it several times. Only when they press Place Order does WooCommerce contact
                        the payment provider and write the order. Every extension hooked into any of those adds its
                        work to the same request, and a slow payment or fraud service becomes your slow checkout.
                    </BlogText>
                    <BlogText>
                        Test each supported country, shipping method, tax path and payment method. Inspect address
                        changes, repeated recalculation, payment-provider latency, fraud services, webhooks and order
                        hooks. Simulate third-party slowness and failure, not only the happy path.
                    </BlogText>
                    <BlogText>
                        The recalculation request looks different depending on which checkout you run. Since WooCommerce
                        8.3, released in November 2023, new stores get the block-based Cart and Checkout by default,
                        while stores that updated from an earlier version kept the classic shortcode checkout. On the
                        classic checkout, typing in an address field queues a{" "}
                        <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc-ajax=update_order_review</code> request
                        one second after the last keystroke, and changing the shipping method sends it straight away.
                        Each one recalculates shipping, then totals, then rebuilds the order summary and payment section
                        on the server. On the block checkout, address changes go to the Store API&apos;s{" "}
                        <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">cart/update-customer</code> endpoint
                        inside a batch request, a new shipping method sends another Store API request, and both return
                        the whole cart. Changing the payment method doesn&apos;t send a request on its own. Sources,
                        read October 4, 2026:{" "}
                        <a href="https://developer.woocommerce.com/2023/11/16/woocommerce-8-3-0-released/" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>the WooCommerce 8.3 release post</a>,{" "}
                        <a href="https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/client/legacy/js/frontend/checkout.js" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>the classic checkout script</a>{" "}
                        and{" "}
                        <a href="https://developer.woocommerce.com/docs/block-development/reference/overview-of-data-flow/" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>WooCommerce&apos;s Cart and Checkout data flow guide</a>.
                    </BlogText>
                    <BlogText>
                        Shipping rates are one place a checkout can end up waiting on another company. WooCommerce stores
                        the rates it calculates in the customer&apos;s session, keyed to the items and the destination,
                        so it recalculates only when one of those changes. A live-rate extension that asks a carrier for
                        prices makes that call during the recalculation, and the data flow guide lists courier rates
                        and payment APIs among the data that can only come from the server. Check that shipping{" "}
                        <strong>Debug mode</strong> is off on a live store: WooCommerce&apos;s own setting text says it
                        bypasses the shipping rate cache, so every recalculation starts from scratch. The caching and the
                        setting are both in{" "}
                        <a href="https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/class-wc-shipping.php" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>WooCommerce&apos;s shipping code</a>.
                    </BlogText>
                    <BlogText>
                        One more thing to rule out before timing anything on a block checkout: a payment gateway that
                        hasn&apos;t declared support for it. WooCommerce&apos;s{" "}
                        <a href="https://woocommerce.com/document/cart-checkout-blocks-status/" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>Cart and Checkout blocks status page</a>{" "}
                        says an incompatible gateway may not appear as a payment option at all, and offers a one-click
                        switch back to the classic checkout.
                    </BlogText>
                    <InsightBox variant="info" label="Don't optimize away correctness">
                        The WooCommerce Cart and Checkout documentation treats the server as the source of truth for
                        transactional data such as totals, addresses, shipping and coupons. A faster interface still
                        needs authoritative server validation.
                    </InsightBox>

                    <h3 id="time-cart-and-checkout" className="mt-10 mb-4 text-2xl font-bold text-charcoal">How to time a slow add to cart or checkout</h3>
                    <div data-speakable="true">
                        <BlogText>
                            Time the request, not the page. Add to cart and checkout feel slow because of one or two
                            server round trips, and a PageSpeed run of the checkout page measures neither of them. Five
                            steps find which request is slow and what it&apos;s waiting on.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-stone-700">
                        <li>
                            Open Chrome DevTools, go to the Network panel and pick the Fetch/XHR filter. Type{" "}
                            <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc-ajax</code> in the filter box on a
                            classic store, or <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wc/store</code> on a
                            block checkout.
                        </li>
                        <li>
                            Click add to cart, change the address and pick a shipping method. For each request, open
                            the Timing tab and read Waiting (TTFB), which{" "}
                            <a href="https://developer.chrome.com/docs/devtools/network/reference" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>Chrome&apos;s documentation</a>{" "}
                            defines as the time the browser spends waiting for the first byte of the response. That is
                            your server&apos;s share. If it&apos;s short and the update still feels slow, the delay is in
                            the browser.
                        </li>
                        <li>
                            Repeat as a guest and signed in, with a simple and a variable product, with one item and a
                            full cart, and with each shipping and payment method. Take three runs of each and keep the
                            median.
                        </li>
                        <li>
                            On a staging copy, install{" "}
                            <a href="https://wordpress.org/plugins/query-monitor/" target="_blank" rel="noopener noreferrer" className={inlineLinkClass}>Query Monitor</a>.
                            It lists database queries and outbound HTTP API calls with the time each took, grouped by
                            the plugin responsible, and adds debugging information to the headers of AJAX responses and
                            of REST responses when you&apos;re signed in as an administrator. A slow carrier, tax or
                            fraud service shows up there as an HTTP API call.
                        </li>
                        <li>
                            Switch off the extensions that hook into cart and checkout one at a time on staging, and
                            retime the same requests after each change.
                        </li>
                    </ol>

                    <BlogHeader id="admin">Why is the WooCommerce backend (wp-admin) slow?</BlogHeader>
                    <BlogText>
                        A slow WooCommerce admin is a different problem from a slow storefront, and it usually comes from the
                        database, not the frontend. Two causes account for most of it: options in
                        <code className="mx-1 rounded bg-stone-100 px-1.5 py-0.5 text-[0.9em]">wp_options</code>
                        set to autoload, which are read on every request and accumulate as extensions come and
                        go; and order storage, because before High-Performance Order Storage every order lived in the
                        same table as posts, so the Orders screen slowed down as the store grew. Background work such as
                        scheduled actions, imports and feeds competes for the same resources and makes both worse.
                    </BlogText>
                    <BlogText>
                        Separate back-office performance from storefront performance. Review order-list queries,
                        analytics, scheduled actions, imports, search, extension dashboards and database size. Record
                        whether High-Performance Order Storage is active, whether compatibility synchronization is
                        running and whether every critical extension declares compatibility. Much of this overlaps with
                        the underlying WordPress install, which{" "}
                        <Link href="/blog/how-to-fix-slow-wordpress" className={inlineLinkClass}>our evidence-led method for fixing a slow WordPress site</Link>{" "}
                        covers layer by layer.
                    </BlogText>

                    <BlogHeader id="hpos">What HPOS can and can&apos;t prove</BlogHeader>
                    <BlogText>
                        High-Performance Order Storage uses dedicated order tables and indexes. WooCommerce enables it by
                        default for new installations from version 8.2, and on an existing store you turn it on at
                        <strong> WooCommerce &rarr; Settings &rarr; Advanced &rarr; Features</strong>. Compatibility mode
                        keeps the legacy post tables in sync while you transition, which is the safe way to move but also
                        means you&apos;re writing orders twice until you turn it off. It can improve order-data operations, but it
                        isn&apos;t a universal storefront cure and no fixed speedup applies to every store. Test on a
                        production-like copy, verify extension compatibility, synchronize and reconcile data, exercise
                        every payment path and keep a rollback plan.
                    </BlogText>

                    <BlogHeader id="security">Performance and security maintenance overlap</BlogHeader>
                    <BlogText>
                        Unsupported extensions, abandoned code and uncontrolled updates can create both reliability and
                        security risk. Keep an inventory of WordPress, WooCommerce, theme, extensions and custom code.
                        Remove unused components after confirming dependencies, test updates in staging, use
                        least-privilege access, protect backups and monitor logs. A smaller dependency set can reduce
                        work, but no architecture has zero third-party or security risk. We looked at how that exposure
                        is changing in{" "}
                        <Link href="/blog/wordpress-ai-security-risk-2026" className={inlineLinkClass}>our review of WordPress security risk in 2026</Link>.
                    </BlogText>

                    <BlogHeader id="business">Measure business effect without invented revenue math</BlogHeader>
                    <BlogText>
                        Define the affected journey and compare performance cohorts in your own analytics. Watch product
                        discovery, add-to-cart, checkout start, payment success, errors and support contacts. Control for
                        campaign, price, stock, device, geography and seasonality where possible. Faster pages can
                        improve experience, but a public benchmark doesn&apos;t prove the conversion or revenue result
                        for this store.
                    </BlogText>
                    <BlogText>
                        If the funnel numbers point somewhere other than performance, diagnose that instead of optimising
                        further. Our companion guide to{" "}
                        <Link href="/blog/woocommerce-low-conversion-rate" className={inlineLinkClass}>a low WooCommerce conversion rate</Link>{" "}
                        works through the four stages separately, because a drop between product view and add to cart
                        isn&apos;t a speed problem and won&apos;t respond to a speed fix.
                    </BlogText>

                    <BlogHeader id="options">Repair, headless WooCommerce or replace?</BlogHeader>
                    <BlogText>
                        Repair WooCommerce when the measurement points at things you can change and the platform still
                        does what the business needs. Go headless when the back office is working and the storefront
                        is the thing holding you back, accepting that you now run two systems and whatever sits between them.
                        Replace WooCommerce only when the core workflows, the data model or the scale no longer fit,
                        because that&apos;s the option that costs a data migration and a retraining exercise on top of the
                        build.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Option</th><th className="p-4">Potential fit</th><th className="p-4">Main tradeoff to test</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Optimize WooCommerce</td><td className="p-4">Capabilities fit and measured bottlenecks are repairable</td><td className="p-4">Ongoing platform and extension operations</td></tr>
                                <tr><td className="p-4 font-bold">Headless WooCommerce</td><td className="p-4">Woo back office stays while a separate storefront solves defined needs</td><td className="p-4">Preview, cache invalidation, search, cart, checkout and two-system ownership</td></tr>
                                <tr><td className="p-4 font-bold">Replace WooCommerce</td><td className="p-4">Core workflows, scale, data model or operations no longer fit</td><td className="p-4">Data migration, feature parity, retraining, cutover and support</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Each row has its own write-up:{" "}
                        <Link href="/blog/what-is-headless-commerce" className={inlineLinkClass}>what headless commerce means</Link>{" "}
                        for the middle option, and{" "}
                        <Link href="/blog/woocommerce-vs-custom-website" className={inlineLinkClass}>WooCommerce compared with a custom build</Link>{" "}
                        for the third.
                    </BlogText>

                    <BlogHeader id="self-check">Signals that point each way</BlogHeader>
                    <BlogText>
                        None of these is a threshold that decides for you, and none of them replaces the measurement work
                        above. They&apos;re the patterns we see most often on either side of the decision, offered so you can
                        place your own store before you spend anything. If the signals point toward moving,{" "}
                        <Link href="/blog/woocommerce-migration-cost" className={inlineLinkClass}>our WooCommerce migration cost breakdown</Link>{" "}
                        sets out what drives the scope.
                    </BlogText>
                    <div className="my-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-cognac/30 bg-cognac/5 p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">Points toward a rebuild</p>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                                <li>Mobile field data sits well below your desktop data and the gap persists across templates.</li>
                                <li>A long plugin list where several overlap, and nobody can say what would break if one were removed.</li>
                                <li>Mobile is a big part of your sessions, so the weakest experience is also the most common one.</li>
                                <li>Your own analytics show the drop-off concentrating on the slowest templates, not spread evenly.</li>
                                <li>Repairs have already been attempted and the retest moved little.</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-stone-300 bg-white p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Points toward staying and repairing</p>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                                <li>A small, young catalog where the operating model is still changing month to month.</li>
                                <li>Dependence on WooCommerce-specific extensions with no API equivalent on the target stack.</li>
                                <li>No technical support available after launch, in-house or contracted.</li>
                                <li>The measured bottleneck is one oversized asset, one slow third party or one hosting tier.</li>
                                <li>The team relies on visual theme editing and nobody is prepared to give that up.</li>
                            </ul>
                        </div>
                    </div>

                    <BlogHeader id="headless">When headless is the wrong answer</BlogHeader>
                    <BlogText>
                        Headless adds APIs, deployment boundaries, content preview, cache invalidation and distributed
                        debugging. It may be poor value for a simple catalog, a team dependent on visual theme editing,
                        or a store whose measured bottleneck is an unoptimized backend or payment integration that would
                        remain. Don&apos;t choose it just to get a Lighthouse screenshot.
                    </BlogText>

                    <BlogHeader id="future">Agentic commerce and protocol claims</BlogHeader>
                    <BlogText>
                        Commerce APIs and agent-facing protocols are evolving. Treat roadmap announcements,
                        experimental features and third-party connectors as changeable integration inputs. Verify the
                        current WooCommerce documentation, authentication model, permissions, data handling and support
                        status during discovery. Don&apos;t migrate because a speculative feature is sold as inevitable.
                    </BlogText>

                    <BlogHeader id="provider">What to ask a WooCommerce performance provider</BlogHeader>
                    <BlogText>
                        Six questions separate an evidence-based engagement from a promise. The first two decide the rest: what baseline evidence gets captured before any change, and which pages, devices, account states and transaction flows count as the test surface. Without those written down, there is nothing to hold the result against afterwards.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which field and lab evidence will be captured before changes?",
                            "Which pages, which devices, logged in or out, and which checkout steps will be tested?",
                            "How will server, database, extension and third-party time be separated?",
                            "What has to work, load fast and be accessible before you sign it off?",
                            "Which changes are reversible, and what are the release and rollback triggers?",
                            "Who owns hosting, code, provider accounts, monitoring and post-launch support?",
                        ]}
                    />
                    <BlogText>
                        Our answers to those questions are set out on the{" "}
                        <Link href="/services/woocommerce" className={inlineLinkClass}>WooCommerce service page</Link>, with the
                        wider storefront work described under{" "}
                        <Link href="/services/ecommerce" className={inlineLinkClass}>ecommerce development</Link> and finished
                        examples in our{" "}
                        <Link href="/work" className={inlineLinkClass}>project case studies</Link>.
                    </BlogText>

                    <BlogHeader id="terms">PandaCodeGen terms and performance acceptance</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s published tiers start at $1,500, $3,500 and $5,000, with custom
                        scope where needed. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed.
                        Package discussions may start with 15 business days of launch defect support on Starter and 30 on Growth and Scale; support applies only where the accepted project terms record it.
                        A 90-plus score means the pages named in your quote, tested on phone and desktop, passing three
                        times each. That is a test-bench score. It is not
                        a ranking or conversion guarantee. The tiers and what each one includes are listed on the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} showHeading={false} />
                        </>
                    )}

                    <BlogHeader id="primary-sources">Primary sources</BlogHeader>
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
                        <Wrench className="mb-4 h-7 w-7 text-cognac" />
                        <h2 className="mb-3 font-serif text-3xl">Get evidence before choosing the fix</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We&apos;ll find the slow paths, see where one system hands off to another, and agree what done looks like before we recommend
                            optimization, headless WooCommerce or a full migration.
                        </p>
                        <QuoteModalButton cta="woocommerce_speed_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Ask us about your store <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
