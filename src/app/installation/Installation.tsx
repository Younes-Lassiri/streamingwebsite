"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { m } from "framer-motion";
import { Tv, AlertTriangle } from "lucide-react";
import { INSTALLATION_DEVICES, TROUBLESHOOTING, DEVICES } from "@/data/siteData";

const Installation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-page pb-16">
        <div className="container">
          <m.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-badge mb-4 inline-flex">ðŸ“– Setup Guide</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">Installation Guide</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Get started in minutes. Follow our simple step-by-step instructions for your device.
            </p>
          </m.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Supported Devices</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {DEVICES.map((d) => (
              <span key={d} className="px-5 py-2.5 rounded-xl bg-secondary border border-border/60 text-sm font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-center mb-10">Setup Instructions</h2>
          <div className="space-y-5">
            {INSTALLATION_DEVICES.map((device, i) => (
              <m.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-7"
              >
                <h3 className="font-heading text-lg font-bold mb-5 flex items-center gap-2">
                  <Tv size={20} className="text-primary" />
                  {device.name}
                </h3>
                <ol className="space-y-3">
                  {device.steps.map((step, si) => (
                    <li key={si} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                        {si + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="container max-w-4xl relative z-10">
          <h2 className="font-heading text-2xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <AlertTriangle size={24} className="text-accent" />
            Troubleshooting Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {TROUBLESHOOTING.map((t, i) => (
              <div key={i} className="glass-card p-7">
                <h3 className="font-heading font-bold mb-3">{t.issue}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion limit={5} />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Installation;



