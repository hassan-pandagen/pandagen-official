import { SOCIAL_LINKS, type SocialId } from "@/data/social-links";

/**
 * lucide-react 1.x dropped its brand icons, so these three keep the exact outline
 * shapes from lucide-react 0.468 (ISC licence), drawn the way lucide draws them.
 */
function OutlineIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function LinkedinLogo({ className }: { className?: string }) {
  return (
    <OutlineIcon className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </OutlineIcon>
  );
}

function InstagramLogo({ className }: { className?: string }) {
  return (
    <OutlineIcon className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </OutlineIcon>
  );
}

function FacebookLogo({ className }: { className?: string }) {
  return (
    <OutlineIcon className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </OutlineIcon>
  );
}

/** The X logo. lucide-react's Twitter icon was the old bird, so X is drawn here. */
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICONS: Record<SocialId, (props: { className?: string }) => React.ReactElement> = {
  linkedin: LinkedinLogo,
  x: XLogo,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
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
