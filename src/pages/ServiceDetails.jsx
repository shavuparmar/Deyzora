import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Monitor, Layout, PenTool, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';

const serviceData = {
  'website-development': {
    title: 'Website Development',
    icon: Monitor,
    description: 'We build high-performance, scalable, and secure websites tailored to your business goals. Utilizing modern stacks like React, Next.js, and Node, we ensure your digital presence is robust and future-proof.',
    benefits: ['Blazing Fast Performance', 'Responsive on all devices', 'SEO Optimized Architecture', 'Scalable Backend'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
  },
  'wordpress-development': {
    title: 'WordPress Development',
    icon: Layout,
    description: 'Leverage the world\'s most popular CMS. We create custom themes, develop plugins, and optimize your WordPress site for speed and security, providing you with a platform that is easy to manage and scales with your growth.',
    benefits: ['Custom Theme Design', 'Plugin Integration', 'E-Commerce (WooCommerce)', 'Advanced Security Measures'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
  },
  'graphic-design': {
    title: 'Graphic Design',
    icon: PenTool,
    description: 'Visual communication is key. Our graphic design services ensure your brand message is conveyed clearly and beautifully across all channels. From marketing collateral to social media graphics, we create visuals that captivate.',
    benefits: ['Social Media Kits', 'Marketing Materials', 'Brand Guidelines', 'UI/UX Prototypes'],
    image: 'https://images.unsplash.com/photo-1626785773579-c10ce7663e5e?auto=format&fit=crop&q=80&w=1200'
  },
  'logo-design': {
    title: 'Logo Design',
    icon: ImageIcon,
    description: 'Your logo is the face of your business. We design timeless, memorable, and versatile logos that establish a strong brand identity and leave a lasting impression on your audience.',
    benefits: ['Multiple Concepts', 'Vector Formats', 'Brand Identity Integration', 'Full Copyright Ownership'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200'
  }
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.title} | Deyzora Infotech</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-16 h-16 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 tracking-tight leading-tight"
                >
                  {service.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-[var(--color-text-gray)] mb-8 leading-relaxed max-w-lg"
                >
                  {service.description}
                </motion.p>
                
                <motion.ul 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 shrink-0 text-white/50" />
                      <span className="text-[var(--color-text-gray)] text-lg">{benefit}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden border-[var(--color-border-subtle)]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto aspect-square md:aspect-[4/3] object-cover"
                  />
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
