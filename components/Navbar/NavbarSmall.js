import styles from './NavbarSmall.module.css';
import Image from 'next/image';
import LayoutToggle from '../LayoutToggle/LayoutToggle';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

/**
 * @todo Add white_logo with full sizes because toggling mode changes height of logo
 */
const Logo = () => {
  const image = useColorModeValue('black', 'white');
  return (
    <Link href="/" aria-label="Go to home" css={{ outline: 'none' }}>
      <Image
        alt="My logo Meier"
        className="logo"
        src={`/img/logo_${image}.png`}
        layout="fill"
        key={image}
      />
    </Link>
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
