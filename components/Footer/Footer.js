import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import logoPic from '/public/img/logo_black.png';
import Heart from '../Icons/Heart';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems={{ sm: 'flex-start', md: 'center' }}
        >
          <Stack>
            <ListHeader>About</ListHeader>
            <Text lineHeight="1.5">
              As an agency, we support you in the areas of web programming,
              online marketing and search engine optimization. We not only
              advise - we also implement.
            </Text>
            <ListHeader>Contact</ListHeader>
            <Box lineHeight="1.5">
              <Text>E-Mail: hi@bennymeier-media.de</Text>
              <Text>Make an appointment</Text>
            </Box>
          </Stack>

          <Stack>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box>
          </Stack>

          <Stack>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Twitter
            </Box>
            <Box as="a" href={'#'}>
              Dribbble
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image src={logoPic} alt="Logo of Benny Meier Media" />
        </Flex>
        <Box pt={6} fontSize={'sm'} textAlign={'center'}>
          <Text>Copyright © 2016 - {year}</Text>
          <Text>
            Made with Next.js <Heart className="rotate" color="red.400" />
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
