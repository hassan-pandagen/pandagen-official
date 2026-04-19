import type { Metadata } from 'next';
import PartnersContent from './PartnersContent';

export const metadata: Metadata = {
  title: 'White-Label Web Development for Agencies | PandaCodeGen',
  description: 'Three-tier agency partnership program. Referral Partner (15% commission), White-Label Partner (35% margin), or Joint Venture (50/50). Published rates. Mutual NDA. Your brand, our engineering.',
  alternates: { canonical: '/partners' },
  keywords: [
    'white label web development agency',
    'agency partnership program',
    'white label nextjs development',
    'white label web design partner',
    'agency dev team outsourcing',
    'white label website builder agency',
    'referral partner program web development',
    'white label nextjs agency',
    'web development agency partner',
    'white label development commission',
  ],
  openGraph: {
    title: 'White-Label Web Development for Agencies | PandaCodeGen',
    description: 'Three-tier agency partnership. 15% Referral / 35% White-Label margin / 50/50 Joint Venture. Published rates. Mutual NDA. Your brand, our engineering.',
    url: 'https://www.pandacodegen.com/partners',
    siteName: 'PandaCodeGen',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label Web Development for Agencies | PandaCodeGen',
    description: 'Three-tier agency partnership. Published commission rates. Mutual NDA. Your brand, our engineering.',
  },
};

export default function PartnersPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.pandacodegen.com/partners#service",
        "name": "White-Label Web Development Partnership",
        "description": "Three-tier agency partnership program: Referral Partner (15% commission), White-Label Partner (35% margin), and Joint Venture Partner (50/50 revenue split). Mutual NDA, full source code handoff, your brand on all deliverables.",
        "provider": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization", "name": "PandaCodeGen" },
        "areaServed": "Worldwide",
        "serviceType": ["White-Label Web Development", "Agency Partnership", "Custom Web Development", "Outsourced Development", "Referral Partner Program", "Joint Venture Partnership"],
        "priceRange": "$500 - $25,000",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Partnership Tiers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Referral Partner",
                "description": "Send us a qualified lead, we handle everything, you earn 15% commission on the final sale. Zero commitment, no minimums."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "White-Label Partner",
                "description": "We build under your brand, 100% invisible to your clients. Your GitHub, Vercel, domain. 35% agency margin. 1 project minimum to start."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Joint Venture Partner",
                "description": "Combined offering with co-branded deliverables. 50/50 revenue split on jointly-sourced clients. Dedicated Slack, pitch decks, shared marketing."
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.pandacodegen.com/partners#webpage",
        "url": "https://www.pandacodegen.com/partners",
        "name": "White-Label Web Development for Agencies | PandaCodeGen",
        "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
        "about": { "@id": "https://www.pandacodegen.com/partners#service" },
        "inLanguage": "en-US",
        "datePublished": "2026-02-10T00:00:00-05:00",
        "dateModified": "2026-04-18T00:00:00-05:00",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "[data-speakable='true']"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
          { "@type": "ListItem", "position": 2, "name": "For Agencies", "item": "https://www.pandacodegen.com/partners" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pandacodegen.com/partners#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Do you sign NDAs before we share client details?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Mutual NDA signed before you send us a single client detail. We have a standard template ready (takes 5 minutes to sign). Your client relationship stays yours, end to end. We communicate only with you." } },
          { "@type": "Question", "name": "Will our clients know PandaCodeGen is building the site?", "acceptedAnswer": { "@type": "Answer", "text": "No. We stay completely invisible. Your GitHub, your Vercel deployment, your custom domain, your brand emails if you want them routed that way. Your client sees your agency as the builder." } },
          { "@type": "Question", "name": "What if the client wants to meet the developer?", "acceptedAnswer": { "@type": "Answer", "text": "Your call. You can loop us in as a senior engineering partner on the call (no branding mentioned), or keep us fully invisible. Most partners keep us invisible. We follow your lead." } },
          { "@type": "Question", "name": "How does the white-label handoff actually work?", "acceptedAnswer": { "@type": "Answer", "text": "We push the code to your GitHub repo, deploy to your Vercel account, use your brand colors in any internal docs, and hand over complete source code plus documentation. You own everything from day one. If you ever stop working with us, the site keeps running untouched." } },
          { "@type": "Question", "name": "What is the minimum commitment?", "acceptedAnswer": { "@type": "Answer", "text": "Referral Partner: zero commitment. Send a lead, get commission, done. White-Label Partner: 1 pilot project to start, no minimums after that. Most white-label partners send 1-3 projects per month once they see how it works." } },
          { "@type": "Question", "name": "How fast can you start on a project?", "acceptedAnswer": { "@type": "Answer", "text": "Typically within 1 week of brief approval. Rush timelines available for partners with urgent client deadlines. Our 3-week average build time is exactly what helps agencies win clients who expect speed." } },
          { "@type": "Question", "name": "What happens if my client asks for changes after launch?", "acceptedAnswer": { "@type": "Answer", "text": "Scope changes under the original brief are included free. New feature requests are priced per your agency rate. We quote you our internal cost and you keep the margin. Most partners price maintenance retainers at 3 to 5 times our internal rate." } },
          { "@type": "Question", "name": "What technologies do you build with?", "acceptedAnswer": { "@type": "Answer", "text": "Next.js, React, TypeScript, Tailwind CSS, Sanity CMS, Supabase or Postgres, Stripe, and Vercel. Every site scores 90 or higher on Google PageSpeed. No WordPress, no Webflow, no page builders. Pure custom code." } }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PartnersContent />
    </>
  );
}
