import { Heading, Text, Link, Box } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Mockup from '../Mockup/Mockup';

const ProjectCard = ({ title, description, url, imageUrl, internalUrl }) => {
  return (
    <Box maxWidth="600px">
      {imageUrl && <Mockup imageUrl={imageUrl} />}
      <NextLink href={`/${internalUrl}`}>
        <Link>
          <Heading as="h3">{title}</Heading>
        </Link>
      </NextLink>
      <Text>{description}</Text>
      <NextLink href={`/${internalUrl}`}>
        <Link>
          VIEW PROJECT <ChevronRightIcon />
        </Link>
      </NextLink>
    </Box>
  );
};

export default ProjectCard;
