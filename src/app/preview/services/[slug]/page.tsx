import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPreview from "../ServiceDetailPreview";
import { servicePreviews } from "../service-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePreviews.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePreviews.find(item => item.slug === slug);
  return { title: `${service?.name ?? "Service"} preview`, robots: { index: false, follow: false } };
}

export default async function ServicePreviewPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePreviews.find(item => item.slug === slug);
  if (!service) notFound();
  return <ServiceDetailPreview service={service} />;
}
