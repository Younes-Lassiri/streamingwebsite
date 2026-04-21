"use client";
import { m } from "framer-motion";
import { Check, X, Award, Zap } from "lucide-react";
import { COMPARISON_DATA, SITE_NAME } from "@/data/siteData";

const ComparisonSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
    <div className="container relative z-10">
      <m.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        
        <span className="section-badge mb-4 inline-flex items-center gap-2">
          <Zap size={16} className="text-yellow-400 fill-yellow-400" />
          Stream More. Pay Less
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">What Makes Our IPTV Stand Out</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          See how {SITE_NAME} compares to traditional cable and other providers.
        </p>
      </m.div>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {/* Traditional Cable */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="glass-card p-7"
        >
          <h3 className="font-heading text-lg font-bold mb-6 text-muted-foreground">Traditional Cable</h3>
          <ul className="space-y-4">
            {COMPARISON_DATA.rows.map((r) => (
              <li key={r.feature} className="flex items-center gap-3 text-sm">
                {r.cable ? (
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-success" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                )}
                <span className="text-muted-foreground">{r.feature}</span>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Our Service â€” Highlighted */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.1 }}
          className="glass-card-elevated p-7 relative"
        >
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-heading text-lg font-bold text-foreground">{SITE_NAME}</h3>
            <span className="section-badge !px-2 !py-0.5 !text-[10px]">
              <Award size={10} /> RECOMMENDED
            </span>
          </div>
          <ul className="space-y-4">
            {COMPARISON_DATA.rows.map((r) => (
              <li key={r.feature} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-success" />
                </div>
                <span className="text-foreground font-medium">{r.feature}</span>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Other IPTV */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-7"
        >
          <h3 className="font-heading text-lg font-bold mb-6 text-muted-foreground">Other IPTV Providers</h3>
          <ul className="space-y-4">
            {COMPARISON_DATA.rows.map((r) => (
              <li key={r.feature} className="flex items-center gap-3 text-sm">
                {r.other ? (
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-success" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                )}
                <span className="text-muted-foreground">{r.feature}</span>
              </li>
            ))}
          </ul>
        </m.div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;




