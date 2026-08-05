import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, FileInput, ReceiptText, SearchCheck } from "lucide-react";
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

const postId = "squarespace-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Squarespace Migration Cost 2026: What Leaving Costs";
const description =
    "What it costs to move OFF Squarespace, not onto it. Price the migration from a complete inventory of URLs, content, commerce, scheduling, members, forms, integrations, SEO controls, testing and operating needs.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Squarespace migration cost",
        "migrate from Squarespace",
        "Squarespace to Next.js",
        "Squarespace redesign cost",
        "Squarespace SEO migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-09",
        modifiedTime: "2026-08-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/squarespace-migration-cost")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    
    {
        name: "Squarespace: exporting your site",
        url: "https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site",
    },
    {
        name: "Squarespace: URL mappings",
        url: "https://support.squarespace.com/hc/en-us/articles/205815308-URL-mappings",
    },
    {
        name: "Squarespace: transaction and processing fees",
        url: "https://support.squarespace.com/hc/en-us/articles/27853679334157-Transaction-fees-and-payment-processing-rates",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/squarespace-migration-cost"),
            description,
            datePublished: "2026-04-09",
            dateModified: "2026-08-06T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Squarespace", "Website migration", "Technical SEO", "Content management systems"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Squarespace migration",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Squarespace", sameAs: ["https://en.wikipedia.org/wiki/Squarespace"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
                { "@type": "Thing", name: "Website builder", sameAs: ["https://en.wikipedia.org/wiki/Website_builder"] },
            ],
            wordCount: 1451,
            timeRequired: "PT7M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/squarespace-migration-cost#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Squarespace migration cost", item: "https://www.pandacodegen.com/blog/squarespace-migration-cost" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/squarespace-migration-cost#webpage",
            url: "https://www.pandacodegen.com/blog/squarespace-migration-cost",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/squarespace-migration-cost#breadcrumb" },
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

const inlineLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function SquarespaceMigrationCostPage() {
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
                            { label: "Squarespace migration cost", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Squarespace migration</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Squarespace Migration Cost in 2026: <span className="italic text-cognac">Scope Before Price</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            How many pages you have is only the first thing that matters. The cost depends on
                            how many kinds of content there are, how much of the design has to be rebuilt,
                            whether you sell or take bookings, whether you have members, what your forms do,
                            what has to keep talking to what, how much work protecting your search traffic
                            takes, how much data has to move, how you sign it off, and how you intend to run
                            the site afterwards.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Squarespace and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 9, 2026" readTime="5 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">PandaCodeGen planning tiers</h2>
                        <BlogList
                            items={[
                                "Starter from $1,500 for a small, well-defined presentation-site scope.",
                                "Growth from $3,500 for a broader marketing site with agreed CMS and integration needs.",
                                "Scale from $5,000 to $10,000 for larger, commerce, multi-system or complex migration scope, with anything beyond that scoped separately.",
                                "The accepted statement of work controls the final price, deliverables and exclusions.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: FileInput, title: "Inventory", body: "URLs, content, assets, accounts and integrations." },
                            { icon: Boxes, title: "Rebuild", body: "Templates, CMS, features, data and responsive states." },
                            { icon: SearchCheck, title: "Preserve", body: "SEO signals, redirects, analytics and consent." },
                            { icon: ReceiptText, title: "Operate", body: "Hosting, vendors, support, maintenance and change." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Inventory what Squarespace will not export</BlogHeader>
                    <BlogText>
                        Squarespace exports certain content to a WordPress-format XML file, not a complete portable
                        copy of the site. Its current guidance lists layout pages, one blog and selected blocks as
                        exportable while excluding store pages, portfolio and other page types, product and video
                        blocks, drafts, style settings and custom CSS.
                    </BlogText>
                    <BlogList
                        items={[
                            "Crawl every public URL and retain status, canonical, metadata, headings and structured data.",
                            "Inventory unlinked, draft, gated and localized content through authorized account access.",
                            "Export the available XML and independently capture excluded pages, products, media and settings.",
                            "Write down what depends on forms, past submissions, newsletters, members, scheduling, the store and payments.",
                            "Confirm who owns the domain, the DNS, email, analytics, ad accounts and every third-party login.",
                        ]}
                    />
                    <InsightBox variant="warning" label="Export limitation">
                        Do not quote a migration from the XML file alone. The export is useful evidence, but it is not
                        a complete backup or a one-click import into a custom stack.
                    </InsightBox>
                    <BlogText>
                        The same inventory-before-price sequence applies on every builder. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={inlineLinkClass}>website migration cost guide</Link>{" "}
                        runs it across platforms, and{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className={inlineLinkClass}>Squarespace compared with a custom website</Link>{" "}
                        covers the requirements that decide whether to move at all.
                    </BlogText>

                    <BlogHeader>2. Price page systems, not raw page count</BlogHeader>
                    <BlogText>
                        Five drivers set the price, and each one has to be evidenced rather than asserted. Templates are priced from an annotated route and component inventory, content from a field map with an exception count, features from accepted requirements and workflow tests, integrations from a data-flow and responsibility map, and quality from an acceptance matrix with a named test profile. The third column is the point of the table.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Scope driver</th><th className="p-4">Questions</th><th className="p-4">Evidence</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Templates</td><td className="p-4">How many genuinely different page and component systems?</td><td className="p-4">Annotated route and component inventory</td></tr>
                                <tr><td className="p-4 font-bold">Content</td><td className="p-4">How much can be transformed versus manually rebuilt?</td><td className="p-4">Field map, sample and exception count</td></tr>
                                <tr><td className="p-4 font-bold">Features</td><td className="p-4">Which forms, search, scheduling, members or commerce flows must remain?</td><td className="p-4">Accepted requirements and workflow tests</td></tr>
                                <tr><td className="p-4 font-bold">Integrations</td><td className="p-4">Which APIs, webhooks, tags and external systems are involved?</td><td className="p-4">Data-flow and responsibility map</td></tr>
                                <tr><td className="p-4 font-bold">Quality</td><td className="p-4">What accessibility, performance, SEO and browser conditions apply?</td><td className="p-4">Acceptance matrix and test profile</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The tiers above and what each includes are listed on our{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link>, and{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={inlineLinkClass}>what a website costs to build</Link>{" "}
                        applies the same scope drivers outside a migration.
                    </BlogText>

                    <BlogHeader>3. Know what pushes a Squarespace move to the top of its range</BlogHeader>
                    <BlogText>
                        Two sites with the same page count can be very different projects. These are the drivers that
                        move a Squarespace migration up a tier, and each one should appear in the inventory before a
                        number is discussed.
                    </BlogText>
                    <BlogList
                        items={[
                            "Blog and archive volume. Every post needs a URL decision, a content transformation and a tested redirect, so a long archive is a bigger job than the page count suggests.",
                            "Commerce data. Products, variants, images, inventory, discounts, tax and shipping rules each need a field map and a parity check, and customer or order history brings its own retention and privacy decisions.",
                            "Platform-native features. Squarespace Scheduling, member areas, native forms, email campaigns and portfolio pages have no direct equivalent in a custom stack, so each is a retain, replace or retire decision before it is a build task.",
                            "Design intent. Replicating the current design is a different scope from improving it during the move, and the contract should say which one it is buying.",
                            "Redirect history. A site that has already moved once can carry redirect chains and legacy URLs, so audit what is actually indexed rather than trusting the current sitemap alone.",
                        ]}
                    />

                    <BlogHeader>4. Decide honestly whether to stay</BlogHeader>
                    <BlogText>
                        A renewal increase, a disappointing mobile score or a feature you cannot reach is a prompt to
                        run the numbers. On its own it is not a reason to rebuild. Staying put is the right answer more
                        often than a web studio tends to admit, and it costs nothing to test that first.
                    </BlogText>
                    <BlogList
                        items={[
                            "Stay when the site is small and stable, has no content growth planned, and the plan cost is comfortably absorbed.",
                            "Stay when organic search is not how the business wins work, because search continuity risk then buys you nothing.",
                            "Stay when whoever edits the site values the visual editor more than the control a custom stack offers.",
                            "Move when unmet requirements, portability, integration needs or cumulative platform cost justify both the transition and the ongoing responsibility it creates.",
                            "Move when the constraint you have hit is architectural rather than a configuration problem, confirmed by measurement instead of assumption.",
                        ]}
                    />

                    <BlogHeader>5. Preserve search signals without promising rankings</BlogHeader>
                    <BlogText>
                        Six controls protect search visibility across a Squarespace migration, and the first two carry most of the weight: keep existing URLs where practical, and map every changed one to a relevant destination with a permanent redirect tested on the new host. Google warns that significant moves can cause temporary ranking fluctuations while URLs are recrawled and reindexed, so no agency can guarantee unchanged rankings, complete reindexing or a fixed recovery date.
                    </BlogText>
                    <BlogList
                        items={[
                            "Keep existing URLs where practical.",
                            "Map every changed URL to a relevant new destination and test permanent redirects on the new host.",
                            "Preserve or intentionally improve metadata, headings, content, canonicals and internal links.",
                            "Render crawlable content and accurate structured data.",
                            "Verify robots, sitemap and Search Console production properties.",
                            "Monitor crawl, index and query changes after launch and retain rollback criteria.",
                        ]}
                    />
                    <BlogText>
                        Google warns that significant moves can cause temporary ranking fluctuations while URLs are
                        recrawled and reindexed. No agency can guarantee unchanged rankings, complete reindexing or a
                        fixed recovery date. We go through that period in more detail in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>,
                        and the platform-side controls in{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className={inlineLinkClass}>what Squarespace gives you to work with for SEO</Link>.
                    </BlogText>

                    <BlogHeader>6. Include launch risk and continuity</BlogHeader>
                    <BlogText>
                        A parallel build can reduce disruption, but “zero downtime” is an outcome claim, not a planning
                        step. Define DNS, cache, provider, form, payment and rollback procedures. Monitor synthetic
                        availability, real errors, form delivery, checkout and analytics during the cutover.
                        Where cutover sits in the wider schedule is covered in{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={inlineLinkClass}>how long a custom website takes to build</Link>.
                    </BlogText>

                    <BlogText>
                        Budget the domain move as its own line, and know the rule before someone quotes it at you as a
                        penalty. Moving a domain between registrars is free, but{" "}
                        <strong>ICANN&apos;s transfer policy requires a one-year extension of the registration</strong>,
                        bought from whichever registrar you are moving to. Squarespace states this in its own words:{" "}
                        <em>&quot;The transfer is free, but ICANN requires a one-year extension of your domain
                        registration, which you&apos;ll purchase through Squarespace.&quot;</em> The two things usually
                        left out of that sentence when it is repeated: <strong>it is an industry rule, not a Squarespace
                        one</strong>, so it applies in whichever direction you move and to whichever registrar you land
                        on — and <strong>you keep the time already left on your registration, added on top of the extra
                        year</strong>. So it is a year brought forward, not a year lost. Squarespace also notes that
                        regular rather than promotional rates apply.
                    </BlogText>

                    <BlogText>
                        What we deliberately do not publish is a dollar figure. Squarespace&apos;s pricing page says only
                        that the cost depends on the TLD and sends you to a live lookup; the &quot;$20 to $70&quot; range
                        circulating in AI answers and forum threads is not stated on that page.{" "}
                        <strong>Price your own TLD at the registrar you are moving to, on the day you move.</strong> A
                        .com and a .io are not the same line item, and a range copied from a summary is not a quote.
                    </BlogText>

                    <BlogHeader>7. Include current and future vendor cost</BlogHeader>
                    <BlogText>
                        Squarespace plan families and features can differ by account and region, so read your own account rather than a published summary. Transaction and
                        processing fees also vary by plan, product type, payment method and country. Use the account&apos;s
                        current subscriptions and invoices. For the target stack, include hosting, CMS, email, database,
                        search, monitoring, security, backups and maintenance.
                    </BlogText>

                    <BlogHeader>8. Define PandaCodeGen commercial terms correctly</BlogHeader>
                    <BlogText>
                        The signed scope controls all of this; what follows is the starting position, not the contract. A 30/70 split is a common option rather than the only schedule, refunds attach to failure to deliver signed scope rather than to a change of preference, and support days apply only where the accepted terms record them. Anything not written down is not included.
                    </BlogText>
                    <BlogList
                        items={[
                            "A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed.",
                            "A refund applies according to the accepted contract when PandaCodeGen fails to deliver the signed scope, not merely because preferences change.",
                            "Refund timing is contract-specific; PandaCodeGen normally initiates an approved refund promptly and publishes an outside expectation of 10 to 12 business days for bank processing.",
                            "Where the accepted terms include it, Starter carries 15 business days of post-launch defect support and Growth and Scale carry 30.",
                            "Minor accepted fixes can be included; new or expanded scope follows written change control and agreed pricing.",
                        ]}
                    />

                    <BlogHeader>9. Define performance acceptance</BlogHeader>
                    <BlogText>
                        Where contracted, PandaCodeGen targets a 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> score for agreed representative
                        pages under recorded mobile and desktop profiles, using three consecutive tests per page and
                        profile. The scope must record the environment and remedy. This is not a permanent guarantee for
                        every route, visitor, consent state or future third-party change.
                    </BlogText>
                    <BlogText>
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers what those profiles record. Before accepting speed as the reason to move, work through{" "}
                        <Link href="/blog/squarespace-too-slow" className={inlineLinkClass}>our diagnostic sequence for a slow Squarespace site</Link>{" "}
                        and the general{" "}
                        <Link href="/blog/how-to-speed-up-your-website" className={inlineLinkClass}>method for speeding up a website</Link>.
                    </BlogText>

                    <BlogHeader>10. Compare ownership and handoff</BlogHeader>
                    <BlogText>
                        Client content and data remain the client&apos;s. Rights in fully paid custom deliverables,
                        PandaCodeGen&apos;s reusable and pre-existing tools, and third-party components are defined in the
                        accepted terms. Domain, hosting, repository and business accounts can be placed under client
                        control as agreed, avoiding unnecessary agency lock-in. What that distinction means day to day is
                        the subject of{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>do you actually own your website</Link>.
                    </BlogText>

                    <BlogHeader>11. Build a TCO scenario, not a payback promise</BlogHeader>
                    <BlogText>
                        There is no universal second-year payback, so what you build is a scenario with visible inputs rather than a promise with a number on it. Six inputs go in, and two of them are the ones people leave out: internal time, and a risk range for schedule, data, SEO, integrations and adoption. Report measured post-launch benefits without assuming causation.
                    </BlogText>
                    <BlogList
                        items={[
                            "Current Squarespace subscriptions, add-ons, processing and internal administration.",
                            "Migration and one-time transition work.",
                            "Target providers, maintenance, monitoring and support.",
                            "Internal content, merchandising, training and engineering time.",
                            "Risk ranges for schedule, data, SEO, integrations and adoption.",
                            "Measured benefits after launch, reported without assuming causation.",
                        ]}
                    />
                    <BlogText>
                        For a sense of what a completed scope contains, see{" "}
                        <Link href="/work" className={inlineLinkClass}>our project work</Link>{" "}
                        and the{" "}
                        <Link href="/work/mycustompatches" className={inlineLinkClass}>MyCustomPatches case study</Link>.
                        The delivery side of a move is described on our{" "}
                        <Link href="/services/squarespace" className={inlineLinkClass}>Squarespace migration service page</Link>.
                    </BlogText>

                    <BlogHeader>12. Ask these before you sign anything</BlogHeader>
                    <BlogText>
                        Two quotes are only comparable once both providers have priced the same inventory. Normalize the scope first, then compare the numbers: a higher quote often describes more of the work rather than more margin, and a lower one frequently has not found the work yet. Six questions expose the difference.
                    </BlogText>
                    <BlogList
                        items={[
                            "What is in scope, deliverable by deliverable? If redirect mapping, metadata migration, analytics and Search Console handover are not written down, treat them as excluded.",
                            "Which parts of the current site cannot be exported, and how will each of those be recreated?",
                            "What performance target is in the contract, on which named pages, under which profiles, and what is the remedy if it is missed?",
                            "Who holds the domain, repository, hosting and business accounts on the day after launch?",
                            "What is the change-control process, and how is additional scope priced once work has started?",
                            "Who monitors crawl, index and error behavior after launch, for how long, and what triggers a rollback?",
                        ]}
                    />
                    <BlogText>
                        Two quotes are only comparable once both providers have priced the same inventory. Normalize the scope first, then compare the numbers. A higher quote often describes more of the work rather
                        than more margin, and a lower one frequently has not found the work yet.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <ReceiptText className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will inventory the current Squarespace site, identify export gaps, map SEO and feature
                            requirements, and give you a scope-specific plan and quote.
                        </p>
                        <QuoteModalButton cta="squarespace_cost_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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

                    <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
