"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL } from "@/data/siteData";

const Refund = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <article className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 8, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">1. Satisfaction Guarantee</h2>
            <p>At {SITE_NAME}, we want you to be completely satisfied with our streaming service. We stand behind the quality of our Service and offer a fair refund policy to ensure your confidence in subscribing.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">2. Refund Eligibility</h2>
            <p>You may be eligible for a refund under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Within 24 Hours:</strong> If you experience technical issues that our support team cannot resolve within the first 24 hours of your subscription, you are eligible for a full refund.</li>
              <li><strong>Service Not Delivered:</strong> If your account credentials are not delivered within 24 hours of payment, you are entitled to a full refund.</li>
              <li><strong>Billing Errors:</strong> If you are charged incorrectly or experience duplicate billing, we will issue a full refund for the erroneous charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">3. Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Requests made more than 7 days after the subscription purchase date.</li>
              <li>Violation of our Terms & Conditions, including account sharing or misuse.</li>
              <li>Issues caused by your internet connection, device incompatibility, or third-party software.</li>
              <li>Change of mind after using the Service for an extended period.</li>
              <li>Partial usage of a subscription period.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">4. How to Request a Refund</h2>
            <p>To request a refund, please follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Include your order number, email address used for registration, and a description of the issue.</li>
              <li>Allow our team to attempt troubleshooting before processing the refund.</li>
              <li>If the issue cannot be resolved, your refund will be initiated.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">5. Refund Processing</h2>
            <p>Once approved, refunds are processed within 5â€“10 business days to the original payment method. Processing times may vary depending on your bank or payment provider.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">6. Free Trial Policy</h2>
            <p>Free trials are offered at our discretion and do not require payment information. Trial accounts that convert to paid subscriptions are subject to this refund policy from the date of the first payment.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">7. Chargebacks</h2>
            <p>We encourage you to contact our support team before initiating a chargeback with your payment provider. Chargebacks without prior communication may result in account suspension. We are committed to resolving disputes directly.</p>
          </section>
        </div>
      </div>
    </article>
    <Footer />
  </div>
);

export default Refund;

