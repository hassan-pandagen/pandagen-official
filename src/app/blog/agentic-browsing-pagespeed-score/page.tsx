import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "agentic-browsing-pagespeed-score")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Agentic Browsing Score: Is Your Site Ready? (2026)",
    description: "Google added an Agentic Browsing score to PageSpeed Insights in May 2026. What it checks, why WebMCP shows Not Applicable, and how our site passes 3 of 3.",
    alternates: { canonical: "/blog/agentic-browsing-pagespeed-score" },
    keywords: [
        "agentic browsing",
        "agentic browsing pagespeed insights",
        "google agentic browsing score",
        "is my website ready for ai agents",
        "webmcp",
        "agent ready website",
        "llms.txt google",
        "lighthouse agentic browsing",
        "agentic commerce readiness",
        "ai agent website optimization",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Is Your Website Ready for AI Agents? Google Now Scores It (2026)",
        description: "Google added an 'Agentic Browsing' score to PageSpeed Insights. Here is what it checks, why WebMCP shows 'Not Applicable' for almost everyone, and how our own site already passes 3 out of 3.",
        type: "article",
        publishedTime: "2026-06-19T00:00:00-05:00",
        modifiedTime: "2026-06-19T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Is Your Website Ready for AI Agents? Google Now Scores It (2026)",
        description: "Google now scores agent-readiness in PageSpeed Insights. What it checks, why WebMCP is 'Not Applicable' for almost everyone, and how our site passes 3 of 3.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#article",
            "headline": "Is Your Website Ready for AI Agents? Google Now Scores It (2026)",
            "description": "Google added an 'Agentic Browsing' category to PageSpeed Insights in May 2026 that scores whether AI agents can browse and act on a site. What it checks, why the WebMCP layer is unscored, and how PandaCodeGen sites already pass 3 of 3.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-06-19T00:00:00-05:00",
            "dateModified": "2026-06-19T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score" },
            "articleSection": "AI Search",
            "keywords": ["agentic browsing", "webmcp", "agent ready website", "llms.txt", "agentic commerce readiness"],
            "wordCount": 1500,
            "timeRequired": "PT9M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Agentic Browsing" },
                { "@type": "Thing", "name": "WebMCP" },
                { "@type": "Thing", "name": "Google PageSpeed Insights" },
                { "@type": "Thing", "name": "Agentic Commerce" },
                { "@type": "Thing", "name": "AI Agents" }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Lighthouse Agentic Browsing Scoring", "url": "https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring" },
                { "@type": "CreativeWork", "name": "DebugBear: Lighthouse Has A New Agentic Browsing Category", "url": "https://www.debugbear.com/blog/lighthouse-agentic-browsing" },
                { "@type": "CreativeWork", "name": "WebMCP: The Google I/O 2026 Web Standard", "url": "https://dev.to/soumyadeepdey/why-webmcp-is-the-most-important-thing-google-announced-at-io-2026-and-nobodys-talking-about-it-2edf" },
                { "@type": "CreativeWork", "name": "WebMCP Explained: How AI Agents Will Interact Directly with Websites", "url": "https://locomotive.agency/blog/webmcp-ai-agents-website-functions/" },
                { "@type": "CreativeWork", "name": "What is llms.txt? How the New AI Standard Works", "url": "https://www.bluehost.com/blog/what-is-llms-txt/" },
                { "@type": "CreativeWork", "name": "Agentic Commerce Readiness: Are You Visible to AI Shopping Agents?", "url": "https://www.tredence.com/blog/agentic-commerce-readiness-ai-shopping-agents" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Is Your Website Ready for AI Agents?", "item": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#webpage",
            "url": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score",
            "name": "Is Your Website Ready for AI Agents? Google Now Scores It (2026)",
            "description": "What Google's Agentic Browsing score checks, why the WebMCP layer is unscored, and how PandaCodeGen sites already pass 3 of 3.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-19T00:00:00-05:00",
            "dateModified": "2026-06-19T00:00:00-05:00",
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
            "description": "PandaCodeGen builds custom Next.js websites that are fast for humans and readable by AI agents and AI search. Clean semantic markup, stable layouts, and a compliant llms.txt come standard, which is why our sites pass Google's Agentic Browsing checks.",
            "areaServed": "Worldwide",
            "email": "info@pandacodegen.com",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen"
            ]
        }
    ]
};

export default function AgenticBrowsingPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Is Your Website Ready for AI Agents?" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4">
                            <Bot className="w-3 h-3" /> AI Search
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Is Your Website Ready for AI Agents?{" "}
                            <span className="font-serif italic text-cognac">Google Now Scores It</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            In May 2026 Google quietly added a new grade to its free website checker (the tool called PageSpeed Insights). For years that tool measured how well your site works for people. This new grade, called Agentic Browsing, measures something different: whether an AI assistant can read and use your site. It is not a 0 to 100 score, just a simple pass count, like 3 out of 3. The checks are basic things a well-built site already does, and our own site passes all of them. Below, in plain English: what it checks, why it matters for your business, and what you should do about it.
                        </p>
                        <BlogAuthor
                            date="Jun 19, 2026"
                            readTime="9 min read"
                            bio="Hassan builds custom Next.js sites that are fast for people and easy for AI agents and AI search to read. Clean code, stable layouts, and a proper llms.txt file come standard on every build."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Short Answer box */}
                    <div className="mb-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Google added an &ldquo;Agentic Browsing&rdquo; category to PageSpeed Insights in May 2026. It scores whether AI agents can browse and act on your site, shown as a ratio (like 3/3), not a 0 to 100 score.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> The three scored checks today are simple: can an AI cleanly read your page (a tidy behind-the-scenes structure), does the page stay still as it loads instead of jumping around, and do you have an llms.txt file (a short text file that maps your site for AI). Clean, custom-built sites pass these automatically.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> The WebMCP checks (the layer that lets agents take actions) are listed but unscored and marked &ldquo;Not Applicable&rdquo; for almost everyone, because WebMCP, the standard behind them, is still in early testing in Chrome. Building it now is premature.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Our own site (pandacodegen.com) passes 3 of 3 on the scored checks, with zero special work, because the same foundation that makes a site fast and AI-citable is what passes Agentic Browsing.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> And it pays off in real money: customers who found us through AI assistants (mostly ChatGPT, plus Claude and Perplexity) have placed more than $7,000 in orders on our own store so far. Passing the score is the foundation. The orders are the point.</li>
                        </ul>
                    </div>

                    <BlogText>
                        For a decade, your website was graded on how well humans could use it: speed, SEO, accessibility. In 2026 a new grader showed up, and it is not a person. It is an AI agent, software that browses on a user&apos;s behalf to find, compare, and increasingly buy. Google has started scoring how ready your site is for that, and most businesses do not know the test exists yet. That gap is the opportunity. If you want the bigger picture of building sites AI can find and trust, that is the whole point of our <Link href="/services" className="text-cognac hover:underline">custom build approach</Link>.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen builds custom Next.js sites that are fast for people and easy for machines to read. Clean, well-organized code, stable layouts, and a proper llms.txt file are standard, not add-ons, which is why our sites pass Google&apos;s Agentic Browsing checks without extra work. We treat AI agents and AI search as a real audience, not a someday.
                        </p>
                    </div>

                    <BlogHeader id="what-is-agentic-browsing">What Is Agentic Browsing?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Agentic Browsing is a new grade Google added in May 2026 to its free website checker, the same tool that scores how fast your site loads. The difference is who it grades for. Instead of checking that a person can use your site, it checks whether an AI assistant can read and use it. It is not a 0 to 100 score. It is a simple pass count, like 3 out of 3. It is still early and experimental, so the exact checks will change over time.</p>
                    </div>

                    <BlogText>
                        The reason this matters is where commerce is heading. Morgan Stanley projects that agentic commerce, where software agents shop and buy on a person&apos;s behalf, could account for 10 to 20 percent of US ecommerce spending by 2030. An agent cannot buy from a site it cannot read. Google adding a score for this is the early signal that machine-readability is becoming a ranking-style concern, the way mobile-friendliness did a decade ago.
                    </BlogText>

                    <BlogHeader id="what-google-scores">What Google Actually Scores Today</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Three checks are scored today: a well-formed accessibility tree (so an agent can navigate the page), a stable layout measured by Cumulative Layout Shift (so elements do not move while the agent reads), and a compliant llms.txt file (a machine-readable map of your site). Custom-built sites with clean semantic markup pass all three. Bloated platform and plugin-heavy sites often fail the accessibility-tree and layout checks.</p>
                    </div>

                    <BlogText>
                        Notice what these three have in common: none of them are exotic. They are the same basics that make a site fast, usable for people with screen readers, and quotable by AI search. An AI agent reads your page through the same behind-the-scenes structure that screen readers use for blind visitors. So clean code, proper headings, labelled forms, and image descriptions are not just an accessibility nicety anymore. They are how an agent makes sense of your page at all.
                    </BlogText>

                    <figure className="my-8">
                        <img
                            src="/blog-images/agentic-browsing-3-of-3.png"
                            alt="Google PageSpeed Insights showing pandacodegen.com passing 3 of 3 Agentic Browsing checks: a well-formed accessibility tree, a stable layout (low Cumulative Layout Shift), and a compliant llms.txt file, with the WebMCP checks marked Not Applicable"
                            width={1200}
                            height={700}
                            loading="lazy"
                            className="w-full h-auto rounded-xl border border-stone-200"
                        />
                        <figcaption className="text-xs text-stone-500 mt-2 text-center">
                            Google PageSpeed Insights, pandacodegen.com (June 2026): 3 of 3 on the scored Agentic Browsing checks. The WebMCP checks below are marked Not Applicable because the standard is still in early testing. This category is experimental and subject to change.
                        </figcaption>
                    </figure>

                    <BlogQuote>
                        We did not build for this score. We pass it because the foundation that makes a site fast and AI-citable is the same foundation an agent needs to read it.
                    </BlogQuote>

                    <BlogHeader id="does-it-lead-to-sales">Does Being AI-Readable Actually Lead to Sales?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Yes. The same clean foundation that passes these checks is what gets you recommended by AI assistants like ChatGPT and Claude, and those recommendations turn into real orders. On our own store, customers who found us through AI assistants have placed more than $7,000 in orders so far, including a single $1,680 order from a buyer referred by Claude. Passing a technical score is not the point. The orders are.</p>
                    </div>

                    <BlogText>
                        This is the part that matters for a business owner, because the score is not the goal. We tag where every order comes from on our own store, and a growing share now arrives from people who found us by asking an AI assistant, not from a Google search or an ad. So far that adds up to more than $7,000 we can trace back to AI assistants: around $5,100 from ChatGPT across 25 orders, a $590 order from Perplexity, and a $1,680 order from a customer who told us Claude sent them.
                    </BlogText>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="3/3" label="Agentic Browsing" context="Our own site passes all scored checks with zero special work" />
                        <StatCard stat="$7,000+" label="Traceable to AI" context="Orders we can trace back to AI assistants so far" />
                        <StatCard stat="25" label="ChatGPT Orders" context="Around $5,100 in orders from ChatGPT referrals" />
                    </div>

                    <figure className="my-8">
                        <img
                            src="/blog-images/ai-referred-orders.png"
                            alt="PandaCodeGen order dashboard, AI and LLMs category: orders and revenue attributed to AI assistants. ChatGPT 25 orders at $5,149, Claude 1 order at $1,680, Perplexity 1 order at $590, with Gemini, Meta AI, and DeepSeek at zero so far"
                            width={1200}
                            height={700}
                            loading="lazy"
                            className="w-full h-auto rounded-xl border border-stone-200"
                        />
                        <figcaption className="text-xs text-stone-500 mt-2 text-center">
                            Our own order dashboard, AI and LLMs breakdown (June 2026): ChatGPT, Claude, and Perplexity have driven real orders and revenue. Gemini, Meta AI, and DeepSeek are tracked too, but have not converted yet.
                        </figcaption>
                    </figure>

                    <BlogText>
                        One honest distinction. These are real people who found us through an AI assistant and then bought, not AI agents buying on their own. Autonomous agent purchases are what the WebMCP layer below is built for, and that is still coming. But the foundation is the same: a site an AI can read cleanly is a site an AI recommends, and today that recommendation reaches a person who places the order. Passing Agentic Browsing is the technical proof. The orders are the business proof.
                    </BlogText>

                    <InsightBox variant="tip">The same clean foundation that passes Agentic Browsing is what gets you recommended by AI assistants. Passing the score is the foundation; the orders are the point.</InsightBox>

                    <BlogHeader id="what-is-webmcp">What Is WebMCP, and Why Is It &ldquo;Not Applicable&rdquo;?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">WebMCP (short for Web Model Context Protocol) is a new standard from Google and Microsoft, announced February 2026, that lets your site hand an AI assistant a clear list of what it can do, so it can fill a form or complete a checkout reliably instead of guessing where to click. The checks for it show &ldquo;Not Applicable&rdquo; because WebMCP is still in early testing in Chrome and only runs on the newest version with special access turned on. In plain terms, Google built the test but is not scoring it yet.</p>
                    </div>

                    <BlogText>
                        This is the part worth understanding, because it tells you exactly what to do and what not to do. There are two layers to agent-readiness. The first is <BlogHighlight>browsability</BlogHighlight>: can an agent read and navigate your page? That is the scored layer (accessibility, layout, llms.txt), and it is live today. The second is <BlogHighlight>actionability</BlogHighlight>: can an agent reliably do something on your page, like submit a form or complete a purchase? That is WebMCP, and it is still being built. You add it by tagging your forms with a few extra labels, but the standard is still in testing, so almost nothing uses it yet.
                    </BlogText>

                    <BlogText>
                        That Google itself marks WebMCP &ldquo;Not Applicable&rdquo; is the useful signal. If the company building the standard is not scoring it, building a production WebMCP integration today means engineering against a moving target that no agents actually use yet. The honest move is to pass the browsability layer now and add the action layer the moment it matters.
                    </BlogText>

                    <BlogHeader id="llms-txt-truth">The Honest Truth About llms.txt</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">An llms.txt is a small text file you place at the root of your site that gives AI tools a simple map of your most important pages. Google&apos;s checker rewards having a proper one, but be realistic: as of early 2026, OpenAI, Google, Anthropic, and Meta had not all committed to actually reading it. Its strongest confirmed use today is AI coding tools. So treat it as a cheap, recommended box to tick that Google scores, not a guaranteed pipeline into every AI answer.</p>
                    </div>

                    <BlogText>
                        We mention this because the internet is full of advice treating llms.txt as a magic switch for AI visibility. It is not. It costs almost nothing to add and Google scores it, so there is no reason not to have one. But the heavy lifting for actually being found and quoted by AI still comes from clean, well-structured content with a direct answer in the first sentence of each section. That is the same principle Google&apos;s own agent-readiness guidance points to, and it is how we structure every page we build.
                    </BlogText>

                    <BlogHeader id="how-to-pass">How to Pass (and Who Usually Fails)</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">To pass, you need three things: clean, well-organized code with proper headings and labelled forms (so an AI can read the page), a layout that does not jump around while it loads, and an llms.txt file at the root of your site. Custom-built sites usually pass automatically. WordPress, Wix, and heavy page-builder sites often fail, because their code is bloated and messy and their pages shift around as they load.</p>
                    </div>

                    <BlogText>
                        If you are on a platform or a plugin-heavy theme and you fail these checks, it is the same root cause that tanks your PageSpeed and your Core Web Vitals: too much code doing too little, and a layout assembled by a builder rather than written cleanly. The fix is not a plugin. It is a site built properly. That is exactly what a migration to custom Next.js does, and it is why our builds clear these checks as a side effect rather than a project. The same work also feeds your <Link href="/blog/meta-conversions-api-setup-cost" className="text-cognac hover:underline">server-side ad tracking</Link> and your AI-search visibility, because it is all the same clean foundation.
                    </BlogText>

                    <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get a Free Agent-Readiness Check <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-3">Drop your URL and we will tell you what an AI agent can and cannot do with your site today.</p>
                    </div>

                    <BlogHeader id="what-to-do-now">What to Do Now</BlogHeader>
                    <BlogText>
                        The trap with anything labelled &ldquo;the future of the web&rdquo; is overbuilding for a standard that has not landed. So here is the honest sequence, in order.
                    </BlogText>
                    <BlogList items={[
                        "Pass the browsability layer today. Accessibility tree, layout stability, llms.txt. This is scored now, it is cheap on a clean site, and it is the same foundation that makes you fast and citable in AI search.",
                        "Do not build WebMCP yet. It is still in testing, no agents use it at scale yet, and Google does not score it. Building now means working against a moving target.",
                        "Watch for the trigger. The moment Google moves the WebMCP checks from 'Not Applicable' to scored, that is the signal to add the action layer (tagging your forms so agents can use them). Until then, the foundation is the work.",
                        "Treat agent-readiness and AI-search visibility as one job. The clean, well-structured site that passes Agentic Browsing is the same site that gets cited by ChatGPT and Google's AI answers. You are not doing two projects.",
                    ]} />

                    <BlogHeader id="bottom-line">The Bottom Line</BlogHeader>
                    <BlogText>
                        Google just started grading your website for an audience that is not human. Most businesses have not noticed. The good news is that passing the part that is scored today does not require chasing a new trend. It requires a site built on clean fundamentals, the same ones that make it fast, accessible, and quotable by AI. The deeper agent-action layer is coming, but it is not here yet, and building it early is a cost, not an edge.
                    </BlogText>
                    <BlogText>
                        We build sites that pass these checks by default and structure every page so AI can read and quote it. If you want to know where your current site stands with an AI agent, that is a free conversation, you do not have to be a client. Send your URL and we will show you what an agent sees.
                    </BlogText>

                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <Bot className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Find Out If Your Site Is Ready for AI Agents</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We will run your site through the same checks Google uses and tell you what an AI agent can read and do with it today. Building new? Every site we ship passes Agentic Browsing and is structured to be quoted by AI search.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get a Free Agent-Readiness Check <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-4">No pitch required. Drop your URL and we will tell you what we see.</p>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <section className="mb-10 mt-8 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">
                            Agentic Browsing is about whether an agent can <em>read</em> your site. For the protocol agents will use to actually <em>buy</em> from it, see <Link href="/blog/google-universal-commerce-protocol-what-it-means-for-your-store" className="text-cognac hover:underline font-medium">Google&apos;s Universal Commerce Protocol</Link>. For why platform stores leak conversion signal to ads and AI agents alike, read <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline font-medium">why your ad costs climb while orders stay flat</Link>. And for how all of this fits our approach to being found by AI, see <Link href="/ai-info" className="text-cognac hover:underline font-medium">how PandaCodeGen builds for AI search</Link>.
                        </p>
                    </section>

                    <RelatedPosts currentPostId="agentic-browsing-pagespeed-score" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
