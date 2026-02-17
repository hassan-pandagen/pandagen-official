import PageContent from './PageContent';

export default function SquarespaceServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/squarespace#service",
        "name": "Squarespace Migration to Custom Code",
        "description": "Professional Squarespace migration to custom-coded Next.js websites. Faster loading, real SEO, full code ownership.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Squarespace Migration", "Squarespace to Next.js", "Squarespace Alternative", "Squarespace to Custom Code"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/squarespace#webpage",
        "url": "https://www.pandacodegen.com/services/squarespace",
        "name": "Squarespace Migration | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/squarespace#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Squarespace Migration", "item": "https://www.pandacodegen.com/services/squarespace" }
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
