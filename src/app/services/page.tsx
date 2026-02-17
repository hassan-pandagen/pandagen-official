import PageContent from './PageContent';

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services#service",
        "name": "PandaGen Development Services",
        "url": "https://www.pandacodegen.com/services",
        "provider": {
          "@type": "Organization",
          "@id": "https://www.pandacodegen.com/#organization",
          "name": "PandaGen"
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
                "description": "Migrate your WordPress site to a custom Next.js application with sub-second load times, perfect SEO, and zero plugin maintenance."
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
                "name": "High-Performance Shopify Stores",
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
        "name": "Services & Capabilities | PandaGen",
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