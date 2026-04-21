"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { STEPS } from "@/data/siteData";
import { ArrowRight, Target } from "lucide-react";

const StepsSection = () => (
  <section className="py-24">
    <div className="container">
      <m.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex items-center gap-2">
          <Target size={16} className="text-primary" />
          Easy Start
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">How to Get Your IPTV</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Getting started is simple. Follow these three easy steps and start streaming in minutes.
        </p>
      </m.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {STEPS.map((s, i) => (
          <m.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 text-center relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-heading font-bold text-xl mx-auto mb-5">
              {s.step}
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </m.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/pricing" className="btn-primary inline-flex items-center gap-2 !text-base">
          View Pricing <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default StepsSection;




