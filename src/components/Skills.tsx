'use client';

import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandCypress,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandSass,
  IconBrandSocketIo,
  IconBrandTypescript,
  IconBrandVue,
  IconBrandWordpress,
  IconPhotoQuestion,
  IconSql,
} from '@tabler/icons-react';
import Skill from './Skill';

const GOOD_SKILLS = [
  { name: 'HTML', icon: IconBrandHtml5 },
  { name: 'CSS', icon: IconBrandCss3 },
  { name: 'JavaScript', icon: IconBrandJavascript },
  { name: 'TypeScript', icon: IconBrandTypescript },
  { name: 'React', icon: IconBrandReact },
  { name: 'Next.js', icon: IconBrandNextjs },
  { name: 'Node.js', icon: IconBrandNodejs },
  { name: 'MongoDB', icon: IconBrandMongodb },
  { name: 'Firebase', icon: IconBrandFirebase },
  { name: 'SQL', icon: IconSql },
  { name: 'MySQL', icon: IconBrandMysql },
  { name: 'PostgreSQL', icon: IconPhotoQuestion },
  { name: 'Bootstrap', icon: IconBrandBootstrap },
  { name: 'Chakra UI', icon: IconPhotoQuestion },
  { name: 'Semantic UI', icon: IconPhotoQuestion },
  { name: 'Wordpress', icon: IconBrandWordpress },
  { name: 'Git', icon: IconBrandGit },
  { name: 'NPM', icon: IconBrandNpm },
  { name: 'Yarn', icon: IconPhotoQuestion },
  { name: 'Cypress', icon: IconBrandCypress },
  { name: 'Socket.io', icon: IconBrandSocketIo },
];

const OK_SKILLS = [
  { name: 'React Native', icon: IconBrandReactNative },
  { name: 'Python', icon: IconBrandPython },
  { name: 'Redux', icon: IconBrandRedux },
  { name: 'Vue', icon: IconBrandVue },
  { name: 'SCSS', icon: IconBrandSass },
  { name: 'Express.js', icon: IconPhotoQuestion },
  { name: 'Material UI', icon: IconPhotoQuestion },
  { name: 'PHP', icon: IconBrandPhp },
];

const Skills = () => {
  const mode = useColorModeValue('', 'white');

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
          <Flex gap="2" flexWrap="wrap">
            {GOOD_SKILLS.map((skill) => (
              <Skill {...skill} key={skill.name} />
            ))}
          </Flex>
        </Box>
        <Box ml="2em">
          <Heading size="md">Some knowledge</Heading>
          <UnorderedList listStyleType="none">
            {OK_SKILLS.map((skill) => (
              <ListItem key={skill.name}>
                <Skill {...skill} />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;
