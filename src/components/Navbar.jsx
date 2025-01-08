import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4 text-white" >
          <li><a href="#landing">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          
        </ul>
      </div>
      
    </nav>
  );
}