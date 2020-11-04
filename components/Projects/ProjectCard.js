const { Box, Heading, Link, Text } = require('@chakra-ui/core');
import Image from 'next/image';
import NextLink from 'next/link';

const ProjectCard = ({ title, description, images, url, internalUrl }) => {
  return (
    <Box maxWidth="600px">
      <NextLink href={`/projects/${internalUrl}`} passHref>
        <Link>
          <Heading as="h3" isTruncated maxWidth="335px" size="md">
            {title}
          </Heading>
        </Link>
      </NextLink>
      <Text>{description}</Text>
      <Link href={url} isExternal>
        View Site
      </Link>
      {images.map((image) => {
        return <Image src={`/img/projects/${image}.png`} unsized />;
      })}
    </Box>
  );
};

export default ProjectCard;
