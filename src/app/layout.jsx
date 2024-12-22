import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Landing from '../components/Landing'

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
        
        <Footer />
      </body>
    </html>
  );
}
