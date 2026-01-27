"use client";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { ShoppingCart, Globe, CreditCard } from "lucide-react";

export default function EcommercePage() {
  return (
    <ServicePageTemplate 
       title="Headless Shopify Enterprise"
       subtitle="Commerce Evolved"
       description="Keep the Shopify backend for inventory, but destroy the frontend limitations. We build custom 3D storefronts that load instantly and convert 40% better."
       painPoints={[
          "You are paying $500+/mo in Shopify App fees.",
          "You can't customize the checkout flow.",
          "Your site is slow on mobile devices.",
          "You are locked into a generic theme."
       ]}
       features={[
          { title: "Headless Storefront", desc: "A custom React frontend connected to Shopify via API. Limitless design freedom.", icon: ShoppingCart },
          { title: "Global CDN", desc: "Serve your store from 300+ edge locations. Instant loading in Dubai, NY, and London.", icon: Globe },
          { title: "Custom Checkout", desc: "Integrate Stripe or custom logic to bypass Shopify's limitations.", icon: CreditCard }
       ]}
       guaranteeText="We guarantee a 90+ Mobile Performance Score on launch. If we miss it, you get your money back. Stop losing sales to slow loading times."
    />
  )
}
