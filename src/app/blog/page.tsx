"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

// --- DATA: Blogs linked to Services ---
const articles = [
    {
        id: 1,
        title: "Why WordPress Is a Waste of Money in 2026",
        excerpt:
            "The hidden costs of plugins, hosting, and security breaches are draining your budget. Here is the math on why headless pays off.",
        category: "Migration",
        readTime: "8 min read",
        date: "Jan 15, 2026",
        image: "bg-red-900/20",
        relatedService: "Legacy Rescue",
        serviceLink: "/services",
        featured: true,
    },
    {
        id: 2,
        title: "Shopify Plus + Next.js: The 0.1s Load Time Secret",
        excerpt:
            "How we bypassed Liquid limitations to build a storefront that loads instantly and doubled conversion rates for a fashion brand.",
        category: "E-Commerce",
        readTime: "12 min read",
        date: "Jan 10, 2026",
        image: "bg-green-900/20",
        relatedService: "Enterprise Commerce",
        serviceLink: "/services",
        featured: false,
    },
    {
        id: 3,
        title: "SaaS Architecture: Multitenancy with Supabase",
        excerpt:
            "A deep dive into Row Level Security (RLS) and how to architect a scalable SaaS dashboard without managing your own servers.",
        category: "Engineering",
        readTime: "15 min read",
        date: "Jan 05, 2026",
        image: "bg-blue-900/20",
        relatedService: "Custom Engineering",
        serviceLink: "/services",
        featured: false,
    },
    {
        id: 4,
        title: "Stop Using Page Builders (Elementor vs Code)",
        excerpt:
            "Visual builders generate DOM bloat. We analyzed the code quality of 500 sites. The results were terrifying.",
        category: "Performance",
        readTime: "6 min read",
        date: "Dec 28, 2025",
        image: "bg-orange-900/20",
        relatedService: "Custom Engineering",
        serviceLink: "/services",
        featured: false,
    },
];

const categories = [
    "All",
    "Migration",
    "E-Commerce",
    "Engineering",
    "Performance",
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = articles.filter((article) => {
        const matchesCategory =
            activeCategory === "All" || article.category === activeCategory;
        const matchesSearch =
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
            <Header />

            {/* 1. HERO: INTELLIGENCE HUB */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
                        <BookOpen className="w-4 h-4 text-neon" />
                        <span>Engineering Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        Insights from the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-500">
                            Code Lab.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Deep dives on architecture, performance, and the future of the web.
                        No fluff. Just code and strategy.
                    </p>
                </div>
            </section>

            {/* 2. FILTER BAR */}
            <div className="sticky top-20 z-30 bg-[#050505]/80 backdrop-blur-xl border-y border-white/5 py-4">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                    ? "bg-neon text-black"
                                    : "bg-white/5 text-gray-400 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon/50"
                        />
                    </div>
                </div>
            </div>

            {/* 3. FEATURED ARTICLE (Billboard) */}
            {filteredArticles.filter((a) => a.featured).length > 0 && (
                <section className="container mx-auto px-6 py-12">
                    {filteredArticles
                        .filter((a) => a.featured)
                        .map((article) => (
                            <Link
                                key={article.id}
                                href={`/blog/${article.id}`}
                                className="group block"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0A0A] aspect-[21/9] flex items-end">
                                    {/* Background Image Placeholder */}
                                    <div
                                        className={`absolute inset-0 ${article.image} group-hover:scale-105 transition-transform duration-700 opacity-50`}
                                    />

                                    <div className="relative z-10 p-8 md:p-16 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 bg-neon text-black text-xs font-bold rounded uppercase">
                                                Featured
                                            </span>
                                            <span className="text-gray-400 text-sm flex items-center gap-2">
                                                <Clock className="w-3 h-3" /> {article.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-neon transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-300 max-w-2xl text-lg mb-6 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
                                            Read Analysis{" "}
                                            <ArrowRight className="w-5 h-5 text-neon" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </section>
            )}

            {/* 4. THE GRID */}
            <section className="container mx-auto px-6 pb-32">
                {filteredArticles.filter((a) => !a.featured).length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles
                            .filter((a) => !a.featured)
                            .map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/blog/${article.id}`}
                                    className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
                                >
                                    {/* Image Top */}
                                    <div className={`h-64 w-full ${article.image} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />

                                        {/* THE INTERLINK BADGE (Crucial for Strategy) */}
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                                            <span className="text-[10px] text-gray-300 font-mono uppercase tracking-wide">
                                                Service: {article.relatedService}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Bottom */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-neon text-xs font-bold uppercase tracking-wider">
                                                {article.category}
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                {article.date}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {article.excerpt}
                                        </p>

                                        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                                            <span className="text-xs text-gray-500 flex items-center gap-2">
                                                <Clock className="w-3 h-3" /> {article.readTime}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">
                            No articles found. Try adjusting your filters.
                        </p>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
