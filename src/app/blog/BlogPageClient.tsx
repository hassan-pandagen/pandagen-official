"use client";

import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { IllustrationType, BlogPost } from "@/data/blog";

// Client-safe metadata: full BlogPost minus the heavy faqs[] field that we never render
// in the listing UI. Keeping faqs server-only saves ~20-40KB gzipped on the client bundle.
type BlogPostMeta = Omit<BlogPost, "faqs">;

/** Slim hub summary. The hub prose stays server-side; see blog/page.tsx. */
type Topic = { slug: string; shortLabel: string; h1: string; count: number };

/** postId -> its topical parent (a hub, or a service page for service-owned clusters). */
type ParentMap = Record<string, { label: string; href: string }>;

// Pagefind-powered blog search: lazy-loaded, opens a Cmd+K modal with instant results.
// ssr: false because pagefind loads /_pagefind/pagefind.js from the runtime assets.
const BlogSearch = lazyLoad(() => import("@/components/ui/BlogSearch"), { ssr: false });

// Warm editorial stat display using the site's stone, parchment, and cognac palette.
// Categories keep distinct labels without introducing an unrelated rainbow theme.
const cardDisplay: Record<IllustrationType, { stat: string; label: string; bgTint: string; statColor: string; border: string }> = {
  aicommerce:  { stat: "Protocols",    label: "Verify current support",       bgTint: "#faf7f2", statColor: "#9a3412", border: "#ead8c8" },
  security:    { stat: "Threat model", label: "Scope, patch, and monitor",     bgTint: "#f7f4ef", statColor: "#7c2d12", border: "#e7e0d8" },
  performance: { stat: "CWV",          label: "Measure lab and field data",   bgTint: "#fafaf9", statColor: "#57534e", border: "#e7e5e4" },
  hosting:     { stat: "TCO",          label: "Model the full operating cost", bgTint: "#f5f2ed", statColor: "#44403c", border: "#ded8cf" },
  speed:       { stat: "Method",       label: "Define representative tests", bgTint: "#faf7f2", statColor: "#b8410c", border: "#ead8c8" },
  ranking:     { stat: "Search",       label: "Measure an external outcome",  bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  conversion:  { stat: "Funnel",       label: "Use the site's own baseline", bgTint: "#f7f4ef", statColor: "#78350f", border: "#e7e0d8" },
  sales:       { stat: "Attribution",  label: "Test before claiming causation", bgTint: "#faf7f2", statColor: "#9a3412", border: "#ead8c8" },
  plugins:     { stat: "Dependencies", label: "Inventory and test changes",   bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  cost:        { stat: "Invoices",     label: "Use current dated evidence",    bgTint: "#fffbeb", statColor: "#92400e", border: "#fde68a" },
  migration:   { stat: "Inventory",    label: "Scope data and continuity",     bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  traffic:     { stat: "Continuity",   label: "Plan and monitor the cutover", bgTint: "#f5f2ed", statColor: "#57534e", border: "#ded8cf" },
  wordpress:   { stat: "Baseline",     label: "Measure the actual site",       bgTint: "#faf7f2", statColor: "#9a3412", border: "#ead8c8" },
  saas:        { stat: "Lifecycle",    label: "Compare equivalent options",    bgTint: "#fafaf9", statColor: "#44403c", border: "#e7e5e4" },
  code:        { stat: "Architecture", label: "Choose for documented needs",  bgTint: "#f7f4ef", statColor: "#7c2d12", border: "#e7e0d8" },
  webflow:     { stat: "Workflows",    label: "Price the whole lifecycle",     bgTint: "#fffbeb", statColor: "#92400e", border: "#fde68a" },
};

// Resolve the card visual for a given post. Per-post cardStat/cardStatLabel win over the
// illustrationType default, so multiple posts sharing a type can carry unique hooks while
// keeping the same color scheme (bgTint, statColor, border).
function getCardDisplay(article: BlogPostMeta) {
  const base = cardDisplay[article.illustrationType];
  return {
    stat: article.cardStat ?? base.stat,
    label: article.cardStatLabel ?? base.label,
    bgTint: base.bgTint,
    statColor: base.statColor,
    border: base.border,
  };
}

// Topic label on a card is deliberately NOT a link: the whole card is already an
// <a>, and an anchor inside an anchor is invalid HTML that browsers silently
// restructure. The linked route into each hub is the strip above the fold.
function CardMeta({ article, parents }: { article: BlogPostMeta; parents: ParentMap }) {
  const parent = parents[article.id];
  return (
    <>
      {parent ? (
        <>
          <span className="text-stone-700 text-xs font-semibold">{parent.label}</span>
          <span aria-hidden="true" className="text-stone-600 text-xs">·</span>
        </>
      ) : null}
      <span className="text-stone-600 text-xs">Published {article.date}</span>
      {article.lastModified ? (
        <>
          <span aria-hidden="true" className="text-stone-600 text-xs">·</span>
          <span className="text-stone-600 text-xs">Updated {article.lastModified}</span>
        </>
      ) : null}
    </>
  );
}

// Interactive filter + article list, wrapped in Suspense because it calls useSearchParams()
function BlogArticlesSection({ articles, parents }: { articles: BlogPostMeta[]; parents: ParentMap }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("cat") ?? "All";

  function setActiveCategory(val: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (val && val !== "All") params.set("cat", val); else params.delete("cat");
    router.replace(`/blog?${params.toString()}`, { scroll: false });
  }

  const categories = ["All", ...Array.from(new Set(articles.map(post => post.category)))];

  const filteredArticles = articles.filter(article => {
    return activeCategory === "All" || article.category === activeCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const [heroArticle, ...allSecondary] = featuredArticles;
  const secondaryArticles = allSecondary.slice(0, 2);
  const overflowFeatured = allSecondary.slice(2);
  const heroDisplay = heroArticle ? getCardDisplay(heroArticle) : null;

  return (
    <>
      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Pagefind search: opens a Cmd+K modal with instant full-text results */}
          <BlogSearch />

          {/* Category Filters: horizontal scroll on mobile, wrap on desktop */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto md:overflow-visible md:flex-wrap scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none" tabIndex={0} role="region" aria-label="Scrollable table">
            <Filter aria-hidden="true" className="w-4 h-4 text-stone-600 shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-stone-600 border border-stone-300 hover:border-stone-400 hover:text-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div aria-live="polite" className="mt-6 text-center text-stone-600 text-sm">
          Showing {filteredArticles.length} of {articles.length} article{articles.length !== 1 ? 's' : ''}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </div>
      </section>

      {/* Featured Articles: Hero plus 2 secondary */}
      {heroArticle && heroDisplay && (
        <section className="container mx-auto px-6 py-12">
          <div className="flex flex-col gap-5">

            {/* Hero: full width and compact */}
            <Link href={`/blog/${heroArticle.id}`} className="group block">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200 bg-white grid md:grid-cols-2 hover:border-stone-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div
                  className="relative overflow-hidden flex flex-col justify-center p-8 sm:p-10 min-h-[220px] border-b md:border-b-0 md:border-r"
                  style={{ backgroundColor: heroDisplay.bgTint, borderColor: heroDisplay.border }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit"
                    style={{ backgroundColor: `${heroDisplay.statColor}18`, color: heroDisplay.statColor, border: `1px solid ${heroDisplay.border}` }}
                  >
                    Featured
                  </div>
                  <div className="text-5xl md:text-6xl font-black leading-none break-words" style={{ color: heroDisplay.statColor }}>
                    {heroDisplay.stat}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: heroDisplay.statColor }}>
                    {heroDisplay.label}
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                    <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L100 0 L100 100 Z" style={{ fill: heroDisplay.statColor }} />
                    </svg>
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: heroDisplay.statColor }}>{heroArticle.category}</span>
                    <span aria-hidden="true" className="text-stone-600 text-xs">·</span>
                    <CardMeta article={heroArticle} parents={parents} />
                    <span aria-hidden="true" className="text-stone-600 text-xs">·</span>
                    <span className="text-stone-600 text-xs">{heroArticle.readTime} read</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-snug mb-4 group-hover:text-stone-700 transition-colors">
                    {heroArticle.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{heroArticle.excerpt}</p>
                  <div className="flex items-center gap-2 font-bold text-charcoal group-hover:gap-3 transition-all mt-6">
                    Read Analysis <ArrowRight aria-hidden="true" className="w-4 h-4" style={{ color: heroDisplay.statColor }} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary featured: 2 side by side */}
            {secondaryArticles.length > 0 && (
              <div className="grid md:grid-cols-2 gap-5">
                {secondaryArticles.map((article) => {
                  const sd = getCardDisplay(article);
                  return (
                    <Link key={article.id} href={`/blog/${article.id}`} className="group block h-full">
                      <div className="relative rounded-4xl overflow-hidden border border-stone-200 bg-white grid grid-cols-1 sm:grid-cols-[160px_1fr] hover:border-stone-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                        <div
                          className="relative overflow-hidden flex flex-col justify-center p-7 border-b sm:border-b-0 sm:border-r"
                          style={{ backgroundColor: sd.bgTint, borderColor: sd.border }}
                        >
                          <div className="text-2xl md:text-3xl font-black leading-none break-words" style={{ color: sd.statColor }}>
                            {sd.stat}
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-wider mt-2" style={{ color: sd.statColor }}>
                            {sd.label}
                          </div>
                          <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                            <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0 100 L100 0 L100 100 Z" style={{ fill: sd.statColor }} />
                            </svg>
                          </div>
                        </div>
                        <div className="p-7 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: sd.statColor }}>{article.category}</span>
                            <span aria-hidden="true" className="text-stone-600 text-xs">·</span>
                            <CardMeta article={article} parents={parents} />
                          </div>
                          <h2 className="text-lg md:text-xl font-bold text-charcoal leading-snug line-clamp-3 group-hover:text-stone-700 transition-colors">
                            {article.title}
                          </h2>
                          <div className="flex items-center gap-1.5 font-bold text-charcoal group-hover:gap-2.5 transition-all mt-4 text-sm">
                            Read Analysis <ArrowRight aria-hidden="true" className="w-4 h-4" style={{ color: sd.statColor }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      )}

      {/* Non-Featured Articles Grid */}
      <section className="container mx-auto px-6 pb-16 md:pb-32">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
          {activeCategory === "All" ? "All migration and engineering guides" : `${activeCategory} guides`}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...overflowFeatured, ...filteredArticles.filter(a => !a.featured)].map((article) => {
            const display = getCardDisplay(article);
            return (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Light-mode data header with tinted background and colored stat */}
                <div
                  className="p-6 relative overflow-hidden shrink-0"
                  style={{
                    backgroundColor: display.bgTint,
                    borderBottom: `1px solid ${display.border}`,
                  }}
                >
                  {/* Category label */}
                  <div className="flex justify-between items-start mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: display.statColor }}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Big stat */}
                  <div className="text-4xl font-black leading-none break-words" style={{ color: display.statColor }}>
                    {display.stat}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mt-2"
                    style={{ color: display.statColor }}
                  >
                    {display.label}
                  </div>

                  {/* Decorative triangle */}
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                    <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L100 0 L100 100 Z" style={{ fill: display.statColor }} />
                    </svg>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-xs text-stone-600">
                    <CardMeta article={article} parents={parents} />
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-stone-700 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-auto pt-5 text-sm font-bold text-charcoal group-hover:gap-2.5 transition-all">
                    Read Analysis <ArrowRight aria-hidden="true" className="w-4 h-4" style={{ color: display.statColor }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </>
  );
}

export default function BlogPageClient({
  articles,
  blogSchema,
  topics,
  parents,
}: {
  articles: BlogPostMeta[];
  blogSchema: object;
  topics: Topic[];
  parents: ParentMap;
}) {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      {/* Schema.org JSON-LD for SEO, rendered server-side (not inside Suspense) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Header />

      {/* Hero with h1, rendered server-side so Bingbot and Googlebot see it in initial HTML */}
      <section className="pt-20 md:pt-40 pb-10 md:pb-16 px-6 text-center relative border-b border-stone-200">
        {/* The old H1 kept as the strapline: it is house voice, not query language. */}
        <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">
          Insights from the Engine Room
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-charcoal relative z-10 leading-[1.08] text-balance">
          Website Migration, Speed and <span className="font-serif font-normal italic text-cognac">SEO Guides.</span>
        </h1>
        <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto">
          {articles.length} practical guides on website migration, platform cost, Core Web Vitals,
          commerce architecture and search, from the PandaCodeGen engineering team.
        </p>
      </section>

      {/* Topic hubs, above the fold and in the initial HTML. Each hub is the
          canonical page for its cluster, so this is the main entry point into
          the blog for both readers and crawlers. */}
      <nav aria-label="Browse by topic" className="container mx-auto px-6 pt-10 md:pt-14">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-stone-500">
          Browse by topic
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link
                href={`/blog/topic/${topic.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-cognac/50 hover:text-cognac"
              >
                {topic.shortLabel}
                <span className="text-xs font-normal text-stone-500">{topic.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Interactive filter + article list is isolated in Suspense (uses useSearchParams) */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BlogArticlesSection articles={articles} parents={parents} />
      </Suspense>

      <nav aria-label="All articles" className="container mx-auto px-6 pb-16">
        <details className="rounded-2xl border border-stone-200 bg-white p-5">
          <summary className="min-h-11 cursor-pointer py-2 font-semibold text-charcoal">
            Browse the complete article directory ({articles.length})
          </summary>
          <ul className="mt-4 grid gap-x-8 gap-y-3 border-t border-stone-200 pt-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.id}>
                <Link className="inline-flex min-h-11 items-center text-sm text-stone-700 underline-offset-4 hover:text-cognac hover:underline" href={`/blog/${article.id}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <Footer />
    </main>
  );
}
