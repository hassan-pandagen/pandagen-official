import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Cable, Gauge, ShieldCheck } from "lucide-react";
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

const postId = "what-is-headless-commerce";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "What Is Headless Commerce? A 2026 Store Owner Guide";
const description =
    "Understand headless commerce architecture, Shopify and Medusa options, performance evidence, cost, operating tradeoffs and when a custom storefront is justified.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "what is headless commerce",
        "headless commerce 2026",
        "Shopify headless storefront",
        "Medusa headless commerce",
        "headless commerce cost",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-14",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/what-is-headless-commerce")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Shopify Storefront API", url: "https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/index" },
    { name: "Shopify bring your own stack", url: "https://shopify.dev/docs/storefronts/headless/bring-your-own-stack" },
    { name: "Shopify Hydrogen releases", url: "https://hydrogen.shopify.dev/updates" },
    { name: "Medusa storefront development", url: "https://docs.medusajs.com/resources/storefront-development" },
    { name: "Medusa production optimization", url: "https://docs.medusajs.com/resources/storefront-development/production-optimizations" },
    { name: "Sanity Visual Editing", url: "https://www.sanity.io/docs/visual-editing" },
    { name: "Google product structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/product" },
    { name: "Google Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-03-14",
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
            articleSection: "E-commerce architecture",
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

const linkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WhatIsHeadlessCommercePage() {
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
                            { label: "Headless commerce", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">E-commerce architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            What Is Headless Commerce? <span className="italic text-cognac">A Store Owner Guide</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Headless commerce means you build the shop your customers see, and let one or more
                            separate services handle the commerce behind it. That flexibility solves real
                            problems when you need a particular experience or need to connect to other
                            systems. It also leaves you with another application to secure, test and keep
                            running.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against official documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 14, 2026" readTime="15 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Headless commerce in plain English</h2>
                        <BlogList
                            items={[
                                "The storefront renders the shopping experience.",
                                "Commerce services manage products, pricing, inventory, carts, customers, orders or checkout according to the chosen platform.",
                                "APIs and webhooks connect those parts with content, search, payments, analytics and operations.",
                                "Headless is an architecture choice, not an automatic speed, conversion or SEO result.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Boxes, title: "Storefront", body: "Web, app, kiosk or another customer touchpoint." },
                            { icon: Cable, title: "APIs", body: "Contracts connecting commerce, content and services." },
                            { icon: Gauge, title: "Evidence", body: "Field and lab measurements on real journeys." },
                            { icon: ShieldCheck, title: "Operations", body: "Security, releases, observability and ownership." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="traditional-vs-headless">Traditional vs headless commerce</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Question</th><th className="p-4">Coupled storefront</th><th className="p-4">Headless storefront</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Rendering</td><td className="p-4">Platform theme or native presentation layer</td><td className="p-4">Separately built and deployed application</td></tr>
                                <tr><td className="p-4 font-bold">Commerce</td><td className="p-4">Native platform features and extensions</td><td className="p-4">APIs expose the selected commerce capabilities</td></tr>
                                <tr><td className="p-4 font-bold">Change surface</td><td className="p-4">Usually fewer systems to coordinate</td><td className="p-4">Frontend, APIs, providers and integrations can change independently</td></tr>
                                <tr><td className="p-4 font-bold">Responsibility</td><td className="p-4">More platform-managed behavior</td><td className="p-4">More application security, testing and operations owned by the team</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="when-you-need-it">When headless commerce can be justified</BlogHeader>
                    <BlogList
                        items={[
                            "The required experience cannot be delivered reliably through the current theme or extension model.",
                            "Multiple customer touchpoints need one governed commerce layer.",
                            "Content, product and campaign workflows require a separate content system.",
                            "Complex merchandising, localization or integration requirements exceed the current implementation.",
                            "Measured performance work remains constrained after realistic theme, media, app and infrastructure repairs.",
                            "The organization can own the additional engineering and operational responsibilities.",
                        ]}
                    />
                    <InsightBox variant="tip" label="Use the smallest sufficient intervention">
                        A slow or visually limited store does not automatically need headless. Optimize the current
                        implementation first when that can satisfy the accepted requirement with less cost and risk.
                        Work through <Link href="/blog/shopify-store-speed-optimization" className={linkClass}>Shopify speed diagnostics</Link>{" "}
                        and <Link href="/blog/shopify-dawn-theme-slow" className={linkClass}>theme-level inspection</Link> before
                        treating architecture as the answer.
                    </InsightBox>

                    <BlogHeader id="performance">Is headless commerce faster?</BlogHeader>
                    <BlogText>
                        It can be, but architecture alone proves nothing. A custom storefront can use deliberate
                        rendering, caching, image, code-splitting and data-fetching strategies. It can also become slow
                        through excessive scripts, poor queries, personalization, uncached work or large media.
                        Compare the same representative product, collection, search, cart and content journeys using
                        field Core Web Vitals where available and repeated lab tests under recorded conditions. Our{" "}
                        <Link href="/blog/core-web-vitals-explained" className={linkClass}>Core Web Vitals reference</Link> defines
                        the thresholds, and{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className={linkClass}>what a PageSpeed score represents</Link>{" "}
                        explains why a single lab run settles nothing.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no before-and-after number here">
                        We do not put a headline speed improvement on this page, because going headless does not carry
                        one. The result depends on what the storefront renders, what it caches, how much media and
                        script it ships and how the data layer is built, and a replatform done carelessly can land
                        slower than the theme it replaced. Establish your current numbers on the journeys that matter
                        to you first, then hold any proposed architecture to those same measurements.
                    </InsightBox>

                    <BlogHeader id="examples">Examples of headless commerce patterns</BlogHeader>
                    <BlogList
                        items={[
                            "A Shopify backend with a Hydrogen storefront and Shopify-hosted Oxygen deployment.",
                            "A Shopify backend with a separately hosted frontend using the Storefront and Customer Account APIs.",
                            "A Medusa application with an independently built Next.js storefront using Store API routes.",
                            "A commerce backend combined with Sanity for editorial content and visual editing.",
                            "One commerce layer serving a website plus other authorized customer touchpoints.",
                        ]}
                    />
                    <BlogText>
                        These are architecture examples, not outcome claims. Shopify documents a versioned Storefront
                        API and recommends stable-version updates each quarter. Medusa documents a separate server,
                        admin and storefront. Sanity documents visual editing for connected frontends. Current product
                        behavior and plan limits still need to be checked when scoping a project. We describe the
                        content-plus-frontend pairing we use most often in{" "}
                        <Link href="/blog/nextjs-sanity-stack" className={linkClass}>the Next.js and Sanity stack</Link>, and the
                        hosting side in{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={linkClass}>what it takes to host a Next.js frontend</Link>.
                    </BlogText>

                    <BlogHeader id="shopify">Shopify headless: Hydrogen or your own stack</BlogHeader>
                    <BlogText>
                        Shopify&apos;s Storefront API exposes commerce capabilities such as products, collections,
                        contextual pricing and carts. The Headless channel manages storefront tokens, permissions,
                        publishing and attribution. Hydrogen is Shopify&apos;s supported React-based option, while
                        Shopify also documents bringing another stack. API versioning, customer accounts, consent,
                        checkout behavior, extensions and plan-specific needs belong in the technical discovery. Our{" "}
                        <Link href="/blog/shopify-headless" className={linkClass}>guide to headless Shopify decisions</Link> covers
                        that discovery in more detail, and{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={linkClass}>Shopify compared with a custom build</Link>{" "}
                        frames the wider platform question. We deliver this work through our{" "}
                        <Link href="/services/ecommerce" className={linkClass}>ecommerce engineering service</Link>.
                    </BlogText>

                    <BlogHeader id="medusa">Medusa as a commerce backend</BlogHeader>
                    <BlogText>
                        Medusa separates its Node.js application and admin from the storefront. Its documentation
                        supports building a storefront independently or starting from a Next.js storefront, with Store
                        API routes and publishable keys connecting the application. This offers implementation
                        flexibility, but the buyer must account for the commerce server, database, providers,
                        storefront and operational ownership rather than comparing license labels alone. The same
                        ownership question applies to any self-hosted stack, which is the ground covered in{" "}
                        <Link href="/blog/woocommerce-vs-custom-website" className={linkClass}>WooCommerce compared with a custom build</Link>{" "}
                        and on our <Link href="/services/woocommerce" className={linkClass}>WooCommerce service</Link> page.
                    </BlogText>

                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4">Decision point</th>
                                    <th className="p-4">Headless Shopify</th>
                                    <th className="p-4">Medusa</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Backend</td><td className="p-4">Shopify runs payments, inventory, checkout and fraud tooling</td><td className="p-4">You run the commerce application, database and providers</td></tr>
                                <tr><td className="p-4 font-bold">Recurring platform fee</td><td className="p-4">Shopify plan and app fees continue to apply</td><td className="p-4">No license fee; Medusa is MIT-licensed. You pay for hosting, database and services instead</td></tr>
                                <tr><td className="p-4 font-bold">Payments and PCI</td><td className="p-4">Handled within Shopify&apos;s scope</td><td className="p-4">Your responsibility, or your hosting provider&apos;s, to integrate and document</td></tr>
                                <tr><td className="p-4 font-bold">Operational load</td><td className="p-4">Storefront only; the backend is somebody else&apos;s uptime problem</td><td className="p-4">Storefront plus commerce server, upgrades, backups and incident response</td></tr>
                                <tr><td className="p-4 font-bold">Suited to</td><td className="p-4">Teams happy with Shopify&apos;s backend who want off Liquid</td><td className="p-4">Teams that want no platform dependency and have capacity to operate it</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="&ldquo;No platform fee&rdquo; is not &ldquo;no cost&rdquo;">
                        The MIT license removes a licence fee, not the work. Someone still has to run the commerce
                        server, patch it, back it up, and answer the phone when checkout breaks at midnight. Compare total
                        operating cost and who is accountable for uptime — not the licence label.
                    </InsightBox>

                    <BlogHeader id="content">Where a headless CMS fits</BlogHeader>
                    <BlogText>
                        Product truth can remain in the commerce system while campaign pages, guides and editorial
                        modules live in a content platform. Sanity&apos;s current visual-editing documentation describes
                        live previews and direct editing from the rendered page. Define which system owns each field,
                        how product references resolve, who can publish and what happens when one system is unavailable.
                    </BlogText>

                    <BlogHeader id="pros-cons">Pros and cons</BlogHeader>
                    <div className="my-6 grid gap-5 md:grid-cols-2">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                            <h3 className="mb-3 font-bold text-charcoal">Potential advantages</h3>
                            <BlogList
                                items={[
                                    "Experience and frontend stack can be designed around the requirement.",
                                    "Multiple channels can use governed commerce services.",
                                    "Teams can choose explicit rendering, caching and deployment strategies.",
                                    "Content and commerce workflows can be separated where useful.",
                                ]}
                            />
                        </div>
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                            <h3 className="mb-3 font-bold text-charcoal">Added responsibilities</h3>
                            <BlogList
                                items={[
                                    "Another application, dependency graph and deployment process.",
                                    "API versioning, availability, rate limits and failure handling.",
                                    "Preview, search, analytics, consent and merchandising integration.",
                                    "Regression testing, security, observability and engineering ownership.",
                                ]}
                            />
                        </div>
                    </div>

                    <BlogHeader id="seo">SEO and product discovery</BlogHeader>
                    <BlogText>
                        Preserve crawlable rendered content, stable product and collection URLs where practical,
                        canonicals, internal links, status codes, sitemaps and accurate product structured data that
                        matches visible content. Test variants, pagination, faceting and unavailable products. A
                        framework or schema type does not guarantee indexing, rich results, rankings or AI citations.
                        If the storefront move also changes URLs, read{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={linkClass}>what happens to search visibility during a migration</Link>.
                    </BlogText>

                    <BlogHeader id="cost">How much does headless commerce cost?</BlogHeader>
                    <BlogText>
                        PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale,
                        but a headless commerce system may require custom scope. Price discovery, storefront templates,
                        commerce capabilities, content, search, accounts, checkout, integrations, migration, QA,
                        launch and operations. Add current vendor plans, usage, payment, hosting and support costs from
                        the buyer&apos;s actual configuration. The full tier detail sits on the{" "}
                        <Link href="/pricing" className={linkClass}>pricing page</Link>, and the line items that push a project
                        past a standard tier are set out in the{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className={linkClass}>rebuild scoping guide</Link>.
                    </BlogText>

                    <BlogHeader id="decision">A headless decision checklist</BlogHeader>
                    <BlogList
                        items={[
                            "What requirement is blocked today, and what evidence proves it?",
                            "Can a theme, app, content or infrastructure change solve it more safely?",
                            "Which system owns products, content, customers, orders, payments and search?",
                            "Which platform capabilities are available through the chosen APIs?",
                            "Who owns security, releases, incident response and API upgrades?",
                            "What are the baseline, acceptance profiles, rollback plan and business guardrails?",
                            "What is the three-year cost using current vendor quotes and internal effort?",
                        ]}
                    />

                    <BlogHeader id="our-approach">PandaCodeGen&apos;s approach</BlogHeader>
                    <BlogText>
                        We begin with a free fit audit and only recommend a custom storefront when the documented
                        requirements justify it. <Link href="/work/panda-patches" className={linkClass}>Panda Patches</Link> is
                        owned by a PandaCodeGen co-founder and can be described as a
                        first-party architecture example, but this article does not claim unverified speed, conversion
                        or revenue results for it. Client accounts can remain under client control, reusable internal
                        tools remain PandaCodeGen property, and third-party components retain their licenses according
                        to the signed terms.
                    </BlogText>
                    <BlogText>
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. Refund is tied to
                        failure to deliver the signed scope. Starter includes 15 business days of launch defect
                        support; Growth and Scale include 30. Performance acceptance applies only to the named pages,
                        profiles, environment, repeated runs, exclusions and remedy in the contract.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Find out whether headless is justified</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare repair, theme, headless and full-platform options against the same
                            requirements, operating model and acceptance evidence.
                        </p>
                        <QuoteModalButton cta="headless_commerce_fit_audit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Get your migration plan <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
