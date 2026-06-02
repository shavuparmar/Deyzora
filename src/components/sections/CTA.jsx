import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import { FADE_UP } from '../../hooks/useScrollAnimation';

/**
 * CTA Section Component.
 */
export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden z-20">
      
      {/* Background glowing mesh */}
      <span className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-[600px] h-[400px] bg-gradient-to-tr from-brand-purple/10 to-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Immersive CTA Glass container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={FADE_UP}
          className="relative rounded-3xl md:rounded-[40px] overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 sm:p-12 md:p-20 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-center"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {/* Subtle grid mesh backdrop inside CTA */}
          <div className="absolute inset-0 grid-mesh opacity-20 pointer-events-none" />

          {/* Glowing neon top stripe border */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-60" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Tag Badging */}
            <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest text-brand-purple bg-brand-purple/10 border border-brand-purple/20 mb-6">
              Empower Your Operations
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Let’s Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                Extraordinary Together
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-brand-gray text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg">
              Partner with a senior engineering squad to design interactive design systems, deploy lightning-fast platforms, and integrate automation workflows.
            </p>

            {/* Call to action routes */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <GradientButton href="#contact" variant="primary">
                Launch Project <FiArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton href="mailto:hello@deyzora.com" variant="secondary">
                hello@deyzora.com <FiMail className="w-4 h-4 ml-1.5 text-brand-purple" />
              </GradientButton>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
