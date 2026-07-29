import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the PandaCodeGen website, automated audit, content, and inquiry forms. Signed project agreements control paid services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | PandaCodeGen',
    description: 'Terms for using the PandaCodeGen website, automated audit, content, and inquiry forms. Signed project agreements control paid services.',
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
