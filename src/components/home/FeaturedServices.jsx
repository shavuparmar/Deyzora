import { Code2, PenTool, LayoutTemplate, MonitorPlay, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const featured = [
  {
    title: 'Website Development',
    description: 'Custom-coded React, Next.js, and Vite web applications designed for blazing speed and scalable architectures. Perfect for SaaS and complex platforms.',
    icon: Code2,
    link: '/services/website-development',
    tags: ['React', 'Next.js', 'Tailwind', 'Node.js']
  },
  {
    title: 'WordPress Development',
    description: 'Premium WordPress solutions leveraging modern headless architectures or custom themes for unparalleled content management capabilities.',
    icon: LayoutTemplate,
    link: '/services/wordpress-development',
    tags: ['Custom Themes', 'WooCommerce', 'Headless']
  },
  {
    title: 'Graphic Design',
    description: 'Striking visual assets, marketing materials, and digital graphics that elevate your brand communication across all channels.',
    icon: MonitorPlay,
    link: '/services/graphic-design',
    tags: ['Social Media', 'Marketing', 'UI/UX']
  },
  {
    title: 'Logo Design',
    description: 'Timeless, minimalist, and memorable brand identities crafted specifically to resonate with modern digital audiences.',
    icon: PenTool,
    link: '/services/logo-design',
    tags: ['Brand Identity', 'Typography', 'Vectors']
  }
];

export default function FeaturedServices() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Specialized Expertise.
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              We don't do everything. We focus exclusively on core digital disciplines to deliver world-class quality without compromise.
            </p>
          </div>
          <Button to="/services" variant="outline" className="shrink-0">
            View All Capabilities
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((service, idx) => (
            <Card key={idx} className="group p-10 hover:border-[var(--color-primary)] transition-colors flex flex-col h-full bg-[var(--color-bg-surface)]">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/30 transition-all">
                <service.icon className="w-8 h-8 text-white group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">{service.title}</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-[var(--color-text-gray)]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-[var(--color-primary)] transition-colors mt-auto">
                Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
