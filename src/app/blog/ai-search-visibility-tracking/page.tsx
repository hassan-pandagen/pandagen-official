import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import AsamSearchEvidenceFigure from "@/components/redesign/case-study/AsamSearchEvidenceFigure";
import { ASAM_SEARCH_EVIDENCE } from "@/data/asam-search-evidence";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText } from "@/components/ui/BlogStyles";
import { datedFact, spec } from "@/data/spec-facts";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "ai-search-visibility-tracking";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/ai-search-visibility-tracking";
const title = "AI Visibility Tracking: What 77 Pages and 6,700 AI Impressions Showed";
const description =
    "Measure AI search visibility through citations, brand mentions, visits and enquiries, with a practical business checklist and our 77-page research example.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/ai-search-visibility-tracking" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "ai visibility tracking",
        "ai overview tracking",
        "ai search visibility",
        "how to measure ai search visibility",
        "search console generative ai report",
        "ai brand monitoring",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-28",
        modifiedTime: "2026-11-11",
        url: canonicalUrl,
        siteName: "PandaCodeGen",
        images: [ogImageForPath("/blog/ai-search-visibility-tracking")],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImageUrlForPath("/blog/ai-search-visibility-tracking")],
    },
};

const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-08-28",
            dateModified: "2026-11-11",
            author: { "@type": "Person", name: "Hassan Jamal", url: "https://www.pandacodegen.com/about/hassan" },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: canonicalUrl,
            image: ogImageUrlForPath("/blog/ai-search-visibility-tracking"),
            about: [
                { "@type": "Thing", name: "Answer engine optimization" },
                { "@type": "Thing", name: "Google Search Console" },
            ],
            citation: [
                {
                    "@type": "CreativeWork",
                    name: "Microsoft Bing: AI Performance definitions",
                    url: "https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/",
                },
                {
                    "@type": "CreativeWork",
                    name: "Microsoft Bing: Topics Portfolio and opportunity queries",
                    url: "https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/",
                },
                {
                    "@type": "CreativeWork",
                    name: "Google: AI features and your website",
                    url: "https://developers.google.com/search/docs/appearance/ai-features",
                },
                {
                    "@type": "CreativeWork",
                    name: "Google: Search Console performance report, AI Overviews and AI Mode",
                    url: "https://support.google.com/webmasters/answer/7042828",
                },
                {
                    "@type": "CreativeWork",
                    name: "Google: FAQPage structured data",
                    url: "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
                },
                {
                    "@type": "CreativeWork",
                    name: "Lily Ray: What We Can Learn from Evolving ChatGPT Fan-Out Queries",
                    url: "https://lilyraynyc.substack.com/p/what-we-can-learn-from-evolving-chatgpt",
                },
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
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            inLanguage: "en-US",
        },
    ],
};

export default function AiSearchVisibilityTracking() {
    return (
        <main className="min-h-screen bg-cream">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <article className="container mx-auto max-w-3xl px-6 pt-28 pb-20 md:pt-36">
                <Breadcrumb items={postCrumbs(postId, title)} />

                <div data-article-hero="split" data-article-hero-variant="nested">
                  <div data-article-hero-copy>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-cognac">Research</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-charcoal md:text-5xl">
                    AI visibility tracking: what 77 pages and 6,700 AI impressions showed
                </h1>

                <BlogAuthor name="Hassan Jamal" role="Lead Engineer" postId="ai-search-visibility-tracking" published="2026-08-28" readTime="19 min" />
                  </div>
                  <div data-article-hero-screen>
                <BlogCoverFigure id="ai-search-visibility-tracking" />
                  </div>
                </div>

                <p data-speakable="true" className="mt-6 text-lg leading-relaxed text-stone-700">To measure your business&apos;s AI search visibility, track four things separately: links to your pages, mentions of your business, visits to your website, and enquiries or sales. A citation shows that your content was used as a source. It does not prove that someone visited, that the answer recommended you, or that you won a customer.</p>

                <TopicUpLink postId={postId} />

                <div className="mt-10 space-y-6">
                    <BlogHeader id="measure-ai-search-visibility">How can a business measure its AI search visibility?</BlogHeader>
                    <BlogText>
                        Start with a monthly scorecard. Keep each platform separate and compare equal periods with the
                        same filters. Here is the measurement plan we recommend; the research further down shows why
                        one headline number can hide most of the story.
                    </BlogText>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left font-semibold">Four measures for a business AI visibility scorecard</caption>
                            <thead className="border-b-2 border-stone-300">
                                <tr><th scope="col" className="p-3">Measure</th><th scope="col" className="p-3">Where to check</th><th scope="col" className="p-3">What it answers</th></tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                <tr><th scope="row" className="p-3">Citations and pages cited</th><td className="p-3">Bing Webmaster Tools: AI Performance</td><td className="p-3">Are supported AI experiences using our pages as sources?</td></tr>
                                <tr><th scope="row" className="p-3">Business mentions</th><td className="p-3">A saved set of buyer questions, tested in each assistant</td><td className="p-3">Does the answer name us, describe us correctly or recommend us?</td></tr>
                                <tr><th scope="row" className="p-3">Website visits</th><td className="p-3">GA4 Traffic acquisition: session source / medium</td><td className="p-3">Which identifiable AI referrals brought people to our website?</td></tr>
                                <tr><th scope="row" className="p-3">Enquiries, bookings and sales</th><td className="p-3">Tracked key events, checked against your booking or sales records</td><td className="p-3">Did those recorded visits lead to useful business results?</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Bing&apos;s citation count covers Microsoft Copilot, Bing AI summaries and selected partners.
                        Its average cited pages figure is a daily average, not the total number of pages ever cited.
                        Grounding queries are a sample of searches used to retrieve sources; they are not necessarily
                        the original questions people typed. See <a href="https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/" className="text-cognac hover:underline">Microsoft&apos;s definitions</a>.
                    </BlogText>
                    <BlogText>
                        In <a href="https://support.google.com/analytics/answer/12923437" className="text-cognac hover:underline">GA4&apos;s Traffic acquisition report</a>,
                        review session source / medium and the key events recorded for those visits. Count a successful
                        enquiry submission or confirmed booking, rather than treating a button click as a lead.
                        Missing referral information, consent choices and visits on another device leave gaps. Ask new
                        customers how they found you too, and keep those answers separate from tracked attribution.
                        Do not divide GA4 visits by Bing citations and call it a click-through rate: the two reports
                        cover different activity.
                    </BlogText>
                    <BlogHeader id="repeatable-buyer-questions">Which questions should you test each month?</BlogHeader>
                    <BlogText>
                        Use a small, repeatable set of questions a buyer would actually ask: who can solve their problem,
                        which providers fit their needs, and how the options compare. For a website agency, that might
                        be &quot;Who can move our WordPress site while keeping class bookings working?&quot;
                        Test without inserting your own business name, then run separate branded accuracy checks.
                    </BlogText>
                    <BlogList items={[
                        "Record the exact question, date, assistant, search mode and relevant location or language. Save the answer and its source links.",
                        "Log a mention, a linked citation and a recommendation separately. Also note incorrect descriptions and which competitors appear.",
                        "Repeat the same questions in fresh conversations on a fixed schedule. Label results as your test sample, not market share or total search demand.",
                        "Compare complete periods, such as the latest 28 days with the previous 28 days. Keep a change log so a rewrite, tracking change or missing report day is visible.",
                    ]} />
                    <BlogHeader id="bing-opportunity-ranges">Does a Bing opportunity range mean we already have those citations?</BlogHeader>
                    <BlogText>
                        No. If &quot;methods to measure AI search visibility for businesses&quot; appears under Top
                        Opportunity Queries with a range of 51–100, that is an opportunity where other sites appear
                        and yours does not. It is neither your citation count nor monthly search volume.
                        Microsoft describes <a href="https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/" className="text-cognac hover:underline">Topics Portfolio</a> as
                        a beta planning tool with approximate ranges. Use the query to find a useful question your
                        existing article can answer, not as a reason to publish several near-identical posts.
                    </BlogText>
                    <BlogHeader id="citation-drop">Why would AI citations suddenly drop to zero?</BlogHeader>
                    <BlogText>
                        A chart alone cannot establish the cause. Our troubleshooting order is to check the selected
                        property, filters, date range and reporting freshness first; then inspect previously cited URLs
                        for indexing changes, redirects, errors or crawler blocks. Compare the same dates with ordinary
                        Bing search activity and available server logs. If pages remain accessible and indexed, that
                        still does not prove whether zero means missing reporting or fewer citations.
                    </BlogText>
                    <BlogText>
                        Clearer language is not evidence of a problem. A rewrite can change what a page answers,
                        especially if it removes specific facts. Keep useful examples, sources and technical names,
                        explain them in everyday language, and compare results after the updated page is crawled.
                        Do not undo a helpful edit solely because a chart changed around the same time.
                    </BlogText>
                    <BlogHeader id="our-research">What did our own 77-page study show?</BlogHeader>
                    <BlogText>
                        The following research uses the Generative AI report available in our Search Console account
                        at the time. PandaCodeGen exported it on 19 August 2026, covering 18 May to 13 August, and found
                        6,700 AI impressions spread across 77 pages, with 3,627 of them on a single page. One URL out of
                        77 was 54 percent of everything.
                    </BlogText>

                    <BlogHighlight>
                        This is our own data from one site, pandacodegen.com, in one niche. The numbers below
                        describe our corpus and nothing more. What transfers is the method and the two measurement traps,
                        not the percentages.
                    </BlogHighlight>

                    <section aria-labelledby="method-heading" className="rounded-2xl border border-stone-300 bg-white p-6">
                        <h2 id="method-heading" className="text-lg font-bold text-charcoal">Method and source data</h2>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Two Google Search Console exports for pandacodegen.com, the property PandaCodeGen operates.
                            The Generative AI report, exported by page on 19 August 2026 for the window 18 May to 13
                            August, containing 77 URLs and 6,700 AI impressions. The standard Performance report,
                            exported by page and by query on 25 August 2026 for the window 24 May to 23 August. The two
                            windows overlap but are not identical, which is why no figure below divides one report by
                            the other.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Concentration was calculated by sorting pages on AI impressions and accumulating each
                            page&apos;s share of the total. The rank correlation is Spearman&apos;s, computed across the
                            76 URLs present in both exports, using AI impressions against ordinary clicks. Every rate
                            comes from the page-level exports, never the query export, for the reason set out below.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            The window is one property, one niche and one export. Nothing here is a benchmark. The part
                            worth copying is the procedure: export your own, check the concentration, compare the two
                            reports page by page, then read the answers behind the queries you actually sell on.
                        </p>
                    </section>

                    <BlogText>
                        People doing this measurement themselves have been writing up what they found in{" "}
                        <a
                            href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="text-cognac hover:underline"
                        >
                            an r/aeo thread
                        </a>{" "}
                        this month. Five of them are quoted below.
                    </BlogText>

                    <BlogQuote>
                        Write down two separate things: did it say your name, and did it link your site. Keep those two apart. They come apart way more often than people expect. An AI can cite your page as a source and still recommend a competitor by name in the actual sentence. Your analytics only ever sees the link, so tools built on traffic will tell you things are fine when the answer is recommending someone else. The name is what a buyer remembers.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">u/Narrow_Hall_7273, r/aeo, 8 September 2026 · <a href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <BlogQuote>
                        for a lot of queries, Google returns an AI Overview on some runs and no overview at all on others. Same query, same location, minutes apart. Running identical queries repeatedly, roughly 7 in 10 came back with an overview, and the rest came back with nothing. So if you check once and see no AIO, you have not established that the query doesn&apos;t trigger one.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">u/EffectiveElk2703, r/aeo, 8 September 2026 · <a href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <BlogQuote>
                        Run each question three times, since answers move between runs, and count a mention only when it shows in two of three.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">u/Slow-Commercial4316, r/aeo, 6 September 2026 · <a href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <BlogQuote>
                        Then make a dumb spreadsheet: mentioned? recommended? who beat us? what sources keep showing up?
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">u/Tech_Stack_Crunch, r/aeo, 6 September 2026 · <a href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <BlogQuote>
                        it can take months or even 1+ years to get sustained inbound from it. Don&apos;t expect it to be quick.
                    </BlogQuote>
                    <p className="text-xs text-stone-500 mt-1 mb-4">u/jayson_OutreachBloom, r/aeo, 7 September 2026 · <a href="https://www.reddit.com/r/aeo/comments/1w8n72k/how_can_i_get_my_company_mentioned_in_chatgpt/" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline font-medium">Verify source</a></p>

                    <BlogHeader id="free-tool">How do you track AI visibility without buying a tool?</BlogHeader>
                    <BlogText>
                        Start with Bing&apos;s AI Performance report and the Search Console reports available in your
                        account. Google&apos;s <a href="https://developers.google.com/search/docs/appearance/ai-features" className="text-cognac hover:underline">published guidance</a> includes
                        AI Overviews and AI Mode in overall Web performance totals. Our historical export below came
                        from a separate view in our account; do not assume every account offers the same view or fields.
                    </BlogText>
                    <BlogText>
                        Monitoring products do something the report cannot, which is running prompts against ChatGPT,
                        Claude and Perplexity and recording whether your name appears in the reply. That is a real gap
                        and worth paying to close once you can say why you need it. Reading the free report first is what
                        tells you whether you have a visibility problem, a click problem, or no problem at all.
                    </BlogText>

                    <BlogHeader id="what-it-shows">What does the Generative AI report actually show?</BlogHeader>
                    <BlogText>
                        In our export it showed impressions and nothing else: one row per URL, one number per row. There
                        was no click column, no position column and no prompt or query dimension. That export does not
                        reveal what anybody typed; check the fields available in your current report before comparing it.
                    </BlogText>
                    <BlogText>
                        A detail worth getting right, because most write-ups blur it. Clicks on AI results are not
                        missing from Search Console altogether.{" "}
                        <a
                            href={spec("gsc-ai-overview-click-counting").source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cognac hover:underline"
                        >
                            Google documents
                        </a>{" "}
                        that {datedFact("gsc-ai-overview-click-counting")}, so those clicks have been landing in your
                        ordinary Performance totals, mixed in with other search activity. Our separate export let us
                        examine AI impressions, but did not isolate AI clicks.
                    </BlogText>
                    <BlogText>
                        One further exclusion to know about, from{" "}
                        <a
                            href={spec("gsc-search-labs-excluded").source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cognac hover:underline"
                        >
                            the same Google documentation
                        </a>
                        : {datedFact("gsc-search-labs-excluded")}. Anything Google is still testing in Labs is invisible
                        to you, which means the Generative AI number is a floor rather than a full count.
                    </BlogText>

                    <BlogHeader id="concentration">How concentrated is AI visibility, really?</BlogHeader>
                    <BlogText>
                        Far more concentrated than we expected. Of 6,700 AI impressions across 77 pages, one page held
                        3,627. Reaching half of all AI visibility on this site takes exactly one URL. The top three pages
                        held 66 percent and the top ten held 87 percent, which leaves 67 pages splitting the remaining
                        13 percent.
                    </BlogText>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left text-sm text-stone-500">
                                AI impressions by URL group. The top page alone produced more than half of everything the
                                site earned. Search Console Generative AI report for 18 May to 13 August 2026.
                            </caption>
                            <thead>
                                <tr className="border-b border-stone-300">
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Group</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">AI impressions</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Share</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-200"><td className="p-3">Top page</td><td className="p-3">3,627</td><td className="p-3">54.1%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Pages 2 to 3</td><td className="p-3">774</td><td className="p-3">11.6%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Pages 4 to 10</td><td className="p-3">1,411</td><td className="p-3">21.1%</td></tr>
                                <tr><td className="p-3">Remaining 67 pages</td><td className="p-3">888</td><td className="p-3">13.3%</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left text-sm text-stone-500">
                                AI impressions by page, pandacodegen.com, Search Console Generative AI report for 18 May
                                to 13 August 2026, exported 19 August.
                            </caption>
                            <thead>
                                <tr className="border-b border-stone-300">
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Page</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">AI impressions</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Running share</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/nextjs-hosting-zero-cost</td><td className="p-3">3,627</td><td className="p-3">54.1%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/gohighlevel-website-speed</td><td className="p-3">391</td><td className="p-3">60.0%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/webflow-migration-cost</td><td className="p-3">383</td><td className="p-3">65.7%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/woocommerce-too-slow</td><td className="p-3">340</td><td className="p-3">70.8%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/divi-theme-slow</td><td className="p-3">325</td><td className="p-3">75.6%</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/top-nextjs-agencies-2026</td><td className="p-3">207</td><td className="p-3">78.7%</td></tr>
                                <tr><td className="p-3">Remaining 71 pages</td><td className="p-3">1,427</td><td className="p-3">100%</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The tail is thinner than the head is fat. Thirty-one of the 77 pages, two fifths of the set, sat
                        on five AI impressions or fewer. Together those 31 pages accounted for 1.2 percent of all AI
                        impressions. Publishing more pages did not spread AI visibility around; it produced a long list
                        of pages that AI search has effectively never surfaced.
                    </BlogText>

                    <BlogText>
                        A later export, taken 29 August 2026 for the window 27 May to 26 August, shows the same shape
                        rather than a softening one. It carries 92 pages against 77, and the top page holds 5,059 of
                        8,749 impressions, which is 57.8 percent against the earlier 54.1. Publishing more did not
                        spread the visibility around. The anchor grew faster than the corpus underneath it.
                    </BlogText>
                    <BlogText>
                        The totals from those two exports are not comparable and are not compared here. Search Console
                        serves a rolling window, so the later export drops nine days from the start and adds thirteen to
                        the end. Decomposing the daily series shows the whole apparent increase sits in the thirteen
                        added days, which ran at 204 impressions a day against a 94-a-day average for the window. Share
                        of total survives that shift. A growth percentage between two differently-framed windows does
                        not, which is the kind of number that gets quoted for years after the person who made it has
                        forgotten the window moved.
                    </BlogText>

                    {/* 8 Oct 2026: was "Ninety-five more posts exist". src/data/blog.ts lists 88 posts today, so 87 others. */}
                    <BlogQuote>
                        Half of this site&apos;s AI visibility comes from one URL. Eighty-seven more posts exist. Volume was
                        not the thing that worked.
                    </BlogQuote>

                    <BlogHeader id="correlation">Does AI visibility follow ordinary search performance?</BlogHeader>
                    <BlogText>
                        Broadly yes, and we went in expecting the opposite. Across the 76 pages appearing in both the
                        Generative AI report and the standard Performance report, the Spearman rank correlation between
                        AI impressions and ordinary clicks is 0.79. Pages that do well in Google Search mostly do well in
                        Google&apos;s AI surfaces. There is no separate AI content strategy hiding in this data.
                    </BlogText>
                    <BlogText>
                        The exceptions are where it gets useful. Three pages drew meaningful AI visibility while earning
                        almost no ordinary clicks, which is the profile you would never spot in the standard report.
                    </BlogText>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left text-sm text-stone-500">
                                Pages where AI visibility and ordinary clicks disagree. Same property. AI impressions from
                                the 19 August 2026 Generative AI export, clicks from the 25 August 2026 Performance export.
                            </caption>
                            {/* 8 Oct 2026: caption said "same export date". The method box above gives two exports on different dates (19 and 25 August). */}
                            <thead>
                                <tr className="border-b border-stone-300">
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Page</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">AI impressions</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Ordinary clicks</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/webflow-migration-cost</td><td className="p-3">383</td><td className="p-3">1</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">/blog/top-nextjs-agencies-2026</td><td className="p-3">207</td><td className="p-3">1</td></tr>
                                <tr><td className="p-3">/blog/webflow-true-cost</td><td className="p-3">116</td><td className="p-3">0</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        A page earning zero clicks looks like a failure in the standard Performance report and looks like a
                        contributor in the Generative AI report. Whether that is worth anything depends entirely on the next
                        question.
                    </BlogText>

                    <BlogHeader id="impression-vs-mention">Is an AI impression the same as being mentioned?</BlogHeader>
                    <BlogText>
                        No, and conflating the two is the most expensive mistake available here. An AI impression records
                        that your URL was shown as a source alongside a generated answer. It does not record whether the
                        answer text named your company, described what you do correctly, or recommended you over anyone
                        else. Search Console measures citation, not characterisation.
                    </BlogText>
                    <BlogText>
                        The practical consequence: a page can accumulate hundreds of AI impressions while the answer
                        above it recommends a competitor and links you as supporting evidence. Nothing in the Generative AI report
                        distinguishes those two outcomes. Checking which one you are getting means reading the answers,
                        which means running the prompts yourself and looking, or paying a tool to do it on a schedule.
                    </BlogText>

                    <BlogHeader id="query-trap">Why does the query report show fewer clicks than the pages report?</BlogHeader>
                    <BlogText>
                        Because Google withholds queries that too few people searched, and the export caps at 1,000 rows.
                        In our 25 August 2026 export the pages report totalled 243 clicks. The query report showed 48.
                        Four fifths of the clicks were simply absent from the file, and every one of them belonged to a
                        real visit.
                    </BlogText>
                    <BlogText>
                        Do not combine clicks from a partial query export with impressions from a different total.
                        Calculate CTR from matching clicks and impressions at the same scope and date range. Returned
                        query rows can support query-level CTR; omitted queries mean their sum is not a complete
                        property total. Use the page report for page comparisons and preserve its filters and limits.
                    </BlogText>

                    <BlogHeader id="fan-out-queries">Can you see the machine&apos;s own queries in Search Console?</BlogHeader>

                    <BlogText>
                        Sometimes, and it costs nothing to check. Filter the query report for{" "}
                        <code>site:</code> to find queries worth investigating. Both people and automated systems use
                        search operators, so an operator alone does not identify an AI request. One proposed method comes
                        from{" "}
                        <a
                            href="https://lilyraynyc.substack.com/p/what-we-can-learn-from-evolving-chatgpt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cognac hover:underline"
                        >
                            Lily Ray&apos;s work on ChatGPT fan-out queries
                        </a>
                        , published 17 August 2026, which argues the operator is being used to scope retrieval toward
                        domains the model already trusts.
                    </BlogText>
                    <BlogText>
                        Our own export carries four queries with operators in them. The most interesting one is this,
                        reformatted onto one line:
                    </BlogText>

                    <div className="overflow-x-auto rounded-xl border border-stone-300 bg-stone-50 p-4">
                        <code className="block whitespace-pre text-xs leading-relaxed text-stone-700">{`outgrown wix need custom website
  -site:upwork.com -site:fiverr.com -site:freelancer.com
  -site:peopleperhour.com -site:guru.com -site:toptal.com
  -site:contra.com -site:clutch.co -site:wix.com
  -site:squarespace.com -site:canva.com`}</code>
                    </div>

                    <BlogText>
                        Twenty-one impressions, average position 3.24, no clicks. The exclusions suggest automated retrieval, but do not prove it. This
                        query states an intent in plain words and then removes the listed freelance
                        marketplace and website-builder domain from the results, which is a reasonable thing to do if
                        you are trying to find an agency rather than a gig listing.
                    </BlogText>
                    <BlogText>
                        Worth noting how it differs from the pattern Ray describes. Hers scopes toward trusted domains
                        with positive operators. This one excludes with negative ones, a variation others have reported
                        separately. The operators narrow the eligible sources, but the query text does not establish
                        whether a person or an automated system issued the search.
                    </BlogText>

                    <BlogHighlight>
                        Not every operator query is a machine reading your page. One of ours reads{" "}
                        <code>+1 &quot;info * com&quot; -india in inurl:contact</code>, which is a wildcard email
                        search with a country exclusion. It resembles an email-harvesting query, but its origin is not
                        established by the text. Read the query before you classify it.
                    </BlogHighlight>

                    <BlogText>
                        Impressions without clicks do not tell us whether someone read an answer, ignored the result or
                        used an automated tool. The query report adds context, not proof of those behaviours. Treat
                        unusual queries as leads to investigate, rather than verified AI requests or successful referrals.
                    </BlogText>

                    <BlogHeader id="how-to-read">How should you read your own numbers?</BlogHeader>
                    <BlogText>
                        Start with the share your single best page holds, because that one number tells you whether you
                        have a portfolio or a dependency. Then compare the Generative AI export against the standard
                        Performance export page by page, since the disagreements between them are the only thing neither
                        report surfaces on its own. Five steps, in order:
                    </BlogText>
                    <BlogList
                        items={[
                            "Where a separate AI report is available, export it and sort by its visibility metric. Note what share your top page holds. Keep Bing citations and Google impressions separate.",
                            "Compare that list against your standard Performance export, page by page. Pages with AI impressions and no clicks are the ones the standard report will never draw your attention to.",
                            "Calculate rates only from matching numerators and denominators. Query-level CTR is valid for returned rows, but their totals omit anonymized or truncated queries.",
                            "Read the answers themselves for your five most important commercial queries. That is the only way to learn whether you are being recommended or merely footnoted.",
                            "Re-export on a fixed schedule and keep the files with their filters and date ranges. Saved exports let you revisit a comparison even if the reporting interface changes.",
                        ]}
                    />

                    <BlogHeader id="limits">What this measurement cannot tell you</BlogHeader>
                    <BlogText>
                        Six things, stated once here rather than repeated as a hedge under every number above. The
                        largest is that the Generative AI report covers Google and no one else, so any claim about your
                        standing inside ChatGPT or Perplexity has to come from somewhere other than Search Console.
                    </BlogText>
                    <BlogList
                        items={[
                            "This historical dataset covers Google only. Bing's AI Performance report and tests in other assistants have different coverage; do not combine them into a supposed total for all AI search.",
                            "Our export records AI impressions, not brand mentions or recommendations. It cannot establish what the answer said about the business.",
                            "Our export has no prompt dimension. Testing your own questions creates a new sample; it does not recover the questions behind those historical impressions.",
                            "Reporting exclusions matter. Google documents exclusions for Search Labs experiments; this dataset is not a complete record of every AI interaction.",
                            "Our figures cover one site in one niche across a single export window. Treat the concentration pattern as a question to ask of your own data, not as a benchmark to compare against.",
                            "Nothing here demonstrates that AI impressions produce revenue. We publish a separate measurement of what AI referrals actually earned, and the two questions should not be answered with the same number.",
                        ]}
                    />

                    <BlogHeader id="client-search-example">What does a client visibility report look like after a relaunch?</BlogHeader>
                    <BlogText>{ASAM_SEARCH_EVIDENCE.summary}</BlogText>
                    <AsamSearchEvidenceFigure />
                    <BlogText>
                        A Step Above Medical is an independent client and a medical training provider. Its report is a separate example from the PandaCodeGen research above. To assess the change properly, compare equal periods before and after launch, then look at the pages, visits and bookings separately. See <Link href="/work/a-step-above-medical#search-visibility" className="text-cognac underline">the website and class-management project, with its search observations</Link>.
                    </BlogText>

                    <BlogHeader id="what-we-do">How does PandaCodeGen build a website that AI search can understand?</BlogHeader>
                    <BlogText>
                        We plan clear services, company information and evidence into the initial website build.
                        A prospective customer should be able to see what you do, who you help and why your experience
                        is relevant. That information also needs to be accessible to search systems.
                    </BlogText>
                    <BlogList items={[
                        "Readable website structure: we put important content in HTML with descriptive headings, useful internal links and public pages that search engines can access.",
                        "Facts supported by the page: structured data describes the visible business, articles and other appropriate content. We check that it matches what visitors can actually read.",
                        "Evidence for buying decisions: services, relevant case studies, named client feedback and clear ownership or support terms help a visitor evaluate the business.",
                        "Measurement from launch: we configure the agreed search and consent-based analytics tools, then test the enquiry or booking events before interpreting the reports.",
                    ]} />
                    <BlogText>
                        On our own site, <Link href="/ai-info/team-and-company" className="text-cognac hover:underline">our public AI-info pages</Link> collect
                        company facts and link to supporting work. Our <a href="/llms.txt" className="text-cognac hover:underline">llms.txt file</a> provides
                        a short guide to those resources. We can include the same approach when it serves a client&apos;s
                        content, keeping it consistent with their ordinary website pages. These are supporting resources,
                        not a substitute for useful service pages or evidence.
                    </BlogText>
                    <BlogText>
                        <a href="https://llmstxt.org/" className="text-cognac hover:underline">llms.txt is a proposed format</a>,
                        not a guaranteed route into AI answers. <a href="https://developers.google.com/search/docs/appearance/ai-features" className="text-cognac hover:underline">Google says</a> no
                        special AI file or schema is required for its AI search features. The goal is a useful,
                        accessible website with checkable claims; no provider can guarantee that an assistant will
                        cite it or recommend the business.
                    </BlogText>
                    <BlogText>
                        When we look at a property now we ask three things: whether AI visibility is spread across a real
                        portfolio or resting on one page, which pages earn AI impressions without earning clicks, and
                        whether the commercial queries show the site being recommended or merely used as supporting
                        evidence. Impressions answer the first two. Only reading the answers settles the third.
                    </BlogText>
                    <BlogText>
                        What any of it turned into is a different question again, and we measured that separately in{" "}
                        <Link href="/blog/ai-referral-revenue-2026" className="text-cognac hover:underline">
                            six months of AI referral revenue
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        A concentration of AI impressions identifies pages worth investigating. This report does not
                        isolate AI clicks or conversions, so it cannot diagnose conversion loss. Compare matched
                        search data with referral and conversion records before attributing an outcome. That is part of{" "}
                        <Link href="/services/ai-seo" className="text-cognac hover:underline">
                            our AI SEO services
                        </Link>:
                        we establish what each report measures, which pages receive visibility and which business
                        outcomes can actually be attributed.
                    </BlogText>

                    <BlogHighlight>
                        The original research figures on this page come from Search Console exports for pandacodegen.com: the
                        Generative AI report for 18 May to 13 August 2026, and the standard Performance report for 24
                        May to 23 August 2026. Third-party platform
                        behaviour is cited to documentation. The business measurement guidance, Bing definitions and
                        website recommendations were reviewed for this update; the historical research windows have not changed.
                    </BlogHighlight>

                    <p className="mt-10 border-l-2 border-stone-300 pl-4 text-sm leading-relaxed text-stone-600">
                        Editorial note: the research uses our own site, not a cross-industry benchmark. The scorecard is
                        our recommended process. PandaCodeGen offers the website and measurement services described above.
                    </p>

                    <div className="mt-6 rounded-2xl border border-stone-300 bg-white p-7">
                        <h2 className="text-xl font-bold text-charcoal">Is AI search helping people find your business?</h2>
                        <p className="mt-3 text-stone-600">
                            Bring your questions to a short call. We can discuss which reports you have, what they
                            measure, and how to connect website visibility with enquiries and bookings. Any audit or
                            implementation work is scoped separately.
                        </p>
                        <div className="mt-5">
                            <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-bold text-white hover:bg-stone-800">
                                Book a 15-minute read-through <ArrowRight className="h-4 w-4" />
                            </CalModalButton>
                        </div>
                    </div>

                    <FAQAccordion faqs={postFAQs} />

                    <RelatedPosts currentPostId={postId} />

                    <div className="mt-12 flex items-center justify-between border-t border-stone-300 pt-6">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cognac hover:underline">
                            <ArrowLeft className="h-4 w-4" /> All articles
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cognac hover:underline">
                            Talk to the founders <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </article>

        </main>
    );
}
