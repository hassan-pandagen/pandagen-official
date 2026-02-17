import PageContent from './PageContent';

export default function MigrationPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#service",
        "name": "WordPress Migration to Custom Code",
        "description": "Professional WordPress migration to custom-coded websites. Zero data loss, 2x faster load times, and bank-grade security.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["WordPress Migration", "WordPress to Custom Code", "WordPress Alternative"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wordpress-migration#webpage",
        "url": "https://www.pandacodegen.com/services/wordpress-migration",
        "name": "WordPress Migration | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wordpress-migration#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "WordPress Migration", "item": "https://www.pandacodegen.com/services/wordpress-migration" }
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