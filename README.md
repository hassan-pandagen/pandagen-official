# 🐼 PandaCodeGen | The Agency Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-cyan)

The official production source code for [PandaCodeGen.com](https://www.pandacodegen.com).

We believe in **Open Engineering**. Most agencies hide their code because it's messy. We open-source our marketing platform to demonstrate our commitment to:
- **Zero Bloat:** No CMS plugins, no page builders.
- **Type Safety:** 100% Strict TypeScript.
- **Performance:** 100/100 Core Web Vitals.

## ⚡ Tech Stack

This project is built on the **"PandaCodeGen Enterprise Stack"**:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router + Server Actions)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.studio/)
- **Booking Engine:** [Cal.com](https://cal.com/) Embedded API
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** Inter (Google Fonts)

## 🏗️ Architecture

We use a feature-based architecture to ensure scalability.

```
src/
├── app/              # Next.js App Router (Pages)
│   ├── services/     # Service Detail Pages
│   ├── work/         # Case Studies
│   ├── blog/         # Engineering Insights
│   ├── about/        # About Us
│   ├── pricing/      # Pricing Page
│   └── layout.tsx    # Global Layout (Providers)
├── components/       # React Components
│   ├── Header.tsx    # Navigation with Services Dropdown
│   ├── Footer.tsx    # Footer with CTA
│   ├── Hero.tsx      # Hero Section
│   ├── QuoteModal.tsx # Quote Request Modal
│   └── ...other components
└── lib/              # Utilities & Helpers
```

## 📊 Performance Benchmarks

| Metric | Score | Note |
|--------|-------|------|
| Performance | 100 | Static Edge Rendering |
| Accessibility | 100 | Semantic HTML5 |
| Best Practices | 100 | Modern Image Formats |
| SEO | 100 | Metadata & JSON-LD |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

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

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Key Features

- **Responsive Design:** Mobile-first, works on all devices
- **Dark Mode:** Built-in theme switching
- **Modal System:** Quote request modals integrated throughout
- **Services Dropdown:** Hover-activated dropdown menu for services
- **Smooth Animations:** Framer Motion transitions and scroll effects
- **Cal.com Integration:** Embedded booking calendar
- **SEO Optimized:** Metadata, structured data, Open Graph tags

## 🎨 Components

### Header Component
- Fixed navigation with Services dropdown
- Responsive mobile menu
- Theme toggle (Light/Dark mode)
- CTA buttons for quote requests

### Footer Component
- Internal quote modal management
- Service links
- Contact information
- Social media links

### QuoteModal Component
- Form validation
- Success state after submission
- Smooth animations
- Accepts name, email, phone, service type, and project details

## 🤝 Work With Us

We help founders and enterprises migrate from legacy monoliths (WordPress/Shopify Themes) to high-performance Headless Architectures.

**Locations:**
- **HQ:** Missouri, USA 🇺🇸
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
