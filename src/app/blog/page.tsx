"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Search, User, ShieldAlert, Layers, ShieldCheck, TrendingDown, DollarSign, Filter, X } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { blogPosts, type IllustrationType } from "@/data/blog";

// --- ANIMATIONS (Must be present!) ---
const WPIllustration = () => (
  <div className="w-full h-full bg-red-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.2),transparent_70%)]" />
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} animate={{ y: [-20, 150] }} transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5, ease: "linear" }} className="absolute text-red-500/40 font-mono text-lg font-bold" style={{ left: `${20 + i * 15}%`, top: '-20%' }}>$$$</motion.div>
    ))}
    <div className="z-10 bg-red-900/20 border border-red-500/50 p-4 rounded-xl backdrop-blur-md relative">
        <ShieldAlert className="w-12 h-12 text-red-500" />
    </div>
  </div>
);

const SpeedIllustration = () => (
  <div className="w-full h-full bg-green-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.2),transparent_70%)]" />
    <div className="z-10 text-center">
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 font-mono">0.8-1.2s</div>
        <div className="text-xs text-green-400 uppercase tracking-widest mt-2">Load Time</div>
    </div>
  </div>
);

const SaaSIllustration = () => (
  <div className="w-full h-full bg-blue-950/20 relative overflow-hidden flex items-center justify-center">
     <Layers className="w-16 h-16 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
  </div>
);

const CodeIllustration = () => (
  <div className="w-full h-full bg-orange-950/20 relative overflow-hidden p-6 font-mono text-[10px] leading-relaxed text-orange-300/40 flex flex-col justify-center gap-0.5">
     <div className="text-gray-500">{"<!-- 15,000 lines of spaghetti -->"}</div>
     <div className="text-orange-400/60">{"<div class=\"wrapper\">"}</div>
     <div className="pl-3 text-orange-400/50">{"<div class=\"container\">"}</div>
     <div className="pl-6 text-orange-400/40">{"<div class=\"row\">"}</div>
     <div className="pl-9 text-orange-400/30">{"<div class=\"col\">"}</div>
     <div className="pl-12 text-red-400/60">{"<LegacyPlugin />"}</div>
     <div className="pl-12 text-red-400/60">{"<Bloat />"}</div>
     <div className="pl-12 text-red-400/60">{"<TechDebt />"}</div>
     <div className="pl-9 text-orange-400/30">{"</div>"}</div>
     <div className="pl-6 text-orange-400/40">{"</div>"}</div>
     <div className="pl-3 text-orange-400/50">{"</div>"}</div>
     <div className="text-orange-400/60">{"</div>"}</div>
     <div className="text-gray-500 mt-2">{"// 300+ dependencies 💀"}</div>
  </div>
);

const PluginsIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-red-950/30 to-orange-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent_60%)]" />

    {/* Floating Plugin Icons (Puzzle Pieces) */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3
        }}
        className="absolute text-2xl"
        style={{
          left: `${15 + (i % 4) * 20}%`,
          top: `${20 + Math.floor(i / 4) * 40}%`
        }}
      >
        <div className="bg-gray-800/50 border border-orange-500/40 rounded-lg p-2 backdrop-blur-sm">
          <div className="w-6 h-6 bg-orange-500/30 rounded" />
        </div>
      </motion.div>
    ))}

    {/* Floating Money Symbols */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`money-${i}`}
        animate={{ y: [-30, 180] }}
        transition={{
          duration: 2.5 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear"
        }}
        className="absolute text-2xl font-bold text-red-400/50"
        style={{ left: `${20 + i * 12}%`, top: '-30px' }}
      >
        $
      </motion.div>
    ))}

    {/* Center Bill/Invoice */}
    <div className="z-10 relative">
      <div className="bg-red-900/30 border-2 border-red-500/50 rounded-xl p-6 backdrop-blur-md shadow-2xl transform rotate-3">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between text-red-300 border-b border-red-500/30 pb-2">
            <span>30+ Plugins</span>
            <span className="font-bold">INVOICE</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Speed Loss</span>
            <span className="text-red-400">-3.5s</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>HTTP Requests</span>
            <span className="text-red-400">200+</span>
          </div>
          <div className="flex justify-between text-gray-400 border-t border-red-500/30 pt-2">
            <span>Lost Revenue</span>
            <span className="text-red-500 font-bold text-sm">$75K/yr</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrafficIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-950/30 to-red-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(147,51,234,0.15),transparent_70%)]" />

    {/* Trending Down Arrows */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
        className="absolute text-red-500"
        style={{ left: `${20 + i * 15}%`, top: `${20 + i * 10}%` }}
      >
        <TrendingDown className="w-8 h-8" />
      </motion.div>
    ))}

    {/* Traffic Numbers Dropping */}
    <div className="z-10 bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-6 backdrop-blur-md">
      <div className="text-center space-y-2">
        <div className="text-gray-400 text-xs uppercase tracking-widest">Monthly Traffic</div>
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-red-500 font-mono line-through">10,000</div>
        <div className="text-2xl font-bold text-red-400 font-mono flex items-center justify-center gap-2">
          <TrendingDown className="w-5 h-5" />
          2,000
        </div>
      </div>
    </div>
  </div>
);

const SalesIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-emerald-950/20 to-red-950/30 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

    {/* Falling Money */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [-40, 200],
          rotate: [0, 360],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 3 + i * 0.2,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "linear"
        }}
        className="absolute text-3xl text-emerald-400/40 font-bold"
        style={{ left: `${10 + i * 7}%`, top: '-40px' }}
      >
        $
      </motion.div>
    ))}

    {/* Lost Sales Counter */}
    <div className="z-10 bg-red-900/40 border-2 border-red-500/60 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
      <div className="text-center space-y-1">
        <div className="text-red-300 text-xs uppercase tracking-widest font-bold">Lost Revenue/Year</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-300 to-red-600 font-mono">$75K</div>
        <div className="text-gray-400 text-[10px] font-mono">from slow load times</div>
      </div>
    </div>
  </div>
);

const ConversionIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-cyan-950/20 to-blue-950/30 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />

    {/* Conversion Funnel */}
    <div className="z-10 relative flex flex-col items-center gap-3">
      {/* Top of funnel */}
      <div className="w-32 h-8 bg-cyan-500/30 border-2 border-cyan-400/50 rounded-t-xl flex items-center justify-center backdrop-blur-sm">
        <span className="text-xs font-bold text-cyan-300">100 Visitors</span>
      </div>

      {/* Middle */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-20 h-6 bg-cyan-600/40 border-2 border-cyan-400/40 flex items-center justify-center backdrop-blur-sm"
      >
        <Filter className="w-4 h-4 text-cyan-300" />
      </motion.div>

      {/* Bottom - Low conversion */}
      <div className="w-12 h-6 bg-red-500/40 border-2 border-red-400/50 rounded-b-xl flex items-center justify-center backdrop-blur-sm">
        <span className="text-[10px] font-bold text-red-300">1.2%</span>
      </div>

      {/* Conversion Rate Display */}
      <div className="mt-4 bg-blue-900/40 border border-blue-500/50 rounded-lg px-4 py-2 backdrop-blur-md">
        <div className="text-xs text-gray-400 uppercase tracking-wider">Conversion Rate</div>
        <div className="text-2xl font-bold text-red-400 font-mono">1.2%</div>
      </div>
    </div>
  </div>
);

const RankingIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-red-950/30 to-gray-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]" />

    {/* Falling Ranking Numbers */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [-30, 180],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 3 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "linear"
        }}
        className="absolute text-2xl font-bold text-red-400/30 font-mono"
        style={{ left: `${15 + i * 18}%`, top: '-30px' }}
      >
        #{10 + i * 3}
      </motion.div>
    ))}

    {/* Center: Before and After */}
    <div className="z-10 relative flex flex-col items-center gap-4">
      {/* Page 1 Position #3 (Good - crossed out) */}
      <div className="bg-green-900/20 border-2 border-green-500/40 rounded-xl p-4 backdrop-blur-md relative">
        <div className="absolute inset-0 bg-red-500/10 rounded-xl" />
        <div className="relative">
          <div className="text-xs text-green-300 uppercase tracking-widest mb-1">Before</div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-green-400 font-mono line-through opacity-50">Page 1</div>
            <div className="text-3xl font-bold text-green-400 font-mono line-through opacity-50">#3</div>
          </div>
        </div>
      </div>

      {/* Big Red Down Arrow */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-red-500"
      >
        <TrendingDown className="w-12 h-12" />
      </motion.div>

      {/* Page 2 Position #14 (Bad) */}
      <div className="bg-red-900/30 border-2 border-red-500/60 rounded-xl p-4 backdrop-blur-md shadow-2xl">
        <div className="text-xs text-red-300 uppercase tracking-widest mb-1">After</div>
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-red-400 font-mono">Page 2</div>
          <div className="text-3xl font-bold text-red-500 font-mono">#14</div>
        </div>
        <div className="text-[10px] text-gray-400 mt-2 font-mono">-80% traffic loss</div>
      </div>
    </div>
  </div>
);

const CostIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-yellow-950/30 to-orange-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]" />

    {/* Stacking Dollar Bills (Going UP not down) */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [180, -40],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 3 + i * 0.2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear"
        }}
        className="absolute text-3xl text-yellow-400/40 font-bold"
        style={{ left: `${15 + i * 10}%`, top: '180px' }}
      >
        $
      </motion.div>
    ))}

    {/* Price Tag with Increasing Numbers */}
    <div className="z-10 bg-orange-900/40 border-2 border-yellow-500/60 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
      <div className="text-center space-y-2">
        <div className="text-yellow-300 text-xs uppercase tracking-widest font-bold">Monthly Cost</div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-600 font-mono"
        >
          $2,300
        </motion.div>
        <div className="text-gray-400 text-[10px] font-mono">+ plugins + hosting</div>
      </div>
    </div>
  </div>
);

const PerformanceIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-950/30 to-cyan-950/20 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_70%)]" />

    {/* Performance Bars Animation */}
    <div className="z-10 relative flex flex-col gap-4 w-48">
      {/* Before Bar (Slow) */}
      <div className="space-y-1">
        <div className="text-xs text-gray-400 uppercase tracking-wider">Before</div>
        <div className="h-6 bg-gray-800/50 rounded-full overflow-hidden border border-white/10">
          <motion.div
            animate={{ width: ["0%", "85%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-end pr-2"
          >
            <span className="text-[10px] font-bold text-white">4.2s</span>
          </motion.div>
        </div>
      </div>

      {/* After Bar (Fast) */}
      <div className="space-y-1">
        <div className="text-xs text-cyan-300 uppercase tracking-wider">After</div>
        <div className="h-6 bg-gray-800/50 rounded-full overflow-hidden border border-cyan-500/30">
          <motion.div
            animate={{ width: ["0%", "25%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-end pr-2"
          >
            <span className="text-[10px] font-bold text-white">0.9s</span>
          </motion.div>
        </div>
      </div>

      {/* Performance Gain Label */}
      <div className="mt-2 text-center">
        <div className="inline-block bg-purple-900/40 border border-purple-500/50 rounded-lg px-3 py-1">
          <span className="text-xs text-purple-300 font-bold">4.7× Faster</span>
        </div>
      </div>
    </div>
  </div>
);

// Map illustration types to components
const getIllustration = (type: IllustrationType) => {
  const illustrations = {
    wordpress: <WPIllustration />,
    speed: <SpeedIllustration />,
    saas: <SaaSIllustration />,
    code: <CodeIllustration />,
    plugins: <PluginsIllustration />,
    traffic: <TrafficIllustration />,
    sales: <SalesIllustration />,
    conversion: <ConversionIllustration />,
    ranking: <RankingIllustration />,
    cost: <CostIllustration />,
    performance: <PerformanceIllustration />,
  };
  return illustrations[type];
};

// Combine blog data with illustrations and sort by newest first
const articles = blogPosts
  .map(post => ({
    ...post,
    illustration: getIllustration(post.illustrationType),
  }))
  .sort((a, b) => {
    const dateA = new Date(a.lastModified || a.date);
    const dateB = new Date(b.lastModified || b.date);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories from blog posts
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter articles by category and search query
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Schema.org structured data for blog listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.pandacodegen.com/blog#webpage",
        "url": "https://www.pandacodegen.com/blog",
        "name": "PandaGen Blog - Insights from the Engine Room",
        "description": "Expert insights on Next.js development, WordPress migration, Shopify optimization, and enterprise web performance.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.pandacodegen.com/blog#breadcrumb"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.pandacodegen.com/blog#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pandacodegen.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.pandacodegen.com/blog"
          }
        ]
      },
      {
        "@type": "Blog",
        "@id": "https://www.pandacodegen.com/blog#blog",
        "name": "PandaGen Blog",
        "description": "Technical insights on modern web development, WordPress alternatives, and performance optimization.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "blogPost": articles.map((article) => ({
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "url": `https://www.pandacodegen.com/blog/${article.id}`,
          "datePublished": new Date(article.date).toISOString(),
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "publisher": {
            "@id": "https://www.pandacodegen.com/#organization"
          }
        }))
      }
    ]
  };

  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="relative z-10">
        <Header />
      <section className="pt-40 pb-16 px-6 text-center relative">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-pink-600/15 blur-[150px] rounded-full pointer-events-none" />

        <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10">Insights from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">Engine Room.</span></h1>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-neon/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-neon text-black'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-neon/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Result Count */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Showing {filteredArticles.length} of {articles.length} article{articles.length !== 1 ? 's' : ''}
          {searchQuery && ` for "${searchQuery}"`}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
         {filteredArticles.filter(a => a.featured).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block relative">
               <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 bg-[#0A0A0A] grid md:grid-cols-2 hover:border-neon/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                  <div className="h-64 md:h-auto border-r-2 border-white/20">{article.illustration}</div>
                  <div className="p-12 flex flex-col justify-center">
                     <div className="flex items-center gap-4 mb-4">
                        <span className="text-red-400 text-xs font-bold uppercase">{article.category}</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                     </div>
                     <h2 className="text-4xl font-bold text-white mb-6">{article.title}</h2>
                     <p className="text-gray-400 mb-8">{article.excerpt}</p>
                     <div className="flex items-center gap-2 text-white font-bold">Read Analysis <ArrowRight className="w-4 h-4 text-red-400" /></div>
                  </div>
               </div>
            </Link>
         ))}
      </section>

      <section className="container mx-auto px-6 pb-32">
         <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.filter(a => !a.featured).map((article) => (
               <Link key={article.id} href={`/blog/${article.id}`} className="group bg-[#0A0A0A] border-2 border-white/20 rounded-3xl overflow-hidden hover:border-neon/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] hover:scale-[1.02]">
                  <div className="h-56 w-full border-b-2 border-white/20">{article.illustration}</div>
                  <div className="p-8">
                     <div className="flex items-center gap-3 mb-3">
                        <span className="text-neon text-xs font-bold uppercase">{article.category}</span>
                        <span className="text-gray-600 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                     </div>
                     <h3 className="text-xl font-bold text-white my-4">{article.title}</h3>
                     <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5 text-xs text-gray-500">
                        <span>By {article.author}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* THE GUARANTEE CTA (Consistent) */}
      <section className="container mx-auto px-6 pb-32">
         <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-green-500/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck className="w-4 h-4" /> Valid on all projects
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  We don't get paid <br/> unless you win.
               </h2>
               <button 
                 data-cal-namespace="discovery"
                 data-cal-link="pandagen/discovery"
                 data-cal-config='{"layout":"month_view"}'
                 className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
               >
                 Claim Your Guarantee
               </button>
            </div>
         </div>
      </section>

      <Footer />
      </div>
      </main>
      );
      }
