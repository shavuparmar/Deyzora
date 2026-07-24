import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'default', size = 'md', className }) {
  const base = "inline-flex items-center gap-1.5 font-medium rounded-full transition-colors select-none";
  
  const variants = {
    default: "bg-white/10 text-white/90 border border-white/10",
    accent: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30",
    cyan: "bg-[var(--color-accent-cyan)]/15 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/30",
    purple: "bg-[var(--color-accent-purple)]/15 text-[var(--color-accent-purple)] border border-[var(--color-accent-purple)]/30",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    outline: "bg-transparent text-white/70 border border-white/15",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs tracking-wide uppercase",
    lg: "px-4 py-1.5 text-sm font-semibold",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
