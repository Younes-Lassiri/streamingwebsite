// ====================================================
// CENTRALIZED SITE DATA — Edit all content here
// ====================================================

export const SITE_NAME = "IPTVNFL";
export const SITE_TAGLINE = "Premium IPTV Streaming — 25,000+ Channels, 120,000+ Movies";
export const SUPPORT_EMAIL = "support@iptvnfl.com"; // REPLACE with real email
export const WHATSAPP_LINK = "https://wa.me/1234567890"; // REPLACE with real WhatsApp

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Channel List", href: "/channel-list" },
  { label: "Installation Guide", href: "/installation" },
  { label: "Contact Us", href: "/contact" },
];

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
    price: 19,
    currency: "$",
    perMonth: 19,
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
    price: 29,
    currency: "$",
    perMonth: 9.67,
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
    price: 49,
    currency: "$",
    perMonth: 8.17,
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
    price: 79,
    currency: "$",
    perMonth: 6.58,
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
    price: 129,
    currency: "$",
    perMonth: 5.38,
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
    title: "Premium IPTV Service",
    description: "Experience crystal-clear streaming quality from SD to 4K Ultra HD. Zero buffering performance on all devices for an unmatched viewing experience.",
    icon: "Tv",
  },
  {
    title: "Unlimited Movies & Series",
    description: "Access over 120,000 movies and TV series instantly. From latest releases to classic films and popular series — all available on-demand.",
    icon: "Film",
  },
  {
    title: "Live IPTV Channels",
    description: "Stream over 25,000 live channels from the US and worldwide. Sports, news, entertainment with full EPG and catch-up TV functionality.",
    icon: "Radio",
  },
  {
    title: "Live Sports IPTV",
    description: "Never miss a game with comprehensive sports coverage. Live football, basketball, baseball, hockey and more from major leagues.",
    icon: "Trophy",
  },
  {
    title: "Easy IPTV Setup",
    description: "Simple IPTV setup on all devices — Fire Stick, Android boxes, Smart TVs, tablets, and phones. Step-by-step guides and instant activation.",
    icon: "Settings",
  },
  {
    title: "24/7 American Support",
    description: "Round-the-clock support from our American customer service team. Technical assistance, billing support, and troubleshooting anytime you need help.",
    icon: "Headphones",
  },
];

export const FAQS = [
  {
    q: "What is IPTV and how does it work?",
    a: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. With IPTVNFL, you stream live TV, movies, and sports directly through your internet connection on any compatible device — Smart TV, Fire Stick, Android, iPhone, and more.",
  },
  {
    q: "How do I get started with IPTVNFL?",
    a: "Getting started is simple: choose a subscription plan, complete the secure checkout, and receive your login credentials via email within minutes. Install a compatible IPTV app on your device, enter your credentials, and start streaming instantly.",
  },
  {
    q: "What devices are compatible with IPTVNFL?",
    a: "IPTVNFL works on virtually all devices: Amazon Fire TV & Fire Stick, Android phones & tablets, Samsung & LG Smart TVs, Apple TV, iPhone & iPad, Roku, Chromecast, MAG boxes, Windows & Mac computers, and any device that supports IPTV applications.",
  },
  {
    q: "How many channels does IPTVNFL offer?",
    a: "IPTVNFL provides access to over 25,000 live TV channels from 80+ countries, plus 120,000+ on-demand movies and TV series. Our library includes sports, entertainment, news, kids content, and international programming in multiple languages.",
  },
  {
    q: "Can I watch NFL, NBA, MLB, and NHL games live?",
    a: "Yes! IPTVNFL includes comprehensive live sports coverage. Watch NFL games, NBA basketball, MLB baseball, NHL hockey, Premier League soccer, UFC fights, WWE events, and more — all in HD and 4K quality with zero blackouts.",
  },
  {
    q: "What internet speed do I need for IPTV streaming?",
    a: "For standard HD streaming, we recommend at least 10 Mbps. For full 4K Ultra HD quality, 25 Mbps or higher is ideal. A stable wired ethernet connection provides the best experience, though strong Wi-Fi works great too.",
  },
  {
    q: "Is IPTVNFL service reliable? What about buffering?",
    a: "IPTVNFL maintains 99.9% uptime with 25 servers worldwide for ultra-low latency streaming. Our infrastructure is optimized for zero-buffering performance. Most users experience smooth, uninterrupted streaming on all devices.",
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
    a: "Yes! All IPTVNFL plans include multi-device support. You can watch on multiple screens simultaneously, making it perfect for families. Each plan specifies the number of concurrent connections allowed.",
  },
  {
    q: "Is there an Electronic Program Guide (EPG)?",
    a: "Yes, IPTVNFL includes a full Electronic Program Guide (EPG) with program schedules, descriptions, and catch-up TV functionality. You can see what's currently airing, what's coming up, and even watch shows you missed.",
  },
  {
    q: "How does IPTVNFL compare to cable TV?",
    a: "IPTVNFL offers significantly more content at a fraction of the cost. While cable TV averages $100+/month with limited channels, IPTVNFL starts at just $5.38/month and includes 25,000+ channels, 120,000+ movies, and works on any device — no contracts, no hidden fees.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer a satisfaction guarantee. If you're not happy with our service, contact our 24/7 support team within the first 7 days for a full refund. We want every customer to be completely satisfied with their streaming experience.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a free trial so you can experience IPTVNFL before committing to a paid plan. Try our full channel lineup, sports coverage, and movie library risk-free to see why thousands of viewers have made the switch.",
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
    a: "Yes! IPTVNFL offers 24/7 customer support via email and WhatsApp. Our dedicated support team helps with setup, troubleshooting, billing questions, and any other issues. Most inquiries are resolved within minutes.",
  },
  {
    q: "What countries are covered in your channel list?",
    a: "IPTVNFL covers 80+ countries including the USA, UK, Canada, Germany, France, Spain, Italy, Brazil, Middle East, India, and many more. Visit our Channel List page for a complete breakdown of available channels by country.",
  },
  {
    q: "Does IPTVNFL include PPV (Pay-Per-View) events?",
    a: "Yes! All IPTVNFL plans include access to premium PPV events including UFC fights, boxing matches, WWE events, and special sporting events — at no additional cost. Watch every major PPV event live in HD or 4K.",
  },
];

export const WHY_CHOOSE = [
  { title: "Easy Setup", description: "Get started in minutes with our simple setup guides.", icon: "Zap" },
  { title: "Premium Quality", description: "Crystal-clear 4K Ultra HD streaming experience.", icon: "Sparkles" },
  { title: "Wide Variety", description: "Sports, movies, series, news, and family content.", icon: "Layers" },
  { title: "Sports First", description: "Comprehensive live sports coverage from major leagues.", icon: "Trophy" },
  { title: "Multi-Device", description: "Watch on your TV, phone, tablet, or computer.", icon: "Monitor" },
  { title: "Flexible Plans", description: "Choose the plan that fits your budget and needs.", icon: "CreditCard" },
];

// PLACEHOLDER — Replace with real approved testimonials
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

// PLACEHOLDER — Replace with actual channel/network names pending legal approval
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
