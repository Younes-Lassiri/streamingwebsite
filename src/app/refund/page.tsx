import { Metadata } from "next";
import RefundClient from "./Refund";

export const metadata: Metadata = {
  title: "Refund Policy | 8K Stream Live",
  description: "Information regarding our 7-day money-back guarantee and refund process.",
  alternates: {
    canonical: "/refund",
  },
};

export default function Page() {
  return <RefundClient />;
}