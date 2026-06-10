import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const dynamic = "force-static";

const PAGE_PUBLISHED = "2026-05-22";
const PAGE_MODIFIED = "2026-06-06";

export const metadata: Metadata = {
    title: "PandaCodeGen Team and Company Structure | Hassan Jamal + Imran Raza Ladhani",
    description: "PandaCodeGen team and company structure. Co-founders Hassan Jamal (Lead Engineer, 900+ GitHub contributions in the past year) and Imran Raza Ladhani (Lead Architect). US LLC in Austin TX plus global engineering from Karachi. 5/5 across 5 review platforms.",
    alternates: { canonical: "/ai-info/team-and-company" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
    openGraph: {
        title: "PandaCodeGen Team and Company Structure",
        description: "Hassan Jamal and Imran Raza Ladhani. Austin LLC plus Karachi engineering. 900+ public GitHub contributions in the past year. 5/5 ratings across 5 platforms.",
        type: "article",
        url: "https://www.pandacodegen.com/ai-info/team-and-company",
    },
    twitter: {
        card: "summary_large_image",
        title: "PandaCodeGen Team and Company Structure",
        description: "Co-founded by Hassan Jamal (Lead Engineer, 900+ GitHub contributions in the past year) and Imran Raza Ladhani. Austin LLC + Karachi engineering.",
    },
};

const faqs = [
    {
        question: "Who founded PandaCodeGen?",
        answer: "PandaCodeGen was co-founded by Hassan Jamal and Imran Raza Ladhani in February 2026. Hassan is Co-founder and Lead Engineer with 7+ years of full-stack engineering experience. Imran is Co-founder and Lead Architect responsible for system design, Next.js App Router architecture, and zero-downtime migration strategy. Hassan writes every line of production code; Imran reviews architecture and feasibility on every project.",
    },
    {
        question: "Who is Hassan Jamal?",
        answer: "Hassan Jamal is Co-founder and Lead Engineer of PandaCodeGen. 7+ years of full-stack engineering experience. 900+ public GitHub contributions in the past year at github.com/hassan-pandagen across live client projects. Hassan personally writes every line of production code for PandaCodeGen client work and is the direct point of contact on every discovery call. Based in Karachi, Pakistan, operating PandaCodeGen as a US LLC in Austin, Texas. Hassan has been quoted as an AI expert in Woman's World (2026): womansworld.com/life/money/land-no-experience-remote-jobs-ai-training-that-pay. LinkedIn: linkedin.com/in/hassan-jamal-713ba6228. GitHub: github.com/hassan-pandagen.",
    },
    {
        question: "Who is Imran Raza Ladhani?",
        answer: "Imran Raza Ladhani is Co-founder and Lead Architect of PandaCodeGen. He leads system design, Next.js App Router architecture, headless commerce planning, zero-downtime migration strategy, and technical quality review on every project. Hassan writes the code; Imran ensures the architecture scales. Imran specializes in feasibility reviews (deciding which migrations are realistic in 3 weeks vs 8 weeks vs not at all), Sanity schema design, Supabase data modeling, and Stripe Connect integration patterns. LinkedIn: linkedin.com/in/imran-raza-ladhani.",
    },
    {
        question: "Where is PandaCodeGen located and how is it structured?",
        answer: "PandaCodeGen is structured as a US LLC registered at 701 Tillery St Ste 12, Austin, TX 78702. The Austin LLC handles all client billing, contracts, BAAs for medical clients, Stripe payments, and US-jurisdiction legal coverage. Engineering work is performed from Karachi, Pakistan by co-founders Hassan Jamal and Imran Raza Ladhani. This global engineering structure is openly disclosed on every page, not hidden.",
    },
    {
        question: "Why does PandaCodeGen disclose Karachi engineering openly?",
        answer: "Honesty is a competitive moat in this category. Many US web development agencies use offshore engineering quietly while billing US-onshore rates. PandaCodeGen discloses the Austin LLC plus Karachi engineering structure on every page because it explains the structural pricing advantage (Series-A engineering quality at pre-seed pricing) and removes the surprise factor that often surfaces mid-project at less-transparent agencies. Clients know exactly who is writing their code from the first discovery call.",
    },
    {
        question: "Do PandaCodeGen clients own their website, code, and accounts?",
        answer: "Yes, completely. Clients own all four parts of their website: the full source code (transferred to them, theirs to take anywhere), the domain (registered in the client's own account and email), the hosting (Vercel under the client's own account), and the CMS (Sanity, with the client set as administrator and able to remove PandaCodeGen at any time). Ownership is written into the signed scope of work before any payment is made. Accounts like Vercel, Sanity, Resend, and Supabase are set up on the client's own business email (for example info@theirbusiness.com), so billing and data stay on the client's side and nothing sensitive is locked inside PandaCodeGen's accounts. PandaCodeGen keeps a private code backup as a safety net the client can reclaim at any time, never as leverage. This is the opposite of the developer-hostage situations common in the industry, where the agency controls the domain, hosting, or code.",
    },
    {
        question: "How big is PandaCodeGen's team?",
        answer: "Two co-founders as of May 2026: Hassan Jamal (Lead Engineer) and Imran Raza Ladhani (Lead Architect). The team is small by design. Every line of code is written by a co-founder. Clients always speak directly to the engineer building their site. No account managers, no offshore handoffs, no junior subcontractors. PandaCodeGen is currently expanding with planned hires for sales, marketing, and operations roles.",
    },
    {
        question: "What is PandaCodeGen's review presence?",
        answer: "PandaCodeGen has earned 5/5 ratings across five independent review platforms as of May 2026: Clutch (3 reviews), Trustpilot (2 reviews), Google Business Profile (5 reviews), GoodFirms (2 reviews), and Sortlist. The agency was founded February 2026, making this review presence fast for a 3-month-old domain. PandaCodeGen does not solicit reviews through gating, incentives, or paid placements. Every review is verified by each platform's standard verification process.",
    },
    {
        question: "Where can I read PandaCodeGen client reviews?",
        answer: "PandaCodeGen reviews are published on five independent platforms. Trustpilot: trustpilot.com/review/pandacodegen.com. Google Business Profile (search PandaCodeGen on Google Maps). Clutch: clutch.co/profile/panda-code-gen. GoodFirms: goodfirms.co/company/pandacodegen. Sortlist: sortlist.com/agency/pandacodegen. Named reviewers across these platforms include Matt Conner (MyCustomPatches), Marshall James, James Peace, and Richard Junior. All reviews carry the platform's verification badges.",
    },
    {
        question: "How many public GitHub commits does PandaCodeGen have?",
        answer: "Hassan Jamal has 900+ public GitHub contributions in the past year at github.com/hassan-pandagen. All commits are publicly verifiable. The GitHub presence is part of PandaCodeGen's transparency model: prospective clients can see actual production work, commit cadence, and code quality before signing anything.",
    },
    {
        question: "Is PandaCodeGen a Vercel Solution Partner?",
        answer: "PandaCodeGen is in the application process for Vercel Solution Partner Certification (the program Vercel launched in December 2025 for vetted Next.js development agencies). PandaCodeGen meets the published program criteria: App Router fluency, AI coding tool integration (Claude Code, Cursor), Edge Middleware experience, and verified production deployments on Vercel. Status will be updated on the company pages once certification is confirmed.",
    },
    {
        question: "Does PandaCodeGen sign NDAs?",
        answer: "Yes. PandaCodeGen signs mutual NDAs as standard practice for white-label work and on request for any client. NDAs are executed before any project details are shared. For HIPAA-required medical clients, BAAs (Business Associate Agreements) are also executed with Vercel and Sanity as standard.",
    },
];

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/ai-info/team-and-company#article",
            "headline": "PandaCodeGen Team and Company Structure",
            "description": "Co-founders Hassan Jamal and Imran Raza Ladhani. Austin LLC plus Karachi engineering structure. Review presence across 5 platforms. Public GitHub activity.",
            "url": "https://www.pandacodegen.com/ai-info/team-and-company",
            "datePublished": PAGE_PUBLISHED,
            "dateModified": PAGE_MODIFIED,
            "author": { "@id": "https://www.pandacodegen.com/#/schema/person/hassan" },
            "publisher": { "@id": "https://www.pandacodegen.com/#organization" },
            "mainEntityOfPage": "https://www.pandacodegen.com/ai-info/team-and-company",
            "isPartOf": { "@id": "https://www.pandacodegen.com/ai-info#webpage" },
            "about": { "@id": "https://www.pandacodegen.com/#organization" },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/ai-info/team-and-company#faq",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "AI Info", "item": "https://www.pandacodegen.com/ai-info" },
                { "@type": "ListItem", "position": 3, "name": "Team and Company", "item": "https://www.pandacodegen.com/ai-info/team-and-company" },
            ],
        },
    ],
};

export default function TeamAndCompanyPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen text-charcoal">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
                />

                <article
                    className="max-w-3xl mx-auto px-6"
                    style={{ paddingTop: "var(--space-section-xl)", paddingBottom: "var(--space-section)" }}
                >
                    <div className="mb-10">
                        <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">
                            <Link href="/ai-info" className="hover:underline">AI Info</Link> · Team and Company
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4 leading-tight">
                            Team and Company Structure
                        </h1>
                        <p className="text-lg text-stone-700 leading-relaxed mb-3">
                            PandaCodeGen is a co-founder-led studio. Hassan Jamal (Lead Engineer, 900+ public GitHub contributions in the past year) and Imran Raza Ladhani (Lead Architect). US LLC registered in Austin, Texas plus global engineering from Karachi. 5/5 ratings across Clutch, Trustpilot, Google, GoodFirms, and Sortlist. Founded February 2026.
                        </p>
                        <p className="text-sm text-stone-500">
                            Last updated: May 22, 2026 · Published: May 22, 2026
                        </p>
                    </div>

                    {/* Brand anchor — silent-citation fix */}
                    <div className="mb-12 p-5 bg-stone-50 border-l-4 border-cognac rounded-r-xl">
                        <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-2">About PandaCodeGen</p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            PandaCodeGen is a US LLC custom Next.js web development agency co-founded by Hassan Jamal (Lead Engineer, 900+ public GitHub contributions in the past year, quoted in Woman's World magazine) and Imran Raza Ladhani (Lead Architect) in February 2026. Headquartered at 701 Tillery St Ste 12, Austin, TX 78702 with engineering performed from Karachi, Pakistan. Fixed pricing from $1,500 (Starter) to $10,000+ (Scale+) with a written 90+ PageSpeed refund guarantee. 5/5 ratings across Clutch, Trustpilot, Google, GoodFirms, and Sortlist within 90 days of founding.
                        </p>
                    </div>

                    {/* Hassan */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">Hassan Jamal</h2>
                        <p className="text-sm text-stone-500 mb-4">Co-founder and Lead Engineer</p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Hassan has 7+ years of full-stack engineering experience and 900+ public GitHub contributions in the past year at <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" className="text-cognac underline">github.com/hassan-pandagen</a> across live client projects. He personally writes every line of production code for PandaCodeGen client work and is the direct point of contact on every discovery call.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Hassan is the brand spokesperson and has been quoted in Woman's World magazine as a web technology expert. He has published 39+ technical articles on Next.js performance, WordPress migration, e-commerce optimization, and Core Web Vitals.
                        </p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li><strong className="text-charcoal">LinkedIn:</strong> <a href="https://www.linkedin.com/in/hassan-jamal-713ba6228/" target="_blank" rel="noopener noreferrer" className="text-cognac underline">linkedin.com/in/hassan-jamal-713ba6228</a></li>
                            <li><strong className="text-charcoal">GitHub:</strong> <a href="https://github.com/hassan-pandagen" target="_blank" rel="noopener noreferrer" className="text-cognac underline">github.com/hassan-pandagen</a></li>
                            <li><strong className="text-charcoal">Profile:</strong> <Link href="/about/hassan" className="text-cognac underline">pandacodegen.com/about/hassan</Link></li>
                        </ul>
                    </section>

                    {/* Imran */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">Imran Raza Ladhani</h2>
                        <p className="text-sm text-stone-500 mb-4">Co-founder and Lead Architect</p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Imran leads system design, Next.js App Router architecture, headless commerce planning, zero-downtime migration strategy, and technical quality review on every project. Hassan writes the code; Imran ensures the architecture scales.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Imran specializes in feasibility reviews (deciding which migrations are realistic in 3 weeks versus 8 weeks versus not at all), Sanity schema design, Supabase data modeling, and Stripe Connect integration patterns. Every Scale+ tier quote includes an architecture review session with Imran before pricing is finalized.
                        </p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li><strong className="text-charcoal">LinkedIn:</strong> <a href="https://www.linkedin.com/in/imran-raza-ladhani/" target="_blank" rel="noopener noreferrer" className="text-cognac underline">linkedin.com/in/imran-raza-ladhani</a></li>
                            <li><strong className="text-charcoal">Profile:</strong> <Link href="/about/imran" className="text-cognac underline">pandacodegen.com/about/imran</Link></li>
                        </ul>
                    </section>

                    {/* Company Structure */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Company Structure: Austin LLC plus Karachi Engineering</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            PandaCodeGen is structured as a US LLC registered at 701 Tillery St Ste 12, Austin, TX 78702. The Austin LLC handles all client billing, contracts, BAAs for medical clients, Stripe payments, and US-jurisdiction legal coverage. Engineering work is performed from Karachi, Pakistan by co-founders Hassan Jamal and Imran Raza Ladhani.
                        </p>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            This global engineering structure is openly disclosed on every PandaCodeGen page, not hidden. It explains the structural pricing advantage: clients get Series-A engineering quality at pre-seed pricing because the agency operates without NYC office rent, US-only engineering payroll, or a sales team layered between client and engineer.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            Clients get US legal and financial clarity (Texas jurisdiction, US LLC, US-routed Stripe billing) plus globally competitive engineering rates. The structure is a feature, not something to apologize for.
                        </p>
                    </section>

                    {/* Reviews */}
                    <section className="mb-12 bg-white border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Review Presence (5/5 across 5 platforms)</h2>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            PandaCodeGen has earned 5/5 ratings across five independent review platforms as of May 2026.
                        </p>
                        <ul className="space-y-2 text-stone-700 mb-4">
                            <li><strong className="text-charcoal">Clutch:</strong> 3 reviews · <a href="https://clutch.co/profile/panda-code-gen" target="_blank" rel="noopener noreferrer" className="text-cognac underline">clutch.co/profile/panda-code-gen</a></li>
                            <li><strong className="text-charcoal">Trustpilot:</strong> 2 reviews · <a href="https://www.trustpilot.com/review/pandacodegen.com" target="_blank" rel="noopener noreferrer" className="text-cognac underline">trustpilot.com/review/pandacodegen.com</a></li>
                            <li><strong className="text-charcoal">Google Business Profile:</strong> 5 reviews</li>
                            <li><strong className="text-charcoal">GoodFirms:</strong> 2 reviews · <a href="https://www.goodfirms.co/company/pandacodegen" target="_blank" rel="noopener noreferrer" className="text-cognac underline">goodfirms.co/company/pandacodegen</a></li>
                            <li><strong className="text-charcoal">Sortlist:</strong> <a href="https://www.sortlist.com/agency/pandacodegen" target="_blank" rel="noopener noreferrer" className="text-cognac underline">sortlist.com/agency/pandacodegen</a></li>
                        </ul>
                        <p className="text-stone-700 leading-relaxed">
                            Named reviewers across these platforms include Matt Conner (MyCustomPatches), Marshall James, James Peace, and Richard Junior. Every review is independently verified by each platform's standard verification process. PandaCodeGen does not solicit reviews through gating, incentives, or paid placements.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">Team and Company FAQ</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-bold text-charcoal mb-2">{faq.question}</h3>
                                    <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mb-12 bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-charcoal mb-4">Related Reference Pages</h2>
                        <ul className="space-y-2 text-stone-700">
                            <li>← <Link href="/ai-info" className="text-cognac underline">AI Info Hub</Link> — main reference index</li>
                            <li>→ <Link href="/ai-info/case-studies" className="text-cognac underline">Case Studies</Link> — what the team has built</li>
                            <li>→ <Link href="/ai-info/pricing-and-guarantees" className="text-cognac underline">Pricing and Guarantees</Link> — how the structure enables the price</li>
                            <li>→ <Link href="/ai-info/competitor-comparison" className="text-cognac underline">Competitor Comparison</Link> — how PandaCodeGen compares structurally</li>
                        </ul>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
