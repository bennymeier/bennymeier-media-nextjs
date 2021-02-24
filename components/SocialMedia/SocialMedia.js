import LinkedinIcon from '../Icons/Linkedin';
import GithubIcon from '../Icons/Github';
import InstagramIcon from '../Icons/Instagram';
import {
  Flex,
  IconButton,
  Link,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

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
              key={media.url}
              href={media.url}
              isExternal
              margin="0 10px"
              aria-label={`Go to my ${media.name} profile`}
            >
              <IconButton
                fill={fillColor}
                aria-label={`Open my ${media.name} profile`}
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
