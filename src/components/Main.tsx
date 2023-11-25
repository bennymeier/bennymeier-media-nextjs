import { Box, Stack } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" px={{ md: 8, sm: 6 }} maxWidth="64em" mx="auto">
      <Stack as={Box} spacing={{ base: 8, md: 14 }} py={{ base: 5, md: 10 }}>
        {children}
      </Stack>
    </Box>
  );
};

export default Main;
