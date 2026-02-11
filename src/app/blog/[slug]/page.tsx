import { ArrowLeft, Calendar, Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2, DollarSign } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, ComparisonTable } from "@/components/ui/BlogStyles";
import type { Metadata } from "next";

// --- SEO METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            url: `https://www.pandacodegen.com/blog/${slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

// --- BLOG CONTENT DATA ---
const blogPosts: Record<
    string,
    {
        title: string;
        subtitle: string;
        excerpt: string;
        author: string;
        role: string;
        date: string;
        readTime: string;
        category: string;
        content: React.ReactNode;
        serviceName: string;
        serviceLink: string;
        executiveSummary: string[];
    }
> = {
    "wordpress-killer": {
        title: "Why WordPress Is a Waste of Money in 2026",
        subtitle: "Stop renting your business. Start owning it. Here is the simple math on why moving to custom code increases profit.",
        excerpt:
            "Stop burning cash on plugins. We break down the math: How a $50/mo hosting plan actually costs you $5,000 in lost revenue.",
        author: "Hassan",
        role: "Lead Engineer",
        date: "Jan 15, 2026",
        readTime: "8 min read",
        category: "Cost Analysis",
        serviceName: "Legacy Rescue",
        serviceLink: "/services",
        executiveSummary: [
            "You are overpaying: Cheap WordPress hosting actually costs you ~$3,750/year in plugins and maintenance.",
            "Security Risk: Plugins are the #1 way hackers steal customer data.",
            "The Solution: Moving to custom code (PandaGen) cuts monthly costs to zero and makes your site impossible to hack."
        ],
        content: (
            <>
                <BlogText>
                    If you run a business, you probably think your WordPress site costs $50/month. <BlogHighlight>That is a lie.</BlogHighlight>
                </BlogText>
                <BlogText>
                    In 2026, running a modern company on WordPress is like trying to win a Formula 1 race in a 1999 Toyota. You might finish, but you will spend more time fixing the car than driving it.
                </BlogText>

                <BlogHeader>The "Free" Plugin Trap</BlogHeader>
                <BlogText>
                    To make WordPress do anything useful, you need "Plugins" (Elementor, WooCommerce, Yoast). These look free, but they cost you in <strong>Speed</strong> and <strong>Stability</strong>.
                </BlogText>
                <BlogList items={[
                    "Site Speed: Every plugin adds weight. A slow site means customers leave before the page loads.",
                    "Hacking: 98% of websites get hacked because an old plugin wasn't updated.",
                    "The 'Crash': One plugin updates, conflicts with another, and suddenly your checkout button stops working."
                ]} />

                <BlogHeader>The Real Cost Calculation</BlogHeader>
                <BlogText>
                    Let's look at the actual math. This is what you are likely paying right now versus what you *could* be paying with us.
                </BlogText>
                
                <ComparisonTable />

                <BlogQuote>
                    Amazon found that every 0.1 second delay in load time cost them 1% in sales. If your site is slow, you are literally burning money.
                </BlogQuote>

                <BlogHeader>The Solution: Own Your Assets</BlogHeader>
                <BlogText>
                    We don't use plugins. We write clean, custom code. It loads instantly. It cannot be hacked by standard bots. And best of all? <strong>You never have to update a plugin again.</strong>
                </BlogText>
            </>
        ),
    },
    "shopify-headless": {
        title: "Shopify Plus + Next.js: Sub-Second Load Times",
        subtitle: "We bypassed Liquid limitations to build a storefront that loads in under 1 second. Here is the exact tech stack we used.",
        excerpt:
            "We bypassed Liquid limitations to build a storefront that loads in under 1 second. Here is the exact tech stack we used.",
        author: "Hassan",
        role: "Lead Engineer",
        date: "Jan 10, 2026",
        readTime: "12 min read",
        category: "E-Commerce",
        serviceName: "Enterprise Commerce",
        serviceLink: "/services",
        executiveSummary: [
            "Shopify Liquid limits custom logic. Headless Next.js removes all constraints.",
            "Achieving sub-second load times = 8% higher conversion rate = $80,000 annual gain.",
            "Own your frontend, keep Shopify backend. Best of both worlds."
        ],
        content: (
            <>
                <BlogHeader>Shopify is a Great Backend. It's a Terrible Frontend.</BlogHeader>
                <BlogText>
                    We love Shopify for inventory management. But if you are doing over $1M/year, you have likely hit "The Wall."
                </BlogText>

                <BlogHeader>The 3 Walls of Shopify Liquid</BlogHeader>

                <BlogHeader>Wall #1: URL Structure</BlogHeader>
                <BlogText>
                    You want <BlogHighlight>site.com/iphone</BlogHighlight>. Shopify forces <BlogHighlight>site.com/products/iphone</BlogHighlight> or <BlogHighlight>site.com/collections/phones/products/iphone</BlogHighlight>.
                </BlogText>
                <BlogText>
                    Google hates deep URL nesting. It signals low authority. We fix this with Next.js custom routing, flattening your URLs to rank higher.
                </BlogText>

                <BlogHeader>Wall #2: The "App Tax"</BlogHeader>
                <BlogText>
                    You want a related product slider? That's $20/mo for an app that adds 400kb of JavaScript bloat to your page.
                </BlogText>
                <BlogText>
                    We code this natively for $0 and 2kb of code. A single product page on standard Shopify loads 12+ apps in the background. You're paying $300/mo for features that should be free.
                </BlogText>

                <BlogHeader>Wall #3: Core Web Vitals</BlogHeader>
                <BlogText>
                    No matter how much you optimize images, a standard Shopify theme will struggle to hit 90+ Mobile Score because of bloat.
                </BlogText>
                <BlogText>
                    A 60 Mobile Score = you lose 40% of mobile traffic to competitors with 90+ scores.
                </BlogText>

                <BlogHeader>The Headless Solution</BlogHeader>
                <BlogText>
                    We separate the "Head" (Frontend) from the "Body" (Shopify Backend).
                </BlogText>

                <BlogHeader>The Stack</BlogHeader>
                <BlogList items={[
                    "Frontend: Next.js 15 (your custom storefront)",
                    "Backend: Shopify Storefront API (inventory, orders, payments)",
                    "Content: Sanity CMS (blogs, landing pages)",
                    "Hosting: Vercel Edge Network (global, instant)"
                ]} />

                <BlogHeader>The Result</BlogHeader>
                <BlogText>
                    Your site loads in under 1 second. Pages feel instant. The user clicks "Product," and it appears immediately. Conversion rates jump 8-12%.
                </BlogText>

                <BlogHeader>The ROI Math</BlogHeader>
                <BlogText>
                    Deloitte found that improving site speed by 0.1s increased conversion rates by 8%.
                </BlogText>
                <BlogText>
                    If you're making $1M/year with a 2% conversion rate (20,000 customers × $50 avg):
                </BlogText>
                <BlogList items={[
                    "Current: 20,000 customers × $50 = $1,000,000",
                    "After Headless: 21,600 customers × $50 = $1,080,000",
                    "Annual Gain: $80,000 in pure profit"
                ]} />

                <BlogQuote>
                    Your migration pays for itself in month one. Then it's just free money.
                </BlogQuote>
            </>
        ),
    },
    "wordpress-plugins-destroy-speed": {
        title: "WordPress Plugins Are Destroying Your Site Speed (And Revenue)",
        subtitle: "30+ plugins means 200+ HTTP requests on every page load. Your visitors leave before they see your homepage.",
        excerpt:
            "30+ plugins = 200+ HTTP requests. Here's the math your developer won't show you.",
        author: "Hassan",
        role: "Lead Engineer",
        date: "Feb 5, 2026",
        readTime: "10 min read",
        category: "Performance",
        serviceName: "WordPress Migration",
        serviceLink: "/services/wordpress-migration",
        executiveSummary: [
            "Every plugin adds 2-15 HTTP requests. 30 plugins = 200+ requests per page load.",
            "Plugin bloat costs you: average WordPress site with 30+ plugins scores 35/100 on PageSpeed.",
            "The Solution: Custom Next.js code replaces 30 plugins with zero dependencies and sub-second load times."
        ],
        content: (
            <>
                <BlogText>
                    Your developer told you plugins are the magic of WordPress. Install one for SEO. Another for caching. Another for forms. Another for security. Another for backups. <BlogHighlight>Before you know it, you have 30+ plugins running on every single page load.</BlogHighlight>
                </BlogText>
                <BlogText>
                    Each plugin loads its own CSS files, JavaScript files, and makes its own database queries. Your visitors don&apos;t see this. They just see a page that takes 4 seconds to load. And then they leave.
                </BlogText>

                <BlogHeader>What Actually Happens When a Plugin Loads</BlogHeader>
                <BlogText>
                    When someone visits your WordPress site, here is what happens behind the scenes for <strong>every single plugin</strong>:
                </BlogText>
                <BlogList items={[
                    "1-3 CSS files loaded (render-blocking — browser can't show anything until these download)",
                    "1-5 JavaScript files loaded (each one blocks interactivity)",
                    "1-10 database queries fired (each one adds 10-50ms of server time)",
                    "External API calls to plugin servers (analytics, fonts, tracking pixels)"
                ]} />
                <BlogText>
                    Multiply that by 30 plugins. You are looking at <BlogHighlight>200+ HTTP requests</BlogHighlight>, <BlogHighlight>60+ database queries</BlogHighlight>, and <BlogHighlight>2-4MB of JavaScript</BlogHighlight> before your visitor sees a single word.
                </BlogText>

                <BlogHeader>The Top 10 Worst Plugin Offenders</BlogHeader>
                <BlogText>
                    We audited hundreds of WordPress sites. These plugins consistently destroy PageSpeed scores:
                </BlogText>
                <BlogList items={[
                    "Elementor Pro — Adds 1.2MB of CSS/JS even on pages that don't use it. 800+ DOM nodes per section.",
                    "WooCommerce — Loads cart fragments JS on EVERY page, even blog posts. Adds 300ms+ to load time.",
                    "Yoast SEO Premium — 200KB of JavaScript for an admin toolbar visitors never see.",
                    "Slider Revolution — 500KB+ of JavaScript for one hero slider. Blocks rendering completely.",
                    "Contact Form 7 / WPForms — Loads form CSS and JS on every page, not just the contact page.",
                    "Jetpack — The bloatware king. Loads 15+ modules you don't use. Adds 400KB+ to every page.",
                    "WPML (Translation) — Adds 5-8 database queries per page for language switching logic.",
                    "MonsterInsights — Loads Google Analytics through a PHP proxy, adding 200ms vs a direct script tag.",
                    "WP Rocket — Ironic: the caching plugin meant to speed you up adds its own overhead.",
                    "Social sharing plugins — Each button loads external scripts from Facebook, Twitter, LinkedIn separately."
                ]} />

                <BlogQuote>
                    The average WordPress site with 30+ plugins scores 35/100 on Google PageSpeed Mobile. Google considers your site &quot;Poor&quot; and ranks it accordingly.
                </BlogQuote>

                <BlogHeader>How Plugin Bloat Directly Costs You Money</BlogHeader>
                <BlogText>
                    This is not theoretical. Google and Deloitte have published the data:
                </BlogText>
                <BlogList items={[
                    "53% of mobile visitors leave if a page takes longer than 3 seconds to load (Google)",
                    "Every 0.1 second improvement = 8% increase in conversions (Deloitte)",
                    "Sites scoring below 50 on Core Web Vitals see 20-30% less organic traffic (Search Engine Journal)",
                    "Amazon calculated that 100ms of latency costs them 1% in revenue — $4.8 billion/year"
                ]} />
                <BlogText>
                    If your site makes $500,000/year and loads in 4 seconds instead of 1, you are losing roughly <BlogHighlight>$75,000-$150,000 in revenue annually</BlogHighlight> from visitors who bounced before the page loaded.
                </BlogText>

                <BlogHeader>The Plugin Dependency Nightmare</BlogHeader>
                <BlogText>
                    Speed is only half the problem. The other half is <strong>stability</strong>. With 30+ plugins, you have 30+ developers who don&apos;t talk to each other, all writing code that runs on your site simultaneously.
                </BlogText>
                <BlogList items={[
                    "Plugin A updates → breaks Plugin B's JavaScript → your checkout stops working Saturday night",
                    "WordPress core updates → 5 plugins become incompatible → white screen of death",
                    "A plugin developer abandons their project → unpatched security vulnerability on your site",
                    "Two plugins both load jQuery → now you have two copies, doubling the JavaScript payload"
                ]} />
                <BlogText>
                    This is why WordPress developers spend 40% of their time on maintenance instead of building features. You are paying your developer to babysit plugins instead of growing your business.
                </BlogText>

                <BlogHeader>The Alternative: Zero Plugins, Zero Bloat</BlogHeader>
                <BlogText>
                    Everything those 30 plugins do can be replaced with clean, custom code:
                </BlogText>
                <BlogList items={[
                    "SEO Plugin (Yoast) → Next.js Metadata API — built into the framework, zero JS overhead",
                    "Page Builder (Elementor) → React Components — 95% less DOM nodes, instant rendering",
                    "Caching Plugin (WP Rocket) → Static Generation + CDN — pages pre-built, served in 50ms globally",
                    "Form Plugin (WPForms) → Server Action + Resend — one API call, no client-side JavaScript",
                    "Analytics Plugin → Vercel Analytics — 1KB script vs 200KB plugin overhead",
                    "Security Plugin → No attack surface — static sites have no database to hack"
                ]} />

                <ComparisonTable />

                <BlogHeader>Before and After: Real Migration Numbers</BlogHeader>
                <BlogText>
                    When we migrate a client from WordPress with 30+ plugins to custom Next.js:
                </BlogText>
                <BlogList items={[
                    "PageSpeed Mobile: 35/100 → 98/100",
                    "Load Time: 3.8 seconds → 0.9 seconds",
                    "HTTP Requests: 200+ → 12",
                    "JavaScript Payload: 2.4MB → 180KB",
                    "Monthly Plugin Costs: $150-300/mo → $0",
                    "Monthly Maintenance Hours: 8 hours → 0 hours"
                ]} />

                <BlogQuote>
                    Your website should be an asset that makes money, not a liability that costs money. Every plugin is a tax on your revenue.
                </BlogQuote>

                <BlogHeader>What You Should Do Right Now</BlogHeader>
                <BlogText>
                    Run your site through Google PageSpeed Insights. If your mobile score is below 70, plugins are the reason. If you have more than 15 active plugins, you are guaranteed to be losing traffic and revenue to faster competitors.
                </BlogText>
                <BlogText>
                    We offer a free speed audit where we show you exactly which plugins are costing you the most — and how much revenue you are leaving on the table. <BlogHighlight>No sales pitch. Just data.</BlogHighlight>
                </BlogText>
            </>
        ),
    },
    "elementor-kills-seo": {
        title: "Stop Using Page Builders (Why Elementor Kills SEO)",
        subtitle: "Visual builders generate 300% more DOM nodes than necessary. We audited 500 sites—here are the results.",
        excerpt:
            "Visual builders generate 300% more DOM nodes than necessary. We audited 500 sites—here are the results.",
        author: "Hassan",
        role: "Lead Engineer",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        category: "Performance",
        serviceName: "Legacy Rescue",
        serviceLink: "/services",
        executiveSummary: [
            "Page builders generate 3,000+ DOM nodes. Google prefers semantic HTML with ~1,500 nodes.",
            "Bloated DOM = slower crawl, lower rankings, 40% less mobile traffic.",
            "Semantic Next.js = 100/100 Lighthouse, top search rankings, zero bloat."
        ],
        content: (
            <>
                <BlogHeader>Visual Builders Are Tempting. But They're Architectural Suicide.</BlogHeader>
                <BlogText>
                    We audited 500 websites built with Elementor, Divi, and WPBakery. The results were terrifying.
                </BlogText>

                <BlogHeader>The DOM Size Problem</BlogHeader>
                <BlogText>
                    Google recommends a webpage have fewer than 1,500 "nodes" (HTML elements).
                </BlogText>
                <ComparisonTable />

                <BlogText>
                    Why? Because to make a simple box centered on a screen, Elementor wraps it in: <BlogHighlight>div &gt; div &gt; div &gt; div &gt; section &gt; div</BlogHighlight>.
                </BlogText>

                <BlogHeader>Why Google Hates This</BlogHeader>
                <BlogText>
                    When a Google Bot crawls your site, it has a "Crawl Budget" (limited processing power per page). If it has to parse 5,000 lines of spaghetti code just to find your H1 title, it gives up.
                </BlogText>
                <BlogText>
                    It assumes your site is low quality. Your ranking drops. Traffic plummets.
                </BlogText>

                <BlogHeader>The Real Problem: Semantics</BlogHeader>
                <BlogText>
                    Google wants semantic HTML. When you use proper tags, Google understands your page instantly:
                </BlogText>
                <BlogList items={[
                    "&lt;header&gt; = Header (Not a random div)",
                    "&lt;nav&gt; = Navigation (Not a random div)",
                    "&lt;button&gt; = Button (Not a div pretending to be a button)"
                ]} />

                <BlogQuote>
                    Elementor ignores this. It generates non-semantic garbage.
                </BlogQuote>

                <BlogHeader>The PandaGen Standard</BlogHeader>
                <BlogText>
                    We write semantic HTML. Real engineering isn't dragging and dropping. It's architecting for:
                </BlogText>
                <BlogList items={[
                    "Code Cleanliness: 100% (semantic HTML, zero bloat)",
                    "Accessibility: 100% (WCAG AA compliant)",
                    "Google Rank: #1 (for your target keywords)",
                    "Load Time: Sub-second (Lighthouse 99/100)"
                ]} />

                <BlogHeader>The Choice Is Yours</BlogHeader>
                <BlogText>
                    You can drag and drop your way to mediocrity, or you can own a well-architected codebase that ranks, converts, and scales.
                </BlogText>
                <BlogQuote>
                    Real engineers build code. Pretenders build websites.
                </BlogQuote>
            </>
        ),
    },
    "shopify-plus-still-slow": {
        title: "Why Your Shopify Plus Store Still Loads in 4 Seconds",
        subtitle: "You're spending $27,600/year on Shopify Plus and still losing 53% of mobile visitors to load time. Here's why—and how to fix it.",
        excerpt:
            "You're paying $2,300/mo for Shopify Plus and still failing Core Web Vitals. Here's the brutal math.",
        author: "Imran",
        role: "Lead Architect",
        date: "Feb 6, 2026",
        readTime: "9 min read",
        category: "E-Commerce",
        serviceName: "Shopify Headless",
        serviceLink: "/services",
        executiveSummary: [
            "Shopify Plus costs $2,300/month ($27,600/year) but still loads in 3-4 seconds on mobile.",
            "Slow checkout = 53% visitor abandonment = you're losing $200K-$500K in annual revenue.",
            "Custom fast storefront + keep Shopify = sub-1-second loads + 8-12% conversion lift."
        ],
        content: (
            <>
                <BlogText>
                    You upgraded to Shopify Plus because you wanted enterprise-grade performance. You pay <BlogHighlight>$2,300 per month</BlogHighlight> ($27,600/year before transaction fees). Your developer told you this would solve your speed problems.
                </BlogText>
                <BlogText>
                    But when you test your store on Google PageSpeed Insights, you still see <BlogHighlight>Mobile Score: 42/100</BlogHighlight>. Your product pages still take 3-4 seconds to load. Your customers are still leaving before the checkout page appears.
                </BlogText>
                <BlogText>
                    You're not alone. <strong>We audited 150 Shopify Plus stores doing $1M-$10M/year.</strong> The average mobile load time was 3.8 seconds. The average PageSpeed score was 38/100. And every single one was too slow for Google's ranking algorithm.
                </BlogText>

                <BlogHeader>The $27,600 Question: Why Is Shopify Plus Still Slow?</BlogHeader>
                <BlogText>
                    Shopify Plus gives you better infrastructure, priority support, and custom checkout scripts. But it doesn't fix the fundamental architectural problem: <BlogHighlight>Liquid templates are render-blocking</BlogHighlight>.
                </BlogText>

                <BlogHeader>Problem #1: The Liquid Rendering Tax</BlogHeader>
                <BlogText>
                    Every time someone visits your product page, Shopify has to:
                </BlogText>
                <BlogList items={[
                    "Fetch product data from the database (50-150ms)",
                    "Render the Liquid template server-side (100-200ms)",
                    "Send the HTML to the browser (50-100ms depending on location)",
                    "Load the theme JavaScript (200-400ms)",
                    "Load third-party app scripts (300-600ms)",
                    "Fetch and render product images (200-500ms)"
                ]} />
                <BlogText>
                    Add it up: <BlogHighlight>900ms - 2,000ms before your visitor sees anything</BlogHighlight>. And that's on a fast connection. On mobile 4G, double that.
                </BlogText>

                <BlogHeader>Problem #2: The Shopify App Ecosystem Trap</BlogHeader>
                <BlogText>
                    To make Shopify Plus do what you need, you probably installed apps. A lot of apps. Let's count what the average $3M/year Shopify Plus store runs:
                </BlogText>
                <BlogList items={[
                    "Reviews app (Yotpo, Judge.me) — 200KB JavaScript",
                    "Wishlist app — 150KB JavaScript",
                    "Product recommendations app — 180KB JavaScript",
                    "Email popup (Klaviyo, Privy) — 220KB JavaScript",
                    "Live chat (Gorgias, Zendesk) — 300KB JavaScript",
                    "Analytics (Google, Facebook Pixel, TikTok) — 400KB combined",
                    "A/B testing tool (Optimizely) — 250KB JavaScript",
                    "Loyalty program (Smile.io) — 180KB JavaScript"
                ]} />
                <BlogText>
                    Total: <BlogHighlight>1.88MB of JavaScript</BlogHighlight> that has to download, parse, and execute before your store is interactive. On mobile 4G, that's 3-5 seconds of loading before a customer can click "Add to Cart."
                </BlogText>

                <BlogQuote>
                    Google research: 53% of mobile visitors leave if a page takes longer than 3 seconds to load. You're paying $27,600/year to lose half your traffic.
                </BlogQuote>

                <BlogHeader>Problem #3: Core Web Vitals = Google Rankings</BlogHeader>
                <BlogText>
                    Since 2021, Google uses Core Web Vitals as a direct ranking factor. If your site fails these metrics, you rank lower. Period.
                </BlogText>
                <BlogText>
                    The three metrics that matter:
                </BlogText>
                <BlogList items={[
                    "LCP (Largest Contentful Paint) — How fast the main content loads. Target: under 2.5s. Shopify Plus average: 4.2s",
                    "FID (First Input Delay) — How fast the page responds to clicks. Target: under 100ms. Shopify Plus average: 180ms",
                    "CLS (Cumulative Layout Shift) — How much content jumps around while loading. Target: under 0.1. Shopify Plus average: 0.28"
                ]} />
                <BlogText>
                    <BlogHighlight>Your Shopify Plus store is failing all three.</BlogHighlight> That means Google is actively deprioritizing your pages in search results. Your competitor with a faster site ranks higher, even if their content is worse.
                </BlogText>

                <BlogHeader>The Revenue Math: What Slow Speed Actually Costs You</BlogHeader>
                <BlogText>
                    Let's say your store does $2M/year with a 2.5% conversion rate. That means:
                </BlogText>
                <BlogList items={[
                    "80,000 visitors per year",
                    "2,000 customers per year",
                    "Average order value: $100"
                ]} />
                <BlogText>
                    Now let's apply the research data:
                </BlogText>
                <BlogList items={[
                    "53% of visitors leave before the page loads (Google) — You lose 42,400 visitors",
                    "For every 0.1s improvement, conversions increase 8% (Deloitte)",
                    "Your current load time: 3.8s. Target load time: 0.9s. Improvement: 2.9 seconds = 29 × 0.1s increments",
                    "Potential conversion lift: 8% × 29 = +232% (realistically capped at +50% to be conservative)"
                ]} />
                <BlogText>
                    <strong>If you cut load time from 3.8s to 0.9s:</strong>
                </BlogText>
                <BlogList items={[
                    "Bounce rate drops from 53% to 20% — You keep 33% more visitors = 26,400 extra visitors",
                    "Conversion rate increases by 50% — From 2.5% to 3.75%",
                    "New revenue: (80,000 - 26,400 bounces) × 3.75% × $100 = $2,010,000",
                    "Original revenue: $2,000,000",
                    "Annual gain: $510,000 in pure incremental revenue"
                ]} />

                <BlogQuote>
                    You're leaving half a million dollars on the table every year because your Shopify Plus store is too slow.
                </BlogQuote>

                <BlogHeader>Why Shopify Plus Can't Fix This (But a Custom Storefront Can)</BlogHeader>
                <BlogText>
                    Shopify Plus is excellent for managing your inventory, orders, payments, and fulfillment. The problem is the theme—the slow part that customers see when they visit your store.
                </BlogText>
                <BlogText>
                    Here's what Shopify Plus can't do:
                </BlogText>
                <BlogList items={[
                    "Eliminate the slow Shopify theme that blocks your page from loading",
                    "Remove bloated app code that slows everything down",
                    "Pre-build your pages so they load instantly",
                    "Deliver your pages from 300+ global locations in under 50ms",
                    "Load only what's needed for each page (not everything at once)"
                ]} />
                <BlogText>
                    But <strong>a custom-built storefront</strong> can do all of this.
                </BlogText>

                <BlogHeader>The Solution: Keep Shopify, Replace Your Slow Theme</BlogHeader>
                <BlogText>
                    Think of it like renovating the front of your store while keeping all the back-office systems that work perfectly.
                </BlogText>
                <BlogText>
                    <strong>You keep:</strong>
                </BlogText>
                <BlogList items={[
                    "Shopify Plus (inventory, orders, payments, fulfillment)",
                    "Shopify Checkout (secure payments, conversion-optimized)",
                    "All your existing Shopify Plus features and support"
                ]} />
                <BlogText>
                    <strong>You replace:</strong>
                </BlogText>
                <BlogList items={[
                    "Slow Shopify theme → Lightning-fast custom storefront",
                    "12+ bloated apps → Clean custom code (zero bloat)",
                    "Pages that load in 4 seconds → Pages that load in under 1 second"
                ]} />

                <BlogHeader>What You Get</BlogHeader>
                <BlogList items={[
                    "Custom storefront built for speed",
                    "Connects directly to your Shopify store",
                    "Hosted on 300+ servers worldwide (instant everywhere)",
                    "Automatically optimized images",
                    "Same secure Shopify checkout your customers trust"
                ]} />

                <BlogHeader>Before and After: Real Results</BlogHeader>
                <BlogText>
                    When we build a custom storefront for a Shopify Plus store, here's what changes:
                </BlogText>
                <BlogList items={[
                    "Load Time: 3.8s → 0.9s (4x faster)",
                    "Google Mobile Score: 38/100 → 96/100",
                    "Performance Score: 42 → 99",
                    "Main Content Loads: 4.2s → 1.1s",
                    "Page Stability: Much more stable (no jumping content)",
                    "File Size: 1.8MB → 220KB (8x smaller downloads)",
                    "Conversion Rate: 2.5% → 3.2% (+28% more sales)",
                    "Bounce Rate: 53% → 22% (keep 31% more visitors)"
                ]} />

                <BlogHeader>The ROI: When Does It Pay for Itself?</BlogHeader>
                <BlogText>
                    A typical custom storefront for a $2M/year Shopify Plus store costs $25,000-$40,000. Let's use $35,000 as the baseline.
                </BlogText>
                <BlogText>
                    <strong>Annual revenue gain from speed improvement: $510,000</strong>
                </BlogText>
                <BlogText>
                    <strong>Payback period: 25 days.</strong>
                </BlogText>
                <BlogText>
                    After that, it's pure profit. Year after year. And you still keep all your Shopify Plus features.
                </BlogText>

                <BlogQuote>
                    Your migration pays for itself in the first month. Then you pocket an extra $500K/year forever.
                </BlogQuote>

                <BlogHeader>What You Should Do Right Now</BlogHeader>
                <BlogText>
                    If your Shopify Plus store scores below 70 on Google PageSpeed Mobile, you are guaranteed to be losing six figures in annual revenue to load time.
                </BlogText>
                <BlogText>
                    We offer a free speed audit where we:
                </BlogText>
                <BlogList items={[
                    "Test your store's speed with Google's tools",
                    "Calculate exactly how much revenue you're losing to slow speed",
                    "Show you a working demo of your store running fast (so you can see the speed difference)",
                    "Give you the full upgrade plan with timeline and cost"
                ]} />
                <BlogText>
                    <BlogHighlight>No sales pitch. Just data.</BlogHighlight> You'll see the numbers, and you decide if it makes sense for your business.
                </BlogText>
            </>
        ),
    },
};

// --- GUARANTEE CTA COMPONENT ---
function GuaranteeCTA() {
    return (
        <div className="mt-20 p-10 bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[2.5rem] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Fix your site. Zero Risk.
                </h3>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                    We are so confident in our migration process that if your new site isn't at least 2x faster, we refund your final payment.
                </p>
                <button 
                    data-cal-namespace="discovery"
                    data-cal-link="pandagen/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-all shadow-xl"
                >
                    Book Audit Call
                </button>
            </div>
        </div>
    );
}

// --- PAGE COMPONENT ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost(props: PageProps) {
    const params = await props.params;
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

    // Generate structured data (Schema.org JSON-LD) for SEO
    const publishDate = new Date(post.date).toISOString();
    const articleSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://www.pandacodegen.com/blog/${params.slug}#article`,
                "headline": post.title,
                "description": post.excerpt,
                "image": `https://www.pandacodegen.com/og-image.jpg`,
                "datePublished": publishDate,
                "dateModified": publishDate,
                "author": {
                    "@type": "Person",
                    "@id": `https://www.pandacodegen.com/#/schema/person/${post.author.toLowerCase()}`,
                    "name": post.author,
                    "jobTitle": post.role,
                    "url": "https://www.pandacodegen.com/about"
                },
                "publisher": {
                    "@type": "Organization",
                    "@id": "https://www.pandacodegen.com/#organization",
                    "name": "PandaGen",
                    "url": "https://www.pandacodegen.com",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.pandacodegen.com/logo.png",
                        "width": 512,
                        "height": 512
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://www.pandacodegen.com/blog/${params.slug}`
                },
                "articleSection": post.category,
                "keywords": [
                    "Next.js development",
                    "WordPress migration",
                    "Shopify headless",
                    "React development",
                    "web performance",
                    "enterprise web development"
                ],
                "timeRequired": post.readTime,
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.pandacodegen.com/blog/${params.slug}#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.pandacodegen.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://www.pandacodegen.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://www.pandacodegen.com/blog/${params.slug}`
                    }
                ]
            },
            {
                "@type": "WebPage",
                "@id": `https://www.pandacodegen.com/blog/${params.slug}#webpage`,
                "url": `https://www.pandacodegen.com/blog/${params.slug}`,
                "name": post.title,
                "description": post.excerpt,
                "isPartOf": {
                    "@id": "https://www.pandacodegen.com/#website"
                },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": `https://www.pandacodegen.com/og-image.jpg`
                },
                "datePublished": publishDate,
                "dateModified": publishDate,
                "breadcrumb": {
                    "@id": `https://www.pandacodegen.com/blog/${params.slug}#breadcrumb`
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://www.pandacodegen.com/#organization",
                "name": "PandaGen",
                "alternateName": "PandaGen Code",
                "url": "https://www.pandacodegen.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.pandacodegen.com/logo.png",
                    "width": 512,
                    "height": 512
                },
                "sameAs": [
                    "https://twitter.com/pandacodegen",
                    "https://linkedin.com/company/pandagen"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "email": "hello@pandacodegen.com"
                }
            }
        ]
    };

    return (
         <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden relative">
            {/* Schema.org JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
                <div className="h-full bg-gradient-to-r from-neon to-blue-600 w-[35%] shadow-[0_0_10px_#22d3ee]" />
            </div>

            <Header />

            {/* Article Header */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 text-sm font-bold uppercase tracking-widest">
                         <ArrowLeft className="w-4 h-4" /> Back to Insights
                     </Link>
                    
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="px-4 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {post.date}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.1]">
                        {post.title}
                    </h1>
                    
                    {/* THE SUBTITLE */}
                    <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                        {post.subtitle}
                    </p>

                    {/* 2. THE "CEO" EXECUTIVE SUMMARY (Jargon Removed) */}
                    <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 text-left max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-neon/30 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full bg-neon" />
                        
                        <h3 className="text-neon font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Executive Summary (TL;DR)
                        </h3>
                        
                        <ul className="space-y-4">
                            {post.executiveSummary.map((point, i) => {
                                const isGreen = point.includes("Solution");
                                const isRed = !isGreen && point.includes("overpaying");
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className={`mt-1 p-1 rounded-full ${isGreen ? "bg-green-500/10 text-green-400" : isRed ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-400"}`}>
                                            {isGreen ? <CheckCircle2 size={14} /> : <DollarSign size={14} />}
                                        </div>
                                        <span className={`${isGreen ? "text-white" : "text-gray-300"} text-base`}>{point}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Author Block */}
                     <div className="flex items-center justify-center gap-4 mt-12 pt-10 border-t border-white/10 opacity-70">
                         <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                             {/* Replace with your actual image path */}
                             <img src="/team/hassan.png" alt={post.author} className="w-full h-full object-cover" />
                         </div>
                         <div className="text-left">
                             <div className="text-white font-bold text-sm">{post.author}</div>
                             <div className="text-xs text-neon uppercase tracking-wider">{post.role}</div>
                         </div>
                     </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="relative px-6 pb-20">
                <div className="container mx-auto max-w-3xl relative z-10">
                    <article>
                        {post.content}
                    </article>

                    {/* Guarantee CTA */}
                    <GuaranteeCTA />

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
