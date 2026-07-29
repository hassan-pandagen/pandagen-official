import { ogImageForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Code2, SearchCheck } from "lucide-react";
import Link from "next/link";
import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogAuthor, BlogHeader, BlogList, BlogText, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";

const RelatedPosts = dynamicImport(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = dynamicImport(() => import("@/components/ui/CalModalButton"));

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
    ],
    openGraph: {
        title,
        description,
        type: "article",
        publishedTime: "2026-07-12",
        modifiedTime: "2026-07-24",
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
        name: "Google Search Central: JavaScript SEO basics",
        url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    },
    {
        name: "Google Search Central: URL Inspection",
        url: "https://support.google.com/webmasters/answer/9012289",
    },
    {
        name: "Google Search Central: ask Google to recrawl",
        url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl",
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
            datePublished: "2026-07-12",
            dateModified: "2026-07-24",
            author: {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                name: "Hassan Jamal",
                jobTitle: "Co-founder and Lead Engineer",
                url: "https://www.pandacodegen.com/about",
            },
            publisher: { "@id": "https://www.pandacodegen.com/#organization" },
            mainEntityOfPage: { "@id": canonicalUrl },
            articleSection: "SEO and AEO",
            inLanguage: "en-US",
            citation: sources.map((source) => ({ "@type": "WebPage", ...source })),
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
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Lovable indexing", href: `/blog/${postId}` },
                        ]}
                    />
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
                            Current Lovable hosting is not accurately described as sending every crawler an empty
                            client-side shell. New apps use server-side rendering, while older public React and Vite
                            apps receive Lovable&apos;s on-request pre-rendering for verified search and AI crawlers.
                            Indexing can still fail, but the cause must be tested.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Corrected July 24, 2026 against current Lovable and Google documentation.
                        </p>
                    </header>

                    <BlogAuthor name="Hassan Jamal" role="Co-founder and Lead Engineer" date="July 12, 2026" readTime="11 min read" />

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

                    <InsightBox variant="warning" label="Material correction">
                        This article previously claimed Lovable, Bolt and Replit universally deliver an empty shell and
                        that a Next.js migration is the “real fix.” Current Lovable documentation directly contradicts
                        that platform-wide claim. The unrelated builder comparisons and unsupported byte counts were
                        removed.
                    </InsightBox>

                    <div className="my-8 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: SearchCheck, title: "Indexing", body: "Public status, HTTP response, robots, noindex, sitemap, canonical and URL Inspection." },
                            { icon: Code2, title: "Rendered output", body: "Verify the output Google actually fetched, not only browser source or a generic scanner." },
                            { icon: Bot, title: "AEO", body: "Crawlable facts, clear entities and sources help eligibility but cannot promise inclusion or citation." },
                        ].map(({ icon: Icon, title: cardTitle, body }) => (
                            <div key={cardTitle} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                                <Icon className="mb-3 h-5 w-5 text-cognac" />
                                <h3 className="mb-2 font-bold text-charcoal">{cardTitle}</h3>
                                <p className="text-sm leading-relaxed text-stone-600">{body}</p>
                            </div>
                        ))}
                    </div>

                    <BlogHeader>Step 1: confirm the project is eligible to be indexed</BlogHeader>
                    <BlogList
                        items={[
                            "Publish the current version to a public URL. Lovable says unpublished, private and branded workspace URLs are not indexable.",
                            "Open the intended canonical host and confirm the page returns the expected content and a successful status.",
                            "Check for a sitewide noindex meta tag, X-Robots-Tag header or robots.txt rule that blocks the page.",
                            "Confirm that the sitemap exists, uses the intended host and contains the page's current canonical URL.",
                            "Choose one primary custom domain and redirect alternate connected domains where the current product supports it.",
                        ]}
                    />

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
                        <Link href="/blog/google-march-2026-update" className="text-cognac hover:underline">
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
                            "The current platform cannot meet a documented rendering, routing, integration, accessibility, performance or governance requirement.",
                            "The residual problem remains after current Lovable publishing and SEO controls are configured and verified.",
                            "The team accepts the new editing workflow, hosting, maintenance, security and total operating cost.",
                            "The migration plan covers routes, data, forms, authentication, integrations, analytics, consent, redirects, testing and rollback.",
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
                    <RelatedPosts currentPostId={postId} />
                </article>
            </main>
            <Footer />
        </>
    );
}
