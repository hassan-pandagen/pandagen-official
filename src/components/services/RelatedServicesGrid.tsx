import { Code2, ShoppingBag, Globe, Zap, ArrowRightLeft } from "lucide-react";
import { getRelatedServiceHrefs } from "@/data/topical-map";
import AppleServiceCard from "./AppleServiceCard";

const ALL_SERVICES: Array<{
  href: string;
  icon: typeof Code2;
  title: string;
  desc: string;
}> = [
  { href: "/services/wordpress-migration", icon: Code2,         title: "WordPress Migration",   desc: "Inventory plugins, content, redirects, and migration dependencies." },
  { href: "/services/ecommerce",           icon: ShoppingBag,   title: "Shopify (Headless)",    desc: "Review frontend architecture while retaining compatible commerce workflows." },
  { href: "/services/woocommerce",         icon: ShoppingBag,   title: "WooCommerce Migration", desc: "Assess checkout, plugin dependencies, store data, and migration options." },
  { href: "/services/wix",                 icon: Globe,         title: "Wix Migration",         desc: "Map content, integrations, DNS, and a feasible migration scope." },
  { href: "/services/squarespace",         icon: Globe,         title: "Squarespace Migration", desc: "Review content, commerce, scheduling, and migration requirements." },
  { href: "/services/webflow",             icon: Globe,         title: "Webflow Help & Migration", desc: "Assess slow pages, CMS limits and integrations, then scope improvements or a move." },
  { href: "/services/gohighlevel",         icon: Zap,           title: "GoHighLevel",           desc: "Evaluate a custom public frontend alongside compatible CRM workflows." },
  { href: "/services/ai-seo",              icon: Zap,           title: "AI SEO",                desc: "Pages assistants can read, included in the build, with optional monthly care from $500." },
  { href: "/services/custom-engineering",  icon: Zap,           title: "Custom software",    desc: "Scope applications, dashboards, APIs, permissions, and integrations." },
  { href: "/partners",                     icon: ArrowRightLeft, title: "For Agencies",          desc: "Discuss delivery roles, confidentiality, and terms in a partner agreement." },
];

type Props = {
  /** Pass the current page's href so it gets hidden from the grid. */
  currentHref?: string;
};

export default function RelatedServicesGrid({ currentHref }: Props) {
  // Order by topical adjacency from the topical map: the closest related
  // services surface first, the rest follow. Falls back to declaration order
  // when no currentHref is given. /partners (non-/services pillar) always trails.
  const order = currentHref ? getRelatedServiceHrefs(currentHref) : [];
  const rank = (href: string) => {
    const i = order.indexOf(href);
    return i === -1 ? order.length + ALL_SERVICES.findIndex((s) => s.href === href) : i;
  };
  const services = ALL_SERVICES
    .filter((s) => s.href !== currentHref)
    .sort((a, b) => rank(a.href) - rank(b.href));

  return (
    <section className="py-10 md:py-16 px-6 bg-stone-50 border-y border-stone-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
        <p className="text-stone-600 text-center mb-10 text-sm">See what each one covers, and what it costs.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <AppleServiceCard
              key={s.href}
              href={s.href}
              icon={s.icon}
              title={s.title}
              description={s.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
