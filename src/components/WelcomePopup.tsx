"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Zap, Shield, Tv, ArrowRight, Star } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("welcome_seen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("welcome_seen", "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <m.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              {/* Top gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="bg-card p-6 sm:p-8">
                <button
                  onClick={close}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors text-muted-foreground"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-accent/15 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                    <Zap size={12} /> LIMITED TIME OFFER
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground leading-tight">
                  Get <span className="text-primary">50% OFF</span><br />
                  Your First Subscription
                </h2>

                <p className="text-muted-foreground text-center mt-3 text-sm">
                  Join 5,000+ happy viewers streaming 25,000+ channels in crystal-clear 4K quality.
                </p>

                {/* Trust points */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { icon: Tv, label: "25K+ Channels" },
                    { icon: Shield, label: "Secure & Fast" },
                    { icon: Star, label: "4.9/5 Rated" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-muted/50">
                      <Icon size={18} className="text-primary" />
                      <span className="text-[11px] font-semibold text-foreground">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/pricing"
                  onClick={close}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 text-sm"
                >
                  Claim 50% OFF Now <ArrowRight size={16} />
                </Link>

                <p className="text-center text-[11px] text-muted-foreground mt-3">
                  No credit card required â€¢ Cancel anytime â€¢ Instant activation
                </p>
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;



