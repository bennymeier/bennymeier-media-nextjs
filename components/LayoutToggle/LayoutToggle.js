import styles from './LayoutToggle.module.css';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/core';
import { useEffect, useState } from 'react';

/**
 * @todo Use chakra-ui layout switch instead of manipulating the classList of document.body
 */
const LayoutToggle = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [mode]);

  return (
    <div
      className={styles.toggler}
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      <IconButton
        aria-label="Switch to dark mode"
        icon={mode === 'light' ? <MoonIcon /> : <SunIcon />}
      />
    </div>
  );
};
export default LayoutToggle;
