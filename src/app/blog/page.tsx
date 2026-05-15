import type { Metadata } from "next";
import BlogPageView from "./BlogPageView";

export const metadata: Metadata = {
  title: "IPTV Blog & Guides | 8kstreamlive",
  description:
    "Expert IPTV tutorials, setup guides, streaming tips, sports coverage, and cord-cutting advice from 8kstreamlive.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogPageView />;
}
