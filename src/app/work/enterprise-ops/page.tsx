import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, BarChart3, Lock, Users, Clock, Shield, Database, Zap, AlertTriangle, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
    title: "Enterprise Operations Platform Case Study — Custom Business Dashboard | PandaGen",
    description: "How we replaced spreadsheets, WhatsApp chains, and 3 SaaS tools with a single custom ops platform. Real-time order pipeline, RBAC, automated attendance, profit tracking. Rated 10/10 by senior developer review.",
    openGraph: {
        title: "Enterprise Operations Platform Case Study — Custom Business Dashboard",
        description: "Real-time order pipeline. Role-based access for 3 teams. Automated attendance (PKT timezone). 95% process automation. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/enterprise-ops",
        images: [{ url: "https://www.pandacodegen.com/work/panda-operations.png", width: 1200, height: 630 }],
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
            "datePublished": "2025-11-01",
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
            "name": "Enterprise Operations Platform Case Study | PandaGen",
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
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a custom business operations platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom business operations platform is a single web application that replaces multiple disconnected SaaS tools — like CRMs, spreadsheets, attendance trackers, and reporting tools. For this client, we replaced 5 separate tools with one Supabase-backed platform featuring real-time order tracking, RBAC, employee attendance, and automated profit calculations." }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost to replace Google Sheets with a custom business dashboard?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A custom business dashboard replacing spreadsheets, a CRM, and manual reporting typically starts at $10,000–$25,000 depending on the number of roles, data tables, and automation requirements. This platform replaced tools costing $80/month plus 20+ hours of manual work per month." }
                },
                {
                    "@type": "Question",
                    "name": "What is role-based access control (RBAC) and why does a small business need it?",
                    "acceptedAnswer": { "@type": "Answer", "text": "RBAC means each user only sees the data their role requires. In this platform: ADMIN sees full financials and all agents; SALES sees their own pipeline only; PRODUCTION sees pending orders with no financial data. We enforce this at two layers — application logic AND Supabase Row-Level Security policies at the database level, so even direct API access is blocked." }
                },
                {
                    "@type": "Question",
                    "name": "How long did it take to build the Enterprise Operations platform?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The full platform — 14-table Supabase schema, 5-stage order pipeline, RBAC with RLS policies, sales dashboards, attendance system with PKT timezone, automated profit calculations, and Supabase Edge Functions — was built in 10 weeks. It received a 10/10 rating from independent senior developer review: 9.4/10 code quality, 9.3/10 architecture, 10/10 UX." }
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
    { name: "TypeScript", role: "100% type safety", color: "bg-blue-600 text-white" },
    { name: "Vite", role: "Build tooling", color: "bg-violet-500 text-white" },
    { name: "Tailwind CSS", role: "Styling", color: "bg-sky-400 text-white" },
    { name: "Supabase", role: "Database + Auth + RLS", color: "bg-emerald-600 text-white" },
    { name: "TanStack Query", role: "Server state + caching", color: "bg-red-500 text-white" },
    { name: "Framer Motion", role: "UI animations", color: "bg-pink-500 text-white" },
    { name: "Sentry", role: "APM + error tracking", color: "bg-violet-700 text-white" },
    { name: "Row-Level Security", role: "Supabase RLS policies", color: "bg-emerald-700 text-white" },
    { name: "Service Worker", role: "Offline-first capability", color: "bg-stone-700 text-white" },
    { name: "PostgreSQL", role: "Database (via Supabase)", color: "bg-blue-700 text-white" },
    { name: "Edge Functions", role: "Server logic", color: "bg-emerald-800 text-white" },
];

const orderStages = [
    { stage: "NEW_ORDER", color: "bg-blue-100 text-blue-700 border-blue-200", desc: "Order received from storefront or direct" },
    { stage: "IN_PRODUCTION", color: "bg-amber-100 text-amber-700 border-amber-200", desc: "Assigned to production team, materials allocated" },
    { stage: "READY_TO_SHIP", color: "bg-violet-100 text-violet-700 border-violet-200", desc: "Production complete, awaiting dispatch" },
    { stage: "SHIPPED", color: "bg-sky-100 text-sky-700 border-sky-200", desc: "Tracking number generated, customer notified" },
    { stage: "DELIVERED", color: "bg-emerald-100 text-emerald-700 border-emerald-200", desc: "Confirmed delivered, payment reconciled" },
];

const roles = [
    {
        role: "ADMIN",
        color: "bg-red-50 border-red-200",
        badge: "bg-red-500 text-white",
        access: [
            "Full order pipeline — all stages, all agents",
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
            "Own pipeline only — no cross-agent visibility",
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
    { icon: BarChart3, title: "Order Pipeline", desc: "Real-time order board with 5-stage lifecycle. Every status change triggers automated notifications and logs the responsible agent with timestamp." },
    { icon: TrendingUp, title: "Profit Analytics", desc: "Automated profit per order: revenue minus production cost, shipping, and marketing. No manual calculations. Updated the moment costs are entered." },
    { icon: Users, title: "Sales Agent Dashboards", desc: "Per-agent views: revenue generated, quote conversion rate, response time, and monthly targets. Managers see aggregated team data." },
    { icon: Clock, title: "Attendance System", desc: "Clock in/out with PKT timezone (UTC+5). 5AM daily cutoff. Auto-clockout after 10 hours. Overtime and undertime calculated automatically." },
    { icon: Lock, title: "Role-Based Access", desc: "ADMIN, SALES, PRODUCTION — granular permission sets stored in a JSONB permissions column. Row-Level Security enforced at the database level." },
    { icon: Database, title: "Full Audit Trail", desc: "Every order change logged to order_history with old value, new value, changed-by user ID, and exact timestamp. Zero accountability gaps." },
    { icon: Shield, title: "Offline-First", desc: "Service Worker caches critical UI and data. Team in Pakistan can access order data during intermittent connectivity. Changes sync on reconnect." },
    { icon: AlertTriangle, title: "APM + Error Tracking", desc: "Sentry integration for real-time error monitoring and application performance metrics. Any production issue is caught before the team notices." },
    { icon: Zap, title: "Automated Summaries", desc: "Monthly attendance summaries and performance metrics auto-generated via Supabase Edge Functions. No manual report compilation." },
];

const replacedTools = [
    { tool: "Google Sheets (order tracking)", cost: "Free but 8 hrs/wk", problem: "No real-time sync. 7 team members editing simultaneously caused version conflicts" },
    { tool: "Separate CRM", cost: "$50/mo", problem: "No connection to orders or production. Duplicate data entry for every customer" },
    { tool: "WhatsApp order updates", cost: "Free but chaotic", problem: "Status updates buried in chat threads. No searchability, no accountability" },
    { tool: "Manual attendance tracking", cost: "$30/mo", problem: "Clock in/out via WhatsApp messages — no overtime tracking, no payroll export" },
    { tool: "Spreadsheet reporting", cost: "20 hrs/mo", problem: "Monthly performance reports compiled manually from multiple sheets" },
];

export default function EnterpriseOpsCaseStudy() {
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
                                10/10 Dev Rating
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            Enterprise Ops.<br />
                            <span className="font-serif italic text-stone-400">Spreadsheets to real-time.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            A high-volume production business running entirely on Google Sheets, a disconnected CRM, and WhatsApp status updates. We replaced all of it — order pipeline, sales dashboards, attendance tracking, profit analytics, and role-based access — with a single custom platform rated 10/10 by independent senior developer review.
                        </p>

                        {/* Key metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "95%", label: "Process Automation", sub: "was near-zero manual processes" },
                                { value: "Live", label: "Reporting", sub: "was daily manual CSV exports" },
                                { value: "10×", label: "Efficiency Gain", sub: "team of 7, one platform" },
                                { value: "10/10", label: "Developer Rating", sub: "Code 9.4 · Arch 9.3 · UX 10/10" },
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
                        <h2 className="text-3xl font-bold text-charcoal mb-6">7 people. 5 tools. Zero real-time visibility.</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    Spreadsheet Hell
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Order tracking lived in Google Sheets. 7 team members editing simultaneously caused version conflicts, overwritten data, and no audit trail. When an order status changed, someone had to message the team on WhatsApp — and hope they saw it.
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
                        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
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
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution — Order Pipeline</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">5-stage order lifecycle. Fully automated.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Every order moves through a defined lifecycle. Each stage transition is logged with the responsible agent and timestamp. No order can be &quot;lost&quot; in a chat thread. Status changes trigger automated notifications to the right team members.
                        </p>

                        <div className="space-y-3 mb-8">
                            {orderStages.map((s, i) => (
                                <div key={s.stage} className="flex items-start gap-4">
                                    <div className="flex items-center gap-3 flex-shrink-0">
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

                        <div className="p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <Database className="w-6 h-6 text-cognac flex-shrink-0 mt-0.5" />
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
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution — Access Control</span>
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
                                                <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
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
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Solution — Attendance</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Clock in/out. Auto-everything.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Replaced WhatsApp messages for attendance with a timestamped system. All times calculated in Pakistan Standard Time (PKT, UTC+5). Business day resets at 5AM. Auto-clockout triggers after 10 hours to prevent inflated records.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {[
                                { label: "Timezone", value: "PKT (UTC+5)", desc: "Pakistan Standard Time — no conversion errors" },
                                { label: "Day Cutoff", value: "5AM PKT", desc: "Each business day calculated from 5AM to 5AM" },
                                { label: "Auto-Clockout", value: "10 hrs", desc: "Automatic clockout prevents accidentally open sessions" },
                                { label: "Overtime Calc", value: "Auto", desc: "Hours over target auto-flagged in attendance_summary" },
                                { label: "Undertime Calc", value: "Auto", desc: "Shortfall tracked per employee per month" },
                                { label: "Payroll Export", value: "CSV", desc: "Monthly attendance summary ready for payroll processing" },
                            ].map((d) => (
                                <div key={d.label} className="p-5 bg-white border border-stone-200 rounded-xl shadow-sm">
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
                                <Clock className="w-6 h-6 text-cognac flex-shrink-0 mt-0.5" />
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
                            9 features, 14 database tables, 3 database views, and Edge Functions for automated summaries. All connected to the same Supabase instance powering the storefront.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {platformFeatures.map((f) => (
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Enterprise-grade. Every layer.</h2>
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
                                { before: "Order status updates via WhatsApp — buried in threads", after: "Real-time order board. Every agent sees live status. No messages needed." },
                                { before: "Monthly reports took 20 hours to compile manually", after: "Reports auto-generated. Monthly summaries run via Supabase Edge Functions." },
                                { before: "7 team members editing the same Google Sheet", after: "One platform with row-level isolation. Zero version conflicts." },
                                { before: "CRM completely disconnected from orders", after: "Customer data, order history, and communications in one view." },
                                { before: "Attendance tracked by WhatsApp messages", after: "Timestamped clock in/out. Overtime auto-calculated. Payroll export ready." },
                                { before: "Profit calculated manually from separate sheets", after: "Profit auto-computed per order as a database-generated column. Always accurate." },
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
                                "14-table Supabase database schema with Row-Level Security",
                                "5-stage order pipeline (NEW_ORDER → DELIVERED)",
                                "Immutable order_history audit log — every change attributed",
                                "RBAC: ADMIN, SALES, PRODUCTION roles with granular JSONB permissions",
                                "Sales agent dashboards — revenue, conversion rate, response time per agent",
                                "Customer quote management with email template system",
                                "Automated profit calculation: order_amount − production − shipping − marketing",
                                "Employee attendance with PKT timezone, 5AM cutoff, auto-clockout",
                                "Monthly attendance summaries with overtime/undertime tracking",
                                "Payroll export (CSV) from attendance_summary table",
                                "Performance metrics table for goal tracking",
                                "3 database views: orders_with_details, sales_agent_reports, active_attendance_sessions",
                                "Supabase Edge Functions for automated monthly reporting",
                                "Sentry APM + error tracking integration",
                                "Offline-first via Service Worker — works on poor connectivity",
                                "100% TypeScript with zero implicit any",
                                "TanStack Query for optimistic updates + server state",
                                "Framer Motion animated UI — rated UX 10/10",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DEV RATING CALLOUT */}
                    <section className="mb-20 p-8 bg-gradient-to-br from-blue-50 to-stone-50 border border-blue-100 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-blue-400" />
                            <span className="text-blue-500 text-sm font-bold uppercase tracking-widest">Independent Review</span>
                        </div>
                        <h2 className="text-2xl font-bold text-charcoal mb-6">Rated 10/10 by a senior developer.</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { category: "Code Quality", score: "9.4/10", notes: "Type safety, separation of concerns, zero implicit any" },
                                { category: "Architecture", score: "9.3/10", notes: "RLS policies, audit trail, RBAC design, DB schema" },
                                { category: "UX / Design", score: "10/10", notes: "Framer Motion transitions, dark/light, accessibility" },
                            ].map((r) => (
                                <div key={r.category} className="p-5 bg-white border border-stone-200 rounded-2xl shadow-sm text-center">
                                    <div className="text-3xl font-black text-charcoal mb-1">{r.score}</div>
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
