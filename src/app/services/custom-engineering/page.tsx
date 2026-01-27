"use client";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { Code2, Smartphone, Cpu } from "lucide-react";

export default function EngineeringPage() {
  return (
    <ServicePageTemplate 
       title="Custom SaaS & AI Engineering"
       subtitle="Beyond Websites"
       description="For founders who need to build actual software. We architect scalable SaaS platforms, internal dashboards, and AI-powered tools."
       painPoints={[
          "No-code tools (Bubble) can't handle your logic.",
          "You need real-time data or complex permissions.",
          "You need a mobile app but can't afford 2 teams.",
          "You want to own your IP, not rent it."
       ]}
       features={[
          { title: "React Native / PWA", desc: "We build one codebase that runs on Web, iOS, and Android. Save 50% on development costs.", icon: Smartphone },
          { title: "AI Vector Search", desc: "Integrate OpenAI or Pinecone to make your app intelligent. Chat with your data.", icon: Cpu },
          { title: "Multi-Tenant SaaS", desc: "Bank-grade architecture with Row Level Security (RLS) for B2B applications.", icon: Code2 }
       ]}
       guaranteeText="If our architecture doesn't scale to your first 10,000 users without crashing, we will fix it for free. You own the code repository from Day 1."
    />
  )
}
