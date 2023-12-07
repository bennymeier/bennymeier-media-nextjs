'use client';

import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconHeart } from '@tabler/icons-react';
import Image from 'next/image';

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
            <Box>
              <Link aria-label="Go to imprint" href="/imprint">
                Imprint
              </Link>
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
          <Image
            alt="Logo of Benny Meier Media"
            height="150"
            src={useColorModeValue(
              '/img/logo/logo_black.svg',
              '/img/logo/logo_white.svg'
            )}
            width="150"
          />
        </Flex>
        <Box pt={6} fontSize={'sm'} textAlign={'center'}>
          <Text>Copyright © 2016 - {year}</Text>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            gap="10px"
          >
            <Text>Made with Next.js</Text>
            <Icon
              as={IconHeart}
              color="red.400"
              className="rotate"
              fill="red.400"
              width="16px"
              height="16px"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
