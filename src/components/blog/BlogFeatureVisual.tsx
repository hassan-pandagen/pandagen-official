"use client";

import dynamic from "next/dynamic";

const PageSpeedAnimation    = dynamic(() => import("./PageSpeedAnimation"));
const SalesImpactAnimation  = dynamic(() => import("./SalesImpactAnimation"));
const SEORankingAnimation   = dynamic(() => import("./SEORankingAnimation"));
const SecurityShieldAnimation = dynamic(() => import("./SecurityShieldAnimation"));
const UCPFlowAnimation      = dynamic(() => import("./UCPFlowAnimation"));

// Maps blog category strings → animation component
function pick(category: string) {
  const c = category.toLowerCase();
  if (c.includes("security"))                    return <SecurityShieldAnimation />;
  if (c.includes("e-commerce") || c.includes("ecommerce") || c.includes("conversion") || c.includes("sales")) return <SalesImpactAnimation />;
  if (c.includes("traffic") || c.includes("seo") || c.includes("ranking")) return <SEORankingAnimation />;
  if (c.includes("ai commerce") || c.includes("ucp") || c.includes("protocol")) return <UCPFlowAnimation />;
  // Default: performance / everything else
  return <PageSpeedAnimation />;
}

export default function BlogFeatureVisual({ category }: { category: string }) {
  return <div className="w-full mb-10">{pick(category)}</div>;
}
