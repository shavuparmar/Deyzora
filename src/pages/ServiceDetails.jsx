import { useParams, Link, Navigate } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  LayoutTemplate, ShoppingBag, Palette, Smartphone, Sparkles, Search, 
  ShieldCheck, Cloud, Cpu, Bot, Video, Globe, CheckCircle2, ArrowRight, ArrowLeft 
} from 'lucide-react';
import ContactCTA from '../components/sections/ContactCTA';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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

export default function ServiceDetails() {
  const { slug } = useParams();
  
  const service = services.find(s => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComp = iconMap[service.icon] || LayoutTemplate;

  return (
    <>
      <Helmet>
        <title>{service.title} | Deyzora Infotech</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        
        {/* Breadcrumb & Navigation Header */}
        <section className="py-12 border-b border-white/10">
          <Container>
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Services
            </Link>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 flex items-center justify-center text-[var(--color-accent)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <Badge variant="cyan">{service.category}</Badge>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                  {service.title}
                </h1>

                <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
                  {service.description}
                </p>

                <div className="flex items-center gap-4">
                  <Button to={`/contact?service=${service.slug}`} variant="primary" size="lg">
                    Get Free Quote for {service.title}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-wider block mb-2">Estimated Investment:</span>
                  <div className="text-2xl font-bold font-display text-white mb-6">{service.pricing}</div>

                  <span className="text-xs text-white/50 uppercase tracking-wider block mb-3">Included Deliverables:</span>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-cyan)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/50">
                  ⚡ Average turnaround: <strong className="text-white">5-10 business days</strong>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-b border-white/10 bg-[var(--color-bg-surface)]">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-white mb-4">Why Choose Our {service.title}</h2>
              <p className="text-white/70">Here is what makes our service stand out for your business.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)] flex items-center justify-center font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{benefit}</h3>
                  <p className="text-xs text-white/60">Designed to give you maximum return on investment.</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
