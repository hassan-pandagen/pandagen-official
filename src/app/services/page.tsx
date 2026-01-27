import { motion } from "framer-motion";
import {
    ArrowRight,
    Database,
    Code2,
    ShoppingCart,
    CheckCircle2,
    Server,
    Globe,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import ServiceSection from "@/components/ui/ServiceSection";

export const metadata = {
    title: "Services | PandaGenCode - Custom Web Development Agency",
    description:
        "Enterprise web development services: platform migration, custom SaaS engineering, and headless e-commerce. Built for scale, priced for growth.",
};

export default function ServicesPage() {
    return (
        <main className="bg-[#050505] min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
            {/* 1. SERVICES HERO */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
                    >
                        Capabilities <span className="text-gray-600">&</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-400 to-purple-400">
                            Engineering
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        We don't sell features. We sell architectural superiority.
                    </motion.p>
                </div>
            </section>

            {/* 2. THE BIG 3 PILLARS (Z-Pattern) */}
            <div className="space-y-32 pb-32">
                {/* PILLAR 1: MIGRATION (Replaces API Dev) */}
                <ServiceSection
                    id="01"
                    title="Platform Migration"
                    subtitle="Escape the Monolith"
                    description="We specialize in rescuing data from legacy platforms. Whether it's a bloated WordPress site or a locked-down Shopify store, we extract your data and rebuild it into a high-performance Next.js engine."
                    tags={[
                        "WordPress to Next.js",
                        "Shopify to Headless",
                        "Database Re-architecting",
                    ]}
                    features={[
                        "Zero Data Loss Guarantee",
                        "SEO URL Mapping (No 404s)",
                        "Admin Panel Training",
                        "Automated Content Sync",
                    ]}
                    align="left"
                    icon="database"
                    gradient="from-orange-500/20 to-red-600/5"
                >
                    {/* VISUAL: Data Flow Animation */}
                    <div className="relative h-full w-full bg-grid-white/[0.05] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
                        <div className="flex items-center gap-8">
                            {/* Old */}
                            <div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center grayscale opacity-50">
                                <div className="text-xs text-gray-500 font-mono">LEGACY</div>
                            </div>
                            {/* Arrow */}
                            <div className="relative">
                                <div className="h-0.5 w-20 bg-gray-700" />
                                <motion.div
                                    animate={{ x: [-40, 40], opacity: [0, 1, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute top-1/2 left-1/2 -translate-y-1/2 w-8 h-1 bg-orange-500 blur-sm"
                                />
                            </div>
                            {/* New */}
                            <div className="w-24 h-24 rounded-xl bg-orange-500/20 border border-orange-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                                <Server className="w-10 h-10 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </ServiceSection>

                {/* PILLAR 2: CUSTOM BUILD */}
                <ServiceSection
                    id="02"
                    title="Custom Engineering"
                    subtitle="SaaS & Web Apps"
                    description="For businesses that have outgrown templates. We build bespoke applications with complex logic, real-time data, and bank-grade security."
                    tags={[
                        "React / Next.js",
                        "Supabase / PostgreSQL",
                        "Stripe Integration",
                    ]}
                    features={[
                        "Real-time Dashboards",
                        "Role-Based Access Control",
                        "Subscription Logic",
                        "Global CDN Deployment",
                    ]}
                    align="right"
                    icon="code"
                    gradient="from-blue-500/20 to-purple-600/5"
                >
                    {/* VISUAL: Code Window */}
                    <div className="relative h-full w-full bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden p-8">
                        <div className="flex items-center gap-2 mb-4 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-1/3 bg-blue-500/30 rounded" />
                            <div className="h-2 w-2/3 bg-white/10 rounded" />
                            <div className="h-2 w-1/2 bg-white/10 rounded" />
                            <div className="h-2 w-3/4 bg-white/10 rounded" />
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="h-2 w-5/6 bg-blue-500/50 rounded shadow-[0_0_15px_rgba(59,130,246,0.3)] mt-4"
                            />
                        </div>
                    </div>
                </ServiceSection>

                {/* PILLAR 3: HEADLESS E-COMMERCE */}
                <ServiceSection
                    id="03"
                    title="Headless E-Commerce"
                    subtitle="Shopify Plus + Next.js"
                    description="Keep the Shopify backend you love, but replace the slow frontend with a blazing fast Next.js storefront. This is how brands like Nike and MrBeast scale."
                    tags={[
                        "Shopify Storefront API",
                        "Sanity CMS",
                        "Conversion Optimization",
                    ]}
                    features={[
                        "Instant Page Loads",
                        "Custom Checkout Flow",
                        "A/B Testing Architecture",
                        "Omnichannel Inventory",
                    ]}
                    align="left"
                    icon="shopping-cart"
                    gradient="from-green-500/20 to-emerald-600/5"
                >
                    {/* VISUAL: Product Card */}
                    <div className="relative h-full w-full bg-grid-white/[0.05] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-24 bg-gradient-to-br from-green-500/20 to-transparent rounded mb-4" />
                            <div className="h-2 w-full bg-white/20 rounded mb-2" />
                            <div className="h-2 w-1/2 bg-white/20 rounded" />
                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full">
                                BUY
                            </div>
                        </div>
                    </div>
                </ServiceSection>
            </div>

            {/* 3. CTA */}
            <section className="container mx-auto px-6 pb-20 text-center">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Stop settling for templates.
                        </h2>
                        <button
                            data-cal-namespace="discovery"
                            data-cal-link="pandagen/discovery"
                            data-cal-config='{"layout":"month_view"}'
                            className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105"
                        >
                            Book Discovery Call
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
