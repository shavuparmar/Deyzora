import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGlobe, 
  FiSmartphone, 
  FiCpu, 
  FiZap, 
  FiTrendingUp, 
  FiLayers,
  FiTerminal,
  FiEye,
  FiActivity,
  FiUsers,
  FiCheck
} from 'react-icons/fi';
import GlassCard from './GlassCard';
import { SCALE_IN } from '../../hooks/useScrollAnimation';

// Helper to map icon names to React Icons
const getIcon = (iconName) => {
  switch (iconName) {
    case 'web': return <FiGlobe className="w-6 h-6 text-brand-purple" />;
    case 'mobile': return <FiSmartphone className="w-6 h-6 text-brand-blue" />;
    case 'ai': return <FiCpu className="w-6 h-6 text-brand-purple" />;
    case 'automation': return <FiZap className="w-6 h-6 text-brand-blue" />;
    case 'seo': return <FiTrendingUp className="w-6 h-6 text-brand-purple" />;
    case 'design': return <FiLayers className="w-6 h-6 text-brand-blue" />;
    case 'engineering': return <FiTerminal className="w-6 h-6 text-brand-purple" />;
    case 'visuals': return <FiEye className="w-6 h-6 text-brand-blue" />;
    case 'aifirst': return <FiActivity className="w-6 h-6 text-brand-purple" />;
    case 'collab': return <FiUsers className="w-6 h-6 text-brand-blue" />;
    default: return <FiGlobe className="w-6 h-6 text-brand-purple" />;
  }
};

/**
 * FeatureCard Component for Services, Why Choose Us, etc.
 */
export default function FeatureCard({
  title,
  description,
  icon,
  features = [],
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <GlassCard
      animate={true}
      delay={delay}
      className={`p-8 flex flex-col justify-between h-full group transition-all duration-500 hover:border-brand-purple/30 ${className}`}
      {...props}
    >
      <div>
        {/* Icon Container with glowing background */}
        <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/30 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
          {/* Radial blur orb under the icon on hover */}
          <div className="absolute inset-0 bg-brand-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
          <div className="relative z-10">
            {getIcon(icon)}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-brand-purple">
          {title}
        </h3>
        
        <p className="text-brand-gray text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
          {features.map((feat, index) => (
            <li key={index} className="flex items-center gap-3 text-xs text-brand-gray font-light">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                <FiCheck className="w-3 h-3 text-brand-purple" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
}
