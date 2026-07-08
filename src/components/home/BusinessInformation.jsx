import { Container } from '../ui/Container';

export default function BusinessInformation() {
  return (
    <section className="py-16 bg-[var(--color-bg-dark)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-subtle)]">
          <div className="pt-6 md:pt-0 md:px-8 first:pl-0 last:pr-0">
            <h4 className="text-[var(--color-text-gray)] text-sm font-bold uppercase tracking-wider mb-2">Legal Entity</h4>
            <p className="text-white font-medium">Deyzora Infotech</p>
          </div>
          <div className="pt-6 md:pt-0 md:px-8">
            <h4 className="text-[var(--color-text-gray)] text-sm font-bold uppercase tracking-wider mb-2">Headquarters</h4>
            <p className="text-white font-medium">Surat, Gujarat, India</p>
          </div>
          <div className="pt-6 md:pt-0 md:px-8">
            <h4 className="text-[var(--color-text-gray)] text-sm font-bold uppercase tracking-wider mb-2">Founded</h4>
            <p className="text-white font-medium">2026</p>
          </div>
          <div className="pt-6 md:pt-0 md:px-8">
            <h4 className="text-[var(--color-text-gray)] text-sm font-bold uppercase tracking-wider mb-2">Operating Focus</h4>
            <p className="text-white font-medium">Global Digital Services</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
