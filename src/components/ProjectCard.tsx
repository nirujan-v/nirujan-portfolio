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
      
      <div className="bg-white w-full flex items-center justify-center min-h-screen mx-auto">
      
      <div className="grid grid-cols-2">
        
        <div className="rounded-xl m-8 shadow-lg">
          <div className="p-5  flex flex-col">
            <div className="rounded-xl h-80 overflow-hidden">
              <img className="w-full object-fill" src="images/hand_gesture.png" alt="" />
            </div>
            <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">Hand Gesture Detector</h5>
            <p className="text-black text-lg mt-3">
              Built a local app that can detect live hand gestures and can use those gestures to apply image manipulation techniques. 
            </p>
            <a href="https://github.com/amitsarvate/hand-gesture-recognition-app" className="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">
              Explore
            </a>
          </div>
        </div>

        <div className="rounded-xl m-8  shadow-lg">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl h-80 overflow-hidden">
              <img className="w-full  object-cover" src="images/sentiment.jpg" alt="" />
            </div>
            <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">Movie Sentiment Predictor</h5>
            <p className="text-black text-lg mt-3">
              Built an app that detects whether a given movie review is positive or negative using three different machine learning models.
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