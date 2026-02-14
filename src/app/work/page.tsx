"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Code2, Rocket, BarChart3, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

// --- PROJECT DATA ---
const projects = [
    {
        id: "01",
        client: "MyCustomPatches",
        category: "WordPress → Next.js Migration",
        title: "From Legacy to Lightning",
        description:
            "Migrated a 10-year-old WordPress site to modern Next.js architecture. The transformation: 3-second load times dropped to sub-1s, SEO rankings improved dramatically, and monthly hosting costs eliminated. Same content, completely rebuilt foundation.",
        stats: [
            { label: "Load Time", value: "3s → 0.7s" },
            { label: "Lighthouse", value: "100/100" },
            { label: "Hosting", value: "$0/mo" },
        ],
        tags: ["Next.js 15", "WordPress Migration", "SSG", "SEO"],
        color: "orange",
        gradient: "from-orange-600/20 to-red-500/5",
        image: "/work/mycustompatches.png",
        liveUrl: "https://www.mycustompatches.net",
        isLive: true,
    },
    {
        id: "02",
        client: "Panda Patches",
        category: "Headless E-Commerce Platform",
        title: "Custom Shopify Alternative",
        description:
            "Full-stack e-commerce platform built from scratch. Integrated Sanity CMS for product management, Stripe for payments, and custom checkout logic. Zero monthly app fees, complete design control, and 45% conversion improvement over WooCommerce.",
        stats: [
            { label: "Conversion", value: "+45%" },
            { label: "Lighthouse", value: "98/100" },
            { label: "App Fees", value: "$0" },
        ],
        tags: ["Headless Commerce", "Stripe", "Sanity CMS", "Next.js"],
        color: "green",
        gradient: "from-green-600/20 to-emerald-500/5",
        image: "/work/panda-patches.png",
        liveUrl: "https://panda-patches-ecommerce.vercel.app",
        isLive: true,
    },
    {
        id: "03",
        client: "Enterprise SaaS Platform",
        category: "Custom Business Dashboard",
        title: "Full-Stack Operations Hub",
        description:
            "Custom-built business intelligence platform for managing complex operations. Real-time analytics, team performance tracking, automated reporting, and role-based access control. Built to scale for high-volume production environments.",
        stats: [
            { label: "Efficiency", value: "10x" },
            { label: "Data Sync", value: "Real-time" },
            { label: "Automation", value: "95%" },
        ],
        tags: ["React", "TypeScript", "Real-time DB", "Role-Based Auth"],
        color: "purple",
        gradient: "from-purple-600/20 to-pink-500/5",
        image: "/work/panda-operations.png",
        isLive: false,
    },
    {
        id: "04",
        client: "PandaCodeLab",
        category: "Agency Brand & Web Presence",
        title: "Practicing What We Preach",
        description:
            "Before launching client work, we rebuilt our own agency platform using the exact Next.js architecture we recommend. 100/100 Lighthouse score, conversion-optimized UX, and bleeding-edge features. This is our digital showroom.",
        stats: [
            { label: "Lighthouse", value: "100/100" },
            { label: "Load Time", value: "0.6s" },
            { label: "Framework", value: "Next.js 15" },
        ],
        tags: ["Next.js 15", "Framer Motion", "Brand Identity", "Performance"],
        color: "blue",
        gradient: "from-blue-600/20 to-cyan-500/5",
        image: "/work/pandacodelab.png",
        isLive: false,
    },
];

export default function WorkPage() {
    return (
        <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
            {/* Global Noise Texture */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay"></div>

            <ReadingProgressBar />
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
                        {project.image ? (
                            <div className="w-full h-full relative transform group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-white/[0.03] to-black/50">
                                <Image
                                    src={project.image}
                                    alt={`${project.client} - ${project.title}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/[0.02] transform group-hover:scale-105 transition-transform duration-700 flex items-center justify-center relative border border-white/10">
                                {/* Placeholder */}
                                <div className="text-center px-6">
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${project.gradient} border border-white/20 flex items-center justify-center`}>
                                        <Code2 className="w-8 h-8 text-white/50" />
                                    </div>
                                    <p className="text-white/30 font-medium text-sm">
                                        {project.client}
                                    </p>
                                    <p className="text-white/20 text-xs mt-1">
                                        Screenshot coming soon
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Floating "Live" or "Internal" Badge */}
                        <div className={`absolute top-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-md border ${project.isLive ? 'border-green-500/30' : 'border-purple-500/30'} rounded-full flex items-center gap-2`}>
                            <div className={`w-2 h-2 rounded-full ${project.isLive ? 'bg-green-500 animate-pulse' : 'bg-purple-500'}`} />
                            <span className="text-xs font-bold text-white">{project.isLive ? 'Live Project' : 'Internal Tool'}</span>
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
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group/btn cursor-pointer w-fit"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-neon group-hover/btn:text-black group-hover/btn:border-neon transition-all">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-white group-hover/btn:text-neon group-hover/btn:translate-x-2 transition-all">
                                    View Live Site →
                                </span>
                            </a>
                        ) : (
                            <div className="flex items-center gap-4 group/btn cursor-default">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <Code2 className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-sm font-bold text-gray-400">
                                    Internal Project
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
