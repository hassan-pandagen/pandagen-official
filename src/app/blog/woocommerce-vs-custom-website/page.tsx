import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Database, GitBranch, Store } from "lucide-react";
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
const PlatformComparisonAnimation = dynamicImport(() => import("@/components/blog/PlatformComparisonAnimation"));

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
        "should I leave WooCommerce",
        "WooCommerce vs Next.js",
        "is headless WooCommerce worth it",
        "WooCommerce plugin maintenance cost",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-20",
        modifiedTime: "2026-08-08",
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
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/woocommerce-vs-custom-website"),
            datePublished: "2026-05-20",
            dateModified: "2026-08-08",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["WooCommerce", "WordPress", "Ecommerce architecture", "Website migration", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Commerce platform strategy",
            inLanguage: "en-US",
            wordCount: 3182,
            timeRequired: "PT14M",
            about: [
                { "@type": "Thing", "name": "WooCommerce", "sameAs": ["https://woocommerce.com/", "https://en.wikipedia.org/wiki/WooCommerce"] },
                { "@type": "Thing", name: "Custom Website" },
                { "@type": "Thing", "name": "E-Commerce", "sameAs": ["https://en.wikipedia.org/wiki/E-commerce"] },
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
                { "@type": "ListItem", position: 3, name: "WooCommerce vs custom", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-20",
            dateModified: "2026-08-08",
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

export default function WooCommerceVsCustomWebsitePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "WooCommerce vs custom")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Commerce architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            WooCommerce vs Custom Website: <span className="italic text-cognac">Choose by Requirements</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            WooCommerce, a separated WooCommerce storefront and a custom commerce platform solve
                            different operating problems. The right choice follows capabilities, risk and ownership,
                            not a universal winner.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed against current WooCommerce and Google documentation on July 31, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 20, 2026" readTime="10 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <div className="my-10">
                        <PlatformComparisonAnimation />
                    </div>

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

                    <BlogHeader id="framework">Four questions that decide this</BlogHeader>
                    <BlogText>
                        Before comparing architectures in the abstract, score your own store against four things. These
                        are rules of thumb rather than thresholds anyone can prove, but in our experience they predict
                        the answer better than any feature comparison does.
                    </BlogText>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">What to look at</th><th className="p-4">Staying is probably right</th><th className="p-4">A custom build starts to earn its place</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">Catalog</td>
                                    <td className="p-4">A small number of simple products that do not change often</td>
                                    <td className="p-4">Hundreds of items, or a catalog that changes often enough that managing it through plugins is now a job</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Extension load</td>
                                    <td className="p-4">A modest plugin count, and nothing critical has broken on an update</td>
                                    <td className="p-4">A long extension list, renewals adding up, and checkout has broken from an update before</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Budget</td>
                                    <td className="p-4">Pre-revenue or thin margins, where every dollar belongs in stock or ads</td>
                                    <td className="p-4">You can fund a defined build and the running costs it removes are real money to you</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Who fixes it</td>
                                    <td className="p-4">No developer on call, and you rely on plugin support and forums</td>
                                    <td className="p-4">You already have a developer relationship, or the build ships with a CMS you can run without one</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Mostly in the left column? Stop here and go and tune what you already own. The rest of this
                        article will still be true later, it is just not your problem yet. Mostly in the right column?
                        The sections below are where the money and the risk actually sit.
                    </BlogText>

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
                    <div data-speakable="true">
                        <BlogText>
                            Compare these three on what each one asks of your team, because on raw capability they converge and the table stops telling you anything. WooCommerce keeps editing, features and operations in one place. Headless splits the storefront off and leaves the back office where it is. Custom commerce moves every one of those decisions onto whoever builds and runs it.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
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
                        Write down every journey a customer or a staff member takes, every integration, every exception, every report, every role and every compliance control. Then mark each one keep, configure, replace, redesign or retire, with a test and
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
                        rendering control. It does not make your backend, your APIs, search, payments or operations any faster.
                        Where a store is measurably slow, the diagnostic route is set out in{" "}
                        <Link href="/blog/woocommerce-too-slow" className="text-cognac hover:underline font-medium">why a WooCommerce store runs slowly</Link>.
                    </BlogText>
                    <BlogText>
                        It helps to know what a request actually does. A WooCommerce page is assembled per request: PHP
                        runs, the database is queried for products, pricing, sessions and cart state, the active theme
                        loads, and every plugin hooked into that page executes before anything reaches the browser.
                        Cart, checkout and account pages are customer-specific, so full page caching cannot cover them
                        the way it covers a category page. Query weight tends to grow with the catalog, and stores
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
                        WooCommerce means somebody keeps WordPress itself, the themes, the extensions, the hosting and the privileged
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
                    <div data-speakable="true">
                        <BlogText>
                            A build price covers one year of a decision you will live with for several, so compare the six lines that recur instead. On a packaged stack the recurring column grows roughly with the feature list, because each new capability tends to arrive as another paid extension. On a custom stack it tracks infrastructure and usage.
                        </BlogText>
                    </div>
                    <BlogText>
                        There is no honest monthly figure for WooCommerce that is not your own. What it costs you is
                        the sum of six lines you can read off invoices you already receive, and the reason published
                        averages disagree so wildly is that they are averaging stores with different extension sets,
                        different hosting and different amounts of someone&apos;s time. Price these six from your own
                        account rather than from anybody&apos;s benchmark, including ours.
                    </BlogText>
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
                    <InsightBox variant="info" label="The mechanic worth understanding before you model anything">
                        On a packaged stack, adding a capability usually means adding a paid extension, so the monthly
                        bill grows roughly in step with the feature list. On a custom stack, a capability is work once
                        and then it is part of the application, so the bill tracks infrastructure and usage instead. We
                        see this on Panda Patches, which runs on a custom stack for tooling costs in the region of $55 a
                        month across the whole store. Disclosure: Panda Patches is owned and operated by Imran Raza
                        Ladhani, a PandaCodeGen co-founder, and PandaCodeGen built and maintains the platform, so treat
                        it as our own operating experience rather than an independent reference. It is one store, and
                        the figure is ours rather than a benchmark. The point is the shape of the curve, not the number.
                    </InsightBox>
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
                    <div data-speakable="true">
                        <BlogText>
                            WooCommerce is the better fit whenever the constraint you found is an untidy installation rather than a platform limit, which describes most of the stores that arrive complaining about it. Five conditions point that way. If all five hold, a rebuild adds cost and risk without removing anything that was actually blocking you.
                        </BlogText>
                    </div>
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
                        and the store data are yours, the catalog is not subject to a vendor&apos;s plan limits, and
                        the hosting relationship is yours to change. Most stories that begin &ldquo;WooCommerce is
                        bad&rdquo; are really stories about an installation nobody maintained. You have reached a
                        platform ceiling rather than an untidy installation when:
                    </BlogText>
                    <BlogList
                        items={[
                            "Hosting, caching, database and plugin count have already been tuned and the measured problem remains.",
                            "Checkout or another critical path breaks after core, WooCommerce or extension updates, and a developer is repeatedly paid to repair it.",
                            "Required business logic such as unusual pricing, B2B tiers, bundle rules or a deep internal integration is being assembled from stacked extensions.",
                            "Extension licenses and a maintenance retainer add up to more per year than a defined one-off build plus its running costs.",
                            "A required capability depends on an extension that is unmaintained, unsupported or incompatible with the version you must run.",
                        ]}
                    />

                    <BlogHeader id="when-headless">When headless WooCommerce may fit</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Headless fits the narrow case where the back office genuinely works and the storefront genuinely does not, and it is the wrong answer to a store that is only slow. Five conditions have to hold together, and the fifth decides it: the measured benefit has to justify operating two deployments instead of one.
                        </BlogText>
                    </div>
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
                    <div data-speakable="true">
                        <BlogText>
                            A custom platform earns its cost when the thing that makes the business work is the thing a packaged platform will not do, rather than when the packaged platform is merely irritating. Five conditions apply, and two of them are about money and ownership rather than technology: somebody has to fund the build and then own the product afterwards.
                        </BlogText>
                    </div>
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

                    <BlogHeader id="how-long">How long does a custom build actually take?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Published comparisons tend to say custom development runs to &ldquo;several months&rdquo;
                            against days or weeks for a plugin-based store. That is true of some custom projects and it
                            is not a property of custom code. Timeline follows scope, integration count and how fast
                            the client can make decisions, so the honest version is a range with the drivers named.
                        </BlogText>

                        <BlogText>
                            Two of our own projects mark out that range, and both are published with their details so
                            you can check the claim rather than take it. <Link href="/work/mycustompatches" className="text-cognac hover:underline font-medium">MyCustomPatches</Link>{" "}
                            moved every page, product and blog post onto a custom Next.js build in <strong>about 22
                            days</strong>, with a full crawl validation before DNS cutover and rankings stable within
                            two weeks of launch. At the other end,{" "}
                            <Link href="/work/enterprise-ops" className="text-cognac hover:underline font-medium">an operations platform</Link>{" "}
                            with twenty Supabase Edge Functions, live profit calculations and real user roles took{" "}
                            <strong>10 weeks</strong>. Same team, same stack, a five-fold difference in elapsed time,
                            driven entirely by what was being built.
                        </BlogText>

                        <BlogList
                            items={[
                                "A marketing site or catalogue migration with a settled design is usually weeks, not months. Content volume moves the number far less than people expect, because extraction is scripted rather than retyped.",
                                "Every live integration adds real time: payment providers, ERP or inventory sync, CRM, subscription logic and anything with its own sandbox and approval process.",
                                "Decision latency is the most underestimated input. A build waiting three days for each round of feedback is a slower project than a harder build with a decision-maker available.",
                                "A store migration also carries the URL inventory, redirect mapping and post-launch monitoring, which run alongside the build rather than after it.",
                            ]}
                        />

                        <InsightBox variant="info">
                            When a provider quotes you a timeline, ask what it assumes about your side: how quickly
                            feedback comes back, who signs off, and whether content and assets already exist. Most
                            overruns are not engineering overruns. If the answer to those three does not change the
                            estimate at all, the estimate was not built from your project.
                        </InsightBox>
                    </div>

                    <BlogHeader id="decision">A practical decision sequence</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Run these in order, because each step stays cheap enough to change your mind before the next one commits you. The sequence puts requirements before profiling and profiling before comparison, which reverses how most replatform conversations actually start. Six steps, and the prototype at step four is what catches the expensive surprise while it is still free.
                        </BlogText>
                    </div>
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

                    <BlogHeader id="verdict">So which should you choose?</BlogHeader>
                    <BlogText>
                        Stay on WooCommerce if the store is small, if nobody has tuned it yet, or if it already runs
                        quickly and reliably and maintenance is not eating anyone&apos;s week. Move when you have
                        already tuned it and the measured problem is still there, when the extension and retainer bill
                        has quietly become a rebuild&apos;s worth of money every year, or when the business logic you
                        need is being assembled out of stacked plugins. Choose headless only when the back office
                        genuinely fits and the storefront genuinely does not, because it is the option that leaves you
                        running two systems.
                    </BlogText>
                    <BlogText>
                        The blunt version, and it is an opinion rather than a finding: WooCommerce is an excellent place
                        to start and an awkward place to scale. The day it stops being the cheapest way to sell and
                        starts being the thing you spend your week managing, you have outgrown it. Until that day, the
                        rebuild is a cost without a corresponding problem.
                    </BlogText>

                    <BlogHeader id="terms">PandaCodeGen scope and ownership</BlogHeader>
                    <BlogText>
                        PandaCodeGen tiers start at $1,500 Starter, $3,500 Growth and $5,000 to $10,000 Scale, with
                        custom scope where needed. A common payment option is 30 percent at onboarding and 70 percent at the delivery milestone, and another written schedule may be agreed. Custom deliverables transfer after full payment under the signed agreement.
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
                        <h2 className="mb-3 font-serif text-3xl">Choose the smallest architecture that meets the brief</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare repair, headless WooCommerce and replacement against your capabilities,
                            data, acceptance criteria and operating team.
                        </p>
                        <QuoteModalButton cta="woocommerce_vs_custom_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
