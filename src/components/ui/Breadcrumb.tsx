import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate Schema.org BreadcrumbList markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.pandacodegen.com${item.href}`
    }))
  };

  return (
    <>
      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
            {index === items.length - 1 ? (
              <span className="text-white font-semibold">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-white/90 hover:text-neon transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
