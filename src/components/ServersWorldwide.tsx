"use client";
import { motion } from "framer-motion";
import { Globe, Zap, Shield, Activity } from "lucide-react";

const SERVERS = [
  { country: "United States", flag: "ðŸ‡ºðŸ‡¸", city: "New York, LA, Dallas", ping: "12ms", load: 42, status: "Optimal" },
  { country: "Canada", flag: "ðŸ‡¨ðŸ‡¦", city: "Toronto, Vancouver", ping: "18ms", load: 38, status: "Optimal" },
  { country: "United Kingdom", flag: "ðŸ‡¬ðŸ‡§", city: "London, Manchester", ping: "20ms", load: 55, status: "Optimal" },
  { country: "France", flag: "ðŸ‡«ðŸ‡·", city: "Paris, Marseille", ping: "22ms", load: 47, status: "Optimal" },
  { country: "Germany", flag: "ðŸ‡©ðŸ‡ª", city: "Frankfurt, Berlin", ping: "24ms", load: 51, status: "Optimal" },
  { country: "Sweden", flag: "ðŸ‡¸ðŸ‡ª", city: "Stockholm", ping: "25ms", load: 33, status: "Optimal" },
  { country: "Spain", flag: "ðŸ‡ªðŸ‡¸", city: "Madrid, Barcelona", ping: "28ms", load: 44, status: "Optimal" },
  { country: "Italy", flag: "ðŸ‡®ðŸ‡¹", city: "Rome, Milan", ping: "30ms", load: 39, status: "Optimal" },
  { country: "Brazil", flag: "ðŸ‡§ðŸ‡·", city: "SÃ£o Paulo, Rio", ping: "35ms", load: 61, status: "Optimal" },
  { country: "Mexico", flag: "ðŸ‡²ðŸ‡½", city: "Mexico City", ping: "33ms", load: 48, status: "Optimal" },
  { country: "South Africa", flag: "ðŸ‡¿ðŸ‡¦", city: "Johannesburg", ping: "40ms", load: 35, status: "Optimal" },
  { country: "UAE", flag: "ðŸ‡¦ðŸ‡ª", city: "Dubai", ping: "38ms", load: 50, status: "Optimal" },
  { country: "India", flag: "ðŸ‡®ðŸ‡³", city: "Mumbai, Delhi", ping: "42ms", load: 58, status: "Optimal" },
  { country: "China", flag: "ðŸ‡¨ðŸ‡³", city: "Shanghai, Beijing", ping: "45ms", load: 64, status: "Optimal" },
  { country: "Japan", flag: "ðŸ‡¯ðŸ‡µ", city: "Tokyo, Osaka", ping: "40ms", load: 46, status: "Optimal" },
  { country: "South Korea", flag: "ðŸ‡°ðŸ‡·", city: "Seoul", ping: "41ms", load: 43, status: "Optimal" },
  { country: "Singapore", flag: "ðŸ‡¸ðŸ‡¬", city: "Singapore", ping: "39ms", load: 49, status: "Optimal" },
  { country: "Indonesia", flag: "ðŸ‡®ðŸ‡©", city: "Jakarta", ping: "42ms", load: 52, status: "Optimal" },
  { country: "Australia", flag: "ðŸ‡¦ðŸ‡º", city: "Sydney, Melbourne", ping: "38ms", load: 41, status: "Optimal" },
  { country: "New Zealand", flag: "ðŸ‡³ðŸ‡¿", city: "Auckland", ping: "44ms", load: 36, status: "Optimal" },
  { country: "Netherlands", flag: "ðŸ‡³ðŸ‡±", city: "Amsterdam", ping: "23ms", load: 45, status: "Optimal" },
  { country: "Poland", flag: "ðŸ‡µðŸ‡±", city: "Warsaw", ping: "27ms", load: 40, status: "Optimal" },
  { country: "Turkey", flag: "ðŸ‡¹ðŸ‡·", city: "Istanbul", ping: "32ms", load: 53, status: "Optimal" },
  { country: "Argentina", flag: "ðŸ‡¦ðŸ‡·", city: "Buenos Aires", ping: "37ms", load: 47, status: "Optimal" },
  { country: "Egypt", flag: "ðŸ‡ªðŸ‡¬", city: "Cairo", ping: "36ms", load: 42, status: "Optimal" },
];

const STATS = [
  { icon: Globe, value: "25", label: "Global Servers" },
  { icon: Zap, value: "<50ms", label: "Avg Latency" },
  { icon: Activity, value: "99.9%", label: "Uptime SLA" },
  { icon: Shield, value: "10Gbps", label: "Per Server" },
];

const ServersWorldwide = () => (
  <section className="py-24 relative overflow-hidden" id="servers" aria-labelledby="servers-heading">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />
    {/* Animated background dots */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-success rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
    </div>

    <div className="container relative z-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-badge mb-4 inline-flex">ðŸŒ Global Network Infrastructure</span>
        <h2 id="servers-heading" className="font-heading text-3xl md:text-5xl font-bold mt-2">
          <span className="gradient-text">25 Servers</span> Across the World
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Ultra-low latency IPTV servers strategically placed across 25 countries â€” delivering buffer-free 4K streaming wherever you are.
        </p>
      </motion.div>

      {/* Live stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-5 text-center"
          >
            <s.icon className="mx-auto mb-2 text-primary" size={24} />
            <div className="font-heading text-2xl font-bold gradient-text">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Live status header */}
      <motion.div
        className="max-w-6xl mx-auto mb-6 flex items-center justify-between glass-card px-5 py-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
          </span>
          <span className="text-sm font-semibold text-foreground">Live Server Status</span>
        </div>
        <span className="text-xs text-muted-foreground">All systems operational â€¢ Updated in real-time</span>
      </motion.div>

      {/* Server grid â€” interactive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {SERVERS.map((s, i) => (
          <motion.div
            key={s.country}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="glass-card p-4 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{s.flag}</span>
                <div>
                  <div className="font-heading font-bold text-sm text-foreground">{s.country}</div>
                  <div className="text-[10px] text-muted-foreground truncate max-w-[140px]">{s.city}</div>
                </div>
              </div>
              <span className="relative flex h-2 w-2 mt-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <Zap size={11} className="text-primary" />
                <span className="font-bold text-primary">{s.ping}</span>
              </div>
              <span className="text-muted-foreground">Load {s.load}%</span>
            </div>

            {/* Load bar */}
            <div className="mt-2 h-1 rounded-full bg-secondary/50 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.load}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.02 }}
                className={`h-full rounded-full ${
                  s.load < 50 ? "bg-success" : s.load < 70 ? "bg-accent" : "bg-primary"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Connect automatically to the closest server for lightning-fast IPTV streaming. Our intelligent routing ensures
        99.9% uptime and the lowest possible latency in your region.
      </motion.p>
    </div>
  </section>
);

export default ServersWorldwide;

