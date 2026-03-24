"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Clock, DollarSign, ShieldOff } from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    icon: Clock,
    before: "3.2s",
    after: "0.7s",
    label: "Load Time",
    desc: "Guaranteed under 1 second on every build.",
  },
  {
    icon: Zap,
    before: "45",
    after: "100",
    label: "PageSpeed Score",
    desc: "Perfect 100/100 Lighthouse. Not 98. Not 99.",
  },
  {
    icon: DollarSign,
    before: "$150/mo",
    after: "$0/mo",
    label: "Hosting Cost",
    desc: "Zero monthly fees. Forever. You own the code.",
  },
  {
    icon: ShieldOff,
    before: "25+",
    after: "0",
    label: "Plugins Killed",
    desc: "No plugins means no vulnerabilities, no bloat.",
  },
];

export default function SocialProof() {

  return (
    <section className="py-14 bg-white border-b border-stone-200/80">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Clutch Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">

            {/* Header: stars + Clutch badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                {/* 5 stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#e8222f]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs font-bold text-stone-600 uppercase tracking-widest">5.0 · Verified Review</div>
              </div>
              {/* Clutch badge */}
              <Link
                href="https://clutch.co/profile/panda-code-gen#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e8222f] text-white text-xs font-bold hover:bg-[#c91a26] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
                clutch.co
                <ExternalLink className="w-3 h-3 opacity-70" />
              </Link>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed mb-5">
              &ldquo;Hassan was available to me at any time, and his response time was always less than an hour.&rdquo;
            </blockquote>

            {/* Feedback summary */}
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              Panda Code Gen successfully delivered a speedy, bug free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and didn&apos;t charge for revisions. Overall, their expertise and support were commendable.
            </p>

            {/* Reviewer + scores */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-stone-200">
              <div>
                <div className="text-sm font-bold text-charcoal">Executive, MC Patches LLC</div>
                <div className="text-xs text-stone-400 mt-0.5">Manufacturing · Austin, Texas · Oct, Nov 2025</div>
              </div>
              <div className="flex gap-4 text-xs text-stone-400">
                {[["Quality","5.0"],["Schedule","5.0"],["Cost","5.0"],["Refer","5.0"]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <div className="font-bold text-charcoal text-sm">{val}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Trustpilot Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">

            {/* Header: stars + Trustpilot badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                {/* 5 stars, Trustpilot green */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs font-bold text-stone-600 uppercase tracking-widest">5.0 · Trustpilot Review</div>
              </div>
              {/* Trustpilot badge */}
              <Link
                href="https://www.trustpilot.com/review/pandacodegen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00b67a] text-white text-xs font-bold hover:bg-[#009e6a] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                trustpilot.com
                <ExternalLink className="w-3 h-3 opacity-70" />
              </Link>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed mb-5">
              &ldquo;Hassan made all the difference. I&apos;m not tech-savvy, but he broke everything down in a way that made sense.&rdquo;
            </blockquote>

            {/* Feedback summary */}
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I&apos;m not tech-savvy, he broke things down in a way that made sense to me. The service was pretty good overall.
            </p>

            {/* Reviewer */}
            <div className="pt-5 border-t border-stone-200">
              <div className="text-sm font-bold text-charcoal">Marshall James</div>
              <div className="text-xs text-stone-400 mt-0.5">Source: Organic · Mar 2026</div>
            </div>

          </div>

            {/* Review Buttons */}
            <div className="mt-6 max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.trustpilot.com/review/pandacodegen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl border border-stone-200 bg-white text-sm font-bold text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#00b67a">
                  <path d="M12 0L14.7 8.3H23.4L16.35 13.4L19.05 21.7L12 16.6L4.95 21.7L7.65 13.4L0.6 8.3H9.3L12 0Z"/>
                </svg>
                Review us on Trustpilot
              </a>
              <a
                href="https://g.page/r/CU6JJpd0jNDhEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl border border-stone-200 bg-white text-sm font-bold text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Review us on Google
              </a>
            </div>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {metrics.map((m) => (
            <div key={m.label} className="p-5 bg-white border border-stone-200 rounded-2xl shadow-xs hover:border-cognac/30 hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cognac/10">
                  <m.icon className="w-4 h-4 text-cognac" />
                </span>
                <span className="text-xs font-black text-stone-500 uppercase tracking-widest">{m.label}</span>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-black text-cognac leading-none">{m.after}</div>
                <div className="text-stone-500 line-through text-xs font-medium mt-0.5">{m.before}</div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
