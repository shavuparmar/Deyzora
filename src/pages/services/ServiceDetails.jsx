import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, Code2, 
  HelpCircle, Sparkles, MessageSquare
} from 'lucide-react';
import { services } from '../../data/services';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const defaultProcess = [
    { step: "01", title: "Discovery & Architecture", desc: "We map out your business objectives, target audience, technical requirements, and core KPIs." },
    { step: "02", title: "UI/UX & Wireframing", desc: "Design high-fidelity glassmorphic screen layouts and clickable interactive prototypes for review." },
    { step: "03", title: "Agile Development", desc: "Engineering the platform with React, Vite, clean CSS components, and sub-second speed optimization." },
    { step: "04", title: "QA, Audit & Deployment", desc: "Thorough Lighthouse 95+ speed auditing, cross-device responsiveness check, SSL setup, and live launch." }
  ];

  const defaultTechStack = [
    "React 18", "Next.js", "Vite", "TailwindCSS v4", "Framer Motion", "Vercel Edge", "Node.js", "REST & GraphQL"
  ];

  const defaultFaqs = [
    {
      q: `How long does ${service.title} take to complete?`,
      a: `Typical turnaround ranges from 3 to 14 business days depending on feature scope. We provide milestone tracking throughout development.`
    },
    {
      q: "Do I get full ownership of the source code?",
      a: "Yes! Once final milestone payment is completed, 100% full intellectual property and source code ownership is handed over to you."
    },
    {
      q: "Is technical maintenance included?",
      a: "All our plans include up to 3 months of free technical warranty, bug fixes, and security monitoring."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>{`${service.title} Agency Services | Deyzora Infotech`}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://deyzora.com/services/${service.slug}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-white/50 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#0070F3] font-semibold">{service.title}</span>
        </div>

        {/* Hero Banner Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#50E3C2] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
              {service.category} Service
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-normal">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link 
                to={`/contact?service=${service.slug}`}
                className="h-14 px-8 rounded-full bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-base shadow-[0_0_30px_rgba(0,112,243,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing"
                className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base flex items-center justify-center transition-all"
              >
                View Pricing Tiers
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#0070F3]" /> Service Summary
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-sm">
                  <span className="text-white/60">Estimated Investment:</span>
                  <span className="font-extrabold text-[#50E3C2]">{service.pricing}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-sm">
                  <span className="text-white/60">Speed Guarantee:</span>
                  <span className="font-bold text-emerald-400">95+ PageSpeed Score</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-sm">
                  <span className="text-white/60">Included Support:</span>
                  <span className="font-semibold text-white">3 Months Free Care</span>
                </div>
              </div>
              <div className="bg-[#0070F3]/10 border border-[#0070F3]/30 rounded-2xl p-4 text-xs text-white/80 leading-relaxed">
                🚀 Sub-second performance tuning, clean React architecture, and mobile-first responsive layout guaranteed.
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#50E3C2]" /> Key Business Benefits
            </h2>
            <div className="space-y-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#50E3C2] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0070F3]" /> Core Technical Features
            </h2>
            <div className="space-y-4">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#0070F3] shrink-0 mt-1" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Our 4-Step Delivery Process</h2>
            <p className="text-sm text-white/70">How we engineer and launch your project with zero stress.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {defaultProcess.map((step, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-6 relative">
                <span className="text-3xl font-black text-[#0070F3] mb-4 block">{step.step}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="glass-card rounded-3xl p-8 mb-20 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#0070F3]" /> Technologies & Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {defaultTechStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10 flex items-center justify-center gap-2">
            <HelpCircle className="w-7 h-7 text-[#0070F3]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {defaultFaqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-white/10">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to get started with {service.title}?
          </h2>
          <p className="text-sm text-white/70 mb-8 max-w-xl mx-auto">
            Book a free 15-minute consultation. We'll provide a detailed scope breakdown and fixed estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/contact?service=${service.slug}`}
              className="h-12 px-8 rounded-full bg-[#0070F3] hover:bg-[#005bb5] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(0,112,243,0.35)]"
            >
              <span>Get Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919879001603"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us Direct
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
