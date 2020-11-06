import { Box, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Box as="footer">
      <NextLink href="/imprint" passHref>
        <Link>Imprint</Link>
      </NextLink>
    </Box>
  );
};

export default Footer;
