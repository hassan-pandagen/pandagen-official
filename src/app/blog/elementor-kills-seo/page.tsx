import { ArrowLeft, Calendar, Clock, ArrowRight, TrendingDown, RefreshCw } from "lucide-react";
import Link from "next/link";
import lazyLoad from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, BlogAuthor } from "@/components/ui/BlogStyles";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

const postFAQs = blogPosts.find(p => p.id === "elementor-kills-seo")?.faqs ?? [];

const RelatedPosts = lazyLoad(() => import("@/components/ui/RelatedPosts"));
const SEORankingAnimation = lazyLoad(() => import("@/components/blog/SEORankingAnimation"));
const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

export const metadata: Metadata = {
    title: "Does Elementor Kill SEO? We Audited 500 WordPress Sites",
    description: "Average Elementor site scores 38/100 on mobile. See the Core Web Vitals, DOM bloat, and ranking loss across 500 audited WordPress sites.",
    alternates: { canonical: "/blog/elementor-kills-seo" },
    keywords: ["elementor seo", "elementor slow", "elementor kills rankings", "page builder seo impact", "elementor pagespeed score", "wordpress page builder performance"],
    openGraph: {
        title: "Does Elementor Kill SEO? We Audited 500 WordPress Sites",
        description: "Average Elementor site scores 38/100 on mobile. See the Core Web Vitals, DOM bloat, and ranking loss across 500 audited WordPress sites.",
        type: "article",
        publishedTime: "2025-12-28",
        authors: ["Hassan Jamal"],
        url: "https://www.pandacodegen.com/blog/elementor-kills-seo",
        images: [{ url: "https://www.pandacodegen.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Does Elementor Kill SEO? We Audited 500 WordPress Sites",
        description: "Average Elementor site scores 38/100 on mobile. See the Core Web Vitals, DOM bloat, and ranking loss across 500 audited WordPress sites.",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#article",
            "headline": "Does Elementor Kill SEO? We Audited 500 WordPress Sites",
            "description": "Average Elementor site scores 38/100 on mobile. See the Core Web Vitals, DOM bloat, and ranking loss across 500 audited WordPress sites.",
            "image": "https://www.pandacodegen.com/og-image.jpg",
            "datePublished": "2025-12-28T00:00:00-05:00",
            "dateModified": "2026-04-20T00:00:00-05:00",
            "author": {
                "@type": "Person",
                "@id": "https://www.pandacodegen.com/#/schema/person/hassan",
                "name": "Hassan Jamal",
                "jobTitle": "Founder and Lead Engineer",
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
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo" },
            "articleSection": "Performance",
            "keywords": ["elementor seo", "elementor pagespeed", "page builder performance", "wordpress page builder seo", "elementor rankings"],
            "timeRequired": "PT6M",
            "wordCount": 1500,
            "about": [
                { "@type": "Thing", "name": "Elementor" },
                { "@type": "Thing", "name": "WordPress Page Builder SEO Impact" },
                { "@type": "Thing", "name": "Google PageSpeed Score" },
                { "@type": "Thing", "name": "Core Web Vitals" }
            ],
            "inLanguage": "en-US",
            "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] },
            "citation": [
                { "@type": "CreativeWork", "name": "Google Core Web Vitals", "url": "https://web.dev/vitals/" },
                { "@type": "CreativeWork", "name": "Chrome UX Report", "url": "https://developer.chrome.com/docs/crux/" },
                { "@type": "CreativeWork", "name": "Google PageSpeed Insights", "url": "https://pagespeed.web.dev/" },
                { "@type": "CreativeWork", "name": "Google Search Console. Page Experience", "url": "https://support.google.com/webmasters/answer/10218333" },
                { "@type": "CreativeWork", "name": "Think With Google. Speed Benchmarks", "url": "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" },
                { "@type": "CreativeWork", "name": "Next.js Performance Optimisation", "url": "https://nextjs.org/docs/app/building-your-application/optimizing" }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#breadcrumb",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pandacodegen.com/blog" },
                { "@type": "ListItem", "position": 3, "name": "Is Elementor Killing Your Google Rankings?", "item": "https://www.pandacodegen.com/blog/elementor-kills-seo" }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#webpage",
            "url": "https://www.pandacodegen.com/blog/elementor-kills-seo",
            "name": "Does Elementor Kill SEO? We Audited 500 WordPress Sites",
            "description": "Average Elementor site scores 38/100 on mobile. See the Core Web Vitals, DOM bloat, and ranking loss across 500 audited WordPress sites.",
            "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
            "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/og-image.jpg" },
            "datePublished": "2025-12-28T00:00:00-05:00",
            "dateModified": "2026-04-20T00:00:00-05:00",
            "breadcrumb": { "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#breadcrumb" },
            "inLanguage": "en-US"
        },
        {
            "@type": "Organization",
            "@id": "https://www.pandacodegen.com/#organization",
            "name": "PandaCodeGen",
            "alternateName": "Panda Code Gen",
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
            "@id": "https://www.pandacodegen.com/blog/elementor-kills-seo#faq",
            "mainEntity": postFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
        }
    ]
};

export default function ElementorKillsSEOPage() {
    return (
        <>
            <Header />
            <main className="bg-paper min-h-screen selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative text-charcoal pt-16 md:pt-32 pb-10 md:pb-20">
                <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>
                <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs px-8 py-10 md:px-14">

                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: "Is Elementor Killing Your Google Rankings?", href: "/blog/elementor-kills-seo" }
                    ]} />

                    <Link href="/blog" className="inline-flex items-center gap-2 text-charcoal hover:text-stone-700 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-charcoal text-xs font-bold uppercase tracking-wider mb-6">
                            <TrendingDown className="w-3 h-3" />
                            Performance · SEO
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-charcoal">
                            Elementor Kills Your SEO:{" "}
                            <span className="font-serif italic text-cognac">We Audited 500 Sites</span>{" "}
                            (Average Score: 38/100)
                        </h1>
                        <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                            We audited 500 Elementor sites to measure exactly how page builders affect Core Web Vitals and Google rankings. Here&apos;s what the data revealed and what alternatives are available.
                        </p>
                        <BlogAuthor
                            date="Mar 10, 2026"
                            readTime="6 min read"
                            bio="Every second of slow load time costs you customers and Google rankings. Hassan has helped businesses double their conversions with custom coded websites that load under 1 second and rank on Google's first page. No templates, no bloat, no plugins."
                            linkedIn="https://www.linkedin.com/in/hassan-jamal-713ba6228/"
                        />
                    </div>

                    {/* Animation */}
                    <div className="mb-12"><SEORankingAnimation /></div>

                    {/* Executive Summary */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-8 md:mb-12" data-speakable="true">
                        <h2 className="font-bold text-charcoal mb-4 text-base">Executive Summary</h2>
                        <BlogList items={[
                            "Across 500 Elementor sites we audited, the average Mobile PageSpeed score is 38/100, deep in Google's red zone.",
                            "Elementor adds 300 to 500KB of CSS/JS to every page and generates 3 to 5× more DOM nodes than clean code.",
                            "The performance ceiling for Elementor is around 50 to 60/100 even with aggressive optimization: never enough.",
                            "Business owners using Elementor are losing 20 to 30% of organic traffic to competitors on faster stacks."
                        ]} />
                    </div>

                    <div className="space-y-8">
                        <BlogText>
                            We built a custom audit tool and ran it across 500 WordPress sites using Elementor. Every site was a real business: service companies, e-commerce stores, SaaS landing pages.
                        </BlogText>
                        <BlogText>
                            The average Mobile PageSpeed score: <BlogHighlight>38/100.</BlogHighlight>
                        </BlogText>
                        <BlogText>
                            That&apos;s not just slow. That&apos;s losing 20 to 30% of organic traffic every single month to faster competitors who will never give it back.
                        </BlogText>

                        <BlogHeader>Why Does Elementor Score So Badly on PageSpeed?</BlogHeader>
                        <BlogText>
                            Elementor&apos;s performance problems aren&apos;t bugs. They&apos;re architectural decisions baked into how the builder works:
                        </BlogText>
                        <BlogList items={[
                            "Elementor loads its full CSS framework (300 to 500KB) on every page, regardless of which widgets you use",
                            "Elementor loads swiper.js, waypoints.js, share-link.js, and dialogs-manager on every page, even pages that don't use those widgets",
                            "Elementor Pro adds another 150KB+ of CSS for widgets like Nav Menu, Posts, and Forms",
                            "Unlike Gutenberg (WordPress's free block editor), Elementor injects inline CSS into every rendered element, making tree-shaking impossible",
                            "Elementor generates 3 to 5× more DOM nodes than clean HTML for the same visual result",
                            "Multiple conflicting CSS specificity layers slow render time on every single page"
                        ]} />
                        <BlogQuote>
                            You can&apos;t optimize Elementor to perform like clean code. The bloat is the product. The same architectural bloat affects <Link href="/blog/divi-theme-slow" className="text-cognac hover:underline">Divi Builder sites</Link> and <Link href="/blog/wordpress-plugins-destroy-speed" className="text-cognac hover:underline">WordPress plugin stacks</Link>, but Elementor&apos;s DOM multiplication is uniquely severe.
                        </BlogQuote>

                        <BlogHeader>What Were the Exact Results of Our Elementor Audit?</BlogHeader>
                        <BlogList items={[
                            "Average Mobile PageSpeed: 38/100",
                            "Sites scoring below 50 (red zone): 71% of all sites audited",
                            "Sites scoring above 70: only 4%, and those had disabled most Elementor features",
                            "Average DOM element count: 3,200 (Google recommends under 1,500)",
                            "Average page weight: 4.2MB (Google recommends under 1.6MB for mobile)",
                            "Average LCP (Largest Contentful Paint): 5.8 seconds (Google threshold: under 2.5s)",
                            "Average INP (Interaction to Next Paint): 420ms (Google threshold: under 200ms), largely caused by Elementor's global JavaScript event listeners",
                            "Average CLS (Cumulative Layout Shift): 0.28 (Google threshold: under 0.1) from Elementor's lazy-loaded widgets shifting content after first paint"
                        ]} />
                        <BlogText>
                            7 out of 10 Elementor sites are actively being penalized by Google for Core Web Vitals failures. Their rankings are suppressed compared to what they&apos;d achieve on a faster platform.
                        </BlogText>

                        <BlogHeader>How Much Traffic Is a 38/100 PageSpeed Score Costing You?</BlogHeader>
                        <BlogText>
                            Google made Core Web Vitals a ranking factor in 2021. Here&apos;s the real-world traffic impact:
                        </BlogText>
                        <BlogList items={[
                            "You rank 20 to 30 positions lower than competitors with identical content but faster sites",
                            "53% of mobile users leave if a page takes more than 3 seconds to load",
                            "Every additional second of load time reduces conversions by 7%",
                            "A business with 10,000 monthly organic visitors: roughly 2,000 to 3,000 leave before the page loads"
                        ]} />

                        {/* Mid-Article CTA */}
                        <div className="my-8 md:my-10 p-6 bg-stone-50 border border-stone-200 rounded-2xl text-center">
                            <p className="font-bold text-charcoal mb-2">Is Elementor killing your SEO and speed right now?</p>
                            <p className="text-stone-600 mb-4 text-sm">Drop your URL when you book. We run your PageSpeed and Core Web Vitals live on the call, show you what Elementor is costing you in rankings, and quote the migration.</p>
                            <CalModalButton className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-stone-800 transition-all">Get Free SEO Audit <ArrowRight className="w-4 h-4" /></CalModalButton>
                            <div className="mt-4 p-4 bg-cognac/10 border border-cognac/20 rounded-xl">
                              <p className="text-sm font-bold text-charcoal">FOUNDER&apos;S OFFER: $500 Founder Migration (Apply)</p>
                              <p className="text-sm text-stone-700 mt-1">If our Starter ($1,500+) or Growth ($3,500+) tiers are out of budget, apply for our Founder Migration. We pick 3 businesses per month for a $500 full migration (normally $5,000+) in exchange for a verified Google or Clutch review after launch. Requirements: your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel, under 15 pages, no e-commerce. April 2026: 1 filled, 2 remaining.</p>
                            </div>
                        </div>

                        <BlogHeader>Can You Fix Elementor&apos;s Performance Problems?</BlogHeader>
                        <BlogText>
                            You can reduce the damage, but you cannot solve it:
                        </BlogText>
                        <BlogList items={[
                            "Caching plugins (WP Rocket, W3 Total Cache): Marginally helpful, won't overcome architecture bloat",
                            "Image optimization: Helps with load speed but doesn't fix bloated page code or render-blocking files",
                            "Disabling unused widgets: Reduces load slightly but Elementor still loads its core framework",
                            "Best realistic outcome with Elementor + every optimization: 50 to 60/100 Mobile",
                            "What you actually need for competitive rankings: 90+ Mobile"
                        ]} />
                        <BlogText>
                            <BlogHighlight>The performance ceiling is built into Elementor. You cannot optimize past it.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What Is the Best Alternative to Elementor for Business Sites?</BlogHeader>
                        <BlogText>
                            If Google traffic drives your business, here are your options ranked by performance:
                        </BlogText>
                        <BlogList items={[
                            "Next.js with Tailwind CSS: 95 to 100/100 PageSpeed, zero builder bloat, full design control: the gold standard",
                            "Webflow: Better than Elementor (60 to 75/100 typical), still JavaScript-heavy but manageable",
                            "Clean WordPress theme (no builder): Can reach 70 to 80 without Elementor's overhead",
                            "Elementor with all optimizations: Ceiling of 50 to 60/100, not competitive for modern SEO"
                        ]} />
                        <BlogText>
                            Businesses we&apos;ve migrated off Elementor see <Link href="/blog/how-to-fix-slow-wordpress" className="text-cognac hover:underline">rankings recover within 30 to 60 days</Link> and typically gain 2 to 3× organic traffic within 90 days of <Link href="/services/wordpress-migration" className="text-cognac hover:underline">launching on Next.js</Link>. The full platform comparison is covered in our <Link href="/blog/wordpress-vs-nextjs" className="text-cognac hover:underline">WordPress vs Next.js guide</Link>.
                        </BlogText>
                        <BlogText>
                            For a full breakdown of what a migration off Elementor actually costs, see our <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress migration cost guide</Link>. If you&apos;re ready to leave WordPress entirely, our <Link href="/blog/wordpress-killer" className="text-cognac hover:underline">WordPress replacement breakdown</Link> covers the modern stack.
                        </BlogText>
                        <BlogText>
                            If Webflow is on your shortlist as a stepping stone, read our full <Link href="/blog/webflow-migration-cost" className="text-cognac hover:underline">Webflow migration cost breakdown</Link> before committing. Webflow scores better than Elementor, but it is still a rented platform with its own SEO ceiling.
                        </BlogText>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-8 mt-8 md:mt-12 md:mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Find Out What Elementor Is Costing You</h3>
                        <p className="text-stone-600 mb-6">
                            Free SEO audit. We&apos;ll score your current site and show you the exact traffic and revenue impact of your page builder.
                        </p>
                        <CalModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all">Book Free SEO Audit <ArrowRight className="w-5 h-5" /></CalModalButton>
                        <div className="mt-4 p-4 bg-cognac/10 border border-cognac/20 rounded-xl">
                          <p className="text-sm font-bold text-charcoal">FOUNDER&apos;S OFFER: $500 Founder Migration (Apply)</p>
                          <p className="text-sm text-stone-700 mt-1">If our Starter ($1,500+) or Growth ($3,500+) tiers are out of budget, apply for our Founder Migration. We pick 3 businesses per month for a $500 full migration (normally $5,000+) in exchange for a verified Google or Clutch review after launch. Requirements: your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel, under 15 pages, no e-commerce. April 2026: 1 filled, 2 remaining.</p>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-stone-900 mb-4">Key Takeaways</h2>
                        <ol className="list-decimal list-inside space-y-2 text-stone-700 leading-relaxed">
                            <li><strong>Elementor&apos;s bloat is architectural, not fixable</strong>: The average Elementor site scores 38/100 on mobile because the drag-and-drop framework loads hundreds of kilobytes of unused code on every page.</li>
                            <li><strong>71% of Elementor sites are in Google&apos;s red zone</strong>: Across the Elementor sites we audited, most fail Core Web Vitals, costing them 20 to 30% of organic traffic.</li>
                            <li><strong>Optimization has a ceiling of 50 to 60/100</strong>: Caching plugins and image compression help, but you cannot optimize past Elementor&apos;s built-in DOM bloat and render-blocking CSS.</li>
                            <li><strong>Migrating to Next.js recovers rankings in 30 to 60 days</strong>: Businesses that switch from Elementor to custom coded sites consistently score 95 to 100/100 and gain 2 to 3x organic traffic within 90 days.</li>
                        </ol>
                    </section>

                    {postFAQs.length > 0 && <FAQAccordion faqs={postFAQs} />}
                    <RelatedPosts currentPostId="elementor-kills-seo" category="Performance" />

                </article>
            </main>
            <Footer />
        </>
    );
}