import { ListItem, UnorderedList, Box, Text, Spacer } from '@chakra-ui/core';
import Page from '../../components/DetailedPage/Page';

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
      images={['projects/react-credit-card-component']}
      description={Description}
      title="React Credit Card Component"
      url="http://react-credit-card-component.vercel.app/"
    />
  );
};

export default Project;
