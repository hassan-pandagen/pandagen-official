import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, ChartNoAxesCombined, Gauge, Scale } from "lucide-react";
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
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const SalesImpactAnimation = dynamicImport(() => import("@/components/blog/SalesImpactAnimation"));

const postId = "shopify-slow-losing-sales";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Slow Shopify Store Losing Sales? Build an Evidence Model";
const description =
    "Join Shopify funnel data with route-level field performance, test a defined change and model business impact as a range instead of claiming exact lost revenue.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "slow Shopify losing sales",
        "Shopify speed revenue",
        "Shopify performance ROI",
        "Shopify conversion funnel",
        "Shopify Core Web Vitals",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-10",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-slow-losing-sales")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify: conversion rate breakdown",
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
        name: "Shopify: overview of web performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/overview",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/shopify-slow-losing-sales"),
            description,
            datePublished: "2026-02-10",
            dateModified: "2026-08-19",
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
            articleSection: "Shopify economics",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 2456,
            timeRequired: "PT11M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-slow-losing-sales#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Shopify speed and sales", item: "https://www.pandacodegen.com/blog/shopify-slow-losing-sales" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-slow-losing-sales#webpage",
            url: "https://www.pandacodegen.com/blog/shopify-slow-losing-sales",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/shopify-slow-losing-sales#breadcrumb" },
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

export default function ShopifySlowLosingSalesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Shopify speed and sales")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify economics</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Slow Shopify Store Losing Sales? <span className="italic text-cognac">Build an Evidence Model</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Performance can obstruct a purchase, but no public “per second” formula can calculate your
                            store&apos;s exact loss. Join real-user performance with the affected funnel, test a defined
                            change and separate observed results from planning scenarios.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 8, 2026 against current Shopify and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 10, 2026" readTime="11 min read" />

                    <div className="my-10">
                        <SalesImpactAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-7">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">The short answer, and the number we will not give you</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            <strong>Probably yes, and nobody can tell you how much from a statistic.</strong> A slow
                            store can obstruct purchases at several points, and that is worth fixing. But the figure
                            you have almost certainly been quoted while researching this — that around half of mobile
                            visitors abandon a site loading longer than three seconds — was measured on somebody
                            else&apos;s traffic, in a different year, for different products, at a different price
                            point, with different buying intent. It cannot tell you what your store is losing.
                        </p>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            You will find that number, and per-second conversion formulas alongside it, repeated across
                            theme vendors, agency blogs and social posts. We removed all of them from this site during
                            a claims review, because none could be traced to a source that supports the way it is
                            being used. <strong>A statistic borrowed from another business is not evidence about
                            yours</strong>, and a quote built on one is a quote built on nothing.
                        </p>
                        <p className="leading-relaxed text-stone-700">
                            The useful version of this question is answerable, just not from an article. Your own
                            analytics already contain the relationship between speed and completed orders on your
                            store, and the rest of this page is the method for getting it out: confirm a real
                            performance problem exists, find which funnel stage it affects, rule out the competing
                            explanations, then test one defined change and measure what moved.
                        </p>
                    </section>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Four different numbers</h2>
                        <BlogList
                            items={[
                                "Observed revenue is what completed under the recorded conditions.",
                                "Incremental impact is the estimated difference caused by a tested change.",
                                "Opportunity scenario is a planning range built from explicit assumptions.",
                                "Only the first is directly counted; the other two require a method and uncertainty.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Gauge, title: "Experience", body: "Field LCP, INP and CLS by route and device." },
                            { icon: ChartNoAxesCombined, title: "Funnel", body: "Sessions, cart, checkout and completed order." },
                            { icon: Calculator, title: "Scenario", body: "Editable assumptions and contribution margin." },
                            { icon: Scale, title: "Decision", body: "Cost, risk, confidence and reversible next step." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>How a slow page loses a sale</BlogHeader>
                    <BlogText>
                        There is no single mechanism, and where in the funnel a visitor leaves changes what the loss
                        costs you. Someone who gives up before the first paint takes the entire acquisition cost with
                        them, whether that was a paid click, an email send or the work it took to earn the organic
                        visit. Someone who gives up at checkout costs more again, because the intent was already
                        built and the page was the only thing left between them and the order.
                    </BlogText>
                    <BlogList
                        items={[
                            "Before first paint: nothing has rendered, so there is no product, price or offer to react to. The visit was paid for either way.",
                            "During discovery: late images, slow filtering and shifting layout make comparing products harder than it needs to be.",
                            "At add to cart: a button that is painted but not yet interactive reads to a shopper as broken rather than slow.",
                            "At checkout: the most expensive place to lose someone, because purchase intent already exists and the acquisition cost is sunk.",
                            "On the return visit: a shopper who gave up once is under no obligation to try again, so the cost is not always contained to one session.",
                            "On mobile: slower networks and mid-range processors expose main-thread work that a desktop test hides. Check your own device split rather than assuming it.",
                        ]}
                    />
                    <BlogText>
                        Published research does associate faster pages with better commercial outcomes. Those studies
                        are correlations measured on other people&apos;s stores, with their traffic, catalog, pricing
                        and competition. They are a reason to investigate your own funnel. They are not a forecast for
                        your store, and no public per-second figure can be multiplied out into your monthly loss.
                    </BlogText>

                    <BlogHeader>1. Confirm that a meaningful performance problem exists</BlogHeader>
                    <BlogText>
                        Shopify&apos;s <Link href="/blog/aeo-web-performance-glossary" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Web Performance</Link> reports show real-user LCP, INP and CLS at the 75th percentile
                        over time, by URL and by page type. Identify the affected route, device and reporting period.
                        Use repeated lab tests to reproduce and trace it, not to replace field evidence.
                    </BlogText>
                    <InsightBox variant="info" label="Why speed calculators overstate the case">
                        Treat any tool that turns a single research result into a payback period, a monthly gain or a
                        revenue-loss range with caution. Compounding one measured effect across repeated small time
                        intervals assumes a linear relationship the underlying study never tested, and it produces a
                        number that says nothing about your store. Use your own field data and funnel steps instead.
                    </InsightBox>

                    <BlogQuote>
                        There is no public formula for what a slow page costs you. There is only your own funnel, measured.
                    </BlogQuote>

                    <BlogHeader>2. Locate the affected funnel stage</BlogHeader>
                    <BlogText>
                        Shopify&apos;s conversion breakdown distinguishes all sessions, cart additions, reached checkout
                        and completed checkout. Compare the step that changed across the same route, device, market,
                        traffic source, product and period as the performance issue.
                    </BlogText>
                    <BlogList
                        items={[
                            "Landing or collection friction before a product view.",
                            "Product-page friction before add to cart.",
                            "Cart behavior before checkout.",
                            "Checkout, payment, delivery or validation problems before purchase.",
                        ]}
                    />

                    <BlogHeader>3. Rule out competing explanations</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Before you attribute a drop in orders to speed, rule out the six things that move a <Link href="/blog/woocommerce-low-conversion-rate" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">conversion rate</Link> far more reliably than milliseconds do. Price, assortment, traffic mix and seasonality all shift the same number a slow page would. If any of them changed inside your comparison window, the speed hypothesis is not testable yet.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Changes to price, promotions, shipping, tax, returns or how people pay.",
                            "Inventory, assortment, product mix and merchandising.",
                            "Traffic quality, campaign mix, attribution model and market mix.",
                            "Seasonality, holidays, competitor activity and demand.",
                            "Errors, fraud controls, app releases and checkout configuration.",
                            "Consent or analytics changes that alter what is measured.",
                        ]}
                    />

                    <BlogHeader>4. Build a transparent scenario</BlogHeader>
                    <BlogText>
                        A planning model can help size a decision before an experiment. Keep every input editable and
                        state that the result is not realized loss.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Input</th><th className="p-4">Source</th><th className="p-4">Caution</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Eligible sessions</td><td className="p-4">Shopify segment for affected routes and devices</td><td className="p-4">Do not use total traffic if only one segment is affected</td></tr>
                                <tr><td className="p-4 font-bold">Baseline completion</td><td className="p-4">Same funnel definition and period</td><td className="p-4">Account for seasonality and campaign mix</td></tr>
                                <tr><td className="p-4 font-bold">Effect range</td><td className="p-4">Experiment, phased release or conservative sensitivity</td><td className="p-4">Public studies are context, not your estimate</td></tr>
                                <tr><td className="p-4 font-bold">Order economics</td><td className="p-4">Finance-approved revenue, return and margin definitions</td><td className="p-4">Revenue is not contribution profit</td></tr>
                                <tr><td className="p-4 font-bold">Change cost</td><td className="p-4">Accepted implementation and lifecycle scope</td><td className="p-4">Include migration, operation and risk</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>5. Use ranges and sensitivity</BlogHeader>
                    <BlogText>
                        Calculate conservative, base and adverse cases. Show how the answer changes when eligible
                        traffic, effect size, margin, implementation cost or maintenance changes. The model is useful
                        when it reveals which assumption controls the decision, even if no case produces a dramatic
                        payback.
                    </BlogText>

                    <BlogHeader>6. Test a defined intervention</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Change one thing, decide what would count as an effect before you release it, and report the result even when it is neutral. Five rules make an intervention readable afterwards. The last one is the easiest to skip, and an unreported neutral result is how a team ends up running the same experiment twice.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Name the target route, segment, mechanism and expected funnel step.",
                            "Define primary and guardrail metrics before release.",
                            "Use an experiment when feasible or a documented phased rollout with comparison periods.",
                            "Avoid simultaneous promotion, price, creative and tracking changes where possible.",
                            "Report the estimate, uncertainty, duration and any neutral or adverse result.",
                        ]}
                    />

                    <BlogHeader>7. Choose the least disruptive remedy</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Pick the smallest change that addresses the measured problem, because every larger option carries risk the evidence has not yet justified. Four positions run from fixing what is on the page to replacing the frontend entirely. No score, revenue figure or app count moves you down that list on its own.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "When the problem is on the page itself, fix the images, the scripts, the apps, the tags, the errors and the theme code.",
                            "Re-theme when tested platform-native capability better fits the requirements.",
                            "Use headless when accepted experience, integration or channel needs justify the separate frontend.",
                            "Do not use a PageSpeed score, revenue threshold or app count as an automatic architecture trigger.",
                        ]}
                    />

                    <BlogHeader>8. Define commercial acceptance</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s published tiers are scope anchors, not a payback promise. A project can include
                        a documented 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> delivery target for agreed representative routes, mobile and
                        desktop profiles, and three consecutive tests per page and profile. Functional, SEO, analytics,
                        accessibility and error checks remain guardrails, with the remedy written into the scope.
                    </BlogText>
                    <BlogList
                        items={[
                            "Starter from $1,500 for a small, clearly bounded scope.",
                            "Growth from $3,500 for a broader storefront, CMS or content-continuity scope.",
                            "Scale normally between $5,000 and $10,000 for larger catalogs or integration-heavy work.",
                            "The Lighthouse target is a lab acceptance condition on named pages, not a promise about rankings, traffic or revenue.",
                        ]}
                    />
                    <BlogText>
                        See the <Link href="/pricing" className="text-cognac hover:underline">published tiers</Link> and
                        the <Link href="/services/ecommerce" className="text-cognac hover:underline">commerce service scope</Link>.
                        Final price follows discovery, because catalog size, integrations, content duties and
                        migration risk vary more than any tier label can carry.
                    </BlogText>

                    <BlogHeader>What a headless Shopify storefront actually is</BlogHeader>
                    <BlogText>
                        Headless describes one specific split, not a general upgrade. Shopify keeps products,
                        inventory, orders, discounts, customers, payments and checkout. The theme layer, the part that
                        renders pages to the shopper, is replaced by a separate frontend application that reads from
                        the Storefront API. If you want the full comparison, we cover it in{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline">headless Shopify on Next.js</Link>{" "}
                        and in <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline">what headless commerce means</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Admin stays the same. Staff add products, run discounts and fulfill orders in the Shopify dashboard they already use.",
                            "Checkout stays on Shopify, so payments, tax, fraud checks and compliance stay their problem, not yours.",
                            "The frontend becomes yours. What ships to the browser is decided by your code instead of by the theme and whatever app blocks were installed into it.",
                            "Catalog, pricing and inventory are fetched through the Storefront API, so nothing is copied into a second system that can drift.",
                            "Images and static assets are served from a CDN and generated at the sizes each layout actually requests.",
                        ]}
                    />
                    <BlogText>
                        The trade is that real work moves to you. Theme editor controls, app blocks and any storefront
                        feature delivered through an app embed stop existing unless they are rebuilt or replaced with an
                        API equivalent. Merchandising changes a theme handled through the editor may now need a
                        developer or a CMS. Price that ongoing cost, not only the build.
                    </BlogText>

                    <BlogHeader>Common Shopify speed mistakes that do not need a rebuild</BlogHeader>
                    <BlogText>
                        These are the avoidable problems worth ruling out first, and none of them requires replacing
                        the frontend. Work through these before pricing anything larger. Our{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline">Shopify speed optimization guide</Link>{" "}
                        covers the diagnostic detail.
                    </BlogText>
                    <BlogList
                        items={[
                            "Uninstalled apps that left code behind. Shopify warns that uninstalling an app might not remove everything it added, so check for leftover snippets and script tags instead of assuming removal was clean.",
                            "Two or three apps doing one job. Overlapping review, popup, search or upsell tools each load their own bundle even when only one is visible to the shopper.",
                            "App embeds enabled globally when the feature appears on one template. A review widget does not need to load on the cart.",
                            "Premium themes chosen for features the store does not use. More built-in sections means more code shipped by default.",
                            "Hero and product images uploaded at full resolution and resized in CSS, so a phone downloads a desktop-sized file.",
                            "A tag manager used as a dumping ground, where retired pixels and abandoned tests keep executing long after the campaign ended.",
                        ]}
                    />

                    <BlogHeader>Signals a rebuild is worth pricing</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A rebuild is worth pricing when the constraint survived the cleanup and lives in something the theme layer cannot express. Four signals point that way, and the fourth is commercial rather than technical: someone has to maintain a frontend application after handover, and if that person does not exist yet, the build is only half the decision.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "The field data shows the problem on templates you control, and it survives after apps, media and third-party code have been cleaned up.",
                            "The experience you need cannot be expressed in the theme layer, for example a configurator, a complex bundling flow or a shared frontend across several channels.",
                            "One frontend has to serve markets, brands or storefronts that the theme system would force you to duplicate and maintain separately.",
                            "You have, or are willing to fund, someone who can maintain a frontend application after handover.",
                        ]}
                    />

                    <BlogHeader>When not to rebuild</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Five situations make a rebuild the wrong call, and the simplest is the one to rule out first: nobody has looked at the field data yet. A rebuild chosen from a lab score can move the problem instead of removing it, and it does that at the full price of a rebuild.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Traffic is low enough that no test could detect a change. Demand is the constraint, not rendering.",
                            "The measured bottleneck is one app, one hero image or one tag. All of those are cheaper to fix in place.",
                            "The team depends on the theme editor for day-to-day merchandising and there is no plan or budget to replace that workflow.",
                            "You are mid-season or mid-campaign. Replacing the frontend is not the change to make while peak trading is running.",
                            "Nobody has looked at the field data yet. A rebuild chosen from a lab score alone can move the problem rather than remove it.",
                        ]}
                    />

                    <InsightBox variant="info" label="How we label our own evidence">
                        We do not have a published Shopify headless rebuild with verified before-and-after commercial
                        figures, and we are not going to present a model as one. MyCustomPatches is an independent
                        client whose project we publish with permission. Panda Patches is
                        owned and operated by PandaCodeGen co-founder Imran Raza Ladhani, so anything from it is
                        founder-affiliated evidence rather than independent client proof. Any dated performance result
                        we publish carries the URL, test profile, run count and reporting period, or it does not get
                        published.
                    </InsightBox>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Calculator className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the performance issue, affected funnel, editable business case and test profile
                            before recommending optimization, re-theme work or a headless migration.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <QuoteModalButton cta="shopify_sales_migration_plan" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                                Get your migration plan <ArrowRight className="h-4 w-4" />
                            </QuoteModalButton>
                            <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:border-white">
                                Start with the free site audit
                            </Link>
                            <CalModalButton className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:border-white">
                                Or book a call
                            </CalModalButton>
                        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300">
                            The audit form captures your pages and sends them to us. It does not score your store or
                            diagnose anything on its own. A person reads the results and replies with a written view of
                            what is actually slow and what it would take to fix.
                        </p>
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

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
