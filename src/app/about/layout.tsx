import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PandaCodeGen',
  description: 'Meet the engineers behind PandaCodeGen. We\'re not an agency - we\'re architects who build web assets, not templates. Learn our story and why we exist.',
  openGraph: {
    title: 'About PandaCodeGen - The Anti-Agency',
    description: 'We don\'t build websites. We build assets. Meet the team that\'s redefining enterprise web development with Next.js.',
    url: 'https://www.pandacodegen.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PandaCodeGen - The Anti-Agency',
    description: 'We don\'t build websites. We build assets. Meet the team that\'s redefining enterprise web development with Next.js.',
  },
  alternates: {
    canonical: '/about',
  },
  other: {
    'last-modified': '2026-02-12',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
