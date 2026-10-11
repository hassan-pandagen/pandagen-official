"use client";

import { useConsent } from "./ConsentProvider";

// 12 Oct 2026, owner: on phones the floating cookie button is hidden once a visitor has made a
// choice (it covered the corner of the text while reading). This footer button is how anyone,
// on any screen size, reopens the same cookie choices afterwards.
export default function CookieSettingsButton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={() => openPreferences()} className={className} style={style}>
      Cookie settings
    </button>
  );
}
