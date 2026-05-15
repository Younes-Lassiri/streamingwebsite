import type { BlogPost } from "@/data/blogPosts";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

const CATEGORY_IMAGES: Record<string, string> = {
  Sports: "/assets/cat-sports.webp",
  Events: "/assets/world-cup-2026.webp",
  Entertainment: "/assets/cat-movies.webp",
  "Buying Guide": "/assets/feature-premium.webp",
  Technical: "/assets/feature-setup.webp",
  Announcements: "/assets/feature-support.webp",
  Technology: "/assets/feature-channels.webp",
  Tutorials: "/assets/feature-setup.webp",
  Comparison: "/assets/feature-premium.webp",
  "Streaming Tips": "/assets/cat-tvshows.webp",
  International: "/assets/cat-news.webp",
};

const SECTION_HEADINGS: Record<string, [string, string]> = {
  Sports: [
    "Why Choose IPTV to Stream Sports Without Cable?",
    "What Games and Leagues Can You Watch?",
  ],
  Events: [
    "Why Stream Major Events with IPTV?",
    "What Coverage Is Included?",
  ],
  Entertainment: [
    "Why Use IPTV for Movies and Series?",
    "What Is in the On-Demand Library?",
  ],
  "Buying Guide": [
    "Why 8kstreamlive Leads the IPTV Market",
    "What You Get with Every Plan",
  ],
  Technical: [
    "Internet Speed Requirements for 8K IPTV",
    "How to Optimize Your Home Network",
  ],
  Announcements: [
    "Our Commitment to Reliable Service",
    "What to Do If You Experience Downtime",
  ],
  Technology: [
    "How We Deliver True 8K Quality",
    "Supported Devices and Formats",
  ],
  Tutorials: [
    "Quick Setup Overview",
    "Devices and Apps We Recommend",
  ],
  Comparison: [
    "IPTV vs Cable: The Real Cost Difference",
    "Why Cord-Cutters Are Switching in 2026",
  ],
  "Streaming Tips": [
    "What You Need for 4K IPTV Streaming",
    "How to Get Buffer-Free Playback",
  ],
  International: [
    "Why Choose IPTV for Global Channels",
    "Countries and Regions Covered",
  ],
};

const DEFAULT_HEADINGS: [string, string] = [
  "Why This Guide Matters",
  "What You Need to Know Next",
];

export function getBlogImage(post: BlogPost): string {
  return post.image ?? CATEGORY_IMAGES[post.category] ?? "/assets/cat-tvshows.webp";
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function buildBlogBlocks(post: BlogPost): BlogContentBlock[] {
  const [headingOne, headingTwo] =
    SECTION_HEADINGS[post.category] ?? DEFAULT_HEADINGS;

  const blocks: BlogContentBlock[] = [
    { type: "paragraph", text: post.excerpt },
    { type: "heading", text: headingOne },
  ];

  if (post.content[0]) {
    blocks.push({ type: "paragraph", text: post.content[0] });
  }

  if (post.keywords.length > 0) {
    blocks.push({
      type: "list",
      items: post.keywords.slice(0, 5).map((keyword) => {
        const label = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        return label.endsWith(".") ? label : `${label}.`;
      }),
    });
  }

  blocks.push({ type: "heading", text: headingTwo });

  post.content.slice(1).forEach((paragraph) => {
    blocks.push({ type: "paragraph", text: paragraph });
  });

  return blocks;
}
