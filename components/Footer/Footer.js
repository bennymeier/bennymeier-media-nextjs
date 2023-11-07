import { Box, useColorModeValue, Text, Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import Heart from '../Icons/Heart';

const Footer = () => {
  const bgColor = useColorModeValue('gray.700', 'teal.600');
  const color = useColorModeValue('gray.300', '');
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box as="footer" bg={bgColor}>
      <Link
        color={color}
        fontWeight="bold"
        href="/imprint"
        aria-label="Open imprint"
      >
        Imprint
      </Link>
      <Text color={color}>Copyright © 2016 - {year}</Text>
      <Divider width="5em" mt="1em" mb="1em" />
      <Text color={color}>
        Made with Next.js <Heart className="rotate" color="red.400" />
      </Text>
    </Box>
  );
};

export default Footer;
