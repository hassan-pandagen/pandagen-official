import RestyledShell from "@/components/redesign/RestyledShell";
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

// 30 Sep 2026: the redesign shell for this route; the page content is
// unchanged. See src/components/redesign/RestyledShell.tsx.
export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RestyledShell kind="legal">{children}</RestyledShell>
}
