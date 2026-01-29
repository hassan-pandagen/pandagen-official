"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Database, Server, Lock } from "lucide-react";

export default function MigrationPage() {
  return (
    <ServicePageTemplate 
       title="Escape WordPress. Scale on Next.js."
       subtitle="Legacy Rescue"
       description="We don't just 'redesign' your site. We surgically extract your data from WordPress and rebuild your frontend with Next.js 15. Zero plugins. Instant load times."
       
       deepDive={
         <>
           <p>
             <strong>In 2026, using WordPress for a serious business is a liability.</strong>
           </p>
           <p className="mt-4">
             The web has changed. AI Search Engines (like ChatGPT and Perplexity) prioritize sites with clean, semantic code. WordPress relies on "Page Builders" (Elementor/Divi) that create messy, bloated code that AI struggles to read.
           </p>
           <p className="mt-4">
             Furthermore, <strong>Speed is now a currency.</strong> If you run Google Ads, a slow Landing Page Score increases your Cost Per Click (CPC). By moving to Next.js, you aren't just getting a faster site; you are literally lowering your marketing costs and future-proofing your brand for the AI era.
           </p>
         </>
       }

       painPoints={[
          "Your site breaks every time a plugin updates.",
          "You are paying higher Ad Costs because of low 'Landing Page Scores'.",
          "AI Search engines ignore your content because of DOM bloat.",
          "SQL Injections keep you up at night."
       ]}
       features={[
          { title: "Database Sanitization", desc: "We clean your WP database, remove bloat, and migrate to a clean Supabase or Sanity backend.", icon: Database },
          { title: "Static Edge Rendering", desc: "Your site is pre-built as static HTML. It loads instantly worldwide and cannot be hacked.", icon: Server },
          { title: "SEO Preservation", desc: "We map every single old URL to the new site. You won't lose a single ounce of Google Juice.", icon: Lock }
       ]}
       guaranteeText="We are so confident in our migration process that if your new site isn't at least 2x faster than your old one, we will refund your final payment. No questions asked."
    />
  )
}
