import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './Mockup.module.css';

const Mockup = ({ imageUrl }) => {
  return (
    <Box
      className={`${styles['browser-mockup']} ${styles['with-url']} zoom-in img-container`}
      mb="1em"
    >
      <Image
        src={`/img/references/${imageUrl}.png`}
        layout="fill"
        alt={`Mockup image of the website`}
      />
    </Box>
  );
};

export default Mockup;
