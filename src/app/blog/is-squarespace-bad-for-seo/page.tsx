import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, SearchCheck, Waypoints } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

const postId = "is-squarespace-bad-for-seo";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Is Squarespace Bad for SEO? A 2026 Diagnostic";
const description =
    "Squarespace covers many SEO fundamentals. Audit crawlability, page controls, content, structured data and measured performance before deciding to optimize or migrate.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "is Squarespace bad for SEO",
        "Squarespace SEO",
        "Squarespace SEO limitations",
        "improve Squarespace SEO",
        "migrate Squarespace website",
        "does Squarespace rank on Google",
        "Squarespace SEO problems",
        "is Squarespace good for SEO",
    ],
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-05-12",
        modifiedTime: "2026-08-03",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/is-squarespace-bad-for-seo")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Squarespace: request that AI models exclude your site", url: "https://support.squarespace.com/hc/en-us/articles/360022347072-Request-that-AI-models-exclude-your-site" },
    { name: "Squarespace: optimize your site for AI-powered search engines", url: "https://support.squarespace.com/hc/en-us/articles/38299115788813-Optimize-your-site-for-AI-powered-search-engines" },
    { name: "Squarespace: hiding your site from search results", url: "https://support.squarespace.com/hc/en-us/articles/21829426828045-Hiding-your-site-from-search-results" },
    { name: "Squarespace Extensions", url: "https://support.squarespace.com/hc/en-us/articles/360000975547-Squarespace-Extensions" },
    {
        name: "Squarespace: SEO checklist",
        url: "https://support.squarespace.com/hc/en-us/articles/360002090267-SEO-checklist",
    },
    {
        name: "Squarespace: what Squarespace does for SEO",
        url: "https://support.squarespace.com/hc/en-us/articles/206744067-What-Squarespace-does-for-SEO",
    },
    {
        name: "Google Search Console: performance report",
        url: "https://support.google.com/webmasters/answer/7576553",
    },
    { name: "Wix: editing your site's robots.txt file", url: "https://support.wix.com/en/article/editing-your-sites-robotstxt-file" },
    { name: "Wix: understanding preset markups for your site's pages", url: "https://support.wix.com/en/article/understanding-preset-markups-for-your-sites-pages" },
    { name: "Wix: importing or exporting URL redirects with a CSV file", url: "https://support.wix.com/en/article/importing-or-exporting-url-redirects-with-a-csv-file" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            datePublished: "2026-05-12",
            dateModified: "2026-08-03",
            image: ogImageUrlForPath(`/blog/${postId}`),
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["Squarespace", "Website migration", "Technical SEO", "Content management systems"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO",
            inLanguage: "en-US",
            wordCount: 2890,
            timeRequired: "PT14M",
            about: [
                { "@type": "Thing", name: "Squarespace", sameAs: ["https://en.wikipedia.org/wiki/Squarespace"] },
                { "@type": "Thing", name: "Search engine optimization", sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization"] },
                { "@type": "Thing", name: "Core Web Vitals" },
                { "@type": "Thing", name: "Structured data" },
            ],
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", "[data-speakable='true']"] },
            citation: sources.map((source) => ({ "@type": "CreativeWork", ...source })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", position: 3, name: "Squarespace SEO", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-05-12",
            dateModified: "2026-08-03",
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

export default function IsSquarespaceBadForSEOPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Squarespace SEO")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">Squarespace SEO</p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Is Squarespace Bad for SEO? <span className="italic text-cognac">Run This Diagnostic</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            Squarespace is not bad for SEO, and the platform handles the fundamentals properly. What it
                            has is a ceiling, and whether that ceiling matters depends entirely on who you are competing
                            against. Most sites that underperform have not reached it. They have pages where the controls
                            Squarespace already gives them were never filled in. Check that first, then judge the
                            platform on what is left.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Reviewed August 3, 2026 against current Squarespace and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="May 12, 2026" readTime="9 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The defensible answer</h2>
                        <BlogList
                            items={[
                                "Squarespace documents SEO descriptions, page titles, custom slugs, SSL, alt text, sitemaps and search-console connections.",
                                "No platform-wide mobile score, load-time range or ranking ceiling can be inferred without a dated sample and method.",
                                "Core Web Vitals matter within Google's broader systems, but a Lighthouse score is not a ranking guarantee.",
                                "A migration is justified by measured requirements and residual constraints, not a generic platform verdict.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Search evidence", body: "What Search Console shows, and what actually renders." },
                            { icon: Gauge, title: "Performance", body: "Field Core Web Vitals where available plus repeated route-level lab traces." },
                            { icon: Waypoints, title: "Business fit", body: "How you run it, what it costs, and who owns it." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>What Squarespace currently supports</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s current SEO checklist covers site and page SEO descriptions, page-title
                        formats, readable slugs, SSL, a custom 404 page, heading structure, image alt text, Google Search
                        Console and Bing Webmaster Tools. Squarespace also documents a set of things it does without being asked: it creates and updates the sitemap, serves pages at static URLs, redirects all connected domains to the primary domain, ships free SSL on connected domains, formats markup so search engines can read and index it, and makes every site mobile-optimized by default. These features do not
                        guarantee discovery or ranking, but they contradict the claim that Squarespace lacks basic SEO
                        controls.
                    </BlogText>
                    <BlogText>
                        The &ldquo;no plugins&rdquo; objection is out of date. Squarespace runs an Extensions marketplace it describes as the equivalent of plugins, add-ons or apps, connectable on every plan, though the extensions are built and managed by third parties and sit outside Squarespace support. That is a different trade from WordPress, not an absence. Available controls can vary by content type, plan and current product behavior. Confirm the
                        needed feature in the live editor and inspect the published HTML. A help-center feature list is
                        not proof that an individual site configured it correctly.
                    </BlogText>

                    <BlogHeader id="on-page-checklist">The on-page checklist, page by page</BlogHeader>
                    <BlogText>
                        Before assuming a platform ceiling, check whether the controls above were ever set. Underperforming sites usually have pages
                        where the controls above were simply never set. Work through this list on your top templates before
                        concluding Squarespace is the problem, and verify each item in the published HTML rather than in
                        the editor, because what the editor shows and what ships are not always the same thing. If the
                        complaint is load time rather than search, start from{" "}
                        <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">
                            testing a slow Squarespace site
                        </Link>{" "}
                        instead, and see what we handle on{" "}
                        <Link href="/services/squarespace" className="text-cognac hover:underline">
                            Squarespace projects
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "Page title: unique per page, front-loaded with the term the page is actually about. Check the rendered <title>, not just the editor field, because site title formats append text you may not expect.",
                            "SEO description: written per page. Google may rewrite it, but an empty one guarantees you have no influence at all.",
                            "URL slug: short, lowercase, hyphenated, and stable. Changing a slug on a page that already ranks needs a redirect, not a rename.",
                            "One H1 per page, describing the page rather than the brand, with H2s that follow the questions a reader would actually ask in order.",
                            "Image alt text on anything that carries meaning, and no alt text on purely decorative images. Also confirm images are compressed before upload, since Squarespace will happily serve what you gave it.",
                            "Canonical: confirm the published page self-references, and watch for duplicate reachable versions of the same content through tags, categories or archive routes.",
                            "Sitemap: Squarespace generates one at /sitemap.xml. Open it, confirm the pages you care about are in it and that the ones you do not want indexed are not.",
                            "Search Console and Bing Webmaster Tools: verified, sitemap submitted, and coverage reports actually read rather than just connected once.",
                            "Custom 404: configured, and returning a real 404 status rather than a soft 200.",
                        ]}
                    />
                    <InsightBox variant="info" label="Where the real ceiling starts">
                        None of the above requires leaving Squarespace, and none of it is where Squarespace genuinely
                        constrains you. The limits worth migrating over are different: control over structured data beyond
                        what Squarespace emits, server-level caching and redirect handling at scale, and how much of the
                        page is rendered markup an answer engine can read. Fix the checklist first, then judge the ceiling
                        on what is left.
                    </InsightBox>

                    <BlogHeader id="real-limits">The four limits that are actually structural</BlogHeader>
                    <BlogText>
                        Once the checklist above is clean, four constraints remain that no amount of configuration will
                        move. These are the ones worth weighing a migration against, and they are worth knowing before
                        you start rather than after you have built a hundred pages.
                    </BlogText>
                    <BlogList
                        items={[
                            "You cannot edit robots.txt. Squarespace generates it and gives you two checkboxes under Settings, Crawlers: block search engine crawlers, and block AI crawlers. The generated file carries its own internal disallow rules. If you need per-bot rules, crawl-delay or disallow patterns for parameterized URLs, Squarespace has no way to express them.",
                            "Blog posts sit under a collection prefix. Check yours in Pages: you can rename it, so /blog/ can become /news/ or /journal/, but confirm in your own site whether a post can live at the root before you plan a URL structure around it. Anyone migrating from WordPress with root-level post URLs needs a redirect for every one of them.",
                            "Redirects have no CSV import. They live at Settings, Advanced, URL Redirects in the format /old-url -> /new-url 301. You can paste many lines at once, so this is not the one-at-a-time job it is often described as, but there is no file import and no way to manage the list programmatically. On a large migration that is a real piece of manual work.",
                            "Multi-location businesses should test this before committing. Squarespace's Business Information settings take a single primary location and a Map block renders one pin per block, so check what genuinely separate location sites would require on your own plan, including how each would be billed. Location pages can still be built by hand; what you do not get is a location entity the platform understands.",
                        ]}
                    />
                    <BlogText>
                        The AI-crawler checkbox is worth a second look while you are in there. It is a single blunt
                        switch, on or off, for the whole site. That is a reasonable default for a business that wants
                        nothing to do with answer engines, and a problem for one that wants to be cited but not
                        scraped wholesale, because Squarespace gives you no way to draw that line. Squarespace is candid about what the switch buys you: its documentation says requesting that known AI crawlers exclude your site does not guarantee they will, and that ticking the box does not retroactively remove anything already scraped. Squarespace also publishes its own guide for AI-powered search, which tells you to leave that box unchecked if you want AI crawlers to scan the site, and recommends bullet points, numbered lists, tables and FAQ sections because AI search engines often reuse them verbatim.
                    </BlogText>

                    <BlogHeader id="wix-comparison">Squarespace or Wix: which gives you more SEO control?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Wix exposes more technical SEO control than Squarespace on three specific things: editing
                            robots.txt, editing the structured data the platform generates, and importing redirects from a
                            file. Squarespace exposes none of the three. That answers the capability question, and it does
                            not answer the platform question, because a control you will never open is worth nothing.
                        </BlogText>
                    </div>
                    <BlogText>
                        Both vendors document these features themselves, so the comparison below does not rest on anyone&apos;s
                        review. It is worth reading as three rows rather than a verdict, because only one of them is likely
                        to describe your situation.
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Control</th>
                                    <th className="p-4 font-bold">Squarespace</th>
                                    <th className="p-4 font-bold">Wix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-semibold">robots.txt</td>
                                    <td className="p-4">Generated, not editable. Two checkboxes under Settings, Crawlers</td>
                                    <td className="p-4">Editable through a Robots.txt Editor in the SEO and GEO dashboard</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Structured data</td>
                                    <td className="p-4">Six schema types emitted automatically, which you cannot edit or remove</td>
                                    <td className="p-4">Preset markups you can view and manage per page type, plus your own markup</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Redirects</td>
                                    <td className="p-4">Pasted line by line. No file import, no programmatic management</td>
                                    <td className="p-4">CSV import and export, plus a redirect manager and group redirects</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        Of the three, redirects are the row that actually costs people money, and it only costs it once.
                        Moving a site with two thousand old URLs onto Squarespace means pasting two thousand lines by hand,
                        which is an afternoon nobody scoped. The robots.txt row matters at scale or where parameterized URLs
                        need excluding, and almost nowhere else. The structured data row matters when what you want to add
                        conflicts with what Squarespace already emits, since yours sits alongside the automatic markup rather
                        than replacing it.
                    </BlogText>
                    <BlogText>
                        Read the rows against your own plan and most readers find that none of them apply. If you are running
                        forty pages, will never touch a robots directive and are not migrating anything, the extra controls are
                        a specification difference rather than a search difference, and switching between two template platforms
                        to get them is a lot of disruption for a capability you were not going to use. Both companies draw the
                        same line underneath all of this, too: Squarespace says its support cannot assist with SEO strategy or
                        guarantee ranking changes, and Wix says its customer care cannot help with robots.txt edits or structured
                        data changes. On the advanced controls, both platforms hand you the switch and step back.
                    </BlogText>

                    <BlogHeader>Why you will not find a Squarespace speed score here</BlogHeader>
                    <BlogText>
                        Every article that gives you one is quoting a sample it did not describe. Templates, media,
                        fonts, embeds, commerce features, consent tools, custom code and route content all move the
                        number, and the same page scores differently depending on the device profile, network, page
                        state and tool version used to test it.
                    </BlogText>
                    <InsightBox variant="info" label="Measure your own routes instead">
                        We do not publish a load-time range or a mobile score ceiling for Squarespace as a platform.
                        Any such number depends on which sites were sampled, what templates, media, embeds and third
                        parties those sites carried, and on the device profile and tool version used to test them. A
                        figure stated without that sample and method is not something you can plan against. Measure your
                        own routes and judge Squarespace on what those runs show.
                    </InsightBox>
                    <BlogText>
                        Measure representative URLs with PageSpeed Insights. Label field data and Lighthouse lab data
                        separately. Keep the test date, device profile, location, consent state and page state. Google
                        publishes good field thresholds for{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            LCP, INP and CLS
                        </Link>
                        , while also saying that good page experience does not guarantee top rankings. Our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">
                            repeatable PageSpeed process
                        </Link>{" "}
                        covers how to record those runs so they can be compared later.
                    </BlogText>

                    <BlogHeader>A route-level Squarespace SEO audit</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Run this before deciding anything, because it is the evidence that separates a platform limit from a setting nobody switched on. Seven checks, in order, and the order matters: indexability first, because everything below it is irrelevant if the page cannot be crawled. What you end up with is a list of pages and causes rather than a verdict about Squarespace.
                        </BlogText>
                    </div>
                    <BlogList
                        items={[
                            "Confirm the production site is public, returns the intended status and is not blocked from indexing.",
                            "Inspect rendered titles, descriptions, canonicals, headings, body copy, links and structured data on each important template.",
                            "Validate the sitemap, submitted URLs, redirects, 404 behavior and duplicate or parameterized URLs.",
                            "Review Search Console indexing and performance by page, query, device and country before interpreting a traffic change.",
                            "Measure field Core Web Vitals where eligible data exists and use repeated lab runs to diagnose individual routes.",
                            "Inventory images, videos, fonts, embeds, analytics, consent tools, custom code and other third parties.",
                            "Check content quality, search intent, internal links, local signals and competitors instead of reducing SEO to speed.",
                        ]}
                    />
                    <BlogText>
                        The last item is a study in itself. Work it through with our{" "}
                        <Link href="/blog/why-competitor-outranks-you" className="text-cognac hover:underline">
                            competitor ranking gap analysis
                        </Link>
                        , and keep the performance evidence in the frame described in{" "}
                        <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">
                            how website speed affects SEO
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Image and page-weight guidance needs context</BlogHeader>
                    <BlogText>
                        Squarespace&apos;s checklist currently recommends keeping individual images below 500 KB and
                        pages below 5 MB for faster loading. Treat those values as vendor recommendations, not Google
                        ranking thresholds. The right delivery budget depends on visual quality, route purpose, device
                        mix and measured user experience.
                    </BlogText>

                    <BlogHeader>Structured data and AI visibility</BlogHeader>
                    <BlogText>
                        Inspect the published structured data before declaring a gap. Squarespace&apos;s own documentation names the schemas it generates automatically, Blog post, Event, Local business, Organization, Product and Website, and states that you cannot edit or remove them. That is the real boundary: anything you add sits alongside what Squarespace already emits rather than replacing it, so check the rendered page for duplicate or conflicting entities before you ship. Add only markup that accurately
                        describes visible content and follows the relevant search-engine policy. Structured data can
                        make content eligible for supported search features; it does not force a rich result, AI
                        citation or ranking. Clear entities, useful answers, crawlable content and corroborating
                        evidence matter beyond schema. How we structure that work is described in our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac hover:underline">
                            answer-engine playbook
                        </Link>{" "}
                        and on our{" "}
                        <Link href="/ai-info" className="text-cognac hover:underline">
                            AI information page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader id="when-squarespace-is-fine">When Squarespace is genuinely good enough</BlogHeader>
                    <BlogText>
                        The platform ranks perfectly well when the competition is not trying especially hard, which
                        covers a lot of real businesses. It is worth being honest about that before anyone sells you
                        a rebuild you do not need.
                    </BlogText>
                    <BlogList
                        items={[
                            "A local business in a market where the competing sites are also templates. A plumber or a yoga studio is usually competing on proximity, reviews and a Google Business Profile far more than on Core Web Vitals.",
                            "A portfolio that does not depend on organic traffic. Photographers, illustrators and designers whose work arrives through referral, Instagram or word of mouth are running a showcase, not an acquisition channel.",
                            "An established site with real authority behind it. Years of content, links and brand mentions can outweigh a technical gap, and a new custom build starts from nothing on that front.",
                            "A genuinely narrow niche. If you are one of the few people covering a subject properly, almost any functioning platform will rank you.",
                        ]}
                    />
                    <BlogText>
                        The question worth asking is not whether Squarespace can rank. It plainly can. It is whether it
                        can keep pace with the specific competitors you are up against, which is a question about them
                        rather than about the platform. Squarespace is straightforward about the boundary too: its own
                        documentation says support cannot assist with SEO strategy and cannot guarantee ranking changes
                        or how a site appears in search results.
                    </BlogText>

                    <BlogHeader>Optimize, stay or migrate</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Three outcomes are legitimate and the evidence decides which, not the platform name. Stay when the checklist is clean and the constraints do not touch you. Optimize when the audit found settings rather than limits. Migrate only when a structural constraint blocks something the business actually needs, and you can name which one.
                        </BlogText>
                    </div>
                    <BlogText>
                        Three outcomes are legitimate, and the decision belongs to the evidence rather than the platform
                        name. If the answer points at leaving, read{" "}
                        <Link href="/blog/squarespace-vs-custom-website" className="text-cognac hover:underline">
                            Squarespace compared with a custom build
                        </Link>{" "}
                        and what goes into{" "}
                        <Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline">
                            costing a Squarespace migration
                        </Link>
                        .
                    </BlogText>
                    <div className="my-8 overflow-x-auto rounded-2xl border border-stone-200">
                        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                            <thead className="bg-stone-100 text-charcoal">
                                <tr>
                                    <th className="p-4 font-bold">Outcome</th>
                                    <th className="p-4 font-bold">When it is the right call</th>
                                    <th className="p-4 font-bold">What to do next</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200 text-stone-700">
                                <tr>
                                    <td className="p-4 font-semibold">Stay</td>
                                    <td className="p-4">The site already meets its search, editing, integration, performance and ownership requirements</td>
                                    <td className="p-4">Nothing. Spend the budget on content and demand instead</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Optimize</td>
                                    <td className="p-4">Images, page composition, embeds, metadata, content or internal links explain the measured problem</td>
                                    <td className="p-4">Work the on-page checklist above, then re-measure the same routes</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold">Migrate</td>
                                    <td className="p-4">Accepted requirements stay blocked after reasonable optimization, and the expected benefit exceeds migration plus operating cost</td>
                                    <td className="p-4">Scope the URL inventory, redirects and acceptance criteria before anyone writes code</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <BlogText>
                        A sound migration scope inventories every indexable URL, preserves valuable URLs where
                        practical, maps approved changes, validates metadata and canonicals, crawls rendered output,
                        tests redirects, submits sitemaps and keeps rollback instructions. This reduces avoidable
                        technical risk. It does not guarantee ranking retention, traffic growth or a recovery date. The
                        search side of that work is covered in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what a migration does to search visibility
                        </Link>
                        , the build side under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>
                        , with scope tiers on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">
                            pricing page
                        </Link>{" "}
                        and finished projects on the{" "}
                        <Link href="/work" className="text-cognac hover:underline">
                            work page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>How to investigate a traffic plateau</BlogHeader>
                    <BlogText>
                        A plateau is not proof that Squarespace caused it. Compare pages and queries in Search Console,
                        then check demand, competitors, SERP changes, content freshness, links, indexing, seasonality,
                        tracking changes and site releases. Google&apos;s <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer" className={sourceLinkClass}>traffic-drop guidance</a> recommends examining the
                        shape, timing and affected segments before deciding on a cause. Where the timing overlaps a
                        rollout, compare it against the{" "}
                        <Link href="/blog/google-algorithm-updates" className="text-cognac hover:underline">
                            record of the March 2026 core update
                        </Link>{" "}
                        before changing anything.
                    </BlogText>

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
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will audit representative Squarespace routes, identify what can be fixed in place and
                            scope a migration only where the evidence supports it. Performance acceptance, ownership,
                            support and remedies belong in the signed scope.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 font-bold text-white transition hover:bg-cognac/90">
                            Get Your Migration Plan <ArrowRight className="h-5 w-5" />
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
