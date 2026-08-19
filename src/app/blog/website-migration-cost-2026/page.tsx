import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, FileInput, ListChecks, Route } from "lucide-react";
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
const MigrationVisual = dynamicImport(() => import("@/components/blog/MigrationControlAnimation"));

const postId = "website-migration-cost-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Migration Cost in 2026: Seven-Platform Scope Guide";
const description =
    "What it costs to move OFF WordPress, WooCommerce, Webflow, Wix, Squarespace, Shopify or GoHighLevel. Price the migration from current inventory, export limits, integrations, SEO, acceptance and operation.";

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
        "how much does it cost to migrate a website",
        "website replatforming cost",
        "Squarespace migration cost",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-06",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/website-migration-cost-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WordPress export", url: "https://wordpress.org/documentation/article/tools-export-screen/" },
    { name: "WooCommerce product CSV", url: "https://woocommerce.com/document/product-csv-importer-exporter/" },
    { name: "Webflow code export", url: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code" },
    { name: "Wix support: CMS and content export", url: "https://support.wix.com/en" },
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
            dateModified: "2026-08-19",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Website migration", "WordPress", "WooCommerce", "Webflow", "Shopify", "Squarespace", "URL redirection", "Technical SEO", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Website migration",
            keywords: ["website migration cost", "how long does a website migration take", "website replatforming cost", "WordPress migration cost", "Shopify migration cost", "change web host"],
            wordCount: 2906,
            timeRequired: "PT13M",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Data migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "URL redirection", sameAs: ["https://en.wikipedia.org/wiki/URL_redirection"] },
                { "@type": "Thing", name: "Website migration cost" },
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
                { "@type": "ListItem", position: 3, name: "Website migration cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-06",
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

export default function WebsiteMigrationCostPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Website migration cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Migration Cost: <span className="italic text-cognac">Seven-Platform Scope Guide</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            What a migration costs comes down to what you already have and what it has to do once it
                            lands. The platform you are leaving changes how hard the export is, but the price is set by
                            how many pages and templates there are, what data has to move, what it has to connect to,
                            and how much testing the launch needs.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 2, 2026 against current platform and Google documentation. Every export link below was re-checked on August 1, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 6, 2026" readTime="13 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <div className="my-10">
                        <MigrationVisual />
                    </div>

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
                    <BlogText>
                        No platform hands you a complete, portable site. What each one exports sets the floor on what a migration costs, because whatever the export misses has to be rebuilt by hand. The right-hand column is where acceptance usually fails, and it is different for every source platform.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
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
                        written into the accepted project terms, and every build carries a 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> handover target
                        on mobile and desktop for the agreed representative pages, verified across three recorded runs.
                        Current tiers are always on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>;
                        if this article and that page ever disagree, the pricing page is correct.
                    </BlogText>

                    <BlogHeader id="host-vs-platform">Are you changing hosts, or changing platforms?</BlogHeader>

                    <div data-speakable="true">
                        <BlogText>
                            These are two different jobs and only one of them is worth paying an agency for. Moving a
                            WordPress site from one host to another host keeps the same software, the same theme, the
                            same plugins and the same database. Nothing is rebuilt. Most hosting companies will do that
                            transfer for you when you buy a plan, frequently at no charge or for a small fixed fee, and
                            that is the first place to ask. <strong>A host-only move should cost you between $0 and
                            about $150. If all you need is a host change, do not pay migration prices for it, and do
                            not hire us to do it.</strong>
                        </BlogText>
                    </div>

                    <BlogText>
                        A platform migration is the other job: the content comes out of one system and has to be rebuilt
                        in another that works differently. Templates, plugins, forms, search, checkout and editor
                        workflow do not transfer, they get reproduced, and the URLs have to be mapped so the search
                        traffic survives. That is what the rest of this page prices. Published figures that mix the two
                        jobs into one range are the reason migration quotes look wildly inconsistent: a $0 host transfer
                        and a five-figure replatform are both truthfully called a &ldquo;website migration&rdquo;.
                    </BlogText>

                    <BlogText>
                        A third case sits between them. Staying on the same platform but rebuilding the design is a
                        redesign, not a migration, and it is priced differently again; our{" "}
                        <Link href="/blog/website-redesign-cost" className="text-cognac hover:underline font-medium">website redesign cost guide</Link>{" "}
                        covers that scope, and{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline font-medium">what a website costs to build from scratch</Link>{" "}
                        covers the case where replacing beats moving.
                    </BlogText>

                    <BlogQuote>
                        The platform you are leaving changes how hard the export is. It does not set the price.
                    </BlogQuote>

                    <BlogHeader id="what-changes-the-number">The three things a quote actually depends on</BlogHeader>

                    <div data-speakable="true">
                        <BlogText>
                            Every published migration range is wide because it is averaging jobs that have nothing in
                            common. Three answers collapse most of that range, and any quote given without them is a
                            guess wearing a number.
                        </BlogText>

                        <BlogList
                            items={[
                                "The platform pair, not just the destination. WordPress to Next.js and Wix to Next.js are different jobs: WordPress exposes its database and a REST API, so content extraction is scriptable. Wix does not give you the same access, so more content is moved by hand and the same page count costs more.",
                                "The countable unit, and which one applies. Brochure sites price per page or per template; stores price per product, per variant and per historical order. A 40-page site and a 4,000-product catalogue can carry the same design work and differ by an order of magnitude on data.",
                                "Whether URLs have to survive. If the site has search traffic worth keeping, someone has to inventory every live URL, map each to its new path and ship 301 redirects, then verify them after cutover. On an established site this is often the single largest line item, and it is the one most commonly missing from a cheap quote.",
                            ]}
                        />

                        <BlogText>
                            That third one is where cheap migrations turn expensive. A 301 redirect tells Google the page
                            moved permanently and passes its ranking signals to the new URL. Skip the mapping and the old
                            URLs return 404s, the accumulated signals are lost, and the traffic does not come back on its
                            own. Recovering it afterwards costs more than mapping it correctly would have, because by
                            then the rankings have to be re-earned rather than transferred. What that looks like in
                            practice is covered in{" "}
                            <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline font-medium">what a migration does to search visibility</Link>.
                        </BlogText>

                        <InsightBox variant="info">
                            Before asking anyone for a number, write down three things: the platform you are on and the
                            one you are moving to, your page count or product count, and whether you need existing URLs
                            and rankings preserved. A quote given without those is not a quote. A quote that omits the
                            redirect mapping is not cheaper than one that includes it, it is just deferring the cost.
                        </InsightBox>
                    </div>

                    <BlogHeader id="which-platform">Go straight to your platform</BlogHeader>
                    <BlogText>
                        The rest of this page is the shared method. If you already know which platform you are leaving,
                        the dedicated guide will be faster: {" "}
                        <Link href="/blog/wordpress-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WordPress</Link>,{" "}
                        <Link href="/blog/woocommerce-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WooCommerce</Link>,{" "}
                        <Link href="/blog/webflow-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Webflow</Link>,{" "}
                        <Link href="/blog/wix-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Wix</Link>,{" "}
                        <Link href="/blog/squarespace-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Squarespace</Link>, or{" "}
                        <Link href="/blog/leaving-webflow-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">the triggers that usually start a Webflow move</Link>.
                        If you are moving to Next.js specifically,{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">the WordPress to Next.js walkthrough</Link>{" "}
                        covers the mechanics, and{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">what a migration does to your search traffic</Link>{" "}
                        covers the risk everyone actually asks about first.
                    </BlogText>

                    <BlogHeader id="how-long">How long does a website migration take?</BlogHeader>

                    <div data-speakable="true">
                        <BlogText>
                            Long enough that the schedule is set by approvals and content, not by build time. The
                            technical work on a bounded brochure migration is the smaller half of the calendar; the
                            larger half is inventorying what exists, deciding what does not come across, getting content
                            reviewed and signed off, and testing every journey before the switch. A store adds
                            reconciliation of orders, customers and payments, which cannot be rushed because the
                            numbers have to match.
                        </BlogText>
                    </div>

                    <BlogText>
                        The parts that reliably take longer than people plan for: finding every URL that exists rather
                        than every URL someone remembers, waiting on content decisions, and the freeze-and-cutover window
                        where data must stop changing. The parts that go faster than expected are usually templates,
                        because a site with forty pages often has six real layouts. Ask any provider for the schedule
                        broken into inventory, build, content, testing and cutover, with the dependencies named, rather
                        than a single duration. A quote that gives one number for the whole thing has not been planned.
                    </BlogText>

                    <BlogHeader id="whats-inside-price">What is inside a migration price?</BlogHeader>
                    <BlogText>
                        Seven workstreams, and only two of them look like building a website. Discovery, content extraction and reshaping, rebuilding the things that were features rather than pages, search continuity, testing, and the launch and handover work. A quote that names only design and development has not priced the other five.
                    </BlogText>
                    <BlogList
                        items={[
                            "Working out what you have, what you need, and what you are building.",
                            "Deciding how the site is organised, building the reusable pieces, and making it work on every screen.",
                            "Getting your content out of the old system, reshaping it to fit the new one, moving the images, and checking nothing was lost.",
                            "Rebuilding the things people use: forms, search, logins, checkout, analytics, the cookie banner, and whatever else you connect to.",
                            "Protecting your search traffic: listing every URL, carrying the metadata across, setting canonicals, keeping the structured data, mapping redirects, and regenerating the sitemap.",
                            "Testing it properly: can everyone use it, is it secure, does it work in every browser and on every device, does it do what it should, and is it fast.",
                            "Going live: shipping it, freezing the data, making the switch, watching it, being able to undo it, handing it over, and supporting you afterwards.",
                        ]}
                    />

                    <BlogText>
                        The seven sections below give the starting figure for each source platform. They are
                        PandaCodeGen&apos;s own published tiers, listed in full on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>,
                        and the accepted scope sets the final number. They are not a market rate for the industry.
                    </BlogText>

                    <BlogHeader id="wordpress-migration-cost">WordPress migration cost</BlogHeader>
                    <BlogText>
                        Most WordPress migrations we scope start at $1,500 for a bounded brochure site and $3,500 once
                        there is structured content or a real plugin footprint. Plugin-heavy and multi-template sites
                        run $5,000 to $10,000. What moves it is themes, templates, blocks, plugins, shortcodes, custom
                        post types, fields, users, forms, search, media and hosting behavior. WordPress can export content, but a
                        replacement must reproduce accepted functions and editorial workflows. A brochure site may fit
                        Starter; structured or plugin-heavy sites may fit Growth, Scale or custom scope. The full
                        breakdown, including why a host change is a different job entirely, is in our{" "}
                        <Link href="/blog/wordpress-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WordPress migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader id="woocommerce-migration-cost">WooCommerce migration cost</BlogHeader>
                    <BlogText>
                        WooCommerce migrations start at $5,000 and are the most likely of the seven to exceed the
                        published tiers, because commerce carries obligations a brochure site does not. WooCommerce
                        adds products, variants, pricing, inventory, customer and order records, tax, shipping,
                        payments, fraud, refunds, subscriptions and extensions. Reconcile record counts and
                        financial flows before and after migration. Before you price a rebuild, check whether you need
                        one: our{" "}
                        <Link href="/blog/woocommerce-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WooCommerce migration cost guide</Link>{" "}
                        separates moving the data from rebuilding the store, and they are not the same purchase.
                    </BlogText>

                    <BlogHeader id="webflow-migration-cost">Webflow migration cost</BlogHeader>
                    <BlogText>
                        Webflow migrations start at $1,500 and typically land at $3,500, because the export gives you
                        less than people expect and the gap is rebuild work. Webflow code export covers HTML, CSS,
                        JavaScript and assets on eligible paid Workspaces, while
                        current documentation excludes working CMS, ecommerce, User Accounts, localized content beyond
                        the primary locale, forms, search, password protection and code components. Page count must be
                        normalized into templates and systems before choosing a tier, which is the whole subject of our{" "}
                        <Link href="/blog/webflow-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Webflow migration cost guide</Link>. What Webflow
                        charges you while you stay is covered separately in{" "}
                        <Link href="/blog/webflow-true-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">what Webflow actually costs</Link>.
                    </BlogText>

                    <BlogHeader id="wix-migration-cost">Wix migration cost</BlogHeader>
                    <BlogText>
                        Wix migrations start at $1,500 and are usually the cheapest of the seven, because Wix sites are
                        smaller on average and the export gives you almost nothing, so the work is a linear content
                        rebuild rather than a data conversion. Scope depends on the editor generation, CMS collections,
                        blog, media, forms, bookings, members, stores, apps and custom code. The CMS can export collections, but that does not
                        establish a complete whole-site export. Inventory each feature and choose an extraction and
                        replacement method. Our{" "}
                        <Link href="/blog/wix-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Wix migration cost guide</Link>{" "}
                        works through the four routes people actually take, cheapest first.
                    </BlogText>

                    <BlogHeader id="squarespace-migration-cost">Squarespace migration cost</BlogHeader>
                    <BlogText>
                        Squarespace migrations start at $1,500, reach $3,500 with a blog or Commerce, and $5,000 to
                        $10,000 for a store with Member Areas or scheduling. The reason the range is wide is that
                        Squarespace&apos;s current export is partial. Store and portfolio pages, product and video
                        blocks, drafts, style settings and custom CSS are among the documented exclusions. Price the
                        design, content and systems that must be recreated separately, and see our{" "}
                        <Link href="/blog/squarespace-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Squarespace migration cost guide</Link>{" "}
                        for the redirect problem specifically, which is the line most Squarespace quotes miss.
                    </BlogText>

                    <BlogHeader id="shopify-migration-cost">Shopify and headless Shopify migration cost</BlogHeader>
                    <BlogText>
                        Headless Shopify migrations start at $5,000 and reach $10,000 or more, because the storefront is
                        only part of the job. The first decision is whether Shopify remains the commerce backend or is
                        replaced. A headless migration still
                        needs search, accounts, analytics, consent, localization, app compatibility, preview,
                        deployment and monitoring. A fully custom commerce system also assumes responsibility for
                        checkout, tax, fraud, orders and operations.
                    </BlogText>

                    <BlogHeader id="gohighlevel-migration-cost">GoHighLevel website migration cost</BlogHeader>
                    <BlogText>
                        GoHighLevel migrations start at $1,500 for a hybrid that keeps the CRM and replaces only the
                        public site, which is what most operators want, and $3,500 once there are several funnels and
                        form integrations. A hybrid keeps GoHighLevel for CRM, calendars, automation and pipelines
                        while replacing the public site. Define forms, contacts, attribution, webhooks, OAuth, failure handling and
                        ownership. Do not promise an unchanged CRM bill or uninterrupted workflow without testing the
                        accepted implementation.
                    </BlogText>

                    <BlogHeader id="roi-math">Is a migration worth it? How to build the business case</BlogHeader>
                    <BlogText>
                        A migration is worth it when the measured cost of staying exceeds the cost of moving plus the
                        cost of running the replacement, over a horizon you pick in advance. Compare current direct
                        costs, internal hours, incidents and measured limitations with migration cost, target
                        providers, maintenance, support and risk. Build low, central and high scenarios.
                        Do not multiply an assumed speed loss or promise a predetermined commercial or search outcome.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Costs that must be visible in the proposal</BlogHeader>
                    <BlogText>
                        These six belong in the proposal rather than in discovery, because each one is a decision someone has to fund. Content cleanup, vendor charges, compliance and accessibility work, your own team time, ongoing maintenance, and exiting the old platform. If a proposal is silent on one, assume it is excluded and ask what happens when it appears.
                    </BlogText>
                    <BlogList
                        items={[
                            "Tidying up the content, rewriting what needs it, replacing images nobody can find, and dealing with the records that do not fit.",
                            "What your vendors charge: the plan, the licences, what you use, and fees on payments and messages.",
                            "Fixing accessibility problems, having someone review the security, and any compliance work you are required to do.",
                            "Your own team's time: reviewing it, getting legal to approve it, learning the new system, and helping everyone adjust.",
                            "Keeping it running after launch: maintenance, monitoring, someone on call when it breaks, and upgrades.",
                            "Leaving the old platform properly: archiving it, cancelling the plan, and keeping whatever you are required to keep.",
                        ]}
                    />

                    <BlogHeader id="how-to-budget">How to budget the migration</BlogHeader>
                    <BlogText>
                        Build the number before you request quotes, so you can tell which quote is wrong. Six ordered steps: inventory, define the target and the responsibilities, agree what done means, separate one-time from recurring, write down the assumptions and exclusions, and hold contingency against identified unknowns rather than an arbitrary percentage.
                    </BlogText>
                    <ol className="my-6 list-decimal space-y-3 pl-6 leading-relaxed text-stone-700">
                        <li>List everything you have: pages, templates, content, data, integrations and user accounts.</li>
                        <li>Define target journeys, editor workflow and operating responsibilities.</li>
                        <li>Agree what &ldquo;done&rdquo; means: it works, it still ranks, everyone can use it, it is secure, and it is fast.</li>
                        <li>Separate one-time agency work from third-party and ongoing costs.</li>
                        <li>Write down what you assumed, what is not included, how changes get approved, what you are waiting on, and when each part happens.</li>
                        <li>Keep a contingency tied to identified unknowns, not an arbitrary percentage.</li>
                    </ol>

                    <BlogHeader>PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. A refund is tied to
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

                    <BlogHeader>Primary sources</BlogHeader>
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
                        <h2 className="mb-3 font-serif text-3xl">Get a platform-specific migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the actual site and map it to a tier or custom scope. Additional pages and
                            features can be discussed after the core migration is defined.
                        </p>
                        <QuoteModalButton cta="website_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
