"use client";
import { motion } from "framer-motion";
import { Tv, Smartphone, Monitor, Tablet, Wifi, Laptop } from "lucide-react";
import { DEVICES } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  "Amazon Fire TV": <Tv size={26} />,
  "Android": <Smartphone size={26} />,
  "Apple TV": <Monitor size={26} />,
  "Samsung": <Tv size={26} />,
  "LG": <Tv size={26} />,
  "Roku": <Laptop size={26} />,
  "VIDAA": <Tv size={26} />,
  "Hisense": <Tv size={26} />,
  "Chromecast": <Wifi size={26} />,
  "iOS": <Tablet size={26} />,
};

const DeviceLogosSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
    <div className="container relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸ“± Multi-Device</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">
          Stream Anywhere, Anytime
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Enjoy your favorite content on any device. Seamless streaming across all major platforms.
        </p>
      </motion.div>

      {/* Devices showcase image */}
      <motion.div
        className="mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
          <img
            src="/assets/devices-showcase.jpg"
            alt="Stream on Smart TV, laptop, tablet, and phone"
            className="w-full h-auto"
            loading="lazy"
            width={1920}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {DEVICES.map((device, i) => (
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass-card p-5 flex flex-col items-center gap-3 hover-lift cursor-default"
          >
            <span className="text-primary">{iconMap[device] || <Monitor size={26} />}</span>
            <span className="text-sm font-medium text-foreground">{device}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeviceLogosSection;



