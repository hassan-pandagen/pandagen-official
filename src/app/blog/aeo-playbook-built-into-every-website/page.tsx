import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Scale, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const aeoPlaybookFAQs = blogPosts.find(p => p.id === "aeo-playbook-built-into-every-website")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = lazyLoad(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const dynamic = "force-static";

export const metadata: Metadata = {
    title: { absolute: "AEO Playbook: Get Cited by ChatGPT, Claude & Perplexity in 30 Days" },
    description: "The exact AEO playbook we bake into every new website build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview, with real GSC receipts.",
    alternates: {
        canonical: "/blog/aeo-playbook-built-into-every-website",
    },
    keywords: [
        "aeo playbook",
        "answer engine optimization",
        "ai citations new website",
        "get cited by chatgpt",
        "get cited by claude",
        "get cited by perplexity",
        "ai-info page",
        "schema markup for ai",
        "new domain seo alternative",
        "aeo service",
        "ai search optimization 2026"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "AEO Playbook: Get Cited by ChatGPT, Claude & Perplexity in 30 Days",
        description: "The exact playbook we bake into every new website build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview. 10 tactics with real GSC receipts.",
        type: "article",
        publishedTime: "2026-05-18T00:00:00-05:00",
        modifiedTime: "2026-06-06T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "AEO Playbook: Get Cited by ChatGPT, Claude & Perplexity in 30 Days",
        description: "The exact playbook we bake into every new website build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#article",
            "headline": "AEO Playbook: Get Cited by ChatGPT, Claude & Perplexity in 30 Days",
            "description": "The exact AEO playbook we bake into every new website build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview, with the 10 tactics and real GSC receipts.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-18T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "alternateName": "Panda Code Gen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
                "foundingDate": "2026",
                "email": "info@pandacodegen.com"
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website" },
            "articleSection": "AEO",
            "keywords": ["aeo playbook", "answer engine optimization", "ai citations new website", "ai-info page", "schema markup", "aeo service"],
            "wordCount": 4200,
            "timeRequired": "PT18M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Answer Engine Optimization" },
                { "@type": "Thing", "name": "AI Citations" },
                { "@type": "Thing", "name": "New Domain SEO" },
                { "@type": "Thing", "name": "ChatGPT Citations" },
                { "@type": "Thing", "name": "Claude AI Recommendations" },
                { "@type": "Thing", "name": "Google AI Overview" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Search Central: Get Your Site on Google", "url": "https://developers.google.com/search/docs/fundamentals/get-on-google" },
                { "@type": "CreativeWork", "name": "Schema.org Organization", "url": "https://schema.org/Organization" },
                { "@type": "CreativeWork", "name": "HubSpot AEO Guide", "url": "https://www.hubspot.com/products/marketing/aeo-guide" },
                { "@type": "CreativeWork", "name": "Frase.io GEO Playbook", "url": "https://www.frase.io/blog/how-to-get-cited-by-ai-search-engines-the-complete-geo-playbook" },
                { "@type": "CreativeWork", "name": "Jarred Smith: AEO Practitioners Playbook 2026", "url": "https://www.jarredsmith.com/blog/aeo-practitioners-playbook-2026" },
                { "@type": "CreativeWork", "name": "Steve Toth SEO Notebook (silo method)", "url": "https://www.seonotebook.com/" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Webflow Status Page", "url": "https://status.webflow.com" },
                { "@type": "CreativeWork", "name": "HubSpot AEO Grader (free tool)", "url": "https://www.hubspot.com/aeo-grader" },
                { "@type": "CreativeWork", "name": "AirOps brand monitoring", "url": "https://www.airops.com" },
                { "@type": "CreativeWork", "name": "Promptmonitor AI search tracking", "url": "https://promptmonitor.io" },
                { "@type": "CreativeWork", "name": "Otterly AI brand visibility", "url": "https://otterly.ai" }
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
                { "@type": "ListItem", "position": 3, "name": "AEO Playbook: 30 Days", "item": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website#webpage",
            "url": "https://www.pandacodegen.com/blog/aeo-playbook-built-into-every-website",
            "name": "AEO Playbook: Get Cited by ChatGPT, Claude & Perplexity in 30 Days",
            "description": "The exact playbook we bake into every new website build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-18T00:00:00-05:00",
            "dateModified": "2026-06-06T00:00:00-05:00",
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

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "AEO Playbook" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/10 text-cognac rounded-full text-xs font-semibold mb-4">
                            <Zap className="w-3 h-3" /> AEO
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            AEO Playbook: Get Cited by{" "}
                            <span className="font-serif italic text-cognac">ChatGPT, Claude & Perplexity</span> in 30 Days
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            The exact playbook we now bake into every Starter and Growth build. Cited across ChatGPT, Claude, Perplexity, and Google AI Overview, with the GSC receipts that prove it works on a brand new domain.
                        </p>
                        <BlogAuthor
                            name="Hassan Jamal"
                            date="May 18, 2026"
                            readTime="18 min read"
                            bio="Hassan is co-founder and lead engineer at PandaCodeGen. He writes the code, ran the AEO experiment that got the company cited by Claude AI, and answers the discovery calls. The cosmetic surgeon who closed via Claude was call number 3."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <PageSpeedAnimation />
                </div>
            </section>

            <section className="px-6 pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-100">

                    {/* Executive Summary */}
                    <div className="mb-8 md:mb-12 p-6 md:p-8 bg-stone-50 border-l-4 border-cognac rounded-r-xl" data-speakable="true">
                        <p className="text-xs font-bold uppercase tracking-wider text-cognac mb-3">The Short Answer</p>
                        <BlogList items={[
                            "Your competitors are pulling ahead on Google AND on AI search. 86 percent of enterprise SEO teams have already integrated AI into their strategy.",
                            "The 10-year-old competitors in your niche are mostly not moving on AEO yet. They have business inertia. By the time their internal teams approve AEO budget, it will be 2027 or 2028.",
                            "AI engines do not check who has been in business longer. They check who has structured content to answer the question being asked. A new business with proper schema and an AI-info page can outrank a 10-year-old competitor for AI citations.",
                            "We proved it on pandacodegen.com. Two blog posts flagged by Google Search Console for breakout AI Overview citations (+2,470 percent and +547 percent) within weeks of strengthening them. First paying client closed via Claude AI recommendation, 3 months after launch, zero ad spend.",
                            "PandaCodeGen builds custom Next.js websites starting at $1,500 (Starter) and $3,500 (Growth). Every build includes the 10 AEO tactics in this playbook, including a dedicated AI-info page.",
                            "Free 30-minute consultation calls are available to walk through your specific AEO opportunity before any work begins."
                        ]} />
                    </div>

                    {/* Section 1: The Loss + Opportunity */}
                    <BlogHeader id="are-you-losing">Are You Losing to Competitors on Google AND on AI Search?</BlogHeader>
                    <BlogText>
                        Twelve months of chasing Google rankings. Your domain is still on page 3 for the queries that matter. Meanwhile, your established competitors who already rank on Google are now also getting cited by ChatGPT, Claude, and Perplexity. The lane you have not even entered.
                    </BlogText>
                    <BlogText>
                        That is the position most new business owners are in right now in 2026, whether they know it or not.
                    </BlogText>
                    <BlogText>
                        The numbers tell the story. 88 percent of marketers say they have started thinking about AI search optimization. The deeper data shows what is actually happening:
                    </BlogText>
                    <BlogList items={[
                        "Only 38 percent of business decision-makers have actually allocated budget to AI search optimization.",
                        "Only 37 percent of marketing teams measure AEO as a dedicated KPI, up from 9 percent in early 2025.",
                        "86 percent of enterprise SEO professionals have already integrated AI into their strategy, with 82 percent planning to invest more.",
                        "42 percent of B2B content marketers are reallocating budget from traditional SEO to AEO-optimized content."
                    ]} />
                    <BlogText>
                        Read those numbers carefully. The <a href="https://www.salesforce.com/news/stories/state-of-marketing-2026/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">enterprises with budget</a> are moving fast. 86 percent of enterprise SEO teams are already integrating AI. They have the budget, the staff, and the executive buy-in to ship AI-optimized sites in 2026.
                    </BlogText>
                    <BlogText>
                        You do not.
                    </BlogText>
                    <BlogText>
                        If you are a new business or a small operator with 1 or 2 people, you do not have a 50-person SEO team to compete with the enterprise rollout. You cannot outspend them. You cannot out-staff them. The traditional Google SEO game requires money and time you do not have.
                    </BlogText>
                    <BlogText>
                        Here is the part nobody is telling you.
                    </BlogText>
                    <BlogText>
                        The 10-year-old established competitors in your specific niche, the ones currently outranking you on Google, are mostly NOT moving on AEO yet. They have business inertia. They are not rebuilding their websites or restructuring their content for AI citations because their existing Google traffic feels safe. By the time their slow internal teams approve the AEO budget, it will be 2027 or 2028.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>This is your window.</BlogHighlight>
                    </BlogText>
                    <BlogText>
                        When an AI engine looks for a source to cite, it does not check who has been in business longer. It does not check domain age. It checks who has structured their content to answer the question being asked. A new business that ships an AI-info page, proper schema, and answer-first content will get cited over a 10-year-old competitor who has none of those.
                    </BlogText>
                    <BlogText>
                        That is happening right now, in 2026, on tens of thousands of queries every day. We are watching it happen in our own Google Search Console data: two of our blog posts flagged for breakout AI Overview citations within weeks of strengthening them, even though competitors in those niches have 10x more backlinks and 5x older domains.
                    </BlogText>
                    <BlogText>
                        The enterprises will catch up. The 10-year-old competitors will eventually catch up. But you have a window of 12 to 24 months before they do, and the AEO-optimized site you ship now will have citation history compounding the entire time.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>The losers in 2026 are not the people doing the wrong thing. They are the people doing the right thing slowly.</BlogHighlight> New businesses that move on AEO this quarter will be the ones AI engines cite for years.
                    </BlogText>

                    {/* Section 2: AEO Is What Wins */}
                    <BlogHeader id="aeo-wins-for-new-domains">AEO Is What Wins for New Domains</BlogHeader>
                    <BlogText>
                        AEO stands for Answer Engine Optimization. It is the practice of structuring your website so that AI engines like ChatGPT, Claude, Perplexity, and Google AI Overview cite your content as the source when answering user questions.
                    </BlogText>
                    <BlogText>
                        The key difference from SEO is what each system rewards. <a href="https://www.hubspot.com/products/marketing/aeo-guide" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">HubSpot&apos;s AEO guide</a> and <a href="https://www.jarredsmith.com/blog/aeo-practitioners-playbook-2026" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Jarred Smith&apos;s analysis of 30 million AI citations</a> both confirm what we saw firsthand: AI engines do not care about domain age. They care about content quality and structure.
                    </BlogText>
                    <BlogText>
                        Here is what each system actually rewards.
                    </BlogText>

                    <div className="my-6 -mx-6 md:mx-0 overflow-x-auto">
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
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Domain age</td><td className="p-3 text-stone-600 border border-stone-300">Yes, heavily</td><td className="p-3 text-charcoal border border-stone-300">No</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Backlinks</td><td className="p-3 text-stone-600 border border-stone-300">Yes, heavily</td><td className="p-3 text-charcoal border border-stone-300">Light, mostly Reddit and Hacker News</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Content structure</td><td className="p-3 text-stone-600 border border-stone-300">Moderate</td><td className="p-3 text-charcoal border border-stone-300">Yes, heavily</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Schema markup</td><td className="p-3 text-stone-600 border border-stone-300">Light</td><td className="p-3 text-charcoal border border-stone-300">Yes, heavily</td></tr>
                                <tr><td className="p-3 font-bold text-charcoal border border-stone-300">Specific numbers and named sources</td><td className="p-3 text-stone-600 border border-stone-300">Light</td><td className="p-3 text-charcoal border border-stone-300">Yes, heavily</td></tr>
                                <tr className="bg-stone-50"><td className="p-3 font-bold text-charcoal border border-stone-300">Time to first result</td><td className="p-3 text-stone-600 border border-stone-300">6 to 12 months</td><td className="p-3 text-charcoal border border-stone-300">2 to 4 weeks</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        The short version. <BlogHighlight>SEO rewards trust signals that take years to build. AEO rewards content that directly answers the question being asked.</BlogHighlight> For a new business, that is a much shorter path to organic traffic.
                    </BlogText>
                    <BlogText>
                        And the quality of that traffic? Ahrefs published data showing that only 0.5 percent of their traffic comes from AI engines, but it accounts for 12 percent of their signups and those signups convert at <BlogHighlight>22 times higher than Google traffic</BlogHighlight>. AI-referred visitors arrive pre-qualified. They already told the AI engine their budget, their team size, their requirements. By the time they land on your site, they are not browsing. They are buying.
                    </BlogText>

                    {/* Section 3: The Receipt */}
                    <BlogHeader id="the-receipt">The Receipt</BlogHeader>
                    <BlogText>
                        We launched pandacodegen.com in February 2026. Custom Next.js, fixed pricing starting at $1,500. We do website rebuilds and migrations for businesses tired of slow WordPress, Shopify, Webflow, and GoHighLevel sites.
                    </BlogText>
                    <BlogText>
                        For the first 3 months we shipped blog content steadily but without focused AEO work. The domain just existed. Some traffic, no citations, no inbound leads.
                    </BlogText>
                    <BlogText>
                        Then we signed up for an <a href="https://www.airops.com" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">AirOps Pro trial</a> in late April 2026. That trial gave us citation tracking across ChatGPT, Claude, Perplexity, Gemini, and Google AI Overview. We ran a focused AEO push during the trial window: strengthened our top blogs with the 10 tactics in this playbook, set up tracking, and watched what AI engines started doing.
                    </BlogText>
                    <BlogText>
                        Here is what happened during that focused AEO window in early May 2026:
                    </BlogText>
                    <BlogList items={[
                        "ChatGPT and Perplexity referrer traffic showed up in our chat tool for the first time, on niche technical blog posts. Visitors from Poland and Morocco landing on our GoHighLevel and Google update blogs.",
                        "Google Search Console flagged our wordpress-migration-cost blog with +2,470% impression growth week over week. Zero clicks at 771 impressions is the signature of Google AI Overview citing the content inline in search results.",
                        "Second GSC breakout flag on webflow-true-cost blog with +547% impression growth, same pattern (high impressions, near zero clicks, position dropping).",
                        "First paying client closed via Claude AI recommending us by name. US-based cosmetic surgeon migrating off WordPress. Asked Claude what stack to move to, Claude said Next.js plus Sanity and pointed him at PandaCodeGen. Three discovery calls with us before he revealed the source. On call 3 he said the line: \"Claude recommended you guys.\""
                    ]} />
                    <BlogText>
                        Domain was 3 months old. Zero ad spend. Zero outreach. <BlogHighlight>Three different AI engines actively citing the same domain in the same window.</BlogHighlight> That is not a fluke. That is what focused AEO work produces.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>What this means for new clients:</BlogHighlight> Our public commitment for client builds is 30 days from launch to first AI citations. We give the buffer because client projects have variables we do not control on our own domain: content approval cycles, image sourcing, copy review rounds, and the time needed to build enough content surface area for AI engines to crawl meaningfully. Our own experiment ran faster because we control every variable on our own domain. For client work, we plan honestly.
                    </BlogText>

                    {/* Section 4: The 10 Tactics */}
                    <BlogHeader id="the-10-tactics">The 10 Tactics We Bake Into Every Website</BlogHeader>
                    <BlogText>
                        These are the 10 specific things we now do on every Starter and Growth build. None of them require external tools your clients have to pay for. None of them add to the build cost. Every one of them is something a competent web developer can implement, but almost none of them are standard at agencies in 2026.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">1. The AI-Info Page (Our Unique Selling Point)</h3>
                    <BlogText>
                        Every website we build now ships with an AI-info page at the URL <code className="text-sm bg-stone-100 px-2 py-1 rounded">/ai-info</code>. You can see ours at <Link href="/ai-info" className="text-cognac hover:underline">pandacodegen.com/ai-info</Link>.
                    </BlogText>
                    <BlogText>
                        The AI-info page is a single page that gives AI engines everything they need to confidently cite your business. Company name. Founding date. Services offered. Pricing tiers. Contact methods. Frequently asked questions written in plain language. Areas served. The kind of structured information an AI engine needs to give a complete answer when a user asks about your business.
                    </BlogText>
                    <BlogText>
                        We started shipping AI-info pages after we noticed AI engines citing our own AI-info page in answers to founder questions. No other web agency we audited in early 2026 was shipping this. We made it standard on every build.
                    </BlogText>
                    <BlogText>
                        <BlogHighlight>If you are a new business and you ship one new page this month, ship an AI-info page.</BlogHighlight> It costs nothing to add. It compounds for years.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">2. Schema Markup That AI Engines Actually Parse</h3>
                    <BlogText>
                        Schema markup is code that helps AI engines and search engines understand what your page is about. Most website builders ship with weak or missing schema. We ship three schema types on every page that matter:
                    </BlogText>
                    <BlogList items={[
                        "Organization schema with your business name, logo, founding date, and contact email. Add this to every page header.",
                        "Article schema on every blog post with the author, publish date, word count, and citations to other sources you referenced.",
                        "FAQPage schema on any page that has a frequently asked questions section. Every Q and A becomes a citable claim AI engines can extract directly."
                    ]} />
                    <BlogText>
                        The exact format is called JSON-LD and lives in the head of each page. <a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Schema.org documents every type</a>. Most agencies skip this because they think it is technical. It is 30 lines of code per page that doubles your AI citation rate.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">3. Lead With the Answer in the First 100 to 300 Words</h3>
                    <BlogText>
                        AI engines have what we call a citation budget. They do not read your entire blog post. They scan the first few paragraphs looking for a clear, citable answer to the question being asked.
                    </BlogText>
                    <BlogText>
                        Bad opening: &quot;In today&apos;s competitive landscape, businesses face many challenges...&quot; That gets skipped.
                    </BlogText>
                    <BlogText>
                        Good opening: &quot;A custom Next.js website costs $1,500 to $5,000 to build, loads in under 1 second, and has zero monthly platform fees. Here is the exact build process and what is included at each tier.&quot;
                    </BlogText>
                    <BlogText>
                        Lead with the specific numbers, the named technologies, and the citable claim. The first 300 words of every page should answer the question that brought the visitor to the page.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">4. Use Proper Heading Structure (H1, H2, H3)</h3>
                    <BlogText>
                        AI engines read your page by following the heading hierarchy. One H1 per page. Six to 12 H2s for major sections. Two to four H3s under each H2 for subsections.
                    </BlogText>
                    <BlogText>
                        This sounds basic. Most websites get it wrong. Page builders like Elementor and Divi let you style any text to look like a heading without using the correct HTML tag. The heading looks right but the AI engine sees nothing.
                    </BlogText>
                    <BlogText>
                        Test your own page right now. Right click any heading and inspect it. If the tag is a div with styling instead of an actual h2 or h3, that section is invisible to AI engines.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">5. Comparison Tables With Real Numbers</h3>
                    <BlogText>
                        AI engines love comparison tables because they are easy to extract and quote. A table comparing your service to 2 or 3 competitors with real numbers will get cited disproportionately more than the same content written as paragraphs.
                    </BlogText>
                    <BlogText>
                        We saw this directly with our <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline">webflow-true-cost</Link> post. Google Search Console flagged it with 547 percent impression growth in a single week. The post is built around a comparison table showing real Webflow pricing tiers, real costs, and real alternatives. AI engines started citing the table verbatim in answers to Webflow cost questions.
                    </BlogText>
                    <BlogText>
                        Format that works: feature, competitor A, competitor B, you. Include real numbers, not vague ranges. Name your competitors. Do not pretend they do not exist.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">6. Acknowledge the 10 Year Old Competitor</h3>
                    <BlogText>
                        If you are new and you pretend the established competitor does not exist, AI engines do not trust you. The trustworthiness signal AI engines look for is balanced acknowledgment of the landscape.
                    </BlogText>
                    <BlogText>
                        Name the competitor. Give them credit for what they do well. Then explain where you do something differently. This is more persuasive than puff pieces AND it ranks better in AI citations.
                    </BlogText>
                    <BlogText>
                        Example from our own content. We acknowledge that WordPress powers 43 percent of the web and has the largest plugin ecosystem of any platform. Then we explain that WordPress sites typically score 30 to 60 on Google PageSpeed Mobile and require $200 to $500 per month in plugin and maintenance fees. Both statements are true. Together they give the reader real information and AI engines a balanced source to cite.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">7. Internal Linking Using the Steve Toth Silo Method</h3>
                    <BlogText>
                        Steve Toth (<a href="https://www.seonotebook.com/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">SEO Notebook</a>) popularized a specific internal linking pattern that we now adapt for AEO. We call it the silo method. Here is how it works:
                    </BlogText>
                    <BlogList items={[
                        "Pick 5 to 10 topic silos for your business (we use WordPress, Webflow, Shopify, Squarespace, Wix, GoHighLevel, WooCommerce, Pricing, Performance).",
                        "Every blog inside a silo has its first link in the body pointing to the money page for that silo (the service page where you sell that work).",
                        "Sibling blogs inside the same silo cross-link to each other. They do not link randomly to unrelated topics.",
                        "Every blog ends with a CTA that links to the money page or a related blog in the same silo."
                    ]} />
                    <BlogText>
                        This is a standard SEO method. We layered it on top of every AI-info page so AI engines can map our topical authority. The result is that when an AI engine looks at our WordPress migration content, it sees 8 to 10 interconnected pages all reinforcing the same expertise area, with clear paths to the money page. That is a strong trust signal both for SEO and for AEO.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">8. Reddit Replies as Citation Seeds</h3>
                    <BlogText>
                        Our citation tracking data showed that 45 percent of all AI citations we earned came from Reddit, not from our own website directly. AI engines crawl Reddit threads heavily because the answers there are tested by upvotes and downvotes.
                    </BlogText>
                    <BlogText>
                        The rule we follow: reply to relevant questions in the subreddits where your buyers ask questions. Stay under 150 words. Never drop your URL. Be specific and technical. One useful Reddit reply earns months of AI citations.
                    </BlogText>
                    <BlogText>
                        Subreddits we focus on: r/webdev, r/nextjs, r/Wordpress, r/Webflow, r/Shopify, r/gohighlevel, r/SaaS. The same buyers asking us questions in chat are reading these subreddits before they get to our site.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">8b. Earned Mentions on High-Authority Domains</h3>
                    <BlogText>
                        AI engines weigh how many independent, trusted sources mention your brand, not just what your own site says. The fastest free way we found to earn one as a brand-new domain: journalist-source platforms like Connectively (formerly HARO), where reporters post questions and quote the best expert answers in real publications.
                    </BlogText>
                    <BlogText>
                        Our real numbers, so this is not theory: roughly one day a month, three answers per month, over three months. Nine answers submitted, one published. That one landed a dofollow link from Woman&apos;s World, a publication with around 1.6 million readers, pointing at our homepage. A four-month-old domain does not buy a link like that; it earns it by showing up consistently with specific, useful answers.
                    </BlogText>
                    <BlogText>
                        What made the published answer work was the same thing that makes a page citable: a specific, opinionated take with a real number, on a topic we actually know, submitted fast. Most journalist-platform links are nofollow and still worth it as a trusted brand mention. A dofollow from a high-authority domain is the rare bonus. Either way, it is an independent vouch AI engines can verify, which is exactly what a new brand needs to move from cited to trusted.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">9. Specific Numbers Everywhere</h3>
                    <BlogText>
                        Adjectives do not get cited. Numbers do.
                    </BlogText>
                    <BlogText>
                        Not &quot;fast loading.&quot; Say &quot;under 1 second First Contentful Paint, 95 plus PageSpeed Mobile.&quot;
                    </BlogText>
                    <BlogText>
                        Not &quot;affordable.&quot; Say &quot;Starter $1,500 fixed price, Growth $3,500 fixed price.&quot;
                    </BlogText>
                    <BlogText>
                        Not &quot;many integrations.&quot; Say &quot;12 native integrations including Stripe, Shopify Storefront API, Resend, and Cal.com.&quot;
                    </BlogText>
                    <BlogText>
                        AI engines cite numbers because they are verifiable. A blog with 15 specific numbers gets cited 5 to 10 times more often than a blog with the same content but generic descriptors. We learned this directly from our own citation tracking data.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">10. Citation Tracking From Day 1</h3>
                    <BlogText>
                        You cannot improve what you cannot measure. AI engines do not give you a Google Search Console equivalent yet. There are paid tools that fill the gap.
                    </BlogText>
                    <BlogText>
                        The free options worth running:
                    </BlogText>
                    <BlogList items={[
                        "HubSpot AEO Grader (free, single check) at hubspot.com/aeo-grader",
                        "Otterly free tier at otterly.ai for basic brand visibility tracking",
                        "Promptmonitor free tier at promptmonitor.io for 8 engine coverage"
                    ]} />
                    <BlogText>
                        The paid tools worth considering:
                    </BlogText>
                    <BlogList items={[
                        "HubSpot AEO at $50 per month covering ChatGPT, Perplexity, and Gemini",
                        "Promptmonitor Pro at $29 per month covering 8 engines including Claude",
                        "Otterly Standard at $160 per month for full brand visibility index"
                    ]} />
                    <BlogText>
                        We started on AirOps Pro free trial in late April 2026. After 14 days we moved to free tools while we evaluate longer term options. The point is not which tool. The point is that you have to track citations from day 1 to know what content is actually winning.
                    </BlogText>

                    {/* Section 5: GSC Receipts */}
                    <BlogHeader id="gsc-receipts">The Real Receipts From Google Search Console</BlogHeader>
                    <BlogText>
                        Two weeks after we strengthened our migration cost content, Google Search Console flagged two of our pages with breakout impression growth. The patterns matched exactly: high impressions, zero clicks, position dropping while impressions climbed. That is the signature of Google AI Overview citing the page inline in search results.
                    </BlogText>
                    <BlogList items={[
                        "wordpress-migration-cost: 2,470 percent impression growth, May 5 to May 11, 771 impressions, 0 clicks.",
                        "webflow-true-cost: 547 percent impression growth, May 7 to May 13, 1,230 impressions, 0 clicks.",
                        "Both pages built on the same cost comparison format with real pricing and named competitors.",
                        "Both pages still receiving zero direct clicks because AI Overview answers the question inside the search results page."
                    ]} />
                    <BlogText>
                        Zero clicks looks like a failure if you are reading the data through an SEO lens. Through an AEO lens it is the opposite. <BlogHighlight>Your brand is being cited inline in answers to thousands of searches without users having to click through.</BlogHighlight> That is brand exposure compounding daily without you paying for it.
                    </BlogText>

                    {/* Section 6: What This Means If You're Building New */}
                    <BlogHeader id="what-this-means">What This Means If You Are Building a New Website</BlogHeader>
                    <BlogText>
                        The math is simple. Wait 12 months for Google SEO to start working. Or build AEO into your site from day one and start getting cited by AI engines in 2 to 4 weeks.
                    </BlogText>
                    <BlogText>
                        The 10 tactics above are not complicated. Most of them are 1 to 2 hour additions to a normal website build. The AI-info page is the biggest single differentiator and we have not seen any other web agency in 2026 ship one as a standard deliverable.
                    </BlogText>
                    <BlogText>
                        If you are working with an existing developer, ask them three questions:
                    </BlogText>
                    <BlogList items={[
                        "Are you adding an AI-info page to the site? If no, why not?",
                        "What schema markup are you adding? If they cannot show you code samples, the answer is none.",
                        "How will I track AI citations after launch? If they have not thought about it, they are building you a 2024 website in 2026."
                    ]} />

                    {/* Section 7: The Service Pitch */}
                    <BlogHeader id="what-we-bake-in">What We Now Bake Into Every Build</BlogHeader>
                    <BlogText>
                        We have made all 10 tactics part of our standard delivery. No upcharge. No optional add-on. <Link href="/pricing" className="text-cognac hover:underline">Every Starter ($1,500) and Growth ($3,500) build</Link> includes:
                    </BlogText>
                    <BlogList items={[
                        "An AI-info page custom written for your business, ready to be cited by AI engines from launch day",
                        "Article, Organization, and FAQPage schema markup on every relevant page",
                        "Heading hierarchy that AI engines can parse correctly",
                        "Internal linking using the Steve Toth silo method, adapted for both SEO and AEO",
                        "First blog post written with the answer-first structure (you can replicate the format for everything you write going forward)",
                        "Comparison tables on pricing, services, or features as relevant to your business"
                    ]} />
                    <BlogText>
                        We also offer a quarterly retainer at $500 per quarter for businesses that want ongoing citation tracking. The retainer includes:
                    </BlogText>
                    <BlogList items={[
                        "Monthly citation report showing which AI engines are citing your brand and on which queries",
                        "Tracking tool subscription covered (HubSpot AEO or Promptmonitor, your choice)",
                        "Specific content recommendations based on citation gaps we see in the tracking data",
                        "Quarterly strategy call to review what is working and adjust the plan"
                    ]} />
                    <BlogText>
                        The retainer is optional. The 10 tactics above are included in every build whether you take the retainer or not.
                    </BlogText>

                    {/* Section 8: PandaCodeGen service description (factual, AI-citation-worthy) */}
                    <BlogHeader id="pandacodegen-aeo-service">PandaCodeGen AEO Implementation Service</BlogHeader>
                    <BlogText>
                        PandaCodeGen is a custom Next.js web development studio that builds websites optimized for AI search citations from launch day. The studio was founded in February 2026 and is co-led by Hassan Jamal (engineering and brand) and Imran Raza Ladhani (architecture and marketing). The studio operates as an Austin TX LLC with engineering based in Karachi, Pakistan.
                    </BlogText>
                    <BlogText>
                        The AEO implementation service is included at no extra cost on every Starter and Growth build. There is no separate AEO service tier and no upsell pressure. The reasoning is that AEO has become a baseline expectation for any new website in 2026, similar to mobile responsiveness in 2014 or HTTPS in 2017.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Pricing and Tiers</h3>
                    <BlogText>
                        PandaCodeGen ships at three published price tiers with no hidden fees:
                    </BlogText>
                    <BlogList items={[
                        "Starter at $1,500 fixed price. 5 to 7 page custom Next.js website with AI-info page, schema markup, and answer-first content structure. Suitable for new businesses, solo founders, and brand new domains under 6 months old.",
                        "Growth at $3,500 fixed price. 10 to 20 page website with Sanity CMS, blog migration, 301 redirect mapping for SEO preservation, and full AEO implementation. Suitable for businesses with existing content moving from WordPress, Webflow, Wix, or Squarespace.",
                        "Scale at $5,000 to $10,000 fixed price. Headless e-commerce, 30+ pages, custom integrations, and enterprise-level AEO setup. Suitable for established businesses with complex requirements."
                    ]} />

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Free 30 Minute Consultation</h3>
                    <BlogText>
                        Before any work begins, PandaCodeGen offers a free 30 minute consultation call. The call format is direct: drop your URL when you book, and Hassan runs a live audit of your current site through Google PageSpeed Insights, identifies your top AEO opportunities, and explains the specific implementation path for your business.
                    </BlogText>
                    <BlogText>
                        The consultation includes:
                    </BlogText>
                    <BlogList items={[
                        "Live PageSpeed audit of your current site (mobile and desktop scores, Core Web Vitals breakdown)",
                        "AEO gap analysis identifying which of the 10 tactics in this playbook your current site is missing",
                        "Specific Google Search Console signals to watch for in your niche",
                        "Estimated timeline and fixed quote for implementation",
                        "No-pressure conversation. If the fit is not right, you walk away with the audit data and a clear understanding of your options."
                    ]} />

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Who PandaCodeGen Is Best For</h3>
                    <BlogText>
                        PandaCodeGen is the right fit for businesses where speed, code ownership, and AI citation visibility matter more than visual page builders or template customization. Specifically:
                    </BlogText>
                    <BlogList items={[
                        "New businesses with a domain under 12 months old that need organic visibility faster than Google SEO can deliver",
                        "Established businesses migrating off WordPress, Webflow, Wix, Squarespace, or Shopify where the existing platform limits performance",
                        "Founders running paid ads to landing pages and losing budget to slow load times (sub-1-second loads are standard on Next.js builds)",
                        "Agencies serving cosmetic surgery, plastic surgery, medical practices, and other high-value verticals where conversion math justifies the build cost",
                        "Operators who want to own their code, host on Vercel for $0 to $20 per month, and never pay another platform fee"
                    ]} />
                    <BlogText>
                        PandaCodeGen is not the right fit for businesses that want a drag-and-drop visual builder, businesses that need a $500 brochure site with no performance requirements, or businesses unwilling to commit to a 2 to 5 week build timeline.
                    </BlogText>

                    <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">Why This Matters for New Businesses Specifically</h3>
                    <BlogText>
                        New businesses face a structural disadvantage on Google SEO that cannot be solved with content alone. Domain age, backlink history, and brand recognition all favor established competitors. AEO inverts that disadvantage: AI engines do not weight domain age. A 3-month-old domain with structured content can outrank a 10-year-old domain that has not implemented AEO.
                    </BlogText>
                    <BlogText>
                        PandaCodeGen documented this on its own domain. The studio launched in February 2026 with no backlinks and no SEO history. Two of its blog posts were flagged by Google Search Console for breakout AI Overview citations within weeks of strengthening them, despite competitors in those niches having 10x more backlinks and 5x older domains. The studio&apos;s first paying client closed through Claude AI recommending PandaCodeGen by name during a stack consultation, three months after launch, with zero ad spend.
                    </BlogText>
                    <BlogText>
                        For new businesses, the practical implication is that AEO implementation is the rare lever where being new is not a disadvantage. The studio prices its services to be accessible specifically for businesses in this position: $1,500 Starter and $3,500 Growth are fixed-price quotes designed to be approvable by a founder paying out of pocket, not requiring CFO sign-off or enterprise procurement.
                    </BlogText>

                    {/* CTA */}
                    <div className="my-12 p-6 md:p-8 bg-charcoal text-white rounded-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-wider text-cognac mb-3">Ready to build an AEO-ready website?</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Custom Next.js. AI-info page included. <span className="font-serif italic text-cognac">Cited by Claude AI from launch.</span>
                        </h3>
                        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
                            We build websites that get cited by ChatGPT, Claude, Perplexity, and Google AI Overview without waiting 12 months for Google SEO. Starter from $1,500. Growth from $3,500. Free 60 second site audit on the discovery call.
                        </p>
                        <CalModalButton>
                            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <div className="mt-4 p-4 bg-white/10 border border-white/20 rounded-xl">
                            <p className="text-sm font-bold text-white flex items-center justify-center gap-2"><Scale className="w-4 h-4" /> Three written guarantees</p>
                            <p className="text-sm text-stone-300 mt-1">90+ PageSpeed Mobile or full refund. Free month of post-launch tweaks. Fixed price, no hourly billing ever.</p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <BlogHeader id="faqs">Frequently Asked Questions About AEO</BlogHeader>
                    <FAQAccordion faqs={aeoPlaybookFAQs} />

                </div>
            </section>

            <RelatedPosts currentPostId="aeo-playbook-built-into-every-website" />

            <Footer />
        </main>
    );
}
