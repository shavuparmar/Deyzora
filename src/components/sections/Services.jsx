import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';
import { SERVICES } from '../../utils/constants';
import { STAGGER_CONTAINER } from '../../hooks/useScrollAnimation';

/**
 * Services Section Component.
 */
export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden z-20">
      
      {/* Subtle decorative glow orb */}
      <span className="absolute right-0 bottom-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Our Services"
          title="Engineered for Exponential Growth"
          subtitle="We build elite, scalable solutions that align with the high engineering standards of modern industry leaders."
        />

        {/* Responsive Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <FeatureCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
