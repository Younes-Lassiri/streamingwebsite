"use client";
import { m, useScroll, useTransform } from "framer-motion";
import { Play, Zap, Monitor, Headphones, Shield, ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/data/siteData";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const FLOATING_CHANNELS = [
  { label: "ESPN", x: "8%", y: "18%", delay: 0 },
  { label: "HBO", x: "85%", y: "14%", delay: 0.5 },
  { label: "NFL", x: "5%", y: "55%", delay: 1.2 },
  { label: "FOX", x: "90%", y: "50%", delay: 0.8 },
  { label: "ABC", x: "12%", y: "80%", delay: 1.5 },
  { label: "NBC", x: "82%", y: "78%", delay: 0.3 },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      <m.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/assets/hero-bg.webp"
          alt="Family watching premium sports and entertainment streaming in 4K"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
      </m.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      {FLOATING_CHANNELS.map((ch) => (
        <m.div
          key={ch.label}
          className="absolute hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-border/40 text-xs font-bold text-foreground shadow-lg"
          style={{ left: ch.x, top: ch.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: ch.delay + 0.8, duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          {ch.label}
        </m.div>
      ))}

      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge mb-6 inline-flex">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              5,000+ active viewers streaming right now
            </span>
          </m.div>

          <m.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Watch Every Game.{" "}
            <br className="hidden sm:block" />
            Stream Every{" "}
            <span className="gradient-text">Movie.</span>
          </m.h1>

          <m.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            25,000+ live channels, 120,000+ movies & series, and all major sports —
            in stunning 4K quality. Starting at just <span className="text-foreground font-semibold">$5.38/month</span>.
          </m.p>

          <m.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2">
              Choose a Plan <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="btn-secondary flex items-center justify-center gap-2">
              <Play size={18} /> Start Free Trial
            </Link>
          </m.div>

          <m.p
            className="text-sm text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No credit card required for trial • Instant activation • Cancel anytime
          </m.p>

          <m.div
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className="flex items-center gap-2"><Zap size={15} className="text-primary" /> Instant Activation</span>
            <span className="flex items-center gap-2"><Monitor size={15} className="text-primary" /> Works on All Devices</span>
            <span className="flex items-center gap-2"><Shield size={15} className="text-primary" /> Secure & Reliable</span>
            <span className="flex items-center gap-2"><Headphones size={15} className="text-primary" /> 24/7 US Support</span>
          </m.div>

          <m.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="glass-card p-5 md:p-6 text-center stat-glow">
                <div className="font-heading text-2xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



