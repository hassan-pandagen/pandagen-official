import Link from "next/link";
import actions from "./SalesActions.module.css";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowRightLeft, Search, Workflow, type LucideIcon } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// 22 Nov 2026, customer journey review: the services list sat 14 screens down on desktop
// (22 on a phone), so a visitor who wanted a Wix move or a store never learned we do it.
// This compact block sits third on the homepage, in the three groups the board chose
// (business systems, moving your website, AI search). It keeps every link the old
// ServicesStack section carried.
const GROUPS: { title: string; icon: LucideIcon; featured?: boolean; body: string; links: [string, string][]; more: [string, string] }[] = [
  {
    title: "Business systems",
    icon: Workflow,
    featured: true,
    body: "Bookings, payments, reminders, a client portal and the admin behind them, built around how you work. From $10,000.",
    links: [
      ["Training schools", "/services/training-business-websites"],
      ["Medical and clinics", "/services/medical-website-design"],
      ["Small business", "/services/small-business-website-design"],
      ["Portals and backends", "/services/backend-development"],
      ["Custom software and CRM", "/services/custom-engineering"],
      ["Content editor (CMS)", "/services/cms-development"],
    ],
    more: ["See the training system", "/work/a-step-above-medical"],
  },
  {
    title: "Moving your website",
    icon: ArrowRightLeft,
    body: "Off WordPress, Wix, Squarespace, Webflow, WooCommerce, Shopify or GoHighLevel, with every page listed and every old URL redirected. From $1,500.",
    links: [
      ["WordPress migration", "/services/wordpress-migration"],
      ["WordPress websites", "/services/wordpress"],
      ["Wix", "/services/wix"],
      ["Squarespace", "/services/squarespace"],
      ["Webflow", "/services/webflow"],
      ["WooCommerce", "/services/woocommerce"],
      ["Shopify and online stores", "/services/ecommerce"],
      ["GoHighLevel", "/services/gohighlevel"],
    ],
    more: ["All services", "/services"],
  },
  {
    title: "AI search",
    icon: Search,
    body: "Every build is set up so ChatGPT and Google's AI answers can find and quote your pages. The Care & SEO Plan keeps it current from $500 a month.",
    links: [["AI SEO and GEO", "/services/ai-seo"]],
    more: ["How we measured AI revenue", "/blog/ai-referral-revenue-2026"],
  },
];

export default function ServicesGroups() {
  return (
    <section aria-labelledby="services-groups-title" className="px-6 pb-10 pt-5 md:px-10 md:pb-16 md:pt-6" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>What we do</p>
        <h2 id="services-groups-title" className="mt-4 max-w-[24ch]" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Find your kind of project.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {GROUPS.map(({ title, icon: Icon, featured, body, links, more }) => (
            <article
              key={title}
              className={`${featured ? actions.onDark : ""} group flex min-w-0 flex-col border p-5 transition-shadow hover:shadow-[0_10px_26px_rgba(28,25,23,0.09)] focus-within:shadow-[0_10px_26px_rgba(28,25,23,0.09)] motion-reduce:transition-none sm:p-7`}
              style={{ backgroundColor: featured ? T.dark : T.paperHi, color: featured ? T.onDark : T.ink, borderColor: featured ? T.onDarkRule : T.rule }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center border"
                style={{ color: featured ? T.onDarkAccent : T.accentText, borderColor: featured ? T.onDarkRule : T.rule }}>
                <Icon className="h-[22px] w-[22px] motion-safe:transition-transform motion-safe:group-hover:scale-110 motion-safe:group-focus-within:scale-110" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: MONO }}>{title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: featured ? T.onDark : T.body }}>{body}</p>
              <ul className="mt-5 flex flex-wrap gap-2 pb-6 text-[14px]">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}
                      className={`${actions.button} inline-flex min-h-10 items-center border border-[color:var(--service-link-border)] px-3 py-1.5 leading-snug`}
                      style={{ "--service-link-border": featured ? T.onDarkRule : T.rule } as CSSProperties}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={more[1]}
                className="group/link mt-auto flex min-h-12 items-center justify-between gap-3 border-t pt-3 text-[15px] font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ fontFamily: MONO, color: featured ? T.onDarkAccent : T.accentText, borderColor: featured ? T.onDarkRule : T.rule }}>
                {more[0]}
                <ArrowRight className="h-4 w-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover/link:translate-x-1 motion-safe:group-focus-visible/link:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
