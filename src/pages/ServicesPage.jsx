import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  LayoutTemplate, ShoppingBag, Palette, Smartphone, Sparkles, Search, 
  ShieldCheck, Cloud, Cpu, Bot, Video, Globe, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import ContactCTA from '../components/sections/ContactCTA';
import { services } from '../data/services';

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

const categories = ["All Services", "Development", "Design", "Mobile", "Marketing", "AI", "Support"];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices = activeCategory === "All Services"
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Services | Deyzora Infotech</title>
        <meta name="description" content="Explore our full range of services: Web Development, Mobile Apps, UI/UX Design, SEO, AI Solutions, and E-commerce Stores." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        
        {/* Header Hero */}
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Digital Solutions</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Web Development & IT Services
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                High quality digital services designed to help your business get more clients, automate workflows, and look outstanding online.
              </p>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                      activeCategory === cat
                        ? 'bg-[var(--color-accent)] text-white shadow-lg'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Services List */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComp = iconMap[service.icon] || LayoutTemplate;
                return (
                  <div 
                    key={service.id}
                    className="group rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/[0.08] hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <Badge variant="outline" size="sm">{service.category}</Badge>
                      </div>

                      <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-white/70 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/50 block">Key Benefits:</span>
                        {service.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-cyan)] shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white/80">{service.pricing}</span>
                      <Button to={`/services/${service.slug}`} size="sm" variant="outline">
                        Service Details
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
