import { Box } from '@chakra-ui/core';
import Introduction from '../Introduction/Introduction';
import Skills from '../Skills/Skills';
import References from '../References/References';
import Projects from '../Projects/Projects';

const Main = () => {
  return (
    <Box as="main">
      <Box className="container">
        <Introduction />
        <Skills />
        <References />
        <Projects />
      </Box>
    </Box>
  );
};

export default Main;
