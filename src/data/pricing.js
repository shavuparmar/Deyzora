export const pricingCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'websites', name: 'Websites & Portfolios' },
  { id: 'apps', name: 'Apps & Dashboards' },
  { id: 'enterprise', name: 'Enterprise & SaaS' },
  { id: 'design-care', name: 'UI/UX & Care Plans' },
];

export const pricingPlans = [
  // Category: Websites
  {
    id: "starter-landing",
    category: "websites",
    name: "Starter Landing Page",
    tagline: "High-impact single page for marketing campaigns & quick product launches.",
    price: "₹9,999",
    originalPrice: "₹15,000",
    period: "one-time",
    popular: false,
    deliveryTime: "3 - 5 Days",
    idealFor: "Startups, Solopreneurs, Product Launches",
    deliverables: ["Single Page Site", "Contact Form", "Mobile Layout", "SSL Setup"],
    features: [
      "100% Responsive Single Page",
      "High Converting CTA Layout",
      "Instant WhatsApp & Lead Forms",
      "Sub-second Load Time",
      "1 Month Technical Support"
    ],
    ctaText: "Get Starter Page",
    ctaLink: "/contact?plan=starter-landing"
  },
  {
    id: "business-website",
    category: "websites",
    name: "Business Website",
    tagline: "Establish market authority and capture leads for growing businesses.",
    price: "₹24,999",
    originalPrice: "₹35,000",
    period: "one-time",
    popular: true,
    badge: "Most Popular",
    deliveryTime: "7 - 10 Days",
    idealFor: "SMEs, Service Providers, Agencies",
    deliverables: ["Up to 10 Pages", "CMS Admin Panel", "Google SEO Setup", "1 Year Hosting"],
    features: [
      "Up to 10 Custom Pages",
      "Google Search Console & SEO",
      "Interactive Lead Capture & Forms",
      "User-friendly CMS Panel",
      "3 Months Technical Support",
      "Speed Guarantee (95+ Google Score)"
    ],
    ctaText: "Choose Business Plan",
    ctaLink: "/contact?plan=business-website"
  },
  {
    id: "portfolio-website",
    category: "websites",
    name: "Portfolio Website",
    tagline: "Stunning visual showcases for creatives, consultants & executives.",
    price: "₹14,999",
    originalPrice: "₹22,000",
    period: "one-time",
    popular: false,
    deliveryTime: "5 - 7 Days",
    idealFor: "Designers, Photographers, Architects, Execs",
    deliverables: ["Project Bento Grid", "Lightbox Gallery", "Case Study Pages", "Social Links"],
    features: [
      "Bento Grid Showcase",
      "Dynamic Category Filtering",
      "HD Image & Video Optimization",
      "Custom Typography & Micro-animations",
      "1 Month Technical Support"
    ],
    ctaText: "Build My Portfolio",
    ctaLink: "/contact?plan=portfolio-website"
  },
  {
    id: "corporate-website",
    category: "websites",
    name: "Corporate Website",
    tagline: "Multi-branch corporate site with governance, team, & investor portals.",
    price: "₹45,999",
    originalPrice: "₹65,000",
    period: "one-time",
    popular: false,
    deliveryTime: "14 - 20 Days",
    idealFor: "Large Enterprises, Corporations, Groups",
    deliverables: ["Unlimited Pages", "Multi-language Support", "Custom Security", "Dedicated Hosting"],
    features: [
      "Unlimited Custom Pages",
      "Multilingual Multi-region Support",
      "Careers & Investor Relations Portal",
      "Bank-Grade Security Hardening",
      "Dedicated Project Manager"
    ],
    ctaText: "Request Corporate Quote",
    ctaLink: "/contact?plan=corporate-website"
  },

  // Category: Apps & Dashboards
  {
    id: "ecommerce-website",
    category: "apps",
    name: "E-Commerce Website",
    tagline: "Sell products online with 3-step checkout and automated inventory.",
    price: "₹29,999",
    originalPrice: "₹45,000",
    period: "one-time",
    popular: true,
    badge: "High Growth",
    deliveryTime: "10 - 14 Days",
    idealFor: "D2C Brands, Retail Stores, Wholesalers",
    deliverables: ["Product Catalog", "Payment Gateways", "Order Management", "Invoice Generator"],
    features: [
      "Razorpay, Stripe & UPI Payment Gateways",
      "Automated Shipping & Tax Rules",
      "Discount Coupon System",
      "Instant WhatsApp Order Alerts",
      "Abandoned Cart Recovery"
    ],
    ctaText: "Start E-Commerce Store",
    ctaLink: "/contact?plan=ecommerce-website"
  },
  {
    id: "web-application",
    category: "apps",
    name: "Web Application",
    tagline: "Custom cloud software, web apps, and member-only web portals.",
    price: "₹49,999",
    originalPrice: "₹75,000",
    period: "milestone base",
    popular: false,
    deliveryTime: "14 - 21 Days",
    idealFor: "Startups, Platforms, Membership Sites",
    deliverables: ["React / Node Stack", "User Authentication", "Database Architecture", "API Layer"],
    features: [
      "Custom React / Next.js & Serverless",
      "Secure Auth & Passwordless Signin",
      "Stripe / Razorpay Subscription Billing",
      "RESTful / GraphQL APIs",
      "Full Source Code Ownership"
    ],
    ctaText: "Build Web App",
    ctaLink: "/contact?plan=web-application"
  },
  {
    id: "admin-dashboard",
    category: "apps",
    name: "Admin Dashboard",
    tagline: "Internal operational portals, analytics charts & database management.",
    price: "₹34,999",
    originalPrice: "₹50,000",
    period: "one-time",
    popular: false,
    deliveryTime: "10 - 12 Days",
    idealFor: "Operations Teams, FinTech, Admin Teams",
    deliverables: ["Data Visualization Charts", "CSV/PDF Export", "Role Access Control", "Audit Logs"],
    features: [
      "Real-time Analytics & Charts",
      "Role-Based Access Control (RBAC)",
      "Bulk Data Processing & Exports",
      "Dark / Light UI System",
      "Encrypted Data Storage"
    ],
    ctaText: "Build Dashboard",
    ctaLink: "/contact?plan=admin-dashboard"
  },

  // Category: Enterprise & SaaS
  {
    id: "enterprise-custom-software",
    category: "enterprise",
    name: "Enterprise Custom Software",
    tagline: "Tailored enterprise solutions built to streamline complex workflows.",
    price: "₹99,999+",
    originalPrice: "₹1,50,000+",
    period: "custom quote",
    popular: false,
    isEnterprise: true,
    badge: "Enterprise",
    deliveryTime: "30 - 60 Days",
    idealFor: "Enterprise Clients, FinTech, Healthcare, Logistics",
    deliverables: ["Full Custom Stack", "Dedicated SLA", "Microservices Architecture", "On-Prem Deployment"],
    features: [
      "Microservices & Serverless Stack",
      "SOC2 / HIPAA Compliance Ready",
      "Legacy Code Migration & Integration",
      "24/7 Priority SLA Support",
      "Dedicated Engineering Team"
    ],
    ctaText: "Consult Enterprise Team",
    ctaLink: "/contact?plan=enterprise-custom-software"
  },
  {
    id: "saas-platform",
    category: "enterprise",
    name: "SaaS Platform",
    tagline: "Complete multi-tenant SaaS application with subscription engine.",
    price: "₹79,999+",
    originalPrice: "₹1,20,000+",
    period: "custom quote",
    popular: true,
    isEnterprise: true,
    badge: "Top Choice for Tech Startups",
    deliveryTime: "21 - 35 Days",
    idealFor: "SaaS Founders, Tech Entrepreneurs",
    deliverables: ["Multi-tenant DB", "Stripe Billing Engine", "Onboarding Flow", "Admin Control Panel"],
    features: [
      "Multi-Tenant DB Architecture",
      "Tiered Pricing & Usage Metering",
      "Automated User Onboarding",
      "API Key Management for Customers",
      "6 Months Free Warranty"
    ],
    ctaText: "Launch SaaS Platform",
    ctaLink: "/contact?plan=saas-platform"
  },

  // Category: UI/UX & Care Plans
  {
    id: "ui-ux-design-plan",
    category: "design-care",
    name: "UI / UX Design",
    tagline: "Pixel-perfect Figma designs, UI kits & clickable interactive prototypes.",
    price: "₹14,999",
    originalPrice: "₹25,000",
    period: "one-time",
    popular: false,
    deliveryTime: "5 - 7 Days",
    idealFor: "App Owners, Product Managers, Developers",
    deliverables: ["Figma File", "Design System", "Clickable Prototype", "Developer Handoff"],
    features: [
      "User Journey & Wireframes",
      "Luxury Visual UI Components",
      "Mobile & Desktop Screen Variants",
      "Unlimited Design Revisions"
    ],
    ctaText: "Order UI/UX Design",
    ctaLink: "/contact?plan=ui-ux-design"
  },
  {
    id: "website-redesign-plan",
    category: "design-care",
    name: "Website Redesign",
    tagline: "Modern visual overhaul for outdated websites with zero SEO loss.",
    price: "₹17,999",
    originalPrice: "₹28,000",
    period: "one-time",
    popular: false,
    deliveryTime: "5 - 8 Days",
    idealFor: "Outdated Websites, Slow Portals",
    deliverables: ["Complete New Code", "301 Redirects", "SEO Migration", "Mobile Overhaul"],
    features: [
      "Modern Vercel/Linear Aesthetic",
      "Zero Loss of Existing Google Rankings",
      "Content & Asset Cleanup",
      "Mobile Layout Fixes"
    ],
    ctaText: "Redesign My Website",
    ctaLink: "/contact?plan=website-redesign"
  },
  {
    id: "maintenance-care-plan",
    category: "design-care",
    name: "Maintenance Care Plan",
    tagline: "Continuous 24/7 security, backups, updates, & content edits.",
    price: "₹3,999",
    originalPrice: "₹6,000",
    period: "/ month",
    popular: true,
    badge: "Zero Downtime Care",
    deliveryTime: "Ongoing",
    idealFor: "All Active Websites",
    deliverables: ["24/7 Monitoring", "Daily Backups", "Monthly Edits", "Security Scans"],
    features: [
      "Daily Automated Off-site Backups",
      "Malware & Vulnerability Scans",
      "Up to 4 Hours Monthly Edits",
      "WhatsApp Priority Support"
    ],
    ctaText: "Subscribe to Care Plan",
    ctaLink: "/contact?plan=maintenance-care-plan"
  }
];

export const optionalAddons = [
  {
    id: "addon-hosting",
    name: "Premium Cloud Hosting & Domain",
    price: "₹2,999",
    period: "/ year",
    description: "High-speed NVMe cloud server with free SSL certificate, daily backups, and domain registration."
  },
  {
    id: "addon-seo",
    name: "Advanced SEO & Speed Boost",
    price: "₹4,999",
    period: "one-time",
    description: "Complete schema markup, image webp compression, speed audit & top 10 keyword optimization."
  },
  {
    id: "addon-chatbot",
    name: "AI WhatsApp & Web Bot",
    price: "₹6,999",
    period: "one-time",
    description: "24/7 automated customer support chatbot integrated directly with your WhatsApp and site."
  },
  {
    id: "addon-maintenance",
    name: "Yearly Maintenance Care",
    price: "₹9,999",
    period: "/ year",
    description: "Monthly content updates, regular security patches, bug fixes, and 24/7 uptime monitoring."
  }
];
