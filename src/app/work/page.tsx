"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, BarChart3, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

// --- PROJECT DATA ---
const projects = [
    {
        id: "01",
        client: "MyCustomPatches",
        category: "WordPress Migration",
        tagline: "10-year-old WordPress site. 3s load time. $150/mo in hosting. We fixed all three.",
        caseStudyUrl: "/work/mycustompatches",
        outcome: "Rebuilt from scratch in custom Next.js. Same content, same SEO rankings. Now loads in under 1 second at $0/month.",
        results: [
            { label: "Load Time", value: "0.7s", from: "was 3+ sec" },
            { label: "PageSpeed", value: "100/100", from: "was ~40" },
            { label: "Hosting", value: "$0/mo", from: "was $150" },
        ],
        insight: "Migrated with zero downtime. All 200+ pages and SEO rankings fully preserved.",
        tags: ["WordPress Migration", "Speed Optimization", "SEO Preservation", "Custom Code"],
        image: "/work/mycustompatches.png",
        liveUrl: "https://www.mycustompatches.net",
        isLive: true,
        accentColor: "from-stone-800/60 to-stone-900/80",
    },
    {
        id: "02",
        client: "Panda Patches",
        category: "E-Commerce + Operations Platform",
        tagline: "WordPress + 3 paid tools + spreadsheets. Rebuilt from scratch. Now runs $38K+/mo on under $25/mo in tooling.",
        caseStudyUrl: "/work/panda-patches",
        outcome: "We were hitting a ceiling. Customers had to fill out a form and wait for a quote because WordPress couldn't handle the pricing complexity: 9 patch types, size tiers, quantity breaks, backing and border options. Every combination is a different price. We rebuilt the storefront in Next.js with a real-time pricing calculator. Now customers see the price before they even talk to us. Then we replaced the CRM, spreadsheets, and attendance tracker with a single Supabase ops platform: order pipeline, sales agent performance across 7 team members, employee clock in/out, and role-based access. Every change is logged. Everyone sees the same data in real time.",
        results: [
            { label: "Monthly Revenue", value: "$38K+", from: "powered by $25/mo" },
            { label: "Tool Fees", value: "$0/mo", from: "was $200+" },
            { label: "Tools → One", value: "7 → 1", from: "CRM · ops · store" },
        ],
        insight: "Stack: Next.js · Supabase · Sanity CMS · Stripe · PayPal · Zoho · Upstash Redis. Hosting: Vercel free tier. Total monthly cost including AI tools: under $25.",
        tags: ["Real-Time Pricing Calculator", "Stripe · PayPal · Cash App", "Apple Pay · Klarna · Afterpay", "Supabase CRM · Ops Portal"],
        image: "/work/panda-patches.png",
        liveUrl: "https://panda-patches-ecommerce.vercel.app",
        portalUrl: "https://portal.pandapatches.com",
        isLive: true,
        badge: "In-House Brand",
        accentColor: "from-stone-800/60 to-stone-900/80",
    },
    {
        id: "03",
        client: "Enterprise Operations",
        category: "Custom Business Dashboard",
        tagline: "A high-volume production business running entirely on spreadsheets and WhatsApp updates.",
        caseStudyUrl: "/work/enterprise-ops",
        outcome: "Full-stack business intelligence platform: real-time order tracking, automated production reports, role-based sales dashboards, and complete lead attribution.",
        results: [
            { label: "Automation", value: "95%", from: "was near-zero" },
            { label: "Reporting", value: "Live", from: "was daily CSVs" },
            { label: "Efficiency", value: "10×", from: "baseline" },
        ],
        insight: "One platform replaced spreadsheets, WhatsApp chains, and 3 separate SaaS tools.",
        tags: ["Real-time Analytics", "Automated Reports", "Role-based Access", "Supabase"],
        image: "/work/panda-operations.png",
        isLive: false,
        accentColor: "from-stone-800/60 to-stone-900/80",
    },
    {
        id: "04",
        client: "PandaGen Agency Site",
        category: "Agency Website",
        tagline: "We couldn't sell custom-code to clients without proving it on ourselves first.",
        caseStudyUrl: "/work/panda-codelab",
        outcome: "Built our own agency site on the exact architecture we sell. 100/100 PageSpeed. 0.6s load. This page is the live proof.",
        results: [
            { label: "Load Time", value: "0.6s", from: "avg 3s+" },
            { label: "PageSpeed", value: "100/100", from: "perfect score" },
            { label: "Hosting", value: "$0/mo", from: "was $20-50" },
        ],
        insight: "We practice what we preach. This site is the live demo.",
        tags: ["Custom Website", "Speed Optimized", "Conversion Design", "Brand Identity"],
        image: "/work/pandacodelab.png",
        isLive: false,
        accentColor: "from-stone-800/60 to-stone-900/80",
    },
];

// --- MAIN PAGE ---
export default function WorkPage() {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.pandacodegen.com/work#webpage",
                "url": "https://www.pandacodegen.com/work",
                "name": "Our Work & Portfolio | PandaGen",
                "description": "Explore PandaGen's portfolio of high-performance custom-coded projects.",
                "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
                "about": { "@id": "https://www.pandacodegen.com/#organization" },
                "inLanguage": "en-US"
            },
            {
                "@type": "ItemList",
                "name": "PandaGen Portfolio",
                "itemListElement": projects.map((project, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "CreativeWork",
                        "name": project.client,
                        "description": project.tagline,
                        "creator": { "@id": "https://www.pandacodegen.com/#organization" },
                        ...(project.caseStudyUrl ? { "url": `https://www.pandacodegen.com${project.caseStudyUrl}` } : project.liveUrl ? { "url": project.liveUrl } : {})
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                    { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" }
                ]
            }
        ]
    };

    return (
        <main className="bg-paper min-h-screen overflow-x-hidden relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <ReadingProgressBar />
            <Header />

            {/* HERO */}
            <section className="relative pt-24 md:pt-40 pb-6 md:pb-10 px-6 bg-gradient-to-b from-white to-stone-50 overflow-hidden">
                <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-stone-200/30 blur-[120px] rounded-full pointer-events-none" />
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-cognac" />
                        <span className="text-cognac tracking-widest text-sm font-bold uppercase">Selected Works</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold text-charcoal tracking-tighter mb-2 md:mb-8 leading-[0.9]"
                    >
                        Results, not just <br />
                        <span className="font-serif italic text-stone-500">Aesthetics.</span>
                    </motion.h1>
                </div>
            </section>

            {/* PROJECT GALLERY */}
            <section className="bg-stone-50 border-y border-stone-200 pt-6 md:pt-10 pb-10 md:pb-20">
                <div className="space-y-12 md:space-y-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

// --- PROJECT CARD ---
function ProjectCard({ project, index }: any) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <section ref={ref} className="container mx-auto px-6">
            <motion.div style={{ opacity, y }} className="group">
                <div className="grid lg:grid-cols-12 items-stretch rounded-[2rem] overflow-hidden border border-stone-200 shadow-2xl shadow-stone-900/10 hover:shadow-stone-900/15 transition-shadow duration-500">

                    {/* LEFT — Dark image panel */}
                    <div className="lg:col-span-7 relative bg-[#0C0A09] h-[300px] lg:h-auto min-h-[520px] overflow-hidden">

                        {/* Subtle radial glow behind screenshot */}
                        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40"
                            style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(120,80,40,0.15) 0%, transparent 70%)" }}
                        />

                        {/* Screenshot */}
                        {project.image && (
                            <div className="absolute inset-6 lg:inset-10 transform group-hover:scale-[1.02] transition-transform duration-700">
                                <Image
                                    src={project.image}
                                    alt={`${project.client} - ${project.category}`}
                                    fill
                                    className="object-contain object-center drop-shadow-2xl"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                    loading="lazy"
                                    quality={90}
                                />
                            </div>
                        )}

                        {/* Badge */}
                        <div className={`absolute top-5 left-5 z-20 px-4 py-2 bg-white/10 backdrop-blur-sm border ${
                            project.badge === "In-House Brand" ? "border-cognac/40"
                            : project.isLive ? "border-white/20"
                            : "border-white/10"
                        } rounded-full flex items-center gap-2`}>
                            <div className={`w-2 h-2 rounded-full ${
                                project.badge === "In-House Brand" ? "bg-cognac"
                                : project.isLive ? "bg-emerald-400 animate-pulse"
                                : "bg-stone-500"
                            }`} />
                            <span className="text-xs font-bold text-white/80">
                                {project.badge ?? (project.isLive ? "Live Project" : "Internal Tool")}
                            </span>
                        </div>

                        {/* Project number — large ghost text bottom-right */}
                        <div className="absolute bottom-4 right-6 text-[120px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                            {project.id}
                        </div>
                    </div>

                    {/* RIGHT — White content panel */}
                    <div className="lg:col-span-5 bg-white flex flex-col p-8 lg:p-10">

                        {/* Category + ID */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-[10px] font-black text-stone-300 tracking-[0.2em] uppercase">{project.id}</span>
                            <div className="h-px flex-1 bg-stone-100" />
                            <span className="text-[10px] font-bold text-cognac tracking-widest uppercase">{project.category}</span>
                        </div>

                        {/* Client name */}
                        <h3 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-[1.05] tracking-tight">
                            {project.client}
                        </h3>

                        {/* Tagline — punchy single sentence */}
                        <p className="text-stone-800 text-base leading-relaxed mb-4 font-semibold">
                            {project.tagline}
                        </p>

                        {/* Outcome — orange accent border = visual anchor */}
                        <div className="pl-5 border-l-2 border-cognac mb-8">
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {project.outcome}
                            </p>
                        </div>

                        {/* KEY RESULTS — big numbers, not cards */}
                        <div className="flex-1">
                            <p className="text-[10px] font-black text-stone-300 tracking-[0.18em] uppercase mb-4">Key Results</p>
                            <div className="grid grid-cols-3 gap-0 border border-stone-100 rounded-xl overflow-hidden mb-4">
                                {project.results.map((result: any, i: number) => (
                                    <div
                                        key={i}
                                        className={`p-4 ${i < project.results.length - 1 ? "border-r border-stone-100" : ""} bg-stone-50 hover:bg-stone-100 transition-colors`}
                                    >
                                        <div className="text-2xl lg:text-3xl font-black text-charcoal tracking-tight leading-none mb-1.5">{result.value}</div>
                                        <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider leading-tight">{result.label}</div>
                                        <div className="text-[9px] text-stone-300 mt-1 leading-tight">{result.from}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Insight — pull quote */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-[3px] shrink-0 self-stretch bg-gradient-to-b from-cognac to-cognac/20 rounded-full" />
                                <p className="text-sm text-stone-600 italic leading-relaxed">{project.insight}</p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-8">
                                {project.tags.map((tag: string, i: number) => (
                                    <span key={i} className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-md text-[11px] font-medium text-stone-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 pt-6 border-t border-stone-100">
                            {project.caseStudyUrl && (
                                <Link
                                    href={project.caseStudyUrl}
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-cognac text-white text-sm font-bold rounded-xl hover:bg-cognac/90 transition-all hover:gap-3"
                                >
                                    Read Case Study <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            )}
                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-charcoal text-white text-sm font-bold rounded-xl hover:bg-stone-800 transition-all hover:gap-3 group/cta"
                                >
                                    View Live Site <ArrowUpRight className="w-4 h-4" />
                                </a>
                            ) : (
                                <div className="inline-flex items-center gap-2 px-5 py-3 bg-stone-100 text-stone-400 text-sm font-bold rounded-xl cursor-default">
                                    <Code2 className="w-4 h-4" />
                                    Internal Project
                                </div>
                            )}
                            {project.portalUrl && (
                                <a
                                    href={project.portalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-stone-100 text-charcoal text-sm font-bold rounded-xl hover:bg-stone-200 transition-all"
                                >
                                    <BarChart3 className="w-4 h-4" />
                                    Ops Portal
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
