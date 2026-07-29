import type { Metadata } from "next";
import LocalePage from "@/components/i18n/LocalePage";
import { localeMetadata } from "@/lib/i18n/metadata";

export const dynamic = "force-static";

export const metadata: Metadata = localeMetadata("fr", "pricing");

export default function Page() {
  return <LocalePage locale="fr" page="pricing" />;
}
