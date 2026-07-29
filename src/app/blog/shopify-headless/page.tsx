import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, GitBranch, SearchCheck, ShieldCheck } from "lucide-react";
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

const postId = "shopify-headless";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Headless Shopify in 2026: Architecture and Migration Guide";
const description =
    "Compare Shopify themes, Hydrogen and custom Storefront API builds across requirements, integrations, SEO migration, analytics, ownership, testing and total cost.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "headless Shopify 2026",
        "Shopify Hydrogen",
        "Shopify Storefront API",
        "Shopify headless migration",
        "headless Shopify SEO",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-15",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-headless")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    {
        name: "Shopify: headless benefits, tradeoffs and fit",
        url: "https://www.shopify.com/enterprise/blog/what-is-headless-commerce",
    },
    { name: "Shopify Storefront API reference", url: "https://shopify.dev/docs/api/storefront/latest" },
    {
        name: "Shopify Hydrogen and Oxygen getting started",
        url: "https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started",
    },
    {
        name: "Shopify: SEO for Hydrogen",
        url: "https://shopify.dev/docs/storefronts/headless/hydrogen/seo",
    },
    {
        name: "Shopify: custom headless analytics migration",
        url: "https://shopify.dev/docs/storefronts/headless/hydrogen/migrate/cookies-custom-setup",
    },
    {
        name: "Google: site moves and migrations",
        url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    },
    {
        name: "Google: merchant listing structured data",
        url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-02-15",
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
            articleSection: "Shopify architecture",
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

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";
const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function ShopifyHeadlessPage() {
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
                            { label: "Headless Shopify", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Headless Shopify in 2026 <span className="italic text-cognac">Architecture Before Hype</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Going headless means you build your own storefront and let Shopify keep handling the commerce
                            behind it. You get more control, and you take on more responsibility with it. Do it because
                            you need a specific experience, need to connect to something, or need to sell somewhere
                            Shopify&apos;s themes cannot reach. Do not do it expecting a guaranteed lift in speed,
                            rankings or revenue.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 15, 2026" readTime="14 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The 2026 decision in one view</h2>
                        <BlogList
                            items={[
                                "Keep a theme when its customization model meets requirements and the team values simpler operation.",
                                "Choose Hydrogen when Shopify's official React stack and its commerce conventions fit the team.",
                                "Choose a custom Storefront API client when framework independence is a real requirement and the team accepts the integration work.",
                                "Treat SEO, analytics, accessibility, consent, checkout, operations and maintenance as first-class migration scope.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Boxes, title: "Commerce", body: "Catalog, markets, pricing, cart, checkout and accounts." },
                            { icon: GitBranch, title: "Experience", body: "Routes, CMS, search, personalization and channels." },
                            { icon: SearchCheck, title: "Discovery", body: "URLs, rendering, metadata, schema, feeds and sitemaps." },
                            { icon: ShieldCheck, title: "Operation", body: "Consent, security, deployments, monitoring and ownership." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What headless changes</BlogHeader>
                    <BlogText>
                        The storefront team owns rendering, routing, UI state, content integration and much of the
                        analytics and deployment system. Shopify remains the commerce engine for products, collections,
                        pricing, cart, checkout and associated operations exposed through supported interfaces. The
                        boundary must be documented feature by feature. If you are still settling the terminology,{" "}
                        <Link href="/blog/what-is-headless-commerce" className={inlineLinkClass}>what headless commerce means in practice</Link>{" "}
                        covers the architecture in plainer terms first.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no headless price band or uplift figure here">
                        You will not find a cost band for a headless build or a predicted ranking and conversion gain on
                        this page. Both depend on the scope you commission, the systems you integrate and the team that
                        operates the result, so a single figure would tell you nothing about your own project. Headless
                        is also not automatically faster. Shopify&apos;s own guidance ties performance to implementation
                        quality, and moving rendering into your own frontend moves the engineering responsibility with
                        it. Scope the work against your requirements, then measure the build you actually ship.
                    </InsightBox>

                    <BlogHeader>1. Start with requirements that a theme cannot meet well</BlogHeader>
                    <BlogList
                        items={[
                            "A differentiated interaction model that is impractical within accepted theme constraints.",
                            "A storefront that combines multiple commerce, content or product systems.",
                            "Consistent experience logic across web, app, kiosk or other supported channels.",
                            "Release independence needed by an established product and engineering team.",
                            "Rendering, caching or personalization control supported by a clear operating model.",
                        ]}
                    />
                    <BlogText>
                        If the requirement is merely a slow route, diagnose the theme, apps, media and third parties
                        first. A separate frontend can reproduce the same problems and add new ones. Start with{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={inlineLinkClass}>diagnosing a slow Dawn theme</Link>{" "}
                        and the wider{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={inlineLinkClass}>Shopify store speed optimization guide</Link>,
                        and see{" "}
                        <Link href="/blog/shopify-plus-still-slow" className={inlineLinkClass}>why a Shopify Plus store can still be slow</Link>{" "}
                        before assuming the plan is the constraint.
                    </BlogText>

                    <BlogHeader>2. Compare the three storefront paths</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Path</th><th className="p-4">Best fit</th><th className="p-4">Responsibility</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Shopify theme</td><td className="p-4">Requirements fit Liquid, sections and platform extensibility</td><td className="p-4">Lower separate-frontend burden</td></tr>
                                <tr><td className="p-4 font-bold">Hydrogen</td><td className="p-4">Custom React storefront using Shopify&apos;s official headless framework</td><td className="p-4">Custom app plus Shopify integration and release operation</td></tr>
                                <tr><td className="p-4 font-bold">Custom API client</td><td className="p-4">A justified framework or runtime requirement</td><td className="p-4">More integration decisions owned by the implementation team</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Shopify lists Hydrogen as its React framework and the Storefront API Client as its recommended
                        lightweight JavaScript client for custom storefronts outside Hydrogen. The API is versioned, so
                        quarterly versions, upgrades and deprecations belong in maintenance planning. If the choice is
                        still open between staying native, going headless or leaving the platform, work through our{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={inlineLinkClass}>Shopify and custom website decision framework</Link>.
                    </BlogText>

                    <BlogHeader>3. Inventory commerce compatibility</BlogHeader>
                    <BlogList
                        items={[
                            "Products, variants, collections, inventory, pricing, discounts and markets.",
                            "Cart behavior, checkout handoff, accelerated payment and account flows.",
                            "Search, recommendations, subscriptions, bundles, loyalty, reviews and wish lists.",
                            "Tax, shipping, pickup, returns, customer service and fulfillment.",
                            "B2B, internationalization, localization and accessibility requirements.",
                            "App behavior: API support, headless UI, webhooks, server events and checkout integration.",
                        ]}
                    />
                    <BlogText>
                        App compatibility is where most of the rework hides, so inventory what each app does and what it
                        charges before you commit.{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className={inlineLinkClass}>How to read your real monthly Shopify app bill</Link>{" "}
                        gives you a method for the second half of that.
                    </BlogText>

                    <BlogHeader>4. Treat analytics and consent as architecture</BlogHeader>
                    <BlogText>
                        A custom storefront does not inherit every theme analytics behavior automatically. Shopify&apos;s
                        current documentation includes a specific migration path for custom headless analytics and
                        warns that the documented custom setup is not officially supported. Hydrogen has its own
                        supported path. Decide this before framework selection, especially after the 2026 cookie changes.
                    </BlogText>
                    <BlogList
                        items={[
                            "Define consent categories and pre-consent behavior for each region in scope.",
                            "Map Shopify, advertising, email and internal analytics events with owners and definitions.",
                            "Test event identity, deduplication, attribution and checkout handoff.",
                            "Document server and browser data flows, retention, processors and deletion paths.",
                        ]}
                    />
                    <BlogText>
                        Advertising measurement is part of the same scope rather than a later task. Our guide to{" "}
                        <Link href="/blog/fix-meta-ad-tracking-2026" className={inlineLinkClass}>repairing Meta ad tracking in 2026</Link>{" "}
                        covers the server-side event work that a storefront change usually disturbs.
                    </BlogText>

                    <BlogHeader>5. Make the migration SEO-safe</BlogHeader>
                    <BlogText>
                        Headless is not inherently better or worse for SEO. The implementation controls the output.
                        Google warns that significant site changes can produce temporary ranking fluctuations while
                        URLs are recrawled and reindexed. Build an evidence-backed migration plan instead of promising
                        ranking retention.
                    </BlogText>
                    <BlogList
                        items={[
                            "Crawl and preserve the current URL, status, canonical, metadata, heading, content, internal-link and indexability inventory.",
                            "Map every changed URL to a relevant destination and test permanent redirects.",
                            "Render crawlable navigation, product content, canonicals and directives in the delivered HTML.",
                            "Keep product price, availability, variants, structured data and Merchant Center feeds consistent.",
                            "Generate accurate robots and sitemap output and verify production Search Console properties.",
                            "Monitor crawl errors, indexed pages, queries, templates and server capacity after launch.",
                        ]}
                    />
                    <BlogText>
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>What a migration does to search visibility</Link>{" "}
                        expands on the monitoring side of this list. The same product data also feeds agentic shopping
                        surfaces, which we cover in{" "}
                        <Link href="/blog/google-universal-commerce-protocol-what-it-means-for-your-store" className={inlineLinkClass}>what Google&apos;s universal commerce protocol means for a store</Link>.
                    </BlogText>

                    <BlogHeader>6. Define performance acceptance precisely</BlogHeader>
                    <BlogList
                        items={[
                            "Representative home, collection, product, search, cart and agreed campaign routes.",
                            "Mobile and desktop profiles with device, network, geography, cache and consent state recorded.",
                            "Three consecutive tests per agreed page and profile, reported without selecting only the best run.",
                            "Functional, accessibility, SEO, analytics and error guardrails.",
                            "Field Core Web Vitals monitored after enough real traffic exists.",
                            "A written remedy if the contracted target is not met under the accepted conditions.",
                        ]}
                    />
                    <BlogText>
                        PandaCodeGen can contract for a 90-plus Lighthouse acceptance target under documented test
                        conditions. That is a delivery criterion, not a promise that every visitor, route, date or
                        third-party state will permanently produce the same score.{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        sets out the field metrics that acceptance criterion is measured against later.
                    </BlogText>

                    <BlogHeader>7. Price total ownership, not only the build</BlogHeader>
                    <BlogList
                        items={[
                            "Discovery, design, implementation, migration, content and data work.",
                            "Shopify plan, hosting, CMS, search, email, monitoring and other providers.",
                            "App replacement, API limits, integrations and vendor support.",
                            "Security updates, framework and API upgrades, incident response and recovery.",
                            "Merchandising workflow, preview, localization, training and documentation.",
                            "Internal product, design, analytics and engineering time.",
                        ]}
                    />
                    <InsightBox variant="info" label="PandaCodeGen commercial context">
                        Our published Scale tier starts at $5,000 and commonly covers scoped headless work in the
                        $5,000 to $10,000-plus range. That is our price, not an industry benchmark. Final scope, third-party
                        costs, ownership, support and acceptance terms are agreed before onboarding. See the{" "}
                        <Link href="/services/ecommerce" className={inlineLinkClass}>ecommerce development service</Link> and the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link> for what each tier covers.
                    </InsightBox>

                    <BlogHeader>8. Require a reversible launch</BlogHeader>
                    <BlogList
                        items={[
                            "Content, URL and data freezes with named exceptions.",
                            "Production-like staging and a complete acceptance checklist.",
                            "Load, security, accessibility, browser and device testing.",
                            "DNS, redirects, cache, webhook, secret and provider-account runbooks.",
                            "Rollback criteria, decision owner and tested recovery path.",
                            "Post-launch monitoring for commerce, SEO, analytics and performance.",
                        ]}
                    />
                    <BlogText>
                        For a commerce build delivered under this kind of plan, see our{" "}
                        <Link href="/work/mycustompatches" className={inlineLinkClass}>MyCustomPatches project</Link>.
                    </BlogText>

                    <section className="my-10">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            On the storefront performance side, read{" "}
                            <Link href="/blog/shopify-conversion-rate-speed-fix" className={inlineLinkClass}>testing storefront speed against conversion data</Link>{" "}
                            and{" "}
                            <Link href="/blog/shopify-slow-losing-sales" className={inlineLinkClass}>how to tell whether a slow store is costing sales</Link>.
                        </p>
                    </section>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <GitBranch className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map URLs, commerce requirements, app dependencies, data flows, test conditions and
                            ownership before recommending Hydrogen, a custom storefront or a Shopify-native solution.
                        </p>
                        <QuoteModalButton cta="shopify_headless_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
