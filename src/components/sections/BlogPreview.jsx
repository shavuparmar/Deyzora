import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const posts = [
  { title: "Architecting React Applications for Scale", category: "Engineering", date: "Oct 12, 2026", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
  { title: "The Psychology of Enterprise UI Design", category: "Design", date: "Sep 28, 2026", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
  { title: "Why Next.js is Winning the Framework Wars", category: "Technology", date: "Sep 15, 2026", image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800" }
];

export default function BlogPreview() {
  return (
    <section className="py-32 bg-black border-t border-[var(--color-border-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Latest Insights
          </h2>
          <div className="flex items-end">
            <Button to="/blog" variant="outline">Read Our Blog</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to="/blog" className="block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative border border-white/10">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-widest uppercase border border-white/10">
                    {post.category}
                  </div>
                </div>
                <div className="text-sm text-[var(--color-text-gray)] mb-2">{post.date}</div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
