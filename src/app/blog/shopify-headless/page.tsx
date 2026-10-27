import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Boxes, GitBranch, SearchCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { asOf, spec } from "@/data/spec-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const QuoteModalButton = dynamicImport(() => import("@/components/ui/QuoteModalButton"));

const postId = "shopify-headless";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
// 3 Oct 2026: retargeted to cost. Search Console showed Google testing this page for
// "shopify headless pricing", "headless shopify cost" and "how much does shopify
// headless cost" (10–30 Aug, around position 35), then dropping it: the page refused
// to give a cost. It now answers with dated vendor line items and our own price,
// still without inventing a market price band. The general "what is headless
// commerce" questions belong to /blog/what-is-headless-commerce.
const title = "Headless Shopify Cost in 2026: Plans, Hosting and Build";
const description =
    "What headless Shopify costs in 2026, line by line: your plan, Hydrogen and Oxygen at no extra charge, the build, apps and the upkeep most quotes leave out.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "headless Shopify cost",
        "Shopify headless pricing",
        "is Shopify Oxygen free",
        "headless Shopify without Plus",
        "Hydrogen vs Next.js cost",
        "Shopify headless migration",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-02-15",
        modifiedTime: "2026-10-03",
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
    { name: "Shopify pricing (US)", url: spec("shopify-plan-basic").source },
    { name: "Shopify: Hydrogen and Oxygen fundamentals, supported plans", url: spec("shopify-oxygen-hosting").source },
    { name: "Shopify App Store: Headless channel", url: spec("shopify-headless-channel-price").source },
    { name: "Shopify API versioning", url: spec("shopify-api-version-support").source },
    { name: "Shopify Storefront API reference", url: "https://shopify.dev/docs/api/storefront/latest" },
    { name: "Vercel pricing", url: spec("vercel-pro-price").source },
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
            dateModified: "2026-10-03",
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
            articleSection: "Shopify costs",
            inLanguage: "en-US",
            about: [
                { "@type": "SoftwareApplication", name: "Shopify", sameAs: ["https://en.wikipedia.org/wiki/Shopify"] },
                { "@type": "Thing", name: "Ecommerce", sameAs: ["https://en.wikipedia.org/wiki/E-commerce"] },
                { "@type": "Thing", name: "Web performance", sameAs: ["https://en.wikipedia.org/wiki/Web_performance"] },
            ],
            wordCount: 3480,
            timeRequired: "PT17M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
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

// "$29/mo billed yearly", the first sentence of a Shopify plan's registry qualifier.
const yearly = (id: string) => (spec(id).qualifier ?? "").split(". ")[0];

const sourceLinkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";
const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function ShopifyHeadlessPage() {
    return (
        <>
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb schemaId={"https://www.pandacodegen.com/blog/shopify-headless#breadcrumb"} items={postCrumbs(postId, "Headless Shopify cost")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Shopify costs</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Headless Shopify cost in 2026: <span className="italic text-cognac">every line on the bill</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Headless Shopify costs your Shopify plan, the storefront build and someone to run it. The
                            headless parts cost nothing extra: Hydrogen is {spec("shopify-hydrogen-license").value}, Oxygen
                            hosting comes at no extra charge on every paid plan from Starter to Plus, and the Headless
                            channel that issues your Storefront API keys is {spec("shopify-headless-channel-price").value}.
                            You don&apos;t need Shopify Plus. The money goes on the build, on replacing storefront apps,
                            and on upkeep, because Shopify releases {spec("shopify-api-version-support").value}.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Prices and plan rules read from Shopify&apos;s own pages in {asOf("shopify-plan-basic")}, as
                            shown to a US visitor. Shopify sets plan prices by country.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Disclosure: PandaCodeGen builds headless Shopify storefronts, so we have a commercial
                            interest in one side of this decision. That&apos;s why this page lists vendor prices and
                            our own price, but no market price band, speed uplift or payback period.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="shopify-headless" />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="shopify-headless" published="2026-02-15" readTime="17 min read" />

                    <BlogHeader id="cost-line-by-line">Headless Shopify cost, line by line</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Headless Shopify costs your Shopify plan, from {spec("shopify-plan-basic").value} on Basic,
                            plus the build and the upkeep. Hydrogen, Oxygen hosting and the Headless channel add nothing
                            to that bill. Shopify publishes the first four lines below, so you can check them today; the
                            other four depend on your store and your team, which is where quotes differ. Shopify prices
                            are US prices as of {asOf("shopify-plan-basic")}.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Headless Shopify cost by line">
                        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr><th className="p-4">Line</th><th className="p-4">What you pay</th><th className="p-4">What to know</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-bold">Shopify plan</td>
                                    <td className="p-4">
                                        Basic {spec("shopify-plan-basic").value} ({yearly("shopify-plan-basic")}), Grow {spec("shopify-plan-grow").value} ({yearly("shopify-plan-grow")}),
                                        Advanced {spec("shopify-plan-advanced").value} ({yearly("shopify-plan-advanced")}), Plus from {spec("shopify-plan-plus").value}
                                    </td>
                                    <td className="p-4">The plan you&apos;d pay for anyway. Hydrogen on Oxygen runs on every paid plan, so it doesn&apos;t force a higher tier.</td>
                                </tr>
                                <tr><td className="p-4 font-bold">Hydrogen</td><td className="p-4">$0</td><td className="p-4">{spec("shopify-hydrogen-license").value}. You can host it on Oxygen or anywhere else.</td></tr>
                                <tr><td className="p-4 font-bold">Oxygen hosting</td><td className="p-4">No extra charge</td><td className="p-4">On {spec("shopify-oxygen-hosting").value.replace("no extra charge on paid plans: ", "")}. Not on Agentic plans.</td></tr>
                                <tr><td className="p-4 font-bold">Headless channel and Storefront API</td><td className="p-4">Free channel</td><td className="p-4">The channel issues your API keys. Shopify sets {spec("shopify-storefront-api-buyer-limits").value}.</td></tr>
                                <tr><td className="p-4 font-bold">Hosting outside Oxygen</td><td className="p-4">Vercel Pro {spec("vercel-pro-price").value}, plus usage</td><td className="p-4">Only if you build in Next.js or another framework. <Link href="/blog/nextjs-hosting-zero-cost" className={inlineLinkClass}>What Vercel really costs</Link> breaks down the usage side.</td></tr>
                                <tr><td className="p-4 font-bold">Storefront apps</td><td className="p-4">Varies</td><td className="p-4">Apps that draw on the theme need replacing or rebuilding. <Link href="/blog/shopify-app-costs-real-monthly-bill" className={inlineLinkClass}>Audit the app bill first</Link>.</td></tr>
                                <tr><td className="p-4 font-bold">The build</td><td className="p-4">Your written quote</td><td className="p-4">Ours starts at the Scale tier, $5,000. A store with its own content system, search, accounts and migration is quoted after a scoping call.</td></tr>
                                <tr><td className="p-4 font-bold">Upkeep</td><td className="p-4">Your team&apos;s or a supplier&apos;s time</td><td className="p-4">At least one API upgrade a year, plus security updates, monitoring and releases.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="plus">Do you need Shopify Plus to go headless?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            No. Shopify offers Oxygen hosting at no extra charge on Starter, Basic, Grow, Advanced, Plus,
                            and Pause and build, and the Headless channel is {spec("shopify-headless-channel-price").value} on
                            the App Store. Plus starts at {spec("shopify-plan-plus").value}, and choosing it is a decision
                            about your sales volume and the features you need, not a condition of going headless.
                        </BlogText>
                    </div>
                    <BlogText>
                        One planning catch: development stores and trial plans can build and test a Hydrogen storefront,
                        but they get no public environments, so their preview links always need a store login. The
                        number of public environments differs by paid plan, so check that limit before you promise
                        anyone a shareable preview.
                    </BlogText>

                    <BlogHeader id="oxygen-or-vercel">Hydrogen on Oxygen or Next.js on Vercel: the running cost</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            On Oxygen, hosting costs nothing extra, and you work inside Oxygen&apos;s limits:{" "}
                            {spec("shopify-oxygen-limits").value}, and {spec("shopify-oxygen-limits").qualifier}. On Vercel,
                            a Next.js storefront starts at the Pro plan&apos;s {spec("vercel-pro-price").value} (
                            {spec("vercel-pro-price").qualifier}), and you choose the framework, the content system and
                            the rest of the stack yourself.
                        </BlogText>
                    </div>
                    <BlogText>
                        Next to the build and the upkeep, that hosting gap is small. Pick by the team that will run the
                        storefront: Hydrogen keeps you on Shopify&apos;s conventions and release tooling, and Next.js
                        suits a team that already ships one or needs to bring in other systems. Both talk to the same
                        Storefront API, and both send shoppers to the same Shopify checkout.
                    </BlogText>

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

                    <h2 className="mt-12 mb-3 text-2xl font-bold text-charcoal">Four parts of your business to check before replacing the storefront</h2>
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
                        One dated dependency to check before you scope anything: if your operation ran on Stocky for
                        purchase orders or demand forecasting, Shopify made it unavailable after August 31, 2026. See{" "}
                        <Link href="/blog/shopify-stocky-sunset-date-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">our guide to that deadline</Link>{" "}
                        for what stopped working, and export what you still need before a replatform starts.
                    </BlogText>

                    <BlogHeader id="is-it-worth-it">Is headless Shopify worth it?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            For most stores, no. We build headless storefronts, so take that as a filter, not modesty.{" "}
                            <strong>Headless converts a configurable store into a software project.</strong> The build
                            is the smaller half. Whether it was worth it comes down to who maintains it, deploys it and
                            is on call for it in year two.
                        </BlogText>
                    </div>
                    <BlogText>
                        Before costing a headless build, price the alternative honestly.{" "}
                        <strong>Online Store 2.0</strong> (sections on every template, app blocks and metafields)
                        closed a large part of the gap that originally justified going headless. A well-built 2.0
                        theme on a disciplined app stack is the right answer for a great many stores that are
                        currently being quoted for Hydrogen.
                    </BlogText>
                    <BlogText>
                        What you give up is specific, and it is worth writing down before anyone signs:
                    </BlogText>
                    <BlogList
                        items={[
                            "The theme editor. Merchandisers lose drag-and-drop layout control over the storefront. Every layout change becomes a developer ticket and a deploy, which is a staffing change disguised as a technical one.",
                            "One-click app installs for storefront features. Apps that inject storefront UI through theme app extensions don't carry over, so reviews, loyalty, upsell and search widgets each need an integration decision, not an install.",
                            "Native previews and the safety of theme duplication. Testing moves into your own staging and release process, which you now own.",
                            "Shopify's own defaults for storefront analytics and consent. These become architecture you configure, not settings you toggle. The analytics section below covers them.",
                        ]}
                    />
                    <BlogText>
                        The revenue threshold you will see quoted, usually &quot;not under a few million a year&quot;,
                        comes from practitioner forums rather than from Shopify, and we do not repeat it as a rule.
                        <strong> The question that decides it: do you employ or retain someone who will own the
                        frontend after launch?</strong> A ten-million-dollar store without that person is a worse
                        candidate than a two-million-dollar store with an engineering team. If nobody will own it, the
                        right call is a better 2.0 theme, and the sections below show when it isn&apos;t.
                    </BlogText>

                    <BlogHeader>What going headless on Shopify changes</BlogHeader>
                    <BlogText>
                        Your storefront team takes over how pages render, how routing works, what the interface does,
                        how content gets in, and most of the analytics and deployment. Shopify keeps running the
                        commerce: products, collections, pricing, the cart, checkout, and the operations behind them.
                        Write that boundary down feature by feature, because nobody remembers it under pressure. If you are still settling the terminology,{" "}
                        <Link href="/blog/what-is-headless-commerce" className={inlineLinkClass}>what headless commerce means in practice</Link>{" "}
                        covers the architecture in plainer terms first.
                    </BlogText>
                    <InsightBox variant="info" label="Why there is no market price band here">
                        This page gives Shopify&apos;s published prices and ours, but no industry band for a headless
                        build and no predicted ranking or conversion gain. Both depend on what you ask for, what you
                        connect it to and who runs it afterwards, so one figure would tell you nothing about your
                        project. Headless isn&apos;t automatically faster either: Shopify ties performance to how well
                        the storefront is built, and moving rendering into your own frontend moves that responsibility
                        onto you. Scope the work against your requirements, then measure the build you ship.
                    </InsightBox>

                    <BlogHeader>What can a Shopify theme not do?</BlogHeader>
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

                    <BlogHeader>Hydrogen, Next.js or a Shopify theme: which path?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Three paths are available, and the difference between them is how much integration work your team owns afterwards. A Shopify theme leaves almost all of it with Shopify, Hydrogen splits it, and your own Storefront API client puts every decision on your side. Pick by the team you have rather than the stack you admire.
                        </BlogText>
                    </div>
                    <div className="my-6 overflow-x-auto rounded-xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
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

                    <BlogHeader>Which Shopify apps break when you go headless?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Apps that render through the theme break, because a headless storefront has no theme for them to render through: reviews widgets, upsell blocks, cookie banners, chat launchers and page builders. Apps that work through the Shopify admin, such as order management, fulfillment and accounting sync, keep working. Inventory what the store does today across these six areas; the last one decides the budget.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Products, variants and collections, with the stock, prices and discounts that go with each market you sell into.",
                            "How the cart behaves, how it hands off to checkout, and how express payment and accounts work.",
                            "Search and recommendations, plus anything bolted on: subscriptions, bundles, loyalty, reviews, wish lists.",
                            "Tax, shipping, click and collect, returns, answering customers, and getting orders out.",
                            "Selling to businesses, selling abroad, other languages, and making it usable for everyone.",
                            "Whether each app works with the new storefront: can it exchange the required data, display its customer-facing features and still respond correctly to orders and checkout actions.",
                        ]}
                    />
                    <BlogText>
                        App compatibility is where the rework tends to hide, so inventory what each app does and what it
                        charges before you commit.{" "}
                        <Link href="/blog/shopify-app-costs-real-monthly-bill" className={inlineLinkClass}>How to read your real monthly Shopify app bill</Link>{" "}
                        gives you a method for the second half of that.
                    </BlogText>

                    <BlogHeader>How does headless Shopify change analytics and consent?</BlogHeader>
                    <BlogText>
                        A custom storefront doesn&apos;t inherit the analytics your theme did. Shopify documents a migration
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
                        Advertising measurement belongs in the same scope, not in a later task. Our guide to{" "}
                        <Link href="/blog/fix-meta-ad-tracking-2026" className={inlineLinkClass}>repairing Meta ad tracking in 2026</Link>{" "}
                        covers the server-side event work that a storefront change usually disturbs.
                    </BlogText>

                    <BlogHeader>Will headless Shopify hurt your SEO?</BlogHeader>
                    <BlogText>
                        Headless isn&apos;t better or worse for SEO by itself. The implementation controls the output.
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

                    <BlogHeader>What speed should a headless Shopify store hit?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Agree a written lab target before the build, with its test conditions attached: we contract for a 90+ Lighthouse <Link href="/ai-info/pricing-and-guarantees" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">acceptance target</Link> on the pages named in the scope. Without the conditions the number means nothing, because the same build scores differently on another device, network or cache state. Six things make it a target you can hold a supplier to.
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

                    <BlogHeader id="after-launch">What keeps costing after launch?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            The build is one line in a headless budget, and rarely the one that decides whether the
                            project was worth doing. Six cost categories run for as long as the storefront does, and two
                            of them arrive on Shopify&apos;s schedule, not yours: security updates, and API upgrades,
                            because Shopify releases {spec("shopify-api-version-support").value}. Price the whole column.
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
                        Our published Scale tier starts at $5,000. A headless storefront with its own content system,
                        search, customer accounts and migration usually goes beyond Scale and is quoted after a scoping
                        call. That&apos;s our price, not an industry benchmark. Final scope, third-party costs,
                        ownership, support and acceptance terms are agreed in writing before work starts. See the{" "}
                        <Link href="/services/ecommerce" className={inlineLinkClass}>ecommerce development service</Link> and the{" "}
                        <Link href="/pricing" className={inlineLinkClass}>pricing page</Link> for what each tier covers.
                    </InsightBox>

                    <BlogHeader id="sequence">The migration sequence, in order</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            A headless Shopify migration runs in six steps, in this order, because two of them are cheap
                            before you build and expensive after.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Audit what the theme currently does. Every template, every app that renders on the storefront, every script, every custom section. This is the inventory the rest of the plan is priced from, and skipping it is one reason headless quotes vary so widely.",
                            "Create the Shopify custom app and grant Storefront API access. This is the connection the new frontend reads products, collections and carts through, and getting the scopes right early avoids rework later.",
                            "Build the frontend against real data, not fixtures. Product, collection, search, cart and any content routes, using the actual catalog, so pagination, variant edge cases and out-of-stock states surface during the build rather than at launch.",
                            "Handle images and third-party scripts deliberately. The theme was doing both for you. Decide what loads on first render and what defers, because this is where a headless rebuild can land slower than the theme it replaced.",
                            "Deploy with URLs mapped and pre-generation decided. Every old address needs a documented destination, and which routes are pre-built versus rendered on request is a decision, not a default.",
                            "Keep checkout on Shopify. It's what you want Shopify to keep owning, and it is where PCI scope, fraud tooling and payment integrations already live.",
                        ]}
                    />
                    <BlogText>
                        One rule answers a lot of the app-compatibility questions and saves a lot of discovery time:{" "}
                        <strong>apps that talk to the Shopify admin generally keep working, and apps that inject
                        themselves into the theme generally stop existing.</strong> Order management, fulfillment,
                        accounting sync and anything operating behind the scenes is unaffected because it never touched
                        the storefront. Reviews widgets, upsell blocks, cookie banners, chat launchers and page builders
                        all rendered through the theme, so on a headless storefront they have to be rebuilt, replaced
                        with an API-based equivalent, or dropped. Run your app list through that question before
                        anyone quotes the work.
                    </BlogText>

                    <BlogHeader>Can you roll back a headless Shopify launch?</BlogHeader>
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
                        <h2 className="mb-3 text-3xl font-bold">Tell us what you have</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will map URLs, commerce requirements, app dependencies, data flows, test conditions and
                            ownership before recommending Hydrogen, a custom storefront or a Shopify-native solution.
                        </p>
                        <QuoteModalButton cta="shopify_headless_migration_plan" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Ask us about your site <ArrowRight className="h-4 w-4" />
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
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
