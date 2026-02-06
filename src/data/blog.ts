// Centralized blog data - Add new posts here and they'll automatically appear in sitemap
export type IllustrationType = 'wordpress' | 'speed' | 'code' | 'saas' | 'plugins';

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
    featured: false,
    illustrationType: 'wordpress',
    lastModified: "2026-01-15",
  },
  {
    id: "shopify-headless",
    title: "Shopify Plus + Next.js: Sub-Second Load Times",
    excerpt: "We bypassed Liquid limitations to build a storefront that loads in under 1 second.",
    category: "E-Commerce",
    readTime: "12 min",
    date: "Jan 10",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'saas',
    lastModified: "2026-01-10",
  },
  {
    id: "elementor-kills-seo",
    title: "Stop Using Page Builders (Why Elementor Kills SEO)",
    excerpt: "Visual builders generate 300% more DOM nodes than necessary.",
    category: "Performance",
    readTime: "6 min",
    date: "Dec 28",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'code',
    lastModified: "2025-12-28",
  },
  {
    id: "wordpress-plugins-destroy-speed",
    title: "WordPress Plugins Are Destroying Your Site Speed (And Revenue)",
    excerpt: "30+ plugins = 200+ HTTP requests. Here's the math your developer won't show you.",
    category: "Performance",
    readTime: "10 min",
    date: "Feb 5",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'plugins',
    lastModified: "2026-02-05",
  },
  {
    id: "shopify-plus-still-slow",
    title: "Why Your Shopify Plus Store Still Loads in 4 Seconds",
    excerpt: "You're paying $2,300/mo for Shopify Plus and still failing Core Web Vitals.",
    category: "E-Commerce",
    readTime: "9 min",
    date: "Feb 6",
    author: "Hassan",
    role: "Lead Engineer",
    featured: true,
    illustrationType: 'speed',
    lastModified: "2026-02-06",
  },
];
