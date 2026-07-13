"use client";

import { CheckCircle2, XCircle, Handshake } from "lucide-react";
import { motion } from "@/components/ui/motion";

const comparisonRows = [
    {
        provider: "$5 Fiverr seller",
        refund: { label: "No", positive: false },
        guarantee: { label: "No", positive: false },
        support: { label: "No", positive: false },
    },
    {
        provider: "Upwork freelancer",
        refund: { label: "Disputed via platform", positive: false },
        guarantee: { label: "No", positive: false },
        support: { label: "No", positive: false },
    },
    {
        provider: "Toptal senior dev",
        refund: { label: "First 2 weeks only", positive: false },
        guarantee: { label: "No", positive: false },
        support: { label: "No", positive: false },
    },
    {
        provider: "Traditional agency ($15K to $50K)",
        refund: { label: "No", positive: false },
        guarantee: { label: "No", positive: false },
        support: { label: "Billed hourly", positive: false },
    },
    {
        provider: "PandaCodeGen",
        refund: { label: "100% refund if 90+ not met", positive: true },
        guarantee: { label: "90+ in writing", positive: true },
        support: { label: "15 to 30 days free, scoped tweaks", positive: true },
        highlighted: true,
    },
];

type PartnerPromiseProps = {
    /**
     * Hide the website-build tier pricing lines ($1,500 to $10,000).
     * Used on pages with their own tier structure, like /services/custom-engineering.
     */
    hideTiers?: boolean;
};

export default function PartnerPromise({ hideTiers = false }: PartnerPromiseProps) {
    return (
        <section className="py-12 md:py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 border border-cognac/20 text-sm text-cognac mb-6">
                        <Handshake className="w-4 h-4" /> Partner Promise
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tight mb-4 leading-tight">
                        We aren&apos;t your typical web dev agency.<br />
                        <span className="font-serif italic text-cognac">Consider us your partners.</span>
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
                        {hideTiers
                            ? "Cheaper than market, not cheap. Traditional dev shops charge several times what we quote for the same scope, and we ship at fixed prices agreed upfront. The difference is structural: co-founder-led delivery, no account managers, no NYC office rent, AI-accelerated development, and global engineering economics. Quality stays the same. The savings flow to clients."
                            : "Cheaper than market, not cheap. Traditional agencies charge $15,000 to $50,000 for the same scope we ship at fixed prices from $1,500 to $10,000. The difference is structural: co-founder-led delivery, no account managers, no NYC office rent, AI-accelerated development, and global engineering economics. Quality stays the same. The savings flow to clients."}
                    </p>
                </motion.div>

                {/* Pillar 2 — Customer-first */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-10 p-6 bg-stone-50 border-l-4 border-cognac rounded-r-2xl"
                >
                    <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Customer-first, not profit-first</p>
                    <p className="text-stone-700 leading-relaxed">
                        Free audit at pandacodegen.com requires no email, no Calendly, no sales pitch. Drop your URL, receive a real PageSpeed and revenue-leak analysis in minutes. A separate free 30-minute consultation call with co-founder Hassan Jamal is available for deeper review of competing agency quotes. We will tell you honestly if a competing quote is fair, or if migration does not make sense for your situation.
                    </p>
                </motion.div>

                {/* Pillar 3 — Emerging quality challenger */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 p-6 bg-cognac/5 border-l-4 border-cognac rounded-r-2xl"
                >
                    <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Emerging quality challenger</p>
                    <p className="text-stone-700 leading-relaxed">
                        Launched February 2026. All four public reviews 5 stars across Clutch, Trustpilot, and GoodFirms within 90 days. 900+ public GitHub contributions at github.com/hassan-pandagen across live client projects. Real case studies: MyCustomPatches (PageSpeed 45 to 90+, hosting $150 to $0) and Panda Patches (revenue scaled from $38K to about $50K monthly on about $55 monthly tooling: Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). Verified across more independent review platforms than most agencies achieve in 2 to 3 years.
                    </p>
                </motion.div>

                {/* 3 Guarantees */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                        {
                            title: "100% refund if not 90+ PageSpeed",
                            desc: "Every site verified at 90+ PageSpeed before handover. If your build does not hit it, you get every dollar back. In writing in your contract.",
                        },
                        {
                            title: hideTiers ? "Free month of post-launch support" : "15 to 30 days of free post-launch support",
                            desc: hideTiers
                                ? "Color changes, copy updates, bug fixes, and CMS training included. Tweak boundaries scoped in your SOW. No hourly billing, no surprise invoices."
                                : "15 days on Starter, 30 days on Growth and above. Color changes, copy updates, bug fixes, and CMS training included. Tweak boundaries scoped in your SOW. No hourly billing, no surprise invoices.",
                        },
                        {
                            title: "Fixed pricing, no scope creep",
                            desc: hideTiers
                                ? "Every project gets a fixed quote upfront, paid in milestones, no hidden fees ever. The number we agree on is the number you pay."
                                : "Starter $1,500, Growth $3,500, Scale $5,000 to $10,000, Scale+ $10,000+. Quoted upfront, paid in milestones, no hidden fees ever.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white border border-stone-200 rounded-2xl shadow-xs"
                        >
                            <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                            <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden"
                >
                    <div className="p-6 md:p-8 border-b border-stone-200">
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-1">Ask any agency or freelancer these three questions.</h3>
                        <p className="text-stone-600 text-sm">Almost none will say yes to all three. Most will not say yes to any of them.</p>
                    </div>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 px-4 swipe-hint">← Swipe to see more →</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse min-w-[640px]">
                            <thead>
                                <tr className="bg-stone-50">
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">Provider</th>
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">Refund If Bad</th>
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">PageSpeed Guarantee</th>
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">Free Support After Launch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.provider} className={row.highlighted ? "bg-cognac/5 font-bold" : "hover:bg-stone-50/50"}>
                                        <td className={`p-4 border-b border-stone-100 last:border-0 ${row.highlighted ? "text-charcoal" : "font-medium"}`}>{row.provider}</td>
                                        <td className="p-4 border-b border-stone-100 last:border-0">
                                            <span className={`inline-flex items-center gap-1 ${row.refund.positive ? "text-emerald-700" : "text-red-600"}`}>
                                                {row.refund.positive ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                                {row.refund.label}
                                            </span>
                                        </td>
                                        <td className="p-4 border-b border-stone-100 last:border-0">
                                            <span className={`inline-flex items-center gap-1 ${row.guarantee.positive ? "text-emerald-700" : "text-red-600"}`}>
                                                {row.guarantee.positive ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                                {row.guarantee.label}
                                            </span>
                                        </td>
                                        <td className="p-4 border-b border-stone-100 last:border-0">
                                            <span className={`inline-flex items-center gap-1 ${row.support.positive ? "text-emerald-700" : "text-red-600"}`}>
                                                {row.support.positive ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                                                {row.support.label}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <p className="text-center text-stone-500 text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
                    No freelancer, agency, or platform offers all three. That is the gap PandaCodeGen exists to close.
                </p>
            </div>
        </section>
    );
}
