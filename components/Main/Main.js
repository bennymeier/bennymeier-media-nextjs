import { Box } from '@chakra-ui/react';

const Main = ({children}) => {
  return (
    <Box as="main">
      <Box className="container">
        {children}
      </Box>
    </Box>
  );
};

export default Main;
