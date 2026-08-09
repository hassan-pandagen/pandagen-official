import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, BarChart3, FlaskConical, Gauge, Route } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox, StatCard } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "shopify-conversion-rate-speed-fix";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Low Shopify Conversion Rate? Measure Speed in the Funnel";
const description =
    "Diagnose Shopify conversion and performance together by route, device, traffic source, funnel stage and release instead of assuming load time caused the result.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Shopify conversion rate",
        "Shopify speed conversion",
        "Shopify funnel analysis",
        "Shopify Core Web Vitals",
        "Shopify performance testing",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-11",
        modifiedTime: "2026-08-07",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-conversion-rate-speed-fix")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify: store speed and conversion, what the data shows",
        url: "https://www.shopify.com/enterprise/blog/store-speed-conversion",
    },
    {
        name: "Shopify: conversion rate breakdown report",
        url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports",
    },
    {
        name: "Shopify: measuring marketing performance",
        url: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance",
    },
    {
        name: "Shopify: web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
    },
    {
        name: "Shopify: improving web performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/improving-web-performance",
    },
    {
        name: "Shopify: Storefront API reference",
        url: "https://shopify.dev/docs/api/storefront",
    },
    {
        name: "Shopify: theme performance guidance",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/shopify-conversion-rate-speed-fix"),
            description,
            datePublished: "2026-02-11",
            dateModified: "2026-08-07",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Shopify", "Shopify themes", "Ecommerce performance", "Core Web Vitals", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Shopify analytics",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 3198,
            timeRequired: "PT16M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-conversion-rate-speed-fix#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Shopify conversion and speed", item: "https://www.pandacodegen.com/blog/shopify-conversion-rate-speed-fix" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-conversion-rate-speed-fix#webpage",
            url: "https://www.pandacodegen.com/blog/shopify-conversion-rate-speed-fix",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/shopify-conversion-rate-speed-fix#breadcrumb" },
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

export default function ShopifyConversionRateSpeedFixPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Shopify conversion and speed")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify analytics</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Low Shopify Conversion Rate? <span className="italic text-cognac">Measure Speed in the Funnel</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A slow experience can obstruct shopping, but a conversion rate does not reveal its cause.
                            Segment performance and funnel behavior together, control other changes and test a defined
                            intervention before assigning revenue to speed.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 11, 2026" readTime="6 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Do not diagnose from one average</h2>
                        <BlogList
                            items={[
                                "Conversion rate moves with the device, the market, where traffic came from, the product, the price, whether it is in stock, any promotion, and what the customer came to do.",
                                "Speed moves with the page, the device, the connection, where they are, what they consented to, your apps, your media, and whatever you last shipped.",
                                "A useful analysis joins those dimensions and preserves the reporting definitions.",
                                "A useful test changes one defined system, checks guardrails and records uncertainty.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Route, title: "Route", body: "Landing, collection, product, cart and checkout." },
                            { icon: Gauge, title: "Field speed", body: "LCP, INP and CLS at the 75th percentile." },
                            { icon: BarChart3, title: "Funnel", body: "Sessions, cart, checkout and purchase." },
                            { icon: FlaskConical, title: "Test", body: "Controlled release, hypothesis and guardrails." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="does-speed-affect-conversion">Does site speed actually affect Shopify conversion rate?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Speed and conversion move together, and that is not the same as speed causing conversion.
                            Shopify analysed Core Web Vitals against conversion across actively-selling stores and
                            published the result in its own words: <strong>&quot;for every 100 milliseconds slower a
                            store loads, conversion tends to be about 3.5% lower&quot;</strong>, and{" "}
                            <strong>&quot;stores with 2.5 second LCP report roughly 30% lower conversion than stores
                            with 1.5 second LCP&quot;</strong>.
                        </BlogText>
                    </div>
                    <BlogText>
                        Read Shopify&apos;s verbs, because they are doing real work.{" "}
                        <strong>&quot;Tends to be.&quot; &quot;Report.&quot; &quot;Speed and sales move
                        together.&quot;</strong> Shopify also states plainly that{" "}
                        <strong>&quot;conversion depends on many factors beyond speed&quot;</strong>. That is a
                        correlation across a population of stores, described carefully. Most repetitions of this
                        statistic — including Google&apos;s own AI summary for this question, which renders it as
                        &quot;conversion rates drop by about 3.5%&quot; — quietly convert it into a causal promise the
                        source never made.
                    </BlogText>
                    <BlogText>
                        The difference decides whether the number is useful to you:
                    </BlogText>
                    <BlogList
                        items={[
                            "As a correlation, it says fast stores and high-converting stores are the same stores. It does not say your store converts 3.5% better for each 100ms you remove, because the stores that are fast also tend to be the ones with fewer apps, cleaner themes, better merchandising and more competent operators.",
                            "It is a population figure, not a per-store coefficient. You cannot multiply your own latency saving by 3.5% and forecast revenue from it. Anyone who quotes it that way in a proposal is selling you arithmetic that the underlying study does not support.",
                            "It is still a reason to act. A relationship that survives across a large population of real stores is evidence that speed belongs on the list of things worth fixing -- it just is not evidence of what fixing it will pay you.",
                            "The only figure that predicts YOUR outcome is your own measurement. That is what the rest of this page is for: a before-and-after on a segmented funnel, with the intervention isolated, so the number you end up quoting is one you actually observed.",
                        ]}
                    />
                    <BlogText>
                        We do not publish a projected revenue gain from a speed improvement, on this page or in a
                        proposal, for exactly this reason. <strong>The honest version is: speed is worth fixing,
                        the size of the payoff is unknown until you measure it on your own store, and any agency
                        quoting you a percentage before touching your data has produced a sales figure rather than
                        an estimate.</strong>
                    </BlogText>

                    <BlogHeader>1. Lock the metric definitions</BlogHeader>
                    <BlogText>
                        Shopify defines online-store conversion rate as the percentage of sessions that result in an
                        order. Its conversion breakdown uses all sessions, sessions with cart additions, sessions that
                        reached checkout and sessions that completed checkout. Preserve those definitions when you
                        export or compare data.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use the same timezone, date range, currency and attribution view.",
                            "Separate sessions from users and orders from paid cash receipts.",
                            "Record refunds, cancellations, test orders and bot filtering where relevant.",
                            "Do not compare Shopify's session conversion rate directly with a differently defined ad-platform metric.",
                        ]}
                    />

                    <BlogHeader>2. Find the funnel stage that changed</BlogHeader>
                    <BlogText>
                        Locate the stage first, then look at performance for that stage only. Each row pairs the business causes worth ruling out with the performance evidence that belongs to that step, because a drop between cart and checkout has a different explanation set from a drop between landing and product.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Drop</th><th className="p-4">Investigate</th><th className="p-4">Performance evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Landing to product</td><td className="p-4">Traffic intent, merchandising, navigation and availability</td><td className="p-4">Landing and collection field data</td></tr>
                                <tr><td className="p-4 font-bold">Product to cart</td><td className="p-4">Price, offer, content, variants, trust and add-to-cart behavior</td><td className="p-4">Product LCP, INP, CLS and interaction errors</td></tr>
                                <tr><td className="p-4 font-bold">Cart to checkout</td><td className="p-4">Shipping, tax, discounts, cart logic and account requirements</td><td className="p-4">Cart responsiveness and transition traces</td></tr>
                                <tr><td className="p-4 font-bold">Checkout to purchase</td><td className="p-4">Payment, address, delivery, fraud, errors and checkout configuration</td><td className="p-4">Checkout telemetry available to the merchant</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>3. Segment before attributing</BlogHeader>
                    <BlogText>
                        A channel mix shift can change the store average even when every segment is stable, which is why the average is the last number to trust. Cut by six dimensions before attributing anything to speed. Record which attribution model you used, because the model changes how credit is assigned across the journey.
                    </BlogText>
                    <BlogList
                        items={[
                            "Device type and browser.",
                            "Country, region, market, language and currency.",
                            "New versus returning customers.",
                            "Traffic source, campaign and landing page.",
                            "Product, collection, inventory state and discount.",
                            "Consent state and major app or tag combinations.",
                        ]}
                    />
                    <BlogText>
                        Shopify supports multiple attribution models, and the selected model changes how credit is
                        assigned across a customer journey. Record the model. A channel mix shift can change the store
                        average even when each segment is stable.
                    </BlogText>

                    <BlogHeader>4. Use field and lab performance for different jobs</BlogHeader>
                    <BlogText>
                        Shopify&apos;s Web Performance reports show real-user LCP, INP and CLS by time, URL and page type.
                        The summary uses the 75th percentile and can be delayed. Lab tools help reproduce and debug a
                        defined page state, but a lab score is not a conversion result.
                    </BlogText>
                    <BlogList
                        items={[
                            "Use field data to identify which real users and routes experience a problem.",
                            "Use repeated lab tests and traces to isolate media, JavaScript, app, theme and network work.",
                            "Record the device profile, the throttling, where you tested from, the cache state, whether you were logged in, what you consented to, and which test account.",
                            "Track errors and functional failures alongside performance metrics.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why we do not convert a load time into a conversion figure">
                        This article will not hand you an abandonment rate, an uplift or a revenue loss calculated from
                        a load time. Conversion moves with traffic mix, offer, price, stock, seasonality and the
                        attribution model you have selected at the same time as it moves with speed, so a figure lifted
                        from one property does not describe yours. Set your own baseline, change one thing at a time,
                        and hold everything else you can control steady while you measure the effect.
                    </InsightBox>

                    <BlogHeader>5. Know what actually loads on a Shopify storefront</BlogHeader>
                    <BlogText>
                        Before you attribute a funnel change to speed, identify which layer produces the delay. A
                        Shopify page is assembled from several independent sources, and each one fails in a different
                        way. Naming the layer is what turns a score into a work item.
                    </BlogText>
                    <BlogList
                        items={[
                            "Liquid templates render on Shopify's servers, so the browser waits for the document before it can begin any work of its own.",
                            "Theme CSS and JavaScript are usually authored for the whole store rather than per route, so a page commonly downloads rules and scripts it never uses.",
                            "App embeds and script tags are injected into the theme and typically load site-wide, whether or not the current route uses the feature.",
                            "A script added synchronously in the head blocks parsing until it resolves, so one badly placed tag can outweigh several well-behaved ones.",
                            "Images uploaded at full camera resolution are served at that resolution unless the theme requests a resized, modern-format variant.",
                            "Uninstalling an app does not always remove the code it added. Leftover snippets keep executing after the subscription ends.",
                        ]}
                    />
                    <InsightBox variant="tip" label="Do this first">
                        Open the network panel on a product page, sort by blocking time and group requests by origin.
                        The origins that are neither your store nor Shopify are your app layer. That list, not a
                        headline score, is the thing you can actually negotiate down.
                    </InsightBox>

                    <BlogHeader>6. Separate the cart page from Shopify&apos;s checkout</BlogHeader>
                    <BlogText>
                        Shopify&apos;s checkout runs on Shopify&apos;s own infrastructure. On most plans you cannot
                        modify it, which also means you are rarely the cause of its behavior. What you do control is
                        everything a shopper passes through immediately before it: the cart drawer, the shipping and
                        tax estimator, upsell and bundle widgets on the cart page, and any script that fires on the way
                        to the handoff. A slow cart step is a slow checkout, because the shopper has to clear
                        both to buy.
                    </BlogText>
                    <BlogList
                        items={[
                            "Establish how much of the cart-to-checkout drop happens on your cart page and how much happens after the handoff.",
                            "Test the cart drawer separately from the cart page. Many themes ship both, and only one usually gets measured.",
                            "Time the shipping or tax estimator. It is a network call, and shoppers read a stalled total as a broken price.",
                            "Watch for layout shift while address and payment fields are being filled. A shift during input costs more than a shift at load.",
                            "Record checkout errors, declines and validation failures alongside timings, because in an aggregate funnel report they look identical to a speed problem.",
                        ]}
                    />

                    <BlogHeader>7. Understand what your CRO tooling cannot see</BlogHeader>
                    <BlogText>
                        Heatmaps, session recordings, on-page tests and exit-intent prompts each need their own script
                        to load before they can observe anything. A visitor who leaves during load is often not in that
                        data at all. On a slow store the tooling therefore describes the people who waited rather than
                        the people you lost, and those are not the same population.
                    </BlogText>
                    <BlogList
                        items={[
                            "Scroll and click maps over-represent fast connections and returning visitors with a warm cache.",
                            "An on-page test can register a win because the winning variant happened to load sooner, not because its content was better.",
                            "Exit-intent prompts do not fire for a tab closed during load, so those exits never enter the report.",
                            "A low add-to-cart rate can mean the product page never became interactive, not that the product or price was rejected.",
                            "Compare tool-reported sessions with Shopify's session count. A large, route-specific gap is itself a signal worth chasing.",
                        ]}
                    />

                    <BlogHeader>8. Form a falsifiable hypothesis</BlogHeader>
                    <BlogText>
                        A useful hypothesis names the segment, route, mechanism, intervention and outcome. For example:
                        reducing product-page main-thread work for mobile paid-search sessions will improve add-to-cart
                        completion without harming analytics, accessibility or feature use. That can be tested. “Faster
                        sites convert better” is directionally plausible but too broad to evaluate.
                    </BlogText>

                    <BlogHeader>9. Choose the least disruptive intervention</BlogHeader>
                    <BlogText>
                        The list is ordered by how much it disrupts, cheapest and most reversible first. Media work, then removing what is unused after a dependency review, then deferring what is not critical. Theme replacement or headless sits at the bottom for a reason: it belongs there only when the measured constraint and the operating model both justify it.
                    </BlogText>
                    <BlogList
                        items={[
                            "Compress, resize and correctly prioritize route-critical media.",
                            "Remove unused tags, pixels, app embeds and theme code after dependency review.",
                            "Load noncritical reviews, chat, recommendations and analytics at an appropriate time and consent state.",
                            "Reduce variant, search or personalization work that blocks the intended interaction.",
                            "Fix functional errors, layout shifts and event duplication before redesigning the page.",
                            "Consider theme replacement or headless migration only when the measured constraint and operating model justify it.",
                        ]}
                    />

                    <BlogHeader>10. Fix funnel friction that has nothing to do with speed</BlogHeader>
                    <BlogText>
                        Some of the drop you are investigating is layout and flow rather than load time. These changes
                        are cheap, reversible and worth doing while you are still gathering performance evidence,
                        because they are easy to isolate and they do not commit you to an architecture decision.
                    </BlogText>
                    <BlogList
                        items={[
                            "Keep the add-to-cart control reachable on long mobile product pages so a shopper who scrolls to read does not have to scroll back to buy.",
                            "Show progress through a multi-step cart or account flow so the remaining effort is visible.",
                            "Remove duplicate apps serving the same function. Two review widgets or three popup tools cost several script budgets for one feature.",
                            "Serve product images in a modern format at the size the layout actually renders, rather than at upload resolution.",
                            "Reserve space for anything that arrives late, including badges, banners, review stars and currency switchers, so the page does not move under a thumb.",
                            "Make errors specific. A rejected discount code or an unsupported shipping destination should say so at the field, not at submission.",
                        ]}
                    />

                    <BlogHeader>11. Validate the release</BlogHeader>
                    <BlogText>
                        Define the primary and guardrail metrics before launch, not after you like the chart. Six controls make a result readable, and the failure mode they exist to prevent is stopping at the first favorable movement. Report the estimate with its uncertainty, including neutral and negative results.
                    </BlogText>
                    <BlogList
                        items={[
                            "Define primary and guardrail metrics before launch.",
                            "Use an experiment when traffic and implementation permit; otherwise use a documented phased release or time-series design.",
                            "Avoid launching beside a major promotion, pricing change or campaign mix shift when possible.",
                            "Confirm sample size, test duration and seasonality with an analyst rather than stopping at the first favorable movement.",
                            "Report the estimate and uncertainty, including a neutral or negative result.",
                            "Monitor field performance because Shopify's real-user reports are not instantaneous.",
                        ]}
                    />

                    <BlogHeader>12. Calculate business impact as a scenario</BlogHeader>
                    <BlogText>
                        Use observed eligible sessions, measured baseline completion, average contribution margin and a
                        conservative range for the tested effect. Keep the range separate from realized revenue. Do not
                        present a modeled scenario as money already lost or guaranteed to return.
                    </BlogText>

                    <BlogHeader>13. Repair or rebuild</BlogHeader>
                    <BlogText>
                        Stores that ask us for a rebuild regularly turn out to need a repair, and we would rather say so before you spend. The distinction is not a matter of taste,
                        and it is not decided by a score. It is decided by whether the constraint is local to a few
                        routes or built into the layer itself, and by whether your business can carry a frontend of its
                        own after launch.
                    </BlogText>
                    <BlogText>
                        <strong>Signals that point to a repair:</strong>
                    </BlogText>
                    <BlogList
                        items={[
                            "The problem is concentrated on a small number of routes and you can name them.",
                            "A short list of identifiable scripts accounts for most of the blocking work.",
                            "Your catalog, merchandising and promotions still fit the theme model you already have.",
                            "You depend on apps whose functionality you are not prepared to rebuild or replace.",
                            "Nobody in the business wants to own a separate frontend, its releases and its incidents.",
                            "The store is new, traffic is low and you have no conversion baseline to improve against.",
                        ]}
                    />
                    <BlogText>
                        <strong>Signals that point to a rebuild:</strong>
                    </BlogText>
                    <BlogList
                        items={[
                            "The constraint appears on every route and survives removing apps and testing against a clean theme.",
                            "Your merchandising or content model needs more custom theme code every quarter to express what the business wants.",
                            "You already run, or are willing to fund, a function that ships and monitors releases.",
                            "You are subscribing to a stack of apps to reproduce features you would rather own in your own codebase.",
                            "You have a measured baseline you are willing to be judged against after the change.",
                        ]}
                    />
                    <InsightBox variant="info" label="Honest answer">
                        If the first list describes you, repair. A focused fix on the routes that are failing is
                        cheaper, faster and lower risk than a rebuild, and it is the work we will recommend even when
                        you arrived asking to go headless.
                    </InsightBox>

                    <BlogHeader>14. What a headless Shopify build actually changes</BlogHeader>
                    <BlogText>
                        Headless is not a performance setting. It is a change of ownership over what loads and when,
                        and it moves work rather than deleting it.
                    </BlogText>
                    <BlogList
                        items={[
                            "The storefront becomes a separate application, commonly Next.js, served from a CDN instead of rendered by the theme layer.",
                            "Product, collection and inventory data come from the Shopify Storefront API, so the admin your team already uses does not change.",
                            "Checkout stays on Shopify, so payments, fraud handling, taxes and Shop Pay are unchanged.",
                            "Features that were apps become components in your own codebase, which removes the site-wide script and transfers the maintenance to you.",
                            "Images are sized and converted by the frontend framework rather than by whatever the theme happened to request.",
                        ]}
                    />
                    <BlogText>
                        The trade is explicit. You gain control over the request waterfall. You take on a codebase, a
                        deployment pipeline and an on-call responsibility that the theme layer used to absorb. It is
                        the right answer when the constraint is architectural and the operating model can carry it, and
                        the wrong answer when either half is missing. Our{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline">
                            headless Shopify guide
                        </Link>{" "}
                        covers the migration path in detail.
                    </BlogText>

                    <BlogHeader>15. What to check before you accept a Shopify speed quote</BlogHeader>
                    <BlogText>
                        Disappointing speed engagements tend to be scoping failures rather than engineering failures.
                        A cheap quote is often cheap because it leaves these out, and you find out at handover.
                    </BlogText>
                    <BlogList
                        items={[
                            "Which routes are in scope, and whether cart and checkout-adjacent pages are among them.",
                            "Which device profile, network profile and number of recorded runs the acceptance test uses.",
                            "Which apps are kept, which are replaced, and which functionality disappears at launch.",
                            "Who owns analytics, consent, pixels and conversion-tracking continuity through the change.",
                            "URL, redirect, structured data and Merchant Center continuity if the storefront layer changes.",
                            "Who owns the code, the repository and the deployment accounts after handover.",
                            "Ongoing third-party running costs after launch: hosting, image delivery, search, reviews and monitoring.",
                            "The rollback plan for a revenue-generating route, and who executes it.",
                        ]}
                    />

                    <BlogHeader>16. What our engagements cost</BlogHeader>
                    <BlogText>
                        Published tiers are planning anchors, not a quote. The accepted written terms control the final
                        price, the page inventory and the acceptance protocol.
                    </BlogText>
                    <div className="my-6 grid gap-4 sm:grid-cols-3">
                        <StatCard stat="$1,500" label="Starter" context="Small, clearly bounded scope" />
                        <StatCard stat="$3,500" label="Growth" context="Larger migration, CMS or content-continuity scope" />
                        <StatCard stat="$5,000" label="Scale" context="$5,000 to $10,000 for integration-heavy commerce work" />
                    </div>
                    <BlogText>
                        Where a 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> result is included, it is written as a handover target on mobile and
                        desktop for the representative pages named in the scope, verified across three recorded runs
                        under stated conditions before handover. It is a lab acceptance target. It is not a promise
                        about rankings, traffic, conversion rate or revenue, none of which anyone controls.
                    </BlogText>

                    <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center">
                        <p className="mb-2 font-bold text-charcoal">Not sure whether your store needs a repair or a rebuild?</p>
                        <p className="mb-5 text-sm text-stone-600">
                            Run the audit on your own URL first, or bring the store to a call and we will trace it with
                            you and tell you which of the two it is.
                        </p>
                        <div className="flex flex-col justify-center gap-3 sm:flex-row">
                            <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-white hover:bg-stone-800">
                                Run the free audit <ArrowRight className="h-4 w-4" />
                            </Link>
                            <QuoteModalButton cta="shopify_conversion_mid_quote" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-bold text-charcoal hover:border-charcoal">
                                Get a quote
                            </QuoteModalButton>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-bold text-charcoal hover:border-charcoal">
                                Book a call
                            </CalModalButton>
                        </div>
                    </div>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <FlaskConical className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will define representative routes, preserve analytics and SEO requirements, document the
                            performance test profile and show whether optimization or migration fits the evidence.
                        </p>
                        <QuoteModalButton cta="shopify_conversion_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <BlogHeader>Related reading</BlogHeader>
                    <BlogText>
                        For the layer-by-layer optimization sequence, see our{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline">
                            Shopify speed optimization guide
                        </Link>
                        . For how a default theme actually performs once apps and media are added, see{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline">
                            the Dawn theme performance breakdown
                        </Link>
                        . For what the app layer costs you in money as well as milliseconds, see{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline">
                            the real monthly Shopify app bill
                        </Link>
                        . For the platform-versus-custom decision itself, see{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="text-cognac hover:underline">
                            Shopify versus a custom website
                        </Link>
                        .
                    </BlogText>

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

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
