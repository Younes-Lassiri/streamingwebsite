// src/app/installation/page.tsx
import { Metadata } from "next";
import InstallationClient from "./Installation"; // Import your current code
import Installation from "./Installation";

export const metadata: Metadata = {
  title: "Installation Guide | 8K Stream Live",
  description: "Learn how to set up 8K Stream Live on your Firestick, Android TV, or Smart TV.",
  alternates: {
    canonical: "/installation",
  },
};

export default function Page() {
  return <Installation />;
}