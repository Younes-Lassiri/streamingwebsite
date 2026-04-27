import { Metadata } from "next";
import PricingClient from "./Pricing"; // Rename your current file to this
import Pricing from "./Pricing";

export const metadata: Metadata = {
  title: "Pricing Plans | 8K Stream Live",
  description: "Choose the best IPTV plan for your needs. Affordable 8K streaming starting from $5.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function Page() {
  return <Pricing />;
}