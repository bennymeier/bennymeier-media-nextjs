'use client';

import { PROJECTS } from '@/utils/constants';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Box className="section" as="section" id="projects">
      <SimpleGrid columns={[1, 1, 2]} gap="4">
        {PROJECTS.map((project) => {
          return <ProjectCard {...project} key={project.internalUrl} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
