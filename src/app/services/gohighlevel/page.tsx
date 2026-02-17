import PageContent from './PageContent';

export default function GoHighLevelServicePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#service",
        "name": "GoHighLevel Website & Funnel Development",
        "description": "Keep GoHighLevel for CRM and automations. We build custom-coded websites that integrate with GHL's API — or fully custom CRM + website solutions. You own the code.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaGen" },
        "areaServed": "Worldwide",
        "serviceType": ["GoHighLevel Development", "GHL Funnel Building", "GoHighLevel Migration", "GoHighLevel Alternative"]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/services/gohighlevel#webpage",
        "url": "https://www.pandacodegen.com/services/gohighlevel",
        "name": "GoHighLevel Development & Migration | PandaGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/services/gohighlevel#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", "position": 3, "name": "GoHighLevel", "item": "https://www.pandacodegen.com/services/gohighlevel" }
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