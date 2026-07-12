import { ArrowLeft, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox, CodeWindow, ComparisonGrid, StatCard } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "lovable-site-not-showing-on-google")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/CrawlerBlindAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Lovable Site Not on Google? The AI-Builder SEO Fix (2026)",
    description: "Your Lovable, Bolt, or v0 site looks great but Google and ChatGPT see an empty page. The client-side rendering problem, a 60-second test, and the real fix.",
    alternates: {
        canonical: "/blog/lovable-site-not-showing-on-google",
    },
    keywords: [
        "lovable site not showing on google",
        "lovable seo problems",
        "migrate lovable app to next.js",
        "bolt.new website seo",
        "v0 website not indexed",
        "ai website builder seo problems",
        "client side rendering seo",
        "server side rendering vs client side rendering",
        "can google crawl react websites",
        "do ai crawlers read javascript",
        "react spa not indexed by google",
        "how to make a react website crawlable"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "Lovable Site Not on Google? The AI-Builder SEO Fix (2026)",
        description: "Your Lovable, Bolt, or v0 site looks great but Google and ChatGPT see an empty page. The client-side rendering problem, a 60-second test, and the real fix.",
        type: "article",
        publishedTime: "2026-07-12",
        modifiedTime: "2026-07-12",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lovable Site Not on Google? The AI-Builder SEO Fix (2026)",
        description: "Your Lovable, Bolt, or v0 site looks great but Google and ChatGPT see an empty page. The client-side rendering problem, a 60-second test, and the real fix.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google#article",
            "headline": "Your Lovable Site Looks Great. Google Sees an Empty Page.",
            "description": "Why Lovable, Bolt, and React sites built with AI builders don't show up on Google or in ChatGPT answers: client-side rendering. The 60-second test and the Next.js migration fix.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-07-12T00:00:00-05:00",
            "dateModified": "2026-07-12T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google" },
            "articleSection": "AEO",
            "keywords": ["lovable site not showing on google", "client side rendering seo", "do ai crawlers read javascript", "migrate lovable app to next.js", "react spa not indexed", "ai website builder seo"],
            "wordCount": 2700,
            "timeRequired": "PT10M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "Client-Side Rendering" },
                { "@type": "Thing", "name": "Server-Side Rendering" },
                { "@type": "SoftwareApplication", "name": "Lovable" },
                { "@type": "SoftwareApplication", "name": "Next.js" },
                { "@type": "Thing", "name": "AI Crawlers" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Lovable Site Not Showing on Google", "item": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google#webpage",
            "url": "https://www.pandacodegen.com/blog/lovable-site-not-showing-on-google",
            "name": "Your Lovable Site Looks Great. Google Sees an Empty Page.",
            "description": "Why AI-built Lovable, Bolt, and React sites don't show up on Google or in ChatGPT answers, and the Next.js migration fix.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-07-12T00:00:00-05:00",
            "dateModified": "2026-07-12T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites engineered to get cited by AI search, and migrates AI-built apps (Lovable, Bolt, v0) to server-rendered Next.js with a written 90+ PageSpeed guarantee.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function LovableSiteNotShowingPage() {
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
                        { label: "Lovable Site Not Showing on Google" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold mb-4">
                            <Bot className="w-3 h-3" /> AI Search · Guide
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            Your Lovable Site Looks Great.{" "}
                            <span className="font-serif italic text-cognac">Google Sees an Empty Page.</span>
                        </h1>
                        <p className="text-lg text-stone-500 leading-relaxed mb-6">
                            You built it in an afternoon, it looks professional, and it gets zero Google traffic. The problem is not your content or a penalty. It is how AI builders deliver your pages to crawlers. Here is the diagnosis, a 60-second test, and the fix.
                        </p>
                        <BlogAuthor
                            date="Jul 12, 2026"
                            readTime="10 min read"
                            bio="Hassan builds custom Next.js sites engineered to be read by AI crawlers. His own homepage sends 747 KB of crawlable HTML and is already cited by ChatGPT, Claude, and Perplexity."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <FeatureVisual />
                    </div>

                    {/* Executive Summary */}
                    <div
                        className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12"
                        data-speakable="true"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Key Facts</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Lovable, Bolt, and Replit generate client-side rendered React apps: the server sends a nearly empty HTML shell and JavaScript paints the content in the visitor&apos;s browser
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                As of June 2026, no major AI crawler executes JavaScript: GPTBot, ClaudeBot, and PerplexityBot read raw HTML only, so a client-side rendered site is invisible to AI answers
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                Google can render JavaScript, but slowly and unreliably, so CSR React sites index late, partially, or not at all
                            </li>
                            <li className="flex items-start gap-2 text-sm text-charcoal">
                                <span className="text-cognac mt-0.5">•</span>
                                The durable fix is migrating to server-rendered Next.js: your React components port over, and the server sends finished HTML to every visitor and every bot
                            </li>
                        </ul>
                    </div>

                    {/* Article body */}
                    <div className="space-y-8">

                        <BlogText>
                            You built your site, it looks great in your browser, and everyone you send the link to can see it. Then you Google your business name and find nothing. Weeks later, still nothing.
                        </BlogText>

                        <BlogText>
                            We can show you why with one simple test. When a robot visits your website, whether that is Google&apos;s crawler or ChatGPT&apos;s, it does not open the page the way you do. It knocks on your server&apos;s door, asks &ldquo;what have you got for this page?&rdquo;, and reads whatever text comes back. No browser, no waiting, no running your code.
                        </BlogText>

                        <BlogText>
                            We just asked our own homepage that question, the same way OpenAI&apos;s robot would:
                        </BlogText>

                        <CodeWindow filename="terminal">{`curl -A "GPTBot" https://www.pandacodegen.com/`}</CodeWindow>

                        <BlogText>
                            Back came <BlogHighlight>747,347 bytes of HTML</BlogHighlight>: our pricing, our founders&apos; names, our 90+ PageSpeed guarantee, every FAQ. Everything, readable, without running a single line of JavaScript. The command works on any site, including yours.
                        </BlogText>

                        <BlogText>
                            Ask a default Lovable, Bolt, or plain React site the same question, and this is the entire reply:
                        </BlogText>

                        <CodeWindow filename="what-the-bot-gets.html">{`<!DOCTYPE html>
<html>
  <head><script src="/assets/index-4f2a.js"></script></head>
  <body><div id="root"></div></body>
</html>`}</CodeWindow>

                        <BlogText>
                            About one kilobyte. An empty div and a script tag. That div is where your entire website is supposed to appear, after JavaScript runs. But the crawler never runs it. To Google&apos;s first pass, and to ChatGPT, Claude, and Perplexity permanently, your site is a blank page with a loading spinner.
                        </BlogText>

                        <BlogText>
                            That is the whole mystery. Your site is not penalized, not sandboxed, not too new. <BlogHighlight>It is invisible.</BlogHighlight>
                        </BlogText>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                            <StatCard stat="747 KB" label="Raw HTML our homepage sends a bot" context="Fetched as GPTBot, Jul 2026" />
                            <StatCard stat="~1 KB" label="What a default AI-built site sends" context="An empty div and a script tag" />
                            <StatCard stat="0" label="Major AI crawlers that run JavaScript" context="GPTBot, ClaudeBot, PerplexityBot, June 2026" />
                        </div>

                        <InsightBox variant="info" label="Quick Answer, in Plain English">
                            Most AI app builders deliver your website like a meal kit instead of a cooked meal. The server sends raw ingredients and a recipe card (the JavaScript), and every visitor&apos;s browser has to cook the page itself. That is client-side rendering. Human browsers cook it without complaining, so the site looks fine to you. Robots won&apos;t cook: Google gets around to it eventually, slowly and not always, and AI crawlers like ChatGPT&apos;s and Claude&apos;s never cook at all. They open the box, see raw ingredients instead of a page, and recommend the competitor whose site arrived ready to eat. The fix is server-side rendering: migrate to Next.js and the kitchen (your server) sends everyone a finished page. Same recipe, cooked before delivery.
                        </InsightBox>

                        <BlogHeader>Why is my Lovable site not showing on Google?</BlogHeader>

                        <BlogText>
                            Because Lovable builds client-side rendered React single-page apps by default, and client-side rendering hides your content from crawlers. The site works in your browser because your browser executes JavaScript. Crawlers mostly do not.
                        </BlogText>

                        <BlogText>
                            This catches a lot of smart people off guard, and the numbers explain why. AI app builders are a roughly $4.7 billion market, 63% of their users are not developers, and Lovable alone raised $330M at a $6.6B valuation in late 2025. The pitch is &ldquo;describe your app, ship it today,&rdquo; and for the app part, it delivers. We said as much in our <Link href="/blog/cheap-web-developer" className="text-cognac underline hover:no-underline">guide to hiring cheap web developers</Link>: vibe coding is genuinely cheap to start. The part nobody mentions in the demo video is that &ldquo;ship it&rdquo; and &ldquo;be found&rdquo; are different problems.
                        </BlogText>

                        <BlogText>
                            To be clear about what is NOT wrong: your domain is fine, your content is fine, and you did not get penalized. The HTML your server sends to crawlers is simply empty. Fix the rendering and the rest of your SEO finally has something to work with.
                        </BlogText>

                        <BlogHeader>First, rule out the boring causes (2 minutes)</BlogHeader>

                        <BlogText>
                            Rendering is the big structural problem, but before you blame architecture, check four small things that produce the same symptom:
                        </BlogText>

                        <BlogList items={[
                            "Your site is days old. Google takes days to weeks to index a brand-new domain even when everything is perfect. No sitemap trick beats waiting.",
                            "No Search Console property. Add your domain to Google Search Console, submit the sitemap, and use URL Inspection plus Request Indexing on your key pages.",
                            "A leftover noindex. View source and search for \"noindex\". Staging settings have shipped to production before.",
                            "Two competing addresses. See the lovable.app trap below.",
                        ]} />

                        <InsightBox variant="warning" label="The lovable.app Trap">
                            Lovable publishes your site to a yoursite.lovable.app subdomain first. If you connected a custom domain later and both stayed live, Google often keeps indexing and promoting the old lovable.app URL instead of your real domain. There are Google support threads from frustrated owners about exactly this. The fix: make the lovable.app version point to your custom domain as the canonical, or redirect it entirely, so Google consolidates to one address.
                        </InsightBox>

                        <BlogText>
                            If all four check out and you are still invisible weeks later, the architecture is your answer, so keep reading.
                        </BlogText>

                        <BlogHeader>What is client-side rendering, and why does it hide your site?</BlogHeader>

                        <BlogText>
                            Client-side rendering (CSR) means the server sends a skeleton and the visitor&apos;s browser assembles the page. Server-side rendering (SSR) means the server assembles the page and sends finished HTML. Same React components, opposite delivery order, and the difference decides whether a crawler sees your content or an empty div.
                        </BlogText>

                        <ComparisonGrid
                            left={{
                                label: "CSR (default Lovable/Bolt)",
                                items: [
                                    "Server sends an empty div plus script tags",
                                    "Headline, prices, testimonials absent until JavaScript runs",
                                    "Bytes of readable content: near zero",
                                    "AI crawlers see a blank page, permanently",
                                ],
                            }}
                            right={{
                                label: "SSR (Next.js)",
                                items: [
                                    "Server sends the full finished page",
                                    "Headline in an h1, prices in the markup, FAQs as text",
                                    "Our homepage sends 747 KB of readable HTML",
                                    "Every bot and every visitor gets the same content",
                                ],
                            }}
                        />

                        <BlogText>
                            One nuance so we are being fair: modern CSR is fine for things that live behind a login. Dashboards, internal tools, the app part of your app. Nobody needs Google to index your settings page. The problem is using CSR for the public marketing site, the pages that exist specifically to be found.
                        </BlogText>

                        <BlogHeader>Do AI crawlers read JavaScript? (No. Here is the June 2026 list.)</BlogHeader>

                        <BlogText>
                            As of June 2026, none of the major AI crawlers execute JavaScript:
                        </BlogText>

                        <BlogList items={[
                            "GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI): raw HTML only",
                            "ClaudeBot, Claude-SearchBot (Anthropic): raw HTML only",
                            "PerplexityBot: raw HTML only",
                            "Meta-ExternalAgent, Bytespider: raw HTML only",
                            "Google Gemini: the one exception, because it rides Googlebot's rendering infrastructure",
                        ]} />

                        <BlogText>
                            Vercel&apos;s crawler study found something almost funny: ChatGPT&apos;s crawler downloads JavaScript files (about 11.5% of its requests) and Claude&apos;s does too (about 23.8%). They fetch the files. They just never execute them. The content your JavaScript would have painted stays painted nowhere.
                        </BlogText>

                        <BlogText>
                            And this traffic is no longer a rounding error. The same study measured nearly <BlogHighlight>1.3 billion combined fetches</BlogHighlight> from the major AI crawlers, over a quarter of Googlebot&apos;s volume. Your buyers ask ChatGPT who to hire and Perplexity what to buy. If your site is CSR, the answer engines are building their answers from an empty page, which means the answer is your competitor.
                        </BlogText>

                        <BlogText>
                            This is the exact machinery behind <Link href="/blog/aeo-playbook-built-into-every-website" className="text-cognac underline hover:no-underline">getting cited by AI search</Link>, and it is why PandaCodeGen builds every site server-rendered: a crawler that reads only raw HTML still gets the whole page. Our own site is already cited by ChatGPT, Claude, and Perplexity, and readable raw HTML is step zero of how.
                        </BlogText>

                        <BlogText>
                            Google now grades this readiness directly. In May 2026, PageSpeed Insights added an <Link href="/blog/agentic-browsing-pagespeed-score" className="text-cognac underline hover:no-underline">Agentic Browsing category</Link> that scores whether AI agents can read and act on your site. We publish our receipts: pandacodegen.com scores 3 of 3 on Agentic Browsing, right next to its 90+ PageSpeed score.
                        </BlogText>

                        <figure className="my-8">
                            <img
                                src="/blog-images/agentic-browsing-3-of-3.png"
                                alt="Google PageSpeed Insights showing pandacodegen.com passing 3 of 3 Agentic Browsing checks: a well-formed accessibility tree, a stable layout, and a compliant llms.txt file"
                                width={1200}
                                height={700}
                                loading="lazy"
                                className="w-full h-auto rounded-xl border border-stone-200"
                            />
                            <figcaption className="text-xs text-stone-500 mt-2 text-center">
                                Google PageSpeed Insights, pandacodegen.com: 3 of 3 on the scored Agentic Browsing checks. Your site gets the same report card free, and pulling it is the last item in the test below.
                            </figcaption>
                        </figure>

                        <BlogHeader>Can Google crawl React websites?</BlogHeader>

                        <BlogText>
                            Yes, technically. Reliably, no. Google is the only search engine with real JavaScript rendering at scale, and even there your CSR site goes through two waves: first the raw HTML (empty, remember), then a rendering queue where a headless Chrome executes your JavaScript when resources allow. That second wave can lag by days, spend your crawl budget, and fail silently on script errors, blocked resources, or timeouts.
                        </BlogText>

                        <BlogText>
                            In practice, that means CSR React sites index late, partially, or not at all, and every content update repeats the same lottery. &ldquo;Can Google crawl React?&rdquo; is the wrong question. The right one is: why make the only search engine that can render JavaScript do extra unreliable work, while every AI crawler that cannot render it sees nothing? SSR removes the gamble for both.
                        </BlogText>

                        <BlogHeader>Which AI builders have this problem? Lovable vs Bolt vs Replit vs v0</BlogHeader>

                        <BlogText>
                            Not all AI builders output the same thing, so check yours specifically:
                        </BlogText>

                        <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 swipe-hint">← Swipe to see more →</p>
                        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
                            <table className="w-full border-collapse text-sm min-w-[560px] responsive-stack-table">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Builder</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Default output</th>
                                        <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">What crawlers see</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Lovable</td>
                                        <td data-label="Default output" className="border border-stone-300 px-4 py-3 text-stone-700">React SPA, client-side rendered</td>
                                        <td data-label="What crawlers see" className="border border-stone-300 px-4 py-3 text-stone-700">Empty shell</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Bolt.new</td>
                                        <td data-label="Default output" className="border border-stone-300 px-4 py-3 text-stone-700">Vite React SPA (varies by prompt)</td>
                                        <td data-label="What crawlers see" className="border border-stone-300 px-4 py-3 text-stone-700">Usually an empty shell</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">Replit</td>
                                        <td data-label="Default output" className="border border-stone-300 px-4 py-3 text-stone-700">Varies widely by stack chosen</td>
                                        <td data-label="What crawlers see" className="border border-stone-300 px-4 py-3 text-stone-700">Usually CSR for web apps</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="border border-stone-300 px-4 py-3 text-charcoal font-medium">v0 (Vercel)</td>
                                        <td data-label="Default output" className="border border-stone-300 px-4 py-3 text-stone-700">Next.js, server-rendered</td>
                                        <td data-label="What crawlers see" className="border border-stone-300 px-4 py-3 text-stone-700">Real HTML by default</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <BlogText>
                            v0 is the exception because Vercel built it to output Next.js with server rendering, metadata, and structured data by default. If you are still choosing a builder and search visibility matters, that difference outweighs every other feature on the pricing page.
                        </BlogText>

                        <BlogText>
                            If you are already on Lovable or Bolt, the builders themselves are aware of the gap and keep adjusting their output options, but as of July 2026 the default export for both is still a client-side rendered SPA. Assume nothing, test your own site, which takes about a minute.
                        </BlogText>

                        <BlogHeader>How to check if your site is invisible (the 60-second test)</BlogHeader>

                        <BlogText>
                            Four ways, all free:
                        </BlogText>

                        <BlogList items={[
                            "View source, not Inspect. Right-click your live site, choose \"View page source\" (Ctrl+U). Now Ctrl+F for your main headline. Not there? Crawlers can't see it either. (Inspect shows the page after JavaScript, which is exactly the wrong view for this.)",
                            "Curl it like a bot. Run curl -A \"GPTBot\" https://yoursite.com/ in a terminal. You should get your actual content back, not an empty div and script tags. This is the test we ran on ourselves at the top of this post; run it on your site and compare byte counts.",
                            "Ask Google directly. Search Console, URL Inspection, \"View crawled page.\" The HTML tab shows literally what Googlebot received.",
                            "Pull your Agentic Browsing score. Go to pagespeed.web.dev, enter your URL, and scroll to the Agentic Browsing category. It asks the exact question this post is about: can an AI agent read your site? Ours shows 3 of 3. If your site ships as an empty shell, this is where it shows.",
                        ]} />

                        <BlogText>
                            If these come back empty, you have your diagnosis, and it is fixable.
                        </BlogText>

                        <BlogHeader>How to make a React site crawlable: your three real options</BlogHeader>

                        <BlogText>
                            <BlogHighlight>Option 1: Prerendering (the band-aid).</BlogHighlight> A service like Prerender.io renders your pages in a headless browser and serves the static snapshot to known bots. It works, and it is the only option that keeps you fully inside your AI builder&apos;s editor. But you are now maintaining a bot-detection layer against an ever-growing list of AI user agents, your human visitors still get the slow CSR experience, and you are renting yet another subscription to patch a problem the architecture created. Reasonable stopgap, wrong long-term home.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Option 2: Migrate the app to Next.js (the real fix).</BlogHighlight> Lovable and Bolt generate React, and Next.js is React with server rendering. Your components, styling, and logic largely port over; what changes is the delivery: the server now sends finished HTML to every visitor and every bot. This also fixes the speed problem CSR gives you for free, because visitors stop downloading and executing your whole app before seeing a headline. The honest cost: you leave the AI builder&apos;s chat-based editor and your site becomes a real codebase. For a marketing site that needs to be found, that trade is the whole point. Timeline-wise, an AI-built site is usually a small codebase, so expect the fast end of a <Link href="/blog/how-long-does-a-custom-website-take" className="text-cognac underline hover:no-underline">normal custom-site build</Link>, not a months-long rebuild.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>Option 3: Rebuild from scratch.</BlogHighlight> Sometimes AI-generated code is too tangled to port economically, and a clean Next.js build with the same design is faster than surgery. We quote this honestly when we see it, and it is less common than you would fear.
                        </BlogText>

                        <BlogText>
                            Worried a migration will torch the rankings you do have? For a CSR site there is usually little indexed to lose, and proper redirects preserve what exists. We wrote up exactly <Link href="/blog/will-migrating-hurt-my-seo" className="text-cognac underline hover:no-underline">how migration affects SEO</Link> if you want the full picture.
                        </BlogText>

                        <BlogHeader>How we fix it at PandaCodeGen</BlogHeader>

                        <BlogText>
                            PandaCodeGen migrates Lovable, Bolt, and v0 apps to server-rendered Next.js. It is the same migration work we do for <Link href="/services/custom-engineering" className="text-cognac underline hover:no-underline">WordPress and Shopify sites</Link>, just with a younger patient. The process:
                        </BlogText>

                        <BlogList items={[
                            "Crawlability audit first. We run the same raw-HTML tests above on every page of your site and show you exactly what bots currently see. We do this live on the discovery call, free, because it takes us minutes and it should not cost you anything to learn what curl already knows.",
                            "Port, don't rewrite. Your React components move into Next.js App Router server components. Design stays, invisibility goes.",
                            "Make it citable, not just crawlable. Schema.org structured data, semantic HTML, an llms.txt manifest, and answer-first copy: the full AEO playbook that got our own site cited by ChatGPT, Claude, and Perplexity.",
                            "Guarantee it in writing. Every build ships with our written 90+ Google PageSpeed guarantee. CSR sites usually arrive scoring in the 40s and 50s; server rendering is most of the cure. MyCustomPatches came to us at PageSpeed 45 and left at 90+, with hosting costs down from $150/month to $0.",
                            "You own the repo. Fixed pricing from $1,500, full source code handover, deployed to your accounts, no monthly retainer. The subscription you cancel might be the prerendering service you never needed.",
                        ]} />

                        <BlogText>
                            You built the site in an afternoon. Being found takes an architecture the builder didn&apos;t give you. That part is our job.
                        </BlogText>

                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-xl font-bold text-charcoal mb-2">Is Your AI-Built Site Invisible?</h3>
                        <p className="text-stone-500 text-sm mb-6">
                            Book a 30-minute technical discovery call, no sales pitch, and we&apos;ll run the GPTBot test on your site live, page by page.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-colors">
                            Book the Free Crawlability Check <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

                    <RelatedPosts currentPostId="lovable-site-not-showing-on-google" category="AEO" />

                </div>
            </section>

            <Footer />
        </main>
    );
}
