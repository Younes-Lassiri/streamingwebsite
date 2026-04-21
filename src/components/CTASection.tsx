"use client";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Ban, Play } from "lucide-react";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%_/_0.08),transparent_60%)]" />
    <div className="container relative z-10">
      <m.div
        className="max-w-3xl mx-auto text-center glass-card-elevated p-12 md:p-20"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-badge mb-6 inline-flex">ðŸš€ Start Streaming Today</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Choose Your Plan Today
        </h2>
        <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto leading-relaxed">
          Join thousands of satisfied viewers. Start streaming unlimited content in stunning 4K quality on any device.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2">
            Choose a Plan <ArrowRight size={18} />
          </Link>
          <Link href="/pricing" className="btn-secondary flex items-center justify-center gap-2">
            <Play size={18} /> Start Free Trial
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          No credit card required â€¢ Instant activation <Ban className="w-4 h-4 text-primary" /> Cancel anytime
        </p>
      </m.div>
    </div>
  </section>
);

export default CTASection;





