import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturedProductHero from "@/components/demo/FeaturedProductHero";

// Internal prototype; keep it out of search.
export const metadata: Metadata = {
  title: "Featured Product Hero: Prototype",
  robots: { index: false, follow: false },
};

export default function FeaturedProductsDemoPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center gap-6 p-4 md:p-10">
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
        Prototype · click a product to feature it
      </p>
      <FeaturedProductHero />
    </main>
  );
}
