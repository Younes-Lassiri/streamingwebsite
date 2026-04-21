"use client";
import { m } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const TrustTestimonials = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
    <div className="container relative z-10">
      <m.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="section-badge mb-4 inline-flex">⭐ Trusted by Thousands</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          What Our <span className="gradient-text">Customers Say</span>
        </h2>
      </m.div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {["/assets/whatsapp-reviews-1.webp", "/assets/whatsapp-reviews-2.webp"].map((src, i) => (
          <m.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Customer review ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
              quality={80}
            />
          </m.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustTestimonials;



