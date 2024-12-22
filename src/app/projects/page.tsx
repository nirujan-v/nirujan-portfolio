import ProjectCard from '@components/ProjectCard';

const projects = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js and Tailwind CSS.',
    image: '/project1.png',
    link: '#',
  },
  {
    id: '2',
    title: 'E-Commerce Store',
    description: 'A fully functional e-commerce website with Stripe integration.',
    image: '/project2.png',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}