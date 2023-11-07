import { Box, Stack } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" paddingX="12">
      <Stack
        as={Box}
        // textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 5, md: 10 }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default Main;
