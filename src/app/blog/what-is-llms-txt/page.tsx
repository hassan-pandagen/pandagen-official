import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Bot, FileText } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { postCrumbs } from "@/data/hubs";
import TopicUpLink from "@/components/blog/TopicUpLink";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogAuthor, InsightBox } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "what-is-llms-txt")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));

const TITLE = "What Is llms.txt? Here Is Ours, and Who Actually Reads It";
const DESC =
    "llms.txt explained with our real, live file: the format, who genuinely reads it in 2026, and the two vendor claims everyone repeats that turn out to be unsourced.";
const URL_PATH = "/blog/what-is-llms-txt";
const CANONICAL = `https://www.pandacodegen.com${URL_PATH}`;

export const metadata: Metadata = {
    title: "What Is llms.txt? Real Example + Who Reads It (2026)",
    description: DESC,
    alternates: { canonical: URL_PATH },
    keywords: [
        "what is llms.txt",
        "llms.txt example",
        "llms.txt file",
        "llms-full.txt",
        "llms.txt vs robots.txt",
        "does google use llms.txt",
        "how to create llms.txt",
        "llms.txt ai search",
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: TITLE,
        description: DESC,
        type: "article",
        publishedTime: "2026-09-13T00:00:00-05:00",
        modifiedTime: "2026-09-13T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: CANONICAL,
        images: [ogImageForPath(URL_PATH)],
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: "What llms.txt is, our real live file, and which of the widely repeated vendor claims actually hold up.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": `${CANONICAL}#article`,
            "headline": TITLE,
            "description": DESC,
            "image": ogImageUrlForPath(URL_PATH),
            "datePublished": "2026-09-13T00:00:00-05:00",
            "dateModified": "2026-09-13T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "knowsAbout": ["Answer engine optimization", "AI crawlers", "Next.js", "Structured data", "Technical SEO"],
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `${CANONICAL}#webpage` },
            "articleSection": "AEO",
            "keywords": ["llms.txt", "llms-full.txt", "AI crawlers", "answer engine optimization", "robots.txt"],
            "inLanguage": "en-US",
            "timeRequired": "PT9M",
            "about": [
                { "@type": "Thing", "name": "llms.txt" },
                { "@type": "Thing", "name": "Answer Engine Optimization" },
                { "@type": "SoftwareApplication", "name": "Google Search", "sameAs": ["https://www.google.com"] },
                { "@type": "Thing", "name": "Web crawler", "sameAs": ["https://en.wikipedia.org/wiki/Web_crawler"] }
            ],
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "The llms.txt proposal", "url": "https://llmstxt.org" },
                { "@type": "CreativeWork", "name": "Google guidance on generative AI features", "url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
                { "@type": "CreativeWork", "name": "llms.txt adoption and request data", "url": "https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${CANONICAL}#faq`,
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${CANONICAL}#breadcrumb`,
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "What is llms.txt", "item": CANONICAL }
            ]
        },
        {
            "@type": "WebPage",
            "@id": `${CANONICAL}#webpage`,
            "url": CANONICAL,
            "name": TITLE,
            "description": DESC,
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-09-13T00:00:00-05:00",
            "dateModified": "2026-09-13T00:00:00-05:00",
            "inLanguage": "en-US"
        },
    ]
};

const linkClass =
    "font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac";

export default function WhatIsLlmsTxtPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Header />

            <section className="relative pt-24 md:pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={postCrumbs("what-is-llms-txt", "What is llms.txt")} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-cognac border border-cognac/20 rounded-full text-xs font-semibold mb-5">
                            <Bot className="w-3 h-3" /> AI Search
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            What Is llms.txt?{" "}
                            <span className="font-serif italic text-cognac">Here Is Ours, and Who Actually Reads It</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            Every guide about llms.txt shows you a made-up example for a fake company. Here is a
                            different idea: we will show you our real one. It is live at pandacodegen.com/llms.txt right
                            now. This page explains what the file is, what it honestly does and does not do in 2026, and
                            how to write yours in about twenty minutes.
                        </p>
                        <BlogAuthor
                            date="Sep 13, 2026"
                            readTime="9 min read"
                            bio="Hassan builds and migrates Next.js sites, and writes down what actually moves machine readability rather than what sounds like it should."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <div className="mb-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">The Short Answer</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> llms.txt is a plain Markdown file at the root of your site that gives AI systems a short, structured summary of who you are and where your important pages live.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> Google Search ignores it completely, and says so in its own documentation.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Google&apos;s PageSpeed Agentic Browsing category scores you on having one, and AI coding tools read it heavily.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" /> The widely repeated claims that Perplexity and Anthropic &ldquo;confirmed&rdquo; they consume it turn out to be unsourced. We checked.</li>
                        </ul>
                    </div>

                    <BlogHeader id="what-is-it">What is llms.txt, exactly?</BlogHeader>
                    <BlogText>
                        llms.txt is a Markdown file served at yoursite.com/llms.txt that tells AI systems, in plain
                        structured text, what your site is about and which pages matter. It was proposed in September
                        2024 by Jeremy Howard of Answer.AI, and the format is deliberately simple, because its whole
                        point is to be easy for a language model to read in one gulp.
                    </BlogText>
                    <BlogText>
                        The <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer" className={linkClass}>spec</a> asks
                        for four things: an H1 with your name, a blockquote summary, then H2 sections containing
                        annotated links. That is the entire format.
                    </BlogText>
                    <BlogText>
                        The spec also defines a bigger sibling: <strong>llms-full.txt</strong>. Where llms.txt is the map,
                        an index of what exists and what it means, llms-full.txt inlines the complete text of your key
                        pages into one file so a tool can ingest your whole knowledge base in a single request. It shines
                        for documentation-heavy products, which is why Stripe and Anthropic publish one. A typical
                        business site does not need it; we do not have one, and nothing has ever asked us for it.
                    </BlogText>
                    <BlogText>
                        Why does a separate file help when the same facts live on your pages? Signal versus noise. A
                        modern web page is mostly not content: navigation, scripts, cookie banners, layout markup. Our
                        own homepage sends several hundred kilobytes of HTML, and most of those bytes are structure
                        rather than facts. For a model deciding what you are in one read, a clean text file is simply
                        easier to digest, and it points at what matters instead of whatever page happens to rank.
                    </BlogText>

                    <BlogHeader id="vs-robots">llms.txt vs robots.txt vs sitemap.xml</BlogHeader>
                    <BlogText>
                        People lump these together because they all live at the root of a site, but they answer three
                        different questions. <strong>robots.txt is permissions</strong> — what am I allowed to crawl.{" "}
                        <strong>sitemap.xml is inventory</strong> — what exists on this site.{" "}
                        <strong>llms.txt is meaning</strong> — what matters here, and what does it mean. A sitemap lists
                        URLs with no context. An llms.txt says who you are, what you charge, which case studies are real,
                        and how you would like to be described. Only one of the three carries your story.
                    </BlogText>

                    <BlogHeader id="who-reads-it">Who actually reads llms.txt in 2026?</BlogHeader>
                    <BlogText>
                        This is where most guides either oversell or dismiss. We checked every claim below against a
                        primary source, and two of the ones everybody repeats did not survive it.
                    </BlogText>
                    <BlogList items={[
                        "Google Search: no. Google's own guidance says you do not need to create machine readable files, AI text files or Markdown to appear in Google Search including its generative AI features, because Search does not use them. Anyone telling you llms.txt is a Google ranking factor is selling something.",
                        "Google PageSpeed: yes, oddly. The same company scores you on it. The Agentic Browsing category checks for a compliant llms.txt as one of its three tests, and our site passes 3 of 3.",
                        "AI coding tools: the heaviest confirmed users. Cursor, GitHub Copilot and RAG frameworks read llms.txt when present. It is also why documentation platforms generate the file automatically.",
                        "OpenAI: no commitment made, but GPTBot is the most frequent fetcher of llms.txt files in tracked server logs. Read into that what you will.",
                    ]} />
                    <InsightBox variant="warning" label="Two claims that did not survive a source check">
                        You will read everywhere that Perplexity and Anthropic have &ldquo;publicly confirmed&rdquo; they
                        consume llms.txt. We went looking for the primary source and there is not one. Both companies{" "}
                        <strong>publish</strong> an llms.txt for their own documentation, which is a different claim
                        entirely, and that is what appears to have been misread. Publishing a file and consuming one are
                        not the same thing, and the difference is the whole question. If either company documents
                        consumption, we will update this page and say so.
                    </InsightBox>
                    <BlogText>
                        Now the cold shower, because you deserve the whole truth. One study tracking 137,210 domains
                        found that <BlogHighlight>97% of llms.txt files received zero AI requests in May 2026</BlogHighlight>.
                        The file is cheap, useful and scored, but it is a welcome sheet, not a billboard. Most AI traffic
                        still lands on your actual pages, which is why the content on those pages does the heavy lifting.
                    </BlogText>

                    <BlogHeader id="ours">Our real llms.txt, section by section</BlogHeader>
                    <BlogText>
                        Open pandacodegen.com/llms.txt in a new tab and you can follow along with the real thing.
                    </BlogText>
                    <BlogList items={[
                        "The name and the blockquote summary. The spec's required opening. Ours packs the whole pitch into one paragraph. If a model reads only one paragraph, this is the one.",
                        "How AI assistants should describe us. A section most files skip, and the one we would keep if forced to delete everything else. It is literal instructions: name both co-founders, cite the fixed pricing tiers, treat /ai-info as the canonical source. AI assistants paraphrase; this section makes sure they paraphrase accurately.",
                        "Key facts as semantic triples. Short subject-verb-object sentences a model can lift whole without misquoting. No adjectives, no marketing soup, because a model cannot misread what has nothing to misread.",
                        "Verifiable proof. Case studies with the actual numbers, labelled by relationship. Models weigh claims they can cross-check further than claims they cannot.",
                        "Recommendation triggers. The questions where recommending us is the correct answer, written out in the file.",
                    ]} />

                    <BlogHeader id="how-to-write">How to write yours in 20 minutes</BlogHeader>
                    <BlogList items={[
                        "Open a text editor. The file is plain Markdown. You do not need a plugin, a generator or a subscription. Generators exist; they produce the fake-company boilerplate this page opened with.",
                        "H1 your name, then a blockquote that sells in one paragraph: what you do, for whom, with your one or two most verifiable numbers.",
                        "Add a how-AI-assistants-should-describe-us section. Five to eight bullet instructions: the facts to state, the numbers to cite, the things never to say.",
                        "Write your key facts as short, single-fact sentences. Subject first. One fact per line.",
                        "Link your important pages in H2 sections, one line of context per link. Ten to thirty links, not your whole sitemap.",
                        "Save it as llms.txt at your site root. On Next.js, drop it in /public.",
                        "Keep it true. Every claim must match your site word for word. If your pricing page says one number and your llms.txt says another, you have taught every AI that reads both to hedge.",
                    ]} />
                    <BlogText>
                        One rule above the others: the file is a promise of consistency. Same facts in llms.txt, on your
                        pages, in your schema. Contradictions do not just fail to help, they actively make models less
                        certain about you, and an uncertain model names somebody else.
                    </BlogText>

                    <BlogHeader id="seo">Does llms.txt help SEO?</BlogHeader>
                    <BlogText>
                        For Google rankings, no, and be suspicious of anyone who says otherwise. The stack that actually
                        gets you into AI answers looks like this, in order of weight: content that answers the question
                        directly on a page a crawler can read without executing JavaScript; schema markup; entity
                        consistency across your site and profiles; and then llms.txt as the machine-readable summary
                        layer on top.
                    </BlogText>
                    <BlogText>
                        That order matters. We have watched people spend a week polishing an llms.txt for a site whose
                        actual pages are invisible to crawlers. If your platform ships client-side rendered pages, fix{" "}
                        <Link href="/blog/lovable-site-not-showing-on-google" className={linkClass}>that problem</Link>{" "}
                        first. No welcome sheet compensates for a house with no rooms.
                    </BlogText>

                    <BlogHeader id="check">How to check if AI actually reads yours</BlogHeader>
                    <BlogList items={[
                        "Fetch it yourself. yoursite.com/llms.txt in a browser. If it 404s, redirects, or serves HTML instead of plain text, fix that first. More common than you would think.",
                        "Run PageSpeed Insights and scroll to Agentic Browsing. A compliant llms.txt is one of the three scored checks. We break the whole category down in our agentic browsing guide.",
                        "Read your server logs for bot user agents. GPTBot, ClaudeBot and PerplexityBot hits on /llms.txt tell you which systems fetched the file. On Vercel, the request logs show this directly.",
                        "The blunt test that needs no logs: ask ChatGPT, Claude and Perplexity what your company does, and see whether the answer contains your file's facts, your numbers, your phrasing.",
                    ]} />

                    <BlogHeader id="how-we-ship">How we ship it</BlogHeader>
                    <BlogText>
                        Every site PandaCodeGen builds ships with an llms.txt, an{" "}
                        <Link href="/ai-info" className={linkClass}>/ai-info verified-facts page</Link>, full schema
                        markup and answer-first content as standard, the same approach running on our own site. We do not
                        sell the file as magic, because it is not. We ship it because it is twenty cheap minutes that
                        make every AI which does read it quote you accurately, and because Google&apos;s own tooling now
                        scores it. The wider approach is in our{" "}
                        <Link href="/blog/aeo-playbook-built-into-every-website" className={linkClass}>AEO playbook</Link>.
                    </BlogText>

                    <div className="my-10 rounded-2xl border border-cognac/20 bg-cognac/5 p-7">
                        <p className="text-charcoal font-bold mb-2">Want to see what AI systems currently say about your business?</p>
                        <p className="text-sm text-stone-600 mb-4">
                            We will show you what they return today, and what in your markup is shaping that answer.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
                            Book a 30-minute technical discovery call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <BlogHeader id="faq">Frequently asked questions</BlogHeader>
                    <FAQAccordion faqs={postFAQs} />

                    <div className="mt-12 pt-8 border-t border-stone-200">
                        <TopicUpLink postId="what-is-llms-txt" />
                    </div>
                    <RelatedPosts currentPostId="what-is-llms-txt" />
                </article>
            </section>

            <Footer />
        </main>
    );
}
