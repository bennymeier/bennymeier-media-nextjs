import LinkedinIcon from '../icon/linkedin';
import GithubIcon from '../icon/github';
import InstagramIcon from '../icon/instagram';
import styles from './SocialMedia.module.css';
import { IconButton } from '@chakra-ui/core';

/**
 * @todo Add tooltips to icons, use forwardRef
 */
const SocialMedia = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.divider}></div>
      <div className={styles['social-media']}>
        <a
          href="https://github.com/bennymeier"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <GithubIcon />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/benjaminmeiermedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <LinkedinIcon />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/benny_meier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
