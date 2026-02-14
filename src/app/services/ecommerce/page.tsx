"use client";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { ShoppingCart, Globe, CreditCard, ArrowRightLeft } from "lucide-react";

export default function EcommercePage() {
  return (
    <ServicePageTemplate 
       title="Shopify Migration & Headless"
       subtitle="Stop Paying App Taxes"
       description="We migrate high-volume brands from standard Shopify themes to high-performance Next.js storefronts. Keep the Shopify backend, but destroy the frontend limitations."
       
       deepDive={
         <>
           <p>
             <strong>You are likely paying a 'Success Tax' to Shopify Apps.</strong>
           </p>
           <p className="mt-4">
             To get basic features like "Bundles," "Subscriptions," or "Custom Slideshows," Shopify forces you to install Apps. These apps cost $20-$200/month EACH and inject heavy JavaScript that slows down your store.
           </p>
           <p className="mt-4">
             <strong>The Math is simple:</strong> If you pay $500/month in apps, that is $6,000/year wasted. We build these features <em>natively</em> into your code. You pay us once, and you own the feature forever. No monthly fees. No slow load times. Just pure profit margin.
           </p>
         </>
       }

       painPoints={[
          "You are paying $1,500+/mo in 'App Taxes' (Yotpo, PageFly, etc).",
          "Your Mobile Speed Score is stuck below 40, killing conversions.",
          "You can't customize the URL structure (/collections/...) for SEO.",
          "You want a custom checkout flow but Liquid blocks you."
       ]}
       features={[
          { title: "Theme to Headless", desc: "Safely migrate from Liquid to React/Next.js. Zero data loss. Zero downtime.", icon: ArrowRightLeft },
          { title: "Global CDN Delivery", desc: "Serve your store from the Edge. Instant loading in Dubai, New York, and London.", icon: Globe },
          { title: "Custom Checkout", desc: "Bypass Shopify limitations. Integrate Stripe, custom upsells, and subscriptions exactly how you want.", icon: CreditCard }
       ]}
       guaranteeText="We guarantee a 2x Speed Increase post-migration. If your Core Web Vitals don't turn green, we refund the final payment. Stop losing sales to slow loading."
    />
  )
}
