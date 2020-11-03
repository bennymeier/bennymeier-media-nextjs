import styles from './NavbarSmall.module.css';
import Image from 'next/image';
import LayoutToggle from '../LayoutToggle/LayoutToggle';
import { Box, Link, useColorModeValue } from '@chakra-ui/core';
import NextLink from 'next/link';

/**
 * @todo Add white_logo with full sizes cuz toggling mode changes height of logo
 */
const Logo = () => {
  const image = useColorModeValue('black', 'white');
  return (
    <NextLink href="/" passHref css={{ outline: 'none' }}>
      <Link>
        <Image
          className="logo"
          src={`/img/logo_${image}.png`}
          unsized
          key={image}
        />
      </Link>
    </NextLink>
  );
};

const NavbarSmall = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('#EDF2F7', '#2D3748');

  return (
    <>
      <Box
        className={styles['sticky-navbar']}
        as="nav"
        bg={bg}
        borderBottom={`1px solid ${borderColor}`}
        borderTop="3px solid #319795"
      >
        <Logo />
        <div>
          <LayoutToggle />
        </div>
      </Box>
    </>
  );
};

export default NavbarSmall;
