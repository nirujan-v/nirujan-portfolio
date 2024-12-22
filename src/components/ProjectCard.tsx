type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
          <a href={project.link} className="text-blue-500 mt-2 block">
            View Project
          </a>
        </div>
      </div>
    );
  }