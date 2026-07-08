import { ArrowRight, Monitor, Layout, PenTool, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const services = [
  {
    id: 'website',
    title: 'Website Development',
    description: 'High-performance, scalable web applications built with modern frameworks like React and Node.js.',
    icon: Monitor,
    link: '/services/website-development'
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins optimized for speed, security, and easy content management.',
    icon: Layout,
    link: '/services/wordpress-development'
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'Premium visual assets, marketing collateral, and UI/UX design that elevates your brand identity.',
    icon: PenTool,
    link: '/services/graphic-design'
  },
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'Timeless, memorable logos that capture the essence of your business and resonate with your audience.',
    icon: ImageIcon,
    link: '/services/logo-design'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Our Services in Surat & Gujarat
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              We focus exclusively on what we do best. By narrowing our scope, we deliver unparalleled quality in our core web development and design competencies to local and global clients.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={service.id} className="p-8 md:p-12 group hover:border-[var(--color-border-hover)] transition-colors flex flex-col items-start">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-[var(--color-border-subtle)] flex items-center justify-center mb-8">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              
              <Link 
                to={service.link}
                className="mt-auto inline-flex items-center gap-2 text-white font-medium text-sm hover:text-[var(--color-primary)] transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
