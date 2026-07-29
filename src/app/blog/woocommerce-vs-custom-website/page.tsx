import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Database, GitBranch, Store } from "lucide-react";
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

const postId = "woocommerce-vs-custom-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "WooCommerce vs Custom Website in 2026: A Requirements Guide";
const description =
    "Compare WooCommerce, headless WooCommerce and a custom commerce website across features, editing, performance, security, SEO, data, ownership and operating cost.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "WooCommerce vs custom website",
        "custom ecommerce website",
        "headless WooCommerce",
        "WooCommerce alternatives",
        "migrate WooCommerce",
        "WooCommerce architecture",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-20",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/woocommerce-vs-custom-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "WooCommerce REST API", url: "https://developer.woocommerce.com/docs/apis/rest-api/" },
    { name: "WooCommerce Store API", url: "https://developer.woocommerce.com/docs/apis/store-api/" },
    { name: "WooCommerce product CSV", url: "https://woocommerce.com/document/product-csv-importer-exporter/" },
    { name: "WooCommerce HPOS", url: "https://developer.woocommerce.com/docs/features/high-performance-order-storage" },
    { name: "WooCommerce caching guidance", url: "https://developer.woocommerce.com/docs/best-practices/performance/configuring-caching-plugins" },
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
            datePublished: "2026-05-20",
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
            articleSection: "Commerce platform strategy",
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

export default function WooCommerceVsCustomWebsitePage() {
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
                            { label: "WooCommerce vs custom", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Commerce architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WooCommerce vs Custom Website <span className="italic text-cognac">Choose by Requirements</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            WooCommerce, a separated WooCommerce storefront and a custom commerce platform solve
                            different operating problems. The right choice follows capabilities, risk and ownership,
                            not a universal winner.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current WooCommerce and Google documentation on July 24, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 20, 2026" readTime="16 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Use WooCommerce when its catalog, content, extension and editing model fit the business and the team can operate it.",
                                "Consider headless WooCommerce when the back office still fits but the customer experience needs a separately engineered frontend.",
                                "Consider a custom platform when the core data model or workflows are the differentiator and packaged commerce creates repeated constraints.",
                                "None of the three choices guarantees performance, security, SEO, conversion or lower total cost.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Store, title: "WooCommerce", body: "Integrated WordPress content, catalog and plugin ecosystem." },
                            { icon: GitBranch, title: "Headless Woo", body: "Woo operations with a separately deployed customer frontend." },
                            { icon: Boxes, title: "Custom", body: "Purpose-built workflows and interfaces with selected services." },
                            { icon: Database, title: "Decision", body: "Capabilities, data, operations, ownership and exit." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader id="define">First define what custom means</BlogHeader>
                    <BlogText>
                        Custom can mean a bespoke theme, a headless frontend using WooCommerce APIs, or a different
                        commerce application with selected providers for content, payments, search and operations.
                        Those are not equivalent. A useful proposal names every system of record, third-party service,
                        integration, deployment and team responsibility. Our own definitions sit under{" "}
                        <Link href="/services/woocommerce" className="text-cognac hover:underline font-medium">WooCommerce development</Link>{" "}
                        and{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline font-medium">custom engineering</Link>.
                    </BlogText>

                    <BlogHeader id="comparison">Requirements-led comparison</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Area</th><th className="p-4">WooCommerce</th><th className="p-4">Headless WooCommerce</th><th className="p-4">Custom commerce</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Editing</td><td className="p-4">WordPress and Woo admin</td><td className="p-4">Woo admin plus preview integration</td><td className="p-4">Chosen CMS and operational interface</td></tr>
                                <tr><td className="p-4 font-bold">Features</td><td className="p-4">Core plus extensions and custom code</td><td className="p-4">Same backend with frontend API work</td><td className="p-4">Explicitly designed or integrated</td></tr>
                                <tr><td className="p-4 font-bold">Performance</td><td className="p-4">Depends on implementation and operations</td><td className="p-4">Frontend control with backend and API constraints</td><td className="p-4">Depends on architecture and implementation</td></tr>
                                <tr><td className="p-4 font-bold">Updates</td><td className="p-4">Core, WordPress, theme and extensions</td><td className="p-4">Woo stack plus frontend dependencies</td><td className="p-4">Application, framework and provider lifecycle</td></tr>
                                <tr><td className="p-4 font-bold">Ownership</td><td className="p-4">Code, data, licenses and accounts vary</td><td className="p-4">More repositories and deployment boundaries</td><td className="p-4">Defined by contract and provider terms</td></tr>
                                <tr><td className="p-4 font-bold">Exit</td><td className="p-4">Products export; other data needs inventory</td><td className="p-4">Backend plus frontend and integration handoff</td><td className="p-4">Data, code, documentation and service portability</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="features">Capabilities and extension fit</BlogHeader>
                    <BlogText>
                        WooCommerce can be a strong fit when mature extensions cover subscriptions, bookings,
                        memberships, taxes, shipping, feeds or payment methods. Evaluate the exact extension, its data
                        ownership, support, update record and compatibility. A custom build must recreate or integrate
                        each required capability, including edge cases that a feature checklist often misses.
                    </BlogText>
                    <InsightBox variant="tip" label="Build a capability matrix">
                        Record every customer and staff journey, integration, exception, report, role and compliance
                        control. Mark each as retain, configure, replace, redesign or retire, with an acceptance test and
                        responsible owner.
                    </InsightBox>

                    <BlogHeader id="editing">Content and merchandising workflow</BlogHeader>
                    <BlogText>
                        Ask who creates products, landing pages, promotions, navigation and localized content. Test
                        preview, approvals, scheduling, reusable sections, product relationships and rollback.
                        WooCommerce&apos;s integrated WordPress editing may be more valuable than a custom frontend for
                        some teams. A separated storefront needs deliberate preview and publishing integration.
                    </BlogText>

                    <BlogHeader id="performance">Performance is implementation-specific</BlogHeader>
                    <BlogText>
                        Do not compare an unoptimized production store with an empty custom demo. Use the same catalog,
                        content, third-party scripts and customer journeys. Compare field and lab evidence across home,
                        category, product, search, cart and checkout. WooCommerce documents performance and caching
                        practices, including keeping customer-specific pages dynamic. A headless frontend can improve
                        rendering control, but it does not remove backend, API, search, payment or operational latency.
                        Where a store is measurably slow, the diagnostic route is set out in{" "}
                        <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline font-medium">why a WooCommerce store runs slowly</Link>.
                    </BlogText>
                    <BlogText>
                        It helps to know what a request actually does. A WooCommerce page is assembled per request: PHP
                        runs, the database is queried for products, pricing, sessions and cart state, the active theme
                        loads, and every plugin hooked into that page executes before anything reaches the browser.
                        Cart, checkout and account pages are customer-specific, so full page caching cannot cover them
                        the way it covers a category page. Query weight tends to grow with the catalogue, and stores
                        accumulate transient records that are not always cleaned up. A pre-rendered frontend removes
                        most of that per-request work for pages that can be pre-rendered, which is why the honest
                        comparison is route by route rather than site against site.
                    </BlogText>
                    <InsightBox variant="tip" label="Tune before you rebuild">
                        If hosting, object caching, database health and plugin count have never been reviewed, you do
                        not yet know the ceiling of the store you already own. That work is cheaper than a rebuild, it
                        is reversible, and it produces the baseline any rebuild has to beat. Do it first, then decide.
                    </InsightBox>

                    <BlogHeader id="security">Security and dependency responsibility</BlogHeader>
                    <BlogText>
                        WooCommerce requires maintained WordPress, core, themes, extensions, hosting and privileged
                        access. A custom platform still depends on frameworks, packages, infrastructure and vendors.
                        Compare patch ownership, least privilege, secrets, logging, backups, recovery, testing and
                        incident response. Fewer plugins do not prove zero vulnerabilities, and more components do not
                        prove that a store is compromised.
                    </BlogText>

                    <BlogHeader id="seo">SEO and discoverability</BlogHeader>
                    <BlogText>
                        Either architecture can render crawlable content, metadata, canonicals, internal links,
                        structured data and sitemaps. During a migration, inventory URLs, preserve useful URLs where
                        practical, redirect changed URLs to relevant successors and monitor Search Console. A framework
                        does not automatically create rankings, and a migration cannot guarantee traffic retention or
                        recovery timing. What to expect from a platform move is covered in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline font-medium">will migrating hurt your SEO</Link>.
                    </BlogText>

                    <BlogHeader id="data">Data model and portability</BlogHeader>
                    <BlogText>
                        Inventory products, variants, media, customers, consent, orders, refunds, subscriptions,
                        coupons, tax, shipping, payment references and extension-owned fields. WooCommerce provides a
                        product CSV tool and APIs, but not every extension&apos;s records share one universal export.
                        A custom system needs documented schemas, export procedures and reconciliation controls as well.
                    </BlogText>

                    <BlogHeader id="hpos">High-Performance Order Storage</BlogHeader>
                    <BlogText>
                        WooCommerce&apos;s HPOS uses dedicated order tables and is enabled by default for new
                        installations from version 8.2. Existing stores may be on legacy storage, HPOS or compatibility
                        synchronization. Confirm the authoritative data store and extension compatibility before
                        estimating performance or migration work. HPOS is an operational input, not proof that either
                        architecture wins every comparison.
                    </BlogText>

                    <BlogHeader id="cost">Compare total operating cost, not a headline build price</BlogHeader>
                    <BlogList
                        items={[
                            "Discovery, design, implementation, data migration and testing",
                            "Hosting, CDN, storage, search, email, monitoring and provider usage",
                            "Themes, extensions, software subscriptions and payment fees",
                            "Security maintenance, updates, incident response and backups",
                            "Content, merchandising, development and support time",
                            "Future changes, integration replacement and exit cost",
                        ]}
                    />
                    <BlogText>
                        Use the same period, capabilities, traffic assumptions, service levels and internal labor rates.
                        Do not present a fixed WooCommerce or custom cost as universal. PandaCodeGen&apos;s published
                        project tiers are starting points for defined scope, not an industry price benchmark.
                        Comparable inputs are collected in our{" "}
                        <Link href="/blog/woocommerce-migration-cost" className="text-cognac hover:underline font-medium">WooCommerce migration cost breakdown</Link>, the
                        wider{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline font-medium">website migration cost guide</Link>{" "}
                        and a{" "}
                        <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline font-medium">three-year platform running cost comparison</Link>.
                    </BlogText>

                    <BlogHeader id="when-woo">When WooCommerce is likely the better fit</BlogHeader>
                    <BlogList
                        items={[
                            "Required commerce workflows are well served by maintained WooCommerce capabilities.",
                            "The team values WordPress content and merchandising workflows.",
                            "The current store can meet measured performance and reliability requirements after repair.",
                            "The business has clear ownership for extension updates, security and operations.",
                            "A rebuild would add cost and risk without solving a material constraint.",
                        ]}
                    />
                    <BlogText>
                        Give WooCommerce credit for the thing it genuinely does well. It is open source, the store code
                        and the store data are yours, the catalogue is not subject to a vendor&apos;s plan limits, and
                        the hosting relationship is yours to change. Most stories that begin &ldquo;WooCommerce is
                        bad&rdquo; are really stories about an installation nobody maintained. You have reached a
                        platform ceiling rather than an untidy installation when:
                    </BlogText>
                    <BlogList
                        items={[
                            "Hosting, caching, database and plugin count have already been tuned and the measured problem remains.",
                            "Checkout or another critical path breaks after core, WooCommerce or extension updates, and a developer is repeatedly paid to repair it.",
                            "Required business logic such as unusual pricing, B2B tiers, bundle rules or a deep internal integration is being assembled from stacked extensions.",
                            "Extension licences and a maintenance retainer add up to more per year than a defined one-off build plus its running costs.",
                            "A required capability depends on an extension that is unmaintained, unsupported or incompatible with the version you must run.",
                        ]}
                    />

                    <BlogHeader id="when-headless">When headless WooCommerce may fit</BlogHeader>
                    <BlogList
                        items={[
                            "WooCommerce remains a suitable catalog and order system.",
                            "The storefront needs a separately engineered experience or delivery model.",
                            "The team can operate frontend and backend deployments, APIs, preview and cache invalidation.",
                            "Cart, checkout, account, search and integration behavior have written acceptance tests.",
                            "The measured benefit justifies extra system boundaries and support responsibility.",
                        ]}
                    />
                    <BlogText>
                        Price the loss as well as the gain. Front-end extensions that render through WordPress hooks,
                        shortcodes or the theme stop working the moment the storefront is a separate application.
                        Reviews, wishlists, loyalty, upsell prompts and chat tied to store data all have to be rebuilt,
                        replaced with a service or dropped. You also end up operating two deployments, two dependency
                        sets and two update schedules rather than one. That can be the right trade when the back office
                        genuinely fits and the storefront genuinely does not. It is a poor trade when the only goal is a
                        faster front end, because the same effort would buy a single system.
                    </BlogText>
                    <BlogText>
                        <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline font-medium">What headless commerce means</Link>{" "}
                        sets out the shared vocabulary for that model before the comparison starts.
                    </BlogText>

                    <BlogHeader id="when-custom">When a custom commerce platform may fit</BlogHeader>
                    <BlogList
                        items={[
                            "The core product, pricing, workflow or integration model is genuinely differentiated.",
                            "Repeated packaged-platform constraints create measurable cost or operating risk.",
                            "The business can fund discovery, build, validation and long-term product ownership.",
                            "Every retained commerce capability has a replacement or integration plan.",
                            "Data portability, documentation, monitoring and incident ownership are contractual.",
                        ]}
                    />

                    <BlogHeader id="migration">Migration and cutover controls</BlogHeader>
                    <BlogText>
                        Create a URL map, data inventory, capability matrix and baseline before building. Run test
                        migrations, reconcile counts and financial totals, test every critical transaction, plan the
                        final data delta and define rollback triggers. Keep the old store available as the agreed plan
                        permits. No responsible provider should promise universal zero interruption or guaranteed SEO
                        outcomes. The technical route for a WordPress-based move is described in{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">migrating WordPress to Next.js</Link>, and
                        we scope that work under{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration</Link>.
                    </BlogText>

                    <BlogHeader id="decision">A practical decision sequence</BlogHeader>
                    <BlogList
                        items={[
                            "Write measurable business, customer, staff and compliance requirements.",
                            "Profile the current store and identify actual constraints.",
                            "Compare repair, headless and replacement against the same capability matrix.",
                            "Prototype the riskiest data, payment, search or editing boundary.",
                            "Model implementation and operating cost with named assumptions.",
                            "Contract acceptance, ownership, support, remedy and exit before onboarding.",
                        ]}
                    />

                    <BlogHeader id="terms">PandaCodeGen scope and ownership</BlogHeader>
                    <BlogText>
                        PandaCodeGen tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, with
                        custom scope where needed. Standard payment is 30 percent at onboarding and 70 percent on
                        delivery. Custom deliverables transfer after full payment under the signed agreement.
                        PandaCodeGen retains reusable internal tools, templates and pre-existing code, while third-party
                        components keep their original licenses. Client domain, hosting, repository and business
                        accounts can remain client-controlled when agreed. Current tiers are listed on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline font-medium">pricing page</Link>, and what transfers at
                        handover is covered in{" "}
                        <Link href="/blog/do-you-own-your-website" className="text-cognac hover:underline font-medium">who owns your website</Link>.
                    </BlogText>
                    <BlogText>
                        Examples of the commerce systems we build are in our{" "}
                        <Link href="/work" className="text-cognac hover:underline font-medium">client work</Link>, including the{" "}
                        <Link href="/work/panda-patches" className="text-cognac hover:underline font-medium">Panda Patches store</Link>, and
                        ongoing storefront work sits under{" "}
                        <Link href="/services/ecommerce" className="text-cognac hover:underline font-medium">e-commerce development</Link>.
                    </BlogText>

                    {postFAQs.length > 0 && (
                        <>
                            <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                            <FAQAccordion faqs={postFAQs} />
                        </>
                    )}

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Choose the smallest architecture that meets the brief</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare repair, headless WooCommerce and replacement against your capabilities,
                            data, acceptance criteria and operating team.
                        </p>
                        <QuoteModalButton cta="woocommerce_vs_custom_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
