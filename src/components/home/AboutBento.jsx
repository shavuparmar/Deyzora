import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export default function AboutBento() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)]">
      <Container>
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
            Who We Are
          </h2>
          <p className="text-xl text-[var(--color-text-gray)] max-w-2xl leading-relaxed">
            We are a team of digital craftsmen, blending engineering precision with beautiful design to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Mission Card */}
          <Card className="md:col-span-2 lg:col-span-2 p-8 md:p-12 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-8 border border-[var(--color-primary)]/20">
              <Target className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">Our Mission</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed text-lg max-w-xl">
                To elevate brands by delivering world-class digital experiences that drive measurable growth. We believe in building software that doesn't just look good, but performs flawlessly under pressure.
              </p>
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="p-8 md:p-10 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center mb-8 border border-[var(--color-secondary)]/20">
              <Lightbulb className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">Our Vision</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed">
                To become the global standard for premium agency services, setting the benchmark for clean code and minimalist design.
              </p>
            </div>
          </Card>

          {/* Value 1 */}
          <Card className="p-8 md:p-10 flex flex-col">
            <Users className="w-8 h-8 text-white/50 mb-6" />
            <h3 className="text-xl font-bold font-poppins text-white mb-3">Client-Centric</h3>
            <p className="text-[var(--color-text-gray)] leading-relaxed">
              Your success is our success. We partner closely with our clients to ensure perfect alignment.
            </p>
          </Card>

          {/* Value 2 */}
          <Card className="md:col-span-2 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <Rocket className="w-8 h-8 text-white/50 mb-6" />
              <h3 className="text-xl font-bold font-poppins text-white mb-3">Ship Fast, Never Break</h3>
              <p className="text-[var(--color-text-gray)] leading-relaxed">
                We utilize modern CI/CD pipelines and rigorous testing to ensure rapid delivery without sacrificing quality.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-[var(--color-bg-dark)] rounded-xl border border-[var(--color-border-subtle)] flex items-center justify-center">
               <span className="text-xs text-[var(--color-text-gray)] uppercase tracking-widest font-medium">Performance</span>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
