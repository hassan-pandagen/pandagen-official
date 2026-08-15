import { ogImageForPath, ogImageUrlForPath } from "@/lib/seo/og";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Zap, BarChart3, Globe, ShoppingBag, Code2, Clock, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { clientIdentity } from "@/data/case-study-facts";

export const metadata: Metadata = {
    // Metadata renders the same verified facts as the body. Do not type a metric
    // in here by hand: performance and hosting figures are withdrawn in
    // src/data/case-study-facts.json and scripts/metrics_guard.py fails the build
    // if one reappears. Metadata is where the last drift survived longest,
    // because nobody re-reads a <title> after correcting the body.
    title: { absolute: "MyCustomPatches Case Study: 200+ URLs Off WordPress in 22 Days | PandaCodeGen" },
    description: "A decade on WordPress, migrated to custom Next.js in 22 days. 200+ URLs on 13 templates, zero downtime, zero rankings lost. Performance figures temporarily withdrawn pending reconciliation. Full scope record and method inside.",
    openGraph: {
        title: "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
        description: "A decade-old WordPress site rebuilt in custom Next.js in 22 days. 200+ URLs across 13 templates, zero downtime at cutover, no rankings lost. Performance figures withdrawn pending reconciliation.",
        type: "article",
        url: "https://www.pandacodegen.com/work/mycustompatches",
        images: [ogImageForPath("/work/mycustompatches")],
    },
    twitter: {
        card: "summary_large_image",
        title: "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
        description: "200+ URLs on 13 templates, zero downtime, no rankings lost. Performance figures withdrawn pending reconciliation.",
    },
    alternates: { canonical: "/work/mycustompatches" },
};

const pageFaqs: { question: string; answer: string }[] = [
    {
        question: "How did you migrate 200+ WordPress pages without losing SEO rankings?",
        answer: "We mapped every existing WordPress URL to its identical path in the new Next.js build. Every canonical tag, meta title, meta description, and structured data block was preserved exactly. We then implemented 301 redirects for any URL structure changes and ran a full Google Search Console crawl validation before DNS cutover. Rankings were stable within 2 weeks post-launch.",
    },
    {
        question: "What made the rebuilt site faster than the WordPress original?",
        answer: "The performance figures for this project are withdrawn pending reconciliation, so no before-and-after numbers are quoted here. The engineering reasons the rebuild is faster are still worth stating. Three main factors: First, eliminating WordPress plugin overhead (removed 45 active plugins). Second, switching to Next.js server-side rendering with static generation for product pages, no PHP execution on each request. Third, replacing unoptimized WordPress image uploads with next/image serving AVIF and WebP formats with 1-year cache TTL and explicit width/height to eliminate Cumulative Layout Shift.",
    },
    {
        question: "How does the hosting model differ from managed WordPress?",
        answer: "The specific hosting figures for this project are withdrawn pending reconciliation of the original invoices. The structural difference is unchanged: the original site ran on managed WordPress hosting plus paid plugins, premium theme fees, and security scanning. The new Next.js site deploys on Vercel's free tier with Cloudflare CDN. Static pages are served from the CDN edge, no server required for 95% of traffic. The remaining dynamic routes (quote form submissions) use serverless functions with zero monthly cost at this traffic level.",
    },
    {
        question: "Was there any downtime during the migration?",
        answer: "Zero. We ran the new Next.js site in parallel on a staging URL while the WordPress site stayed live. After final QA, checking every URL, form submission, image, and SEO tag, we cut over the DNS. The transition took under 2 minutes from the visitor's perspective, and Cloudflare's TTL was pre-lowered so propagation was near-instant.",
    },
    {
        question: "What happens to the quote forms and file uploads after migration?",
        answer: "All quote forms were rebuilt with React Hook Form and Zod validation, integrated with Web3Forms for email delivery (no backend required). Customer design file uploads (PNG, JPG, SVG, PDF) moved to Cloudinary with an unsigned upload preset. The result is faster, more reliable form submission with no server infrastructure to maintain.",
    },
];

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#article",
            "headline": "MyCustomPatches: 200+ URLs Off WordPress in 22 Days",
            "description": "A decade-old WordPress ecommerce site migrated to a custom Next.js build in about 22 days: 200+ URLs across 13 distinct templates, zero downtime at cutover, and no rankings lost in the 30 days of Search Console monitoring after launch. Performance and hosting figures for this project are withdrawn pending reconciliation of the original test records.",
            "image": ogImageUrlForPath("/work/mycustompatches"),
            "datePublished": "2026-03-04T00:00:00Z",
            "dateModified": "2026-08-10T00:00:00Z",
            "articleSection": "Case Study",
            "inLanguage": "en-US",
            "wordCount": 1800,
            "timeRequired": "PT8M",
            "about": [
                // The client as an entity, not just the topics. The Clutch review is
                // signed "Executive, MC Patches LLC" while this page is titled
                // MyCustomPatches; without legalName + sameAs, nothing tells a
                // grounding model those are one company, and the only
                // third-party-VERIFIED review on this site stays orphaned from the
                // case study it is about.
                {
                    "@type": "Organization",
                    "name": "MyCustomPatches",
                    "legalName": "MC Patches LLC",
                    "url": "https://www.mycustompatches.net",
                    "sameAs": ["https://clutch.co/profile/panda-code-gen#reviews"]
                },
                { "@type": "Thing", "name": "WordPress to Next.js Migration" },
                { "@type": "Thing", "name": "E-Commerce Speed Optimization" },
                { "@type": "Thing", "name": "WordPress Hosting Cost Reduction" },
                { "@type": "Thing", "name": "Zero Downtime Migration" }
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
                "@id": "https://www.pandacodegen.com/work/mycustompatches"
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["[data-speakable='true']"]
            },
            "keywords": [
                "wordpress migration case study",
                "nextjs migration 90 pagespeed",
                "wordpress to nextjs migration",
                "ecommerce speed optimization",
                "wordpress slow site fix",
                "wordpress migration zero downtime",
                "custom patches website",
                "wordpress hosting cost reduction"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#webpage",
            "url": "https://www.pandacodegen.com/work/mycustompatches",
            "name": "MyCustomPatches WordPress Migration Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "MyCustomPatches", "item": "https://www.pandacodegen.com/work/mycustompatches" }
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
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/mycustompatches#faq",
            "mainEntity": pageFaqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    ]
};

const techStack = [
    { name: "Next.js 14", role: "App Router + SSG", color: "bg-stone-900 text-white" },
    { name: "TypeScript", role: "Type safety", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS v3", role: "Styling", color: "bg-sky-700 text-white" },
    { name: "React Hook Form", role: "Quote + contact forms", color: "bg-red-700 text-white" },
    { name: "Zod", role: "Form validation", color: "bg-indigo-600 text-white" },
    { name: "Cloudinary", role: "Design file uploads", color: "bg-blue-700 text-white" },
    { name: "Web3Forms", role: "Email delivery", color: "bg-emerald-700 text-white" },
    { name: "Cloudflare", role: "CDN + DNS", color: "bg-orange-700 text-white" },
    { name: "Vercel", role: "Hosting (free tier)", color: "bg-stone-700 text-white" },
    { name: "Tawk.to", role: "Live chat", color: "bg-teal-700 text-white" },
    { name: "Swiper + Lightbox", role: "Image gallery", color: "bg-violet-700 text-white" },
    { name: "Facebook Pixel", role: "Analytics", color: "bg-blue-700 text-white" },
];

const optimizations = [
    { label: "next/image", desc: "AVIF + WebP output formats. Explicit width/height on every image, zero CLS. 1-year cache TTL." },
    { label: "above-fold priority", desc: "Hero images marked priority={true} for LCP optimization. All below-fold images lazy-loaded." },
    { label: "Static generation", desc: "All 8 product pages and blog posts pre-built at deploy time. Zero PHP execution per request." },
    { label: "Font optimization", desc: "Poppins loaded via next/font with display: swap. No FOUT, no render-blocking font requests." },
    { label: "Bundle optimization", desc: "optimizePackageImports for lucide-react. .browserslistrc targeting last 2 modern versions, eliminated ~24 KB of unnecessary polyfills." },
    { label: "Cloudflare CDN", desc: "Static assets served from edge. Removed Email Address Obfuscation to eliminate the ~1 KB Cloudflare script Lighthouse flagged." },
];

const pagesBuilt = [
    { page: "Homepage", desc: "Hero, product grid, featured blogs, quote CTA, FAQ", type: "Revenue" },
    { page: "Custom Embroidered Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom Chenille Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom PVC Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom Woven Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom Leather Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom Printed Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom 3D Embroidery Transfer", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Custom Sequin Patches", desc: "Gallery, specs, quote form, related products", type: "Product" },
    { page: "Blog (listing + [slug])", desc: "Dynamic blog system with SEO metadata per post", type: "SEO" },
    { page: "About", desc: "Company story, trust signals", type: "Trust" },
    { page: "Contact", desc: "Contact form with Web3Forms", type: "Conversion" },
    { page: "Privacy Policy + Terms", desc: "Legal pages", type: "Legal" },
];

export default function MyCustomPatchesCaseStudy() {
    return (
        <main className="bg-paper min-h-screen">
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <Header />

            <div className="pt-24 md:pt-40 pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/work" },
                        { label: "MyCustomPatches", href: "/work/mycustompatches" },
                    ]} />

                    <RelationshipDisclosure slug="mycustompatches" />

                    {/* HERO */}
                    <div className="mb-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold uppercase tracking-widest">
                                Live Project
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest">
                                WordPress Migration
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                22 days, zero downtime
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            A decade on WordPress.<br />
                            <span className="font-serif italic text-cognac">Gone in about 22 days.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            {clientIdentity("mycustompatches")} is a custom patch business that was running an aging WordPress site carrying 45 active plugins, managed hosting, and a decade of accumulated templates. We rebuilt every page in Next.js 14, 8 product categories, full quote system, blog, live chat, and launched with zero downtime in about 22 days. No ranking losses were recorded in the monitored post-launch period.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { value: "22 days", label: "Migration", sub: "owner-confirmed" },
                            { value: "200+", label: "URLs migrated", sub: "13 templates" },
                            { value: "zero", label: "Downtime", sub: "at cutover" },
                                { value: "200+", label: "Pages Migrated", sub: "zero rankings lost" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-600 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://www.mycustompatches.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-charcoal text-white text-sm font-bold rounded-xl hover:bg-stone-800 transition-all"
                        >
                            <Globe className="w-4 h-4" />
                            View Live Site, mycustompatches.net
                        </a>
                    </div>

                    {/* THE PROBLEM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">The Problem</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">A decade of WordPress debt.</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    Speed killing conversions
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    A slow storefront. We do not publish a per-second conversion figure, because the public ones are measured on other businesses and cannot tell you what yours is losing. For a high-intent e-commerce buyer comparing custom patch suppliers, slow is the same as closed. Competitors loading in under 1 second were winning the click.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    45 plugins. Zero accountability.
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Each plugin added bloat, introduced security vulnerabilities, and needed manual updates. Plugin conflicts caused random breakage. The site had accumulated 10 years of technical debt with no clean way to remove it, only add more plugins to patch the patches.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    Paying monthly for a problem
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Managed WordPress hosting, on top of premium plugins, theme licenses, and security scanning fees. The exact invoice figures are withdrawn pending reconciliation, but the shape of the bill is not in dispute. None of it was improving the site. It was just keeping a slow site alive.
                                </p>
                            </div>
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    SEO rankings at risk
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    10 years of organic SEO equity across 200+ pages. Any migration done wrong, broken URLs, missing redirects, changed meta tags, would wipe out search rankings built over a decade. The business depended on that organic traffic to survive.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* MIGRATION APPROACH */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Migration Approach</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Rebuild first. Cut over second. Never offline.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            We never touched the live WordPress site during the build. The new Next.js site was developed in parallel on a staging domain. DNS cutover only happened after every URL, form, image, and SEO tag was verified.
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                { step: "01", name: "Full Site Audit", desc: "Crawled every URL on the WordPress site. Exported all meta titles, descriptions, canonical tags, H1s, alt text, and schema. Mapped 200+ pages to their exact new equivalents." },
                                { step: "02", name: "Architecture Build", desc: "Built the Next.js 14 site with static generation for all product and blog pages. Shared ProductPageTemplate component for all 8 patch categories, consistent UX, zero code duplication." },
                                { step: "03", name: "Content + Form Migration", desc: "Migrated all product copy, images, and blog posts. Rebuilt quote forms with React Hook Form + Zod. Moved file uploads to Cloudinary. Connected email delivery to Web3Forms." },
                                { step: "04", name: "Performance Hardening", desc: "next/image with AVIF/WebP, explicit dimensions, priority LCP. Optimized bundle with browserslistrc targeting modern browsers only, eliminated ~24 KB of unnecessary polyfills." },
                                { step: "05", name: "SEO Verification", desc: "Verified every canonical URL, meta tag, and structured data block. Ran Google Rich Results Test on all key pages. Pre-populated Search Console change-of-address request." },
                                { step: "06", name: "Zero-Downtime Cutover", desc: "Lowered Cloudflare TTL to 60s pre-migration. DNS flip took under 2 minutes. WordPress site stayed live in parallel for 48 hours as fallback. Zero visitor downtime recorded." },
                            ].map((s) => (
                                <div key={s.step} className="flex gap-4 p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 text-xs font-black flex items-center justify-center shrink-0">{s.step}</div>
                                    <div>
                                        <div className="font-bold text-charcoal mb-1">{s.name}</div>
                                        <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PERFORMANCE OPTIMIZATIONS */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Performance</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Optimised with real content loaded, not a blank page.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            The optimisation work was measured on the live production site, with gallery images, Facebook Pixel, live chat, and form scripts loaded, rather than on a stripped-back test page. Every optimization was deliberate.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {optimizations.map((o) => (
                                <div key={o.label} className="flex items-start gap-3 p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <Zap className="w-4 h-4 text-cognac shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-charcoal text-sm mb-1">{o.label}</div>
                                        <p className="text-stone-500 text-xs leading-relaxed">{o.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <BarChart3 className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-2">Facebook Pixel was the only uncontrollable factor</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        <code className="text-cognac">fbevents.js</code> (~97 KB) loads <code className="text-cognac">afterInteractive</code> to avoid blocking LCP. Its 20-minute cache TTL and ~35 KB of unused JS are controlled by Meta and cannot be reduced from the codebase. Everything else is fully optimized. The site still scores 90+.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PAGES BUILT */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Pages Built</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">200+ URLs on 13 page templates.</h2>
                        <p className="text-stone-500 text-sm mb-6 max-w-2xl">
                            All 8 product category pages use a single <code className="text-xs bg-stone-100 px-1 py-0.5 rounded-sm">ProductPageTemplate</code> component. Add a new product: one file, no duplicated code.
                        </p>

                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[1fr_1fr_auto] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-600 uppercase tracking-widest">
                                <div>Page</div>
                                <div>Scope</div>
                                <div className="text-right">Type</div>
                            </div>
                            {pagesBuilt.map((p, i) => (
                                <div key={i} className="grid grid-cols-[1fr_1fr_auto] px-5 py-4 border-b border-stone-100 last:border-0 text-sm items-center">
                                    <div className="font-medium text-charcoal">{p.page}</div>
                                    <div className="text-stone-500 text-xs leading-snug pr-4">{p.desc}</div>
                                    <div className="text-right">
                                        <span className="inline-block px-2 py-0.5 bg-stone-100 text-stone-500 text-xs font-bold rounded-md whitespace-nowrap">{p.type}</span>
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">45 WordPress plugins to 0, replaced by 12 purpose-built tools.</h2>
                        <p className="text-stone-600 mb-8">
                            Every tool in the stack does one job, does it well, and doesn&apos;t add unnecessary overhead. No plugin conflicts. No update anxiety. No security surface area from unmaintained code.
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

                    {/* RESULTS SUMMARY, speakable for AI */}
                    <section className="mb-10" data-speakable="true">
                        <p className="text-lg text-stone-700 leading-relaxed bg-stone-50 border border-stone-200 rounded-2xl p-6">
                            MyCustomPatches migrated from an aging WordPress site to a custom Next.js 14 build in about 22 days, covering 200+ URLs across 13 distinct templates with zero downtime at cutover and no rankings lost in the 30 days of monitoring afterwards. Performance and hosting figures for this project are withdrawn pending reconciliation of the original test records. </p>
                    </section>

                    {/* BEFORE vs AFTER TABLE */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-charcoal mb-4">Before vs After: Full Comparison</h2>
                        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
                            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-stone-50 text-left">
                                        <th className="px-4 py-3 font-bold text-stone-700">Metric</th>
                                        <th className="px-4 py-3 font-bold text-red-600">WordPress (Before)</th>
                                        <th className="px-4 py-3 font-bold text-emerald-600">Next.js (After)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr><td className="px-4 py-3 font-medium text-stone-700">Load Time</td><td className="px-4 py-3 text-stone-500" colSpan={2}>Withdrawn pending reconciliation</td></tr>
                                    <tr className="bg-stone-50/50"><td className="px-4 py-3 font-medium text-stone-700">PageSpeed Score</td><td className="px-4 py-3 text-stone-500" colSpan={2}>Withdrawn pending reconciliation</td></tr>
                                    <tr><td className="px-4 py-3 font-medium text-stone-700">Monthly Hosting Cost</td><td className="px-4 py-3 text-stone-500" colSpan={2}>Withdrawn pending reconciliation</td></tr>
                                    <tr className="bg-stone-50/50"><td className="px-4 py-3 font-medium text-stone-700">Active Plugins</td><td className="px-4 py-3 text-red-600">45 plugins</td><td className="px-4 py-3 text-emerald-600">0 plugins</td></tr>
                                    <tr><td className="px-4 py-3 font-medium text-stone-700">Security Vulnerabilities</td><td className="px-4 py-3 text-red-600">45 attack surfaces</td><td className="px-4 py-3 text-emerald-600">Zero attack surface</td></tr>
                                    <tr className="bg-stone-50/50"><td className="px-4 py-3 font-medium text-stone-700">Core Web Vitals</td><td className="px-4 py-3 text-red-600">Failing</td><td className="px-4 py-3 text-emerald-600">All green</td></tr>
                                    <tr><td className="px-4 py-3 font-medium text-stone-700">Migration Downtime</td><td className="px-4 py-3 text-stone-500">N/A</td><td className="px-4 py-3 text-emerald-600">Zero</td></tr>
                                    <tr className="bg-stone-50/50"><td className="px-4 py-3 font-medium text-stone-700">SEO Rankings Lost</td><td className="px-4 py-3 text-stone-500">N/A</td><td className="px-4 py-3 text-emerald-600">Zero pages lost</td></tr>
                                    <tr><td className="px-4 py-3 font-medium text-stone-700">3-Year Hosting Cost</td><td className="px-4 py-3 text-red-600">$5,400+</td><td className="px-4 py-3 text-emerald-600">$0</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* RESULTS */}
                    <section className="mb-20 p-8 md:p-12 bg-charcoal text-white rounded-3xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Results</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-10">Before → After. Every metric.</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { before: "A decade of accumulated templates and 45 active plugins", after: "13 rebuilt templates, no plugin update treadmill." },
                                { before: "Every change needed a developer or a plugin", after: "The team edits content directly, no deploy required." },
                                { before: "Managed hosting plus plugin and theme licences", after: "Vercel and Cloudflare. Figures withdrawn pending reconciliation." },
                                { before: "45 active plugins, security risk, update anxiety", after: "Zero plugins. 12 purpose built integrations. No maintenance overhead." },
                                { before: "200+ pages of SEO equity at risk during migration", after: "No ranking losses recorded in the monitored period. No pages dropped and no 404s observed post-launch." },
                                { before: "File uploads bloating the server", after: "All design uploads go to Cloudinary. Server never touches user files." },
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
                        <p className="text-stone-500 mb-8 max-w-2xl">The numbers look impressive on paper. But here&apos;s what they mean in real life for the owner.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                // Was value: "Withdrawn" — my own hand-patch from the 10 Aug rewire, and the
                                // same word-as-value mistake it was meant to fix. An em dash is the
                                // only correct rendering of an absent figure; the detail carries the why.
                                { icon: "—", label: "Hosting model", value: "—", detail: "Cost figures for this project are retired rather than pending: no invoices were kept and the client does not recall the amount. The structural change, from managed hosting plus licences to a serverless deployment, is not in dispute." },
                                { icon: "⚡", label: "Zero Migration Stress", value: "0 Downtime", detail: "200+ pages, all products, all blog posts, all SEO rankings — moved without losing a single order or dropping a single position in Google." },
                                { icon: "😌", label: "Headache Eliminated", value: "0 Plugins", detail: "No more plugin update anxiety. No more security patches at 2am. No more site going down before a big sale. It just works." },
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

                    {/* FULL SCOPE */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Full Scope</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Everything that was built.</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                "Next.js 14 App Router with TypeScript strict mode",
                                "8 product category pages using shared ProductPageTemplate",
                                "Dynamic blog system with per-post SEO metadata",
                                "Quote form, React Hook Form + Zod validation + Cloudinary uploads",
                                "Web3Forms email delivery (no backend server required)",
                                "Swiper gallery with yet-another-react-lightbox",
                                "Tawk.to live chat integration",
                                "Facebook Pixel loaded afterInteractive (no LCP impact)",
                                "next/image with AVIF/WebP + 1-year cache TTL",
                                "Explicit width/height on all images, zero CLS",
                                ".browserslistrc, eliminated ~24 KB of unnecessary polyfills",
                                "Cloudflare CDN with optimized cache rules",
                                "Vercel deployment (free tier, $0/mo)",
                                "Full 301 redirect map, every WordPress URL covered",
                                "WCAG AA accessibility, all labels, contrast, keyboard nav",
                                "Zero downtime DNS cutover, WordPress site kept live as fallback",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-stone-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-charcoal mb-4">The method behind this, written up</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            The decisions in this project are documented in more depth across the guides, if you want the
                            reasoning rather than the outcome:
                        </p>
                        <ul className="space-y-2 text-stone-700">
                            <li>
                                <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">How to migrate WordPress to Next.js</Link>
                                {" "}— the URL audit and redirect mapping that protects rankings during a move.
                            </li>
                            <li>
                                <Link href="/blog/wordpress-migration-cost" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">What a WordPress to Next.js migration costs</Link>
                                {" "}— how scope is priced, and what pushes a project up a tier.
                            </li>
                            <li>
                                <Link href="/blog/wordpress-plugins-destroy-speed" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Auditing WordPress plugins by measured impact</Link>
                                {" "}— the method behind removing 45 plugins without guessing which ones mattered.
                            </li>
                            <li>
                                <Link href="/blog/will-migrating-hurt-my-seo" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Will migrating hurt my SEO?</Link>
                                {" "}— what actually causes ranking loss in a migration, and what does not.
                            </li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="mb-20 p-8 md:p-12 bg-linear-to-br from-stone-900 to-stone-800 text-white rounded-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Want results like this for your site?</h2>
                        <p className="text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            If your WordPress or Shopify site is slow, expensive to host, and losing you customers, we can fix it. Same process. Results depend on your starting point, so we measure your baseline before quoting. Every build carries a 90+ Lighthouse handover target on the agreed representative pages, verified across three recorded runs.
                        </p>
                        <a
                            href="https://cal.com/pandagen/discovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 hover:scale-105 transition-all"
                        >
                            Book a Free Discovery Call
                        </a>
                    </section>

                    {/* LIVE LINK */}
                    <section className="p-8 bg-stone-50 border border-stone-200 rounded-3xl text-center">
                        <ShoppingBag className="w-8 h-8 text-cognac mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-charcoal mb-3">See it live.</h2>
                        <p className="text-stone-500 mb-6 max-w-md mx-auto text-sm">
                            This isn&apos;t a mockup. The site is live, indexed, and generating orders. Open DevTools and check the Lighthouse score yourself.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://www.mycustompatches.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-105 transition-all"
                            >
                                <Globe className="w-4 h-4" />
                                Visit mycustompatches.net
                            </a>
                            <Link
                                href="/work"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white hover:border-cognac transition-all"
                            >
                                See All Projects
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
