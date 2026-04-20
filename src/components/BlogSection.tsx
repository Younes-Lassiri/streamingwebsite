"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

const BlogSection = () => (
  <section className="py-24 relative overflow-hidden" id="blog" aria-labelledby="blog-heading">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸ“ IPTV Blog & Guides</span>
        <h2 id="blog-heading" className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Latest <span className="gradient-text">IPTV News</span> & Tutorials
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Expert guides, streaming tips, and the latest news on the best IPTV services, cord-cutting, sports streaming, and 4K entertainment.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-6 hover-lift group flex flex-col"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>

            <h3
              className="font-heading text-lg md:text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors"
              itemProp="headline"
            >
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1" itemProp="description">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar size={12} />
                <time dateTime={post.date} itemProp="datePublished">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <Link
                href="/pricing"
                className="flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                aria-label={`Read more about ${post.title}`}
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>

            <meta itemProp="author" content={post.author} />
            <meta itemProp="keywords" content={post.keywords.join(", ")} />
          </motion.article>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary/20 transition-all"
        >
          <BookOpen size={16} />
          Explore All IPTV Plans
        </Link>
      </motion.div>
    </div>
  </section>
);

export default BlogSection;

