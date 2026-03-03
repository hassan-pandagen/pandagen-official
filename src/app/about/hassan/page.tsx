import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, Code2, Target } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
    description: "Hassan Jamal builds high-performance custom-coded websites for e-commerce brands. Founder at PandaCodeGen. Based in Missouri City, TX.",
    openGraph: {
        title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
        description: "Helping e-commerce brands ditch Shopify fees & WordPress bloat with high-performance custom code. Founder @ PandaCodeGen.",
        type: "profile",
        url: "https://www.pandacodegen.com/about/hassan",
        images: [{ url: "https://www.pandacodegen.com/team/hassan.png", width: 400, height: 400 }],
    },
    twitter: {
        card: "summary",
        title: "Hassan Jamal - Founder & Lead Engineer at PandaCodeGen",
        description: "Helping e-commerce brands ditch Shopify fees & WordPress bloat with custom-coded storefronts.",
    },
    alternates: { canonical: "/about/hassan" },
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
            "description": "Helping e-commerce brands ditch Shopify fees and WordPress bloat with high-performance custom code. Founder at PandaCodeGen.",
            "url": "https://www.pandacodegen.com/about/hassan",
            "image": "https://www.pandacodegen.com/team/hassan.png",
            "worksFor": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Missouri City",
                "addressRegion": "Texas",
                "addressCountry": "US",
            },
            "knowsAbout": [
                "Custom Web Development", "Web Performance Optimization", "SEO",
                "E-commerce Development", "Shopify Optimization", "WordPress Migration",
                "Speed Optimization", "Core Web Vitals", "Custom Business Software", "Cloud Hosting",
            ],
            "sameAs": [
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": "https://www.pandacodegen.com/about/hassan#webpage",
            "url": "https://www.pandacodegen.com/about/hassan",
            "name": "Hassan Jamal - Lead Full-Stack Engineer at PandaGen",
            "description": "Learn about Hassan Jamal, Lead Full-Stack Engineer at PandaGen. 7+ years of experience in web performance, Next.js, and enterprise architecture.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "mainEntity": { "@id": "https://www.pandacodegen.com/#/schema/person/hassan" },
            "inLanguage": "en-US",
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/about/hassan#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.pandacodegen.com/about" },
                { "@type": "ListItem", "position": 3, "name": "Hassan Jamal", "item": "https://www.pandacodegen.com/about/hassan" },
            ],
        },
    ],
};

const expertise = [
    "Custom Website Engineering",
    "SEO & Google Rankings",
    "Speed & Performance Optimization",
    "Custom Software Development",
    "Shopify Speed Optimization",
    "Business Tool & Dashboard Development",
    "Cloud Hosting & Databases",
    "WordPress & Platform Migrations",
    "Strategic Planning",
    "Business Strategy",
];

const builds = [
    { title: "Custom-Coded Storefronts", desc: "Online stores that score 90+ on Google PageSpeed out of the box. $0/month to run." },
    { title: "Shopify Plus & WordPress Migrations", desc: "Replace $3,200/month in platform fees with custom code. Same features. Zero app fees. PageSpeed from 31 to 92." },
    { title: "Admin Dashboards & SaaS", desc: "Admin dashboards that replace $500+/mo in SaaS apps. Built with enterprise-grade architecture and bank-level security." },
    { title: "Speed & Cost Audits", desc: "Free speed and cost audit for e-commerce stores paying $1,000+/month in platform fees and still loading in 3+ seconds." },
];

export default function HassanAuthorPage() {
    const hassanPosts = blogPosts.filter(p => p.author === "Hassan");

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
                        <div className="w-full md:w-64 flex-shrink-0 aspect-square relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/60 border border-white">
                            <Image
                                src="/team/hassan.png"
                                fill
                                alt="Hassan Jamal - Lead Full-Stack Engineer at PandaGen"
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-charcoal mb-6">
                                Founder &amp; Lead Engineer
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-3">Hassan Jamal.</h1>
                            <p className="text-lg font-mono text-cognac mb-6">Full-Stack Architect &middot; Missouri City, TX</p>
                            <p className="text-xl text-stone-600 leading-relaxed max-w-xl mb-8">
                                I help e-commerce brands ditch Shopify fees and WordPress bloat with high-performance custom code. One client was paying $3,200/month on Shopify Plus. Their storefront scored 31 on Google PageSpeed. We migrated them to a custom build. Same features. Zero app fees. PageSpeed went from 31 to 92.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-charcoal rounded-full text-sm font-bold hover:border-cognac/40 hover:text-cognac transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/hassan-pandagen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-white border border-stone-200 text-charcoal rounded-full text-sm font-bold hover:bg-stone-50 hover:border-stone-400 transition-all"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-5 h-5 text-cognac" />
                                <h3 className="text-xl font-serif text-charcoal">Technical Expertise</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {expertise.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-stone-50 border border-stone-100 text-stone-600 text-sm font-medium rounded-md">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-cognac" />
                                <h3 className="text-xl font-serif text-charcoal">What I Build</h3>
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
                    {hassanPosts.length > 0 && (
                        <section className="border-t border-stone-200 pt-16 mb-16">
                            <h2 className="text-2xl font-serif text-charcoal mb-2">Articles by Hassan</h2>
                            <p className="text-stone-500 mb-8">Technical deep-dives on web performance, SEO, and modern architecture.</p>
                            <div className="grid gap-3">
                                {hassanPosts.map((post) => (
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
                                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-cognac transition-colors flex-shrink-0 ml-4" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <section className="text-center py-16 bg-white border border-stone-200 rounded-3xl px-8">
                        <h2 className="text-2xl font-serif text-charcoal mb-4">Work With Me</h2>
                        <p className="text-stone-500 mb-8 max-w-md mx-auto">No account managers. You talk directly to the engineer building your product.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                data-cal-namespace="discovery"
                                data-cal-link="pandagen/discovery"
                                data-cal-config='{"layout":"month_view"}'
                                className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-105 transition-all"
                            >
                                Book a Call
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
