import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, Calculator, ShoppingBag, Wrench } from "lucide-react";
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

const postId = "shopify-vs-custom-website";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Shopify vs Custom Website in 2026: A Decision Framework";
const description =
    "Compare a Shopify theme, headless Shopify and a custom commerce stack across requirements, total cost, performance, operations, integrations, ownership and migration risk.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Shopify vs custom website",
        "custom Shopify storefront",
        "Shopify headless",
        "Shopify migration",
        "custom ecommerce website",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-03-30",
        modifiedTime: "2026-07-24",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/shopify-vs-custom-website")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Shopify pricing", url: "https://www.shopify.com/pricing" },
    { name: "Shopify Plus pricing and features", url: "https://www.shopify.com/plus/pricing" },
    {
        name: "Shopify web performance reports",
        url: "https://help.shopify.com/en/manual/online-store/web-performance/web-performance-reports",
    },
    {
        name: "Shopify app billing",
        url: "https://help.shopify.com/en/manual/your-account/manage-billing/your-invoice/apps",
    },
    {
        name: "Shopify headless benefits and tradeoffs",
        url: "https://www.shopify.com/enterprise/blog/what-is-headless-commerce",
    },
    { name: "Shopify Storefront API", url: "https://shopify.dev/docs/api/storefront/latest" },
    {
        name: "Google site-move guidance",
        url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
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
            datePublished: "2026-03-30",
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
            articleSection: "Commerce architecture",
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

export default function ShopifyVsCustomWebsitePage() {
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
                            { label: "Shopify vs custom", href: `/blog/${postId}` },
                        ]}
                    />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Commerce architecture</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Shopify vs Custom Website <span className="italic text-cognac">A 2026 Decision Framework</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Shopify, a headless Shopify storefront and a separate custom commerce stack each
                            solve a different problem. Compare them against what your business actually needs
                            and how you intend to run it, not against invented revenue thresholds, app-spend
                            figures or PageSpeed targets.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Mar 30, 2026" readTime="12 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The three real options</h2>
                        <BlogList
                            items={[
                                "Shopify theme: platform-native storefront, checkout and merchant workflow.",
                                "Headless Shopify: custom storefront with Shopify's commerce back end and checkout.",
                                "Separate custom commerce: custom storefront plus additional ownership of commerce services and operations.",
                                "Optimization or re-theme: improve the current system without changing its architecture.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: ShoppingBag, title: "Native", body: "Fastest operational path when theme capabilities fit." },
                            { icon: Boxes, title: "Headless", body: "More experience control with Shopify still in the core." },
                            { icon: Wrench, title: "Custom", body: "Maximum control plus maximum lifecycle responsibility." },
                            { icon: Calculator, title: "Evidence", body: "Requirements, total cost, risk and measured outcomes." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>1. Compare commerce requirements first</BlogHeader>
                    <BlogList
                        items={[
                            "Catalog, variants, inventory, markets, pricing, discounts and tax.",
                            "Cart, checkout, payments, fraud, accounts, subscriptions and B2B.",
                            "Orders, fulfillment, returns, customer service and retail operations.",
                            "Content, search, recommendations, personalization and accessibility.",
                            "Analytics, consent, advertising, feeds, structured data and SEO.",
                            "Integrations, data ownership, security, recovery and support.",
                        ]}
                    />
                    <BlogText>
                        A platform that satisfies these requirements with supported native capability can be lower risk
                        than custom code. A requirement that repeatedly fights the platform may justify a different
                        frontend or stack. If the vocabulary here is unfamiliar, start with{" "}
                        <Link href="/blog/what-is-headless-commerce" className={inlineLinkClass}>what headless commerce means in practice</Link>{" "}
                        before scoring your own requirements.
                    </BlogText>
                    <BlogText>
                        Some requirements meet a platform boundary that configuration does not move. Check these early,
                        because they change the shape of the answer rather than the size of the work:
                    </BlogText>
                    <BlogList
                        items={[
                            "Checkout is Shopify-controlled. What you can change depends on your plan and is done through the checkout editor and supported checkout extensions, not free template editing. Confirm what your plan allows before promising a bespoke checkout flow.",
                            "Storefront URLs keep Shopify's product and collection path structure, and a product that sits in several collections can be reachable at more than one address. Decide how canonicals and internal links handle that.",
                            "Variants and options per product are capped. Check the current limits against a configurator, made-to-order range or B2B price list before designing around them.",
                            "Taking payment through a gateway other than Shopify Payments adds a platform fee per transaction on top of the processor's own rate. The rate depends on plan and region, so read it from the plan you are on.",
                            "Each installed app can add its own scripts to the pages it touches, so the app list is a performance decision and a cost decision at the same time.",
                        ]}
                    />

                    <BlogHeader>2. Use current commercial terms</BlogHeader>
                    <BlogText>
                        Shopify prices, card rates, transaction fees and feature entitlements vary by plan, term and
                        region. App charges can be recurring or usage-based and some apps bill outside Shopify. Use the
                        merchant&apos;s contract, invoices and current official pages rather than a generic monthly total.
                        For a method of auditing the app side of that bill line by line, see{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className={inlineLinkClass}>how to read your real monthly Shopify app bill</Link>.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no spend threshold that says leave">
                        This article gives you no app-spend, revenue or conversion figure that triggers a move off the
                        platform. A threshold like that ignores what your apps actually do, what your team can operate
                        and what the replacement costs to run once it is live. Commercial hosting is not free either,
                        and payback follows your own scope, traffic and internal effort. Build the cost model below from
                        your contract, your invoices and your own delivery plan, then compare it against the work the
                        platform is doing for you today.
                    </InsightBox>

                    <BlogHeader>3. Build a comparable total-cost model</BlogHeader>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200">
                        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Cost</th><th className="p-4">Shopify theme</th><th className="p-4">Headless or custom</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr><td className="p-4 font-bold">Platform and providers</td><td className="p-4">Plan, apps, payment and optional services</td><td className="p-4">Commerce back end, hosting, CMS, search, email, monitoring and other services</td></tr>
                                <tr><td className="p-4 font-bold">Implementation</td><td className="p-4">Theme, configuration, content and integrations</td><td className="p-4">Discovery, product design, frontend, APIs, migration and acceptance</td></tr>
                                <tr><td className="p-4 font-bold">Operation</td><td className="p-4">Merchandising, app administration and theme releases</td><td className="p-4">Engineering, releases, security, monitoring and incident response</td></tr>
                                <tr><td className="p-4 font-bold">Change and exit</td><td className="p-4">App, theme and platform transition limits</td><td className="p-4">Code, data, provider, license and team dependencies</td></tr>
                                <tr><td className="p-4 font-bold">Risk</td><td className="p-4">Platform and app constraints</td><td className="p-4">Implementation, integration and maintenance complexity</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The right-hand column is where most estimates go wrong, because the build is only part of it.
                        Our <Link href="/services/ecommerce" className={inlineLinkClass}>ecommerce development service</Link>{" "}
                        page sets out what a custom storefront engagement actually contains, which is the figure that
                        belongs in this table rather than a build price alone.
                    </BlogText>

                    <BlogHeader>4. Measure performance instead of assigning platform scores</BlogHeader>
                    <BlogText>
                        Shopify&apos;s Web Performance reports show real-user LCP, INP and CLS by URL, page type, device
                        and time. Use them with repeated lab traces to identify the responsible work. A theme does not
                        have one permanent score ceiling, and a custom storefront is not automatically fast.
                    </BlogText>
                    <BlogList
                        items={[
                            "Test representative home, collection, product, search, cart and campaign routes.",
                            "Record device, network, geography, cache, authentication and consent state.",
                            "Trace media, JavaScript, apps, analytics, data requests and theme or frontend code.",
                            "Preserve functional, accessibility, SEO, analytics and error guardrails.",
                        ]}
                    />
                    <BlogText>
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        covers the metric definitions and thresholds those reports use. For theme-level diagnosis, see{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={inlineLinkClass}>diagnosing a slow Dawn theme</Link>{" "}
                        and the wider{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={inlineLinkClass}>Shopify store speed optimization guide</Link>.
                    </BlogText>

                    <BlogHeader>5. Compare ownership precisely</BlogHeader>
                    <BlogText>
                        “Own the website” is too vague for a contract. Identify control of domain, DNS, Shopify
                        organization, payment accounts, repositories, hosting, CMS, analytics and vendor accounts.
                        Separate client content and data, paid custom deliverables, PandaCodeGen&apos;s reusable or
                        pre-existing tools and third-party components under their original licenses. We break the same
                        question down further in{" "}
                        <Link href="/blog/do-you-own-your-website" className={inlineLinkClass}>what it means to own your website</Link>.
                    </BlogText>

                    <BlogHeader>6. Know when Shopify remains the right choice</BlogHeader>
                    <BlogList
                        items={[
                            "The theme and supported extensions meet the accepted customer experience.",
                            "The merchant team values platform-native editing and operation.",
                            "Measured performance issues can be fixed without architectural change.",
                            "Required apps and workflows are well supported and economically acceptable.",
                            "The organization does not want to operate a separate frontend and release system.",
                        ]}
                    />

                    <BlogHeader>7. Know when headless deserves evaluation</BlogHeader>
                    <BlogList
                        items={[
                            "A differentiated experience is impractical in the accepted theme constraints.",
                            "Multiple content, commerce or product systems must appear in one controlled interface.",
                            "The business needs a consistent experience across supported channels.",
                            "An established product and engineering operation needs frontend release independence.",
                            "The accepted benefit justifies additional integration and maintenance responsibility.",
                        ]}
                    />
                    <BlogText>
                        Headless keeps Shopify as the system of record. Admin, product data, inventory, orders,
                        customers and checkout stay where they are, so the storefront changes without a product or
                        order-data migration and the merchant team keeps the interface it already knows. What moves to
                        your side is the storefront code, its hosting and its release process, plus any customer-facing
                        feature that a theme or an app used to provide. Price that transfer before deciding, because it
                        is the part that keeps costing after launch.
                    </BlogText>
                    <BlogText>
                        Our{" "}
                        <Link href="/blog/shopify-headless" className={inlineLinkClass}>headless Shopify architecture and migration guide</Link>{" "}
                        goes through the storefront paths, the integration surface and the operating responsibility each
                        one transfers to your team.
                    </BlogText>

                    <BlogHeader>8. Know when a separate custom commerce stack is justified</BlogHeader>
                    <BlogText>
                        Replacing the commerce back end is a larger decision than replacing the storefront. Require a
                        documented reason such as unsupported business logic, regulatory or data constraints, or
                        materially different operating requirements. Include payments, tax, fraud, inventory, order
                        management, customer service, security and recovery in scope. Our{" "}
                        <Link href="/services/custom-engineering" className={inlineLinkClass}>custom engineering service</Link>{" "}
                        describes how work at that scope is specified and delivered.
                    </BlogText>

                    <BlogHeader>9. Make migration SEO-safe</BlogHeader>
                    <BlogList
                        items={[
                            "Inventory current URLs, status codes, canonicals, metadata, content, internal links and structured data.",
                            "Preserve URLs where practical and map changed URLs to relevant permanent redirects.",
                            "Render crawlable navigation and product information with accurate index controls.",
                            "Keep product structured data and merchant feeds consistent with visible offers.",
                            "Validate robots, sitemaps and Search Console before and after release.",
                            "Expect possible fluctuations; do not promise ranking retention or a fixed recovery date.",
                        ]}
                    />
                    <BlogText>
                        <Link href="/blog/will-migrating-hurt-my-seo" className={inlineLinkClass}>What a migration does to search visibility</Link>{" "}
                        covers the same controls from the search side, including what to monitor after release.
                    </BlogText>

                    <BlogHeader>10. Use project-specific commercial terms</BlogHeader>
                    <BlogText>
                        PandaCodeGen&apos;s public planning tiers start at $1,500, $3,500 and $5,000 to $10,000-plus.
                        Final scope may add or remove features. Payment is normally 30 percent at onboarding and 70
                        percent on delivery. Refund, ownership, performance, support and change-control rights follow
                        the accepted contract, not a generic platform comparison. The{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link> lists what each tier covers.
                    </BlogText>

                    <section className="my-10">
                        <h2 className="mb-3 text-xl font-bold text-charcoal">Related reading</h2>
                        <p className="leading-relaxed text-stone-700">
                            The same decision framework applied to other platforms:{" "}
                            <Link href="/blog/webflow-vs-custom-website" className={inlineLinkClass}>Webflow compared with a custom website</Link>,{" "}
                            <Link href="/blog/wix-vs-custom-website" className={inlineLinkClass}>Wix compared with a custom website</Link> and{" "}
                            <Link href="/blog/squarespace-vs-custom-website" className={inlineLinkClass}>Squarespace compared with a custom website</Link>.
                        </p>
                    </section>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <Boxes className="mb-4 h-7 w-7 text-amber-300" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will compare the current Shopify stack, requirements, costs, dependencies and SEO
                            controls before recommending optimization, headless Shopify or a separate custom build.
                        </p>
                        <QuoteModalButton cta="shopify_vs_custom_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
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
