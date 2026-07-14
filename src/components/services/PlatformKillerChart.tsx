"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export type ComparisonMetric = {
  metric: string;
  themLabel: string;
  usLabel: string;
  /** Visual bar width 0-100. Higher = longer bar. Lower "themPct" = them worse. */
  themPct: number;
  usPct: number;
  icon: LucideIcon;
};

export type SavingsLine = {
  label: string;
  amount: string;
};

type Props = {
  /** Tiny badge text above the headline (e.g. "WARNING", "THE WIX CEILING"). */
  badge: string;
  /** Headline top line, default charcoal. */
  headline: string;
  /** Headline bottom line — rendered with cognac italic serif accent. */
  headlineAccent: string;
  /** First paragraph under the headline — specific math / receipts. */
  description: string;
  /** Optional second paragraph — the "nobody tells you this / no pitch" closing. */
  descriptionSecondary?: string;
  /** Short label for the comparison card header (e.g. "WordPress vs Custom"). */
  comparisonTitle: string;
  /** Short "Them" column header (e.g. "WordPress", "Wix", "Squarespace"). */
  themLabel: string;
  /** Short "Us" column header — always "Custom" unless overridden. */
  usLabel?: string;
  metrics: ComparisonMetric[];
  /** Itemized savings lines. */
  savingsLines: SavingsLine[];
  /** Total per year savings number, e.g. "$12,600". */
  totalPerYear: string;
  /** Optional: pre-click handler for the "Calculate Savings" button. */
  onOpenQuote?: () => void;
};

export default function PlatformKillerChart({
  badge,
  headline,
  headlineAccent,
  description,
  descriptionSecondary,
  comparisonTitle,
  themLabel,
  usLabel = "Custom",
  metrics,
  savingsLines,
  totalPerYear,
  onOpenQuote,
}: Props) {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Atmospheric glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-red-100/30 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl md:rounded-4xl overflow-hidden bg-white border border-red-200 shadow-[0_20px_60px_rgba(0,0,0,0.06),0_0_0_1px_rgba(239,68,68,0.08)]">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

              {/* LEFT: Pain hero */}
              <div className="p-6 md:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full w-fit mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-[0.22em]">{badge}</span>
                </div>

                <h2 className="text-[2rem] md:text-[3.5rem] font-bold text-charcoal leading-[1.05] tracking-[-0.025em] mb-4">
                  {headline}
                </h2>

                <h3 className="text-[2rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-[-0.025em] mb-6 md:mb-8">
                  <span className="font-serif italic text-cognac">
                    {headlineAccent}
                  </span>
                </h3>

                <p className="text-base md:text-lg text-stone-600 mb-5 leading-[1.7] max-w-md font-medium">
                  {description}
                </p>

                {descriptionSecondary && (
                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-[1.7] max-w-md font-medium">
                    {descriptionSecondary}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="group px-6 py-3 md:px-8 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
                  >
                    Calculate Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    data-cal-namespace="discovery"
                    data-cal-link="pandagen/discovery"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-stone-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                  >
                    Book Audit
                  </button>
                </div>
              </div>

              {/* RIGHT: Savings number first (emotional punch), then comparison chart (justification) */}
              <div className="p-6 md:p-10 md:border-l border-stone-200 bg-stone-50/50 overflow-x-hidden space-y-6">

                {/* 1. SAVINGS — shown FIRST to hit with the dollar loss immediately */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white border border-stone-200 shadow-card overflow-hidden"
                >
                  {/* Big dollar number at the top */}
                  <div className="px-5 md:px-6 py-5 bg-linear-to-br from-emerald-600 to-green-700 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white mb-1">Your Potential Savings</p>
                        <p className="text-sm text-white/90 font-medium italic">what this mess costs you every year.</p>
                      </div>
                      <p className="text-3xl md:text-4xl font-black tracking-tight leading-none text-white">{totalPerYear}<span className="text-sm text-white/80 font-semibold">/yr</span></p>
                    </div>
                  </div>

                  {/* Itemized breakdown */}
                  <div className="divide-y divide-stone-100">
                    {savingsLines.map((line, i) => (
                      <motion.div
                        key={line.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between px-5 md:px-6 py-2.5 text-xs md:text-sm"
                      >
                        <span className="text-charcoal font-medium truncate pr-2">{line.label}</span>
                        <span className="text-red-500 font-bold whitespace-nowrap tracking-tight">{line.amount}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* 2. Metric comparison — justifies the number above */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="rounded-2xl bg-white border border-stone-200 shadow-card overflow-hidden"
                >
                  <div className="px-5 md:px-6 py-4 md:py-5 border-b border-stone-200 bg-linear-to-br from-stone-50 via-white to-white">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-1.5">Why that number?</p>
                        <h4 className="text-base md:text-lg font-bold text-charcoal tracking-tight">{comparisonTitle}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-bold mt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="text-red-500">{themLabel}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-emerald-600">{usLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 md:px-6 py-5 space-y-4">
                    {metrics.map((row, i) => (
                      <motion.div
                        key={row.metric}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center gap-2">
                          <row.icon className="w-4 h-4 text-cognac" strokeWidth={2} />
                          <span className="text-xs md:text-sm text-charcoal font-semibold tracking-tight">{row.metric}</span>
                        </div>
                        {/* Them bar — pure CSS bar grow on scroll-into-view via the parent's data-reveal toggle.
                            We can't animate width through the motion shim (it only handles opacity/transform),
                            so the bar uses `transition: width 0.6s` and the parent FadeIn flips a class. */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from-red-300 to-red-400 rounded-full transition-[width] duration-600 ease-out"
                              style={{ width: `${row.themPct}%`, transitionDelay: `${200 + i * 60}ms` }}
                            />
                          </div>
                          <span className="text-[11px] md:text-xs text-red-500 font-bold w-[72px] md:w-[96px] text-right shrink-0 tracking-tight truncate">{row.themLabel}</span>
                        </div>
                        {/* Us bar */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from-emerald-400 to-green-500 rounded-full transition-[width] duration-600 ease-out"
                              style={{ width: `${row.usPct}%`, transitionDelay: `${300 + i * 60}ms` }}
                            />
                          </div>
                          <span className="text-[11px] md:text-xs text-emerald-600 font-bold w-[72px] md:w-[96px] text-right shrink-0 tracking-tight truncate">{row.usLabel}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extractable comparison table, semantic HTML for AI citation + accessibility (mirrors the chart) */}
      <div className="max-w-3xl mx-auto mt-8 px-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{comparisonTitle} comparison</caption>
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Metric</th>
                <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">{themLabel}</th>
                <th className="border border-stone-300 px-4 py-3 text-left font-semibold text-charcoal">Custom Next.js</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row) => (
                <tr key={row.metric} className="odd:bg-white even:bg-stone-50">
                  <td className="border border-stone-300 px-4 py-3 font-medium text-charcoal">{row.metric}</td>
                  <td className="border border-stone-300 px-4 py-3 text-stone-600">{row.themLabel}</td>
                  <td className="border border-stone-300 px-4 py-3 text-stone-700">{row.usLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
