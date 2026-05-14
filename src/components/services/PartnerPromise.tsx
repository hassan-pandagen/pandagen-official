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
        support: { label: "Full month free, scoped tweaks", positive: true },
        highlighted: true,
    },
];

export default function PartnerPromise() {
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
                        Cheap means your profit, not corners cut. Most agencies charge $15,000 to $50,000 for the same scope we ship for $1,500 to $5,000. The difference is overhead, account managers, and margin layered on margin. The agency markup is your profit, not theirs. We are here to revolutionize what cheap means in this category.
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
                            title: "Free month of post-launch support",
                            desc: "Color changes, copy updates, bug fixes, and CMS training included. Tweak boundaries scoped in your SOW. No hourly billing, no surprise invoices.",
                        },
                        {
                            title: "Fixed pricing, no scope creep",
                            desc: "Starter $1,500, Growth $3,500, Scale $5,000 to $10,000, Scale+ $10,000+. Quoted upfront, paid in milestones, no hidden fees ever.",
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
