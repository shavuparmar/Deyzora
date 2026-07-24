import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ShieldCheck, Sparkles, ArrowRight, Layers, Briefcase } from 'lucide-react';
import { pricingCategories, pricingPlans, optionalAddons } from '../data/pricing';

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPlans = activeCategory === 'all'
    ? pricingPlans
    : pricingPlans.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Transparent Agency Investment Matrix & Plans | Deyzora Infotech</title>
        <meta 
          name="description" 
          content="Explore transparent investment pricing for websites, mobile apps, e-commerce, web applications, SaaS platforms, and enterprise software by Deyzora Infotech." 
        />
        <link rel="canonical" href="https://deyzora.com/pricing" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
            Fixed Scope Investment Matrix
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Transparent Pricing For Every Scale
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            No hidden costs. No unexpected fees. Fixed quotes with milestone deliverables and source code ownership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {pricingCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-[#0070F3] text-white shadow-[0_0_20px_rgba(0,112,243,0.4)]'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.isEnterprise
                  ? 'border-2 border-[#50E3C2] bg-gradient-to-b from-[#50E3C2]/10 to-black shadow-[0_0_50px_rgba(80,227,194,0.15)]'
                  : plan.popular
                  ? 'border-2 border-[#0070F3] shadow-[0_0_40px_rgba(0,112,243,0.3)]'
                  : ''
              }`}
            >
              {/* Badge Overlay */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg ${
                    plan.isEnterprise ? 'bg-[#50E3C2] text-black' : 'bg-[#0070F3]'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/70 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price block */}
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

                {/* Ideal For & Timeline Meta */}
                <div className="space-y-2 mb-6 text-xs">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Clock className="w-4 h-4 text-[#50E3C2] shrink-0" />
                    <span>Timeline: <strong className="text-white">{plan.deliveryTime}</strong></span>
                  </div>
                  {plan.idealFor && (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80">
                      <Briefcase className="w-4 h-4 text-[#0070F3] shrink-0" />
                      <span className="truncate">Ideal: <strong className="text-white">{plan.idealFor}</strong></span>
                    </div>
                  )}
                </div>

                {/* Deliverables preview */}
                {plan.deliverables && (
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-2">Key Deliverables:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.deliverables.map((deliv, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block mb-3">Included Specifications:</span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-white/85 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#50E3C2] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 mt-auto border-t border-white/10">
                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3.5 rounded-full font-bold text-center text-xs block transition-all hover:scale-105 ${
                    plan.isEnterprise
                      ? 'bg-[#50E3C2] hover:bg-[#3ec4a6] text-black shadow-[0_0_25px_rgba(80,227,194,0.4)]'
                      : plan.popular
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

        {/* Optional Addons Matrix */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Optional Infrastructure Add-ons</h2>
            <p className="text-xs sm:text-sm text-white/70">Enhance your web architecture with dedicated hosting, AI bots, and SEO speed boosts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {optionalAddons.map((addon) => (
              <div key={addon.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{addon.name}</h3>
                    <span className="text-xs font-bold text-[#50E3C2] bg-[#50E3C2]/10 px-2.5 py-1 rounded-full border border-[#50E3C2]/30">
                      {addon.price} <span className="text-[10px] text-white/50">{addon.period}</span>
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solution CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need a Custom Architecture or Enterprise Quotation?
          </h2>
          <p className="text-sm text-white/70 mb-8 max-w-xl mx-auto">
            Contact our senior architects to get a tailored technical proposal and NDA signed prior to development.
          </p>
          <Link
            to="/contact?plan=enterprise-custom-software"
            className="inline-flex items-center gap-2 bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,112,243,0.35)] transition-all hover:scale-105"
          >
            <span>Request Custom Enterprise Scope</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
