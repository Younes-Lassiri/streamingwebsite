"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/siteData";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-20 md:bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
    style={{ background: "#25D366" }}
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default WhatsAppButton;

