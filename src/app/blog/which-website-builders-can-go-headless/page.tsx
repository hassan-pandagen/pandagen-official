import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { spec, asOf } from "@/data/spec-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "which-website-builders-can-go-headless";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/which-website-builders-can-go-headless";

// Every capability claim below is a spec-facts.json entry with the vendor URL it
// was read from and the date it was read. Nothing on this page is asserted from
// memory, because a platform capability goes stale exactly like a price does.
const SPEC_IDS = [
    "shopify-storefront-api-protocol",
    "shopify-storefront-api-content",
    "woocommerce-store-api-scope",
    "woocommerce-rest-api-scope",
    "wix-headless-price",
    "wix-headless-solutions",
    "squarespace-api-scope",
    "webflow-cloud-frameworks",
    "webflow-devlink-direction",
    "gohighlevel-api-scope",
] as const;

const checkedOn = asOf("squarespace-api-scope");

const title = "Which Website Builders Can Actually Go Headless in 2026";
const description =
    "Checked against each platform's own API documentation. Shopify, WooCommerce and Wix genuinely " +
    "support headless, Webflow runs the idea in reverse, and Squarespace does not mention it once.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/which-website-builders-can-go-headless" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "headless website builder",
        "can squarespace go headless",
        "wix headless",
        "webflow headless",
        "headless woocommerce",
        "shopify storefront api",
        "headless storefront",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-18",
        modifiedTime: "2026-08-19",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/which-website-builders-can-go-headless")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/which-website-builders-can-go-headless"),
            datePublished: "2026-08-18T00:00:00-05:00",
            dateModified: "2026-08-19T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Headless commerce", "Website migration", "Next.js", "Web APIs"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Research",
            inLanguage: "en-US",
            wordCount: 2810,
            timeRequired: "PT10M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: SPEC_IDS.map((id) => ({
                "@type": "CreativeWork",
                name: `${spec(id).vendor}: ${spec(id).label}`,
                url: spec(id).source,
            })),
            about: [
                { "@type": "Thing", name: "Headless commerce", sameAs: ["https://en.wikipedia.org/wiki/Headless_content_management_system"] },
                { "@type": "Thing", name: "Web API", sameAs: ["https://en.wikipedia.org/wiki/Web_API"] },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
            ],
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

/** The summary table. `content` and `commerce` are the two separable capabilities. */
const PLATFORMS = [
    {
        name: "Shopify",
        content: "Yes",
        commerce: "Yes",
        verdict: "Full headless",
        note: "One GraphQL API carries products, cart, checkout and the blog",
    },
    {
        name: "WooCommerce",
        content: "Yes",
        commerce: "Yes",
        verdict: "Full headless",
        note: "Needs two separate APIs, and your own hosting",
    },
    {
        name: "Wix",
        content: "Yes",
        commerce: "Yes",
        verdict: "Full headless",
        note: "Free to start, with Wix-hosted checkout available as a shortcut",
    },
    {
        name: "Webflow",
        content: "Partial",
        commerce: "No",
        verdict: "Reversed",
        note: "Brings your code to Webflow rather than Webflow content to you",
    },
    {
        name: "Squarespace",
        content: "No",
        commerce: "No",
        verdict: "Not possible",
        note: "Nine APIs, all back-office, no content and no storefront",
    },
    {
        name: "GoHighLevel",
        content: "Unclear",
        commerce: "No",
        verdict: "Not established",
        note: "Business operations APIs; content delivery not confirmed",
    },
];

const CELL_TONE: Record<string, string> = {
    Yes: "text-emerald-600 font-bold",
    No: "text-red-600 font-bold",
    Partial: "text-orange-600 font-bold",
    Unclear: "text-stone-500 font-bold",
};

export default function WhichBuildersHeadlessPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "Headless builders")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Research</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Which website builders can{" "}
                            <span className="italic text-cognac">actually go headless</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Three of the six can: Shopify, WooCommerce and Wix. Webflow cannot in the usual sense and
                            has deliberately built the reverse. Squarespace cannot at all, and does not use the word
                            once in its developer documentation. GoHighLevel publishes no confirmed content API.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Every claim here was read off the vendor&apos;s own API documentation in {checkedOn}, not
                            from its marketing pages. Sources and check dates are listed against each platform.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        date="18 August 2026"
                        readTime="10 min"
                    />

                    <BlogHeader>What has to be true before a platform counts as headless</BlogHeader>
                    <BlogText>
                        Two separate capabilities decide it, and conflating them is why most articles on this topic
                        arrive at the wrong answer. <BlogHighlight>Content out</BlogHighlight> means an API that
                        returns your pages, posts and text so another application can render them.{" "}
                        <BlogHighlight>Commerce out</BlogHighlight> means an API that lists products, holds a cart and
                        completes a checkout from a front end you built yourself.
                    </BlogText>
                    <BlogText>
                        A platform can have one without the other, and several here do. An API that reads your order
                        history is not a headless storefront, even though both are described with the same word on
                        vendor comparison pages. The question that separates them is simple: could a developer build a
                        working shop, or a working content site, on a server the platform does not control? If nothing
                        the API returns can be rendered to a visitor, the answer is no regardless of how many endpoints
                        exist. For the wider concept, our guide to{" "}
                        <Link href="/blog/what-is-headless-commerce" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            what headless commerce is
                        </Link>{" "}
                        covers the architecture itself.
                    </BlogText>

                    <BlogHeader>Shopify: yes, and it carries the content as well as the shop</BlogHeader>
                    <BlogText>
                        Shopify supports headless fully through its Storefront API, which is{" "}
                        {spec("shopify-storefront-api-protocol").value.toLowerCase()}. Shopify states plainly that
                        there is no REST equivalent, so any headless Shopify build is a GraphQL build. Read{" "}
                        {asOf("shopify-storefront-api-protocol")}.
                    </BlogText>
                    <BlogText>
                        The detail that makes Shopify the strongest of the six is what the same API returns beyond
                        products. It exposes {spec("shopify-storefront-api-content").value}. That means one API and one
                        authentication model serve the shop and the surrounding marketing site together, rather than
                        requiring a second CMS bolted alongside. Most platforms here force that split.
                    </BlogText>
                    <BlogText>
                        Shopify also draws a useful line on rate limiting: requests from real buyers are not subject to
                        a fixed per-minute limit, while tokenless access is capped by query complexity. That is the
                        difference between a storefront that survives a traffic spike and one that starts refusing
                        customers at the worst possible moment. Our{" "}
                        <Link href="/blog/shopify-headless" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            headless Shopify guide
                        </Link>{" "}
                        covers the migration sequence in order.
                    </BlogText>

                    <BlogHeader>WooCommerce: yes, but it takes two different APIs</BlogHeader>
                    <BlogText>
                        WooCommerce supports headless, and it does so through two APIs that are easy to confuse. The
                        REST API is {spec("woocommerce-rest-api-scope").value}. Reaching for it to build a storefront
                        is the most common mistake in headless WooCommerce work, because it looks comprehensive right
                        up until the point a customer needs to buy something.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>The Store API is the one that matters for a storefront.</BlogHighlight> It
                        provides {spec("woocommerce-store-api-scope").value}. Being unauthenticated is the point: it is
                        designed to be called from a browser by a shopper who has no credentials, which is exactly what
                        a custom front end needs. Both were read {asOf("woocommerce-store-api-scope")}.
                    </BlogText>
                    <InsightBox label="Why this one is different in practice">
                        WooCommerce is the only platform in this comparison where you also own the server. That makes
                        it the most open and the most work. Nobody rate-limits you, nobody deprecates your endpoints on
                        their schedule, and nobody patches your host either. We have migrated several WordPress and
                        WooCommerce sites onto Next.js, and the hosting question consumes more of the project than the
                        API question does.
                    </InsightBox>

                    <BlogHeader>Wix: yes, and it is free to start</BlogHeader>
                    <BlogText>
                        Wix has a genuine headless product, which surprised us. Wix Headless is{" "}
                        {spec("wix-headless-price").value}, with{" "}
                        {spec("wix-headless-price").qualifier}. Coverage spans{" "}
                        {spec("wix-headless-solutions").value}, and Wix states these sit under a single authentication
                        model and a consistent API pattern. Read {asOf("wix-headless-price")}.
                    </BlogText>
                    <BlogText>
                        Wix also offers something the others do not: hosted pages for checkout, booking and ticket
                        purchase flows that you can redirect into rather than rebuild. For a small team that wants a
                        custom front end without owning payment-flow edge cases, that is a real shortcut, and it is an
                        honest one because Wix documents it as such rather than pretending the custom path is easy.
                        Wix Headless also carries SOC 2 Type II, HIPAA and GDPR compliance, which matters if you are in
                        a regulated field.
                    </BlogText>
                    <BlogText>
                        Anyone who has read our{" "}
                        <Link href="/blog/wix-too-slow" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            piece on Wix performance
                        </Link>{" "}
                        will notice the tension. Those criticisms are about what Wix renders on its own hosting, and
                        going headless removes exactly that layer. A Wix Headless build has a different performance
                        profile from a Wix site, because you are no longer serving Wix&apos;s front end at all.
                    </BlogText>

                    <BlogHeader>Webflow: no, and it is deliberately running in the opposite direction</BlogHeader>
                    <BlogText>
                        Webflow does not support headless in the usual sense, and the reason appears to be a choice
                        rather than a gap. The Data API reads CMS collection items, so content can come out. But the
                        larger part of Webflow&apos;s developer surface moves the other way, and it is substantial
                        enough that calling Webflow closed would be wrong.
                    </BlogText>
                    <BlogText>
                        DevLink handles {spec("webflow-devlink-direction").value}, which Webflow describes as the
                        interface between external codebases and Webflow. Webflow Cloud deploys applications built in{" "}
                        {spec("webflow-cloud-frameworks").value} onto Webflow infrastructure, either standalone or
                        mounted on an existing Webflow site at a path. Both read {asOf("webflow-cloud-frameworks")}.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>
                            So the trade is inverted: instead of taking Webflow content to your host, you take your
                            code to Webflow&apos;s.
                        </BlogHighlight>{" "}
                        Whether that suits you depends entirely on whether hosting is the thing you wanted to control.
                        If you went headless to escape a platform&apos;s hosting, Webflow Cloud is not an escape. If
                        you went headless to write real application code and did not care where it ran, it is a
                        reasonable answer. Our{" "}
                        <Link href="/blog/leaving-webflow-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            notes on leaving Webflow
                        </Link>{" "}
                        deal with the cost side of that decision.
                    </BlogText>

                    <BlogHeader>Squarespace: no</BlogHeader>
                    <BlogText>
                        Squarespace cannot go headless, and this is the clearest finding of the six. Squarespace
                        publishes {spec("squarespace-api-scope").value}. The nine are{" "}
                        {spec("squarespace-api-scope").qualifier}. Checked {asOf("squarespace-api-scope")}.
                    </BlogText>
                    <BlogText>
                        Every one of those is back-office. You can read your orders, adjust your stock and export your
                        contacts. You cannot retrieve the text of a page, list your blog posts, or complete a purchase
                        from a front end you wrote. The word headless appears zero times across the Squarespace
                        developer portal, which for a platform of that size reads as a position rather than an
                        oversight.
                    </BlogText>
                    <BlogText>
                        The practical consequence for a Squarespace owner is that there is no gradual path. On Shopify
                        or WooCommerce you can put a custom front end in front of the existing store and keep the
                        back office you already know. On Squarespace, leaving the front end means leaving the platform,
                        which is why our{" "}
                        <Link href="/blog/squarespace-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            Squarespace migration costs
                        </Link>{" "}
                        assume a full rebuild rather than a staged one.
                    </BlogText>

                    <BlogHeader>GoHighLevel: business APIs, but no confirmed content API</BlogHeader>
                    <BlogText>
                        GoHighLevel publishes {spec("gohighlevel-api-scope").value}. Those are operations APIs, and
                        they are good ones for what they do. What we could not confirm is whether GoHighLevel can serve
                        page or blog content to an external front end. Checked {asOf("gohighlevel-api-scope")}.
                    </BlogText>
                    <BlogText>
                        Blogs and Funnels APIs are listed in the developer portal navigation, but the endpoint
                        documentation is rendered client-side and neither a direct fetch nor a parse reached the field
                        definitions. We are recording that as unestablished rather than guessing, because the
                        difference between an API that returns post metadata and one that returns post body content is
                        the entire question, and getting it wrong in either direction would mislead someone planning a
                        build.
                    </BlogText>
                    <BlogText>
                        For agencies, the pattern that works regardless is the one we already recommend:{" "}
                        <Link href="/blog/gohighlevel-keep-crm-replace-website" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            keep GoHighLevel as the CRM and replace the website
                        </Link>
                        . The CRM, calendar and payment integrations are the reason people stay, and none of them
                        require GoHighLevel to render the pages.
                    </BlogText>

                    <BlogQuote>
                        On Shopify or WooCommerce you can put a custom front end in front of the shop you already have.
                        On Squarespace, leaving the front end means leaving the platform.
                    </BlogQuote>

                    <BlogHeader>The six platforms side by side</BlogHeader>
                    <div className="my-8 grid gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">Can go headless</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li><strong className="text-charcoal">Shopify.</strong> One GraphQL API carries products, cart, checkout and the blog</li>
                                <li><strong className="text-charcoal">WooCommerce.</strong> Fully open, but it takes two separate APIs and your own hosting</li>
                                <li><strong className="text-charcoal">Wix.</strong> Free to start, with Wix-hosted checkout available as a shortcut</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-cognac">Cannot, or not in that direction</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li><strong className="text-charcoal">Webflow.</strong> Runs it in reverse: you bring your code to Webflow rather than Webflow content to you</li>
                                <li><strong className="text-charcoal">Squarespace.</strong> Nine APIs, all back-office, no content and no storefront</li>
                                <li><strong className="text-charcoal">GoHighLevel.</strong> Business operations APIs; content delivery not established</li>
                            </ul>
                        </div>
                    </div>
                    <BlogText>
                        Content out and commerce out are scored separately, because a platform can pass one and fail
                        the other. Every row was verified against the vendor&apos;s own documentation in {checkedOn}.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                            <caption className="sr-only">
                                Headless capability by website builder, content and commerce scored separately,
                                verified {checkedOn}
                            </caption>
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Platform</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Content out</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Commerce out</th>
                                    <th scope="col" className="px-4 py-3 font-bold">Verdict</th>
                                    <th scope="col" className="px-4 py-3 font-bold">What decides it</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PLATFORMS.map((p) => (
                                    <tr key={p.name} className="border-t border-stone-200 align-top">
                                        <th scope="row" className="px-4 py-3 font-bold text-charcoal">{p.name}</th>
                                        <td className={`px-4 py-3 ${CELL_TONE[p.content]}`}>{p.content}</td>
                                        <td className={`px-4 py-3 ${CELL_TONE[p.commerce]}`}>{p.commerce}</td>
                                        <td className="px-4 py-3 text-charcoal">{p.verdict}</td>
                                        <td className="px-4 py-3 text-stone-600">{p.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What we have actually shipped on these</BlogHeader>
                    <BlogText>
                        Everything above is checkable against vendor documentation, which is deliberate. This part is
                        not, and it is the reason the table above is scored the way it is rather than the way vendor
                        comparison pages score it.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Panda Patches is the headless build we know best, and it is founder-affiliated.</BlogHighlight>{" "}
                        It is owned and operated by a PandaCodeGen co-founder, we built and maintain it, and we hold no
                        ownership stake, so it is operating experience rather than independent client proof. It is a
                        three-year-old WordPress store now running headless on Next.js with Sanity, Supabase and
                        Square. The lesson that transfers to this comparison is the split: Sanity holds product
                        content, Supabase holds data that gets queried and written, Square holds checkout. Trying to
                        put all three in one system is what makes people say headless was a mistake. The record is in
                        the{" "}
                        <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            Panda Patches project notes
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        On the WordPress side we have migrated client stores off it, and the pattern is consistent
                        enough to state: the API is never the hard part. Hosting, redirects and the plugin behaviour
                        nobody documented are the hard parts. That is why WooCommerce scores as the most open platform
                        here and is still not the one we recommend most often. Openness and ease are different
                        properties, and this comparison measures only the first.
                    </BlogText>
                    <BlogText>
                        We have not shipped a production build on Wix Headless, Webflow Cloud or a Squarespace
                        workaround. Those rows are documentation research and nothing more, and we would rather say so
                        than let the ones we have built lend authority to the ones we have not.
                    </BlogText>

                    <BlogHeader>What this comparison does not establish</BlogHeader>
                    <BlogText>
                        Capability is not suitability, and everything above is capability. That an API exists says
                        nothing about how pleasant it is to work with, how often it breaks, how well it is documented
                        below the introduction page, or what a build on it costs. Those are the questions that actually
                        decide a project, and none of them can be answered by reading documentation.
                    </BlogText>
                    <BlogText>
                        Three specific limits are worth stating. Plan requirements were not confirmed for Shopify or
                        Squarespace, because neither states them on the pages checked, so assume your tier may matter.
                        GoHighLevel&apos;s content APIs are unestablished for the reason given above. And all of this
                        is dated: these are other companies&apos; APIs, they change without telling us, and the check
                        date against each claim is there so you can judge how much to trust it.
                    </BlogText>

                    <BlogHeader>How to use this if you are choosing now</BlogHeader>
                    <BlogText>
                        If you are selling and already on Shopify, headless is available without leaving, and the
                        Storefront API covering blogs and pages means you will not need a second CMS. If you are on
                        WooCommerce, headless is available and WooCommerce is the most open of the six, provided you
                        accept that you own the hosting. If you are on Wix, try Wix Headless before assuming you have
                        to migrate, because it costs nothing to evaluate.
                    </BlogText>
                    <BlogText>
                        If you are on Squarespace or GoHighLevel and want a custom front end, there is no incremental
                        route, and the decision is a rebuild. That is not a reason to rush one. It is a reason to be
                        clear that the choice is binary before you start, rather than discovering it three weeks in.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Not sure whether headless is the right call?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Most sites that ask about headless do not need it, and we will say so. What is worth
                            establishing first is what your current platform actually locks in, what you can export,
                            and what breaks if you move. Our{" "}
                            <Link href="/services/ecommerce" className="font-semibold text-orange-300 underline underline-offset-4">
                                ecommerce engineering work
                            </Link>{" "}
                            starts with that assessment rather than with a rebuild.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <BlogHeader>Primary sources</BlogHeader>
                    <BlogText>
                        Each claim on this page links to the vendor page it was read from, with the date it was read.
                        Where a vendor changes its API, the claim here becomes wrong, so the dates are the useful part.
                    </BlogText>
                    <ul className="my-6 space-y-3 text-sm">
                        {SPEC_IDS.map((id) => (
                            <li key={id} className="border-l-2 border-stone-200 pl-4">
                                <span className="font-bold text-charcoal">
                                    {spec(id).vendor}: {spec(id).label}
                                </span>
                                <br />
                                <a
                                    href={spec(id).source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="break-all text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                                >
                                    {spec(id).source}
                                </a>
                                <span className="text-stone-500">, read {asOf(id)}</span>
                            </li>
                        ))}
                    </ul>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
