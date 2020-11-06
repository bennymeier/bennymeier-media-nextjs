import { Box, Link, useColorModeValue, Text, Divider } from '@chakra-ui/core';
import NextLink from 'next/link';
import Heart from '../Icons/Heart';

const Footer = () => {
  const bgColor = useColorModeValue('gray.700', 'teal.600');
  const color = useColorModeValue('gray.300', '');
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box as="footer" bg={bgColor}>
      <NextLink href="/imprint" passHref>
        <Link color={color} fontWeight="bold">Imprint</Link>
      </NextLink>
      <Text color={color}>Copyright © 2016 - {year}</Text>
      <Divider width="5em" mt="1em" mb="1em" />
      <Text color={color}>
        Made with Next.js <Heart className="rotate" color="red.400" />
      </Text>
    </Box>
  );
};

export default Footer;
