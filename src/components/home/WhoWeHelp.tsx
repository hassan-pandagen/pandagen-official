import { Gauge, ShoppingBag, Users, Zap, DollarSign, LayoutDashboard, Sparkles, Target } from "lucide-react";

// Homepage ICP block. Each card presents a starting condition and the diagnostic
// approach used before a build, migration, or commercial outcome is proposed.
const SEGMENTS = [
  {
    icon: Target,
    signal: "Paid-media reporting does not reconcile with observed enquiries or sales.",
    approach: "Audit browser and server events, consent, attribution boundaries, and platform diagnostics before proposing tracking changes.",
  },
  {
    icon: ShoppingBag,
    signal: "Customers leave somewhere between product discovery and completed checkout.",
    approach: "Measure page performance and the checkout path, identify supported causes, and scope only the changes the evidence justifies.",
  },
  {
    icon: Users,
    signal: "An agency needs engineering capacity with clear roles and accountable communication.",
    approach: "Document delivery roles, branding, confidentiality, approvals, timing assumptions, and commercial terms in the partner agreement.",
  },
  {
    icon: DollarSign,
    signal: "Recurring tools overlap, create manual work, or are difficult to evaluate as a total stack.",
    approach: "Inventory subscriptions and replacement costs, then recommend custom software only where the expected benefit justifies build and maintenance.",
  },
  {
    icon: Gauge,
    signal: "The current website platform creates measurable performance or maintenance constraints.",
    approach: "Map URLs, content, integrations, DNS, analytics, rollback needs, and platform costs before recommending optimization or migration.",
  },
  {
    icon: Zap,
    signal: "Existing GoHighLevel workflows remain useful while the public website needs independent review.",
    approach: "Assess frontend performance and API compatibility, then document which CRM workflows can remain and which dependencies need changes.",
  },
  {
    icon: Sparkles,
    signal: "Important content is difficult for search and answer systems to discover, interpret, or attribute.",
    approach: "Audit crawlability, entity clarity, structured data, answer formatting, and source quality; inclusion and citation remain controlled by third parties.",
  },
  {
    icon: LayoutDashboard,
    signal: "Operational data is fragmented across spreadsheets and tools without a reliable source of truth.",
    approach: "Map workflows, permissions, data sources, update frequency, and reporting needs before scoping a dashboard or integration.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-28 px-6 bg-white border-y border-stone-200">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cognac">Who we help</span>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mt-3 mb-4 tracking-tight">Start with the situation.</h2>
          <p className="text-lg text-stone-600 leading-relaxed" data-speakable="true">
            These are common starting conditions. We investigate the closest match before recommending a build, migration, or integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {SEGMENTS.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-stone-300 shadow-md transition-all duration-300 hover:ring-cognac/50 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Cognac spine: a crafted accent that lifts on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-cognac/0 group-hover:bg-cognac/60 transition-colors duration-300"
              />

              {/* Zone 1: the condition to investigate */}
              <div className="relative flex-1 p-7 md:p-9 pb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-cognac mb-3">Starting condition</p>
                <p className="relative z-10 font-serif italic text-xl md:text-2xl text-charcoal leading-snug">
                  {s.signal}
                </p>
              </div>

              {/* Zone 2: diagnostic approach on a tinted footer band */}
              <div className="flex items-start gap-3 px-7 md:px-9 py-5 bg-stone-100/70 border-t border-stone-200">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--color-cognac) 0%, #8a2f07 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 2px 6px rgba(184,65,12,0.25)",
                  }}
                >
                  <s.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
                <p className="text-sm md:text-[15px] text-stone-600 leading-relaxed">{s.approach}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
