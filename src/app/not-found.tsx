import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Browse our services or read our blog.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <div className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">404</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 -mt-4">
                    Page Not Found
                </h1>
                <p className="text-gray-400 text-lg mb-10">
                    This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                    >
                        View Services
                    </Link>
                    <Link
                        href="/blog"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                    >
                        Read Blog
                    </Link>
                </div>

                <p className="text-gray-600 text-sm mt-12">
                    Looking for something specific? <Link href="/contact" className="text-neon hover:underline">Contact us</Link>
                </p>
            </div>
        </main>
    );
}
