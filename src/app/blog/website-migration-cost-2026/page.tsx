import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, FileInput, ListChecks, Route } from "lucide-react";
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

const postId = "website-migration-cost-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Migration Cost in 2026: Seven-Platform Scope Guide";
const description =
    "Price WordPress, WooCommerce, Webflow, Wix, Squarespace, Shopify and GoHighLevel migrations from current inventory, export limits, integrations, SEO, acceptance and operation.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "website migration cost 2026",
        "website platform migration cost",
        "WordPress migration cost",
        "Webflow migration cost",
        "Shopify migration cost",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-06",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-migration-cost-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Google site moves", url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
    { name: "WordPress export", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "WooCommerce product CSV", url: "https://woocommerce.com/document/product-csv-importer-exporter/" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Wix CMS export", url: "https://support.wix.com/en/article/cms-formerly-content-manager-exporting-content-from-your-cms-collection" },
    { name: "Squarespace export", url: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site" },
    { name: "Shopify product export", url: "https://help.shopify.com/en/manual/products/import-export/export-products" },
    { name: "HighLevel API", url: "https://marketplace.gohighlevel.com/docs/" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-06",
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
            articleSection: "Website migration",
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

export default function WebsiteMigrationCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Website migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Migration Cost <span className="italic text-cognac">Seven-Platform Scope Guide</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            What a migration costs comes down to what you already have and what it has to do once it
                            lands. The platform you are leaving changes how hard the export is, but the price is set by
                            how many pages and templates there are, what data has to move, what it has to connect to,
                            and how much testing the launch needs.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current platform and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 6, 2026" readTime="18 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">PandaCodeGen planning tiers</h2>
                        <BlogList
                            items={[
                                "Starter begins at $1,500 for a small, well-defined migration.",
                                "Growth begins at $3,500 for more templates, structured content or integrations.",
                                "Scale runs from $5,000 to $10,000 for broader or higher-risk migrations.",
                                "Larger or unusual scope is discussed separately before signing.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: FileInput, title: "Inventory", body: "Every page, template, image and file you actually have." },
                            { icon: Route, title: "Map", body: "Where each URL lands, and who owns what." },
                            { icon: ListChecks, title: "Accept", body: "How you sign it off: it works, it ranks, people can use it, it is fast." },
                            { icon: Calculator, title: "Operate", body: "What it costs to keep running once it is live." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="cost-table">The seven-platform migration matrix</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Source</th><th className="p-4">Export or extraction</th><th className="p-4">Common replacement work</th><th className="p-4">Key acceptance risk</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">WordPress</td><td className="p-4">XML, database, files, APIs or controlled extraction</td><td className="p-4">Theme, plugins, blocks, forms, search, users and hosting behavior</td><td className="p-4">URL, content, media, shortcode and plugin-equivalent coverage</td></tr>
                                <tr><td className="p-4 font-bold">WooCommerce</td><td className="p-4">Products CSV plus orders, customers and extension-specific data</td><td className="p-4">Checkout, tax, fraud, inventory, fulfillment, accounts and subscriptions</td><td className="p-4">Financial and order-flow reconciliation</td></tr>
                                <tr><td className="p-4 font-bold">Webflow</td><td className="p-4">Code ZIP plus separate CMS or ecommerce CSV exports</td><td className="p-4">CMS, forms, search, localization, ecommerce, users and code components</td><td className="p-4">Feature gaps beyond exported HTML, CSS, JavaScript and assets</td></tr>
                                <tr><td className="p-4 font-bold">Wix</td><td className="p-4">CMS exports and other feature-specific exports or APIs where available</td><td className="p-4">Pages, media, blog, forms, bookings, members, apps and commerce</td><td className="p-4">Complete feature and content inventory before extraction</td></tr>
                                <tr><td className="p-4 font-bold">Squarespace</td><td className="p-4">Partial WordPress XML plus manual or separate system work</td><td className="p-4">Excluded layouts, store, portfolio, products, media, forms and styles</td><td className="p-4">Export exclusions and design recreation</td></tr>
                                <tr><td className="p-4 font-bold">Shopify</td><td className="p-4">Product and other admin exports plus APIs</td><td className="p-4">Storefront, checkout boundary, accounts, search, apps, analytics and consent</td><td className="p-4">Commerce continuity and app compatibility</td></tr>
                                <tr><td className="p-4 font-bold">GoHighLevel</td><td className="p-4">Documented APIs, exports and controlled recreation</td><td className="p-4">Keep CRM or replace it; forms, funnels, calendars, automation and attribution</td><td className="p-4">Lead capture and workflow continuity</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="info" label="Why we publish our tiers and not a market range">
                        We do not publish a market median or a cross-agency price range for these migrations. Ranges
                        like that mix unlike project types, scopes, regions and levels of finish, so a figure stated
                        without a defined sample and scope definition is not something a buyer can plan against. The
                        only prices we stand behind are our own, and the scope written into the accepted terms sets the
                        final one.
                    </InsightBox>

                    <BlogText>
                        Our own tiers are at the top of this page. Which one a migration lands in is driven by page count,
                        content volume, custom functionality and integrations rather than by which platform you are
                        leaving, so the same source platform can land in any of the three. The price is fixed for the scope
                        written into the accepted project terms, and every build carries a 90+ Lighthouse handover target
                        on mobile and desktop for the agreed representative pages, verified across three recorded runs.
                        Current tiers are always on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>;
                        if this article and that page ever disagree, the pricing page is correct.
                    </BlogText>

                    <BlogHeader id="whats-inside-price">What is inside a migration price?</BlogHeader>
                    <BlogList
                        items={[
                            "Discovery, inventory, requirements and target architecture.",
                            "Information architecture, component system and responsive implementation.",
                            "Content model, extraction, transformation, media and validation.",
                            "Forms, search, users, commerce, analytics, consent and integrations.",
                            "SEO inventory, metadata, canonicals, structured data, redirects and sitemap.",
                            "Accessibility, security, browser, device, functional and performance QA.",
                            "Deployment, data freeze, cutover, monitoring, rollback, handoff and support.",
                        ]}
                    />

                    <BlogHeader id="wordpress-migration-cost">WordPress migration cost</BlogHeader>
                    <BlogText>
                        WordPress scope depends on themes, templates, blocks, plugins, shortcodes, custom post types,
                        fields, users, forms, search, media and hosting behavior. WordPress can export content, but a
                        replacement must reproduce accepted functions and editorial workflows. A brochure site may fit
                        Starter; structured or plugin-heavy sites may fit Growth, Scale or custom scope.
                    </BlogText>

                    <BlogHeader id="woocommerce-migration-cost">WooCommerce migration cost</BlogHeader>
                    <BlogText>
                        WooCommerce adds products, variants, pricing, inventory, customer and order records, tax,
                        shipping, payments, fraud, refunds, subscriptions and extensions. Reconcile record counts and
                        financial flows before and after migration. Commerce complexity can exceed the standard tiers.
                    </BlogText>

                    <BlogHeader id="webflow-migration-cost">Webflow migration cost</BlogHeader>
                    <BlogText>
                        Webflow code export covers HTML, CSS, JavaScript and assets on eligible paid Workspaces, while
                        current documentation excludes working CMS, ecommerce, User Accounts, localized content beyond
                        the primary locale, forms, search, password protection and code components. Page count must be
                        normalized into templates and systems before choosing a tier.
                    </BlogText>

                    <BlogHeader id="wix-migration-cost">Wix migration cost</BlogHeader>
                    <BlogText>
                        Wix scope depends on the editor generation, CMS collections, blog, media, forms, bookings,
                        members, stores, apps and custom code. The CMS can export collections, but that does not
                        establish a complete whole-site export. Inventory each feature and choose an extraction and
                        replacement method.
                    </BlogText>

                    <BlogHeader id="squarespace-migration-cost">Squarespace migration cost</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s current export is partial. Store and portfolio pages, product and video
                        blocks, drafts, style settings and custom CSS are among the documented exclusions. Price the
                        design, content and systems that must be recreated separately.
                    </BlogText>

                    <BlogHeader id="shopify-migration-cost">Shopify and headless Shopify migration cost</BlogHeader>
                    <BlogText>
                        Decide whether Shopify remains the commerce backend or is replaced. A headless migration still
                        needs search, accounts, analytics, consent, localization, app compatibility, preview,
                        deployment and monitoring. A fully custom commerce system also assumes responsibility for
                        checkout, tax, fraud, orders and operations.
                    </BlogText>

                    <BlogHeader id="gohighlevel-migration-cost">GoHighLevel website migration cost</BlogHeader>
                    <BlogText>
                        A hybrid can keep GoHighLevel for CRM, calendars, automation and pipelines while replacing the
                        public site. Define forms, contacts, attribution, webhooks, OAuth, failure handling and
                        ownership. Do not promise an unchanged CRM bill or uninterrupted workflow without testing the
                        accepted implementation.
                    </BlogText>

                    <BlogHeader id="roi-math">Calculate the business case without universal loss math</BlogHeader>
                    <BlogText>
                        Compare current direct costs, internal hours, incidents and measured limitations with migration
                        cost, target providers, maintenance, support and risk. Build low, central and high scenarios.
                        Do not multiply an assumed speed loss or promise a predetermined commercial or search outcome.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Costs that must be visible in the proposal</BlogHeader>
                    <BlogList
                        items={[
                            "Content cleanup, rewriting, missing assets and data exceptions.",
                            "Vendor plans, licenses, usage, payment and messaging fees.",
                            "Accessibility remediation, security review and compliance work.",
                            "Internal review, legal approval, training and change management.",
                            "Post-launch maintenance, monitoring, incident response and upgrades.",
                            "Exit, archive, old-platform cancellation and data retention.",
                        ]}
                    />

                    <BlogHeader id="how-to-budget">How to budget the migration</BlogHeader>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>Inventory routes, templates, content, data, integrations and users.</li>
                        <li>Define target journeys, editor workflow and operating responsibilities.</li>
                        <li>Set functional, SEO, accessibility, security and performance acceptance.</li>
                        <li>Separate one-time agency work from third-party and ongoing costs.</li>
                        <li>Record assumptions, exclusions, change control, dependencies and schedule.</li>
                        <li>Keep a contingency tied to identified unknowns, not an arbitrary percentage.</li>
                    </ol>

                    <BlogHeader>PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. A refund is tied to
                        failure to deliver the signed scope, not a change of preference after work starts. Starter
                        includes 15 business days of launch defect support; Growth and Scale include 30. Ownership,
                        licenses and accounts follow the accepted project terms.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Get a platform-specific migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the actual site and map it to a tier or custom scope. Additional pages and
                            features can be discussed after the core migration is defined.
                        </p>
                        <QuoteModalButton cta="website_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
