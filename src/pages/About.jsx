import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Zap, Target, Eye, Award } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import ContactCTA from '../components/sections/ContactCTA';
import { companyInfo } from '../data/company';

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty & Transparency",
    desc: "We tell you exactly what you need and what it costs upfront. No surprise fees or complicated jargon."
  },
  {
    icon: Zap,
    title: "Quality & Speed",
    desc: "We build websites using modern web technology that loads in less than 1 second on all mobile devices."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "We don't vanish after launching your website. We provide continuous support so your business thrives."
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Deyzora Infotech</title>
        <meta name="description" content="Learn who we are, why we started Deyzora Infotech, and how we help businesses grow with clean websites and apps." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        
        {/* Header Hero */}
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">About Deyzora</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                We Build Websites That Help Businesses Grow.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Deyzora Infotech was founded with a simple mission: to make high quality web development, mobile apps, and digital design accessible to every business owner without complex technical headache.
              </p>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-20 border-b border-white/10 bg-[var(--color-bg-surface)]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="accent" className="mb-4">Our Journey</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
                  Why We Started Deyzora
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed text-base">
                  <p>
                    A few years ago, we noticed that many small businesses and growing companies struggled to find reliable web developers. Too often, they were either quoted astronomical corporate prices or given slow, broken websites that looked cheap.
                  </p>
                  <p>
                    We created Deyzora Infotech to bridge that gap. We combine top-tier software design standards with straightforward communication, fair pricing, and rapid delivery.
                  </p>
                  <p>
                    Today, we have successfully delivered over <strong className="text-white">200+ projects</strong> for <strong className="text-white">150+ happy clients</strong> across healthcare, retail, logistics, services, and e-commerce.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center text-center">
                  <span className="text-4xl font-extrabold font-display text-[var(--color-accent)] mb-2">5+</span>
                  <span className="text-xs text-white/70">Years of Experience</span>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center text-center">
                  <span className="text-4xl font-extrabold font-display text-[var(--color-accent-cyan)] mb-2">200+</span>
                  <span className="text-xs text-white/70">Projects Delivered</span>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center text-center">
                  <span className="text-4xl font-extrabold font-display text-emerald-400 mb-2">99%</span>
                  <span className="text-xs text-white/70">Client Satisfaction</span>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center text-center">
                  <span className="text-4xl font-extrabold font-display text-purple-400 mb-2">24/7</span>
                  <span className="text-xs text-white/70">Dedicated Support</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 border-b border-white/10">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To deliver fast, reliable, and beautiful digital products that generate real business revenue for our clients while keeping the entire process stress-free and transparent.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To become the most trusted digital web development agency for growing businesses by constantly setting high standards in web performance, clean code, and customer satisfaction.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-[var(--color-bg-surface)]">
          <Container>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <Badge variant="purple" className="mb-4">Our Culture</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
