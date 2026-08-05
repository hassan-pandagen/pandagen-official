import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Database, FileOutput, Route, Scale } from "lucide-react";
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
const ExportLockAnimation = dynamicImport(() => import("@/components/blog/ExportLockAnimation"));

const postId = "wix-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Wix Migration Cost 2026: What Leaving Wix Costs";
const description =
    "What it costs to move OFF Wix, not onto it. Price the migration from routes, templates, CMS, products, orders, contacts, media, apps, SEO controls, acceptance and cutover using current Wix export documentation.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Wix migration cost",
        "migrate Wix website",
        "move Wix to custom website",
        "Wix export limitations",
        "Wix to Next.js migration",
        "how much does it cost to migrate off Wix",
        "can you export your Wix website",
        "migrate off Wix without losing SEO",
        "cost to leave Wix",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-03",
        modifiedTime: "2026-07-31",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wix-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Wix CMS overview", url: "https://support.wix.com/en/article/cms-content-management-system-an-overview" },
    { name: "Wix product export", url: "https://support.wix.com/en/article/wix-stores-exporting-your-product-list" },
    { name: "Wix order export", url: "https://support.wix.com/en/article/exporting-orders-3126323" },
    { name: "Wix contacts export", url: "https://support.wix.com/en/article/wix-contacts-exporting-your-contacts" },
    { name: "Wix site transfer", url: "https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account" },
    { name: "Wix Core Web Vitals", url: "https://support.wix.com/en/article/site-performance-about-core-web-vitals" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/wix-migration-cost"),
            datePublished: "2026-07-03",
            dateModified: "2026-07-31",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Wix", "Website migration", "Content management systems", "Technical SEO", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Wix migration",
            inLanguage: "en-US",
            wordCount: 1800,
            timeRequired: "PT9M",
            about: [
                { "@type": "Thing", "name": "Wix", "sameAs": ["https://www.wix.com/", "https://en.wikipedia.org/wiki/Wix.com"] },
                { "@type": "Thing", name: "Website Migration" },
                { "@type": "Thing", "name": "Next.js", "sameAs": ["https://nextjs.org/", "https://en.wikipedia.org/wiki/Next.js"] },
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
                { "@type": "ListItem", position: 3, name: "Wix migration cost", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-07-03",
            dateModified: "2026-07-31",
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

export default function WixMigrationCostPage() {
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
                            { label: "Wix migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Wix migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Wix Migration Cost: <span className="italic text-cognac">Scope the Real Move</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A Wix migration is a rebuild rather than a transfer, and that one fact sets the price. Wix
                            lets you export your data, but not the site itself, so the design, the page layouts and the
                            page-level SEO settings are recreated by hand on the other side. Our own tiers start at
                            $1,500 and run past $10,000. Page count on its own is a poor predictor of where you land.
                            What actually moves the number is how many unique templates, data domains, apps and
                            workflows have to come with you.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current Wix and Google documentation on July 31, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Jul 3, 2026" readTime="9 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <div className="my-10">
                        <ExportLockAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.",
                                "Those are our own anchors, not Wix migration market averages.",
                                "Wix documents separate export paths for CMS collections, contacts, products and orders rather than one complete portable site package.",
                                "Final price, schedule, ownership, cutover and remedies belong in the signed scope.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Route, title: "Routes", body: "Pages, dynamic URLs, status and redirect disposition." },
                            { icon: Database, title: "Data", body: "CMS, contacts, products, orders and app records." },
                            { icon: FileOutput, title: "Exports", body: "Source-specific files, limits and validation." },
                            { icon: Scale, title: "Systems", body: "Forms, commerce, booking, members and integrations." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="price">How much does a Wix migration cost?</BlogHeader>
                    <BlogText>
                        Our planning tiers are $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, and those are our own anchors rather than Wix migration market averages. There is no page-count formula behind them. Five pages with booking, payments, automations and member data can require more migration work than many static pages, so price unique templates, states, data and workflows alongside page count.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">PandaCodeGen tier</th><th className="p-4">Starting point</th><th className="p-4">Potential fit</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Starter</td><td className="p-4">$1,500</td><td className="p-4">Small, bounded marketing site with limited data and integrations</td></tr>
                                <tr><td className="p-4 font-bold">Growth</td><td className="p-4">$3,500</td><td className="p-4">More templates, structured content, forms and search safeguards</td></tr>
                                <tr><td className="p-4 font-bold">Scale</td><td className="p-4">$5,000 to $10,000</td><td className="p-4">Larger content, commerce, apps, integrations or governance</td></tr>
                                <tr><td className="p-4 font-bold">Custom</td><td className="p-4">Scoped separately</td><td className="p-4">Complex commerce, membership, booking, regulated data or applications</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <InsightBox variant="warning" label="No page-count formula">
                        Five pages with booking, payments, automations and member data can require more migration work
                        than many static pages. Price unique templates, states, data and workflows alongside page count.
                    </InsightBox>
                    <BlogText>
                        The tiers above and what sits inside each of them are listed on our{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={inlineLinkClass}>what a website costs to build</Link>{" "}
                        works through the same scope questions outside a migration context.
                    </BlogText>

                    <BlogHeader id="methods">The four ways people actually do this, cheapest first</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Published Wix migration costs disagree so wildly because they average four different jobs.
                            <strong> Doing it yourself is $0 plus your own hours</strong>, and for a small static site
                            that is genuinely the right answer. <strong>An automated migration tool runs roughly $50 to
                            $500</strong> and moves your content: posts, products, customers. <strong>A freelancer is
                            usually four figures</strong> and gets you a rebuilt site rather than transferred rows. An
                            agency build is a different product again, and that is what our tiers below price. Pick the
                            cheapest one that actually covers what you need, because paying agency prices for a data
                            transfer is the most common way to overspend here.
                        </BlogText>
                    </div>
                    <BlogText>
                        One thing is true of all four and it is the reason none of them is a copy-paste. Wix does not
                        let you export its design or its underlying code, so the visual side is rebuilt on every route
                        no matter which option you choose. An automated tool that moves a thousand blog posts flawlessly
                        still leaves you with a thousand unstyled blog posts. That is the honest boundary between the
                        cheap tiers and the expensive ones, and it is a boundary about design and templates rather than
                        about content volume.
                    </BlogText>

                    <BlogHeader id="export">What can you export from Wix?</BlogHeader>
                    <BlogText>
                        Wix documents several separate export paths rather than one complete site package. Checked
                        against Wix&apos;s current support documentation on July 31, 2026:
                    </BlogText>
                    <BlogList
                        items={[
                            "Wix CMS collections can be exported as CSV files; verify field types, references, slugs and media values.",
                            "Wix Contacts can be exported as CSV, with current field and format behavior documented by Wix.",
                            "Wix Stores can export physical products to CSV; Wix currently says digital-product export is unsupported and limits each product CSV to 5,000 rows.",
                            "Wix provides order CSV export for supported business products, with selectable columns and row formats.",
                            "Wix can transfer a premium site, eligible plan, domain, business email and premium apps to another Wix account under its current rules.",
                        ]}
                    />
                    <BlogText>
                        These exports are useful, but they are not proof that the complete design, page behavior, app
                        configuration, member access, automation, analytics or integration logic can be imported into
                        any target unchanged. Build a source-to-target mapping and validate record counts and samples.
                    </BlogText>
                    <BlogText>
                        This is the part worth sitting with, because it is the answer to what you are actually paying
                        for. Your products, contacts, orders and CMS entries come out as files. Your site does not. The
                        layouts, the design, the way pages behave and the SEO settings you configured page by page stay
                        where they are, in a format only Wix reads. Nobody imports those anywhere. Somebody rebuilds
                        them. A quote for a Wix migration is a quote for that rebuild, which is why it does not look
                        like the price of moving a WordPress site, where an importer does a meaningful share of the job.
                    </BlogText>
                    <InsightBox variant="tip" label="What actually eats the hours">
                        We are finishing one of these now. Obare, a magazine that was published on Wix, is being
                        rebuilt on Next.js with Sanity as the editor, and it runs eight content categories across
                        culture, travel, beauty, mental health, music, movement, editorial and self improvement. It is
                        in its final stages rather than launched, so treat this as a work note rather than a case
                        study. The useful part is what the work turned out to be. The number of pages was never the
                        problem. Wix lets you place elements freely on a canvas, which is exactly why it is pleasant to
                        write in, and it means two pages that look like they share a layout frequently share nothing
                        underneath. You keep opening pages that appear templated and finding each one is bespoke. So an
                        estimate that starts as a page count becomes a count of genuinely distinct layouts, plus the
                        work of deciding which of them should survive into a real template system. That is the honest
                        way to price a Wix rebuild, and it is worth asking whoever quotes you whether they opened your
                        pages or counted your sitemap.
                    </InsightBox>

                    <InsightBox variant="info" label="The upside of having to rebuild">
                        Since the layouts have to be recreated anyway, you are not obliged to recreate them faithfully.
                        Most Wix sites carry pages nobody visits and sections that made sense three years ago. A
                        migration is the one moment when deleting them costs nothing extra, so decide what is worth
                        moving before anyone prices moving it.
                    </InsightBox>
                    <BlogText>
                        The mapping method itself is platform-neutral. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={inlineLinkClass}>website migration cost guide</Link>{" "}
                        sets out the same exercise across other builders and content systems.
                    </BlogText>

                    <BlogHeader id="scope">The migration scope checklist</BlogHeader>
                    <BlogText>
                        Eight domains have to be inventoried before anyone can price this, because a Wix export gives you your data rather than your site. Public routes and their metadata, templates and states, CMS structure, contacts and consent, commerce records, bookings and memberships, apps and Velo code, and the domain and legal records. Anything not on the list when the quote is written becomes a change order later.
                    </BlogText>
                    <BlogList
                        items={[
                            "Your public URLs and dynamic routes, with their titles, descriptions, canonicals and structured data.",
                            "Unique page templates, responsive behavior, components, forms and error states.",
                            "CMS fields and how they relate, the media, drafts, who can edit what, and how publishing works.",
                            "Contacts, consent state, submissions, email and CRM automation.",
                            "Products and variants, stock, orders, customers, discounts, tax, shipping and payments.",
                            "Bookings, events, memberships, gated content and account journeys.",
                            "Apps, Velo code, webhooks, APIs, analytics, pixels and third-party services.",
                            "Domain, DNS, email, legal records, retention, archive and cancellation.",
                        ]}
                    />
                    <BlogText>
                        If the decision to move is not settled yet, work through{" "}
                        <Link href="/blog/wix-vs-custom-website" className={inlineLinkClass}>Wix compared with a custom website</Link>{" "}
                        first. That comparison covers the requirements that decide whether an inventory is worth pricing at all.
                    </BlogText>

                    <BlogHeader id="drivers">What actually moves the number</BlogHeader>
                    <BlogText>
                        Roughly in order of how much they matter:
                    </BlogText>
                    <BlogList
                        items={[
                            "Unique templates, not page count. Forty blog posts sharing one layout is one template. Six pages that each look different is six. The second costs more than the first.",
                            "Content that has to be recreated by hand. Anything the exports do not carry is somebody reading the old page and rebuilding it, and that scales with how much of it there is.",
                            "Commerce. Products and variants, stock, tax, shipping, payments and the order history you need to keep. This is usually what moves a project from one tier to the next.",
                            "Integrations. Each CRM, booking tool, email platform or custom form is a separate connection to rebuild and test. A couple are minor. A deeply wired stack is not.",
                        ]}
                    />
                    <BlogText>
                        Things that rarely move it much: a handful of contact forms, ordinary on-page SEO, which is
                        standard work rather than an extra, and the domain, which is cheap and separate. If a quote
                        prices those as headline items, ask what is actually in them.
                    </BlogText>

                    <BlogHeader id="quotes-vary">Why quotes vary by more than ten times</BlogHeader>
                    <BlogText>
                        You will see the same job offered for tens of dollars and for five figures. Usually they are not
                        the same job. At the cheap end the work is moving your text and images into a ready-made
                        template, which is a real service and a different one, and it frequently leaves out the URL
                        mapping that protects the search traffic you already have. That omission does not show up on
                        the invoice. It shows up six weeks later in Search Console. When you compare two quotes, compare
                        what each one says about redirects before you compare the totals.
                    </BlogText>

                    <BlogHeader id="seo">How do you reduce Wix migration SEO risk?</BlogHeader>
                    <BlogText>
                        Keep useful URLs stable where practical. Give every old URL a documented disposition and use a
                        permanent redirect only to a relevant successor. Preserve approved rendered content, titles,
                        canonicals, status codes, internal links and structured data. Validate sitemaps, analytics and
                        search controls before cutover, then monitor Search Console. Google and other search systems
                        control crawling, indexing, rankings and timing, so continuity is not guaranteed.
                    </BlogText>
                    <BlogText>
                        We have written separately on{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>{" "}
                        and on{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>who controls the site you publish on</Link>,
                        both of which shape how much redirect and access work a scope needs.
                    </BlogText>

                    <BlogHeader id="performance">Does moving from Wix guarantee a faster site?</BlogHeader>
                    <BlogText>
                        No. Wix documents its Site Speed dashboard, real-visitor Core Web Vitals and optimization steps
                        for fonts, media, layout, apps and third-party code. A custom site can also be slow. Compare the
                        same representative routes using field data where available and repeated lab tests under
                        recorded device, network, consent and page-state conditions.
                    </BlogText>
                    <BlogText>
                        For the measurement itself, start with{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>,
                        then use{" "}
                        <Link href="/blog/wix-too-slow" className={inlineLinkClass}>our diagnostic sequence for a slow Wix site</Link>{" "}
                        and the general{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>method for speeding up a website</Link>{" "}
                        before treating speed as a reason to move.
                    </BlogText>

                    <BlogHeader id="ownership">What ownership changes?</BlogHeader>
                    <BlogText>
                        Wix supports transferring a site within Wix under its current conditions. A migration to
                        another stack needs separate written terms for the new repository, design files, data, domain,
                        provider accounts, custom code, reusable tools and third-party licenses. At PandaCodeGen, client
                        content remains client property; custom deliverables transfer after full payment under the
                        signed agreement; and reusable internal tools and pre-existing code remain ours.
                    </BlogText>

                    <BlogHeader id="domain">What happens to the domain, email and DNS?</BlogHeader>
                    <BlogText>
                        The domain and the mailboxes come with the business, but they are separate work from the
                        rebuild and they run on someone else&apos;s clock. If the domain is registered through Wix, moving
                        it to another registrar means unlocking it, retrieving the authorization code and completing the
                        transfer under current registrar and registry rules, including any lock period that applies
                        after a recent registration or transfer. Start that early rather than on cutover day.
                    </BlogText>
                    <BlogList
                        items={[
                            "Confirm who controls the registrar account, the DNS zone and the email tenancy before a cutover date is agreed.",
                            "Record every existing DNS record, including MX, SPF, DKIM, DMARC and verification TXT records, and recreate them on the new provider before the switch.",
                            "Leave mail routing untouched unless mail is also moving; a website cutover should never interrupt email.",
                            "Decide whether the domain stays where it is with DNS repointed, which is often the lower-risk route, or is transferred outright.",
                            "Plan certificate issuance on the new host so HTTPS is valid the moment traffic moves.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Redirects follow the DNS">
                        Redirects configured inside Wix only run while Wix is answering for the domain. Once DNS points
                        at the new host, every redirect has to exist there instead, which makes the redirect map a
                        launch dependency rather than a post-launch task.
                    </InsightBox>

                    <BlogHeader id="timeline">How long does a Wix migration take?</BlogHeader>
                    <BlogText>
                        Most Wix migrations we scope land somewhere between two and six weeks, and where a given project
                        sits inside that is set by the same things that set the price:
                    </BlogText>
                    <BlogList
                        items={[
                            "A small marketing site with few templates and little data: usually the short end.",
                            "A content-heavy or blog-heavy site: longer, because recreation is the long pole.",
                            "Commerce, memberships or bookings: usually the long end, and sometimes past it.",
                        ]}
                    />
                    <BlogText>
                        Treat that as a planning range rather than a commitment. What a schedule should actually be
                        built on is phase exit evidence, plus the client dependencies, the launch window, the rollback
                        triggers and how much interruption is acceptable, all written into the plan. The phases
                        themselves are described in{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={inlineLinkClass}>how long a custom website takes to build</Link>.
                        Your existing site keeps running throughout, because the rebuild happens somewhere else and only
                        the cutover is visible to customers.
                    </BlogText>

                    <BlogHeader id="quote">How to compare Wix migration quotes</BlogHeader>
                    <BlogText>
                        The higher quote is not automatically the padded one. Normalize the inventory first, then six checks make two quotes genuinely comparable: which exports and manual steps each provider assumes, what evidence they will produce, which vendor costs sit outside the fee, and who owns accounts, rollback and support afterwards.
                    </BlogText>
                    <BlogList
                        items={[
                            "Normalize the route, template, content, data and feature inventory.",
                            "Identify which Wix exports, APIs or manual steps each provider assumes.",
                            "Compare accessibility, privacy, security, analytics, SEO and performance evidence.",
                            "Expose provider plans, licenses, transaction fees and internal work.",
                            "Check acceptance, change control, ownership, accounts, launch, rollback and support.",
                            "Do not call a higher quote padded until the statements of work are comparable.",
                        ]}
                    />
                    <BlogText>
                        It also helps to look at what a finished scope produces. Our{" "}
                        <Link href="/work" className={inlineLinkClass}>project work</Link>{" "}
                        shows the kinds of builds behind these tiers, and the{" "}
                        <Link href="/work/mycustompatches" className={inlineLinkClass}>MyCustomPatches case study</Link>{" "}
                        sets out what was included in one accepted scope.
                    </BlogText>

                    <BlogHeader id="hidden-costs">Commonly missed line items</BlogHeader>
                    <BlogText>
                        These are the lines that arrive after signing rather than in the quote. Content cleanup and manual page recreation is the biggest, because a Wix export carries data and not layout. The rest are app data no CSV covers, customer identity and consent, recurring provider costs, internal review and training time, and the archive and cancellation work at the far end.
                    </BlogText>
                    <BlogList
                        items={[
                            "Content cleanup, missing assets and manual page recreation.",
                            "App-specific data that is not covered by a core CSV export.",
                            "Customer identity, password reset, consent and communication.",
                            "Recurring provider, email, database, search and monitoring costs.",
                            "Internal review, legal, training and operational handoff.",
                            "Archive, retention, cancellation and post-launch maintenance.",
                        ]}
                    />

                    <BlogHeader id="terms">PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to
                        failure to deliver the signed scope, not a change of preference after starting. Starter includes
                        15 business days of launch defect support and Growth and Scale carry 30, where the accepted terms include it. Any 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>
                        target applies only to named representative pages, mobile and desktop profiles, the recorded
                        environment, three passing runs per page and profile, exclusions and remedy.
                    </BlogText>
                    <InsightBox variant="info" label="Why no example project is costed here">
                        We publish a project&apos;s price, delivery time, traffic or performance figures only when we can
                        show the dated record behind them and have the owner&apos;s permission to do so. Anything short of
                        that is an anecdote wearing a number. Ask any vendor quoting you a comparable project for the same
                        thing: what was the scope, when was it measured, and may we speak to that client.
                    </InsightBox>
                    <BlogText>
                        What the move covers end to end, from rebuild and redirect map through to the domain change, is
                        described on our{" "}
                        <Link href="/services/wix" className={inlineLinkClass}>Wix migration service page</Link>.
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
                        <h2 className="mb-3 font-serif text-3xl">Get a Wix migration inventory and plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map the pages, data, apps and workflows before recommending a target or price.
                        </p>
                        <QuoteModalButton cta="wix_migration_cost_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
