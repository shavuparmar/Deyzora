import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-bg-surface)] border-y border-white/10 relative overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Client Feedback</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            What Clients Say About Us.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Real reviews from business owners, founders, and marketing leaders who worked with Deyzora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 relative flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6 pointer-events-none" />

              <div className="mb-6 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-base text-white/90 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    {item.verified && (
                      <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                        <ShieldCheck className="w-3 h-3 mr-0.5" /> Verified Client
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-white/60">
                    {item.role}, <span className="text-white/80 font-medium">{item.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
