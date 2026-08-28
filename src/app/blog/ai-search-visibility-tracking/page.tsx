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
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogQuote, BlogText } from "@/components/ui/BlogStyles";
import { asOf, datedFact } from "@/data/spec-facts";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "ai-search-visibility-tracking";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/ai-search-visibility-tracking";
const title = "AI Visibility Tracking: What 77 Pages and 6,700 AI Impressions Showed";
const description =
    "First-party Search Console data on how AI visibility is actually distributed across a corpus, what the Generative AI report can and cannot tell you, and why an impression is not the same as being mentioned.";

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
        modifiedTime: "2026-08-28",
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
            dateModified: "2026-08-28",
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
                    name: "Google: Search Console performance report, AI Overviews and AI Mode",
                    url: "https://support.google.com/webmasters/answer/7042828",
                },
                {
                    "@type": "CreativeWork",
                    name: "Google: FAQPage structured data",
                    url: "https://developers.google.com/search/docs/appearance/structured-data/faqpage",
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
            <Header />

            <article className="container mx-auto max-w-3xl px-6 pt-28 pb-20 md:pt-36">
                <Breadcrumb items={postCrumbs(postId, title)} />

                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-cognac">Research</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-charcoal md:text-5xl">
                    AI visibility tracking: what 77 pages and 6,700 AI impressions showed
                </h1>

                <BlogAuthor name="Hassan Jamal" role="Lead Engineer" date="28 August 2026" readTime="12 min" />

                <TopicUpLink postId={postId} />

                <div className="mt-10 space-y-6">
                    <BlogText>
                        You can track AI visibility for free in Google Search Console, under Performance then Generative
                        AI. It reports how often your URLs appeared in AI Overviews and AI Mode, separately from ordinary
                        results. We pulled ours on 25 August 2026 and found 6,700 AI impressions spread across 77 pages,
                        with 3,627 of them on a single page. One URL out of 77 was 54 percent of everything.
                    </BlogText>

                    <BlogHighlight>
                        This is first-party data from one site, pandacodegen.com, in one niche. The numbers below
                        describe our corpus and nothing more. What transfers is the method and the two measurement traps,
                        not the percentages.
                    </BlogHighlight>

                    <section aria-labelledby="method-heading" className="rounded-2xl border border-stone-300 bg-white p-6">
                        <h2 id="method-heading" className="text-lg font-bold text-charcoal">Method and source data</h2>
                        <p className="mt-3 text-sm leading-relaxed text-stone-600">
                            Two Google Search Console exports for pandacodegen.com, both pulled on 25 August 2026: the
                            Generative AI report exported by page, and the standard Performance report exported by page
                            and by query. The Generative AI export contained 77 URLs carrying 6,700 AI impressions.
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

                    <BlogHeader id="free-tool">How do you track AI visibility without buying a tool?</BlogHeader>
                    <BlogText>
                        Open Search Console, go to Performance, and switch to the Generative AI report. That is the whole
                        setup. It is first-party data about your own property, Google publishes it at no cost, and it
                        needs no tag, no script and no trial. Ask a general-purpose AI assistant how to track brand
                        mentions in AI search and it will send you shopping for monitoring software before it mentions
                        the report Google already gives you.
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
                        was no click column, no position column and no prompt or query dimension. You can filter by URL,
                        country, device and date range. You cannot ask it what anybody typed.
                    </BlogText>
                    <BlogText>
                        A detail worth getting right, because most write-ups blur it. Clicks on AI results are not
                        missing from Search Console altogether. Google documents that {datedFact("gsc-ai-overview-click-counting")},
                        so those clicks have been landing in your ordinary Performance totals the whole time, mixed in
                        with everything else. What the Generative AI report adds is the ability to see AI impressions on
                        their own. What that report does not yet add is the ability to see AI clicks on their own.
                    </BlogText>
                    <BlogText>
                        One further exclusion to know about: {datedFact("gsc-search-labs-excluded")}. Anything Google is still
                        testing in Labs is invisible to you, which means the Generative AI number is a floor rather than a full count.
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
                                site earned. Search Console Generative AI export, 25 August 2026.
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
                                AI impressions by page, pandacodegen.com, Search Console Generative AI report exported 25
                                August 2026.
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

                    <BlogQuote>
                        Half of this site&apos;s AI visibility comes from one URL. Ninety-five more posts exist. Volume was
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
                                Pages where AI visibility and ordinary clicks disagree. Same property, same export date.
                            </caption>
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
                        We got this wrong ourselves before catching it. An earlier internal read calculated click-through
                        rates from the query export and produced a figure that was wrong by orders of magnitude, because
                        the denominator was complete and the numerator was not. Use the pages export for any rate. Use
                        the query export to see which phrases exist, never to work out how well they perform.
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
                            "Export the Generative AI report and sort by impressions. Note what share your top page holds. If one URL is carrying most of your AI visibility, that page is your position, and the risk sitting under it is concentration.",
                            "Compare that list against your standard Performance export, page by page. Pages with AI impressions and no clicks are the ones the standard report will never draw your attention to.",
                            "Calculate every rate from the pages export. The query export is missing most of your clicks and will mislead you about all of them.",
                            "Read the answers themselves for your five most important commercial queries. That is the only way to learn whether you are being recommended or merely footnoted.",
                            "Re-export on a fixed schedule and keep the files. The report has no history beyond its window, so the only trend line you will ever have is the one you saved.",
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
                            "It is Google only. ChatGPT, Claude and Perplexity publish nothing equivalent, so any figure covering them comes from your own prompt testing or a vendor's sampling, not from a census.",
                            "It counts citations, not mentions. A URL shown as a source and a brand named in the prose are different events and the report reports one of them.",
                            "It has no prompt dimension, so you cannot learn what was asked.",
                            "Search Labs experiments are excluded, so the number is a floor.",
                            "Our figures cover one site in one niche across a single export window. Treat the concentration pattern as a question to ask of your own data, not as a benchmark to compare against.",
                            "Nothing here demonstrates that AI impressions produce revenue. We publish a separate measurement of what AI referrals actually earned, and the two questions should not be answered with the same number.",
                        ]}
                    />

                    <BlogHeader id="what-we-do">What we do with this</BlogHeader>
                    <BlogText>
                        The conclusion we drew is not that a site needs a separate AI strategy. Retrieval systems reward
                        pages clear enough to lift, attribute and trust, which is the same property that makes a page
                        good for a reader. Answer-first sections, named entities and dated facts do that work. A
                        separate file for robots does not.
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
                        If your own export shows impressions without clicks, or one page carrying everything, the
                        diagnosis is usually in the page rather than in the platform. That is the same work as a{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">
                            platform migration
                        </Link>{" "}
                        in reverse: instead of asking what a rebuild would cost, you are asking which pages already earn
                        attention and what is stopping them converting it.
                    </BlogText>

                    <BlogHighlight>
                        Every figure on this page comes from two Search Console exports for pandacodegen.com taken on 25
                        August 2026: the Generative AI report and the standard Performance report. Third-party platform
                        behaviour is cited to primary documentation and dated {asOf("gsc-ai-overview-click-counting")}.
                    </BlogHighlight>

                    <p className="mt-10 border-l-2 border-stone-300 pl-4 text-sm leading-relaxed text-stone-600">
                        Editorial note: everything above is analysis of our own Search Console data. What follows is a
                        service offer. The two are separated deliberately, because the findings should be worth reading
                        whether or not you ever hire us.
                    </p>

                    <div className="mt-6 rounded-2xl border border-stone-300 bg-white p-7">
                        <h2 className="text-xl font-bold text-charcoal">Want this read on your own property?</h2>
                        <p className="mt-3 text-stone-600">
                            We will pull your Generative AI export against your standard Performance export and tell you
                            which pages carry your AI visibility, which earn impressions without clicks, and whether the
                            concentration is a strength or a risk. No obligation to build anything afterwards.
                        </p>
                        <div className="mt-5">
                            <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-bold text-cream hover:bg-stone-800">
                                Book a 30-minute read-through <ArrowRight className="h-4 w-4" />
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
                            Request a migration plan <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
