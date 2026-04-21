import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-14">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            IPTV Blog & Guides
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Expert IPTV tutorials, setup guides, streaming tips, sports coverage,
            and cord-cutting advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="glass-card p-6 flex flex-col"
            >
              <span className="text-xs font-semibold text-primary mb-3">
                {post.category}
              </span>

              <h2 className="font-heading text-xl font-bold mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-semibold hover:underline"
              >
                Read full article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}