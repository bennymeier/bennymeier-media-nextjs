import {
  Heading,
  Text,
  Link,
  Box,
  useColorModeValue,
  Badge,
} from '@chakra-ui/core';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Mockup from '../Mockup/Mockup';

const RefrenceCard = ({
  title,
  description,
  url,
  imageUrl,
  internalUrl,
  inProgress,
}) => {
  const linkColor = useColorModeValue('gray.800', 'teal.300');

  return (
    <Box maxWidth="600px">
      {!inProgress && (
        <NextLink href={`/references/${internalUrl}`} passHref>
          <Link>{imageUrl && <Mockup imageUrl={imageUrl} />}</Link>
        </NextLink>
      )}
      {inProgress && <Mockup imageUrl={imageUrl} />}
      <Box mt="2em">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        {!inProgress && (
          <NextLink href={`/references/${internalUrl}`} passHref>
            <Link color={linkColor}>
              View Project
              <ChevronRightIcon />
            </Link>
          </NextLink>
        )}
        {inProgress && <Badge>Coming soon</Badge>}
      </Box>
    </Box>
  );
};

export default RefrenceCard;
