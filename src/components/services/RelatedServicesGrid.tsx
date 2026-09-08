import Link from "next/link";
import { Code2, ShoppingBag, Globe, Zap, ArrowRightLeft } from "lucide-react";
import { getRelatedServiceHrefs } from "@/data/topical-map";

const ALL_SERVICES = [
  { href: "/services/wordpress-migration", icon: Code2,         title: "WordPress Migration",   desc: "Inventory plugins, content, redirects, and migration dependencies." },
  { href: "/services/ecommerce",           icon: ShoppingBag,   title: "Shopify (Headless)",    desc: "Review frontend architecture while retaining compatible commerce workflows." },
  { href: "/services/woocommerce",         icon: ShoppingBag,   title: "WooCommerce Migration", desc: "Assess checkout, plugin dependencies, store data, and migration options." },
  { href: "/services/wix",                 icon: Globe,         title: "Wix Migration",         desc: "Map content, integrations, DNS, and a feasible migration scope." },
  { href: "/services/squarespace",         icon: Globe,         title: "Squarespace Migration", desc: "Review content, commerce, scheduling, and migration requirements." },
  { href: "/services/webflow",             icon: Globe,         title: "Webflow Migration",     desc: "Assess CMS data, interactions, hosting, and migration trade-offs." },
  { href: "/services/gohighlevel",         icon: Zap,           title: "GoHighLevel",           desc: "Evaluate a custom public frontend alongside compatible CRM workflows." },
  { href: "/services/custom-engineering",  icon: Zap,           title: "Custom Engineering",    desc: "Scope applications, dashboards, APIs, permissions, and integrations." },
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
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-start gap-3 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <s.icon className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">{s.title}</h3>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
