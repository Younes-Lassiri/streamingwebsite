"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { SUPPORT_EMAIL, WHATSAPP_LINK } from "@/data/siteData";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/contact-us.webp";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-badge mb-4 inline-flex">ðŸ“¬ Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">Contact Us</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Have questions? Our support team is here to help you 24/7.
            </p>
          </motion.div>

          {/* Trust image */}
          <motion.div
            className="max-w-md mx-auto mb-14"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={contactImg}
              alt="24/7 customer support â€” contact us via email, WhatsApp, or phone"
              className="w-full rounded-2xl border border-border/30 shadow-lg"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-5">
              {[
                {
                  icon: <Mail size={24} />,
                  title: "Email Support",
                  desc: "Send us an email anytime",
                  action: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary text-sm font-medium hover:underline">{SUPPORT_EMAIL}</a>,
                },
                {
                  icon: <MessageCircle size={24} />,
                  title: "WhatsApp Support",
                  desc: "Chat with us instantly",
                  action: <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">Message us on WhatsApp</a>,
                },
                {
                  icon: <Clock size={24} />,
                  title: "Response Time",
                  desc: "We typically respond within minutes. Our team is available 24/7.",
                  action: null,
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-7 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                    {item.action}
                  </div>
                </div>
              ))}
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-heading text-xl font-bold mb-6">Send Us a Message</h3>
              <div className="space-y-4">
                {[
                  { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
                  { label: "Email", type: "email", key: "email" as const, placeholder: "you@example.com" },
                  { label: "Subject", type: "text", key: "subject" as const, placeholder: "How can we help?" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-sm font-medium mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full !text-base flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <FAQAccordion limit={4} />
      <Footer />
    </div>
  );
};

export default Contact;

