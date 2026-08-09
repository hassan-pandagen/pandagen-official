import "server-only";

import { blogPosts } from "@/data/blog";
import { hubBySlug } from "@/data/hubs";

const SITE_URL = "https://www.pandacodegen.com";
const OG_VERSION = "og-v3-2026-07-28";

export type OgContent = {
  title: string;
  label: string;
  description: string;
  path: string;
  version: string;
};

type StaticOgContent = Omit<OgContent, "path" | "version">;

const staticPages: Record<string, StaticOgContent> = {
  "/": {
    title: "SEO-Safe Website Migrations",
    label: "PandaCodeGen",
    description: "Move a revenue-generating website with its URLs, content, analytics, integrations, cutover, and handover mapped before launch.",
  },
  "/about": {
    title: "Engineers Behind the Migration",
    label: "About PandaCodeGen",
    description: "Meet the founders responsible for architecture, implementation, validation, launch, and handover.",
  },
  "/about/hassan": {
    title: "Hassan Jamal",
    label: "Co-founder and Lead Engineer",
    description: "Migration engineering, performance, integrations, measurement, and production delivery at PandaCodeGen.",
  },
  "/about/imran": {
    title: "Imran Raza Ladhani",
    label: "Co-founder and Lead Architect",
    description: "Architecture, operating systems, platform decisions, and delivery strategy at PandaCodeGen.",
  },
  "/ai-info": {
    title: "Facts About PandaCodeGen",
    label: "AI and Research Reference",
    description: "A factual reference for PandaCodeGen services, ownership, evidence boundaries, policies, and public claims.",
  },
  "/blog": {
    title: "Migration and Web Engineering Journal",
    label: "PandaCodeGen Journal",
    description: "Evidence-led guides to website migrations, performance, search continuity, platform cost, analytics, and ownership.",
  },
  "/contact": {
    title: "Get Your Migration Plan",
    label: "Start a Conversation",
    description: "Share the current website, business constraints, required integrations, and the decision you need to make.",
  },
  "/cookies": {
    title: "Cookie Policy",
    label: "Privacy and Consent",
    description: "How PandaCodeGen uses cookies, analytics, advertising technology, and consent controls.",
  },
  "/editorial-policy": {
    title: "Editorial and Evidence Policy",
    label: "How We Publish",
    description: "The standards used for sourcing, first-party evidence, corrections, measurement, and commercial disclosures.",
  },
  "/manifesto": {
    title: "Build for Ownership, Not Lock-in",
    label: "PandaCodeGen Manifesto",
    description: "A practical position on source ownership, portable accounts, measurable acceptance, and maintainable delivery.",
  },
  "/partners": {
    title: "Agency Partnership Pilot",
    label: "For Agencies",
    description: "Test a scoped white-label or delivery partnership before agreeing repeat commercial terms.",
  },
  "/pricing": {
    title: "Migration Scope and Pricing",
    label: "Plan the Engagement",
    description: "Compare starting scopes, payment milestones, performance acceptance, support, ownership, and change handling.",
  },
  "/privacy": {
    title: "Privacy Policy",
    label: "Privacy and Data",
    description: "How PandaCodeGen collects, uses, stores, shares, and protects information submitted through the website.",
  },
  "/security": {
    title: "Security at PandaCodeGen",
    label: "Responsible Engineering",
    description: "Public security practices, reporting guidance, application boundaries, and coordinated disclosure information.",
  },
  "/services": {
    title: "Website Migration Services",
    label: "What We Build",
    description: "Migration planning and implementation across content, commerce, analytics, integrations, performance, and launch.",
  },
  "/services/custom-engineering": {
    title: "Custom Engineering",
    label: "Complex Requirements",
    description: "Custom application and integration work scoped around explicit requirements, acceptance criteria, ownership, and handover.",
  },
  "/services/ecommerce": {
    title: "Ecommerce Engineering",
    label: "Commerce Systems",
    description: "Storefront, catalog, checkout, payment, analytics, integration, and operational requirements mapped as one system.",
  },
  "/services/gohighlevel": {
    title: "GoHighLevel Website Migration",
    label: "Migration Service",
    description: "Keep the CRM workflows that work while replacing a constrained public website with a controlled frontend.",
  },
  "/services/squarespace": {
    title: "Squarespace Website Migration",
    label: "Migration Service",
    description: "Move content, forms, domains, analytics, URLs, and integrations with a documented cutover and redirect plan.",
  },
  "/services/webflow": {
    title: "Webflow Website Migration",
    label: "Migration Service",
    description: "Plan CMS export, asset ownership, URL continuity, forms, integrations, redirects, validation, and handover.",
  },
  "/services/wix": {
    title: "Wix Website Migration",
    label: "Migration Service",
    description: "Inventory the current site, apps, content, forms, domains, analytics, and search signals before rebuilding.",
  },
  "/services/woocommerce": {
    title: "WooCommerce Migration",
    label: "Commerce Migration",
    description: "Protect catalog, customers, orders, checkout, payments, integrations, URLs, and operating workflows during change.",
  },
  "/services/wordpress-migration": {
    title: "WordPress Migration",
    label: "SEO-Safe Migration",
    description: "Map URLs, content, plugins, forms, analytics, editorial workflows, cutover, rollback, and ownership before launch.",
  },
  "/terms": {
    title: "Website Terms",
    label: "Terms and Conditions",
    description: "The public terms governing use of the PandaCodeGen website and its non-binding planning information.",
  },
  "/work": {
    title: "Selected Work and Evidence",
    label: "PandaCodeGen Work",
    description: "First-party implementation examples with ownership relationships, measurement boundaries, dates, and limitations stated.",
  },
  "/work/enterprise-ops": {
    title: "Enterprise Operations Platform",
    label: "Selected Work",
    description: "An operations-platform implementation reference covering workflow, architecture, access, reporting, and handover.",
  },
  "/work/mycustompatches": {
    title: "MyCustomPatches Migration",
    label: "Selected Work",
    description: "An owner-confirmed website migration example with its delivery period, performance evidence, costs, and limitations labelled.",
  },
  "/work/panda-codelab": {
    title: "Panda CodeLab",
    label: "Selected Work",
    description: "A PandaCodeGen implementation reference for custom tooling, experimentation, and product engineering.",
  },
  "/work/panda-patches": {
    title: "Panda Patches",
    label: "Founder-Owned Brand",
    description: "A first-party implementation reference for commerce architecture, automation, analytics, and operating decisions.",
  },
};

function normalizePath(path: string) {
  const pathname = path.split("?")[0]?.split("#")[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash !== "/" ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

function titleFromPath(path: string) {
  const segment = path.split("/").filter(Boolean).at(-1) || "PandaCodeGen";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ogContentForPath(inputPath: string): OgContent {
  const path = normalizePath(inputPath);
  const staticContent = staticPages[path];

  if (staticContent) {
    return { ...staticContent, path, version: OG_VERSION };
  }

  // Topic hubs, before the post branch: "/blog/topic/website-speed" would
  // otherwise fall through to the generic path-derived title.
  if (path.startsWith("/blog/topic/")) {
    const hub = hubBySlug(path.slice("/blog/topic/".length));
    if (hub) {
      return {
        title: hub.h1,
        label: "PandaCodeGen Journal · Topic",
        description: hub.description,
        path,
        version: OG_VERSION,
      };
    }
  }

  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const post = blogPosts.find((candidate) => candidate.id === slug);

    if (post) {
      return {
        title: post.title,
        label: `PandaCodeGen Journal · ${post.category}`,
        description: post.excerpt,
        path,
        version: post.lastModified || post.date || OG_VERSION,
      };
    }
  }

  return {
    title: titleFromPath(path),
    label: "PandaCodeGen",
    description: "Custom website migration and engineering information from PandaCodeGen.",
    path,
    version: OG_VERSION,
  };
}

export function ogImageUrlForPath(path: string) {
  const content = ogContentForPath(path);
  const url = new URL("/og", SITE_URL);
  url.searchParams.set("path", content.path);
  url.searchParams.set("v", `${OG_VERSION}:${content.version}`);
  return url.toString();
}

export function ogAltForPath(path: string) {
  const content = ogContentForPath(path);
  return `${content.title} | PandaCodeGen social preview`;
}

export function ogImageForPath(path: string) {
  return {
    url: ogImageUrlForPath(path),
    width: 1200,
    height: 630,
    alt: ogAltForPath(path),
  };
}
