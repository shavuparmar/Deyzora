import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import ContactCTA from '../components/home/ContactCTA';

const demoCategories = [
  {
    category: "Business & Corporate",
    demos: [
      {
        title: 'Modern Corporate Agency',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
        description: 'A clean, professional layout suitable for B2B services, consulting firms, and established agencies.',
        technologies: ['React', 'Tailwind', 'Framer Motion']
      },
      {
        title: 'Fintech Startup',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        description: 'Dark-mode tailored design with trust signals and clear conversion paths for financial tech.',
        technologies: ['Next.js', 'PostgreSQL', 'Stripe API']
      }
    ]
  },
  {
    category: "Restaurants & Hospitality",
    demos: [
      {
        title: 'Premium Dining Experience',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
        description: 'Elegant imagery-focused layout with integrated reservation systems and menu displays.',
        technologies: ['WordPress', 'PHP', 'MySQL']
      },
      {
        title: 'Local Cafe & Bakery',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
        description: 'Warm, inviting aesthetics perfect for local coffee shops and independent bakeries.',
        technologies: ['HTML5', 'CSS3', 'JS']
      }
    ]
  },
  {
    category: "E-Commerce & Retail",
    demos: [
      {
        title: 'Fashion Storefront',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
        description: 'High-conversion product grids, quick-view features, and seamless checkout flows.',
        technologies: ['Shopify', 'Liquid', 'React']
      }
    ]
  },
  {
    category: "Portfolio & Personal Brands",
    demos: [
      {
        title: 'Creative Professional',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
        description: 'Minimalist gallery layouts highlighting visual work for photographers and designers.',
        technologies: ['Vue', 'Nuxt.js', 'GSAP']
      }
    ]
  }
];

export default function DemoWebsites() {
  const DEMO_URL = "https://deyzdemo.netlify.app";

  return (
    <>
      <Helmet>
        <title>Demo Websites | Deyzora Infotech</title>
        <meta name="description" content="Explore live demo websites built by Deyzora Infotech across various industries." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        <section className="py-20 md:py-32 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface-light)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
          <Container className="text-center max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] text-sm font-medium mb-8">
              <MonitorPlay className="w-4 h-4 text-[var(--color-primary)]" />
              Live Previews
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold font-poppins text-white mb-8 tracking-tighter"
            >
              Demo <span className="text-[var(--color-primary)]">Websites</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-[var(--color-text-gray)] leading-relaxed mx-auto mb-12"
            >
              Interact with some of our pre-built premium layouts and digital experiences designed for performance and conversion.
            </motion.p>
          </Container>
        </section>

        <section className="py-24">
          <Container>
            {demoCategories.map((categoryGroup, index) => (
              <div key={index} className="mb-24 last:mb-0">
                <div className="flex items-center justify-between mb-12 border-b border-[var(--color-border-subtle)] pb-4">
                  <h2 className="text-3xl font-bold font-poppins text-white">
                    {categoryGroup.category}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  {categoryGroup.demos.map((demo, i) => (
                    <Card key={i} className="group overflow-hidden flex flex-col h-full bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-surface-light)] border-[var(--color-border-subtle)] hover:border-[var(--color-primary)]/50 transition-all duration-300">
                       <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
                         <img src={demo.image} alt={demo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <a 
                             href={DEMO_URL}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="px-8 py-4 bg-[var(--color-primary)] text-white font-bold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                           >
                             View Demo <ExternalLink className="w-5 h-5" />
                           </a>
                         </div>
                       </div>
                       <div className="p-8 md:p-10 flex-1 flex flex-col">
                         <h3 className="text-2xl font-bold font-poppins text-white mb-4">{demo.title}</h3>
                         <p className="text-[var(--color-text-gray)] leading-relaxed mb-8 flex-1 text-base">
                           {demo.description}
                         </p>
                         
                         <div className="flex flex-wrap gap-2 mb-8">
                           {demo.technologies.map((tech, idx) => (
                             <span key={idx} className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 border border-white/10 rounded-md">
                               {tech}
                             </span>
                           ))}
                         </div>

                         <a 
                           href={DEMO_URL} 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--color-text-gray)] hover:text-white transition-colors group-hover:text-[var(--color-primary)]"
                         >
                           Launch Preview <ExternalLink className="w-4 h-4" />
                         </a>
                       </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
