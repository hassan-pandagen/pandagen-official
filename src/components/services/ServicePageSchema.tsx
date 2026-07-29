type ServicePageSchemaProps = {
  path: string;
  name: string;
  description: string;
  breadcrumb: string;
};

export default function ServicePageSchema({ path, name, description, breadcrumb }: ServicePageSchemaProps) {
  const canonical = `https://www.pandacodegen.com${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name,
        description,
        isPartOf: { "@id": "https://www.pandacodegen.com/#website" },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", position: 3, name: breadcrumb, item: canonical },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
