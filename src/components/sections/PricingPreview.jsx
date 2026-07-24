import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';

export default function PricingPreview() {
  const featuredPlans = pricingPlans.filter(p => p.popular || p.badge).slice(0, 3);

  return (
    <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#50E3C2]" /> Transparent INR & USD Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Fixed Investment Plans. Zero Surprise Fees.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            Every plan includes source code handoff, sub-second performance tuning, and technical support.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {featuredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative ${
                plan.popular ? 'border-[#0070F3] shadow-[0_0_40px_rgba(0,112,243,0.3)]' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0070F3] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/70 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-white/40 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-white/80 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#50E3C2] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-auto border-t border-white/10">
                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3.5 rounded-full font-bold text-center text-xs block transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-[#0070F3] hover:bg-[#005bb5] text-white shadow-[0_0_20px_rgba(0,112,243,0.4)]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 px-7 py-3.5 rounded-full transition-all"
          >
            <span>View Full 14-Category Pricing Matrix</span>
            <ArrowRight className="w-4 h-4 text-[#0070F3]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
