import { Heading, Text, Link, Box } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Mockup from '../Mockup/Mockup';

const RefrenceCard = ({ title, description, url, imageUrl, internalUrl }) => {
  return (
    <Box maxWidth="600px">
      {imageUrl && <Mockup imageUrl={imageUrl} />}
      <NextLink href={`/${internalUrl}`}>
        <Link>
          <Heading as="h3" isTruncated maxWidth="335px" size="md">{title}</Heading>
        </Link>
      </NextLink>
      <Text>{description}</Text>
      <NextLink href={`/${internalUrl}`}>
        <Link>
         View Project<ChevronRightIcon />
        </Link>
      </NextLink>
    </Box>
  );
};

export default RefrenceCard;
