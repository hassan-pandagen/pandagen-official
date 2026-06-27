import lazyLoad from "next/dynamic";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustLogoBar from "@/components/sections/TrustLogoBar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import HomeFaqSection from "@/components/home/HomeFaqSection";

// Tell Next.js to statically generate this page at build time
// so critters can inline critical CSS into the HTML output
export const dynamic = "force-static";

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
    a: "WordPress to Next.js migration costs $1,500 for a 5 to 7 page business site (Starter), $3,500 for a 10 to 20 page site with blog migration and 301 redirects (Growth, most popular), and $5,000 to $10,000 for headless e-commerce with 30+ pages and custom integrations (Scale). Pricing is fixed with no surprises. Enterprise agencies charge $15,000 to $25,000 for the same scope. We move your content, SEO settings, and design to a custom coded site loading in under 1 second, with no monthly plugin fees and no vendor lock in. Every plan includes a written 90+ PageSpeed guarantee or full refund.",
  },
  {
    q: "How does the free AI website audit work?",
    a: "Our free AI audit analyzes your website's load time, Core Web Vitals (the speed and stability scores Google uses to rank your site), SEO performance, and security vulnerabilities in real-time. Simply enter your URL above and get a full breakdown of what's costing you revenue, including your average load time, PageSpeed score, and specific actionable recommendations. The audit takes under 30 seconds and requires no signup.",
  },
  {
    q: "How much faster will my site be after migration from WordPress or Shopify?",
    a: "Most WordPress and Shopify sites we migrate go from 4 to 8 second load times to under 1 second, an improvement of 80 to 95%. Our average PageSpeed score across all builds is 100/100. Load times under 1 second directly improve your Google rankings, lower bounce rates, and increase conversion rates. Faster sites also cost less to host because they require fewer server resources.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes. We build custom Shopify storefronts using headless architecture (your customers see a lightning-fast custom site, while you still manage products and orders in Shopify as usual). If your Shopify store is slow due to too many apps, a bloated theme, or unoptimized code, we replace the slow storefront with a custom coded solution that delivers 4x faster load times. You keep your entire Shopify backend for product management, orders, and payments.",
  },
  {
    q: "Will I lose SEO rankings when migrating from WordPress?",
    a: "No. We preserve every SEO ranking through a documented 301 redirect map (a permanent forwarding instruction that tells Google your URLs moved), schema markup migration, sitemap regeneration, and a phased DNS cutover. Most clients see rankings hold steady within 7 to 14 days post-launch, and many gain rankings because their Core Web Vitals scores jump from poor to excellent. We have done 12 migrations in 2026 with zero ranking losses. Most migrations take 1 to 3 weeks: Discovery, Architecture, Build, QA testing, Launch. Zero downtime during the switch, your old site stays live until the new one is fully verified.",
  },
  {
    q: "Why not just use a faster WordPress host or a caching plugin?",
    a: "Faster hosting and caching plugins help marginally, but they don't fix the root cause: WordPress itself is heavy. Every time someone visits your WordPress site, the server has to build the page from scratch (querying the database, loading plugins, rendering the theme). This happens on every single visit. Plugins like WP Rocket or W3 Total Cache can shave off 0.3 to 0.5 seconds at best. The only permanent fix for a slow WordPress site is replacing it with a purpose built, custom coded website that is pre-built and ready to serve instantly. That is exactly what we do.",
  },
];

export default function Home() {
  // Schema.org structured data for homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Code Gen",
        "url": "https://www.pandacodegen.com",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pandacodegen.com/logo.png",
          "width": 655,
          "height": 113
        },
        "description": "Custom Next.js web development agency. We rebuild slow WordPress and Shopify sites into custom code that ChatGPT, Claude and Google AI cite, and cut clients' monthly subscriptions 40 to 70%. Load times under 1 second, 90+ PageSpeed guaranteed.",
        "email": "info@pandacodegen.com",
        "telephone": "+13027738982",
        "foundingDate": "2026",
        "areaServed": "Worldwide",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78702",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.2603295,
          "longitude": -97.7042901
        },
        "sameAs": [
          "https://www.linkedin.com/company/pandacodegen",
          "https://www.linkedin.com/in/hassan-jamal-713ba6228/",
          "https://github.com/hassan-pandagen",
          "https://clutch.co/profile/panda-code-gen",
          "https://www.trustpilot.com/review/pandacodegen.com",
          "https://www.google.com/maps?cid=16271659886069582158",
          "https://www.goodfirms.co/company/pandacodegen",
          "https://www.crunchbase.com/organization/pandacodegen",
          "https://www.designrush.com/agency/profile/pandacodegen",
          "https://www.sortlist.com/agency/pandacodegen",
          "https://www.f6s.com/pandacodegen",
          "https://www.sanity.io/exchange/community/pandacodegen",
          "https://www.behance.net/pandacodegen",
          "https://dev.to/pandacodegen",
          "https://www.reddit.com/user/PandaCodeGen/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "info@pandacodegen.com",
          "telephone": "+13027738982",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "serviceType": [
          "Custom Web Development",
          "WordPress Migration",
          "Shopify Store Optimization",
          "E-Commerce Development",
          "Web Performance Optimization",
          "Business Website Development"
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
          "Core Web Vitals optimization",
          "Custom e-commerce development",
          "Custom SaaS and dashboard development",
          "Server-side ad tracking (Meta Conversions API)",
          "SaaS cost reduction",
          "Answer Engine Optimization (AEO)",
          "Technical SEO",
          "Headless CMS architecture",
          "Vercel deployment"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "5",
          "reviewCount": "5"
        },
        "owns": [
          {
            "@type": "WebSite",
            "name": "Panda Patches",
            "url": "https://www.pandapatches.com",
            "description": "Custom Next.js e-commerce store built and operated by PandaCodeGen. Migrated from WordPress and WooCommerce to a headless Next.js, Sanity, Supabase and Stripe stack. Google PageSpeed 64 to 99 on mobile, LCP 5.8s to 0.8s, running roughly $38,000 per month in revenue on about $25 per month in tooling."
          },
          {
            "@type": "WebSite",
            "name": "MyCustomPatches",
            "url": "https://www.mycustompatches.net",
            "description": "Custom Next.js e-commerce site built by PandaCodeGen for Matt Conner (MC Patches LLC). Migrated from WordPress and WooCommerce. Google PageSpeed 45 to 100, load time 3.2s to 0.7s, monthly hosting $150 to $0."
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pandacodegen.com/#website",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen - Custom Web Development",
        "description": "We rebuild slow WordPress and Shopify sites into custom Next.js code that ChatGPT, Claude and Google AI cite, and cut monthly subscriptions 40 to 70%. Load times under 1 second. 90+ PageSpeed guaranteed.",
        "publisher": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.pandacodegen.com/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/#webpage",
        "url": "https://www.pandacodegen.com",
        "name": "PandaCodeGen | Custom Web Development & Shopify Optimization",
        "description": "We rebuild slow WordPress and Shopify sites into custom Next.js code that ChatGPT, Claude and Google AI cite, and cut monthly subscriptions 40 to 70%. Load times under 1 second. 90+ PageSpeed guaranteed.",
        "isPartOf": {
          "@id": "https://www.pandacodegen.com/#website"
        },
        "about": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10",
        "dateModified": "2026-06-01",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-matt-conner",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Matt Conner" },
        "publisher": { "@type": "Organization", "name": "Clutch", "url": "https://clutch.co" },
        "reviewBody": "Hassan was available to me at any time, and his response time was always less than an hour. Panda Code Gen successfully delivered a speedy, bug-free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and did not charge for revisions. Overall, their expertise and support were commendable.",
        "datePublished": "2026-03-08",
        "url": "https://clutch.co/profile/panda-code-gen",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-marshall-james",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "publisher": { "@type": "Organization", "name": "Trustpilot", "url": "https://www.trustpilot.com" },
        "reviewBody": "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I am not tech-savvy, he broke things down in a way that made sense to me. The service was pretty good overall.",
        "datePublished": "2026-03-10",
        "url": "https://www.trustpilot.com/review/pandacodegen.com",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" }
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.pandacodegen.com/#service",
        "name": "PandaCodeGen Development Services",
        "description": "Custom web development, WordPress migration, and Shopify optimization for growing businesses.",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+13027738982",
        "priceRange": "$1,500 - $25,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "addressRegion": "TX",
          "postalCode": "78702",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.2603295,
          "longitude": -97.7042901
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "provider": {
          "@id": "https://www.pandacodegen.com/#organization"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress Migration",
                "description": "Migrate your WordPress site to a custom coded website with load times under 1 second."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shopify Store Optimization",
                "description": "Build a custom Shopify storefront for 4x faster load times."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Applications",
                "description": "Build custom business tools, dashboards, and web applications."
              }
            }
          ]
        }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-james-peace",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "James Peace" },
        "publisher": { "@type": "Organization", "name": "Google", "url": "https://www.google.com/maps" },
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" },
        "reviewBody": "I was not sure at first. Can a custom website really be built for $300 with no costs? PandaCodeGen. Hassan showed me it can be done. They gave me a quote at first. They worked with me to make a website I could afford. They made sure there are no costs or extra fees. PandaCodeGen and Hassan are good at what they do. They care about their customers.",
        "datePublished": "2026-03-18",
        "url": "https://www.google.com/maps?cid=16271659886069582158"
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/#review-richard-junior",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Richard Junior" },
        "publisher": { "@type": "Organization", "name": "Google", "url": "https://www.google.com/maps" },
        "itemReviewed": { "@id": "https://www.pandacodegen.com/#organization" },
        "reviewBody": "I was on the fence about leaving Squarespace, but PandaCodeGen really understood what I needed. I talked to a few other agencies and PandaCodeGen's proposal aligned best with my vision. They migrated my site in 10 days and did exactly what they said they'd do. Super happy with the result. Would definitely recommend them.",
        "datePublished": "2026-04-02",
        "url": "https://www.google.com/maps?cid=16271659886069582158"
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
    <main className="min-h-screen bg-paper text-charcoal overflow-x-hidden">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Paper grain texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <Header />

      {/* Hero */}
      <Hero />

      {/* Trust Stats Strip, 98+ PageSpeed, <1s load, $0 fees, 100% ownership */}
      <TrustLogoBar />

      {/* Social Proof, quiet confidence strip (Paper) */}
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

      {/* Revenue Recovery Calculator */}
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
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
