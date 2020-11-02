import { Heading, Text, Link } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, description, url }) => {
  return (
    <div>
      <NextLink href={`/${url}`}>
        <a>
          <Heading>{title}</Heading>
        </a>
      </NextLink>
      <Text>{description}</Text>
      <NextLink href={`/${url}`}>
        <Link>
          <strong>
            VIEW PROJECT <ChevronRightIcon />
          </strong>
        </Link>
      </NextLink>
    </div>
  );
};

export default ProjectCard;
