import { Box, Text } from '@chakra-ui/react';
import Page from '../../components/DetailedPage/Page';
import creditCardPic from '/public/img/projects/react-credit-card-component.png';

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
    <Page
      githubUrl="https://github.com/bennymeier/react-credit-card-component"
      stack={['React', 'Sass']}
      type="Personal"
      images={[creditCardPic]}
      description={Description}
      title="React Credit Card Component"
      url="http://react-credit-card-component.vercel.app/"
    />
  );
};

export default Project;
