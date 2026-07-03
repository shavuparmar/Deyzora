export const SERVICES = [
  {
    id:"web-design",
    title:"Website Design",
    description:"Modern UI/UX, Landing Pages, Business Websites, and Dashboard Design.",
    overview:"We craft visually stunning, highly converting websites that perfectly encapsulate your brand identity. Our design process ensures seamless user journeys and beautiful aesthetics that build immediate trust with your audience.",
    benefits: ["Increases brand credibility","Improves user engagement","Boosts conversion rates","Reduces bounce rates"],
    targetAudience:"Startups, Agencies, and Corporate Businesses needing a strong online presence.",
    features: ["UI/UX Design","Responsive Layouts","Wireframing & Prototyping","Design Systems","Interaction Design","Figma Handoff"],
    techStack: ["Figma","Adobe XD","Framer","Illustrator"],
    pricing:"Starter ₹7,999 | Business ₹14,999",
    faqs: [
      { q:"Do you use templates?", a:"No, all our designs are 100% custom-tailored to your brand." },
      { q:"Will I get the source files?", a:"Yes, we provide all Figma source files upon project completion." }
    ]
  },
  {
    id:"web-development",
    title:"Website Development",
    description:"Responsive, high-performance HTML5/CSS3/JS websites optimized for growth.",
    overview:"We build blazing-fast, responsive websites from the ground up. Our code is clean, semantic, and optimized for search engines, ensuring your site not only looks great but performs exceptionally well under heavy traffic.",
    benefits: ["Lightning-fast load times","Perfect SEO foundations","Works flawlessly on all devices","Highly secure"],
    targetAudience:"Businesses needing reliable, static or dynamic marketing websites.",
    features: ["HTML5 & CSS3","JavaScript (ES6+)","Responsive","Performance Optimized","Cross-Browser Support","W3C Validated"],
    techStack: ["HTML5","CSS3","JavaScript","Tailwind CSS"],
    pricing:"Starter ₹7,999 | Business ₹14,999",
    faqs: [
      { q:"Are your websites mobile-friendly?", a:"Yes, we use a mobile-first approach ensuring perfection across all devices." },
      { q:"Do you optimize for SEO?", a:"Absolutely, on-page SEO best practices are baked into our development process." }
    ]
  },
  {
    id:"react-development",
    title:"React Development",
    description:"Component-driven Single Page Applications using React, Vite, and Tailwind CSS.",
    overview:"Harness the power of modern frontend architectures. We engineer dynamic, highly interactive Single Page Applications (SPAs) using React.js that deliver app-like experiences directly in the browser.",
    benefits: ["Instant page transitions","Highly scalable component architecture","Rich interactivity","Easier maintenance"],
    targetAudience:"SaaS companies and businesses requiring complex web applications.",
    features: ["React.js","Vite Configured","State Management","Component Architecture","API Integration","Tailwind CSS"],
    techStack: ["React","Vite","Zustand/Redux","Tailwind CSS","Framer Motion"],
    pricing:"Premium Web Application starting at ₹29,999+",
    faqs: [
      { q:"Why choose React?", a:"React allows for seamless user experiences without page reloads, making your app feel incredibly fast." },
      { q:"Can you migrate my old site to React?", a:"Yes, we specialize in modernizing legacy applications into React-based architectures." }
    ]
  },
  {
    id:"nodejs-development",
    title:"Backend Development",
    description:"Secure REST APIs and role-based authentication using Node.js and Express.",
    overview:"The backbone of any powerful application. We architect secure, scalable, and highly performant backend systems using Node.js. From REST APIs to real-time WebSockets, we ensure your data moves efficiently and securely.",
    benefits: ["Handles massive concurrency","Secure data processing","Seamless third-party integrations","Robust API design"],
    targetAudience:"Startups and enterprises needing custom software infrastructure.",
    features: ["Node.js","Express.js","REST APIs","JWT Authentication","Role-Based Access","Rate Limiting"],
    techStack: ["Node.js","Express","JWT","Swagger"],
    pricing:"Premium Web Application starting at ₹29,999+",
    faqs: [
      { q:"Is Node.js secure?", a:"Yes, we implement strict security measures including Helmet, CORS, rate-limiting, and sanitized inputs." },
      { q:"Do you provide API documentation?", a:"Yes, we can provide comprehensive Swagger documentation for your frontend teams." }
    ]
  },
  {
    id:"database",
    title:"Database Engineering",
    description:"Scalable data modeling using MongoDB and PostgreSQL.",
    overview:"Data is your most valuable asset. We design optimized database schemas that ensure rapid query times, data integrity, and seamless scalability whether you need NoSQL flexibility or SQL relational precision.",
    benefits: ["Zero data loss","Lightning-fast queries","Scalable architecture","Automated backups"],
    targetAudience:"Applications generating or managing large amounts of user data.",
    features: ["MongoDB","PostgreSQL","Data Modeling","Query Optimization","Indexing","Migration"],
    techStack: ["MongoDB","PostgreSQL","Mongoose","Prisma"],
    pricing:"Included with Backend Development or Custom Quotes",
    faqs: [
      { q:"Which database should I choose?", a:"We recommend MongoDB for flexible, document-based data and PostgreSQL for strict, relational data." }
    ]
  },
  {
    id:"wordpress-development",
    title:"WordPress Development",
    description:"Custom themes, WooCommerce stores, and corporate blogs built on WordPress.",
    overview:"Empower your team with the world's most popular CMS. We build highly customized, secure, and fast WordPress websites that allow you to manage your own content without needing to write a single line of code.",
    benefits: ["Easy content management","Massive plugin ecosystem","Cost-effective","SEO friendly structure"],
    targetAudience:"Bloggers, E-commerce stores, and businesses needing frequent content updates.",
    features: ["Custom Themes","WooCommerce","Plugin Integration","Speed Optimization","Security Hardening","Page Builders"],
    techStack: ["WordPress","PHP","MySQL","WooCommerce"],
    pricing:"Business Website ₹14,999",
    faqs: [
      { q:"Will my WordPress site be slow?", a:"No, we optimize databases, use caching, and minimize heavy plugins to ensure rapid load times." },
      { q:"Can I edit the text myself?", a:"Absolutely. We set up user-friendly dashboards so you have full control over your content." }
    ]
  },
  {
    id:"poster-design",
    title:"Poster & Graphic Design",
    description:"Stunning social media posters, promotional banners, and marketing graphics.",
    overview:"Capture attention instantly. Our graphic design team creates scroll-stopping visuals for your marketing campaigns, social media channels, and offline events that perfectly align with your brand guidelines.",
    benefits: ["Increases social engagement","Professional brand image","Drives promotional sales","Consistent visual identity"],
    targetAudience:"Brands, Influencers, and Businesses running active marketing campaigns.",
    features: ["Social Media Posts","Event Posters","Promotional Banners","Festival Graphics","Typography","Brand Consistency"],
    techStack: ["Photoshop","Illustrator","Canva Pro","Figma"],
    pricing:"Custom packages based on volume",
    faqs: [
      { q:"Do you design for Instagram and LinkedIn?", a:"Yes, we provide correctly sized graphics for all major social platforms." },
      { q:"Can I request revisions?", a:"Yes, our design packages include reasonable revision rounds to ensure perfection." }
    ]
  }
];

export const TECH_STACK = [
  { name:'HTML5', level:'Expert', category:'Frontend' },
  { name:'CSS3', level:'Expert', category:'Frontend' },
  { name:'JavaScript', level:'Expert', category:'Frontend' },
  { name:'React', level:'Expert', category:'Frontend' },
  { name:'Tailwind CSS', level:'Expert', category:'Frontend' },
  { name:'Node.js', level:'Advanced', category:'Backend' },
  { name:'Express.js', level:'Advanced', category:'Backend' },
  { name:'MongoDB', level:'Advanced', category:'Backend' },
  { name:'PostgreSQL', level:'Advanced', category:'Backend' },
  { name:'WordPress', level:'Expert', category:'Backend' }
];

export const SOCIAL_LINKS = {
  instagram:"https://instagram.com/deyzorainfotech",
  linkedin:"https://linkedin.com/company/deyzorainfotech",
  telegram:"https://t.me/deyzorainfotech",
  discord:"https://discord.gg/deyzorainfotech",
  github:"https://github.com/deyzorainfotech",
  email:"mailto:deyzorainfotech@gmail.com",
  whatsapp:"https://wa.me/919879001603"
};
export const FAQS = [
  { q:"Do you design custom websites or use templates?", a:"We design custom, modern websites tailored specifically to your business goals. We do not rely on cheap templates." },
  { q:"How long does it take to build a website?", a:"A Starter website typically takes 5-7 days, a Business website takes 7-10 days, and Custom Web Applications depend entirely on the project scope." },
  { q:"Do you provide hosting and domain registration?", a:"Yes, we can assist with securing your domain and setting up optimized hosting on platforms like Vercel, AWS, or standard shared hosting depending on your needs." },
  { q:"Are your websites SEO friendly?", a:"Absolutely. All our websites are built with semantic HTML, optimized performance, and proper meta tags to ensure they rank well on Google." },
  { q:"Do you provide maintenance after the website is launched?", a:"Yes, we offer ongoing support and maintenance packages to keep your website secure, updated, and performing optimally." },
  { q:"Can I manage the website content myself?", a:"Yes, if you choose our Business plan (with WordPress) or a Custom App with an Admin Panel, you can easily manage your own content." },
  { q:"What technology stack do you use?", a:"We specialize in modern stacks: React.js, Vite, and TailwindCSS for frontend, and Node.js, Express, MongoDB/PostgreSQL for backend." },
  { q:"Are your websites mobile-responsive?", a:"100%. We take a mobile-first approach ensuring your website looks perfect on smartphones, tablets, and ultra-wide monitors." },
  { q:"Do you require an upfront payment?", a:"Yes, we typically require a 50% advance payment to commence work, with the remaining 50% due upon final approval before launch." },
  { q:"Can you help with Social Media graphics?", a:"Yes, our graphic design team can create stunning promotional posters, banners, and marketing graphics for your brand." }
];

export const CLIENTS = [
  { name:"Parmar Infotech" },
  { name:"Keshavkrupa Dairy" },
  { name:"DevHubs" },
  { name:"Bharkadevi Ice Cream" }
];
