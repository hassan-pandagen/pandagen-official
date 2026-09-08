/**
 * Shape shared by every locale dictionary. Adding a locale means adding one
 * file that satisfies `Dictionary` and registering it in `./index.ts`.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  title: string;
  body: string;
  bullets?: string[];
}

export interface Tier {
  name: string;
  price: string;
  priceNote: string;
  fit: string;
  features: string[];
}

export interface Term {
  number: string;
  title: string;
  body: string;
}

export interface PageContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; titleAccent: string; lead: string };
  /** Answer-first paragraph placed high on the page, as on the English pages. */
  summary: string;
  sections: Section[];
  faq: Faq[];
}

/* ------------------------------------------------------------------ *
 * Homepage-only blocks.
 *
 * The English homepage renders a long sequence of bespoke sections. The
 * localized homepage mirrors the ARGUMENT of those sections with its own
 * translated markup, so the French and German pages read as complete pages
 * rather than summaries. Interactive tools (revenue calculator, tier quiz,
 * audit widget) are deliberately not localized.
 * ------------------------------------------------------------------ */

export interface ContinuityRow {
  area: string;
  control: string;
  evidence: string;
}

export interface Pillar {
  title: string;
  body: string;
  bullets?: string[];
}

export interface NumberedItem {
  number: string;
  title: string;
  body: string;
}

export interface Segment {
  signal: string;
  approach: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  tags: string[];
}

/** A published review excerpt. `quote` stays in its original language. */
export interface ReviewQuote {
  quote: string;
  source: string;
  detail: string;
  href: string;
}

export interface HomeContent extends PageContent {
  /** Migration continuity ledger, the "what must survive the move" block. */
  continuity: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    ledgerTitle: string;
    ledgerNote: string;
    badge: string;
    columns: { area: string; control: string; evidence: string };
    rows: ContinuityRow[];
    caption: string;
  };
  /** What we build: the three delivery pillars plus the platforms we move from. */
  build: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    pillars: Pillar[];
    platformsLabel: string;
    platforms: string[];
  };
  /** Who it is for: starting condition plus the diagnostic approach. */
  audience: {
    eyebrow: string;
    title: string;
    lead: string;
    signalLabel: string;
    approachLabel: string;
    segments: Segment[];
  };
  /** How the process works, four reviewable stages. */
  process: {
    title: string;
    titleAccent: string;
    lead: string;
    stepLabel: string;
    steps: NumberedItem[];
  };
  /** Decision controls: make the commercial assumptions visible. */
  controls: {
    eyebrow: string;
    title: string;
    lead: string;
    items: NumberedItem[];
  };
  /** Who actually does the work. */
  founders: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    people: Founder[];
    note: string;
  };
  /** The anti-agency position. */
  antiAgency: {
    eyebrow: string;
    title: string;
    lead: string;
    pillars: Pillar[];
    ctaTitle: string;
    ctaBody: string;
  };
  /** Public reviews and owner-confirmed project records. */
  proof: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    quoteLanguageNote: string;
    record: { label: string; value: string; title: string; body: string };
    quotes: ReviewQuote[];
    clutchLabel: string;
    trustpilotLabel: string;
    affiliation: { label: string; title: string; body: string };
  };
  /** Closing call to action. */
  closing: {
    title: string;
    body: string;
  };
}

export interface PricingContent extends PageContent {
  tiers: Tier[];
  tiersHeading: string;
  currencyNote: string;
  terms: Term[];
  termsHeading: string;
}

export interface ContactContent extends PageContent {
  checklistHeading: string;
  checklist: string[];
  emailLabel: string;
  addressLabel: string;
  formNote: string;
  formLinkLabel: string;
}

/**
 * Copy for the inline lead form. It is shared by the English homepage and both
 * localized locales, so a French or German visitor completes the enquiry in their
 * own language instead of being handed off to the English form.
 */
export interface LeadFormCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  nameLabel: string;
  emailLabel: string;
  urlLabel: string;
  urlHint: string;
  detailsLabel: string;
  detailsPlaceholder: string;
  submit: string;
  submitting: string;
  successHeading: string;
  successBody: string;
  directHeading: string;
  directBody: string;
  bookLabel: string;
  errorFallback: string;
  honeypotLabel: string;
  /** Notes that the team replies in this language. */
  replyNote: string;
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    pricing: string;
    contact: string;
    about: string;
    blog: string;
  };
  common: {
    ctaPrimary: string;
    ctaSecondary: string;
    faqHeading: string;
    languageLabel: string;
    /** Visible note that the English site holds the reference wording. */
    englishSourceNote: string;
    englishSourceLinkLabel: string;
    skipToContent: string;
  };
  home: HomeContent;
  services: PageContent;
  pricing: PricingContent;
  contact: ContactContent;
  about: PageContent;
  leadForm: LeadFormCopy;
}
