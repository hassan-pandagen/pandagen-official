"use client";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { Code2, Smartphone, Cpu, Lock } from "lucide-react";

export default function EngineeringPage() {
  return (
    <ServicePageTemplate 
       title="Web Apps & Dashboards"
       subtitle="Build Your Own Software"
       description="Templates can't build unicorns. We architect scalable SaaS platforms, internal dashboards, and AI-powered tools using the same stack as Uber and Airbnb."
       
       deepDive={
         <>
           <p>
             <strong>Are you building an Asset or a Liability?</strong>
           </p>
           <p className="mt-4">
             Using "No-Code" tools (Bubble, Wix) or WordPress for a startup is like building a skyscraper on a swamp. Eventually, you will hit a wall where the tool cannot do what you need, and you will have to rebuild from scratch.
           </p>
           <p className="mt-4">
             <strong>We build Intellectual Property (IP).</strong> When we write a custom React/Next.js application for you, you own the code. It is an asset on your balance sheet. It scales to 1 million users. It connects to AI agents. It is valuable. Stop renting your technology stack.
           </p>
         </>
       }

       painPoints={[
          "No-code tools (Bubble) are crashing or getting too expensive.",
          "You need complex Logic (Role-based access, Real-time data).",
          "You need a mobile app but can't afford a separate iOS team.",
          "You want to own your IP, not rent it from a SaaS."
       ]}
       features={[
          { title: "React Native / PWA", desc: "One codebase. Runs on Web, iPhone, and Android. Save 50% on development costs.", icon: Smartphone },
          { title: "AI Integration", desc: "We integrate OpenAI/Claude to make your app intelligent. Chat with your data.", icon: Cpu },
          { title: "Multi-Tenant SaaS", desc: "Bank-grade architecture with Row Level Security (RLS). Ready for B2B scale.", icon: Lock }
       ]}
       guaranteeText="If our architecture doesn't scale to your first 10,000 users without crashing, we will fix it for free. You receive 100% Code Ownership and IP Rights on Day 1."
    />
  )
}
