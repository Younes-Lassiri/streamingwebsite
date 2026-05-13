import { BLOG_POSTS } from "@/data/blogPosts";
import { notFound } from "next/navigation";

// This part handles the Meta Title/Description for the specific blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | 8kstreamlive`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // --- BLOG STRUCTURED DATA ---
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://8kstreamlive.com/icon.webp", // Replace with actual post image if available
    "author": {
      "@type": "Organization",
      "name": "8kstreamlive Editorial",
      "url": "https://8kstreamlive.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "8kstreamlive",
      "logo": {
        "@type": "ImageObject",
        "url": "https://8kstreamlive.com/icon.webp"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://8kstreamlive.com/blog/${post.slug}`
    }
  };

  return (
    <article className="pt-page pb-20">
      {/* Injecting the Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="container max-w-4xl">
        <span className="text-primary font-semibold">{post.category}</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-8 font-heading">
          {post.title}
        </h1>
        
        <div className="prose prose-invert max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}