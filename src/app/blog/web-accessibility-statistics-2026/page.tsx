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
import { BlogAuthor, BlogHeader, BlogHighlight, BlogList, BlogText } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { finding } from "@/data/research-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "web-accessibility-statistics-2026";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = "https://www.pandacodegen.com/blog/web-accessibility-statistics-2026";
const title = "Web Accessibility Statistics 2026: What the Data Actually Shows";
const description =
    "95.9% of the top million home pages failed automated WCAG testing in 2026, reversing six years of improvement. What the measured data shows about failure types, platforms and legal exposure, and what it cannot tell you.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blog/web-accessibility-statistics-2026" },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    keywords: [
        "web accessibility statistics",
        "WCAG compliance rate",
        "how many websites are accessible",
        "ADA website lawsuits",
        "accessibility errors by platform",
        "WebAIM Million 2026",
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-08-13",
        modifiedTime: "2026-08-15",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/web-accessibility-statistics-2026")],
    },
    twitter: { card: "summary_large_image", title, description },
};

// Every figure below renders from research-facts.json, which carries the method,
// the limitation and the verified-at date for each one. Nothing here is typed in
// by hand, so a correction reaches this page and every other citation at once.
const CITED = [
    "wcag-failure-rate-2026",
    "errors-per-page-2026",
    "top-failure-types-2026",
    "cms-errors-2026",
    "framework-errors-2026",
    "ecommerce-errors-2026",
    "ada-federal-filings-fy2025",
] as const;

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/web-accessibility-statistics-2026"),
            datePublished: "2026-08-13",
            dateModified: "2026-08-15",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                knowsAbout: ["Web accessibility", "WCAG", "Next.js", "Website migration", "Technical SEO"],
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "Accessibility",
            inLanguage: "en-US",
            about: [
                { "@type": "Thing", name: "Web accessibility", sameAs: ["https://en.wikipedia.org/wiki/Web_accessibility"] },
                { "@type": "Thing", name: "Web Content Accessibility Guidelines", sameAs: ["https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines"] },
                { "@type": "Thing", name: "Americans with Disabilities Act of 1990", sameAs: ["https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990"] },
            ],
            wordCount: 2112,
            timeRequired: "PT11M",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            keywords: ["web accessibility statistics", "WCAG", "WebAIM Million", "ADA", "accessibility errors"],
            // Citations generated from the same data the body renders, so the
            // machine-readable source list cannot drift from the visible one.
            citation: [...new Set(CITED.map((id) => finding(id).source))].map((url) => ({
                "@type": "CreativeWork",
                name: CITED.map((id) => finding(id)).find((f) => f.source === url)!.study,
                url,
            })),
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
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
                { "@type": "ListItem", position: 3, name: "Web Accessibility Statistics 2026", item: canonicalUrl },
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

const sourceLinkClass = "font-medium text-cognac underline underline-offset-4 hover:text-charcoal";
const inlineLinkClass = "font-medium text-cognac hover:underline";

export default function WebAccessibilityStatistics2026Page() {
    return (
        <>
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-paper pb-10 pt-16 text-charcoal selection:bg-stone-200">
                <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white px-8 py-10 shadow-xs md:px-14">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={postCrumbs(postId, "Web accessibility statistics")} />

                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Accessibility</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Web accessibility statistics 2026:{" "}
                            <span className="italic text-cognac">what the data actually shows</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            The web got measurably less accessible in 2026, ending six consecutive years of small
                            improvements. This is what the measured data says about how sites fail, whether the platform
                            matters, and where the legal exposure sits, along with the parts the data cannot settle.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Figures verified against their sources on 13 August 2026. Each one is stated with the method
                            behind it, because an accessibility percentage without a method is not a measurement.
                        </p>
                    </header>

                    <BlogAuthor
                        name="Hassan Jamal"
                        role="Co-founder and Lead Engineer"
                        bio="Hassan builds and migrates production websites, and writes the engineering guides on this site."
                    />

                    <BlogHeader>The headline number, and the part that matters more</BlogHeader>
                    <BlogText>
                        <BlogHighlight>{finding("wcag-failure-rate-2026").statement}.</BlogHighlight> In total,{" "}
                        {finding("errors-per-page-2026").statement}.
                    </BlogText>
                    <BlogText>
                        The percentage is not the interesting part. It has sat above 94% every year the study has run, and
                        a number that high stops carrying information. {finding("wcag-failure-rate-2026").note}
                    </BlogText>
                    <BlogText>
                        Home pages also got more complex. Average page element counts rose 22.5% in a single year, which
                        is the likeliest mechanism: more elements means more places for a failure to occur, and the
                        failure rate rose alongside the complexity rather than independently of it.
                    </BlogText>
                    <BlogText>
                        That is worth sitting with, because it is not a story about anyone getting lazier. Home pages in
                        2026 carry more third-party embeds, more consent tooling, more chat widgets and more marketing
                        components than they did a year earlier. Every one of those is markup a site owner did not write
                        and often cannot edit. A team can improve everything under its own control and still watch its
                        error count rise, because the growth is happening in the parts of the page it does not own.
                    </BlogText>

                    <BlogHeader>What actually fails, and why that is good news</BlogHeader>
                    <BlogText>
                        {finding("top-failure-types-2026").statement}.
                    </BlogText>
                    <BlogText>
                        {finding("top-failure-types-2026").note} Take the three largest in turn.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Low contrast text is a colour value.</BlogHighlight> WCAG 2 at level AA asks for a
                        contrast ratio of at least 4.5:1 between normal-size text and its background, and 3:1 for large
                        text. Browser developer tools report the ratio for any element you inspect, so this is checkable
                        in seconds and fixable by changing a hex code. It appears on 83.9% of home pages mostly because
                        light grey on white reads as tasteful in a design tool and unreadable on a phone in daylight.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Missing alternative text is a sentence somebody writes.</BlogHighlight> The fix
                        is not automatic: an image that carries meaning needs text describing what it conveys, and an
                        image that is purely decorative needs an empty alt attribute so a screen reader skips it. Both
                        are a judgement, which is exactly why a machine can tell you the attribute is absent but cannot
                        tell you whether the one that is there is any good.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Missing form labels are an attribute.</BlogHighlight> A placeholder is not a
                        label. It disappears the moment someone types, it is often too low-contrast to read, and it is
                        not reliably announced. A visible label bound to the input is the fix, and it makes the form
                        easier for everyone rather than only for people using assistive technology.
                    </BlogText>
                    <BlogText>
                        None of these require an architectural change, a replatform, or a specialist retainer. Together
                        with three others they account for 96% of what automated testing detects.{" "}
                        <BlogHighlight>That reframes the problem.</BlogHighlight> The common failures are not hard
                        engineering problems. They are decisions nobody made, on pages nobody checked.
                    </BlogText>

                    <BlogHeader>Does the platform matter?</BlogHeader>
                    <BlogText>
                        Somewhat, and not in the direction a web studio would find convenient.{" "}
                        {finding("cms-errors-2026").statement}.
                    </BlogText>
                    <BlogText>
                        Squarespace and Wix scored better than WordPress. The likely reason is the same constraint that
                        frustrates people who outgrow those platforms: a hosted builder decides your markup, and markup
                        you cannot edit is markup you cannot break. If you are never going to change anything
                        structural, that limitation is working in your favour.
                    </BlogText>
                    <BlogText>
                        The framework breakdown runs the other way. {finding("framework-errors-2026").statement}. And
                        in commerce the gap is wider still. {finding("ecommerce-errors-2026").statement}.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>Read all of that carefully.</BlogHighlight>{" "}
                        {finding("cms-errors-2026").limitation} A newer framework attracts newer sites built by
                        better-resourced teams, and that alone would produce the same pattern. These figures describe
                        populations of sites. They are not evidence that any particular agency, including this one,
                        builds accessible websites.
                    </BlogText>

                    <BlogHeader>The legal picture, stated carefully</BlogHeader>
                    <BlogText>
                        {finding("ada-federal-filings-fy2025").statement}.
                    </BlogText>
                    <BlogText>
                        {finding("ada-federal-filings-fy2025").note} We are engineers, not lawyers. What we can tell you
                        is what the court statistics count and what they do not, and{" "}
                        {finding("ada-federal-filings-fy2025").limitation} If your exposure is a real question for your
                        business, that is a conversation for a lawyer in your jurisdiction, not for a web studio&apos;s blog.
                    </BlogText>
                    <BlogText>
                        What we will say is that the vendor version of this statistic is usually presented without either
                        caveat. A figure in the high thousands, attached to the word lawsuits, attached to a product
                        page, is a sales instrument rather than a measurement. The number is real. What it counts is
                        narrower than the sentence around it usually implies, and you are entitled to know which is
                        which before anyone quotes you for a fix.
                    </BlogText>

                    <BlogHeader>What to do with this, in order</BlogHeader>
                    <BlogText>
                        The same order we use for performance work, for the same reason: measure the site you actually
                        have before deciding what to change about it.
                    </BlogText>
                    <BlogList
                        items={[
                            "Run an automated check on your own most important pages, not just the home page. Home pages are the least representative page on most sites, and every figure in this article is home-page data.",
                            "Fix contrast, alternative text and form labels first. They are the most common failures in the data and the cheapest to change, whatever platform you are on.",
                            "Test with a keyboard. Tab through a form and a navigation menu without touching the mouse. This takes two minutes and catches things no automated tool reports.",
                            "Only then consider whether anything structural needs to change. Most sites in this data do not have an architecture problem, they have an unchecked-pages problem.",
                        ]}
                    />

                    <BlogText>
                        One thing worth naming, because it comes up in every quote: an overlay widget that promises
                        instant compliance is not the same as fixing the page. It sits on top of markup it did not
                        author and tries to correct it at runtime. Whatever you think of the category, an overlay does
                        not change the contrast ratio your designer chose or write the alternative text nobody wrote.
                        Those remain your decisions, on your pages.
                    </BlogText>

                    <BlogHeader>What this data cannot tell you</BlogHeader>
                    <BlogText>
                        Every figure above comes from automated testing, and{" "}
                        {finding("wcag-failure-rate-2026").limitation} A page can pass every automated check and still be
                        unusable with a screen reader, because the things that matter most, such as whether alternative
                        text is accurate or whether a reading order makes sense, cannot be judged by a machine.
                    </BlogText>
                    <BlogText>
                        It also cannot tell you about your site. This is a million home pages, sampled once, in February
                        2026. It establishes what is normal across the web. It establishes nothing at all about the pages
                        your customers actually use.
                    </BlogText>
                    <BlogText>
                        The home-page-only sampling matters more than it sounds. A home page is usually the most designed
                        and least functional page on a site. The pages where accessibility failures actually cost someone
                        something are checkouts, booking forms, account settings and search results, and none of those
                        are in this data. The reasonable inference is that the figures here are a floor rather than a
                        ceiling, but that is an inference, and we are labelling it as one.
                    </BlogText>
                    <BlogText>
                        And it cannot tell you about people. Every number on this page counts machine-detectable defects
                        in markup. Not one of them counts a person who gave up on a form. That measurement exists, but
                        it is made by watching people use your site, and no million-page scan is a substitute for it.
                    </BlogText>

                    <BlogHeader>So we measured our own site</BlogHeader>
                    <BlogText>
                        Writing the paragraphs above put us in an awkward position. This article argues that low
                        contrast is the most common failure on the web, that it is a hex value, and that the reason it
                        is everywhere is that nobody checked. It would be reasonable for you to ask whether we had.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>We had not.</BlogHighlight> We scanned all 134 pages of this site with axe-core
                        on 14 August 2026 and found 740 detected violation nodes across 70 of them. The home page alone
                        carried 15 contrast failures. Three rules accounted for everything: 388 contrast, 329 links in
                        body text distinguished by colour alone, and 23 scrollable tables that could not be reached
                        with a keyboard.
                    </BlogText>
                    <BlogText>
                        Almost all of it came from a handful of decisions rather than a hundred mistakes. One neutral
                        token measured 4.39:1 against our page background, failing by 0.11 in 57 places. Inline links
                        were cognac and only underlined on hover, which is one CSS rule and 329 of the nodes. The
                        accent colour worked on white and failed on charcoal, and no single value could fix both:
                        clearing 4.5:1 against white caps relative luminance at 0.183, and clearing it against our dark
                        panels needs at least 0.233. That one needed a surface-aware token rather than a find and
                        replace, which we learned by trying the find and replace first and adding 51 new failures.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>All 134 pages now report zero detected violations</BlogHighlight>, confirmed on
                        three consecutive runs. The scanner is in our repository and runs against a local build before
                        anything ships.
                    </BlogText>
                    <BlogText>
                        Two things that number is not. It is not comparable to the 95.9% above, because that study uses
                        WAVE and we used axe-core, and comparing counts across tools is a measurement error rather than
                        a result. And zero detected violations is not conformance, for the same reason it is not
                        conformance for anybody else on this page. It means the machine-checkable part is clean.
                    </BlogText>
                    <BlogText>
                        We are publishing the before number because the 95.9% figure includes sites built by people who
                        know all of this. We were one of them. The useful part is not that we are now at zero, it is
                        that finding out took one afternoon and a free tool, on a site nobody had ever scanned.
                    </BlogText>

                    <BlogHeader>Sources</BlogHeader>
                    <BlogText>
                        Every figure in this article, with its method and the date we verified it:
                    </BlogText>
                    <ul className="mb-10 space-y-4 text-sm leading-7 text-stone-600">
                        {[...new Set(CITED.map((id) => finding(id).source))].map((url) => {
                            const f = CITED.map((id) => finding(id)).find((x) => x.source === url)!;
                            return (
                                <li key={url}>
                                    <a href={url} target="_blank" rel="nofollow noopener noreferrer" className={sourceLinkClass}>
                                        {f.study}
                                    </a>{" "}
                                    , {f.publisher}. Published {f.publishedYear}. Verified {f.verifiedAt}. {f.method}
                                </li>
                            );
                        })}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <h2 className="mb-3 font-serif text-3xl">Find out where your own site stands</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Every number here describes other people&apos;s websites. Our{" "}
                            <Link href="/free-audit" className="font-semibold text-orange-300 underline underline-offset-4">
                                free technical audit
                            </Link>{" "}
                            scans a URL you give it and reports what it finds, with no signup. If you would rather have a
                            person look at it, the same offer applies.
                        </p>
                        <CalModalButton
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-charcoal hover:bg-stone-100"
                        >
                            Book a 30-minute review <ArrowRight className="h-4 w-4" />
                        </CalModalButton>
                    </section>

                    <BlogHeader>Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <BlogText>
                        Related reading:{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className={inlineLinkClass}>
                            WordPress vs Next.js
                        </Link>{" "}
                        covers the same CMS and framework data in the context of a platform decision, and{" "}
                        <Link href="/blog/core-web-vitals-explained" className={inlineLinkClass}>
                            Core Web Vitals explained
                        </Link>{" "}
                        applies the same measure-before-you-change discipline to performance.
                    </BlogText>

                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
