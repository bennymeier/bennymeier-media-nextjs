'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

type ProvidersProps = {
  children: React.ReactNode;
};

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

const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
