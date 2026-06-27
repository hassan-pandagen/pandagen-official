import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, BarChart3, Lock, Users, Clock, Shield, Database, Zap, AlertTriangle, TrendingUp, FileText, PieChart, Plug, Receipt, LineChart } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
    title: { absolute: "Enterprise Operations Platform Case Study, Custom Business Dashboard | PandaCodeGen" },
    description: "How we replaced spreadsheets, WhatsApp chains, and 3 SaaS tools with a single custom ops platform. Real-time order pipeline, RBAC, automated attendance, profit tracking. Rated 9.0/10 by senior developer review.",
    openGraph: {
        title: "Enterprise Operations Platform Case Study, Custom Business Dashboard",
        description: "Real-time order pipeline. Role-based access for 3 teams. Automated attendance (PKT timezone). 95% process automation. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/enterprise-ops",
        images: [{ url: "https://www.pandacodegen.com/work/panda-operations.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Operations Platform Case Study, Custom Business Dashboard",
        description: "Real-time order pipeline. Role-based access for 3 teams. Automated attendance (PKT timezone). 95% process automation. Full case study.",
    },
    alternates: { canonical: "/work/enterprise-ops" },
};

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#article",
            "headline": "Enterprise Operations Platform: From Spreadsheets to Real-Time Business Intelligence",
            "description": "How we replaced spreadsheets, WhatsApp updates, and 3 separate SaaS tools with a single full-stack business intelligence platform. Real-time order tracking, RBAC, automated attendance, and profit analytics.",
            "image": "https://www.pandacodegen.com/work/panda-operations.png",
            "datePublished": "2025-11-01T00:00:00Z",
            "dateModified": "2026-06-26T00:00:00Z",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "url": "https://www.pandacodegen.com/about/hassan"
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.pandacodegen.com/work/enterprise-ops"
            },
            "keywords": [
                "custom business dashboard",
                "ops platform case study",
                "supabase crm",
                "role-based access control",
                "real-time order tracking",
                "custom erp alternative",
                "employee attendance system",
                "business intelligence platform",
                "replace spreadsheets custom software"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#webpage",
            "url": "https://www.pandacodegen.com/work/enterprise-ops",
            "name": "Enterprise Operations Platform Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Enterprise Operations", "item": "https://www.pandacodegen.com/work/enterprise-ops" }
            ]
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "description": "PandaCodeGen is a custom software studio that builds and operates its own products. This operations platform is PandaCodeGen's own custom CRM and business-intelligence system for the Panda Patches business, replacing spreadsheets, a disconnected CRM, and WhatsApp updates with a single Supabase-backed application.",
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
                    "name": "Imran Raza",
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
                "Custom ERP and operations platforms",
                "Role-based access control (RBAC)",
                "Supabase",
                "PostgreSQL Row-Level Security (RLS)",
                "Real-time order pipelines",
                "Business intelligence and financial reporting"
            ],
            "sameAs": [
                "https://twitter.com/pandacodegen",
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://github.com/hassan-pandagen",
                "https://clutch.co/profile/panda-code-gen",
                "https://www.trustpilot.com/review/pandacodegen.com",
                "https://www.google.com/maps?cid=16271659886069582158"
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a custom business operations platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom business operations platform is a single web application that replaces multiple disconnected SaaS tools, like CRMs, spreadsheets, attendance trackers, and reporting tools. This is PandaCodeGen's own custom ops platform for the Panda Patches business: we replaced multiple separate tools with one Supabase-backed platform featuring real-time order tracking, 8+ financial reporting modules, RBAC, payments via Square and Stripe, server-side Meta CAPI ad tracking, employee attendance, and automated profit calculations." }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to replace Google Sheets with a custom business dashboard?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom business dashboard replacing spreadsheets, a CRM, and manual reporting typically starts at $10,000 to $25,000 depending on the number of roles, data tables, and automation requirements. This platform replaced tools costing $80/month plus 20+ hours of manual work per month." }
                },
                {
                    "@type": "Question",
                    "name": "What is role-based access control (RBAC) and why does a small business need it?",
                    "acceptedAnswer": { "@type": "Answer", "text": "RBAC means each user only sees the data their role requires. In this platform: ADMIN sees full financials and all agents; SALES sees their own pipeline only; PRODUCTION sees pending orders with no financial data. We enforce this at two layers, application logic AND Supabase Row-Level Security policies at the database level, so even direct API access is blocked." }
                },
                {
                    "@type": "Question",
                    "name": "How long did it take to build the Enterprise Operations platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The full platform, a Supabase schema with Row-Level Security, a 13-status order pipeline, 8+ reporting modules, RBAC with RLS policies, payments via Square and Stripe, attendance with PKT timezone, automated profit calculations, and 20 Supabase Edge Functions, was built in 10 weeks. It received a 9.0/10 rating from independent senior developer review: 9.4/10 code quality, 9.3/10 architecture, 9.0/10 UX." }
                },
                {
                    "@type": "Question",
                    "name": "Can a custom dashboard work offline?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We implemented a Service Worker that caches the critical UI and data. Team members in Pakistan with intermittent internet connectivity can still access order data and make updates, which sync automatically when the connection is restored." }
                }
            ]
        }
    ]
};

const techStack = [
    { name: "React 18", role: "Frontend UI", color: "bg-sky-500 text-white" },
    { name: "TypeScript 5", role: "100% type safety (strict)", color: "bg-blue-600 text-white" },
    { name: "Vite 5", role: "Build + code-split HMR", color: "bg-violet-500 text-white" },
    { name: "Tailwind CSS 3", role: "Design system + dark mode", color: "bg-sky-400 text-white" },
    { name: "Supabase", role: "Postgres + Auth + RLS", color: "bg-emerald-600 text-white" },
    { name: "TanStack Query 5", role: "Server state + caching", color: "bg-red-500 text-white" },
    { name: "React Router 6", role: "Protected + nested routes", color: "bg-rose-500 text-white" },
    { name: "React Hook Form + Zod", role: "Validated forms", color: "bg-pink-600 text-white" },
    { name: "Recharts", role: "Analytics charts", color: "bg-indigo-500 text-white" },
    { name: "@react-pdf/renderer", role: "Invoices / PDFs", color: "bg-stone-600 text-white" },
    { name: "Framer Motion", role: "UI animations", color: "bg-pink-500 text-white" },
    { name: "Row-Level Security", role: "Per-table DB policies", color: "bg-emerald-700 text-white" },
    { name: "Edge Functions (Deno)", role: "20 serverless functions", color: "bg-emerald-800 text-white" },
    { name: "Square + Stripe", role: "Checkout + payouts", color: "bg-blue-800 text-white" },
    { name: "Meta CAPI", role: "Server-side ad tracking", color: "bg-blue-500 text-white" },
    { name: "Sentry", role: "APM + error tracking", color: "bg-violet-700 text-white" },
];

const orderStages = [
    { stage: "NEW_ORDER", color: "bg-blue-100 text-blue-700 border-blue-200", desc: "Order received from the marketing-site checkout or created by an agent" },
    { stage: "IN_PRODUCTION", color: "bg-amber-100 text-amber-700 border-amber-200", desc: "Assigned to production team, materials allocated" },
    { stage: "QUALITY_ASSURANCE", color: "bg-violet-100 text-violet-700 border-violet-200", desc: "Production complete, QA check before dispatch" },
    { stage: "SHIPPED", color: "bg-sky-100 text-sky-700 border-sky-200", desc: "Tracking number generated, customer notified" },
    { stage: "DELIVERED", color: "bg-emerald-100 text-emerald-700 border-emerald-200", desc: "Confirmed delivered, payment reconciled" },
];

// Exception / branch statuses outside the linear happy path (13 statuses total).
const exceptionStates = [
    { stage: "REMAKE", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { stage: "CANCELLED", color: "bg-stone-200 text-stone-600 border-stone-300" },
    { stage: "REFUNDED", color: "bg-rose-100 text-rose-700 border-rose-200" },
    { stage: "FEEDBACK", color: "bg-teal-100 text-teal-700 border-teal-200" },
];

// Reporting & analytics modules — the platform's core strength (date-range filtered, CSV export).
const reportingModules = [
    { icon: TrendingUp, name: "Sales Report", desc: "Gross vs. net revenue, AOV, daily trend, per-agent performance & commission, repeat-customer metrics." },
    { icon: PieChart, name: "Profit & Loss", desc: "Revenue vs. cost vs. net profit, cost-breakdown donut, and loss alerts for orders sold below cost." },
    { icon: FileText, name: "Income Statement", desc: "Industry-standard P&L: gross → net revenue → COGS → gross profit → opex → net profit, with margins." },
    { icon: Receipt, name: "Cancellation & Refund", desc: "Lost revenue and reason-category breakdown for cancelled and refunded orders." },
    { icon: BarChart3, name: "Product Mix", desc: "Revenue, cost, and margin by patch type and by quantity band (1–50, 51–100, 101–200, 200+)." },
    { icon: LineChart, name: "Lead Source Distribution", desc: "Lead volume by channel — Search, Social, Paid Ads, AI/LLM, Referral — pulled from quotes." },
    { icon: Zap, name: "Funnel & Attribution", desc: "Quote→order conversion, quote-flow bypass detection, and Meta CAPI data-quality breakdown." },
    { icon: Users, name: "Customer & Form Feedback", desc: "1–5★ satisfaction from order notes and ease-of-use ratings from website quote forms." },
];

// Production integrations wired into the platform.
const integrations = [
    { name: "Supabase", role: "Postgres · Auth · Storage · Realtime · 20 Edge Functions" },
    { name: "Meta CAPI", role: "Server-side purchase/lead events, reversal on refund" },
    { name: "Square", role: "Public payment links (/pay/:token) + checkout" },
    { name: "Stripe", role: "Balance & payout webhooks (idempotent)" },
    { name: "ZeptoMail", role: "Transactional email for every order milestone" },
    { name: "Sentry", role: "APM + error tracking via first-party proxy" },
    { name: "Vercel", role: "Frontend hosting, SPA routing, asset caching" },
];

// Verified scope from the production codebase.
const byNumbers = [
    { value: "23", label: "Staff routes" },
    { value: "8+", label: "Reporting modules" },
    { value: "20", label: "Edge Functions" },
    { value: "13", label: "Order statuses" },
    { value: "3 · 11", label: "Roles · permissions" },
    { value: "10", label: "DB migrations" },
];

const roles = [
    {
        role: "ADMIN",
        color: "bg-red-50 border-red-200",
        badge: "bg-red-500 text-white",
        access: [
            "Full order pipeline, all stages, all agents",
            "Profit calculations and margin analytics",
            "All attendance records + payroll export",
            "User management + role assignments",
            "Monthly cost tracking and reporting",
        ]
    },
    {
        role: "SALES",
        color: "bg-blue-50 border-blue-200",
        badge: "bg-blue-600 text-white",
        access: [
            "Own pipeline only, no cross-agent visibility",
            "Create and update quotes + orders",
            "Customer communication thread",
            "Own performance metrics and targets",
            "Clock in/out (own records only)",
        ]
    },
    {
        role: "PRODUCTION",
        color: "bg-amber-50 border-amber-200",
        badge: "bg-amber-600 text-white",
        access: [
            "Pending production orders (IN_PRODUCTION)",
            "Mark orders as READY_TO_SHIP",
            "Production notes and file access",
            "No financial data, no sales data",
            "Own attendance records",
        ]
    },
];

const platformFeatures = [
    { icon: BarChart3, title: "Email Automation", desc: "Order confirmation, follow-up, and overdue payment reminders fire automatically, no manual sending." },
    { icon: Users, title: "Per-Agent Sales Reports", desc: "Each sales rep logs in and sees only their pipeline, targets, and conversion rate. Managers see the full picture." },
    { icon: TrendingUp, title: "Pending Amounts Dashboard", desc: "Every unpaid invoice, outstanding balance, and overdue account visible at a glance. No more chasing people for what&apos;s owed." },
    { icon: Clock, title: "Order History & Repeat Customer Flags", desc: "See who&apos;s bought before, how often, and what they spent without digging through files." },
    { icon: Database, title: "Avg Order Value by Category", desc: "Instantly see which product lines are driving revenue and which are just taking up space." },
    { icon: Lock, title: "Profit & Loss by Category", desc: "One click to see which categories are making money and which are bleeding it, no Excel required." },
    { icon: Shield, title: "Single Dashboard", desc: "What used to live across 7 spreadsheets, 3 SaaS tools, and a WhatsApp group is now one screen. One login. One source of truth." },
    { icon: AlertTriangle, title: "APM + Error Tracking", desc: "Sentry integration for real-time error monitoring and application performance metrics. Any production issue is caught before the team notices." },
    { icon: Zap, title: "Offline-First", desc: "Service Worker caches critical UI and data. Team in Pakistan can access order data during intermittent connectivity. Changes sync on reconnect." },
];

const replacedTools = [
    { tool: "Google Sheets (order tracking)", cost: "Free but 8 hrs/wk", problem: "No real-time sync. 7 team members editing simultaneously caused version conflicts" },
    { tool: "Separate CRM", cost: "$50/mo", problem: "No connection to orders or production. Duplicate data entry for every customer" },
    { tool: "WhatsApp order updates", cost: "Free but chaotic", problem: "Status updates buried in chat threads. No searchability, no accountability" },
    { tool: "Manual attendance tracking", cost: "$30/mo", problem: "Clock in/out via WhatsApp messages, no overtime tracking, no payroll export" },
    { tool: "Spreadsheet reporting", cost: "20 hrs/mo", problem: "Monthly performance reports compiled manually from multiple sheets" },
];

export default function EnterpriseOpsCaseStudy() {
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
                        { label: "Enterprise Operations", href: "/work/enterprise-ops" },
                    ]} />

                    {/* HERO */}
                    <div className="mb-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest">
                                Internal Tool
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                Custom Business Dashboard
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold uppercase tracking-widest">
                                9.0/10 Dev Rating
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            Enterprise Ops.<br />
                            <span className="font-serif italic text-cognac">Spreadsheets to real-time.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            This is our own custom CRM and ops platform for the Panda Patches business, which once ran entirely on Google Sheets, a disconnected CRM, and WhatsApp status updates. We replaced all of it, order pipeline, sales dashboards, attendance tracking, profit analytics, and role-based access, with a single custom platform built for exactly how the business operates.
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "95%", label: "Process Automation", sub: "was near-zero manual processes" },
                                { value: "Live", label: "Reporting", sub: "was daily manual CSV exports" },
                                { value: "10×", label: "Efficiency Gain", sub: "team of 7, one platform" },
                                { value: "9.0/10", label: "Developer Rating", sub: "Code 9.4 · Arch 9.3 · UX 9.0/10" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-400 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BY THE NUMBERS — verified production scope */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">By the Numbers</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">The platform today, in production.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl" data-speakable="true">
                            This is not a prototype. It is the live operating system the business runs on every day, and it keeps growing. The customer-facing portal has since moved to the marketing website; this is the internal staff CRM plus its shared serverless backend.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {byNumbers.map((n) => (
                                <div key={n.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs text-center">
                                    <div className="text-3xl font-black text-cognac mb-1">{n.value}</div>
                                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wider leading-snug">{n.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* THE PROBLEM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">The Problem</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">7 people. 5 tools. Zero real-time visibility.</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    Spreadsheet Hell
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Order tracking lived in Google Sheets. 7 team members editing simultaneously caused version conflicts, overwritten data, and no audit trail. When an order status changed, someone had to message the team on WhatsApp, and hope they saw it.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    No Single Source of Truth
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Customer data lived in a CRM that had no connection to orders. Attendance was tracked via WhatsApp messages. Monthly performance reports took 20 hours to compile manually from multiple spreadsheets. Every number was a guess.
                                </p>
                            </div>
                        </div>

                        {/* Replaced tools table */}
                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[2fr_1fr_2fr] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-400 uppercase tracking-widest">
                                <div>Tool Being Replaced</div>
                                <div className="text-center">Cost</div>
                                <div>Problem</div>
                            </div>
                            {replacedTools.map((t, i) => (
                                <div key={i} className="grid grid-cols-[2fr_1fr_2fr] px-5 py-4 border-b border-stone-100 last:border-0 text-sm items-start">
                                    <div className="font-medium text-charcoal">{t.tool}</div>
                                    <div className="text-center font-bold text-red-500">{t.cost}</div>
                                    <div className="text-stone-500">{t.problem}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ORDER PIPELINE */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Order Pipeline</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">13-status order lifecycle. Fully automated.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Every order moves through a defined lifecycle, from the linear happy path below to branch states like remake, cancellation, and refund. Each status transition is logged with the responsible agent and timestamp. No order can be &quot;lost&quot; in a chat thread, and status changes trigger automated email to the right people.
                        </p>

                        <div className="space-y-3 mb-8">
                            {orderStages.map((s, i) => (
                                <div key={s.stage} className="flex items-start gap-4">
                                    <div className="flex items-center gap-3 shrink-0">
                                        <div className="w-7 h-7 rounded-full bg-stone-100 text-stone-400 text-xs font-black flex items-center justify-center">{i + 1}</div>
                                        {i < orderStages.length - 1 && (
                                            <div className="hidden" />
                                        )}
                                    </div>
                                    <div className={`flex-1 flex items-center gap-4 p-4 rounded-xl border ${s.color}`}>
                                        <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${s.color} border whitespace-nowrap`}>{s.stage}</span>
                                        <p className="text-sm text-stone-600">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Branch / exception statuses — the other 4 of 13 */}
                        <div className="mb-8">
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Plus branch statuses (13 total)</p>
                            <div className="flex flex-wrap gap-2">
                                {exceptionStates.map((s) => (
                                    <span key={s.stage} className={`px-3 py-1.5 rounded-lg text-xs font-black tracking-wider border ${s.color}`}>{s.stage}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <Database className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-2">Every transition is immutable</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        The <code className="text-cognac">order_history</code> table logs every field change: old value, new value, the agent who made the change, and an exact timestamp. Full audit trail. Any order dispute can be traced back to who changed what and when.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* RBAC */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Access Control</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Three roles. Zero data leakage.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            RBAC enforced at two layers: application logic and Supabase Row-Level Security policies at the database level. Even if someone bypasses the UI, they cannot read data they don&apos;t own. Permissions stored as a granular JSONB column per user.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {roles.map((r) => (
                                <div key={r.role} className={`p-5 border rounded-2xl ${r.color}`}>
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-black tracking-widest mb-4 ${r.badge}`}>{r.role}</span>
                                    <ul className="space-y-2">
                                        {r.access.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                                                <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ATTENDANCE */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution, Attendance</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Clock in/out. Auto-everything.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Replaced WhatsApp messages for attendance with a timestamped system. All times calculated in Pakistan Standard Time (PKT, UTC+5). Business day resets at 5AM. Auto-clockout triggers after 10 hours to prevent inflated records.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {[
                                { label: "Timezone", value: "PKT (UTC+5)", desc: "Pakistan Standard Time, no conversion errors" },
                                { label: "Day Cutoff", value: "5AM PKT", desc: "Each business day calculated from 5AM to 5AM" },
                                { label: "Auto-Clockout", value: "10 hrs", desc: "Automatic clockout prevents accidentally open sessions" },
                                { label: "Overtime Calc", value: "Auto", desc: "Hours over target auto-flagged in attendance_summary" },
                                { label: "Undertime Calc", value: "Auto", desc: "Shortfall tracked per employee per month" },
                                { label: "Payroll Export", value: "CSV", desc: "Monthly attendance summary ready for payroll processing" },
                            ].map((d) => (
                                <div key={d.label} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-xl font-black text-cognac">{d.value}</span>
                                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{d.label}</span>
                                    </div>
                                    <p className="text-xs text-stone-500 leading-relaxed">{d.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-2">Profit tracked the same way</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        Every order has a <code className="text-cognac">profit</code> column that is a PostgreSQL GENERATED ALWAYS STORED column: <code className="text-cognac">order_amount - production_cost - shipping_cost - marketing_cost</code>. Updated automatically whenever any cost field changes. No spreadsheet formulas that drift.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PLATFORM FEATURES */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Platform Features</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">One platform. Everything.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Real-time analytics, payments, RBAC, and automation across 23 staff routes and 20 Supabase Edge Functions, with Row-Level Security on every table. All connected to the same Supabase backend now shared with the customer portal on the marketing site.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {platformFeatures.map((f) => (
                                <div key={f.title} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <f.icon className="w-5 h-5 text-cognac mb-3" />
                                    <h3 className="font-bold text-charcoal mb-2">{f.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* REPORTING & ANALYTICS — core strength */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Reporting &amp; Analytics</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">8+ financial reports. One date-range filter.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl" data-speakable="true">
                            The reporting layer is the platform&apos;s core strength: a dedicated Reports page with date-range filtering across every analytical module, each one CSV-exportable and charted with Recharts. From gross-to-net revenue to a full income statement to Meta CAPI attribution quality, the answer is one click, not a 30-minute spreadsheet.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {reportingModules.map((m) => (
                                <div key={m.name} className="flex items-start gap-4 p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="w-10 h-10 rounded-xl bg-cognac/10 flex items-center justify-center shrink-0">
                                        <m.icon className="w-5 h-5 text-cognac" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-charcoal mb-1">{m.name}</h3>
                                        <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* INTEGRATIONS */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Integrations</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Wired into the tools the business already runs on.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Payments, ads attribution, transactional email, and monitoring all flow through the same backend, no copy-paste between systems.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {integrations.map((it) => (
                                <div key={it.name} className="flex items-start gap-3 p-5 bg-stone-50 border border-stone-200 rounded-2xl">
                                    <Plug className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-charcoal text-sm">{it.name}</h3>
                                        <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{it.role}</p>
                                    </div>
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Enterprise level. Every layer.</h2>
                        <p className="text-stone-600 mb-8">
                            100% TypeScript. Offline-first. APM monitoring. Rated 9.4/10 code quality and 9.3/10 architecture by independent senior developer review.
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
                                { before: "Order status updates via WhatsApp, buried in threads", after: "Real-time order board. Every agent sees live status. No messages needed." },
                                { before: "Monthly reports took 20 hours to compile manually", after: "Reports auto-generated. Monthly summaries run via Supabase Edge Functions." },
                                { before: "7 team members editing the same Google Sheet", after: "One platform with row-level isolation. Zero version conflicts." },
                                { before: "CRM completely disconnected from orders", after: "Customer data, order history, and communications in one view." },
                                { before: "Attendance tracked by WhatsApp messages", after: "Timestamped clock in/out. Overtime auto-calculated. Payroll export ready." },
                                { before: "Profit calculated manually from separate sheets", after: "Profit auto-computed per order as a database-generated column. Always accurate." },
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
                        <p className="text-stone-500 mb-8 max-w-2xl">Before this platform, running the business meant opening 7 spreadsheets, scrolling WhatsApp for updates, and hoping nothing fell through the cracks. Now it doesn&apos;t.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "📊", label: "Spreadsheets Replaced", value: "7 → 1", detail: "Order tracking, agent reports, attendance, payments, inventory, profit tracking, and customer records — all in one place. One login. One screen." },
                                { icon: "⏱", label: "Time Saved Weekly", value: "10+ hrs", detail: "No more manually compiling reports, chasing agents for updates, or cross-referencing files. The dashboard updates in real time." },
                                { icon: "💡", label: "Decisions Made Faster", value: "1 Click", detail: "Which category is profitable? Who are your repeat customers? What&apos;s owed? The answer used to take 30 minutes. Now it takes one click." },
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
                                "PostgreSQL schema with Row-Level Security on every table (10 migrations)",
                                "13-status order pipeline (NEW_ORDER → DELIVERED, plus REMAKE / CANCELLED / REFUNDED / FEEDBACK)",
                                "8+ financial reporting modules (Sales, P&L, Income Statement, Product Mix, Attribution), CSV export",
                                "Payments: Square checkout + public payment links (/pay/:token), Stripe payout webhooks",
                                "Server-side Meta Conversions API with refund reversal + attribution-quality scoring",
                                "Transactional email via ZeptoMail for every order milestone",
                                "Immutable order_history audit log, every change attributed",
                                "RBAC: ADMIN, SALES, PRODUCTION roles with 11 granular JSONB permissions",
                                "Sales agent dashboards, revenue, conversion rate, response time per agent",
                                "Customer quote management with email template system",
                                "Automated profit calculation: order_amount − production − shipping − marketing",
                                "Employee attendance with PKT timezone, 5AM cutoff, auto-clockout",
                                "Monthly attendance summaries with overtime/undertime tracking",
                                "Payroll export (CSV) from attendance_summary table",
                                "Performance metrics table for goal tracking",
                                "3 database views: orders_with_details, sales_agent_reports, active_attendance_sessions",
                                "20 Supabase Edge Functions (user admin, email, Meta CAPI, Square/Stripe payments, webhooks)",
                                "Sentry APM + error tracking integration",
                                "Offline-first via Service Worker, works on poor connectivity",
                                "100% TypeScript with zero implicit any",
                                "TanStack Query for optimistic updates + server state",
                                "Framer Motion animated UI, rated UX 9.0/10",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DEV RATING CALLOUT */}
                    <section className="mb-12 md:mb-20 p-5 md:p-8 bg-linear-to-br from-blue-50 to-stone-50 border border-blue-100 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-400" />
                            <span className="text-blue-500 text-sm font-bold uppercase tracking-widest">Independent Review</span>
                        </div>
                        <h2 className="text-2xl font-bold text-charcoal mb-6">Rated 9.0/10 by a senior developer.</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { category: "Code Quality", score: "9.4/10", notes: "Type safety, separation of concerns, zero implicit any" },
                                { category: "Architecture", score: "9.3/10", notes: "RLS policies, audit trail, RBAC design, DB schema" },
                                { category: "UX / Design", score: "9.0/10", notes: "Framer Motion transitions, dark/light, accessibility" },
                            ].map((r) => (
                                <div key={r.category} className="p-4 md:p-5 bg-white border border-stone-300 rounded-2xl shadow-xs text-center min-w-0">
                                    <div className="text-2xl md:text-3xl font-black text-charcoal mb-1">{r.score}</div>
                                    <div className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">{r.category}</div>
                                    <div className="text-xs text-stone-400 leading-snug">{r.notes}</div>
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
