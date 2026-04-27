"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import DeviceLogosSection from "@/components/DeviceLogosSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import PromoBanner from "@/components/PromoBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import WorldCupBanner from "@/components/WorldCupBanner";
import WelcomePopup from "@/components/WelcomePopup";
import Link from "next/link";
import { m } from "framer-motion";
import { FAQS } from "@/data/siteData"; // Import your FAQ data here

const AdultSection = dynamic(() => import("@/components/AdultSection"), { ssr: false });
const ShowsSection = dynamic(() => import("@/components/ShowsSection"), { ssr: false });
const ContentShowcase = dynamic(() => import("@/components/ContentShowcase"), { ssr: false });
const StepsSection = dynamic(() => import("@/components/StepsSection"), { ssr: false });
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), { ssr: false });
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), { ssr: false });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: false });
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"), { ssr: false });
const SportsSection = dynamic(() => import("@/components/SportsSection"), { ssr: false });
const TrustTestimonials = dynamic(() => import("@/components/TrustTestimonials"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/BlogSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const ServersWorldwide = dynamic(() => import("@/components/ServersWorldwide"), { ssr: false });

const Index = () => {
  // --- STRUCTURED DATA (SEO) ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "8kstreamlive Premium IPTV",
    "description": "Best IPTV service in 2026 with 25,000+ channels and 120,000+ VODs.",
    "brand": { "@type": "Brand", "name": "8kstreamlive" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "5.38",
      "availability": "https://schema.org/InStock",
      "url": "https://8kstreamlive.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };
  // -----------------------------

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PromoBanner />
      <WelcomePopup />
      <Navbar />
      <HeroSection />
      <WorldCupBanner />
      
      <Suspense fallback={null}><AdultSection /></Suspense>
      <Suspense fallback={null}><ShowsSection /></Suspense>
      <Suspense fallback={null}><ContentShowcase /></Suspense>
      
      <section className="py-24" id="pricing">
        <div className="container">
          <m.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-badge mb-4 inline-flex">💰 Pricing</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">Stream More. Pay Less.</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
              Flexible IPTV plans for every viewer. All plans include full access to 25,000+ channels and 120,000+ movies on multiple devices.
            </p>
          </m.div>
          <PricingCards />
          <div className="text-center mt-6">
            <Link href="/pricing" className="text-primary font-semibold hover:underline text-sm">
              View All Plans & Compare →
            </Link>
          </div>
        </div>
      </section>

      <DeviceLogosSection />
      <Suspense fallback={null}><StepsSection /></Suspense>
      <Suspense fallback={null}><ComparisonSection /></Suspense>
      <Suspense fallback={null}><FeaturesGrid /></Suspense>
      <Suspense fallback={null}><FAQAccordion limit={8} /></Suspense>
      <Suspense fallback={null}><WhyChooseSection /></Suspense>
      <Suspense fallback={null}><SportsSection /></Suspense>
      <Suspense fallback={null}><ServersWorldwide /></Suspense>
      <Suspense fallback={null}><TrustTestimonials /></Suspense>
      <Suspense fallback={null}><BlogSection /></Suspense>
      <Suspense fallback={null}><CTASection /></Suspense>
      
      <Footer />
      <StickyMobileCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;