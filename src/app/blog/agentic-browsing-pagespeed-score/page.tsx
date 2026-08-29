import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Bot, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor, StatCard, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "agentic-browsing-pagespeed-score")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Lighthouse Agentic Browsing Checks Explained (2026)",
    description: "A source-linked guide to Lighthouse's experimental Agentic Browsing checks, their limits, and a dated PandaCodeGen snapshot.",
    alternates: { canonical: "/blog/agentic-browsing-pagespeed-score" },
    keywords: [
        "agentic browsing",
        "webmcp",
        "agentic browsing 0 of 3",
        "how to fix agentic browsing",
        "agentic browsing pagespeed insights",
        "google agentic browsing score",
        "is my website ready for ai agents",
        "agent ready website",
        "llms.txt google",
        "lighthouse agentic browsing",
        "agentic commerce readiness",
        "ai agent website optimization",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Lighthouse Agentic Browsing Checks Explained (2026)",
        description: "What the experimental Lighthouse category checks, what its pass ratio does not prove, and a dated PandaCodeGen snapshot.",
        type: "article",
        publishedTime: "2026-06-19T00:00:00-05:00",
        modifiedTime: "2026-08-29T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score",
        images: [ogImageForPath("/blog/agentic-browsing-pagespeed-score")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lighthouse Agentic Browsing Checks Explained (2026)",
        description: "A source-linked explanation of the experimental category, its pass ratio, WebMCP requirements, and limits.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#article",
            "headline": "Lighthouse Agentic Browsing Checks Explained (2026)",
            "description": "A source-linked guide to Lighthouse's experimental Agentic Browsing category, its pass ratio, WebMCP requirements, and a dated PandaCodeGen snapshot.",
            "image": ogImageUrlForPath("/blog/agentic-browsing-pagespeed-score"),
            "datePublished": "2026-06-19T00:00:00-05:00",
            "dateModified": "2026-08-29T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "knowsAbout": ["Web performance", "Core Web Vitals", "Lighthouse", "Rendering strategies", "Next.js"],
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#webpage" },
            "articleSection": "AEO",
            "keywords": ["agentic browsing", "webmcp", "agent ready website", "llms.txt", "agentic commerce readiness"],
            "inLanguage": "en-US",
            "wordCount": 1886,
            "timeRequired": "PT9M",
            "about": [
                { "@type": "Thing", "name": "Agentic Browsing" },
                { "@type": "Thing", "name": "WebMCP" },
                { "@type": "Thing", "name": "Google PageSpeed Insights", "sameAs": ["https://pagespeed.web.dev/"] },
                { "@type": "Thing", "name": "Agentic Commerce" },
                { "@type": "Thing", "name": "AI Agents", "sameAs": ["https://en.wikipedia.org/wiki/Intelligent_agent"] }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Lighthouse Agentic Browsing Scoring", "url": "https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring" },
                { "@type": "CreativeWork", "name": "OpenAI Publishers and Developers FAQ", "url": "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
                { "@type": "CreativeWork", "name": "WAI-ARIA Authoring Practices", "url": "https://www.w3.org/WAI/ARIA/apg/" }
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
                { "@type": "ListItem", "position": 3, "name": "Lighthouse agentic browsing checks", "item": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score#webpage",
            "url": "https://www.pandacodegen.com/blog/agentic-browsing-pagespeed-score",
            "name": "Lighthouse Agentic Browsing Checks Explained (2026)",
            "description": "What Lighthouse's experimental Agentic Browsing category checks, what its pass ratio does not prove, and a dated PandaCodeGen snapshot.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-06-19T00:00:00-05:00",
            "dateModified": "2026-08-29T00:00:00-05:00",
            "inLanguage": "en-US"
        },
    ]
};

export default function AgenticBrowsingPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs("agentic-browsing-pagespeed-score", "Lighthouse agentic browsing checks")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-cognac border border-cognac/20 rounded-full text-xs font-semibold mb-4">
                            <Bot className="w-3 h-3" /> AI Search
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Lighthouse Agentic Browsing Checks:{" "}
                            <span className="font-serif italic text-cognac">What They Actually Prove</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            In May 2026 the Chrome team documented an experimental Lighthouse category called Agentic Browsing. It does not give you a 0-to-100 score. It tells you how many checks passed out of how many, and what each one found. This guide covers what those checks actually measure, and what they cannot tell you: whether you will rank, whether an AI will recommend you, whether people will complete a purchase, or whether you will sell more.
                        </p>
                        <BlogAuthor
                            date="Updated Jul 31, 2026"
                            readTime="9 min read"
                            bio="Hassan builds and migrates Next.js sites, and writes down how rendering, accessibility, layout stability and performance get signed off."
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
                            <li className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Chrome documents Agentic Browsing as an experimental Lighthouse category based on proposed standards.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> It reports a pass ratio and individual results for WebMCP, agent-relevant accessibility, layout stability, and llms.txt discoverability.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Chrome&apos;s current documentation requires Chrome 150 or later; WebMCP audits also require the WebMCP origin trial.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> A June 20, 2026 PandaCodeGen screenshot recorded 3/3 under Lighthouse 13.4.0 and HeadlessChromium 146.0.7680.177. That is a historical snapshot, not a current universal result.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> A separate Panda Patches dashboard recorded $7,419.18 across 27 internally AI-tagged orders. The owner-approved screenshot is first-party, not independently audited, and does not connect those orders to this Lighthouse result.</li>
                        </ul>
                    </div>

                    <BlogText>
                        Agentic browsing describes software navigating or acting on a website for a user. The Lighthouse category is a developer diagnostic for selected machine-interaction conditions. It is not a Google Search ranking signal, a certification across agents, or evidence that an agent completed a business task. Use it alongside browser-specific task tests, accessibility checks, security review, and real outcome measurement.
                    </BlogText>

                    <div className="my-6 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            Our migrations can include recorded checks on what actually renders, whether the HTML is semantic, whether controls have accessible names, whether the layout holds still, and the Lighthouse profiles you agreed. Experimental results are dated with their browser and tool versions and do not create a ranking, citation, transaction, or revenue promise.
                        </p>
                    </div>

                    <BlogHeader id="what-is-agentic-browsing">What Is Agentic Browsing?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Agentic Browsing is an experimental Lighthouse category for deterministic machine-interaction checks. It reports a fraction and individual pass, warning, or error results rather than a weighted score. Chrome explicitly says the standards are still emerging, so record the date, page state, browser, and Lighthouse version.</p>
                    </div>

                    <BlogText>
                        It is useful as an engineering signal. If controls have proper names, relationships are valid, the layout holds still and tools are declared, software has less to guess at. The official documentation does not call it a search ranking factor and does not forecast adoption or commerce volume. Business investment should follow a named user journey and measurable demand, not a market projection alone.
                    </BlogText>

                    <BlogHeader id="what-google-scores">What Google Actually Scores Today</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Chrome groups the current audits under WebMCP integration, agent-centric accessibility, stability, and discoverability. The category may report accessibility checks, CLS, llms.txt presence, and registered WebMCP tool conditions. Read the individual audit output; neither a framework nor a platform determines the result automatically.</p>
                    </div>

                    <BlogText>
                        The accessibility tree is one machine-readable view of interactive content. OpenAI also says its Atlas agent uses ARIA labels and roles to interpret structure and controls. Correct semantic HTML and accessible names therefore help people and supported agents, but do not guarantee that every agent uses the same model or that search systems quote the page.
                    </BlogText>
                    <BlogText>
                        There is a point buried in that worth saying plainly. An agent reads your page through much the same structure a screen reader uses for a blind visitor: the headings, the roles, the accessible names on your controls, the labels on your form fields. Semantic markup used to be filed under accessibility, and treated by plenty of teams as a compliance chore. It is now also the interface a machine reads your page through. That is the honest reason these checks exist, and it is why the work overlaps so heavily with things you should have been doing anyway.
                    </BlogText>
                    <BlogText>
                        It also helps to keep two different questions apart. The first is whether an agent can <BlogHighlight>read and navigate</BlogHighlight> your page. That is what the accessibility, layout-stability and discoverability audits look at, and those run today. The second is whether an agent can <BlogHighlight>reliably act</BlogHighlight> on it, submit the form, complete the purchase, change the booking. That is what WebMCP is for, and it is the part that is not settled. Almost all the confusion about this category comes from treating those two as one question.
                    </BlogText>

                    <figure className="my-8">
                        <Image
                            src="/blog-images/agentic-browsing-3-of-3.png"
                            alt="Historical PageSpeed Insights screenshot for pandacodegen.com dated June 20, 2026, showing an Agentic Browsing ratio of 3 out of 3"
                            width={1920}
                            height={945}
                            sizes="(max-width: 768px) 100vw, 768px"
                            loading="lazy"
                            className="w-full h-auto rounded-xl border border-stone-200"
                        />
                        <figcaption className="text-xs text-stone-500 mt-2 text-center">
                            Historical PageSpeed Insights snapshot for pandacodegen.com, captured June 20, 2026 at 12:58 AM GMT+5 with Lighthouse 13.4.0 and HeadlessChromium 146.0.7680.177. It shows 3/3 and no field data. Current Chrome documentation now says Chrome 150 or later is required, so this image is evidence of that run only.
                        </figcaption>
                    </figure>

                    <BlogQuote>
                        A dated audit result proves only what that tool checked on that page, under that recorded environment. It certifies nothing about your other pages, other browsers, other agents, other tasks, or the next version.
                    </BlogQuote>

                    <BlogHeader id="does-it-lead-to-sales">Does Being AI-Readable Actually Lead to Sales?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">No Lighthouse result proves an AI recommendation or a sale. The owner-operated Panda Patches store separately recorded $7,419.18 across 27 internally AI-tagged orders in a June 2026 dashboard snapshot. Those labels are first-party attribution, not an independently audited or causal measurement.</p>
                    </div>

                    <BlogText>
                        The screenshot records 25 ChatGPT-tagged orders totaling $5,149.18, one Perplexity-tagged order totaling $590, and one Claude-tagged order totaling $1,680. PandaCodeGen&apos;s owners approved publication because Panda Patches is their own brand. The image does not show the collection method, attribution window, returns, taxes, or counterfactual orders, so it is presented as an internal snapshot rather than proof of channel incrementality.
                    </BlogText>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                        <StatCard stat="3/3" label="Historical Audit" context="PandaCodeGen, June 20, 2026; recorded environment above" />
                        <StatCard stat="$7,419.18" label="Internally Tagged" context="Separate Panda Patches snapshot; not causal or independently audited" />
                        <StatCard stat="27" label="Tagged Orders" context="25 ChatGPT, one Claude, and one Perplexity label" />
                    </div>

                    <figure className="my-8">
                        <Image
                            src="/blog-images/ai-referred-orders.png"
                            alt="Owner-operated Panda Patches internal June 2026 dashboard showing 27 AI-tagged orders totaling 7,419 dollars and 18 cents"
                            width={782}
                            height={484}
                            sizes="(max-width: 768px) 100vw, 768px"
                            loading="lazy"
                            className="w-full h-auto rounded-xl border border-stone-200"
                        />
                        <figcaption className="text-xs text-stone-500 mt-2 text-center">
                            Owner-approved Panda Patches internal dashboard, June 2026. The screenshot records platform labels and totals but not the collection method or attribution window. It is not independently audited and does not prove causation or predict future results.
                        </figcaption>
                    </figure>

                    <BlogText>
                        The two screenshots answer different questions and should not be joined into one success claim. The Lighthouse image records a technical audit on pandacodegen.com. The commerce image records internal referral labels on Panda Patches. Neither demonstrates autonomous agent purchasing, and the second does not show that the first caused revenue.
                    </BlogText>

                    <InsightBox variant="tip">Use the Lighthouse category to find specific technical issues. Measure referrals and completed tasks separately, with a documented attribution method. Do not use one as proof of the other.</InsightBox>

                    <BlogHeader id="what-is-webmcp">What Is WebMCP, and Why Is It &ldquo;Not Applicable&rdquo;?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">WebMCP is a proposed browser API for exposing site tools to agents. Chrome&apos;s current Agentic Browsing documentation says the category requires Chrome 150 or later and WebMCP audits require registration for the WebMCP origin trial. A Not Applicable result must be interpreted from that run&apos;s audit detail, not assigned one universal cause.</p>
                    </div>

                    <BlogText>
                        It is useful to separate <BlogHighlight>interpreting the interface</BlogHighlight> from <BlogHighlight>calling an explicitly registered tool</BlogHighlight>. Accessibility-tree quality and layout stability can help the first. WebMCP experiments address the second. Neither alone proves that a specific agent can safely complete a form, purchase, or account action; those journeys also need authentication, authorization, validation, confirmation, error, privacy, and abuse testing.
                    </BlogText>

                    <BlogText>
                        Before you ship this, say which browser or agent you support, which journey it covers, what the origin trial requires, what data is exposed, who reviewed the security, what happens when it fails, who maintains it, and what acceptance test it has to pass.
                    </BlogText>
                    <BlogText>
                        For most sites, though, the practical answer is to wait, and the requirement itself is the reason. Those audits only run on Chrome 150 or later and only for origins registered in the WebMCP origin trial. A capability gated behind an origin trial is a capability that is still being changed, and building production integration against it means committing engineering time to a moving specification that almost nothing consumes yet. That is a real cost with a speculative return. Prototype it if you have a specific journey and a specific agent in mind. Otherwise the browsability layer is where the same effort pays off today, for people as well as for software.
                    </BlogText>

                    <BlogHeader id="llms-txt-truth">The Honest Truth About llms.txt</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">An llms.txt file is a voluntary discovery document, not a Google Search requirement or a guaranteed AI input. Product behavior is mutable and should be checked against each provider&apos;s current primary documentation and observed requests. Keep the file concise and factual, and do not assign it ranking, citation, or scoring value without evidence.</p>
                    </div>

                    <BlogText>
                        Chrome&apos;s experimental audit checks llms.txt presence, but that check does not make the file a Google Search requirement or prove that another product consumes it. Add and maintain the file only when it serves a named consumer or test. Crawlable, useful, source-linked content remains important, but no structure or opening-sentence pattern guarantees retrieval or quotation.
                    </BlogText>

                    <BlogHeader id="check-yours">How do you check your own score, and your competitor&apos;s?</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Open pagespeed.web.dev, enter your URL, choose Mobile, and read the Agentic Browsing figure next to Performance. Then do the same for the two or three competitors you lose work to. It takes about a minute each and needs no account, no tool and no access to their site.</p>
                    </div>

                    <BlogText>
                        Run it on the page you would want an assistant to describe, which is usually a service or
                        product page rather than the home page. The audits run per URL, so a good home page score
                        tells you nothing about the page that actually sells.
                    </BlogText>
                    <BlogText>
                        Then run the same test on a competitor. This is the part most people skip and it is the only
                        part that gives the number meaning. A 1 of 3 in a field where everyone scores 1 of 3 is a
                        different situation from a 1 of 3 where two rivals score 3 of 3. You are looking for a gap,
                        not a grade.
                    </BlogText>
                    <BlogText>
                        What the comparison can tell you is narrow and worth stating plainly. It shows whether an
                        assistant reading your page finds a well-formed structure, a stable layout and a
                        machine-readable summary, and whether your competitor&apos;s page does. It does not tell you
                        who gets recommended, how often either page is quoted, or what any of it is worth. Those are
                        separate questions and this score answers none of them.
                    </BlogText>

                    <BlogHeader id="why-this-one-first">Why fix this one before the performance score?</BlogHeader>

                    <BlogText>
                        Because it is the only score on the report where a competitor can be measurably ahead of you
                        on something you can close in weeks. Performance is a spectrum and everyone argues about it.
                        Agentic Browsing is close to binary: you pass a check or you do not, the same three checks
                        apply to your rival, and the category is new enough that most of any given field has not
                        looked at it yet.
                    </BlogText>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left text-sm text-stone-500">
                                Agentic Browsing results across nine live sites, PageSpeed Insights API, 29 August
                                2026. Third-party sites are described by platform rather than named.
                            </caption>
                            <thead>
                                <tr className="border-b border-stone-300">
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Site</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Score</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">What failed</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-200"><td className="p-3">Divi site</td><td className="p-3">0 of 3</td><td className="p-3">accessibility tree, layout shift, llms.txt</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Divi site</td><td className="p-3">0 of 2</td><td className="p-3">accessibility tree, layout shift</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Elementor site</td><td className="p-3">1 of 3</td><td className="p-3">accessibility tree, layout shift</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Elementor site</td><td className="p-3">2 of 3</td><td className="p-3">accessibility tree</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">WordPress site</td><td className="p-3">1 of 2</td><td className="p-3">accessibility tree</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">WordPress site</td><td className="p-3">1 of 2</td><td className="p-3">accessibility tree</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Squarespace, own marketing site</td><td className="p-3">2 of 3</td><td className="p-3">accessibility tree</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3">Webflow, own marketing site</td><td className="p-3">3 of 3</td><td className="p-3">nothing</td></tr>
                                <tr><td className="p-3">pandacodegen.com</td><td className="p-3">3 of 3</td><td className="p-3">nothing</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        Eight of the nine failed the accessibility-tree check, including Squarespace&apos;s own
                        marketing site. That is the finding worth carrying away: the common failure is not a missing
                        AI file, it is that the page&apos;s structure is not legible to something that is not a
                        browser. It is also the check nobody can pass by adding a file, which is why it is the one
                        that separates sites.
                    </BlogText>

                    <BlogHighlight>
                        What a 0 of 3 does not mean. It does not mean assistants cannot see your site, that you are
                        absent from AI answers, or that you are losing customers. None of those are measured here.
                        It means three specific checks failed on one URL. Anyone telling you a low score makes your
                        business invisible is selling from a number that does not say that, and the honest version
                        is strong enough without it: your competitor passes checks you fail, on a report you can both
                        run in a minute.
                    </BlogHighlight>

                    <BlogHeader id="the-three-checks">Which three checks make up the score?</BlogHeader>

                    <BlogText>
                        Six audits exist in the category and most sites are scored on three of them. We confirmed this
                        against the PageSpeed Insights API on 29 August 2026 rather than from other write-ups, several
                        of which disagree about whether the denominator is three or four. It is neither, fixed: the
                        three WebMCP audits report &ldquo;not applicable&rdquo; on any site that has not implemented
                        WebMCP, which today is nearly every site, so those drop out of the count and the remaining
                        three are what you are scored on.
                    </BlogText>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <caption className="mb-3 text-left text-sm text-stone-500">
                                Audits returned by the PageSpeed Insights API under the agentic-browsing category,
                                verified 29 August 2026. Audit identifiers are Google&apos;s own.
                            </caption>
                            <thead>
                                <tr className="border-b border-stone-300">
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Audit</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">Counts for most sites</th>
                                    <th scope="col" className="p-3 font-semibold text-charcoal">What it looks at</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="border-b border-stone-200"><td className="p-3"><code>agent-accessibility-tree</code></td><td className="p-3">Yes</td><td className="p-3">Whether the accessibility tree is well-formed: names, labels, structure</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3"><code>cumulative-layout-shift</code></td><td className="p-3">Yes</td><td className="p-3">Whether the layout stays still while it loads</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3"><code>llms-txt</code></td><td className="p-3">Yes</td><td className="p-3">Whether an llms.txt file exists and follows the recommendations</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3"><code>webmcp-form-coverage</code></td><td className="p-3">No</td><td className="p-3">Not applicable without WebMCP</td></tr>
                                <tr className="border-b border-stone-200"><td className="p-3"><code>webmcp-registered-tools</code></td><td className="p-3">No</td><td className="p-3">Not applicable without WebMCP</td></tr>
                                <tr><td className="p-3"><code>webmcp-schema-validity</code></td><td className="p-3">No</td><td className="p-3">Not applicable without WebMCP</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <BlogText>
                        This is why two sites can show different denominators and neither is broken. Implement WebMCP
                        and the count grows; skip it, as almost everyone has, and you are scored out of three.
                    </BlogText>

                    <BlogHeader id="fix-each-check">How do you fix each of the three?</BlogHeader>

                    <BlogText>
                        Read which audit failed before touching anything, because the three have nothing in common and
                        the wrong fix costs a week. Below is what each failure means and where the work actually sits.
                    </BlogText>

                    <BlogHighlight>
                        The figures in this section come from PageSpeed Insights runs we made on 29 August 2026
                        against live third-party sites. Those sites are not named. Publishing a company&apos;s failing
                        audit alongside a pitch is a thing we would rather not do to a stranger.
                    </BlogHighlight>

                    <h3 className="mt-8 mb-3 text-xl font-bold text-charcoal">Accessibility tree is well-formed</h3>
                    <BlogText>
                        This fails when controls have no accessible name, headings skip levels, landmarks are missing,
                        or interactive elements are built from divs with click handlers rather than buttons and links.
                        An assistant reads your page through roughly the structure a screen reader uses, so the fix is
                        ordinary semantic HTML: real buttons, labelled form fields, headings in order, alt text that
                        describes the image. There is no AI-specific markup to add. A page-builder site fails this
                        most often because the builder emits nested divs where elements should be, which is also why
                        the fix is sometimes the template rather than the page.
                    </BlogText>

                    <h3 className="mt-8 mb-3 text-xl font-bold text-charcoal">Cumulative Layout Shift</h3>
                    <BlogText>
                        The threshold is 0.1 or below. One site we measured returned 0.906, roughly nine times over.
                        Layout shift comes from images and embeds without dimensions, fonts that swap after paint,
                        cookie banners and chat widgets injected late, and ads that reserve no space. It is the most
                        mechanical of the three to fix and the most commonly ignored, because it looks like a design
                        nuisance rather than a machine-readability problem. Set explicit width and height on media,
                        reserve space for anything injected, and load fonts so they do not reflow the page.
                    </BlogText>

                    <h3 className="mt-8 mb-3 text-xl font-bold text-charcoal">llms.txt follows recommendations</h3>
                    <BlogText>
                        This one is a single file at the root of your domain, and it is the cheapest point on the
                        board. The most common failure is not a malformed file but no file at all; on one site we
                        tested the audit reported the fetch had timed out, which counts the same as absent.
                    </BlogText>
                    <BlogText>
                        Be clear about what you are buying, though. We have written separately about how rarely
                        answer engines request this file. Passing this audit earns a Lighthouse point and does not,
                        on the evidence we have, meaningfully change whether an assistant quotes you. Add it because
                        it is ten minutes of work and a check on a report someone will run, not because it is the
                        thing that gets you cited. Anyone selling llms.txt as an AI visibility strategy is selling
                        you the easiest third of an experimental score.
                    </BlogText>

                    <BlogHeader id="how-to-pass">How to Test and Resolve the Current Checks</BlogHeader>

                    <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                        <p className="text-sm text-stone-700 leading-relaxed">Run the current category in its required Chrome version, save the report, and resolve each reported failure on the named page. Platform labels do not determine the outcome. Test semantic names and relationships, layout stability, llms.txt only where intended, and any registered WebMCP tools under their actual conditions.</p>
                    </div>

                    <BlogText>
                        Diagnose before choosing a fix. A missing accessible name may be a component defect; layout movement may come from dimensions, fonts, ads, consent tools, or injected content; a tool-registration failure may be configuration or timing. Some sites need targeted repairs. A migration is appropriate when the current platform or architecture blocks the agreed controls, not merely because one experimental audit failed.
                    </BlogText>

                    <div className="my-8 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get Your Migration Plan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-600 mt-3">Share your URL, platform, and target journey. We will scope the current checks and their limits.</p>
                    </div>

                    <BlogHeader id="what-to-do-now">What to Do Now</BlogHeader>
                    <BlogText>
                        The trap with anything labeled &ldquo;the future of the web&rdquo; is overbuilding for a standard that has not landed. So here is the honest sequence, in order.
                    </BlogText>
                    <BlogList items={[
                        <>{"Record the current Chrome and "}<Link href="/blog/how-to-achieve-100-pagespeed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Lighthouse</Link>{" versions, URL, page state, consent state, viewport, and individual audit output."}</>,
                        "Fix semantic and accessibility defects because they affect people and supported agents, then regression-test the actual controls.",
                        "Treat llms.txt as a maintainable discovery file for named consumers, not a ranking or citation lever.",
                        "Prototype WebMCP only for a defined journey with security, privacy, fallback, origin-trial, and acceptance requirements.",
                        "Measure agent task completion, referrals, and sales separately from the Lighthouse pass ratio.",
                        "Watch for one specific trigger: the point at which the WebMCP audits stop reporting Not Applicable for ordinary sites and start being scored. That is the signal that the action layer is worth building, and it costs nothing to wait for.",
                    ]} />

                    <BlogHeader id="bottom-line">The Bottom Line</BlogHeader>
                    <BlogText>
                        Lighthouse&apos;s experimental category is useful when treated as a versioned diagnostic. It highlights selected accessibility, stability, discoverability, and tool-registration conditions. It does not rank your site, certify every agent, or forecast business results.
                    </BlogText>
                    <BlogText>
                        If these checks are relevant to a migration, we can put the supported pages, environment, audit version, pass criteria, and exclusions into the accepted scope. The primary deliverable is a tested migration plan, not an open-ended promise that every future audit or agent will pass.
                    </BlogText>

                    <div className="my-6 md:my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <Bot className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Put the Right Checks in Your Migration Plan</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We will identify the relevant accessibility, stability, rendering, and agent-task checks, then define what can be accepted and what remains product-controlled.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Get Your Migration Plan <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                        <p className="text-xs text-stone-400 mt-4">Share the URL, platform, and target journey so the test scope is explicit.</p>
                    </div>

                    <section className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                        <h2 className="text-xl font-bold text-charcoal mb-3">Primary references checked July 31, 2026</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a className="text-cognac underline underline-offset-4" href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring" target="_blank" rel="noreferrer">Chrome: Lighthouse Agentic Browsing scoring</a></li>
                            <li><a className="text-cognac underline underline-offset-4" href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noreferrer">OpenAI: publishers and developers FAQ</a></li>
                            <li><a className="text-cognac underline underline-offset-4" href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer">W3C: WAI-ARIA Authoring Practices</a></li>
                        </ul>
                    </section>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <section className="mb-10 mt-8 md:mt-10">
                        <h2 className="text-xl font-bold text-stone-900 mb-3">Related Reading</h2>
                        <p className="text-stone-700 leading-relaxed mb-3">
                            For an adjacent commerce protocol, see our review of <Link href="/blog/google-universal-commerce-protocol-what-it-means-for-your-store" className="text-cognac hover:underline font-medium">Google&apos;s Universal Commerce Protocol</Link>. For a separate measurement problem, read <Link href="/blog/spending-more-on-ads-fewer-orders-tracking" className="text-cognac hover:underline font-medium">how to investigate ad-tracking gaps</Link>. For the terminology used across these pieces, see the <Link href="/blog/aeo-web-performance-glossary" className="text-cognac hover:underline font-medium">AEO and web performance glossary</Link>. And for our bounded approach to AI-search eligibility, see <Link href="/ai-info" className="text-cognac hover:underline font-medium">how PandaCodeGen approaches AI search</Link>.
                        </p>
                    </section>

                    <TopicUpLink postId="agentic-browsing-pagespeed-score" />

                    <RelatedPosts currentPostId="agentic-browsing-pagespeed-score" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
