"use client";

import { m } from "framer-motion";
import { Sparkles, Timer, Zap } from "lucide-react";

/**
 * Prominent “try before you buy” message on the pricing page.
 */
export default function PricingClarityBanner() {
  return (
    <m.div
      className="relative mx-auto mb-14 max-w-4xl"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.25),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] p-[1.5px] shadow-[0_24px_80px_-20px_hsl(217_91%_50%/0.45)]">
        <div className="absolute inset-0 motion-safe:animate-[spin_14s_linear_infinite] bg-[conic-gradient(from_120deg_at_50%_50%,hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)))] opacity-80" />
        <div className="relative rounded-[1.65rem] border border-white/5 bg-gradient-to-br from-card via-card to-secondary/40 px-6 py-9 backdrop-blur-2xl md:px-10 md:py-11">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />

          <div className="relative mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-success md:text-xs">
              <Timer size={13} className="shrink-0" />
              Free 24h test
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary md:text-xs">
              <Zap size={13} className="shrink-0" />
              Full lineup
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent-foreground md:text-xs">
              <Sparkles size={13} className="shrink-0" />
              No pressure
            </span>
          </div>

          <p className="relative text-center font-heading text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl md:leading-snug lg:text-[1.75rem] lg:leading-snug">
            For the clarity we give our customers the chance to try the server for{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 -bottom-1 h-3 rounded-sm bg-accent/35 -skew-x-6" aria-hidden />
              <span className="relative bg-gradient-to-r from-accent via-warning to-accent bg-clip-text font-extrabold text-transparent">
                free 24h test
              </span>
            </span>
            , before making the purchase.
          </p>

          <p className="relative mt-5 text-center text-xs font-medium text-muted-foreground md:text-sm">
            Stream every channel line-up in real quality — then lock in the plan that fits you.
          </p>
        </div>
      </div>
    </m.div>
  );
}
