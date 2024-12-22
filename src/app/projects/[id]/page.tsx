type ProjectDetailPageProps = {
    params: {
      id: string;
    };
  };
  
  export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = params;
    return (
      <section className="p-8">
        <h1 className="text-3xl font-bold">Project Details for ID: {id}</h1>
        <p>Details about the project will go here...</p>
      </section>
    );
  }
  