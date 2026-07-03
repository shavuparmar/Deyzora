import { useEffect } from'react';
import { motion } from'framer-motion';
import { Check } from'lucide-react';
import SEO from'../components/SEO';
import { Button } from'../components/ui/Button';
import { Card } from'../components/ui/Card';
import { Section, Container } from'../components/ui/LayoutComponents';
import FAQ from'../components/sections/FAQ';
import { PRICING_PLANS } from'../data/pricingData';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 bg-[var(--color-background)] min-h-screen">
      <SEO title="Pricing | Deyzora Infotech" description="Transparent, affordable pricing for world-class web development." />
      
      <Section className="relative pt-12 pb-24 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
        >
          Simple, Transparent <span className="text-[var(--color-accent)]">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto"
        >
          No hidden fees, no surprise charges. High-quality software engineering at competitive rates.
        </motion.p>
      </Section>

      <Section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <Card
                glass
                key={plan.title}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl ${
                  plan.popular 
                    ?'border-[var(--color-accent)] shadow-[0_0_40px_rgba(var(--color-accent),0.15)] scale-105 z-10' 
                    :'hover:border-[var(--color-border)] border-[var(--color-border)]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[var(--color-foreground)]">{plan.price}</span>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                      <span className="text-[var(--color-muted-foreground)]">Timeline</span>
                      <span className="text-[var(--color-foreground)]/80 font-medium">{plan.timeline}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-border)] pb-2">
                      <span className="text-[var(--color-muted-foreground)]">Support</span>
                      <span className="text-[var(--color-foreground)]/80 font-medium">{plan.support}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-sm font-semibold text-[var(--color-muted-foreground)]/70 uppercase tracking-widest mb-4">Includes</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-[var(--color-foreground)]/80 text-sm leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={plan.popular ?'primary' :'outline'} 
                  className="w-full justify-center mt-auto"
                  icon={false}
                  to={`/lets-talk?plan=${encodeURIComponent(plan.title)}&price=${encodeURIComponent(plan.price.replace('₹',''))}&timeline=${encodeURIComponent(plan.timeline)}`}
                >
                  Choose {plan.title}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FAQ />
    </div>
  );
};

export default PricingPage;
