import styles from './Mockup.module.css';
import Image from 'next/image';
import { Box } from '@chakra-ui/core';

const Mockup = ({ imageUrl }) => {
  return (
    <Box className={`${styles['browser-mockup']} ${styles['with-url']}`} mb="1em">
      <Image src={`/img/${imageUrl}.png`} unsized />
    </Box>
  );
};

export default Mockup;
