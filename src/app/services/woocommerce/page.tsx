import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Is WooCommerce Slowing Your Store? We Fix It With Next.js | PandaCodeGen',
  description: 'WooCommerce stores score 30 to 55 on mobile PageSpeed. We fix the root cause with a headless Next.js frontend. Keep your product catalog, get 95+ PageSpeed and sub-1-second load times.',
  alternates: {
    canonical: '/services/woocommerce',
  },
  keywords: [
    'woocommerce speed optimization',
    'woocommerce headless',
    'woocommerce slow fix',
    'woocommerce migration service',
    'headless woocommerce development',
    'woocommerce to nextjs',
    'woocommerce performance agency',
    'fix woocommerce slow website',
    'woocommerce too slow',
    'woocommerce checkout slow',
  ],
  openGraph: {
    title: 'Is WooCommerce Slowing Your Store? We Fix It With Next.js | PandaCodeGen',
    description: 'WooCommerce stores score 30 to 55 on mobile PageSpeed. We fix it with a headless Next.js frontend. Keep your catalog, get 95+ PageSpeed.',
    url: 'https://www.pandacodegen.com/services/woocommerce',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is WooCommerce Slowing Your Store? We Fix It With Next.js | PandaCodeGen',
    description: 'WooCommerce scoring 30 to 55 on PageSpeed Mobile. We fix it with a headless Next.js frontend. 95+ PageSpeed, keep your product catalog.',
  },
};

export default function WooCommerceServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/woocommerce#service",
        "name": "WooCommerce Migration & Custom E-Commerce Development",
        "description": "Migrate from WooCommerce to a custom coded Next.js storefront. Under a second load times, zero plugin fees, and full code ownership. Serving UK, Australia, Canada, Europe and US.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": ["US", "GB", "AU", "CA", "DE", "FR", "NL", "IE"],
        "serviceType": ["WooCommerce Migration", "WooCommerce to Next.js", "Custom E-Commerce", "Headless Commerce"],
        "priceRange": "$1,500 - $25,000",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "WooCommerce Migration Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Starter", "price": "1500", "priceCurrency": "USD", "description": "Simple WooCommerce migration, 10 to 30 products" },
            { "@type": "Offer", "name": "Growth", "price": "3500", "priceCurrency": "USD", "description": "30 to 150 products with custom cart logic" },
            { "@type": "Offer", "name": "Scale", "price": "12000", "priceCurrency": "USD", "description": "Subscriptions, B2B pricing, wholesale" }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/woocommerce#webpage",
        "url": "https://www.pandacodegen.com/services/woocommerce",
        "name": "WooCommerce Migration to Custom Code | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/woocommerce#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-05-12T00:00:00-05:00",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "WooCommerce Migration", "item": "https://www.pandacodegen.com/services/woocommerce" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Code Gen",
        "url": "https://www.pandacodegen.com",
        "logo": { "@type": "ImageObject", "url": "https://www.pandacodegen.com/logo.png", "width": 655, "height": 113 },
        "email": "info@pandacodegen.com",
        "foundingDate": "2026",
        "areaServed": "Worldwide",
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/woocommerce#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 100/100 PageSpeed score. The communication throughout was excellent.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/woocommerce#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/woocommerce#review-trustpilot",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen on rebuilding my business website and I am beyond impressed. Hassan handled everything professionally, and the final product exceeded my expectations. The site loads incredibly fast and looks stunning.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/woocommerce#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/woocommerce#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my WooCommerce orders and customer data during migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. We export your full order history, customer records, and product catalog from WooCommerce before we touch anything. All data migrates to your new platform. Nothing is deleted until you confirm everything transferred correctly." } },
          { "@type": "Question", "name": "How much does a WooCommerce to custom code migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical agencies charge $15,000 to $40,000 and take 8-12 weeks. We meet you halfway. Three tiers: Starter starts at $1,500 (small WooCommerce stores, 10 to 30 products). Growth starts at $3,500 (30-150 products with custom cart and reviews). Scale starts at $12,000 (subscriptions, B2B pricing, large catalogs, wholesale). Most stores recover the investment within 4-6 months through eliminated plugin fees and faster checkout." } },
          { "@type": "Question", "name": "Can I still use Stripe and PayPal after leaving WooCommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate Stripe and PayPal directly into your custom storefront using their official APIs. No payment gateway plugins needed. Your checkout is faster, more reliable, and you save the WooCommerce payment plugin fees." } },
          { "@type": "Question", "name": "How long does a WooCommerce migration take?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 6-8 weeks. Week 1-2: product export and new architecture. Weeks 3-5: build custom storefront with cart, checkout, and product pages. Week 6-7: data migration and testing. Week 8: zero-downtime launch." } },
          { "@type": "Question", "name": "What happens to my WooCommerce SEO rankings after migration?", "acceptedAnswer": { "@type": "Answer", "text": "We map every product URL, category page, and blog post with 301 redirects so Google sees continuity. Combined with faster load times and improved Core Web Vitals, most clients see rankings improve within 30-60 days of launch." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen fixes slow WooCommerce stores with a headless Next.js frontend. WooCommerce stores score 30 to 55 on mobile PageSpeed due to PHP server rendering and plugin bloat. We keep your WooCommerce product catalog and replace only the slow frontend. Checkout speed improves, cart abandonment drops, and mobile PageSpeed jumps to 95 or above.</p>
      <PageContent />
    </>
  );
}
