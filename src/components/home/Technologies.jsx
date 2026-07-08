import { 
  SiReact, SiWordpress, SiHtml5, SiCss, 
  SiJavascript, SiTailwindcss, SiNodedotjs, 
  SiGit, SiGithub, SiVite 
} from 'react-icons/si';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'WordPress', icon: SiWordpress },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Vite', icon: SiVite },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub }
];

export default function Technologies() {
  return (
    <section className="section-padding bg-[var(--color-bg-surface-light)] border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 tracking-tight">
            Our Tech Stack
          </h2>
          <p className="text-xl text-[var(--color-text-gray)] max-w-2xl leading-relaxed">
            We utilize industry-leading tools and frameworks to build scalable, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <Card key={tech.name} className="p-6 flex flex-col items-center justify-center gap-4 hover:border-[var(--color-border-hover)] transition-colors group">
              <tech.icon className="w-8 h-8 text-[var(--color-text-gray)] group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-[var(--color-text-gray)] group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
