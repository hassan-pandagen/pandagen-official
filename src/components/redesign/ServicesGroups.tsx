import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DISPLAY, MONO, T } from "@/components/redesign/tokens";

// 22 Nov 2026, customer journey review: the services list sat 14 screens down on desktop
// (22 on a phone), so a visitor who wanted a Wix move or a store never learned we do it.
// This compact block sits third on the homepage, in the three groups the board chose
// (business systems, moving your website, AI search). It keeps every link the old
// ServicesStack section carried.
const GROUPS: { title: string; body: string; links: [string, string][]; more: [string, string] }[] = [
  {
    title: "Business systems",
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
    body: "Every build is set up so ChatGPT and Google's AI answers can find and quote your pages. The Care & SEO Plan keeps it current from $500 a month.",
    links: [["AI SEO and GEO", "/services/ai-seo"]],
    more: ["How we measured AI revenue", "/blog/ai-referral-revenue-2026"],
  },
];

export default function ServicesGroups() {
  return (
    <section aria-labelledby="services-groups-title" className="px-6 py-10 md:px-10 md:py-16" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[12px] uppercase tracking-[0.16em]" style={{ fontFamily: MONO, color: T.accentText }}>What we do</p>
        <h2 id="services-groups-title" className="mt-4 max-w-[24ch]" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Find your kind of project.
        </h2>
        <div className="mt-8 grid gap-8 border-t pt-8 md:grid-cols-3 md:gap-10" style={{ borderColor: T.rule }}>
          {GROUPS.map((g) => (
            <div key={g.title} className="min-w-0">
              <h3 className="text-[22px] font-semibold" style={{ color: T.ink }}>{g.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.6]" style={{ color: T.body }}>{g.body}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
                {g.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="underline underline-offset-4" style={{ color: T.ink }}>{label}</Link></li>
                ))}
              </ul>
              <Link href={g.more[1]} className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold" style={{ color: T.accentText }}>
                {g.more[0]} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
