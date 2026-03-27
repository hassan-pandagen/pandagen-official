import { ArrowLeft, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const costFAQs = blogPosts.find(p => p.id === 'wordpress-vs-custom-code-real-cost-3-years')?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const SalesImpactAnimation = dynamic(() => import("@/components/blog/SalesImpactAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "WordPress vs Custom Code: The Real 3-Year Cost (With Numbers)",
    description: "WordPress costs $9,000 to $30,000 over 3 years when you add hosting, plugins, maintenance, and lost revenue. Custom code costs $5,000 to $15,000 total. Full breakdown.",
    alternates: {
        canonical: '/blog/wordpress-vs-custom-code-real-cost-3-years',
    },
    openGraph: {
        title: "WordPress vs Custom Code: The Real 3-Year Cost (With Numbers)",
        description: "WordPress costs $9,000 to $30,000 over 3 years when you add hosting, plugins, maintenance, and lost revenue. Custom code costs $5,000 to $15,000 total. Full breakdown.",
        type: "article",
        publishedTime: "2026-02-20",
        authors: ["Hassan"],
        url: "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "WordPress vs Custom Code: The Real 3-Year Cost (With Numbers)",
        description: "WordPress costs $9,000 to $30,000 over 3 years when you add hosting, plugins, maintenance, and lost revenue. Custom code costs $5,000 to $15,000 total. Full breakdown.",
    },
    keywords: ["wordpress vs custom code cost", "wordpress real cost", "custom website vs wordpress", "wordpress hidden costs", "website total cost of ownership"],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years#article",
            "headline": "WordPress vs Custom Code: The Real 3-Year Cost (With Numbers)",
            "description": "WordPress costs $9,000 to $30,000 over 3 years when you add hosting, plugins, maintenance, and lost revenue. Custom code costs $5,000 to $15,000 total. Full breakdown.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-02-20T00:00:00-05:00",
            "dateModified": "2026-03-10T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years" },
            "articleSection": "Cost Analysis",
            "keywords": ["wordpress vs custom code cost", "wordpress real cost", "custom website vs wordpress", "wordpress hidden costs", "website total cost of ownership"],
            "timeRequired": "PT12M",
            "wordCount": 2800,
            "about": [
                {"@type": "Thing", "name": "WordPress Total Cost of Ownership"},
                {"@type": "Thing", "name": "Custom Website Development Cost"},
                {"@type": "Thing", "name": "WordPress"},
                {"@type": "Thing", "name": "Next.js"}
            ],
            "inLanguage": "en-US",
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "WP Engine Pricing", "url": "https://wpengine.com/plans/" },
                { "@type": "CreativeWork", "name": "Kinsta WordPress Hosting Plans", "url": "https://kinsta.com/wordpress-hosting/" },
                { "@type": "CreativeWork", "name": "Vercel Pricing", "url": "https://vercel.com/pricing" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Ranking Signal", "url": "https://developers.google.com/search/docs/appearance/core-web-vitals" },
                { "@type": "CreativeWork", "name": "Wordfence Premium Pricing", "url": "https://www.wordfence.com/wordfence-signup/" },
                { "@type": "CreativeWork", "name": "Think With Google: Speed Affects Revenue", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "WordPress vs Custom Code: Real Cost Over 3 Years", "item": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years#webpage",
            "url": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years",
            "name": "WordPress vs Custom Code: The Real 3-Year Cost (With Numbers)",
            "description": "WordPress costs $9,000 to $30,000 over 3 years when you add hosting, plugins, maintenance, and lost revenue. Custom code costs $5,000 to $15,000 total. Full breakdown.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2026-02-20T00:00:00-05:00",
            "dateModified": "2026-03-10T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Gen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"],
            "contactPoint": { "@type": "ContactPoint", "contactType": "Customer Service", "email": "info@pandacodegen.com" },
            "description": "PandaCodeGen builds custom Next.js websites and e-commerce stores for businesses frustrated with slow WordPress sites and expensive templates. We guarantee 95 to 100/100 Google PageSpeed on every build.",
            "areaServed": "Worldwide",
            "foundingDate": "2026"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-vs-custom-code-real-cost-3-years#faq",
            "mainEntity": costFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function WordPressVsCustomCodeCostPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-20 md:pt-32 pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                    />

                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "WordPress vs Custom Code: Real Cost Over 3 Years", href: "/blog/wordpress-vs-custom-code-real-cost-3-years" }
                        ]}
                    />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            WordPress vs Custom Code: The <span className="font-serif italic text-cognac">Real Cost</span> Over 3 Years
                        </h1>

                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            We compared the full 3-year cost of WordPress versus custom coded websites, including hosting, plugins, maintenance, and security. Here&apos;s what the numbers look like.
                        </p>

                        <BlogAuthor
                            date="Feb 20, 2026"
                            readTime="12 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    <div className="mb-12">
                        <SalesImpactAnimation />
                    </div>

                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-12" data-speakable="true">
                        <h3 className="font-bold text-charcoal mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "WordPress looks cheap at $50/month but costs $8,000 to $15,000 over 3 years when you count hosting, plugins, maintenance, and security.",
                            "A custom Next.js site costs $8,000 to $15,000 to build once, then $0 to $240/year to run. It pays for itself in 18 to 24 months.",
                            "The hidden cost nobody talks about: slow WordPress sites lose 20 to 30% of organic traffic, translating to $50K to $150K/year in lost revenue.",
                            "After 3 years, custom coded sites are $10,000 to $25,000 cheaper in direct costs alone. Before counting the traffic and revenue difference."
                        ]} />
                    </div>

                    <div className="space-y-8">

                        <BlogText>
                            You built your WordPress site for $3,000. You pay $50/month for hosting. Simple math: $3,000 + ($50 × 36 months) = $4,800 over 3 years. Sounds reasonable.
                        </BlogText>

                        <BlogText>
                            <BlogHighlight>That number is wrong. It&apos;s off by 3 to 5×.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            We&apos;ve audited 40+ businesses switching from WordPress to custom coded sites. Every single one was shocked when we showed them what their WordPress site actually costs. Not what they thought it cost. What it actually costs.
                        </BlogText>

                        <BlogText>
                            This post is the full, honest breakdown. No marketing fluff. Just numbers.
                        </BlogText>

                        <BlogHeader>What Does WordPress Actually Cost Over 3 Years? (The Complete Breakdown)</BlogHeader>

                        <BlogText>
                            Let&apos;s go line by line. This is the real cost for a typical business WordPress site, not a hobby blog, but a site that&apos;s actually doing work.
                        </BlogText>

                        <div className="overflow-x-auto my-10">
                            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Cost Item</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 1</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 2</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 3</th>
                                        <th className="text-center px-4 py-3 font-semibold text-red-500 border-b border-stone-200">3-Year Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">Managed Hosting (WP Engine / Kinsta)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,800</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,800</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,800</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$5,400</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Premium Plugins (SEO, security, forms, cache, backup)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$800</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$800</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$800</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$2,400</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">Developer Maintenance (updates, conflicts, fixes)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,500</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,500</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$1,500</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$4,500</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Security Tools (Wordfence Premium, MalCare)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$250</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$250</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$250</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$750</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">Theme (premium theme or child theme)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$200</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$0</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$200</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Emergency Developer Fixes (avg 1-2/year)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$600</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$600</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$600</td>
                                        <td className="px-4 py-3 text-center font-bold text-red-500">$1,800</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="bg-stone-100">
                                        <td className="px-4 py-4 font-bold text-charcoal">TOTAL WordPress Cost</td>
                                        <td className="px-4 py-4 text-center font-bold text-red-500">$5,150</td>
                                        <td className="px-4 py-4 text-center font-bold text-red-500">$4,950</td>
                                        <td className="px-4 py-4 text-center font-bold text-red-500">$4,950</td>
                                        <td className="px-4 py-4 text-center font-bold text-red-600 text-base">$15,050</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <BlogText>
                            That&apos;s <BlogHighlight>$15,050 over 3 years</BlogHighlight>, and that&apos;s the conservative estimate assuming nothing goes seriously wrong. No major hack. No data loss. No catastrophic plugin conflict that breaks the site for 3 days. Just normal maintenance.
                        </BlogText>

                        <BlogText>
                            Add one security incident and you&apos;re looking at $18,000 to $25,000.
                        </BlogText>

                        <BlogHeader>What Does a Custom Next.js Site Cost Over 3 Years?</BlogHeader>

                        <BlogText>
                            Now let&apos;s look at the other side. A custom-built Next.js site, professionally done.
                        </BlogText>

                        <div className="overflow-x-auto my-10">
                            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Cost Item</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 1</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 2</th>
                                        <th className="text-center px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Year 3</th>
                                        <th className="text-center px-4 py-3 font-semibold text-charcoal border-b border-stone-200">3-Year Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">Build Cost (one-time, your site)</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$10,000</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$0</td>
                                        <td className="px-4 py-3 text-center text-stone-500">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-charcoal">$10,000</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Hosting (Vercel: Free for most sites)</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-green-700">$0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">CMS Subscription (Sanity free tier)</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-green-700">$0</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Security (zero plugins = zero attack surface)</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-green-700">$0</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-charcoal font-medium">Maintenance (no plugin updates needed)</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-green-700">$0</td>
                                    </tr>
                                    <tr className="bg-stone-50/50">
                                        <td className="px-4 py-3 text-charcoal font-medium">Content updates (edit yourself via CMS)</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center text-green-700">$0</td>
                                        <td className="px-4 py-3 text-center font-bold text-green-700">$0</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="bg-stone-100">
                                        <td className="px-4 py-4 font-bold text-charcoal">TOTAL Custom Site Cost</td>
                                        <td className="px-4 py-4 text-center font-bold text-charcoal">$10,000</td>
                                        <td className="px-4 py-4 text-center font-bold text-charcoal">$0</td>
                                        <td className="px-4 py-4 text-center font-bold text-charcoal">$0</td>
                                        <td className="px-4 py-4 text-center font-bold text-charcoal text-base">$10,000</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <BlogText>
                            Over 3 years: WordPress costs $15,050. Custom site costs $10,000. <BlogHighlight>The custom site saves you $5,050 in direct costs alone.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            And it gets better. In Year 2 and Year 3, the custom site costs <strong>zero dollars</strong> to run. WordPress costs $4,950/year. Every year.
                        </BlogText>

                        <BlogQuote>
                            By Year 5, the cost gap is $25,000+. The custom site paid for itself in Year 1 and has been running free ever since.
                        </BlogQuote>

                        <BlogHeader>Why Is WordPress Hosting So Expensive Compared to Custom Sites?</BlogHeader>

                        <BlogText>
                            This is the question everyone asks. If WordPress is &quot;free software,&quot; why does it cost $150-$400/month to host?
                        </BlogText>

                        <BlogText>
                            Because WordPress is resource-hungry. Every page load requires:
                        </BlogText>

                        <BlogList items={[
                            "WordPress software runs fresh on a web server for every single visit",
                            "Your content is fetched from a database on every single page load",
                            "All 20-30 active plugins fire simultaneously in the background",
                            "All of this happens before your visitor sees even the first word on the page",
                        ]} />

                        <BlogText>
                            Cheap hosts ($3-10/month) put 1,000 WordPress sites on the same server. They all fight for the same resources. Your site gets slow and unreliable.
                        </BlogText>

                        <BlogText>
                            Good hosts (WP Engine, Kinsta) give you dedicated resources. That costs $150-$400/month. And even then, you&apos;re still slow compared to a static site.
                        </BlogText>

                        <BlogText>
                            <strong>Custom Next.js sites work differently:</strong> Pages are pre-built at deploy time. Vercel stores them across 300+ global edge locations. When a visitor requests a page, they get a cached file instantly, no server processing, no database query, no plugin overhead.
                        </BlogText>

                        <BlogText>
                            Vercel can serve millions of page views for free because it&apos;s not running server logic on each request. <BlogHighlight>That&apos;s why it&apos;s free.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Are the Hidden WordPress Costs Nobody Talks About?</BlogHeader>

                        <BlogText>
                            The table above is the visible cost. Here are the hidden ones that don&apos;t show up in monthly invoices.
                        </BlogText>

                        <BlogText>
                            <strong>1. Your time dealing with WordPress problems.</strong>
                        </BlogText>

                        <BlogList items={[
                            "Plugin updates break something every 2-3 months",
                            "Site goes down unexpectedly, you spend 2-4 hours troubleshooting",
                            "Security warnings appear, you spend an afternoon dealing with them",
                            "Average: 4-8 hours per month managing WordPress issues",
                            "If your time is worth $100/hour: $400-$800/month in lost productivity"
                        ]} />

                        <BlogText>
                            <strong>2. One security incident wipes out years of savings.</strong>
                        </BlogText>

                        <BlogList items={[
                            "43% of all website hacks target WordPress (Sucuri 2024 report)",
                            "Average cost of a WordPress hack: $3,000-$10,000",
                            "Includes: Malware removal, data recovery, downtime costs, reputation damage",
                            "Security plugins reduce risk but don't eliminate it",
                            "One incident erases 3-5 years of hosting savings"
                        ]} />

                        <BlogText>
                            <strong>3. Slow speed costs you in Google rankings and lost revenue.</strong>
                        </BlogText>

                        <BlogList items={[
                            "Average WordPress site: 3.8 second load time, 40/100 PageSpeed",
                            "Google ranks faster sites 20-30 positions higher",
                            "If you rank on page 2 instead of page 1: 10× less traffic",
                            "For a $500K/year business: $50K-$150K in lost organic revenue annually",
                            "This is the cost nobody puts in the spreadsheet"
                        ]} />

                        <BlogQuote>
                            The real WordPress vs custom code comparison isn&apos;t $15,000 vs $10,000. It&apos;s $15,000 + $150,000 in lost revenue vs $10,000 + $0 in hosting + 3× the organic traffic.
                        </BlogQuote>

                        {/* Mid-Article CTA */}
                        <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">How much is WordPress actually costing you over 3 years?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We calculate your real 3-year cost (hosting, plugins, maintenance, lost conversions) live on the call and show you the custom build ROI.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">
                                    Get Free Cost Audit <ArrowRight className="w-4 h-4" />
                                </CalModalButton>
                        </div>

                        <BlogHeader>When Does the Custom Site Break Even vs WordPress?</BlogHeader>

                        <BlogText>
                            This is the question that decides everything. If the custom site costs $10,000 upfront and WordPress costs $5,000/year in recurring costs, when does the math flip?
                        </BlogText>

                        <BlogText>
                            Let&apos;s use real numbers:
                        </BlogText>

                        <BlogList items={[
                            "Custom site: $10,000 build cost + $0/year = $10,000 total",
                            "WordPress: $0 upfront + $5,000/year = $5,000 (Year 1), $10,000 (Year 2), $15,000 (Year 3)",
                            "Break-even: Exactly 2 years",
                            "After Year 2: Custom site is cheaper by $5,000/year and growing",
                            "After Year 5: Custom site has saved you $15,000 in direct costs"
                        ]} />

                        <BlogText>
                            <BlogHighlight>But that&apos;s the conservative, direct-cost-only calculation.</BlogHighlight> If you factor in lost revenue from slow speed (even a modest $2,000/month):
                        </BlogText>

                        <BlogList items={[
                            "Custom site: $10,000 + $0 recurring - $0 lost revenue = $10,000",
                            "WordPress Year 1: $5,000 + $24,000 lost revenue = $29,000 true cost",
                            "WordPress Year 2: $5,000 + $24,000 lost revenue = $29,000 true cost",
                            "Break-even including revenue: Month 4-5 (not Year 2)"
                        ]} />

                        <BlogText>
                            Once you include the revenue difference, the custom site pays for itself in <strong>4-5 months</strong>.
                        </BlogText>

                        <BlogHeader>What About Sites Doing Less Than $100K/Year? Is It Still Worth It?</BlogHeader>

                        <BlogText>
                            This is the honest answer: for very small businesses doing under $50K/year, the numbers are closer.
                        </BlogText>

                        <BlogText>
                            If you&apos;re doing $30,000/year, and a slow site costs you 20% of potential traffic, that&apos;s only $6,000/year in lost revenue. The custom site at $8,000-$10,000 still pays for itself, but in Year 2-3 rather than Year 1.
                        </BlogText>

                        <BlogText>
                            <strong>The threshold: If your business does $150K+/year,</strong> the custom site almost certainly pays for itself in Year 1 through a combination of reduced costs and increased traffic.
                        </BlogText>

                        <BlogText>
                            If you&apos;re under $150K, the break-even is still Year 1-2. Still worth it. Just less obviously so.
                        </BlogText>

                        <BlogHeader>Real Client Example: MyCustomPatches. WordPress to Next.js</BlogHeader>

                        <BlogText>
                            MyCustomPatches had a 10-year-old WordPress site. $150/month hosting (Kinsta). <a href="/blog/wordpress-killer" className="text-cognac hover:underline">30+ plugins</a>. 3.2 second load time. <a href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">40/100 PageSpeed on mobile</a>.
                        </BlogText>

                        <BlogText>
                            Their WordPress costs over 3 years:
                        </BlogText>

                        <BlogList items={[
                            "Hosting: $150/month × 36 months = $5,400",
                            "Premium plugins: ~$600/year × 3 = $1,800",
                            "Developer fixes and maintenance: ~$1,200/year × 3 = $3,600",
                            "3-Year WordPress total: $10,800"
                        ]} />

                        <BlogText>
                            We migrated them to a custom Next.js site. The result:
                        </BlogText>

                        <BlogList items={[
                            "Build cost: One-time investment",
                            "Hosting: $0/month (Vercel free tier)",
                            "Plugins: $0 (zero plugins needed)",
                            "Maintenance: $0 (no plugin conflicts, no updates)",
                            "Load time: 3.2s → 0.7s",
                            "PageSpeed: 40 → 100/100"
                        ]} />

                        <BlogText>
                            In Year 2 and Year 3, their website infrastructure costs nothing. Zero. The 3-year savings are real and compounding. See the full case study at{" "}
                            <Link href="/work/mycustompatches" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">
                                /work/mycustompatches
                            </Link>.
                        </BlogText>

                        <BlogHeader>What Does WordPress Give You That Justifies the Extra Cost?</BlogHeader>

                        <BlogText>
                            This is the fair question. What does WordPress actually give you for $15,000 over 3 years?
                        </BlogText>

                        <BlogList items={[
                            "A familiar admin dashboard (but custom sites have better ones)",
                            "A massive plugin ecosystem (but plugins are what cause all the problems)",
                            "A huge developer community (but most WordPress developers are cheap for a reason)",
                            "Easy to DIY (but the savings vanish when you need developer help)"
                        ]} />

                        <BlogText>
                            The honest answer: <strong>WordPress is better if you want to self-manage a simple website without developer involvement, and speed/performance isn&apos;t critical to your business.</strong>
                        </BlogText>

                        <BlogText>
                            If you run a small personal blog. A local community group. A side project.
                        </BlogText>

                        <BlogText>
                            But if your website is the main driver of leads, revenue, or brand credibility for a real business? <BlogHighlight>WordPress&apos;s true cost is 3-5× higher than custom code over 3 years, and that&apos;s before you count the revenue difference.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Should You Do With This Information?</BlogHeader>

                        <BlogText>
                            Step 1: Calculate your actual current WordPress costs.
                        </BlogText>

                        <BlogList items={[
                            "Open your email and search for hosting invoices",
                            "Add up every plugin subscription in the last 12 months",
                            "Count how many times you paid a developer in the last year",
                            "Add it all up. You&apos;ll probably be surprised."
                        ]} />

                        <BlogText>
                            Step 2: Test your site speed at <strong>pagespeed.web.dev</strong>. If your Mobile Score is below 70, estimate how much traffic you&apos;re losing to faster competitors. Our <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress vs Next.js comparison</Link> shows exactly where that gap comes from.
                        </BlogText>

                        <BlogText>
                            Step 3: Compare the 3-year numbers. Your actual WordPress costs vs a custom site at $8,000-$15,000 one-time.
                        </BlogText>

                        <BlogText>
                            For most businesses doing over $150K/year, the custom site wins on direct costs alone within 2 years, and wins on total business impact (traffic + revenue + time) within the first year. See what a custom build includes and how we scope projects on our <Link href="/services/custom-engineering" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">custom engineering service page</Link>.
                        </BlogText>

                        <BlogText>
                            You can also read our <Link href="/services/wordpress-migration" className="text-charcoal font-bold underline hover:text-stone-600 transition-colors">WordPress Migration service page</Link> to see exactly how the transition works. What we migrate, how we protect your SEO, and what the timeline looks like.
                        </BlogText>
                    </div>

                    {/* Key Takeaways */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>WordPress costs $15,000+ over 3 years</strong>: Hosting, plugins, maintenance, and emergency fixes add up to far more than the $50/month most owners expect.</li>
                            <li><strong>A custom Next.js site costs $0/year to run after the build</strong>: Free Vercel hosting, no plugin fees, and no maintenance developer means your only cost is the one-time investment.</li>
                            <li><strong>The break-even point is 18-24 months on direct costs</strong>, and as early as 4-5 months when you factor in recovered revenue from faster load times.</li>
                            <li><strong>Slow WordPress sites silently lose $50K-$150K/year in revenue</strong>: The biggest cost is not on your invoices but in the organic traffic your slow speed is handing to competitors.</li>
                        </ol>
                    </section>

                    {/* FAQ Section */}
                    {costFAQs.length > 0 && <FAQAccordion faqs={costFAQs} />}

                    {/* CTA Section */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to See Your Real 3-Year Cost?</h3>
                        <p className="text-stone-600 mb-6">
                            We&apos;ll audit your current WordPress costs, add up what you&apos;re actually paying, and show you the honest comparison. Free, no sales pitch.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">
                                Schedule Free Cost Audit <ArrowRight className="w-5 h-5" />
                            </CalModalButton>
                    </div>

                    {/* Related Posts */}
                    <RelatedPosts currentPostId="wordpress-vs-custom-code-real-cost-3-years" category="Cost Analysis" />

                </article>
            </main>
            <Footer />
        </>
    );
}
