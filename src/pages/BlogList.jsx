import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import ContactCTA from '../components/sections/ContactCTA';
import { blogPosts } from '../data/blog';

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog & Resources | Deyzora Infotech</title>
        <meta name="description" content="Read simple, actionable articles on web development, e-commerce tips, SEO strategies, and mobile app design." />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        <section className="py-16 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="cyan" className="mb-4">Knowledge & Articles</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight mb-6">
                Web & Business Insights
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Practical guides and advice to help you grow your business online, boost website speed, and rank on Google.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  type="text"
                  placeholder="Search articles by title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden bg-black/40 relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="accent">{post.category}</Badge>
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      <h2 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-sm text-white/70 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-white/10 mt-auto">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent)] group-hover:text-white transition-colors"
                    >
                      Read Full Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
