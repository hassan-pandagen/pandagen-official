import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work & Portfolio | PandaCodeGen',
  description: 'Real case studies: $38K/mo e-commerce on $25/mo tooling, 100/100 PageSpeed WordPress migrations, and custom ops platforms. PandaCodeGen portfolio.',
  keywords: [
    'web development case study',
    'wordpress migration results',
    'nextjs ecommerce case study',
    'custom ops platform supabase',
    'replace google sheets with custom software',
    'custom ecommerce pricing calculator',
    'shopify alternative case study',
    'agency portfolio results',
  ],
  openGraph: {
    title: 'PandaCodeGen Portfolio — $38K/mo on $25/mo Tooling. 100/100 PageSpeed. Real Results.',
    description: 'WordPress migrations, custom e-commerce platforms, and internal ops tools. See the numbers behind the builds.',
    url: 'https://www.pandacodegen.com/work',
    type: 'website',
    images: [{ url: 'https://www.pandacodegen.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PandaCodeGen Portfolio — Real Results, Not Mockups',
    description: 'WordPress migrations, custom e-commerce builds, and ops platforms. Proof is in the numbers.',
    images: ['https://www.pandacodegen.com/og-image.jpg'],
  },
  alternates: {
    canonical: '/work',
  },
  other: {
    'last-modified': '2026-03-01',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
