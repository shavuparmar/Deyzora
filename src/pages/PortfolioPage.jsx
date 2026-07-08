import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';

const projects = [
  {
    title: 'Fashion E-Commerce App',
    category: 'Website Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Analytics Dashboard UI',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Deyzora Infotech</title>
        <meta name="description" content="View our portfolio of premium websites, web applications, and graphic design projects." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Page Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)]">
          <Container className="text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
            >
              Our <span className="text-[var(--color-primary)]">Portfolio.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed max-w-2xl mx-auto"
            >
              Explore our recent work and see how we've helped businesses achieve their digital goals through innovative design and robust engineering.
            </motion.p>
          </Container>
        </section>

        {/* We reuse FeaturedProjects to show the top 3, then show the rest */}
        <FeaturedProjects />
        
        {/* Additional Grid for more projects */}
        <section className="section-padding pt-0 bg-[var(--color-bg-dark)]">
           <Container>
             <div className="grid lg:grid-cols-2 gap-6">
               {projects.map((project, i) => (
                 <Card key={i} className="group overflow-hidden border-[var(--color-border-subtle)]">
                    <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-dark)]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 border-t border-[var(--color-border-subtle)]">
                      <div className="text-xs font-bold text-[var(--color-text-gray)] uppercase tracking-wider mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-white">
                        {project.title}
                      </h3>
                    </div>
                 </Card>
               ))}
             </div>
           </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
