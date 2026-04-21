"use client";

import { m } from "framer-motion";
import { BadgeDollarSign } from "lucide-react";

const PricingHeader = () => {
  return (
    <m.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="section-badge mb-4 inline-flex items-center gap-2">
        <BadgeDollarSign size={16} className="text-primary" />
        Pricing
      </span>

      <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
        Stream More. Pay Less.
      </h2>

      <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
        Flexible IPTV plans for every viewer. All plans include full access to
        25,000+ channels and 120,000+ movies on multiple devices.
      </p>
    </m.div>
  );
};

export default PricingHeader;