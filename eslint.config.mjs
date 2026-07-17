import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  { ignores: [".next/**", "out/**", "public/_pagefind/**", "next-env.d.ts"] },
  ...coreWebVitals,
  {
    rules: {
      // This codebase is prose-heavy (76+ blog posts). Unescaped apostrophes and
      // quotes render correctly in JSX; the rule only ever fires on body copy here,
      // and 523 findings of it would drown the signal from every other rule.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
