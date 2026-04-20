"use client";
import { motion } from "framer-motion";

const AdultSection = () => (
  <section className="py-16">
    <div className="container">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸŽ¬ Content Library</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">
          Everything You Love, <span className="gradient-text">One Subscription</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Sports, movies, TV shows, family entertainment, documentaries, pay-per-view events and more â€” all included in every plan.
        </p>
        <img
          src="/assets/adult-section.png"
          alt="Full content library â€” sports, movies, family, documentaries and more"
          className="w-full rounded-2xl border border-border/40 shadow-2xl"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default AdultSection;



