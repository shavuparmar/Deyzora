import { Briefcase, ShoppingBag, Utensils, HeartPulse, Building, MonitorSmartphone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const industries = [
  { name: 'Startups & Tech', icon: MonitorSmartphone, desc: 'Scalable MVPs and SaaS platforms.' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, desc: 'High-converting online storefronts.' },
  { name: 'Hospitality & Dining', icon: Utensils, desc: 'Elegant reservation and menu systems.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Secure, compliant clinic portals.' },
  { name: 'Real Estate', icon: Building, desc: 'Property listings and agent directories.' },
  { name: 'Professional Services', icon: Briefcase, desc: 'Consulting, legal, and financial firm sites.' }
];

export default function IndustriesWeServe() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">Industries We Serve</h2>
          <p className="text-lg text-[var(--color-text-gray)]">
            We deliver tailored digital solutions across diverse verticals, ensuring industry-specific compliance and workflows.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(industry => (
             <Card key={industry.name} className="p-8 group hover:border-[var(--color-border-hover)] transition-all">
               <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-6 group-hover:border-[var(--color-primary)] transition-colors">
                 <industry.icon className="w-6 h-6 text-white group-hover:text-[var(--color-primary)] transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-poppins text-white mb-3">{industry.name}</h3>
               <p className="text-sm text-[var(--color-text-gray)] leading-relaxed">{industry.desc}</p>
             </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
