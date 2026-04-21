"use client";
import { m } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/siteData";
import { CircleHelp } from "lucide-react";

interface FAQAccordionProps {
  limit?: number;
}

const FAQAccordion = ({ limit }: FAQAccordionProps) => {
  const items = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section className="py-24">
      <div className="container">
        <m.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <span className="section-badge mb-4 inline-flex items-center gap-2">
            <CircleHelp size={16} className="text-primary" />
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Got questions? We&apos;ve got answers. Everything you need to know before getting started.
          </p>
        </m.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 hover:no-underline text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;





