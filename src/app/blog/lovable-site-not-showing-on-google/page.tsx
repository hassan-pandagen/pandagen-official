import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Code2, SearchCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogAuthor, BlogHeader, BlogList, BlogText, CodeWindow, ComparisonGrid, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));
const CrawlerBlindAnimation = dynamicImport(() => import("@/components/blog/CrawlerBlindAnimation"));

const postId = "lovable-site-not-showing-on-google";
const postFAQs = blogPosts.find((post) => post.id === postId)?.faqs ?? [];
const canonicalUrl = `https://www.pandacodegen.com/blog/${postId}`;
const title = "Lovable Site Not Showing on Google? A 2026 Diagnostic";
const description =
    "Current Lovable apps support SSR or crawler pre-rendering. Diagnose publishing, indexing, canonicals, metadata, content and Search Console before proposing a rebuild.";

export const dynamic = "force-static";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: `/blog/${postId}` },
    keywords: [
        "Lovable site not showing on Google",
        "Lovable SEO",
        "Lovable app indexing",
        "Lovable server side rendering",
        "Lovable Google Search Console",
        "do AI crawlers read JavaScript",
        "client side rendering SEO",
        "react SPA not indexed by Google",
        "bolt.new website SEO",
        "v0 website not indexed",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-12",
        modifiedTime: "2026-07-31",
        authors: ["Hassan Jamal"],
        url: canonicalUrl,
        images: [ogImageForPath("/blog/lovable-site-not-showing-on-google")],
    },
    twitter: { card: "summary_large_image", title, description },
};

const sources = [
    { name: "Lovable: optimize your app for SEO and AI search", url: "https://docs.lovable.dev/features/seo-aeo" },
    { name: "Lovable: publish your project", url: "https://docs.lovable.dev/features/publish" },
    { name: "Lovable: custom domains", url: "https://docs.lovable.dev/features/custom-domain" },
    {
        name: "Google Search Central: URL Inspection",
        url: "https://support.google.com/webmasters/answer/9012289",
    },
    { name: "OpenAI: crawlers and bots", url: "https://developers.openai.com/api/docs/bots" },
    {
        name: "Vercel: the rise of the AI crawler (December 17, 2024)",
        url: "https://vercel.com/blog/the-rise-of-the-ai-crawler",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${canonicalUrl}#article`,
            headline: title,
            description,
            image: ogImageUrlForPath("/blog/lovable-site-not-showing-on-google"),
            datePublished: "2026-07-12",
            dateModified: "2026-07-31",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about/hassan",
                knowsAbout: ["AI site builders", "Server-side rendering", "Technical SEO", "Next.js"],
                image: { "@type": "ImageObject", url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 },
                sameAs: ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"],
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
            articleSection: "SEO and AEO",
            inLanguage: "en-US",
            wordCount: 2081,
            timeRequired: "PT10M",
            about: [
                { "@type": "Thing", "name": "Lovable", "sameAs": ["https://lovable.dev/"] },
                { "@type": "Thing", "name": "Server-Side Rendering", "sameAs": ["https://en.wikipedia.org/wiki/Server-side_scripting"] },
                { "@type": "Thing", "name": "Search Indexing", "sameAs": ["https://en.wikipedia.org/wiki/Search_engine_indexing"] },
                { "@type": "Thing", "name": "Next.js", "sameAs": ["https://nextjs.org/", "https://en.wikipedia.org/wiki/Next.js"] },
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
                { "@type": "ListItem", position: 3, name: "Lovable indexing", item: canonicalUrl },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
            datePublished: "2026-07-12",
            dateModified: "2026-07-31",
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

export default function LovableSiteNotShowingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb items={postCrumbs(postId, "Lovable indexing")} />
                    <Link href="/blog" className="mb-8 mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-charcoal">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>

                    <header className="mb-10 border-b border-stone-200 pb-8">
                        <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            <Bot className="h-4 w-4" /> SEO and AEO
                        </div>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Lovable Site Not Showing on Google? <span className="italic text-cognac">Diagnose It First</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600" data-speakable="true">
                            On current Lovable, an empty page for crawlers is usually not your problem. Apps created
                            from May 13, 2026 use TanStack Start and return server-rendered HTML, and older React and
                            Vite projects are pre-rendered on request for verified search and AI crawlers. That leaves
                            the duller explanations, which are also the fixable ones: the project was never publicly
                            published, the URL you are checking is not the one that can be indexed, or the page is
                            indexed and simply is not ranking. Work through them in that order before anyone quotes
                            you for a rebuild.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Checked against current Lovable and Google documentation on July 31, 2026.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="July 12, 2026" readTime="7 min read" linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/" />

                    <div className="my-10">
                        <CrawlerBlindAnimation />
                    </div>

                    <section data-speakable="true" className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <h2 className="mb-4 text-2xl font-bold text-charcoal">The current rendering model</h2>
                        <BlogList
                            items={[
                                "Lovable says new apps created from May 13, 2026 use TanStack Start with server-side rendering.",
                                "Older React and Vite apps use on-request pre-rendering on deployed public URLs for verified search, social and AI crawlers.",
                                "Private, unpublished and branded workspace URLs are not indexable; a public deployment is required.",
                                "Technical eligibility does not guarantee indexing, ranking or an AI citation.",
                            ]}
                        />
                    </section>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Indexing", body: "Is it public, is it indexable, and what does URL Inspection say." },
                            { icon: Code2, title: "Rendered output", body: "Verify the output Google actually fetched, not only browser source or a generic scanner." },
                            { icon: Bot, title: "AEO", body: "Readable facts help you qualify. Nothing promises a citation." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogText>
                        Before any of that, find out which of Lovable&apos;s two rendering paths your project is on,
                        because they fail differently and they test differently.
                    </BlogText>

                    <ComparisonGrid
                        left={{
                            label: "Older React or Vite project",
                            items: [
                                "Created before May 13, 2026",
                                "Verified search and AI crawlers get pre-rendered HTML",
                                "Everyone else gets the single-page app shell",
                                "Your own fetch shows the shell, not what Googlebot receives",
                            ],
                        }}
                        right={{
                            label: "New app on TanStack Start",
                            items: [
                                "Created from May 13, 2026 onward",
                                "Server-rendered HTML returned to all requests",
                                "Your own fetch and Googlebot see the same thing",
                                "Still no promise of indexing, ranking or citation",
                            ],
                        }}
                    />

                    <BlogHeader>The 60-second output test</BlogHeader>
                    <BlogText>
                        Four checks, all free, in the order that tells you the most for the least effort.
                    </BlogText>
                    <BlogList
                        items={[
                            "View source, not Inspect. On the live page press Ctrl+U, then Ctrl+F for your main headline. Inspect shows the page after JavaScript has run, which is the one view that cannot answer this question.",
                            "Fetch it as an ordinary client. Run the curl below and read what comes back. On an older React or Vite project you will see the single-page app shell: a near-empty body whose only real element is a mount point, usually <div id=\"root\"></div>, with your content nowhere in the response. That exact string is what to search the output for.",
                            "Ask Google what it actually received. Search Console, URL Inspection, then View crawled page. This is the authoritative answer for Google and it beats every third-party scanner.",
                            "Pull the Agentic Browsing checks in PageSpeed Insights. The category is experimental, needs Chrome 150 or later, and reports a ratio of checks passed rather than a score out of 100.",
                        ]}
                    />

                    <CodeWindow filename="terminal">{`curl -sS -A "GPTBot" https://yoursite.com/ | head -c 2000`}</CodeWindow>

                    <InsightBox variant="warning" label="Why that curl can lie to you">
                        This is the trap in most Lovable SEO advice, including the earlier version of this page. Older
                        React and Vite projects get Lovable&apos;s on-request pre-rendering, and the documentation says
                        it is served only to search and AI crawlers it has verified. Setting a user-agent header on
                        your laptop does not make you verified. So you fetch your own site, get the app shell back, and
                        conclude Google sees an empty page, while Googlebot may be receiving fully pre-rendered HTML.
                        Run it anyway, because it tells you what an unverified agent receives and that is a real
                        audience. Just do not use it as evidence about Google. Use URL Inspection for that.
                    </InsightBox>

                    <BlogHeader>Step 1: confirm the project is eligible to be indexed</BlogHeader>
                    <BlogText>
                        Before debugging anything, establish whether the URL is allowed to be indexed at all. Lovable's documentation states that unpublished, private and branded workspace URLs are never indexable, so if that is the address you have been checking, nothing you do to the content will help. Confirm the published canonical host, its status code, the robots directives and the sitemap contents.
                    </BlogText>
                    <BlogList
                        items={[
                            "Publish the current version to a public URL. Lovable says unpublished, private and branded workspace URLs are not indexable.",
                            "Open the intended canonical host and confirm the page returns the expected content and a successful status.",
                            "Check for a sitewide noindex meta tag, X-Robots-Tag header or robots.txt rule that blocks the page.",
                            "Confirm that the sitemap exists, uses the intended host and contains the page's current canonical URL.",
                            "Choose one primary custom domain and redirect alternate connected domains where the current product supports it.",
                        ]}
                    />

                    <InsightBox variant="info" label="The two-addresses problem">
                        Lovable can leave you with more than one address for the same site: the published lovable.app
                        URL and the custom domain you connected later. If both stay reachable, Google can settle on the
                        one you did not want and keep it. The documentation is firm on one part of this. Private
                        projects, unpublished projects and branded workspace URLs are never indexable, so if that is
                        the address you have been checking, nothing you do to the content will help. Decide which host
                        is canonical, point the others at it, and make the sitemap and the canonical tags agree.
                    </InsightBox>

                    <BlogHeader>Step 2: use Lovable&apos;s current review</BlogHeader>
                    <BlogText>
                        Lovable&apos;s SEO and AI search review checks metadata, Open Graph data, structured data,
                        content structure, robots.txt, sitemap, indexing, performance, accessibility and mobile
                        usability. Published projects receive additional live checks. The scan does not rerun
                        automatically on every publish, so run it again after a material change and confirm the result
                        reflects the latest code.
                    </BlogText>
                    <BlogText>
                        Lovable also documents a Google Search Console workflow when its connector is enabled. Verify
                        the intended property, publish the latest routes and submit the current sitemap. A passing
                        platform scan is useful technical evidence, not a promise that a page will rank. Treat the
                        performance part of that scan the way our{" "}
                        <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">
                            repeatable PageSpeed process
                        </Link>{" "}
                        describes, with the profile and run count written down.
                    </BlogText>

                    <BlogHeader>Step 3: inspect what Google fetched</BlogHeader>
                    <BlogText>
                        Use Search Console URL Inspection for the exact canonical URL. Review index status, the
                        user-declared and Google-selected canonical, crawl state and the crawled page. Test the live
                        URL when appropriate. This is more probative than concluding that Google saw an empty page
                        because a third-party scanner or a normal curl request returned the older app&apos;s SPA shell.
                    </BlogText>
                    <BlogText>
                        The crawl, index and rendered-output group in our{" "}
                        <Link href="/blog/why-competitor-outranks-you" className="text-cognac hover:underline">
                            competitor ranking gap analysis
                        </Link>{" "}
                        works from the same evidence, on any stack.
                    </BlogText>
                    <BlogText>
                        Lovable says its older-stack pre-rendering is limited to verified crawlers, while unverified
                        agents receive the regular single-page app. Newer TanStack Start apps return server-rendered
                        HTML more broadly. First identify the project stack and hosting path, then test the correct
                        output.
                    </BlogText>

                    <BlogHeader>Step 4: validate page-level signals</BlogHeader>
                    <BlogText>
                        Once the page can be indexed, six signals decide whether it deserves to rank. Unique accurate titles and descriptions, one clear topic per route with meaningful internal links, an accurate self-referencing canonical, structured data only where it matches visible content, and a mobile experience that is measured rather than eyeballed. The last question is the honest one: does this page answer the query better than the pages already indexed?
                    </BlogText>
                    <BlogList
                        items={[
                            "Write a unique, accurate title and useful search description for each important route.",
                            "Use one clear page topic, descriptive headings, visible factual copy and meaningful internal links.",
                            "Set an accurate self-referencing canonical unless a deliberate consolidation strategy says otherwise.",
                            "Use structured data only where it matches visible content and the relevant search-engine policy.",
                            "Give important images descriptive alt text and keep the mobile experience usable and accessible.",
                            "Check whether the page actually satisfies the query better than indexed competitors.",
                        ]}
                    />
                    <BlogText>
                        The mobile experience in that list is measured, not judged by eye. Our guide to{" "}
                        <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">
                            Core Web Vitals
                        </Link>{" "}
                        covers which field metrics to read and at what percentile.
                    </BlogText>

                    <BlogHeader>Step 5: separate indexing from ranking</BlogHeader>
                    <BlogText>
                        An indexed page can still receive no impressions because demand, intent, content quality,
                        competition, links, location or SERP presentation work against it. Compare pages and queries in
                        Search Console. Do not diagnose a rendering failure from “zero traffic” alone. If the change
                        overlaps a Google rollout, check the dates against the{" "}
                        <Link href="/blog/google-algorithm-updates" className="text-cognac hover:underline">
                            record of the March 2026 core update
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        Google says JavaScript sites should use unique titles and descriptions, meaningful HTTP status
                        codes, crawlable links and careful canonical handling. Server-side or pre-rendering can help
                        users and crawlers, but Google also processes JavaScript. Architecture is one input, not an
                        automatic index or rank decision.
                    </BlogText>

                    <BlogHeader>When a migration is actually justified</BlogHeader>
                    <BlogText>
                        Four conditions have to hold at once, and the search consequences are covered separately in{" "}
                        <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac hover:underline">
                            what a migration does to search visibility
                        </Link>{" "}
                        and in what goes into{" "}
                        <Link href="/blog/website-migration-cost-2026" className="text-cognac hover:underline">
                            costing a website migration
                        </Link>
                        .
                    </BlogText>
                    <BlogList
                        items={[
                            "The platform you are on cannot meet a requirement you have written down about rendering, routing, integrations, accessibility, speed or governance.",
                            "The residual problem remains after current Lovable publishing and SEO controls are configured and verified.",
                            "The team accepts the new editing workflow, hosting, maintenance, security and total operating cost.",
                            "The migration plan covers the routes, the data, forms, logins, integrations, analytics, consent, redirects, testing and how to roll back.",
                        ]}
                    />
                    <BlogText>
                        Next.js can be an appropriate destination, but it does not automatically produce correct
                        metadata, fast pages, rankings or citations. Preserve stable URLs where practical, document
                        every URL disposition and define measurable acceptance in the signed scope. The stack we build
                        on is described in our note on{" "}
                        <Link href="/blog/nextjs-sanity-stack" className="text-cognac hover:underline">
                            pairing Next.js with Sanity
                        </Link>
                        , and the route-by-route method in{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">
                            migrating a site to Next.js
                        </Link>
                        .
                    </BlogText>
                    <BlogText>
                        Delivery sits under{" "}
                        <Link href="/services/custom-engineering" className="text-cognac hover:underline">
                            custom engineering
                        </Link>{" "}
                        and, for a CMS-backed rebuild,{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline">
                            our migration service
                        </Link>
                        . Scope tiers are on the{" "}
                        <Link href="/pricing" className="text-cognac hover:underline">
                            pricing page
                        </Link>{" "}
                        and finished builds on the{" "}
                        <Link href="/work" className="text-cognac hover:underline">
                            work page
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Do ChatGPT and Claude crawlers run JavaScript?</BlogHeader>
                    <BlogText>
                        Design as though they do not, and be suspicious of anyone stating it as a current fact in
                        either direction. The most-cited measurement is Vercel&apos;s crawler analysis, which found that
                        GPTBot and ClaudeBot fetched JavaScript files, 11.5 and 23.8 percent of their requests, without
                        executing them. That is a real finding from a large sample. It was also published in December
                        2024, which is a long time ago in this particular area.
                    </BlogText>
                    <BlogText>
                        Neither OpenAI nor Anthropic documents current rendering behavior for its crawlers.
                        OpenAI&apos;s bots page names each agent and what it is for and says nothing about JavaScript.
                        Treat every confident blanket claim about what AI crawlers can render as undated until someone
                        shows you the date. The safe design does not change either way: keep the content that matters
                        in the HTML your server sends, then read your own logs to see which agents actually requested
                        the page. The wider glossary entry sits in our{" "}
                        <Link href="/blog/aeo-web-performance-glossary" className="text-cognac hover:underline">
                            AEO and web performance glossary
                        </Link>
                        .
                    </BlogText>

                    <BlogHeader>Do AI discovery files guarantee citations?</BlogHeader>
                    <BlogText>
                        No. Lovable includes AI-oriented checks and documents crawlable output for named AI crawlers.
                        An llms.txt file, Markdown view, schema block or framework can make information easier to
                        discover or interpret, but no such control guarantees crawling, use, recommendation or
                        citation by an external AI product. What we do build in, and why, is set out in our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac hover:underline">
                            answer-engine playbook
                        </Link>{" "}
                        and on our{" "}
                        <Link href="/ai-info" className="text-cognac hover:underline">
                            AI information page
                        </Link>
                        .
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

                    <p className="mt-6 text-xs leading-relaxed text-stone-500">
                        Correction, July 24, 2026: an earlier version of this article said Lovable, Bolt and Replit all
                        deliver an empty shell to every crawler, and presented migrating to Next.js as the fix.
                        Lovable&apos;s documentation contradicts that, and the byte counts quoted were not reproducible.
                        The article was rewritten around the documented behavior. Sources rechecked July 31, 2026.
                    </p>

                    <section className="my-12 rounded-2xl bg-charcoal p-8 text-white">
                        <CheckCircle2 className="mb-5 h-8 w-8 text-cognac" />
                        <h2 className="mb-3 text-3xl font-bold">Get your migration plan</h2>
                        <p className="mb-6 max-w-2xl leading-relaxed text-stone-300">
                            We will verify the live Lovable deployment, Search Console evidence and current product
                            controls first. If a rebuild is justified, the plan names routes, integrations, acceptance
                            tests, ownership, launch controls and support.
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
