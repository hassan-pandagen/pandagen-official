import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Scale, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const aeoPlaybookFAQs = blogPosts.find(p => p.id === "aeo-playbook-built-into-every-website")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/SEORankingAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: { absolute: "AEO Playbook: How to Get Your Site Quoted by AI Search" },
    description: "A practical, evidence-led AEO playbook for crawlability, useful content, structured data, measurement, and AI-search eligibility without citation guarantees.",
    alternates: {
        canonical: "/blog/aeo-playbook-built-into-every-website",
    },
    keywords: [
        "aeo playbook",
        "answer engine optimization",
        "ai citations new website",
        "ai-info page",
        "schema markup for ai",
        "new domain seo alternative",
        "aeo service",
        "ai search optimization 2026"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "AEO Playbook: How to Get Your Site Quoted by AI Search",
        description: "Ten practical controls for AI-search eligibility, measurement, and useful content without promising inclusion, ranking, or citation.",
        type: "article",
        publishedTime: "2026-05-18T00:00:00-05:00",
        modifiedTime: "2026-08-19T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website",
        images: [ogImageForPath("/blog/aeo-playbook-built-into-every-website")],
    },
    twitter: {
        card: "summary_large_image",
        title: "AEO Playbook: How to Get Your Site Quoted by AI Search",
        description: "An evidence-led playbook for crawlability, structured data, useful content, and AI-search measurement.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#article",
            "headline": "AEO Playbook: How to Get Your Site Quoted by AI Search",
            "description": "An evidence-led AEO playbook covering crawlability, useful content, structured data, measurement, and AI-search eligibility without citation guarantees.",
            "image": ogImageUrlForPath("/blog/aeo-playbook-built-into-every-website"),
            "datePublished": "2026-05-18T00:00:00-05:00",
            "dateModified": "2026-08-19T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "knowsAbout": ["Answer engine optimization", "Structured data", "Technical SEO", "AI crawlers"],
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#webpage" },
            "articleSection": "AEO",
            "keywords": ["aeo playbook", "answer engine optimization", "ai citations new website", "ai-info page", "schema markup", "aeo service"],
            "inLanguage": "en-US",
            "wordCount": 3975,
            "timeRequired": "PT20M",
            "about": [
                { "@type": "Thing", "name": "Answer Engine Optimization" },
                { "@type": "Thing", "name": "AI Citations" },
                { "@type": "Thing", "name": "New Domain SEO" },
                { "@type": "Thing", "name": "Answer engine optimization" },
                { "@type": "Thing", "name": "Structured data" },
                { "@type": "Thing", "name": "Google AI Overview" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google guide to optimizing for generative AI features", "url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
                { "@type": "CreativeWork", "name": "Google Search generative AI performance reports", "url": "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" },
                { "@type": "CreativeWork", "name": "OpenAI crawler guidance", "url": "https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers" },
                { "@type": "CreativeWork", "name": "Schema.org Organization", "url": "https://schema.org/Organization" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#faq",
            "mainEntity": aeoPlaybookFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "AEO Playbook", "item": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#webpage",
            "url": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website",
            "name": "AEO Playbook: How to Get Your Site Quoted by AI Search",
            "description": "An evidence-led playbook for crawlability, useful content, structured data, and AI-search measurement.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-18T00:00:00-05:00",
            "dateModified": "2026-08-19T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "email": "info@pandacodegen.com",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function AEOPlaybookPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <article>
            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs("aeo-playbook-built-into-every-website", "AEO Playbook")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/10 text-cognac rounded-full text-xs font-semibold mb-4">
                            <Zap className="w-3 h-3" /> AEO
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            AEO Playbook: Build Eligibility for{" "}
                            <span className="font-serif italic text-cognac">AI Search and Citations</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            Ten things you can actually do: make sure crawlers can reach your pages, write content that answers something, mark it up so machines can read it, and measure what happens. Together they make you eligible to be picked, and let you see what is going on. Nothing you build can guarantee you get included, ranked, sent traffic, or quoted.
                        </p>
                        <BlogAuthor
                            name="Hassan Jamal"
                            date="May 18, 2026"
                            readTime="15 min read"
                            bio="Hassan is PandaCodeGen's Co-founder and Lead Engineer. He works on making sure search engines and AI assistants can actually read a site, and that what they read is backed by evidence. Any AI referral described here is a dated first-party observation, not a citation guarantee."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <FeatureVisual />
                </div>
            </section>

            <section className="px-6 pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-100">

                    {/* Executive Summary */}
                    <div className="mb-8 md:mb-12 p-6 md:p-8 bg-stone-50 border-l-4 border-cognac rounded-r-xl" data-speakable="true">
                        <p className="text-xs font-bold uppercase tracking-wider text-cognac mb-3">The Short Answer</p>
                        <BlogList items={[
                            "Google says the basics that always mattered for Search still matter for its AI features: your pages can be crawled, they can be indexed, they say something useful, and they are decent to use.",
                            "Something you know first-hand holds up far better than a page written only to catch a phrasing someone might type.",
                            "Structured data helps machines work out what a page is about. Google treats correct markup as something you need in place, not something that makes you appear.",
                            "Watch visibility using each provider's own reports, the referrals you can actually see in your analytics, and manual checks you date and keep. Impressions with no clicks are not proof an AI quoted you.",
                            "We can build these controls into a migration we have agreed, but what you actually get depends on the signed scope and the content you have.",
                            "Google and the AI systems decide for themselves what they crawl, index, rank, recommend and quote. Nobody else controls that."
                        ]} />
                    </div>

                    {/* Section 1: The Loss + Opportunity */}
                    <BlogHeader id="are-you-losing">Where to Start if You Are Behind on Both</BlogHeader>
                    <BlogText>
                        Search and AI visibility both reward clear, useful, crawlable evidence, but neither rankings nor citations are guaranteed. Start by measuring how your important pages are indexed, cited, and converted today, then improve the evidence systems can evaluate.
                    </BlogText>
                    <BlogText>
                        The practical starting point is not a market-adoption percentage. It is whether your important pages are accessible, useful, attributable, and measurable today.
                    </BlogText>
                    <BlogList items={[
                        "Confirm that important pages return usable HTML, allow the relevant crawlers, and remain eligible for indexing and snippets.",
                        "Publish what you actually did, how you did it, where it stops working, and when you checked. Do not rewrite what everyone else already published.",
                        "Keep visible copy, metadata, and structured data consistent.",
                        "Record AI-feature impressions where a provider exposes them, referral traffic where available, and manual prompt observations with the date, account, country, and prompt."
                    ]} />
                    <BlogText>
                        Google&apos;s current <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">generative AI optimization guide</a> emphasizes useful, unique, people-first content and the existing technical foundations of Search. It also states that meeting the requirements does not guarantee crawling, indexing, or serving.
                    </BlogText>
                    <BlogText>
                        That is a better standard than claiming a secret AEO formula. A smaller company can publish excellent first-hand material, but age, links, reputation, relevance, competition, query context, and system-specific behavior may all affect discovery.
                    </BlogText>
                    <BlogText>
                        If you are a new business or a small operator, focus on a narrow set of questions where you have real experience. Document the process, the trade-offs, and the evidence a buyer would need to make a decision.
                    </BlogText>
                    <BlogText>
                        The honest position on being new is narrower than the usual pitch, and more useful. An
                        established competitor generally has stronger brand and source signals. A newer business often
                        has fresher first-hand evidence and can publish it faster, because there is nobody to get
                        approval from. Neither of those decides the outcome on its own. What you get from being small
                        is speed, and the only thing worth spending that speed on is publishing things you actually
                        know that nobody else has written down.
                    </BlogText>
                    <BlogText>
                        An AI-info page, clear headings, and structured data can help a system interpret public facts, but they are inputs, not ranking weights or citation guarantees. Publish them because they improve clarity and governance, then measure what actually happens.
                    </BlogText>
                    <BlogText>
                        Google began testing dedicated generative-AI performance reports in Search Console in June 2026. Where the report is available, use its page, country, device, date, and impression dimensions instead of treating ordinary impression changes as proof of an AI Overview citation.
                    </BlogText>
                    <BlogText>
                        There is no verified advantage window of any particular length. The durable advantage is operational: maintain accurate public facts, publish evidence worth citing, and keep a dated measurement record.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>We build sites every bot can read, then structure your answers so the questions your buyers actually ask are the easiest thing on the page to lift.</BlogHighlight> Both halves are things you can check yourself. Readability is a test you run in PageSpeed Insights. The structure is visible in your own page source, in plain sentences a person and a machine read the same way.
                    </BlogText>

                    {/* Section 2: what AEO means and does not mean */}
                    <BlogHeader id="aeo-wins-for-new-domains">What AEO Actually Means, and What It Does Not</BlogHeader>
                    <BlogText>
                        AEO stands for Answer Engine Optimization. We use it to mean making your public information clear, checkable and easy for search and AI tools to read. It does not create a right to inclusion or citation.
                    </BlogText>
                    <BlogText>
                        Provider systems are not interchangeable, and their ranking or citation weights are not fully public. Google advises site owners to keep using Search fundamentals, publish unique and useful content, and avoid creating many low-value pages for prompt variations.
                    </BlogText>
                    <BlogText>
                        Here is what each system actually rewards.
                    </BlogText>

                    <div className="my-6 -mx-6 md:mx-0 overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
                        <p className="text-xs text-stone-500 px-6 md:px-0 mb-2 md:hidden">Swipe to see all columns</p>
                        <table className="w-full text-sm border-collapse min-w-[560px]">
                            <thead>
                                <tr className="bg-stone-100">
                                    <th className="p-3 text-left font-bold text-charcoal border border-stone-300">What gets rewarded</th>
                                    <th className="p-3 text-left font-bold text-charcoal border border-stone-300">Google SEO</th>
                                    <th className="p-3 text-left font-bold text-charcoal border border-stone-300">AEO (ChatGPT, Claude, Perplexity)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Access</td><td className="p-3 text-stone-600 border border-stone-300">Indexable and crawlable pages</td><td className="p-3 text-charcoal border border-stone-300">Provider-specific crawler access</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Content</td><td className="p-3 text-stone-600 border border-stone-300">Helpful, relevant, original information</td><td className="p-3 text-charcoal border border-stone-300">Useful, attributable passages and evidence</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Structure</td><td className="p-3 text-stone-600 border border-stone-300">Clear HTML, links, metadata, and canonicals</td><td className="p-3 text-charcoal border border-stone-300">Clear public facts and readable page structure</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Structured data</td><td className="p-3 text-stone-600 border border-stone-300">Eligibility aid; appearance not guaranteed</td><td className="p-3 text-charcoal border border-stone-300">Context aid; citation effect not guaranteed</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Measurement</td><td className="p-3 text-stone-600 border border-stone-300">Search Console and analytics</td><td className="p-3 text-charcoal border border-stone-300">Provider reports, referrals, and dated observations</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Time to result</td><td className="p-3 text-stone-600 border border-stone-300">No fixed timeline</td><td className="p-3 text-charcoal border border-stone-300">No fixed timeline</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The short version: <BlogHighlight>clear answers help users and machines, but useful content, reputation, relevance, technical access, and competition still matter.</BlogHighlight>
                    </BlogText>
                    <BlogText>
                        Treat AI-referred visitors as a separate acquisition segment only when your analytics can identify the source. Compare conversion quality with your own sample and attribution rules; do not apply another company&apos;s result as a forecast.
                    </BlogText>

                    {/* Section 3: The Receipt */}
                    <BlogQuote>
                        Being crawlable, answering something and being measurable is not a growth hack. It is the baseline most sites still skip.
                    </BlogQuote>

                    <BlogHeader id="the-receipt">What Counts as Evidence</BlogHeader>
                    <BlogText>
                        We launched pandacodegen.com in February 2026. Custom Next.js, fixed pricing starting at $1,500. We do website rebuilds and migrations for businesses tired of slow WordPress, Shopify, Webflow, and GoHighLevel sites.
                    </BlogText>
                    <BlogText>
                        A defensible AEO record separates observations from conclusions. Search Console impressions, referral headers, customer statements, and third-party monitoring tools each answer different questions.
                    </BlogText>
                    <BlogText>
                        For each observation, retain the prompt, account or plan, country, date, visible answer, cited URL, and screenshot. For a referral, retain the analytics source and landing page. For a customer statement, label it as customer-reported unless another attribution method corroborates it.
                    </BlogText>
                    <BlogText>
                        Do not make these common inference errors:
                    </BlogText>
                    <BlogList items={[
                        "A Search Console impression increase is not proof of an AI Overview citation unless the relevant report identifies the generative feature.",
                        "Zero clicks may have many causes and is not a citation signature.",
                        "A customer-reported AI referral is useful first-party context, but it does not prove which page or technical control caused the recommendation.",
                        "A monitoring tool observation is time-, account-, location-, and prompt-specific; it is not universal provider behavior."
                    ]} />
                    <BlogText>
                        PandaCodeGen may publish dated first-party observations after retaining the supporting record and confirming publication permission. Until then, this page does not present them as proof of a repeatable outcome.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>What this means for clients:</BlogHighlight> scope the technical and editorial controls that PandaCodeGen can deliver, define how they will be verified, and do not contract for an inclusion or citation outcome controlled by another system.
                    </BlogText>

                    {/* Section 4: The 10 Tactics */}
                    <BlogHeader id="passage-shape">What a Citable Passage Actually Looks Like</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Most AEO advice describes the container: answer-first paragraphs of roughly 40 to 60 words
                            under question-shaped headings, sometimes called BLUF, and atomic sections that still make
                            sense when a chunking algorithm lifts them away from everything around them. That advice is
                            correct and it is not sufficient, because it tells you the shape of the box and not what to
                            put in it.
                        </BlogText>
                        <BlogText>
                            We derived the following from a passage of ours that we watched get lifted into an AI
                            answer, rather than from reasoning about what ought to work. Four things were present
                            together:
                        </BlogText>
                        <BlogList
                            items={[
                                "A named action. Not 'improve your tracking' but the specific thing to do, in a verb the reader can carry out today.",
                                "A named tool, with its constraint stated. Not 'use analytics' but the actual product, and the limit that matters — the window it reports over, the percentile it uses, what it cannot see.",
                                "Enumerated fields. The specific things to record or check, listed rather than summarised. A list of five named items survives extraction; 'gather the relevant data' does not.",
                                "A stated purpose. Why this step exists and what it rules out, so the passage carries its own justification when it appears without the paragraphs around it.",
                            ]}
                        />
                        <BlogText>
                            All four inside a numbered step. The reason this works is the same reason atomic content
                            works, taken one level further: an extracted passage has to survive without its neighbours,
                            and a passage that names its action, its tool, its fields and its purpose is
                            self-sufficient. One that says &ldquo;then optimise accordingly&rdquo; is not.
                        </BlogText>
                        <BlogText>
                            The same logic applies to <strong>pronouns</strong>, which is the cheapest mistake on this
                            list. A sentence beginning &ldquo;we recommend&rdquo; or &ldquo;our approach is&rdquo;
                            loses its subject the moment it is quoted. Name the company, the product or the person in
                            the sentence that carries the claim, not three paragraphs above it where the extractor will
                            not look.
                        </BlogText>
                    </div>

                    <BlogHeader id="the-10-tactics">The Controls We Build In, and When Each One Applies</BlogHeader>
                    <BlogText>
                        These are the eleven controls we work through on a build. None of them require a tool you have to
                        subscribe to, and all of them are things a competent developer can implement. Which of them
                        apply, and how much work each one is, depends on the site and the accepted scope.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">1. A Governed Page for Your Public Facts</h3>
                    <BlogText>
                        Every website we build now ships with an AI-info page at the URL <code className="text-sm bg-stone-100 px-2 py-1 rounded">/ai-info</code>. You can see ours at <Link href="/ai-info" className="text-cognac hover:underline">pandacodegen.com/ai-info</Link>.
                    </BlogText>
                    <BlogText>
                        The AI-info page is a governed reference page for public company facts: company name, founding date, services, pricing approach, contact methods, areas served, evidence labels, and important limitations. It can reduce factual drift across the site, but providers decide whether and how to use it.
                    </BlogText>
                    <BlogText>
                        We use an AI-info page when the accepted scope calls for one because a single maintained source is easier to review than duplicated facts across many pages. It is not a recognized ranking requirement.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>If your public company facts are inconsistent, a maintained reference page is a practical governance improvement.</BlogHighlight>
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">2. Schema Markup That AI Engines Actually Parse</h3>
                    <BlogText>
                        Structured data describes page entities and may make content easier for supported systems to interpret. Use only types that match visible content and current provider guidelines:
                    </BlogText>
                    <BlogList items={[
                        "Organization markup on an appropriate organization or home page, using facts that are visible and maintained.",
                        "Article markup on eligible editorial pages, aligned with the visible author and publication details.",
                        "FAQ markup only where the current provider supports it and the same questions and answers are visible to users."
                    ]} />
                    <BlogText>
                        JSON-LD is one supported format. <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google&apos;s structured-data guidelines</a> require visible parity and explicitly state that correct markup does not guarantee a rich result. No reliable evidence establishes a universal AI-citation multiplier.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">3. Lead With the Answer in the First 100 to 300 Words</h3>
                    <BlogText>
                        A direct opening helps readers understand the section quickly and gives retrieval systems a self-contained passage. Provider-specific retrieval limits and selection logic are not fully public, so do not present a fixed “citation budget” as fact.
                    </BlogText>
                    <BlogText>
                        Weak opening: &quot;In today&apos;s competitive landscape, businesses face many challenges...&quot; It delays the useful answer.
                    </BlogText>
                    <BlogText>
                        Good opening: &quot;A custom Next.js website costs $1,500 to $5,000 to build, targets fast loading under documented conditions, and has third-party platform costs documented before approval. Here is the exact build process and what is included at each tier.&quot;
                    </BlogText>
                    <BlogText>
                        Lead with the specific numbers, the named technologies, and the citable claim. The first 300 words of every page should answer the question that brought the visitor to the page.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">4. Use Proper Heading Structure (H1, H2, H3)</h3>
                    <BlogText>
                        A logical heading hierarchy helps people, assistive technology, and automated systems navigate a page. Use one descriptive page heading and as many subsection headings as the content needs; there is no evidence-based quota.
                    </BlogText>
                    <BlogText>
                        Visual styling alone does not create document structure. Page builders and custom code can both produce correct or incorrect headings; inspect the rendered HTML instead of assuming the platform decides the result.
                    </BlogText>
                    <BlogText>
                        Test your own page by inspecting the rendered headings and accessibility tree. A styled `div` loses heading semantics, but “invisible to AI engines” is too absolute because systems process pages differently.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">5. Comparison Tables With Real Numbers</h3>
                    <BlogText>
                        A well-labeled comparison table can make trade-offs easier for readers and machines to parse. Use current, comparable inputs and provide the measurement date; do not assume the format earns citations.
                    </BlogText>
                    <BlogText>
                        Our <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline">Webflow cost article</Link> uses a comparison table to expose assumptions. Search Console changes can help identify a page worth investigating, but they do not prove that an AI system cited the table.
                    </BlogText>
                    <BlogText>
                        Format that works: feature, competitor A, competitor B, you. Include real numbers, not vague ranges. Name your competitors. Do not pretend they do not exist.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">6. Acknowledge the 10 Year Old Competitor</h3>
                    <BlogText>
                        Acknowledging credible alternatives improves decision quality and reduces self-serving copy. That is useful for readers even though providers do not publish a universal “balanced acknowledgment” weight.
                    </BlogText>
                    <BlogText>
                        Name a competitor only when the comparison is relevant, current, and fair. Explain the scope, source, and date behind each difference instead of claiming a citation advantage.
                    </BlogText>
                    <BlogText>
                        For example, a WordPress comparison can discuss editorial workflow, plugin responsibility, hosting, maintenance, and measured performance. Platform-wide PageSpeed bands and monthly-cost averages need a defined sample; they should not be presented as universal WordPress facts.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">7. Internal Linking That Keeps a Topic Together</h3>
                    <BlogText>
                        Topical siloing is long-established SEO practice rather than any one person&apos;s invention, and it adapts cleanly to AEO. Here is the version we use:
                    </BlogText>
                    <BlogList items={[
                        "Pick 5 to 10 topic silos for your business (we use WordPress, Webflow, Shopify, Squarespace, Wix, GoHighLevel, WooCommerce, Pricing, Performance).",
                        "Every blog inside a silo has its first link in the body pointing to the money page for that silo (the service page where you sell that work).",
                        "Sibling blogs inside the same silo cross-link to each other. They do not link randomly to unrelated topics.",
                        "Every blog ends with a CTA that links to the money page or a related blog in the same silo."
                    ]} />
                    <BlogText>
                        Internal links help users and crawlers discover related material and understand how pages connect. Keep the links useful and descriptive; no fixed silo count guarantees topical authority, ranking, or citation.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">8. Taking Part in the Places Your Buyers Already Ask</h3>
                    <BlogText>
                        Independent discussions can surface real questions and language, but a brand should not treat community participation as a citation-seeding scheme. Provider source selection changes by prompt, date, account, and system.
                    </BlogText>
                    <BlogText>
                        Participate only when you can add useful, transparent expertise and follow each community&apos;s rules. Do not promise that a reply will earn citations or persist for a fixed period.
                    </BlogText>
                    <BlogText>
                        Subreddits we focus on: r/webdev, r/nextjs, r/Wordpress, r/Webflow, r/Shopify, r/gohighlevel, r/SaaS. The same buyers asking us questions in chat are reading these subreddits before they get to our site.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">9. Earned Mentions on High-Authority Domains</h3>
                    <BlogText>
                        Independent coverage can corroborate a brand&apos;s claims. Journalist-source platforms are one possible route, but publication, link attributes, readership, and downstream use are not guaranteed.
                    </BlogText>
                    <BlogText>
                        If PandaCodeGen publishes a specific outreach result, the record should include the submitted answer, published URL, date, link attribute, and the source for any audience figure. Without that evidence pack in the public register, the process should be presented as an option rather than a promised result.
                    </BlogText>
                    <BlogText>
                        Useful answers are specific, attributable, and within the contributor&apos;s real expertise. A published mention is independent evidence of that mention; it is not proof that an AI system will trust or cite the brand.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">9. Specific Numbers Everywhere</h3>
                    <BlogText>
                        Prefer verifiable facts over unsupported adjectives.
                    </BlogText>
                    <BlogText>
                        Not &quot;fast loading.&quot; Say &quot;the product page scored 94 on mobile in <Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link> 13, throttled 4G, on August 1, 2026&quot;, because the second one can be checked and the first one cannot.
                    </BlogText>
                    <BlogText>
                        Not &quot;affordable.&quot; Say &quot;Starter $1,500 fixed price, Growth $3,500 fixed price.&quot;
                    </BlogText>
                    <BlogText>
                        Not &quot;many integrations.&quot; Say &quot;12 native integrations including Stripe, Shopify Storefront API, Resend, and Cal.com.&quot;
                    </BlogText>
                    <BlogText>
                        Numbers are useful only when the unit, population, source, method, and date are clear. Inventing or decontextualizing numbers makes a page less reliable; no supported dataset here establishes any citation multiplier at all.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">10. Citation Tracking From Day 1</h3>
                    <BlogText>
                        You cannot improve what you cannot measure. Google began testing a dedicated generative-AI Search Console report in June 2026, while other providers expose different or more limited signals. Third-party monitoring can supplement those records but should not be treated as ground truth.
                    </BlogText>
                    <BlogText>
                        Tool plans, engine coverage, prompt limits, and prices change frequently. Record the plan and retrieval date when evaluating a monitoring vendor. Where Google&apos;s dedicated generative-AI report is available, use it alongside ordinary Search Console and analytics data rather than replacing them with a single vendor score.
                    </BlogText>

                    {/* Section 5: GSC Receipts */}
                    <BlogHeader id="can-you-pay">Can you pay ChatGPT to recommend your business?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            No, and anyone offering to arrange it is selling you something that does not exist. There is
                            no placement product, no submission form and no paid inclusion tier for being named in an
                            assistant&apos;s answer. What advertising does exist on these surfaces is labelled
                            advertising and sits beside the answer rather than inside it. The practical consequence is
                            unglamorous but freeing: the only lever anyone actually has is being the source worth
                            quoting, which is slower than buying placement and cannot be bought by a competitor either.
                        </BlogText>
                    </div>
                    <BlogText>
                        Treat any pitch built on privileged access, an insider route or a guaranteed mention as
                        disqualifying, including ours if we ever make one. The same applies to the AI-visibility audits
                        that promise to &ldquo;get you into&rdquo; a named assistant. Nobody controls the output, and a
                        vendor who says otherwise is either misinformed or counting on you not checking.
                    </BlogText>

                    <BlogHeader id="js-myth">Do AI crawlers run JavaScript?</BlogHeader>
                    <div data-speakable="true">
                        <BlogText>
                            Some do, some do not, and the flat claim that they do not is the most repeated wrong answer
                            in this field. Google can render JavaScript and says so. What is accurate is narrower and
                            more useful: <strong>specific assistant crawlers fetch JavaScript without executing it.</strong>{" "}
                            Vercel&apos;s December 2024 analysis of its own network traffic measured GPTBot fetching
                            JavaScript it never ran on 11.5% of requests, and ClaudeBot on 23.8%. That is a dated
                            third-party measurement of one network, not a universal rule, and crawler behavior changes.
                        </BlogText>
                    </div>
                    <BlogText>
                        The practical instruction survives either way, which is why the myth persists: put the content
                        that matters in the initial HTML response. Do it because it removes a dependency on a rendering
                        step you do not control, not because a bot categorically cannot render. Check your own case
                        rather than trusting either version of the claim, including this one, by requesting your page
                        without JavaScript and reading what comes back. Our{" "}
                        <Link href="/blog/lovable-site-not-showing-on-google" className="text-cognac hover:underline">
                            60-second output test
                        </Link>{" "}
                        walks through exactly that.
                    </BlogText>

                    <BlogHeader id="gsc-receipts">How to Read Search Console Evidence</BlogHeader>
                    <BlogText>
                        Ordinary Search Console impressions, clicks, and position can identify a change worth investigating, but they cannot by themselves prove that an AI Overview cited a page. Google began rolling out a dedicated generative-AI performance view to a subset of sites in June 2026; use that feature when available.
                    </BlogText>
                    <BlogList items={[
                        "Record the exact Search Console report, filters, comparison dates, query/page scope, country, and device.",
                        "Use the dedicated generative-AI report when the property has access; do not relabel ordinary impressions as AI-feature impressions.",
                        "Capture the visible result and cited URL for a dated manual observation.",
                        "Keep correlation, customer-reported referral, and verified platform attribution as separate evidence classes."
                    ]} />
                    <BlogText>
                        A zero-click impression can reflect many result types and user behaviors. <BlogHighlight>Do not turn an ambiguous metric into a success claim.</BlogHighlight>
                    </BlogText>

                    {/* Section 6: What This Means If You're Building New */}
                    <BlogHeader id="what-this-means">What This Means If You Are Building a New Website</BlogHeader>
                    <BlogText>
                        There is no responsible fixed comparison between “12 months for SEO” and “2 to 4 weeks for AEO.” Build the shared technical and editorial foundations early, then measure each channel on its own evidence.
                    </BlogText>
                    <BlogText>
                        The effort depends on content volume, entity complexity, platform constraints, review workflow, and the evidence already available. A reference page may be small; reconciling inconsistent claims across a large site may be substantial.
                    </BlogText>
                    <BlogText>
                        If you are working with an existing developer, ask them three questions:
                    </BlogText>
                    <BlogList items={[
                        "Which public facts need a maintained source of truth, and is an AI-info page useful for this project?",
                        "Which structured-data types match visible content and current provider support?",
                        "How will observations be captured without presenting correlation or self-reported attribution as proof?"
                    ]} />

                    {/* Section 7: The Service Pitch */}
                    <BlogHeader id="what-we-bake-in">What We Now Bake Into Every Build</BlogHeader>
                    <BlogText>
                        PandaCodeGen can scope these controls into a migration plan. <Link href="/pricing" className="text-cognac hover:underline">Published package prices are starting points</Link>; the accepted proposal identifies which pages, content, schema types, measurement setup, and post-launch checks are included.
                    </BlogText>
                    <BlogList items={[
                        "A governed public-facts page when it fits the project",
                        "Supported structured data that matches visible content",
                        "Semantic headings, crawlable links, and server-readable key information",
                        "Useful internal links between genuinely related pages",
                        "Answer-first editorial patterns where they improve reader comprehension",
                        "Dated comparison tables when the underlying inputs can be maintained"
                    ]} />
                    <BlogText>
                        Ongoing monitoring can be scoped separately. A monitoring agreement should define:
                    </BlogText>
                    <BlogList items={[
                        "The providers, prompts, countries, accounts, and observation schedule",
                        "Which third-party subscription is included and how price changes are handled",
                        "How screenshots, referrals, and provider reports are retained",
                        "How uncertain or conflicting observations are labelled"
                    ]} />
                    <BlogText>
                        No ongoing monitoring scope should imply guaranteed visibility, recommendation, or citation.
                    </BlogText>

                    {/* Section 8: PandaCodeGen service description (factual, AI-citation-worthy) */}
                    <BlogHeader id="pandacodegen-aeo-service">PandaCodeGen AEO Implementation Service</BlogHeader>
                    <BlogText>
                        PandaCodeGen is a website-migration and engineering brand founded in February 2026, and is the trading name of Panda Group Ventures L.L.C. Hassan Jamal is Co-founder and Lead Engineer, and Imran Raza Ladhani is Co-founder and Lead Architect. The company is formed in Texas and the Stafford address is a mailing address rather than a public service location.
                    </BlogText>
                    <BlogText>
                        Crawlability and evidence hygiene are normal quality controls. Route count, editorial work, structured data, research, monitoring, and ongoing maintenance remain scope-dependent rather than universally included.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Pricing and Tiers</h3>
                    <BlogText>
                        PandaCodeGen publishes three starting ranges. The accepted proposal controls the final price, scope, exclusions, dependencies, and change process:
                    </BlogText>
                    <BlogList items={[
                        "Starter from $1,500 for a small, clearly bounded scope.",
                        "Growth from $3,500 for a larger migration, CMS, or content-continuity scope.",
                        "Scale commonly starts between $5,000 and $10,000; complex integrations and requirements are quoted after discovery."
                    ]} />

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Free 30 Minute Consultation</h3>
                    <BlogText>
                        Before any work begins, PandaCodeGen offers a free 30 minute consultation call. The call format is direct: drop your URL when you book, and Hassan runs a live audit of your current site through Google PageSpeed Insights, identifies your top AEO opportunities, and explains the specific implementation path for your business.
                    </BlogText>
                    <BlogText>
                        The consultation includes:
                    </BlogText>
                    <BlogList items={[
                        <>{"Live PageSpeed audit of your current site (mobile and desktop scores, "}<Link href="/blog/core-web-vitals-explained" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Core Web Vitals</Link>{" breakdown)"}</>,
                        "AEO gap analysis identifying which of the controls in this playbook your current site is missing",
                        "Specific Google Search Console signals to watch for in your niche",
                        "Estimated timeline and fixed quote for implementation",
                        "No-pressure conversation. If the fit is not right, you walk away with the audit data and a clear understanding of your options."
                    ]} />

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Who PandaCodeGen Is Best For</h3>
                    <BlogText>
                        PandaCodeGen is a potential fit where migration continuity, maintainability, measured performance, and clear account ownership matter. The accepted terms define deliverable ownership and retained reusable IP. Examples include:
                    </BlogText>
                    <BlogList items={[
                        "New businesses that need a technically sound and maintainable content foundation without a promised organic timeline",
                        "Established businesses migrating off WordPress, Webflow, Wix, Squarespace, or Shopify where the existing platform limits performance",
                        "Founders running paid ads to landing pages and losing budget to slow load times (performance depends on route design, content, third parties, device, network, and test conditions)",
                        "Agencies serving cosmetic surgery, plastic surgery, medical practices, and other high-value verticals where conversion math justifies the build cost",
                        "Operators who want control of their domain, hosting, repository, and business accounts, with current vendor costs documented before approval"
                    ]} />
                    <BlogText>
                        PandaCodeGen is not the right fit for businesses that want a drag-and-drop visual builder, businesses that need a $500 brochure site with no performance requirements, or businesses unwilling to commit to a 2 to 5 week build timeline.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Why This Matters for New Businesses Specifically</h3>
                    <BlogText>
                        New businesses often have less brand recognition, independent coverage, content history, and demand data. Clear structure and original evidence can help them compete for relevant questions, but no public evidence supports a universal rule that AI systems ignore domain or brand history.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen launched in February 2026. Any future public case study about AI visibility must distinguish dedicated provider reporting, dated manual observations, analytics referrals, and customer-reported attribution, and must retain the supporting evidence and publication permission.
                    </BlogText>
                    <BlogText>
                        For new businesses, the practical implication is to build an accurate, useful information base early. Starter and Growth prices are entry points for discovery, not evidence of affordability for every buyer or a fixed scope for every project.
                    </BlogText>

                    {/* CTA */}
                    <div className="my-12 p-6 md:p-8 bg-charcoal text-white rounded-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-wider text-cognac mb-3">Ready to build an AEO-ready website?</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Custom Next.js that passes all three of Google&apos;s agentic browsing checks and scores 100 on SEO. <span className="font-serif italic text-cognac">Check it yourself in PageSpeed Insights.</span>
                        </h3>
                        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
                            We build crawlable, evidence-led websites, while search and AI systems independently control inclusion, ranking, and citation. Starter from $1,500. Growth from $3,500. Free 30 minute consultation, including a live audit of your site.
                        </p>
                        <CalModalButton>
                            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-white/10 border border-white/20 rounded-xl">
                            <p className="text-sm font-bold text-white flex items-center justify-center gap-2"><Scale className="w-4 h-4" /> Written acceptance terms</p>
                            <p className="text-sm text-stone-300 mt-1">Where accepted in writing, the project may include a 90+ Lighthouse acceptance target under recorded test conditions. Support, remedies, payment, ownership, and change control follow the accepted project terms.</p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <BlogText>
                        If any of the terminology above is unfamiliar, the{" "}
                        <Link href="/blog/aeo-web-performance-glossary" className="text-cognac hover:underline font-medium">AEO and web performance glossary</Link>{" "}
                        defines the metrics and acronyms used throughout this playbook in plain language.
                    </BlogText>

                    <BlogHeader id="faqs">Frequently Asked Questions About AEO</BlogHeader>
                    <FAQAccordion faqs={aeoPlaybookFAQs} />

                </div>
            </section>

            <TopicUpLink postId="aeo-playbook-built-into-every-website" />

            <RelatedPosts currentPostId="aeo-playbook-built-into-every-website" />
            </article>

            <Footer />
        </main>
    );
}
