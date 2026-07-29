import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CreditCard, Database, PackageSearch, Route } from "lucide-react";
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

const postId = "woocommerce-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WooCommerce Migration Cost in 2026: Data, Scope and Tiers";
const description =
    "Price a WooCommerce migration from products, orders, customers, payments, subscriptions, extensions, content, SEO, acceptance, cutover and operating responsibility.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WooCommerce migration cost",
        "migrate WooCommerce store",
        "WooCommerce to custom website",
        "WooCommerce data migration",
        "WooCommerce to Next.js cost",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-08",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/woocommerce-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WooCommerce product CSV", url: "https://woocommerce.com/document/product-csv-importer-exporter/" },
    { name: "WooCommerce product migration", url: "https://woocommerce.com/document/migrating-products-between-sites/" },
    { name: "WooCommerce order and customer export", url: "https://woocommerce.com/document/ordercustomer-csv-export/" },
    { name: "WooCommerce REST API", url: "https://developer.woocommerce.com/docs/apis/rest-api/" },
    { name: "WooCommerce webhooks", url: "https://woocommerce.com/document/webhooks/" },
    { name: "WooCommerce HPOS", url: "https://developer.woocommerce.com/docs/features/high-performance-order-storage" },
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-08",
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
            articleSection: "WooCommerce migration",
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

export default function WooCommerceMigrationCostPage() {
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
                            { label: "WooCommerce migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">WooCommerce migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WooCommerce Migration Cost <span className="italic text-cognac">Price the Store, Not Pages</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Moving a store is not just moving a website. Your products, customers, past orders,
                            payments and extensions all have to line up afterwards, and the shop has to keep trading
                            while it happens. That is what sets the price, far more than how many pages you have.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current WooCommerce and Google documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 8, 2026" readTime="17 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "If you run subscriptions, handle regulated data, or have a lot of systems talking to each other, expect a custom scope rather than a tier.",
                                "WooCommerce exports products by CSV and has a REST API. Everything else may need an extension's own export, an API, or direct database work.",
                                "The signed scope is where the final price sits, along with what counts as the data arriving correctly, how the switchover happens, who owns what afterwards, and what we do if something is wrong.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: PackageSearch, title: "Catalog", body: "Everything you sell, with its options, photos, prices and stock." },
                            { icon: Database, title: "Records", body: "Who bought from you, what they ordered, refunds and any subscriptions." },
                            { icon: CreditCard, title: "Payments", body: "Your provider accounts, the tokens and webhooks, and making the numbers match." },
                            { icon: Route, title: "Storefront", body: "The URLs, the content, how people buy, and the switchover itself." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="tiers">PandaCodeGen migration tiers</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, bounded catalog or storefront scope with limited data movement</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">More templates, catalog, content, integrations and migration controls</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Larger catalog, data, search, workflows or operational risk</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Subscriptions, complex payments, regulated data, multiple markets or applications</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="Before you judge a quote by its number">
                        A higher quote is not automatically padded. It may cover more discovery, data work, design,
                        compliance, integration, governance or support than the cheaper one beside it. Normalise the
                        statements of work to the same scope first, then compare. Two quotes that differ by a wide margin
                        usually describe two different projects, and the cheaper one is often the one that has not yet
                        found the work.
                    </InsightBox>
                    <BlogText>
                        What each tier covers is set out on our{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">pricing page</Link>, the store-side
                        scope is described under{" "}
                        <Link href="/services/woocommerce" className="text-cognac hover:underline">WooCommerce migration</Link>, and{" "}
                        <Link href="/work" className="text-cognac hover:underline">our project work</Link>{" "}
                        shows what a delivered build contains.
                    </BlogText>

                    <BlogHeader id="complexity">The WooCommerce migration complexity matrix</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[980px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Domain</th><th className="p-4">Inventory</th><th className="p-4">Acceptance evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Catalog</td><td className="p-4">Types, variants, attributes, media, taxonomies, pricing, inventory</td><td className="p-4">Counts, field mapping, exception report and sampled parity</td></tr>
                                <tr><td className="p-4 font-bold">Customers</td><td className="p-4">Accounts, addresses, consent, roles, password strategy</td><td className="p-4">Authorized records, identity test and communication plan</td></tr>
                                <tr><td className="p-4 font-bold">Orders</td><td className="p-4">Statuses, line items, tax, shipping, refunds, notes, HPOS state</td><td className="p-4">Counts, totals, samples, reconciliation and retention</td></tr>
                                <tr><td className="p-4 font-bold">Payments</td><td className="p-4">Provider, tokens, subscriptions, refunds, disputes, webhooks</td><td className="p-4">Provider-approved path and end-to-end transaction tests</td></tr>
                                <tr><td className="p-4 font-bold">Extensions</td><td className="p-4">Subscriptions, bookings, memberships, add-ons, bundles, feeds</td><td className="p-4">Feature-by-feature retain, replace or retire decision</td></tr>
                                <tr><td className="p-4 font-bold">Storefront</td><td className="p-4">URLs, templates, search, cart, checkout, account, content</td><td className="p-4">Journey, SEO, accessibility, analytics and performance tests</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="effort">What is cheap to move and what is expensive</BlogHeader>
                    <BlogText>
                        Cost follows the mechanics of what has to move. Anything that maps one to one into the new
                        system is fast. Anything that depends on live third-party state, plugin-owned fields or years of
                        accumulated relationships is where the hours go.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Lower effort to move</th><th className="p-4">Higher effort to move</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4">Simple products with one price, one image and one SKU</td><td className="p-4">Variable products with attribute matrices, per-variant SKUs, stock and pricing</td></tr>
                                <tr><td className="p-4">Static content pages and policies</td><td className="p-4">Custom fields and product meta added by plugins or a page builder</td></tr>
                                <tr><td className="p-4">A single payment gateway with standard checkout</td><td className="p-4">Multiple gateways, stored payment methods or subscription billing</td></tr>
                                <tr><td className="p-4">Flat-rate or free shipping</td><td className="p-4">Live carrier rate lookups and zone, weight or class based tables</td></tr>
                                <tr><td className="p-4">Active customer accounts and a recent order window</td><td className="p-4">Years of order history with refunds, notes, reviews and cross-record relationships</td></tr>
                                <tr><td className="p-4">A consistent, well-named media library</td><td className="p-4">Large image sets with inconsistent sizing, missing alternative text and no naming convention</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Order history is the line item teams underestimate most. Products and content map one to one.
                        Orders do not, because they carry relationships across customers, line items, refunds and notes,
                        and reproducing those relationships is different work from exporting a spreadsheet. A defensible
                        approach is to migrate active customer accounts and a defined recent window of orders in full,
                        then keep older records in a read-only archive instead of rebuilding them into the new system.
                        Whichever route is chosen, write the window and the archive location into the scope.
                    </BlogText>
                    <BlogText>
                        Payment work deserves the same treatment. Reconnecting a standard gateway is bounded work:
                        credentials, webhook endpoints, refund tests. Subscriptions, stored payment methods and
                        processors with non-standard integrations have to be rebuilt and tested against real
                        transactions before launch, which is a different order of effort from reconnecting keys.
                    </BlogText>

                    <BlogHeader id="exports">What WooCommerce exports actually cover</BlogHeader>
                    <BlogText>
                        WooCommerce core documents a built-in product CSV importer and exporter for supported core
                        product data, with specific limits and mapping behavior. Woo also documents REST API access.
                        Order and customer export can depend on an extension or a custom/API process. Extension-owned
                        data such as subscriptions, bookings, memberships, add-ons or custom fields needs its own
                        documented path. Export availability is not the same as target-system compatibility.
                    </BlogText>

                    <BlogHeader id="hpos">Why HPOS matters during discovery</BlogHeader>
                    <BlogText>
                        High-Performance Order Storage uses dedicated WooCommerce order tables and is enabled by default
                        for new installations from WooCommerce 8.2. Existing stores may use legacy posts tables, HPOS or
                        compatibility synchronization, and incompatible extensions can block the feature. Record the
                        authoritative store, synchronization state and extension compatibility before extracting orders.
                    </BlogText>

                    <BlogHeader id="payments">Payments and subscriptions</BlogHeader>
                    <BlogText>
                        Do not assume payment credentials or recurring tokens can be moved as ordinary CSV data. The
                        path depends on the processor, merchant account, token portability, customer consent,
                        subscription engine and security requirements. Prefer client-controlled provider accounts when
                        agreed. Test authorization, capture, tax, shipping, refund, cancellation, webhook and
                        reconciliation flows before cutover.
                    </BlogText>

                    <BlogHeader id="customers">Customer data and privacy</BlogHeader>
                    <BlogText>
                        Minimize exported personal data, define lawful purpose, encrypt transfers, restrict access,
                        retain an audit trail and delete temporary copies on schedule. Decide whether existing password
                        hashes are safely compatible or whether users need a secure reset. A migration plan should name
                        controller and processor responsibilities, breach handling, retention and customer notices.
                    </BlogText>

                    <BlogHeader id="seo">SEO and URL continuity</BlogHeader>
                    <BlogText>
                        Inventory product, category, content and campaign URLs. Keep useful URLs stable where practical
                        and map changed URLs to relevant successors. Preserve approved rendered content, titles,
                        canonicals, internal links, status codes and structured data. Validate sitemaps and analytics,
                        monitor Search Console and keep rollback conditions. Rankings, traffic and recovery timing are
                        not guaranteed. We work through the same ground in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">will migrating hurt my SEO</Link>, and
                        the measurement side is covered in{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Core Web Vitals explained</Link>.
                    </BlogText>

                    <BlogHeader id="cutover">How to migrate a live store</BlogHeader>
                    <BlogList
                        items={[
                            "Record a baseline and freeze target schema and feature scope.",
                            "Run an initial export and test migration on an isolated environment.",
                            "Reconcile counts, money totals, samples and exceptions.",
                            "Test storefront, account, transaction, refund and operational journeys.",
                            "Plan the final data delta, content freeze and customer communication.",
                            "Cut over with monitoring, rollback triggers and named decision-makers.",
                            "Reconcile post-cutover orders, inventory, payments and analytics.",
                        ]}
                    />
                    <BlogText>
                        The old store can usually remain available during build and test, but no provider should promise
                        universal zero interruption. Define the permitted write freeze, checkout behavior and cutover
                        window in the accepted plan.
                    </BlogText>

                    <BlogHeader id="ownership">Ownership and accounts</BlogHeader>
                    <BlogText>
                        Client content and business data remain client property. Custom deliverables transfer after
                        full payment under the signed agreement. PandaCodeGen retains reusable internal tools,
                        templates and pre-existing code. Third-party components retain their licenses. Domain, hosting,
                        repository and business accounts can remain under client control when agreed. The general
                        version of this question is covered in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline">do you own your website</Link>.
                    </BlogText>

                    <BlogHeader id="business-case">Is the migration worth it?</BlogHeader>
                    <BlogText>
                        Compare WooCommerce repair, optimization, headless WooCommerce and full replacement across the
                        same capabilities. Include build, migration, providers, payment fees, maintenance, security,
                        support, internal time and exit. Attribute business benefits only from first-party evidence;
                        there is no automatic ranking, conversion or payback result. If speed is the trigger, start with{" "}
                        <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline">diagnosing a slow WooCommerce store</Link>{" "}
                        before assuming a rebuild. If the question is architectural, compare the two operating models
                        in{" "}
                        <Link href="/blog/woocommerce-vs-custom-website" className="text-cognac hover:underline">WooCommerce versus a custom website</Link>. Work
                        that goes beyond a storefront belongs under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">custom engineering</Link>.
                    </BlogText>

                    <BlogHeader id="quote">What a fair quote contains, and what to question</BlogHeader>
                    <BlogText>
                        A quote you can act on describes the whole job, including the parts nobody enjoys scoping. Read
                        it as a list of deliverables rather than a total.
                    </BlogText>
                    <BlogList
                        items={[
                            "Design and build scope stated template by template, not as a theme reskin.",
                            "Catalog, content and media migration with a documented URL disposition and redirect map.",
                            "Metadata, canonicals, structured data and URL structure treated as deliverables with acceptance evidence.",
                            "Test coverage across devices, browsers, checkout and every named integration.",
                            "Launch support, a monitoring window and a written rollback plan with named owners.",
                            "A performance target that names pages, profiles, method, exclusions and remedy.",
                        ]}
                    />
                    <BlogText>Question a quote where any of the following appear.</BlogText>
                    <BlogList
                        items={[
                            "Redirects, analytics handover or Search Console access listed as optional extras.",
                            "An open-ended hourly estimate with no cap, no phase exits and no change-control process.",
                            "A migration priced as a plugin run, which copies records without addressing URLs, templates, payments or acceptance.",
                            "An ongoing retainer required before any build work can begin.",
                            "A ranking, traffic or revenue promise, or a performance claim with no named pages, method or exclusions.",
                            "No statement of who holds the domain, repository, hosting and provider accounts after launch.",
                        ]}
                    />

                    <BlogHeader id="terms">Payment, refund, support and performance</BlogHeader>
                    <BlogText>
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. Refund is tied to
                        failure to deliver the signed scope, not a preference change after starting. Starter includes 15
                        business days of launch defect support; Growth and Scale include 30. A 90-plus Lighthouse target
                        applies only when the contract names representative pages, profiles, environment, three passing
                        runs per page and profile, exclusions and remedy. For the inputs behind a build or transition
                        figure, see{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">what a website costs</Link>{" "}
                        and{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">what drives migration cost</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a store-data inventory before a price</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the catalog, customer, order, payment and extension scope before recommending a
                            target or cutover plan.
                        </p>
                        <QuoteModalButton cta="woocommerce_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
