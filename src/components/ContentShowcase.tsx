"use client";
import { m } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

const CATEGORIES = [
  { title: "Live Sports", subtitle: "NFL, NBA, MLB & More", image: "/assets/cat-sports.webp", span: "col-span-2 row-span-2" },
  { title: "Movies", subtitle: "120,000+ Titles", image: "/assets/cat-movies.webp", span: "" },
  { title: "Kids & Family", subtitle: "Safe & Fun Content", image: "/assets/cat-kids.webp", span: "" },
  { title: "TV Shows", subtitle: "Binge-Worthy Series", image: "/assets/cat-tvshows.webp", span: "" },
  { title: "Live News", subtitle: "24/7 Coverage", image: "/assets/cat-news.webp", span: "" },
];

const ContentShowcase = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
    <div className="container relative z-10">
      <m.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex">🎬 Content Library</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Explore Thousands of Entertainment Categories
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          From live sports to blockbuster movies, kids favorites to breaking news — discover a world of content at your fingertips.
        </p>
      </m.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {CATEGORIES.map((cat, i) => (
          <m.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${cat.span} ${!cat.span ? "aspect-[3/4]" : "aspect-auto min-h-[320px] md:min-h-[400px]"}`}
          >
            <img
              src={cat.image}
              alt={`${cat.title} streaming category`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                <Play size={24} className="text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">{cat.title}</h3>
              <p className="text-sm text-muted-foreground">{cat.subtitle}</p>
            </div>
          </m.div>
        ))}
      </div>

      <m.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
          Start Watching Now <Play size={18} />
        </Link>
      </m.div>
    </div>
  </section>
);

export default ContentShowcase;



