import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Browse our services or read our blog.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-paper flex flex-col items-center justify-center text-center px-6">
            {/* Huge serif background number */}
            <h1 className="text-[10rem] md:text-[18rem] font-serif leading-none text-stone-200 select-none">
                404
            </h1>

            <div className="relative -mt-12 md:-mt-20 z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-serif">
                    Page not found.
                </h2>
                <p className="text-stone-500 max-w-md mx-auto mb-10 text-lg">
                    This page has been moved, deleted, or never existed. Let&apos;s get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 hover:scale-105 transition-all"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-transparent border border-stone-300 text-charcoal font-bold rounded-full hover:bg-white hover:border-stone-400 transition-all"
                    >
                        Contact Support
                    </Link>
                </div>

                <p className="text-stone-400 text-sm mt-12">
                    Looking for something specific?{" "}
                    <Link href="/contact" className="text-cognac hover:underline">Contact us</Link>
                </p>
            </div>
        </main>
    );
}
