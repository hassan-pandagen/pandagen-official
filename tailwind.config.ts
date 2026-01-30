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
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 4s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px #06B6D4" },
          "50%": { boxShadow: "0 0 40px #06B6D4, 0 0 60px #06B6D4" },
        },
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
      },
    },
  },
  plugins: [],
};
export default config;
