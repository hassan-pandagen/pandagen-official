import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS, type SocialId } from "@/data/social-links";

/** The X logo. lucide-react's Twitter icon is the old bird, so X is drawn here. */
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICONS: Record<SocialId, (props: { className?: string }) => React.ReactElement> = {
  linkedin: ({ className }) => <Linkedin aria-hidden="true" className={className} />,
  x: XLogo,
  instagram: ({ className }) => <Instagram aria-hidden="true" className={className} />,
  facebook: ({ className }) => <Facebook aria-hidden="true" className={className} />,
};

/**
 * Round icon links. `tone="dark"` is for the dark footer, `tone="light"` for light pages.
 * Each link opens in a new tab and is 44px square, the minimum comfortable tap size.
 */
export default function SocialLinks({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  if (SOCIAL_LINKS.length === 0) return null;
  const colours =
    tone === "dark"
      ? "border-[rgba(235,233,228,0.28)] text-[#EBE9E4] hover:border-[#E8763A] hover:text-[#E8763A]"
      : "border-stone-300 text-charcoal hover:border-cognac hover:text-cognac";
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`} aria-label="PandaCodeGen on social media">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`${link.label} (opens in a new tab)`}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${colours}`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
