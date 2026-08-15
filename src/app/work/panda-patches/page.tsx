import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Zap, DollarSign, Server, ShoppingBag, BarChart3, Lock, Users, Clock, Sparkles, CreditCard, LineChart, Search, UserRound, Trophy, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
    title: "Panda Patches: WordPress to Next.js Migration, Zero SEO Drops",
    description: "3-year-old WordPress store migrated to a headless Next.js + Sanity + Supabase + Square stack. No ranking losses recorded in Search Console during the monitored post-launch period. Scaled from $38K to about $50K/mo on about $55/mo tooling.",
    openGraph: {
        title: "Panda Patches: WordPress to Next.js Migration (Zero SEO Drops)",
        description: "3-year-old WordPress site migrated to a headless stack with zero Google ranking drops. Revenue scaled from $38K to about $50K/mo on about $55/mo tooling.",
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-patches",
        images: [ogImageForPath("/work/panda-patches")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Panda Patches: WordPress to Next.js Migration with Zero SEO Drops",
        description: "3-year-old WordPress e-commerce site migrated to Next.js + Sanity + Supabase + Square. No ranking losses recorded in the monitored post-launch period. Scaled from $38K to about $50K/mo on about $55/mo tooling.",
    },
    alternates: { canonical: "/work/panda-patches" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "Did the Panda Patches WordPress migration preserve Google search rankings?",
        answer: "We migrated the 3-year-old WordPress site to Next.js and recorded no ranking losses in Google Search Console during the 30-day post-launch monitoring window. We exported every indexed URL before migration, built 301 redirects for each one in Next.js middleware, preserved existing meta titles and descriptions, upgraded schema markup without changing entity signals, and submitted a fresh sitemap to Google the day of launch. Rankings held through that 30-day window. Movement after that point reflects many factors outside our control and is not attributed to the rebuild. No provider controls search rankings.",
    },
    {
        question: "Can you replace Shopify with a custom coded e-commerce store?",
        answer: "Yes. We replaced WordPress + WooCommerce entirely for Panda Patches with a custom Next.js storefront. The store has scaled from $38K to about $50K/month with zero platform fees, compared to Shopify's $79 to $299/month plus transaction fees. You own 100% of the code.",
    },
    {
        question: "How does a real-time pricing calculator work without API calls?",
        answer: "We built the pricing engine in TypeScript and run all calculations client-side. The full pricing matrix, 9 patch types, custom dimensions, 8+ quantity tiers, 3 backing options, 2 border types, is pre-compiled into a JavaScript function. Every price update takes under 5ms with zero server round-trips.",
    },
    {
        question: "How much does it cost to build a custom e-commerce platform like this?",
        answer: "A custom e-commerce platform with a real-time pricing engine, CMS, Square checkout (card, Apple Pay, Google Pay, Cash App Pay, and Afterpay BNPL), an AI mockup generator, a customer portal, and a full server-side conversion-tracking stack starts at $15,000 to $30,000 depending on complexity. Panda Patches runs on about $55/month in total tooling costs after launch (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).",
    },
    {
        question: "What tools did the custom platform replace?",
        answer: "One platform replaced: WordPress + WooCommerce ($80/mo), a separate CRM ($50/mo), Google Sheets for order tracking, a manual attendance tracker ($30/mo), and WhatsApp for team communication. Total savings: $200+/month plus 10+ hours per week of manual work.",
    },
    {
        question: "How long did it take to build the Panda Patches platform?",
        answer: "The storefront, custom real-time pricing, Sanity CMS, AI patch generator, Square checkout with BNPL, customer portal, and the server-side conversion-tracking stack, was built and launched within 8 weeks. The connected staff CRM that runs order operations is a separate application sharing the same Supabase backend. The Lighthouse score is 90+ across all Core Web Vitals.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-patches#article",
            "headline": "Panda Patches: WordPress to Next.js Migration with Zero SEO Drops",
            "description": "A 3-year-old WordPress e-commerce site migrated to a headless stack (Next.js + Sanity + Supabase + Square) with no ranking losses recorded in Search Console during the monitored post-launch period. Includes a real-time pricing calculator handling 9 patch types. Revenue grew from $38,000 to about $50,000/month on about $55/month tooling (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).",
            "image": ogImageUrlForPath("/work/panda-patches"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-08-10T00:00:00Z",
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
                { "@type": "SoftwareApplication", "name": "Square" }
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
                "next.js sanity supabase square",
                "real-time pricing calculator",
                "ai patch generator",
                "square checkout bnpl afterpay",
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
            "description": "PandaCodeGen is a custom software studio that builds and operates its own products, including Panda Patches, a custom embroidered-patches e-commerce business on Next.js, Sanity, Supabase, and Square. Panda Patches is owned and operated by PandaCodeGen co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform but holds no ownership or partnership stake in the business.",
            "email": "info@pandacodegen.com",
            "foundingDate": "2026",
            "areaServed": "Worldwide",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "addressCountry": "US"
            },
            "founder": [
                {
                    "@type": "Person",
                    "name": "Imran Raza Ladhani",
                    "jobTitle": "Co-Founder"
                },
                {
                    "@type": "Person",
                    "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                    "name": "Hassan Jamal",
                    "jobTitle": "Co-Founder & Lead Full-Stack Engineer",
                    "url": "https://www.pandacodegen.com/about/hassan"
                }
            ],
            "knowsAbout": [
                "WordPress to Next.js migration",
                "Headless commerce architecture",
                "Real-time pricing engines",
                "Sanity CMS",
                "Supabase",
                "Square checkout and BNPL",
                "Server-side conversion tracking",
                "Custom ERP and operations platforms"
            ],
            "sameAs": [
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.goodfirms.co/company/pandacodegen",
                "https://www.crunchbase.com/organization/pandacodegen",
                "https://www.sanity.io/exchange/community/pandacodegen",
                "https://www.behance.net/pandacodegen",
                "https://dev.to/pandacodegen"
            ]
        },
        // A "Product" node for the Panda Patches platform was removed on 11 Aug
        // 2026. Search Console flagged it: "Either 'offers', 'review' or
        // 'aggregateRating' should be specified".
        //
        // All three ways of satisfying that are wrong here, which is the tell that
        // the node itself was wrong:
        //   offers          - the platform is not for sale; it is a website we built
        //   review          - a self-authored review of a founder-owned property,
        //                     and Google dropped rich results for self-serving reviews
        //   aggregateRating - banned outright by this site's evidence policy, and on
        //                     an affiliated asset it is the entity liability the July
        //                     audit named first
        //
        // This page is a case study, not a product listing. The work is already
        // described by the Article node and the visible copy. Do not re-add it.
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

const techStack = [
    { name: "Next.js 16", role: "Frontend + API routes", color: "bg-stone-900 text-white" },
    { name: "React 19", role: "UI runtime", color: "bg-sky-700 text-white" },
    { name: "TypeScript", role: "Type safety", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS 3", role: "Styling", color: "bg-sky-700 text-white" },
    { name: "Sanity CMS", role: "25 doc types · ISR content", color: "bg-red-700 text-white" },
    { name: "Supabase", role: "DB + Auth + Storage (shared)", color: "bg-emerald-700 text-white" },
    { name: "Square", role: "Checkout · Apple/Google Pay · Cash App · Afterpay", color: "bg-stone-800 text-white" },
    { name: "FAL", role: "AI patch image generation", color: "bg-violet-600 text-white" },
    { name: "Meta Pixel + CAPI", role: "Deduped server-side tracking", color: "bg-blue-600 text-white" },
    { name: "GA4 + GTM + Google Ads", role: "Conversion measurement", color: "bg-amber-700 text-white" },
    { name: "React Hook Form + Zod", role: "Validated forms + calculator", color: "bg-pink-600 text-white" },
    { name: "ZeptoMail", role: "Transactional + abandoned-cart email", color: "bg-indigo-600 text-white" },
    { name: "Vercel", role: "Hosting + CDN + Cron", color: "bg-stone-700 text-white" },
];

const storefrontFeatures = [
    { icon: Sparkles, title: "AI Patch Generator", desc: "Branded “Panda AI” — a FAL-powered mockup generator with no signup required, a shape/style prompt pipeline, 120+ abuse-blocking rules (trademarks, logos, hate symbols), 30-day artifact TTL, and a clean handoff straight into the order flow." },
    { icon: UserRound, title: "Customer Portal", desc: "Supabase-auth accounts auto-provisioned on first paid order: dashboard, order history, tracking, and one-click re-priced reorder with loyalty pricing." },
    { icon: CreditCard, title: "Square Checkout + BNPL", desc: "Hosted Square Payment Links: card, Apple Pay, Google Pay, Cash App Pay, and Afterpay 'pay in installments.' Server-side re-pricing blocks tampering." },
    { icon: LineChart, title: "Conversion & Attribution", desc: "Meta Pixel + CAPI (deduped via shared eventID), GA4/GTM, Google Ads, Pinterest, Bing UET, and an OpenAI pixel, with fbp/fbc/gclid/UTM re-derived server-side on every order." },
    { icon: ShoppingBag, title: "Offers & Bulk Ordering", desc: "Fixed-price /offers packs with inline multi-step checkout, volume-tier bulk pricing, and a two-stage abandoned-cart recovery sequence (30 min, then 24 h with a code)." },
    { icon: Search, title: "SEO / AEO Surface", desc: "180+ indexed pages: a 63-post blog, US state & city location pages, product-category and competitor-comparison pages, partner & offers pages, and an /ai-info answer hub with topic cluster pages, all backed by llms.txt, JSON-LD, hreflang (US/UK/CA/AU), dynamic sitemap/robots, and IndexNow pinging." },
];

const storefrontNumbers = [
    { value: "180+", label: "Pages indexed" },
    { value: "63", label: "Blog posts" },
    { value: "20+", label: "Location pages" },
    { value: "9", label: "Patch categories" },
    { value: "25", label: "Sanity doc types" },
    { value: "5", label: "Ways to pay" },
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

                    <RelationshipDisclosure slug="panda-patches" />

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
                                Headless Next.js + Sanity + Supabase + Square
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            Panda Patches.<br />
                            <span className="font-serif italic text-cognac">$50K/mo. $55 in tooling.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            A 3-year-old WordPress e-commerce site with real search traffic, existing customers, and a pricing problem WordPress couldn&apos;t solve. We migrated it to a complete headless stack (Next.js + Sanity + Supabase + Square) with a real-time pricing calculator and a custom ops platform. No ranking losses were recorded in Google Search Console during the 30-day post-launch monitoring window. Revenue has scaled from $38K to about $50K/month on about $55/month in total tooling costs (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).
                        </p>

                        <div className="mb-10 rounded-2xl border border-cognac/30 bg-cognac/5 p-5 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cognac mb-2">Ownership disclosure</p>
                            <p className="text-sm leading-6 text-stone-600">
                                Panda Patches is owned and operated by PandaCodeGen co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform but holds no ownership or partnership stake in the business. Treat the figures below as owner-reported first-party records, not an independent client testimonial or a controlled study.
                            </p>
                        </div>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "$50K/mo", label: "Monthly Revenue", sub: "up from $38K · powered by $55/mo in tooling" },
                                { value: "No losses", label: "Rankings, monitored period", sub: "Search Console, 30 days post-launch" },
                                { value: "7 → 1", label: "Tools Replaced", sub: "CRM · ops · store · tracking" },
                                { value: "3 yr", label: "Legacy Site Migrated", sub: "full content + SEO equity" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-600 leading-snug">{m.sub}</div>
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

                    {/* TRUSTED BY — real customers, real volume */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Real Customers, Real Volume</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">
                            Not a portfolio piece. A business that has shipped <span className="font-serif italic text-cognac">1,000,000+ patches.</span>
                        </h2>
                        <p className="text-stone-600 mb-8 max-w-2xl" data-speakable="true">
                            The platform we built runs a real, high-volume manufacturing business that has delivered custom patches to teams at some of the world&apos;s biggest brands.
                        </p>

                        {/* Brand names */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-8">
                            {["Google", "Microsoft", "Coca-Cola", "Nissan", "Wise"].map((b) => (
                                <span key={b} className="text-lg md:text-2xl font-bold text-stone-500 tracking-tight">{b}</span>
                            ))}
                        </div>

                        {/* Flagship + reputation */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                <div className="flex items-center gap-2 mb-3">
                                    <Trophy className="w-5 h-5 text-cognac" />
                                    <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">Flagship Activation</span>
                                </div>
                                <p className="text-charcoal font-bold mb-2">16,000 patches for Wise&apos;s Nasdaq Times Square activation</p>
                                <p className="text-stone-500 text-sm leading-relaxed mb-3">
                                    Designed, approved, and delivered in under two weeks to hit a Nasdaq listing date that could not move, ordered, produced, and tracked through the platform.
                                </p>
                                <a href="https://www.pandapatches.com/case-studies/wise-nasdaq-times-square-activation" target="_blank" rel="noopener" className="text-sm font-bold text-cognac hover:underline">
                                    Read the Wise case study →
                                </a>
                            </div>
                            <div className="p-6 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                <div className="flex items-center gap-2 mb-3">
                                    <Star className="w-5 h-5 text-cognac" />
                                    <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">Reputation</span>
                                </div>
                                <p className="text-charcoal font-bold mb-2">Rated 4.8/5 by 72+ customers on Trustpilot</p>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    1,000,000+ patches delivered, with 5-piece minimums, mockups in 12 to 24 hours, and a money-back guarantee, all transacted through the custom storefront.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* BY THE NUMBERS — current storefront scope */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">By the Numbers</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">The storefront today, in production.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl" data-speakable="true">
                            What started as a WordPress migration is now a deep custom storefront on Next.js 16 + React 19, with an AI generator, a customer portal, and a full conversion-tracking stack. The staff side, order operations, production, and reporting, runs in a separate connected CRM that shares the same Supabase backend.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {storefrontNumbers.map((n) => (
                                <div key={n.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs text-center">
                                    <div className="text-3xl font-black text-cognac mb-1">{n.value}</div>
                                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wider leading-snug">{n.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

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
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    No Calculator. Every Sale Was a Waiting Game.
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Custom patches have complex pricing. The final price depends on patch type (9 options), size, quantity, backing, and border. That&apos;s thousands of combinations. WordPress had no way to calculate this live. So every customer filled out a contact form and waited 24+ hours for someone to manually work out a price and email it back. Most of them didn&apos;t wait — they went to a competitor who showed them the price instantly.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    7 Disconnected Tools
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    The business ran on: WordPress for the store, a separate CRM, Google Sheets for order tracking, a spreadsheet for attendance, and WhatsApp for team updates. 7 team members touching 5 different tools with zero real-time sync. Every status update was a manual message.
                                </p>
                            </div>
                        </div>

                        {/* Replaced tools table */}
                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[1fr_auto_1fr] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-600 uppercase tracking-widest">
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
                                        <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">{d.label}</span>
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

                    {/* 2026 STOREFRONT CAPABILITIES */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, 2026 Storefront</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Far past a migration. A conversion machine.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            The storefront kept growing after launch. Today it generates and converts demand end-to-end: an AI mockup generator pulls people in, Square checkout with installment options closes the sale, a customer portal handles self-serve reorders, and a server-side tracking stack measures every step without slowing the page down.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {storefrontFeatures.map((f) => (
                                <div key={f.title} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <f.icon className="w-5 h-5 text-cognac mb-3" />
                                    <h3 className="font-bold text-charcoal mb-2">{f.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* THE OPS PLATFORM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Operations</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">One backend. The whole business runs on it.</h2>
                        <p className="text-stone-600 mb-6 max-w-2xl">
                            Beyond the storefront, we built the staff side too: a separate Supabase-backed CRM that replaced the old CRM, Google Sheets, attendance tracker, and WhatsApp update chains. It shares the same backend as this storefront, so leads, quotes, orders, and payments flow straight in. 7 team members, one source of truth, every change logged with a timestamp and author.
                        </p>
                        <Link href="/work/enterprise-ops" className="inline-flex items-center gap-2 mb-8 text-sm font-bold text-cognac hover:underline">
                            Read the full CRM case study →
                        </Link>

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
                            Started free on Vercel. Scaled to $20/mo on Vercel Pro once the store hit $38K/mo in revenue; it has since scaled to about $50K/mo. Sanity and Cloudflare still run on free tiers. Total tooling: about $55/mo (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator).
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((t) => (
                                <div key={t.name} className={`px-4 py-2 rounded-xl ${t.color}`}>
                                    <div className="text-sm font-bold">{t.name}</div>
                                    <div className="text-xs">{t.role}</div>
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
                                { before: "3 years of WordPress SEO equity at risk", after: "No ranking losses recorded in Search Console across the 30-day post-launch window." },
                                { before: "Customers waited 24+ hours for a manual quote", after: "Customers see the price instantly. Self-serve checkout." },
                                { before: "$200+/mo across 3 separate tools + hosting", after: "About $55/mo total (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). CRM, ops, store, and hosting." },
                                { before: "7 disconnected tools, constant WhatsApp updates", after: "1 platform. All 7 team members on the same real-time data." },
                                { before: "WordPress pricing ceiling blocked growth", after: "Scaled from $38K to about $50K/mo revenue. Pricing engine scales to any complexity." },
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
                        <p className="text-stone-500 mb-8 max-w-2xl">This is a founder-affiliated project, not an independent client engagement. Panda Patches is owned and operated by PandaCodeGen co-founder Imran Raza Ladhani. PandaCodeGen built and maintains its technical platform but holds no ownership or partnership stake in the business. We built the technical platform and the business runs on it. These are first-party operating figures reported by the owner, not projections and not independent client proof.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "💰", label: "Monthly Revenue", value: "$50K/mo", detail: "Scaled from $38K to about $50K/mo. A patch business running on custom Next.js + a bespoke ops platform. No Shopify cut. No app fees. No platform holding the business hostage." },
                                { icon: "🔧", label: "Tools Replaced", value: "7 to 1", detail: "WordPress and WooCommerce, a separate CRM, Google Sheets for order tracking, an attendance tracker, and WhatsApp for team comms, all replaced by one custom platform built exactly for how this business actually operates." },
                                { icon: "📈", label: "Cost vs Revenue", value: "$55/mo", detail: "The entire tech stack — storefront, ops dashboard, email, hosting, AI patch generator — costs about $55 a month to run (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). The revenue it processes has scaled from $38,000 to about $50,000." },
                            ].map((item) => (
                                <div key={item.label} className="bg-white border border-stone-300 rounded-2xl p-6">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">{item.label}</div>
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
                                "Square checkout: card, Apple Pay, Google Pay, Cash App Pay, and Afterpay BNPL (server-side re-pricing)",
                                "AI patch generator (FAL) with prompt pipeline, 120+ abuse rules, and 30-day artifact cleanup",
                                "Customer portal: Supabase auth, order history, tracking, one-click re-priced reorder",
                                "Server-side conversion stack: Meta CAPI + GA4/GTM + Google Ads + Pinterest + Bing + OpenAI pixel",
                                "Two-stage abandoned-cart recovery (email at 30 min, then 24 h with a discount code)",
                                "~30 SEO/AEO landing pages + /ai-info answer hub with cluster pages, partner & offers pages, llms.txt, hreflang, IndexNow",
                                "Sanity CMS (25 doc types), content editors manage everything without code",
                                "63-post blog library (dynamic, SEO-optimized) feeding the topical cluster",
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
                        <h2 className="text-2xl font-bold text-charcoal mb-4">The method behind this, written up</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The reasoning behind each decision in this build is documented in the guides, if you want the method rather than the result:</p>
                        <ul className="space-y-2 text-stone-700">
                            <li>
                                <Link href="/blog/nextjs-sanity-stack" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Next.js and Sanity: fit, cost and tradeoffs</Link>{" "}— the CMS pairing this storefront runs on, including where it is the wrong choice.
                            </li>
                            <li>
                                <Link href="/blog/will-migrating-hurt-my-seo" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Will migrating hurt my SEO?</Link>{" "}— what actually causes ranking loss in a move, and what preserved the equity here.
                            </li>
                            <li>
                                <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">WordPress versus custom code over three years</Link>{" "}— the cost model behind replacing a platform that could not quote a price.
                            </li>
                            <li>
                                <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Build versus buy for business software</Link>{" "}— the decision that produced the operations layer rather than another subscription.
                            </li>
                        </ul>
                    </section>

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

                    <FAQAccordion faqs={pageFaqs} />

                </div>
            </div>
            <Footer />
        </main>
    );
}
