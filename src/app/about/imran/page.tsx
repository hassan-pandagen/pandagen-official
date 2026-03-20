import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, BarChart3, Target } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Imran - Lead Solutions Architect at PandaCodeGen",
    description: "Imran is Lead Solutions Architect at PandaCodeGen, specializing in enterprise architecture and strategic migrations. 8+ years experience, 50+ successful projects.",
    openGraph: {
        title: "Imran - Lead Solutions Architect at PandaCodeGen",
        description: "Specializing in enterprise architecture, strategic planning, and ROI-driven migrations. Lead Solutions Architect @ PandaCodeGen.",
        type: "profile",
        url: "https://www.pandacodegen.com/about/imran",
        images: [{ url: "https://www.pandacodegen.com/team/imran.png", width: 400, height: 400 }],
    },
    twitter: {
        card: "summary",
        title: "Imran - Lead Solutions Architect at PandaCodeGen",
        description: "Enterprise architecture & strategic planning for e-commerce migrations. 8+ years experience.",
    },
    alternates: { canonical: "/about/imran" },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/#/schema/person/imran",
            "name": "Imran",
            "givenName": "Imran",
            "jobTitle": "Lead Solutions Architect",
            "description": "Lead Solutions Architect at PandaCodeGen. Specializing in enterprise architecture, strategic planning, and ensuring client investments deliver measurable ROI.",
            "url": "https://www.pandacodegen.com/about/imran",
            "image": "https://www.pandacodegen.com/team/imran.png",
            "worksFor": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
            },
            "knowsAbout": [
                "Enterprise Architecture", "Solutions Architecture", "Strategic Planning",
                "Business Strategy", "Platform Migrations", "ROI Optimization",
                "System Design", "Technical Leadership", "E-commerce Strategy", "Performance Optimization",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": "https://www.pandacodegen.com/about/imran#webpage",
            "url": "https://www.pandacodegen.com/about/imran",
            "name": "Imran - Lead Solutions Architect at PandaCodeGen",
            "description": "Learn about Imran, Lead Solutions Architect at PandaCodeGen. 8+ years of experience in enterprise architecture and strategic planning.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "mainEntity": { "@id": "https://www.pandacodegen.com/#/schema/person/imran" },
            "inLanguage": "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/about/imran#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.pandacodegen.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Imran", "item": "https://www.pandacodegen.com/about/imran" },
            ],
        },
    ],
};

const expertise = [
    "Enterprise Architecture",
    "Solutions Design",
    "Strategic Planning",
    "Platform Migrations",
    "ROI Optimization",
    "Technical Leadership",
    "Business Strategy",
    "System Integration",
    "Performance Auditing",
    "E-commerce Strategy",
];

const builds = [
    { title: "Enterprise Architecture Design", desc: "Scalable architectures that eliminate platform fees, reduce hosting costs by 60-90%, and improve performance by 3-4×. Every decision is ROI-driven." },
    { title: "Strategic Migration Planning", desc: "WordPress, Shopify, and legacy platform migrations with zero downtime. Minimize disruption while maximizing performance gains and cost savings." },
    { title: "ROI & Cost Analysis", desc: "Calculate exact ROI before writing a single line of code. Monthly savings, performance improvements, and payback timeline, upfront. No surprises." },
    { title: "Technical Leadership", desc: "Lead implementation teams, ensure quality standards, and guarantee projects deliver on promised metrics. 8+ years leading enterprise migrations." },
];

export default function ImranAuthorPage() {
    const imranPosts = blogPosts.filter(p => p.author === "Imran");

    return (
        <main className="bg-paper min-h-screen">
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <Header />

            <div className="pt-40 pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    {/* Back */}
                    <Link href="/about" className="group inline-flex items-center gap-2 text-stone-500 hover:text-cognac transition-colors mb-12 font-medium">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Team
                    </Link>

                    {/* Hero */}
                    <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
                        <div className="w-full md:w-64 shrink-0 aspect-square relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/60 border border-white">
                            <Image
                                src="/team/imran.png"
                                fill
                                sizes="(max-width: 768px) 100vw, 256px"
                                alt="Imran - Lead Solutions Architect at PandaCodeGen"
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-charcoal mb-6">
                                Lead Solutions Architect
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-3">Imran.</h1>
                            <p className="text-lg font-mono text-cognac mb-6">Enterprise Architect &middot; 8+ years &middot; 50+ projects</p>
                            <p className="text-xl text-stone-600 leading-relaxed max-w-xl mb-8">
                                My job is to ensure your investment turns into measurable ROI. I design enterprise architectures that eliminate technical debt, reduce hosting costs, and deliver performance improvements that directly impact your bottom line. Every migration I architect is built around your business goals, not just technical specs.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    data-cal-namespace="discovery"
                                    data-cal-link="pandagen/discovery"
                                    data-cal-config='{"layout":"month_view"}'
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-charcoal rounded-full text-sm font-bold hover:border-cognac/40 hover:text-cognac transition-all"
                                >
                                    Book Strategy Call
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-5 h-5 text-cognac" />
                                <h3 className="text-xl font-serif text-charcoal">Strategic Expertise</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {expertise.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-stone-50 border border-stone-100 text-stone-600 text-sm font-medium rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-cognac" />
                                <h3 className="text-xl font-serif text-charcoal">What I Do</h3>
                            </div>
                            <ul className="space-y-4">
                                {builds.map((item) => (
                                    <li key={item.title} className="border-t border-stone-100 pt-4 first:border-0 first:pt-0">
                                        <div className="font-bold text-charcoal text-sm mb-1">{item.title}</div>
                                        <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Articles */}
                    {imranPosts.length > 0 && (
                        <section className="border-t border-stone-200 pt-16 mb-16">
                            <h2 className="text-2xl font-serif text-charcoal mb-2">Articles by Imran</h2>
                            <p className="text-stone-500 mb-8">Strategic insights on enterprise migrations and ROI optimization.</p>
                            <div className="grid gap-3">
                                {imranPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.id}`}
                                        className="group flex items-center justify-between p-5 rounded-xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all duration-300"
                                    >
                                        <div>
                                            <h3 className="text-charcoal font-medium group-hover:text-cognac transition-colors mb-1">{post.title}</h3>
                                            <div className="flex items-center gap-3 text-xs text-stone-400">
                                                <span>{post.category}</span>
                                                <span>&middot;</span>
                                                <span>{post.readTime}</span>
                                                <span>&middot;</span>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-cognac transition-colors shrink-0 ml-4" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className="text-center py-16 bg-white border border-stone-200 rounded-3xl px-8">
                        <h2 className="text-2xl font-serif text-charcoal mb-4">Work With Me</h2>
                        <p className="text-stone-500 mb-8 max-w-md mx-auto">Get a strategic architecture review and ROI analysis before committing to any platform migration.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                data-cal-namespace="discovery"
                                data-cal-link="pandagen/discovery"
                                data-cal-config='{"layout":"month_view"}'
                                className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-105 transition-all"
                            >
                                Book Strategy Call
                            </button>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:bg-stone-50 hover:border-stone-400 transition-all"
                            >
                                Meet the Full Team
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
