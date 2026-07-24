import { Helmet } from 'react-helmet-async';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Cookie Policy | Deyzora Infotech</title>
        <meta name="description" content="Cookie Policy detailing essential and performance cookies used on Deyzora Infotech website." />
        <link rel="canonical" href="https://deyzora.com/cookie-policy" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#0070F3] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Cookies & Tracking
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Cookie Policy</h1>
          <p className="text-sm text-white/60">Last updated: July 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 text-white/80 text-sm leading-relaxed border border-white/10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#50E3C2]" /> 1. How We Use Cookies
            </h2>
            <p>
              We use essential cookies strictly required for website navigation, theme preferences, and session caching (such as splash screen states). We do not use intrusive third-party tracking or ad cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
