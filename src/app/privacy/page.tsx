import { Metadata } from "next";
import PrivacyClient from "./Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | 8K Stream Live",
  description: "Learn how we protect your data and privacy at 8K Stream Live.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return <PrivacyClient />;
}