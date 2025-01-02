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
        
        <Landing />
        <About />
        <Project/>

        
        <Footer />
      </body>
    </html>
  );
}
