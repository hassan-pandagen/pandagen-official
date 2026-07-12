import { Gauge, ShoppingBag, Users, Zap, DollarSign, LayoutDashboard, Sparkles, Target } from "lucide-react";

// Homepage ICP block — the 8 buyers PandaCodeGen serves, written in their OWN inner voice.
// Voice-of-customer quotes so a visitor reads their own sentence and thinks "that's me".
// Two-zone card: their pain (white) on top, our fix (tinted footer) below.
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
    quote: "Half my revenue vanishes into subscriptions I'm scared to cancel.",
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
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-stone-300 shadow-md transition-all duration-300 hover:ring-cognac/50 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Cognac spine — a crafted accent that lifts on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-cognac/0 group-hover:bg-cognac/60 transition-colors duration-300"
              />

              {/* Zone 1 — their pain, in their own voice */}
              <div className="relative flex-1 p-7 md:p-9 pb-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-3 right-5 font-serif text-[6rem] leading-none text-cognac/10 select-none"
                >
                  &rdquo;
                </span>
                <p className="relative z-10 font-serif italic text-xl md:text-2xl text-charcoal leading-snug">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </div>

              {/* Zone 2 — our fix, on a tinted footer band */}
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
                <p className="text-sm md:text-[15px] text-stone-600 leading-relaxed">{s.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
