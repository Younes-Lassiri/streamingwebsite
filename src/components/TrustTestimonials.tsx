"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TrustTestimonials = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">â­ Customer Reviews</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Trusted by Thousands of Viewers
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          See what our customers are saying about their streaming experience.
        </p>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={18} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="text-foreground font-semibold">4.9/5</span>
          <span className="text-muted-foreground text-sm">from 1,000+ reviews</span>
        </div>
      </motion.div>

      {/* WhatsApp Screenshot Proof */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-heading text-xl font-bold text-center mb-2">Real WhatsApp Conversations</h3>
        <p className="text-center text-sm text-muted-foreground mb-6">Verified customer interactions â€” unedited screenshots</p>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <img
            src="/assets/whatsapp-reviews-1.png"
            alt="WhatsApp customer reviews and setup confirmation screenshots"
            className="w-full rounded-2xl border border-border/30 shadow-lg"
            loading="lazy"
          />
          <img
            src="/assets/whatsapp-reviews-2.png"
            alt="WhatsApp customer satisfaction and support screenshots"
            className="w-full rounded-2xl border border-border/30 shadow-lg"
            loading="lazy"
          />
        </div>
      </motion.div>

    </div>
  </section>
);

export default TrustTestimonials;



