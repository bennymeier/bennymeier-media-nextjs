import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Flex,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    url: 'https://github.com/bennymeier',
    icon: <IconBrandGithub />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/benny_meier/',
    icon: <IconBrandInstagram />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/benjaminmeiermedia/',
    icon: <IconBrandLinkedin />,
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
        {SOCIAL_MEDIA.map(({ url, icon, name }) => {
          return (
            <Tooltip key={url} label={name}>
              <Link
                aria-label={`Go to my ${name} profile`}
                href={url}
                isExternal
                margin="0 10px"
              >
                <IconButton
                  aria-label={`Open my ${name} profile`}
                  fill={fillColor}
                >
                  {icon}
                </IconButton>
              </Link>
            </Tooltip>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SocialMedia;
