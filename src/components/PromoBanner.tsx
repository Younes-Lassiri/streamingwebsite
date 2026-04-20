"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Zap, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  // Countdown timer â€” ends in 24h from first visit
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const stored = localStorage.getItem("promo_end");
    const end = stored ? parseInt(stored) : Date.now() + 24 * 60 * 60 * 1000;
    if (!stored) localStorage.setItem("promo_end", end.toString());

    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="relative bg-gradient-to-r from-red-600 via-primary to-accent/90">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_100%] animate-[shimmer_3s_infinite]" />

          <div className="container flex items-center justify-center gap-2 sm:gap-4 py-2.5 text-sm font-medium relative">
            <Zap size={16} className="shrink-0 text-accent animate-pulse hidden sm:block" />

            {/* Countdown timer */}
            <div className="flex items-center gap-1 text-xs font-mono shrink-0">
              <Clock size={12} className="text-accent" />
              <span className="bg-black/30 rounded px-1.5 py-0.5 text-white font-bold">{pad(timeLeft.h)}</span>
              <span className="text-white/70">:</span>
              <span className="bg-black/30 rounded px-1.5 py-0.5 text-white font-bold">{pad(timeLeft.m)}</span>
              <span className="text-white/70">:</span>
              <span className="bg-black/30 rounded px-1.5 py-0.5 text-white font-bold">{pad(timeLeft.s)}</span>
            </div>

            <span className="text-white text-center text-xs sm:text-sm">
              ðŸ”¥ <strong>FLASH SALE:</strong> 50% OFF 12-Month Plans
            </span>

            <Link
              href="/pricing"
              className="shrink-0 bg-white text-primary font-bold text-xs px-3 py-1 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center gap-1 shadow-lg"
            >
              Claim Now <ArrowRight size={12} />
            </Link>

            <button
              onClick={() => setVisible(false)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors text-white/80 hover:text-white"
              aria-label="Close banner"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBanner;

