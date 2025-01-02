type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className=" w-auto h-[90vh] flex flex-col justify-evenly items-center bg-red-600">
        <div className="bg-green-600">
        <div className="bg-yellow-500 flex flex-col items-center">
        <h1>Project Gallery</h1>
        <h2>Here are some of the projects I worked on</h2>
        </div>
        


        <div className="flex justify-around bg-blue-500">

          <div className="p-14">
            <h1>Sentiment Analysis </h1>
            
          </div>

          <div className="p-14">
          <h1>Hand Gesture Recognition</h1>
          </div>

        </div>
        </div>



      </div>
    );
  }