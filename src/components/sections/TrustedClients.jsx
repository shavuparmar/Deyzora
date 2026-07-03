import { CLIENTS } from '../../data/constants';

const TrustedClients = () => {
  return (
    <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-surface)]/20 relative overflow-hidden" id="clients">
      
      {/* Edge Gradients for Smooth Masking */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[var(--color-muted-foreground)] uppercase tracking-[0.2em]">
            Trusted by Forward-Thinking Brands
          </p>
        </div>
        
        {/* Marquee Container */}
        <div className="flex overflow-hidden group select-none relative">
          
          {/* First Marquee Track */}
          <div className="flex shrink-0 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] items-center">
            {CLIENTS.map((client, i) => (
              <div 
                key={i} 
                className="mx-6 md:mx-10 px-8 py-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_20px_rgba(var(--color-accent),0.1)] transition-all duration-300"
              >
                <span className="text-xl md:text-2xl font-bold text-[var(--color-foreground)] tracking-tight whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Marquee Track (Duplicate) */}
          <div className="flex shrink-0 animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] items-center" aria-hidden="true">
            {CLIENTS.map((client, i) => (
              <div 
                key={`dup-${i}`} 
                className="mx-6 md:mx-10 px-8 py-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_20px_rgba(var(--color-accent),0.1)] transition-all duration-300"
              >
                <span className="text-xl md:text-2xl font-bold text-[var(--color-foreground)] tracking-tight whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedClients;
