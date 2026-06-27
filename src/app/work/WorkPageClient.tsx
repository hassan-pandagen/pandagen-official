"use client";

import Link from "next/link";
import { motion } from "@/components/ui/motion";
import FadeIn from "@/components/ui/FadeIn";
import { Code2, BarChart3, ArrowUpRight } from "lucide-react";
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
        tagline: "Aging WordPress site. 3.2s load time. $150/mo in hosting. We fixed all three.",
        caseStudyUrl: "/work/mycustompatches",
        outcome: "Rebuilt from scratch in custom Next.js in about 22 days. Same content, same SEO rankings. Now loads in under 1 second at $0/month.",
        results: [
            { label: "Load Time", value: "0.7s", from: "was 3.2s" },
            { label: "PageSpeed", value: "90+", from: "was ~45" },
            { label: "Hosting", value: "$0/mo", from: "was $150" },
        ],
        insight: "Migrated with zero downtime in about 22 days. Every SEO ranking preserved. Contact form runs on Web3Forms, free forever, no backend needed.",
        review: {
            quote: "We were nervous about losing our Google rankings during the migration. PandaCodeGen preserved every URL, our rankings held, and the site now loads faster than anything we've ever had. The $0 hosting alone paid for the project within two months.",
            author: "Founder, MyCustomPatches",
        },
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
        tagline: "WordPress + 3 paid tools + spreadsheets. Rebuilt from scratch. Scaled from $38K to about $50K/mo on about $55/mo in tooling.",
        caseStudyUrl: "/work/panda-patches",
        outcome: "We were hitting a ceiling. Customers had to fill out a form and wait for a quote because WordPress couldn't handle the pricing complexity: 9 patch types, size tiers, quantity breaks, backing and border options. Every combination is a different price. We rebuilt the storefront in Next.js with a real-time pricing calculator. Now customers see the price before they even talk to us. Then we replaced the CRM, spreadsheets, and attendance tracker with a single Supabase ops platform: order pipeline, sales agent performance across 7 team members, employee clock in/out, and role-based access. Every change is logged. Everyone sees the same data in real time.",
        results: [
            { label: "Monthly Revenue", value: "$50K/mo", from: "up from $38K · powered by $55/mo" },
            { label: "Tool Fees", value: "$0/mo", from: "was $200+" },
            { label: "Tools → One", value: "7 → 1", from: "CRM · ops · store" },
        ],
        insight: "Stack: Next.js · Sanity · Supabase · Square. Started free on Vercel, scaled to Vercel Pro ($20/mo) once revenue hit $38K/mo; it has since scaled to about $50K/mo. Total monthly tooling: about $55 (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).",
        tags: ["Real-Time Pricing Calculator", "Square Checkout · Cash App Pay", "Apple Pay · Google Pay · Afterpay", "Supabase CRM · Ops Portal"],
        image: "/work/panda-patches.png",
        liveUrl: "https://pandapatches.com",
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
        client: "Panda CodeLab",
        category: "Agency Website",
        tagline: "A separate brand we built from scratch, premium animations, Spline 3D, WCAG 2.1 AA, and zero templates.",
        caseStudyUrl: "/work/panda-codelab",
        outcome: "Custom agency site for Panda CodeLab built on Next.js with Framer Motion spring physics, magnetic interactions, Spline 3D scenes, and full accessibility compliance. Under a second load. Zero page builder.",
        results: [
            { label: "Load Time", value: "0.6s", from: "avg 3s+" },
            { label: "Accessibility", value: "AA", from: "WCAG 2.1" },
            { label: "Hosting", value: "$0/mo", from: "was $20-50" },
        ],
        insight: "Live at pandacodelab.com, custom-built, no templates, no page builders.",
        tags: ["Custom Website", "Framer Motion", "Spline 3D", "WCAG 2.1 AA"],
        image: "/work/pandacodelab.png",
        liveUrl: "https://www.pandacodelab.com",
        isLive: true,
        accentColor: "from-stone-800/60 to-stone-900/80",
    },
];

// --- MAIN PAGE ---
export default function WorkPageClient() {
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.pandacodegen.com/work#webpage",
                "url": "https://www.pandacodegen.com/work",
                "name": "Our Work & Portfolio | PandaCodeGen",
                "description": "Real case studies: WordPress migrations, custom e-commerce platforms, and business dashboards with measurable results.",
                "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
                "about": { "@id": "https://www.pandacodegen.com/#organization" },
                "inLanguage": "en-US"
            },
            {
                "@type": "ItemList",
                "name": "PandaCodeGen Portfolio",
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
            <section className="relative pt-24 md:pt-24 md:pt-40 pb-6 md:pb-10 px-6 bg-linear-to-b from-white to-stone-50 overflow-hidden">
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
                        <span className="font-serif italic text-cognac">Aesthetics.</span>
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
function ProjectCard({ project }: any) {
    return (
        <section className="container mx-auto px-6">
            <FadeIn className="group">
                <div className="grid lg:grid-cols-12 items-stretch rounded-4xl overflow-hidden border border-stone-200 shadow-2xl shadow-stone-900/10 hover:shadow-stone-900/15 transition-shadow duration-500">

                    {/* LEFT, Dark image panel */}
                    <div className="lg:col-span-7 relative bg-[#0C0A09] h-[380px] sm:h-[440px] lg:h-auto min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] overflow-hidden">

                        {/* Dot grid pattern */}
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
                        />

                        {/* Cognac ambient glow, stronger on mobile for wow factor */}
                        <div className="absolute -top-20 -left-20 w-[280px] h-[280px] rounded-full pointer-events-none blur-[80px]"
                            style={{ background: "radial-gradient(circle, rgba(176,108,51,0.45) 0%, transparent 70%)" }}
                        />
                        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none blur-[90px]"
                            style={{ background: "radial-gradient(circle, rgba(176,108,51,0.35) 0%, transparent 70%)" }}
                        />

                        {/* Center radial spotlight */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(255,220,180,0.12) 0%, transparent 65%)" }}
                        />

                        {/* Screenshot */}
                        {project.image && (
                            <div className="absolute inset-4 sm:inset-6 lg:inset-10 transform group-hover:scale-[1.02] transition-transform duration-700">
                                <Image
                                    src={project.image}
                                    alt={`${project.client} - ${project.category}`}
                                    fill
                                    className="object-contain object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                                    priority={project.image === "/work/mycustompatches.png"}
                                    loading={project.image === "/work/mycustompatches.png" ? "eager" : "lazy"}
                                    quality={90}
                                />
                            </div>
                        )}

                        {/* Bottom gradient fade */}
                        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-linear-to-t from-[#0C0A09] to-transparent" />

                        {/* Corner accent brackets */}
                        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cognac/40 pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cognac/40 pointer-events-none" />

                        {/* Badge */}
                        <div className={`absolute top-5 left-5 z-20 px-4 py-2 bg-white/10 backdrop-blur-xs border ${
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

                        {/* Project number, large ghost text bottom-right */}
                        <div className="absolute bottom-4 right-6 text-[120px] font-black text-white/4 leading-none select-none pointer-events-none">
                            {project.id}
                        </div>
                    </div>

                    {/* RIGHT, White content panel */}
                    <div className="lg:col-span-5 bg-white flex flex-col p-5 md:p-8 lg:p-10 min-w-0">

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

                        {/* Tagline, punchy single sentence */}
                        <p className="text-stone-800 text-base leading-relaxed mb-4 font-semibold">
                            {project.tagline}
                        </p>

                        {/* Outcome, orange accent border = visual anchor */}
                        <div className="pl-5 border-l-2 border-cognac mb-8">
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {project.outcome}
                            </p>
                        </div>

                        {/* KEY RESULTS, big numbers, not cards */}
                        <div className="flex-1">
                            <p className="text-[10px] font-black text-stone-300 tracking-[0.18em] uppercase mb-4">Key Results</p>
                            <div className="grid grid-cols-3 gap-0 border border-stone-100 rounded-xl overflow-hidden mb-4">
                                {project.results.map((result: any, i: number) => (
                                    <div
                                        key={i}
                                        className={`p-2.5 md:p-4 min-w-0 ${i < project.results.length - 1 ? "border-r border-stone-100" : ""} bg-stone-50 hover:bg-stone-100 transition-colors`}
                                    >
                                        <div className="text-lg sm:text-2xl lg:text-3xl font-black text-charcoal tracking-tight leading-none mb-1.5 truncate">{result.value}</div>
                                        <div className="text-[9px] font-bold text-stone-400 uppercase tracking-wider leading-tight">{result.label}</div>
                                        <div className="text-[9px] text-stone-300 mt-1 leading-tight truncate">{result.from}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Insight, pull quote */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-[3px] shrink-0 self-stretch bg-linear-to-b from-cognac to-cognac/20 rounded-full" />
                                <p className="text-sm text-stone-600 italic leading-relaxed">{project.insight}</p>
                            </div>

                            {/* Client Review */}
                            {project.review && (
                                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-5">
                                    <div className="flex gap-2 mb-2">
                                        {[1,2,3,4,5].map((s) => (
                                            <svg key={s} className="w-3 h-3 fill-cognac" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-stone-600 leading-relaxed italic mb-2">"{project.review.quote}"</p>
                                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">{project.review.author}</p>
                                </div>
                            )}

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
            </FadeIn>
        </section>
    );
}
