import { Zap, ShieldCheck, Clock, Award } from 'lucide-react';
import { Container } from '../ui/Container';

const reasons = [
  {
    title: 'Engineered for Speed',
    description: 'We do not rely on bloated templates. Every line of code is optimized for maximum performance, ensuring sub-second load times and perfect Lighthouse scores.',
    icon: Zap
  },
  {
    title: 'Enterprise Security',
    description: 'From secure authentication flows to DDoS protection and automated backups, we build platforms that protect your business and your customers.',
    icon: ShieldCheck
  },
  {
    title: 'On-Time Delivery',
    description: 'We respect your deadlines. Through rigorous project management and transparent communication, we deliver exactly what we promise, exactly when we promise it.',
    icon: Clock
  },
  {
    title: 'Uncompromising Quality',
    description: 'Our design and engineering standards are uncompromising. We deliver polished, premium digital experiences that elevate your brand above the competition.',
    icon: Award
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)] relative overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
            Why Deyzora?
          </h2>
          <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
            We operate at the intersection of aesthetic brilliance and engineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[var(--color-bg-surface-light)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[var(--color-primary)] transition-all duration-500">
                <reason.icon className="w-8 h-8 text-white group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4">{reason.title}</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
