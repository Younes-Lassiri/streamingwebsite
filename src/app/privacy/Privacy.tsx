"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SUPPORT_EMAIL } from "@/data/siteData";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <article className="pt-page pb-24">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: April 8, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">1. Introduction</h2>
            <p>{SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and streaming services.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Personal Information:</strong> Name, email address, and payment details provided during account registration and subscription purchase.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Service, including device type, browser type, IP address, pages visited, and viewing preferences.</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our streaming Service.</li>
              <li>To process transactions and send related billing information.</li>
              <li>To send service-related communications, including updates and support messages.</li>
              <li>To personalize your experience and deliver relevant content recommendations.</li>
              <li>To detect, prevent, and address technical issues and security threats.</li>
              <li>To comply with legal obligations and enforce our Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">4. Data Sharing & Disclosure</h2>
            <p>We do not sell your personal information to third parties. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Payment Processors:</strong> To securely process your subscription payments.</li>
              <li><strong>Service Providers:</strong> Third parties who assist in operating our Service (hosting, analytics, customer support).</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal data, including encryption, secure servers, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide the Service. We may retain certain data for longer periods to comply with legal obligations, resolve disputes, or enforce agreements.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict certain data processing activities.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Withdraw consent for data processing where applicable.</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a>.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">8. Cookies</h2>
            <p>Our website uses cookies to improve functionality and analyze traffic. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain features of the Service.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">9. children&apos;s Privacy</h2>
            <p>Our Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will take steps to remove it.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date.</p>
          </section>
        </div>
      </div>
    </article>
    <Footer />
  </div>
);

export default Privacy;



