import { Helmet } from 'react-helmet-async';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Legal Disclaimer | Deyzora Infotech</title>
        <meta name="description" content="Legal disclaimer regarding website performance, content, and external links." />
        <link rel="canonical" href="https://deyzora.com/disclaimer" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Disclaimer</h1>
          <p className="text-sm text-white/60">Last updated: July 2026</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-6 text-white/80 text-sm leading-relaxed border border-white/10">
          <p>
            The information provided on deyzora.com is for general informational purposes only. While we strive to maintain accurate information and benchmark scores, performance metrics may vary based on client third-party hosting and content additions.
          </p>
        </div>
      </div>
    </div>
  );
}
