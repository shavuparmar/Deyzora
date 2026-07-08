import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';
import { Container } from '../components/ui/Container';

// Mock content
const article = {
  title: 'The Future of Web Development in 2026',
  image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1200',
  category: 'Technology',
  date: 'July 15, 2026',
  author: 'Deyzora Team',
  content: `
    <p>As we navigate through 2026, the landscape of web development has undergone significant transformations. What was once considered cutting-edge is now standard practice, and new paradigms are emerging that promise to redefine how we build and interact with the web.</p>
    
    <h2>1. AI-Driven User Interfaces</h2>
    <p>Artificial Intelligence has moved beyond backend processing and is now actively shaping user interfaces in real-time. Websites are no longer static experiences; they adapt their layout, color schemes, and content density based on the user's behavior, time of day, and emotional state inferred through interaction patterns.</p>
    
    <blockquote>"The best interface is the one that anticipates the user's needs before they even articulate them."</blockquote>
    
    <h2>2. The Evolution of Serverless Architectures</h2>
    <p>Serverless computing has matured. We are seeing a massive shift towards Edge computing, where code execution happens closer to the user, resulting in near-zero latency. This means faster load times globally, regardless of where your primary database resides.</p>
    
    <h2>3. Web3 and Decentralized Identity</h2>
    <p>Integration with decentralized identity systems is becoming a standard requirement for premium web applications. Users expect to bring their own identity across the web, reducing the friction of traditional password-based authentication systems.</p>
    
    <h3>What This Means for Businesses</h3>
    <p>To stay competitive, businesses must adopt these technologies not just as novelties, but as core components of their digital strategy. A website built today must be flexible enough to integrate tomorrow's AI advancements seamlessly.</p>
    
    <p>At Deyzora Infotech, we ensure that every project we undertake is built with a future-first approach, utilizing the latest stable technologies while maintaining the flexibility to adapt to future innovations.</p>
  `,
  tags: ['Web Design', 'Future Tech', 'AI']
};

export default function BlogPost() {
  const { slug } = useParams();
  
  return (
    <>
      <Helmet>
        <title>{article.title} | Deyzora Infotech</title>
      </Helmet>

      <main className="pt-24 bg-[var(--color-bg-dark)]">
        {/* Article Header */}
        <section className="section-padding pb-8">
          <Container className="max-w-4xl">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-[var(--color-text-gray)] hover:text-white transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-[var(--color-text-gray)] text-sm font-medium uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {article.date}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight text-white tracking-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-[var(--color-border-subtle)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">{article.author}</div>
                  <div className="text-xs text-[var(--color-text-gray)] uppercase tracking-wider font-medium">Author</div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="pb-24">
          <Container className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden mb-12 border border-[var(--color-border-subtle)]"
            >
              <img src={article.image} alt={article.title} className="w-full h-auto aspect-video object-cover" />
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Share Sidebar */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="sticky top-32 flex flex-col gap-4">
                  <span className="text-xs font-bold uppercase text-[var(--color-text-gray)] tracking-widest mb-2">Share</span>
                  <button className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-gray)] hover:text-white hover:border-[var(--color-primary)] transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-gray)] hover:text-white hover:border-[#0A66C2] transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-gray)] hover:text-white hover:border-[#1877F2] transition-all">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-gray)] hover:text-white transition-all mt-4">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-10">
                <div 
                  className="prose-deyzora"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-12 pt-8 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-3">
                  <span className="text-[var(--color-text-gray)] font-medium mr-2 text-sm uppercase tracking-wider">Tags:</span>
                  {article.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-sm font-medium text-[var(--color-text-gray)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ContactCTA />
      </main>
    </>
  );
}
