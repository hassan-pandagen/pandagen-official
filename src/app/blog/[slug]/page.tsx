"use client";

import { ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// --- BLOG CONTENT DATA ---
const blogPosts: Record<
    string,
    {
        title: string;
        excerpt: string;
        author: string;
        role: string;
        date: string;
        readTime: string;
        category: string;
        content: React.ReactNode;
        serviceName: string;
        serviceLink: string;
    }
> = {
    "wordpress-killer": {
        title: "Why WordPress Is a Waste of Money in 2026 (The Hidden Math)",
        excerpt:
            "Stop burning cash on plugins. We break down the math: How a $50/mo hosting plan actually costs you $5,000 in lost revenue.",
        author: "Imran",
        role: "Lead Architect",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        category: "Cost Analysis",
        serviceName: "Legacy Rescue",
        serviceLink: "/services",
        content: (
            <div className="prose prose-invert max-w-4xl mx-auto">
                <h2>The $50/month Lie</h2>
                <p>
                    You think your WordPress site costs $50/month for hosting. You are
                    wrong.
                </p>
                <p>
                    In 2026, running a business on WordPress is like trying to run a
                    Formula 1 race in a 1999 Corolla. You might finish the race, but
                    you'll spend more time in the pit stop than on the track.
                </p>

                <h2>The Real Cost of "Free" Plugins</h2>
                <p>
                    Every time you install a plugin (Elementor, Yoast, WooCommerce,
                    Smush), you are adding:
                </p>
                <ul>
                    <li>
                        <strong>Database Queries:</strong> Slowing down your TTFB (Time to
                        First Byte).
                    </li>
                    <li>
                        <strong>Security Vulnerabilities:</strong> 98% of WordPress hacks
                        happen through plugins, not the core software.
                    </li>
                    <li>
                        <strong>Dependency Hell:</strong> Plugin A updates, breaks Plugin B,
                        and crashes your Checkout.
                    </li>
                </ul>

                <h2>The "Sleep at Night" Math</h2>
                <p>Let's look at the actual cost of a "Cheap" WordPress site:</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Premium Hosting (WP Engine/Kinsta)</td>
                            <td>$150/mo</td>
                        </tr>
                        <tr>
                            <td>Premium Plugins (ACF, Rocket, Security)</td>
                            <td>$100/mo</td>
                        </tr>
                        <tr>
                            <td>Dev Retainer (fixing breaks)</td>
                            <td>$500/mo</td>
                        </tr>
                        <tr>
                            <td>Lost Revenue (1.5s load time)</td>
                            <td>$3,000/mo</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total Monthly Cost</strong>
                            </td>
                            <td>
                                <strong>~$3,750</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Amazon calculated that every 0.1s delay in load time = 1% revenue
                    loss. WordPress sites load at 1.5s+ by default. That's 15% of your
                    money, gone.
                </p>

                <h2>The Alternative: Own Your Asset</h2>
                <p>
                    At PandaGen, we migrate brands to Next.js. Here's the real cost
                    structure:
                </p>
                <ul>
                    <li>
                        <strong>Hosting:</strong> Vercel ($20/mo)
                    </li>
                    <li>
                        <strong>Security:</strong> Bank-grade (Static files cannot be hacked
                        via SQL injection)
                    </li>
                    <li>
                        <strong>Speed:</strong> 0.1s load times (Lighthouse 99/100)
                    </li>
                    <li>
                        <strong>Maintenance:</strong> Zero plugin updates. Ever.
                    </li>
                </ul>

                <p>
                    Stop renting a broken house. Build a fortress. Your code is your
                    asset. Own it.
                </p>
            </div>
        ),
    },
    "shopify-headless": {
        title: "Shopify Plus + Next.js: The 0.1s Load Time Secret",
        excerpt:
            "We bypassed Liquid limitations to build a storefront that loads instantly. Here is the exact tech stack we used.",
        author: "Imran",
        role: "Lead Architect",
        date: "Jan 10, 2026",
        readTime: "12 min read",
        category: "E-Commerce",
        serviceName: "Enterprise Commerce",
        serviceLink: "/services",
        content: (
            <div className="prose prose-invert max-w-4xl mx-auto">
                <h2>Shopify is a Great Backend. It's a Terrible Frontend.</h2>
                <p>
                    We love Shopify for inventory management. But if you are doing over
                    $1M/year, you have likely hit "The Wall."
                </p>

                <h2>The 3 Walls of Shopify Liquid</h2>

                <h3>Wall #1: URL Structure</h3>
                <p>
                    You want <code>site.com/iphone</code>. Shopify forces{" "}
                    <code>site.com/products/iphone</code> or{" "}
                    <code>site.com/collections/phones/products/iphone</code>.
                </p>
                <p>
                    Google hates deep URL nesting. It signals low authority. We fix this
                    with Next.js custom routing, flattening your URLs to rank higher.
                </p>

                <h3>Wall #2: The "App Tax"</h3>
                <p>
                    You want a related product slider? That's $20/mo for an app that adds
                    400kb of JavaScript bloat to your page.
                </p>
                <p>
                    We code this natively for $0 and 2kb of code. A single product page
                    on standard Shopify loads 12+ apps in the background. You're paying
                    $300/mo for features that should be free.
                </p>

                <h3>Wall #3: Core Web Vitals</h3>
                <p>
                    No matter how much you optimize images, a standard Shopify theme will
                    struggle to hit 90+ Mobile Score because of bloat.
                </p>
                <p>
                    A 60 Mobile Score = you lose 40% of mobile traffic to competitors
                    with 90+ scores.
                </p>

                <h2>The Headless Solution</h2>
                <p>
                    We separate the "Head" (Frontend) from the "Body" (Shopify Backend).
                </p>

                <h3>The Stack</h3>
                <ul>
                    <li>
                        <strong>Frontend:</strong> Next.js 15 (your custom storefront)
                    </li>
                    <li>
                        <strong>Backend:</strong> Shopify Storefront API (inventory, orders,
                        payments)
                    </li>
                    <li>
                        <strong>Content:</strong> Sanity CMS (blogs, landing pages)
                    </li>
                    <li>
                        <strong>Hosting:</strong> Vercel Edge Network (global, instant)
                    </li>
                </ul>

                <h3>The Result</h3>
                <p>
                    Your site loads in 0.1s. The user clicks "Product," and it appears
                    before their finger leaves the mouse. Conversion rates jump 8-12%.
                </p>

                <h2>The ROI Math</h2>
                <p>
                    Deloitte found that improving site speed by 0.1s increased conversion
                    rates by 8%.
                </p>
                <p>
                    If you're making $1M/year with a 2% conversion rate (20,000 customers
                    × $50 avg):
                </p>
                <ul>
                    <li>
                        <strong>Current:</strong> 20,000 customers × $50 = $1,000,000
                    </li>
                    <li>
                        <strong>After Headless:</strong> 21,600 customers × $50 = $1,080,000
                    </li>
                    <li>
                        <strong>Annual Gain:</strong> $80,000 in pure profit
                    </li>
                </ul>

                <p>
                    Your migration pays for itself in month one. Then it's just free
                    money.
                </p>
            </div>
        ),
    },
    "elementor-kills-seo": {
        title: "Stop Using Page Builders (Why Elementor Kills SEO)",
        excerpt:
            "Visual builders generate 300% more DOM nodes than necessary. We audited 500 sites—here are the results.",
        author: "Imran",
        role: "Lead Architect",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        category: "Performance",
        serviceName: "Legacy Rescue",
        serviceLink: "/services",
        content: (
            <div className="prose prose-invert max-w-4xl mx-auto">
                <h2>Visual Builders Are Tempting. But They're Architectural Suicide.</h2>
                <p>
                    We audited 500 websites built with Elementor, Divi, and WPBakery. The
                    results were terrifying.
                </p>

                <h2>The DOM Size Problem</h2>
                <p>
                    Google recommends a webpage have fewer than 1,500 "nodes" (HTML
                    elements).
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td>Custom Next.js Header</td>
                            <td>~15 nodes</td>
                        </tr>
                        <tr>
                            <td>Elementor Header</td>
                            <td>~140 nodes</td>
                        </tr>
                        <tr>
                            <td>Elementor Full Page</td>
                            <td>~3,000+ nodes</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Why? Because to make a simple box centered on a screen, Elementor
                    wraps it in: <code>div &gt; div &gt; div &gt; div &gt; section &gt; div</code>.
                </p>

                <h2>Why Google Hates This</h2>
                <p>
                    When a Google Bot crawls your site, it has a "Crawl Budget" (limited
                    processing power per page). If it has to parse 5,000 lines of
                    spaghetti code just to find your H1 title, it gives up.
                </p>
                <p>
                    It assumes your site is low quality. Your ranking drops. Traffic
                    plummets.
                </p>

                <h2>The Real Problem: Semantics</h2>
                <p>
                    Google wants semantic HTML. When you use proper tags, Google
                    understands your page instantly:
                </p>
                <ul>
                    <li>
                        <code>&lt;header&gt;</code> = Header (Not a random div)
                    </li>
                    <li>
                        <code>&lt;nav&gt;</code> = Navigation (Not a random div)
                    </li>
                    <li>
                        <code>&lt;button&gt;</code> = Button (Not a div pretending to be a button)
                    </li>
                </ul>

                <p>Elementor ignores this. It generates non-semantic garbage.</p>

                <h2>The PandaGen Standard</h2>
                <p>
                    We write semantic HTML. Real engineering isn't dragging and dropping.
                    It's architecting for:
                </p>
                <ul>
                    <li>
                        <strong>Code Cleanliness:</strong> 100% (semantic HTML, zero bloat)
                    </li>
                    <li>
                        <strong>Accessibility:</strong> 100% (WCAG AA compliant)
                    </li>
                    <li>
                        <strong>Google Rank:</strong> #1 (for your target keywords)
                    </li>
                    <li>
                        <strong>Load Time:</strong> 0.1s (Lighthouse 99/100)
                    </li>
                </ul>

                <h2>The Choice Is Yours</h2>
                <p>
                    You can drag and drop your way to mediocrity, or you can own a
                    well-architected codebase that ranks, converts, and scales.
                </p>
                <p>Real engineers build code. Pretenders build websites.</p>
            </div>
        ),
    },
};

// --- SERVICE CTA COMPONENT ---
function ServiceCTA({
    serviceName,
    link,
}: {
    serviceName: string;
    link: string;
}) {
    return (
        <div className="my-16 p-8 bg-gradient-to-r from-neon/10 to-transparent border-l-4 border-neon rounded-r-xl">
            <h3 className="text-2xl font-bold text-white mb-2">
                Ready to fix your {serviceName}?
            </h3>
            <p className="text-gray-400 mb-6">
                We don't just write about this. We engineer it daily. Let's build
                something legendary.
            </p>
            <Link
                href={link}
                className="inline-flex items-center gap-2 text-neon font-bold hover:gap-4 transition-all"
            >
                View {serviceName} Services <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}

// --- PAGE COMPONENT ---
export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        return (
            <main className="bg-[#050505] min-h-screen">
                <Header />
                <div className="container mx-auto px-6 py-32 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
                    <p className="text-gray-400 mb-8">
                        The article you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neon font-bold"
                    >
                        Back to Code Lab <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <Header />

            {/* Article Header */}
            <section className="relative pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="mb-6">
                        <span className="text-neon text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-blue-600 flex items-center justify-center font-bold text-sm text-black">
                                IM
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">{post.author}</div>
                                <div className="text-xs text-gray-500">{post.role}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="relative px-6 pb-20">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-neon prose-code:text-neon prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-ul:text-gray-300 prose-li:text-gray-300 prose-table:text-gray-300 prose-th:text-white prose-th:font-bold prose-td:border-white/10">
                        {post.content}
                    </article>

                    {/* Service CTA */}
                    <ServiceCTA serviceName={post.serviceName} link={post.serviceLink} />

                    {/* Related Articles */}
                    <div className="mt-20 pt-20 border-t border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8">
                            More from Code Lab
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {Object.entries(blogPosts)
                                .filter(([slug]) => slug !== params.slug)
                                .slice(0, 2)
                                .map(([slug, article]) => (
                                    <Link
                                        key={slug}
                                        href={`/blog/${slug}`}
                                        className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-neon/50 transition-all"
                                    >
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon transition-colors">
                                            {article.title.split(":")[0]}
                                        </h4>
                                        <p className="text-sm text-gray-400 mb-4">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-neon text-sm font-bold group-hover:gap-4 transition-all">
                                            Read <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
