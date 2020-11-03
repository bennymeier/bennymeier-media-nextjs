import { Heading, Text, SimpleGrid, Box } from '@chakra-ui/core';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    url: 'https://loewen-voerstetten.de',
    imageUrl: 'loewen-voerstetten',
    internalUrl: 'loewen-voerstetten',
    title: 'Gasthaus Zum Löwen',
    description: '',
  },
  {
    url: 'https://sv-bremgarten.de',
    imageUrl: 'sv-bremgarten',
    internalUrl: 'sv-bremgarten',
    title: 'SV Hartheim-Bremgarten e.V.',
    description: '',
  },
  {
    url: 'https://sfv-bremgarten.de',
    imageUrl: 'sfv-bremgarten',
    internalUrl: 'sfv-bremgarten',
    title: 'SFV Bremgarten e.V.',
    description: '',
  },
  {
    url: 'https://johannaschnuepke.de',
    imageUrl: 'johannaschnuepke',
    internalUrl: 'johannaschnuepke',
    title: 'Johanna Schnüpke Moderatorin & Journalistin',
    description: '',
  },
  {
    url: 'https://gehirnmetabologie.de',
    imageUrl: 'gehirnmetabologie',
    internalUrl: 'gehirnmetabologie',
    title: 'Stefanie Schopp - Gehirnmetabologin',
    description: '',
  },
  {
    url: 'https://www.sabrowski-abbautechnik.de',
    imageUrl: 'sabrowski-abbautechnik',
    internalUrl: 'sabrowski-abbautechnik',
    title: 'Sabrowski Beton-Abbautechnik',
    description: '',
  },
  {
    url: 'https://bennymeier.de',
    imageUrl: 'bennymeier',
    internalUrl: 'bennymeier',
    title: 'Benny Meier Photography',
    description: '',
  },
];

const Projects = () => {
  return (
    <Box>
      <Heading mb="1em">My Projects</Heading>
      <Text mb="3em">
        I like to stay busy and always have a project in the works. Take a look
        at some of the applications, articles, and companies I've dedicated my
        time to.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {PROJECTS.map((project) => {
          return <ProjectCard key={project.internalUrl} {...project} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
