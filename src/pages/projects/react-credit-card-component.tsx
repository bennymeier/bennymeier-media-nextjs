import { Box, Text } from '@chakra-ui/react';
import DetailedPage from '@/components/DetailedPage';

const Description = () => {
  return (
    <Box mb="2em">
      <Text>
        Out of boredom I once developed a credit card component with React and
        styled it with Sass.
      </Text>
    </Box>
  );
};

const Project = () => {
  return (
    <DetailedPage
      githubUrl="https://github.com/bennymeier/react-credit-card-component"
      stack={['React', 'Sass']}
      type="Personal"
      images={['img/projects/react-credit-card-component.png']}
      description={Description}
      title="React Credit Card Component"
      url="http://react-credit-card-component.vercel.app/"
    />
  );
};

export default Project;
