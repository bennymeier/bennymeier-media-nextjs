'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

type ProvidersProps = {
  children: React.ReactNode;
};

const theme: ThemeConfig = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `var(--font-spectral)`,
    body: `var(--font-league-spartan)`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      p: {
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.600',
        lineHeight: '36px',
        letterSpacing: '1px',
        fontSize: { sm: 'lg', lg: 'xl' },
        fontWeight: '300',
      },
      h2: {
        fontSize: { sm: '2xl', lg: '3xl' },
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
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
