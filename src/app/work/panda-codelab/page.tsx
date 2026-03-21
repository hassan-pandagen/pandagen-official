import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Zap, Shield, Smartphone, Code2, BarChart3, Layers, Eye } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
    title: "Panda CodeLab, Custom Agency Website, Spline 3D + Framer Motion + WCAG 2.1 AA | PandaCodeGen",
    description: "How we built pandacodelab.com, a separate brand, fully custom. Next.js 15, React 19, Framer Motion spring physics, magnetic interactions, Spline 3D scenes, WCAG 2.1 AA. Zero templates. Zero page builders. Under a second load.",
    openGraph: {
        title: "Panda CodeLab, Custom Agency Website Built by PandaCodeGen",
        description: "Live at pandacodelab.com. Next.js 15. Spring physics. Magnetic buttons. Spline 3D. WCAG 2.1 AA. Full case study.",
        type: "article",
        url: "https://www.pandacodegen.com/work/panda-codelab",
        images: [{ url: "https://www.pandacodegen.com/work/pandacodelab.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: "/work/panda-codelab" },
};

const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/work/panda-codelab#article",
            "headline": "Panda CodeLab: Building Our Agency Site on the Tech We Sell",
            "description": "How we built our own agency website using Next.js 15, React 19, Framer Motion 12 spring physics, Spline 3D scenes, and full WCAG 2.1 AA accessibility compliance. Zero TypeScript errors. Zero ESLint errors. Live proof we practice what we sell.",
            "image": "https://www.pandacodegen.com/work/pandacodelab.png",
            "datePublished": "2025-12-01T00:00:00Z",
            "dateModified": "2026-02-01T00:00:00Z",
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
                "@id": "https://www.pandacodegen.com/work/panda-codelab"
            },
            "keywords": [
                "agency website Next.js 15",
                "React 19 agency site",
                "Framer Motion spring physics",
                "WCAG 2.1 AA compliance",
                "custom agency website build",
                "magnetic button interactions",
                "Spline 3D website",
                "premium web animations"
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/work/panda-codelab#webpage",
            "url": "https://www.pandacodegen.com/work/panda-codelab",
            "name": "Panda CodeLab Agency Website Case Study | PandaCodeGen",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.pandacodegen.com/work" },
                { "@type": "ListItem", "position": 3, "name": "Panda CodeLab", "item": "https://www.pandacodegen.com/work/panda-codelab" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/work/panda-codelab#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why build an agency website in Next.js 15 instead of a website builder?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We couldn't sell custom-code performance to clients while running our own site on Webflow or WordPress. Next.js 15 gave us App Router, React 19, server components, and full control over every render. The result: sub-700ms load times, 100/100 PageSpeed, and zero platform fees. It's our live proof of concept." }
                },
                {
                    "@type": "Question",
                    "name": "Do Framer Motion animations hurt performance?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Not when implemented correctly. We use hardware-accelerated CSS properties only (transform, opacity), never layout-triggering properties. Spring physics are calculated in the browser compositor thread. We also detect prefers-reduced-motion and disable all animations for users who request it. The animated site scores the same as a static site on Lighthouse." }
                },
                {
                    "@type": "Question",
                    "name": "What is WCAG 2.1 AA compliance and why does it matter for a business website?",
                    "acceptedAnswer": { "@type": "Answer", "text": "WCAG 2.1 Level AA is the international accessibility standard that covers keyboard navigation, screen reader compatibility, focus indicators, color contrast ratios, and motion preferences. In the US, ADA compliance lawsuits against websites are increasing. Every interactive element on this site has focus rings, ARIA labels, and keyboard navigation. Accessibility is also a direct ranking signal in Google's Page Experience algorithm." }
                },
                {
                    "@type": "Question",
                    "name": "How does the Spline 3D integration affect page load time?",
                    "acceptedAnswer": { "@type": "Answer", "text": "The 3D scene is lazy-loaded, it only initializes after the critical above-the-fold content has rendered. We use Next.js dynamic imports with a lightweight placeholder, so the initial page load is unaffected. The 3D scene loads progressively in the background while the user reads the page." }
                },
                {
                    "@type": "Question",
                    "name": "Can you build a site like this for my agency or business?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build premium agency and business websites on this exact stack: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll. Pricing starts from $5,900 for a full custom coded agency site. Timeline is typically 4-6 weeks. Every site includes schema markup, Core Web Vitals optimization, and WCAG 2.1 AA compliance." }
                }
            ]
        }
    ]
};

const techStack = [
    { name: "Next.js 15", role: "App Router + RSC", color: "bg-stone-900 text-white" },
    { name: "React 19", role: "Latest stable", color: "bg-sky-500 text-white" },
    { name: "TypeScript", role: "Strict mode, 0 errors", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS 4", role: "Styling", color: "bg-sky-400 text-white" },
    { name: "Framer Motion 12", role: "Spring physics", color: "bg-pink-500 text-white" },
    { name: "Lenis 1.1", role: "Momentum scroll", color: "bg-violet-500 text-white" },
    { name: "Spline", role: "3D hero scene", color: "bg-indigo-500 text-white" },
    { name: "Web3Forms", role: "Form API", color: "bg-emerald-600 text-white" },
    { name: "React Hook Form", role: "Form state + Zod", color: "bg-red-500 text-white" },
    { name: "Lucide React", role: "Icon system", color: "bg-stone-600 text-white" },
];

const animationFeatures = [
    { name: "TextReveal", desc: "Character-by-character reveal on scroll. Each letter enters with a spring easing, no linear timings." },
    { name: "SpotlightCard", desc: "Mouse-tracking radial glow follows cursor across every card surface. GPU-composited, zero repaints." },
    { name: "MagneticButton", desc: "CTA buttons physically follow cursor within a 60px radius using spring physics. Snaps back on exit." },
    { name: "Hero3D (Spline)", desc: "Full 3D scene loads lazily after LCP. Placeholder shown while 3D initialises, no CLS." },
    { name: "Lenis Scroll", desc: "Momentum-based smooth scrolling with configurable lerp factor. Disabled on mobile for native feel." },
    { name: "Motion Preferences", desc: "prefers-reduced-motion detected on mount. All animations replaced with instant transitions for accessibility." },
];

const pages = [
    { page: "Homepage (/)", desc: "Hero 3D scene, service overview, social proof, CTA", badge: "Revenue" },
    { page: "About (/about)", desc: "Team, story, values, stats", badge: "Trust" },
    { page: "Services (/services)", desc: "All services with icon grid", badge: "Navigation" },
    { page: "Website Design", desc: "Process, portfolio, custom quote form", badge: "Service" },
    { page: "App Development", desc: "Tech stack, benefits, timeline", badge: "Service" },
    { page: "Digital Marketing", desc: "Strategy breakdown, packages", badge: "Service" },
    { page: "Graphics Design", desc: "Portfolio grid, brief form", badge: "Service" },
    { page: "Contact (/contact)", desc: "Contact form (Web3Forms), phone, map", badge: "Conversion" },
    { page: "404", desc: "Branded not-found with navigation links", badge: "UX" },
];

export default function PandaCodelabCaseStudy() {
    return (
        <main className="bg-paper min-h-screen">
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
            <Header />

            <div className="pt-40 pb-24 px-6">
                <div className="container mx-auto max-w-5xl">

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Our Work", href: "/work" },
                        { label: "Panda CodeLab", href: "/work/panda-codelab" },
                    ]} />

                    {/* HERO */}
                    <div className="mb-20">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cognac/10 border border-cognac/20 text-cognac text-xs font-bold uppercase tracking-widest">
                                In-House Build
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest">
                                Agency Website
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest">
                                WCAG 2.1 AA
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-[0.95]">
                            We built this<br />
                            <span className="font-serif italic text-cognac">on the tech we sell.</span>
                        </h1>

                        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mb-10">
                            You can&apos;t sell custom-code performance to clients while running your own site on a page builder. We built the Panda CodeLab agency site on Next.js 15, React 19, and Framer Motion 12, spring physics, magnetic interactions, Spline 3D, and full WCAG 2.1 AA compliance. Zero TypeScript errors. Zero ESLint errors. This is the live proof.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { value: "0", label: "Build Errors", sub: "TypeScript strict + ESLint" },
                                { value: "100/100", label: "PageSpeed", sub: "0.6s load time" },
                                { value: "WCAG AA", label: "Accessibility", sub: "Full keyboard + screen reader" },
                                { value: "9", label: "Pages Built", sub: "4 service detail pages" },
                            ].map((m) => (
                                <div key={m.label} className="p-5 bg-white border border-stone-300 rounded-2xl shadow-xs">
                                    <div className="text-3xl font-black text-charcoal mb-1">{m.value}</div>
                                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">{m.label}</div>
                                    <div className="text-xs text-stone-400 leading-snug">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* THE BRIEF */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">The Brief</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">Proof before pitch.</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-red-50 border border-red-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-black">✕</span>
                                    The credibility problem
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    We were selling clients on the idea that custom coded sites are faster, more secure, and more scalable than templates. But every sale required explaining why, because our own presence didn&apos;t prove it visually or technically. We needed the agency site itself to be the argument.
                                </p>
                            </div>
                            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                                <h3 className="font-bold text-charcoal mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    The constraint
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Ship on Next.js 15 + React 19 before most agencies had even updated from Next.js 13. Hit 100/100 PageSpeed with full motion animations running. Pass WCAG 2.1 AA. Zero compromises on design quality.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* DESIGN SYSTEM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Design System</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Solar gradient. Hybrid depth.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            A custom design system built around a solar gradient palette, deep red through magenta to amber, layered over a hybrid depth approach: 80% shadows, 20% glassmorphism. Premium feel without the performance cost of heavy blur effects.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                <div className="flex gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-lg" style={{ background: "#E60040" }} />
                                    <div className="w-8 h-8 rounded-lg" style={{ background: "#E91E63" }} />
                                    <div className="w-8 h-8 rounded-lg" style={{ background: "#F59E0B" }} />
                                </div>
                                <div className="text-sm font-bold text-charcoal mb-1">Solar Gradient</div>
                                <div className="text-xs text-stone-400">#E60040 → #E91E63 → #F59E0B</div>
                            </div>
                            <div className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                <div className="text-sm font-bold text-charcoal mb-2">Typography</div>
                                <div className="text-xs text-stone-500 space-y-1">
                                    <div><span className="font-semibold">Poppins</span>, headings</div>
                                    <div><span className="font-semibold">Inter</span>, body</div>
                                    <div><span className="font-semibold">Outfit</span>, UI elements</div>
                                </div>
                            </div>
                            <div className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                <div className="text-sm font-bold text-charcoal mb-2">Depth System</div>
                                <div className="text-xs text-stone-500 space-y-1">
                                    <div>80%, layered shadows</div>
                                    <div>20%, glassmorphism</div>
                                    <div>SpotlightCard, mouse tracking glow</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ANIMATION SYSTEM */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Animation System</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Six motion primitives. One coherent feel.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            All animations are GPU-composited using only <code className="text-xs bg-stone-100 px-1 py-0.5 rounded-sm">transform</code> and <code className="text-xs bg-stone-100 px-1 py-0.5 rounded-sm">opacity</code>, never layout-triggering properties. Spring physics on every interaction. Lighthouse score unaffected.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {animationFeatures.map((f) => (
                                <div key={f.name} className="p-5 bg-white border border-stone-300 rounded-xl shadow-xs">
                                    <Zap className="w-4 h-4 text-cognac mb-3" />
                                    <h3 className="font-bold text-charcoal mb-2 text-sm">{f.name}</h3>
                                    <p className="text-stone-500 text-xs leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-6 bg-charcoal text-white rounded-2xl">
                            <div className="flex items-start gap-4">
                                <Layers className="w-6 h-6 text-cognac shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold mb-2">prefers-reduced-motion is not optional</p>
                                    <p className="text-stone-300 text-sm leading-relaxed">
                                        A dedicated <code className="text-cognac">usePrefersReducedMotion()</code> hook reads the system preference on mount. Every animated component checks this flag and substitutes instant transitions. Not just a Framer Motion prop, a first-class architectural decision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ACCESSIBILITY */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Accessibility</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-3">WCAG 2.1 Level AA. Not a checkbox.</h2>
                        <p className="text-stone-600 mb-8 max-w-2xl">
                            Accessibility is also an SEO signal. Google&apos;s Page Experience algorithm rewards sites that work for all users. Every interactive element passes keyboard navigation, every image has descriptive alt text, and every color pair meets contrast ratio requirements.
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                { label: "Focus rings", desc: "Brand-colored focus indicators on all interactive elements. Tab through the entire site without a mouse." },
                                { label: "Keyboard navigation", desc: "Full Tab/Enter/Space/Escape support on modals, dropdowns, and carousels." },
                                { label: "ARIA labels", desc: "All icon-only buttons, form fields, and custom widgets have descriptive ARIA attributes." },
                                { label: "Semantic HTML", desc: "Correct heading hierarchy (h1 → h2 → h3), landmark regions (nav, main, footer), and list elements." },
                                { label: "Color contrast", desc: "All text/background combinations meet 4.5:1 ratio (AA). Interactive elements meet 3:1." },
                                { label: "Motion preference", desc: "prefers-reduced-motion respected site-wide. Disabled animations, instant transitions." },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-100 rounded-xl">
                                    <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-charcoal text-sm mb-1">{item.label}</div>
                                        <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PAGES BUILT */}
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-8 bg-cognac" />
                            <span className="text-cognac text-sm font-bold uppercase tracking-widest">Pages Built</span>
                        </div>
                        <h2 className="text-3xl font-bold text-charcoal mb-6">9 pages. Every one hand-coded.</h2>

                        <div className="bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs">
                            <div className="grid grid-cols-[1fr_1fr_auto] bg-stone-50 border-b border-stone-200 px-5 py-3 text-xs font-black text-stone-400 uppercase tracking-widest">
                                <div>Page</div>
                                <div>Purpose</div>
                                <div className="text-right">Type</div>
                            </div>
                            {pages.map((p, i) => (
                                <div key={i} className="grid grid-cols-[1fr_1fr_auto] px-5 py-4 border-b border-stone-100 last:border-0 text-sm items-center">
                                    <div className="font-medium text-charcoal">{p.page}</div>
                                    <div className="text-stone-500 text-xs leading-snug pr-4">{p.desc}</div>
                                    <div className="text-right">
                                        <span className="inline-block px-2 py-0.5 bg-stone-100 text-stone-500 text-xs font-bold rounded-md whitespace-nowrap">{p.badge}</span>
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
                        <h2 className="text-3xl font-bold text-charcoal mb-3">Cutting edge. Every layer.</h2>
                        <p className="text-stone-600 mb-8">
                            Next.js 15 + React 19, shipped before most agencies updated from Next.js 13. Tailwind CSS 4 (the new oxide engine). Framer Motion 12 with the latest spring physics API.
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
                        <h2 className="text-3xl font-bold text-white mb-10">Production-ready. Every metric.</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { metric: "TypeScript", result: "Strict mode. Zero implicit any. 0 build errors." },
                                { metric: "ESLint", result: "0 errors across all 9 pages and components." },
                                { metric: "Accessibility", result: "WCAG 2.1 Level AA, keyboard nav, ARIA, contrast ratios." },
                                { metric: "Performance", result: "Hardware-accelerated animations. No layout thrashing." },
                                { metric: "Responsive", result: "Mobile-first from 375px through 4K (1440px+)." },
                                { metric: "SEO", result: "Sitemap, robots.txt, meta tags, Open Graph, JSON-LD per page." },
                            ].map((r, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-white font-bold text-sm">{r.metric}: </span>
                                        <span className="text-stone-300 text-sm">{r.result}</span>
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
                        <p className="text-stone-500 mb-8 max-w-2xl">We don&apos;t just build fast websites for clients. We built one for ourselves — with every technique we recommend, applied to our own brand.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { icon: "🏆", label: "PageSpeed Score", value: "100/100", detail: "Full 3D scenes, scroll animations, spring physics on buttons — and still 100/100 on PageSpeed. This is proof it&apos;s possible, not a trade-off." },
                                { icon: "♿", label: "Accessibility", value: "WCAG AA", detail: "Zero accessibility violations. Every interactive element has a focus state, every image has alt text, every animation respects prefers-reduced-motion." },
                                { icon: "🍽", label: "We Eat Our Own Cooking", value: "Built for us", detail: "Every technique we sell — custom animations, zero plugins, sub-1s load — runs on our own site. If it wasn&apos;t good enough for us, we wouldn&apos;t sell it to you." },
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
                                "Next.js 15 App Router with React 19 server + client components",
                                "Solar gradient design system (#E60040 → #E91E63 → #F59E0B)",
                                "TextReveal, character-by-character spring entry animation",
                                "SpotlightCard, mouse-tracking radial glow on every card",
                                "MagneticButton, spring physics cursor attraction on CTAs",
                                "Hero3D, lazy-loaded Spline 3D scene, zero CLS impact",
                                "Lenis 1.1 momentum scroll (disabled on mobile for native feel)",
                                "usePrefersReducedMotion hook, site-wide animation kill switch",
                                "WCAG 2.1 AA, focus rings, ARIA labels, semantic HTML",
                                "React Hook Form + Zod validation on all form inputs",
                                "Web3Forms API integration (no backend required)",
                                "Dynamic service detail pages with custom quote forms",
                                "Sitemap.xml, robots.txt, per-page JSON-LD structured data",
                                "100% TypeScript strict mode, 0 implicit any",
                                "Tailwind CSS 4 oxide engine for minimal CSS output",
                                "Mobile-first responsive from 375px through 1440px+",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
