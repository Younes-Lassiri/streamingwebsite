"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { m } from "framer-motion";
import { Search, Globe, Tv, Film, Trophy, Radio, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const CHANNEL_DATA: Record<string, { icon: string; channels: string[] }> = {
  "United States": {
    icon: "ðŸ‡ºðŸ‡¸",
    channels: [
      "ESPN HD", "ESPN2 HD", "ESPN+ HD", "ESPN News", "ESPN Deportes",
      "FOX Sports 1 HD", "FOX Sports 2 HD", "FOX HD", "FOX News HD",
      "ABC HD", "CBS HD", "NBC HD", "NBC Sports HD",
      "CNN HD", "CNN International", "MSNBC HD", "CNBC HD",
      "HBO HD", "HBO 2 HD", "HBO Family HD", "HBO Signature HD",
      "Showtime HD", "Showtime 2 HD", "Starz HD", "Starz Encore HD",
      "TNT HD", "TBS HD", "USA Network HD", "FX HD", "FXX HD",
      "AMC HD", "Bravo HD", "E! Entertainment HD", "Lifetime HD",
      "Comedy Central HD", "MTV HD", "VH1 HD", "BET HD",
      "Discovery HD", "National Geographic HD", "History HD", "A&E HD",
      "Hallmark Channel HD", "Food Network HD", "HGTV HD", "TLC HD",
      "Cartoon Network HD", "Nickelodeon HD", "Disney Channel HD", "Disney XD HD",
      "NFL Network HD", "NFL RedZone HD", "NBA TV HD", "MLB Network HD", "NHL Network HD",
      "beIN Sports HD", "beIN Sports 2 HD", "DAZN 1 HD", "DAZN 2 HD",
      "Paramount Network HD", "Syfy HD", "Oxygen HD", "Freeform HD",
    ],
  },
  "United Kingdom": {
    icon: "ðŸ‡¬ðŸ‡§",
    channels: [
      "BBC One HD", "BBC Two HD", "BBC Three HD", "BBC Four HD", "BBC News HD",
      "ITV 1 HD", "ITV 2 HD", "ITV 3 HD", "ITV 4 HD", "ITV Be HD",
      "Channel 4 HD", "Channel 5 HD", "E4 HD", "More4 HD",
      "Sky Sports Main Event HD", "Sky Sports Premier League HD", "Sky Sports Football HD",
      "Sky Sports F1 HD", "Sky Sports Cricket HD", "Sky Sports Golf HD",
      "Sky Cinema Premiere HD", "Sky Cinema Action HD", "Sky Cinema Comedy HD",
      "Sky One HD", "Sky Atlantic HD", "Sky Arts HD",
      "BT Sport 1 HD", "BT Sport 2 HD", "BT Sport 3 HD", "BT Sport ESPN HD",
      "TNT Sports 1 HD", "TNT Sports 2 HD",
      "Dave HD", "Gold HD", "Comedy Central UK HD",
    ],
  },
  Canada: {
    icon: "ðŸ‡¨ðŸ‡¦",
    channels: [
      "TSN 1 HD", "TSN 2 HD", "TSN 3 HD", "TSN 4 HD", "TSN 5 HD",
      "Sportsnet One HD", "Sportsnet Ontario HD", "Sportsnet East HD", "Sportsnet West HD",
      "CBC HD", "CTV HD", "CTV Two HD", "Global HD",
      "Crave HD", "Super Channel HD", "Movie Central HD",
      "Discovery Canada HD", "History Canada HD", "National Geographic Canada HD",
      "Showcase HD", "Space HD", "W Network HD", "Treehouse HD",
    ],
  },
  Germany: {
    icon: "ðŸ‡©ðŸ‡ª",
    channels: [
      "Das Erste HD", "ZDF HD", "RTL HD", "RTL II HD", "SAT.1 HD",
      "ProSieben HD", "VOX HD", "ARTE HD", "3SAT HD",
      "Sky Sport News HD", "Sky Sport F1 HD", "DAZN 1 HD", "DAZN 2 HD",
      "Eurosport 1 HD", "Eurosport 2 HD",
      "N-TV HD", "BILD HD", "WELT HD",
      "Kabel Eins HD", "SIXX HD", "ProSieben MAXX HD",
    ],
  },
  France: {
    icon: "ðŸ‡«ðŸ‡·",
    channels: [
      "TF1 HD", "France 2 HD", "France 3 HD", "France 5 HD",
      "M6 HD", "Canal+ HD", "Canal+ Sport HD", "Canal+ Cinema HD",
      "beIN Sports 1 HD", "beIN Sports 2 HD", "beIN Sports 3 HD",
      "RMC Sport 1 HD", "RMC Sport 2 HD",
      "BFMTV HD", "CNews HD", "LCI HD",
      "Arte HD", "TMC HD", "TFX HD", "W9 HD",
    ],
  },
  Spain: {
    icon: "ðŸ‡ªðŸ‡¸",
    channels: [
      "La 1 HD", "La 2 HD", "Antena 3 HD", "Cuatro HD", "Telecinco HD",
      "La Sexta HD", "Canal+ Liga HD", "Movistar+ Liga HD",
      "DAZN Spain HD", "Gol TV HD", "beIN Sports Spain HD",
      "TVE 24h HD", "Neox HD", "Nova HD", "Energy HD",
    ],
  },
  Italy: {
    icon: "ðŸ‡®ðŸ‡¹",
    channels: [
      "Rai 1 HD", "Rai 2 HD", "Rai 3 HD", "Rai Sport HD",
      "Canale 5 HD", "Italia 1 HD", "Rete 4 HD",
      "Sky Sport Uno HD", "Sky Sport Serie A HD", "Sky Sport F1 HD",
      "DAZN Italy HD", "Eurosport 1 HD",
      "La7 HD", "TV8 HD", "Nove HD",
    ],
  },
  Brazil: {
    icon: "ðŸ‡§ðŸ‡·",
    channels: [
      "Globo HD", "SBT HD", "Record HD", "Band HD",
      "SporTV HD", "SporTV 2 HD", "SporTV 3 HD",
      "ESPN Brasil HD", "Fox Sports Brasil HD",
      "Premiere FC HD", "Combate HD",
      "GloboNews HD", "BandNews HD", "CNN Brasil HD",
    ],
  },
  "Middle East & Arabic": {
    icon: "ðŸ‡¸ðŸ‡¦",
    channels: [
      "MBC 1 HD", "MBC 2 HD", "MBC 3 HD", "MBC 4 HD", "MBC Action HD",
      "Al Jazeera HD", "Al Jazeera English HD", "Al Arabiya HD",
      "beIN Sports 1 AR HD", "beIN Sports 2 AR HD", "beIN Sports 3 AR HD",
      "beIN Sports Premium 1 HD", "beIN Sports Premium 2 HD",
      "OSN Movies HD", "OSN Series HD", "OSN Comedy HD",
      "Dubai TV HD", "Abu Dhabi TV HD", "Rotana Cinema HD", "Rotana Classic HD",
    ],
  },
  India: {
    icon: "ðŸ‡®ðŸ‡³",
    channels: [
      "Star Sports 1 HD", "Star Sports 2 HD", "Star Sports 3 HD",
      "Sony Sports 1 HD", "Sony Sports 2 HD",
      "Star Plus HD", "Star Gold HD", "Sony TV HD", "Zee TV HD",
      "Colors TV HD", "SAB TV HD",
      "NDTV 24x7 HD", "Times Now HD", "Republic TV HD",
      "SET Max HD", "Sony PIX HD", "Star Movies HD",
    ],
  },
  "Sports Packages": {
    icon: "ðŸ†",
    channels: [
      "NFL Network HD", "NFL RedZone HD", "NFL Sunday Ticket",
      "NBA League Pass", "NBA TV HD",
      "MLB Network HD", "MLB Extra Innings",
      "NHL Network HD", "NHL Center Ice",
      "MLS Season Pass HD",
      "UFC Fight Pass HD", "WWE Network HD",
      "Premier League TV HD", "La Liga TV HD", "Serie A TV HD", "Bundesliga TV HD",
      "Champions League HD", "Europa League HD",
      "Formula 1 TV HD", "NASCAR HD",
      "Golf Channel HD", "Tennis Channel HD",
      "Cricket HD", "Rugby HD",
    ],
  },
  "Movies & VOD": {
    icon: "ðŸŽ¬",
    channels: [
      "120,000+ On-Demand Movies",
      "Latest Hollywood Releases",
      "Bollywood Collection",
      "International Cinema",
      "Kids & Family Movies",
      "Action & Adventure",
      "Comedy Collection",
      "Horror & Thriller",
      "Drama & Romance",
      "Documentary Library",
      "Anime Collection",
      "Classic Movies Library",
    ],
  },
};

const ChannelList = () => {
  const [search, setSearch] = useState("");
  const [expandedCountry, setExpandedCountry] = useState<string | null>("United States");

  const filteredData = useMemo(() => {
    if (!search.trim()) return CHANNEL_DATA;
    const q = search.toLowerCase();
    const result: typeof CHANNEL_DATA = {};
    for (const [country, data] of Object.entries(CHANNEL_DATA)) {
      const matched = data.channels.filter((ch) => ch.toLowerCase().includes(q));
      if (matched.length > 0 || country.toLowerCase().includes(q)) {
        result[country] = { ...data, channels: matched.length > 0 ? matched : data.channels };
      }
    }
    return result;
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-page pb-16">
        <div className="container">
          <m.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-badge mb-4 inline-flex">ðŸ“º Full Channel List</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">
              25,000+ <span className="gradient-text">Live Channels</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Browse our massive selection of live TV channels, sports packages, and on-demand content from over 80 countries worldwide. The best IPTV channel list available.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-10">
              {[
                { icon: <Globe size={20} />, label: "80+ Countries", value: "Worldwide" },
                { icon: <Tv size={20} />, label: "Live Channels", value: "25,000+" },
                { icon: <Film size={20} />, label: "Movies & VOD", value: "120,000+" },
                { icon: <Trophy size={20} />, label: "Sports Events", value: "All Major" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <div className="text-primary mb-1 flex justify-center">{s.icon}</div>
                  <div className="font-heading font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search channels, countries, or sports..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              {search && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  {Object.values(filteredData).reduce((s, d) => s + d.channels.length, 0)} results
                </span>
              )}
            </div>
          </m.div>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="pb-24">
        <div className="container max-w-5xl">
          <div className="space-y-3">
            {Object.entries(filteredData).map(([country, data], idx) => {
              const isExpanded = expandedCountry === country || !!search.trim();
              return (
                <m.div
                  key={country}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCountry(isExpanded && !search ? null : country)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{data.icon}</span>
                      <div>
                        <h3 className="font-heading font-bold text-foreground">{country}</h3>
                        <span className="text-xs text-muted-foreground">{data.channels.length} channels</span>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-5 border-t border-border/30">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 pt-4">
                        {data.channels.map((ch) => (
                          <div key={ch} className="flex items-center gap-2 text-sm text-muted-foreground py-1.5 px-2 rounded-lg hover:bg-secondary/60 transition-colors">
                            <Radio size={10} className="text-success shrink-0" />
                            {ch}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <m.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4 text-sm">
              This is just a preview â€” our full list includes 25,000+ channels from 80+ countries.
            </p>
            <Link href="/pricing" className="btn-primary inline-flex items-center gap-2">
              Get Access to All Channels
            </Link>
          </m.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ChannelList;




