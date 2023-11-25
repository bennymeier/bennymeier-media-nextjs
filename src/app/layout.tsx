import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import Providers from './providers';

const RootLayout = ({ children }) => {
  return (
    <html lang="en-US">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
