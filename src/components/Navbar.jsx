import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-electricblue text-white p-4 fixed top-0 left-0 w-full shadow-lg z-10 opacity-1">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Nirujan V.</h1>
        <ul className="flex space-x-4 text-white" >
          <li><a href="#landing">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          
        </ul>
      </div>
      
    </nav>
  );
}