import { useParams, Link, Navigate } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import ContactCTA from '../components/sections/ContactCTA';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug || p.id.toString() === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Deyzora Infotech Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <main className="pt-28 bg-[var(--color-bg-dark)]">
        
        {/* Article Header */}
        <section className="py-12 border-b border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </Link>

              <Badge variant="cyan" className="mb-4">{post.category}</Badge>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs text-white/60 pb-6 border-b border-white/10">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[var(--color-accent)]" /> {post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[var(--color-accent)]" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[var(--color-accent)]" /> {post.readTime}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Article Body */}
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto space-y-8 text-white/80 leading-relaxed text-base sm:text-lg">
              
              <div className="rounded-3xl overflow-hidden h-72 sm:h-96 bg-black">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-xl text-white font-medium leading-relaxed">
                {post.excerpt}
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white">Key Takeaway</h3>
                <p className="text-sm text-white/70">
                  Building a website is not just about writing code—it's about making it fast, simple for users to navigate, and easy for your team to maintain.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Shared by Deyzora Infotech Team</span>
                <Link to="/contact" className="text-xs font-bold text-[var(--color-accent)] hover:underline">
                  Need Help With Your Website? Contact Us &rarr;
                </Link>
              </div>

            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
