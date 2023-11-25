import { PROJECTS } from '@/utils/constants';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Box className="section" as="section" id="projects">
      <Heading className="heading">My Projects</Heading>
      <Text className="description">
        I like to stay busy and always have a project in the works. Take a look
        at some of the applications and articles I&apos;ve dedicated my time to.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} gap="4">
        {PROJECTS.map((project) => {
          return <ProjectCard {...project} key={project.internalUrl} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
