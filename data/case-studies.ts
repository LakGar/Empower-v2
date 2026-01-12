export interface CaseStudy {
  title: string;
  subtitle: string;
  website: string;
  thumbnail: string;
  clientType: string;
  projectGoal: string;
  deliverables: string[];
  designDirection: string;
  colorScheme: {
    name: string;
    hex: string;
  }[];
  typography: {
    headings: string;
    body: string;
  };
  uxDecisions: string[];
  techStack: string[];
  outcome: string[];
  whyThisWorks: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "AVA",
    subtitle: "AI Safety & Assistance Platform",
    website: "https://gomoonbeam.com",
    thumbnail: "/ava.png",
    clientType: "AI Safety Platform",
    projectGoal: "Create a trustworthy, modern website for an AI safety platform that communicates reliability, intelligence, and real-world impact.",
    deliverables: [
      "Homepage design",
      "Trust-forward UI system",
      "AI-driven detection interfaces",
      "Responsive implementation"
    ],
    designDirection: "Calm, clinical, trustworthy. Focus on clarity, spacing, and subtle motion to build confidence in a safety-critical product.",
    colorScheme: [
      { name: "Deep Navy", hex: "#0B1C2D" },
      { name: "Soft Slate Blue", hex: "#5B7C99" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Alert Accent", hex: "#D64545" }
    ],
    typography: {
      headings: "Inter / Satoshi (SemiBold)",
      body: "Inter (Regular)"
    },
    uxDecisions: [
      "Clear visual hierarchy for trust",
      "Minimal animations to avoid distraction",
      "High contrast for accessibility"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Responsive grid system"],
    outcome: [
      "Delivered a production-ready platform with strong usability in high-stakes scenarios",
      "Established a foundation for future AI integrations and enterprise deployments"
    ],
    whyThisWorks: "Demonstrates ability to design trust-first interfaces for AI, healthcare, and enterprise tools."
  },
  {
    title: "Empower",
    subtitle: "Local Business Web Presence Platform",
    website: "https://empower-five.vercel.app/",
    thumbnail: "/empower.png",
    clientType: "Local Business Platform",
    projectGoal: "Help small businesses look professional, credible, and conversion-focused.",
    deliverables: [
      "Conversion-driven layouts",
      "Mobile-first design system",
      "Reusable UI components",
      "SEO-optimized structure"
    ],
    designDirection: "Simple, friendly, conversion-oriented.",
    colorScheme: [
      { name: "Charcoal", hex: "#1F2933" },
      { name: "Brand Blue", hex: "#2563EB" },
      { name: "Light Gray", hex: "#F3F4F6" },
      { name: "White", hex: "#FFFFFF" }
    ],
    typography: {
      headings: "Poppins / Inter",
      body: "Inter"
    },
    uxDecisions: [
      "Clear CTA above the fold",
      "Mobile-first layout",
      "Minimal navigation to reduce friction"
    ],
    techStack: ["React / Next.js", "Tailwind CSS", "SEO-optimized structure"],
    outcome: [
      "Increased perceived brand credibility for local businesses",
      "Reduced time-to-launch for new client sites",
      "Established a scalable framework for ongoing client acquisition"
    ],
    whyThisWorks: "Perfect example for local service clients who want results, not fluff."
  },
  {
    title: "LegalAI",
    subtitle: "AI-Powered Legal Assistance Platform",
    website: "https://legalai.dev/",
    thumbnail: "/legal.png",
    clientType: "Professional Services",
    projectGoal: "Present a serious, credible legal AI brand without feeling cold or intimidating.",
    deliverables: [
      "Document upload workflows",
      "AI analysis interfaces",
      "Legal output visualization",
      "Trust-focused design system"
    ],
    designDirection: "Modern, professional, restrained.",
    colorScheme: [
      { name: "Dark Slate", hex: "#111827" },
      { name: "Steel Blue", hex: "#3B82F6" },
      { name: "Off-White", hex: "#F9FAFB" },
      { name: "Divider Gray", hex: "#E5E7EB" }
    ],
    typography: {
      headings: "DM Sans / Inter",
      body: "Inter"
    },
    uxDecisions: [
      "Structured content blocks",
      "Clear explanations for complex topics",
      "Minimal motion to preserve professionalism"
    ],
    techStack: ["Next.js", "Modular component system"],
    outcome: [
      "Reduced document review time by up to 60%",
      "Improved accessibility of legal insights for non-experts",
      "Demonstrated strong product-market experimentation"
    ],
    whyThisWorks: "Shows capability in regulated and high-trust industries."
  },
  {
    title: "Creme Digital",
    subtitle: "Creative Digital Agency Website",
    website: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    clientType: "Creative Agency",
    projectGoal: "Showcase premium creative work while maintaining clarity and usability.",
    deliverables: [
      "Editorial-style layouts",
      "Brand-aligned UI system",
      "Portfolio showcase",
      "Responsive design"
    ],
    designDirection: "Editorial, expressive, confident.",
    colorScheme: [
      { name: "Warm Cream", hex: "#FAF7F2" },
      { name: "Black", hex: "#000000" },
      { name: "Soft Gold Accent", hex: "#D4AF37" }
    ],
    typography: {
      headings: "Playfair Display / Canela",
      body: "Inter"
    },
    uxDecisions: [
      "Large typography",
      "Generous white space",
      "Scroll-based storytelling"
    ],
    techStack: ["Next.js", "CSS animations / Framer Motion"],
    outcome: [
      "Elevated brand perception",
      "Improved client trust and lead quality",
      "Created a strong first impression for high-end clients"
    ],
    whyThisWorks: "Attracts design-forward clients and creative studios."
  },
  {
    title: "Editrix AI",
    subtitle: "AI Content Editing Platform",
    website: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    clientType: "SaaS Product",
    projectGoal: "Communicate speed, productivity, and intelligence for an AI writing tool.",
    deliverables: [
      "Minimal editor-first UI",
      "AI rewriting workflows",
      "Product screenshots",
      "Performance-optimized assets"
    ],
    designDirection: "Clean, sharp, tool-first.",
    colorScheme: [
      { name: "Near-Black", hex: "#0F172A" },
      { name: "Electric Blue", hex: "#3B82F6" },
      { name: "Soft Gray", hex: "#CBD5E1" }
    ],
    typography: {
      headings: "Inter (Bold)",
      body: "Inter"
    },
    uxDecisions: [
      "Minimal distractions",
      "Clear product screenshots",
      "Fast visual scanning"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Performance-optimized assets"],
    outcome: [
      "Improved content turnaround times",
      "Increased consistency across written outputs",
      "Positioned Editrix as a modern AI productivity tool"
    ],
    whyThisWorks: "Strong example of modern SaaS marketing design."
  },
  {
    title: "Universal AI Services",
    subtitle: "AI & Robotics Marketplace",
    website: "https://universal-ai-services.vercel.app/",
    thumbnail: "/uais.png",
    clientType: "B2B AI & Robotics Company",
    projectGoal: "Reposition the brand from AI consultancy → product-led robotics marketplace.",
    deliverables: [
      "Homepage redesign",
      "Marketplace-style layout",
      "Visual system & color palette",
      "Responsive implementation"
    ],
    designDirection: "Industrial, technical, product-first. Serious and enterprise-ready, hardware + software aligned.",
    colorScheme: [
      { name: "Graphite Black", hex: "#0B0E11" },
      { name: "Industrial Gray", hex: "#2A2E35" },
      { name: "Robotics Cyan", hex: "#22D3EE" }
    ],
    typography: {
      headings: "Space Grotesk",
      body: "Inter"
    },
    uxDecisions: [
      "Marketplace comes before services",
      "Consulting framed as support, not the product",
      "Strong contrast for readability",
      "Minimal animation (enterprise-safe)"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Component-driven UI"],
    outcome: [
      "Clear repositioning from consultancy → platform",
      "Stronger enterprise credibility",
      "Easier for users to understand what's being sold"
    ],
    whyThisWorks: "Perfect case study for B2B, AI, and robotics clients."
  },
  {
    title: "Robot Combat Federation",
    subtitle: "Competitive Robotics Event Platform",
    website: "https://algochurn.com",
    thumbnail: "/rcf.png",
    clientType: "Event & Entertainment",
    projectGoal: "Capture energy, competition, and spectacle.",
    deliverables: [
      "High-impact hero section",
      "Event-driven UI",
      "Mobile-optimized layout",
      "Strong visual identity"
    ],
    designDirection: "Aggressive, high-contrast, bold.",
    colorScheme: [
      { name: "Black", hex: "#000000" },
      { name: "Blood Red", hex: "#DC2626" },
      { name: "Metallic Gray", hex: "#6B7280" }
    ],
    typography: {
      headings: "Bebas Neue / Anton",
      body: "Inter"
    },
    uxDecisions: [
      "High-impact hero",
      "Large typography",
      "Strong visual hierarchy"
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: [
      "Increased community engagement",
      "Improved event visibility and branding",
      "Established a strong foundation for future growth"
    ],
    whyThisWorks: "Shows range beyond corporate sites — events & entertainment."
  },
  {
    title: "Phono",
    subtitle: "AI-Powered Music & Vinyl Discovery Platform",
    website: "https://phono-web.vercel.app/",
    thumbnail: "/phono.png",
    clientType: "Music & Culture Platform",
    projectGoal: "Create a warm, nostalgic yet modern music experience.",
    deliverables: [
      "Collection management UI",
      "Recommendation-driven discovery",
      "AI tagging interfaces",
      "Community features"
    ],
    designDirection: "Retro-modern, tactile, curated.",
    colorScheme: [
      { name: "Warm Brown", hex: "#4A2C2A" },
      { name: "Cream", hex: "#FAF3E0" },
      { name: "Accent Orange", hex: "#F97316" }
    ],
    typography: {
      headings: "IBM Plex Serif",
      body: "Inter"
    },
    uxDecisions: [
      "Intuitive collection management",
      "Personalized discovery flows",
      "Community-driven insights"
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: [
      "Improved discovery experience for collectors",
      "Increased engagement through personalization",
      "Validated AI-driven music exploration concepts"
    ],
    whyThisWorks: "Appeals to culture, lifestyle, and community brands."
  },
  {
    title: "Lumina",
    subtitle: "AI Journaling & Reflection Platform",
    website: "https://lumina-fawn.vercel.app/",
    thumbnail: "/lumina.png",
    clientType: "Wellness & Journaling App",
    projectGoal: "Create a calm, emotionally safe experience.",
    deliverables: [
      "Calming minimal UI",
      "Voice and text journaling flows",
      "AI summarization interfaces",
      "Privacy-focused design"
    ],
    designDirection: "Soft, minimal, reflective.",
    colorScheme: [
      { name: "Lavender", hex: "#EDE9FE" },
      { name: "Deep Purple", hex: "#6D28D9" },
      { name: "Soft Gray", hex: "#F5F3FF" }
    ],
    typography: {
      headings: "Satoshi / Inter",
      body: "Inter"
    },
    uxDecisions: [
      "Calming color palette",
      "Minimal distractions",
      "Privacy and trust signals"
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: [
      "Enhanced long-term reflection and insight",
      "Strong user retention through AI-driven value",
      "Positioned Lumina as a next-gen journaling product"
    ],
    whyThisWorks: "Great example for wellness, mental health, and lifestyle apps."
  },
  {
    title: "SmartBridge",
    subtitle: "Enterprise Technology Solutions Platform",
    website: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    clientType: "Enterprise Consulting",
    projectGoal: "Deliver clarity, credibility, and structured service offerings for enterprise buyers.",
    deliverables: [
      "Enterprise-grade UI",
      "Structured service offerings",
      "Improved navigation",
      "Lead generation optimization"
    ],
    designDirection: "Corporate, structured, scalable.",
    colorScheme: [
      { name: "Navy", hex: "#0F172A" },
      { name: "Corporate Blue", hex: "#2563EB" },
      { name: "Light Gray", hex: "#F8FAFC" }
    ],
    typography: {
      headings: "Inter (Bold)",
      body: "Inter"
    },
    uxDecisions: [
      "Structured complex services into clear offerings",
      "Improved navigation and information hierarchy",
      "Optimized for lead generation"
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: [
      "Improved enterprise trust signals",
      "Clearer service communication",
      "Increased inbound inquiries"
    ],
    whyThisWorks: "Perfect for enterprise and B2B clients seeking credibility."
  },
  {
    title: "Renderwork Studio",
    subtitle: "3D & Visual Design Studio",
    website: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    clientType: "Visual Portfolio",
    projectGoal: "Showcase visual quality without overwhelming users.",
    deliverables: [
      "Immersive visual layouts",
      "Gallery-forward design",
      "Optimized image performance",
      "Clean typography system"
    ],
    designDirection: "Gallery-first, minimal.",
    colorScheme: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" }
    ],
    typography: {
      headings: "Inter",
      body: "Inter"
    },
    uxDecisions: [
      "Immersive visual layouts",
      "Maintained clean typography and spacing",
      "Highlighted portfolio work effectively"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Optimized image performance"],
    outcome: [
      "Elevated brand perception",
      "Stronger visual storytelling",
      "Increased inbound creative inquiries"
    ],
    whyThisWorks: "Perfect for creative studios and visual-focused clients."
  },
  {
    title: "TopShotGolfing",
    subtitle: "Golf Training & Performance Platform",
    website: "https://topshotgolfing.com",
    thumbnail: "/topshot.png",
    clientType: "Sports Training Platform",
    projectGoal: "Build a modern, mobile-first platform focused on accessibility and clarity.",
    deliverables: [
      "Performance-focused layouts",
      "Mobile-optimized UX",
      "Structured educational content",
      "Strong CTAs"
    ],
    designDirection: "Energetic, clean, instructional.",
    colorScheme: [
      { name: "Green", hex: "#15803D" },
      { name: "Dark Gray", hex: "#1F2937" }
    ],
    typography: {
      headings: "Inter (Bold)",
      body: "Inter"
    },
    uxDecisions: [
      "Optimized mobile UX",
      "Structured educational content clearly",
      "Implemented strong CTAs"
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    outcome: [
      "Improved user engagement",
      "Clearer brand positioning",
      "Increased sign-ups and inquiries"
    ],
    whyThisWorks: "Great for sports, fitness, and instructional platforms."
  },
  {
    title: "SF Playground",
    subtitle: "Startup & Tech Event Platform",
    website: "https://sfplayground.vercel.app/",
    thumbnail: "/sfp.png",
    clientType: "Tech Event Platform",
    projectGoal: "Design an immersive, animation-driven website inspired by modern tech aesthetics.",
    deliverables: [
      "Bold experimental UI",
      "Motion and interaction design",
      "Storytelling-focused layout",
      "Mobile-first discovery"
    ],
    designDirection: "Experimental, animated, futuristic.",
    colorScheme: [
      { name: "Black", hex: "#000000" },
      { name: "Neon Purple", hex: "#A855F7" },
      { name: "Electric Blue", hex: "#38BDF8" }
    ],
    typography: {
      headings: "Inter (Bold)",
      body: "Inter"
    },
    uxDecisions: [
      "Built a bold, experimental UI",
      "Integrated motion and interaction design",
      "Focused on storytelling and immersion"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    outcome: [
      "Strong visual differentiation",
      "Increased event interest and engagement",
      "Established a memorable brand presence"
    ],
    whyThisWorks: "Perfect for tech events, startups, and innovation-focused brands."
  }
];



