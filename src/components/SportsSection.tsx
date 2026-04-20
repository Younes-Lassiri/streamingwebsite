"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SPORTS_NETWORKS } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

const SportsSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src="/assets/sports-bg.jpg" alt="Live sports streaming" className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
    </div>

    <div className="container relative z-10">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸˆ For Sports Fans</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">
          Never Miss Your Favorite{" "}
          <span className="gradient-text">Game Again</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Get access to live sports from top networks and leagues. Watch football, basketball, baseball, hockey, soccer, and more â€” all in stunning HD and 4K quality.
        </p>

        {/* PLACEHOLDER â€” Network names pending legal approval */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SPORTS_NETWORKS.map((network) => (
            <span
              key={network}
              className="px-5 py-2.5 rounded-xl bg-secondary/80 border border-border/60 text-sm font-semibold text-foreground"
            >
              {network}
            </span>
          ))}
        </div>

        <Link
          href="/pricing"
          className="btn-primary inline-flex items-center gap-2"
        >
          See Plans <ArrowRight size={18} />
        </Link>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4">Stream on Any Device, Anywhere, Anytime</p>
          <img
            src="/assets/device-brands.png"
            alt="Compatible devices â€” Android, Apple, Kodi, Fire Stick, Smart TV, and more"
            className="mx-auto max-w-3xl w-full"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SportsSection;



