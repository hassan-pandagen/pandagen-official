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
  "aeo": "Answer Engine Optimization: improving the technical access, clarity, usefulness, and evidence of content that may appear in search and AI-generated answers. It cannot guarantee crawling, inclusion, ranking, recommendation, or citation.",
  "geo": "Generative Engine Optimization: an industry label for work intended to improve visibility in generative answers. It overlaps heavily with AEO and conventional search fundamentals; there is no universally settled boundary.",
  "query-fan-out": "A retrieval technique in which a system expands a question into related searches or subtopics before composing a response. Covering related user needs can make a page more useful, but does not guarantee selection as a source.",
  "rag": "Retrieval-Augmented Generation: a design pattern in which a system retrieves external material and supplies it to a generative model. Implementations, sources, freshness rules, and citation behavior differ by product.",
  "ai-crawlers": "Bots associated with AI products, including OAI-SearchBot and GPTBot. User-agent purpose, access controls, rendering behavior, and product use differ, so publishers should check each vendor's current documentation and server logs.",
  "semantic-triple": "A subject-predicate-object representation of a fact. Writing consistent, specific statements can reduce ambiguity for readers and machines, but no sentence format guarantees recognition or citation.",
  "speakable": "A Schema.org property that identifies page sections suited to text-to-speech. It is descriptive markup, not evidence of an AI-search ranking or citation advantage.",
  "agentic-browsing": "AI software navigating or acting on a website for a user. Lighthouse introduced an experimental Agentic Browsing category in 2026 with deterministic checks and a pass ratio, not a weighted 0-to-100 ranking.",
  "llms-txt": "A proposed Markdown file at a site's root that summarizes selected content. Some developer and audit tools recognize it, but its presence does not guarantee discovery, indexing, recommendation, or citation.",
  "answer-first": "An editorial technique that states the main answer early and then adds evidence and nuance. It can improve readability and extractability, but there is no universal word-count or citation rule.",
  "eeat": "Experience, Expertise, Authoritativeness and Trustworthiness: concepts used by Google's search quality raters to assess results. They are useful editorial checks, not a standalone score or direct ranking switch.",
  "csr": "Client-Side Rendering: the browser uses JavaScript to create some or all page content after receiving the initial response. Search and AI products have different rendering capabilities, so critical public content is safer in the initial or server-rendered HTML.",
  "ssr": "Server-Side Rendering: the server returns rendered HTML for a request. It reduces dependence on client-side JavaScript for important content, while status codes, access rules, markup, and crawler behavior still matter.",
  "ssg": "Static Site Generation: pages are pre-built into HTML before a request. It can reduce server work and improve reliability, but actual speed and cost still depend on the page, CDN, traffic, plan, and third-party code.",
  "isr": "Incremental Static Regeneration: a Next.js feature that serves static pages but rebuilds them in the background on a schedule, combining static speed with fresh content.",
  "hydration": "The step where JavaScript attaches interactivity to server-rendered HTML in the browser. Heavy hydration can delay interactivity even when the page appears loaded.",
  "crawlability": "Whether an eligible crawler can reach and fetch a page and access its important content. Robots rules, noindex directives, authentication, server errors, and rendering problems can each interfere.",
  "schema": "Schema.org structured data, often JSON-LD, describes entities and content in a machine-readable form. Supported markup can make a page eligible for Google search features, but valid markup guarantees neither display nor AI citation.",
  "knowledge-graph": "A graph of entities and their relationships. Consistent, supportable facts can reduce ambiguity, but recognition, ranking, and citation remain decisions made by each search or AI product.",
  "core-web-vitals": "Google's user-experience metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Google uses Core Web Vitals in its ranking systems, alongside many other signals.",
  "pagespeed": "PageSpeed Insights combines available Chrome user-experience field data with a Lighthouse lab test. A 90+ Lighthouse performance score is one possible acceptance target, not proof that every real visit passes Core Web Vitals.",
  "ttfb": "Time to First Byte: the interval from requesting a resource until the first response byte arrives. It affects later loading milestones, but diagnosis must separate network, cache, edge, application, and origin factors.",
  "redirect-301": "An HTTP permanent redirect from one URL to another. Google treats permanent redirects as strong canonical signals, but safe migrations also require content equivalence, internal-link updates, monitoring, and time.",
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
    modifiedTime: "2026-07-24",
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
      "dateModified": "2026-07-24T00:00:00-05:00",
      "citation": [
        "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
        "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
        "https://web.dev/articles/vitals",
        "https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring",
        "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
        "https://schema.org/SpeakableSpecification"
      ],
      "author": {
        "@type": "Person",
        "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
        "name": "Hassan Jamal",
        "jobTitle": "Co-founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about",
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
      "description": "Source-linked definitions of 23 AI-search, rendering, structured-data, and web-performance terms, including practical limitations.",
      "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
      "datePublished": "2026-07-16T00:00:00-05:00",
      "dateModified": "2026-07-24T00:00:00-05:00",
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
              readTime="20 min read"
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
              <BlogHighlight>Answer Engine Optimization is the work of improving a page&apos;s technical access, clarity, usefulness, and evidence for search and AI-generated answers.</BlogHighlight> Google&apos;s current guidance says the same search fundamentals still apply to its generative features. OpenAI separately documents access through OAI-SearchBot and referral tagging. Neither vendor promises that an eligible page will be included, ranked, recommended, or cited.
            </Term>

            <Term
              id="geo"
              name="GEO (Generative Engine Optimization)"
              ask={<>If you are quoted &ldquo;AEO&rdquo; and &ldquo;GEO&rdquo; as two separate line items, ask what is technically different between them. If the answer is vague, you are being billed twice for one job.</>}
            >
              <BlogHighlight>GEO and AEO are overlapping industry labels, not formal standards with one accepted boundary.</BlogHighlight> The shared foundation is useful content, crawl access, clear entities, accurate markup, and measurement. Product-specific controls still differ, so a proposal should name the engines, deliverables, and evidence instead of implying one tactic produces the same result everywhere.
            </Term>

            <Term
              id="query-fan-out"
              name="Query fan-out"
              example={<>A system may expand &ldquo;why is my website not converting?&rdquo; into related questions about speed, clarity, trust, mobile usability, and offer fit before composing an answer. The exact expansion is product- and query-dependent.</>}
              ask={<>&ldquo;Which related user needs does this page answer, and which are outside its scope?&rdquo; The goal is useful coverage, not manufacturing a fixed number of headings.</>}
            >
              <BlogHighlight>Query fan-out expands a question into related searches or subtopics before a response is composed.</BlogHighlight> Google describes this technique for its generative Search experiences. It supports a sensible editorial lesson: cover connected user needs when they belong on the page. It does not establish a fixed number of sub-queries or guarantee that broader content will be retrieved or cited.
            </Term>

            <Term
              id="rag"
              name="RAG (Retrieval-Augmented Generation)"
              example={<>It is why Perplexity can answer a question about something that happened this week. It fetched live pages the moment you asked, rather than reciting only what it memorized back when it was trained.</>}
              ask={<>&ldquo;Which statements need current sources, and when were those sources last checked?&rdquo; Recency matters for changing facts, while stable topics may not need frequent rewriting.</>}
            >
              <BlogHighlight>Retrieval-Augmented Generation supplies retrieved material to a generative model as additional context.</BlogHighlight> Search products may use different indexes, partners, ranking systems, and retrieval schedules. Publishing a page can make it eligible for discovery, but not necessarily on the same day and not with a citation.
            </Term>

            <Term
              id="ai-crawlers"
              name="AI crawlers (GPTBot, ClaudeBot, PerplexityBot)"
              href="/blog/lovable-site-not-showing-on-google"
              hrefLabel="How to test an AI-built site's rendered output"
              example={<>Compare the HTTP response, a rendered browser view, robots rules, and server logs. Together they show what was delivered, what required JavaScript, what was allowed, and whether a named crawler actually requested the URL.</>}
              ask={<>&ldquo;Show me the initial HTML, rendered HTML, access rules, and dated server-log evidence for the crawler we care about.&rdquo;</>}
            >
              <BlogHighlight>AI-related crawlers have different purposes, access tokens, and documented behavior.</BlogHighlight> OpenAI, for example, distinguishes OAI-SearchBot for search from GPTBot for potential training use. Google Search executes JavaScript, while Google also warns that not every bot can. Because rendering behavior can change and is not uniformly documented, critical public content should be available in the initial or server-rendered HTML and verified with product documentation and logs.
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
              <BlogHighlight>A semantic triple represents a fact as subject, predicate, and object</BlogHighlight>, as in &ldquo;PandaCodeGen builds custom Next.js websites.&rdquo; Specific, consistent statements reduce ambiguity for readers and data systems. They still need evidence and current dates where facts change; the triple format itself is not a ranking or citation mechanism.
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
              <BlogHighlight>Agentic browsing is software navigating or acting on a site for a user.</BlogHighlight> In May 2026 Chrome documented an experimental Lighthouse Agentic Browsing category for Chrome 150 or later. It reports a fractional pass ratio and individual checks, not a weighted 0-to-100 score or a search ranking. The current checks emphasize WebMCP, accessibility-tree quality, layout stability, and llms.txt presence.
            </Term>

            <Term
              id="llms-txt"
              name="llms.txt"
              example={<>A documentation site may publish /llms.txt as a concise index for tools that choose to support the convention. Support must be checked tool by tool.</>}
              ask={<>&ldquo;Which named product consumes this file, according to current documentation or our logs?&rdquo; Presence alone is not an outcome.</>}
            >
              <BlogHighlight>llms.txt is a proposed Markdown file at a site&apos;s root that summarizes selected content.</BlogHighlight> Chrome&apos;s experimental Agentic Browsing audit currently checks whether it exists. That does not establish that Google Search, ChatGPT, or another product will use it to rank or cite the site. Implement it only as a small, maintainable discovery aid for named consumers, never as a promised visibility result.
            </Term>

            <Term
              id="answer-first"
              name="Answer-first writing"
              example={<>Vague: &ldquo;Website speed has become increasingly important.&rdquo; Clearer: &ldquo;Measure real-user LCP, INP, and CLS before choosing a speed fix; a Lighthouse score alone is a lab result.&rdquo;</>}
              ask={<>Does the opening sentence answer the heading accurately, and do the next sentences provide evidence, conditions, and exceptions?</>}
            >
              <BlogHighlight>Answer-first writing states the main answer early, then adds evidence and nuance.</BlogHighlight> It is a readability technique, not a fixed 40-to-60-word rule. Clear, self-contained passages can be easier for people and machines to interpret, but no copy pattern guarantees extraction or citation.
            </Term>

            <InsightBox variant="warning" label="How This Should Be Billed">
              Ask a vendor to map each deliverable to a named problem, source, acceptance check, owner, and maintenance duty. Some items may belong in a migration scope; others may be ongoing content or measurement work. The warning sign is not a separate line item by itself, but a promised ranking or citation result that the deliverable cannot prove.
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
              <BlogHighlight>Client-Side Rendering uses browser JavaScript to create some or all page content after the initial response.</BlogHighlight> Google Search can render JavaScript, but Google still recommends server-side or pre-rendering because it helps users and crawlers, and not all bots can run JavaScript. CSR is therefore a test condition, not proof that a page is invisible or the sole cause of low traffic.
            </Term>

            <Term
              id="ssr"
              name="SSR (Server-Side Rendering)"
              ask={<>If you are on CSR today: &ldquo;What would it take to server-render our marketing pages?&rdquo; It is usually not a rebuild. It is a delivery change, and the answer you get will tell you how deep their knowledge actually goes.</>}
            >
              <BlogHighlight>Server-Side Rendering returns rendered HTML from the server for the requested page.</BlogHighlight> It makes important content available without waiting for client-side rendering and can reduce crawler dependence on JavaScript. It does not by itself guarantee indexing, speed, or accessibility; response time, status codes, markup, hydration, and access rules still matter.
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
              <BlogHighlight>Static Site Generation pre-builds pages into HTML before a request.</BlogHighlight> It can reduce per-request application work and simplify caching. Actual performance, reliability, and cost still depend on page weight, CDN behavior, traffic, plan limits, third-party scripts, build frequency, and operational requirements.
            </Term>

            <Term
              id="isr"
              name="ISR (Incremental Static Regeneration)"
              ask={<>If someone tells you static sites cannot handle frequently-changing content, they are about ten years out of date. Ask them about ISR and see what comes back.</>}
            >
              <BlogHighlight>Incremental Static Regeneration lets a Next.js application update pre-rendered content without rebuilding the entire site.</BlogHighlight> Revalidation can be time-based or triggered, depending on the implementation. It is one architecture option among several; cache rules, content freshness, failure behavior, and hosting support must be designed and tested for the project.
            </Term>

            <Term
              id="hydration"
              name="Hydration"
              example={<>It is why a page can look completely ready but ignore your taps for a beat. The visuals arrived, but the JavaScript that makes the buttons actually work is still catching up.</>}
              ask={<>&ldquo;What is our INP score?&rdquo; If the page looks fast but feels sticky when you tap things, heavy hydration is usually the culprit, and it will not show up in a screenshot of a good LCP.</>}
            >
              <BlogHighlight>Hydration attaches client-side behavior to server-rendered HTML.</BlogHighlight> Heavy JavaScript or long main-thread tasks can delay responsiveness, but hydration is only one possible cause. INP measures observed interaction latency; use its diagnostic data before attributing a poor result to one framework step.
            </Term>

            <Term
              id="crawlability"
              name="Crawlability"
              example={<>A stray &lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt; can prevent an affected page from appearing in Google. A shared-template error can affect many pages, which is why production output must be checked.</>}
              ask={<>&ldquo;Pull our raw HTML and show me our content is actually in it.&rdquo; And: &ldquo;When did you last check our robots.txt and for stray noindex tags?&rdquo; Both take a minute and both have killed real sites.</>}
            >
              <BlogHighlight>Crawlability is whether an eligible crawler can reach and fetch a URL and access its important content.</BlogHighlight> Robots rules, noindex directives, authentication, server errors, unsupported rendering, and blocked resources can interfere. Crawlability is necessary for indexing by a crawler-based system, but it does not guarantee indexing, ranking, or citation.
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
              <BlogHighlight>Schema.org structured data describes entities and content in a machine-readable form.</BlogHighlight> Google says supported, accurate markup can make pages eligible for search features, while correct markup still does not guarantee display. Keep it consistent with visible content and current policies. There is no official basis here for promising an AI-citation lift.
            </Term>

            <Term
              id="knowledge-graph"
              name="Knowledge Graph & entities"
              example={<>Search a well-known company and you get a panel: founded, headquarters, founders, all stated as fact. Search most small businesses and you get a link. The first is an entity. The second is a string of text that happens to be a name.</>}
              ask={<>&ldquo;Are our name, founders, pricing and claims identical across our site, LinkedIn, and every review profile?&rdquo; Entity strength is built from boring consistency, not clever tactics. Most agencies never audit it because it is unglamorous work.</>}
            >
              <BlogHighlight>A knowledge graph represents entities and their relationships.</BlogHighlight> Publishing consistent, supportable facts can reduce ambiguity, especially when names or roles overlap. A business cannot declare itself entitled to a knowledge panel or AI mention, however; each product decides how it resolves entities and which sources it trusts.
            </Term>

            <Term
              id="eeat"
              name="E-E-A-T"
              example={<>Two pages give identical advice. One is by &ldquo;Admin,&rdquo; no bio. The other is by a named engineer whose author page shows the projects, with real before-and-after numbers in the post. Same words, completely different weight, to a reader and to a model deciding who to quote.</>}
              ask={<>&ldquo;Whose name goes on this, and what have they actually done?&rdquo; If your content is ghost-written by someone with no experience of the work and published under a generic byline, you are buying words that carry no authority.</>}
            >
              <BlogHighlight>E-E-A-T refers to experience, expertise, authoritativeness, and trustworthiness in Google&apos;s search-quality guidance.</BlogHighlight> Quality raters use the concepts to evaluate results; they are not a public site score or a standalone ranking switch. For publishers, the durable practice is to use accurate bylines, first-hand evidence where relevant, transparent sourcing, and accountable corrections.
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
              <BlogHighlight>Core Web Vitals are LCP for loading, INP for responsiveness, and CLS for visual stability.</BlogHighlight> Google recommends evaluating the 75th percentile separately for mobile and desktop and uses Core Web Vitals in its ranking systems alongside many other signals. Better performance can help users, but revenue, bounce, and ranking effects must be measured on the specific property rather than inferred from the thresholds.
            </Term>

            <Term
              id="pagespeed"
              name="PageSpeed & Lighthouse"
              href="/blog/how-to-achieve-100-pagespeed"
              hrefLabel="The 8-step guide to 90+"
              ask={<>&ldquo;What is our mobile score right now, and will you put a number in the contract?&rdquo; Plenty of agencies will promise &ldquo;fast.&rdquo; Very few will write a number down and attach a refund to it. That gap tells you something.</>}
            >
              <BlogHighlight>PageSpeed Insights can show Chrome user-experience field data and a separate Lighthouse lab test.</BlogHighlight> A 90+ Lighthouse performance score can be a lab acceptance target when accepted terms name the pages, profiles, run count, tool version, and test conditions. Field and lab data answer different questions; neither single score proves every real visit has the same experience.
            </Term>

            <Term
              id="ttfb"
              name="TTFB (Time to First Byte)"
              example={<>web.dev gives 0.8 seconds or less as a rough &ldquo;good&rdquo; TTFB guide for most sites, while stressing that TTFB is contextual and is not itself a Core Web Vital.</>}
              ask={<>&ldquo;What is our TTFB?&rdquo; If it is consistently high, no amount of image compression will save you, and anyone selling you image compression as the fix has misdiagnosed the problem.</>}
            >
              <BlogHighlight>Time to First Byte measures the interval from a resource request until its first response byte arrives.</BlogHighlight> A slow TTFB adds delay before later loading work can proceed. It does not identify one cause by itself: network path, cache status, edge configuration, database work, application code, and origin capacity can all contribute.
            </Term>

            <Term
              id="redirect-301"
              name="301 redirect"
              href="/blog/will-migrating-hurt-my-seo"
              hrefLabel="Will migrating hurt my SEO?"
              example={<>You move a page from yoursite.com/pricing-old to yoursite.com/pricing. A 301 sends visitors to the replacement and gives crawlers a strong signal that the new URL should be canonical.</>}
              ask={<>Before anyone touches your site: &ldquo;Show me the complete old-URL-to-new-URL redirect map.&rdquo; Not a promise to handle it. The actual list. This is the single question that separates a safe migration from a disaster.</>}
            >
              <BlogHighlight>A 301 is an HTTP permanent redirect from one URL to another.</BlogHighlight> Google treats permanent redirects as strong canonical signals, but a redirect is only one migration control. Preserve equivalent content, update internal links and canonicals, avoid redirect chains, submit updated sitemaps, and monitor indexing and traffic. No migration can promise unchanged rankings.
            </Term>
          </div>

          {/* Bottom CTA */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
            <h3 className="text-xl font-bold text-charcoal mb-2">Not sure which of these your site is failing?</h3>
            <p className="text-stone-500 text-sm mb-6">
              Share your URL and current platform. We&apos;ll identify the access, rendering, evidence, and performance checks that belong in a migration plan, with the test limits written down.
            </p>
            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-colors">
              Get Your Migration Plan <ArrowRight className="w-4 h-4" />
            </CalModalButton>
          </div>

          <section className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-3">Primary references checked July 24, 2026</h2>
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
