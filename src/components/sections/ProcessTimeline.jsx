import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

const steps = [
  {
    number: "01",
    title: "Discovery & Plan",
    icon: MessageSquare,
    desc: "We discuss your business goals, target audience, and website requirements in plain English.",
    timeframe: "Day 1-2"
  },
  {
    number: "02",
    title: "Design & Wireframe",
    icon: Palette,
    desc: "We design modern visual layouts and clickable prototypes so you see exactly how it looks before coding.",
    timeframe: "Day 3-4"
  },
  {
    number: "03",
    title: "Fast Development",
    icon: Code2,
    desc: "We write clean, high-speed code, setup SSL security, mobile responsiveness, and payment gateways.",
    timeframe: "Day 5-6"
  },
  {
    number: "04",
    title: "Launch & Support",
    icon: Rocket,
    desc: "Your website goes live to the world! We provide full training, 99.9% uptime, and ongoing support.",
    timeframe: "Day 7"
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">Simple 4-Step Process</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            How We Build Your Website.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            No confusion, no hidden delays. A clear step-by-step workflow designed to deliver your project fast.
          </p>
        </div>

        {/* Process Cards Grid (No Scroll Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-7 hover:bg-white/[0.08] hover:border-[var(--color-accent)]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-display text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>Estimated Time:</span>
                  <span className="font-semibold text-white font-mono">{step.timeframe}</span>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
