import { cn } from '../../utils/cn';

export function Tabs({ tabs, activeTab, onChange, className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 max-w-fit mx-auto", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 select-none",
              isActive
                ? "bg-[var(--color-accent)] text-white shadow-[var(--shadow-glow)]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
