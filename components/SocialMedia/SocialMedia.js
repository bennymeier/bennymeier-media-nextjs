import LinkedinIcon from '../Icons/Linkedin';
import GithubIcon from '../Icons/Github';
import InstagramIcon from '../Icons/Instagram';
import styles from './SocialMedia.module.css';
import { IconButton } from '@chakra-ui/core';
import { useColorModeValue, Box } from '@chakra-ui/core';

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
  const mode = useColorModeValue('', 'white');

  return (
    <div className={styles.flex}>
      <Box className={styles.divider} borderBottomColor={mode || "teal.500"}></Box>
      <div className={styles['social-media']}>
        {SOCIAL_MEDIA.map((media) => {
          return (
            <a
              key={media.url}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton fill={mode}>{media.icon}</IconButton>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
