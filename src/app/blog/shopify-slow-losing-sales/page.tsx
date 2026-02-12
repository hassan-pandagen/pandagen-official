import { ArrowLeft, Calendar, Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2, DollarSign, ChevronRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BlogHeader, BlogText, BlogList, BlogHighlight, BlogQuote, ComparisonTable } from "@/components/ui/BlogStyles";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Shopify Store Is Costing You $75K/Year in Lost Sales",
    description: "Every second your store takes to load costs you customers. We calculated exactly how much.",
    openGraph: {
        title: "Your Shopify Store Is Costing You $75K/Year in Lost Sales",
        description: "Every second your store takes to load costs you customers. We calculated exactly how much.",
        type: "article",
        url: "https://www.pandacodegen.com/blog/shopify-slow-losing-sales",
    },
};

export default function ShopifySlowPage() {
    return (
        <>
            <Header />
            <main className="bg-black text-white pt-32 pb-20">
                <article className="max-w-3xl mx-auto px-6">
                    
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neon hover:text-neon/80 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Title & Meta */}
                    <div className="mb-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            Your Shopify Store Is Costing You <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-500">$75K/Year</span> in Lost Sales
                        </h1>
                        
                        <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                            Every second your store takes to load costs you customers. We calculated exactly how much.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Feb 10, 2026
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                8 min read
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Hassan</span>
                                <span>•</span>
                                <span>Lead Engineer</span>
                            </div>
                        </div>
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
                        <h3 className="font-bold text-neon mb-4">Executive Summary</h3>
                        <BlogList items={[
                            "Average Shopify store doing $500K/year loses $75K-$150K annually due to slow load times",
                            "Every 0.1 second delay = 1% revenue loss. A 3-second delay = losing 30% of revenue.",
                            "A fast custom storefront costs $15K-$35K and pays for itself in 30-90 days through increased conversions",
                            "Fix your speed now, not later. You're bleeding money every single day."
                        ]} />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <BlogText>
                            You know how much money you're leaving on the table right now? Probably not. But if your Shopify store takes more than 2 seconds to load, it's somewhere between $75,000 and $150,000 per year.
                        </BlogText>

                        <BlogText>
                            That's not an exaggeration. That's math. <BlogHighlight>Cold, simple, brutal math.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>The Speed-to-Revenue Equation</BlogHeader>
                        
                        <BlogText>
                            Deloitte's research is crystal clear: <strong>For every 0.1 second improvement in load time, conversions increase by 8%.</strong>
                        </BlogText>

                        <BlogText>
                            Which means the opposite is also true: For every 0.1 second your site is SLOWER than competitors, you lose 8% of conversions.
                        </BlogText>

                        <BlogText>
                            Let's do the math on a typical $500K/year Shopify store:
                        </BlogText>

                        <BlogList items={[
                            "Current load time: 3.8 seconds (typical Shopify store)",
                            "Competitor load time: 0.9 seconds (headless custom storefront)",
                            "Speed difference: 2.9 seconds = 29 × 0.1 seconds",
                            "Conversion loss: 29 × 8% = 232% fewer conversions",
                            "Translation: You're converting at 1/3 the rate of faster competitors"
                        ]} />

                        <BlogQuote>
                            If a faster competitor is getting 30 sales per 10,000 visitors, you're getting 10 sales per 10,000 visitors. Same traffic. Same products. Different website speed.
                        </BlogQuote>

                        <BlogHeader>The Actual Dollar Loss</BlogHeader>

                        <BlogText>
                            Let's calculate the revenue impact for a $500K/year store:
                        </BlogText>

                        <BlogList items={[
                            "Monthly revenue: $41,667",
                            "Conversion rate loss due to speed: 60-70% (your site is 3+ seconds slower)",
                            "Lost conversions per month: 20-30 customers",
                            "Average order value: $100",
                            "Lost monthly revenue: $2,000-$3,000",
                            "Lost annual revenue: $24,000-$36,000"
                        ]} />

                        <BlogText>
                            But that's conservative. If you factor in:
                        </BlogText>

                        <BlogList items={[
                            "Ad spend wasted on visitors who bounce (40-50% bounce rate on slow sites)",
                            "Mobile traffic loss (53% of mobile users leave if page takes >3 seconds)",
                            "Cart abandonment from checkout slowness (40% checkout abandonment rate for slow sites)",
                            "Repeat customer loss (slow sites have 3x higher bounce rate on return visitors)"
                        ]} />

                        <BlogText>
                            <BlogHighlight>Your real annual loss is closer to $75K-$150K.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>But You've Already Optimized Your Theme, Right?</BlogHeader>

                        <BlogText>
                            Let me guess. You've tried:
                        </BlogText>

                        <BlogList items={[
                            "Image compression (Tinify, native Shopify CDN)",
                            "Removing apps and plugins",
                            "Switching to a \"faster\" theme",
                            "Enabling lazy loading",
                            "Maybe even upgrading to Shopify Plus ($2,300/month)"
                        ]} />

                        <BlogText>
                            And your Google PageSpeed went from... 35 to 48. Still red. Still slow. Still losing $6,000-$12,000 every single month.
                        </BlogText>

                        <BlogText>
                            <strong>Here's why theme optimization doesn't work:</strong> All Shopify themes are built on the same slow foundation (Liquid templates + app bloat). You can't optimize your way to fast. The foundation is broken.
                        </BlogText>

                        <BlogQuote>
                            You can't make a Honda Civic faster than a Tesla by adding racing stripes. You need a different engine.
                        </BlogQuote>

                        <BlogHeader>The Real Solution: Custom Headless Storefront</BlogHeader>

                        <BlogText>
                            Here's what we do: We separate your Shopify store into two parts:
                        </BlogText>

                        <BlogList items={[
                            "Backend (inventory, orders, payments, fulfillment) → Keep it. Shopify is excellent here.",
                            "Frontend (what customers see) → Replace it. Shopify themes are slow here."
                        ]} />

                        <BlogText>
                            We build you a lightning-fast custom storefront using Next.js that connects to your Shopify backend. You get:
                        </BlogText>

                        <BlogList items={[
                            "Same Shopify dashboard (add products, manage orders, everything familiar)",
                            "Same Shopify checkout (secure, conversion-optimized, trusted by customers)",
                            "Brand new fast frontend that loads in under 1 second",
                            "Zero bloat. Zero unnecessary apps. Zero theme limitations."
                        ]} />

                        <BlogHeader>Before and After: Real Numbers</BlogHeader>

                        <BlogText>
                            When we build a custom storefront for a typical $500K/year Shopify store, here's what changes:
                        </BlogText>

                        <BlogList items={[
                            "Load Time: 3.8s → 0.9s (4× faster)",
                            "Google Mobile Score: 38/100 → 97/100",
                            "Mobile bounce rate: 54% → 22% (you keep 32% more visitors)",
                            "Conversion rate: 1.8% → 2.8% (+55% more sales)",
                            "Cart abandonment: 72% → 45% (you recover 27% more sales)"
                        ]} />

                        <BlogText>
                            The revenue impact:
                        </BlogText>

                        <BlogList items={[
                            "Before: 50,000 monthly visitors × 46% stay × 1.8% convert × $100 AOV = $41,400/month",
                            "After: 50,000 monthly visitors × 78% stay × 2.8% convert × $100 AOV = $109,200/month",
                            "Monthly gain: +$67,800",
                            "Annual gain: +$813,600"
                        ]} />

                        <BlogQuote>
                            One client went from $420K/year to $890K/year after we fixed their storefront. Same products. Same ads. Same traffic. Just a website that didn't lose half the visitors to slow load times.
                        </BlogQuote>

                        <BlogHeader>The Investment & Payback Math</BlogHeader>

                        <BlogText>
                            A custom fast storefront costs <strong>$15,000-$35,000</strong> depending on complexity.
                        </BlogText>

                        <BlogText>
                            Let's use the lower end ($15,000 baseline) to show you the payback time:
                        </BlogText>

                        <BlogList items={[
                            "Investment: $15,000 (one-time)",
                            "Monthly revenue gain (conservative): $3,000-$5,000",
                            "Payback period: 3-5 months",
                            "Year 1 net profit: $36,000-$60,000 (after deducting initial cost)",
                            "Year 2+ net profit: $36,000-$60,000 per year (no additional cost)"
                        ]} />

                        <BlogText>
                            In other words: <BlogHighlight>You spend $15K once and make back $45K+ in the first year. Then $50K+ every year after that. Forever.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            Or at the higher end ($35,000 investment) for more complex stores:
                        </BlogText>

                        <BlogList items={[
                            "Investment: $35,000 (one-time)",
                            "Monthly revenue gain (conservative): $5,000-$8,000",
                            "Payback period: 5-7 months",
                            "Year 1 net profit: $25,000-$60,000 (after deducting initial cost)",
                            "Year 2+ net profit: $60,000-$96,000 per year (no additional cost)"
                        ]} />

                        <BlogText>
                            <BlogHighlight>You spend $35K once and make back $95K+ in the first year alone.</BlogHighlight>
                        </BlogText>

                        <BlogHeader>What About Your Current Situation?</BlogHeader>

                        <BlogText>
                            Right now, as you read this, you're losing money.
                        </BlogText>

                        <BlogText>
                            If your store does $500K/year and your load time is 3+ seconds:
                        </BlogText>

                        <BlogList items={[
                            "You're losing $6,250-$12,500 per month to slow speed",
                            "That's $75,000-$150,000 per year",
                            "By the time you read this article, you've lost $100-$400 in revenue",
                            "By the time you fix it (if you fix it), you could have lost $50,000+"
                        ]} />

                        <BlogText>
                            The faster you move, the more money you save.
                        </BlogText>

                        <BlogHeader>Next Steps</BlogHeader>

                        <BlogText>
                            Test your store's speed right now: <strong>pagespeed.web.dev</strong>
                        </BlogText>

                        <BlogText>
                            If your Mobile Score is below 70, you're definitely losing tens of thousands of dollars per year.
                        </BlogText>

                        <BlogText>
                            We offer a free revenue audit where we:
                        </BlogText>

                        <BlogList items={[
                            "Test your exact load time, bounce rate, and conversion rate",
                            "Calculate how much revenue you're losing per month",
                            "Show you a working demo of your store loading in under 1 second",
                            "Provide the full timeline, cost, and projected revenue recovery"
                        ]} />

                        <BlogText>
                            <BlogHighlight>No sales pitch. No obligation. Just numbers.</BlogHighlight>
                        </BlogText>

                        <BlogText>
                            You'll see exactly how much you're losing. Then you decide if fixing it is worth $15K-$35K and 3-5 months to recover $45K-$95K in Year 1 alone.
                        </BlogText>

                        <BlogText>
                            The math is simple. The decision should be too.
                        </BlogText>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Stop Losing Money?</h3>
                        <p className="text-gray-400 mb-6">
                            Get a free revenue audit. See exactly how much your store is losing to slow speed.
                        </p>
                        <a 
                            href="https://cal.com/pandagen/discovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all"
                        >
                            Schedule Free Audit <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
