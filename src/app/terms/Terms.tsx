"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL } from "@/data/siteData";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <article className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 8, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the {SITE_NAME} website and streaming services (&ldquo;Service&rdquo;), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must discontinue use of the Service immediately.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">2. Service Description</h2>
            <p>{SITE_NAME} provides an Internet Protocol Television (IPTV) streaming service that delivers live television channels, on-demand movies, TV series, and other digital content over the internet to subscribers on compatible devices.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years of age to subscribe to our Service. By subscribing, you confirm that you meet this age requirement and that all information provided during registration is accurate and complete.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">4. Subscription Plans & Payment</h2>
            <p>We offer various subscription plans with different durations and pricing. All prices are displayed in US dollars and are subject to change with prior notice. Payment is due at the time of subscription and is processed through secure third-party payment processors.</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Subscription begins upon successful payment confirmation.</li>
              <li>Plans are prepaid for the selected duration.</li>
              <li>Automatic renewal may apply unless cancelled before the renewal date.</li>
              <li>We do not store credit card information on our servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">5. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Share, resell, or redistribute your account credentials.</li>
              <li>Use the Service for any commercial or public display purposes.</li>
              <li>Attempt to reverse-engineer, modify, or interfere with the Service.</li>
              <li>Use automated systems to access or interact with the Service.</li>
              <li>Violate any applicable local, state, national, or international law.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">6. Account Security</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity conducted under your account is your responsibility. Notify us immediately at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a> if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">7. Service Availability</h2>
            <p>While we strive to maintain high uptime and service quality, we do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control. We are not liable for any losses arising from service interruptions.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">8. Content Disclaimer</h2>
            <p>Channel lineups, on-demand libraries, and content availability are subject to change without notice. We do not guarantee the availability of any specific channel, program, or content at any time.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">9. Limitation of Liability</h2>
            <p>{SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you for the current subscription period.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">10. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at our discretion if you violate these Terms. Upon termination, your access to the Service will cease immediately and no refund will be issued for the remaining subscription period.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">11. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the modified Terms. We encourage you to review this page periodically.</p>
          </section>
        </div>
      </div>
    </article>
    <Footer />
  </div>
);

export default Terms;


