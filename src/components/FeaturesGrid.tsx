"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tv, Film, Radio, Trophy, Settings, Headphones } from "lucide-react";
import { FEATURES } from "@/data/siteData";

const featureImages: Record<string, string> = {
  Tv: "/assets/feature-premium.jpg",
  Film: "/assets/feature-movies.jpg",
  Radio: "/assets/feature-channels.jpg",
  Trophy: "/assets/feature-sports.jpg",
  Settings: "/assets/feature-setup.jpg",
  Headphones: "/assets/feature-support.jpg",
};

const iconComponents: Record<string, React.ReactNode> = {
  Tv: <Tv size={20} />,
  Film: <Film size={20} />,
  Radio: <Radio size={20} />,
  Trophy: <Trophy size={20} />,
  Settings: <Settings size={20} />,
  Headphones: <Headphones size={20} />,
};

const FeaturesGrid = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">⚡ Features</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">Discover the Best IPTV Experience</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Everything you need for the ultimate streaming experience, all in one service.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card overflow-hidden hover-lift group"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={featureImages[f.icon]}
                alt={f.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary border border-primary/20">
                  {iconComponents[f.icon]}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{f.description}</p>
              <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                View Plans →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
