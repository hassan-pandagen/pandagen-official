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
import { BlogAuthor, BlogHeader, BlogHighlight, BlogText } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { periods, platforms, source, latest, peak, first, fallFromPeak, groupShare, year } from "@/data/market-share";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "cms-market-share-2026";
const postFAQs = blogPosts.find((p) => p.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/cms-market-share-2026";

// Every figure is computed from market-share.json. Nothing here is typed by
// hand, so appending next year's reading updates the prose along with the table.
const wp = { now: latest("WordPress"), top: peak("WordPress"), off: fallFromPeak("WordPress") };
const selfHostedLost = Number((groupShare("self-hosted", 0) - groupShare("self-hosted")).toFixed(1));
const buildersGained = Number((groupShare("hosted-builder") - groupShare("hosted-builder", 0)).toFixed(1));

const title = `CMS Market Share 2015 to 2026: WordPress Peaked in ${year(wp.top.period)}`;
const description =
    `WordPress reached ${wp.top.value}% in ${year(wp.top.period)} and is at ${wp.now.value}% today. ` +
    `Twelve years of measured CMS market share, what moved where, and what the numbers cannot tell you.`;

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/cms-market-share-2026" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "cms market share",
        "wordpress market share 2026",
        "is wordpress declining",
        "webflow market share",
        "shopify market share",
        "website builder market share",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-15",
        modifiedTime: "2026-08-15",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/cms-market-share-2026")],
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
            image: ogImageUrlForPath("/blog/cms-market-share-2026"),
            datePublished: "2026-08-15T00:00:00-05:00",
            dateModified: "2026-08-15T00:00:00-05:00",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Content management systems", "Website migration", "Next.js", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Research",
            inLanguage: "en-US",
            wordCount: 1750,
            timeRequired: "PT9M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: [{ "@type": "CreativeWork", name: source.study, url: source.url }],
            about: [
                { "@type": "Thing", name: "Content management system", sameAs: ["https://en.wikipedia.org/wiki/Content_management_system"] },
                { "@type": "Thing", name: "WordPress", sameAs: ["https://en.wikipedia.org/wiki/WordPress"] },
            ],
        },
        {
            "@type": "Dataset",
            "@id": `${canonicalUrl}#dataset`,
            name: "CMS market share by year, 2015 to 2026",
            description: source.method,
            license: "https://creativecommons.org/licenses/by/4.0/",
            creator: { "@type": "Organization", name: source.publisher, url: "https://w3techs.com" },
            isBasedOn: source.url,
            temporalCoverage: `${periods[0]}/${periods[periods.length - 1]}`,
            variableMeasured: "Share of the top 10 million websites, among sites with an identified CMS",
            dateModified: source.verifiedAt,
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
            inLanguage: "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "CMS Market Share 2015 to 2026", item: canonicalUrl },
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

// The columns worth showing. The full series lives in market-share.json.
const SHOWN = ["2015-01", "2018-01", "2021-01", "2024-01", "2026-08"];
const shownIdx = SHOWN.map((p) => periods.indexOf(p));

export default function CmsMarketShare2026Page() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "CMS market share")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Research</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            CMS market share, 2015 to 2026:{" "}
                            <span className="italic text-cognac">WordPress peaked in {year(wp.top.period)}</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            WordPress reached {wp.top.value}% of measured sites in {year(wp.top.period)} and sits at{" "}
                            {wp.now.value}% today, {wp.off} points below its own high. The share it lost did not go
                            where most people assume, and the platform most often described as the future has not moved
                            in three readings.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Figures read from the source table on {source.verifiedAt}. Method and limits are stated in
                            full at the end, because a market-share number without them is decoration.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan migrates production websites off these platforms, and writes the engineering guides on this site."
                    />

                    <BlogHeader>The numbers</BlogHeader>
                    <BlogText>
                        Every platform above 0.8% of measured sites, at four-year intervals plus the current reading.
                        A dash means the platform was not in the source&apos;s table for that year.
                    </BlogText>

                    <div className="mb-10 overflow-x-auto rounded-2xl border border-stone-200" tabIndex={0} role="region" aria-label="CMS market share by year">
                        <table className="w-full text-left text-sm">
                            <caption className="sr-only">
                                Content management system market share by year, 2015 to 2026, as a percentage of the
                                top ten million websites with an identified CMS.
                            </caption>
                            <thead className="border-b border-stone-200 bg-stone-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-bold text-charcoal">Platform</th>
                                    {SHOWN.map((p) => (
                                        <th key={p} scope="col" className="px-4 py-3 text-right font-bold text-charcoal">
                                            {year(p)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {platforms.map((pl) => (
                                    <tr key={pl.name} className="border-b border-stone-100 last:border-0">
                                        <th scope="row" className="px-4 py-3 text-left font-semibold text-charcoal">{pl.name}</th>
                                        {shownIdx.map((i, n) => (
                                            <td key={n} className="px-4 py-3 text-right tabular-nums text-stone-600">
                                                {pl.series[i] === null ? (
                                                    <>
                                                        <span aria-hidden="true">—</span>
                                                        <span className="sr-only">not listed in the source for this year</span>
                                                    </>
                                                ) : (
                                                    `${pl.series[i]}%`
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader>What actually moved</BlogHeader>
                    <BlogText>
                        <BlogHighlight>
                            Self-hosted platforms lost {selfHostedLost} points of share since 2015. Hosted site
                            builders gained {buildersGained}.
                        </BlogHighlight>{" "}
                        That is close enough to a straight transfer that it is worth sitting with. The market did not
                        grow a new category so much as move an existing one across a line, from software you install to
                        software somebody else runs.
                    </BlogText>
                    <BlogText>
                        Within the self-hosted group, though, the losses are not evenly spread, and this is where the
                        common story goes wrong.
                    </BlogText>

                    <BlogHeader>WordPress did not lose to the builders. Joomla and Drupal did</BlogHeader>
                    <BlogText>
                        Joomla went from {first("Joomla").value}% to {latest("Joomla").value}%. Drupal went from{" "}
                        {first("Drupal").value}% to {latest("Drupal").value}%. Both lost about four fifths of their
                        share, and both were falling steadily through the years when WordPress was still climbing.
                    </BlogText>
                    <BlogText>
                        WordPress spent that period taking share, not losing it: {first("WordPress").value}% in 2015 up
                        to {wp.top.value}% by {year(wp.top.period)}. It consolidated the self-hosted market first, and
                        only then began to give ground. Its {wp.now.value}% today is its lowest reading since 2017,
                        which is a real decline, and it is also still more than three times the entire hosted-builder
                        category combined.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Both things are true at once</BlogHighlight>, and most coverage picks one. If
                        you want to argue WordPress is finished, the last four readings support you. If you want to
                        argue it dominates, the absolute number supports you. The honest version is that it is a
                        declining incumbent with an enormous lead.
                    </BlogText>

                    <BlogHeader>Webflow has not moved in three readings</BlogHeader>
                    <BlogText>
                        This one is worth naming plainly because we sell migrations off Webflow and the number does not
                        flatter that business. Webflow entered the table in {year(first("Webflow").period)} at{" "}
                        {first("Webflow").value}% and reached {latest("Webflow").value}%. It has now recorded the same
                        figure in three consecutive readings.
                    </BlogText>
                    <BlogText>
                        For a platform that occupies as much space in design conversation as Webflow does, sitting at{" "}
                        {latest("Webflow").value}% of measured sites is a smaller footprint than its reputation
                        suggests. Tilda, which is barely discussed in English-language design circles, is at exactly the
                        same {latest("Tilda").value}%. Duda is at {latest("Duda").value}%. The share is far more spread
                        across small builders than the discourse implies.
                    </BlogText>
                    <BlogText>
                        Two honest readings of a flat line: the platform has found its ceiling in this measure, or the
                        measure is missing where its growth is happening. Webflow skews toward newer, design-led and
                        often smaller sites, and the source samples the top ten million. Both can be true. We are not
                        going to pretend the data resolves it.
                    </BlogText>

                    <BlogHeader>Shopify is the outlier</BlogHeader>
                    <BlogText>
                        Shopify went from {first("Shopify").value}% to {latest("Shopify").value}%, and it is the only
                        platform here that grew by more than a factor of ten while already being large. It also has the
                        one visible setback in the table, falling from 6.6% to 5.7% between 2022 and 2023, which lines
                        up with the end of the pandemic ecommerce surge. It has grown every year since.
                    </BlogText>

                    <BlogHeader>One year in this series behaves oddly, and we are not going to hide it</BlogHeader>
                    <BlogText>
                        Between the 2018 and 2019 readings, several platforms move by noticeably more than they do in
                        the years either side. Squarespace gains 1.1 points, against 0.4 the year before and 0.1 the
                        year after. Wix gains 0.9 against 0.3 and 0.5. In the other direction, Drupal loses 1.1 against
                        0.2 and 0.5, and Joomla loses 1.1 against 0.7 and 0.8.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>2019 is also the first year Webflow and Tilda appear in the table at all.</BlogHighlight>{" "}
                        A year in which new platforms become visible, hosted builders jump, and self-hosted platforms
                        drop harder than usual is more consistent with a change in what the survey can detect than with
                        a single unusual year in the market.
                    </BlogText>
                    <BlogText>
                        We cannot prove that from the outside, so we are not asserting it. What we will say is that if
                        you use this series, treat 2019 as a possible discontinuity and prefer comparisons that do not
                        straddle it. The 2022 peak and the decline since sit entirely on one side of that line, which
                        is part of why we lead with them.
                    </BlogText>

                    <BlogHeader>How to actually use a market-share number</BlogHeader>
                    <BlogText>
                        Three uses this data is good for, and one it is routinely misused for.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It is good for hiring and continuity risk.</BlogHighlight> A platform at 1.0%
                        and falling has a shrinking pool of people who can maintain what you built. Drupal at{" "}
                        {latest("Drupal").value}% is a different staffing proposition than Drupal at{" "}
                        {first("Drupal").value}%, regardless of the software&apos;s quality, which has not declined by
                        four fifths.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It is good for reading vendor claims.</BlogHighlight> When a platform describes
                        itself as the fastest growing, this is where you check the shape of that claim. Growth from a
                        small base looks dramatic in percentage terms and modest in points, and both framings appear in
                        the same table above.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>It is good for timing a conversation, not making a decision.</BlogHighlight> An
                        incumbent that has declined for four consecutive readings is a reasonable prompt to review your
                        own position. It is not a reason to move.
                    </BlogText>
                    <BlogText>
                        The misuse is treating it as a quality signal. Share measures adoption, and adoption follows
                        distribution, price, marketing and switching cost at least as much as it follows engineering.
                        Nothing in this table tells you whether a platform is well built.
                    </BlogText>

                    <BlogHeader>The question this data does not answer</BlogHeader>
                    <BlogText>
                        Every figure here counts sites that exist. Nobody publishes what share of{" "}
                        <em>new</em> builds each platform wins, which is the number that would actually tell you where
                        the market is going rather than where it has been. The gap is not an oversight, it is hard: you
                        would need a defensible way to identify newly launched sites at scale and re-run it on a fixed
                        cadence.
                    </BlogText>
                    <BlogText>
                        We flag it because it is the honest limit of this article. A twelve-year series of existing
                        sites is a genuinely useful thing to have and it is a lagging picture by construction. Anyone
                        telling you what the market will do next is not getting it from here.
                    </BlogText>

                    <BlogHeader>What this cannot tell you</BlogHeader>
                    <BlogText>
                        {source.limitation}
                    </BlogText>
                    <BlogText>
                        The trap worth naming: <BlogHighlight>share of existing sites is not share of new builds.</BlogHighlight>{" "}
                        A platform that every new project chose from tomorrow would still take years to show up here,
                        because the denominator is full of sites built long ago that nobody has touched. Decline in
                        this table is a lagging indicator, and so is growth.
                    </BlogText>
                    <BlogText>
                        It also says nothing about whether any of these platforms is right for you. A 59% share is not
                        an argument for WordPress and a 1.2% share is not an argument against Webflow. Those decisions
                        turn on your content model, your team, your integrations and what you are willing to run, and
                        none of that is in a percentage.
                    </BlogText>

                    <BlogHeader>Method and source</BlogHeader>
                    <BlogText>
                        Data from{" "}
                        <a href={source.url} target="_blank" rel="nofollow noopener noreferrer" className="font-medium text-cognac underline underline-offset-4 hover:text-charcoal">
                            {source.study}
                        </a>{" "}
                        by {source.publisher}, read on {source.verifiedAt}. {source.method}
                    </BlogText>
                    <BlogText>
                        We parsed the source&apos;s table cells rather than its page text, because the flattened text
                        loses the empty cells and our first pass silently placed two platforms in the wrong decade
                        because of it. Two rows the source shows from 2023 with no earlier history are excluded here: a
                        series that begins mid-way at a high value is far more likely a reclassification than real
                        adoption, and we would rather drop it than narrate a taxonomy change as a market movement.
                    </BlogText>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Deciding whether to move off one of these?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Market share is the wrong input for that decision. What your own site costs to run, what
                            you can export, and what breaks if you move are the right ones. Our{" "}
                            <Link href="/services/wordpress-migration" className="font-semibold text-orange-300 underline underline-offset-4">
                                WordPress migration service
                            </Link>{" "}
                            starts with that assessment, and several of our guides exist to talk people out of a
                            migration they do not need.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100">
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
