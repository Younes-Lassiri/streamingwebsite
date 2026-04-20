"use client";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Headphones } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-badge mb-4 inline-flex">ðŸ’° Plans & Pricing</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Choose the plan that works for you. All plans include full access to every feature. No hidden fees.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {[
              { icon: <Zap size={16} />, text: "Instant Activation" },
              { icon: <ShieldCheck size={16} />, text: "Secure Payment" },
              { icon: <Clock size={16} />, text: "Cancel Anytime" },
              { icon: <Headphones size={16} />, text: "24/7 Support" },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-primary">{item.icon}</span> {item.text}
              </span>
            ))}
          </div>

          <PricingCards showAll />
        </div>
      </section>

      <FAQAccordion limit={5} />
      <CTASection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Pricing;

