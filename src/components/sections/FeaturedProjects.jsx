import { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Tabs } from '../ui/Tabs';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

const projects = [
  {
    id: 1,
    title: "Apex Medical Portal",
    category: "Web Apps",
    categoryKey: "web-apps",
    description: "Online appointment booking system and patient health records portal with instant SMS notifications.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://example.com",
    metrics: "200% increase in online patient bookings",
    client: "Apex Healthcare",
    challenge: "The client was losing patients due to slow phone booking queues during peak hours.",
    solution: "We built a mobile-friendly web app that allows booking appointments in 3 simple clicks."
  },
  {
    id: 2,
    title: "Luxe Fashion Boutique",
    category: "E-Commerce",
    categoryKey: "e-commerce",
    description: "High-converting online store with Razorpay checkout, live inventory management, and Instagram shop integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Shopify API", "Razorpay", "Tailwind"],
    liveUrl: "https://example.com",
    metrics: "120% growth in monthly revenue within 30 days",
    client: "Luxe Studio",
    challenge: "High cart abandonment on mobile devices due to slow checkout pages.",
    solution: "Designed a 1-page instant checkout with UPI payment integration."
  },
  {
    id: 3,
    title: "Nova Logistics Fleet Tracker",
    category: "Mobile Apps",
    categoryKey: "mobile-apps",
    description: "Real-time delivery tracking app for fleet managers and drivers with automated GPS updates.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tech: ["React Native", "Firebase", "Google Maps API"],
    liveUrl: "https://example.com",
    metrics: "Saved 15+ hours of manual phone calls per week",
    client: "Nova Logistics",
    challenge: "Drivers had to call the control center manually after every drop-off.",
    solution: "Built a cross-platform mobile app with automated GPS location pings."
  },
  {
    id: 4,
    title: "SmartBot AI Customer Support",
    category: "AI & Automation",
    categoryKey: "ai-automation",
    description: "AI-powered WhatsApp chatbot that answers customer FAQs 24/7 and qualifies sales leads automatically.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tech: ["OpenAI API", "Python", "WhatsApp API", "Node.js"],
    liveUrl: "https://example.com",
    metrics: "95% instant customer query resolution rate",
    client: "Urban Retail",
    challenge: "Support team was overwhelmed with repetitive questions about business hours and pricing.",
    solution: "Deploved an AI bot that resolves 95% of common questions instantly on WhatsApp."
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-apps", label: "Websites & Apps" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "ai-automation", label: "AI & Bots" }
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.categoryKey === activeCategory);

  return (
    <section className="py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="cyan" className="mb-4">Our Recent Work</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Projects Built For Results.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
            Explore how we helped businesses increase sales, automate workflows, and launch modern digital products.
          </p>

          <Tabs 
            tabs={categories} 
            activeTab={activeCategory} 
            onChange={setActiveCategory} 
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="accent">{project.category}</Badge>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[var(--color-accent)]" /> View Case Study
                  </button>

                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent)] hover:text-white transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-56 bg-black">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3 font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Impact: {selectedProject.metrics}
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">The Business Challenge</h4>
                <p className="text-sm text-white/70">{selectedProject.challenge}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Our Solution</h4>
                <p className="text-sm text-white/70">{selectedProject.solution}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Client: {selectedProject.client}</span>
                <Button to="/contact" size="sm">Start Similar Project</Button>
              </div>
            </div>
          )}
        </Modal>

      </Container>
    </section>
  );
}
