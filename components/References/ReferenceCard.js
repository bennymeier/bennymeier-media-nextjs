import { Heading, Text, Link, Box, useColorModeValue } from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Mockup from '../Mockup/Mockup';

const RefrenceCard = ({ title, description, url, imageUrl, internalUrl }) => {
  const linkColor = useColorModeValue('gray.800', 'teal.300');

  return (
    <Box maxWidth="600px">
      <NextLink href={`/references/${internalUrl}`} passHref>
        <Link>{imageUrl && <Mockup imageUrl={imageUrl} />}</Link>
      </NextLink>
      <Box mt="2em">
        <Heading as="h3" isTruncated maxWidth="335px" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <NextLink href={`/references/${internalUrl}`} passHref>
          <Link color={linkColor}>
            View Project
            <ChevronRightIcon />
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default RefrenceCard;
