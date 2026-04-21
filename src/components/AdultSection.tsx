"use client";
import { m } from "framer-motion";
import Image from "next/image";

const AdultSection = () => (
  <section className="py-16">
    <div className="container">
      <m.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex">🎬 Content Library</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">
          Everything You Love, <span className="gradient-text">One Subscription</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Sports, movies, TV shows, family entertainment, documentaries, pay-per-view events and more — all included in every plan.
        </p>
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
          <Image
            src="/assets/adult-section.webp"
            alt="Full content library — sports, movies, family, documentaries and more"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            loading="lazy"
          />
        </div>
      </m.div>
    </div>
  </section>
);

export default AdultSection;



