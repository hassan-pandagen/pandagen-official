import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Cable, Gauge, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
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
    "What headless commerce is, what headless Shopify actually costs against Shopify's own published plan prices checked August 2, 2026, what Hydrogen and Oxygen do and do not cost, and when a custom storefront is justified.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "what is headless commerce",
        "headless commerce 2026",
        "Shopify headless storefront",
        "Medusa headless commerce",
        "headless commerce cost",
        "headless Shopify cost",
        "Shopify headless pricing",
        "is Shopify headless free",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-14",
        modifiedTime: "2026-08-02",
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
    { name: "Shopify plan pricing", url: "https://www.shopify.com/pricing" },
    { name: "Hydrogen license (MIT)", url: "https://github.com/Shopify/hydrogen/blob/main/LICENSE.md" },
    { name: "Shopify Hydrogen deployments", url: "https://shopify.dev/docs/storefronts/headless/hydrogen/deployments" },
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
            dateModified: "2026-08-02",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Headless commerce", "Shopify Storefront API", "Shopify Hydrogen", "Medusa", "Next.js", "Content management systems", "Ecommerce architecture"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            image: ogImageUrlForPath(`/blog/${postId}`),
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Ecommerce",
            keywords: ["what is headless commerce", "headless Shopify cost", "is Shopify headless free", "Hydrogen and Oxygen pricing", "Medusa versus headless Shopify"],
            wordCount: 2985,
            timeRequired: "PT15M",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Headless commerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify", "https://www.shopify.com"] },
                { "@type": "Thing", name: "Application programming interface", sameAs: ["https://en.wikipedia.org/wiki/API"] },
                { "@type": "Thing", name: "Headless Shopify cost" },
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
                { "@type": "ListItem", position: 3, name: "Headless commerce", item: canonicalUrl },
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
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            datePublished: "2026-03-14",
            dateModified: "2026-08-02",
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

const linkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WhatIsHeadlessCommercePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Headless commerce")} />
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
                        <p className="mt-4 text-xs text-stone-500">Every Shopify figure on this page was read from Shopify&apos;s own pricing page and developer documentation on August 2, 2026.</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        Disclosure: PandaCodeGen builds headless storefronts, so we have a commercial interest in
                        one side of this question. That is why this page publishes no speed uplift, no conversion
                        figure and no market cost band, and why it puts the case for staying on a theme first.
                    </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 14, 2026" readTime="11 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">Headless commerce in plain English</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            The commerce platform stays the system of record for products, inventory, orders,
                            customers and checkout. What moves to you is the storefront: its code, its hosting, its
                            release process, and any customer-facing feature a theme or an app used to provide. Four
                            parts, and the fourth is the one that gets left out of quotes.
                        </p>
                        <BlogList
                            items={[
                                "The storefront renders the shopping experience.",
                                "The commerce service keeps hold of your products, prices, stock, carts, customers, orders and checkout, depending which platform you pick.",
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
                    <BlogText>
                        Four questions separate the two, and none of them is about speed. Rendering moves from a platform theme to an app you build and deploy. Commerce goes from native features to APIs exposing selected capabilities. The change surface splits, so frontend, APIs and providers now move independently. And responsibility for security, testing and operations transfers to your team.
                    </BlogText>
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
                    <BlogText>
                        These are six conditions that usually hold together, not a menu to pick one from. The first five describe a requirement the current platform genuinely cannot meet; the sixth asks whether your organization can own the engineering and operations that follow. A slow or visually limited store does not automatically need headless, and optimizing what you have is the cheaper answer when it can satisfy the requirement.
                    </BlogText>
                    <BlogList
                        items={[
                            "The required experience cannot be delivered reliably through the current theme or extension model.",
                            "Multiple customer touchpoints need one governed commerce layer.",
                            "Content, product and campaign workflows require a separate content system.",
                            "Your merchandising, translation or integration needs have outgrown what you have now.",
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
                    <BlogText>
                        These are architecture examples, not outcome claims. Each pairs a commerce backend with a separately deployed storefront, and each carries its own versioning and support model. Current product behavior and plan limits still need checking when you scope a project, because these move.
                    </BlogText>
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
                        The MIT license removes a license fee, not the work. Someone still has to run the commerce
                        server, patch it, back it up, and answer the phone when checkout breaks at midnight. Compare total
                        operating cost and who is accountable for uptime, not the license label.
                    </InsightBox>

                    <BlogHeader id="content">Where a headless CMS fits</BlogHeader>
                    <BlogText>
                        Product truth can remain in the commerce system while campaign pages, guides and editorial
                        modules live in a content platform. Sanity&apos;s visual-editing documentation, read August 2, 2026, describes
                        live previews and direct editing from the rendered page. Define which system owns each field,
                        how product references resolve, who can publish and what happens when one system is unavailable.
                    </BlogText>

                    <BlogHeader id="what-each-benefit-costs">Design freedom, omnichannel and faster updates: what each one actually costs</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Those three are the benefits almost every headless explainer leads with, and all three are
                            real. None of them is free, and the cost is rarely in the same sentence as the benefit.
                            Design freedom means the storefront is now code you own, so a visual change that used to be
                            a theme setting becomes a development task and a deploy. Omnichannel means the commerce
                            layer serves several surfaces, which is genuine leverage once you have a second surface and
                            an overhead until you do.
                        </BlogText>
                    </div>
                    <BlogText>
                        The third one is worth reading carefully, because it is often stated backwards. Headless does
                        not remove a release process, it adds one. A themed storefront publishes from the platform; a
                        headless storefront builds, deploys and has to be rolled back by somebody. That can absolutely
                        be faster, and on a team with continuous deployment it usually is, but the speed comes from
                        the pipeline you now operate rather than from the architecture itself. If nobody owns that
                        pipeline, updates get slower, not quicker.
                    </BlogText>
                    <BlogText>
                        Worth knowing where the usual answer comes from: the explainers that rank for this question are
                        mostly published by commerce platforms that sell headless products. That does not make them
                        wrong, and we sell headless builds too, which is why the disclosure sits at the top of this
                        page. It does mean the cost column is the part you will have to go looking for, so here it is
                        in the same place as the benefits.
                    </BlogText>

                    <BlogHeader id="pros-cons">Pros and cons</BlogHeader>
                    <BlogText>
                        Read the two columns at different confidence levels. Everything on the left is something headless makes possible; everything on the right is something it makes certain. The advantages depend on how well you build, and the added responsibilities arrive regardless.
                    </BlogText>
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

                    <BlogHeader id="cost">How much does headless Shopify cost?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Going headless on Shopify does not replace your Shopify bill, it adds a storefront to it.
                            Read from Shopify&apos;s own pricing page on August 2, 2026, the plan lineup is Basic at
                            US$19/mo, Grow at US$49/mo, Advanced at US$299/mo and Plus from US$2,300/mo, with third-party
                            payment provider fees of 2%, 1%, 0.6% and 0.2% respectively. The page carries a yearly and
                            monthly toggle and regional pricing, so read it in your own market on the day you budget. On
                            top of that plan you pay for the storefront build, then for hosting, a content system and
                            search if you use them, then for whoever keeps the storefront running afterwards.
                        </BlogText>
                    </div>
                    <BlogText>
                        Two things are worth correcting before you use any published breakdown. Several of the cost articles ranking for this query still quote Shopify&apos;s entry
                            plan at $29 a month, where Shopify&apos;s own page said US$19 when read on
                            August 2, 2026. Several also skip the Grow plan at US$49 entirely, which is the tier a store outgrowing Basic actually
                        lands on. If a cost article gets the platform line wrong, treat its build ranges with the same
                        suspicion.
                    </BlogText>

                    <BlogHeader id="hydrogen-free">Is Shopify headless free?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The framework is, the hosting is not documented, and the store plan definitely is not.
                            Hydrogen, Shopify&apos;s own React storefront framework, ships under the MIT license
                            (Copyright 2023-present, Shopify Inc.), so you can read it, fork it and run it anywhere at no
                            license cost. Oxygen is the part most often repeated without a source. The widely published claim that &ldquo;Hydrogen and Oxygen are free&rdquo; does not appear on Shopify&apos;s pricing page or in its Hydrogen and Oxygen developer documentation, both read August 2, 2026, neither of which stated an Oxygen price. What it does document is
                            that deployments are tied to a Shopify store, and that shareable deployment links require the
                            Basic plan or above.
                        </BlogText>
                    </div>
                    <BlogText>
                        That gap matters when you are building a three-year budget, because the one line you cannot look
                        up is the one every summary assures you is zero. Ask Shopify directly what Oxygen costs on your
                        plan and at your traffic before you commit to it, and get the answer in writing. If you host the
                        storefront yourself instead, the cost moves to your own provider and becomes checkable again;{" "}
                        <Link href="/blog/nextjs-hosting-zero-cost" className={linkClass}>what it takes to host a Next.js frontend</Link>{" "}
                        sets out what that line actually looks like.
                    </BlogText>

                    <BlogHeader id="what-you-lose">What you give up when you go headless</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The editing experience, and it is the loss teams most often underestimate. A headless storefront is
                            your own application, not a Liquid theme, so Shopify&apos;s theme editor does not apply to
                            it. Neither do theme app extensions or any app that works by injecting itself into a theme.
                            Anything a merchandiser used to change by dragging a section now needs either a content
                            system wired up for the purpose or a developer. Checkout stays on Shopify, which is the part
                            you want to keep, but everything in front of it becomes code you own.
                        </BlogText>
                    </div>
                    <BlogText>
                        Price that before you price the build. A storefront nobody on the marketing team can edit will
                        get edited by the engineering team, and that is a recurring cost dressed up as a one-off. The
                        honest version of this project includes whatever it takes to give the people who run campaigns
                        their controls back.
                    </BlogText>

                    <BlogHeader id="our-tiers">What we charge for this work</BlogHeader>
                    <BlogText>
                        A headless commerce build is normally custom scope rather than a standard tier. Our published
                        tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, and a storefront with
                        its own commerce integration, content system, search, accounts and migration usually sits beyond
                        Scale. Those are our prices, not a market average, and we would rather say so than anchor you on
                        an entry figure that does not apply to this job. The full tier detail sits on the{" "}
                        <Link href="/pricing" className={linkClass}>pricing page</Link>, and the line items that push a
                        project past a standard tier are set out in the{" "}
                        <Link href="/blog/website-rebuild-cost-2026" className={linkClass}>rebuild scoping guide</Link>.
                    </BlogText>

                    <BlogHeader id="worth-it">Is headless Shopify worth it?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            For most stores, no, and the reason is specific rather than cautious. Headless buys you
                            control of the storefront and costs you the theme editor, an ongoing engineering commitment
                            and a hosting line Shopify does not publish a price for. It is worth it when you can name a
                            requirement the theme demonstrably cannot meet after you have actually tried, when you have
                            somebody who will own the storefront application after launch, and when the people who run
                            campaigns will still be able to change a page without filing a ticket. Two out of three is
                            not enough; the third one is where these projects quietly fail.
                        </BlogText>
                    </div>
                    <BlogText>
                        The version of this question worth asking is not whether headless is better but what you are
                        buying instead. The same budget spent on the existing theme, its images, its app load and its
                        data layer usually moves the numbers that matter further, and it does not add an application to
                        your maintenance. Run that comparison honestly before you commit;{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={linkClass}>the Shopify speed diagnostics</Link>{" "}
                        are the cheaper half of it, and if they close the gap you have saved a rebuild.
                    </BlogText>

                    <BlogHeader id="decision">A headless decision checklist</BlogHeader>
                    <BlogText>
                        Seven questions, and the first two decide the rest: what requirement is blocked today, what evidence proves it, and could a theme, app, content or infrastructure change solve it more safely. If you cannot answer those with something specific, the remaining five are premature.
                    </BlogText>
                    <BlogList
                        items={[
                            "What requirement is blocked today, and what evidence proves it?",
                            "Can a theme, app, content or infrastructure change solve it more safely?",
                            "Which system is the source of truth for products, content, customers, orders, payments and search?",
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
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to
                        failure to deliver the signed scope. Where the accepted project terms record it, Starter includes 15 business days of launch defect support; Growth and Scale include 30. Performance acceptance applies only to the named pages,
                        profiles, environment, repeated runs, exclusions and remedy in the contract.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="mb-12 space-y-3 text-sm text-stone-600">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

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

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
