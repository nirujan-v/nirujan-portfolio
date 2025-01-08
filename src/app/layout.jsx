import '@styles/globals.css';
import { Navbar, Footer, Landing, About, Project} from '../components';

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div id="landing">
        <Landing />
        </div>
        <div id="about">
        <About />
        </div>
        <div id="projects">
        <Project/>
        </div>

        
        <Footer />
      </body>
    </html>
  );
}
