'use client';

import { Box } from '@chakra-ui/react';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <Box as="header" mt="3">
      <SocialMedia />
    </Box>
  );
};

export default Header;
