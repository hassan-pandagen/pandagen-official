import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
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
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            image: ogImageUrlForPath("/blog/shopify-headless"),
            description,
            datePublished: "2026-02-15",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Shopify", "Shopify themes", "Ecommerce performance", "Core Web Vitals", "Next.js"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Shopify architecture",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 2495,
            timeRequired: "PT12M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/shopify-headless#breadcrumb",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Headless Shopify", item: "https://www.pandacodegen.com/blog/shopify-headless" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/shopify-headless#webpage",
            url: "https://www.pandacodegen.com/blog/shopify-headless",
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": "https://www.pandacodegen.com/blog/shopify-headless#breadcrumb" },
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
                            Headless Shopify in 2026: <span className="italic text-cognac">Architecture Before Hype</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Go headless when you need a specific experience, need to connect to something, or need to
                            sell somewhere Shopify&apos;s themes cannot reach. Do not go headless expecting a
                            guaranteed lift in speed, rankings or revenue. What it means in practice: you build your
                            own storefront and Shopify stays the system of record for products, inventory, orders,
                            customers and checkout. What transfers to you is the storefront code, its hosting, its
                            release process, and any customer-facing feature a theme or an app used to provide.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed July 24, 2026 against current Shopify and Google documentation.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Disclosure: PandaCodeGen builds headless Shopify storefronts, so we have a commercial
                            interest in one side of this decision. That is why the sections below publish no speed
                            uplift, no price band for the market and no payback period.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="Feb 15, 2026" readTime="5 min read" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The 2026 decision in one view</h2>
                        <p className="mb-4 leading-relaxed text-stone-700">
                            Stay on a theme unless a named requirement forces you off it. If something does force you
                            off, the two headless paths differ mainly by how much wiring your team wants to own:
                            Hydrogen gives you Shopify&apos;s conventions and less choice, a custom Storefront API
                            client gives you framework freedom and more integration work. And whichever you pick,
                            search, analytics, consent and checkout are inside the migration scope rather than
                            afterthoughts.
                        </p>
                        <BlogList
                            items={[
                                "Stay on a theme if it already does what you need and your team would rather run one system than two.",
                                "Choose Hydrogen when Shopify's official React stack and its commerce conventions fit the team.",
                                "Build your own Storefront API client if you genuinely need to pick your own framework, and your team is willing to do the wiring.",
                                "Your search traffic, analytics, accessibility, consent banner, checkout and day-to-day running are part of the migration, not afterthoughts.",
                            ]}
                        />
                    </section>

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">The four dimensions a headless decision splits along</h2>
                    <p className="mb-2 leading-relaxed text-stone-700">
                        Score a headless proposal on all four of these or it will look better than it is. Commerce
                        mostly stays where it is, which is the reassuring part. Experience is what you are buying.
                        Discovery is what you can lose if the migration is careless. Operation is the one that keeps
                        costing after launch, and it is the dimension quotes leave out.
                    </p>
                    <div className="my-8 grid gap-4 sm:grid-cols-4">
                        {[
                            { icon: Boxes, title: "Commerce", body: "What you sell and how people buy it." },
                            { icon: GitBranch, title: "Experience", body: "The pages themselves, and who edits them." },
                            { icon: SearchCheck, title: "Discovery", body: "Whether Google and shoppers can still find you." },
                            { icon: ShieldCheck, title: "Operation", body: "Keeping it safe, shipping changes, and who owns it." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>
                    <BlogText>
                        One dated dependency to check before you scope anything: if your operation runs on Stocky for
                        purchase orders or demand forecasting,{" "}
                        Shopify has confirmed it is unavailable after August 31, 2026 &mdash; see{" "}
                        <Link href="/blog/shopify-stocky-sunset-date-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">our guide to that deadline</Link>{" "}
                        for what stops working. Export what you need before you start a replatform, not during it.
                    </BlogText>

                    <BlogHeader>What headless changes</BlogHeader>
                    <BlogText>
                        Your storefront team takes over how pages render, how routing works, what the interface does,
                        how content gets in, and most of the analytics and deployment. Shopify keeps running the
                        commerce: products, collections, pricing, the cart, checkout, and the operations behind them.
                        Write that boundary down feature by feature, because nobody remembers it under pressure. If you are still settling the terminology,{" "}
                        <Link href="/blog/what-is-headless-commerce" className={inlineLinkClass}>what headless commerce means in practice</Link>{" "}
                        covers the architecture in plainer terms first.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no headless price band or uplift figure here">
                        You will not find a cost band for a headless build or a predicted ranking and conversion gain on
                        this page. Both depend on what you ask for, what you connect it to, and who runs it
                        afterwards. A single figure would tell you nothing about your project. Headless
                        is also not automatically faster. Shopify's own guidance ties performance to how well it is built, and
                        moving rendering into your frontend moves that responsibility onto you. Scope the work against your requirements, then measure the build you actually ship.
                    </InsightBox>

                    <BlogHeader>1. Start with requirements that a theme cannot meet well</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The case for headless is a requirement a theme cannot meet, not a theme somebody dislikes. Five requirements qualify, and they share one property: each needs control over rendering, routing or composition that Liquid and sections do not hand you. If your reason is not on this list, a theme project is the cheaper answer.
                        </BlogText>
                    </div>
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
                        If the real problem is one slow page, look at the theme, the apps, the images and the third-party
                        scripts first. A separate frontend can reproduce every one of those problems and add some of
                        its own. Start with{" "}
                        <Link href="/blog/shopify-dawn-theme-slow" className={inlineLinkClass}>diagnosing a slow Dawn theme</Link>{" "}
                        and the wider{" "}
                        <Link href="/blog/shopify-store-speed-optimization" className={inlineLinkClass}>Shopify store speed optimization guide</Link>,
                        and see{" "}
                        <Link href="/blog/shopify-plus-still-slow" className={inlineLinkClass}>why a Shopify Plus store can still be slow</Link>{" "}
                        before assuming the plan is the constraint.
                    </BlogText>

                    <BlogHeader>2. Compare the three storefront paths</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Three paths are available, and what separates them is not capability but how much integration work your team owns afterwards. A Shopify theme leaves almost all of it with Shopify, Hydrogen splits it, and your own Storefront API client puts every decision on your side. Pick by the team you have rather than the stack you admire.
                        </BlogText>
                    </div>
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
                        lightweight JavaScript client for custom storefronts outside Hydrogen. The API is versioned, which means quarterly releases, upgrades and
                        things being removed. Put that in your maintenance plan, not in a footnote. If the choice is
                        still open between staying native, going headless or leaving the platform, work through our{" "}
                        <Link href="/blog/shopify-vs-custom-website" className={inlineLinkClass}>Shopify and custom website decision framework</Link>.
                    </BlogText>

                    <BlogHeader>3. Inventory commerce compatibility</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Inventory what the store does today, because a headless build has to reproduce every one of these behaviors and none of them come across for free. Six areas cover it, and the last one decides the budget: an app that renders through the theme has no theme to render through once you leave.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Products, variants and collections, with the stock, prices and discounts that go with each market you sell into.",
                            "How the cart behaves, how it hands off to checkout, and how express payment and accounts work.",
                            "Search and recommendations, plus anything bolted on: subscriptions, bundles, loyalty, reviews, wish lists.",
                            "Tax, shipping, click and collect, returns, answering customers, and getting orders out.",
                            "Selling to businesses, selling abroad, other languages, and making it usable for everyone.",
                            "Whether each app still works headless: does it have an API, does its UI survive, do its webhooks and checkout hooks fire.",
                        ]}
                    />
                    <BlogText>
                        App compatibility is where the rework tends to hide, so inventory what each app does and what it
                        charges before you commit.{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className={inlineLinkClass}>How to read your real monthly Shopify app bill</Link>{" "}
                        gives you a method for the second half of that.
                    </BlogText>

                    <BlogHeader>4. Treat analytics and consent as architecture</BlogHeader>
                    <BlogText>
                        A custom storefront does not inherit the analytics your theme did. Shopify documents a migration
                        path for custom headless analytics, and says in the same place that the custom setup is not
                        officially supported. Hydrogen has its own
                        supported path. Decide this before framework selection, especially after the 2026 cookie changes.
                    </BlogText>
                    <BlogList
                        items={[
                            "Decide what each consent category covers, and what the site is allowed to do before someone consents, region by region.",
                            "List every event Shopify, your ad platforms, your email tool and your own analytics fire, and say who owns each one and what it means.",
                            "Check that an event is recognized once and not twice, that attribution still works, and that the handoff to checkout holds.",
                            "Write down what your server sends, what the browser sends, how long each is kept, who processes it, and how it gets deleted.",
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
                            "Crawl the store first and keep the record: every URL, its status code, its canonical, its metadata and headings, its content, where it links, and whether it can be indexed.",
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
                    <div data-speakable="true">
                        <BlogText>
                            An acceptance target means nothing without its test conditions attached, because the same build scores differently on another device, network or cache state. Six things turn a number into something you can hold a supplier to. Agree them before the build, since afterwards every disagreement becomes an argument about what was measured.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "A real example of each: the home page, a collection, a product, search, the cart, and any campaign pages you agree on.",
                            "Mobile and desktop profiles with device, network, geography, cache and consent state recorded.",
                            "Three consecutive tests per agreed page and profile, reported without selecting only the best run.",
                            "Functional, accessibility, SEO, analytics and error guardrails.",
                            "Field Core Web Vitals monitored after enough real traffic exists.",
                            "A written remedy if the contracted target is not met under the accepted conditions.",
                        ]}
                    />
                    <BlogText>
                        PandaCodeGen can contract for a 90-plus <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> acceptance target under documented test
                        conditions. That is a delivery criterion, not a promise that every visitor, route, date or
                        third-party state will permanently produce the same score.{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>Core Web Vitals explained</Link>{" "}
                        sets out the field metrics that acceptance criterion is measured against later.
                    </BlogText>

                    <BlogHeader>7. Price total ownership, not only the build</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The build is one line in a headless budget, and it is rarely the line that decides whether the project was worth doing. Six cost categories run for as long as the storefront does, and two of them, security updates and API version upgrades, arrive on Shopify&apos;s schedule rather than yours. Price the whole column.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Working out what you need, designing it, building it, moving the data, and the content work.",
                            "Your Shopify plan, hosting, the CMS, search, email, monitoring, and whatever else you pay monthly.",
                            "App replacement, API limits, integrations and vendor support.",
                            "Security updates, framework and API upgrades, incident response and recovery.",
                            "Merchandising workflow, preview, localization, training and documentation.",
                            "Internal product, design, analytics and engineering time.",
                        ]}
                    />
                    <InsightBox variant="info" label="PandaCodeGen commercial context">
                        Our published Scale tier starts at $5,000 and commonly covers scoped headless work in the
                        $5,000 to $10,000 range. That is our price, not an industry benchmark. Final scope, third-party
                        costs, ownership, support and acceptance terms are agreed before onboarding. See the{" "}
                        <Link href="/services/ecommerce" className={inlineLinkClass}>ecommerce development service</Link> and the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link> for what each tier covers.
                    </InsightBox>

                    <BlogHeader id="sequence">The migration sequence, in order</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Everything above is how to decide. This is how it runs, and the order is the part that
                            matters, because two of these steps are cheap before you build and expensive after.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Audit what the theme currently does. Every template, every app that renders on the storefront, every script, every custom section. This is the inventory the rest of the plan is priced from, and skipping it is one reason headless quotes vary so widely.",
                            "Create the Shopify custom app and grant Storefront API access. This is the connection the new frontend reads products, collections and carts through, and getting the scopes right early avoids rework later.",
                            "Build the frontend against real data, not fixtures. Product, collection, search, cart and any content routes, using the actual catalog, so pagination, variant edge cases and out-of-stock states surface during the build rather than at launch.",
                            "Handle images and third-party scripts deliberately. The theme was doing both for you. Decide what loads on first render and what defers, because this is where a headless rebuild can land slower than the theme it replaced.",
                            "Deploy with URLs mapped and pre-generation decided. Every old address needs a documented destination, and which routes are pre-built versus rendered on request is a decision, not a default.",
                            "Keep checkout on Shopify. It is the part you want Shopify to keep owning, and it is where PCI scope, fraud tooling and payment integrations already live.",
                        ]}
                    />
                    <BlogText>
                        One rule answers a lot of the app-compatibility questions and saves a lot of discovery time:{" "}
                        <strong>apps that talk to the Shopify admin generally keep working, and apps that inject
                        themselves into the theme generally stop existing.</strong> Order management, fulfillment,
                        accounting sync and anything operating behind the scenes is unaffected because it never touched
                        the storefront. Reviews widgets, upsell blocks, cookie banners, chat launchers and page builders
                        all rendered through the theme, so on a headless storefront they have to be rebuilt, replaced
                        with an API-based equivalent, or dropped. Run your app list through that single question before
                        anyone quotes the work.
                    </BlogText>

                    <BlogHeader>8. Require a reversible launch</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A launch is reversible only if the rollback criteria were written down before anyone was under pressure to keep going. Six items make that possible, and the one most often skipped is naming who decides. Settle in advance what evidence would send you back, because at two in the morning nobody wants to be the person who called it.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Content, URL and data freezes with named exceptions.",
                            "Production-like staging and a complete acceptance checklist.",
                            "Load, security, accessibility, browser and device testing.",
                            "Written steps for DNS, redirects, cache, webhooks, secrets and who owns each provider account.",
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
