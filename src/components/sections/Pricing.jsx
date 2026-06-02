import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';
import { PRICING_PLANS } from '../../utils/constants';
import { STAGGER_CONTAINER } from '../../hooks/useScrollAnimation';

/**
 * Pricing Section Component with billing cycle toggle.
 */
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Subtle decorative glow orb */}
      <span className="absolute left-1/4 bottom-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Pricing"
          title="Transparent, Value-Backed Plans"
          subtitle="Select a dynamic engagement model tailored for your startup velocity. Save 20% on annual billing contract commitments."
        />

        {/* Toggle Billing switch */}
        <div className="flex items-center justify-center gap-4 mb-16 select-none">
          <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${!isAnnual ? 'text-white' : 'text-brand-gray'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-white/5 border border-white/10 p-1 transition-colors focus:outline-none flex items-center cursor-pointer"
            aria-label="Toggle Billing Interval"
          >
            <div 
              className={`w-4 h-4 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue transition-transform duration-300 ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${isAnnual ? 'text-white' : 'text-brand-gray'} flex items-center gap-1.5`}>
            Annual <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">SAVE 20%</span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {PRICING_PLANS.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isPopular = plan.popular;

            return (
              <GlassCard
                key={plan.name}
                animate={true}
                delay={index * 0.1}
                className={`p-8 flex flex-col justify-between relative h-full ${
                  isPopular 
                    ? 'border-brand-purple bg-brand-purple/5 shadow-[0_20px_40px_-5px_rgba(124,58,237,0.15)] scale-102 lg:scale-105 z-10' 
                    : 'border-white/5 bg-white/1 hover:border-brand-purple/20'
                }`}
              >
                {/* Popularity Badge pill overlay */}
                {isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg border border-brand-purple/20">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Plan Name & Subheading */}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-brand-gray text-xs font-light leading-relaxed mb-6">{plan.description}</p>
                  
                  {/* Price display with billing units */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                      {price}
                    </span>
                    {price !== 'Custom' && (
                      <span className="text-brand-gray text-xs font-light">
                        / {isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>

                  {/* Bullet features checklist */}
                  <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mt-0.5">
                          <FiCheck className="w-3 h-3 text-brand-purple" />
                        </span>
                        <span className="text-brand-light/90 text-sm font-light leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action button */}
                <GradientButton
                  href="#contact"
                  variant={isPopular ? 'primary' : 'secondary'}
                  className="w-full text-center"
                >
                  {plan.buttonText}
                </GradientButton>

              </GlassCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
