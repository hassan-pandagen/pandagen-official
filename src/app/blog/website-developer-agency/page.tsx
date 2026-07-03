import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "website-developer-agency")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const FeatureVisual = lazyLoad(() => import("@/components/blog/SalesImpactAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "What Does a Website Developer Agency Actually Do in 2026?",
    description: "A website developer agency builds, migrates, and maintains custom-coded sites. Services, pricing, 6 questions to ask before signing, and red flags that separate legitimate partners from padded quotes.",
    alternates: { canonical: "/blog/website-developer-agency" },
    keywords: [
        "website developer agency",
        "web development agency",
        "custom website development agency",
        "website developer agency services",
        "how to choose web development agency",
        "website developer agency cost",
        "full service website agency",
        "website migration agency",
        "nextjs development agency",
        "custom web development agency usa"
    ],
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
        title: "What Does a Website Developer Agency Actually Do in 2026?",
        description: "Services, pricing, 6 questions to ask before signing, and red flags that separate legitimate web development partners from padded quotes.",
        type: "article",
        publishedTime: "2026-05-12T00:00:00-05:00",
        modifiedTime: "2026-05-12T00:00:00-05:00",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/website-developer-agency",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "What Does a Website Developer Agency Actually Do in 2026?",
        description: "Services, pricing, 6 questions to ask before signing, and red flags that separate legitimate web development partners from padded quotes.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/website-developer-agency#article",
            "headline": "What Does a Website Developer Agency Actually Do in 2026?",
            "description": "A website developer agency builds, migrates, and maintains custom-coded sites for businesses that have outgrown templates. Services, pricing, questions to ask, and red flags explained.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-05-12T00:00:00-05:00",
            "dateModified": "2026-05-12T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
                "url": "https://www.pandacodegen.com/about/hassan",
                "image": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/team/hassan.png", "width": 400, "height": 400 },
                "sameAs": ["https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen"]
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaCodeGen",
                "url": "https://www.pandacodegen.com",
                "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 }
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/website-developer-agency" },
            "articleSection": "Agency",
            "keywords": ["website developer agency", "web development agency", "custom website development", "platform migration agency", "nextjs agency"],
            "timeRequired": "PT16M",
            "wordCount": 4000,
            "about": [
                { "@type": "Thing", "name": "Website Development Agency" },
                { "@type": "Thing", "name": "Custom Web Development" },
                { "@type": "Thing", "name": "Platform Migration" },
                { "@type": "Thing", "name": "Web Performance Optimization" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Think With Google: Mobile Page Speed", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "W3Techs: WordPress Usage Statistics", "url": "https://w3techs.com/technologies/details/cm-wordpress" },
                { "@type": "CreativeWork", "name": "Vercel Pricing", "url": "https://vercel.com/pricing" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/website-developer-agency#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Website Developer Agency", "item": "https://www.pandacodegen.com/blog/website-developer-agency" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/website-developer-agency#webpage",
            "url": "https://www.pandacodegen.com/blog/website-developer-agency",
            "name": "What Does a Website Developer Agency Actually Do in 2026?",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-05-12T00:00:00-05:00",
            "dateModified": "2026-05-12T00:00:00-05:00",
            "inLanguage": "en-US"
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
            "areaServed": "Worldwide"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/website-developer-agency#faq",
            "mainEntity": postFAQs.map((faq: { question: string; answer: string }) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WebsiteDeveloperAgencyPage() {
    return (
        <main className="min-h-screen bg-paper text-charcoal overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
            <Header />

            <article className="pt-28 md:pt-32 pb-12 md:pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Website Developer Agency" }]} />
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-cognac transition mt-4 mb-8">
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>
                        <div className="mb-6">
                            <span className="inline-block bg-cognac/10 text-cognac text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Agency</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight mb-6">
                            What Does a Website Developer Agency <span className="font-serif italic text-cognac">Actually Do in 2026?</span>
                        </h1>
                        <BlogAuthor name="Hassan Jamal" role="Founder, PandaCodeGen" date="May 12, 2026" readTime="16 min read" />
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-8 md:mt-12">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10">

                        <p className="text-stone-700 leading-relaxed mb-6 text-lg" data-speakable="true">A website developer agency builds, migrates, and maintains custom-coded websites for businesses that have outgrown templates and page builders. The difference between a full-service agency and a freelancer or DIY platform is scope: agencies handle design, development, hosting, SEO, and ongoing support as a single accountable team. This guide covers what services to expect, how much agencies charge in 2026, what questions to ask before signing, and how to spot the red flags that separate legitimate partners from padded quotes.</p>

                        <div className="mb-12"><FeatureVisual /></div>

                        <div className="space-y-8">

                            <BlogHeader>What a Full-Service Website Developer Agency Actually Does</BlogHeader>

                            <div className="my-4 p-4 bg-stone-50 border-l-4 border-cognac rounded-r-xl" data-speakable="true">
                                <p className="text-xs font-bold text-cognac uppercase tracking-wide mb-1">Quick Answer</p>
                                <p className="text-sm text-stone-700 leading-relaxed">A website developer agency designs, builds, and maintains custom-coded websites. Full-service agencies handle the entire stack: visual design, custom code, hosting, SEO, and ongoing technical support. This is different from freelancers who specialize in one skill or DIY platforms that give you templates to fill in. Most website problems are interconnected, a slow site is often a hosting problem, a code problem, and an <Link href="/blog/how-website-speed-affects-seo" className="text-cognac hover:underline">SEO problem</Link> simultaneously. Agencies that handle the full stack can diagnose issues that cross boundaries.</p>
                            </div>

                            <BlogList items={[
                                "Custom website builds: From-scratch design and development without templates or shared components",
                                "Platform migrations: Moving from WordPress, Wix, or Shopify themes to custom code while preserving SEO rankings",
                                "Ecommerce and headless storefronts: Custom frontends that keep Shopify as the backend",
                                "Custom engineering: SaaS MVPs, internal dashboards, AI integrations, and client portals",
                                "Ongoing support: Hosting, security, performance optimization, and content updates"
                            ]} />

                            <BlogHeader>Core Services Offered by a Website Developer Agency</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Custom Website Design and Development</h3>
                            <BlogText>
                                Custom development means every line of code is written specifically for your business. No pre-built templates, no page builders, no shared components with thousands of other sites. DIY builders like <Link href="/blog/wix-vs-custom-website" className="text-cognac hover:underline">Wix</Link> and <Link href="/blog/squarespace-vs-custom-website" className="text-cognac hover:underline">Squarespace</Link> inject 400KB to 800KB of JavaScript on every page load regardless of what your page actually requires. Custom code eliminates that overhead. The performance difference is measurable: custom-built sites routinely score 90+ on <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google PageSpeed</a> while template sites cluster between 30 and 65.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Platform Migrations to Custom Code</h3>
                            <BlogText>
                                Platform migration is the process of moving your website from one system to another. Businesses typically migrate from <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress</Link>, <Link href="/blog/wix-too-slow" className="text-cognac hover:underline">Wix</Link>, <Link href="/blog/squarespace-migration-cost" className="text-cognac hover:underline">Squarespace</Link>, or <Link href="/blog/leaving-webflow-2026" className="text-cognac hover:underline">Webflow</Link> to a custom-coded stack for three reasons: slow page speeds that hurt conversions, plugin bloat that creates security vulnerabilities, and platform fees that compound over time.
                            </BlogText>
                            <BlogText>
                                The technical challenge is preserving Google rankings during the move. Every old URL gets mapped to a new URL with a 301 redirect, which tells search engines the content moved permanently. <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Done correctly, rankings transfer</a>. Done incorrectly, you lose years of SEO work overnight.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Ecommerce and Headless Storefronts</h3>
                            <BlogText>
                                <Link href="/blog/what-is-headless-commerce" className="text-cognac hover:underline">Headless commerce</Link>, <a href="https://www.bigcommerce.com/articles/headless-commerce/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">a market valued at $1.7 billion in 2025</a>, separates your storefront (what customers see) from your backend (where orders and inventory live). You keep Shopify or WooCommerce for order management while replacing the slow, template-based frontend with custom code. The <Link href="/services/ecommerce" className="text-cognac hover:underline">headless approach</Link> keeps Shopify&apos;s backend while replacing the Liquid frontend with custom Next.js code, sub-second load times and full design control. Replacing apps with native code can cut monthly SaaS fees from $1,500+ to under $50.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Custom Engineering for SaaS, Dashboards, and AI Tools</h3>
                            <BlogText>
                                Sometimes off-the-shelf tools cannot do what your business requires. A pricing calculator with 200 variable combinations. A client portal that pulls data from three different systems. An internal dashboard that replaces a spreadsheet your team has outgrown. <Link href="/services/custom-engineering" className="text-cognac hover:underline">Custom engineering</Link> covers SaaS MVPs, internal tools, and AI integrations. The deliverable is production-ready code you own completely, built to scale to 10,000+ users without architectural changes.
                            </BlogText>

                            <BlogHeader>How Much a Website Developer Agency Costs in 2026</BlogHeader>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table →</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Project Type</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Typical Agency Range</th>
                                            <th className="p-3 text-left font-bold border border-stone-300 text-cognac">PandaCodeGen Fixed Pricing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Simple marketing site (5 to 15 pages)</td><td className="p-3 border border-stone-300">$5,000 to $15,000</td><td className="p-3 border border-stone-300 text-cognac">$1,500 Starter</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Business site with forms and blog</td><td className="p-3 border border-stone-300">$10,000 to $30,000</td><td className="p-3 border border-stone-300 text-cognac">$3,500 Growth</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Ecommerce migration</td><td className="p-3 border border-stone-300">$15,000 to $50,000+</td><td className="p-3 border border-stone-300 text-cognac">$5,000 to $10,000 Scale</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Custom SaaS or dashboard</td><td className="p-3 border border-stone-300">$30,000 to $100,000+</td><td className="p-3 border border-stone-300 text-cognac">Fixed-scope sprints</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <BlogText>
                                The price difference comes down to three factors: page count and template complexity, whether ecommerce or custom integrations are involved, and how much of the work is actually custom versus recycled from previous projects. See the full breakdown in our <Link href="/blog/how-much-does-a-website-cost" className="text-cognac hover:underline">website cost guide</Link> and <Link href="/pricing" className="text-cognac hover:underline">published fixed-price menu</Link>.
                            </BlogText>

                            <BlogHeader>Platforms a Modern Web Development Agency Supports</BlogHeader>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">WordPress and WooCommerce</h3>
                            <BlogText>
                                <a href="https://wordpress.com/blog/2025/04/17/wordpress-market-share/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">WordPress powers 43.4% of the web</a>, making it the most common migration source. The platform itself is free, but the ecosystem creates costs: <Link href="/blog/wordpress-vs-custom-code-real-cost-3-years" className="text-cognac hover:underline">managed hosting at $150 to $400 per month, premium plugins at $500 to $1,000 per year</Link>, and developer retainers to fix breakages from plugin updates. Security is the other issue. WordPress sites running outdated plugins are the most common target for automated attacks, with <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">11,334 new vulnerabilities discovered in 2025</a> according to Patchstack&apos;s annual security report. The <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline">migration path to Next.js</Link> eliminates the database and plugin attack surface entirely. See our <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">3-year WordPress cost breakdown</Link>.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Shopify and Headless Commerce</h3>
                            <BlogText>
                                Shopify&apos;s Liquid templating language limits what you can build without apps. Stores that require advanced features end up stacking 10 to 15 paid apps at $50 to $200 each per month. The headless approach keeps Shopify&apos;s backend while replacing the Liquid frontend with custom Next.js code, full design control, sub-second load times, and features built in code instead of monthly app fees. See <Link href="/blog/shopify-headless" className="text-cognac hover:underline">headless Shopify results from a $1.2M store</Link>.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Wix, Squarespace, and Webflow</h3>
                            <BlogText>
                                Visual builders share a common ceiling: excellent for getting a site live quickly, but they cap performance, customization, and ownership. Wix and Squarespace inject <Link href="/blog/squarespace-too-slow" className="text-cognac hover:underline">heavy JavaScript runtimes</Link> that slow every page. Webflow limits CMS items to 10,000 and <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline">charges enterprise rates</Link> to lift the cap. Each platform has specific migration considerations, Wix exports almost nothing usable so <Link href="/services/wix" className="text-cognac hover:underline">migration is a manual rebuild</Link>, Squarespace exports content but not design, Webflow exports code but not CMS data.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">GoHighLevel and Funnel Builders</h3>
                            <BlogText>
                                GoHighLevel&apos;s CRM and pipeline features work well. The website and funnel builder does not, <Link href="/blog/gohighlevel-website-speed" className="text-cognac hover:underline">page load times of 10 to 30 seconds are common, and PageSpeed scores cluster between 25 and 45</Link>. The hybrid approach keeps GHL for what it does well (CRM, automations, pipelines) while replacing the slow funnel pages with custom code that loads in under a second.
                            </BlogText>

                            <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Next.js, Vercel, and Headless CMS</h3>
                            <BlogText>
                                Next.js is a React framework that supports server-side rendering, static generation, and edge deployment. <a href="https://vercel.com/pricing" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Vercel&apos;s hosting</a> is built by the same team, together they enable sub-second load times and 90+ PageSpeed scores as a baseline. A headless CMS like Sanity provides a clean visual editor for non-technical team members with no developer required for content changes.
                            </BlogText>

                            {/* Mid CTA */}
                            <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                                <p className="font-bold text-charcoal mb-2">Evaluating agencies and want a real quote?</p>
                                <p className="text-stone-600 mb-4 text-sm">Drop your current site URL. We scope the migration or build live on the call and give you a written fixed price before we hang up.</p>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Book a Free Discovery Call <ArrowRight className="w-4 h-4" /></CalModalButton>
                            </div>

                            <BlogHeader>The Four-Step Website Development Process</BlogHeader>

                            <div className="space-y-4 my-6">
                                {[
                                    { num: "1", title: "Discovery and Performance Audit", body: "The first step is understanding what you have and what is broken. This means running PageSpeed on your current site, auditing SEO gaps, reviewing security vulnerabilities, and documenting integrations that need to survive migration. The deliverable is a written audit with specific metrics: current PageSpeed score, load time, Core Web Vitals status, and a list of technical debt." },
                                    { num: "2", title: "Architecture and System Design", body: "Architecture is planning before code. This phase defines URL structure, database schema, CMS content models, third-party integrations, and hosting configuration. Agencies that skip architecture discover requirements mid-project. Planning upfront costs hours. Discovering gaps mid-build costs weeks." },
                                    { num: "3", title: "Build in Weekly Sprints", body: "Sprint-based delivery means you see working progress every week, not a big reveal after two months of silence. Each sprint ends with a demo of what shipped and a plan for the next week. If something is heading in the wrong direction, you catch it in week two instead of month three." },
                                    { num: "4", title: "Zero-Downtime Launch and Handover", body: "Zero-downtime migration means your old site stays live until the new site is fully tested. The cutover happens at the DNS level, one configuration change points your domain to the new hosting. The handover includes full source code access, CMS training, SSL certificate setup, and 301 redirect implementation." }
                                ].map((step) => (
                                    <div key={step.num} className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                                        <span className="flex-shrink-0 w-8 h-8 bg-cognac text-white font-bold rounded-full flex items-center justify-center text-sm">{step.num}</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-1">{step.title}</p>
                                            <p className="text-sm text-stone-700 leading-relaxed">{step.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <BlogHeader>Performance Standards Your Website Developer Agency Should Guarantee</BlogHeader>

                            <BlogText>
                                Performance is a set of measurable metrics that <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google publishes and uses for ranking</a>. Any agency serious about performance should be willing to guarantee specific numbers in writing.
                            </BlogText>

                            <ul className="space-y-3 my-4 text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>PageSpeed score:</strong> Google&apos;s 0 to 100 rating. <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">90+ is the threshold for &ldquo;good&rdquo;</Link>, sub-60 sites are actively penalized in rankings.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>Load time:</strong> How long until the page is usable. Under 1 second is the target. <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Google&apos;s research</a> shows 53% of mobile visitors abandon pages that take more than 3 seconds.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>Core Web Vitals:</strong> <Link href="/blog/core-web-vitals-explained" className="text-cognac hover:underline">Three specific metrics Google uses for ranking</Link>, LCP (largest contentful paint), CLS (layout shift), and INP (interaction responsiveness).</span>
                                </li>
                            </ul>

                            <BlogQuote>
                                Written guarantees matter because they create accountability. &ldquo;We build fast sites&rdquo; is marketing. &ldquo;90+ PageSpeed or full refund&rdquo; is a commitment.
                            </BlogQuote>

                            <BlogHeader>In-House Developer vs Web Development Agency vs Freelancer</BlogHeader>

                            <div className="overflow-x-auto my-6">
                                <div className="text-xs text-stone-500 mb-2 md:hidden">Scroll to see full table →</div>
                                <table className="min-w-[560px] w-full border-collapse border border-stone-300 text-sm">
                                    <thead>
                                        <tr className="bg-stone-100">
                                            <th className="p-3 text-left font-bold border border-stone-300">Factor</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">In-House Developer</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Freelancer</th>
                                            <th className="p-3 text-left font-bold border border-stone-300">Agency</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Cost structure</td><td className="p-3 border border-stone-300">Salary + benefits ($80K to $150K+/yr)</td><td className="p-3 border border-stone-300">Hourly ($50 to $150/hr)</td><td className="p-3 border border-stone-300">Fixed project pricing</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Skill breadth</td><td className="p-3 border border-stone-300">Single specialty</td><td className="p-3 border border-stone-300">Varies widely</td><td className="p-3 border border-stone-300 text-emerald-700">Full team coverage</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Accountability</td><td className="p-3 border border-stone-300">Direct management</td><td className="p-3 border border-stone-300">Contract-based</td><td className="p-3 border border-stone-300 text-emerald-700">Company reputation</td></tr>
                                        <tr><td className="p-3 border border-stone-300 font-medium">Best for</td><td className="p-3 border border-stone-300">40+ hrs/week ongoing work</td><td className="p-3 border border-stone-300">Small defined projects</td><td className="p-3 border border-stone-300 text-emerald-700">Growth-stage businesses</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <BlogHeader>How to Choose the Right Website Developer Agency</BlogHeader>

                            <div className="space-y-4 my-6">
                                {[
                                    { num: "1", title: "Verify Performance Benchmarks With Live URLs", body: "Ask for live URLs from their portfolio and run them through Google PageSpeed yourself. If an agency claims to build fast sites but their portfolio scores 60 on mobile, the claim is marketing." },
                                    { num: "2", title: "Confirm Fixed Pricing and Scope in Writing", body: "Hourly billing creates misaligned incentives, the longer a project takes, the more the agency earns. Demand a written proposal with exact deliverables and total cost before signing." },
                                    { num: "3", title: "Check Who Writes the Code", body: "Ask directly: who will write my code? If the answer involves 'our team' without names, the work is likely outsourced." },
                                    { num: "4", title: "Require 100% Source Code Ownership", body: "Code ownership means you receive the GitHub repository and can deploy it anywhere. Many agencies host your code indefinitely and charge monthly fees for access. This is renting, not owning." },
                                    { num: "5", title: "Demand a Written Performance Guarantee", body: "A real guarantee specifies a metric (90+ PageSpeed), a measurement method, and a consequence (full refund if missed). Vague promises like 'we prioritize performance' have no teeth." }
                                ].map((step) => (
                                    <div key={step.num} className="flex gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                                        <span className="flex-shrink-0 w-8 h-8 bg-cognac text-white font-bold rounded-full flex items-center justify-center text-sm">{step.num}</span>
                                        <div>
                                            <p className="font-bold text-charcoal mb-1">{step.title}</p>
                                            <p className="text-sm text-stone-700 leading-relaxed">{step.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <BlogHeader>6 Questions to Ask a Website Developer Agency Before You Sign</BlogHeader>

                            <div className="space-y-4 my-6">
                                {[
                                    { q: "What PageSpeed Score Will You Guarantee in Writing?", good: "90+ on mobile with a full refund if we miss it.", bad: "It depends on the project." },
                                    { q: "Do I Own the Source Code and IP on Day One?", good: "Yes, full GitHub access at launch.", bad: "We maintain the code for you on our servers." },
                                    { q: "What Are My Total Monthly Costs After Launch?", good: "Specific breakdown: $X hosting, $0 platform fees.", bad: "We can discuss that after the project." },
                                    { q: "Who Will Actually Write My Code?", good: "Named engineers with portfolio links.", bad: "Our development team handles that." },
                                    { q: "How Do You Handle SEO and 301 Redirects During Migration?", good: "Full URL mapping and 301 implementation with GSC verification.", bad: "SEO is a separate service we can quote." },
                                    { q: "What Happens if You Miss the Performance Targets?", good: "Full or partial refund clause in the contract.", bad: "We do our best to hit targets." }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                                        <p className="font-bold text-charcoal mb-3">{i + 1}. {item.q}</p>
                                        <div className="grid gap-2">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-stone-700"><strong className="text-emerald-700">Acceptable:</strong> {item.good}</p>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-stone-700"><strong className="text-red-600">Red flag:</strong> {item.bad}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <BlogHeader>Why Founder-Built Agencies Beat Outsourced Web Development Shops</BlogHeader>

                            <BlogText>
                                Founder-built agencies operate differently from shops that white-label work to offshore teams.
                            </BlogText>

                            <ul className="space-y-3 my-4 text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>Direct accountability:</strong> The person you talk to writes your code. No translation loss through account managers.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>No requirements reinterpretation:</strong> Your spec does not get filtered through three layers of management before reaching the developer.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                    <span><strong>Reputation on the line:</strong> Founders cannot hide behind a corporate structure. Every project is attached to their name.</span>
                                </li>
                            </ul>

                            <BlogText>
                                At PandaCodeGen, <Link href="/about/hassan" className="text-cognac hover:underline">Hassan</Link> answers calls and writes code. Imran leads architecture and cutovers. You talk directly to the engineers building your site. See how we compare to other agencies in our <Link href="/blog/top-custom-web-development-agencies-usa-2026" className="text-cognac hover:underline">top custom web development agencies USA breakdown</Link>.
                            </BlogText>

                            {/* Bottom CTA */}
                            <div className="my-10 md:my-12 p-6 md:p-8 bg-charcoal text-white rounded-2xl text-center">
                                <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">PandaCodeGen, Founder-Built Agency</p>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">A Number Before Work Starts. A Guarantee After.</h3>
                                <p className="text-stone-300 mb-5 max-w-xl mx-auto">If your site loads in 3+ seconds, scores under 70 on PageSpeed, or costs $200+ per month in platform fees, you are leaving money on the table. <a href="/pricing" className="text-cognac hover:underline">Fixed pricing from $1,500</a>, 90+ PageSpeed guaranteed or full refund, full source code ownership.</p>
                                <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-cognac hover:bg-cognac/90 text-white font-bold rounded-full transition-all">Book a Free Discovery Call <ArrowRight className="w-5 h-5" /></CalModalButton>
                            </div>

                            <BlogHeader>Frequently Asked Questions About Website Developer Agencies</BlogHeader>

                        </div>

                        <FAQAccordion faqs={postFAQs} />

                        <div className="mt-8 mb-4">
                            <h2 className="text-xl font-bold text-charcoal mb-4">Related Articles</h2>
                            <div className="grid gap-3">
                                {[
                                    { href: "/blog/how-much-does-a-website-cost", label: "How Much Does a Website Cost in 2026? Real Pricing by Build Type" },
                                    { href: "/blog/cheap-web-developer", label: "Best Cheap Web Developers for Hire in 2026 (Without Getting Burned)" },
                                    { href: "/blog/website-rebuild-cost-2026", label: "How Much Does a Website Rebuild Cost in 2026?" },
                                    { href: "/blog/top-custom-web-development-agencies-usa-2026", label: "Top Custom Web Development Agencies in the USA (2026)" },
                                    { href: "/blog/wordpress-migration-cost", label: "How Much Does WordPress to Next.js Migration Cost?" },
                                    { href: "/pricing", label: "PandaCodeGen Fixed Pricing, Starter $1,500, Growth $3,500, Scale $5K+" }
                                ].map(link => (
                                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-cognac hover:underline">
                                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <RelatedPosts currentPostId="website-developer-agency" />

                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
