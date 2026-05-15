"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLOG_POSTS } from "@/data/blogPosts";
import { formatBlogDate, getBlogImage } from "@/lib/blogContent";

const BlogPageView = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main className="border-t border-border/40 bg-card pt-page pb-20">
      <div className="container max-w-6xl px-5 py-12 md:py-16">
        <div className="mb-14 text-center">
          <span className="section-badge mb-4 inline-flex items-center gap-2">
            <FileText size={16} className="text-primary" />
            IPTV Blog & Guides
          </span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Latest <span className="gradient-text">IPTV Guides</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Expert IPTV tutorials, setup guides, streaming tips, sports coverage,
            and cord-cutting advice.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-background/80 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={getBlogImage(post)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                  </span>
                  <span className="text-border">·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-heading mb-3 text-xl font-bold leading-snug text-foreground">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Read full article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>

    <Footer />
    <BackToTop />
    <WhatsAppButton />
  </div>
);

export default BlogPageView;
