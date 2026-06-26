# 🐼 PandaCodeGen | The Agency Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

The official production source code for [PandaCodeGen.com](https://www.pandacodegen.com).

We believe in **Open Engineering**. Most agencies hide their code because it's messy. We open-source our marketing platform to demonstrate our commitment to:
- **Zero Bloat:** No CMS plugins, no page builders.
- **Type Safety:** 100% Strict TypeScript.
- **Performance:** 100/100 Core Web Vitals.

## ⚡ Tech Stack

This project is built on the **"PandaCodeGen Enterprise Stack"**:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router + Server Actions + Route Handlers)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/postcss`)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.studio/)
- **Booking Engine:** [Cal.com](https://cal.com/) Embedded API
- **Transactional Email:** [Resend](https://resend.com/)
- **Blog Search:** [Pagefind](https://pagefind.app/) (static, build-time index)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Inter (sans) + Playfair Display (serif) via `next/font`

### Third-Party Integrations

Loaded conditionally via environment variables:

- Google Analytics
- Facebook Pixel
- Microsoft Clarity
- Tawk.to live chat
- Google Indexing API + IndexNow (programmatic search-engine submission)
- Google PageSpeed Insights API (powers the Site Audit tool)

## 🏗️ Architecture

We use a feature-based architecture to ensure scalability.

```
src/
├── app/                  # Next.js App Router
│   ├── about/            # About + team member pages
│   ├── ai-info/          # AEO / answer-engine optimization pages
│   ├── api/              # Route handlers
│   │   ├── audit/        # Site audit: analyze + lead capture
│   │   ├── google-index/ # Google Indexing API submission
│   │   ├── indexnow/     # IndexNow submission
│   │   └── submit-quote/ # Quote form → Resend email
│   ├── blog/             # Engineering insights (per-post route segments)
│   ├── contact/          # Contact page
│   ├── demo/             # Demo / showcase pages
│   ├── manifesto/        # Manifesto
│   ├── partners/         # Partners
│   ├── pricing/          # Pricing page
│   ├── services/         # Service detail pages (WordPress, Shopify, Webflow, etc.)
│   ├── work/             # Case studies
│   ├── privacy/ terms/ cookies/  # Legal pages
│   └── layout.tsx        # Global layout (providers, fonts, metadata)
├── components/
│   ├── audit/            # Site audit widget, email gate, loading state
│   ├── blog/             # Blog visuals, animations, table of contents
│   ├── demo/             # Demo components
│   ├── home/             # Home-page sections (FAQ, social proof)
│   ├── layout/           # Header, Footer, ThemeProvider, SmoothScroll, scroll bars
│   ├── sections/         # Reusable marketing sections (Hero, calculators, quizzes…)
│   ├── services/         # Service-page building blocks (pricing tiers, charts…)
│   ├── ui/               # Primitives (QuoteModal, CalEmbed, FAQAccordion, BlogSearch…)
│   └── *.tsx             # Analytics/chat script loaders (GA, Pixel, Clarity, Tawk.to)
├── data/                 # Static data (blog index, LinkedIn proof)
├── lib/
│   ├── audit/            # PageSpeed analysis, deep checks, scoring
│   └── utils.ts          # Shared helpers
└── proxy.ts              # Edge proxy helper
```

## 📊 Performance Benchmarks

| Metric | Score | Note |
|--------|-------|------|
| Performance | 100 | Static Edge Rendering |
| Accessibility | 100 | Semantic HTML5 |
| Best Practices | 100 | Modern Image Formats (AVIF/WebP) |
| SEO | 100 | Metadata & JSON-LD |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/pandacodegen/pandagen-platform.git
cd pandagen-platform

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build + generate the Pagefind blog search index |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (`eslint-config-next`) |
| `npm run pagefind` | Rebuild only the Pagefind search index |
| `npm run analyze` | Build with the bundle analyzer (`ANALYZE=true`) |

### Build for Production

```bash
npm run build
npm start
```

## 📝 Key Features

- **Site Audit Tool:** Runs a live PageSpeed Insights analysis plus deep checks and scoring, gated behind a lead-capture email form ([src/lib/audit/](src/lib/audit/), [src/components/audit/](src/components/audit/)).
- **Static Blog Search:** Build-time full-text search over blog posts powered by Pagefind.
- **Quote & Lead Capture:** Modal-driven quote requests delivered via Resend.
- **Cal.com Integration:** Embedded booking calendar.
- **Programmatic Indexing:** Google Indexing API + IndexNow route handlers for fast search-engine discovery.
- **Answer-Engine Optimization:** Dedicated `/ai-info` pages structured for LLM and AI-search citation.
- **Dark Mode:** Built-in theme switching via `ThemeProvider`.
- **Smooth Scroll & Animations:** Lenis smooth scrolling with Framer Motion transitions.
- **SEO Optimized:** Per-page metadata, structured data (JSON-LD), Open Graph images.

## 🤝 Work With Us

We help founders and enterprises migrate from legacy monoliths (WordPress/Shopify Themes) to high-performance Headless Architectures.

**Locations:**
- **HQ:** Austin, Texas, USA 🇺🇸
- **Engineering Lab:** Karachi, Pakistan 🇵🇰

**Ready to build?**
- Book a Discovery Call
- Email us at [info@pandacodegen.com](mailto:info@pandacodegen.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- Website: [PandaCodeGen.com](https://www.pandacodegen.com)
- Services: [Our Services](https://www.pandacodegen.com/services)
- Case Studies: [Our Work](https://www.pandacodegen.com/work)
- Blog: [Engineering Insights](https://www.pandacodegen.com/blog)

---

**Built with ❤️ by PandaCodeGen**
