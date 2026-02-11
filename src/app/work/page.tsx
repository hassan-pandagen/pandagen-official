"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Code2, Rocket, BarChart3, Smartphone } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// --- PROJECT DATA ---
const projects = [
    {
        id: "01",
        client: "Dubai Luxury Yachts",
        category: "Ultra-High Performance",
        title: "The Ocean's Digital Twin",
        description:
            "A visually heavy luxury charter platform. We used Next.js Image Optimization and Lazy Loading to serve 4K media instantly, creating a seamless experience for billionaire clients.",
        stats: [
            { label: "Load Time", value: "0.4s" },
            { label: "Images", value: "4K Res" },
            { label: "Region", value: "Dubai" },
        ],
        tags: ["Next.js", "Framer Motion", "CDN Optimization"],
        color: "blue",
        gradient: "from-blue-600/20 to-cyan-500/5",
        imagePlaceholder: "bg-gradient-to-br from-blue-900 to-black",
    },
    {
        id: "02",
        client: "Panda Patches",
        category: "Headless E-Commerce",
        title: "Migration from WordPress to Sanity",
        description:
            "Our internal venture. We moved from a slow WooCommerce setup to a blazing fast Sanity + Next.js stack. Integrated Stripe for custom checkout flows and achieved a 98/100 Mobile SEO score.",
        stats: [
            { label: "Conversion", value: "+45%" },
            { label: "Platform", value: "Sanity" },
            { label: "Payments", value: "Stripe" },
        ],
        tags: ["Headless Commerce", "Stripe API", "Sanity CMS"],
        color: "green",
        gradient: "from-green-600/20 to-emerald-500/5",
        imagePlaceholder: "bg-gradient-to-br from-green-900 to-black",
    },
    {
        id: "03",
        client: "Panda Operations",
        category: "SaaS Dashboard",
        title: "Order Management OS",
        description:
            "A custom internal dashboard to manage manufacturing, shipping, and customer support. Real-time data syncing with the e-commerce frontend. This is the brain behind the operation.",
        stats: [
            { label: "Efficiency", value: "10x" },
            { label: "Data", value: "Real-time" },
            { label: "Users", value: "Internal" },
        ],
        tags: ["React Table", "Recharts", "Role-Auth"],
        color: "purple",
        gradient: "from-purple-600/20 to-pink-500/5",
        imagePlaceholder: "bg-gradient-to-br from-purple-900 to-black",
    },
    {
        id: "04",
        client: "MyCustomPatches",
        category: "SEO Migration",
        title: "Dominating Search Results",
        description:
            "A high-traffic migration from WordPress. The goal was pure SEO dominance. By moving to Next.js SSG (Static Generation), we hit Core Web Vitals perfectly, ranking #1 for key industry terms.",
        stats: [
            { label: "Traffic", value: "+300%" },
            { label: "Lighthouse", value: "100" },
            { label: "SEO", value: "Rank #1" },
        ],
        tags: ["Next.js SSG", "Programmatic SEO", "Blog Engine"],
        color: "orange",
        gradient: "from-orange-600/20 to-red-500/5",
        imagePlaceholder: "bg-gradient-to-br from-orange-900 to-black",
    },
];

export default function WorkPage() {
    return (
        <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
            {/* Global Noise Texture */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-pink-600/15 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-neon" />
                        <span className="text-neon tracking-widest text-sm font-bold uppercase">
                            Selected Works
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        Results, not just <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                            Aesthetics.
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* 2. PROJECT GALLERY */}
            <div className="pb-40 space-y-32">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* 3. CTA */}
            <section className="container mx-auto px-6 pb-20">
                <div className="border-t border-white/10 pt-20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Have a project in mind?
                    </h2>
                    <button
                        data-cal-namespace="discovery"
                        data-cal-link="pandagen/discovery"
                        data-cal-config='{"layout":"month_view"}'
                        className="px-10 py-5 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105"
                    >
                        Start Your Build
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// --- SUB COMPONENT: PROJECT CARD ---
function ProjectCard({ project, index }: any) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    // Parallax & Reveal Effects
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <section ref={ref} className="container mx-auto px-6">
            <motion.div style={{ opacity, y, scale }} className="group">
                {/* PROJECT HEADER (Mobile Only) */}
                <div className="md:hidden mb-6">
                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white">{project.client}</h3>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-center border border-white/10 bg-[#080808] rounded-[2.5rem] p-4 pr-4 lg:pr-12 overflow-hidden hover:border-white/20 transition-colors duration-500">
                    {/* VISUAL SIDE (Left - spans 7 cols) */}
                    <div className="lg:col-span-7 relative h-[300px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden">
                        {/* Overlay Gradient */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}
                        />

                        {/* THE SCREENSHOT CONTAINER */}
                        <div
                            className={`w-full h-full ${project.imagePlaceholder} transform group-hover:scale-105 transition-transform duration-700 flex items-center justify-center relative`}
                        >
                            {/* Fake UI Element for demo */}
                            <div className="w-3/4 h-3/4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center">
                                <span className="text-white/20 font-bold text-2xl">
                                    Project Screenshot
                                </span>
                            </div>
                        </div>

                        {/* Floating "Live" Badge */}
                        <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-white">Live Project</span>
                        </div>
                    </div>

                    {/* DETAILS SIDE (Right - spans 5 cols) */}
                    <div className="lg:col-span-5 py-8 lg:py-0 pl-4 lg:pl-8">
                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 block">
                            {project.id} — {project.category}
                        </span>

                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {project.client}
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
                            {project.stats.map((stat: any, i: number) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {project.tags.map((tag: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center gap-4 group/btn cursor-pointer">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white group-hover/btn:translate-x-2 transition-transform">
                                View Case Study
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
