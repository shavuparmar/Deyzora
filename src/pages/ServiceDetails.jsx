import { useEffect, useMemo } from'react';
import { useParams, Navigate, Link } from'react-router-dom';
import { motion } from'framer-motion';
import { Check, ArrowRight } from'lucide-react';
import { SERVICES } from'../data/constants';
import SEO from'../components/SEO';
import { Button } from'../components/ui/Button';
import { Card } from'../components/ui/Card';
import { Section, Container } from'../components/ui/LayoutComponents';
import ContactForm from'../components/sections/ContactForm';
import FAQ from'../components/sections/FAQ';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = useMemo(() => SERVICES.find(s => s.id === slug), [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Deyzora Infotech",
      "url": "https://deyzora.online/"
    },
    "areaServed": "IN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title + " Services",
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="pt-24 bg-[var(--color-background)] min-h-screen">
      <SEO 
        title={`${service.title} | Deyzora Infotech`} 
        description={service.description} 
        schema={serviceSchema}
      />
      
      {/* Hero Section */}
      <Section className="relative pt-20 pb-24 border-b border-[var(--color-border)] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted-foreground)] text-sm font-medium mb-6">
            Services / {service.title}
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-10"
          >
            {service.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/lets-talk" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-full">
              <Button variant="primary">Start Your Project</Button>
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Overview & Benefits */}
      <Section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6">Overview</h2>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed text-lg mb-8">
                {service.overview}
              </p>
              <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                <h3 className="font-bold text-[var(--color-foreground)] mb-2">Ideal For</h3>
                <p className="text-[var(--color-muted-foreground)]">{service.targetAudience}</p>
              </div>
            </div>
            <Card glass>
              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">Business Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-foreground)]/90 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Features & Tech Stack */}
      <Section className="py-24 bg-[var(--color-surface)]/30 border-y border-[var(--color-border)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-8">Core Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center gap-3 hover:border-[var(--color-accent)]/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-muted-foreground)]/50" />
                    <span className="text-[var(--color-foreground)]/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-4">
                {service.techStack.map((tech, idx) => (
                  <div key={idx} className="px-6 py-3 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] font-bold shadow-lg">
                    {tech}
                  </div>
                ))}
              </div>
              
              <Card glass className="mt-12 p-8 border-[var(--color-accent)]/30 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--color-accent)]/20 blur-[50px]" />
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Pricing Guideline</h3>
                <p className="text-[var(--color-muted-foreground)] mb-6">{service.pricing}</p>
                <Link to="/pricing" className="text-[var(--color-accent)] font-bold flex items-center gap-2 hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded px-1 -mx-1 w-max">
                  View Full Pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Custom FAQ for this service */}
      {service.faqs && (
        <Section className="py-24">
          <Container className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-10 text-center">Specific Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-colors">
                  <h3 className="font-bold text-[var(--color-foreground)] mb-2 text-lg">{faq.q}</h3>
                  <p className="text-[var(--color-muted-foreground)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Global Sections */}
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default ServiceDetails;
