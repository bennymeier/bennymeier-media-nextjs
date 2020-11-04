import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';

const ProjectCard = ({ title, description, images, url, internalUrl }) => {
  const linkColor = useColorModeValue('gray.800', 'teal.300');

  return (
    <Box maxWidth="600px">
      {images.map((image) => {
        return (
          <NextLink href={`/projects/${internalUrl}`} passHref key={image}>
            <Link>
              <Image
                key={image}
                src={`/img/projects/${image}.png`}
                unsized
                className="zoom-in round"
              />
            </Link>
          </NextLink>
        );
      })}
      <Box mt="2em">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <NextLink href={`/projects/${internalUrl}`} passHref>
          <Link color={linkColor}>
            View More
            <ChevronRightIcon />
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default ProjectCard;
