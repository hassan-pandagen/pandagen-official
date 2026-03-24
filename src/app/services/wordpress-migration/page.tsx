import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'WordPress to Next.js Migration Service | PandaCodeGen',
  description: 'Professional WordPress to Next.js migration. Zero data loss, 301 redirects, preserved SEO rankings, and load times under 1 second. From $5,900.',
  alternates: { canonical: '/services/wordpress-migration' },
  openGraph: {
    title: 'WordPress to Next.js Migration Service | PandaCodeGen',
    description: 'Professional WordPress to Next.js migration. Zero data loss, 301 redirects, preserved SEO rankings, and load times under 1 second.',
    url: 'https://www.pandacodegen.com/services/wordpress-migration',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
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
        "priceRange": "$5,000 - $15,000",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "image": "https://www.pandacodegen.com/og-image.jpg"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#webpage",
        "url": "https://www.pandacodegen.com/services/wordpress-migration",
        "name": "WordPress Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" },
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
          { "@type": "ListItem", "position": 3, "name": "WordPress Migration", "item": "https://www.pandacodegen.com/services/wordpress-migration" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.pandacodegen.com/#organization",
        "name": "PandaCodeGen",
        "alternateName": "Panda Gen",
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
          { "@type": "Question", "name": "How long does a WordPress migration take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical migration takes 4-6 weeks from start to launch. Week 1: Full audit and planning. Weeks 2-4: Build your new site. Week 5: Testing, content migration, URL mapping. Week 6: Launch with zero downtime." } },
          { "@type": "Question", "name": "What happens to my blog posts and content?", "acceptedAnswer": { "@type": "Answer", "text": "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code." } },
          { "@type": "Question", "name": "How much does a WordPress to Next.js migration cost?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the size and complexity of your site. A standard business site (10-30 pages) typically ranges from $5,000-$15,000. The ROI usually pays for itself within 3-6 months through reduced hosting costs, lower ad spend, and increased conversions." } },
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
      <PageContent />
    </>
  );
}