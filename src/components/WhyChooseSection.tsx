"use client";
import { motion } from "framer-motion";
import { Zap, Sparkles, Layers, Trophy, Monitor, CreditCard } from "lucide-react";
import { WHY_CHOOSE, SITE_NAME } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={24} />,
  Sparkles: <Sparkles size={24} />,
  Layers: <Layers size={24} />,
  Trophy: <Trophy size={24} />,
  Monitor: <Monitor size={24} />,
  CreditCard: <CreditCard size={24} />,
};

const WhyChooseSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸ’Ž Why Us</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          Why Choose <span className="gradient-text">{SITE_NAME}</span>?!
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          We deliver a premium streaming experience with the content you love, the quality you deserve, and the support you can count on.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {WHY_CHOOSE.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-7 text-center hover-lift"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
              {iconMap[item.icon]}
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;

