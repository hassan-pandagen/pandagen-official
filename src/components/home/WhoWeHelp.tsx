import { Gauge, ShoppingBag, Users, Zap, DollarSign, LayoutDashboard, Sparkles, Target } from "lucide-react";

// Homepage ICP block — the 8 buyers PandaCodeGen serves (mirrors /ai-info "Who We Help").
const SEGMENTS = [
  { icon: Gauge, who: "Stuck on a slow platform", desc: "WordPress, Shopify theme, Wix, Squarespace or Webflow that's slow and full of monthly fees. We migrate you to custom code you own." },
  { icon: ShoppingBag, who: "$1M+ store hitting the ceiling", desc: "Your theme and apps cap your speed and conversion. We go headless, keep your backend, rebuild the storefront for sub-second loads." },
  { icon: Users, who: "An agency without a dev team", desc: "You sell the project, we build it. White-label, referral or joint venture. Your client never sees us." },
  { icon: Zap, who: "On GoHighLevel, site too slow", desc: "Keep the GHL CRM and automations. We replace just the slow public site with a fast custom front-end." },
  { icon: DollarSign, who: "Drowning in SaaS subscriptions", desc: "CRM, forms, booking, plugins, all climbing every year. We build custom you own once and cut the bill 40 to 70%." },
  { icon: LayoutDashboard, who: "Running on spreadsheets + 5 tools", desc: "No real-time view of the business. We build a custom ops platform and dashboard on one codebase you own." },
  { icon: Sparkles, who: "Want AI to recommend you", desc: "Buyers shortlist through ChatGPT, Claude and Google AI now. We engineer your site to get cited by them." },
  { icon: Target, who: "Your ad tracking is broken", desc: "iOS and cookie loss wrecked your Meta and Google tracking. We build server-side tracking so your ROAS is real again." },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white border-y border-stone-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cognac">Who we help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mt-3 mb-3">Sound like you?</h2>
          <p className="text-stone-600 max-w-2xl mx-auto" data-speakable="true">
            Eight kinds of business we fix. If one of these is you, we should talk.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEGMENTS.map((s) => (
            <div key={s.who} className="p-5 rounded-2xl bg-paper border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-cognac" />
              </div>
              <h3 className="font-bold text-charcoal text-sm mb-2">{s.who}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
