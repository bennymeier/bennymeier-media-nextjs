import { Box, Heading } from '@chakra-ui/core';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'React Credit Card Component',
    description: '',
    images: ['react-credit-card-component'],
    url: 'https://react-credit-card-component.vercel.app/',
  },
  {
    title: 'URL Preview',
    description: '',
    images: ['url-preview'],
    url: 'https://url-preview-sepia.vercel.app/',
  },
  {
    title: 'React Weather App',
    description: '',
    images: ['react-weather-app'],
    url: 'https://react-weather-app-brown.now.sh/',
  },
  {
    title: 'MERN-Stack Project Management',
    description: '',
    images: ['mern-stack-project-management-login'],
    url: 'https://mern-stack-project-management.vercel.app/',
  },
  {
    title: 'YouTube Downloader',
    description: '',
    images: ['youtube-downloader'],
    url: 'https://youtubdle.com',
  },
];

const Projects = () => {
  return (
    <Box as="section" id="projects">
      <Heading mb="1em">My Projects</Heading>
      {PROJECTS.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </Box>
  );
};

export default Projects;
