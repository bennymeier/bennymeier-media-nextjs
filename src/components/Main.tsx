'use client';

import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" px={{ md: 8, sm: 6 }} maxWidth="64em" mx="auto">
      <Box mt="8">
        <Heading as="h1">Projects</Heading>
        <Text>The list of my projects. Everything was made with ❤️.</Text>
        <Divider mt="4" borderBottomWidth="3px" />
      </Box>
      <Stack as={Box} spacing={{ base: 8, md: 14 }} py={{ base: 5, md: 10 }}>
        {children}
      </Stack>
    </Box>
  );
};

export default Main;
