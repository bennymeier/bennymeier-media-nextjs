import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';

/**
 * Custom theme
 */
const theme = extendTheme({
  styles: {
    global: (props) => ({
      p: {
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.600',
        lineHeight: '185%',
        letterSpacing: '0.03em',
      },
      a: {
        _focus: {
          boxShadow: 'none !important',
        },
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
