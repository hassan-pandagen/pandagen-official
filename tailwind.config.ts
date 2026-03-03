import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        background: "#F1F5F9",  // Slate-100 — cool stone foundation
        surface: "#F8F9FA",
        border: "#E2E8F0",
        primary: "#2563EB",
        secondary: "#334155",   // Slate 700 — dark charcoal for body text (was Slate 600)
        muted: "#64748B",       // Slate 500 — only for timestamps, labels, metadata
        dark: "#0F172A",
        accent: "#3B82F6",
        success: "#16A34A",
        // Backward compat aliases
        neon: "#2563EB",
        focus: "#2563EB",
        electric: "#7C3AED",
        orange: "#F97316",

        // ─── NEW PREMIUM SYSTEM (Additive — nothing above changes) ───
        paper: "#F5F5F4",      // Stone-100: warm natural base layer
        charcoal: "#1C1917",   // Stone-900: warm ink (not harsh black)
        midnight: "#0C0A09",   // Stone-950: void / dark sections
        cognac: "#EA580C",     // Burnt orange: premium highlight accent
        "brand-blue": "#2563EB", // Alias for future blue→cognac migration
        stone: {
          50:  "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          600: "#57534E",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },
      fontSize: {
        "heading-1": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "heading-2": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-3": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["18px", { lineHeight: "1.7" }],
        caption: ["14px", { lineHeight: "1.5" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)",
        elevated: "0 20px 50px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.06)",
        "blue-glow": "0 8px 30px rgba(37, 99, 235, 0.12), 0 2px 8px rgba(37, 99, 235, 0.08)",
        "green-glow": "0 8px 30px rgba(22, 163, 74, 0.12), 0 2px 8px rgba(22, 163, 74, 0.08)",
        "red-glow": "0 8px 30px rgba(239, 68, 68, 0.1), 0 2px 8px rgba(239, 68, 68, 0.06)",
        "premium": "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 30px -5px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 4s linear infinite",
        float: "float 3s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
