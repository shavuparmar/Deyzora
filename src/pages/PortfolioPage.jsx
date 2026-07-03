import { useEffect, useState } from'react';
import { motion, AnimatePresence } from'framer-motion';
import { ArrowUpRight } from'lucide-react';
import SEO from'../components/SEO';
import { Button } from'../components/ui/Button';
import { Card } from'../components/ui/Card';
import { Section, Container } from'../components/ui/LayoutComponents';
import FinalCTA from'../components/sections/FinalCTA';

// Mock Data for Portfolio since we removed the fake ones earlier and didn't establish a robust constants.js array for Portfolio
const PROJECTS = [
  { id: 1, title:'E-Commerce Platform', category:'React', image:'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop', tech: ['React','Node.js','MongoDB'] },
  { id: 2, title:'Corporate Dashboard', category:'Web Design', image:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', tech: ['Figma','UI/UX'] },
  { id: 3, title:'SaaS Landing Page', category:'Web Design', image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', tech: ['Tailwind','React'] },
  { id: 4, title:'Blog Network', category:'WordPress', image:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop', tech: ['WordPress','PHP'] },
  { id: 5, title:'Social Campaign', category:'Poster Design', image:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop', tech: ['Photoshop','Illustrator'] },
  { id: 6, title:'Real Estate Portal', category:'React', image:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop', tech: ['Next.js','PostgreSQL'] },
];

const CATEGORIES = ['All','React','Web Design','WordPress','Poster Design'];

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeTab ==='All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 bg-[var(--color-background)] min-h-screen">
      <SEO title="Portfolio | Deyzora Infotech" description="Explore our recent projects and digital products." />
      
      {/* Hero */}
      <Section className="relative pt-12 pb-24 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--color-foreground)]"
        >
          Our <span className="text-[var(--color-accent)]">Work</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto"
        >
          A selection of our latest design and development projects.
        </motion.p>
      </Section>

      {/* Filters */}
      <Section className="mb-16">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                  activeTab === cat 
                    ?'bg-[var(--color-foreground)] text-[var(--color-background)] shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    :'bg-[var(--color-surface)] text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-foreground)] border border-[var(--color-border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Grid */}
      <Section className="pb-32 min-h-[50vh]">
        <Container>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <Card
                  glass
                  as={motion.div}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl overflow-hidden !p-2"
                >
                  <div className="relative h-64 overflow-hidden rounded-2xl mb-4">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">{project.title}</h3>
                      <p className="text-sm text-[var(--color-accent)]">{project.category}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent-foreground)] transition-all text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                      <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </Card>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      <FinalCTA />
    </div>
  );
};

export default PortfolioPage;
