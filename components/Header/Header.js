import { Box } from '@chakra-ui/react';
import SocialMedia from '../SocialMedia/SocialMedia';

const Header = () => {
  return (
    <Box as="header">
      <Box className="container-social-media">
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Header;
