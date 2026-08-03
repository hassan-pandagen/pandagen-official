import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const continuityControls = [
  {
    area: "Search continuity",
    control: "URLs, canonicals, and indexable content",
    artifact: "Inventory + redirect specification",
  },
  {
    area: "Revenue continuity",
    control: "Forms, checkout paths, and integrations",
    artifact: "Staged end-to-end test log",
  },
  {
    area: "Measurement continuity",
    control: "Analytics, consent, and conversion events",
    artifact: "Baseline + event QA record",
  },
  {
    area: "Operating continuity",
    control: "DNS, launch owners, monitoring, and rollback",
    artifact: "Ownered launch runbook",
  },
];

export default function TrustLogoBar() {
  return (
    <section
      aria-labelledby="migration-standard-heading"
      className="relative isolate overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-cognac/25 blur-3xl"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cognac to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f2a17c]">
              The migration standard
            </p>
            <h2
              id="migration-standard-heading"
              className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
            >
              The rebuild is new.{" "}
              <span className="font-serif italic font-normal text-[#f2a17c]">
                The critical paths stay accounted for.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-stone-300 md:text-lg md:leading-8">
              Before we switch anything over, we write down what has to survive the move and how we will check each one. That is what we mean by SEO-safe: controls on the risk, not a promise about rankings.
            </p>

            <Link
              href="/services/wordpress-migration"
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#f2a17c]/70 pb-1 text-sm font-bold text-white transition-colors hover:border-white hover:text-[#f2a17c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a17c] focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal"
            >
              Review our migration standard
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <figure className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#211c18] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)]">
            <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
              <div>
                <p className="font-serif text-xl italic text-white">Migration continuity ledger</p>
                <p className="mt-1 text-xs text-stone-400">The handover view for systems that cannot disappear during a rebuild.</p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f2a17c]/30 bg-[#f2a17c]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffc2a6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f2a17c]" aria-hidden="true" />
                Defined before launch
              </div>
            </div>

            <div className="hidden grid-cols-[1fr_1.35fr_1.15fr] gap-5 border-b border-white/10 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500 md:grid">
              <span>Continuity</span>
              <span>Control surface</span>
              <span>Client-readable evidence</span>
            </div>

            <ul>
              {continuityControls.map((item) => (
                <li
                  key={item.area}
                  className="group grid gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1.35fr_1.15fr] md:gap-5 md:px-7 md:py-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cognac shadow-[0_0_0_5px_rgba(184,65,12,0.18)]" aria-hidden="true" />
                    <div>
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500 md:hidden">Continuity</span>
                      <span className="font-semibold text-white">{item.area}</span>
                    </div>
                  </div>
                  <div>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500 md:hidden">Control surface</span>
                    <span className="text-sm leading-6 text-stone-300">{item.control}</span>
                  </div>
                  <div>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500 md:hidden">Client-readable evidence</span>
                    <span className="inline-flex items-start gap-2 text-sm font-semibold leading-6 text-[#ffc2a6]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {item.artifact}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <figcaption className="border-t border-white/10 bg-black/15 px-5 py-4 text-xs leading-5 text-stone-400 md:px-7">
              This is an example of the structure. Your signed scope names the actual systems, the checks, who owns each, and what evidence you sign off against.
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-400 lg:flex-row lg:items-center lg:justify-between">
          <p>Custom Next.js and commerce work remains available when the migration requires it.</p>
          <p className="font-semibold text-stone-200">What is included, what is not, how you sign it off, who owns it, and who does what at launch. All in writing.</p>
        </div>
      </div>
    </section>
  );
}
