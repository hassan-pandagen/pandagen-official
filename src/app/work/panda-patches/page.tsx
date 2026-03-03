import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Zap, DollarSign, Server, ShoppingBag, BarChart3, Lock, Users, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
    title: "Panda Patches Case Study — $38K/mo E-Commerce on $25/mo Tooling | PandaGen",
    description: "How we replaced WordPress + 3 paid tools + spreadsheets with a custom Next.js storefront and Supabase ops platform. Real-time pricing calculator across 9 patch types. $38K+/mo on under $25/mo.",
    openGraph: {
        title: "Panda Patches Case Study — $38K/mo E-Commerce on $25/mo Tooling",
        description: "Real-time pricing calculator. Custom ops portal. 7 tools replaced by 1. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-patches",
        images: [{ url: "https://www.pandacodegen.com/work/panda-patches.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "/work/panda-patches" },
};

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-patches#article",
            "headline": "Panda Patches: $38K/mo E-Commerce Built on $25/mo Tooling",
            "description": "How we replaced WordPress + 3 paid tools + spreadsheets with a custom Next.js storefront and Supabase ops platform. Real-time pricing calculator across 9 patch types.",
            "image": "https://www.pandacodegen.com/work/panda-patches.png",
            "datePublished": "2025-10-01",
            "dateModified": "2026-02-01",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "url": "https://www.pandacodegen.com/about/hassan"
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaGen"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.pandacodegen.com/work/panda-patches"
            },
            "keywords": [
                "custom e-commerce development",
                "real-time pricing calculator",
                "shopify alternative",
                "next.js e-commerce case study",
                "custom ops platform",
                "supabase crm",
                "replace shopify",
                "custom storefront next.js"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#webpage",
            "url": "https://www.pandacodegen.com/work/panda-patches",
            "name": "Panda Patches Case Study | PandaGen",
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
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/panda-patches#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can you replace Shopify with a custom-coded e-commerce store?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We replaced WordPress + WooCommerce entirely for Panda Patches with a custom Next.js storefront. The new store generates $38K+/month with zero platform fees — compared to Shopify's $79–$299/month plus transaction fees. You own 100% of the code." }
                },
                {
                    "@type": "Question",
                    "name": "How does a real-time pricing calculator work without API calls?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We built the pricing engine in TypeScript and run all calculations client-side. The full pricing matrix — 9 patch types, custom dimensions, 8+ quantity tiers, 3 backing options, 2 border types — is pre-compiled into a JavaScript function. Every price update takes under 5ms with zero server round-trips." }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to build a custom e-commerce platform like this?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom e-commerce platform with a real-time pricing engine, CMS, payment integrations (Stripe, PayPal, Apple Pay, Klarna, Afterpay), and an ops portal starts at $15,000–$30,000 depending on complexity. Panda Patches runs on under $25/month in total tooling costs after launch." }
                },
                {
                    "@type": "Question",
                    "name": "What tools did the custom platform replace?",
                    "acceptedAnswer": { "@type": "Answer", "text": "One platform replaced: WordPress + WooCommerce ($80/mo), a separate CRM ($50/mo), Google Sheets for order tracking, a manual attendance tracker ($30/mo), and WhatsApp for team communication. Total savings: $200+/month plus 10+ hours per week of manual work." }
                },
                {
                    "@type": "Question",
                    "name": "How long did it take to build the Panda Patches platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The full platform — custom storefront with real-time pricing, Sanity CMS, 6 payment gateways, Supabase ops portal, and sales agent dashboards — was built and launched within 8 weeks. The Lighthouse score is 90+ across all Core Web Vitals." }
                }
            ]
        }
    ]
};

const techStack = [
    { name: "Next.js 14+", role: "Frontend & API routes", color: "bg-stone-900 text-white" },
    { name: "TypeScript", role: "Type safety", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS", role: "Styling", color: "bg-sky-500 text-white" },
    { name: "Sanity CMS", role: "Content management", color: "bg-red-500 text-white" },
    { name: "Supabase", role: "Ops database + auth", color: "bg-emerald-600 text-white" },
    { name: "Upstash Redis", role: "Rate limiting + cache", color: "bg-red-600 text-white" },
    { name: "Stripe", role: "Credit card payments", color: "bg-violet-600 text-white" },
    { name: "PayPal", role: "Alternative checkout", color: "bg-blue-700 text-white" },
    { name: "Klarna", role: "Buy now, pay later", color: "bg-pink-500 text-white" },
    { name: "Afterpay", role: "Installment payments", color: "bg-teal-600 text-white" },
    { name: "Apple Pay", role: "1-tap mobile checkout", color: "bg-stone-800 text-white" },
    { name: "Vercel", role: "Hosting + CDN", color: "bg-stone-700 text-white" },
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
    { tool: "WordPress + WooCommerce", cost: "$80/mo", problem: "Couldn't handle the pricing matrix — manual quotes only" },
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

            <div className="pt-40 pb-24 px-6">
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
                                In-House Brand
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-xs font-bold uppercase tracking-widest">
                                E-Commerce + Operations Platform
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            Panda Patches.<br />
                            <span className="font-serif italic text-stone-400">$38K/mo. $25 in tooling.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            WordPress couldn&apos;t handle a pricing matrix with thousands of combinations. Customers waited 24+ hours for a quote. We rebuilt the entire business: custom storefront with real-time pricing, plus a complete ops platform replacing CRM, spreadsheets, and attendance tracking.
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "$38K+", label: "Monthly Revenue", sub: "powered by $25/mo in tooling" },
                                { value: "$0/mo", label: "Platform Fees", sub: "was $200+ across 3 tools" },
                                { value: "7 → 1", label: "Tools Replaced", sub: "CRM · ops · store · tracking" },
                                { value: "13+", label: "Product Types", sub: "each with dynamic pricing" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-400 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                                    The Pricing Ceiling
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Custom patches aren&apos;t a simple product. Every order depends on: patch type (9 options), size dimensions, quantity tier, backing choice, and border type. That&apos;s thousands of price combinations. WordPress + WooCommerce had no way to calculate this dynamically. Every customer submitted a form and waited 24+ hours for a manual quote.
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
                        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
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
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution — Storefront</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Real-time pricing. No waiting, no quotes.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            We rebuilt the entire customer-facing side in Next.js with a real-time pricing engine. Customers select their patch type, enter dimensions, pick quantity and options, and the price updates instantly. No forms. No waiting. The quote is the checkout.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {pricingDimensions.map((d) => (
                                <div key={d.label} className="p-5 bg-white border border-stone-200 rounded-xl shadow-sm">
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
                                <Zap className="w-6 h-6 text-cognac flex-shrink-0 mt-0.5" />
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
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution — Operations</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">One platform. 7 tools gone.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            We built a private Supabase-backed ops portal that replaced the CRM, Google Sheets, attendance tracker, and WhatsApp update chains. 7 team members. One platform. Every change logged with a timestamp and author.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {opsFeatures.map((f) => (
                                <div key={f.title} className="p-5 bg-white border border-stone-200 rounded-xl shadow-sm">
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
                            Total monthly cost including all services, databases, and AI tools: under $25. Hosted on Vercel&apos;s free tier.
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
                                { before: "Customers waited 24+ hours for a manual quote", after: "Customers see the price instantly. Self-serve checkout." },
                                { before: "$200+/mo across 3 separate tools + hosting", after: "Under $25/mo total. CRM, ops, store, and hosting." },
                                { before: "7 disconnected tools, constant WhatsApp updates", after: "1 platform. All 7 team members on the same real-time data." },
                                { before: "WordPress pricing ceiling blocked growth", after: "$38K+/mo revenue. Pricing engine scales to any complexity." },
                                { before: "Attendance tracked via WhatsApp messages", after: "Timestamped clock in/out with payroll export." },
                                { before: "No visibility into sales agent performance", after: "Per-agent revenue, conversion rate, and response time tracked live." },
                            ].map((r, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-stone-400 text-sm line-through mb-1">{r.before}</p>
                                        <p className="text-white text-sm font-medium">{r.after}</p>
                                    </div>
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
                                "Stripe, PayPal, Cash App, Apple Pay, Klarna, Afterpay integrations",
                                "Sanity CMS — content editors manage everything without code",
                                "Blog system with 50+ post capacity (dynamic + SEO-optimized)",
                                "Order confirmation emails + customer order history",
                                "File upload for custom design mockups",
                                "Supabase ops portal — order pipeline with real-time status",
                                "Sales agent dashboards — 7 individual performance views",
                                "Employee clock in/out with role-based access",
                                "Full audit log — every change timestamped and attributed",
                                "100% mobile responsive with touch-optimized UI",
                                "Lighthouse 90+ on all core web vitals",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
