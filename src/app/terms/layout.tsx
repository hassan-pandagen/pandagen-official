import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PandaGenCode LLC terms of service. Read our service agreements, payment terms, and satisfaction guarantee for web development projects.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
