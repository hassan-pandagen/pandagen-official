import { ArrowLeft, ArrowRight, BookMarked, Hash } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHighlight, BlogAuthor, InsightBox, StatCard, ComparisonGrid } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const dynamic = "force-static";

const postFAQs = blogPosts.find(p => p.id === "aeo-web-performance-glossary")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

// Single source of truth for term list — drives the jump-nav AND the DefinedTermSet JSON-LD.
const TERMS: { id: string; term: string; group: string }[] = [
  { id: "aeo", term: "AEO (Answer Engine Optimization)", group: "AI Search & Answer Engines" },
  { id: "geo", term: "GEO (Generative Engine Optimization)", group: "AI Search & Answer Engines" },
  { id: "query-fan-out", term: "Query fan-out", group: "AI Search & Answer Engines" },
  { id: "rag", term: "RAG (Retrieval-Augmented Generation)", group: "AI Search & Answer Engines" },
  { id: "ai-crawlers", term: "AI crawlers (GPTBot, ClaudeBot, PerplexityBot)", group: "AI Search & Answer Engines" },
  { id: "semantic-triple", term: "Semantic triple", group: "AI Search & Answer Engines" },
  { id: "speakable", term: "Speakable", group: "AI Search & Answer Engines" },
  { id: "agentic-browsing", term: "Agentic browsing", group: "AI Search & Answer Engines" },
  { id: "llms-txt", term: "llms.txt", group: "AI Search & Answer Engines" },
  { id: "answer-first", term: "Answer-first writing", group: "AI Search & Answer Engines" },
  { id: "eeat", term: "E-E-A-T", group: "Structured Data & Entities" },
  { id: "csr", term: "CSR (Client-Side Rendering)", group: "Rendering & Crawlability" },
  { id: "ssr", term: "SSR (Server-Side Rendering)", group: "Rendering & Crawlability" },
  { id: "ssg", term: "SSG / Static rendering", group: "Rendering & Crawlability" },
  { id: "isr", term: "ISR (Incremental Static Regeneration)", group: "Rendering & Crawlability" },
  { id: "hydration", term: "Hydration", group: "Rendering & Crawlability" },
  { id: "crawlability", term: "Crawlability", group: "Rendering & Crawlability" },
  { id: "schema", term: "Schema / structured data / JSON-LD", group: "Structured Data & Entities" },
  { id: "knowledge-graph", term: "Knowledge Graph & entities", group: "Structured Data & Entities" },
  { id: "core-web-vitals", term: "Core Web Vitals (LCP, INP, CLS)", group: "Web Performance" },
  { id: "pagespeed", term: "PageSpeed & Lighthouse", group: "Web Performance" },
  { id: "ttfb", term: "TTFB (Time to First Byte)", group: "Web Performance" },
  { id: "redirect-301", term: "301 redirect", group: "Web Performance" },
];

const GROUPS = ["AI Search & Answer Engines", "Rendering & Crawlability", "Structured Data & Entities", "Web Performance"];

// Plain-text definitions for the DefinedTerm JSON-LD (same facts as the visible cards).
const DEFS: Record<string, string> = {
  "aeo": "Answer Engine Optimization: structuring a site so AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) extract and cite it in their synthesized answers, rather than optimizing purely for a ranked list of blue links.",
  "geo": "Generative Engine Optimization: a near-synonym for AEO, emphasizing visibility inside generative AI answers. In practice the terms are used interchangeably.",
  "query-fan-out": "The technique where an AI search system decomposes one query into many sub-questions, retrieves sources for each, and synthesizes a single answer. A page that answers several sub-questions gets cited across more of them.",
  "rag": "Retrieval-Augmented Generation: the method behind AI search where the model retrieves live web content, then generates an answer grounded in it. It is why fresh, extractable, well-structured pages get cited.",
  "ai-crawlers": "Bots that fetch web pages for AI systems, such as GPTBot and OAI-SearchBot (OpenAI), ClaudeBot (Anthropic), and PerplexityBot. As of 2026 they read raw HTML and do not execute JavaScript.",
  "semantic-triple": "A subject-predicate-object fact (for example, 'PandaCodeGen builds custom Next.js websites') that machines read cleanly. Consistent triples across a site help AI models understand and cite an entity accurately.",
  "speakable": "A Schema.org property that marks the sentences on a page best suited to be read aloud by voice assistants, signaling the most quotable, answer-first passages.",
  "agentic-browsing": "AI agents navigating and acting on a website on a user's behalf. Google added an Agentic Browsing category to PageSpeed Insights in 2026 that scores whether an agent can read and act on a page.",
  "llms-txt": "A plain-text Markdown file at a site's root that summarizes the site for AI systems. Google Search ignores it and most files receive no AI requests; its real, growing use is developer tools and AI coding assistants reading documentation.",
  "answer-first": "Writing so the direct answer to a section's question lands in the first 40 to 60 words, before any build-up. AI engines lift self-contained passages out of context, so an answer buried under an introduction usually goes uncited.",
  "eeat": "Experience, Expertise, Authoritativeness and Trust: Google's framework for who deserves to be believed. Trust is the outcome the other three feed. A named author with real first-hand experience of the topic is the practical expression of it.",
  "csr": "Client-Side Rendering: the server sends a near-empty HTML shell and the visitor's browser builds the page with JavaScript. Human browsers cope, but AI crawlers (which do not run JavaScript) see an empty page.",
  "ssr": "Server-Side Rendering: the server assembles the finished HTML and sends it complete, so every visitor and every crawler receives readable content on the first request.",
  "ssg": "Static Site Generation: pages are pre-built into finished HTML at build time and served instantly from a CDN. Fastest possible delivery for content that does not change per request.",
  "isr": "Incremental Static Regeneration: a Next.js feature that serves static pages but rebuilds them in the background on a schedule, combining static speed with fresh content.",
  "hydration": "The step where JavaScript attaches interactivity to server-rendered HTML in the browser. Heavy hydration can delay interactivity even when the page appears loaded.",
  "crawlability": "Whether search and AI bots can reach, fetch, and read a page's content. Blocked resources, client-side rendering, or a slow server all reduce crawlability.",
  "schema": "Schema.org structured data (usually written as JSON-LD) that describes a page's meaning to machines. It powers Google rich results, though AI answer engines extract visible HTML rather than hidden markup.",
  "knowledge-graph": "A machine-readable map of entities (people, companies, concepts) and their relationships. Consistent facts and structured data help a brand become a recognized entity that AI can cite confidently.",
  "core-web-vitals": "Google's user-experience metrics: Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). They are a confirmed ranking signal.",
  "pagespeed": "Google PageSpeed Insights and the Lighthouse engine behind it score a page 0-100 on performance and report the Core Web Vitals. A 90+ mobile score is the practical target.",
  "ttfb": "Time to First Byte: how long the server takes to send the first byte of a response. High TTFB delays everything after it and is often the hidden cause of a slow site.",
  "redirect-301": "A permanent redirect that forwards an old URL to a new one and passes its SEO value along. A complete 301 map is how a site migration preserves rankings.",
};

// ── Local visual components (glossary-specific, keeps the page from reading as a text wall) ──

function GroupHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="mt-16 mb-6 flex items-center gap-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-cognac shrink-0">{title}</h2>
      <span className="h-px flex-1 bg-stone-200" />
      <span className="text-xs font-medium text-stone-400 shrink-0">{count} terms</span>
    </div>
  );
}

function Term({ id, name, href, hrefLabel, example, ask, children }: { id: string; name: string; href?: string; hrefLabel?: string; example?: React.ReactNode; ask?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 group relative bg-white border border-stone-200 rounded-2xl p-6 md:p-7 shadow-xs hover:border-cognac/40 hover:shadow-md transition-all duration-300">
      <span aria-hidden className="absolute left-0 top-6 h-8 w-1 rounded-r bg-cognac/0 group-hover:bg-cognac/70 transition-colors duration-300" />
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-serif font-bold text-charcoal leading-tight mb-3">
        <a href={`#${id}`} className="hover:text-cognac transition-colors">{name}</a>
        <a href={`#${id}`} aria-label={`Link to ${name}`} className="opacity-0 group-hover:opacity-100 text-stone-300 hover:text-cognac transition-all">
          <Hash className="w-4 h-4" />
        </a>
      </h3>
      <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">{children}</p>
      {example && (
        <div className="mt-4 flex items-start gap-3 rounded-xl bg-cognac/5 border border-cognac/15 px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cognac shrink-0 pt-1">Example</span>
          <p className="text-sm text-stone-600 leading-relaxed">{example}</p>
        </div>
      )}
      {ask && (
        <div className="mt-3 flex items-start gap-3 rounded-xl bg-charcoal/[0.03] border border-charcoal/10 px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/60 shrink-0 pt-1">Ask your agency</span>
          <p className="text-sm text-stone-600 leading-relaxed">{ask}</p>
        </div>
      )}
      {href && hrefLabel && (
        <Link href={href} className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-cognac hover:gap-2.5 transition-all">
          {hrefLabel} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}

export const metadata: Metadata = {
  title: "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
  description: "AEO, GEO, CSR vs SSR, Core Web Vitals, llms.txt: 23 terms that decide whether your site gets found, in plain English. Each with why it matters and the exact question to ask your agency.",
  alternates: { canonical: "/blog/aeo-web-performance-glossary" },
  keywords: [
    "aeo glossary", "geo vs aeo", "what is answer engine optimization", "csr vs ssr", "core web vitals explained",
    "what is llms.txt", "llms.txt example", "query fan out", "ai crawlers gptbot claudebot", "semantic triples seo",
    "server side rendering vs client side rendering", "web performance glossary", "schema markup for ai search",
  ],
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: {
    title: "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
    description: "Plain-English definitions of the AI-search, rendering, and web-performance terms that decide whether your site gets found.",
    type: "article",
    publishedTime: "2026-07-16",
    modifiedTime: "2026-07-16",
    authors: ["Hassan Jamal"],
    url: "https://www.pandacodegen.com/blog/aeo-web-performance-glossary",
    images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO & Web Performance Glossary (2026)",
    description: "Plain-English definitions of the AI-search, rendering, and web-performance terms that decide whether your site gets found.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#article",
      "headline": "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
      "description": "Plain-English definitions of the AI-search, rendering, and web-performance terms that decide whether your site gets found by search engines and AI answer engines.",
      "image": "https://www.pandacodegen.com/og-image.jpg",
      "datePublished": "2026-07-16T00:00:00-05:00",
      "dateModified": "2026-07-16T00:00:00-05:00",
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
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary" },
      "articleSection": "AEO",
      "inLanguage": "en-US",
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#termset",
      "name": "AEO & Web Performance Glossary",
      "hasDefinedTerm": TERMS.map(t => ({
        "@type": "DefinedTerm",
        "@id": `https://www.pandacodegen.com/blog/aeo-web-performance-glossary#${t.id}`,
        "name": t.term,
        "description": DEFS[t.id],
        "inDefinedTermSet": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#termset"
      }))
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#faq",
      "mainEntity": postFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AEO & Web Performance Glossary", "item": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#webpage",
      "url": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary",
      "name": "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
      "description": "Plain-English definitions of the AI-search, rendering, and web-performance terms that decide whether your site gets found.",
      "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
      "datePublished": "2026-07-16T00:00:00-05:00",
      "dateModified": "2026-07-16T00:00:00-05:00",
      "inLanguage": "en-US"
    }
  ]
};

export default function GlossaryPage() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />

      <section className="relative pt-24 md:pt-40 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "AEO & Web Performance Glossary" }
          ]} />
          <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/10 text-cognac rounded-full text-xs font-semibold mb-4">
              <BookMarked className="w-3 h-3" /> Glossary
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight leading-[1.05] mb-5">
              The AEO &amp; Web Performance{" "}
              <span className="font-serif italic text-cognac">Glossary</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-6 max-w-2xl">
              Not long ago, getting found online came down to one thing: SEO. It has since splintered into a dozen sub-disciplines, AEO, GEO, rendering, Core Web Vitals, crawlability, and everyone throws the acronyms at you without ever explaining how they connect. This is the map: the 23 terms that decide whether people and AI can find your site, each in plain English.
            </p>
            <BlogAuthor
              date="Jul 16, 2026"
              readTime="20 min read"
              bio="Hassan builds custom Next.js sites engineered to be fast for people and readable by AI search."
              linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
            />
          </div>

          {/* Answer-first intro, extractable */}
          <div className="relative bg-charcoal text-white rounded-2xl p-7 md:p-9 mb-12 overflow-hidden" data-speakable="true">
            <div className="absolute -top-8 -right-6 font-serif text-[9rem] leading-none text-white/5 select-none pointer-events-none">&rdquo;</div>
            <p className="relative text-lg md:text-xl leading-relaxed">
              Here is the shortcut, though: underneath all the acronyms, it reduces to two questions. Is your site fast enough to pass Google&apos;s <span className="text-cognac font-semibold">Core Web Vitals</span>, and is it structured clearly enough for AI answer engines to read and cite it through <span className="text-cognac font-semibold">query fan-out</span>? Every term below feeds one of those two, grouped from AI search down to raw performance. Start anywhere.
            </p>
          </div>

          {/* Jump nav */}
          <nav aria-label="Glossary terms" className="mb-16 rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5">Jump to a term</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {GROUPS.map(group => (
                <div key={group}>
                  <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-2.5">{group}</p>
                  <ul className="space-y-1.5">
                    {TERMS.filter(t => t.group === group).map(t => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="text-sm text-stone-600 hover:text-cognac hover:translate-x-0.5 inline-block transition-all">
                          {t.term}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* ─────────── AI Search & Answer Engines ─────────── */}
          <GroupHeader title="AI Search & Answer Engines" count={10} />
          <div className="space-y-4">
            <Term
              id="aeo"
              name="AEO (Answer Engine Optimization)"
              href="/blog/aeo-playbook-built-into-every-website"
              hrefLabel="Read the AEO playbook"
              example={<>Someone types into ChatGPT: &ldquo;my website looks outdated and loads slow, who can rebuild it without charging me a fortune?&rdquo; It writes a short answer and names two or three companies. AEO is the work that decides whether your page is one of the sources it pulled that answer from, and whether your name is one it lists.</>}
              ask={<>&ldquo;Which AI engines cite us today, and for which questions?&rdquo; If nobody can show you an answer, nobody is doing AEO. It is measurable, so measure it.</>}
            >
              <BlogHighlight>Answer Engine Optimization is structuring your site so AI answer engines extract and cite it inside their synthesized answers</BlogHighlight>, instead of optimizing only for a ranked list of blue links. <BlogHighlight>Why it matters now:</BlogHighlight> your buyer used to scroll ten results and form their own shortlist. Increasingly they ask one question and get handed a shortlist of three, already decided. If your name is not in that paragraph, you were never in the running, and you will never see it in your analytics, because there was no click to miss. That is the shift: ranking #4 used to earn you a look. Today it can earn you nothing.
            </Term>

            <Term
              id="geo"
              name="GEO (Generative Engine Optimization)"
              ask={<>If you are quoted &ldquo;AEO&rdquo; and &ldquo;GEO&rdquo; as two separate line items, ask what is technically different between them. If the answer is vague, you are being billed twice for one job.</>}
            >
              <BlogHighlight>GEO is a near-synonym for AEO</BlogHighlight>, emphasizing visibility inside generative AI answers specifically. Some people draw a fine line (AEO for Google&apos;s own AI features, GEO for third-party engines like ChatGPT and Perplexity), but as of 2026 there is no settled distinction and the underlying work is identical. <BlogHighlight>Why it matters:</BlogHighlight> mostly so you are not sold the same work twice under two acronyms. The tactics that get you cited by Google&apos;s AI Overview are the same ones that get you cited by ChatGPT. There is no separate machine to optimize for.
            </Term>

            <Term
              id="query-fan-out"
              name="Query fan-out"
              example={<>You ask an AI &ldquo;why isn&apos;t my website bringing in any customers?&rdquo; Behind the scenes it also runs &ldquo;does website speed affect sales,&rdquo; &ldquo;why is my site not converting,&rdquo; &ldquo;is my design costing me leads,&rdquo; and a dozen more, then blends them into one answer. You get cited only if you answered several of those, not just the one they typed.</>}
              ask={<>&ldquo;Which sub-questions does this page actually answer?&rdquo; If the reply is &ldquo;we targeted one keyword,&rdquo; you are being handed a 2019 strategy at 2026 prices.</>}
            >
              <BlogHighlight>Query fan-out is when an AI search system takes one question and silently splits it into a dozen sub-questions</BlogHighlight>, retrieves sources for each, and stitches them into a single answer. Google has confirmed this runs inside AI Mode. <BlogHighlight>Why it matters:</BlogHighlight> it quietly killed the one-page-per-keyword playbook. Your page is no longer competing for a single query; it is competing to be useful across a dozen hidden ones the buyer never typed. This is also why thin, single-answer pages have quietly stopped working: they satisfy one branch of the fan-out and lose the other eleven to somebody more thorough.
            </Term>

            <Term
              id="rag"
              name="RAG (Retrieval-Augmented Generation)"
              example={<>It is why Perplexity can answer a question about something that happened this week. It fetched live pages the moment you asked, rather than reciting only what it memorized back when it was trained.</>}
              ask={<>&ldquo;When were our main money pages last genuinely updated?&rdquo; Retrieval leans fresh. A page untouched for two years is competing against one published last month.</>}
            >
              <BlogHighlight>RAG is the method behind AI search: the model retrieves live web pages, then generates an answer grounded in what it found</BlogHighlight>, rather than answering from memory. <BlogHighlight>Why it matters:</BlogHighlight> it is the whole reason you can influence an AI answer at all. If models only recited training data, you would be frozen out until the next training run, years away. Because they fetch live, your page can be pulled into an answer the day you publish it. Everything else in this glossary exists to make you a source worth retrieving in that split second.
            </Term>

            <Term
              id="ai-crawlers"
              name="AI crawlers (GPTBot, ClaudeBot, PerplexityBot)"
              href="/blog/lovable-site-not-showing-on-google"
              hrefLabel="Why AI-built sites are invisible"
              example={<>Right-click your homepage and choose &ldquo;View page source.&rdquo; That raw HTML, before any JavaScript runs, is everything an AI crawler ever sees. If your headline is not in it, it does not exist for them.</>}
              ask={<>&ldquo;Show me what GPTBot sees when it fetches our homepage.&rdquo; It takes one command and thirty seconds. If they have never checked, they have never thought about AI visibility at all.</>}
            >
              <BlogHighlight>These are the bots that fetch pages for AI systems, and as of 2026 none of the major ones run JavaScript.</BlogHighlight> GPTBot and OAI-SearchBot (OpenAI), ClaudeBot and Claude-SearchBot (Anthropic), and PerplexityBot all read raw HTML and move on. <BlogHighlight>Why it matters:</BlogHighlight> they are a real audience now, not a curiosity, and they judge your site on a stricter standard than Google does. Googlebot will eventually run your JavaScript and see the finished page. These bots never will. So a site can rank perfectly well on Google and be completely invisible to every AI engine at the same time, and nothing in your analytics will tell you.
            </Term>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <StatCard stat="0" label="Major AI crawlers that run JavaScript" />
              <StatCard stat="747 KB" label="Raw HTML our homepage sends a bot" />
              <StatCard stat="&lt;div&gt;" label="All an empty CSR shell actually contains" />
            </div>

            <Term
              id="semantic-triple"
              name="Semantic triple"
              example={<>Most About pages read like this: &ldquo;We are a leading agency delivering excellence in digital solutions.&rdquo; A model has to interpret that, so it usually skips it. Now this: &ldquo;PandaCodeGen builds custom Next.js websites. Pricing starts at $1,500. Every build ships with a written 90+ PageSpeed guarantee.&rdquo; Same length, but a model can lift any sentence word for word. That is three clean triples versus zero.</>}
              ask={<>&ldquo;Are our core facts worded identically on the site, in our structured data, and on our third-party profiles?&rdquo; Ask them to prove it, not assert it. Contradictions are usually invisible until you go looking.</>}
            >
              <BlogHighlight>A semantic triple is the smallest fact a machine reads cleanly: subject, predicate, object</BlogHighlight>, as in &ldquo;PandaCodeGen builds custom Next.js websites.&rdquo; <BlogHighlight>Why it matters:</BlogHighlight> a model will not repeat a claim it is unsure about. When your pricing says one thing on your site, another on a directory, and something vaguer in your brochure copy, the model resolves that conflict by hedging, or by naming a competitor whose facts line up. Consistency is not pedantry here; it is the difference between being described confidently and being skipped.
            </Term>

            <Term
              id="speakable"
              name="Speakable"
              example={<>On this page, exactly one passage carries the marker: the dark box at the top, the one saying it all reduces to two questions. If an assistant read a single paragraph of this page aloud, that is the one we want. One page, one marked answer, chosen on purpose.</>}
              ask={<>&ldquo;Which single sentence on this page answers what the visitor came for?&rdquo; If nobody can point at one, the problem is not the markup, it is that the page never actually answers anything.</>}
            >
              <BlogHighlight>Speakable is a Schema.org marker for the sentences best suited to be read aloud</BlogHighlight>{" "}by a voice assistant, which in practice flags your most quotable, answer-first passages. It is a light signal rather than a ranking lever, but it reinforces the right habit: if you can point to the one sentence that answers the page&apos;s core question, you have already done the harder AEO work.
            </Term>

            <Term
              id="agentic-browsing"
              name="Agentic browsing"
              href="/blog/agentic-browsing-pagespeed-score"
              hrefLabel="The Agentic Browsing score explained"
              example={<>You tell an AI assistant &ldquo;book me a table for two on Friday at 8,&rdquo; and it opens the restaurant&apos;s site, fills the form, and confirms the booking itself, no clicks from you. That only works if the site is clean enough for the agent to read and act on.</>}
              ask={<>&ldquo;Run PageSpeed Insights and show me our Agentic Browsing score.&rdquo; It is free and it takes a minute. If they do not know the category exists, they are not tracking where this is going.</>}
            >
              <BlogHighlight>Agentic browsing is an AI agent navigating and acting on a website for a user</BlogHighlight>, such as reading your services and starting a booking. In 2026 Google added an Agentic Browsing category to PageSpeed Insights that scores whether an agent can read and act on your page. <BlogHighlight>Why it matters:</BlogHighlight> it is the next step past citation. Being mentioned in an answer is one thing; being the site the agent can actually complete a booking on is another. When an agent hits a page it cannot parse, it does not phone a human for help. It quietly moves to the next business that works.
            </Term>

            <Term
              id="llms-txt"
              name="llms.txt"
              example={<>Point Cursor or Claude Code at a documentation site and it quietly fetches /llms.txt to learn how the API works. That developer-tool use, not search visibility, is who actually reads the file today.</>}
              ask={<>&ldquo;Do we have one?&rdquo; We should, it is twenty minutes. The follow-up matters more: &ldquo;What evidence is there that it moves our citations?&rdquo; There is none published. Fine as part of the job; not fine as the headline of the proposal.</>}
            >
              <BlogHighlight>llms.txt is a plain-text Markdown file at your site&apos;s root that summarizes your site for AI systems</BlogHighlight>, a bit like a welcome sheet next to robots.txt and sitemap.xml. <BlogHighlight>Why it matters, honestly:</BlogHighlight> far less than you have been told. Google Search ignores it outright, and studies find the large majority of these files receive zero requests from AI search crawlers. Its real and genuinely growing use is a different job entirely: developer tools and AI coding assistants reading documentation. We keep one because it costs twenty minutes and does no harm. We would never sell it to you as the reason you will get cited.
            </Term>

            <Term
              id="answer-first"
              name="Answer-first writing"
              example={<>Bad: &ldquo;Website speed has become an increasingly important topic in recent years. In this section we will explore&hellip;&rdquo; Good: &ldquo;A slow site costs you sales: every 100ms of delay cuts conversions by about 8%.&rdquo; The second one can be lifted straight into an AI answer. The first one gives a model nothing to quote.</>}
              ask={<>Open any page they wrote and read the first 50 words under a heading. Is the answer there, or is it throat-clearing? If every section opens with &ldquo;in today&apos;s digital landscape,&rdquo; you are paying for words, not answers.</>}
            >
              <BlogHighlight>Answer-first writing means the direct answer to a section&apos;s question lands in the first 40 to 60 words, before any build-up.</BlogHighlight> <BlogHighlight>Why it matters:</BlogHighlight> AI engines lift passages out of context. They do not read your article politely from the top and follow your argument to its conclusion; they grab a chunk that stands alone and quote it. An answer buried in paragraph four, after the scene-setting, is invisible to that process. This is also why the introduction style most of us were taught in school actively hurts you now: the warm-up is the part that gets skipped.
            </Term>

            <InsightBox variant="warning" label="How This Should Be Billed">
              To be clear: have an llms.txt. It takes twenty minutes and does no harm. The red flag is seeing it as its own line item, or as the headline of an &ldquo;AI visibility&rdquo; package. And that goes for everything on this page. In 2026, whoever builds or runs your site should be doing all of it as part of the job, not selling it back to you one acronym at a time. If each piece arrives as a separate invoice, you are paying a specialist tax for what should be table stakes.
            </InsightBox>
          </div>

          {/* ─────────── Rendering & Crawlability ─────────── */}
          <GroupHeader title="Rendering & Crawlability" count={6} />
          <div className="space-y-4">
            <Term
              id="csr"
              name="CSR (Client-Side Rendering)"
              example={<>&ldquo;View page source&rdquo; on a CSR site and you see an almost-empty page with one big block of JavaScript and none of your actual text. A bot sees exactly that emptiness, even though your browser fills it in a split second later.</>}
              ask={<>&ldquo;Is our site server-rendered?&rdquo; &ldquo;It&apos;s React&rdquo; is not an answer to that question, React does both. If they cannot say plainly which one you are on, that is your answer.</>}
            >
              <BlogHighlight>Client-Side Rendering means the server sends a near-empty shell and the browser builds the page with JavaScript.</BlogHighlight> Your browser handles it fine, which is why the site looks great to you. <BlogHighlight>Why it matters:</BlogHighlight> this is the cruellest failure mode in web development, because everyone who checks your site is using a browser, so nobody ever notices. You look at it: perfect. Your designer looks: perfect. Meanwhile the crawlers deciding whether you exist are getting an empty div. Most AI-built and single-page-app sites default to CSR, and it is the number-one reason a genuinely good-looking site gets no traffic at all.
            </Term>

            <Term
              id="ssr"
              name="SSR (Server-Side Rendering)"
              ask={<>If you are on CSR today: &ldquo;What would it take to server-render our marketing pages?&rdquo; It is usually not a rebuild. It is a delivery change, and the answer you get will tell you how deep their knowledge actually goes.</>}
            >
              <BlogHighlight>Server-Side Rendering means the server assembles the finished HTML and sends it complete</BlogHighlight>, so every visitor and every crawler gets readable content on the first request. Same components as CSR, opposite delivery order. <BlogHighlight>Why it matters:</BlogHighlight> it removes the gamble entirely. With CSR you are betting that a crawler will come back later, run your JavaScript, and index what it finds. With SSR there is no bet: the content is simply there, on the first request, for every bot and every visitor, including the ones on a bad phone connection who would have left before your JavaScript finished.
            </Term>

            <ComparisonGrid
              left={{ label: "CSR (what bots see)", items: ["Empty div + script tags", "Content absent until JavaScript runs", "Invisible to AI crawlers", "Indexed late, if at all"] }}
              right={{ label: "SSR (what bots see)", items: ["Full finished HTML", "Every headline and price present", "Readable by every crawler", "Indexed on the first pass"] }}
            />

            <Term
              id="ssg"
              name="SSG / Static rendering"
              ask={<>&ldquo;Are our marketing pages static, or rebuilt from a database on every single visit?&rdquo; Your About page has not changed in a year. There is no good reason to rebuild it for every visitor.</>}
            >
              <BlogHighlight>Static Site Generation pre-builds pages into finished HTML at build time and serves them instantly from a CDN.</BlogHighlight> No server work per request. <BlogHighlight>Why it matters:</BlogHighlight> it is why a custom site can be both faster and cheaper to run than the platform you are paying monthly for. A static page has almost nothing left to go wrong: no database query, no server thinking, no plugin waking up. It is also why our hosting bill for a client site is often $0 while their old managed WordPress plan was $150 a month for a slower result.
            </Term>

            <Term
              id="isr"
              name="ISR (Incremental Static Regeneration)"
              ask={<>If someone tells you static sites cannot handle frequently-changing content, they are about ten years out of date. Ask them about ISR and see what comes back.</>}
            >
              <BlogHighlight>ISR is a Next.js feature that serves static pages but quietly rebuilds them on a schedule</BlogHighlight>, giving you static-file speed with content that stays fresh. <BlogHighlight>Why it matters:</BlogHighlight> it kills the old excuse. &ldquo;We need a database-driven site because our content changes&rdquo; was a real trade-off once: you picked fast-but-frozen or fresh-but-slow. ISR ends that. Your product page can update every hour and still be served as a pre-built file to every visitor. There is no longer a good reason to accept a slow site in exchange for fresh content.
            </Term>

            <Term
              id="hydration"
              name="Hydration"
              example={<>It is why a page can look completely ready but ignore your taps for a beat. The visuals arrived, but the JavaScript that makes the buttons actually work is still catching up.</>}
              ask={<>&ldquo;What is our INP score?&rdquo; If the page looks fast but feels sticky when you tap things, heavy hydration is usually the culprit, and it will not show up in a screenshot of a good LCP.</>}
            >
              <BlogHighlight>Hydration is the step where JavaScript attaches interactivity to server-rendered HTML in the browser.</BlogHighlight> The page can look loaded but not respond to clicks until it finishes. <BlogHighlight>Why it matters:</BlogHighlight> it is the gap between looking fast and being fast, and it is where a lot of &ldquo;but our score is green&rdquo; sites actually lose people. A visitor does not care that your page painted in 0.8 seconds if their first tap does nothing. That dead beat is where trust goes, and it is measured now: it is exactly what INP scores.
            </Term>

            <Term
              id="crawlability"
              name="Crawlability"
              example={<>A single stray line, &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;, left over from a staging site and pushed to production, will remove an entire website from Google. It is invisible on the page. It happens more often than anyone admits.</>}
              ask={<>&ldquo;Pull our raw HTML and show me our content is actually in it.&rdquo; And: &ldquo;When did you last check our robots.txt and for stray noindex tags?&rdquo; Both take a minute and both have killed real sites.</>}
            >
              <BlogHighlight>Crawlability is whether search and AI bots can reach, fetch, and actually read your page&apos;s content.</BlogHighlight> Client-side rendering, blocked resources, a slow server, or one stray noindex tag all break it. <BlogHighlight>Why it matters:</BlogHighlight> it is the gate before every other thing in this glossary. You can have the best content, the cleanest schema, the fastest scores, and none of it counts if a bot cannot read the page. It is also the cheapest thing to verify and the most embarrassing thing to get wrong, which is exactly why it should be checked first and checked often.
            </Term>
          </div>

          {/* ─────────── Structured Data & Entities ─────────── */}
          <GroupHeader title="Structured Data & Entities" count={3} />
          <div className="space-y-4">
            <Term
              id="schema"
              name="Schema / structured data / JSON-LD"
              example={<>It is what turns a plain blue Google result into one with star ratings, a price, or a little FAQ dropdown underneath. The words are the same; the schema tells Google what they mean.</>}
              ask={<>&ldquo;Do we have Organization, Article and Breadcrumb schema?&rdquo; That is the cheap, useful baseline. But if they pitch &ldquo;more schema&rdquo; as your AI-citation strategy, that is a 2023 answer to a 2026 problem.</>}
            >
              <BlogHighlight>Schema.org structured data, usually written as JSON-LD, describes a page&apos;s meaning to machines</BlogHighlight> (this is an Article, that is a price, this is a review). It powers Google&apos;s rich results. <BlogHighlight>Why it matters, with a caveat:</BlogHighlight> it earns you the richer-looking search result, which is worth having. What it does not do, and this surprises people who have been sold otherwise, is win AI citations. A controlled study of nearly 2,000 pages adding schema found effectively no citation lift, because AI engines extract the visible HTML and ignore hidden markup. Keep the basics. Do not let anyone bill you for schema as an AI strategy.
            </Term>

            <Term
              id="knowledge-graph"
              name="Knowledge Graph & entities"
              example={<>Search a well-known company and you get a panel: founded, headquarters, founders, all stated as fact. Search most small businesses and you get a link. The first is an entity. The second is a string of text that happens to be a name.</>}
              ask={<>&ldquo;Are our name, founders, pricing and claims identical across our site, LinkedIn, and every review profile?&rdquo; Entity strength is built from boring consistency, not clever tactics. Most agencies never audit it because it is unglamorous work.</>}
            >
              <BlogHighlight>A Knowledge Graph is a machine-readable map of entities (people, companies, concepts) and how they relate.</BlogHighlight> Becoming a recognized entity, rather than just a string of text, is what lets Google and AI models talk about your brand with confidence. <BlogHighlight>Why it matters:</BlogHighlight> it is the difference between a model saying &ldquo;PandaCodeGen builds custom Next.js sites and charges from $1,500&rdquo; and saying &ldquo;there are several agencies that may offer this.&rdquo; One names you. The other names nobody. You earn the first by being consistently, boringly the same everywhere, over time. There is no shortcut, which is precisely why most businesses never do it.
            </Term>

            <Term
              id="eeat"
              name="E-E-A-T"
              example={<>Two pages give identical advice. One is by &ldquo;Admin,&rdquo; no bio. The other is by a named engineer whose author page shows the projects, with real before-and-after numbers in the post. Same words, completely different weight, to a reader and to a model deciding who to quote.</>}
              ask={<>&ldquo;Whose name goes on this, and what have they actually done?&rdquo; If your content is ghost-written by someone with no experience of the work and published under a generic byline, you are buying words that carry no authority.</>}
            >
              <BlogHighlight>E-E-A-T is Google&apos;s framework for who deserves to be believed: Experience, Expertise, Authoritativeness and Trust.</BlogHighlight> Trust is the outcome; the other three feed it. <BlogHighlight>Why it matters:</BlogHighlight> the first E, Experience, is the one that changed everything, and it is the one most content fails. It asks a question no amount of research answers: have you actually done this thing? A page about migrating a site written by someone who has migrated sites reads differently, cites differently, and gets trusted differently than one assembled from other people&apos;s articles. It is also the one qualification a generic AI cannot fake on your behalf.
            </Term>
          </div>

          {/* ─────────── Web Performance ─────────── */}
          <GroupHeader title="Web Performance" count={4} />
          <div className="space-y-4">
            <Term
              id="core-web-vitals"
              name="Core Web Vitals (LCP, INP, CLS)"
              href="/blog/core-web-vitals-explained"
              hrefLabel="Core Web Vitals, fully explained"
              example={<>CLS is the one you have felt. You go to tap a button, an ad or image loads above it and shoves everything down, and you tap the wrong thing. That jump is a failing Cumulative Layout Shift score.</>}
              ask={<>&ldquo;What are our LCP, INP and CLS on field data, from real users, not the lab score?&rdquo; Lab numbers flatter you. Field data is what Google actually ranks on, and it is free to look up.</>}
            >
              <BlogHighlight>Core Web Vitals are Google&apos;s three user-experience metrics, and a confirmed ranking signal.</BlogHighlight> Largest Contentful Paint (LCP) measures loading, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. <BlogHighlight>Why it matters:</BlogHighlight> this is the rare SEO metric with a direct line to money, not just rankings. Every one of these is a moment where a real buyer gets annoyed and leaves: waiting on a blank screen, tapping a button that does nothing, or tapping the wrong thing because the page moved. Google made them a ranking signal because they already predicted whether people stayed. You are not optimizing for Google here; you are optimizing for the reason people bounce.
            </Term>

            <Term
              id="pagespeed"
              name="PageSpeed & Lighthouse"
              href="/blog/how-to-achieve-100-pagespeed"
              hrefLabel="The 8-step guide to 90+"
              ask={<>&ldquo;What is our mobile score right now, and will you put a number in the contract?&rdquo; Plenty of agencies will promise &ldquo;fast.&rdquo; Very few will write a number down and attach a refund to it. That gap tells you something.</>}
            >
              <BlogHighlight>PageSpeed Insights scores a page 0 to 100 using the Lighthouse engine, and reports your Core Web Vitals.</BlogHighlight> A 90+ mobile score is the practical target and the one we guarantee in writing on every build. One caution: it is a lab estimate, so treat the field data (real users, shown as the Core Web Vitals) as the truth and the lab score as the diagnostic.
            </Term>

            <Term
              id="ttfb"
              name="TTFB (Time to First Byte)"
              example={<>It is the pause you stare at before anything at all appears on screen, the server thinking before it even starts to answer. Fast sites answer in under 200 milliseconds; a struggling WordPress site can take well over a second just for this.</>}
              ask={<>&ldquo;What is our TTFB?&rdquo; If it is consistently high, no amount of image compression will save you, and anyone selling you image compression as the fix has misdiagnosed the problem.</>}
            >
              <BlogHighlight>Time to First Byte is how long your server takes to send the first byte of a response.</BlogHighlight> Everything else, the loading, the rendering, the interactivity, can only start after it. <BlogHighlight>Why it matters:</BlogHighlight> it is the one number that exposes a platform problem rather than a page problem. Most speed advice is about what happens after the response arrives: compress this, lazy-load that. If your TTFB is bad, all of that is rearranging furniture while the foundation sinks, because the visitor is still staring at nothing. WordPress rebuilding a page from the database on every single visit is slow in a way no plugin fixes.
            </Term>

            <Term
              id="redirect-301"
              name="301 redirect"
              href="/blog/will-migrating-hurt-my-seo"
              hrefLabel="Will migrating hurt my SEO?"
              example={<>You move a page from yoursite.com/pricing-old to yoursite.com/pricing. A 301 is the note that tells Google &ldquo;it lives here now,&rdquo; so the visitors and the rankings that old URL earned follow it to the new one.</>}
              ask={<>Before anyone touches your site: &ldquo;Show me the complete old-URL-to-new-URL redirect map.&rdquo; Not a promise to handle it. The actual list. This is the single question that separates a safe migration from a disaster.</>}
            >
              <BlogHighlight>A 301 is a permanent redirect that forwards an old URL to a new one and passes its SEO value along.</BlogHighlight> <BlogHighlight>Why it matters:</BlogHighlight> it is the difference between a redesign that keeps ten years of earned rankings and one that throws them away in an afternoon. Every link anyone ever built to you, every ranking you slowly climbed, is attached to a specific URL. Change the URL without a 301 and all of it points at a 404. This is the most common way a &ldquo;beautiful new website&rdquo; quietly destroys a business&apos;s traffic, and the owner usually does not notice for a month.
            </Term>
          </div>

          {/* Bottom CTA */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
            <h3 className="text-xl font-bold text-charcoal mb-2">Not sure which of these your site is failing?</h3>
            <p className="text-stone-500 text-sm mb-6">
              Book a 30-minute technical call. Drop your URL and we&apos;ll run it live: PageSpeed, Core Web Vitals, and what AI crawlers actually see. No sales pitch.
            </p>
            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-colors">
              Book a Technical Call <ArrowRight className="w-4 h-4" />
            </CalModalButton>
          </div>

          {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

          <RelatedPosts currentPostId="aeo-web-performance-glossary" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
