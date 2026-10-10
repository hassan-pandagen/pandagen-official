import type { ServiceFaq } from "@/data/service-faqs";
import { serviceOutputs, OWNERSHIP_ON_HANDOVER, SERVICE_PORTABILITY } from "@/data/platform-portability";

type ServicePageSchemaProps = {
  path: string;
  name: string;
  description: string;
  breadcrumb: string;
  /**
   * The page's visible FAQ list. Pass the same array PageContent renders, never
   * a copy: a FAQPage node asserting text a visitor cannot see is a structured
   * data policy problem, not just an extraction one.
   *
   * Optional because a service page without a FAQ section must not emit one.
   */
  faqs?: ServiceFaq[];
};

export default function ServicePageSchema({ path, name, description, breadcrumb, faqs }: ServicePageSchemaProps) {
  const canonical = `https://www.pandacodegen.com${path}`;
  const showsHandover = Boolean(SERVICE_PORTABILITY[path.split("/").pop() ?? ""]);
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
      // Every service gets its visible offer. The detailed handover assertions
      // remain conditional on rendering OwnershipCompare on that page.
      {
            "@type": "Service",
            "@id": `${canonical}#service`,
            name,
            serviceType: breadcrumb,
            url: canonical,
            provider: { "@id": "https://www.pandacodegen.com/#organization" },
            description: showsHandover ? `${description} ${OWNERSHIP_ON_HANDOVER}` : description,
            ...(showsHandover ? { serviceOutput: serviceOutputs(path.split("/").pop() ?? "").map((item) => ({ "@type": "Thing", name: item.label, description: item.detail })) } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pandacodegen.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.pandacodegen.com/services" },
          { "@type": "ListItem", position: 3, name: breadcrumb, item: canonical },
        ],
      },
      ...(faqs && faqs.length > 0
        ? [{
            "@type": "FAQPage",
            "@id": `${canonical}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }]
        : []),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
