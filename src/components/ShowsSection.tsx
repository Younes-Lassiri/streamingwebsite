"use client";
import { m } from "framer-motion";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

const SHOWS = [
  { title: "The Sopranos", tag: "Drama", image: "/assets/show-sopranos.webp" },
  { title: "Rick and Morty", tag: "Animation", image: "/assets/show-rickmorty.webp" },
  { title: "Family Guy", tag: "Comedy", image: "/assets/show-familyguy.webp" },
  { title: "FROM", tag: "Thriller", image: "/assets/show-from.webp" },
  { title: "American Beauty", tag: "Classic", image: "/assets/show-americanbeauty.webp" },
  { title: "The Shark", tag: "Action", image: "/assets/film-shark.webp" },
  { title: "The Deep State", tag: "Drama", image: "/assets/film-deepstate.webp" },
  { title: "Harry Potter", tag: "Fantasy", image: "/assets/film-harrypotter.webp" },
  { title: "Horsepower", tag: "Western", image: "/assets/film-horsepower.webp" },
];

const ShowsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
    <div className="container relative z-10">
      <m.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex">🍿 Trending Now</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Popular <span className="gradient-text">Shows & Movies</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Binge the biggest titles — from award-winning dramas to animated favorites, all streaming in HD & 4K.
        </p>
      </m.div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 max-w-7xl mx-auto">
        {SHOWS.map((show, i) => (
          <m.div
            key={show.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[2/3]"
          >
            <Image
              src={show.image}
              alt={`Stream ${show.title}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 11vw"
              quality={75}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                <Play size={16} className="text-primary-foreground ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <span className="text-[8px] font-bold uppercase tracking-wider text-primary bg-primary/15 px-1.5 py-0.5 rounded-full">{show.tag}</span>
              <h3 className="font-heading text-xs font-bold text-foreground mt-1 leading-tight truncate">{show.title}</h3>
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
          Browse Full Library <ArrowRight size={18} />
        </Link>
      </m.div>
    </div>
  </section>
);

export default ShowsSection;



