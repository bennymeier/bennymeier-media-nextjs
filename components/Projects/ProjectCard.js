import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

const ProjectCard = ({ title, description, images, url, internalUrl }) => {
  const linkColor = useColorModeValue('gray.800', 'teal.300');

  return (
    <Box maxWidth="600px">
      {images.map((image) => {
        return (
          <Link
            aria-label={`Image preview of ${title}`}
            href={`/projects/${internalUrl}`}
            key={image}
          >
            <Box className="img-container">
              <Image
                alt={`Image preview of ${title}`}
                key={image}
                src={`/img/projects/${image}.png`}
                layout="fill"
                className="zoom-in round"
              />
            </Box>
          </Link>
        );
      })}
      <Box mt="2em">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <Link
          aria-label={`See the details of ${title}`}
          color={linkColor}
          fontWeight="bold"
          href={`/projects/${internalUrl}`}
        >
          View More
          <ChevronRightIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectCard;
