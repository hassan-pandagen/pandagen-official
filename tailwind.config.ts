import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#0F172A",
        border: "#1E293B",
        focus: "#F97316",
        neon: "#06B6D4",
        electric: "#A855F7",
        orange: "#F97316",
      },
      fontSize: {
        "heading-1": ["112px", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "heading-2": ["64px", { lineHeight: "1.1" }],
        body: ["18px", { lineHeight: "1.6" }],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px #06B6D4" },
          "50%": { boxShadow: "0 0 40px #06B6D4, 0 0 60px #06B6D4" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
