import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Code2, Pencil, Scale } from "lucide-react";
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

const postId = "wix-vs-custom-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Wix vs Custom Website in 2026: A Requirements-Led Comparison";
const description =
    "Compare Wix and a custom website across editing, features, performance, SEO, export, ownership, security, operating cost, scale and migration risk.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "Wix vs custom website",
        "Wix or custom website",
        "Wix vs Next.js",
        "should I leave Wix",
        "custom website comparison 2026",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-04-12",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/wix-vs-custom-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Wix CMS overview", url: "https://support.wix.com/en/article/cms-content-management-system-an-overview" },
    { name: "Wix Core Web Vitals", url: "https://support.wix.com/en/article/site-performance-about-core-web-vitals" },
    { name: "Wix Velo APIs", url: "https://dev.wix.com/docs/velo/apis" },
    { name: "Wix product export", url: "https://support.wix.com/en/article/wix-stores-exporting-your-product-list" },
    { name: "Wix site transfer", url: "https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/wix-vs-custom-website"),
            description,
            datePublished: "2026-04-12",
            dateModified: "2026-08-19",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Wix", "Website migration", "Content management systems", "Technical SEO", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Platform comparison",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Wix", sameAs: ["https://en.wikipedia.org/wiki/Wix.com"] },
                { "@type": "Thing", name: "Website builder", sameAs: ["https://en.wikipedia.org/wiki/Website_builder"] },
                { "@type": "Thing", name: "Website migration", sameAs: ["https://en.wikipedia.org/wiki/Data_migration"] },
            ],
            wordCount: 1838,
            timeRequired: "PT9M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Wix vs custom website", item: "https://www.pandacodegen.com/blog/wix-vs-custom-website" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website#webpage",
            url: "https://www.pandacodegen.com/blog/wix-vs-custom-website",
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/wix-vs-custom-website#breadcrumb" },
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

export default function WixVsCustomWebsitePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Wix vs custom website")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Platform comparison</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Wix vs Custom Website: <span className="italic text-cognac">Choose From Requirements</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Wix gives you the editor, the hosting and a set of business tools in one place. A custom site
                            hands you control over how it looks, how it behaves and what it connects to, and hands you
                            the engineering work that comes with that. Neither one is always faster, always cheaper,
                            always safer, or always better for search. Where custom code is the answer, PandaCodeGen builds it from $1,500 at a fixed price, has no minimum project size, and hands you code you own.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">Reviewed against current primary documentation on July 24, 2026.</p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Apr 12, 2026" readTime="6 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The decision in one minute</h2>
                        <BlogList
                            items={[
                                "Choose Wix when its current editor, CMS, apps, commerce and managed operations satisfy the requirements.",
                                "Go custom when you have proved that Wix will not give you the experience, the integration, the portability or the control you need.",
                                "Compare current invoices and equivalent scope instead of generic three-year totals.",
                                "Treat migration as a controlled business-system change, not a guaranteed upgrade.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Pencil, title: "Editing", body: "Visual tools, roles, preview and publishing workflow." },
                            { icon: Boxes, title: "Capabilities", body: "Your content, the store, bookings, members, apps and data." },
                            { icon: Code2, title: "Control", body: "How pages render, what they connect to, and who ships changes." },
                            { icon: Scale, title: "Lifecycle", body: "Build, providers, maintenance, support and exit." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="matrix">Wix vs custom website comparison</BlogHeader>
                    <BlogText>
                        Across all five rows the trade is the same one: Wix hands you a working system and keeps the decisions, custom hands you the decisions and the engineering work that comes with them. Editing, features and hosting all arrive ready on one side and have to be designed on the other. The two rows people skip are change surface and exit, and those are the ones that matter three years in.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[940px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Decision area</th><th className="p-4">Wix</th><th className="p-4">Custom website</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Editing</td><td className="p-4">Integrated visual editor and managed business tools</td><td className="p-4">Chosen CMS and workflow must be designed and integrated</td></tr>
                                <tr><td className="p-4 font-bold">Features</td><td className="p-4">Current Wix capabilities, apps and Velo APIs</td><td className="p-4">Explicitly scoped code and third-party services</td></tr>
                                <tr><td className="p-4 font-bold">Hosting</td><td className="p-4">Managed as part of the platform</td><td className="p-4">Providers, limits and operations selected by the team</td></tr>
                                <tr><td className="p-4 font-bold">Change surface</td><td className="p-4">Platform, apps, settings and custom code</td><td className="p-4">Application, packages, providers, APIs and custom code</td></tr>
                                <tr><td className="p-4 font-bold">Exit</td><td className="p-4">Data-specific exports and Wix account transfer options</td><td className="p-4">Depends on repository, data, account and license terms</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The same table is worth reading beside the other builders. We run the comparison for{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className={inlineLinkClass}>Squarespace and a custom website</Link>,{" "}
                        <Link href="/blog/webflow-vs-custom-website" className={inlineLinkClass}>Webflow and a custom website</Link>{" "}
                        and{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={inlineLinkClass}>Shopify and a custom website</Link>.
                    </BlogText>

                    <BlogHeader id="editing">Editing and publishing</BlogHeader>
                    <BlogText>
                        Wix can be the stronger operational choice when non-technical users need its editor, managed
                        apps and one dashboard. A custom site needs an intentional CMS and preview workflow. Compare
                        roles, approvals, localization, structured fields, page composition, media, scheduling,
                        rollback and training using realistic editorial tasks.
                    </BlogText>

                    <BlogHeader id="features">Business capabilities and Velo</BlogHeader>
                    <BlogText>
                        Wix offers managed capabilities and a documented Velo API surface. Confirm the live plan and
                        product behavior for CMS, forms, booking, events, stores, members, payments, automation and
                        integrations. A custom site can do things Wix will not, and every system you add is another thing to build, secure, test and maintain.
                    </BlogText>
                    <BlogText>
                        How a capability arrives matters as much as whether it exists. A native Wix feature is part of
                        the page; a third-party app from the App Market generally arrives as an embedded component with
                        its own bundle and its own vendor. Wix&apos;s own documentation is where to confirm whether a native feature already covers the need. So the practical test for each requirement is: native feature, supported app,
                        Velo code, or not available on this plan. Answer that per requirement and the platform question
                        mostly answers itself.
                    </BlogText>

                    <BlogQuote>
                        Wix hands you an editor and a set of tools. A custom site hands you control, and the engineering responsibility that comes with it.
                    </BlogQuote>

                    <BlogHeader id="performance">Performance</BlogHeader>
                    <BlogText>
                        Wix documents real-user Core Web Vitals, a Site Speed dashboard and performance guidance. A
                        custom stack can choose rendering, caching and data strategies, but custom code and third-party
                        services can still be slow. Compare representative routes with field evidence where available
                        and repeated lab tests under recorded conditions.
                    </BlogText>
                    <InsightBox variant="info" label="Why we do not attach a score band to either platform">
                        A performance score belongs to one route, on one device, on one date, under recorded conditions.
                        It moves with templates, apps, media weight and third-party code far more than it moves with the
                        platform name, so a band applied to every site on a platform will misprice your specific case in
                        both directions. Pick the routes that carry your revenue, test each of them repeatedly on both
                        options under the same conditions, and decide from that evidence.
                    </InsightBox>
                    <BlogText>
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers what to record on each run, and{" "}
                        <Link href="/blog/wix-too-slow" className={inlineLinkClass}>our diagnostic sequence for a slow Wix site</Link>{" "}
                        shows how to find the constraint before treating it as a platform limit.
                    </BlogText>

                    <BlogHeader id="seo">SEO</BlogHeader>
                    <BlogText>
                        Search performance depends on useful content, crawlability, rendered output, status codes,
                        titles, internal links, structured data, page experience and external signals. Wix and custom
                        sites can each implement these well or poorly. Before assuming a limit, establish which of these
                        controls you actually hold on the plan you are on:
                    </BlogText>
                    <BlogList
                        items={[
                            "Media: Wix serves images from its own CDN with generated file names. You control alt text and surrounding content; check what else you can influence if image search matters to the business.",
                            "Structured data: confirm what the platform outputs for each page type, what you can add, and what you cannot remove.",
                            "Sitemaps and index controls: check how much of the generated sitemap and robots behavior you can change.",
                            "URLs and redirects: check the URL patterns the platform imposes and the redirect controls it gives you, since both decide how a future move is executed.",
                            "Multi-language: check how translated content is addressed and how much of that structure you can set.",
                        ]}
                    />
                    <BlogText>
                        A control you hold is an implementation task. A control the platform keeps is a boundary, and
                        only boundaries are an argument for changing platform. Changing platforms creates migration risk
                        and does not guarantee ranking, traffic or AI citations. That risk is examined in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>what a migration does to search visibility</Link>,
                        and the speed side of page experience in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={inlineLinkClass}>how site speed relates to search performance</Link>.
                    </BlogText>

                    <BlogHeader id="export">Export, portability and ownership</BlogHeader>
                    <BlogText>
                        Checked against Wix&apos;s support documentation on July 31, 2026: Wix documents separate CSV exports for CMS collections, contacts, physical products and orders, says digital-product export is unsupported, and limits each product CSV to 5,000 rows,
                        plus transfer of eligible sites and services between Wix accounts. Those paths do not establish
                        one complete importable application for another stack. A custom contract should define the
                        repository, deliverables, data, domain, provider accounts, pre-existing code and licenses.
                        We unpack what those terms mean in practice in{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>do you actually own your website</Link>.
                    </BlogText>

                    <BlogHeader id="security">Security and maintenance</BlogHeader>
                    <BlogText>
                        Wix manages much of the platform infrastructure while the owner still controls users, apps,
                        code, content, business data and configuration. A custom system provides more direct
                        architectural control and more direct responsibility for dependencies, secrets, access,
                        providers, updates, monitoring and incident response. Neither model is maintenance-free.
                    </BlogText>

                    <BlogHeader id="cost">Three-year cost without invented totals</BlogHeader>
                    <BlogText>
                        There is no published three-year total here because the inputs are yours. Collect six categories from current quotes and equivalent features, then model low, central and high usage. Free or included allowances can change and may not fit a commercial workload, and a lower recurring bill does not prove a payback without measured benefits and every transition cost included.
                    </BlogText>
                    <BlogList
                        items={[
                            "Current Wix plan, apps, transactions, email and external-service invoices.",
                            "Internal editing, development, support and operational time.",
                            "Target discovery, design, content, migration, engineering and launch.",
                            "Target hosting, CMS, database, email, search, monitoring and security.",
                            "Maintenance, support, incident response, upgrades and change requests.",
                            "Exit, archive, retention and cancellation work.",
                        ]}
                    />
                    <BlogText>
                        For the build side of that arithmetic, see{" "}
                        <Link href="/blog/how-much-does-a-website-cost" className={inlineLinkClass}>what a website costs to build</Link>{" "}
                        and our published{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing tiers</Link>. For the transition side, see{" "}
                        <Link href="/blog/website-migration-cost-2026" className={inlineLinkClass}>the website migration cost guide</Link>.
                    </BlogText>

                    <BlogHeader id="timeline">How long each one takes to launch</BlogHeader>
                    <BlogText>
                        This is the difference people feel first, and it is real. <strong>Wix can have something
                        live the same afternoon.</strong> You pick a template, replace the content, connect a
                        domain, and the hosting, certificates and updates are somebody else&apos;s problem from
                        then on. Nothing in a <Link href="/services/custom-engineering" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">custom build</Link> competes with that, and if speed to launch is the
                        binding constraint, the honest recommendation is the builder.
                    </BlogText>
                    <BlogText>
                        A custom build is measured in weeks, and on a Wix migration specifically the reason is worth
                        knowing: <strong>Wix exports your content but not your site.</strong> The design, the page
                        layouts and the page-level SEO settings are recreated on the other side rather than
                        transferred, so the work scales with how many distinct templates sit behind your pages, not
                        with the page count itself.
                    </BlogText>
                    <BlogText>
                        For a sense of the actual range rather than &ldquo;weeks or months&rdquo;, two of our own
                        projects are published with their details:{" "}
                        <Link href="/work/mycustompatches" className={inlineLinkClass}>MyCustomPatches</Link>{" "}
                        moved every page, product and blog post to a custom build in <strong>about 22 days</strong>,
                        and <Link href="/work/enterprise-ops" className={inlineLinkClass}>an operations platform</Link>{" "}
                        with twenty edge functions and live profit calculations took <strong>10 weeks</strong>. The
                        spread between them is scope and integration count, not the choice of custom code. Decision
                        latency on your side moves it more than most people expect.
                    </BlogText>

                    <BlogHeader id="scale">Scale</BlogHeader>
                    <BlogText>
                        Scale is not just traffic. It includes content volume, markets, editor concurrency, catalog,
                        orders, integrations, reliability, release frequency, governance and support. Test the required
                        limits against current Wix documentation and the proposed custom providers. Do not assume
                        custom automatically supports any workload at one price.
                    </BlogText>

                    <BlogHeader id="when-wix">When Wix is enough</BlogHeader>
                    <BlogText>
                        Stay on Wix when the editing and managed workflow serve the team, and when the features you need exist and behave correctly on the live plan rather than on the pricing page. The deciding condition is the last one: if migration value does not justify the cost and the risk, the honest answer is that you already have what you need.
                    </BlogText>
                    <BlogList
                        items={[
                            "The current editing and managed business workflow serves the team.",
                            "Required features are available and behave correctly on the live plan.",
                            "Measured route performance satisfies the accepted user needs.",
                            "Data, integration and ownership requirements fit the platform.",
                            "Migration value does not justify cost and risk.",
                        ]}
                    />

                    <BlogHeader id="when-custom">When custom deserves a serious look</BlogHeader>
                    <BlogText>
                        Custom earns evaluation once you have proved, not assumed, that a specific requirement stays blocked on Wix. The word doing the work is proved: a verified experience or integration requirement, a rendering or content model the platform will not give you, or an accessibility target that platform-controlled work prevents. The last condition is organizational rather than technical, and it decides the outcome more often than the first four.
                    </BlogText>
                    <BlogList
                        items={[
                            "A verified experience or integration requirement remains blocked.",
                            "The business needs a specific rendering, content or application model.",
                            "Platform-controlled work prevents an accepted performance or accessibility requirement.",
                            "The team needs a different portability or account-control model.",
                            "The organization can own custom security, releases and maintenance.",
                        ]}
                    />
                    <BlogText>
                        If that describes your situation,{" "}
                        <Link href="/blog/how-long-does-a-custom-website-take" className={inlineLinkClass}>how long a custom website takes to build</Link>{" "}
                        sets out the phases involved, and{" "}
                        <Link href="/work" className={inlineLinkClass}>our project work</Link>{" "}
                        shows the kind of scope that comes out the other side.
                    </BlogText>

                    <BlogHeader id="migration">If you leave Wix</BlogHeader>
                    <BlogText>
                        Inventory routes, templates, CMS, contacts, products, orders, apps, members, forms, analytics
                        and integrations. Validate each export, map data and workflows, keep useful URLs stable where
                        practical, test relevant redirects, and preserve a rollback path. Search, business and uptime
                        outcomes remain property-specific.
                    </BlogText>
                    <BlogText>
                        Handle the domain and mailboxes as their own work item. Confirm who holds the registrar account,
                        where DNS is served and which records carry email, then schedule the cutover so mail keeps
                        flowing while records propagate. Validate every export against the live data rather than
                        assuming the file is complete, and keep the current site reachable until the replacement has
                        been checked.
                    </BlogText>
                    <BlogText>
                        <Link href="/blog/wix-migration-cost" className={inlineLinkClass}>How a Wix migration is scoped and priced</Link>{" "}
                        covers the export gaps and inventory in detail, and our{" "}
                        <Link href="/services/wix" className={inlineLinkClass}>Wix migration service page</Link>{" "}
                        describes how we run the move.
                    </BlogText>

                    <BlogHeader id="offer">PandaCodeGen terms</BlogHeader>
                    <BlogText>
                        PandaCodeGen planning tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale.
                        A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Refund is tied to
                        failure to deliver the signed scope. Starter includes 15 business days of launch defect support and Growth and Scale carry 30, where the accepted terms include it. Ownership and performance acceptance follow the signed
                        terms, not the framework name.
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
                        <h2 className="mb-3 font-serif text-3xl">Compare Wix and custom on the same requirements</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will show which needs can be repaired in Wix and which genuinely justify migration.
                        </p>
                        <QuoteModalButton cta="wix_vs_custom_fit_audit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
