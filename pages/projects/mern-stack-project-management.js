import { ListItem, UnorderedList, Box, Text } from '@chakra-ui/core';
import Page from '../../components/DetailedPage/Page';

const Description = () => {
  return (
    <Box mb="2em">
      <Text>
        I have tried to use the well known MERN stack in a meaningful way. I had
        the idea of a Kanban Board, similar to Jira Project Management.
      </Text>
      <Text mt="1em">
        You can create project boards to which you can later assign tasks, bugs,
        features or epics. These different types can then be moved in the Kanban
        Board, e.g. a bug can be moved from Todo to In Progress and when it is
        finished, to done.
      </Text>
      <Text mt="1em">
        For the drag and drop I used the library of Airbnb. This library works
        very smooth and is based on different algorithms for scrolling.
      </Text>
      <Text mt="1em">
        In the frontend I chose React because I have many components that I can
        use again elsewhere. To have my state global I used Redux.
        <br />
        In the backend I used Node.js and MongoDB. Both can be linked quite
        easily thanks to the library Mongoose.
        <br />
        There is a big API for creating, reading, updating and deleting:
      </Text>
      <UnorderedList ml="2em">
        <ListItem>Boards</ListItem>
        <ListItem>Tasks</ListItem>
        <ListItem>Users</ListItem>
        <ListItem>Types of Tasks</ListItem>
        <ListItem>Priorities of Tasks</ListItem>
        <ListItem>Messages</ListItem>
        <ListItem>User Avatars</ListItem>
      </UnorderedList>
      <Text mt="1em">
        I have also worked with new libraries, including Passport.js and JWT.{' '}
        {/* */}
        <strong>Passport.js</strong> for easy authentication in Node.js in
        combination with <strong>JWT</strong>.
        <br />
      </Text>
    </Box>
  );
};

/**
 * @todo Add screenshots from code
 */
const Project = () => {
  return (
    <Page
      stack={[
        'TypeScript',
        'React',
        'Redux',
        'Semantic UI',
        'Node.js',
        'Express.js',
        'Passport.js',
        'JWT',
        'Axios',
        'MongoDB',
        'Mongoose',
      ]}
      githubUrl="https://github.com/bennymeier/mern-stack-project-management"
      type="Personal"
      images={['projects/mern-stack-project-management-login']}
      description={Description}
      title="MERN Stack Project Management"
      url={false}
      />
  );
};

export default Project;
