"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";


const SHOWS = [
  { title: "The Sopranos", tag: "Drama", image: "/assets/show-sopranos.png" },
  { title: "Rick and Morty", tag: "Animation", image: "/assets/show-rickmorty.png" },
  { title: "Family Guy", tag: "Comedy", image: "/assets/show-familyguy.png" },
  { title: "FROM", tag: "Thriller", image: "/assets/show-from.png" },
  { title: "American Beauty", tag: "Classic", image: "/assets/show-americanbeauty.png" },
  { title: "The Shark", tag: "Action", image: "/assets/film-shark.png" },
  { title: "The Deep State", tag: "Drama", image: "/assets/film-deepstate.png" },
  { title: "Harry Potter", tag: "Fantasy", image: "/assets/film-harrypotter.png" },
  { title: "Horsepower", tag: "Western", image: "/assets/film-horsepower.png" },
];

const ShowsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸ¿ Trending Now</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Popular <span className="gradient-text">Shows & Movies</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Binge the biggest titles â€” from award-winning dramas to animated favorites, all streaming in HD & 4K.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 max-w-7xl mx-auto">
        {SHOWS.map((show, i) => (
          <motion.div
            key={show.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[2/3]"
          >
            <img
              src={show.image}
              alt={`Stream ${show.title} on IPTVNFL`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
          Browse Full Library <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ShowsSection;



