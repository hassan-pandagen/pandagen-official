import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'WooCommerce Too Slow? We Fix It With Next.js',
  description: 'WooCommerce stores score 30 to 55 on mobile PageSpeed. We fix the root cause with a headless Next.js frontend. Keep your catalog, get 90+ PageSpeed.',
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
    title: 'WooCommerce Too Slow? We Fix It With Next.js | PandaCodeGen',
    description: 'WooCommerce stores score 30 to 55 on mobile PageSpeed. We fix it with a headless Next.js frontend. Keep your catalog, get 90+ PageSpeed.',
    url: 'https://www.pandacodegen.com/services/woocommerce',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce Too Slow? We Fix It With Next.js | PandaCodeGen',
    description: 'WooCommerce scoring 30 to 55 on PageSpeed Mobile. We fix it with a headless Next.js frontend. 90+ PageSpeed, keep your product catalog.',
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
        "priceRange": "$1,500 - $10,000",
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
            { "@type": "Offer", "name": "Scale", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "5000", "maxPrice": "10000", "priceCurrency": "USD" }, "description": "Subscriptions, B2B pricing, wholesale, 100+ products" },
            { "@type": "Offer", "name": "Scale+", "priceCurrency": "USD", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "10000", "priceCurrency": "USD" }, "description": "Enterprise WooCommerce scope, custom-quoted after a scoping call" }
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
        "knowsAbout": ["Headless commerce", "WooCommerce to Next.js migration", "Shopify Storefront API", "Stripe payments", "Square payments", "301 redirect SEO migration", "Core Web Vitals"],
        "sameAs": ["https://twitter.com/pandacodegen", "https://www.linkedin.com/company/pandacodegen", "https://www.linkedin.com/in/hassan-jamal-713ba6228/", "https://github.com/hassan-pandagen", "https://clutch.co/profile/panda-code-gen", "https://www.trustpilot.com/review/pandacodegen.com", "https://www.google.com/maps?cid=16271659886069582158"]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/woocommerce#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 90+ PageSpeed score. The communication throughout was excellent.",
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
          { "@type": "Question", "name": "Will I lose my WooCommerce orders and customer data?", "acceptedAnswer": { "@type": "Answer", "text": "No. We export your entire WooCommerce database (products, orders, customer accounts, reviews, categories) and migrate it to your new platform. Zero data loss. We test imports in staging before anything touches your live store." } },
          { "@type": "Question", "name": "Do I keep my Google rankings after migrating from WooCommerce?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every URL from your WooCommerce store is mapped with 301 redirects to the new site. Google treats it as the same page at a new address. Most clients see rankings recover within 2 to 4 weeks and improve within 60 days because the faster site gets rewarded." } },
          { "@type": "Question", "name": "Can I still manage products and orders without being technical?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We set up a clean admin dashboard where you can add products, update prices, manage inventory, and process orders. No code required. It's simpler than WooCommerce's admin because we only build what you actually need." } },
          { "@type": "Question", "name": "What payment gateways do you support?", "acceptedAnswer": { "@type": "Answer", "text": "Stripe, PayPal, Apple Pay, Google Pay, Cash App Pay, Klarna, Afterpay, and any other gateway with an API. We integrate them natively. No paid plugin required. Your checkout is fully custom, so we can add any payment method you want." } },
          { "@type": "Question", "name": "How much does a WooCommerce migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Four tiers. Starter $1,500 (simple WooCommerce migration, 10 to 30 products). Growth $3,500 (30 to 150 products with custom cart logic). Scale $5,000 to $10,000 (subscriptions, B2B pricing, wholesale, 100+ products). Scale+ $10,000+ for enterprise WooCommerce scope, custom-quoted after a scoping call. We give a fixed-price quote upfront. No hourly surprises." } },
          { "@type": "Question", "name": "How long does a WooCommerce migration take?", "acceptedAnswer": { "@type": "Answer", "text": "2 to 6 weeks depending on scope. Starter stores ship in 1 to 2 weeks, Growth stores in 2 to 3, and Scale builds with subscriptions or B2B pricing run 3 to 5 weeks, sometimes 6 for enterprise scope. Your current store stays live the entire time, and launch day is zero-downtime." } },
          { "@type": "Question", "name": "My WooCommerce store has subscriptions / bookings / B2B pricing. Can you handle that?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Subscriptions, recurring billing, tiered B2B pricing, volume discounts, booking calendars: these are all custom logic we build natively. You won't need a $300/mo plugin to handle what we can build into the core of your store." } },
          { "@type": "Question", "name": "What about WooCommerce Subscriptions and my existing recurring billing?", "acceptedAnswer": { "@type": "Answer", "text": "We migrate every active subscription to Stripe Billing (native, no markup). Your subscribers keep their saved cards and billing date. Zero payment interruption, zero customer re-auth. Stripe handles the dunning, the webhooks, the failed-card retries. You stop paying $199/month for WooCommerce Subscriptions." } },
          { "@type": "Question", "name": "Do I keep my Stripe account and saved customer cards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We connect to your existing Stripe account using your live keys. All Customer IDs, saved payment methods, subscription IDs, and Stripe Customer Portal history carry over untouched. Your buyers never re-enter a card." } },
          { "@type": "Question", "name": "How do you handle tax (Avalara, TaxJar, WooCommerce Tax)?", "acceptedAnswer": { "@type": "Answer", "text": "We integrate Stripe Tax or TaxJar directly at checkout. Live nexus calculation across all US states plus VAT for UK/EU. No more $99/month WooCommerce Tax plugin, no more Avalara reconciliation. Stripe Tax handles filings in 30+ jurisdictions." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen fixes slow WooCommerce stores with a headless Next.js frontend. WooCommerce stores score 30 to 55 on mobile PageSpeed due to PHP server rendering and plugin bloat. We keep your WooCommerce product catalog and replace only the slow frontend. Checkout speed improves, cart abandonment drops, and mobile PageSpeed jumps to 90 or above.</p>
      <PageContent />
    </>
  );
}
