import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Calculator, FileInput, ListChecks, Route } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { spec, asOf } from "@/data/spec-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));
const MigrationVisual = dynamicImport(() => import("@/components/blog/MigrationControlAnimation"));

const postId = "website-migration-cost-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Website Migration Cost in 2026: Prices, Scope and Timeline";
const description =
    "What it costs to move off WordPress, WooCommerce, Webflow, Wix, Squarespace, Shopify or GoHighLevel, priced from inventory, export limits, integrations and SEO.";

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
        modifiedTime: "2026-10-20",
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
            dateModified: "2026-10-20",
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
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-06",
            dateModified: "2026-10-20",
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
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "Website migration cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Website migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Website Migration Cost: <span className="italic text-cognac">Prices, Scope and Timeline</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A website migration with us starts at $1,500, at a fixed price agreed before we start. The
                            final cost comes down to what you already have and what it has to do once it lands. The
                            platform you are leaving changes how hard the export is, but the price is set by how many
                            pages and templates there are, what data has to move, what it has to connect to, and how much
                            testing the launch needs. There is no minimum project size, and the code, design files and
                            accounts are yours at the end. Use those terms to check any quote you receive.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Starting tiers are our published terms. Outside facts below link their source and show the month they were last read.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="website-migration-cost-2026" />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="website-migration-cost-2026" published="2026-05-06" readTime="13 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <BlogText>
                        Owners and developers on the platforms this page covers, quoted in their own words, with a link to each original post so you can check the context yourself.
                    </BlogText>
                    {/* 8 Oct 2026: removed quotation whose full source could not be independently rechecked. */}
                    <BlogQuote>
                        Every time you load a page or post, WP wants to retrieve info from the database. While that may have made sense in the beginning, we are long since past the point where the content on pages (and posts for that matter) don&apos;t change enough to matter. WP architecture should really have switched over to treating the site cache as the primary site, with the database being treated as the backup.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4"><strong className="text-stone-600">u/user_number_666</strong> · r/Wordpress · Apr 14, 2026 · 103 upvotes on 160-upvote thread · <a href="https://www.reddit.com/r/Wordpress/comments/1slbbht/wordpress_is_a_lie/og5b5kc/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>
                    <BlogQuote>
                        Honestly pretty basic stuff. Having multiple sized fonts and varied text formatting in one text box, changing line height on one section of one page rather than across the entire website, making sure photos stay in place and the correct size rather than getting all wonky when you change the screen size. I could go on.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4"><strong className="text-stone-600">u/WholeHuckleberry7081</strong> · r/squarespace · Apr 7, 2026 · replying in their own thread about what they wanted to change · <a href="https://www.reddit.com/r/squarespace/comments/1sec045/hate_ss_but_unsure_what_platform_to_move_to/oepxfgt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <div className="my-10">
                        <MigrationVisual />
                    </div>

                    <section id="short-answer" data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal"><HeadingEmphasis text="The short answer: what a website migration costs" /></h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            First work out which job you&apos;re buying. Moving the same site to a new host is a small
                            job that many hosting companies do when you buy a plan, often free or for a small fixed fee.
                            Moving to a different platform is a rebuild. Its price is set by how many pages, templates
                            and records have to move, how much the old platform lets you export, what the site connects
                            to, and whether your current URLs and rankings have to survive. Our own migrations are priced
                            on those inputs, at a fixed price agreed before we start:
                        </p>
                        <BlogList
                            items={[
                                "Starter, from $1,500: up to 7 pages, for a small, well-defined migration.",
                                "Growth, from $3,500: 8 to 20 pages, a content model built around your own collections, and a full migration with a redirect map.",
                                "Scale, from $5,000: more than 20 pages, a large catalogue, subscriptions or custom commerce logic, or more than one language.",
                                "Anything larger or unusual is quoted after a scoping call, and the written proposal sets the price before work starts.",
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
                        No platform hands you a complete, portable site. What each one exports sets the floor on what a migration costs, because whatever the export misses has to be rebuilt by hand. The acceptance-risk column is where sign-off usually fails, and it&apos;s different for every source platform. The last column links the full cost guide for each one.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[1300px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Source</th><th className="p-4">Export or extraction</th><th className="p-4">Common replacement work</th><th className="p-4">Key acceptance risk</th><th className="p-4">Our starting point</th><th className="p-4">Full cost guide</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">WordPress</td><td className="p-4">XML, database, files, APIs or controlled extraction</td><td className="p-4">Theme, plugins, blocks, forms, search, users and hosting behavior</td><td className="p-4">URL, content, media, shortcode and plugin-equivalent coverage</td><td className="p-4">Starter, from $1,500, for a small site on a few templates</td><td className="p-4"><Link href="/blog/wordpress-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WordPress migration cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">WooCommerce</td><td className="p-4">Products CSV plus orders, customers and extension-specific data</td><td className="p-4">Checkout, tax, fraud, inventory, fulfillment, accounts and subscriptions</td><td className="p-4">Financial and order-flow reconciliation</td><td className="p-4">Starter, from $1,500, for a small catalogue; subscriptions or a large catalogue mean Scale, from $5,000</td><td className="p-4"><Link href="/blog/woocommerce-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WooCommerce migration cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">Webflow</td><td className="p-4">Code ZIP plus separate CMS or ecommerce CSV exports</td><td className="p-4">CMS, forms, search, localization, ecommerce, users and code components</td><td className="p-4">Feature gaps beyond exported HTML, CSS, JavaScript and assets</td><td className="p-4">Starter, from $1,500</td><td className="p-4"><Link href="/blog/webflow-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Webflow migration cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">Wix</td><td className="p-4">CMS exports and other feature-specific exports or APIs where available</td><td className="p-4">Pages, media, blog, forms, bookings, members, apps and commerce</td><td className="p-4">Complete feature and content inventory before extraction</td><td className="p-4">Starter, from $1,500</td><td className="p-4"><Link href="/blog/wix-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Wix migration cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">Squarespace</td><td className="p-4">Partial WordPress XML, a separate product .csv, plus manual work</td><td className="p-4">Excluded layouts, store pages, portfolio, product images, media, forms and styles</td><td className="p-4">Export exclusions and design recreation</td><td className="p-4">Starter, from $1,500</td><td className="p-4"><Link href="/blog/squarespace-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Squarespace migration cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">Shopify</td><td className="p-4">Product and other admin exports plus APIs</td><td className="p-4">Storefront, checkout boundary, accounts, search, apps, analytics and consent</td><td className="p-4">Commerce continuity and app compatibility</td><td className="p-4">Headless builds start at Scale, from $5,000</td><td className="p-4"><Link href="/blog/shopify-headless" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Headless Shopify cost</Link></td></tr>
                                <tr><td className="p-4 font-bold">GoHighLevel</td><td className="p-4">Documented APIs, exports and controlled recreation</td><td className="p-4">Keep CRM or replace it; forms, funnels, calendars, automation and attribution</td><td className="p-4">Lead capture and workflow continuity</td><td className="p-4">Starter, from $1,500, for a site that keeps the CRM</td><td className="p-4"><Link href="/blog/gohighlevel-keep-crm-replace-website" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Keeping GoHighLevel, replacing the site</Link></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Two of those rows, in the platforms&apos; own words, read in {asOf("squarespace-export-scope")}:{" "}
                        <a href={spec("squarespace-export-scope").source} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4">Squarespace&apos;s export guide</a>{" "}
                        describes {spec("squarespace-export-scope").value}, and{" "}
                        <a href={spec("webflow-code-export-scope").source} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4">Webflow&apos;s code export guide</a>{" "}
                        describes {spec("webflow-code-export-scope").value}; {spec("webflow-code-export-scope").qualifier}.
                    </BlogText>
                    {/* 20 Oct 2026: an illustrative scoping example built from the Squarespace export
                        facts above and our published Growth tier. The site is invented and labelled. */}
                    <BlogHeader id="scoping-example">A worked example: scoping a 12-page Squarespace site</BlogHeader>
                    <InsightBox variant="info" label="Illustrative, not a real client">
                        An invented 12-page Squarespace site: a home page, six service pages, a blog with 40 posts,
                        a portfolio page, a contact form and a small store with eight products. The owner wants a
                        site their team can edit, and to keep the blog&apos;s search traffic.
                    </InsightBox>
                    <BlogList
                        items={[
                            "Comes across in the export: the blog posts and the basic text of standard pages. They still need checking and reformatting once they land in the new editor.",
                            "Has to be rebuilt by hand: the portfolio page and the store pages, because Squarespace's export guide lists portfolio and store pages among the content that doesn't export, plus the layouts and the form.",
                            `Can come across separately: the eight product records. Squarespace's product export guide, read in ${asOf("squarespace-product-csv-export")}, covers ${spec("squarespace-product-csv-export").value}. The images, alt text and reviews are moved by hand.`,
                            "Has to be planned whatever the platform: a redirect for every old URL, especially the 40 blog posts, and a check that each page keeps its title and description.",
                            "Where it lands with us: 12 pages and a content model for the blog put it in Growth, from $3,500, which covers 8 to 20 pages and a full migration with a redirect map. Eight products don't settle the store's scope on their own: checkout, shipping, tax and any connected services are scoped on the call, and a large catalogue, subscriptions or custom commerce logic would move it to Scale.",
                        ]}
                    />
                    <InsightBox variant="info" label="Why we publish our tiers and not a market range">
                        We do not publish a market median or a cross-agency price range for these migrations. Ranges
                        like that mix unlike project types, scopes, regions and levels of finish, so a figure stated
                        without a defined sample and scope definition is not something a buyer can plan against. The
                        only prices we stand behind are our own, and your written quote sets the
                        final one.
                    </InsightBox>

                    <BlogText>
                        Our own tiers are at the top of this page. Which one a migration lands in is driven by page count,
                        content volume, custom functionality and integrations rather than by which platform you are
                        leaving, so the same source platform can land in any of the three. The price is fixed for the scope
                        written into the accepted project terms, and every build carries a 90+ <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> handover target
                        on phone and desktop for the pages named in your quote, tested three times.
                        Current tiers are always on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>;
                        if this article and that page ever disagree, the pricing page is correct.
                    </BlogText>

                    <BlogHeader id="host-vs-platform">Are you changing hosts, or changing platforms?</BlogHeader>

                    <div data-speakable="true">
                        <BlogText>
                            These are two different jobs. Moving a WordPress site from one host to another keeps the
                            same software, the same theme, the same plugins and the same database. Nothing is rebuilt.
                            Many hosting companies will do that transfer for you when you buy a plan, so check what
                            your new host includes first. Read in{" "}
                            {asOf("hostinger-website-migration")},{" "}
                            <a href={spec("hostinger-website-migration").source} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4">Hostinger</a>{" "}
                            advertised migration as {spec("hostinger-website-migration").value}, and{" "}
                            <a href={spec("kinsta-wordpress-migration").source} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4">Kinsta</a>{" "}
                            as {spec("kinsta-wordpress-migration").value}. <strong>If the host&apos;s included move covers
                            your site, use it, and don&apos;t pay platform-migration prices for a host change.</strong>
                        </BlogText>
                        <BlogText>
                            When the included move doesn&apos;t cover it, or the site runs a store, business email or
                            connected services, we quote a host move separately from any rebuild. That work is the
                            backups, a compatibility check on the new host, DNS and email coordination, checks at
                            cutover, and a rollback plan if something breaks.
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

                    <BlogHeader id="what-changes-the-number">What drives website migration cost on every platform</BlogHeader>

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
                                "Whether your web addresses have to survive. If the site has search traffic worth keeping, someone has to list every live address, decide where each one goes, forward them, and check them after launch. On an established site this is often the single largest line item, and it is the one most commonly missing from a cheap quote.",
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
                            the link forwarding is not cheaper than one that includes it. It just moves the cost to later, when it is worse.
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
                        broken into listing what you have, building, moving content, testing and launching, with what each stage waits on, rather
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
                        The platform summaries below give our starting point for each source platform and send you to
                        the full guide for it. The figures are PandaCodeGen&apos;s own published tiers, listed in full on
                        the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>,
                        and the accepted scope sets the final number. They are not a market rate for the industry.
                    </BlogText>

                    <BlogHeader id="by-platform">Migration cost by platform</BlogHeader>
                    <BlogText>
                        The method above applies to every platform. What changes from one platform to the next is how
                        much the export gives you and which features have to be rebuilt by hand. Each summary below
                        names that and our starting point, and the full guide for each platform has the inventory,
                        the tier table and the redirect work.
                    </BlogText>

                    <h3 id="wordpress-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">WordPress</h3>
                    <BlogText>
                        WordPress exposes its database and a REST API, so content extraction can be scripted. The cost
                        sits in what the export can&apos;t carry: page-builder layouts, plugins, shortcodes, custom
                        fields, forms and search all have to be rebuilt or replaced. A small site on a few templates
                        starts at Starter, from $1,500; structured content or a heavy plugin footprint moves it up a tier.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/wordpress-migration-cost" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            The full WordPress migration cost guide, including why a host change is a different job <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="woocommerce-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">WooCommerce</h3>
                    <BlogText>
                        A store carries obligations a brochure site doesn&apos;t: products and variants, customer and
                        order records, tax, shipping, payments, refunds and extensions, all of which have to reconcile
                        before and after the move. A small, bounded catalogue can start at Starter, from $1,500.
                        Subscriptions, a large catalogue or custom commerce logic put it in Scale, from $5,000, or a
                        custom quote.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/woocommerce-migration-cost" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            The WooCommerce migration cost guide: moving the data versus rebuilding the store <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="webflow-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">Webflow</h3>
                    <BlogText>
                        Webflow&apos;s code export gives you the front end, not a working site: CMS, ecommerce, forms,
                        search and localized content need to be rebuilt or moved separately, and{" "}
                        <Link href="/blog/webflow-user-accounts-sunset-date-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">User Accounts ended in January 2026</Link>
                        , so a members area moves to a separate provider. Page count has to be turned
                        into templates and systems before a tier means anything. Small, well-defined migrations start at
                        Starter, from $1,500.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/webflow-migration-cost" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            The Webflow migration cost guide, with what the export leaves out <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="wix-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">Wix</h3>
                    <BlogText>
                        Wix lets you export some data separately, such as CMS collections, but not the site itself, so
                        most of the work is rebuilding pages and features from an inventory. Bookings, members,
                        stores, apps and custom code each need their own decision. A small marketing site starts at
                        Starter, from $1,500.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/wix-migration-cost" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            The Wix migration cost guide and the four routes people take, cheapest first <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="squarespace-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">Squarespace</h3>
                    <BlogText>
                        Squarespace&apos;s export is partial: store and portfolio pages, product and video blocks,
                        drafts, style settings and custom CSS are among the documented exclusions, so the design and
                        those systems are recreated rather than moved. A small presentation site starts at Starter,
                        from $1,500. If search is your reason for leaving, read{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">whether Squarespace is really bad for SEO</Link>{" "}
                        before you price the move.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/squarespace-migration-cost" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            The Squarespace migration cost guide, including the redirect line most quotes miss <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="shopify-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">Shopify and headless Shopify</h3>
                    <BlogText>
                        The first decision is whether Shopify stays as the commerce backend. A headless storefront still
                        needs search, accounts, analytics, consent, app compatibility, preview and monitoring rebuilt
                        around it. Replacing Shopify entirely also makes you responsible for checkout, tax, fraud,
                        orders and operations. Our headless builds start at Scale, from $5,000.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/shopify-headless" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            What headless Shopify costs, line by line <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>
                    <h3 id="gohighlevel-migration-cost" className="mb-3 mt-8 text-xl font-bold text-charcoal">GoHighLevel</h3>
                    <BlogText>
                        Most operators keep GoHighLevel for the CRM, calendars, automation and pipelines and replace
                        only the public site. The work is in the joins: forms, contacts, attribution, webhooks, failure
                        handling and who owns each account. Don&apos;t accept a promise of an unchanged CRM bill or an
                        uninterrupted workflow that hasn&apos;t been tested. A site that keeps the CRM starts at
                        Starter, from $1,500. If speed is the reason you want to move, check{" "}
                        <Link href="/blog/gohighlevel-website-speed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">what can be fixed inside GoHighLevel</Link>{" "}
                        first.
                    </BlogText>
                    <p className="mb-8 mt-3">
                        <Link href="/blog/gohighlevel-keep-crm-replace-website" className="inline-flex items-center gap-2 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            How to keep GoHighLevel and replace only the website <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </p>

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
                        includes 15 calendar days of launch defect support; Growth and Scale include 30. Ownership,
                        licenses and accounts follow the accepted project terms.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} showHeading={false} />
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
                            Ask us about your site <ArrowRight className="h-4 w-4" />
                        </QuoteModalButton>
                    </section>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
