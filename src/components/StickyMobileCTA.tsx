"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="sticky-mobile-cta">
    <Link
      href="/pricing"
      className="btn-primary w-full !text-base flex items-center justify-center gap-2"
    >
      Get Started Now <ArrowRight size={16} />
    </Link>
  </div>
);

export default StickyMobileCTA;




