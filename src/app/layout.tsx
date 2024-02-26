import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { League_Spartan, Spectral } from 'next/font/google';
import '../styles/globals.css';
import Providers from './providers';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-spectral',
});

const league_spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '500'],
  display: 'swap',
  variable: '--font-league-spartan',
});

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en-US"
      className={`${spectral.variable} ${league_spartan.variable}`}
    >
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
