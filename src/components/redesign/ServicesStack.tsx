import Link from "next/link";
import { ArrowDownLeft, ArrowRight } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";
import ChatExpertsButton from "@/components/redesign/ChatExpertsButton";

// ─────────────────────────────────────────────────────────────────────────────
// Services as a stack of sticky headings on a dark section. Redesign candidate,
// 24 Sep 2026. Copy, links and destinations are unchanged from ServicesHub.tsx.
// ─────────────────────────────────────────────────────────────────────────────
// How the stacking works: every heading row and every body is a direct child of
// ONE container, and each heading row is position:sticky with its own top
// (nav clearance + index x row height). Because they share a parent, earlier
// headings stay stuck while later ones slide up beneath them, and each body
// scrolls up under the headings above it. Wrapping a heading and its body in a
// per-item element would break this: sticky only holds inside its own parent.
//
// Below md the headings are not sticky. Four stuck rows would cover most of a
// phone screen.
// ─────────────────────────────────────────────────────────────────────────────

const ROW = 88; // px, heading row height; also the stacking step
const NAV = 96; // px, clearance under the floating nav

const platforms = [
  { name: "WordPress", href: "/services/wordpress-migration" },
  { name: "Shopify", href: "/services/ecommerce" },
  { name: "WooCommerce", href: "/services/woocommerce" },
  { name: "Wix", href: "/services/wix" },
  { name: "Squarespace", href: "/services/squarespace" },
  { name: "Webflow", href: "/services/webflow" },
  { name: "GoHighLevel", href: "/services/gohighlevel" },
];

type Service = {
  title: string;
  body: string;
  note?: { label: string; text: string };
  link: { label: string; href: string };
  list?: boolean;
};

const services: Service[] = [
  {
    title: "Migrations & New Builds",
    body: "We list every page, every piece of content, your analytics, your forms and everything they connect to before we build anything. Then we test the switchover against criteria you signed off.",
    note: {
      label: "Already have a website?",
      text: "Replace it, rebuild it, or keep parts of it running. A custom storefront can still use Shopify for products and payments, a new site can keep your GoHighLevel CRM, and WordPress can stay as the editor if that suits you. You decide what stays; we work it out with you before quoting.",
    },
    link: { label: "Explore all services", href: "/services" },
    list: true,
  },
  {
    title: "Custom software",
    body: "SaaS dashboards, internal tools, and AI integrations. When “off-the-shelf” isn't enough, we build exactly what you need.",
    note: {
      label: "Priced on its own",
      text: "Apps and internal tools are quoted after one short call, not sold as a website package. We work out what it does, what data it holds and what it costs to run before anyone talks price.",
    },
    link: { label: "View Architecture", href: "/services/custom-engineering" },
  },
  {
    title: "Search & AI Foundations",
    body: "Pages a crawler can read, a business described the same way everywhere, structured data that matches what visitors see, and claims backed by a source. We cannot guarantee a citation.",
    link: { label: "Review delivery standards", href: "/about" },
  },
  {
    title: "Faster E-commerce",
    body: "Headless Shopify and WooCommerce storefronts, when you have measured that the theme or an integration is genuinely the limit. Keep the commerce backend where it remains the right fit.",
    link: { label: "See e-commerce", href: "/services/ecommerce" },
  },
];

export default function ServicesStack() {
  return (
    <section aria-labelledby="services-title" className="relative px-6 pb-24 pt-24 md:px-10 md:pb-40 md:pt-32" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="services-title"
          className="max-w-[18ch]"
          style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
        >
          Engineered around how your business runs, and what can break.
        </h2>

        {/* One flat container: see the note at the top of the file. */}
        <div className="services-stack mt-16 md:mt-24">
          {services.flatMap((s, i) => [
            <div
              key={`h-${i}`}
              className={`services-head grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t md:grid-cols-12 ${i === 0 ? "services-head-first" : ""}`}
              style={{
                borderColor: T.onDarkRule,
                backgroundColor: T.dark,
                ["--top" as string]: `${NAV + i * ROW}px`,
                minHeight: ROW,
                // Earlier headings sit ABOVE later ones. At the end of the stack the
                // last heading is released first; with the default order it slid up
                // over 02 and 03 (owner's screenshot, 24 Sep). Reversed, each one
                // tucks under the heading before it instead.
                zIndex: 20 + services.length - i,
              }}
            >
              <span className="md:col-span-5" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1 }}>
                {String(i + 1).padStart(2, "0")}.
              </span>
              <h3 className="md:col-span-6" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1, letterSpacing: "-0.01em" }}>
                {s.title}
              </h3>
              <ArrowDownLeft className="h-7 w-7 justify-self-end md:col-span-1" style={{ color: T.onDarkQuiet }} aria-hidden="true" />
            </div>,

            <div key={`b-${i}`} className="grid gap-8 pb-20 pt-6 md:grid-cols-12 md:pb-28 md:pt-8">
              <div className="md:col-span-6 md:col-start-6">
                <p className="max-w-[36rem] text-[18px] leading-[1.6]" style={{ color: T.onDark }}>
                  {s.body}
                </p>

                {s.list && (
                  <ol className="mt-8 border-t" style={{ borderColor: T.onDarkRule }}>
                    {platforms.map((p, n) => (
                      <li key={p.name} className="border-b" style={{ borderColor: T.onDarkRule }}>
                        <Link href={p.href} className="services-sub flex items-baseline gap-6 py-3" style={{ color: T.onDark, textDecoration: "none" }}>
                          <span className="text-[13px]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
                            {String(n + 1).padStart(2, "0")}
                          </span>
                          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.2 }}>{p.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}

                {s.note && (
                  <div className="mt-8">
                    <p className="mb-2 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.onDarkQuiet }}>
                      {s.note.label}
                    </p>
                    <p className="max-w-[36rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
                      {s.note.text}
                    </p>
                  </div>
                )}

                <Link
                  href={s.link.href}
                  className="services-link mt-8 inline-flex items-center gap-2 text-[16px] font-medium"
                  style={{ color: T.onDark, textDecoration: "none", borderBottom: `1px solid ${T.onDarkQuiet}` }}
                >
                  {s.link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>,
          ])}
        </div>

        {/* Closing row, unchanged copy. */}
        <div className="grid gap-6 border-t pt-12 md:grid-cols-12" style={{ borderColor: T.onDarkRule }}>
          <h3 className="md:col-span-5" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.05 }}>
            Not sure where to start?
          </h3>
          <div className="md:col-span-6 md:col-start-6">
            <p className="max-w-[36rem] text-[18px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
              Tell us what you&apos;re building or what&apos;s slowing you down. We&apos;ll give you a straight answer. No
              pitch, no pressure.
            </p>
            <ChatExpertsButton
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-[16px] font-medium"
              style={{ backgroundColor: T.onDark, color: T.dark }}
            >
              Chat with our experts <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ChatExpertsButton>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .services-head { position: sticky; top: var(--top); }
          /* Solid strip from the top of the screen down to the first stuck
             heading. A box-shadow did this before but was 8px short (row 88,
             nav 96), and body text showed through that gap while scrolling. */
          .services-head-first::before { content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: ${NAV + 8}px; background: ${T.dark}; }
        }
        .services-sub span:last-child { transition: color .25s ease, transform .25s ease; display: inline-block; }
        .services-sub:hover span:last-child, .services-sub:focus-visible span:last-child { color: ${T.onDarkAccent}; transform: translateX(6px); }
        .services-link:hover, .services-link:focus-visible { color: ${T.onDarkAccent} !important; border-color: ${T.onDarkAccent} !important; }
        @media (prefers-reduced-motion: reduce) { .services-sub span:last-child { transition: none; } }
      `}</style>
    </section>
  );
}
