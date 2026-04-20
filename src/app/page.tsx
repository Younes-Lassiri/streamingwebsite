"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import DeviceLogosSection from "@/components/DeviceLogosSection";
import StepsSection from "@/components/StepsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQAccordion from "@/components/FAQAccordion";
import WhyChooseSection from "@/components/WhyChooseSection";
import SportsSection from "@/components/SportsSection";
import TrustTestimonials from "@/components/TrustTestimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContentShowcase from "@/components/ContentShowcase";
import PromoBanner from "@/components/PromoBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorldCupBanner from "@/components/WorldCupBanner";
import AdultSection from "@/components/AdultSection";
import ShowsSection from "@/components/ShowsSection";
import WelcomePopup from "@/components/WelcomePopup";
import BlogSection from "@/components/BlogSection";
import { motion } from "framer-motion";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <PromoBanner />
      <WelcomePopup />
      <Navbar />
      <HeroSection />
      <WorldCupBanner />
      <AdultSection />
      <ShowsSection />
      <ContentShowcase />
      <section className="py-24" id="pricing">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4 inline-flex">💰 Pricing</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">Stream More. Pay Less.</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Flexible IPTV plans for every viewer. All plans include full access to 25,000+ channels and 120,000+ movies on multiple devices.
            </p>
          </motion.div>
          <PricingCards />
          <div className="text-center mt-6">
            <Link href="/pricing" className="text-primary font-semibold hover:underline text-sm">
              View All Plans & Compare →
            </Link>
          </div>
        </div>
      </section>
      <DeviceLogosSection />
      <StepsSection />
      <ComparisonSection />
      <FeaturesGrid />
      <FAQAccordion limit={8} />
      <WhyChooseSection />
      <SportsSection />
      <TrustTestimonials />
      <BlogSection />
      <CTASection />
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
