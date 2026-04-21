"use client";
import { m } from "framer-motion";
import Image from "next/image";

const WorldCupBanner = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container">
      <m.div
        className="flex flex-col md:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="/assets/world-cup-2026.webp"
          alt="FIFA World Cup 2026 streaming"
          width={800}
          height={300}
          className="w-full md:w-1/2 max-w-xl"
          loading="lazy"
          quality={80}
        />
        <Image
          src="/assets/sports-leagues.webp"
          alt="Sports leagues available"
          width={800}
          height={200}
          className="w-full md:w-1/2 max-w-xl"
          loading="lazy"
          quality={80}
        />
      </m.div>
    </div>
  </section>
);
export default WorldCupBanner;

