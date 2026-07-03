import { useEffect } from'react';
import { motion } from'framer-motion';
import { Link } from'react-router-dom';
import { Map, Briefcase, FileText, Link as LinkIcon, Scale } from'lucide-react';
import SEO from'../components/SEO';
import { Card } from'../components/ui/Card';
import { Section, Container } from'../components/ui/LayoutComponents';
import FinalCTA from'../components/sections/FinalCTA';
import { SERVICES } from'../data/constants';

const sitemapData = [
  {
    title:"Main Navigation",
    icon: Map,
    links: [
      { name:"Home", path:"/" },
      { name:"About Us", path:"/about" },
      { name:"Portfolio", path:"/portfolio" },
      { name:"Pricing", path:"/pricing" },
      { name:"Special Offers", path:"/special-offers" },
      { name:"Contact Us", path:"/contact" },
      { name:"Let's Talk", path:"/lets-talk" }
    ]
  },
  {
    title:"Our Services",
    icon: Briefcase,
    links: SERVICES.map(service => ({
      name: service.title,
      path: `/services/${service.id}`
    }))
  },
  {
    title:"Legal & Policies",
    icon: Scale,
    links: [
      { name:"Privacy Policy", path:"/privacy-policy" },
      { name:"Terms & Conditions", path:"/terms-and-conditions" },
      { name:"Refund Policy", path:"/refund-policy" },
      { name:"Cancellation Policy", path:"/cancellation-policy" },
      { name:"Shipping & Delivery Policy", path:"/shipping-policy" },
      { name:"Cookie Policy", path:"/cookie-policy" },
      { name:"Disclaimer", path:"/disclaimer" },
      { name:"Accessibility Statement", path:"/accessibility" },
      { name:"Security Policy", path:"/security-policy" }
    ]
  },
  {
    title:"Resources",
    icon: FileText,
    links: [
      { name:"Our Process", path:"/about" },
      { name:"Technologies", path:"/about" },
      { name:"Sitemap", path:"/sitemap" }
    ]
  }
];

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 bg-[var(--color-background)] min-h-screen">
      <SEO title="Sitemap | Deyzora Infotech" description="Directory of all pages on the Deyzora Infotech website." />
      
      <Section className="relative pt-12 pb-16 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
        >
          Site<span className="text-[var(--color-accent)]">map</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto"
        >
          Navigate our digital infrastructure. A complete directory of all publicly accessible pages.
        </motion.p>
      </Section>

      <Section className="pb-24">
        <Container className="max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapData.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Card
                  glass
                  as={motion.div}
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-foreground)]">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    {section.links.map(link => (
                      <li key={link.name}>
                        <Link 
                          to={link.path}
                          className="flex items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
                        >
                          <LinkIcon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </div>
  );
};

export default Sitemap;
