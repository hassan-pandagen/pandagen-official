import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Shopify Speed Optimization & Headless Development | PandaCodeGen',
  description: "Your Shopify store scores 40 to 60 on PageSpeed. We rebuild the frontend in Next.js, loading under 1 second. 95+ PageSpeed guaranteed, no app fees, you own the code.",
  alternates: { canonical: '/services/ecommerce' },
  keywords: [
    'shopify speed optimization service',
    'headless shopify development',
    'shopify slow website fix',
    'shopify performance optimization',
    'headless shopify storefront',
    'shopify app fees alternative',
    'shopify nextjs migration',
    'shopify headless commerce agency',
    'slow shopify store fix',
    'shopify speed fix agency',
  ],
  openGraph: {
    title: 'Shopify Speed Optimization & Headless Development | PandaCodeGen',
    description: "Your Shopify store scores 40 to 60 on PageSpeed. We rebuild the frontend in Next.js. 95+ PageSpeed guaranteed, no app fees, you own the code.",
    url: 'https://www.pandacodegen.com/services/ecommerce',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Speed Optimization & Headless Development | PandaCodeGen',
    description: "Shopify scoring 40 to 60 on PageSpeed. We rebuild in Next.js. 95+ PageSpeed guaranteed, no app fees, you own the code.",
  },
};

export default function EcommercePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/ecommerce#service",
        "name": "Shopify Headless & E-Commerce Development",
        "description": "Custom headless Shopify storefronts that load instantly. No templates, no monthly app fees, complete customization.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Shopify Headless", "E-Commerce Development", "Shopify Migration", "Custom Shopify Storefront"],
        "priceRange": "$500 - $25,000",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/ecommerce#webpage",
        "url": "https://www.pandacodegen.com/services/ecommerce",
        "name": "Shopify Headless Development | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/ecommerce#service" },
        "inLanguage": "en-US",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "E-Commerce", "item": "https://www.pandacodegen.com/services/ecommerce" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/ecommerce#faq",
        "mainEntity": [
          { "@type": "Question", "name": "What is custom Shopify?", "acceptedAnswer": { "@type": "Answer", "text": "Custom Shopify means you keep Shopify for everything it's great at (inventory, orders, payments, and customer management), but replace the slow Liquid theme with a custom coded storefront that loads in under 1 second. Same dashboard, 4x faster store." } },
          { "@type": "Question", "name": "Will my Shopify apps still work?", "acceptedAnswer": { "@type": "Answer", "text": "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code, so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once." } },
          { "@type": "Question", "name": "How long does a custom storefront migration take?", "acceptedAnswer": { "@type": "Answer", "text": "Three weeks for most stores. Days 1-3: API architecture and design. Days 4-14: Custom storefront build accelerated by AI-paired development with Claude and Cursor. Days 15-18: Testing with live Shopify data. Days 19-21: Launch with zero downtime. Agencies still quote 8-12 weeks because they bill hourly." } },
          { "@type": "Question", "name": "Will I lose sales during the migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Zero downtime, zero lost sales." } },
          { "@type": "Question", "name": "How much does a custom Shopify storefront cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical agencies charge $30,000 to $60,000 and take 8 to 12 weeks. We meet you halfway. Foot-in-the-Door stores start at $500 (our founder's offer for small catalogs with public case study exchange). Growth builds start at $3,500 (30-100 products, custom features). Scale builds start at $12,000 (subscriptions, custom logic, large catalogs). Most clients recover the investment within 4 to 6 months through eliminated app fees and conversion lift." } }
        ]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/ecommerce#review-1",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and did not charge for revisions. Overall, their expertise and support were commendable.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/ecommerce#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/ecommerce#review-2",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I am not tech-savvy, he broke things down in a way that made sense to me. The service was excellent overall.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/ecommerce#service" }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageContent />
    </>
  );
}