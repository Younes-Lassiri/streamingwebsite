"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { SPORTS_NETWORKS } from "@/data/siteData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SportsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/assets/sports-bg.webp"
        alt="Live sports streaming"
        fill
        className="object-cover"
        sizes="100vw"
        quality={80}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
    </div>
    <div className="container relative z-10">
      <m.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex">🏈 For Sports Fans</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-4">
          Never Miss Your Favorite{" "}
          <span className="gradient-text">Game Again</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Get access to live sports from top networks and leagues. Watch football, basketball, baseball, hockey, soccer, and more — all in stunning HD and 4K quality.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SPORTS_NETWORKS.map((network) => (
            <span key={network} className="px-5 py-2.5 rounded-xl bg-secondary/80 border border-border/60 text-sm font-semibold text-foreground">
              {network}
            </span>
          ))}
        </div>
        <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
          See Plans <ArrowRight size={18} />
        </Link>
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4">Stream on Any Device, Anywhere, Anytime</p>
          <Image
            src="/assets/device-brands.webp"
            alt="Compatible devices — Android, Apple, Kodi, Fire Stick, Smart TV, and more"
            width={900}
            height={200}
            className="mx-auto max-w-3xl w-full"
            loading="lazy"
            quality={80}
          />
        </div>
      </m.div>
    </div>
  </section>
);

export default SportsSection;



