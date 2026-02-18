import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
    description: "Hassan Jamal helps e-commerce brands ditch Shopify fees and WordPress bloat with high-performance custom code (Next.js). Founder at PandaCodeGen. Karachi University alumni. Based in Missouri City, Texas.",
    openGraph: {
        title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
        description: "Helping E-com brands ditch Shopify fees & WordPress bloat with high-performance custom code (Next.js). Founder @ PandaCodeGen.",
        type: "profile",
        url: "https://www.pandacodegen.com/about/hassan",
        images: [{ url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 }],
    },
    twitter: {
        card: "summary",
        title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
        description: "Helping E-com brands ditch Shopify fees & WordPress bloat with custom Next.js storefronts.",
    },
    alternates: {
        canonical: "/about/hassan",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
            "name": "Hassan Jamal",
            "givenName": "Hassan",
            "familyName": "Jamal",
            "jobTitle": "Founder & Lead Full-Stack Engineer",
            "description": "Helping e-commerce brands ditch Shopify fees and WordPress bloat with high-performance custom code (Next.js). Founder at PandaCodeGen.",
            "url": "https://www.pandacodegen.com/about/hassan",
            "image": "https://www.pandacodegen.com/team/hassan.png",
            "worksFor": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen"
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Karachi University"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Missouri City",
                "addressRegion": "Texas",
                "addressCountry": "US"
            },
            "knowsAbout": [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Web Performance Optimization",
                "SEO",
                "Headless CMS",
                "Shopify Headless Commerce",
                "WordPress Migration",
                "Server Components",
                "Edge Computing",
                "Core Web Vitals"
            ],
            "sameAs": [
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen"
            ]
        },
        {
            "@type": "ProfilePage",
            "@id": "https://www.pandacodegen.com/about/hassan#webpage",
            "url": "https://www.pandacodegen.com/about/hassan",
            "name": "Hassan Jamal - Lead Full-Stack Engineer at PandaGen",
            "description": "Learn about Hassan Jamal, Lead Full-Stack Engineer at PandaGen. 7+ years of experience in web performance, Next.js, and enterprise architecture.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "mainEntity": { "@id": "https://www.pandacodegen.com/#/schema/person/hassan" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/about/hassan#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.pandacodegen.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Hassan Jamal", "item": "https://www.pandacodegen.com/about/hassan" }
            ]
        }
    ]
};

const expertise = [
    { name: "Web Development", level: "Expert" },
    { name: "SEO Optimization", level: "Expert" },
    { name: "Next.js 15 / React / TypeScript", level: "Expert" },
    { name: "Custom Software Development", level: "Expert" },
    { name: "Shopify Headless (Storefront API)", level: "Expert" },
    { name: "SaaS Development", level: "Expert" },
    { name: "Strategic Planning", level: "Advanced" },
    { name: "Business Strategy", level: "Advanced" },
    { name: "Vercel / Supabase / Sanity", level: "Expert" },
    { name: "WordPress & Platform Migrations", level: "Expert" },
];

export default function HassanAuthorPage() {
    const hassanPosts = blogPosts.filter(p => p.author === "Hassan");

    return (
        <main className="bg-[#050505] min-h-screen text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

            <Header />

            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/15 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-10">
                        <Link href="/" className="hover:text-neon transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/about" className="hover:text-neon transition-colors">About</Link>
                        <span>/</span>
                        <span className="text-gray-300">Hassan Jamal</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Photo */}
                        <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-white/10 flex-shrink-0 relative">
                            <Image
                                src="/team/hassan.png"
                                fill
                                alt="Hassan Jamal - Lead Full-Stack Engineer at PandaGen"
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Info */}
                        <div>
                            <div className="px-3 py-1 bg-neon/10 text-neon text-[10px] font-bold uppercase tracking-wider rounded w-fit mb-3">
                                Engineering
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Hassan Jamal</h1>
                            <p className="text-neon font-mono text-lg mb-1">Founder &amp; Lead Full-Stack Engineer</p>
                            <p className="text-gray-500 text-sm mb-6">PandaCodeGen &middot; Karachi University &middot; Missouri City, TX</p>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                I help e-commerce brands ditch Shopify fees and WordPress bloat with high-performance custom code. One client was paying $3,200/month on Shopify Plus. Their storefront scored 31 on Google PageSpeed. We migrated them to a custom build. Same features. Zero app fees. PageSpeed went from 31 to 92.
                            </p>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-neon/30 transition-all"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/hassan-pandagen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-neon/30 transition-all"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {expertise.map((skill) => (
                            <div key={skill.name} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${skill.level === "Expert" ? "bg-neon/10 text-neon" : "bg-blue-500/10 text-blue-400"}`}>
                                    {skill.level}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Build */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6">What I Build</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Custom Next.js Storefronts</h3>
                            <p className="text-gray-500 text-sm">Vercel + Supabase + Sanity stack. Sites that score 90+ on Google PageSpeed out of the box. $0/month to run.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Shopify Plus &amp; WordPress Migrations</h3>
                            <p className="text-gray-500 text-sm">Replace $3,200/month in platform fees with custom code. Same features. Zero app fees. PageSpeed from 31 to 92.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Admin Dashboards &amp; SaaS</h3>
                            <p className="text-gray-500 text-sm">Admin dashboards that replace $500+/mo in SaaS apps. Built with React, TypeScript, and enterprise-grade architecture.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                            <h3 className="text-white font-bold mb-2">Speed &amp; Cost Audits</h3>
                            <p className="text-gray-500 text-sm">Free speed and cost audit for e-commerce stores paying $1,000+/month in platform fees and still loading in 3+ seconds. No pitch. Just data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles by Hassan */}
            <section className="py-16 px-6 border-t border-white/5 bg-white/[0.01]">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-2">Articles by Hassan</h2>
                    <p className="text-gray-500 mb-8">Technical deep-dives on web performance, SEO, and modern architecture.</p>

                    <div className="grid gap-4">
                        {hassanPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-neon/20 transition-all"
                            >
                                <div>
                                    <h3 className="text-white font-medium group-hover:text-neon transition-colors mb-1">{post.title}</h3>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span>{post.category}</span>
                                        <span>&middot;</span>
                                        <span>{post.readTime}</span>
                                        <span>&middot;</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <span className="text-gray-600 group-hover:text-neon transition-colors text-lg">&rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Work With Me</h2>
                    <p className="text-gray-400 mb-8">No account managers. You talk directly to the engineer building your product.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            data-cal-namespace="discovery"
                            data-cal-link="pandagen/discovery"
                            data-cal-config='{"layout":"month_view"}'
                            className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:scale-105 transition-transform"
                        >
                            Book a Call
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
