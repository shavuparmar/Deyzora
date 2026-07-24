import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';
import { faqs } from '../../data/faq';

export default function FAQPreview() {
  return (
    <section className="py-24 bg-[var(--color-bg-surface)] border-y border-white/10 relative overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="purple" className="mb-4">Common Questions</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Everything you need to know about working with Deyzora, timelines, pricing, and support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto">
          <Accordion items={faqs} />
        </div>

      </Container>
    </section>
  );
}
