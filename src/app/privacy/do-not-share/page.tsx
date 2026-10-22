import Link from "next/link";
import type { Metadata } from "next";
import DoNotShareForm from "./DoNotShareForm";

export const metadata: Metadata = {
  title: { absolute: "Do Not Sell or Share My Personal Information | PandaCodeGen" },
  description: "Ask PandaCodeGen not to share information linked to your email address with advertising platforms.",
  alternates: { canonical: "/privacy/do-not-share" },
  robots: { index: false, follow: true },
};

export default function DoNotSharePage() {
  return (
    <main className="bg-paper min-h-screen">
      <div className="px-6 pb-20 pt-20 md:pt-32">
        <div className="container mx-auto max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-charcoal md:text-5xl">Do Not Sell or Share My Personal Information</h1>
          <p className="leading-relaxed text-stone-600">
            We do not sell personal information. When you send us an enquiry, our customer system can pass a coded
            (hashed) version of your email address and phone number, with the enquiry itself, to Meta and Google so we
            can measure which advertising leads to enquiries. This is the page to tell us not to.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Enter the email address you used and we will stop sharing information linked to it, including for any
            enquiry it sends in future. We also honour a Global Privacy Control signal from your browser without you
            doing anything. Read more in the{" "}
            <Link href="/privacy" className="text-cognac hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-8">
            <DoNotShareForm />
          </div>
          <p className="mt-8 text-sm text-stone-600">
            Prefer to ask by email? Write to{" "}
            <a href="mailto:info@pandacodegen.com" className="text-cognac hover:underline">
              info@pandacodegen.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
