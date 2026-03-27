/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void: '#050508',
        obsidian: '#0a0a0f',
        carbon: '#111118',
        slate: '#1a1a25',
        mist: '#252535',
        neon: '#7c3aed',
        aurora: '#06b6d4',
        glow: '#a855f7',
        ember: '#f97316',
        ice: '#e0f2fe',
      },
      backgroundImage: {
        'mesh-1': 'radial-gradient(at 40% 20%, hsla(280,80%,30%,0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,80%,30%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,80%,30%,0.2) 0px, transparent 50%)',
        'mesh-2': 'radial-gradient(at 0% 0%, hsla(253,90%,40%,0.3) 0px, transparent 50%), radial-gradient(at 50% 100%, hsla(189,80%,30%,0.3) 0px, transparent 50%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.15), transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
