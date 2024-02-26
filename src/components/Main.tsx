'use client';

import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const Main = ({ children, title = '', description = '' }) => {
  return (
    <Container
      as="main"
      px={{ md: 8, sm: 6 }}
      mx="auto"
      maxWidth={{
        base: '22em',
        sm: '28em',
        md: '45em',
        lg: '65em',
        xl: '75em',
        '2xl': '85em',
      }}
    >
      <Box mt="8">
        <Heading as="h1">{title}</Heading>
        <Text>{description}</Text>
        {title && <Divider mt="4" borderBottomWidth="3px" />}
      </Box>
      <Stack as={Box} spacing={{ base: 8, md: 14 }} py={{ base: 5, md: 10 }}>
        {children}
      </Stack>
    </Container>
  );
};

export default Main;
