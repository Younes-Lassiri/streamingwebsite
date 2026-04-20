"use client";
import { motion } from "framer-motion";

const WorldCupBanner = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">âš½ Coming Soon</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">
          Watch the <span className="gradient-text">FIFA World Cup 2026</span> Live
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Get ready for the biggest sporting event â€” streaming live in 4K Ultra HD across all your devices. Plus NFL, NBA, MLB & NHL all season long.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <img
            src="/assets/world-cup-2026.png"
            alt="FIFA World Cup 2026 â€” USA, Canada, Mexico"
            className="max-w-xs w-full rounded-2xl"
            loading="lazy"
          />
          <img
            src="/assets/sports-leagues.png"
            alt="NFL, NBA, MLB, NHL â€” Watch all major US sports leagues live"
            className="max-w-sm w-full rounded-2xl bg-card/50 p-4 border border-border/30"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorldCupBanner;



