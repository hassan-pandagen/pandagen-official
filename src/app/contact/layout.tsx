import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact PandaGen for Next.js development, WordPress migration, or Shopify optimization. Free discovery call. 2-hour response time.',
  keywords: [
    'contact PandaGen',
    'Next.js development quote',
    'WordPress migration consultation',
    'web development inquiry',
    'Shopify migration contact',
  ],
  openGraph: {
    title: 'Contact PandaGen - Let\'s Talk Engineering',
    description: 'Ready to build? Contact our engineering team for a free consultation. We respond within 2 hours during EST business hours.',
    url: 'https://www.pandacodegen.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PandaGen - Let\'s Talk Engineering',
    description: 'Ready to build? Contact our engineering team for a free consultation. We respond within 2 hours during EST business hours.',
  },
  alternates: {
    canonical: '/contact',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
