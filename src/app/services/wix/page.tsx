import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Wix to Next.js Migration Service | PandaCodeGen',
  description: "Wix scores 30 to 60 on Google PageSpeed and blocks advanced SEO controls. We migrate to custom Next.js in 1 to 3 weeks. 95+ PageSpeed, no monthly fees, full SEO ownership.",
  alternates: { canonical: '/services/wix' },
  keywords: [
    'wix migration service',
    'wix to nextjs',
    'wix alternative',
    'wix slow website',
    'wix seo problems',
    'replace wix website',
    'wix migration cost',
    'wix to custom code',
    'wix slow loading fix',
    'wix seo limitations',
  ],
  openGraph: {
    title: 'Wix to Next.js Migration Service | PandaCodeGen',
    description: "Wix scores 30 to 60 on PageSpeed and blocks advanced SEO. We migrate to custom Next.js in 1 to 3 weeks. 95+ PageSpeed, no monthly fees.",
    url: 'https://www.pandacodegen.com/services/wix',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wix to Next.js Migration Service | PandaCodeGen',
    description: "Wix scores 30 to 60 on PageSpeed and blocks SEO. We migrate to custom Next.js in 1 to 3 weeks. 95+ PageSpeed, no monthly fees.",
  },
};

export default function WixServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wix#service",
        "name": "Wix Website Development & Migration Services",
        "description": "Professional Wix website development with migration path to custom coded Next.js for businesses that want to own their platform and rank higher.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Wix Development", "Wix Migration", "Wix to Next.js", "Wix Alternative"],
        "priceRange": "$3,000 - $12,000",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+13027738982",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2",
          "reviewCount": "2"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wix#webpage",
        "url": "https://www.pandacodegen.com/services/wix",
        "name": "Wix Development & Migration | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wix#service" },
        "inLanguage": "en-US",
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", "h2", "[data-speakable='true']"] }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Wix", "item": "https://www.pandacodegen.com/services/wix" }
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
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wix#review-clutch",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Executive, MC Patches LLC" },
        "reviewBody": "Panda Code Gen successfully delivered a speedy, bug free website. They did exactly what they said they would, delivering a blazing fast Next.js website with a 100/100 PageSpeed score. The communication throughout was excellent.",
        "datePublished": "2025-11-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wix#service" }
      },
      {
        "@type": "Review",
        "@id": "https://www.pandacodegen.com/services/wix#review-trustpilot",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "author": { "@type": "Person", "name": "Marshall James" },
        "reviewBody": "I recently worked with PandaCodeGen on rebuilding my business website and I am beyond impressed. Hassan handled everything professionally, and the final product exceeded my expectations. The site loads incredibly fast and looks stunning.",
        "datePublished": "2026-03-01",
        "itemReviewed": { "@id": "https://www.pandacodegen.com/services/wix#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/services/wix#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Will I lose my Google rankings if I leave Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. We set up 301 redirects from every old URL to the new URL. Google treats it as the same content at a faster address. Rankings typically improve within 30-60 days because the new site is significantly faster." } },
          { "@type": "Question", "name": "Can I still edit my website without coding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up a built-in content editor (like Sanity) with an easy visual editor. You can edit text, images, and blog posts just like you did on Wix, but without the speed and SEO limitations." } },
          { "@type": "Question", "name": "How long does it take to migrate from Wix?", "acceptedAnswer": { "@type": "Answer", "text": "4-6 weeks for a standard business site. Week 1: content export. Weeks 2-4: design and build. Week 5: SEO migration. Week 6: launch." } },
          { "@type": "Question", "name": "What about my Wix forms and contact pages?", "acceptedAnswer": { "@type": "Answer", "text": "All forms get rebuilt with better functionality. We can integrate with any email service (Mailchimp, ConvertKit) or CRM. Form submissions work exactly as before, but the page loads 5x faster." } },
          { "@type": "Question", "name": "Is custom code harder to maintain than Wix?", "acceptedAnswer": { "@type": "Answer", "text": "No. With a built-in content editor, content editing is just as easy. And because there are no plugins or themes to update, there's actually LESS maintenance. No monthly subscription fees, no broken updates." } }
        ]
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