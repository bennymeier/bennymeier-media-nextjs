const { Box, Heading, Link, Text } = require('@chakra-ui/core');
import Image from 'next/image';

const ProjectCard = ({ title, description, images, url }) => {
  return (
    <Box>
      <Heading>{title}</Heading>
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
