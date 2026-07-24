import { Link } from 'react-router-dom';
import { 
  LayoutTemplate, ShoppingBag, Palette, Smartphone, Sparkles, Search, 
  ShieldCheck, Cloud, Cpu, Bot, Video, Globe, ArrowRight 
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

export default function ServicesBento() {
  return (
    <section className="py-24 bg-black border-y border-white/10 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#50E3C2] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-4">
            Capabilities & Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Engineering High-Performance Web Assets
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
            From modern landing pages to complex SaaS applications, dashboards, and SEO speed boosts.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || LayoutTemplate;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0070F3]/15 border border-[#0070F3]/30 flex items-center justify-center text-[#0070F3] group-hover:bg-[#0070F3] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#50E3C2] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/90">{service.pricing}</span>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-xs font-bold text-[#0070F3] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Learn Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 px-7 py-3.5 rounded-full transition-all hover:scale-105"
          >
            Explore All 12 Dedicated Service Pages <ArrowRight className="w-4 h-4 text-[#0070F3]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
