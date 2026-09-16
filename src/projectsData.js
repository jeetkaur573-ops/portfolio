export const portfolioProjects = [
  {
    id: "dating-app",
    title: "Singles Connect — Dating & Matchmaking App",
    category: "social",
    categoryName: "Social & Dating",
    duration: "2-3 Months",
    costRange: "$2,500 – $3,500",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.single.connect.app.dating",
    packageId: "com.single.connect.app.dating",
    techStack: ["Flutter", "BLoC Clean Code", "Firebase", "WebSockets", "Geohash", "RevenueCat", "Stripe"],
    accentGradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    icon: "fa-heart",
    accentColor: "#ec4899",
    shortDesc: "Full-stack geosocial discovery app with 60 FPS gesture swipe cards, sub-second WebSocket chat telemetry, and VIP subscription engine.",
    caseStudyDoc: "SinglesConnect_Dating_App_Case_Study.pdf",
    features: [
      "Interactive 60 FPS gestural Tinder/Bumble card-swipe discovery",
      "Instant spatial Geohash proximity-based match calculations",
      "End-to-end encrypted 1-on-1 real-time chat with voice notes & media",
      "RevenueCat & Apple/Google In-App Purchases for VIP tiers & boosts",
      "Automated photo verification and profile content moderation",
      "Native push notifications (FCM & APNs deep linking)"
    ],
    challenges: [
      "High-FPS Gestural Swipe Animations: Achieving 60 FPS fluid physics without frame drops on low-end hardware.",
      "Real-Time Chat Telemetry: Handling low-latency 1-on-1 messaging, read receipts, and online presence sync.",
      "Spatial Proximity Efficiency: Querying nearby profiles dynamically within customizable distance radiuses."
    ],
    solutions: [
      "Engineered cross-platform Flutter application with BLoC clean architecture for decoupled state handling.",
      "Implemented WebSockets and Firebase Realtime Database for sub-200ms messaging latency.",
      "Calculated spatial proximity queries using Geohash algorithms without server-side performance lag.",
      "Integrated RevenueCat for VIP subscription tiers, profile boosts, and super-likes."
    ],
    metrics: {
      uptime: "99.9%",
      fps: "60 FPS",
      engagement: "+85%",
      storeRating: "4.9★"
    }
  },
  {
    id: "pwa-conversion",
    title: "AuraMi App — Web/PWA to Native iOS & Android",
    category: "web-to-app",
    categoryName: "Web & PWA to Native",
    duration: "1-2 Months",
    costRange: "$1,500 – $2,500",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.aurami",
    packageId: "com.app.aurami",
    techStack: ["Capacitor Framework", "Swift (iOS)", "Java/Kotlin (Android)", "FCM", "APNs", "Biometrics"],
    accentGradient: "linear-gradient(135deg, #0284c7, #06b6d4)",
    icon: "fa-mobile-screen-button",
    accentColor: "#38bdf8",
    shortDesc: "Complete full-stack transformation of a PWA into store-approved native iOS & Android applications with native hardware bridges.",
    caseStudyDoc: "AuraMi_PWA_to_Native_App_Case_Study.pdf",
    features: [
      "Custom Capacitor native Swift & Java runtime bridge integration",
      "Native Face ID & Touch ID biometric authentication in under 1 second",
      "Firebase Cloud Messaging (FCM) & APNs deep-linked background alerts",
      "Offline SQLite persistence and service worker boot caching",
      "Hardware camera access & filesystem image compression bridge",
      "Passed Apple App Store Review Guideline 4.2 compliance checks"
    ],
    challenges: [
      "Native API Hardware Bridging: Exposing FaceID, camera, and local filesystem smoothly to web webview.",
      "Store Guideline 4.2 Compliance: Avoiding simple webview rejections on the Apple App Store.",
      "Push Notification Reliability: Configuring background push alerts across locked iOS/Android device states."
    ],
    solutions: [
      "Built custom native Swift and Kotlin plugin bridge controllers over Capacitor runtime.",
      "Configured low-latency FCM & APNs push telemetry with deep-linked internal route handlers.",
      "Integrated native pull-to-refresh gestures, offline caching, and biometric hardware authentication.",
      "Handled app provisioning, signing, and 100% successful Apple App Store & Google Play launch."
    ],
    metrics: {
      devTimeSaved: "70%",
      approvalRate: "100%",
      storeRating: "4.9★",
      memoryLeak: "0%"
    }
  },
  {
    id: "cab-booking",
    title: "SASA Cab — On-Demand Ride Hailing Platform",
    category: "mobility",
    categoryName: "Mobility & Ride Hailing",
    duration: "3 Months (90 Days)",
    costRange: "$3,500 – $5,000",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sasa.user.android",
    driverPlayStoreUrl: "https://play.google.com/store/apps/details?id=com.sasa.driver.android",
    packageId: "com.sasa.user.android / com.sasa.driver.android",
    techStack: ["Flutter", "Google Maps SDK", "WebSockets", "Node.js REST", "Firebase", "Stripe"],
    accentGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    icon: "fa-taxi",
    accentColor: "#f59e0b",
    shortDesc: "Live enterprise ride platform featuring SASA Passenger App & SASA Driver App with sub-second live vehicle position tracking and automated fare dispatching.",
    caseStudyDoc: "SASA_Cab_RideHailing_Case_Study.pdf",
    features: [
      "Synchronized dual apps live on Google Play: SASA Passenger App & SASA Driver App",
      "Live vehicle tracking on Google Maps with smooth polyline route animation",
      "Dynamic fare engine (Distance, duration, vehicle tier, and surge multipliers)",
      "Stripe payment gateway integration with in-app wallet & split receipts",
      "Driver dispatch telemetry, ride accept/reject timer, & navigation mode",
      "Enterprise Web Admin Dashboard for driver monitoring and revenue tracking"
    ],
    challenges: [
      "Battery-Efficient Live Tracking: Updating vehicle location smoothly without draining device battery.",
      "Network Resilience: Preserving active ride states across cellular dead zones and app backgrounding.",
      "Dynamic Pricing Calculations: Computing real-time fares taking traffic delays and surge into account."
    ],
    solutions: [
      "Engineered Google Maps SDK integration with WebSocket position streaming and background location handlers.",
      "Implemented resilient offline state caching to automatically resume trip telemetry after network drops.",
      "Built dynamic pricing engine configurable via web admin dashboard.",
      "Delivered a 60 FPS mobile application with 99.8% crash-free stability."
    ],
    metrics: {
      latency: "<500ms",
      stability: "99.8%",
      fps: "60 FPS",
      satisfaction: "100%"
    }
  },
  {
    id: "ai-nutrition",
    title: "AI Calorie Tracker & Smart Nutrition App",
    category: "ai-health",
    categoryName: "AI & Health Tech",
    duration: "2-3 Months",
    costRange: "$2,500 – $3,000",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.fatsecret.android",
    packageId: "com.ai.nutrition.calorie.tracker",
    techStack: ["Flutter", "OpenAI Multimodal API", "Google Vision SDK", "Apple HealthKit", "Google Health Connect"],
    accentGradient: "linear-gradient(135deg, #10b981, #059669)",
    icon: "fa-brain",
    accentColor: "#10b981",
    shortDesc: "Full-stack AI health app using multimodal photo recognition to instantly calculate calories, macronutrients, and diet recommendations from meal snapshots.",
    caseStudyDoc: "AI_Nutrition_Tracker_Case_Study.pdf",
    features: [
      "Instant AI photo recognition for meal calorie & macronutrient calculation",
      "Sub-2-second vision pipeline processing complex multi-ingredient dishes",
      "Custom animated canvas progress rings for live calorie deficit targets",
      "Bi-directional sync with Apple HealthKit & Google Health Connect",
      "Personalized AI nutritional coaching & daily diet suggestions",
      "RevenueCat paywall integration for VIP weekly/monthly premium tiers"
    ],
    challenges: [
      "Sub-2-Second Vision Latency: Optimizing AI vision calls to classify food snapshots rapidly.",
      "Nutritional Estimation Accuracy: Calculating macros across global cuisines and variable portion sizes.",
      "Smooth Animated Visualizations: Rendering interactive progress rings without UI lag."
    ],
    solutions: [
      "Integrated OpenAI/Google Vision APIs with client-side image compression for rapid throughput.",
      "Designed custom Flutter canvas controllers for 60 FPS deficit animated rings.",
      "Connected HealthKit & Health Connect APIs for automatic active calorie sync."
    ],
    metrics: {
      speed: "< 1.8s",
      accuracy: "94%",
      loggingSpeed: "+75%",
      stability: "99.7%"
    }
  },
  {
    id: "vpn-app",
    title: "High-Speed WireGuard VPN & Privacy App",
    category: "cybersecurity",
    categoryName: "Cybersecurity & VPN",
    duration: "2-3 Months",
    costRange: "$3,000 – $4,000",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone",
    packageId: "com.wireguard.vpn.privacy.shield",
    techStack: ["Flutter Native Channel", "WireGuard C-Core", "Android VpnService", "iOS NetworkExtension"],
    accentGradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    icon: "fa-shield-halved",
    accentColor: "#a855f7",
    shortDesc: "Commercial-grade, high-speed VPN mobile app powered by WireGuard C-core protocol delivering instant one-tap encrypted connections and zero-logging privacy.",
    caseStudyDoc: "WireGuard_VPN_Security_Case_Study.pdf",
    features: [
      "One-tap encrypted WireGuard tunnel connections in under 1 second",
      "Native integration with Android VpnService & iOS NetworkExtension",
      "Automated Kill Switch & Split-Tunneling application whitelist module",
      "Real-time ping monitor & automated lowest-latency server selector",
      "Zero DNS/IPv6 leaks during Wi-Fi to cellular network switches",
      "Integrated Google Play Billing & Apple In-App Purchases for VIP access"
    ],
    challenges: [
      "Native Low-Level Tunneling: Controlling VPN lifecycle via platform channels without battery drain.",
      "Ultra-Fast Server Handshakes: Establishing encrypted tunnels across global servers in < 1s.",
      "DNS & IPv6 Leak Prevention: Guaranteeing zero IP leaks on network switches."
    ],
    solutions: [
      "Integrated WireGuard C-core library via native C/C++ platform channels.",
      "Engineered automated kill-switch and split-tunnel routing controllers.",
      "Achieved 300+ Mbps throughput with zero DNS leaks in production testing."
    ],
    metrics: {
      throughput: "300+ Mbps",
      handshake: "< 800ms",
      leakRate: "0%",
      stability: "99.8%"
    }
  },
  {
    id: "ecommerce-app",
    title: "LuxeCart — B2B/B2C Mobile Commerce Platform",
    category: "ecommerce",
    categoryName: "eCommerce & ERP",
    duration: "2-3 Months",
    costRange: "$2,500 – $4,000",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.shopify.mobile",
    packageId: "com.luxecart.ecommerce.store",
    techStack: ["Flutter", "Node.js REST", "Stripe Checkout", "Firebase FCM", "SQLite Cache"],
    accentGradient: "linear-gradient(135deg, #f43f5e, #e11d48)",
    icon: "fa-bag-shopping",
    accentColor: "#f43f5e",
    shortDesc: "Full-stack mobile shopping platform featuring real-time ERP inventory synchronization, multi-currency Stripe checkout, and push shipment alerts.",
    caseStudyDoc: "LuxeCart_eCommerce_Case_Study.pdf",
    features: [
      "Instant offline product catalog search & instant filter caching",
      "Stripe, PayPal, Apple Pay, & Google Pay multi-currency checkout",
      "Real-time ERP warehouse inventory synchronization",
      "Push notifications for shipment tracking and flash sales"
    ],
    challenges: [
      "Catalog Latency: Rendering 10,000+ items smoothly on mobile lists.",
      "Checkout Security: PCI-compliant native mobile payment handling."
    ],
    solutions: [
      "Built virtualized infinite scrolling Flutter lists with local SQLite index caching.",
      "Integrated Stripe SDK for end-to-end encrypted single-tap mobile checkout."
    ],
    metrics: {
      loadTime: "< 0.5s",
      checkoutConversion: "+42%",
      crashRate: "0.1%"
    }
  },
  {
    id: "saas-app",
    title: "TaskPulse — Enterprise SaaS Mobility App",
    category: "saas",
    categoryName: "Enterprise SaaS",
    duration: "2-3 Months",
    costRange: "$3,000 – $4,500",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.todoist.android",
    packageId: "com.taskpulse.enterprise.saas",
    techStack: ["React Native", "Node.js REST", "WebSockets", "Supabase", "Clean Code"],
    accentGradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    icon: "fa-list-check",
    accentColor: "#6366f1",
    shortDesc: "Scalable enterprise productivity mobile app with real-time kanban boards, live team collaboration, and automated offline data synchronization.",
    caseStudyDoc: "TaskPulse_SaaS_Case_Study.pdf",
    features: [
      "Real-time collaborative Kanban & task management boards",
      "Sub-200ms WebSocket team chat and document attachment stream",
      "Offline sync queue resolving data conflicts automatically on reconnect"
    ],
    challenges: [
      "Offline State Conflicts: Merging user edits made while disconnected.",
      "Live Concurrent Edits: Broadcasting live task updates without lag."
    ],
    solutions: [
      "Implemented CRDT-inspired conflict-free data sync algorithms.",
      "Configured Supabase real-time database channels with WebSocket listeners."
    ],
    metrics: {
      syncSpeed: "sub-100ms",
      offlineReliability: "100%",
      uptime: "99.95%"
    }
  }
];

export const developerBio = {
  name: "Senior Full-Stack Mobile Application Developer",
  tagline: "7+ Years Engineering Scalable Mobile & Cloud Systems",
  altTagline: "Turning Complex Ideas into High Performance iOS & Android Apps",
  experienceYears: "7+ Years",
  appsDelivered: "50+",
  storeApprovalRate: "100%",
  stabilityRating: "99.9%",
  about: `I am a Senior Full-Stack Mobile Application Developer with 7+ years of software engineering expertise specializing in cross-platform mobile solutions (iOS & Android) and scalable backend cloud architectures. I build fluid, high-performance apps with clean state management (BLoC, Provider, Clean Architecture), real-time WebSockets, robust APIs (Node.js, Express, Firebase, Supabase), and secure payment systems (Stripe, RevenueCat). Whether you need a full enterprise app built from scratch, a PWA / web application converted into native iOS and Android apps using Capacitor, or performance refactoring, I deliver reliable, store-ready solutions.`,
  coreServices: [
    { title: "Full-Stack Mobile App Engineering", desc: "Complete end-to-end mobile development (iOS & Android) + scalable Node.js/Firebase backend APIs.", icon: "fa-mobile-screen" },
    { title: "Web to Mobile App Conversion", desc: "Transform websites and PWAs into native store-approved mobile apps with Capacitor native hardware bridges.", icon: "fa-globe" },
    { title: "UI/UX to Pixel-Perfect Code", desc: "Converting Figma and Adobe XD wireframes into fluid 60 FPS responsive interfaces with light/dark themes.", icon: "fa-palette" },
    { title: "Scalable Architecture & Clean Code", desc: "Robust BLoC, Provider, and Clean Code architectures built for high concurrency and zero memory leaks.", icon: "fa-diagram-project" },
    { title: "APIs, WebSockets & Cloud Backends", desc: "Sub-second WebSockets, Firebase, Supabase, Node.js REST APIs, Stripe, PayPal, & In-App Purchases.", icon: "fa-server" },
    { title: "100% Store Publishing & Compliance", desc: "Full Apple App Store & Google Play Console deployment guarantee, provision profiling & guideline compliance.", icon: "fa-circle-check" }
  ],
  skills: [
    { category: "Mobile Frontend", items: ["Flutter SDK", "React Native", "Capacitor Framework", "Swift (iOS)", "Kotlin (Android)", "Dart", "BLoC Pattern", "Provider"] },
    { category: "Backend & Cloud APIs", items: ["Node.js", "Express.js", "Python FastAPI", "Firebase Suite", "Supabase", "REST APIs", "GraphQL", "WebSockets"] },
    { category: "Databases & Spatial", items: ["PostgreSQL", "MongoDB", "Firebase Realtime DB", "SQLite / Hive", "Redis", "Geohash Spatial Queries"] },
    { category: "DevOps & Monetization", items: ["App Store Deploy", "Play Console Launch", "RevenueCat", "Stripe / PayPal", "FCM & APNs Push", "Biometrics", "WireGuard C-Core"] }
  ]
};
