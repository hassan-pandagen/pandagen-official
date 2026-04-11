"use client";

import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, ShieldOff, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    platform: "Clutch",
    platformColor: "#b91c25",
    starColor: "#e8222f",
    title: "Available at any time. Response always under an hour.",
    body: "Panda Code Gen successfully delivered a speedy, bug free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and didn't charge for revisions. Overall, their expertise and support were commendable.",
    name: "Matt Conner",
    initials: "MC",
    initialsColor: "#b91c25",
    detail: "MC Patches LLC",
    date: "Nov 2025",
    verified: true,
    url: "https://clutch.co/profile/panda-code-gen#reviews",
  },
  {
    platform: "Trustpilot",
    platformColor: "#007a54",
    starColor: "#00b67a",
    title: "Hassan made all the difference",
    body: "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I'm not tech-savvy, he broke things down in a way that made sense to me. The service was pretty good overall.",
    name: "Marshall James",
    initials: "MJ",
    initialsColor: "#007a54",
    detail: "",
    date: "Mar 2026",
    verified: true,
    url: "https://www.trustpilot.com/review/pandacodegen.com",
  },
  {
    platform: "Google",
    platformColor: "#1a73e8",
    starColor: "#f4b400",
    title: "They worked with me to make a website I could afford",
    body: "I was not sure at first. Can a custom website really be built for $300 with no costs? PandaCodeGen. Hassan showed me it can be done. They gave me a quote at first. They worked with me to make a website that I could afford. They made sure there are no costs or extra fees. PandaCodeGen and Hassan are good at what they do. They care about their customers.",
    name: "James Peace",
    initials: "JP",
    initialsColor: "#1e7e34",
    detail: "",
    date: "Mar 2026",
    verified: true,
    url: "https://www.google.com/maps?cid=16271659886069582158",
  },
  {
    platform: "Trustpilot",
    platformColor: "#007a54",
    starColor: "#00b67a",
    title: "PandaCodeGen really understood what I needed",
    body: "I was on the fence about leaving Squarespace, but PandaCodeGen really understood what I needed. I talked to a few other agencies and PandaCodeGen's proposal aligned best with my vision. They migrated my site in 10 days and did exactly what they said they'd do. Super happy with the result! Would definitely recommend them.",
    name: "Richard Junior",
    initials: "RJ",
    initialsColor: "#007a54",
    detail: "",
    date: "Apr 2026",
    verified: true,
    url: "https://www.trustpilot.com/review/pandacodegen.com",
  },
];

const platformBadges = [
  { name: "Clutch", rating: "5.0", count: "1", color: "#e8222f", url: "https://clutch.co/profile/panda-code-gen" },
  { name: "Trustpilot", rating: "5.0", count: "3", color: "#00b67a", url: "https://www.trustpilot.com/review/pandacodegen.com" },
  { name: "Google", rating: "5.0", count: "4", color: "#1a73e8", url: "https://www.google.com/maps?cid=16271659886069582158" },
  { name: "GoodFirms", rating: "5.0", count: "1", color: "#b8860b", url: "https://www.goodfirms.co/company/pandacodegen" },
  { name: "Sortlist", rating: "5.0", count: "2", color: "#0f172a", url: "https://www.sortlist.com/agency/pandacodegen" },
];

const metrics = [
  { icon: Clock, before: "3.2s", after: "0.7s", label: "Load Time", desc: "Guaranteed under 1 second on every build." },
  { icon: Zap, before: "45", after: "100", label: "PageSpeed Score", desc: "Perfect 100/100 Lighthouse. Not 98. Not 99." },
  { icon: DollarSign, before: "$150/mo", after: "$0/mo", label: "Hosting Cost", desc: "Zero monthly fees. Forever. You own the code." },
  { icon: ShieldOff, before: "25+", after: "0", label: "Plugins Killed", desc: "No plugins means no vulnerabilities, no bloat." },
];

function Stars({ color, count = 5 }: { color: string; count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5" style={{ color }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      className="bg-[#faf9f7] border-b border-stone-200/80"
      style={{ paddingTop: "var(--space-section-sm)", paddingBottom: "var(--space-section-sm)" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Platform Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-4"
        >
          {platformBadges.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-xs font-bold text-stone-600 hover:border-stone-400 transition-all"
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: b.color }} />
              {b.name} {b.rating} · {b.count} {Number(b.count) === 1 ? "review" : "reviews"}
            </a>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">What Our Clients Say</h2>
          <p className="text-stone-500 text-sm">Real projects. Real results. Real people.</p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Scroll Arrows (desktop only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-stone-200 shadow-md hover:bg-stone-50 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-stone-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-stone-200 shadow-md hover:bg-stone-50 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-stone-600" />
          </button>

          {/* Grid on desktop, horizontal scroll on mobile */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 md:pb-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto snap-start bg-white border border-stone-200 rounded-2xl p-5 hover:shadow-lg hover:border-stone-300 transition-all duration-200 flex flex-col"
              >
                {/* Stars */}
                <Stars color={r.starColor} />

                {/* Title */}
                <h3 className="font-bold text-charcoal text-base mt-3 mb-2 leading-snug">{r.title}</h3>

                {/* Full Review Body */}
                <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-4">{r.body}</p>

                {/* Reviewer Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: r.initialsColor }}
                  >
                    {r.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-charcoal">{r.name}</span>
                      {r.verified && (
                        <svg className="w-4 h-4 text-[#00b67a] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-xs text-stone-500">{r.detail}{r.detail && " · "}{r.date}</div>
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shrink-0"
                    style={{ backgroundColor: r.platformColor, color: "#fff" }}
                  >
                    {r.platform}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Scroll Hint (mobile) */}
          <div className="flex md:hidden justify-center mt-2 gap-1.5">
            {reviews.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-300" />
            ))}
          </div>
        </div>

        {/* Review CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8 mb-12">
          <a
            href="https://www.trustpilot.com/review/pandacodegen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-xs hover:bg-[#00b67a] hover:text-white hover:border-[#00b67a] transition-all"
          >
            Review us on Trustpilot
          </a>
          <a
            href="https://g.page/r/CU6JJpd0jNDhEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-xs hover:bg-charcoal hover:text-white hover:border-charcoal transition-all"
          >
            Review us on Google
          </a>
        </div>

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
