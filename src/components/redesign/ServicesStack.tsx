import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDownLeft, ArrowRight } from "lucide-react";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import ChatExpertsButton from "@/components/redesign/ChatExpertsButton";

// ─────────────────────────────────────────────────────────────────────────────
// Services as a stack of sticky headings on a dark section. Redesign candidate,
// 24 Sep 2026. Copy, links and destinations are unchanged from ServicesHub.tsx.
// ─────────────────────────────────────────────────────────────────────────────
// How the stacking works: items are nested, each heading is position:sticky with
// its own top (nav clearance + index x row height), and the wrappers are sized
// so all four headings let go on the same frame (see renderItem). Owner, 24 Sep:
// "it should stop on 4, then move to the next section". A CSS grid version was
// tried first; Chrome holds sticky grid items to the whole grid, not their area.
//
// Below md the headings are not sticky. Four stuck rows would cover most of a
// phone screen.
// ─────────────────────────────────────────────────────────────────────────────

const ROW = 88; // px, heading row height; also the stacking step
const NAV = 96; // px, clearance under the floating nav

const platforms = [
  { name: "WordPress websites", href: "/services/wordpress" },
  { name: "WordPress migration", href: "/services/wordpress-migration" },
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
    title: "Website Builds & Migrations",
    // Plain-English editing line, verbatim from the homepage FAQ (home-faqs.ts,
    // "do I need a developer every time"), swapped in for the owner (24 Sep):
    // the inventory description read too technical for this spot. The
    // inventory work is real and still happens; it now sits in the note below.
    body: "Start with a simple WordPress website or a custom build around your business. We agree what your team can edit, then show you how to change the text, images and business details. You get written instructions and a live walkthrough with the founders.",
    note: {
      label: "Already have a website?",
      text: "We can improve what you have or plan a move when it solves a real problem. Your quote names the content, URLs, forms and connections included in the work. We explain what stays, what changes and what it costs to run before you decide.",
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
    body: "Pages that ChatGPT, Claude and Perplexity can actually read: a business described the same way everywhere, structured data that matches what visitors see, and claims backed by a source. We cannot guarantee a citation.",
    link: { label: "Review delivery standards", href: "/about" },
  },
  {
    title: "Faster E-commerce",
    body: "Headless Shopify and WooCommerce storefronts, when you have measured that the theme or an integration is genuinely the limit. Keep the commerce backend where it remains the right fit.",
    link: { label: "See e-commerce", href: "/services/ecommerce" },
  },
];

export default function ServicesStack() {
  // Item i = [heading i, body i, item i+1]. A sticky heading is held inside its
  // parent wrapper, so wrapper i's end decides when heading i lets go. Each
  // inner wrapper ends ROW px LATER than its parent (margin-bottom: -ROW on the
  // child, a tail element in the innermost), which exactly matches each
  // heading's extra ROW of offset from the top: all four release on the same
  // frame and the whole stack leaves together.
  function renderItem(i: number): ReactNode {
    const s = services[i];
    if (!s) return null;
    return (
      <div className={`services-item ${i > 0 ? "services-item-inner" : ""}`}>
              <div
                className={`services-head grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t md:grid-cols-12 ${i === 0 ? "services-head-first" : ""}`}
                style={{
                  borderColor: T.onDarkRule,
                  backgroundColor: T.dark,
                  ["--top" as string]: `${NAV + i * ROW}px`,
                  minHeight: ROW,
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
              </div>

              <div className="grid gap-8 pb-14 pt-6 md:grid-cols-12 md:pb-20 md:pt-8">
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
                            <span style={{ fontFamily: DISPLAY_SM, fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.2 }}>{p.name}</span>
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
              </div>
        {renderItem(i + 1)}
        {/* Sticky ignores padding, so the last item's extra length is an element. */}
        {i === services.length - 1 && <div aria-hidden="true" className="services-tail" />}
      </div>
    );
  }

  return (
    <section aria-labelledby="services-title" className="relative px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="services-title"
          className="max-w-[32ch]"
          style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)", lineHeight: 1.1, letterSpacing: "-0.02em", paddingBottom: "0.08em" }}
        >
          Engineered around how your <span style={{ color: T.onDarkAccent }}>business runs,</span> and what can break.
        </h2>

        {/* One grid: see the note at the top of the file. */}
        {/* Nested items: see renderItem below and the note at the top of the file. */}
        <div className="services-stack mt-16 md:mt-24">{renderItem(0)}</div>
        <div aria-hidden="true" className="services-spacer" />

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
              className="cta-solid mt-6 inline-flex items-center gap-2 px-6 py-3.5 text-[16px] font-medium"
              style={{ backgroundColor: T.onDark, color: T.dark }}
            >
              Chat with our experts <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ChatExpertsButton>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          /* Exactly one row tall: the release maths assumes it. Left to size
             itself, the first heading measured 180px and the others 91-135px, so
             they let go at different moments. */
          .services-head { position: sticky; top: var(--top); height: ${ROW}px; }
          /* flow-root: without it the negative margins collapse into one another
             and the wrappers all end at the same place. */
          .services-item { display: flow-root; }
          .services-item-inner { margin-bottom: -${ROW}px; }
          .services-tail { height: ${(services.length - 1) * ROW}px; }
          /* The inner wrappers overhang the list by (n-1) rows; this keeps the
             closing row below them. At release it sits under headings 02-04. */
          .services-spacer { height: ${(services.length - 1) * ROW}px; }
          /* Solid strip from the top of the screen down to the first stuck
             heading. A box-shadow did this before but was 8px short (row 88,
             nav 96), and body text showed through that gap while scrolling. */
          .services-head-first::before { content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: ${NAV + 8}px; background: ${T.dark}; }
        }
        .services-sub span:last-child { transition: color .25s ease, transform .25s ease; display: inline-block; }
        .services-sub:hover span:last-child, .services-sub:focus-visible span:last-child { color: ${T.onDarkAccent}; transform: translateX(6px); }
        .services-link:hover, .services-link:focus-visible { color: ${T.onDarkAccent} !important; border-color: ${T.onDarkAccent} !important; }
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .services-sub span:last-child { transition: none; } .cta-solid { transition: none; } }
      `}</style>
    </section>
  );
}
