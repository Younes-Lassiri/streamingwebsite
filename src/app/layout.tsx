import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://8kstreamlive.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  // This is now 58 characters - Perfect for Google
  title: "Premium IPTV Service | 25,000+ Channels in 8K UHD Streaming", 
  description: "Access 25,000+ live channels and 120,000+ movies in 8K UHD. Premium sports and entertainment starting at $5/month.",
  icons: {
    icon: "/icon.webp",
    shortcut: "/icon.webp",
    apple: "/icon.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Create the JSON-LD object
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "8K Stream Live IPTV",
    "image": "https://8kstreamlive.com/icon.webp",
    "description": "Premium IPTV service with 25,000+ live channels and 120,000+ VODs in 8K quality.",
    "brand": {
      "@type": "Brand",
      "name": "8K Stream Live"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://8kstreamlive.com/pricing",
      "priceCurrency": "USD",
      "price": "5.38",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {/* Add this script tag here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}