import { Helmet } from 'react-helmet-async';
import { Eye } from 'lucide-react';

export default function Accessibility() {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <Helmet>
        <title>Accessibility Statement | Deyzora Infotech</title>
        <meta name="description" content="Accessibility statement detailing WCAG compliance and screen reader support." />
        <link rel="canonical" href="https://deyzora.com/accessibility" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Accessibility Statement</h1>
          <p className="text-sm text-white/60">WCAG 2.1 AA Compliance Commitment</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-6 text-white/80 text-sm leading-relaxed border border-white/10">
          <p>
            Deyzora Infotech is committed to ensuring digital accessibility for people of all abilities. We adhere to WCAG 2.1 Level AA guidelines, including high contrast ratios, screen reader ARIA labels, and full keyboard navigation controls.
          </p>
        </div>
      </div>
    </div>
  );
}
