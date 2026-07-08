import { Quote } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const testimonials = [
  {
    content: "Deyzora Infotech transformed our digital presence. The new website is not only beautiful but incredibly fast. We've seen a 40% increase in conversions since launch.",
    author: "Rahul Desai",
    role: "CEO, TechFlow Solutions",
  },
  {
    content: "Their attention to detail and commitment to clean code is unmatched. They didn't just build what we asked; they engineered a scalable solution for our future.",
    author: "Priya Patel",
    role: "Marketing Director, Apex Industries",
  },
  {
    content: "The best agency experience we've had. Professional, transparent, and they delivered a pixel-perfect product exactly on schedule.",
    author: "Amit Shah",
    role: "Founder, Global Ventures",
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
            Client Success
          </h2>
          <p className="text-xl text-[var(--color-text-gray)] max-w-2xl leading-relaxed">
            Don't just take our word for it. Hear from the leaders who have partnered with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 md:p-10 flex flex-col">
              <Quote className="w-10 h-10 text-[var(--color-border-subtle)] mb-6" />
              <p className="text-[var(--color-text-gray)] leading-relaxed mb-8 flex-1 text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-[var(--color-primary)]">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
