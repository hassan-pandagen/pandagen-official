import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
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

// Single source of truth for term list: drives the jump-nav AND the DefinedTermSet JSON-LD.
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
  { id: "csr", term: "CSR (Client-Side Rendering)", group: "Rendering & Crawlability" },
  { id: "ssr", term: "SSR (Server-Side Rendering)", group: "Rendering & Crawlability" },
  { id: "ssg", term: "SSG / Static rendering", group: "Rendering & Crawlability" },
  { id: "isr", term: "ISR (Incremental Static Regeneration)", group: "Rendering & Crawlability" },
  { id: "hydration", term: "Hydration", group: "Rendering & Crawlability" },
  { id: "crawlability", term: "Crawlability", group: "Rendering & Crawlability" },
  { id: "schema", term: "Schema / structured data / JSON-LD", group: "Structured Data & Entities" },
  { id: "knowledge-graph", term: "Knowledge Graph & entities", group: "Structured Data & Entities" },
  { id: "eeat", term: "E-E-A-T", group: "Structured Data & Entities" },
  { id: "core-web-vitals", term: "Core Web Vitals (LCP, INP, CLS)", group: "Web Performance" },
  { id: "pagespeed", term: "PageSpeed & Lighthouse", group: "Web Performance" },
  { id: "ttfb", term: "TTFB (Time to First Byte)", group: "Web Performance" },
  { id: "redirect-301", term: "301 redirect", group: "Web Performance" },
];

const GROUPS = ["AI Search & Answer Engines", "Rendering & Crawlability", "Structured Data & Entities", "Web Performance"];

// Plain-text definitions for the DefinedTerm JSON-LD (same facts as the visible cards).
const DEFS: Record<string, string> = {
  "aeo": "Answer Engine Optimization: writing and structuring a page so that an answer engine like ChatGPT, Claude, Perplexity or Google's AI Overviews can find it, read it and quote from it, rather than aiming only at a ranked list of blue links. None of it guarantees you get crawled, included, ranked, recommended or quoted.",
  "geo": "Generative Engine Optimization: another name for much the same work, with the emphasis on showing up inside AI-generated answers. In practice people use GEO and AEO interchangeably, and both overlap heavily with ordinary search fundamentals.",
  "query-fan-out": "An AI search system takes one question, breaks it into several smaller ones, finds sources for each, then writes a single answer. A page that answers more of those sub-questions is more useful. It still does not guarantee anyone picks it as a source.",
  "rag": "Retrieval-Augmented Generation: the model fetches live material first, then writes an answer grounded in what it found. It is the reason fresh, well-structured pages matter. Every product does it differently, with its own sources, its own idea of fresh, and its own rules about citing.",
  "ai-crawlers": "The bots that fetch pages for AI products: OAI-SearchBot and GPTBot from OpenAI, ClaudeBot from Anthropic, PerplexityBot, and others. They do not all do the same job, obey the same rules, or render pages the same way. Check each vendor's current documentation and your own server logs rather than assuming.",
  "semantic-triple": "A fact written as subject, predicate, object, such as “PandaCodeGen builds custom Next.js websites”. Saying the same thing the same way across your site leaves less for a reader or a machine to guess at. No sentence shape guarantees you get recognized or quoted.",
  "speakable": "A Schema.org property that marks which sentences on a page read well aloud. It describes your page. It does not buy you a ranking or a citation.",
  "agentic-browsing": "AI software navigating or acting on a website for a user. Chrome documented an experimental Lighthouse Agentic Browsing category in May 2026, for Chrome 150 or later, with deterministic checks and a pass ratio, not a weighted 0-to-100 ranking.",
  "llms-txt": "A proposed Markdown file at the root of your site that summarizes selected content. Some developer and audit tools look for it. Having one does not get you discovered, indexed, recommended or quoted.",
  "answer-first": "Give the answer first, then the evidence and the caveats. It makes a page easier to read and easier to lift a passage from. There is no magic word count and no rule that says it earns a citation.",
  "eeat": "Experience, Expertise, Authoritativeness and Trustworthiness: what Google's quality raters weigh up when judging results. Useful questions to ask about your own writing. Not a score you can see, and not a switch anyone can flip.",
  "csr": "Client-Side Rendering: the browser runs JavaScript to build some or all of the page after the first response arrives. Search and AI products differ in how much of that they will run, so anything that matters is safer in the HTML that arrives first.",
  "ssr": "Server-Side Rendering: the server sends back finished HTML. Your important content no longer depends on JavaScript running. Status codes, access rules, markup and how each crawler behaves still decide the rest.",
  "ssg": "Static Site Generation: pages are built into HTML before anyone asks for them. Less work per request, and fewer things to go wrong. What you actually pay and how fast it feels still come down to the page itself, your CDN, your traffic, your plan and the third-party code you load.",
  "isr": "Incremental Static Regeneration: a Next.js feature that serves static pages but rebuilds them in the background on a schedule, combining static speed with fresh content.",
  "hydration": "The step where JavaScript attaches interactivity to server-rendered HTML in the browser. Heavy hydration can delay interactivity even when the page appears loaded.",
  "crawlability": "Whether a crawler that is allowed in can actually reach your page, fetch it, and get at the content that matters. A robots rule, a noindex tag, a login, a server error or a rendering problem will each stop it on its own.",
  "schema": "Schema.org structured data, usually written as JSON-LD, describes what a page is about in a form machines read cleanly. Supported markup can make you eligible for Google search features. Valid markup on its own gets you neither the feature nor the citation.",
  "knowledge-graph": "A map of things and how they relate to each other. Saying consistent, checkable things about yourself leaves less ambiguity. Whether you get recognised, ranked or quoted is still each product's decision, not yours.",
  "core-web-vitals": "Google's user-experience metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Google uses Core Web Vitals in its ranking systems, alongside many other signals.",
  "pagespeed": "PageSpeed Insights shows two different things side by side: what real Chrome users experienced, and a lab test run by Lighthouse. A 90+ Lighthouse score can be an acceptance target. It is not proof that every real visit passes Core Web Vitals.",
  "ttfb": "Time to First Byte: how long from asking for something until the first byte comes back. Everything after it waits on it. Before you blame anything, separate the network, the cache, the edge, your application and your origin server.",
  "redirect-301": "An HTTP permanent redirect from one URL to another. Google treats it as a strong signal about which URL is the real one. A safe migration also needs the content to match, the internal links updated, someone watching afterwards, and time.",
};

// ── Local visual components (glossary-specific, keeps the page from reading as a text wall) ──

function GroupHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="mt-16 mb-6 flex items-center gap-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-cognac shrink-0">{title}</h2>
      <span className="h-px flex-1 bg-stone-200" />
      <span className="text-xs font-medium text-stone-600 shrink-0">{count} terms</span>
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
  description: "A current, source-linked glossary of 23 AI-search, rendering, structured-data, and web-performance terms, including their limits.",
  alternates: { canonical: "/blog/aeo-web-performance-glossary" },
  keywords: [
    "aeo glossary", "geo vs aeo", "what is answer engine optimization", "csr vs ssr", "core web vitals explained",
    "what is llms.txt", "llms.txt example", "query fan out", "ai crawlers gptbot claudebot", "semantic triples seo",
    "server side rendering vs client side rendering", "web performance glossary", "schema markup for ai search",
  ],
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  openGraph: {
    title: "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
    description: "Source-linked definitions of 23 AI-search, rendering, structured-data, and web-performance terms, with practical limits.",
    type: "article",
    publishedTime: "2026-07-16",
    modifiedTime: "2026-07-31",
    authors: ["Hassan Jamal"],
    url: "https://www.pandacodegen.com/blog/aeo-web-performance-glossary",
    images: [ogImageForPath("/blog/aeo-web-performance-glossary")],
  },
  twitter: {
    card: "summary_large_image",
    title: "AEO & Web Performance Glossary (2026)",
    description: "Source-linked definitions of AI-search, rendering, structured-data, and web-performance terms, with practical limits.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#article",
      "headline": "AEO & Web Performance Glossary: 23 Terms Defined (2026)",
      "description": "Source-linked definitions of 23 AI-search, rendering, structured-data, and web-performance terms, including practical limitations.",
      "image": ogImageUrlForPath("/blog/aeo-web-performance-glossary"),
      "datePublished": "2026-07-16T00:00:00-05:00",
      "dateModified": "2026-07-31T00:00:00-05:00",
      "citation": [
        "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
        "https://web.dev/articles/vitals",
        "https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring",
        "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
        "https://developers.openai.com/api/docs/bots",
        "https://schema.org/SpeakableSpecification"
      ],
      "author": {
        "@type": "Person",
        "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
        "name": "Hassan Jamal",
        "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "knowsAbout": ["Answer engine optimization", "Structured data", "Technical SEO", "AI crawlers"],
        "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "url": "https://www.pandacodegen.com",
        "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/aeo-web-performance-glossary#webpage" },
      "articleSection": "AEO",
      "inLanguage": "en-US",
            "wordCount": 4297,
            "timeRequired": "PT21M",
      "about": [
        { "@type": "Thing", "name": "Answer Engine Optimization" },
        { "@type": "Thing", "name": "Web Performance", "sameAs": ["https://en.wikipedia.org/wiki/Web_performance"] },
        { "@type": "Thing", "name": "Structured Data", "sameAs": ["https://schema.org/"] },
        { "@type": "Thing", "name": "Search Indexing", "sameAs": ["https://en.wikipedia.org/wiki/Search_engine_indexing"] }
      ],
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
      "description": "Source-linked definitions of 23 AI-search, rendering, structured-data, and web-performance terms, including practical limitations.",
      "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
      "datePublished": "2026-07-16T00:00:00-05:00",
      "dateModified": "2026-07-31T00:00:00-05:00",
      "inLanguage": "en-US"
    }
  ]
};

export default function GlossaryPage() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />

      <article>
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
              Search, AI answers, rendering, Core Web Vitals, and crawlability are often discussed as if one tactic controls all of them. It does not. This source-linked glossary explains 23 terms, how they connect, and where the evidence stops.
            </p>
            <BlogAuthor
              date="Jul 16, 2026"
              readTime="19 min read"
              bio="Hassan builds custom Next.js sites engineered to be fast for people and readable by AI search."
              linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
            />
          </div>

          {/* Answer-first intro, extractable */}
          <div className="relative bg-charcoal text-white rounded-2xl p-7 md:p-9 mb-12 overflow-hidden" data-speakable="true">
            <div className="absolute -top-8 -right-6 font-serif text-[9rem] leading-none text-white/5 select-none pointer-events-none">&rdquo;</div>
            <p className="relative text-lg md:text-xl leading-relaxed">
              Start with three questions. Can the crawlers that matter actually fetch your important content? Does the page answer a real question, with something to back it up? And do your real-user numbers and your lab numbers both say the experience is decent? Getting those right makes you eligible. It does not guarantee you a ranking or a citation.
            </p>
          </div>

          {/* Jump nav */}
          <nav aria-label="Glossary terms" className="mb-16 rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-5">Jump to a term</p>
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
              ask={<>&ldquo;Which prompts and engines are we monitoring, on what dates, and how are screenshots and referral data stored?&rdquo; Treat prompt checks as a dated sample, not a complete market measurement.</>}
            >
              <BlogHighlight>Answer Engine Optimization is writing and structuring a page so an answer engine can find it, read it and quote from it.</BlogHighlight> Google&apos;s current guidance says the same search fundamentals still apply to its generative features. OpenAI separately documents access through OAI-SearchBot and referral tagging. Neither vendor promises that an eligible page will be included, ranked, recommended, or cited. <BlogHighlight>Why it matters:</BlogHighlight> your buyer used to scroll ten results and build their own shortlist. Increasingly they ask one question and are handed a shortlist of three, already decided. If your name is not in that paragraph you were never in the running, and you will not see it in your analytics, because there was no click to miss.
            </Term>

            <Term
              id="geo"
              name="GEO (Generative Engine Optimization)"
              ask={<>If you are quoted &ldquo;AEO&rdquo; and &ldquo;GEO&rdquo; as two separate line items, ask what is technically different between them. If the answer is vague, you are being billed twice for one job.</>}
            >
              <BlogHighlight>GEO and AEO are overlapping industry labels, not formal standards with one accepted boundary.</BlogHighlight> The shared foundation is useful content, crawl access, clear entities, accurate markup, and measurement. Product-specific controls still differ, so a proposal should name the engines, deliverables, and evidence instead of implying one tactic produces the same result everywhere. <BlogHighlight>Why it matters:</BlogHighlight> mostly so you are not sold the same work twice under two acronyms. There is no separate machine to optimise for.
            </Term>

            <Term
              id="query-fan-out"
              name="Query fan-out"
              example={<>A system may expand &ldquo;why is my website not converting?&rdquo; into related questions about speed, clarity, trust, mobile usability, and offer fit before composing an answer. The exact expansion is product- and query-dependent.</>}
              ask={<>&ldquo;Which related user needs does this page answer, and which are outside its scope?&rdquo; The goal is useful coverage, not manufacturing a fixed number of headings.</>}
            >
              <BlogHighlight>Query fan-out breaks one question into several smaller ones, finds sources for each, then writes a single answer.</BlogHighlight> Google describes this technique for its generative Search experiences. It supports a sensible editorial lesson: cover connected user needs when they belong on the page. It does not establish a fixed number of sub-queries or guarantee that broader content will be retrieved or cited. <BlogHighlight>Why it matters:</BlogHighlight> your page is no longer competing for a single query. It is competing to be useful across several hidden ones the buyer never typed, which is why a thin page that answers exactly one thing tends to lose the rest.
            </Term>

            <Term
              id="rag"
              name="RAG (Retrieval-Augmented Generation)"
              example={<>It is why Perplexity can answer a question about something that happened this week. It fetched live pages the moment you asked, rather than reciting only what it memorized back when it was trained.</>}
              ask={<>&ldquo;Which statements need current sources, and when were those sources last checked?&rdquo; Recency matters for changing facts, while stable topics may not need frequent rewriting.</>}
            >
              <BlogHighlight>Retrieval-Augmented Generation means the model fetches live material first, then writes its answer grounded in what it found.</BlogHighlight> Search products may use different indexes, partners, ranking systems, and retrieval schedules. Publishing a page can make it eligible for discovery, but not necessarily on the same day and not with a citation. <BlogHighlight>Why it matters:</BlogHighlight> it is the reason you can influence an AI answer at all. If models only recited training data you would be frozen out until the next training run. Because they fetch live, a page you publish can be pulled into an answer while it is still current.
            </Term>

            <Term
              id="ai-crawlers"
              name="AI crawlers (GPTBot, ClaudeBot, PerplexityBot)"
              href="/blog/lovable-site-not-showing-on-google"
              hrefLabel="How to test an AI-built site's rendered output"
              example={<>Right-click your homepage and choose &ldquo;View page source.&rdquo; That is the raw HTML your server sent, before any JavaScript ran. Compare it with the rendered view in DevTools: anything present in the second but missing from the first is content a crawler only sees if it renders. Your robots rules say who is allowed in, and your server logs say who actually turned up.</>}
              ask={<>&ldquo;Show me the initial HTML, rendered HTML, access rules, and dated server-log evidence for the crawler we care about.&rdquo;</>}
            >
              <BlogHighlight>The bots that fetch pages for AI products do not all do the same job, obey the same rules, or render a page the same way.</BlogHighlight> OpenAI, for example, distinguishes OAI-SearchBot for search from GPTBot for potential training use. Google Search executes JavaScript, while Google also warns that not every bot can. Because rendering behavior can change and is not uniformly documented, critical public content should be available in the initial or server-rendered HTML and verified with product documentation and logs. <BlogHighlight>Why it matters:</BlogHighlight> they are a real audience now, not a curiosity, and you cannot assume they behave like Googlebot. OpenAI&apos;s crawler documentation names each bot and what it is for, but says nothing about whether it renders JavaScript. That silence is the whole problem: you are guessing until you check your own server logs. A site can do perfectly well in Google and still be poorly served to an AI product.
            </Term>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <StatCard stat="4" label="checks: access, initial HTML, rendered HTML, logs" />
              <StatCard stat="200" label="HTTP success is necessary, not sufficient" />
              <StatCard stat="No" label="crawler or citation guarantee" />
            </div>

            <Term
              id="semantic-triple"
              name="Semantic triple"
              example={<>Most About pages read like this: &ldquo;We are a leading agency delivering excellence in digital solutions.&rdquo; A model has to interpret that, so it usually skips it. Now this: &ldquo;PandaCodeGen builds custom Next.js websites. Pricing starts at $1,500. A 90+ Lighthouse acceptance target applies only when included in the accepted project terms, using named pages, mobile and desktop profiles, and three recorded passing runs per agreed page/profile.&rdquo; Same length, but a model can lift any sentence word for word. That is three clean triples versus zero.</>}
              ask={<>&ldquo;Are our core facts worded identically on the site, in our structured data, and on our third-party profiles?&rdquo; Ask them to prove it, not assert it. Contradictions are usually invisible until you go looking.</>}
            >
              <BlogHighlight>A semantic triple represents a fact as subject, predicate, and object</BlogHighlight>, as in &ldquo;PandaCodeGen builds custom Next.js websites.&rdquo; Specific, consistent statements reduce ambiguity for readers and data systems. They still need evidence and current dates where facts change; the triple format itself is not a ranking or citation mechanism. <BlogHighlight>Why it matters:</BlogHighlight> a model tends not to repeat a claim it is unsure about. When your pricing says one thing on your site, another on a directory and something vaguer in a brochure, the model can hedge or name someone whose facts line up instead. Consistency is not pedantry here.
            </Term>

            <Term
              id="speakable"
              name="Speakable"
              example={<>A page can use CSS selectors or XPath values to identify visible sections that are particularly suitable for text-to-speech. The selected content should still make sense in context.</>}
              ask={<>&ldquo;Which single sentence on this page answers what the visitor came for?&rdquo; If nobody can point at one, the problem is not the markup, it is that the page never actually answers anything.</>}
            >
              <BlogHighlight>Speakable is Schema.org markup for sections considered especially suitable for text-to-speech.</BlogHighlight>{" "}It can identify a CSS selector or XPath, but Schema.org does not describe it as an AI-citation signal. Use it only where it accurately describes visible content; do not treat it as proof of search visibility.
            </Term>

            <Term
              id="agentic-browsing"
              name="Agentic browsing"
              href="/blog/agentic-browsing-pagespeed-score"
              hrefLabel="The Agentic Browsing score explained"
              example={<>You tell an AI assistant &ldquo;book me a table for two on Friday at 8,&rdquo; and it opens the restaurant&apos;s site, fills the form, and confirms the booking itself, no clicks from you. That only works if the site is clean enough for the agent to read and act on.</>}
              ask={<>&ldquo;Run the experimental Lighthouse Agentic Browsing checks in a supported Chrome version and show each pass, warning, and test condition.&rdquo;</>}
            >
              <BlogHighlight>Agentic browsing is software navigating or acting on a site for a user.</BlogHighlight> In May 2026 Chrome documented an experimental Lighthouse Agentic Browsing category for Chrome 150 or later. It reports a fractional pass ratio and individual checks, not a weighted 0-to-100 score or a search ranking. The current checks emphasize WebMCP, accessibility-tree quality, layout stability, and llms.txt presence. <BlogHighlight>Why it matters:</BlogHighlight> it is the step past being quoted. Being named in an answer is one thing. Being the site an agent can actually complete a booking on is another, and when an agent hits a page it cannot parse it does not ask a human for help.
            </Term>

            <Term
              id="llms-txt"
              name="llms.txt"
              example={<>A documentation site may publish /llms.txt as a concise index for tools that choose to support the convention. Support must be checked tool by tool.</>}
              ask={<>&ldquo;Which named product consumes this file, according to current documentation or our logs?&rdquo; Presence alone is not an outcome.</>}
            >
              <BlogHighlight>llms.txt is a proposed Markdown file at a site&apos;s root that summarizes selected content.</BlogHighlight> Chrome&apos;s experimental Agentic Browsing audit currently checks whether it exists. That does not establish that Google Search, ChatGPT, or another product will use it to rank or cite the site. Implement it only as a small, maintainable discovery aid for named consumers, never as a promised visibility result. <BlogHighlight>Why it matters:</BlogHighlight> less than you have probably been told. Its clearest current use is a different job entirely: developer tools and AI coding assistants reading documentation. Keep one because it costs twenty minutes and does no harm. Do not let anyone sell it as the reason you will get cited.
            </Term>

            <Term
              id="answer-first"
              name="Answer-first writing"
              example={<>Vague: &ldquo;Website speed has become increasingly important.&rdquo; Clearer: &ldquo;Measure real-user LCP, INP, and CLS before choosing a speed fix; a Lighthouse score alone is a lab result.&rdquo;</>}
              ask={<>Does the opening sentence answer the heading accurately, and do the next sentences provide evidence, conditions, and exceptions?</>}
            >
              <BlogHighlight>Answer-first writing states the main answer early, then adds evidence and nuance.</BlogHighlight> It is a readability technique, not a fixed 40-to-60-word rule. Clear, self-contained passages can be easier for people and machines to interpret, but no copy pattern guarantees extraction or citation. <BlogHighlight>Why it matters:</BlogHighlight> AI engines lift passages out of context. They do not read your article from the top and follow the argument to its conclusion. An answer buried in paragraph four, after the scene-setting, is invisible to that process, which is why the introduction style most of us were taught at school works against you here.
            </Term>

            <InsightBox variant="warning" label="How This Should Be Billed">
              Ask a vendor to map each deliverable to a named problem, source, acceptance check, owner, and maintenance duty. Some items may belong in a migration scope; others may be ongoing content or measurement work. The warning sign is not a separate line item by itself, but a promised ranking or citation result that the deliverable cannot prove. Whoever builds or runs your site should be doing most of this as part of the job. If every piece arrives as its own invoice under its own acronym, you are paying a specialist tax for what should be table stakes.
            </InsightBox>
          </div>

          {/* ─────────── Rendering & Crawlability ─────────── */}
          <GroupHeader title="Rendering & Crawlability" count={6} />
          <div className="space-y-4">
            <Term
              id="csr"
              name="CSR (Client-Side Rendering)"
              example={<>Compare &ldquo;View page source&rdquo; with the browser&apos;s rendered DOM. If important content appears only after JavaScript runs, test it with the actual search tools and crawlers in scope.</>}
              ask={<>&ldquo;Is our site server-rendered?&rdquo; &ldquo;It&apos;s React&rdquo; is not an answer to that question, React does both. If they cannot say plainly which one you are on, that is your answer.</>}
            >
              <BlogHighlight>Client-Side Rendering uses browser JavaScript to create some or all page content after the initial response.</BlogHighlight> Google Search can render JavaScript, but Google still recommends server-side or pre-rendering because it helps users and crawlers, and not all bots can run JavaScript. CSR is therefore a test condition, not proof that a page is invisible or the sole cause of low traffic. <BlogHighlight>Why it matters:</BlogHighlight> it is the failure mode nobody notices, because everyone who checks your site checks it in a browser. You look at it and it is perfect. Your designer looks and it is perfect. What a crawler receives can be a different thing entirely, and only a source view or a log will tell you.
            </Term>

            <Term
              id="ssr"
              name="SSR (Server-Side Rendering)"
              ask={<>If you are on CSR today: &ldquo;What would it take to server-render our marketing pages?&rdquo; It is usually not a rebuild. It is a delivery change, and the answer you get will tell you how deep their knowledge actually goes.</>}
            >
              <BlogHighlight>Server-Side Rendering returns rendered HTML from the server for the requested page.</BlogHighlight> It makes important content available without waiting for client-side rendering and can reduce crawler dependence on JavaScript. It does not by itself guarantee indexing, speed, or accessibility; response time, status codes, markup, hydration, and access rules still matter. <BlogHighlight>Why it matters:</BlogHighlight> it removes a gamble. With client-side rendering you are betting that a crawler comes back, runs your JavaScript and indexes what it finds. With server rendering there is no bet: the content is in the first response, for every visitor and every bot, including the one on a bad phone connection.
            </Term>

            <ComparisonGrid
              left={{ label: "CSR risk to test", items: ["Important content may require JavaScript", "Rendering support varies by crawler", "Errors can hide rendered content", "Initial HTML may be incomplete"] }}
              right={{ label: "SSR benefit to verify", items: ["Important content can arrive in HTML", "Less dependence on crawler rendering", "Still requires correct status and markup", "Still no indexing guarantee"] }}
            />

            <Term
              id="ssg"
              name="SSG / Static rendering"
              ask={<>&ldquo;Are our marketing pages static, or rebuilt from a database on every single visit?&rdquo; Your About page has not changed in a year. There is no good reason to rebuild it for every visitor.</>}
            >
              <BlogHighlight>Static Site Generation pre-builds pages into HTML before a request.</BlogHighlight> It can reduce per-request application work and simplify caching. Actual performance, reliability, and cost still depend on page weight, CDN behavior, traffic, plan limits, third-party scripts, build frequency, and operational requirements. <BlogHighlight>Why it matters:</BlogHighlight> fewer moving parts at the moment someone visits. A pre-built page does not wait on a database or on an application assembling it, so there is less that can break under a traffic spike, which is usually when you can least afford it.
            </Term>

            <Term
              id="isr"
              name="ISR (Incremental Static Regeneration)"
              ask={<>If someone tells you static sites cannot handle frequently-changing content, they are about ten years out of date. Ask them about ISR and see what comes back.</>}
            >
              <BlogHighlight>Incremental Static Regeneration lets a Next.js application update pre-rendered content without rebuilding the entire site.</BlogHighlight> Revalidation can be time-based or triggered, depending on the implementation. It is one architecture option among several; cache rules, content freshness, failure behavior, and hosting support must be designed and tested for the project. <BlogHighlight>Why it matters:</BlogHighlight> it retires an old excuse. &ldquo;We need a database-driven site because our content changes&rdquo; was a real trade-off once: fast but frozen, or fresh but slow. A page can now update on a schedule and still be served as a pre-built file.
            </Term>

            <Term
              id="hydration"
              name="Hydration"
              example={<>It is why a page can look completely ready but ignore your taps for a beat. The visuals arrived, but the JavaScript that makes the buttons actually work is still catching up.</>}
              ask={<>&ldquo;What is our INP score?&rdquo; If the page looks fast but feels sticky when you tap things, heavy hydration is usually the culprit, and it will not show up in a screenshot of a good LCP.</>}
            >
              <BlogHighlight>Hydration attaches client-side behavior to server-rendered HTML.</BlogHighlight> Heavy JavaScript or long main-thread tasks can delay responsiveness, but hydration is only one possible cause. INP measures observed interaction latency; use its diagnostic data before attributing a poor result to one framework step. <BlogHighlight>Why it matters:</BlogHighlight> it is the gap between looking fast and being fast. A visitor does not care that the page painted in under a second if their first tap does nothing, and that dead beat is exactly what INP measures.
            </Term>

            <Term
              id="crawlability"
              name="Crawlability"
              example={<>A stray &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt; can prevent an affected page from appearing in Google. A shared-template error can affect many pages, which is why production output must be checked.</>}
              ask={<>&ldquo;Pull our raw HTML and show me our content is actually in it.&rdquo; And: &ldquo;When did you last check our robots.txt and for stray noindex tags?&rdquo; Both take a minute and both have killed real sites.</>}
            >
              <BlogHighlight>Crawlability is whether an eligible crawler can reach and fetch a URL and access its important content.</BlogHighlight> Robots rules, noindex directives, authentication, server errors, unsupported rendering, and blocked resources can interfere. Crawlability is necessary for indexing by a crawler-based system, but it does not guarantee indexing, ranking, or citation. <BlogHighlight>Why it matters:</BlogHighlight> it is the gate before everything else on this page. You can have the best content, the cleanest markup and the fastest scores, and none of it counts if a bot cannot read the page. It is also the cheapest thing to check and the most embarrassing thing to get wrong.
            </Term>
          </div>

          {/* ─────────── Structured Data & Entities ─────────── */}
          <GroupHeader title="Structured Data & Entities" count={3} />
          <div className="space-y-4">
            <Term
              id="schema"
              name="Schema / structured data / JSON-LD"
              example={<>Supported, policy-compliant structured data can make a page eligible for particular Google search features. Eligibility does not mean that Google will display the feature.</>}
              ask={<>&ldquo;Which supported Google feature is this markup for, does it match visible content, and does it validate?&rdquo;</>}
            >
              <BlogHighlight>Schema.org structured data describes entities and content in a machine-readable form.</BlogHighlight> Google says supported, accurate markup can make pages eligible for search features, while correct markup still does not guarantee display. Keep it consistent with visible content and current policies. There is no official basis here for promising an AI-citation lift. <BlogHighlight>Why it matters:</BlogHighlight> it earns you the richer-looking search result, which is worth having. What it does not do is buy AI citations, because engines work from the visible content. Keep the basics. Do not let anyone bill schema to you as an AI strategy.
            </Term>

            <Term
              id="knowledge-graph"
              name="Knowledge Graph & entities"
              example={<>Search a well-known company and you get a panel: founded, headquarters, founders, all stated as fact. Search most small businesses and you get a link. The first is an entity. The second is a string of text that happens to be a name.</>}
              ask={<>&ldquo;Are our name, founders, pricing and claims identical across our site, LinkedIn, and every review profile?&rdquo; Entity strength is built from boring consistency, not clever tactics. Most agencies never audit it because it is unglamorous work.</>}
            >
              <BlogHighlight>A knowledge graph represents entities and their relationships.</BlogHighlight> Publishing consistent, supportable facts can reduce ambiguity, especially when names or roles overlap. A business cannot declare itself entitled to a knowledge panel or AI mention, however; each product decides how it resolves entities and which sources it trusts. <BlogHighlight>Why it matters:</BlogHighlight> it is the difference between a model naming you and a model saying &ldquo;there are several agencies that may offer this&rdquo;. One names you. The other names nobody. You earn the first by being consistently, boringly the same everywhere, over time.
            </Term>

            <Term
              id="eeat"
              name="E-E-A-T"
              example={<>Two pages give identical advice. One is by &ldquo;Admin,&rdquo; no bio. The other is by a named engineer whose author page shows the projects, with real before-and-after numbers in the post. Same words, completely different weight, to a reader and to a model deciding who to quote.</>}
              ask={<>&ldquo;Whose name goes on this, and what have they actually done?&rdquo; If your content is ghost-written by someone with no experience of the work and published under a generic byline, you are buying words that carry no authority.</>}
            >
              <BlogHighlight>E-E-A-T refers to experience, expertise, authoritativeness, and trustworthiness in Google&apos;s search-quality guidance.</BlogHighlight> Quality raters use the concepts to evaluate results; they are not a public site score or a standalone ranking switch. For publishers, the durable practice is to use accurate bylines, first-hand evidence where relevant, transparent sourcing, and accountable corrections. <BlogHighlight>Why it matters:</BlogHighlight> the first E, Experience, is the one most content fails. It asks something no amount of research answers: have you actually done this? A page about migrating a site written by someone who has migrated sites reads differently and cites differently than one assembled from other people&apos;s articles.
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
              ask={<>&ldquo;What are our 75th-percentile LCP, INP, and CLS for mobile and desktop field data, and what does the lab trace show?&rdquo; Use both where available for different purposes.</>}
            >
              <BlogHighlight>Core Web Vitals are LCP for loading, INP for responsiveness, and CLS for visual stability.</BlogHighlight> Google recommends evaluating the 75th percentile separately for mobile and desktop and uses Core Web Vitals in its ranking systems alongside many other signals. Better performance can help users, but revenue, bounce, and ranking effects must be measured on the specific property rather than inferred from the thresholds. <BlogHighlight>Why it matters:</BlogHighlight> each one is a moment where a real buyer gets annoyed and leaves: waiting on a blank screen, tapping a button that does nothing, or tapping the wrong thing because the page moved under them.
            </Term>

            <Term
              id="pagespeed"
              name="PageSpeed & Lighthouse"
              href="/blog/how-to-achieve-100-pagespeed"
              hrefLabel="The 8-step guide to 90+"
              ask={<>&ldquo;What is our mobile score right now, and will you put a number in the contract?&rdquo; Plenty of agencies will promise &ldquo;fast.&rdquo; Far fewer will name the pages, name the device profiles, and write the number into the contract as an acceptance condition. That gap tells you something.</>}
            >
              <BlogHighlight>PageSpeed Insights can show Chrome user-experience field data and a separate Lighthouse lab test.</BlogHighlight> A 90+ Lighthouse performance score can be a lab acceptance target when accepted terms name the pages, profiles, run count, tool version, and test conditions. Field and lab data answer different questions; neither single score proves every real visit has the same experience.
            </Term>

            <Term
              id="ttfb"
              name="TTFB (Time to First Byte)"
              example={<>web.dev gives 0.8 seconds or less as a rough &ldquo;good&rdquo; TTFB guide for most sites, while stressing that TTFB is contextual and is not itself a Core Web Vital.</>}
              ask={<>&ldquo;What is our TTFB?&rdquo; If it is consistently high, no amount of image compression will save you, and anyone selling you image compression as the fix has misdiagnosed the problem.</>}
            >
              <BlogHighlight>Time to First Byte measures the interval from a resource request until its first response byte arrives.</BlogHighlight> A slow TTFB adds delay before later loading work can proceed. It does not identify one cause by itself: network path, cache status, edge configuration, database work, application code, and origin capacity can all contribute. <BlogHighlight>Why it matters:</BlogHighlight> it is the number that separates a platform problem from a page problem. Most speed advice is about what happens after the response arrives. If the first byte is slow, compressing images is rearranging furniture while the visitor stares at nothing.
            </Term>

            <Term
              id="redirect-301"
              name="301 redirect"
              href="/blog/will-migrating-hurt-my-seo"
              hrefLabel="Will migrating hurt my SEO?"
              example={<>You move a page from yoursite.com/pricing-old to yoursite.com/pricing. A 301 sends visitors to the replacement and gives crawlers a strong signal that the new URL should be canonical.</>}
              ask={<>Before anyone touches your site: &ldquo;Show me the complete old-URL-to-new-URL redirect map.&rdquo; Not a promise to handle it. The actual list. This is the single question that separates a safe migration from a disaster.</>}
            >
              <BlogHighlight>A 301 is an HTTP permanent redirect from one URL to another.</BlogHighlight> Google treats permanent redirects as strong canonical signals, but a redirect is only one migration control. Preserve equivalent content, update internal links and canonicals, avoid redirect chains, submit updated sitemaps, and monitor indexing and traffic. No migration can promise unchanged rankings. <BlogHighlight>Why it matters:</BlogHighlight> every link anyone ever built to you is attached to a specific URL. Change the URL without a redirect and it points at a 404. This is the most common way a redesign quietly costs a business its traffic, and the owner often does not notice for weeks.
            </Term>
          </div>

          {/* Bottom CTA */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
            <h3 className="text-xl font-bold text-charcoal mb-2">Not sure which of these your site is failing?</h3>
            <p className="text-stone-500 text-sm mb-6">
              Send us your URL and what you are on now. We will tell you which access, rendering, evidence and performance checks belong in your migration plan, and write down the limits of each test.
            </p>
            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-colors">
              Get Your Migration Plan <ArrowRight className="w-4 h-4" />
            </CalModalButton>
          </div>

          <section className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-3">Primary references checked July 31, 2026</h2>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">
              Product behavior changes. These links support the definitions and limitations above; recheck them before using the glossary in a proposal or audit.
            </p>
            <ul className="space-y-2 text-sm">
              <li><a className="text-cognac underline underline-offset-4" href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noreferrer">Google: optimizing for generative AI in Search</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noreferrer">Google: JavaScript SEO basics</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noreferrer">Google: structured-data guidelines</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">web.dev: Core Web Vitals</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://web.dev/articles/optimize-ttfb" target="_blank" rel="noreferrer">web.dev: Time to First Byte</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring" target="_blank" rel="noreferrer">Chrome: experimental Agentic Browsing scoring</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noreferrer">OpenAI: crawlers and bots</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noreferrer">OpenAI: publishers and developers FAQ</a></li>
              <li><a className="text-cognac underline underline-offset-4" href="https://schema.org/SpeakableSpecification" target="_blank" rel="noreferrer">Schema.org: SpeakableSpecification</a></li>
            </ul>
          </section>

          {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}

          <RelatedPosts currentPostId="aeo-web-performance-glossary" />
        </div>
      </section>
      </article>

      <Footer />
    </main>
  );
}
