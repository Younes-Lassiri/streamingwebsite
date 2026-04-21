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
  title: "Premium IPTV Service | 25,000+ Channels in 8K",
  description: "Get instant access to 25,000+ live channels, 120,000+ movies and series, and all major sports in stunning 8K quality. Starting at $5/month.",
  icons: {
    icon: "/assets/icon.webp",
    shortcut: "/assets/icon.webp",
    apple: "/assets/icon.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icon.webp" type="image/webp" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}