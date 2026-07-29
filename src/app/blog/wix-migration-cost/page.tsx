import { ogImageForPath } from "@/lib/seo/og";
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

const postId = "wix-migration-cost";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Wix Migration Cost in 2026: Scope, Tiers and Export Guide";
const description =
    "Price a Wix migration from routes, templates, CMS, products, orders, contacts, media, apps, SEO controls, acceptance and cutover using current Wix export documentation.";

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
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-03",
        modifiedTime: "2026-07-24",
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
            datePublished: "2026-07-03",
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
            articleSection: "Wix migration",
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
                            Wix Migration Cost <span className="italic text-cognac">Scope the Real Move</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            A Wix migration is not priced from page count alone. Inventory the rendered site plus each
                            Wix data domain, app, business workflow and search control that must be retained, replaced
                            or retired.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current Wix and Google documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Jul 3, 2026" readTime="15 min read" />

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

                    <BlogHeader id="export">What can you export from Wix?</BlogHeader>
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
                        The mapping method itself is platform-neutral. Our{" "}
                        <Link href="/blog/website-migration-cost-2026" className={inlineLinkClass}>website migration cost guide</Link>{" "}
                        sets out the same exercise across other builders and content systems.
                    </BlogText>

                    <BlogHeader id="scope">The migration scope checklist</BlogHeader>
                    <BlogList
                        items={[
                            "Public URLs, dynamic routes, titles, descriptions, canonicals and structured data.",
                            "Unique page templates, responsive behavior, components, forms and error states.",
                            "CMS fields, relationships, media, drafts, permissions and editorial workflow.",
                            "Contacts, consent state, submissions, email and CRM automation.",
                            "Products, variants, inventory, orders, customers, discounts, tax, shipping and payments.",
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
                        it to another registrar means unlocking it, retrieving the authorisation code and completing the
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
                        Duration depends on inventory, templates, data, apps, integrations, content decisions, review,
                        acceptance and cutover. Use phase exit evidence instead of a universal week range. Record client
                        dependencies, launch window, rollback triggers and allowable interruption in the project plan.
                        The phases themselves are described in{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={inlineLinkClass}>how long a custom website takes to build</Link>.
                    </BlogText>

                    <BlogHeader id="quote">How to compare Wix migration quotes</BlogHeader>
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
                        Standard payment is 30 percent at onboarding and 70 percent on delivery. Refund is tied to
                        failure to deliver the signed scope, not a change of preference after starting. Starter includes
                        15 business days of launch defect support; Growth and Scale include 30. Any 90-plus Lighthouse
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
