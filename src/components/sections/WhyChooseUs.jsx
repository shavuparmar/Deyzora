import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiCpu, FiShield, FiCode, FiLayers } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import { WHY_CHOOSE_US } from '../../utils/constants';
import { FADE_UP, STAGGER_CONTAINER, FADE_LEFT, FADE_RIGHT } from '../../hooks/useScrollAnimation';

// Icon helper for WhyChooseUs
const getWhyIcon = (iconName) => {
  switch (iconName) {
    case 'engineering': return <FiCode className="w-5 h-5 text-brand-purple" />;
    case 'visuals': return <FiLayers className="w-5 h-5 text-brand-blue" />;
    case 'aifirst': return <FiCpu className="w-5 h-5 text-brand-purple" />;
    case 'collab': return <FiCheckCircle className="w-5 h-5 text-brand-blue" />;
    default: return <FiShield className="w-5 h-5 text-brand-purple" />;
  }
};

/**
 * WhyChooseUs Section Component with asymmetrical columns.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Decorative ambient glowing backdrops */}
      <span className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Headline & Pitch */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={FADE_RIGHT}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-blue bg-brand-blue/10 border border-brand-blue/20 mb-6 w-max shadow-[0_0_15px_rgba(37,99,235,0.1)]">
              Why Deyzora
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Re-defining agency execution standards.
            </h2>

            <p className="text-brand-gray text-base font-light leading-relaxed mb-8">
              Traditional agencies are slow, bloated, and rely on templates. At Deyzora, we deliver customized systems on modern tech stacks, leveraging elite designs and internal AI workflows.
            </p>

            {/* Visual list items */}
            <div className="space-y-4 mb-10">
              {[
                'Dedicated full-stack engineering expertise (No outsourcing)',
                '100% tailor-made architectures, no generic frameworks',
                'Accelerated delivery leveraging semantic automation',
                'Transparent codebase access & real-time testing links',
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-light/90 font-light">{bullet}</span>
                </div>
              ))}
            </div>

            <GradientButton href="#contact" variant="primary" className="self-start">
              Explore Collaborative Workspace
            </GradientButton>
          </motion.div>

          {/* Right Column - Dynamic Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={STAGGER_CONTAINER}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {WHY_CHOOSE_US.map((item, index) => (
              <GlassCard
                key={index}
                animate={true}
                delay={index * 0.1}
                className="p-6 border border-white/5 hover:border-brand-purple/20 hover:shadow-[0_15px_30px_-5px_rgba(124,58,237,0.1)]"
              >
                {/* Visual Icon Badge */}
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30">
                  {getWhyIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-brand-purple transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-brand-gray text-xs md:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
