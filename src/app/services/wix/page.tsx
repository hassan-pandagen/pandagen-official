import PageContent from './PageContent';

export default function WixServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/wix#service",
        "name": "Wix Website Development & Migration Services",
        "description": "Professional Wix website development with migration path to custom-coded Next.js for businesses that want to own their platform and rank higher.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["Wix Development", "Wix Migration", "Wix to Next.js", "Wix Alternative"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/wix#webpage",
        "url": "https://www.pandacodegen.com/services/wix",
        "name": "Wix Development & Migration | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/wix#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Wix", "item": "https://www.pandacodegen.com/services/wix" }
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