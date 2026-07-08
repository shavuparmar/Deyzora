import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const posts = [
  {
    title: 'The Future of Web Development in 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    slug: 'future-of-web-development-2026'
  },
  {
    title: 'Why Your Business Needs a Custom Website',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    slug: 'why-business-needs-custom-website'
  },
  {
    title: 'Mastering UI/UX Design Principles',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    slug: 'mastering-ui-ux-design'
  }
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
              Latest Insights
            </h2>
            <p className="text-xl text-[var(--color-text-gray)] leading-relaxed">
              Thoughts and perspectives from our engineering and design teams.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/blog" variant="outline" className="group">
              Read All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Card key={i} className="group flex flex-col h-full overflow-hidden hover:border-[var(--color-border-hover)] transition-colors">
              <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-dark)]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                  {post.category}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold font-poppins text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-[var(--color-text-gray)] hover:text-white font-medium text-sm transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
