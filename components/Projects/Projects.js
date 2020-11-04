import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'React Credit Card Component',
    description: '',
    images: ['react-credit-card-component'],
    internalUrl: 'react-credit-card-component',
    url: 'https://react-credit-card-component.vercel.app/',
  },
  {
    title: 'URL Preview',
    description: '',
    images: ['url-preview'],
    internalUrl: 'url-preview',
    url: 'https://url-preview-sepia.vercel.app/',
  },
  {
    title: 'React Weather App',
    description: '',
    images: ['react-weather-app'],
    internalUrl: 'react-weather-app',
    url: 'https://react-weather-app-brown.now.sh/',
  },
  {
    title: 'MERN-Stack Project Management',
    description: '',
    images: ['mern-stack-project-management-login'],
    internalUrl: 'mern-stack-project-management',
    url: 'https://mern-stack-project-management.vercel.app/',
  },
  {
    title: 'YouTube Downloader',
    description:
      'A simple YouTube downloader without advertising, developed with React, Node.js and Axios.',
    images: ['youtube-downloader'],
    internalUrl: 'youtube-downloader',
    url: 'https://youtubdle.com',
  },
];

const Projects = () => {
  return (
    <Box className="section" as="section" id="projects">
      <Heading className="heading">My Projects</Heading>
      <Text className="description">
        I like to stay busy and always have a project in the works. Take a look
        at some of the applications and articles I've dedicated my time to.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {PROJECTS.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
