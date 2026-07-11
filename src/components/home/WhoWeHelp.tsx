import { Gauge, ShoppingBag, Users, Zap, DollarSign, LayoutDashboard, Sparkles, Target } from "lucide-react";

// Homepage ICP block — the 8 buyers PandaCodeGen serves, written in their OWN inner voice.
// Voice-of-customer quotes so a visitor reads their own sentence and thinks "that's me".
const SEGMENTS = [
  {
    icon: Target,
    quote: "I'm paying for Meta ads, but the sales aren't showing up, and nobody can tell me why.",
    answer: "iOS and cookie loss quietly broke your tracking. We wire up server-side tracking so your real ROAS comes back.",
  },
  {
    icon: ShoppingBag,
    quote: "People add to cart, then disappear before they ever pay.",
    answer: "It looks like a conversion problem, but the real cause is speed. We rebuild your storefront for sub-second loads so buyers actually check out.",
  },
  {
    icon: Users,
    quote: "I've been burned by freelancers who miss deadlines and go quiet.",
    answer: "We're the white-label team that ships fast and stays invisible, your brand on everything, your client never sees us.",
  },
  {
    icon: DollarSign,
    quote: "Half my revenue vanishes into subscriptions I'm too scared to cancel.",
    answer: "You don't need most of them. We build custom software you own once and cut the bill 40 to 70%.",
  },
  {
    icon: Gauge,
    quote: "My site is slow, and I keep bleeding money into monthly fees.",
    answer: "WordPress, Shopify, Wix, Squarespace or Webflow, we migrate you to fast custom code you own outright.",
  },
  {
    icon: Zap,
    quote: "I love my GoHighLevel CRM, but the site it builds is painfully slow.",
    answer: "Keep the CRM and automations. We replace just the slow public site with a fast custom front-end.",
  },
  {
    icon: Sparkles,
    quote: "My competitors keep coming up in ChatGPT. Somehow I never do.",
    answer: "Buyers shortlist through ChatGPT, Claude and Google AI now. We engineer your site to get cited by them.",
  },
  {
    icon: LayoutDashboard,
    quote: "My whole business runs on spreadsheets and five tools that don't talk.",
    answer: "We build one custom dashboard you own, with a real-time view of the entire business.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-28 px-6 bg-white border-y border-stone-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cognac">Who we help</span>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mt-3 mb-4 tracking-tight">Sound like you?</h2>
          <p className="text-lg text-stone-600 leading-relaxed" data-speakable="true">
            Read these out loud. If one of them is the sentence already running through your head, you&apos;re in the right place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {SEGMENTS.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-stone-200/80 shadow-sm p-7 md:p-9 transition-all duration-300 hover:ring-cognac/40 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Oversized decorative quote mark — editorial accent, not a feature icon */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-3 right-5 font-serif text-[6rem] leading-none text-cognac/10 select-none"
              >
                &rdquo;
              </span>

              <p className="relative z-10 font-serif italic text-xl md:text-2xl text-charcoal leading-snug mb-6">
                &ldquo;{s.quote}&rdquo;
              </p>

              <div className="flex items-start gap-3 pt-5 border-t border-stone-100">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                  <s.icon className="h-4 w-4 text-cognac" />
                </span>
                <p className="text-sm md:text-[15px] text-stone-600 leading-relaxed">{s.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
