import type { Metadata } from 'next';
import PageContent from './PageContent';

export const metadata: Metadata = {
  title: 'Services & Capabilities | PandaCodeGen',
  description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat, bank level security.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Capabilities | PandaCodeGen',
    description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat.',
    url: 'https://www.pandacodegen.com/services',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Capabilities | PandaCodeGen',
    description: 'WordPress migration, Shopify headless commerce, and custom web app development. Under a second load times, zero bloat.',
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services#service",
        "name": "PandaCodeGen Development Services",
        "url": "https://www.pandacodegen.com/services",
        "image": "https://www.pandacodegen.com/og-image.jpg",
        "telephone": "+1-302-773-8982",
        "priceRange": "$3,000 - $60,000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "701 Tillery St Ste 12",
          "addressLocality": "Austin",
          "postalCode": "78702",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "provider": {
          "@type": "Organization",
          "@id": "https://www.pandacodegen.com/#organization",
          "name": "PandaCodeGen"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "WordPress to Next.js Migration",
                "description": "Migrate your WordPress site to a custom Next.js application with load times under 1 second, perfect SEO, and zero plugin maintenance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Apps & Dashboards",
                "description": "Build custom client portals, internal dashboards, AI tools, and mobile apps with React and Next.js."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High Performance Shopify Stores",
                "description": "Custom headless Shopify storefronts that load instantly with Next.js. No templates, no monthly app fees."
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services#webpage",
        "url": "https://www.pandacodegen.com/services",
        "name": "Services & Capabilities | PandaCodeGen",
        "description": "Expert Next.js development services: WordPress migration, Shopify headless commerce, and custom web application development.",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageContent />
    </>
  );
}