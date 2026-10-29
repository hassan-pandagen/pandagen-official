import BlogCoverFigure from "@/components/blog/BlogCoverFigure";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, FileCode2, Gauge, SearchCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import ArticleContents from "@/components/blog/ArticleContents";
import { BlogAuthor, BlogHeader, BlogList, BlogQuote, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import { finding } from "@/data/research-facts";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "is-wix-bad-for-seo";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Is Wix Bad for SEO? What Wix Controls in 2026";
const description =
    "Wix renders pages on the server and lets you edit titles, slugs, canonicals, robots.txt, redirects and JSON-LD. Its real SEO limits, from Wix's own docs.";

const almanac = finding("almanac-2025-cms-cwv");
const techReport = finding("cwv-tech-report-2026-08-wix");

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "is Wix bad for SEO",
        "Wix SEO",
        "Wix SEO limitations",
        "is Wix good for SEO",
        "Wix server-side rendering",
        "Wix redirects",
        "Wix structured data",
        "Wix Core Web Vitals",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-10-04",
        modifiedTime: "2026-10-29",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath(`/blog/${postId}`)],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Wix: viewing your page's source code the way search engines do", url: "https://support.wix.com/en/article/viewing-your-pages-source-code-the-way-search-engines-do" },
    { name: "Wix developers: SEO best practices for Velo code", url: "https://dev.wix.com/docs/develop-websites/articles/best-practices/seo-best-practices" },
    { name: "Wix: about blog web addresses (URLs)", url: "https://support.wix.com/en/article/wix-blog-about-blog-post-web-addresses-urls" },
    { name: "Wix: customizing your pages' URL structure in SEO Settings", url: "https://support.wix.com/en/article/customizing-your-pages-url-structure-in-seo-settings" },
    { name: "Wix: setting up a 301 redirect for a page on your site", url: "https://support.wix.com/en/article/setting-up-a-301-redirect-for-a-page-on-your-site" },
    { name: "Wix: importing or exporting URL redirects with a CSV file", url: "https://support.wix.com/en/article/importing-or-exporting-url-redirects-with-a-csv-file" },
    { name: "Wix: adding structured data markup to your site's pages", url: "https://support.wix.com/en/article/adding-structured-data-markup-to-your-sites-pages-2546962" },
    { name: "Wix: troubleshooting your structured data markup", url: "https://support.wix.com/en/article/troubleshooting-your-structured-data-markup" },
    { name: "Wix: changing the canonical tags for your site's pages", url: "https://support.wix.com/en/article/changing-the-canonical-tags-for-your-sites-pages" },
    { name: "Wix: editing your site's robots.txt file", url: "https://support.wix.com/en/article/editing-your-sites-robotstxt-file" },
    { name: "Wix: understanding your site's sitemap file", url: "https://support.wix.com/en/article/understanding-your-sites-sitemap-file" },
    { name: "Wix: customizing your page's SEO settings in the SEO panel", url: "https://support.wix.com/en/article/customizing-your-pages-seo-settings-in-the-seo-panel" },
    { name: "Wix Multilingual: editing your site's URL structure", url: "https://support.wix.com/en/article/wix-multilingual-editing-your-multilingual-sites-url-structure" },
    { name: "Wix Multilingual: optimizing SEO settings", url: "https://support.wix.com/en/article/wix-multilingual-optimizing-seo-settings-for-multilingual-sites" },
    { name: "Wix: understanding your site's llms.txt file", url: "https://support.wix.com/en/article/understanding-your-sites-llmstxt-file" },
    { name: "Wix: understanding your Site Speed dashboard", url: "https://support.wix.com/en/article/understanding-your-site-speed-dashboard" },
    { name: "Google Search Central: JavaScript SEO basics", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
    { name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    { name: "Google Search Central (YouTube): Does a CMS matter for ranking in Google Search?", url: "https://www.youtube.com/watch?v=DbgHkxqdu4c" },
    { name: "Squarespace: what Squarespace does for SEO", url: "https://support.squarespace.com/hc/en-us/articles/206744067-What-Squarespace-does-for-SEO" },
    { name: "Screaming Frog SEO Spider", url: "https://www.screamingfrog.co.uk/seo-spider/" },
    { name: "HTTP Archive: Web Almanac 2025, CMS chapter", url: almanac.source },
    { name: "HTTP Archive: Core Web Vitals Technology Report", url: techReport.source },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-10-04",
            dateModified: "2026-10-29",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Wix", "Technical SEO", "Website migration", "Core Web Vitals", "Structured data"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO",
            inLanguage: "en-US",
            wordCount: 2650,
            timeRequired: "PT13M",
            about: [
                { "@type": "Thing", name: "Wix.com", sameAs: ["https://en.wikipedia.org/wiki/Wix.com"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
                { "@type": "Thing", name: "Server-side rendering" },
                { "@type": "Thing", name: "Core Web Vitals" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-10-04",
            dateModified: "2026-10-29",
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

const sourceLinkClass = "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

const controlRows: [string, string, string][] = [
    ["Titles and meta descriptions", "Editable per page, and as patterns for whole page types in SEO Settings", "Up to 10 extra tags per page, <meta> and <link> only"],
    ["URL slugs", "Editable per page, with an automatic 301 when you change one", "Blog posts keep a prefix (\"post\" by default) you can rename but not remove"],
    ["Redirects", "URL Redirect Manager, group redirects, CSV import and export", "5,000 per site, 500 per CSV file, custom domains only; homepage redirects use a domain redirect rather than the URL Redirect Manager"],
    ["Canonical tags", "Self-referencing by default, editable per page", "A changed canonical can drop the page from the sitemap"],
    ["robots.txt", "Fully editable in the Robots.txt Editor", "Wix Customer Care won't help with your edits"],
    ["Sitemap", "Generated and updated automatically, with a sitemap index", "No direct editing. Pages leave it through noindex or a changed canonical"],
    ["Structured data", "Presets on store, booking, blog and event pages, plus your own JSON-LD", "5 markups per page, under 7,000 characters each, 8,000 per page"],
    ["Rendering", "Server-side rendering for Wix pages", "Velo code that loads content outside onReady() may miss the server HTML"],
    ["Multilingual", "Subdirectories by default, hreflang and x-default added automatically", "Subdomains need a Premium or Studio plan"],
    ["AI crawlers", "robots.txt rules per bot, and an llms.txt file Wix writes and you can edit", "llms.txt needs a custom domain and indexing switched on"],
];

export default function IsWixBadForSEOPage() {
    return (
        <>
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb schemaId={`${canonicalUrl}#breadcrumb`} items={postCrumbs(postId, "Wix SEO")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header data-article-hero="split" className="mb-10 border-b border-stone-200 pb-8">
                      <div data-article-hero-copy>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Wix SEO</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Is Wix Bad for SEO? <span className="italic text-cognac">What Wix Controls in 2026</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            No. Wix serves its pages as server-rendered HTML, and it lets you edit titles, meta
                            descriptions, slugs, canonical tags, robots.txt, 301 redirects and JSON-LD structured data.
                            Its real SEO limits are narrower than its reputation: a blog prefix you can rename but not
                            remove, caps on redirects and structured data, and a heavy JavaScript payload you can&apos;t
                            change. If one of those blocks something your business needs, that&apos;s a reason to move.
                            If not, look at your content, links and settings first.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Checked October 4, 2026 against Wix&apos;s Help Center, Google Search Central and HTTP
                            Archive data.
                        </p>
                      </div>
                      <div data-article-hero-screen>
                        <BlogCoverFigure id={postId} />
                      </div>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" postId="is-wix-bad-for-seo" published="2026-10-04" readTime="13 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The short answer</h2>
                        <BlogList
                            items={[
                                "Wix documents server-side rendering, and a page we fetched with no JavaScript had its title, H1, canonical and body text in the HTML.",
                                "You can edit robots.txt, canonical tags, 301 redirects (with CSV import) and per-page JSON-LD structured data.",
                                `On measured speed, ${almanac.statement}.`,
                                "The limits are real but specific: a fixed blog prefix, 5,000 redirects per site, five structured data markups per page, and no direct sitemap editing.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: FileCode2, title: "What Google receives", body: "Server-rendered HTML, with one exception for custom Velo code." },
                            { icon: SearchCheck, title: "What you control", body: "Titles, slugs, canonicals, robots.txt, redirects, JSON-LD, hreflang." },
                            { icon: Gauge, title: "What you don't", body: "Hosting, the platform's own scripts and a few fixed URL rules." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <ArticleContents />

                    <BlogHeader id="controls">What can you control for SEO on Wix?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Almost everything a small business site needs. Wix lets you set titles and meta descriptions
                            per page or by page type, edit slugs, override canonical tags, edit robots.txt, manage 301
                            redirects in bulk and add your own JSON-LD. The table lists each control with the limit
                            Wix&apos;s own Help Center documents for it, read on October 4, 2026.
                        </BlogText>
                    </div>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">SEO control</th>
                                    <th className="p-4 font-bold">What Wix documents</th>
                                    <th className="p-4 font-bold">The limit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                {controlRows.map(([control, documented, limit]) => (
                                    <tr key={control}>
                                        <td className="p-4 font-semibold">{control}</td>
                                        <td className="p-4">{documented}</td>
                                        <td className="p-4">{limit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Two of those limits come with a warning from Wix itself. Its robots.txt and structured data
                        articles both say Wix Customer Care can&apos;t help with changes you make there. The controls exist,
                        and the responsibility for using them correctly is yours.
                    </BlogText>

                    <BlogHeader id="rendering">Can Google read a Wix site?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Yes. Wix&apos;s Help Center says &ldquo;Wix sites use Server Side Rendering (SSR),&rdquo; so the
                            page content arrives in the HTML the server sends, before any JavaScript runs. The same Help
                            Center page adds a note about AI tools: &ldquo;Most AI crawlers don&apos;t run JavaScript. They
                            read only the HTML your server sends.&rdquo;
                        </BlogText>
                    </div>
                    <BlogText>
                        We checked it ourselves. On October 4, 2026 we fetched two Wix-hosted pages
                        with curl, identifying as Googlebot and running no JavaScript: a stock store template from
                        Wix&apos;s template gallery and an article on Wix&apos;s SEO Learning Hub. Both returned their title,
                        H1, a self-referencing canonical tag and their body text in the raw HTML. The template&apos;s HTML
                        document was 429 KB with 57 script tags, and the article&apos;s was 765 KB with 72, so the content
                        is there, inside a lot of code.
                    </BlogText>
                    <BlogText>
                        The exception is custom code. If you build with Velo, Wix&apos;s developer docs say content loaded
                        inside <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">onReady()</code> is rendered on
                        the server and seen by search engines, and warn that &ldquo;Content not included in the initial HTML
                        output may be indexed after a long delay, indexed incorrectly, or not at all.&rdquo; Content
                        connected through a dataset is included. Google&apos;s{" "}
                        <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>JavaScript SEO guide</a>{" "}
                        gives the general version: Google can render JavaScript, but &ldquo;server-side or pre-rendering is
                        still a great idea because it makes your website faster for users and crawlers, and not all bots
                        can run JavaScript.&rdquo;
                    </BlogText>

                    <BlogHeader id="urls">Where do Wix&apos;s URL rules limit you?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            In the blog, mainly. Wix blog posts live under a prefix, &ldquo;post&rdquo; by default. Wix says
                            you can rename it but &ldquo;It is not possible to remove the &lsquo;post&rsquo; prefix
                            entirely,&rdquo; and the blog-feed and post prefixes must be different. You cannot keep the
                            feed at /blog and use that same prefix for /blog/post-title. This is a restriction on the pair
                            of prefixes, not a universal ban on the word &ldquo;blog&rdquo; in a post URL. Store product pages are more flexible: Wix
                            says you can remove the &ldquo;product-page&rdquo; prefix in SEO Settings.
                        </BlogText>
                    </div>
                    <BlogText>
                        Before moving onto Wix or off it, check the actual feed and post prefixes against the old URLs.
                        Redirect each address that changes; do not assume every post must move just because it used /blog/.
                        Wix&apos;s
                        redirect tools handle that well up to a point: a CSV file imports up to 500 redirects at a time, a
                        site holds up to 5,000, and group redirects move pages that share a path. Three rules to know
                        before you start: 301 redirects only work on a custom domain, the URL Redirect Manager cannot
                        redirect the homepage (Wix documents domain-to-domain redirection for that), and changing a blog post&apos;s slug doesn&apos;t create a redirect automatically the
                        way it does for ordinary pages.
                    </BlogText>
                    <BlogText>
                        Multilingual sites get a sensible default. Wix uses subdirectories such as /fr, adds hreflang and
                        x-default tags automatically, and lets you translate each page&apos;s slug. Wix also offers
                        language parameters (?lang=fr) and says itself that search engines don&apos;t recommend them, so
                        check which structure your site is on.
                    </BlogText>

                    <BlogQuote>
                        Wix&apos;s SEO limits are specific enough to list in one table. Check them against your own site
                        before you blame the platform.
                    </BlogQuote>

                    <BlogHeader id="speed">Is Wix too slow to rank?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Not on the evidence. HTTP Archive measures Core Web Vitals for millions of real sites, and
                            Wix sites pass more often than WordPress sites. {techReport.statement}. Google uses Core Web
                            Vitals as one input among many, so a pass doesn&apos;t guarantee rankings and a fail
                            doesn&apos;t rule them out.
                        </BlogText>
                    </div>
                    <BlogText>
                        The same research has a less flattering half, and it belongs here too. HTTP Archive&apos;s 2025 Web
                        Almanac found that &ldquo;Wix and Shopify exhibit the highest JavaScript payloads, with median
                        mobile sizes of 1,634 KB and 1,615 KB, respectively.&rdquo; That code is Wix&apos;s, and you
                        can&apos;t remove it. Every app, embed and video you add loads on top of it.
                    </BlogText>
                    <BlogText>
                        To see your own numbers, open the Site Speed dashboard. Wix says it shows real-visitor Core Web
                        Vitals from Wix Analytics for all browsers alongside a Lighthouse simulation, once a site has had
                        10 or more sessions in the past 7 days. Google&apos;s figures come from Chrome users only, so the two
                        won&apos;t match exactly. If the pages are slow, our{" "}
                        <Link href="/blog/wix-too-slow" className={sourceLinkClass}>guide to diagnosing a slow Wix site</Link>{" "}
                        works through the causes you can fix inside Wix, and{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className={sourceLinkClass}>how site speed affects SEO</Link>{" "}
                        explains how much weight speed carries.
                    </BlogText>
                    <BlogText>
                        Source and method: {almanac.method} {almanac.limitation} The August 2026 percentages are our
                        arithmetic from the counts in HTTP Archive&apos;s{" "}
                        <a href={techReport.source} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Core Web Vitals Technology Report</a>,
                        which covers a different set of sites from the{" "}
                        <a href={almanac.source} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>Web Almanac</a>,
                        so we don&apos;t mix the two in one comparison.
                    </BlogText>

                    <BlogHeader id="google">Does Google treat Wix sites differently?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            No. In a 2022 Google Search Central video, Google&apos;s John Mueller said: &ldquo;Hand-created
                            web pages can be just as good as those generated by WordPress, Wix, Squarespace, or similar. As
                            far as I can tell, all mainstream CMS systems can create pages that work well in search.&rdquo;
                            He also said Google&apos;s systems &ldquo;don&apos;t focus on how the page was created, instead
                            they focus on the final result.&rdquo;
                        </BlogText>
                    </div>
                    <BlogText>
                        Google&apos;s written docs say the same thing from the other side. The{" "}
                        <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>SEO Starter Guide</a>{" "}
                        opens with &ldquo;There are no secrets here that&apos;ll automatically rank your site first in
                        Google,&rdquo; and notes that if you use a CMS, you might not need to do anything technical to your
                        titles beyond writing good ones. What ranks a Wix site is what ranks any site: useful pages, a
                        clear structure, links from elsewhere and a site Google can crawl. If a competitor on another
                        platform outranks you, our{" "}
                        <Link href="/blog/why-competitor-outranks-you" className={sourceLinkClass}>competitor gap analysis</Link>{" "}
                        is a better first step than a platform change.
                    </BlogText>

                    <BlogHeader id="squarespace">Is Wix better than Squarespace for SEO?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            On technical controls, yes. Wix lets you edit robots.txt, write your own structured data and
                            import redirects from a CSV file. Squarespace&apos;s help center says the schemas it generates
                            automatically are ones &ldquo;you can&apos;t edit or remove.&rdquo; Whether the difference
                            matters depends on whether you&apos;d ever use those controls.
                        </BlogText>
                    </div>
                    <BlogText>
                        On a 20-page local business site that isn&apos;t migrating, you may never open them. On a site
                        moving hundreds of URLs, a redirect file you can import replaces a lot of manual entry. The
                        Squarespace side, including its robots.txt and redirect settings with their own sources, is in{" "}
                        <Link href="/blog/is-squarespace-bad-for-seo" className={sourceLinkClass}>is Squarespace bad for SEO</Link>.
                    </BlogText>

                    <BlogHeader id="check">How to check your own Wix site&apos;s SEO</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Run these seven checks before deciding anything about the platform. They take an afternoon on a
                            small site, and each one either finds a setting to fix or rules a cause out. Work in order,
                            because a page Google can&apos;t index makes every later check irrelevant.
                        </BlogText>
                    </div>
                    <ol className="my-6 list-decimal space-y-3 pl-6 text-lg leading-relaxed text-stone-700">
                        <li>Open Google Search Console&apos;s Page indexing report and list every important page marked &ldquo;Excluded&rdquo; or &ldquo;Crawled, currently not indexed,&rdquo; with the reason Google gives.</li>
                        <li>Crawl the site with Screaming Frog (free up to 500 URLs) and export each URL&apos;s title, meta description, H1, canonical and status code, so you can spot duplicates and blanks.</li>
                        <li>Open your SEO Settings in the Wix dashboard and check the title and description patterns for each page type, since one bad pattern repeats across every product or post.</li>
                        <li>View the page source of your three most important pages with the browser set to Googlebot, as Wix&apos;s Help Center describes, and confirm the main text is there.</li>
                        <li>Open /robots.txt and /sitemap.xml on your live domain, and confirm nothing you want indexed is blocked or missing.</li>
                        <li>Test one product, post or service page in Google&apos;s Rich Results Test to see which structured data Wix is emitting.</li>
                        <li>Check the Site Speed dashboard for pages rated Poor on LCP, INP or CLS, then look at the apps and embeds on those pages first.</li>
                    </ol>

                    <BlogHeader id="when-to-move">When is leaving Wix worth it for SEO?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Leave when a specific Wix limit blocks something the business needs and you can name it. Good
                            reasons include a required feed-and-post URL structure that Wix cannot preserve, more than 5,000 redirects, structured
                            data beyond five markups a page, or custom features Velo can&apos;t deliver. &ldquo;Wix is bad
                            for SEO&rdquo; on its own isn&apos;t a reason, because the evidence above doesn&apos;t support it.
                        </BlogText>
                    </div>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Outcome</th>
                                    <th className="p-4 font-bold">When it&apos;s the right call</th>
                                    <th className="p-4 font-bold">What to do next</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-semibold">Stay</td>
                                    <td className="p-4">The seven checks pass and none of Wix&apos;s limits touch what you publish</td>
                                    <td className="p-4">Spend the budget on content and links</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Fix inside Wix</td>
                                    <td className="p-4">The checks found empty titles, wrong patterns, blocked pages, slow apps or missing redirects</td>
                                    <td className="p-4">Fix them, then compare the same Search Console reports once Google has recrawled the pages</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Move</td>
                                    <td className="p-4">A named Wix limit blocks a requirement after the fixes, and the move costs less than living with it</td>
                                    <td className="p-4">List every URL, map each to its new address, and agree what done looks like before any build</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        A platform move has its own search risk, which{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className={sourceLinkClass}>what a migration does to search visibility</Link>{" "}
                        covers step by step. For the wider trade-offs beyond SEO, read our{" "}
                        <Link href="/blog/wix-vs-custom-website" className={sourceLinkClass}>Wix vs custom website comparison</Link>.
                        If the answer is to move, see{" "}
                        <Link href="/services/wix" className={sourceLinkClass}>how we scope a Wix migration</Link>.
                        Our custom builds start at $1,500 with no minimum project size, and the{" "}
                        <Link href="/pricing" className={sourceLinkClass}>pricing page</Link>{" "}
                        lists what each tier includes.
                    </BlogText>

                    <InsightBox variant="info" label="What this page doesn't claim">
                        Platform averages describe thousands of sites, not yours. A Wix site can fail Core Web Vitals, and a
                        move to any platform can lose traffic if redirects are missed. Use the checks above on your own
                        pages, and judge Wix on what they show.
                    </InsightBox>

                    <BlogHeader>Primary sources</BlogHeader>
                    <ul className="my-6 list-disc space-y-3 pl-6 text-stone-700">
                        {sources.map((source) => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>
                                    {source.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Want a second opinion on your Wix site?</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            Talk to the founders. We&apos;ll run the checks above on your key pages, tell you what can be
                            fixed inside Wix, and scope a move only if a Wix limit is actually in the way.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Book a 15-min call <ArrowRight className="h-5 w-5" />
                        </CalModalButton>
                    </section>

                    <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} showHeading={false} />
                    <TopicUpLink postId={postId} />

                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
        </>
    );
}
