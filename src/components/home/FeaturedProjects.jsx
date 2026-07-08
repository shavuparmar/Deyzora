import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Website Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51159128?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    title: 'Fintech Dashboard UI',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    title: 'Corporate Brand Identity',
    category: 'Logo Design',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
  }
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Featured Work
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              A selection of our finest digital products and brand identities.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/portfolio" variant="outline" className="group">
              View All Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-dark)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
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
  );
}
