import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Building2, Gauge, Network, ShieldCheck } from "lucide-react";
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
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "shopify-plus-still-slow";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify Plus Speed Problems: An Enterprise Diagnostic";
const description =
    "Diagnose Shopify Plus performance by route, device, apps, third parties, media, theme code and release before deciding whether to optimize, re-theme or go headless.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Shopify Plus speed",
        "Shopify Plus performance",
        "Shopify Plus Core Web Vitals",
        "Shopify Plus headless",
        "enterprise Shopify performance",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-06",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-plus-still-slow")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Shopify Plus pricing and features", url: "https://www.shopify.com/plus/pricing" },
    {
        name: "Shopify: web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
    },
    {
        name: "Shopify: improving web performance",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/improving-web-performance",
    },
    {
        name: "Shopify theme performance best practices",
        url: "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
    },
    {
        name: "Shopify Storefront API reference",
        url: "https://shopify.dev/docs/api/storefront/latest",
    },
    {
        name: "Shopify: headless benefits and tradeoffs",
        url: "https://www.shopify.com/enterprise/blog/what-is-headless-commerce",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/shopify-plus-still-slow"),
            description,
            datePublished: "2026-02-06",
            dateModified: "2026-07-24",
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
            articleSection: "Enterprise Shopify",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 1645,
            timeRequired: "PT8M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-plus-still-slow#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Shopify Plus performance", item: "https://www.pandacodegen.com/blog/shopify-plus-still-slow" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-plus-still-slow#webpage",
            url: "https://www.pandacodegen.com/blog/shopify-plus-still-slow",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/shopify-plus-still-slow#breadcrumb" },
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

export default function ShopifyPlusStillSlowPage() {
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
                            { label: "Shopify Plus performance", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Enterprise Shopify</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify Plus Speed Problems: <span className="italic text-cognac">An Enterprise Diagnostic</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Shopify Plus gives you more enterprise commerce features. It does not tell you why your
                            storefront is slow, and paying for it does not fix that. Measure the store your customers
                            actually load, find what is really costing you the time, then pick the smallest change that
                            meets the requirements you have agreed.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 6, 2026" readTime="4 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The correct starting point</h2>
                        <BlogList
                            items={[
                                "Verify whether the problem is LCP, INP, CLS, a functional delay or a lab-only score.",
                                "Locate the affected routes, devices, markets and release window in Shopify's field reports.",
                                "Attribute browser and network work to theme code, media, apps, analytics and other third parties.",
                                "Optimize or re-theme before adopting headless unless requirements justify the added operating model.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Building2, title: "Plan", body: "Commercial term, region, included capability and contract." },
                            { icon: Gauge, title: "Experience", body: "Field and lab evidence for representative routes." },
                            { icon: Network, title: "Stack", body: "Apps, tags, media, theme, APIs and integrations." },
                            { icon: ShieldCheck, title: "Change", body: "Controls, regression tests, rollout and rollback." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What Plus does and does not establish</BlogHeader>
                    <BlogText>
                        Shopify currently positions Plus around features such as B2B, headless commerce, POS Pro,
                        checkout customization, Functions and international commerce. Current prices and transaction
                        terms vary by region, term and business structure, so use the official localized page and the
                        signed contract for commercial decisions. For the platform-versus-custom decision itself, see{" "}
                        <Link href="/blog/shopify-vs-custom-website" className="text-cognac hover:underline font-medium">Shopify compared with a custom storefront</Link>.
                    </BlogText>
                    <BlogText>
                        The plan label does not tell you which scripts execute on a product page, whether a hero is
                        correctly prioritized, how an app embed behaves or whether an interaction blocks the main
                        thread. Those are implementation questions. Our{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className="text-cognac hover:underline font-medium">Shopify store speed checklist</Link>{" "}
                        works through them in order.
                    </BlogText>
                    <InsightBox variant="info" label="Why the plan is not the diagnosis">
                        You will not find a rendering delay or a revenue figure attached to a plan tier on this page,
                        because the plan does not determine how a page is built. Two stores on the same plan can behave
                        completely differently depending on their theme, apps, media and third-party scripts, and
                        headless is not a shortcut past that. Treat the plan as a set of capabilities, then go and find
                        the evidence on the route that is actually slow.
                    </InsightBox>

                    <BlogHeader id="plus-specific">What is actually different about a Plus store</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Four things, and none of them is the plan price. A Plus storefront usually carries more integration surface than a smaller one, and that surface is where the time goes, and knowing which of the four
                            applies to you changes where you look first.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "The integration load is heavier as a result. Plus merchants commonly run classes of system a smaller store does not: ERP or inventory sync, loyalty, subscriptions, personalisation, tax and compliance. Each tends to contribute its own script to the storefront, and the theme layer gives you no built-in way to isolate or defer them per route.",
                            "Checkout customisation moved. Merchants who built deep custom logic under checkout.liquid rebuild it as checkout UI extensions and Functions. Extensions that are not scoped carefully reintroduce script and network work into the checkout flow, which is the one place a Plus store can be slow in a way a smaller store cannot.",
                            "Catalogue scale is a per-request cost. Collection and search templates get more expensive as SKU and variant counts grow, because that markup is produced per request rather than served pre-built. It is why benchmarks taken on small catalogues describe a different store than yours.",
                            "Multi-market and multi-currency add work to the same templates. Every additional locale or currency is more logic on the routes that already do the most.",
                        ]}
                    />
                    <BlogText>
                        And one thing worth knowing before headless is proposed as the fix: <strong>Plus features
                        survive a custom storefront.</strong> Flow, Checkout Extensibility, multi-location inventory and
                        multi-currency all continue to work behind a separately built frontend, because they live in the
                        commerce layer rather than the theme. Whatever the argument for or against rebuilding, losing
                        what you pay Plus for is not part of it.
                    </BlogText>

                    <BlogHeader>1. Define the incident or objective</BlogHeader>
                    <BlogText>
                        Do not collapse all five into the site is slow. Each one requires different evidence, different owners and different acceptance criteria, and starting work before you know which you have is how a team spends a month on the wrong layer.
                    </BlogText>
                    <BlogList
                        items={[
                            "A Core Web Vital is Moderate or Poor for a meaningful real-user segment.",
                            "A route or interaction regressed after a named release.",
                            "Customers encounter a functional delay, error or instability.",
                            "A campaign, market or device segment cannot complete an important task reliably.",
                            "A contractual performance target is not met under the documented conditions.",
                        ]}
                    />
                    <BlogText>
                        Do not collapse all five into “the site is slow.” Each requires different evidence, owners and
                        acceptance criteria. If the vitals themselves need defining first, start with{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline font-medium">what LCP, INP and CLS measure</Link>.
                    </BlogText>

                    <BlogHeader>2. Use the Shopify field view</BlogHeader>
                    <BlogText>
                        Shopify&apos;s Web Performance reports provide real-user LCP, INP and CLS over time, by URL and
                        by page type. The summary uses the 75th percentile and separates device experiences. Review
                        releases and traffic changes across the same period.
                    </BlogText>
                    <BlogList
                        items={[
                            "Prioritize routes with both poor experience and material traffic or business importance.",
                            "Compare mobile and desktop rather than averaging them together.",
                            "Separate templates and markets that carry different content or integrations.",
                            "Allow for Shopify's documented reporting delay before closing the investigation: the web performance report lags real traffic, so a change made today does not appear in it today. Check the current delay in your own dashboard rather than assuming it.",
                        ]}
                    />

                    <BlogHeader>3. Trace the production page</BlogHeader>
                    <BlogText>
                        Trace the real page, not a staging copy, because apps and tags behave differently in production. Five areas account for most of what you will find, and each row pairs what to inspect with what to do about it. Refactor only the bottleneck the trace actually named.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">Inspect</th><th className="p-4">Common action</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Media</td><td className="p-4">LCP candidate, dimensions, format, video and priority</td><td className="p-4">Resize, re-encode, reserve space and correct loading</td></tr>
                                <tr><td className="p-4 font-bold">JavaScript</td><td className="p-4">Long tasks, listeners, hydration and duplicate libraries</td><td className="p-4">Remove, defer, split or load on interaction</td></tr>
                                <tr><td className="p-4 font-bold">Apps</td><td className="p-4">Global embeds, tags, DOM work and network calls</td><td className="p-4">Limit routes, change integration or remove safely</td></tr>
                                <tr><td className="p-4 font-bold">Theme</td><td className="p-4">Layout inclusions, sections, snippets, CSS and Liquid work</td><td className="p-4">Refactor the measured bottleneck</td></tr>
                                <tr><td className="p-4 font-bold">Operations</td><td className="p-4">Campaign content, personalization and release process</td><td className="p-4">Set budgets and pre-release checks</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Each row above has a longer write-up. Inventorying what the store carries is covered in our
                        breakdown of a{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className="text-cognac hover:underline font-medium">Shopify app stack</Link>, and
                        theme-level work is covered in{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className="text-cognac hover:underline font-medium">Dawn theme performance</Link>.
                    </BlogText>

                    <BlogHeader>4. Separate storefront and checkout evidence</BlogHeader>
                    <BlogText>
                        Product discovery, product detail, cart and checkout have different code boundaries and business
                        controls. Record where the delay occurs. A slow theme route does not prove checkout is slow, and
                        a payment or validation problem is not fixed by replacing the catalog frontend. The conversion
                        side of that split is examined in{" "}
                        <Link href="/blog/shopify-conversion-rate-speed-fix" className="text-cognac hover:underline font-medium">Shopify conversion and speed diagnostics</Link>.
                    </BlogText>

                    <BlogHeader>5. Optimize with enterprise controls</BlogHeader>
                    <BlogText>
                        At Plus scale the constraint is rarely the technique, it is governance. Five controls make an improvement stick: an owner and a business justification for every app and tag, route-level budgets enforced before release, phased rollouts with named rollback criteria, guardrails that keep accessibility, analytics and consent intact, and vendor changes tracked on the same timeline as your field data.
                    </BlogText>
                    <BlogList
                        items={[
                            "Assign an owner and business justification to every app, tag and customer-facing feature.",
                            "Set route-specific performance budgets and enforce them in preview or continuous integration.",
                            "Test feature flags and phased releases with named rollback criteria.",
                            "Preserve accessibility, analytics, consent and commerce behavior as guardrails.",
                            "Track vendor and internal changes in the same timeline as field performance.",
                        ]}
                    />

                    <BlogHeader>6. Decide whether headless is justified</BlogHeader>
                    <BlogText>
                        Shopify supports headless through Hydrogen and the Storefront API. It can provide deeper
                        storefront control, but Shopify also states that headless adds engineering dependency,
                        maintenance responsibility and architectural complexity. Performance still depends on the
                        implementation. Our own write-ups of that decision are{" "}
                        <Link href="/blog/shopify-headless" className="text-cognac hover:underline font-medium">headless Shopify</Link>{" "}
                        and{" "}
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline font-medium">what headless commerce means</Link>.
                    </BlogText>
                    <BlogList
                        items={[
                            "Choose headless for accepted experience, channel or integration requirements that justify it.",
                            "Inventory apps and commerce workflows for API and headless compatibility.",
                            "Plan analytics, consent, SEO, Merchant Center, structured data and checkout continuity.",
                            "Budget security, monitoring, upgrades, incident response and internal ownership.",
                            "Retain a migration and rollback plan for high-revenue routes.",
                        ]}
                    />

                    <BlogHeader>7. Use credible acceptance criteria</BlogHeader>
                    <BlogText>
                        A 90-plus Lighthouse target can be an accepted delivery term under recorded conditions. It should not be restated as a permanent guarantee for every route, visitor, app state or future release. Six things make the term enforceable, and the run count and the recorded conditions are what separate a criterion from a screenshot.
                    </BlogText>
                    <BlogList
                        items={[
                            "Name representative routes, devices and required page states.",
                            "Record network, geography, cache, consent and authentication conditions.",
                            "Run three consecutive mobile and desktop tests for each agreed representative page and profile.",
                            "Require functional, accessibility, SEO, analytics and error checks.",
                            "Monitor real-user Core Web Vitals after launch.",
                            "Define the remedy in the signed scope if an agreed target is missed.",
                        ]}
                    />
                    <BlogText>
                        A 90-plus Lighthouse target can be an accepted delivery term under recorded conditions. It should
                        not be restated as a permanent guarantee for every route, visitor, app state or future release.
                        The method behind that kind of target is described in{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline font-medium">how we approach PageSpeed scores</Link>.
                    </BlogText>

                    <BlogHeader>8. Model value without inventing lost revenue</BlogHeader>
                    <BlogText>
                        Use first-party traffic, funnel, margin and experiment data. Treat any forecast as a range and
                        compare it with observed post-release results. A performance metric can support a prioritization
                        decision, but it does not calculate an exact revenue loss by itself.
                    </BlogText>
                    <BlogText>
                        We scope this work as{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce development</Link>, with
                        project tiers on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link> and build examples in our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">client work</Link>.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Gauge className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will identify the measured constraint, map enterprise dependencies and show whether
                            focused optimization, re-theme work or an SEO-conscious headless migration fits the scope.
                        </p>
                        <QuoteModalButton cta="shopify_plus_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
