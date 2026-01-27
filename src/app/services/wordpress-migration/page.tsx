"use client";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { Database, Server, Lock } from "lucide-react";

export default function MigrationPage() {
  return (
    <ServicePageTemplate 
       title="Escape WordPress. Scale on Next.js."
       subtitle="Legacy Rescue"
       description="We don't just 'redesign' your site. We surgically extract your data from WordPress and rebuild your frontend with Next.js 15. Zero plugins. Instant load times."
       painPoints={[
          "Your site breaks every time a plugin updates.",
          "You are paying $150+/mo for hosting and security.",
          "Your Google PageSpeed score is stuck below 60.",
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
