import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  LayoutTemplate, ShoppingBag, Palette, Smartphone, Sparkles, Search, 
  ShieldCheck, Cloud, Cpu, Bot, Video, Globe, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  LayoutTemplate,
  ShoppingBag,
  Palette,
  Smartphone,
  Sparkles,
  Search,
  ShieldCheck,
  Cloud,
  Cpu,
  Bot,
  Video,
  Globe
};

const categories = [
  { id: 'all', label: 'All Services (12)' },
  { id: 'Development', label: 'Web & Code' },
  { id: 'Applications', label: 'Apps & Software' },
  { id: 'E-Commerce', label: 'E-Commerce' },
  { id: 'Design & Showcases', label: 'UI/UX & Portfolios' },
  { id: 'Optimization', label: 'SEO & Speed' },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Engineering & Web Development Services | Deyzora Infotech</title>
        <meta 
          name="description" 
          content="Explore all 12 specialized web engineering services offered by Deyzora Infotech. Fast React applications, E-commerce, UI/UX, maintenance, and sub-second speed boosts." 
        />
        <link rel="canonical" href="https://deyzora.com/services" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
            Production Engineering Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            12 Tailored Services Built For Market Growth
          </h1>
          <p className="text-lg text-white/70 leading-relaxed font-normal">
            Whether you need a high-converting landing page, an enterprise SaaS platform, or sub-second performance optimization—we deliver clean code without bloat.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-[#0070F3] text-white shadow-[0_0_20px_rgba(0,112,243,0.4)]'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const IconComp = iconMap[service.icon] || LayoutTemplate;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-[#0070F3]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0070F3]/15 border border-[#0070F3]/30 flex items-center justify-center text-[#0070F3] group-hover:bg-[#0070F3] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#50E3C2] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Key Advantages:</span>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#50E3C2] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <span className="text-xs font-extrabold text-[#50E3C2]">{service.pricing}</span>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0070F3] hover:bg-[#005bb5] px-4 py-2 rounded-full transition-all"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Service CTA */}
        <div className="mt-20 glass-card rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need a Custom Architecture or Unique Software Requirements?
          </h3>
          <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto">
            We specialize in crafting custom digital solutions tailored to specific enterprise requirements. Talk directly with our lead architect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,112,243,0.35)] transition-all hover:scale-105"
          >
            <span>Consult Lead Engineer</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
