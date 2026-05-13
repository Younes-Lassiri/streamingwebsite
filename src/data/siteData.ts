// ====================================================
// CENTRALIZED SITE DATA â€” Edit all content here
// ====================================================

export const SITE_NAME = "8kstreamlive";
export const SITE_TAGLINE = "Premium IPTV Streaming â€” 25,000+ Channels, 120,000+ Movies";
export const SUPPORT_EMAIL = "support@8kstreamlive.com"; // REPLACE with real email
export const WHATSAPP_LINK = "https://wa.link/eps03z"; // REPLACE with real WhatsApp

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Channel List", href: "/channel-list" },
  { label: "Installation Guide", href: "/installation" },
];
export const SOCIAL_LINKS = {
  youtube:   "https://youtube.com/@8kstreamlive",    // REPLACE
  facebook:  "https://facebook.com/8kstreamlive",    // REPLACE
  instagram: "https://instagram.com/8kstreamlive",   // REPLACE
  x:         "https://x.com/8kstreamlive",           // REPLACE
};

export const HERO_STATS = [
  { value: "25,000+", label: "Live Channels" },
  { value: "120,000+", label: "Movies & Series" },
  { value: "5,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
];

export const PRICING_PLANS = [
  {
    id: "1month",
    duration: "1 Month",
    price: 14.99,
    currency: "$",
    perMonth: 14.99,
    features: [
      "4K Ultra HD Streaming",
      "25,000+ Live Channels",
      "120,000+ Movies & TV Shows",
      "Premium Sports & PPV Events",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Support",
      "Multi-Device Compatible",
    ],
    popular: false,
  },
  {
    id: "3months",
    duration: "3 Months",
    price: 29.99,
    currency: "$",
    perMonth: 10,
    features: [
      "4K Ultra HD Streaming",
      "25,000+ Live Channels",
      "120,000+ Movies & TV Shows",
      "Premium Sports & PPV Events",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Support",
      "Multi-Device Compatible",
    ],
    popular: false,
  },
  {
    id: "6months",
    duration: "6 Months",
    price: 49.99,
    currency: "$",
    perMonth: 8.33,
    features: [
      "4K Ultra HD Streaming",
      "25,000+ Live Channels",
      "120,000+ Movies & TV Shows",
      "Premium Sports & PPV Events",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Support",
      "Multi-Device Compatible",
    ],
    popular: true,
  },
  {
    id: "12months",
    duration: "12 Months",
    price: 69.99,
    currency: "$",
    perMonth: 5.83,
    features: [
      "4K Ultra HD Streaming",
      "25,000+ Live Channels",
      "120,000+ Movies & TV Shows",
      "Premium Sports & PPV Events",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Support",
      "Multi-Device Compatible",
    ],
    popular: false,
  },
  {
    id: "24months",
    duration: "24 Months",
    price: 119.99,
    currency: "$",
    perMonth: 5,
    features: [
      "4K Ultra HD Streaming",
      "25,000+ Live Channels",
      "120,000+ Movies & TV Shows",
      "Premium Sports & PPV Events",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Support",
      "Multi-Device Compatible",
    ],
    popular: false,
  },
];

/** Simultaneous connections — price per plan duration (USD total for the term) */
export type DeviceCount = 1 | 2 | 3 | 4;

export const PRICING_DEVICE_TIERS = [1, 2, 3, 4] as const satisfies readonly DeviceCount[];

export const PLAN_DEVICE_PRICES: Record<string, Record<DeviceCount, number>> = {
  "1month": { 1: 12.99, 2: 15.99, 3: 24.99, 4: 29.99 },
  "3months": { 1: 34.99, 2: 44.99, 3: 64.99, 4: 79.99 },
  "6months": { 1: 65.99, 2: 79.99, 3: 119.99, 4: 139.99 },
  "12months": { 1: 119.99, 2: 129.99, 3: 199.99, 4: 239.99 },
};

const CHECKOUT_FORM_BASE = "https://nflsubs.kneo.me/form";

/** Checkout URL per plan id × simultaneous devices (Kneo forms) */
export const PLAN_CHECKOUT_URLS: Record<string, Record<DeviceCount, string>> = {
  "1month": {
    1: `${CHECKOUT_FORM_BASE}/13505437e2e9cc82.html`,
    2: `${CHECKOUT_FORM_BASE}/180477d976fc40d1.html`,
    3: `${CHECKOUT_FORM_BASE}/13504586ff345c4c.html`,
    4: `${CHECKOUT_FORM_BASE}/180500ee0ca842d9.html`,
  },
  "3months": {
    1: `${CHECKOUT_FORM_BASE}/1350383db48d588c.html`,
    2: `${CHECKOUT_FORM_BASE}/18047899045356c2.html`,
    3: `${CHECKOUT_FORM_BASE}/1804813437704b6c.html`,
    4: `${CHECKOUT_FORM_BASE}/180501dbcfb98046.html`,
  },
  "6months": {
    1: `${CHECKOUT_FORM_BASE}/179956b399346513.html`,
    2: `${CHECKOUT_FORM_BASE}/180479108ef84d6c.html`,
    3: `${CHECKOUT_FORM_BASE}/180482979c24a06e.html`,
    4: `${CHECKOUT_FORM_BASE}/180483929681a6ab.html`,
  },
  "12months": {
    1: `${CHECKOUT_FORM_BASE}/1350514b937a81fe.html`,
    2: `${CHECKOUT_FORM_BASE}/180480981ef4cf2c.html`,
    3: `${CHECKOUT_FORM_BASE}/180499514d489d67.html`,
    4: `${CHECKOUT_FORM_BASE}/1804844a20cfe668.html`,
  },
};

export function getPlanCheckoutUrl(planId: string, devices: DeviceCount): string {
  const row = PLAN_CHECKOUT_URLS[planId];
  const url = row?.[devices];
  if (url) return url;
  return "/pricing";
}

export const PLAN_BILLING_MONTHS: Record<string, number> = {
  "1month": 1,
  "3months": 3,
  "6months": 6,
  "12months": 12,
  "24months": 24,
};

/** Strike-through “list” price: current + 15–55% (by plan & device count), stable for display */
export function getDisplayListPrice(
  current: number,
  planId: string,
  devices: DeviceCount
): number {
  const baseMarkup: Record<string, number> = {
    "1month": 0.48,
    "3months": 0.42,
    "6months": 0.36,
    "12months": 0.24,
    "24months": 0.3,
  };
  let pct = baseMarkup[planId] ?? 0.32;
  pct += (devices - 1) * 0.035;
  pct = Math.min(0.55, Math.max(0.15, pct));
  return Math.round(current * (1 + pct) * 100) / 100;
}

export function getDevicePlanPrice(planId: string, devices: DeviceCount): number | null {
  const row = PLAN_DEVICE_PRICES[planId];
  if (!row) return null;
  return row[devices] ?? null;
}

export function planSupportsDeviceTiers(planId: string): boolean {
  return planId in PLAN_DEVICE_PRICES;
}

export const DEVICES = [
  "Amazon Fire TV",
  "Android",
  "Apple TV",
  "Samsung",
  "LG",
  "Roku",
  "VIDAA",
  "Hisense",
  "Chromecast",
  "iOS",
];

export const STEPS = [
  {
    step: 1,
    title: "Choose Your Plan",
    description: "Browse our flexible subscription plans and select the one that fits your streaming needs.",
  },
  {
    step: 2,
    title: "Complete Your Order",
    description: "Quick and secure checkout. Receive your credentials via email within minutes.",
  },
  {
    step: 3,
    title: "Start Watching",
    description: "Set up your device in minutes and enjoy unlimited entertainment right away.",
  },
];

export const COMPARISON_DATA = {
  headers: ["Feature", "Traditional Cable", SITE_NAME, "Other IPTV"],
  rows: [
    { feature: "Device Flexibility", cable: false, us: true, other: false },
    { feature: "24/7 Support", cable: false, us: true, other: false },
    { feature: "Seamless Streaming", cable: true, us: true, other: false },
    { feature: "Customizable Packages", cable: false, us: true, other: false },
    { feature: "Works on Any Device", cable: false, us: true, other: false },
    { feature: "Affordable Pricing", cable: false, us: true, other: true },
    { feature: "Easy Setup", cable: false, us: true, other: false },
    { feature: "4K Quality", cable: true, us: true, other: false },
  ],
};

export const FEATURES = [
  {
    title: "Premium 8K IPTV Service",
    description: "Experience the future of television with crystal-clear streaming quality ranging from SD and HD to 4K and native 8K Ultra HD. Our service utilizes advanced H.265 compression to deliver high-bitrate video with minimal bandwidth, ensuring a cinematic viewing experience on every screen in your home.",
    icon: "Tv",
  },
  {
    title: "Vast VOD Library: 120,000+ Titles",
    description: "Your subscription replaces every other streaming app. Access a massive on-demand library featuring over 120,000 movies and TV series. We update our database daily with the latest 2026 cinema releases, trending Netflix originals, and complete HBO box sets, all available in stunning high definition with multi-language subtitles.",
    icon: "Film",
  },
  {
    title: "Global Live IPTV Channels",
    description: "Broaden your horizons with over 25,000 live channels from the US, UK, Canada, and 80+ other countries. Our intuitive Electronic Program Guide (EPG) ensures you never miss a show, while our 7-day catch-up TV functionality allows you to rewind and watch previous broadcasts at your own convenience.",
    icon: "Radio",
  },
  {
    title: "The Ultimate Live Sports Hub",
    description: "Designed for the hardcore sports fan, 8kstreamlive offers comprehensive coverage of the NFL, NBA, MLB, NHL, and every major soccer league. Watch UFC Pay-Per-View events, F1 racing, and the 2026 World Cup in 8K resolution with ultra-low latency, meaning you see the action before the spoilers hit social media.",
    icon: "Trophy",
  },
  {
    title: "Plug-and-Play Easy Setup",
    description: "No technical degree required. Our service offers a seamless IPTV setup across all modern devices including Amazon Fire TV Stick, Android boxes, Smart TVs (Samsung/LG), tablets, and iPhones. We provide detailed, illustrated step-by-step guides and guarantee instant activation so you can start watching within minutes.",
    icon: "Settings",
  },
  {
    title: "24/7 Dedicated Support & Security",
    description: "Rest easy with our 'Ra7a' commitment. We provide 24/7 American-led customer support to handle technical assistance, billing, and setup troubleshooting. Our infrastructure features built-in Anti-Freeze 4.0 technology and VPN-friendly servers to ensure your connection remains private, secure, and buffer-free.",
    icon: "Headphones",
  },
];

export const FAQS = [
  {
    q: "What is IPTV and how does it work?",
    a: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. With 8kstreamlive, you stream live TV, movies, and sports directly through your internet connection on any compatible device â€” Smart TV, Fire Stick, Android, iPhone, and more.",
  },
  {
    q: "How do I get started with 8kstreamlive?",
    a: "Getting started is simple: choose a subscription plan, complete the secure checkout, and receive your login credentials via email within minutes. Install a compatible IPTV app on your device, enter your credentials, and start streaming instantly.",
  },
  {
    q: "What devices are compatible with 8kstreamlive?",
    a: "8kstreamlive works on virtually all devices: Amazon Fire TV & Fire Stick, Android phones & tablets, Samsung & LG Smart TVs, Apple TV, iPhone & iPad, Roku, Chromecast, MAG boxes, Windows & Mac computers, and any device that supports IPTV applications.",
  },
  {
    q: "How many channels does 8kstreamlive offer?",
    a: "8kstreamlive provides access to over 25,000 live TV channels from 80+ countries, plus 120,000+ on-demand movies and TV series. Our library includes sports, entertainment, news, kids content, and international programming in multiple languages.",
  },
  {
    q: "Can I watch NFL, NBA, MLB, and NHL games live?",
    a: "Yes! 8kstreamlive includes comprehensive live sports coverage. Watch NFL games, NBA basketball, MLB baseball, NHL hockey, Premier League soccer, UFC fights, WWE events, and more â€” all in HD and 4K quality with zero blackouts.",
  },
  {
    q: "What internet speed do I need for IPTV streaming?",
    a: "For standard HD streaming, we recommend at least 10 Mbps. For full 4K Ultra HD quality, 25 Mbps or higher is ideal. A stable wired ethernet connection provides the best experience, though strong Wi-Fi works great too.",
  },
  {
    q: "Is 8kstreamlive service reliable? What about buffering?",
    a: "8kstreamlive maintains 99.9% uptime with 25 servers worldwide for ultra-low latency streaming. Our infrastructure is optimized for zero-buffering performance. Most users experience smooth, uninterrupted streaming on all devices.",
  },
  {
    q: "How fast is activation after purchase?",
    a: "Activation is typically instant. Once your payment is confirmed, you'll receive your login credentials within minutes via email. Most customers are watching their favorite content within 5-10 minutes of placing their order.",
  },
  {
    q: "Do I need any special equipment for IPTV?",
    a: "No special equipment is required. You just need a compatible device (Smart TV, streaming stick, phone, tablet, or computer) and a stable internet connection. If you don't have a streaming device, an Amazon Fire Stick is the most popular and affordable option.",
  },
  {
    q: "Can I watch on multiple devices at the same time?",
    a: "Yes! All 8kstreamlive plans include multi-device support. You can watch on multiple screens simultaneously, making it perfect for families. Each plan specifies the number of concurrent connections allowed.",
  },
  {
    q: "Is there an Electronic Program Guide (EPG)?",
    a: "Yes, 8kstreamlive includes a full Electronic Program Guide (EPG) with program schedules, descriptions, and catch-up TV functionality. You can see what's currently airing, what's coming up, and even watch shows you missed.",
  },
  {
    q: "How does 8kstreamlive compare to cable TV?",
    a: "8kstreamlive offers significantly more content at a fraction of the cost. While cable TV averages $100+/month with limited channels, 8kstreamlive starts at just $5.38/month and includes 25,000+ channels, 120,000+ movies, and works on any device â€” no contracts, no hidden fees.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a satisfaction guarantee. If you're not happy with our service, contact our 24/7 support team within the first 7 days for a full refund. We want every customer to be completely satisfied with their streaming experience.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a free trial so you can experience 8kstreamlive before committing to a paid plan. Try our full channel lineup, sports coverage, and movie library risk-free to see why thousands of viewers have made the switch.",
  },
  {
    q: "How do I set up IPTV on my Amazon Fire Stick?",
    a: "Setting up on Fire Stick is easy: Go to Settings > My Fire TV > Developer Options, enable 'Apps from Unknown Sources', download the recommended IPTV app, enter your login credentials, and start streaming. We provide detailed step-by-step guides on our Installation page.",
  },
  {
    q: "Is my payment information secure?",
    a: "Absolutely. We use industry-standard SSL encryption and secure payment processing. Your payment information is never stored on our servers. We accept multiple payment methods for your convenience and security.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time with no cancellation fees or penalties. There are no long-term contracts. Your access continues until the end of your current billing period.",
  },

  {
    q: "Do you provide customer support?",
    a: "Yes! 8kstreamlive offers 24/7 customer support via email and WhatsApp. Our dedicated support team helps with setup, troubleshooting, billing questions, and any other issues. Most inquiries are resolved within minutes.",
  },
  {
    q: "What countries are covered in your channel list?",
    a: "8kstreamlive covers 80+ countries including the USA, UK, Canada, Germany, France, Spain, Italy, Brazil, Middle East, India, and many more. Visit our Channel List page for a complete breakdown of available channels by country.",
  },

  {
    q: "Does 8kstreamlive include PPV (Pay-Per-View) events?",
    a: "Yes! All 8kstreamlive plans include access to premium PPV events including UFC fights, boxing matches, WWE events, and special sporting events â€” at no additional cost. Watch every major PPV event live in HD or 4K.",
  },
  {
    q: "What is IPTV and how exactly does it work in 2026?",
    a: "IPTV (Internet Protocol Television) is the modern alternative to traditional cable and satellite. Instead of receiving signals through a dish or a copper wire, 8kstreamlive delivers high-quality video data packets over your existing internet connection. This allows for much higher resolutions like 8K and 4K UHD. Once you subscribe, you simply use an IPTV player app to 'tune into' our global server network, giving you instant access to global media without the need for expensive hardware or long-term contracts.",
  },
  {
    q: "Is 8kstreamlive reliable during high-traffic events?",
    a: "Absolutely. Most 'budget' providers crash during the Super Bowl or World Cup because their servers get overloaded. 8kstreamlive uses a sophisticated Load-Balancing system across 25+ global edge servers. When one server reaches 70% capacity, our system automatically routes new users to a fresh server. This, combined with our Anti-Freeze 4.0 technology, ensures that your stream remains stable, even when millions of people are watching the same match simultaneously.",
  },
  {
    q: "Do I need a VPN to use your IPTV service?",
    a: "While 8kstreamlive does not require a VPN to function, we are a VPN-friendly provider. Some Internet Service Providers (ISPs) may intentionally 'throttle' or slow down your connection when they detect high-bandwidth streaming. Using a VPN can bypass this throttling and provide a smoother experience. Our servers are optimized to work perfectly with popular VPNs like NordVPN, ExpressVPN, and Surfshark, ensuring your privacy and speed are always protected.",
  },
  {
    q: "How does the 8K upscaling technology work?",
    a: "We pride ourselves on being industry leaders in visual quality. For channels that are broadcast in 1080p or 4K, our servers utilize real-time AI upscaling to enhance the detail and color depth before it reaches your screen. This results in a sharper image that takes full advantage of your 8K Smart TV's capabilities. Combined with our high-bitrate feeds, you will notice a significant difference in clarity compared to standard cable or other low-quality IPTV providers.",
  },
  {
    q: "What should I do if my service is interrupted or 'shut down'?",
    a: "Your 'Ra7a' (peace of mind) is our top priority. In the highly unlikely event that a specific server link is blocked or experiences downtime, do not worry. Our technical team monitors the network 24/7. Simply contact us via WhatsApp or Email, and we will immediately provide you with an alternative 'backup' line or new credentials. We maintain multiple standby servers to ensure that you stay connected to your entertainment while we resolve any backend issues. We won't leave you without service!",
  }
];

export const WHY_CHOOSE = [
  { title: "Easy Setup", description: "Get started in minutes with our simple setup guides.", icon: "Zap" },
  { title: "Premium Quality", description: "Crystal-clear 4K Ultra HD streaming experience.", icon: "Sparkles" },
  { title: "Wide Variety", description: "Sports, movies, series, news, and family content.", icon: "Layers" },
  { title: "Sports First", description: "Comprehensive live sports coverage from major leagues.", icon: "Trophy" },
  { title: "Multi-Device", description: "Watch on your TV, phone, tablet, or computer.", icon: "Monitor" },
  { title: "Flexible Plans", description: "Choose the plan that fits your budget and needs.", icon: "CreditCard" },
];

// PLACEHOLDER â€” Replace with real approved testimonials
export const TESTIMONIALS = [
  {
    name: "Mike R.",
    location: "Texas",
    rating: 5,
    message: "Best streaming service I've used. Setup was incredibly easy and the picture quality is amazing. Highly recommend!",
  },
  {
    name: "Sarah L.",
    location: "California",
    rating: 5,
    message: "I cut the cord months ago and haven't looked back. The sports coverage is unbeatable and the price is right.",
  },
  {
    name: "James K.",
    location: "New York",
    rating: 5,
    message: "Customer support is top-notch. Had a question about setup and they helped me within minutes on WhatsApp.",
  },
  {
    name: "David M.",
    location: "Florida",
    rating: 5,
    message: "The variety of content is incredible. My whole family finds something to watch. Great value for the price.",
  },
  {
    name: "Emily W.",
    location: "Ohio",
    rating: 4,
    message: "Smooth streaming with no buffering. Works perfectly on my Fire Stick and Samsung TV. Very happy customer!",
  },
  {
    name: "Chris P.",
    location: "Michigan",
    rating: 5,
    message: "Switched from cable and saving a ton. The channel selection is massive and the interface is clean.",
  },
];

// PLACEHOLDER â€” Replace with actual channel/network names pending legal approval
export const SPORTS_NETWORKS = [
  "ABC", "CBS", "NBC", "FOX", "ESPN+", "DAZN", "PBS", "and more"
];

export const INSTALLATION_DEVICES = [
  {
    name: "Amazon Fire TV / Fire Stick",
    steps: [
      "Go to Settings > My Fire TV > Developer Options",
      "Enable 'Apps from Unknown Sources'",
      "Download the recommended IPTV app from our guide",
      "Open the app and enter your login credentials",
      "Start streaming!"
    ],
  },
  {
    name: "Android Devices",
    steps: [
      "Open the Google Play Store",
      "Search for the recommended IPTV player app",
      "Install and open the app",
      "Enter your login credentials",
      "Enjoy your content!"
    ],
  },
  {
    name: "Smart TV (Samsung / LG)",
    steps: [
      "Open your TV's app store",
      "Search for an IPTV player application",
      "Install and launch the app",
      "Enter your login credentials",
      "Start watching!"
    ],
  },
  {
    name: "Apple TV / iOS",
    steps: [
      "Open the App Store",
      "Search for the recommended IPTV player",
      "Download and install the app",
      "Enter your credentials",
      "Enjoy streaming!"
    ],
  },
  {
    name: "Roku",
    steps: [
      "Go to the Roku Channel Store",
      "Search for a compatible IPTV application",
      "Add the channel to your Roku",
      "Open and enter your credentials",
      "Start watching!"
    ],
  },
];

export const TROUBLESHOOTING = [
  {
    issue: "Buffering or Freezing",
    solution: "Check your internet speed (minimum 10 Mbps for HD, 25 Mbps for 4K). Try using a wired ethernet connection. Restart your device and router.",
  },
  {
    issue: "App Not Loading",
    solution: "Clear the app cache and data. Reinstall the application. Make sure your device software is up to date.",
  },
  {
    issue: "Login Issues",
    solution: "Double-check your credentials from the email we sent. Make sure there are no extra spaces. Contact support if the issue persists.",
  },
  {
    issue: "No Sound or Picture",
    solution: "Check your device audio settings. Try switching to a different channel. Restart the app. Ensure your device supports the stream format.",
  },
];

