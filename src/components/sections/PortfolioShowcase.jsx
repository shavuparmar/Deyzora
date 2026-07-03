import { useState, useMemo } from'react';
import { motion, AnimatePresence } from'framer-motion';
import { ArrowUpRight, Search } from'lucide-react';
import { Link } from'react-router-dom';
import { projectsShow } from'../../data/projectsShow';
import { cn } from'../../utils/cn';

const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', ...new Set(projectsShow.map(p => p.category))];
  
  const filteredProjects = useMemo(() => {
    return projectsShow.filter(p => {
      const matchesCategory = activeCategory ==='All' || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-32 relative bg-black" id="portfolio">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Selected <span className="text-[var(--color-accent)] font-semibold">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Explore our latest projects where we transformed complex problems into elegant, scalable digital solutions.
            </motion.p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 w-full md:w-auto"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn("px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === cat 
                      ?"bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                      :"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full md:w-64 shrink-0"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search tech, industry..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
            </motion.div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-gray-500 glass-card">
            <p className="text-xl">No projects found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-primary hover:underline">Clear Filters</button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <Link to={`/portfolio/${project.slug}`} key={project.id} className="block group perspective-1000">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] md:aspect-[16/10] flex flex-col transition-transform duration-500 hover:rotate-x-2 hover:-rotate-y-2 shadow-2xl"
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={project.coverImage} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                      />
                      <div className={`absolute inset-0  ${project.gradient} opacity-20 group-hover:opacity-60 transition-opacity duration-500`} />
                      <div className="absolute inset-0 from-black via-black/50 to-transparent opacity-90" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                      <div className="flex justify-between items-end gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-sm">
                              {project.category}
                            </span>
                            <span className="text-sm font-medium text-gray-400">{project.industry}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover: group-hover:from-white transition-all">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {project.techStack.slice(0, 3).map(tech => (
                              <span key={tech} className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded border border-white/5">{tech}</span>
                            ))}
                            {project.techStack.length > 3 && <span className="text-xs text-gray-500 px-2 py-1">+{project.techStack.length - 3} more</span>}
                          </div>
                        </div>
                        
                        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
