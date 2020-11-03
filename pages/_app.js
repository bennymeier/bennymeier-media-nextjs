import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/core';

/**
 * Custom theme
 */
const theme = extendTheme({
  styles: {
    global: (props) => ({
      p: {
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.600',
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
