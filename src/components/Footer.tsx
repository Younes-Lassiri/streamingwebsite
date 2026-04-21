"use client";
import Link from "next/link";
import { SITE_NAME } from "@/data/siteData";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/30 pt-16 pb-8">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4 group">
            <span className="font-heading font-bold text-lg">{SITE_NAME}</span>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium IPTV streaming service delivering 25,000+ live channels,
            120,000+ movies, and unlimited sports entertainment to viewers
            across the United States and worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-foreground">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="hover:text-primary transition-colors"
              >
                IPTV Pricing Plans
              </Link>
            </li>

            <li>
              <Link
                href="/channel-list"
                className="hover:text-primary transition-colors"
              >
                IPTV Channel List
              </Link>
            </li>

            <li>
              <Link
                href="/installation"
                className="hover:text-primary transition-colors"
              >
                IPTV Installation Guide
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                IPTV Blog & Guides
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-foreground">
            Legal
          </h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/refund"
                className="hover:text-primary transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-foreground">
            Support
          </h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="/installation"
                className="hover:text-primary transition-colors"
              >
                Setup IPTV on Firestick
              </Link>
            </li>

            <li>
              <Link
                href="/channel-list"
                className="hover:text-primary transition-colors"
              >
                Browse Sports Channels
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="hover:text-primary transition-colors"
              >
                Buy IPTV Subscription
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                IPTV Help Center
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved. Premium
        IPTV Service with 25,000+ Channels, Movies, Sports & 4K Streaming.
      </div>
    </div>
  </footer>
);

export default Footer;