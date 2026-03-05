"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldAlert, Layers, ShieldCheck, TrendingDown, Filter, X, Bot, ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { blogPosts, type IllustrationType } from "@/data/blog";

// --- ILLUSTRATIONS (Light Theme) ---
const WPIllustration = () => (
  <div className="w-full h-full bg-red-50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.1),transparent_70%)]" />
    {[...Array(5)].map((_, i) => (
      <motion.div key={i} animate={{ y: [-20, 150] }} transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5, ease: "linear" }} className="absolute text-red-400/60 font-mono text-lg font-bold" style={{ left: `${20 + i * 15}%`, top: '-20%' }}>$$$</motion.div>
    ))}
    <div className="z-10 bg-white border border-red-200 p-4 rounded-xl shadow-sm relative">
      <ShieldAlert className="w-12 h-12 text-red-500" />
    </div>
  </div>
);

const SpeedIllustration = () => (
  <div className="w-full h-full bg-green-50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.15),transparent_70%)]" />
    <div className="z-10 text-center">
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-green-700 font-mono">0.8-1.2s</div>
      <div className="text-xs text-green-600 uppercase tracking-widest mt-2">Load Time</div>
    </div>
  </div>
);

const SaaSIllustration = () => (
  <div className="w-full h-full bg-blue-50 relative overflow-hidden flex items-center justify-center">
    <Layers className="w-16 h-16 text-cognac" />
  </div>
);

const CodeIllustration = () => (
  <div className="w-full h-full bg-orange-50/50 relative overflow-hidden p-6 font-mono text-[10px] leading-relaxed text-orange-600/60 flex flex-col justify-center gap-0.5">
    <div className="text-gray-400">{"<!-- 15,000 lines of spaghetti -->"}</div>
    <div className="text-orange-500/80">{"<div class=\"wrapper\">"}</div>
    <div className="pl-3 text-orange-500/70">{"<div class=\"container\">"}</div>
    <div className="pl-6 text-orange-500/60">{"<div class=\"row\">"}</div>
    <div className="pl-9 text-orange-500/50">{"<div class=\"col\">"}</div>
    <div className="pl-12 text-red-500/80">{"<LegacyPlugin />"}</div>
    <div className="pl-12 text-red-500/80">{"<Bloat />"}</div>
    <div className="pl-12 text-red-500/80">{"<TechDebt />"}</div>
    <div className="pl-9 text-orange-500/50">{"</div>"}</div>
    <div className="pl-6 text-orange-500/60">{"</div>"}</div>
    <div className="pl-3 text-orange-500/70">{"</div>"}</div>
    <div className="text-orange-500/80">{"</div>"}</div>
    <div className="text-gray-400 mt-2">{"// 300+ dependencies 💀"}</div>
  </div>
);

const PluginsIllustration = () => (
  <div className="w-full h-full bg-red-50/80 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08),transparent_60%)]" />

    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        className="absolute text-2xl"
        style={{ left: `${15 + (i % 4) * 20}%`, top: `${20 + Math.floor(i / 4) * 40}%` }}
      >
        <div className="bg-white border border-orange-200 rounded-lg p-2 shadow-sm">
          <div className="w-6 h-6 bg-orange-100 rounded" />
        </div>
      </motion.div>
    ))}

    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`money-${i}`}
        animate={{ y: [-30, 180] }}
        transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
        className="absolute text-2xl font-bold text-red-400/60"
        style={{ left: `${20 + i * 12}%`, top: '-30px' }}
      >
        $
      </motion.div>
    ))}

    <div className="z-10 relative">
      <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-md transform rotate-3">
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between text-red-600 border-b border-red-100 pb-2">
            <span>30+ Plugins</span>
            <span className="font-bold">INVOICE</span>
          </div>
          <div className="flex justify-between text-stone-600">
            <span>Speed Loss</span>
            <span className="text-red-500">-3.5s</span>
          </div>
          <div className="flex justify-between text-stone-600">
            <span>HTTP Requests</span>
            <span className="text-red-500">200+</span>
          </div>
          <div className="flex justify-between text-stone-600 border-t border-red-100 pt-2">
            <span>Lost Revenue</span>
            <span className="text-red-600 font-bold text-sm">$75K/yr</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrafficIllustration = () => (
  <div className="w-full h-full bg-purple-50/50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(147,51,234,0.08),transparent_70%)]" />

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

    <div className="z-10 bg-white border-2 border-purple-200 rounded-xl p-6 shadow-md">
      <div className="text-center space-y-2">
        <div className="text-stone-600 text-xs uppercase tracking-widest">Monthly Traffic</div>
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-red-500 font-mono line-through">10,000</div>
        <div className="text-2xl font-bold text-red-500 font-mono flex items-center justify-center gap-2">
          <TrendingDown className="w-5 h-5" />
          2,000
        </div>
      </div>
    </div>
  </div>
);

const SalesIllustration = () => (
  <div className="w-full h-full bg-emerald-50/50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)]" />

    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [-40, 200], rotate: [0, 360], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
        className="absolute text-3xl text-emerald-500/40 font-bold"
        style={{ left: `${10 + i * 7}%`, top: '-40px' }}
      >
        $
      </motion.div>
    ))}

    <div className="z-10 bg-white border-2 border-red-200 rounded-2xl p-6 shadow-md">
      <div className="text-center space-y-1">
        <div className="text-red-600 text-xs uppercase tracking-widest font-bold">Lost Revenue/Year</div>
        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 font-mono">$75K</div>
        <div className="text-stone-600 text-[10px] font-mono">from slow load times</div>
      </div>
    </div>
  </div>
);

const ConversionIllustration = () => (
  <div className="w-full h-full bg-blue-50/50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />

    <div className="z-10 relative flex flex-col items-center gap-3">
      <div className="w-32 h-8 bg-blue-100 border-2 border-blue-200 rounded-t-xl flex items-center justify-center">
        <span className="text-xs font-bold text-blue-700">100 Visitors</span>
      </div>

      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-20 h-6 bg-blue-200 border-2 border-blue-300 flex items-center justify-center"
      >
        <Filter className="w-4 h-4 text-blue-600" />
      </motion.div>

      <div className="w-12 h-6 bg-red-100 border-2 border-red-200 rounded-b-xl flex items-center justify-center">
        <span className="text-[10px] font-bold text-red-600">1.2%</span>
      </div>

      <div className="mt-4 bg-white border border-blue-200 rounded-lg px-4 py-2 shadow-sm">
        <div className="text-xs text-stone-600 uppercase tracking-wider">Conversion Rate</div>
        <div className="text-2xl font-bold text-red-500 font-mono">1.2%</div>
      </div>
    </div>
  </div>
);

const RankingIllustration = () => (
  <div className="w-full h-full bg-red-50/30 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.08),transparent_70%)]" />

    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [-30, 180], opacity: [0, 0.5, 0] }}
        transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
        className="absolute text-2xl font-bold text-red-400/40 font-mono"
        style={{ left: `${15 + i * 18}%`, top: '-30px' }}
      >
        #{10 + i * 3}
      </motion.div>
    ))}

    <div className="z-10 relative flex flex-col items-center gap-4">
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 shadow-sm relative">
        <div className="text-xs text-green-700 uppercase tracking-widest mb-1">Before</div>
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-green-600 font-mono line-through opacity-60">Page 1</div>
          <div className="text-3xl font-bold text-green-600 font-mono line-through opacity-60">#3</div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-red-500"
      >
        <TrendingDown className="w-12 h-12" />
      </motion.div>

      <div className="bg-white border-2 border-red-200 rounded-xl p-4 shadow-md">
        <div className="text-xs text-red-600 uppercase tracking-widest mb-1">After</div>
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-red-500 font-mono">Page 2</div>
          <div className="text-3xl font-bold text-red-600 font-mono">#14</div>
        </div>
        <div className="text-[10px] text-stone-600 mt-2 font-mono">-80% traffic loss</div>
      </div>
    </div>
  </div>
);

const CostIllustration = () => (
  <div className="w-full h-full bg-yellow-50/50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_70%)]" />

    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [180, -40], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
        className="absolute text-3xl text-yellow-500/50 font-bold"
        style={{ left: `${15 + i * 10}%`, top: '180px' }}
      >
        $
      </motion.div>
    ))}

    <div className="z-10 bg-white border-2 border-yellow-200 rounded-2xl p-6 shadow-md">
      <div className="text-center space-y-2">
        <div className="text-yellow-700 text-xs uppercase tracking-widest font-bold">Monthly Cost</div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-orange-600 font-mono"
        >
          $2,300
        </motion.div>
        <div className="text-stone-600 text-[10px] font-mono">+ plugins + hosting</div>
      </div>
    </div>
  </div>
);

const PerformanceIllustration = () => (
  <div className="w-full h-full bg-purple-50/50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_70%)]" />

    <div className="z-10 relative flex flex-col gap-4 w-48">
      <div className="space-y-1">
        <div className="text-xs text-stone-600 uppercase tracking-wider">Before</div>
        <div className="h-6 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
          <motion.div
            animate={{ width: ["0%", "85%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-end pr-2"
          >
            <span className="text-[10px] font-bold text-white">4.2s</span>
          </motion.div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-xs text-cognac uppercase tracking-wider">After</div>
        <div className="h-6 bg-blue-50 rounded-full overflow-hidden border border-blue-100">
          <motion.div
            animate={{ width: ["0%", "25%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-cognac to-electric flex items-center justify-end pr-2"
          >
            <span className="text-[10px] font-bold text-white">0.9s</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-2 text-center">
        <div className="inline-block bg-purple-50 border border-purple-200 rounded-lg px-3 py-1 shadow-sm">
          <span className="text-xs text-electric font-bold">4.7× Faster</span>
        </div>
      </div>
    </div>
  </div>
);

const SecurityIllustration = () => (
  <div className="w-full h-full bg-purple-50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent_70%)]" />

    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [-15, 15], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.5 }}
        className="absolute text-red-400/40"
        style={{ left: `${15 + i * 25}%`, top: `${30 + (i % 2) * 30}%` }}
      >
        <ShieldAlert className="w-6 h-6" />
      </motion.div>
    ))}

    <div className="z-10 bg-white border border-purple-200 p-5 rounded-xl shadow-md relative">
      <ShieldCheck className="w-14 h-14 text-electric" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 border-2 border-purple-200 rounded-xl"
      />
    </div>
  </div>
);

const AICommerceIllustration = () => (
  <div className="w-full h-full bg-blue-50 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(59,130,246,0.1),transparent_70%)]" />

    {[
      { label: "Shoes $89", x: "8%", delay: 0 },
      { label: "Watch $299", x: "62%", delay: 0.7 },
      { label: "Bag $149", x: "35%", delay: 1.4 },
    ].map(({ label, x, delay }) => (
      <motion.div
        key={label}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        className="absolute top-6 text-[10px] font-bold px-2 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 shadow-sm"
        style={{ left: x }}
      >
        {label}
      </motion.div>
    ))}

    <div className="z-10 flex flex-col items-center gap-3">
      <div className="relative">
        <div className="bg-white border border-blue-200 p-4 rounded-2xl shadow-md">
          <Bot className="w-12 h-12 text-cognac" />
        </div>
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-blue-200 rounded-2xl"
        />
      </div>

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], y: [0, 3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-cognac/60"
      >
        <Zap className="w-4 h-4" />
      </motion.div>

      <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-200 rounded-full shadow-sm">
        <ShoppingCart className="w-4 h-4 text-cognac" />
        <span className="text-[11px] font-bold text-cognac tracking-wide">Purchased</span>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-cognac"
        />
      </div>
    </div>

    <div className="absolute bottom-4 text-[9px] text-cognac/40 font-mono tracking-widest uppercase">
      No website visit required
    </div>
  </div>
);

// Map illustration types to components (used for featured card only)
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
    security: <SecurityIllustration />,
    aicommerce: <AICommerceIllustration />,
  };
  return illustrations[type];
};

// Light-mode editorial stat display — data report style (Stripe / McKinsey aesthetic)
// bgTint = very light category color · statColor = deep category color · border = light border
const cardDisplay: Record<IllustrationType, { stat: string; label: string; bgTint: string; statColor: string; border: string }> = {
  aicommerce:  { stat: "AI Commerce",  label: "No website visit required",  bgTint: "#eff6ff", statColor: "#1d4ed8", border: "#bfdbfe" },
  security:    { stat: "100K+",        label: "Sites exposed",               bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  performance: { stat: "100/100",      label: "PageSpeed score",             bgTint: "#eff6ff", statColor: "#1d4ed8", border: "#bfdbfe" },
  speed:       { stat: "0.9s",         label: "Target load time",            bgTint: "#ecfdf5", statColor: "#065f46", border: "#a7f3d0" },
  ranking:     { stat: "3×",           label: "More organic traffic",        bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  conversion:  { stat: "1.2%",         label: "Avg Shopify CVR",             bgTint: "#f5f3ff", statColor: "#5b21b6", border: "#ddd6fe" },
  sales:       { stat: "$75K",         label: "Lost revenue / year",         bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  plugins:     { stat: "200+",         label: "HTTP requests per load",      bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
  cost:        { stat: "$2,300",       label: "Monthly platform cost",       bgTint: "#fffbeb", statColor: "#92400e", border: "#fde68a" },
  traffic:     { stat: "−80%",         label: "Traffic after penalty",       bgTint: "#f5f3ff", statColor: "#5b21b6", border: "#ddd6fe" },
  wordpress:   { stat: "3.8s",         label: "WordPress avg load time",     bgTint: "#fff1f2", statColor: "#be123c", border: "#fecdd3" },
  saas:        { stat: "99.9%",        label: "Uptime on custom stack",      bgTint: "#ecfdf5", statColor: "#065f46", border: "#a7f3d0" },
  code:        { stat: "300+",         label: "Dependencies on WP",          bgTint: "#fff7ed", statColor: "#c2410c", border: "#fed7aa" },
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
    return dateB.getTime() - dateA.getTime();
  });

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
        "blogPost": articles.map((article) => ({
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.excerpt,
          "url": `https://www.pandacodegen.com/blog/${article.id}`,
          "datePublished": new Date(article.date).toISOString(),
          "author": { "@type": "Person", "name": article.author },
          "publisher": { "@id": "https://www.pandacodegen.com/#organization" }
        }))
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

      <section className="pt-40 pb-16 px-6 text-center relative border-b border-stone-200">
        <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">The Journal</p>
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal relative z-10">
          Insights from the <span className="font-serif italic text-stone-500">Engine Room.</span>
        </h1>
        <p className="mt-6 text-lg text-stone-600 max-w-xl mx-auto">
          Technical guides on Next.js, WordPress migration, e-commerce performance, and web speed, written by the engineers who build it.
        </p>
      </section>

      {/* Search & Filter Section */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-600" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white border border-stone-200 rounded-full text-charcoal placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600 hover:text-charcoal transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-stone-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
          {searchQuery && ` for "${searchQuery}"`}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-6 py-12">
        {filteredArticles.filter(a => a.featured).map((article) => {
          const display = cardDisplay[article.illustrationType];
          return (
            <Link key={article.id} href={`/blog/${article.id}`} className="group block relative mb-8">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-stone-200 bg-white grid md:grid-cols-2 hover:border-stone-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">

                {/* Left: Editorial stat panel */}
                <div
                  className="relative overflow-hidden flex flex-col justify-center p-12 min-h-[320px]"
                  style={{ backgroundColor: display.bgTint, borderRight: `1px solid ${display.border}` }}
                >
                  {/* Featured badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 w-fit"
                    style={{ backgroundColor: `${display.statColor}18`, color: display.statColor, border: `1px solid ${display.border}` }}
                  >
                    Featured
                  </div>

                  {/* Big stat */}
                  <div className="text-7xl md:text-8xl font-black leading-none" style={{ color: display.statColor }}>
                    {display.stat}
                  </div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mt-3"
                    style={{ color: `${display.statColor}90` }}
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

                {/* Right: Content */}
                <div className="p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: display.statColor }}>
                      {article.category}
                    </span>
                    <span className="text-stone-400 text-xs">·</span>
                    <span className="text-stone-400 text-xs">{article.date}</span>
                    <span className="text-stone-400 text-xs">·</span>
                    <span className="text-stone-400 text-xs">{article.readTime} read</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-snug mb-5 group-hover:text-stone-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center gap-2 font-bold text-charcoal group-hover:gap-3 transition-all mt-8">
                    Read Analysis <ArrowRight className="w-4 h-4" style={{ color: display.statColor }} />
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </section>

      {/* Non-Featured Articles Grid */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {filteredArticles.filter(a => !a.featured).map((article) => {
            const display = cardDisplay[article.illustrationType];
            return (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Light-mode data header — tinted bg, colored stat */}
                <div
                  className="p-6 relative overflow-hidden flex-shrink-0"
                  style={{
                    backgroundColor: display.bgTint,
                    borderBottom: `1px solid ${display.border}`,
                  }}
                >
                  {/* Category label */}
                  <div className="flex justify-between items-start mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
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
                    className="text-[10px] font-bold uppercase tracking-wider mt-2"
                    style={{ color: `${display.statColor}99` }}
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
                  <h3 className="text-lg font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-stone-700 transition-colors">
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
