import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import { PROCESS_STEPS } from '../../utils/constants';
import { STAGGER_CONTAINER, FADE_UP } from '../../hooks/useScrollAnimation';

/**
 * Process Section Component displaying 6 connected workflow timeline steps.
 */
export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Ambient background glows */}
      <span className="absolute right-1/4 top-1/4 w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Our Workflow"
          title="The Path to Digital Dominance"
          subtitle="A highly structured, transparent, and iterative roadmap designed to take concepts to world-class production."
        />

        {/* Timeline Path container */}
        <div className="relative">
          
          {/* Central Track line for Desktop */}
          <div className="absolute left-[50%] -translate-x-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-purple/50 via-brand-blue/30 to-white/5 hidden lg:block" />

          {/* Staggered process steps list */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={STAGGER_CONTAINER}
            className="space-y-12 lg:space-y-24 relative"
          >
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Content Card Panel */}
                  <div className={`lg:col-span-5 ${
                    isEven ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-3'
                  }`}>
                    <GlassCard 
                      animate={true} 
                      delay={index * 0.08}
                      className="p-8 border border-white/5 hover:border-brand-purple/20 shadow-2xl relative overflow-hidden"
                    >
                      {/* Decorative backdrop light mesh inside card */}
                      <span className="absolute right-0 top-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl pointer-events-none" />

                      <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold font-mono tracking-widest text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-4 uppercase">
                        PHASE {step.number}
                      </span>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-brand-gray text-xs sm:text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Centered Circle Icon node */}
                  <div className="lg:col-span-2 flex justify-center items-center lg:order-2 relative">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 100, delay: index * 0.08 }}
                      className="w-12 h-12 rounded-full bg-[#020617] border border-brand-purple shadow-[0_0_15px_rgba(124,58,237,0.3)] flex items-center justify-center font-display font-extrabold text-white text-sm z-10"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Spacer Column */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`} />

                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
