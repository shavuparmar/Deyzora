import React from 'react';
import { motion } from 'framer-motion';
import { FiHexagon, FiCompass, FiAward, FiShield } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { ABOUT_INFO } from '../../utils/constants';
import { FADE_UP, STAGGER_CONTAINER, FADE_LEFT, FADE_RIGHT } from '../../hooks/useScrollAnimation';

// Helper for core pillars icons
const getAboutIcon = (index) => {
  switch (index) {
    case 0: return <FiHexagon className="w-5 h-5 text-brand-purple" />;
    case 1: return <FiCompass className="w-5 h-5 text-brand-blue" />;
    case 2: return <FiAward className="w-5 h-5 text-brand-purple" />;
    default: return <FiShield className="w-5 h-5 text-brand-purple" />;
  }
};

/**
 * About Section Component with asymmetrical parallel animations.
 */
export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing orbs */}
      <span className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <span className="absolute left-10 bottom-10 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          badge="Who We Are"
          title="Engineered for start-up velocity."
          subtitle="Discover how we bridge the gap between pixel-perfect aesthetics and robust full-stack systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Our Origin & Story (Parallel Slide-in from Right/Left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_RIGHT}
            className="lg:col-span-5 flex flex-col justify-center gap-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
              {ABOUT_INFO.mission}
            </h3>

            <p className="text-brand-gray text-base font-light leading-relaxed">
              {ABOUT_INFO.story}
            </p>

            {/* Micro Highlight block */}
            <div className="p-6 rounded-2xl bg-white/2 border border-white/5 relative overflow-hidden mt-4">
              <span className="absolute -right-4 -bottom-4 w-16 h-16 bg-brand-purple/10 rounded-full blur-xl pointer-events-none" />
              <p className="text-xs text-brand-light font-medium uppercase tracking-wider mb-2">
                ⚡ Our Philosophy
              </p>
              <p className="text-brand-gray text-xs leading-relaxed font-light">
                We believe software is a form of art. A product must not only perform exceptionally, it must look, feel, and behave like a premium SaaS masterpiece.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars (Parallel Slide-in from Left/Right with Stagger) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={STAGGER_CONTAINER}
            className="lg:col-span-7 space-y-6"
          >
            {ABOUT_INFO.pillars.map((pillar, index) => (
              <GlassCard
                key={pillar.title}
                animate={true}
                delay={index * 0.08}
                className="p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start border border-white/5 hover:border-brand-purple/20 hover:shadow-[0_10px_25px_-5px_rgba(124,58,237,0.15)] transition-all duration-300"
              >
                {/* Visual Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30">
                  {getAboutIcon(index)}
                </div>

                {/* Pillar Copy */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-brand-purple transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
