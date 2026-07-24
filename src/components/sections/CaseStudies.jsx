import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const studies = [
  {
    client: 'HealthTech AI',
    metric: '400%',
    metricLabel: 'Increase in diagnosis speed',
    desc: 'Developed a custom AI-driven diagnostic tool using Python and React Native, securing $2M in seed funding.'
  },
  {
    client: 'FinBank Corp',
    metric: '0.1s',
    metricLabel: 'API Response Time',
    desc: 'Re-architected legacy banking monolith into microservices using Go and AWS Kubernetes.'
  },
  {
    client: 'E-Comm Global',
    metric: '3M+',
    metricLabel: 'Monthly Active Users',
    desc: 'Built a highly scalable Next.js storefront with sub-second page loads globally.'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-black border-y border-[var(--color-border-subtle)] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-purple)]/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight">
            Measurable impact.
          </h2>
          <p className="text-lg text-[var(--color-text-gray)] max-w-2xl">
            We don't measure success by lines of code, but by business outcomes. Here's how we've moved the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-8 border border-[var(--color-border-subtle)] hover:border-[var(--color-accent-purple)]/50 transition-colors">
                <div className="text-sm font-bold text-[var(--color-text-gray)] uppercase tracking-widest mb-10">
                  Client: <span className="text-white">{study.client}</span>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold font-display text-[var(--color-accent-purple)] tracking-tighter mb-2">
                    {study.metric}
                  </div>
                  <div className="text-white font-medium">
                    {study.metricLabel}
                  </div>
                </div>

                <p className="text-[var(--color-text-gray)] leading-relaxed">
                  {study.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
