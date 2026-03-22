import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, XCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const migrationCostFAQs = blogPosts.find(p => p.id === "wordpress-migration-cost")?.faqs ?? [];

const RelatedPosts = dynamic(() => import("@/components/ui/RelatedPosts"));
const PageSpeedAnimation = dynamic(() => import("@/components/blog/PageSpeedAnimation"));
const CalModalButton = dynamic(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: { absolute: "How Much Does a WordPress to Next.js Migration Cost in 2026? | PandaCodeGen" },
    description: "WordPress to Next.js migration costs $3,000 to $25,000 depending on site complexity. Here is the full price breakdown by project type, what drives cost up, and how to calculate your ROI.",
    alternates: {
        canonical: "/blog/wordpress-migration-cost",
    },
    keywords: [
        "wordpress to nextjs migration cost",
        "how much does wordpress migration cost",
        "wordpress next.js migration price",
        "migrate wordpress to nextjs cost",
        "wordpress migration agency cost",
        "nextjs migration roi",
        "wordpress to custom website cost",
        "wordpress headless migration cost",
        "replace wordpress with nextjs",
        "wordpress migration budget"
    ],
    openGraph: {
        title: "How Much Does a WordPress to Next.js Migration Cost in 2026?",
        description: "The full price breakdown: from $3,000 DIY-assisted builds to $25,000+ enterprise migrations. What drives cost, what is included, and when the ROI makes sense.",
        type: "article",
        publishedTime: "2026-03-22",
        modifiedTime: "2026-03-22",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/wordpress-migration-cost",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "How Much Does a WordPress to Next.js Migration Cost in 2026?",
        description: "Full price breakdown by project type. What drives cost up. ROI calculator logic. When migration pays for itself.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#article",
            "headline": "How Much Does a WordPress to Next.js Migration Cost in 2026?",
            "description": "WordPress to Next.js migration costs $3,000 to $25,000 depending on site complexity. Here is the full price breakdown by project type, what drives cost up, and how to calculate your ROI.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2026-03-22T00:00:00-05:00",
            "dateModified": "2026-03-22T00:00:00-05:00",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost" },
            "articleSection": "WordPress",
            "keywords": ["wordpress to nextjs migration cost", "wordpress migration price", "nextjs migration roi", "wordpress headless migration cost", "replace wordpress with nextjs"],
            "wordCount": 2200,
            "timeRequired": "PT9M",
            "inLanguage": "en-US",
            "about": [
                { "@type": "Thing", "name": "WordPress Migration Cost" },
                { "@type": "Thing", "name": "Next.js Development Cost" },
                { "@type": "Thing", "name": "Website Migration ROI" },
                { "@type": "Thing", "name": "WordPress to Headless CMS" }
            ],
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "[data-speakable='true']"]
            },
            "citation": [
                { "@type": "CreativeWork", "name": "WordPress Market Share 2026", "url": "https://w3techs.com/technologies/details/cm-wordpress" },
                { "@type": "CreativeWork", "name": "Google Core Web Vitals Overview", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Next.js Official Documentation", "url": "https://nextjs.org/docs" },
                { "@type": "CreativeWork", "name": "Deloitte: Milliseconds Make Millions", "url": "https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" },
                { "@type": "CreativeWork", "name": "Google Think: Page Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "WPScan Vulnerability Database", "url": "https://wpscan.com/wordpresses" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#faq",
            "mainEntity": migrationCostFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "WordPress Migration Cost", "item": "https://www.pandacodegen.com/blog/wordpress-migration-cost" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/wordpress-migration-cost#webpage",
            "url": "https://www.pandacodegen.com/blog/wordpress-migration-cost",
            "name": "How Much Does a WordPress to Next.js Migration Cost in 2026?",
            "description": "Full price breakdown: $3,000 to $25,000 depending on site complexity. What drives cost up. ROI calculation. When migration pays for itself.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "datePublished": "2026-03-22T00:00:00-05:00",
            "dateModified": "2026-03-22T00:00:00-05:00",
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "url": "https://www.pandacodegen.com",
            "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
            "foundingDate": "2026",
            "description": "PandaCodeGen builds custom Next.js websites that replace slow WordPress and Shopify stores. Sites load under 1 second, score 100/100 on Google PageSpeed, and cost $20/month to run.",
            "areaServed": "Worldwide",
            "sameAs": [
                "https://www.linkedin.com/company/pandacodegen",
                "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
                "https://twitter.com/pandacodegen"
            ]
        }
    ]
};

export default function WordPressMigrationCostPage() {
    return (
        <main className="bg-paper min-h-screen overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Header />

            <section className="relative pt-40 pb-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "WordPress Migration Cost" }
                    ]} />
                    <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-charcoal text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold mb-4">
                            <DollarSign className="w-3 h-3" /> WordPress
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
                            How Much Does a WordPress to Next.js Migration{" "}
                            <span className="font-serif italic text-cognac">Cost in 2026?</span>
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed mb-6" data-speakable="true">
                            The honest answer is $3,000 to $25,000. The range is wide because a 10-page brochure site and a 500-page WooCommerce store with custom integrations are completely different projects. This breakdown explains exactly what drives migration cost, what tier your site falls into, and how to calculate whether migration makes financial sense for your business.
                        </p>
                        <BlogAuthor
                            date="Mar 22, 2026"
                            readTime="9 min read"
                            bio="Hassan has helped businesses migrate off WordPress to custom Next.js sites that load under 1 second and score 100/100 on Google PageSpeed. Every migration includes full SEO preservation and zero-downtime launch."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 pb-6">
                <div className="max-w-3xl mx-auto">
                    <PageSpeedAnimation />
                </div>
            </section>

            <section className="px-6 pb-20">
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    {/* Executive Summary */}
                    <div className="mb-10 p-6 bg-orange-50 border border-orange-200 rounded-2xl" data-speakable="true">
                        <p className="font-bold text-charcoal mb-3 text-sm uppercase tracking-wide">Cost Summary</p>
                        <ul className="space-y-2 text-sm text-stone-700">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Basic business site (5 to 15 pages, no custom features): $3,000 to $8,000.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Mid-complexity site (custom post types, blog, contact forms, integrations): $8,000 to $15,000.</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> WooCommerce or large content site (500 pages, custom checkout, API integrations): $15,000 to $25,000+.</li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> Most clients recover the full migration cost within 12 to 18 months from lower hosting, plugin, and maintenance costs alone.</li>
                        </ul>
                    </div>

                    <BlogText>
                        You are paying $200 to $500 per month to keep your WordPress site running. Hosting, plugins, security scanning, developer retainers for updates that break things. The PageSpeed score is 45 on mobile. Organic traffic has been flat for 18 months.
                    </BlogText>
                    <BlogText>
                        The question is not whether to migrate. The question is what it costs and when you get the money back.
                    </BlogText>
                    <BlogText>
                        Here is every cost factor, broken down by project type, with real numbers.
                    </BlogText>

                    <BlogHeader id="why-migrate">Why Are Businesses Migrating Off WordPress?</BlogHeader>
                    <BlogText>
                        WordPress powers{" "}
                        <a href="https://w3techs.com/technologies/details/cm-wordpress" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">43% of all websites</a>.
                        It is the most-used CMS in the world. It is also the most-hacked, the most plugin-dependent, and the slowest when it comes to Core Web Vitals at scale.
                    </BlogText>
                    <BlogText>
                        The migration case comes down to three things: performance, cost, and security. A WordPress site with a standard plugin stack scores 35 to 60 on Google PageSpeed Mobile. A custom Next.js site scores 95 to 100. Google has used Core Web Vitals as a ranking signal since 2021. The gap in PageSpeed scores correlates directly with a gap in organic rankings.
                    </BlogText>
                    <BlogText>
                        On the cost side: WordPress hosting, premium plugins, and maintenance add up to $3,000 to $12,000 per year for a serious business site. A Next.js site on Vercel costs $0 to $240 per year in hosting with no plugin overhead. The ongoing cost difference pays for migration within 12 to 36 months depending on your current spend.
                    </BlogText>
                    <BlogText>
                        On security:{" "}
                        <a href="https://wpscan.com/wordpresses" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">WPScan</a>{" "}
                        tracks over 50,000 documented vulnerabilities across WordPress core, themes, and plugins. Next.js has no plugin attack surface because it has no plugin system.
                    </BlogText>

                    <BlogHeader id="cost-tiers">What Are the Three Cost Tiers for WordPress Migration?</BlogHeader>
                    <BlogText>
                        Migration cost is driven by four variables: number of pages, custom functionality, data migration complexity, and SEO preservation work. Here is how those variables translate into price tiers.
                    </BlogText>

                    <div className="my-8 overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-stone-50 border border-stone-200">
                                    <th className="text-left p-3 font-semibold text-stone-700">Tier</th>
                                    <th className="text-left p-3 font-semibold text-stone-700">Site Type</th>
                                    <th className="text-right p-3 font-semibold text-cognac">Cost Range</th>
                                    <th className="text-right p-3 font-semibold text-stone-700">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                                {[
                                    ["Basic", "5 to 15 pages, no custom features", "$3,000 to $8,000", "2 to 3 weeks"],
                                    ["Mid", "15 to 50 pages, blog, forms, integrations", "$8,000 to $15,000", "3 to 5 weeks"],
                                    ["Complex", "50+ pages, WooCommerce, custom post types", "$15,000 to $25,000", "5 to 8 weeks"],
                                    ["Enterprise", "500+ pages, multiple integrations, custom APIs", "$25,000+", "8 to 16 weeks"],
                                ].map(([tier, type, cost, time]) => (
                                    <tr key={tier} className="border border-stone-100 hover:bg-stone-50">
                                        <td className="p-3 text-charcoal font-bold">{tier}</td>
                                        <td className="p-3 text-stone-600">{type}</td>
                                        <td className="p-3 text-right text-cognac font-bold">{cost}</td>
                                        <td className="p-3 text-right text-stone-500">{time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <BlogHeader id="what-drives-cost">What Drives Migration Cost Up?</BlogHeader>
                    <BlogText>
                        The line items that separate a $5,000 migration from a $20,000 one are predictable. Every quote you receive should be justifiable against these factors.
                    </BlogText>
                    <BlogList items={[
                        "Custom post types and taxonomies: WordPress custom post types (portfolio, team members, testimonials, events) need to be rebuilt as typed data structures in Next.js. Each custom post type adds 4 to 12 hours of build time.",
                        "WooCommerce: A full WooCommerce migration is effectively a separate e-commerce project. Product catalog, checkout flow, order management, and payment gateway integrations all need to be rebuilt or replaced with a headless solution like Shopify or Stripe. Adds $5,000 to $15,000 to the base cost.",
                        "Number of pages: Migrating content is not just copy-paste. Every page needs SEO metadata, canonical URL mapping, schema markup, and redirect verification. A 200-page blog migration adds 20 to 40 hours of content migration work.",
                        "Third-party integrations: CRM connections (HubSpot, Salesforce), email marketing (Mailchimp, ActiveCampaign), booking systems, and payment processors all need to be rebuilt as API integrations. Each integration adds 4 to 16 hours.",
                        "Redirect mapping: Every changed URL needs a 301 redirect to preserve SEO value. A 100-page site needs 100+ redirects verified. Auditing, mapping, and testing redirects adds 8 to 20 hours on larger sites.",
                        "Design work: If you are rebuilding the visual design (not just porting existing design), add 20 to 60 hours of UI design and component building.",
                    ]} />

                    <BlogHeader id="what-is-included">What Should Be Included in Any Migration Quote?</BlogHeader>
                    <BlogText>
                        Before you accept a quote, verify these items are explicitly included. Agencies that exclude them will charge separately for each. For each item below, the "If skipped" line tells you what it actually costs your business.
                    </BlogText>

                    <div className="space-y-3 my-6">
                        {[
                            {
                                title: "Full URL audit and 301 redirect mapping for every existing page",
                                what: "Every page on your old site gets a permanent forwarding address to its equivalent new URL. Think of it as filing a change-of-address notice with Google for every single page.",
                                skip: "Google treats your new site as a completely unknown website. Every ranking you have built over years resets to zero on launch day. Recovery takes 3 to 12 months.",
                            },
                            {
                                title: "Metadata migration: title tags, meta descriptions, and social share tags",
                                what: "These are the headline and description text Google shows for your pages in search results, and how your pages look when someone shares them on LinkedIn or Facebook. Your current metadata was written to rank. It needs to carry over exactly.",
                                skip: "Google shows auto-generated text in your search listings. Social shares look broken. Your existing click-through rates drop even if your rankings hold.",
                            },
                            {
                                title: "Image optimisation: modern formats, correct sizing, load-on-scroll",
                                what: "Images are converted to faster formats (roughly half the file size) and set to load only when the visitor scrolls to them instead of all at once. This alone accounts for 30 to 60% of typical PageSpeed improvements.",
                                skip: "You paid for a migration and kept the speed problem. Unoptimised images are the single biggest cause of slow mobile scores. Your PageSpeed score on the new site looks no better than the old one.",
                            },
                            {
                                title: "Schema markup: structured data for Google",
                                what: "Hidden code that tells Google exactly what your business is, what each page is about, and how to display enhanced results in search (star ratings, FAQ dropdowns, breadcrumb paths). Competitors with schema get more visual space in search results than competitors without it.",
                                skip: "Google has to guess at your content. You miss rich result eligibility. Competitors with proper schema get larger, more visible search listings for the same keywords you are targeting.",
                            },
                            {
                                title: "Google Search Console setup and sitemap submission post-launch",
                                what: "Google Search Console is a free Google tool that shows you which pages are indexed, what keywords are bringing visitors, and alerts you to any errors. The sitemap is a file that lists every URL on your new site so Google can find them quickly. Without submission, Google has to discover your new pages by crawling the web on its own schedule.",
                                skip: "Google may take 6 to 12 weeks to find and index your new pages on its own. During that window, new pages rank for nothing and organic traffic to new content is zero. For a business that relies on search traffic, this is a significant revenue gap.",
                            },
                            {
                                title: "Core Web Vitals audit before handover (target: 90+ on all three metrics)",
                                what: "A measured test of your site using Google's official speed tools before you receive it. You get a documented PageSpeed score and confirmation the three key metrics (load time, responsiveness, visual stability) all pass Google's threshold.",
                                skip: "You launch, then discover a performance problem, then negotiate who pays to fix it. The audit before handover is your contractual guarantee that the migration delivered what was promised.",
                            },
                            {
                                title: "Zero-downtime DNS cutover: new site live before old site goes down",
                                what: "The technical switch from your old hosting to your new server is done in a specific order so visitors never see an error, blank page, or downtime during the changeover. The new site is tested live before the old one is turned off.",
                                skip: "Your site can go offline for minutes to hours during the switch. Every minute of downtime loses leads. An outage during business hours is also a negative signal Google records in its crawl data.",
                            },
                            {
                                title: "30-day post-launch monitoring for crawl errors and ranking stability",
                                what: "The first 30 days after a migration are when problems surface: a redirect that was missed, a page Google cannot access, a ranking that dropped unexpectedly. Active monitoring means these are caught and fixed within days instead of months.",
                                skip: "A single missed redirect on a high-traffic page can cause that page to lose all rankings. Without monitoring, you may not notice for weeks. At that point, recovery from a 3-month ranking loss takes another 3 to 6 months.",
                            },
                        ].map(item => (
                            <div key={item.title} className="p-4 border border-stone-100 rounded-xl bg-stone-50">
                                <div className="flex gap-3 items-start mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-cognac mt-0.5 shrink-0" />
                                    <p className="font-semibold text-charcoal text-sm">{item.title}</p>
                                </div>
                                <p className="text-stone-600 text-sm ml-8">{item.what}</p>
                                <div className="flex gap-2 items-start mt-2 ml-8">
                                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                    <p className="text-red-700 text-xs"><span className="font-semibold">If skipped:</span> {item.skip}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mid-Article CTA */}
                    <div className="my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                        <p className="font-bold text-charcoal mb-2">What will your migration cost?</p>
                        <p className="text-stone-600 mb-4 text-sm">We review your current site and give you a precise quote with full line-item breakdown. Free, no obligation, 24-hour turnaround.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-all">
                            Get a Free Migration Quote <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    <BlogHeader id="agency-vs-freelance">Agency vs Freelancer vs Boutique Studio: Which Is Right?</BlogHeader>
                    <BlogText>
                        The same migration can cost $5,000 with a freelancer, $15,000 with a boutique studio, or $40,000 with a full-service agency. The difference is not always quality. It is overhead, risk management, and what happens when something goes wrong.
                    </BlogText>
                    <BlogList items={[
                        "Freelancer ($3,000 to $12,000): Cheapest option. Risk is highest because you depend on one person. No process guarantees. Good for basic sites where the scope is completely clear and the stakes are low.",
                        "Boutique studio ($8,000 to $25,000): Small specialist teams (2 to 5 people) focused on a specific stack. PandaCodeGen is in this category: Next.js specialists who only do what they are expert at. Better quality control than freelancers, more personal attention than large agencies, faster than either.",
                        "Full-service agency ($20,000 to $80,000+): Highest cost, most process, most overhead. Appropriate for enterprise projects with compliance requirements, multiple stakeholder approvals, and dedicated project management. Often slower than boutique studios due to internal layers.",
                    ]} />
                    <BlogQuote>
                        The right choice is not the cheapest. It is the team whose previous work most closely matches your project type and whose process explicitly addresses SEO preservation.
                    </BlogQuote>

                    <BlogHeader id="roi-calculation">How Do You Calculate Migration ROI?</BlogHeader>
                    <BlogText>
                        Migration ROI comes from three sources: reduced ongoing costs, higher organic traffic from better PageSpeed scores, and increased conversion rates from faster load times.
                    </BlogText>
                    <BlogText>
                        On cost savings: a typical WordPress business site costs $200 to $600/month in hosting, plugin licenses, security scanning, and maintenance retainers. A Next.js site on Vercel costs $0 to $20/month. Annual saving: $2,400 to $7,200 per year.
                    </BlogText>
                    <BlogText>
                        On traffic: improving PageSpeed Mobile from 45 to 95 typically corresponds to a 15 to 40% improvement in organic search visibility over 3 to 6 months, based on observed results across client migrations. Google directly rewards Core Web Vitals improvement in its ranking algorithm as confirmed in their{" "}
                        <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Core Web Vitals documentation</a>.
                    </BlogText>
                    <BlogText>
                        On conversions:{" "}
                        <a href="https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Deloitte research</a>{" "}
                        found a 0.1-second improvement in load time increases conversion rates by 8%. Moving from a 3.5-second WordPress load to a 0.8-second Next.js load is a 2.7-second improvement, which corresponds to a 20 to 30% conversion rate lift for most sites.
                    </BlogText>
                    <BlogText>
                        Quick ROI model: take your current annual WordPress operating cost, add 20% of your current annual organic revenue (conservative estimate of traffic and conversion improvement), and compare the sum to migration cost. Most business sites with $5,000 or more in annual operating costs recover a $10,000 migration within 18 months. To see what those PageSpeed gains look like in practice, read our guide on <Link href="/blog/how-to-achieve-100-pagespeed" className="text-cognac hover:underline">achieving 100/100 PageSpeed scores</Link>.
                    </BlogText>

                    <BlogHeader id="hidden-costs">What Hidden Costs Should You Watch For?</BlogHeader>
                    <BlogText>
                        Quotes that look low often exclude these items. Ask about each one explicitly before signing.
                    </BlogText>
                    <BlogList items={[
                        "Content editing during migration: if your content needs rewriting, updating, or restructuring during migration, this is billed separately by most studios.",
                        "Headless CMS setup: if you want editors to update content without a developer, setting up Sanity or Contentful adds $500 to $2,000 depending on content model complexity.",
                        "Email and form infrastructure: replacing WordPress contact forms and transactional email (usually handled by plugins) with server-side API routes and services like Resend adds 4 to 8 hours.",
                        "Ongoing maintenance contract: unlike WordPress where plugins need constant updates and security patches, Next.js sites need minimal maintenance. But make sure you know what post-launch support looks like and what it costs.",
                    ]} />

                    <BlogHeader id="when-not-to-migrate">When Does a Migration NOT Make Sense?</BlogHeader>
                    <BlogText>
                        Migration is not always the right answer. There are cases where staying on WordPress makes more sense.
                    </BlogText>
                    <BlogList items={[
                        "You have a large editorial team who depend on the WordPress admin interface and have no budget or appetite to learn a new CMS.",
                        "Your site is primarily a content operation with hundreds of non-technical contributors. WordPress gutenberg editor is genuinely better for this use case than most developer-first alternatives.",
                        "You are operating on a very tight budget and your current site is performing adequately. A $10,000 migration does not make sense if your current costs are $50/month and organic traffic is healthy.",
                        "Your business model is primarily WordPress-dependent (WordPress development agency, WordPress theme/plugin developer). Your clients expect you to know WordPress.",
                    ]} />
                    <BlogText>
                        If none of these apply, and your site is slow, expensive to maintain, and underperforming on organic search, migration is almost certainly the right move. The question is timing and budget, not whether.
                    </BlogText>

                    <BlogHeader id="pandacodegen-migration">What Does a PandaCodeGen Migration Include?</BlogHeader>
                    <BlogText>
                        Our{" "}
                        <Link href="/services/wordpress-migration" className="text-cognac hover:underline font-medium">WordPress migration service</Link>{" "}
                        covers the full scope: audit, architecture, build, SEO preservation, launch, and 30-day monitoring. We guarantee your new site will score at least 90/100 on Google PageSpeed Mobile, or we continue working until it does.
                    </BlogText>
                    <BlogText>
                        Every migration includes a full URL-to-redirect map, schema markup implementation, Vercel deployment with edge caching, and a detailed handover document. We also cover the migration process step by step in our post on{" "}
                        <Link href="/blog/how-to-migrate-wordpress-to-nextjs" className="text-cognac hover:underline font-medium">how to migrate WordPress to Next.js without losing SEO</Link>.
                    </BlogText>
                    <BlogText>
                        For context on what the new site will outperform, read our{" "}
                        <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline font-medium">breakdown of how WordPress plugins destroy PageSpeed</Link>{" "}
                        and{" "}
                        <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline font-medium">the full WordPress vs Next.js comparison</Link>.
                    </BlogText>

                    {/* Bottom CTA */}
                    <div className="my-10 p-8 bg-charcoal text-white rounded-2xl text-center">
                        <TrendingUp className="w-8 h-8 text-cognac mx-auto mb-3" />
                        <p className="font-bold text-xl mb-2">Get Your Migration Quote Today</p>
                        <p className="text-stone-300 mb-5 text-sm max-w-md mx-auto">We review your current site, identify all scope factors, and give you a precise quote with full line-item breakdown. Free discovery call, 24-hour turnaround.</p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-orange-600 transition-all">
                            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
                        </CalModalButton>
                    </div>

                    <BlogHeader id="faq">Frequently Asked Questions</BlogHeader>
                    <FAQAccordion faqs={migrationCostFAQs} />

                    <RelatedPosts currentPostId="wordpress-migration-cost" />

                </article>
            </section>

            <Footer />
        </main>
    );
}
