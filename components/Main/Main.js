import { Box } from '@chakra-ui/core';

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
