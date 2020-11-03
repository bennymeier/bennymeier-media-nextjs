import LinkedinIcon from '../Icons/Linkedin';
import GithubIcon from '../Icons/Github';
import InstagramIcon from '../Icons/Instagram';
import styles from './SocialMedia.module.css';
import { IconButton } from '@chakra-ui/core';

const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    url: 'https://github.com/bennymeier',
    icon: <GithubIcon />,
  },
  {
    name: 'Instagram',
    url: '',
    icon: <InstagramIcon />,
  },
  {
    name: 'LinkedIn',
    url: '',
    icon: <LinkedinIcon />,
  },
];

/**
 * @todo Add tooltips to icons, use forwardRef
 */
const SocialMedia = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.divider}></div>
      <div className={styles['social-media']}>
        {SOCIAL_MEDIA.map((media) => {
          return (
            <a
              key={media.url}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>{media.icon}</IconButton>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
