import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Is WordPress Slowing Your Business Down? Migrate to Next.js | PandaCodeGen',
  description: 'WordPress sites average 40 to 60 on Google PageSpeed Mobile. We migrate to custom Next.js in 2 to 4 weeks. 95+ PageSpeed guaranteed, zero SEO loss, 301 redirects included. Fixed pricing from $1,500.',
  alternates: { canonical: '/services/wordpress-migration' },
  keywords: [
    'wordpress to nextjs migration',
    'wordpress migration service',
    'wordpress speed optimization service',
    'migrate wordpress to nextjs',
    'wordpress nextjs agency',
    'replace wordpress with nextjs',
    'wordpress slow website fix',
    'wordpress to custom code migration',
    'wordpress migration cost',
    'wordpress headless migration',
  ],
  openGraph: {
    title: 'Is WordPress Slowing Your Business Down? Migrate to Next.js | PandaCodeGen',
    description: 'WordPress sites average 40 to 60 on Google PageSpeed. We migrate to custom Next.js in 2 to 4 weeks. 95+ PageSpeed guaranteed, zero SEO loss. Fixed pricing from $1,500.',
    url: 'https://www.pandacodegen.com/services/wordpress-migration',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is WordPress Slowing Your Business Down? Migrate to Next.js | PandaCodeGen',
    description: 'WordPress averaging 40 to 60 on PageSpeed Mobile. We migrate to custom Next.js. 95+ PageSpeed guaranteed, zero SEO loss. Tiers from $1,500 to $25,000.',
  },
};

export default function MigrationPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#service",
        "name": "WordPress Migration to Custom Code",
        "description": "Professional WordPress migration to custom coded websites. Zero data loss, 2x faster load times, and bank level security.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["WordPress Migration", "WordPress to Custom Code", "WordPress Alternative"],
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
          "name": "WordPress Migration Tiers",
          "itemListElement": [
            { "@type": "Offer", "name": "Starter", "price": "1500", "priceCurrency": "USD", "description": "Small WordPress site migration, 5 to 7 pages" },
            { "@type": "Offer", "name": "Growth", "price": "3500", "priceCurrency": "USD", "description": "15 to 50 pages with blog, forms, integrations" },
            { "@type": "Offer", "name": "Scale", "price": "5000", "priceCurrency": "USD", "description": "Complex WordPress or WooCommerce migrations, 30+ pages, custom integrations" }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#webpage",
        "url": "https://www.pandacodegen.com/services/wordpress-migration",
        "name": "WordPress Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-05-26T00:00:00-05:00",
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
          { "@type": "ListItem", "position": 3, "name": "WordPress Migration", "item": "https://www.pandacodegen.com/services/wordpress-migration" }
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
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my Google rankings during migration?", "acceptedAnswer": { "@type": "Answer", "text": "No. We map every single URL from your old WordPress site to your new site with 301 redirects. Google treats it as the same page at a new address. Most clients see rankings recover within 2-4 weeks and improve within 60 days because the new site is faster." } },
          { "@type": "Question", "name": "How long does a WordPress migration take?", "acceptedAnswer": { "@type": "Answer", "text": "Three weeks for most sites. Days 1-3: full audit and architecture. Days 4-14: custom Next.js build with AI-paired development using Claude and Cursor. Days 15-18: testing, content migration, URL mapping. Days 19-21: launch with zero downtime. Agencies still quote 8-12 weeks because they bill hourly. AI tooling collapses that timeline without cutting corners." } },
          { "@type": "Question", "name": "What happens to my blog posts and content?", "acceptedAnswer": { "@type": "Answer", "text": "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code." } },
          { "@type": "Question", "name": "How much does a WordPress to Next.js migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "Typical agencies charge $15,000 to $40,000 and take 8-12 weeks. We meet you halfway. Three tiers: Starter starts at $1,500 (5 to 7 pages, custom Next.js, 90+ PageSpeed). Growth starts at $3,500 (15-50 pages, custom features). Scale starts at $12,000 (complex sites, WooCommerce, integrations). Most clients recover the investment within 3 to 6 months through eliminated hosting, plugin licenses, and maintenance fees." } },
          { "@type": "Question", "name": "Can I still edit my website after migration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up a content editor with a user-friendly dashboard. You can edit text, images, blog posts, and pages without any coding knowledge. It's simpler than WordPress: no plugins to update, no themes to manage." } }
        ]
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#review-1",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and did not charge for revisions. Overall, their expertise and support were commendable.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#review-2",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen and had a great experience. Hassan was super helpful and communicative throughout the process. Even though I am not tech-savvy, he broke things down in a way that made sense to me. The service was excellent overall.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <p className="sr-only" data-speakable="true">PandaCodeGen migrates WordPress sites to custom Next.js in 2 to 4 weeks. WordPress sites average 40 to 60 on Google PageSpeed Mobile due to PHP rendering, plugin bloat, and shared hosting overhead. Migration includes 301 redirects for every URL, full SEO preservation, zero downtime launch, and 95+ PageSpeed guaranteed or full refund. Fixed pricing from $1,500.</p>
      <PageContent />
    </>
  );
}