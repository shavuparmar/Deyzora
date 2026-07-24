import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

const techCategories = [
  { name: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'] },
  { name: 'Backend & Cloud', items: ['Node.js', 'Python', 'Vercel', 'AWS Cloud', 'Firebase'] },
  { name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] },
  { name: 'E-Commerce & CMS', items: ['Shopify', 'WooCommerce', 'WordPress', 'Strapi'] },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-[var(--color-bg-dark)] border-b border-white/10">
      <Container>
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-3">Modern Stack</Badge>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Built With Modern, High-Speed Technologies.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-sm font-bold text-[var(--color-accent-cyan)] uppercase tracking-wider mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
