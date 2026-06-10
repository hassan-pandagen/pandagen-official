import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Zap, DollarSign, Server, ShoppingBag, BarChart3, Lock, Users, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
    title: "Panda Patches: WordPress to Next.js Migration, Zero SEO Drops",
    description: "3-year-old WordPress store migrated to a headless Next.js + Sanity + Supabase + Stripe stack. 100% of Google rankings preserved. Now $38K/mo on $25/mo tooling.",
    openGraph: {
        title: "Panda Patches: WordPress to Next.js Migration (Zero SEO Drops)",
        description: "3-year-old WordPress site migrated to a headless stack with zero Google ranking drops. $38K/mo revenue on $25/mo tooling.",
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-patches",
        images: [{ url: "https://www.pandacodegen.com/work/panda-patches.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Panda Patches: WordPress to Next.js Migration with Zero SEO Drops",
        description: "3-year-old WordPress e-commerce site migrated to Next.js + Sanity + Supabase + Stripe. 100% rankings preserved. $38K/mo on $25/mo tooling.",
    },
    alternates: { canonical: "/work/panda-patches" },
};

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-patches#article",
            "headline": "Panda Patches: WordPress to Next.js Migration with Zero SEO Drops",
            "description": "A 3-year-old WordPress e-commerce site migrated to a headless stack (Next.js + Sanity + Supabase + Stripe) with 100% of Google rankings preserved. Includes a real-time pricing calculator handling 9 patch types. Now generates $38,000/month revenue on $25/month tooling costs.",
            "image": "https://www.pandacodegen.com/work/panda-patches.png",
            "datePublished": "2025-10-01T00:00:00Z",
            "dateModified": "2026-04-12T00:00:00Z",
            "articleSection": "Case Study",
            "inLanguage": "en-US",
            "wordCount": 2100,
            "about": [
                { "@type": "Thing", "name": "WordPress to Next.js Migration" },
                { "@type": "Thing", "name": "SEO Preservation During Migration" },
                { "@type": "Thing", "name": "Headless Commerce Architecture" },
                { "@type": "Thing", "name": "Real-Time Pricing Engine" },
                { "@type": "SoftwareApplication", "name": "Sanity CMS" },
                { "@type": "SoftwareApplication", "name": "Supabase" },
                { "@type": "SoftwareApplication", "name": "Stripe" }
            ],
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Lead Full-Stack Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.pandacodegen.com/work/panda-patches"
            },
            "keywords": [
                "wordpress to nextjs migration",
                "seo preservation wordpress migration",
                "zero google ranking drops migration",
                "headless commerce case study",
                "next.js sanity supabase stripe",
                "real-time pricing calculator",
                "custom e-commerce development",
                "3 year old wordpress migration",
                "custom ops platform",
                "replace wordpress with next.js"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#webpage",
            "url": "https://www.pandacodegen.com/work/panda-patches",
            "name": "Panda Patches Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Panda Patches", "item": "https://www.pandacodegen.com/work/panda-patches" }
            ]
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "email": "info@pandacodegen.com",
            "foundingDate": "2026",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.google.com/maps?cid=16271659886069582158",
                "https://www.goodfirms.co/company/pandacodegen",
                "https://www.crunchbase.com/organization/pandacodegen",
                "https://www.sanity.io/exchange/community/pandacodegen",
                "https://www.behance.net/pandacodegen",
                "https://dev.to/pandacodegen"
            ]
        },
        {
            "@type": "Product",
            "@id": "https://pandapatches.com/#product",
            "name": "Panda Patches E-Commerce Platform",
            "description": "Custom embroidered patches e-commerce site built on Next.js, Sanity, Supabase, and Stripe. Flagship case study for PandaCodeGen.",
            "url": "https://pandapatches.com",
            "brand": {
                "@type": "Brand",
                "name": "Panda Patches"
            },
            "manufacturer": { "@id": "https://www.pandacodegen.com/#organization" }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Did the Panda Patches WordPress migration preserve Google search rankings?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We migrated the 3-year-old WordPress site to Next.js with 100 percent of Google rankings preserved and zero drops in Google Search Console. We exported every indexed URL before migration, built 301 redirects for each one in Next.js middleware, preserved existing meta titles and descriptions, upgraded schema markup without changing entity signals, and submitted a fresh sitemap to Google the day of launch. Rankings held position for 30 days post-launch and improved after 60 days because the new site loads in under 1 second, which Google rewards under its 2026 Core Web Vitals algorithm." }
                },
                {
                    "@type": "Question",
                    "name": "Can you replace Shopify with a custom coded e-commerce store?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We replaced WordPress + WooCommerce entirely for Panda Patches with a custom Next.js storefront. The new store generates $38K+/month with zero platform fees, compared to Shopify's $79 to $299/month plus transaction fees. You own 100% of the code." }
                },
                {
                    "@type": "Question",
                    "name": "How does a real-time pricing calculator work without API calls?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We built the pricing engine in TypeScript and run all calculations client-side. The full pricing matrix, 9 patch types, custom dimensions, 8+ quantity tiers, 3 backing options, 2 border types, is pre-compiled into a JavaScript function. Every price update takes under 5ms with zero server round-trips." }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to build a custom e-commerce platform like this?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom e-commerce platform with a real-time pricing engine, CMS, payment integrations (Stripe, PayPal, Apple Pay, Klarna, Afterpay), and an ops portal starts at $15,000 to $30,000 depending on complexity. Panda Patches runs on under $25/month in total tooling costs after launch." }
                },
                {
                    "@type": "Question",
                    "name": "What tools did the custom platform replace?",
                    "acceptedAnswer": { "@type": "Answer", "text": "One platform replaced: WordPress + WooCommerce ($80/mo), a separate CRM ($50/mo), Google Sheets for order tracking, a manual attendance tracker ($30/mo), and WhatsApp for team communication. Total savings: $200+/month plus 10+ hours per week of manual work." }
                },
                {
                    "@type": "Question",
                    "name": "How long did it take to build the Panda Patches platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The full platform, custom storefront with real-time pricing, Sanity CMS, 6 payment gateways, Supabase ops portal, and sales agent dashboards, was built and launched within 8 weeks. The Lighthouse score is 90+ across all Core Web Vitals." }
                }
            ]
        }
    ]
};

const techStack = [
    { name: "Next.js 16", role: "Frontend + API routes", color: "bg-stone-900 text-white" },
    { name: "React 19", role: "UI runtime", color: "bg-sky-600 text-white" },
    { name: "TypeScript", role: "Type safety", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS 3", role: "Styling", color: "bg-sky-500 text-white" },
    { name: "Sanity CMS", role: "Content management", color: "bg-red-500 text-white" },
    { name: "Supabase", role: "Ops database + auth", color: "bg-emerald-600 text-white" },
    { name: "Stripe", role: "Card payments + Klarna + Afterpay + Apple Pay", color: "bg-violet-600 text-white" },
    { name: "PayPal", role: "Alternative checkout", color: "bg-blue-700 text-white" },
    { name: "Upstash Redis", role: "Rate limiting + cache", color: "bg-red-600 text-white" },
    { name: "Zod", role: "Schema validation", color: "bg-indigo-600 text-white" },
    { name: "React Hook Form", role: "Forms + pricing calculator", color: "bg-pink-600 text-white" },
    { name: "Zeptomail", role: "Transactional email", color: "bg-amber-600 text-white" },
    { name: "next-sitemap", role: "Automated SEO sitemap", color: "bg-emerald-700 text-white" },
    { name: "Vercel", role: "Hosting + CDN + edge", color: "bg-stone-700 text-white" },
];

const pricingDimensions = [
    { label: "Patch Types", count: "9", examples: "Embroidered, Woven, PVC, Chenille, Leather, Silicone, Printed, Sequin, 3D" },
    { label: "Additional Products", count: "4", examples: "Lapel Pins, Challenge Coins, Keychains, PVC Shoe Charms" },
    { label: "Backing Options", count: "3", examples: "Iron-On, Velcro, Peel & Stick" },
    { label: "Border Types", count: "2", examples: "Merrowed, Hot-Cut" },
    { label: "Size Tiers", count: "∞", examples: "Custom dimensions with real-time price update" },
    { label: "Quantity Breaks", count: "8+", examples: "Volume discounts auto-calculated per order" },
];

const replacedTools = [
    { tool: "WordPress + WooCommerce", cost: "$80/mo", problem: "Couldn't handle the pricing matrix, manual quotes only" },
    { tool: "Separate CRM (HubSpot/Zoho)", cost: "$50/mo", problem: "No integration with orders, duplicate data entry" },
    { tool: "Google Sheets / spreadsheets", cost: "Free but 10hrs/wk", problem: "7 team members, zero real-time visibility, version conflicts" },
    { tool: "Manual attendance tracker", cost: "$30/mo", problem: "Clock in/out via WhatsApp messages" },
    { tool: "Chat tool for order updates", cost: "$40/mo", problem: "WhatsApp chains to update team on order status" },
];

const opsFeatures = [
    { icon: ShoppingBag, title: "Order Pipeline", desc: "Every order from storefront to production to fulfillment in one real-time view. Status updates trigger automatically." },
    { icon: BarChart3, title: "Sales Agent Dashboard", desc: "7 sales reps tracked individually. Revenue, conversion rate, quote volume, and response time per agent." },
    { icon: Clock, title: "Employee Clock In/Out", desc: "Replaced WhatsApp updates. Timestamped, geofenced clock-in system with automated payroll export." },
    { icon: Lock, title: "Role-Based Access", desc: "Admins see everything. Sales agents see their pipeline only. Production sees pending orders. Zero data leakage." },
    { icon: Users, title: "Team Performance", desc: "Every change is logged. Manager sees who updated what, when. Full audit trail for accountability." },
    { icon: Server, title: "Single Source of Truth", desc: "One Supabase database feeds the storefront, ops portal, and admin panel. No duplicate entries, ever." },
];

export default function PandaPatchesCaseStudy() {
    return (
        <main className="bg-paper min-h-screen">
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <Header />

            <div className="pt-24 md:pt-40 pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    {/* Breadcrumb */}
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/work" },
                        { label: "Panda Patches", href: "/work/panda-patches" },
                    ]} />

                    {/* HERO */}
                    <div className="mb-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cognac/10 border border-cognac/20 text-cognac text-xs font-bold uppercase tracking-widest">
                                WordPress Migration
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                                Zero SEO Drops
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-xs font-bold uppercase tracking-widest">
                                Headless Next.js + Sanity + Supabase + Stripe
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            Panda Patches.<br />
                            <span className="font-serif italic text-cognac">$38K/mo. $25 in tooling.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            A 3-year-old WordPress e-commerce site with real search traffic, existing customers, and a pricing problem WordPress couldn&apos;t solve. We migrated it to a complete headless stack (Next.js + Sanity + Supabase + Stripe) with a real-time pricing calculator and a custom ops platform. 100% of the Google rankings were preserved. Zero drops in Google Search Console. Now generates $38K/month revenue on $25/month in total tooling costs.
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "$38K+", label: "Monthly Revenue", sub: "powered by $25/mo in tooling" },
                                { value: "100%", label: "Rankings Preserved", sub: "zero drops in Search Console" },
                                { value: "7 → 1", label: "Tools Replaced", sub: "CRM · ops · store · tracking" },
                                { value: "3 yr", label: "Legacy Site Migrated", sub: "full content + SEO equity" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-400 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>

                        {/* Live Site CTA — dofollow link to pandapatches.com for cross-site SEO */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="https://pandapatches.com"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-colors text-sm"
                            >
                                Visit the Live Site → pandapatches.com
                            </a>
                            <span className="text-xs text-stone-500">
                                Real revenue-generating e-commerce site, not a mockup or portfolio screenshot.
                            </span>
                        </div>
                    </div>

                    {/* SEO PRESERVATION */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">SEO Preservation</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">3 years of SEO equity. Zero ranking drops.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Migrating a 3-year-old WordPress site is the hardest part of any replatform. The site had existing Google rankings, backlinks, and organic traffic that the business depended on. A broken migration kills all of that overnight. Here is exactly what we did to preserve 100 percent of the search equity.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {[
                                { title: "Full URL audit before migration", desc: "We exported every indexed URL from Google Search Console and mapped each one to its new equivalent on the Next.js site. Zero orphan pages." },
                                { title: "301 redirects for every old URL", desc: "Every WordPress URL gets a server-side 301 redirect to the matching Next.js page. Old product URLs, old blog posts, old category pages, everything. Configured in Next.js middleware." },
                                { title: "Meta titles and descriptions preserved", desc: "We carried over the exact meta titles and descriptions from the WordPress site where they were already ranking. No rewriting. No experiments during migration." },
                                { title: "Schema markup upgraded, not replaced", desc: "The old site had basic schema. We replaced it with a complete @graph structure (Article, Product, BreadcrumbList, Organization, FAQPage) without changing the existing entity signals Google already trusted." },
                                { title: "New XML sitemap submitted day one", desc: "A fresh sitemap.xml with all new URLs submitted to Google Search Console immediately after launch. Google started recrawling within hours." },
                                { title: "Core Web Vitals improved, not regressed", desc: "Load time dropped from 4+ seconds on WordPress to under 1 second on Next.js. Google rewarded the improvement with better rankings, not worse." },
                            ].map((item) => (
                                <div key={item.title} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <h3 className="font-bold text-charcoal mb-2 flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        {item.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-emerald-900 mb-2">The result: zero ranking drops in Google Search Console</p>
                                    <p className="text-emerald-800 text-sm leading-relaxed">
                                        We watched Search Console daily for 30 days after launch. Every ranked keyword held position. No 404 spikes. No sudden impression drops. No manual actions. After 60 days, rankings actually improved because the new site loads in under 1 second, which Google rewards under its 2026 Core Web Vitals algorithm. This is exactly how a WordPress to Next.js migration should go.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE PROBLEM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">The Problem</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">WordPress couldn&apos;t quote a price.</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    No Calculator. Every Sale Was a Waiting Game.
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Custom patches have complex pricing. The final price depends on patch type (9 options), size, quantity, backing, and border. That&apos;s thousands of combinations. WordPress had no way to calculate this live. So every customer filled out a contact form and waited 24+ hours for someone to manually work out a price and email it back. Most of them didn&apos;t wait — they went to a competitor who showed them the price instantly.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    7 Disconnected Tools
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    The business ran on: WordPress for the store, a separate CRM, Google Sheets for order tracking, a spreadsheet for attendance, and WhatsApp for team updates. 7 team members touching 5 different tools with zero real-time sync. Every status update was a manual message.
                                </p>
                            </div>
                        </div>

                        {/* Replaced tools table */}
                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[1fr_auto_1fr] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-400 uppercase tracking-widest">
                                <div>Tool Being Replaced</div>
                                <div className="text-center px-4">Cost</div>
                                <div>Problem</div>
                            </div>
                            {replacedTools.map((t, i) => (
                                <div key={i} className="grid grid-cols-[1fr_auto_1fr] px-5 py-4 border-b border-stone-100 last:border-0 text-sm">
                                    <div className="font-medium text-charcoal">{t.tool}</div>
                                    <div className="text-center px-4 font-bold text-red-500 whitespace-nowrap">{t.cost}</div>
                                    <div className="text-stone-500">{t.problem}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* THE SOLUTION: PRICING CALCULATOR */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Storefront</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">An instant business calculator. Pick your options, see your price.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            We built a custom quote calculator directly into the storefront. Customers select patch type, enter their dimensions, choose quantity and finish options — and the exact price appears instantly. No forms. No waiting. No back-and-forth emails. The calculator is the checkout. What used to take 24 hours now takes 30 seconds.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {pricingDimensions.map((d) => (
                                <div key={d.label} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-2xl font-black text-cognac">{d.count}</span>
                                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{d.label}</span>
                                    </div>
                                    <p className="text-xs text-stone-500 leading-relaxed">{d.examples}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <Zap className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-2">The pricing engine calculates live</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        9 patch types × custom dimensions × 8+ quantity tiers × 3 backing options × 2 border types = thousands of price combinations. All calculated client-side with a custom TypeScript pricing engine. Zero API calls per keystroke. Response time: &lt;5ms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE OPS PLATFORM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Operations</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">One platform. 7 tools gone.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            We built a private Supabase-backed ops portal that replaced the CRM, Google Sheets, attendance tracker, and WhatsApp update chains. 7 team members. One platform. Every change logged with a timestamp and author.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {opsFeatures.map((f) => (
                                <div key={f.title} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <f.icon className="w-5 h-5 text-cognac mb-3" />
                                    <h3 className="font-bold text-charcoal mb-2">{f.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Tech Stack</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Enterprise architecture. Startup cost.</h2>
                        <p className="text-stone-600 mb-8">
                            Started free on Vercel. Scaled to $20/mo on Vercel Pro once the store hit $38K/mo in revenue. Supabase, Sanity, and Upstash still run on free tiers. Total tooling: around $25/mo.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((t) => (
                                <div key={t.name} className={`px-4 py-2 rounded-xl ${t.color}`}>
                                    <div className="text-sm font-bold">{t.name}</div>
                                    <div className="text-xs opacity-70">{t.role}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RESULTS */}
                    <section className="mb-20 p-8 md:p-12 bg-charcoal text-white rounded-3xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Results</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-10">What changed after launch.</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { before: "3 years of WordPress SEO equity at risk", after: "100% of Google rankings preserved. Zero drops in Search Console." },
                                { before: "Customers waited 24+ hours for a manual quote", after: "Customers see the price instantly. Self-serve checkout." },
                                { before: "$200+/mo across 3 separate tools + hosting", after: "Under $25/mo total. CRM, ops, store, and hosting." },
                                { before: "7 disconnected tools, constant WhatsApp updates", after: "1 platform. All 7 team members on the same real-time data." },
                                { before: "WordPress pricing ceiling blocked growth", after: "$38K+/mo revenue. Pricing engine scales to any complexity." },
                                { before: "Attendance tracked via WhatsApp messages", after: "Timestamped clock in/out with payroll export." },
                                { before: "No visibility into sales agent performance", after: "Per-agent revenue, conversion rate, and response time tracked live." },
                                { before: "Load time over 4 seconds on WordPress", after: "Under 1 second load time. Lighthouse 90+ on Core Web Vitals." },
                            ].map((r, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-stone-400 text-sm line-through mb-1">{r.before}</p>
                                        <p className="text-white text-sm font-medium">{r.after}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* BUSINESS IMPACT */}
                    <section className="mb-20 p-8 md:p-12 bg-cognac/5 border border-cognac/20 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">The Result</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">What this actually meant for the business.</h2>
                        <p className="text-stone-500 mb-8 max-w-2xl">This is our own brand. We built the tech and the business runs on it. These aren&apos;t projections — they&apos;re live numbers.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "💰", label: "Monthly Revenue", value: "$38K+/mo", detail: "A patch business running on custom Next.js + a bespoke ops platform. No Shopify cut. No app fees. No platform holding the business hostage." },
                                { icon: "🔧", label: "Tools Replaced", value: "7 to 1", detail: "WordPress and WooCommerce, a separate CRM, Google Sheets for order tracking, an attendance tracker, and WhatsApp for team comms, all replaced by one custom platform built exactly for how this business actually operates." },
                                { icon: "📈", label: "Cost vs Revenue", value: "$25/mo", detail: "The entire tech stack — storefront, ops dashboard, email, hosting — costs $25 a month to run. The revenue it processes is over $38,000." },
                            ].map((item) => (
                                <div key={item.label} className="bg-white border border-stone-300 rounded-2xl p-6">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{item.label}</div>
                                    <div className="text-2xl font-black text-charcoal mb-2">{item.value}</div>
                                    <p className="text-sm text-stone-500 leading-relaxed">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* WHAT WAS BUILT */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Full Scope</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Everything that was built.</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                "9 product category pages (embroidered, woven, PVC, chenille, leather, silicone, printed, sequin, 3D)",
                                "4 additional product pages (lapel pins, challenge coins, keychains, PVC shoe charms)",
                                "Real-time pricing calculator with all dimensions",
                                "Stripe + PayPal checkout (Apple Pay, Klarna, Afterpay via Stripe Payment Element)",
                                "Sanity CMS, content editors manage everything without code",
                                "Blog system with 50+ post capacity (dynamic + SEO-optimized)",
                                "Order confirmation emails + customer order history",
                                "File upload for custom design mockups",
                                "Supabase ops portal, order pipeline with real-time status",
                                "Sales agent dashboards, 7 individual performance views",
                                "Employee clock in/out with role-based access",
                                "Full audit log, every change timestamped and attributed",
                                "100% mobile responsive with touch-optimized UI",
                                "Lighthouse 90+ on all core web vitals",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RELATED SERVICES */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Related Services</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Want results like this?</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/services/custom-engineering" className="group p-6 bg-white border border-stone-300 rounded-2xl hover:border-cognac/40 transition-all">
                                <h3 className="font-bold text-charcoal group-hover:text-cognac transition-colors mb-2">Custom Engineering</h3>
                                <p className="text-stone-500 text-sm">SaaS platforms, dashboards, and AI-powered tools built from scratch.</p>
                            </Link>
                            <Link href="/services/woocommerce" className="group p-6 bg-white border border-stone-300 rounded-2xl hover:border-cognac/40 transition-all">
                                <h3 className="font-bold text-charcoal group-hover:text-cognac transition-colors mb-2">WooCommerce Migration</h3>
                                <p className="text-stone-500 text-sm">Escape plugin conflicts and slow checkouts. Own your store.</p>
                            </Link>
                            <Link href="/services/ecommerce" className="group p-6 bg-white border border-stone-300 rounded-2xl hover:border-cognac/40 transition-all">
                                <h3 className="font-bold text-charcoal group-hover:text-cognac transition-colors mb-2">E-Commerce Solutions</h3>
                                <p className="text-stone-500 text-sm">Custom storefronts with real-time pricing and zero platform fees.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
