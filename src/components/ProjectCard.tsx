import { div } from "framer-motion/client";

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
  };
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      /*
      <div className=" w-auto h-[90vh] flex flex-col justify-evenly items-center bg-red-600">
        <div className="bg-green-600 rounded w-full h-2/3">
        <div className="bg-yellow-500 flex flex-col items-center rounded">
          <h1>Project Gallery</h1>
          <h2>Here are some of the projects I worked on</h2>
        </div>




        

         
        <div className="flex bg-blue-500 justify-around items-center">

          <div className="flex flex-col items-start rounded overflow-hidden shadow bg-white m-7 w-1/2">
            <img className="h-64 w-full object-cover" src='images/sentiment.jpg'></img>
            <div>
            <h1>Sentiment Analysis </h1>
            <span>Sentiment Analysis App</span>
          </div>
            
            
          </div>

          <div className="flex flex-col items-start rounded overflow-hidden shadow bg-white m-7 w-1/2">
            <img className="h-64 w-full object-cover" src='images/hand_gesture.png'></img>
            <div>
            <h1>Hand Gesture Recognition</h1>
            <span>Hand Gesture Recognition App</span>
            </div>
            
          </div>

        </div>
        
        </div>

        
      </div>
      */
      <div className="flex items-center justify-center min-h-screen container mx-auto">
      
      <div className="grid grid-cols-2">
        
        <div className="rounded-xl shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl h-80 overflow-hidden">
              <img className="w-full  object-cover" src="images/hand_gesture.png" alt="" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Hand Gesture Detector</h5>
            <p className="text-slate-500 text-lg mt-3">
              Built a local app that can detect live hand gestures and can use those gestures to apply image manipulation techniques. 
            </p>
            <a href="https://github.com/amitsarvate/hand-gesture-recognition-app" className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">
              Explore
            </a>
          </div>
        </div>

        <div className="rounded-xl  shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl h-80 overflow-hidden">
              <img className="w-full  object-cover" src="images/sentiment.jpg" alt="" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">Movie Sentiment Predictor</h5>
            <p className="text-slate-500 text-lg mt-3">
              Built an app that detects whether a given movie review is positive or negative using machine learning
            </p>
            <a href="https://github.com/amitsarvate/sentiment-analysis-ml" className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">
              Explore
            </a>
          </div>
        </div>
        
      </div>
      
    </div>
     
    
    

      

    );
  }