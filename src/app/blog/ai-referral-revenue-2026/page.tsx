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
import { BlogAuthor, BlogHeader, BlogHighlight, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import {
    rows, aiRows, aiOrders, aiRevenue, totalOrders, totalRevenue, aiShareOfAll,
    aiShareOfAcquisition, siteAov, aov, row, usd, pct, chatgptVsGoogleAds,
    trueZeroes, provenance, window_, corroboration, outlier,
} from "@/data/ai-referral-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "ai-referral-revenue-2026";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/ai-referral-revenue-2026";

const title = `ChatGPT Out-Earned Our Google Ads by ${chatgptVsGoogleAds}x: Six Months of AI Referral Revenue`;
const description =
    `First-party data from a founder-affiliated store. ${totalOrders} orders, ${usd(totalRevenue)}, ` +
    `and what ChatGPT, Claude, Perplexity, Gemini and Google AI Overview each actually produced.`;

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/ai-referral-revenue-2026" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "does chatgpt drive sales",
        "ai referral traffic",
        "chatgpt referral revenue",
        "ai search revenue data",
        "answer engine optimization results",
        "google ai overview traffic",
    ],
    openGraph: {
        title, description, type: "article",
        publishedTime: "2026-08-18", modifiedTime: "2026-08-18",
        authors: ["Hassan Jamal"], url: canonicalUrl,
        images: [ogImageForPath("/blog/ai-referral-revenue-2026")],
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
            image: ogImageUrlForPath("/blog/ai-referral-revenue-2026"),
            datePublished: "2026-08-18T00:00:00-05:00",
            dateModified: "2026-08-18T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Answer engine optimization", "Attribution", "Next.js", "E-commerce"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Research",
            inLanguage: "en-US",
            wordCount: 2035,
            timeRequired: "PT11M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            about: [
                { "@type": "Thing", name: "ChatGPT", sameAs: ["https://en.wikipedia.org/wiki/ChatGPT"] },
                { "@type": "Thing", name: "Attribution (marketing)", sameAs: ["https://en.wikipedia.org/wiki/Attribution_(marketing)"] },
            ],
        },
        {
            "@type": "Dataset",
            "@id": `${canonicalUrl}#dataset`,
            name: `Revenue by acquisition source, ${window_.label}`,
            description: provenance.method,
            license: "https://creativecommons.org/licenses/by/4.0/",
            creator: { "@type": "Organization", name: "PandaCodeGen", url: "https://www.pandacodegen.com" },
            temporalCoverage: `${window_.from}/${window_.to}`,
            variableMeasured: "Orders and revenue in USD, by attributed acquisition source",
            measurementTechnique: provenance.method,
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "AI referral revenue", item: canonicalUrl },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: postFAQs.map((faq) => ({
                "@type": "Question", name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        },
    ],
};

export default function AiReferralRevenuePage() {
    const chatgpt = row("ChatGPT");
    const googleAds = row("Google Ad");

    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "AI referral revenue")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Research</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            ChatGPT out-earned our Google Ads by{" "}
                            <span className="italic text-cognac">{chatgptVsGoogleAds}x</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Over {window_.label}, a store we operate took {totalOrders} orders worth{" "}
                            {usd(totalRevenue)}. ChatGPT accounted for {usd(chatgpt.revenueUsd)} of it and Google Ads
                            for {usd(googleAds.revenueUsd)}. AI assistants together produced {aiOrders} orders and{" "}
                            {usd(aiRevenue)}, which is {aiShareOfAll} of all revenue.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            {provenance.business} is {provenance.relationship.charAt(0).toLowerCase()}
                            {provenance.relationship.slice(1)} We publish the relationship because it changes how you
                            should read the numbers. Figures read on {window_.verifiedAt}.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="18 August 2026" readTime="11 min" />

                    <BlogHeader>Why almost nobody else can publish this</BlogHeader>
                    <BlogText>
                        <BlogHighlight>Most businesses report close to zero AI traffic because of how they measure, not because of what happened.</BlogHighlight>{" "}
                        ChatGPT strips the referrer on many links, its mobile apps pass nothing at all, and a large
                        share of people read an answer, close it, and type the company name into a browser. Every one of
                        those lands in a Direct bucket, or nowhere.
                    </BlogText>
                    <BlogText>
                        So a business measuring referrer alone sees a rounding error and concludes AI sends no
                        customers. {provenance.business} captures the referrer where it survives and asks the customer
                        where it does not. Both answers feed one source field. That is the only reason these numbers
                        are not zero, and it is the single most transferable thing in this article.
                    </BlogText>
                    <InsightBox label="The uncomfortable implication">
                        If your analytics says AI sends you nothing, that is a claim about your instrument. Before
                        concluding AI is not worth attention, add one question to your enquiry form asking how the
                        customer heard about you, and wait ninety days. It costs nothing and it is the only way to see
                        traffic that arrives without a referrer.
                    </InsightBox>

                    <BlogHeader>Revenue by source, {window_.label}</BlogHeader>
                    <BlogText>
                        Every row Panda Patches recorded, including the ones that produced nothing. Sorted by revenue.
                        AI assistants are marked so you can find them without hunting.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                            <caption className="sr-only">
                                Orders and revenue by acquisition source, {window_.label}
                            </caption>
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Source</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Orders</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Revenue</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Share</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r) => {
                                    const isAi = r.kind === "ai-assistant";
                                    return (
                                        <tr key={r.source} className={`border-t border-stone-200 ${isAi ? "bg-cognac/5" : ""}`}>
                                            <th scope="row" className={`px-4 py-2.5 font-medium ${isAi ? "text-cognac" : "text-charcoal"}`}>
                                                {r.source}
                                                {isAi && <span className="sr-only"> (AI assistant)</span>}
                                            </th>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{r.orders}</td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{usd(r.revenueUsd)}</td>
                                            <td className="px-4 py-2.5 text-right tabular-nums text-stone-500">{pct(r.revenueUsd, totalRevenue)}</td>
                                        </tr>
                                    );
                                })}
                                <tr className="border-t-2 border-stone-300 bg-stone-50 font-bold">
                                    <th scope="row" className="px-4 py-3 text-charcoal">Total</th>
                                    <td className="px-4 py-3 text-right tabular-nums text-charcoal">{totalOrders}</td>
                                    <td className="px-4 py-3 text-right tabular-nums text-charcoal">{usd(totalRevenue)}</td>
                                    <td className="px-4 py-3 text-right tabular-nums text-charcoal">100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        {window_.note}
                    </BlogText>

                    <BlogHeader>What each AI assistant produced</BlogHeader>
                    <BlogText>
                        <BlogHighlight>ChatGPT did the volume, but it is not the whole picture.</BlogHighlight> Six
                        assistants appear separately, including Google AI Overview, which most analytics setups cannot
                        distinguish from ordinary Google organic traffic at all.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
                            <caption className="sr-only">Orders, revenue and average order value by AI assistant</caption>
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Assistant</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Orders</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Revenue</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Avg order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aiRows.map((r) => (
                                    <tr key={r.source} className="border-t border-stone-200">
                                        <th scope="row" className="px-4 py-2.5 font-medium text-charcoal">{r.source}</th>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{r.orders}</td>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{usd(r.revenueUsd)}</td>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{usd(aov(r.source))}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        The average order across the whole store is {usd(siteAov)}. ChatGPT sits below that at{" "}
                        {usd(aov("ChatGPT"))}, so it brings more orders of smaller size. Claude sits well above it at{" "}
                        {usd(aov("Claude"))}. <BlogHighlight>That Claude figure rests on {row("Claude").orders} orders and proves nothing.</BlogHighlight>{" "}
                        It is here because leaving it out would be selective, not because four orders support a
                        conclusion. Treat it as a thing to watch, not a finding.
                    </BlogText>

                    <BlogHeader>The channels that produced nothing</BlogHeader>
                    <BlogText>
                        {trueZeroes.join(", ")} each recorded zero orders and zero revenue across the whole window.
                        Those are real zeroes, published as zeroes.
                    </BlogText>
                    <BlogText>
                        We include them because a table showing only the sources that worked is an advertisement. The
                        useful version shows what was tried and did not pay, which for this store is the entire
                        short-form video category over six months.
                    </BlogText>

                    <BlogHeader>Google&apos;s own instrument agrees</BlogHeader>
                    <BlogText>
                        <BlogHighlight>A second, unrelated measurement points the same way.</BlogHighlight>{" "}
                        {corroboration.instrument} for the same property recorded{" "}
                        {Number(corroboration.totalImpressions).toLocaleString("en-US")} impressions over{" "}
                        {corroboration.window}, rising from roughly {corroboration.dailyLow} a day in mid-May to{" "}
                        {corroboration.dailyHigh} on {corroboration.dailyHighDate}.
                    </BlogText>
                    <BlogText>
                        That matters more than either number alone. The store&apos;s own attribution could be flattering
                        itself, and Google&apos;s report knows nothing about the store&apos;s orders. Two instruments
                        with no connection to each other showing the same direction is the difference between a claim
                        and evidence. {corroboration.limitation}
                    </BlogText>

                    <BlogHeader>What a customer actually typed</BlogHeader>
                    <BlogText>
                        One customer explained where she had come from without being asked. She had gone to ChatGPT and
                        asked for <BlogHighlight>patch companies with no or low minimums</BlogHighlight>, and the store
                        came up.
                    </BlogText>
                    <BlogText>
                        The query is the useful part. She did not search the category, she searched a constraint. Nobody
                        wins that phrasing by publishing a page about custom patches; you win it by stating your
                        minimum order quantity somewhere a model can read it. Every product decision the business had
                        already made and never written down plainly is a query like that one going to a competitor.
                        We are quoting her anonymously because permission to use her name is hers to give and had not
                        been given when this was published.
                    </BlogText>

                    <BlogHeader>How this compares to the one large study that exists</BlogHeader>
                    <BlogText>
                        <BlogHighlight>A 94-brand study found the same thing about order value that a single store found here.</BlogHighlight>{" "}
                        Visibility Labs analysed twelve months of Google Analytics data from 94 seven and eight-figure
                        ecommerce brands across 2025, comparing 9.46 million non-branded organic sessions against
                        135,000 ChatGPT referral sessions. ChatGPT traffic converted at 1.81% versus 1.39% for
                        non-branded organic, but its average order value was{" "}
                        <a href="https://searchengineland.com/chatgpt-vs-non-branded-organic-search-conversions-470321" target="_blank" rel="noopener noreferrer" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            $204 against $238 for organic
                        </a>
                        , a 14.3% gap, leaving revenue per session 10.3% higher rather than 31%.
                    </BlogText>
                    <BlogText>
                        Our single store shows the same direction on the part that overlaps. ChatGPT&apos;s average
                        order here is {usd(aov("ChatGPT"))} against a site average of {usd(siteAov)}. Two samples with
                        nothing in common, one of 94 brands and one of {totalOrders} orders, both finding that AI
                        assistants send smaller orders than the channel they are compared against. That is worth more
                        than either finding alone, and it is the reason the AOV column is on this page at all.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>What is not in that study, or any other we could find, is revenue by individual assistant.</BlogHighlight>{" "}
                        Published work reports ChatGPT against organic search. It does not separate Claude from
                        Perplexity from Google AI Overview, because almost nobody can. That separation is the part of
                        this dataset with no equivalent elsewhere, and it is only possible because the source question
                        is asked at the point of enquiry rather than inferred from a referrer header.
                    </BlogText>

                    <BlogHeader>What this does not establish</BlogHeader>
                    <BlogText>
                        <BlogHighlight>This is one business, in one vertical, over one window.</BlogHighlight>{" "}
                        {provenance.limitation} A store selling custom patches to people who need small runs is close
                        to an ideal case for an assistant that answers constraint-shaped questions. Your category may
                        behave nothing like it.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>There are no conversion rates on this page, deliberately.</BlogHighlight> The
                        lead records and the order records do not share a window, and repeat orders appear to inherit
                        the original lead&apos;s source. Dividing one by the other produced a conversion rate above
                        100% for two sources, which is impossible, so the whole measure is withheld rather than
                        presented in a softened form.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>One outlier is disclosed rather than removed.</BlogHighlight> {outlier.note}
                    </BlogText>
                    <BlogText>
                        And self-reported attribution has its own bias. A customer who used ChatGPT and then searched
                        Google may report either one. The honest reading is that these figures are better than
                        referrer-only tracking and still not exact, which is true of every attribution number anyone
                        has ever published.
                    </BlogText>

                    <BlogHeader>What we would do with this if it were your business</BlogHeader>
                    <BlogText>
                        Add the how-did-you-hear question to your enquiry form today. It is the cheapest change on this
                        list and without it none of the rest is visible. Then wait a quarter before drawing any
                        conclusion, because a single large order will swing a small channel&apos;s share by several
                        points.
                    </BlogText>
                    <BlogText>
                        Then write down the constraints you already satisfy. Minimum order quantity, turnaround,
                        materials, what you will not do. Those are the terms the questions are shaped around, and most
                        businesses keep them in a salesperson&apos;s head. Our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            answer engine playbook
                        </Link>{" "}
                        covers the structural side, and{" "}
                        <Link href="/blog/agentic-browsing-pagespeed-score" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                            agentic browsing
                        </Link>{" "}
                        covers what an assistant has to be able to load before any of it counts.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Can your site tell you this?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Most cannot, and the gap is usually one form field and a place to put the answer rather
                            than a new analytics platform. Our{" "}
                            <Link href="/services/custom-engineering" className="font-semibold text-orange-300 underline underline-offset-4">
                                custom engineering work
                            </Link>{" "}
                            builds the reporting layer that makes this visible, on the same stack this store runs on.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <BlogHeader>Method</BlogHeader>
                    <BlogText>
                        Source: {provenance.system}. Attribution: {provenance.method} Window: {window_.label}, read on{" "}
                        {window_.verifiedAt}. Relationship: {provenance.relationship} Corroborating instrument:{" "}
                        {corroboration.instrument}, {corroboration.window}.
                    </BlogText>
                    <BlogText>
                        The underlying figures live in a single data file in this site&apos;s repository, and every
                        percentage on this page is computed from it at build time rather than typed into a sentence. If
                        a row and a total ever disagree, the build fails rather than publishing two numbers that
                        contradict each other.
                    </BlogText>

                    <TopicUpLink postId={postId} />
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
