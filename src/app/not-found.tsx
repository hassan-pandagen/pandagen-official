import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "404: This Page Is Faster Than Most Sites We Rebuild",
    description: "The page you are looking for doesn't exist. But hey, it loaded in under a second. That's more than most websites can say.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-paper flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            {/* Noise texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Huge serif background number */}
            <h1 className="text-[10rem] md:text-[20rem] font-serif italic leading-none text-stone-200 select-none pointer-events-none">
                404
            </h1>

            <div className="relative -mt-12 md:-mt-28 z-10 max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">This Page Doesn&apos;t Exist</p>

                <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
                    But it loaded <span className="font-serif italic text-cognac">in under a second.</span>
                </h2>

                <p className="text-stone-600 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed">
                    That&apos;s more than most websites we rebuild can say. If your current site is slower than a page that doesn&apos;t exist, we should probably talk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac hover:scale-105 transition-all"
                    >
                        Return Home <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/#audit-widget"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:border-cognac/30 hover:shadow-card transition-all"
                    >
                        Run Free Audit on Your Site
                    </Link>
                </div>

                {/* Common destinations */}
                <div className="pt-8 border-t border-stone-200">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500 mb-4">Or maybe you were looking for</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <Link href="/services/ecommerce" className="text-stone-600 hover:text-cognac transition-colors">Shopify Migration</Link>
                        <Link href="/services/wordpress-migration" className="text-stone-600 hover:text-cognac transition-colors">WordPress Migration</Link>
                        <Link href="/pricing" className="text-stone-600 hover:text-cognac transition-colors">Pricing</Link>
                        <Link href="/work" className="text-stone-600 hover:text-cognac transition-colors">Case Studies</Link>
                        <Link href="/blog" className="text-stone-600 hover:text-cognac transition-colors">Blog</Link>
                        <Link href="/manifesto" className="text-stone-600 hover:text-cognac transition-colors">Manifesto</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
