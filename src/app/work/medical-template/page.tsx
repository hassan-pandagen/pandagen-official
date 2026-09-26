import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ogImageForPath } from "@/lib/seo/og";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import CaseStudyShot from "@/components/work/CaseStudyShot";

const canonicalUrl = "https://www.pandacodegen.com/work/medical-template";
const title = "Medical Template: a Practice Website Concept Build";
const description =
    "A fictional medical-practice website built by PandaCodeGen to demonstrate the template: a booking-focused homepage, provider bios and service pages. Demo only, not a real practice.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/medical-template")],
    },
    alternates: { canonical: "/work/medical-template" },
};

export default function MedicalTemplateCaseStudy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Work", href: "/work" },
                            { label: "Medical Template", href: "/work/medical-template" },
                        ]}
                    />

                    <CaseStudyShot
                        src="/work/medical-template.png"
                        alt="Medical Template homepage: a fictional surgeon's practice site with a booking-focused hero and provider credentials."
                        caption="Medical Template. A concept build for a practice website, not a real medical provider."
                    />

                    <RelationshipDisclosure slug="medical-template" />

                    <header className="mb-10 mt-6 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            Concept build · Practice website
                        </p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Medical Template: <span className="italic text-cognac">a practice website concept build</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600">
                            A fictional surgical practice, built to show what a booking-focused practice website looks
                            like: a homepage that leads with appointment booking, provider bios, service pages and
                            patient-facing content. Every name, credential and testimonial on the live demo is invented.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Live demo at{" "}
                            <a
                                href="https://pandacodegen-medical-template.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                pandacodegen-medical-template.vercel.app <ExternalLink className="h-3 w-3" aria-hidden="true" />
                            </a>
                            .
                        </p>
                    </header>

                    <section className="mb-14">
                        <h2 className="mb-4 text-3xl font-bold text-charcoal">What this demonstrates</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            Practices in this space are judged on trust before anything else: a visitor is deciding
                            whether to book a consultation with a stranger. The template leads with the booking action,
                            keeps provider credentials visible without a click, and separates services into their own
                            pages so each can carry its own search intent rather than competing on one crowded page.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            It is built the same way a real practice site would be: Next.js, a content editor for
                            non-technical staff to update hours, staff and services, and the same accessibility and
                            performance standards named on the{" "}
                            <Link href="/pricing" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">
                                pricing page
                            </Link>
                            .
                        </p>
                    </section>

                    <section className="rounded-3xl bg-charcoal p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold text-white">Building something like this?</h2>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-300">
                            If you run a practice, clinic or provider business and want a site that leads with booking
                            instead of burying it, tell us what you need.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3 font-semibold text-white transition-colors hover:bg-cognac/90"
                            >
                                Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-7 py-3 font-semibold text-white transition-colors hover:border-white"
                            >
                                See the other records
                            </Link>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}
