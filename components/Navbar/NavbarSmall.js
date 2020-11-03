import styles from './NavbarSmall.module.css';
import Image from 'next/image';
import LayoutToggle from '../LayoutToggle/LayoutToggle';
import { Box, useColorModeValue } from '@chakra-ui/core';
import { useEffect } from 'react';

const Logo = () => {
  const image = useColorModeValue('black', 'white');
  return <Image className="logo" src={`/img/logo_${image}.png`} unsized />;
};

const NavbarSmall = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', '#ffffff29');

  return (
    <>
      <Box
        className={styles['sticky-navbar']}
        as="nav"
        bg={bg}
        borderBottom={`1px solid ${borderColor}`}
      >
        <div>
          <Logo />
        </div>
        <div>
          <LayoutToggle />
        </div>
      </Box>
    </>
  );
};

export default NavbarSmall;
