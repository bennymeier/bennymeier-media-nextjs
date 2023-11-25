import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import {
  IconBrandCss3,
  IconBrandNodejs,
  IconBrandTypescript,
} from '@tabler/icons-react';
import Image from 'next/image';
import Skill from './Skill';

const ProjectCard = ({ title, description, thumbnail, url, internalUrl }) => {
  const linkColor = useColorModeValue('gray.800', 'teal.300');

  return (
    <Flex
      padding="4"
      borderWidth="1px"
      borderRadius="0.5em"
      flexDirection="column"
      position="relative"
    >
      <Box borderWidth="1px" borderRadius="0.5em" overflow="hidden">
        <Image
          alt={`Image preview of ${title}`}
          className="zoom-in round"
          height="650"
          src={`/img/projects/${thumbnail}.png`}
          width="1200"
          loading="lazy"
          quality={100}
        />
      </Box>
      <Box py="4" px="2" flex="1 1 0%">
        <Box>
          <Heading as="h2" fontSize="x-large">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Box>
        <Flex gap="0.5em" flexWrap="wrap" mt="4">
          <Skill name="TypeScript" icon={IconBrandTypescript} />
          <Skill name="Node.js" icon={IconBrandNodejs} />
          <Skill name="CSS3" icon={IconBrandCss3} />
        </Flex>
      </Box>
      {/* <Link
        aria-label={`Image preview of ${title}`}
        href={`/projects/${internalUrl}`}
      >
        <Box className="img-container">
          <Image
            alt={`Image preview of ${title}`}
            className="zoom-in round"
            height="450"
            src={`/img/projects/${thumbnail}.png`}
            width="450"
          />
        </Box>
      </Link>
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
      </Box> */}
    </Flex>
  );
};

export default ProjectCard;
