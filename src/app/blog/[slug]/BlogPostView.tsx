"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { BlogPost } from "@/data/blogPosts";
import {
  buildBlogBlocks,
  formatBlogDate,
  getBlogImage,
  type BlogContentBlock,
} from "@/lib/blogContent";

function BlogContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="blog-prose">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="blog-prose-heading">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="blog-prose-list">
              {block.items.map((item) => (
                <li key={item} className="blog-prose-list-item">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="blog-prose-paragraph">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

type BlogPostViewProps = {
  post: BlogPost;
};

const BlogPostView = ({ post }: BlogPostViewProps) => {
  const blocks = buildBlogBlocks(post);
  const imageSrc = getBlogImage(post);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="border-t border-border/40 bg-card pt-page pb-16">
        <article className="mx-auto max-w-[850px] px-5 py-10 md:px-6 md:py-14">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>

          <h1 className="mb-8 font-heading text-[1.75rem] font-bold leading-tight text-foreground md:text-[2.35rem] md:leading-[1.2]">
            {post.title}
          </h1>

          <div className="blog-featured-image relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border/50">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground md:text-[0.95rem]">
            <span>By {post.author}</span>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <span>{post.readTime}</span>
          </p>

          <BlogContent blocks={blocks} />
        </article>
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPostView;
