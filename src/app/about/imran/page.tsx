import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    alternates: {
        canonical: "/about/imran",
    },
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
                "name": "PandaCodeGen"
            },
            "knowsAbout": [
                "Enterprise Architecture",
                "Solutions Architecture",
                "Strategic Planning",
                "Business Strategy",
                "Platform Migrations",
                "ROI Optimization",
                "System Design",
                "Technical Leadership",
                "E-commerce Strategy",
                "Performance Optimization"
            ]
        },
        {
            "@type": "ProfilePage",
            "@id": "https://www.pandacodegen.com/about/imran#webpage",
            "url": "https://www.pandacodegen.com/about/imran",
            "name": "Imran - Lead Solutions Architect at PandaGen",
            "description": "Learn about Imran, Lead Solutions Architect at PandaGen. 8+ years of experience in enterprise architecture and strategic planning.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "mainEntity": { "@id": "https://www.pandacodegen.com/#/schema/person/imran" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/about/imran#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.pandacodegen.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Imran", "item": "https://www.pandacodegen.com/about/imran" }
            ]
        }
    ]
};

const expertise = [
    { name: "Enterprise Architecture", level: "Expert" },
    { name: "Solutions Design", level: "Expert" },
    { name: "Strategic Planning", level: "Expert" },
    { name: "Platform Migrations", level: "Expert" },
    { name: "ROI Optimization", level: "Expert" },
    { name: "Technical Leadership", level: "Expert" },
    { name: "Business Strategy", level: "Expert" },
    { name: "System Integration", level: "Advanced" },
    { name: "Performance Auditing", level: "Expert" },
    { name: "E-commerce Strategy", level: "Expert" },
];

export default function ImranAuthorPage() {
    const imranPosts = blogPosts.filter(p => p.author === "Imran");

    return (
        <main className="bg-transparent min-h-screen text-white">
            {/* Global Noise Texture */}
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

            <Header />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-10">
                        <Link href="/" className="hover:text-neon transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/about" className="hover:text-neon transition-colors">About</Link>
                        <span>/</span>
                        <span className="text-gray-300">Imran</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Photo */}
                        <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-white/10 flex-shrink-0 relative">
                            <Image
                                src="/team/imran.png"
                                fill
                                alt="Imran - Lead Solutions Architect at PandaGen"
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Info */}
                        <div>
                            <div className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-3">
                                Strategy
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Imran</h1>
                            <p className="text-blue-400 font-mono text-lg mb-1">Lead Solutions Architect</p>
                            <p className="text-gray-500 text-sm mb-6">PandaCodeGen &middot; 8+ years &middot; 50+ projects</p>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                My job is to ensure your investment turns into measurable ROI. I design enterprise architectures that eliminate technical debt, reduce hosting costs, and deliver performance improvements that directly impact your bottom line. Every migration I architect is built around your business goals, not just technical specs.
                            </p>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href="https://cal.com/pandagen/discovery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-all"
                                >
                                    Book Strategy Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8">Strategic Expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {expertise.map((skill) => (
                            <div key={skill.name} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${skill.level === "Expert" ? "bg-blue-500/10 text-blue-400" : "bg-cyan-500/10 text-cyan-400"}`}>
                                    {skill.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Do */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6">What I Do</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Enterprise Architecture Design</h3>
                            <p className="text-gray-500 text-sm">Design scalable architectures that eliminate platform fees, reduce hosting costs by 60-90%, and improve performance by 3-4×. Every architecture decision is ROI-driven.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Strategic Migration Planning</h3>
                            <p className="text-gray-500 text-sm">Map out WordPress, Shopify, and legacy platform migrations with zero downtime. Minimize business disruption while maximizing performance gains and cost savings.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">ROI & Cost Analysis</h3>
                            <p className="text-gray-500 text-sm">Calculate exact ROI before we write a single line of code. Show you the monthly savings, performance improvements, and payback timeline upfront. No surprises.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Technical Leadership</h3>
                            <p className="text-gray-500 text-sm">Lead implementation teams, ensure quality standards, and guarantee projects deliver on promised metrics. 8+ years leading enterprise migrations for e-commerce brands.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles by Imran */}
            {imranPosts.length > 0 && (
                <section className="py-16 px-6 border-t border-white/5 bg-white/[0.01]">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-2xl font-bold mb-2">Articles by Imran</h2>
                        <p className="text-gray-500 mb-8">Strategic insights on enterprise migrations and ROI optimization.</p>

                        <div className="grid gap-4">
                            {imranPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className="group flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all"
                                >
                                    <div>
                                        <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors mb-1">{post.title}</h3>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <span>{post.category}</span>
                                            <span>&middot;</span>
                                            <span>{post.readTime}</span>
                                            <span>&middot;</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-600 group-hover:text-blue-400 transition-colors text-lg">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Work With Me</h2>
                    <p className="text-gray-400 mb-8">Get a strategic architecture review and ROI analysis before committing to any platform migration.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            data-cal-namespace="discovery"
                            data-cal-link="pandagen/discovery"
                            data-cal-config='{"layout":"month_view"}'
                            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            Book Strategy Call
                        </button>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                        >
                            Meet the Full Team
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
