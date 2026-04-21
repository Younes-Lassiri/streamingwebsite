import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: `${post.title} | 8kstreamlive Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen py-20">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link href="/blog" className="text-primary hover:underline text-sm">
            Back to Blog
          </Link>
        </div>
        <article className="glass-card p-6 md:p-10">
          <div className="mb-6">
            <span className="inline-flex px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-4">
              {post!.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              {post!.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
              <span>{post!.author}</span>
              <span>{post!.readTime}</span>
              <time dateTime={post!.date}>
                {new Date(post!.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
          <div className="space-y-6 text-base md:text-lg leading-8 text-foreground/90">
            {post!.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border/30">
            <h2 className="font-heading text-xl font-semibold mb-3">Related keywords</h2>
            <div className="flex flex-wrap gap-2">
              {post!.keywords.map((keyword) => (
                <span key={keyword} className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/30">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              View IPTV Plans
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}