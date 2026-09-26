import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ogImageForPath } from "@/lib/seo/og";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import CaseStudyShot from "@/components/work/CaseStudyShot";

const canonicalUrl = "https://www.pandacodegen.com/work/panda-publisher";
const title = "Panda Publisher: an Author Services Concept Build";
const description =
    "An author-services website concept built by PandaCodeGen: a cover gallery, service pages and an enquiry path from idea to launch. Concept build, not an operating publishing business.";

export const metadata: Metadata = {
    title: { absolute: `${title} | PandaCodeGen` },
    description,
    robots: { index: true, follow: true },
    openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        images: [ogImageForPath("/work/panda-publisher")],
    },
    alternates: { canonical: "/work/panda-publisher" },
};

export default function PandaPublisherCaseStudy() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pb-24 pt-28">
                <article className="mx-auto max-w-4xl px-5 sm:px-8">
                    <Breadcrumb
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Work", href: "/work" },
                            { label: "Panda Publisher", href: "/work/panda-publisher" },
                        ]}
                    />

                    <CaseStudyShot
                        src="/work/panda-publisher.png"
                        alt="Panda Publisher homepage: an author-services site with a concept cover gallery and a call to bring a manuscript idea."
                        caption="Panda Publisher. A concept build for an author-services website; the cover gallery is illustrative, not client work."
                    />

                    <RelationshipDisclosure slug="panda-publisher" />

                    <header className="mb-10 mt-6 border-b border-stone-200 pb-8">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-cognac">
                            Concept build · Author services
                        </p>
                        <h1 className="mb-5 font-serif text-4xl font-medium leading-tight text-charcoal md:text-6xl">
                            Panda Publisher: <span className="italic text-cognac">an author services concept build</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-stone-600">
                            An author-services website concept: a cover gallery, a clear services breakdown and a single
                            enquiry path from "I have an idea" to a published book. The site's own cover gallery is
                            captioned as concept work rather than real client covers; there is no operating publishing
                            business behind it.
                        </p>
                        <p className="mt-4 text-xs text-stone-500">
                            Live demo at{" "}
                            <a
                                href="https://pandapublisher-eight.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac"
                            >
                                pandapublisher-eight.vercel.app <ExternalLink className="h-3 w-3" aria-hidden="true" />
                            </a>
                            .
                        </p>
                    </header>

                    <section className="mb-14">
                        <h2 className="mb-4 text-3xl font-bold text-charcoal">What this demonstrates</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            A services business selling something as personal as "help writing and launching your book"
                            has to make the offer concrete fast, or it reads as vague. The site breaks the service into
                            named stages, front-loads visual proof of the finished product with the cover gallery, and
                            routes every path back to one enquiry action rather than scattering contact options across
                            the page.
                        </p>
                        <p className="text-lg leading-8 text-stone-700">
                            Built the same way a real services site would be: Next.js, an editable service catalogue, and
                            the same enquiry-form handling used across the rest of this site.
                        </p>
                    </section>

                    <section className="rounded-3xl bg-charcoal p-8 md:p-12">
                        <h2 className="mb-4 text-3xl font-bold text-white">Selling a service that's hard to picture?</h2>
                        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-300">
                            If your offer needs concrete visual proof and a single clear path to enquiry, tell us what
                            you're building.
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
