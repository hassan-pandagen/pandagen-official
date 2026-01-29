// Centralized blog data - Add new posts here and they'll automatically appear in sitemap
export type IllustrationType = 'wordpress' | 'speed' | 'code' | 'saas';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  role: string;
  featured: boolean;
  illustrationType: IllustrationType;
  lastModified?: string; // For sitemap
}

export const blogPosts: BlogPost[] = [
  {
    id: "wordpress-killer",
    title: "Why WordPress Is a Waste of Money in 2026",
    excerpt: "The hidden math behind plugins, hosting, and lost revenue.",
    category: "Cost Analysis",
    readTime: "8 min",
    date: "Jan 15",
    author: "Hassan",
    role: "Lead Eng",
    featured: true,
    illustrationType: 'wordpress',
    lastModified: "2026-01-15",
  },
  {
    id: "shopify-headless",
    title: "Shopify Plus + Next.js: The 0.1s Load Time Secret",
    excerpt: "We bypassed Liquid limitations to build a storefront that loads instantly.",
    category: "E-Commerce",
    readTime: "12 min",
    date: "Jan 10",
    author: "Imran",
    role: "Architect",
    featured: false,
    illustrationType: 'speed',
    lastModified: "2026-01-10",
  },
  {
    id: "elementor-kills-seo",
    title: "Stop Using Page Builders (Why Elementor Kills SEO)",
    excerpt: "Visual builders generate 300% more DOM nodes than necessary.",
    category: "Performance",
    readTime: "6 min",
    date: "Dec 28",
    author: "Imran",
    role: "Architect",
    featured: false,
    illustrationType: 'code',
    lastModified: "2025-12-28",
  },
];
