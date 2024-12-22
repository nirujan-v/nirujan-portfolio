export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/nirujan-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nirujan-velvarathan-5a37b1197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nirujan.v@hotmail.com"
              className="text-gray-400 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  