"use client";

import { CheckCircle2, Handshake } from "lucide-react";
import { motion } from "@/components/ui/motion";

const reviewRows = [
    {
        area: "What you get, and what you do not",
        discovery: "List what they have today, what it depends on, and what we are assuming",
        proposal: "Say what is included, what is not, who does what, and how changes get handled",
    },
    {
        area: "Speed, and how we prove it",
        discovery: "Record a dated baseline, and name what only the client can change",
        proposal: "Agree the target, which pages, which tools, the test conditions, and how it gets signed off",
    },
    {
        area: "Payment, support and who owns it",
        discovery: "Talk through payment, support, ownership, access, and what happens at handover",
        proposal: "State the milestones, what support covers, the licences, the handover, and what happens if something is wrong",
    },
];

type PartnerPromiseProps = {
    /** Selects the label used for individually scoped custom-engineering work. */
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
                        <Handshake className="w-4 h-4" /> {hideTiers ? "Custom Scope Review" : "Project Scope Review"}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal tracking-tight mb-4 leading-tight">
                        Start with evidence.{" "}
                        <span className="font-serif font-normal italic text-cognac md:block">Put the agreement in writing.</span>
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
                        The call is where we work out what you have, what you want, and what is in the way. Nothing is a commitment until it is in your written quote. For most projects that quote is a short document you accept by email. Regulated or complex work gets a fuller agreement.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-10 p-6 bg-stone-50 border-l-4 border-cognac rounded-r-2xl"
                >
                    <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Diagnostic first</p>
                    <p className="text-stone-700 leading-relaxed">
                        We begin with the URL, stack, content, integrations, analytics, and operational constraints. Automated audit output is treated as an estimate to investigate, not proof of revenue loss or a guaranteed business result.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 p-6 bg-cognac/5 border-l-4 border-cognac rounded-r-2xl"
                >
                    <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Evidence before outcomes</p>
                    <p className="text-stone-700 leading-relaxed">
                        Any speed number, ours or anyone else's, is a snapshot of one day. Your quote names which pages we test, on what device, with which tool, and what counts as passing.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                        {
                            title: "Scope before certainty",
                            desc: "The proposal says what is included, what is not, what we need from the client, what it depends on, and how changes get approved.",
                        },
                        {
                            title: "Targets need a method",
                            desc: "If there is a performance or visibility target, we write down how it gets measured and what happens if it is missed.",
                        },
                        {
                            title: "Terms belong in the proposal",
                            desc: "Payment milestones, support coverage, ownership, licenses, handover, and out-of-scope work are confirmed in writing.",
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
                            <CheckCircle2 className="w-6 h-6 text-emerald-700 mb-3" />
                            <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden"
                >
                    <div className="p-6 md:p-8 border-b border-stone-200">
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-1">What should be documented before work starts</h3>
                        <p className="text-stone-600 text-sm">Use the call to get the facts. Use the written quote for the promises.</p>
                    </div>

                    <p className="md:hidden text-xs font-bold text-cognac mt-4 mb-2 px-4 swipe-hint">← Swipe to see more →</p>
                    <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
                        <table className="w-full text-sm border-collapse min-w-[640px]">
                            <thead>
                                <tr className="bg-stone-50">
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">Review area</th>
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">During discovery</th>
                                    <th className="text-left p-4 font-bold text-charcoal border-b border-stone-200">In the written proposal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviewRows.map((row) => (
                                    <tr key={row.area} className="hover:bg-stone-50/50">
                                        <td className="p-4 border-b border-stone-100 font-bold text-charcoal">{row.area}</td>
                                        <td className="p-4 border-b border-stone-100 text-stone-600">{row.discovery}</td>
                                        <td className="p-4 border-b border-stone-100">
                                            <span className="inline-flex items-start gap-2 text-emerald-700 font-medium">
                                                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                                                {row.proposal}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <p className="text-center text-stone-600 text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
                    If a commercial term, target, or remedy is not in the written project terms accepted by both parties, this page should not be read as creating that commitment.
                </p>
            </div>
        </section>
    );
}
