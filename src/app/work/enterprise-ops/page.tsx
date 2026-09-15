import { FOUNDING_DATE, ORGANIZATION_DESCRIPTION } from "@/data/company-facts";
import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, BarChart3, Lock, Users, Clock, Shield, Database, Zap, AlertTriangle, TrendingUp, FileText, PieChart, Plug, Receipt, LineChart } from "lucide-react";
import Header from "@/components/layout/Header";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import CaseStudyShot from "@/components/work/CaseStudyShot";

export const metadata: Metadata = {
    title: { absolute: "Enterprise Operations Platform Case Study, Custom Business Dashboard | PandaCodeGen" },
    description: "How we replaced a spreadsheet estate, WhatsApp chains and several SaaS tools with a single custom ops platform. Real-time order pipeline across 17 statuses, role-based access for 7 roles, automated attendance, profit tracking, and 12 reporting modules.",
    openGraph: {
        title: "Enterprise Operations Platform Case Study, Custom Business Dashboard",
        description: "Real-time order pipeline. Role-based access for 7 roles. Automated attendance (PKT timezone). 26 Edge Functions. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/enterprise-ops",
        images: [ogImageForPath("/work/enterprise-ops")],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Operations Platform Case Study, Custom Business Dashboard",
        description: "Real-time order pipeline. Role-based access for 7 roles. Automated attendance (PKT timezone). 26 Edge Functions. Full case study.",
    },
    alternates: { canonical: "/work/enterprise-ops" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "What is a custom business operations platform?",
        answer: "A custom business operations platform is a single web application that replaces multiple disconnected SaaS tools, like CRMs, spreadsheets, attendance trackers, and reporting tools. This is PandaCodeGen's own custom ops platform for the Panda Patches business: we replaced multiple separate tools with one Supabase-backed platform featuring real-time order tracking, 12 financial reporting modules, RBAC, Square payments with a paid invoice emailed to the customer, server-side Meta CAPI ad tracking, employee attendance, and automated profit calculations.",
    },
    {
        question: "How much does it cost to replace Google Sheets with a custom business dashboard?",
        answer: "A custom business dashboard replacing spreadsheets, a CRM, and manual reporting is quoted against the number of roles, data tables, and automation requirements. This platform replaced a spreadsheet estate, a disconnected CRM and manual attendance tracking. We have not published what those cost or how many hours they took, because no record of either was kept.",
    },
    {
        question: "What is role-based access control (RBAC) and why does a small business need it?",
        answer: "RBAC means each user only sees the data their role requires. In this platform: ADMIN sees full financials and all agents; SALES sees their own pipeline only; PRODUCTION sees pending orders with no financial data. We enforce this at two layers, application logic AND Supabase Row-Level Security policies at the database level, so even direct API access is blocked.",
    },
    {
        question: "How long did it take to build the Enterprise Operations platform?",
        answer: "The full platform, a Supabase schema with Row-Level Security, a 17-status order pipeline, 12 reporting modules, RBAC with RLS policies, payments via Square, attendance with PKT timezone, automated profit calculations, and 26 Supabase Edge Functions, was built in 10 weeks. A code review was commissioned by us in 2026, but its scores are withdrawn from this site: the review document, its rubric and the reviewer could not be located during a source audit on 15 September 2026.",
    },
    {
        question: "Can a custom dashboard work offline?",
        answer: "Yes. We implemented a Service Worker that caches the critical UI and data. Team members in Pakistan with intermittent internet connectivity can still access order data and make updates, which sync automatically when the connection is restored.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#article",
            "headline": "Enterprise Operations Platform: From Spreadsheets to Real-Time Business Intelligence",
            "description": "How we replaced a spreadsheet estate, WhatsApp updates and several separate SaaS tools with a single full-stack business intelligence platform. Real-time order tracking, RBAC, automated attendance, and profit analytics.",
            "image": ogImageUrlForPath("/work/enterprise-ops"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-08-10T00:00:00Z",
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
            "description": ORGANIZATION_DESCRIPTION,
            "email": "info@pandacodegen.com",
            "foundingDate": FOUNDING_DATE,
            "areaServed": "Worldwide",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stafford",
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
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/enterprise-ops#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

const techStack = [
    { name: "React 18", role: "Frontend UI", color: "bg-sky-700 text-white" },
    { name: "TypeScript 5", role: "100% type safety (strict)", color: "bg-blue-600 text-white" },
    { name: "Vite 5", role: "Build + code-split HMR", color: "bg-violet-700 text-white" },
    { name: "Tailwind CSS 3", role: "Design system + dark mode", color: "bg-sky-700 text-white" },
    { name: "Supabase", role: "Postgres + Auth + RLS", color: "bg-emerald-700 text-white" },
    { name: "TanStack Query 5", role: "Server state + caching", color: "bg-red-700 text-white" },
    { name: "React Router 6", role: "Protected + nested routes", color: "bg-rose-700 text-white" },
    { name: "React Hook Form + Zod", role: "Validated forms", color: "bg-pink-600 text-white" },
    { name: "Recharts", role: "Analytics charts", color: "bg-indigo-700 text-white" },
    { name: "@react-pdf/renderer", role: "Invoices / PDFs", color: "bg-stone-600 text-white" },
    { name: "Framer Motion", role: "UI animations", color: "bg-pink-700 text-white" },
    { name: "Row-Level Security", role: "Per-table DB policies", color: "bg-emerald-700 text-white" },
    { name: "Edge Functions (Deno)", role: "26 serverless functions", color: "bg-emerald-800 text-white" },
    { name: "Square", role: "Checkout + payouts", color: "bg-blue-800 text-white" },
    { name: "Meta CAPI", role: "Server-side ad tracking", color: "bg-blue-700 text-white" },
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
    { name: "Supabase", role: "Postgres · Auth · Storage · Realtime · 26 Edge Functions" },
    { name: "Meta CAPI", role: "Server-side purchase/lead events, reversal on refund" },
    // Stripe was decommissioned in the CRM repo; the only reference left there is a
    // comment saying the Square payment-link function replaced it. Confirmed by a
    // source audit of that repository on 15 Sep 2026. Square is the payment system.
    { name: "Square", role: "Checkout, public payment links (/pay/:token), payment webhooks" },
    { name: "ZeptoMail", role: "Transactional email for every order milestone, including the paid invoice sent to the customer" },
    { name: "Sentry", role: "APM + error tracking via first-party proxy" },
    { name: "Vercel", role: "Frontend hosting, SPA routing, asset caching" },
];

// Verified scope from the production codebase.
const byNumbers = [
    // Every value here was stale until 15 Sep 2026: this array held the pre-audit
    // counts (23 / 8+ / 20 / 13 / 3·11 / 10) for a full day after the same six
    // numbers were corrected in the headline cards and again in the deliverables
    // list. Three copies of one fact in one file. They should all render from
    // case-study-facts.json rather than being typed here a fourth time.
    { value: "27", label: "Staff routes" },
    { value: "12", label: "Reporting modules" },
    { value: "26", label: "Edge Functions" },
    { value: "17", label: "Order statuses" },
    { value: "7 · 11", label: "Roles · permissions" },
    { value: "86", label: "DB migrations" },
];

const roles = [
    {
        role: "ADMIN",
        color: "bg-red-50 border-red-200",
        badge: "bg-red-700 text-white",
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
        badge: "bg-amber-700 text-white",
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
    { icon: BarChart3, title: "Email Automation", desc: "Order confirmation, the paid invoice once payment lands, follow-up, and overdue payment reminders all fire automatically, no manual sending." },
    { icon: Users, title: "Per-Agent Sales Reports", desc: "Each sales rep logs in and sees only their pipeline, targets, and conversion rate. Managers see the full picture." },
    { icon: TrendingUp, title: "Pending Amounts Dashboard", desc: "Every unpaid invoice, outstanding balance, and overdue account visible at a glance. No more chasing people for what&apos;s owed." },
    { icon: Clock, title: "Order History & Repeat Customer Flags", desc: "See who&apos;s bought before, how often, and what they spent without digging through files." },
    { icon: Database, title: "Avg Order Value by Category", desc: "Instantly see which product lines are driving revenue and which are just taking up space." },
    { icon: Lock, title: "Profit & Loss by Category", desc: "One click to see which categories are making money and which are bleeding it, no Excel required." },
    { icon: Shield, title: "Single Dashboard", desc: "What used to live across a spreadsheet estate, several SaaS tools, and a WhatsApp group is now one screen. One login. One source of truth." },
    { icon: AlertTriangle, title: "APM + Error Tracking", desc: "Sentry integration for real-time error monitoring and application performance metrics. Any production issue is caught before the team notices." },
    { icon: Zap, title: "Offline-First", desc: "Service Worker caches critical UI and data. Team in Pakistan can access order data during intermittent connectivity. Changes sync on reconnect." },
];

const replacedTools = [
    { tool: "Google Sheets (order tracking)", cost: "Free", problem: "No real-time sync. Simultaneous editing caused version conflicts and overwritten rows" },
    { tool: "Separate CRM", cost: "Subscription", problem: "No connection to orders or production. Duplicate data entry for every customer" },
    { tool: "WhatsApp order updates", cost: "Free but chaotic", problem: "Status updates buried in chat threads. No searchability, no accountability" },
    { tool: "Manual attendance tracking", cost: "Subscription", problem: "Clock in/out via WhatsApp messages, no overtime tracking, no payroll export" },
    { tool: "Spreadsheet reporting", cost: "Manual", problem: "Monthly performance reports compiled manually from multiple sheets" },
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

                    <CaseStudyShot
                        src="/work/enterprise-ops.png"
                        alt="The Enterprise Operations dashboard, showing the production pipeline stages, an order table with status flow, and revenue summary tiles. Customer names, sales-agent addresses, order identifiers and all figures are redacted."
                        caption="The operations platform in use. Customer names, agent addresses, order identifiers and every figure are redacted; the layout and workflow are unchanged."
                        width={1711}
                        height={919}
                    />

                    <RelationshipDisclosure slug="enterprise-ops" />

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
                                7 roles, 11 permissions
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
                                /* 15 Sep 2026. These four used to read 95% Process Automation,
                                   Live Reporting, 10x Efficiency Gain and 9.0/10 Developer Rating.
                                   A source audit of the CRM repository found no inventory behind the
                                   95%, no axis or baseline behind the 10x, and no review document,
                                   rubric or reviewer behind the 9.0. All three are withdrawn in
                                   case-study-facts.json and the build now fails if they return.
                                   What replaced them is counted, and every count says where. */
                                { value: "26", label: "Edge Functions", sub: "live, all active" },
                                { value: "59/59", label: "Tables with RLS", sub: "6 of them default-deny" },
                                { value: "12", label: "Reporting Modules", sub: "each one CSV-exportable" },
                                { value: "86", label: "DB Migrations", sub: "tracked in the repository" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-600 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WHO THIS IS FOR, AND WHAT IT DOES.

                        Added 15 Sep 2026 on the owner's direction, and the criticism behind it
                        was fair. Everything below this point was written for an engineer:
                        status enums, RLS, Edge Functions, migration counts. A business owner
                        reading it could not tell whether the thing solved their problem.

                        The distinction that went missing: evidence discipline applies to
                        OUTCOMES -- a percentage, a multiple, a rating -- because those need a
                        denominator and a period before they mean anything. It does not apply to
                        CAPABILITIES. "An agent sees only their own orders" either exists in the
                        product or it does not; it has no measurement window and needs no
                        method. Treating the two the same way is what stripped this page of its
                        useful half while the withdrawals were being made.

                        Everything in this section is a capability of the running system. None
                        of it needs a number to be true, and no number was added to make it
                        sound stronger. */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Who this is for</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">If the business runs on spreadsheets and WhatsApp, this is what replaces them.</h2>
                        <p className="text-stone-600 mb-8 max-w-3xl" data-speakable="true">
                            You take custom or made-to-order work. Orders arrive from a website, from ads, from
                            social, and from people who simply message you. A team quotes them, a floor makes them,
                            and somebody has to know at any moment what is owed, what is late, and which agent is
                            due commission. If that is your business, this is the shape of the answer. If you sell a
                            fixed catalogue off a shelf with no production stage, an off-the-shelf store will serve
                            you better and we will tell you so.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">
                            {[
                                { title: "Every lead, with where it actually came from", body: "A quote records its source when it arrives: search, paid ads, social, referral, or an AI assistant. Click identifiers from Meta, Google, Microsoft and TikTok are captured with it and carried through to the order, so the channel that produced the money is still attached to it months later. Six server-side functions report purchases and leads back to Meta and reverse them automatically when an order is refunded or cancelled, so the ad platform is not left optimising against revenue that went back. Where a source cannot be observed, the customer can say how they found you. Both are kept on the order as distinct evidence, so any figure drawn from them later can state which kind it rests on and each order is counted once." },
                                { title: "Orders that carry their own history", body: "An order moves through a defined lifecycle from enquiry to delivered, with branch states for remakes, cancellations and refunds. Every field change is logged with who changed it and when. Notes, customer messages, mockups, production files and shipping documents live on the order itself, not in somebody's inbox." },
                                { title: "Agents see their own work, and their own money", body: "A sales agent opens the platform and sees the orders assigned to them, what each is worth, which are still unpaid, and what they earned last month. Commission is calculated from the orders themselves rather than reconciled by hand at month end. An agent cannot see another agent's book, and cannot see cost or margin at all unless that permission is granted." },
                                { title: "The production floor has its own queue", body: "Digitising and stitching run on a work queue separate from the customer-facing order status, so the floor moves a job along without anyone having to translate that into something a customer would understand. It replaced a Google Sheet the floor had run since August 2025: 1,779 rows were imported and reconciled line for line, and 27 different spellings of the product types were collapsed into 13 canonical ones so a price could attach to each. A digitiser sees the job they were assigned and nothing else: no customer identity, no conversation, no pricing." },
                                { title: "Invoices and emails that send themselves", body: "Order confirmations, the paid invoice once payment lands, follow-ups and overdue payment reminders all send on their own, through one email service with a single template system behind it, so a new message is a template rather than a new piece of plumbing. Three were added in the last month alone. Payment runs through Square, by checkout or by a payment link an agent generates for one customer. Nobody has to remember to send anything, which is the point." },
                                { title: "Repeat customers, recognised as such", body: "Lifetime value, order history and repeat rate sit on the customer record, and loyalty tiers move on their own as that spend grows. Duplicate customer records are detected and merged rather than quietly splitting one buyer's history in two." },
                                { title: "Reporting that answers a question, not a spreadsheet", body: "Twelve reports behind one date filter: revenue against cost and net profit, an income statement, product mix by type and quantity band, cancellations and refunds with reasons, lead source, funnel and attribution, agent performance, customer feedback and loyalty. Every one exports to CSV. Orders sold below cost are flagged rather than waiting to be noticed." },
                                { title: "Attendance and hours, without a second system", body: "Staff clock in and out in the same platform. Hours, overtime and undertime are calculated against a fixed business day and export for payroll. Sessions left open are closed automatically rather than inflating somebody's month." },
                            ].map((c) => (
                                <div key={c.title} className="rounded-2xl border border-stone-300 bg-white p-6">
                                    <h3 className="text-lg font-bold text-charcoal mb-2">{c.title}</h3>
                                    <p className="text-sm text-stone-700 leading-relaxed">{c.body}</p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 max-w-3xl text-stone-700 leading-relaxed">
                            <span className="font-bold text-charcoal">What it replaced.</span> A spreadsheet estate, a
                            CRM that did not know about orders, attendance over WhatsApp, and monthly reports compiled
                            by hand. We have not published a figure for the hours or the subscriptions that removed,
                            because no record of either was kept and we will not estimate one. What the platform does
                            is above; what it is built from is below.
                        </p>
                    </section>

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
                        <h2 className="text-3xl font-bold text-charcoal mb-6">One team. Five tools. Zero real-time visibility.</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    Spreadsheet Hell
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Order tracking lived in Google Sheets. Simultaneous editing caused version conflicts, overwritten data, and no audit trail. When an order status changed, someone had to message the team on WhatsApp, and hope they saw it.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    No Single Source of Truth
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Customer data lived in a CRM that had no connection to orders. Attendance was tracked via WhatsApp messages. Monthly performance reports were compiled by hand from several spreadsheets.
                                </p>
                            </div>
                        </div>

                        {/* Replaced tools table */}
                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[2fr_1fr_2fr] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-600 uppercase tracking-widest">
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">17-status order lifecycle. Fully automated.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Every order moves through a defined lifecycle, from the linear happy path below to branch states like remake, cancellation, and refund. Each status transition is logged with the responsible agent and timestamp. No order can be &quot;lost&quot; in a chat thread, and status changes trigger automated email to the right people.
                        </p>

                        <div className="space-y-3 mb-8">
                            {orderStages.map((s, i) => (
                                <div key={s.stage} className="flex items-start gap-4">
                                    <div className="flex items-center gap-3 shrink-0">
                                        <div className="w-7 h-7 rounded-full bg-stone-100 text-stone-600 text-xs font-black flex items-center justify-center">{i + 1}</div>
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
                            <p className="text-xs font-bold text-stone-600 uppercase tracking-widest mb-3">Plus branch statuses (13 total)</p>
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Seven roles. Zero data leakage.</h2>
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
                                        <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">{d.label}</span>
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
                            Real-time analytics, payments, RBAC, and automation across 27 authenticated routes and 26 Supabase Edge Functions, with Row-Level Security enabled on all 59 tables. All connected to the same Supabase backend now shared with the customer portal on the marketing site.
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Twelve reports. One date-range filter.</h2>
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
                            100% TypeScript, strict mode, with the build passing clean. Offline-first. APM monitoring. A code-quality review was commissioned by us in 2026; its scores are withdrawn from this page because the review document could not be located during a source audit on 15 September 2026. The engineering facts on this page are counted from the repository instead.
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
                                { before: "Order status updates via WhatsApp, buried in threads", after: "Real-time order board. Every agent sees live status. No messages needed." },
                                { before: "Monthly reports were compiled by hand from several sheets", after: "Reports auto-generated. Monthly summaries run via Supabase Edge Functions." },
                                { before: "A whole team editing the same Google Sheet", after: "One platform with row-level isolation, so simultaneous edits cannot overwrite each other." },
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
                        <p className="text-stone-500 mb-8 max-w-2xl">Before this platform, running the business meant opening a stack of spreadsheets, scrolling WhatsApp for updates, and hoping nothing fell through the cracks. Now it doesn&apos;t.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                /* 15 Sep 2026. These read "7 → 1 Spreadsheets Replaced",
                                   "10+ hrs Time Saved Weekly" and "1 Click Decisions Made Faster,
                                   the answer used to take 30 minutes". None of the three numbers
                                   has a record behind it: no named list of seven spreadsheets, no
                                   time tracking before or after, and nothing separating a measured
                                   thirty minutes from an illustrative one. All withdrawn in
                                   case-study-facts.json. What each one replaced is still true and
                                   still worth saying, so the claims stay and the figures go. */
                                { icon: "📊", label: "Spreadsheets Replaced", value: "One platform", detail: "Order tracking, agent reports, attendance, payments, inventory, profit tracking, and customer records — all in one place." },
                                { icon: "⏱", label: "Reporting", value: "Automated", detail: "No more manually compiling reports, chasing agents for updates, or cross-referencing files. The dashboard updates in real time." },
                                { icon: "💡", label: "Decisions", value: "One click", detail: "Which category is profitable? Who are your repeat customers? What&apos;s owed? Each is a report with a date filter, not an afternoon of cross-referencing." },
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
                                "PostgreSQL schema with Row-Level Security on all 59 tables (86 tracked migrations)",
                                "17-status order pipeline, 14 of them in live use (NEW_ORDER → DELIVERED, plus DIGITIZING / REMAKE / CANCELLED / REFUNDED / FEEDBACK and more)",
                                "12 reporting modules (Sales, Production, Quality & Refunds, Product Mix, Income Statement, P&L, Lead Source, Lead Attribution, Funnel & Attribution, Customer Feedback, Form Feedback, Loyalty), CSV export",
                                "Payments: Square checkout, public payment links (/pay/:token), payment webhooks, and a paid invoice emailed to the customer",
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
                                "12 database views, including orders_with_details, sales_agent_reports and active_attendance_sessions",
                                "26 Supabase Edge Functions (user admin, email, Meta CAPI, Square payments, webhooks)",
                                "Sentry APM + error tracking integration",
                                "Offline-first via Service Worker, works on poor connectivity",
                                "100% TypeScript with zero implicit any",
                                "TanStack Query for optimistic updates + server state",
                                "Framer Motion animated UI, dark and light themes",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* DEV RATING CALLOUT */}
                                        <section className="mb-20">
                        <h2 className="text-2xl font-bold text-charcoal mb-4">The method behind this, written up</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">The decisions behind this platform are written up in the guides, if the reasoning is more useful than the outcome:</p>
                        <ul className="space-y-2 text-stone-700">
                            <li>
                                <Link href="/blog/build-vs-buy-software-2026-cost-comparison" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Build versus buy for business software</Link>{" "}— the scenario test that decides whether a platform like this is worth building at all.
                            </li>
                            <li>
                                <Link href="/blog/how-to-cut-saas-bill-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">How to cut a SaaS bill without inventing the savings</Link>{" "}— how to price the five tools a custom platform replaces, honestly.
                            </li>
                            <li>
                                <Link href="/blog/saas-software-pricing-audit-2026" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Auditing SaaS pricing with evidence</Link>{" "}— the reconciliation that shows what the old stack actually cost.
                            </li>
                            <li>
                                <Link href="/blog/do-you-own-your-website" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Do you own your website?</Link>{" "}— what ownership means for custom software, and what to get in writing.
                            </li>
                        </ul>
                    </section>

<section className="mb-12 md:mb-20 p-5 md:p-8 bg-stone-50 border border-stone-300 rounded-3xl">
                        {/* 15 Sep 2026. This was a three-tile scorecard reading 9.4 / 9.3 / 9.0
                            under the heading "Rated 9.0/10 by a senior developer", inside a band
                            captioned "Independent Review" -- while the paragraph above it said the
                            review was commissioned by us, which is the opposite of independent.
                            A source audit of the CRM repository then found no review document, no
                            rubric and no reviewer identity. The scores are withdrawn in
                            case-study-facts.json; the build fails if 9.0/10 or 9.4/10 returns to
                            this page. Restore them only from the document itself, never from
                            anyone's memory of what it said. */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-stone-400" />
                            <span className="text-stone-600 text-sm font-bold uppercase tracking-widest">Evidence note</span>
                        </div>
                        <h2 className="text-2xl font-bold text-charcoal mb-4">The code-review scores are withdrawn.</h2>
                        <p className="text-stone-700 leading-relaxed max-w-3xl">
                            This page used to publish scores from a code review we commissioned. A source audit
                            on 15 September 2026 could not locate the review document, its rubric or the
                            reviewer, so the scores are withdrawn rather than restated from memory. They were
                            also presented as an independent review, which they were not: we commissioned and
                            paid for them. Everything else on this page is counted from the repository and says
                            where it was counted.
                        </p>
                    </section>

                    <FAQAccordion faqs={pageFaqs} />

                </div>
            </div>
            <Footer />
        </main>
    );
}
