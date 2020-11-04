import {
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Flex,
  Spacer,
} from '@chakra-ui/core';
import Skill from './Skill';

const GOOD_SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Node.js',
  'MongoDB',
  'Firebase',
  'SQL',
  'Bootstrap',
  'Chakra UI',
  'Semantic UI',
  'Wordpress',
  'Git',
];

const OK_SKILLS = [
  'Vue',
  'SCSS',
  'Express.js',
  'Material UI',
  'MySQL',
  'PostgreSQL',
  'PHP',
];

const Skills = () => {
  return (
    <Box className="section" as="section" id="skills">
      <Heading className="heading">My Skills</Heading>
      <Text className="description">
        Through my studies, I've gained a solid understanding of computer
        science and web development concepts and have dedicated a lot of my free
        time to apply these concepts to real-world scenarios and applications.
      </Text>
      <Box mb="2em">
        <Flex flexDirection="column">
          <Heading size="md">My Go-To Stack</Heading>
          <Flex>
            <Box>
              <UnorderedList>
                <ListItem>TypeScript</ListItem>
                <ListItem>MongoDB</ListItem>
                <ListItem>React</ListItem>
              </UnorderedList>
            </Box>
            <Box ml="2em">
              <UnorderedList>
                <ListItem>Express.js</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Bootstrap</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex>
        <Box>
          <Heading size="md">Very good knowledge</Heading>
          <UnorderedList>
            {GOOD_SKILLS.map((skill) => {
              return <Skill skill={skill} />;
            })}
          </UnorderedList>
        </Box>
        <Box ml="2em">
          <Heading size="md">Some knowledge</Heading>
          <UnorderedList>
            {OK_SKILLS.map((skill) => {
              return <Skill skill={skill} />;
            })}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
