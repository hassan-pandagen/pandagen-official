import { ogImageForPath } from "@/lib/seo/og";
import lazyLoad from "next/dynamic";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustLogoBar from "@/components/sections/TrustLogoBar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import { alternatesFor } from "@/lib/i18n/config";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Outgrown WordPress or Wix? Migrate to Custom Next.js | PandaCodeGen",
  description:
    "We move you off WordPress, Wix, Squarespace, Webflow or GoHighLevel onto custom Next.js you own outright, without losing the traffic you already have. Fast pages with clear answers Google and AI assistants can quote. Fixed pricing from $1,500.",
  // Self-referencing canonical plus reciprocal hreflang to the French and
  // German versions of this page. x-default points at English.
  alternates: alternatesFor("home", "en"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pandacodegen.com",
    siteName: "PandaCodeGen",
    title: "Outgrown WordPress or Wix? Migrate to Custom Next.js | PandaCodeGen",
    description:
      "Custom Next.js websites you own outright. Fast pages with clear answers Google and AI assistants can quote. Fixed pricing from $1,500.",
    images: [
      ogImageForPath("/"),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outgrown WordPress or Wix? Migrate to Custom Next.js | PandaCodeGen",
    description:
      "Custom Next.js websites you own outright. Fast pages with clear answers Google and AI assistants can quote.",
    images: [ogImageForPath("/")],
  },
};

// Lazy load below-the-fold components
const SocialProof = lazyLoad(() => import("@/components/home/SocialProof"));
const UnfairAdvantage = lazyLoad(() => import("@/components/sections/UnfairAdvantage"));
const ServicesHub = lazyLoad(() => import("@/components/sections/ServicesHub"));
const WhoWeHelp = lazyLoad(() => import("@/components/home/WhoWeHelp"));
const HowItWorksSimple = lazyLoad(() => import("@/components/HowItWorksSimple"));
const AIPowered = lazyLoad(() => import("@/components/sections/AIPowered"));
const RevenueCalculator = lazyLoad(() => import("@/components/sections/RevenueCalculator"));
const FounderSection = lazyLoad(() => import("@/components/sections/FounderSection"));
const AntiAgency = lazyLoad(() => import("@/components/sections/AntiAgency"));
const LatestBlog = lazyLoad(() => import("@/components/sections/LatestBlog"));
const TierQuiz = lazyLoad(() => import("@/components/sections/TierQuiz"));

const homeFaqs = [
  {
    q: "How much does WordPress to Next.js migration cost?",
    a: "WordPress to Next.js migration starts at $1,500 for a 5 to 7 page business site (Starter), $3,500 for a 10 to 20 page site with blog migration and 301 redirects (Growth, most popular), and $5,000 to $10,000 for headless e-commerce with 30+ pages and custom integrations (Scale). Pricing is fixed for the scope written into the accepted project terms. We move your content, SEO settings and design to a custom coded site with no monthly plugin fees and no vendor lock in. Every plan carries a 90+ Lighthouse handover target on mobile and desktop for the agreed representative pages, verified across three recorded runs before handover.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "The free audit analyses your website's load time, Core Web Vitals (the speed and stability signals Google reports), technical SEO and common security misconfigurations. Enter your URL and you get a breakdown of what the tests found, including your measured load time and Lighthouse performance score, plus specific recommendations. It runs in well under a minute and requires no signup. It is a point-in-time technical review, not a diagnosis of lost revenue.",
  },
  {
    q: "How much faster will my site be after migrating from WordPress or Shopify?",
    a: "It depends on your starting point, your templates and what runs on the page. Typical WordPress and Shopify sites we assess load in roughly 3 to 8 seconds; our builds target sub-second lab load times and a 90+ Lighthouse score on the agreed representative pages. What we commit to in writing is the handover target and the test conditions used to verify it, measured across three recorded runs on mobile and desktop. Field Core Web Vitals depend on your real traffic, devices and any third-party scripts added after launch, so those are monitored rather than promised.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture: your customers see a fast custom front end while you keep managing products and orders in Shopify as usual. If your store is slow because of app bloat, a heavy theme or unoptimised code, we replace the storefront layer with custom code while your entire Shopify backend stays in place for products, orders and payments. Speed improvement varies by store, so we measure your baseline before quoting.",
  },
  {
    q: "Will I lose SEO rankings when migrating from WordPress?",
    a: "No provider controls search rankings, so nobody can honestly guarantee they hold. What reduces avoidable risk is a documented process: a complete URL inventory, a one-to-one 301 redirect map, schema and metadata migration, sitemap regeneration, canonical consistency, a phased DNS cutover and Search Console monitoring afterwards. Your old site stays live until the new one is verified, and a rollback path is documented before cutover. Our MyCustomPatches migration is an owner-confirmed record: 22 days, 200+ URLs across 13 templates, zero downtime at cutover, and no rankings lost in the 30 days after launch. Performance and hosting figures for that project are withdrawn pending reconciliation of the original test records.",
  },
  {
    q: "Why not just use a faster WordPress host or a caching plugin?",
    a: "Faster hosting and caching help, but they do not change the underlying model: WordPress assembles each page on request by querying the database, loading plugins and rendering the theme. Caching plugins such as WP Rocket or W3 Total Cache put a static copy in front of that work, which helps until the cache misses, the page is personalised or a plugin update changes the output. A statically generated or server-rendered custom build removes the assembly step instead of hiding it, which is why the improvement holds up under load and after updates.",
  },
];

export default function Home() {
  // Schema.org structured data for homepage
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "url": "https://www.pandacodegen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "description": "Custom Next.js web development studio. We rebuild slow WordPress, Shopify, Webflow and Squarespace sites into custom code the client owns outright, with fast pages and clear answers that search engines and AI assistants can quote.",
        "email": "info@pandacodegen.com",
        "foundingDate": "2026-02",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78702",
          "addressCountry": "US"
        },
        "areaServed": "Worldwide",
        "founder": [
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/hassan#person",
            "name": "Hassan Jamal",
            "jobTitle": "Co-founder and Lead Engineer",
            "url": "https://www.pandacodegen.com/about/hassan",
            // Personal profiles belong on the Person entity, not on the
            // Organization's sameAs.
            "sameAs": [
              "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
              "https://github.com/hassan-pandagen"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://www.pandacodegen.com/about/imran#person",
            "name": "Imran Raza Ladhani",
            "jobTitle": "Co-founder and Lead Architect",
            "url": "https://www.pandacodegen.com/about/imran",
            "sameAs": [
              "https://www.linkedin.com/in/imran-raza-ladhani/"
            ]
          }
        ],
        // Company-owned profiles, confirmed by the owner as controlled and live
        // (2026-07-27). sameAs is an identity assertion, so a URL that starts
        // 404ing should be removed rather than left asserted.
        "sameAs": [
          "https://www.linkedin.com/company/pandacodegen",
          "https://clutch.co/profile/panda-code-gen",
          "https://www.goodfirms.co/company/panda-code-gen",
          "https://www.trustpilot.com/review/pandacodegen.com",
          "https://www.crunchbase.com/organization/pandacodegen",
          "https://www.designrush.com/agency/profile/pandacodegen",
          "https://www.sortlist.com/agency/pandacodegen",
          "https://www.f6s.com/pandacodegen",
          "https://www.sanity.io/exchange/community/pandacodegen",
          "https://www.behance.net/pandacodegen",
          "https://dev.to/pandacodegen",
          "https://pandacodegen.hashnode.dev",
          "https://x.com/PandaCodeGen",
          "https://www.g2.com/products/pandacodegen",
          "https://www.reddit.com/user/PandaCodeGen/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@pandacodegen.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "serviceType": [
          "Custom Web Development",
          "WordPress Migration",
          "Shopify Headless Commerce",
          "E-Commerce Development",
          "Web Performance Optimization",
          "Answer Engine Optimization (AEO)"
        ],
        "knowsAbout": [
          "Next.js development",
          "WordPress migration",
          "Shopify headless commerce",
          "WooCommerce migration",
          "Wix migration",
          "Squarespace migration",
          "Webflow migration",
          "GoHighLevel migration",
          "URL and redirect planning",
          "Core Web Vitals measurement",
          "Custom e-commerce development",
          "Server-side ad tracking (Meta Conversions API)",
          "Answer Engine Optimization (AEO)",
          "Technical SEO",
          "Headless CMS architecture",
          "Vercel deployment"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen - Custom Next.js Web Development",
        "description": "Custom Next.js websites you own outright, with fast pages and clear answers that search engines and AI assistants can quote.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "Outgrown WordPress or Wix? Migrate to Custom Next.js | PandaCodeGen",
        "description": "Custom Next.js websites you own outright, with fast pages and clear answers that search engines and AI assistants can quote.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/#faqpage",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      }
    ]
  };

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Paper grain texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <Header />

      {/* Hero */}
      <Hero />

      {/* Answer-first summary, extractable passage placed in the citation zone (first 30% of page) */}
      <section className="px-6 pt-2 pb-6 md:pb-8 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base md:text-lg text-stone-600 leading-relaxed text-center">
            <strong className="text-charcoal">PandaCodeGen is a custom Next.js web development studio</strong> that rebuilds slow WordPress, Shopify, Webflow, Wix and Squarespace sites into fast custom code the client owns outright. Builds start at $1,500 with fixed pricing for the written scope, carry a 90+ Lighthouse handover target on mobile and desktop verified across three recorded runs, and have no monthly platform fees. Pages arrive as finished HTML with clear, direct answers that search engines and AI assistants such as ChatGPT, Claude and Perplexity can quote.
          </p>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <TrustLogoBar />

      {/* Public reviews and owner-confirmed project records */}
      <SocialProof />

      {/* Unfair Advantage, financial grid stats (White) */}
      <UnfairAdvantage />

      {/* Services Bento, premium bento grid (Paper) */}
      <ServicesHub />

      {/* Who We Help, ICP audience cards */}
      <WhoWeHelp />

      {/* How It Works, 4 Steps with Visual Diagrams */}
      <HowItWorksSimple />

      {/* AI-Powered, Speed Comparison */}
      <AIPowered />

      {/* Revenue model, illustrative estimate on the visitor's own numbers */}
      <RevenueCalculator />

      {/* Founders */}
      <FounderSection />

      {/* Anti-Agency Manifesto */}
      <AntiAgency />

      {/* Tier Finder Quiz, "Which tier is right for me?" */}
      <TierQuiz />

      {/* FAQ Section */}
      <HomeFaqSection faqs={homeFaqs} />

      {/* Latest Blog Posts */}
      <LatestBlog />

      <Footer />
    </main>
  );
}
