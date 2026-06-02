// Deyzora Digital Agency Content Constants

export const NAVIGATION_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'About', href: '#about' }, // Added About route link
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const STATISTICS = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction Rate' },
];

export const TRUSTED_COMPANIES = [
  { name: 'Stripe', logoText: 'Stripe' },
  { name: 'Vercel', logoText: 'Vercel' },
  { name: 'Linear', logoText: 'Linear' },
  { name: 'Framer', logoText: 'Framer' },
  { name: 'Supabase', logoText: 'Supabase' },
  { name: 'Figma', logoText: 'Figma' },
];

export const SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance, pixel-perfect web applications built with cutting-edge frameworks. Optimized for speed, SEO, and ultimate user conversion.',
    icon: 'web',
    features: ['React & Next.js specialists', 'Headless CMS Integration', 'E-Commerce platforms', 'Speed optimization'],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions (iOS & Android) that offer fluid performance, beautiful native styling, and robust functionality.',
    icon: 'mobile',
    features: ['React Native / Flutter solutions', 'App Store deployment', 'Offline-first architecture', 'Immersive custom UI'],
  },
  {
    id: 'ai-solutions',
    title: 'AI Integration',
    description: 'Empower your operations with customized AI. From custom LLM agents and semantic search to automated data synthesis and predictive analysis.',
    icon: 'ai',
    features: ['Custom LLM integrations', 'Retrieval-Augmented Generation', 'Data processing pipelines', 'AI Agent workflows'],
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Eliminate repetitive manual tasks. We build reliable automation pipelines that synchronize your tech stack and maximize business speed.',
    icon: 'automation',
    features: ['API integrations & webhooks', 'Zapier & Make custom setups', 'Internal tooling systems', 'Database triggers & cron syncs'],
  },
  {
    id: 'seo-growth',
    title: 'SEO & Growth Solutions',
    description: 'Dominate organic search rankings and turn web traffic into active revenue. Data-backed strategies targeting your ideal customers.',
    icon: 'seo',
    features: ['Technical SEO audits', 'Keyword authority strategies', 'Conversion rate optimization', 'Performance analytics'],
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Futuristic designs that captivate and convert. We craft luxury design systems, interactive prototypes, and highly detailed digital layouts.',
    icon: 'design',
    features: ['Figma-first design systems', 'Interactive high-fidelity prototypes', 'User research & wireframing', 'Motion & brand identity'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Elite Engineering',
    description: 'We do not compromise. We build on Vercel-level modern architectures using clean, typed, and ultra-performant code.',
    icon: 'engineering',
  },
  {
    title: 'Futuristic Design',
    description: 'Our layouts align with top-tier SaaS companies. Premium typography, dynamic gradients, and crisp dark aesthetics.',
    icon: 'visuals',
  },
  {
    title: 'AI-First Approach',
    description: 'We integrate smart AI tools inside our own processes and your products to deliver results 10x faster than traditional agencies.',
    icon: 'aifirst',
  },
  {
    title: 'Transparent Collaboration',
    description: 'Stay completely updated. Enjoy direct access to private Slack channels, shared Figma files, and interactive staging links.',
    icon: 'collab',
  },
];

export const ABOUT_INFO = {
  mission: 'Bridging the gap between complex digital engineering and elite human-centric design.',
  tagline: 'WHO WE ARE',
  title: 'We are a collective of senior developers, designers, and AI architects.',
  story: 'Deyzora was established to disrupt standard agency culture. We realized that modern startups are tired of sluggish templates, slow communication, and outsourced code. We brought together pure full-stack talent to deliver fast, highly optimized web systems, beautiful software products, and smart automated workflows.',
  pillars: [
    {
      title: 'Design Perfectionists',
      description: 'We are obsessed with grid alignment, typography spacing, HSL color palettes, and micro-interactions.',
    },
    {
      title: 'Performance Engineers',
      description: 'Our frameworks are optimized for flawless Lighthouse audits, ultra-fast TTFB scores, and absolute scalability.',
    },
    {
      title: 'AI Native Thinkers',
      description: 'We utilize dynamic semantic pipelines and custom intelligence nodes to build products ready for the next decade.',
    },
  ],
};

export const PORTFOLIO = [
  {
    title: 'Aethera CRM',
    category: 'Development',
    description: 'A futuristic next-generation SaaS dashboard featuring real-time collaborative streams, AI pipeline forecasting, and glassmorphic designs.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Synthetix AI Studio',
    category: 'AI Solutions',
    description: 'An AI-powered video generation suite using multi-modal models to produce cinemagraphs from simple, descriptive natural language prompts.',
    tags: ['React', 'Python', 'FastAPI', 'Stable Diffusion'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Nova Capital',
    category: 'UI/UX Design',
    description: 'Luxury investment UI/UX system engineered for crypto institutional funds, sporting dynamic micro-charts and interactive glowing cards.',
    tags: ['Figma', 'UX Research', 'Design System'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Velo E-commerce',
    category: 'Development',
    description: 'A headless e-commerce powerhouse driving lightning-fast catalog search, high-volume cart conversions, and automated inventory sync.',
    tags: ['React', 'Shopify API', 'Tailwind', 'Vercel Edge'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Zephyr Automations',
    category: 'Automation',
    description: 'Internal operations pipeline syncing Salesforce, Jira, and Slack channels dynamically for 500+ employees, saving thousands of manual hours.',
    tags: ['Node.js', 'Zapier API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    title: 'Apex Search Platform',
    category: 'SEO',
    description: 'A data-driven content framework that scaled a Series-B logistics client from 15k monthly organic visitors to 380k visitors in 8 months.',
    tags: ['SEO Strategy', 'Content System', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, target demographic, and functional goals to lay a bulletproof architectural foundation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We construct full system blueprints, database designs, tech-stack alignments, and dynamic project timelines.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We sculpt high-fidelity interactive wireframes and modern luxury UI layouts, establishing your customized brand kit.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our senior engineers write clean, typed, semantic code, optimizing load times, SEO, and visual responsiveness.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Rigorous automated cross-browser testing is executed, followed by smooth edge deployment on premium platforms.',
  },
  {
    number: '06',
    title: 'Growth',
    description: 'We scale your digital presence with continuous optimization updates, technical support, and search keyword tracking.',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Deyzora delivered a digital dashboard that completely stunned our investors. Their attention to subtle visual animations and premium SaaS glassmorphism is unmatched.",
    author: "Elena Rostova",
    role: "Chief Product Officer",
    company: "Aethera Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "Working with Deyzora feels like having a senior in-house core engineering team. They integrated our complex AI pipelines seamlessly and 3x faster than scheduled.",
    author: "Dr. Julian Vance",
    role: "Founder & CTO",
    company: "Synthetix AI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    quote: "Their team rebuilt our headless store, bringing our site score to a perfect 100. Our organic traffic increased by 140% in just two months. Absolute game-changers.",
    author: "Marcus Chen",
    role: "E-Commerce Director",
    company: "Velo Brand",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

// Transformed pricing into Indian Rupee (INR) format
export const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for startups needing a premium, high-converting digital landing.',
    priceMonthly: '₹49,999',
    priceAnnual: '₹39,999',
    features: [
      'Custom Glassmorphism Landing Page',
      'Fully Responsive Layout (Mobile/Tablet/Desktop)',
      'Optimized Framer Motion animations',
      'SEO & Performance Optimized',
      '1 Month Post-Launch Support',
      'Slack Direct Channel Communication',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'The complete agency suite for scaling companies and software startups.',
    priceMonthly: '₹99,999',
    priceAnnual: '₹79,999',
    features: [
      'Multi-page Web & Mobile Applications',
      'Advanced Interactive UI/UX Design System',
      'Custom AI & Tooling Integration',
      'Speed-optimized Headless Architectures',
      '3 Months Technical Support & Maintenance',
      'Dedicated Tech Lead & Slack Team Sync',
    ],
    buttonText: 'Start Project',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Tailored for high-growth enterprises needing dedicated full-stack squads.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    features: [
      'Full-Stack Custom Software Development',
      'Deep AI Workflows & Model Integrations',
      'Complex Database & Cloud Orchestrations',
      '24/7 Priority SLA Technical Support',
      'Continuous Security & Performance Audits',
      'Full Agile Dedicated Engineering Squad',
    ],
    buttonText: 'Book Consult',
    popular: false,
  },
];

export const FAQS = [
  {
    question: 'How long does a typical digital project take?',
    answer: 'Standard marketing lands take 2-3 weeks, while comprehensive web/mobile software architectures generally take 4-8 weeks from the discovery phase to production deployment.',
  },
  {
    question: 'What modern technologies do you build on?',
    answer: 'We specialize in React 19, Next.js, Vite, Tailwind CSS v4, Framer Motion, Node.js, Supabase, PostgreSQL, and cloud deployments via Vercel, AWS, or Netlify.',
  },
  {
    question: 'How does your custom AI Integration service work?',
    answer: 'We audit your manual workflows, identify automation opportunities, and integrate powerful AI features like custom conversational assistants, document indexing (RAG), and data synthesizers into your systems.',
  },
  {
    question: 'Do you offer flexible pricing and subscription models?',
    answer: 'Yes! We offer monthly subscriptions, project-based milestones, and dedicated enterprise engineering contracts based on your specific scaling needs.',
  },
  {
    question: 'How do we collaborate and communicate during the process?',
    answer: 'You receive direct access to a dedicated shared Slack workspace, interactive Figma links, and transparent Jira board access. We provide weekly video syncs and live staging environments updated daily.',
  },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/deyzora',
  github: 'https://github.com/deyzora',
  linkedin: 'https://linkedin.com/company/deyzora',
  instagram: 'https://instagram.com/deyzora',
};
