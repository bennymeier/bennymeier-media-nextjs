import { Heading, Text, Link, Box } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Mockup from '../Mockup/Mockup';

const RefrenceCard = ({ title, description, url, imageUrl, internalUrl }) => {
  return (
    <Box maxWidth="600px">
      {imageUrl && <Mockup imageUrl={imageUrl} />}
      <Box mt="2em">
        <NextLink href={`/references/${internalUrl}`} passHref>
          <Link>
            <Heading as="h3" isTruncated maxWidth="335px" size="md">
              {title}
            </Heading>
          </Link>
        </NextLink>
        <Text>{description}</Text>
        <NextLink href={`/references/${internalUrl}`} passHref>
          <Link>
            View Project
            <ChevronRightIcon />
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default RefrenceCard;
