import React from 'react';
import { TRUSTED_COMPANIES } from '../../utils/constants';

/**
 * TrustedBy Section containing infinite desaturated horizontal scrolling brand marquee.
 */
export default function TrustedBy() {
  // Duplicate companies to ensure continuous looping without visual gaps
  const doubledCompanies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES];

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/1 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-brand-gray/60 font-semibold select-none">
          Trusted by high-growth startups & software leaders
        </span>
      </div>

      {/* Infinite scrolling marquee row container */}
      <div className="relative flex items-center overflow-hidden w-full select-none">
        
        {/* Left & Right gradient masks to blend edges smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* Marquee sliding row */}
        <div className="flex gap-16 items-center whitespace-nowrap animate-marquee">
          {doubledCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2.5 text-brand-gray hover:text-white transition-colors duration-300 cursor-default"
            >
              {/* Minimalist Logo Icon */}
              <span className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-display font-extrabold text-[10px]">
                {company.name.charAt(0)}
              </span>
              {/* Logo Title */}
              <span className="font-display font-bold text-base tracking-widest uppercase">
                {company.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
