// Centralized blog data - Add new posts here and they'll automatically appear in sitemap
export type IllustrationType = 'wordpress' | 'speed' | 'code' | 'saas' | 'plugins' | 'traffic' | 'sales' | 'conversion';

export interface FAQ {
  question: string;
  answer: string;
}

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
  faqs?: FAQ[]; // For FAQ Schema (helps win featured snippets)
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
    faqs: [
      {
        question: "Why is my WordPress site so slow?",
        answer: "WordPress sites become slow due to plugin bloat. Every plugin adds 2-15 HTTP requests, CSS files, and JavaScript that must load on every page. With 30+ plugins, you're looking at 200+ HTTP requests and 2-4MB of JavaScript before visitors see anything."
      },
      {
        question: "How many plugins are too many for WordPress?",
        answer: "Any site with more than 15 active plugins is guaranteed to have performance issues. Each plugin adds overhead, and conflicts between plugins cause crashes. The average WordPress site with 30+ plugins scores 35/100 on Google PageSpeed Mobile."
      },
      {
        question: "Can I speed up WordPress without removing plugins?",
        answer: "Caching plugins like WP Rocket can help marginally, but they can't eliminate the fundamental bloat. To get truly fast (under 1 second load time), you need to replace plugins with custom code or migrate to a modern framework like Next.js."
      },
      {
        question: "How much revenue am I losing from slow WordPress speed?",
        answer: "Google found that 53% of mobile visitors leave if a page takes longer than 3 seconds to load. If your site makes $500,000/year with a 4-second load time, you're losing roughly $75,000-$150,000 annually from visitors who bounced before the page loaded."
      }
    ]
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
    faqs: [
      {
        question: "Why is my Shopify Plus store still slow?",
        answer: "Shopify Plus provides better infrastructure but doesn't fix the fundamental problem: Liquid templates are render-blocking. Every page must be rendered server-side, and third-party app scripts add 300-600ms of JavaScript that blocks interactivity. The average Shopify Plus store loads in 3.8 seconds despite the $2,300/month cost."
      },
      {
        question: "Is Shopify Plus worth the $2,300 per month?",
        answer: "Shopify Plus is worth it for the backend features (inventory, orders, payments), but the slow theme limits your ROI. A better approach is keeping Shopify Plus for backend management while using a custom fast storefront that loads in under 1 second."
      },
      {
        question: "How can I make my Shopify store faster?",
        answer: "Theme optimization has a ceiling - you can only get marginal improvements. For true sub-1-second speed, you need a custom headless storefront built with Next.js that connects to Shopify's backend via API. This gives you instant load times while keeping all Shopify features."
      },
      {
        question: "What is headless Shopify?",
        answer: "Headless Shopify means you keep Shopify for inventory and checkout (the backend) but replace the slow Liquid theme with a custom fast storefront (the frontend). Your store loads 4x faster, converts better, and you still use the same Shopify dashboard."
      }
    ]
  },
  {
    id: "wordpress-traffic-drop-speed",
    title: "Why Is My WordPress Site Losing Traffic? (The Speed Tax You're Paying)",
    excerpt: "Slow WordPress sites lose Google rankings fast. Here's the simple math on why speed = traffic.",
    category: "Traffic Growth",
    readTime: "7 min",
    date: "Feb 7",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'traffic',
    lastModified: "2026-02-07",
    faqs: [
      {
        question: "Why is my website traffic decreasing?",
        answer: "If your website traffic has been steadily dropping, site speed is likely the culprit. Google's Core Web Vitals update in 2021 made speed a direct ranking factor. Slow sites (4+ seconds load time) get pushed down in search results while faster competitors take your rankings."
      },
      {
        question: "Does website speed affect SEO?",
        answer: "Yes, absolutely. Google uses Core Web Vitals (speed metrics) as a direct ranking factor. Sites with Mobile PageSpeed scores below 50 lose 20-30% of organic traffic. Fast sites (under 2 seconds) rank higher than slow sites with identical content."
      },
      {
        question: "How do I check if my site is too slow?",
        answer: "Go to pagespeed.web.dev and test your site. If your Mobile Score is 0-49 (red), speed is destroying your traffic. If it's 50-89 (orange), you're losing some rankings. Only 90-100 (green) means speed isn't your problem."
      },
      {
        question: "Can I recover lost traffic from a slow website?",
        answer: "Yes. When we migrate clients from slow WordPress to fast Next.js sites, traffic typically recovers within 30-90 days. Google re-crawls the faster pages, rankings improve, and traffic returns to peak levels plus 15-20% growth from improved rankings."
      }
    ]
  },
  {
    id: "shopify-slow-losing-sales",
    title: "Your Shopify Store Is Costing You $75K/Year in Lost Sales (Here's the Math)",
    excerpt: "Every second your store takes to load costs you customers. We calculated exactly how much.",
    category: "E-Commerce",
    readTime: "8 min",
    date: "Feb 10",
    author: "Hassan",
    role: "Lead Engineer",
    featured: false,
    illustrationType: 'sales',
    lastModified: "2026-02-10",
  },
  {
    id: "shopify-conversion-rate-speed-fix",
    title: "Why Is My Conversion Rate So Low? (Shopify Speed Is Killing Your Sales)",
    excerpt: "Your conversion rate is low because visitors leave before your page loads. The fix is simpler than you think.",
    category: "Conversion",
    readTime: "9 min",
    date: "Feb 11",
    author: "Hassan",
    role: "Lead Eng",
    featured: false,
    illustrationType: 'conversion',
    lastModified: "2026-02-11",
  },
];
