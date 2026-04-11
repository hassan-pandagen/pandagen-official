"use client";

import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { blogPosts, type IllustrationType } from "@/data/blog";

// Pagefind-powered blog search: lazy-loaded, opens a Cmd+K modal with instant results.
// ssr: false because pagefind loads /_pagefind/pagefind.js from the runtime assets.
const BlogSearch = lazyLoad(() => import("@/components/ui/BlogSearch"), { ssr: false });

// Light-mode editorial stat display — data report style (Stripe / McKinsey aesthetic)
// bgTint = very light category color · statColor = deep category color · border = light border
const cardDisplay: Record<IllustrationType, { stat: string; label: string; bgTint: string; statColor: string; border: string }> = {
  aicommerce:  { stat: "AI",           label: "No website visit required",   bgTint: "#eff6ff", statColor: "#1d4ed8", border: "#bfdbfe" },
  security:    { stat: "100K+",        label: "Sites exposed to takeover",   bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  performance: { stat: "3.8s",         label: "Average WordPress load time", bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  hosting:     { stat: "$0",           label: "Monthly hosting cost",        bgTint: "#ecfdf5", statColor: "#065f46", border: "#a7f3d0" },
  speed:       { stat: "100",          label: "Perfect Speed Score",         bgTint: "#ecfdf5", statColor: "#065f46", border: "#a7f3d0" },
  ranking:     { stat: "3×",           label: "More revenue from speed",     bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  conversion:  { stat: "1.2%",         label: "Avg Shopify store CVR",       bgTint: "#f5f3ff", statColor: "#5b21b6", border: "#ddd6fe" },
  sales:       { stat: "$75K",         label: "Lost revenue every year",     bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  plugins:     { stat: "$75K",         label: "Lost to plugin slowdowns",    bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  cost:        { stat: "$2,300",       label: "Monthly you pay Shopify",     bgTint: "#fffbeb", statColor: "#92400e", border: "#fde68a" },
  migration:   { stat: "$8K",          label: "Average migration investment", bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  traffic:     { stat: "80%",          label: "Traffic lost after penalty",  bgTint: "#f5f3ff", statColor: "#5b21b6", border: "#ddd6fe" },
  wordpress:   { stat: "3.8s",         label: "WordPress average load time", bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  saas:        { stat: "40+",          label: "Agencies we partner with",    bgTint: "#eff6ff", statColor: "#1d4ed8", border: "#bfdbfe" },
  code:        { stat: "5×",           label: "Faster than WordPress",       bgTint: "#ecfdf5", statColor: "#065f46", border: "#a7f3d0" },
  webflow:     { stat: "$4,700",       label: "Saved yearly vs Webflow",     bgTint: "#fffbeb", statColor: "#92400e", border: "#fde68a" },
};

// Combine blog data and sort by newest first
const articles = blogPosts
  .map(post => ({ ...post }))
  .sort((a, b) => {
    const dateA = new Date(a.lastModified || a.date);
    const dateB = new Date(b.lastModified || b.date);
    return dateB.getTime() - dateA.getTime();
  });

function BlogPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("cat") ?? "All";

  function setActiveCategory(val: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (val && val !== "All") params.set("cat", val); else params.delete("cat");
    router.replace(`/blog?${params.toString()}`, { scroll: false });
  }

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredArticles = articles.filter(article => {
    return activeCategory === "All" || article.category === activeCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const [heroArticle, ...allSecondary] = featuredArticles;
  const secondaryArticles = allSecondary.slice(0, 2);
  const overflowFeatured = allSecondary.slice(2);
  const heroDisplay = heroArticle ? cardDisplay[heroArticle.illustrationType] : null;

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.pandacodegen.com/blog#webpage",
        "url": "https://www.pandacodegen.com/blog",
        "name": "PandaCodeGen Blog - Insights from the Engine Room",
        "description": "Expert insights on Next.js development, WordPress migration, Shopify optimization, and enterprise web performance.",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "breadcrumb": { "@id": "https://www.pandacodegen.com/blog#breadcrumb" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.pandacodegen.com/blog#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" }
        ]
      },
      {
        "@type": "Blog",
        "@id": "https://www.pandacodegen.com/blog#blog",
        "name": "PandaCodeGen Blog",
        "description": "Technical insights on modern web development, WordPress alternatives, and performance optimization.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.pandacodegen.com/#organization",
          "name": "PandaCodeGen",
          "url": "https://www.pandacodegen.com"
        },
        "blogPost": articles.map((article) => {
          const raw = article.lastModified || article.date;
          const hasYear = /\d{4}/.test(raw);
          const year = hasYear ? "" : raw.startsWith("Dec") ? ", 2025" : ", 2026";
          const parsed = new Date(`${raw}${year}`);
          const iso = isNaN(parsed.getTime()) ? "2026-01-01T00:00:00.000Z" : parsed.toISOString();
          return {
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "url": `https://www.pandacodegen.com/blog/${article.id}`,
            "datePublished": iso,
            "author": {
              "@type": "Person",
              "name": article.author,
              "url": "https://www.pandacodegen.com/about/hassan"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.pandacodegen.com/#organization",
              "name": "PandaCodeGen",
              "url": "https://www.pandacodegen.com"
            }
          };
        })
      }
    ]
  };

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Header />

      <section className="pt-20 md:pt-40 pb-10 md:pb-16 px-6 text-center relative border-b border-stone-200">
        <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">The Journal</p>
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal relative z-10">
          Insights from the <span className="font-serif italic text-cognac">Engine Room.</span>
        </h1>
        <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto">
          Technical guides on Next.js, WordPress migration, e-commerce performance, and web speed, written by the engineers who build it.
        </p>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Pagefind search: opens a Cmd+K modal with instant full-text results */}
          <BlogSearch />

          {/* Category Filters: horizontal scroll on mobile, wrap on desktop */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto md:overflow-visible md:flex-wrap scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
            <Filter className="w-4 h-4 text-stone-600 shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-400 hover:text-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-6 text-center text-stone-600 text-sm">
          Showing {filteredArticles.length} of {articles.length} article{articles.length !== 1 ? 's' : ''}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </div>
      </section>

      {/* Featured Articles — Hero + 2 secondary */}
      {heroArticle && heroDisplay && (
        <section className="container mx-auto px-6 py-12">
          <div className="flex flex-col gap-5">

            {/* Hero — full width, compact */}
            <Link href={`/blog/${heroArticle.id}`} className="group block">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200 bg-white grid md:grid-cols-2 hover:border-stone-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div
                  className="relative overflow-hidden flex flex-col justify-center p-10 min-h-[240px]"
                  style={{ backgroundColor: heroDisplay.bgTint, borderRight: `1px solid ${heroDisplay.border}` }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit"
                    style={{ backgroundColor: `${heroDisplay.statColor}18`, color: heroDisplay.statColor, border: `1px solid ${heroDisplay.border}` }}
                  >
                    Featured
                  </div>
                  <div className="text-6xl md:text-7xl font-black leading-none" style={{ color: heroDisplay.statColor }}>
                    {heroDisplay.stat}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: `${heroDisplay.statColor}90` }}>
                    {heroDisplay.label}
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L100 0 L100 100 Z" style={{ fill: heroDisplay.statColor }} />
                    </svg>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: heroDisplay.statColor }}>{heroArticle.category}</span>
                    <span className="text-stone-400 text-xs">·</span>
                    <span className="text-stone-400 text-xs">{heroArticle.date}</span>
                    <span className="text-stone-400 text-xs">·</span>
                    <span className="text-stone-400 text-xs">{heroArticle.readTime} read</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-snug mb-4 group-hover:text-stone-700 transition-colors">
                    {heroArticle.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{heroArticle.excerpt}</p>
                  <div className="flex items-center gap-2 font-bold text-charcoal group-hover:gap-3 transition-all mt-6">
                    Read Analysis <ArrowRight className="w-4 h-4" style={{ color: heroDisplay.statColor }} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Secondary featured — 2 side by side */}
            {secondaryArticles.length > 0 && (
              <div className="grid md:grid-cols-2 gap-5">
                {secondaryArticles.map((article) => {
                  const sd = cardDisplay[article.illustrationType];
                  return (
                    <Link key={article.id} href={`/blog/${article.id}`} className="group block h-full">
                      <div className="relative rounded-4xl overflow-hidden border border-stone-200 bg-white grid grid-cols-[180px_1fr] hover:border-stone-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                        <div
                          className="relative overflow-hidden flex flex-col justify-center p-7"
                          style={{ backgroundColor: sd.bgTint, borderRight: `1px solid ${sd.border}` }}
                        >
                          <div className="text-3xl md:text-4xl font-black leading-none" style={{ color: sd.statColor }}>
                            {sd.stat}
                          </div>
                          <div className="text-[10px] font-bold uppercase tracking-wider mt-2" style={{ color: `${sd.statColor}99` }}>
                            {sd.label}
                          </div>
                          <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0 100 L100 0 L100 100 Z" style={{ fill: sd.statColor }} />
                            </svg>
                          </div>
                        </div>
                        <div className="p-7 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: sd.statColor }}>{article.category}</span>
                            <span className="text-stone-400 text-xs">·</span>
                            <span className="text-stone-400 text-xs">{article.date}</span>
                          </div>
                          <h2 className="text-lg md:text-xl font-bold text-charcoal leading-snug line-clamp-3 group-hover:text-stone-700 transition-colors">
                            {article.title}
                          </h2>
                          <div className="flex items-center gap-1.5 font-bold text-charcoal group-hover:gap-2.5 transition-all mt-4 text-sm">
                            Read Analysis <ArrowRight className="w-4 h-4" style={{ color: sd.statColor }} />
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
        <div className="grid md:grid-cols-3 gap-6">
          {[...overflowFeatured, ...filteredArticles.filter(a => !a.featured)].map((article) => {
            const display = cardDisplay[article.illustrationType];
            return (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Light-mode data header — tinted bg, colored stat */}
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
                  <div className="text-5xl font-black leading-none" style={{ color: display.statColor }}>
                    {display.stat}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-wider mt-2"
                    style={{ color: `${display.statColor}cc` }}
                  >
                    {display.label}
                  </div>

                  {/* Decorative triangle */}
                  <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 100 L100 0 L100 100 Z" style={{ fill: display.statColor }} />
                    </svg>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4 text-xs text-stone-400">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-stone-700 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-auto pt-5 text-sm font-bold text-charcoal group-hover:gap-2.5 transition-all">
                    Read Analysis <ArrowRight className="w-4 h-4" style={{ color: display.statColor }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function BlogPageClient() {
  return (
    <Suspense fallback={null}>
      <BlogPageInner />
    </Suspense>
  );
}
