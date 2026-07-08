import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';

const articles = [
  {
    title: 'The Future of Web Development in 2026',
    excerpt: 'Explore the upcoming trends in web development, from AI-driven UI to the evolution of serverless architectures.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    date: 'July 15, 2026',
    author: 'Admin',
    slug: 'future-of-web-development-2026'
  },
  {
    title: 'Why Your Business Needs a Custom Website',
    excerpt: 'Templates are great for starting, but discovering why a custom-built digital presence is crucial for scaling your brand.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Business',
    date: 'July 10, 2026',
    author: 'Admin',
    slug: 'why-business-needs-custom-website'
  },
  {
    title: 'Mastering UI/UX Design Principles',
    excerpt: 'A deep dive into creating intuitive interfaces that delight users and drive conversion rates through the roof.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    category: 'Design',
    date: 'July 05, 2026',
    author: 'Admin',
    slug: 'mastering-ui-ux-design'
  },
  {
    title: 'Optimizing WordPress for Lightning Speed',
    excerpt: 'Learn the exact techniques we use to make WordPress websites load in under 1 second.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
    category: 'WordPress',
    date: 'June 28, 2026',
    author: 'Admin',
    slug: 'optimizing-wordpress-speed'
  },
  {
    title: 'The Psychology of Color in Logo Design',
    excerpt: 'How choosing the right colors for your brand can subconsciously influence customer purchasing decisions.',
    image: 'https://images.unsplash.com/photo-1626785773579-c10ce7663e5e?auto=format&fit=crop&q=80&w=800',
    category: 'Design',
    date: 'June 20, 2026',
    author: 'Admin',
    slug: 'psychology-of-color-logo-design'
  },
  {
    title: 'React Server Components Explained',
    excerpt: 'A beginner-friendly guide to understanding and implementing React Server Components in your next project.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    date: 'June 15, 2026',
    author: 'Admin',
    slug: 'react-server-components-explained'
  }
];

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog | Deyzora Infotech</title>
        <meta name="description" content="Read our latest insights, tutorials, and news about web development, design, and digital marketing." />
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Page Hero */}
        <section className="section-padding border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface-light)]">
          <Container className="text-center max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
            >
              Our <span className="text-[var(--color-primary)]">Blog.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--color-text-gray)] leading-relaxed mb-10"
            >
              Insights, thoughts, and best practices from our team of digital experts.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto relative"
            >
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-[var(--color-bg-dark)] border border-[var(--color-border-subtle)] rounded-xl px-6 py-4 pl-14 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-gray)]" />
            </motion.div>
          </Container>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
          <Container>
            {/* Categories */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              {['All', 'Technology', 'Business', 'Design', 'WordPress'].map((cat, i) => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                    i === 0 
                      ? 'bg-[var(--color-primary)] text-white border-transparent' 
                      : 'bg-transparent text-[var(--color-text-gray)] border-[var(--color-border-subtle)] hover:border-[var(--color-border-hover)] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {articles.map((article, i) => (
                <Card
                  key={article.slug}
                  className="group flex flex-col h-full hover:border-[var(--color-border-hover)] transition-colors"
                >
                  <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-[var(--color-text-gray)] mb-4 font-medium uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                    </div>

                    <Link to={`/blog/${article.slug}`}>
                      <h3 className="text-xl font-bold font-poppins text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-[var(--color-text-gray)] text-sm mb-6 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <Link 
                      to={`/blog/${article.slug}`}
                      className="mt-auto inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[var(--color-primary)] transition-colors group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
               <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] hover:text-white transition-colors disabled:opacity-50" disabled>
                 &larr;
               </button>
               <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-primary)] text-white font-medium">
                 1
               </button>
               <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] hover:text-white transition-colors font-medium">
                 2
               </button>
               <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-gray)] hover:text-white transition-colors">
                 &rarr;
               </button>
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
