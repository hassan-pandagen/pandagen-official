import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import {
    rows, aiRows, aiOrders, aiRevenue, totalOrders, totalRevenue, aiShareOfAll,
    siteAov, aov, row, usd, pct, chatgptVsGoogleAds,
    trueZeroes, provenance, window_, corroboration, outlier,
    monthly, monthlyAiAverage, monthlyAiRange, monthShare, studyReadOnLabel,
} from "@/data/ai-referral-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "ai-referral-revenue-2026";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/ai-referral-revenue-2026";

const title = `ChatGPT Out-Earned Our Google Ads by ${chatgptVsGoogleAds}x: Six Months of AI Referral Revenue`;
const description =
    // 27 Oct 2026: an earlier rewrite attributed every recorded order to AI assistants. The AI share
    // is aiRevenue; totalRevenue is every recorded channel. Keep the two distinct in this sentence.
    `${usd(aiRevenue)} of ${usd(totalRevenue)} in recorded revenue at a founder-affiliated store ` +
    `was attributed to AI assistants from ${window_.label}.`;

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
        publishedTime: "2026-08-18", modifiedTime: "2026-10-27",
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
            dateModified: "2026-10-27T00:00:00-05:00",
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
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "AI referral revenue")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
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
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id="ai-referral-revenue-2026" />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="ai-referral-revenue-2026" published="2026-08-18" readTime="11 min" />

                    <BlogHeader>How we recorded AI discovery</BlogHeader>
                    <BlogText>
                        <BlogHighlight>Referrer-only attribution can miss AI-assisted discovery.</BlogHighlight>{" "}
                        Referrers and campaign parameters vary by link and client. A later direct visit or brand search
                        may not retain the earlier AI interaction. This dataset cannot measure how often that happens
                        elsewhere, so missing attribution alone does not prove a large hidden AI audience.
                    </BlogText>
                    <BlogText>
                        {provenance.business} records surviving referrer signals and customers&apos; answers to
                        &ldquo;How did you find us?&rdquo; in its quote and CRM workflow. Those inputs feed the
                        recorded source value used for these orders. A customer-declared discovery source is useful
                        evidence, but it is not the same as a captured referral click.
                    </BlogText>
                    <InsightBox label="A practical tracking step">
                        Add a discovery question to your enquiry form and keep the answer alongside any captured
                        referrer or campaign signal. Review the records over a stated period. Missing referral data
                        alone does not show whether a customer first encountered the business in an AI answer.
                    </InsightBox>

                    <BlogQuote>
                        These figures describe recorded discovery sources for one store, not how much AI traffic
                        other businesses receive.
                    </BlogQuote>

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

                    <BlogHeader>Separate Google AI visibility evidence</BlogHeader>
                    <BlogText>
                        <BlogHighlight>Google reports visibility, not the source of these orders.</BlogHighlight>{" "}
                        {corroboration.instrument} for the same property recorded{" "}
                        {Number(corroboration.totalImpressions).toLocaleString("en-US")} impressions over{" "}
                        {corroboration.window}, rising from roughly {corroboration.dailyLow} a day in mid-May to{" "}
                        {corroboration.dailyHigh} on {corroboration.dailyHighDate}.
                    </BlogText>
                    <BlogText>
                        The store&apos;s referrer and customer-declared records describe attributed orders and revenue.
                        Google&apos;s report describes appearances in its own AI search features. These are separate
                        measurements: the impressions do not verify ChatGPT order attribution, the revenue ratio or
                        the effect of any particular website change. {corroboration.limitation}
                    </BlogText>

                    <BlogHeader>Month by month since the study</BlogHeader>
                    <BlogText>
                        <BlogHighlight>
                            From {monthly.averageLabel}, {provenance.business} averaged {usd(monthlyAiAverage)} a month in
                            revenue attributed to AI assistants.
                        </BlogHighlight>{" "}
                        Individual months ranged from {usd(monthlyAiRange.low)} to {usd(monthlyAiRange.high)}. There was no
                        advertising spend on those AI referrals; the website, content and maintenance work behind them still
                        took investment. Attribution works the same way as in the study above: captured referral signals plus
                        customers&apos; answers to &ldquo;How did you find us?&rdquo;.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                            <caption className="sr-only">
                                Revenue attributed to AI assistants by month, as recorded on {monthly.recordedOnLabel}
                            </caption>
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold">Month</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">AI orders</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">AI revenue</th>
                                    <th scope="col" className="px-4 py-3 text-right font-bold">Share of all revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthly.months.map((m) => (
                                    <tr key={m.month} className="border-t border-stone-200">
                                        <th scope="row" className="px-4 py-2.5 font-medium text-charcoal">{m.label}</th>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{m.aiOrders}</td>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-600">{usd(m.aiRevenueUsd)}</td>
                                        <td className="px-4 py-2.5 text-right tabular-nums text-stone-500">{monthShare(m)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        These rows were read from the store&apos;s portal on {monthly.recordedOnLabel}, one calendar month at a
                        time, with the same source classification as the study. Read on that date, the portal shows{" "}
                        {usd(monthly.repullOfStudyWindow.aiRevenueUsd)} in AI-attributed revenue for{" "}
                        {monthly.repullOfStudyWindow.window}, against the {usd(aiRevenue)} read on {studyReadOnLabel} and
                        used above. The same orders now carry lower recorded values; we haven&apos;t identified why. We show
                        both readings with their dates, and the monthly average uses the later, lower one.
                    </BlogText>
                    <BlogText>
                        Separately, {monthly.googleAiImpressions.instrument.split(",")[0]} recorded about{" "}
                        {monthly.googleAiImpressions.impressionsApprox.toLocaleString("en-US")} impressions in Google&apos;s
                        AI Overviews and AI Mode from {monthly.googleAiImpressions.label}. An impression is a link shown in
                        an AI answer, not a visit or an order, and this window is later than the one reported above.
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
                        <BlogHighlight>This dataset records revenue by individual assistant.</BlogHighlight>{" "}
                        The cited study compares ChatGPT with organic search. Our store&apos;s records also separate
                        Claude, Perplexity and Google AI Overview where a referral signal or customer-declared
                        discovery identifies them. That provides detail for this business; the classification depends
                        on the information recorded, and it does not establish that equivalent datasets exist nowhere else.
                    </BlogText>

                    <BlogHeader>What this does not establish</BlogHeader>
                    <BlogText>
                        <BlogHighlight>This is one business, in one vertical, over one window.</BlogHighlight>{" "}
                        {provenance.limitation} A store selling custom patches to people who need small runs is close
                        to an ideal case for an assistant that answers constraint-shaped questions. Your category may
                        behave nothing like it.
                    </BlogText>
                    <div className="my-8 grid gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">What the data supports</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li>Revenue attributed to each AI assistant across one store and one six-month window</li>
                                <li>That ChatGPT out-earned Google Ads here by {chatgptVsGoogleAds}x, from the same table and the same window. Read that with the denominator in view: Google Ads is {row('Google Ad').orders} orders and {usd(row('Google Ad').revenueUsd)} in this window, so the ratio rests on a very small paid-ads base and one more order would move it</li>
                                <li>That average order value from AI assistants sits below the site average, which a 94-brand study found independently</li>
                                <li>That referrer-only tracking undercounts AI referrals, which is why these figures are not zero</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-cognac/20 bg-cognac/5 p-6">
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-cognac">What it cannot tell you</p>
                            <ul className="space-y-2.5 text-sm leading-relaxed text-stone-700">
                                <li>Lead-to-order conversion. The lead and order records do not share a window and repeat orders inherit the original source, which produced a rate above 100% for two sources</li>
                                <li>Anything about your category. One business, one vertical, one window</li>
                                <li>That AI beat search. It did not. Google organic is {usd(row('Google').revenueUsd)} across {row('Google').orders} orders in this same table, several times ChatGPT&apos;s {usd(row('ChatGPT').revenueUsd)}. The headline compares ChatGPT with paid ads only, because that is the line with an invoice attached</li>
                                <li>A clean average. {outlier.note}</li>
                                <li>Exact attribution. Someone who used ChatGPT and then searched Google may report either one</li>
                            </ul>
                        </div>
                    </div>

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
                            Book a 15-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} showHeading={false} />

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
        </>
    );
}
