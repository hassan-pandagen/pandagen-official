import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PandaCodeGen LLC terms of service. Read our service agreements, payment terms, and satisfaction guarantee for web development projects.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | PandaCodeGen',
    description: 'PandaCodeGen LLC terms of service. Read our service agreements, payment terms, and satisfaction guarantee for web development projects.',
    url: 'https://www.pandacodegen.com/terms',
    siteName: 'PandaCodeGen',
    type: 'website',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
