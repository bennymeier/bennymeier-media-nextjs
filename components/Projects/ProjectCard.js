const { Box, Heading, Link, Text } = require('@chakra-ui/core');
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';

const ProjectCard = ({ title, description, images, url, internalUrl }) => {
  return (
    <Box maxWidth="600px">
      {images.map((image) => {
        return (
          <Image
            key={image}
            src={`/img/projects/${image}.png`}
            unsized
            className="zoom-in"
          />
        );
      })}
      <Box mt="2em">
        <NextLink href={`/projects/${internalUrl}`} passHref>
          <Link>
            <Heading as="h3" isTruncated maxWidth="335px" size="md">
              {title}
            </Heading>
          </Link>
        </NextLink>
        <Text>{description}</Text>
        <NextLink href={`/projects/${internalUrl}`} passHref>
          <Link>
            View More
            <ChevronRightIcon />
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default ProjectCard;
