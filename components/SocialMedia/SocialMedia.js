import { Link } from '@chakra-ui/next-js';
import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import GithubIcon from '../Icons/Github';
import InstagramIcon from '../Icons/Instagram';
import LinkedinIcon from '../Icons/Linkedin';

const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    url: 'https://github.com/bennymeier',
    icon: <GithubIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/benny_meier/',
    icon: <InstagramIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminmeiermedia/',
    icon: <LinkedinIcon />,
  },
];

/**
 * @todo Add tooltips to icons, use forwardRef
 */
const SocialMedia = () => {
  const borderColor = useColorModeValue('teal.300', 'teal.500');
  const fillColor = useColorModeValue('teal.900', 'white');

  return (
    <Flex alignItems="center">
      <Box
        width="200px"
        borderBottomColor={borderColor}
        borderBottomWidth="3px"
        borderBottomStyle="solid"
      ></Box>
      <Flex>
        {SOCIAL_MEDIA.map((media) => {
          return (
            <Link
              aria-label={`Go to my ${media.name} profile`}
              href={media.url}
              isExternal
              margin="0 10px"
              key={media.url}
            >
              <IconButton
                aria-label={`Open my ${media.name} profile`}
                fill={fillColor}
              >
                {media.icon}
              </IconButton>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SocialMedia;
