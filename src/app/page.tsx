import Link from "next/link";
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
import { ORGANIZATION_PROFILES } from "@/data/company-facts";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Get Cited by AI Search | Custom Next.js Web Development | PandaCodeGen",
  description:
    "Move off WordPress, Wix, Squarespace or Webflow onto custom Next.js you own from the start, without losing the traffic you already have. Fixed pricing from $1,500.",
  // Self-referencing canonical plus reciprocal hreflang to the French and
  // German versions of this page. x-default points at English.
  alternates: alternatesFor("home", "en"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pandacodegen.com",
    siteName: "PandaCodeGen",
    title: "Get Cited by AI Search | Custom Next.js Web Development | PandaCodeGen",
    description:
      "Custom Next.js websites you own outright. Fast pages with clear answers Google and AI assistants can quote. Fixed pricing from $1,500.",
    images: [
      ogImageForPath("/"),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Cited by AI Search | Custom Next.js Web Development | PandaCodeGen",
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
    q: "Do you have a minimum project size?",
    a: "No. We start at $1,500 for a 5 to 7 page site, and a small project is quoted the same way as a large one. Most custom Next.js agencies will not start below $10,000, and several will not start below $50,000, so a small business is often told no before it gets a price. You get a fixed price before we begin either way.",
  },
  {
    q: "How much does WordPress to Next.js migration cost?",
    a: "From $1,500 for a 5 to 7 page business site. From $3,500 for 10 to 20 pages with your blog moved and every old link forwarded, which is what most people pick. $5,000 to $10,000 for an online store or 30-plus pages. The price is fixed before we start and your written quote has the exact figure. Your content, your Google settings and your design all come across. No monthly plugin fees, and you own the code. Every page scores 90 or better on Google's PageSpeed test on phone and desktop, and we test three times before handover.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "Type in your web address and you get your load time, your Google speed scores, your technical SEO and any obvious security problems, with specific things to fix. It takes under a minute. No email, no signup, no sales call. It is a snapshot of your site today, not a claim about money you are losing.",
  },
  {
    q: "How much faster will my site be after migrating from WordPress or Shopify?",
    a: "Most WordPress and Shopify sites we look at take 3 to 8 seconds to load. We build for under a second, and every page we hand over scores 90 or better on Google's PageSpeed test on phone and desktop. We test three times and show you the results. Your real-world speed also depends on your traffic and anything added to the site later, so we keep measuring it rather than promise a number.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture: your customers see a fast custom front end while you keep managing products and orders in Shopify as usual. If your store is slow because of app bloat, a heavy theme or unoptimised code, we replace the storefront layer with custom code while your entire Shopify backend stays in place for products, orders and payments. Speed improvement varies by store, so we measure your baseline before quoting.",
  },
  {
    q: "Will I lose SEO rankings when migrating from WordPress?",
    a: "Nobody controls Google, so anyone promising your rankings is guessing. What we do is forward every single old web address to its new page, carry across your titles, descriptions and blog content, and watch Google Search Console before and after launch. Your old site stays live until the new one is confirmed working, and if anything is wrong we switch back. On the MyCustomPatches move, confirmed by the owner: 200-plus pages in 22 days, no downtime, and no rankings lost in the 30 days after launch. Speed and hosting figures for that project are withdrawn while we recheck the original test records.",
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
          "streetAddress": "12250 S Kirkwood Rd, Apt 1128",
          "addressLocality": "Stafford",
          "addressRegion": "TX",
          "postalCode": "77477",
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
        "sameAs": [...ORGANIZATION_PROFILES],
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
        "name": "Get Cited by AI Search | Custom Next.js Web Development | PandaCodeGen",
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
            <strong className="text-charcoal">PandaCodeGen is a custom Next.js <Link href="/blog/for-agencies-offer-custom-web-development" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">web development</Link> studio</strong> that rebuilds slow WordPress, Shopify, Webflow, Wix and Squarespace sites into fast custom code you own. Sites start at $1,500 at a fixed price agreed before we start, take 2 to 4 weeks, and score 90 or better on Google&apos;s PageSpeed test on phone and desktop. No monthly platform fees and no retainer. Pages arrive as finished HTML with clear, direct answers that search engines and AI assistants such as ChatGPT, Claude and Perplexity can quote.
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
