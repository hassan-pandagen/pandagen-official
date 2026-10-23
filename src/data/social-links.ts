/**
 * The company's public social profiles, shown as icons in the footer and on the contact page.
 *
 * Only list an account here once it is live and secured. A link to a hacked or abandoned
 * account is worse than none: the old Instagram account was compromised on 22 Oct 2026, so it
 * is deliberately not listed. Add the new one as { id: "instagram", ... } when it exists.
 *
 * LinkedIn, X and Facebook come from ORGANIZATION_PROFILES in company-facts.ts, which is what search
 * engines are told about the company, so the icons and the hidden profile list agree.
 */
export type SocialId = "linkedin" | "x" | "instagram" | "facebook";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: "linkedin", label: "PandaCodeGen on LinkedIn", href: "https://www.linkedin.com/company/pandacodegen" },
  { id: "x", label: "PandaCodeGen on X", href: "https://x.com/PandaCodeGen" },
  // { id: "instagram", label: "PandaCodeGen on Instagram", href: "https://www.instagram.com/<new-handle>/" },
  { id: "facebook", label: "PandaCodeGen on Facebook", href: "https://www.facebook.com/profile.php?id=61587111848962" },
];
