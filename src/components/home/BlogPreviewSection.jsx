import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const recentPosts = [
  {
    title: 'The Future of Headless Commerce in 2026',
    category: 'Architecture',
    date: 'July 1, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '/blog/headless-commerce-2026'
  },
  {
    title: 'Why Typography Matters More Than Ever',
    category: 'Design',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    link: '/blog/typography-matters'
  },
  {
    title: 'Optimizing Core Web Vitals for React Apps',
    category: 'Engineering',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    link: '/blog/optimizing-core-web-vitals'
  }
];

export default function BlogPreviewSection() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Latest Insights.
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              Thoughts, engineering standards, and design philosophies from our team.
            </p>
          </div>
          <Button to="/blog" variant="outline" className="shrink-0">
            View All Articles
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, idx) => (
            <Card key={idx} className="group overflow-hidden flex flex-col h-full bg-[var(--color-bg-dark)] hover:border-[var(--color-border-hover)] transition-colors">
               <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-border-subtle)]">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                     {post.category}
                   </span>
                 </div>
               </div>
               
               <div className="p-8 flex-1 flex flex-col">
                 <div className="text-xs font-medium text-[var(--color-text-gray)] mb-4">{post.date}</div>
                 <h3 className="text-xl font-bold font-poppins text-white mb-6 group-hover:text-[var(--color-primary)] transition-colors">
                   {post.title}
                 </h3>
                 <a href={post.link} className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[var(--color-text-gray)] group-hover:text-white transition-colors mt-auto">
                   Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
