import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Badge, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
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
        <Link
          aria-label={`See the details of ${title}`}
          href={`/references/${internalUrl}`}
        >
          {imageUrl && <Mockup imageUrl={imageUrl} />}
        </Link>
      )}
      {inProgress && <Mockup imageUrl={imageUrl} />}
      <Box mt="2em">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        {!inProgress && (
          <Link
            aria-label={`See the details of ${title}`}
            color={linkColor}
            fontWeight="bold"
            href={`/references/${internalUrl}`}
          >
            View More
            <ChevronRightIcon />
          </Link>
        )}
        {inProgress && <Badge>Coming soon</Badge>}
      </Box>
    </Box>
  );
};

export default RefrenceCard;
