import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, BarChart3, Target } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
    title: "Imran Raza Ladhani - Architecture Collaborator at PandaCodeGen",
    description: "Imran Raza Ladhani is the architecture collaborator at PandaCodeGen, working with founder Hassan Jamal on scalable custom Next.js builds.",
    openGraph: {
        title: "Imran Raza Ladhani - Architecture Collaborator at PandaCodeGen",
        description: "Architecture collaborator at PandaCodeGen. Custom Next.js builds, platform migrations, system design.",
        type: "profile",
        url: "https://www.pandacodegen.com/about/imran",
        images: [{ url: "https://www.pandacodegen.com/team/imran.png", width: 400, height: 400 }],
    },
    twitter: {
        card: "summary",
        title: "Imran Raza Ladhani - Architecture Collaborator at PandaCodeGen",
        description: "Architecture collaborator at PandaCodeGen. Custom Next.js builds and platform migrations.",
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    alternates: { canonical: "/about/imran" },
};

const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/#/schema/person/imran",
            "name": "Imran Raza Ladhani",
            "givenName": "Imran",
            "familyName": "Raza Ladhani",
            "jobTitle": "Architecture Collaborator",
            "description": "Architecture collaborator at PandaCodeGen. Works with founder Hassan Jamal on scalable custom Next.js builds, platform migrations, and system design.",
            "url": "https://www.pandacodegen.com/about/imran",
            "image": "https://www.pandacodegen.com/team/imran.png",
            "worksFor": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
            },
            "sameAs": [
                "https://www.linkedin.com/in/imran-raza-ladhani/",
            ],
            "knowsAbout": [
                "Next.js Architecture", "Platform Migrations", "System Design",
                "Headless Commerce", "WordPress Migration", "Shopify Headless",
                "Performance Optimization", "Technical Planning",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": "https://www.pandacodegen.com/about/imran#webpage",
            "url": "https://www.pandacodegen.com/about/imran",
            "name": "Imran Raza Ladhani - Architecture Collaborator at PandaCodeGen",
            "description": "Learn about Imran Raza Ladhani, architecture collaborator at PandaCodeGen. Works with founder Hassan Jamal on custom Next.js builds and platform migrations.",
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
    "Next.js Architecture",
    "Platform Migrations",
    "System Design",
    "Headless Commerce",
    "WordPress Migration",
    "Shopify Headless",
    "Performance Optimization",
    "Database Modeling",
    "API Design",
    "Sanity CMS",
];

const builds = [
    { title: "Migration Feasibility Reviews", desc: "Before any quote goes out, I review the source platform, content structure, integrations, and SEO risk. The call is: feasible in 3 weeks, feasible in 8, or not feasible at all." },
    { title: "System Design & Data Modeling", desc: "Sanity schema, Supabase tables, Stripe connect architecture, webhook flow. The stuff Hassan does not want to re-think three weeks into a build." },
    { title: "Zero-Downtime Migration Planning", desc: "WordPress and Shopify cutovers without losing a ranking, a subscription, or a customer card. DNS sequencing, 301 maps, staging-to-prod handoffs." },
    { title: "Technical Quality Review", desc: "Before launch, I stress-test the architecture: can it scale past 10,000 users, hold up under a Shop Pay spike, survive a hosting vendor switch. If it cannot, we fix before launch." },
];

export default function ImranAuthorPage() {
    const imranPosts = blogPosts.filter(p => p.author === "Imran");

    return (
        <main className="bg-paper min-h-screen">
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <Header />

            <div className="pt-20 md:pt-40 pb-12 md:pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    {/* Back */}
                    <Link href="/about" className="group inline-flex items-center gap-2 text-stone-500 hover:text-cognac transition-colors mb-6 md:mb-12 font-medium">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Team
                    </Link>

                    {/* Hero */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mb-10 md:mb-24">
                        <div className="w-full max-w-[280px] mx-auto md:mx-0 md:w-64 shrink-0 aspect-square relative rounded-2xl overflow-hidden shadow-xl shadow-stone-200/60 border border-white">
                            <Image
                                src="/team/imran.png"
                                fill
                                sizes="(max-width: 768px) 100vw, 256px"
                                alt="Imran - Lead Solutions Architect at PandaCodeGen"
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-charcoal mb-6">
                                Architecture Collaborator
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-3">Imran Raza Ladhani.</h1>
                            <p className="text-lg font-mono text-cognac mb-6">Architecture Collaborator &middot; PandaCodeGen</p>
                            <p className="text-xl text-stone-600 leading-relaxed max-w-xl mb-8">
                                I work with Hassan on the hard architecture calls. Which migrations are actually feasible without breaking SEO. How to keep a WooCommerce checkout live during a headless rebuild. Where Next.js App Router ends and Sanity or Supabase takes over. Hassan writes the code. I help decide what that code needs to do.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.linkedin.com/in/imran-raza-ladhani/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-charcoal rounded-full text-sm font-bold hover:border-cognac/40 hover:text-cognac transition-all"
                                >
                                    LinkedIn &rarr;
                                </a>
                                <button
                                    data-cal-namespace="discovery"
                                    data-cal-link="pandagen/discovery"
                                    data-cal-config='{"layout":"month_view"}'
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-charcoal rounded-full text-sm font-bold hover:border-cognac/40 hover:text-cognac transition-all"
                                >
                                    Book Architecture Call
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-16">
                        <div className="p-8 bg-white border border-stone-300 rounded-2xl shadow-xs">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-5 h-5 text-cognac" />
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

                        <div className="p-8 bg-white border border-stone-300 rounded-2xl shadow-xs">
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
                        <section className="border-t border-stone-200 pt-10 md:pt-16 mb-10 md:mb-16">
                            <h2 className="text-2xl font-serif text-charcoal mb-2">Articles by Imran</h2>
                            <p className="text-stone-500 mb-8">Architecture notes on custom migrations and system design.</p>
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
                    <section className="text-center py-10 md:py-16 bg-white border border-stone-300 rounded-3xl px-6 md:px-8">
                        <h2 className="text-2xl font-serif text-charcoal mb-4">Architecture Review Before You Commit</h2>
                        <p className="text-stone-500 mb-8 max-w-md mx-auto">Book a 30-minute architecture call. We review your current stack, flag the migration risks, and scope feasibility before you commit a dollar.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                data-cal-namespace="discovery"
                                data-cal-link="pandagen/discovery"
                                data-cal-config='{"layout":"month_view"}'
                                className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-105 transition-all"
                            >
                                Book Architecture Call
                            </button>
                            <Link
                                href="/about/hassan"
                                className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:bg-cognac hover:text-white hover:border-cognac transition-all"
                            >
                                Meet the Founder
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
