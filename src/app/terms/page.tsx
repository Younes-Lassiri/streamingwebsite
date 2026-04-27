import { Metadata } from "next";
import TermsClient from "./Terms";

export const metadata: Metadata = {
  title: "Terms of Service | 8K Stream Live",
  description: "The official terms and conditions for using 8K Stream Live services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function Page() {
  return <TermsClient />;
}