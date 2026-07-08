import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements in detail.'
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Our team crafts pixel-perfect, accessible UI/UX designs tailored to your brand identity.'
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'We build the product using modern, scalable, and secure technologies.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Rigorous testing followed by a smooth deployment and post-launch support.'
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
            Our Process
          </h2>
          <p className="text-xl text-[var(--color-text-gray)] max-w-2xl leading-relaxed">
            A streamlined, transparent approach to bringing your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-px bg-[var(--color-border-subtle)]"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-8 group-hover:border-[var(--color-primary)] transition-colors">
                <step.icon className="w-8 h-8 text-white group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] text-xs font-bold text-white mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-3">{step.title}</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
