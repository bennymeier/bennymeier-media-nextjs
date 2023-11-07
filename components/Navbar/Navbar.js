import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import styles from './NavbarSmall.module.css';
import LayoutToggle from '../LayoutToggle/LayoutToggle';

const MENU_ENTRIES = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'References', to: '/references' },
  {
    name: 'Contact',
    to: '/contact',
  },
];

const MenuItems = ({ children, to, onClick }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    fontWeight="bold"
    display="block"
    onClick={onClick}
  >
    <Link href={to} passHref aria-label={`Go to ${children}`}>
      {children}
    </Link>
  </Text>
);

/**
 * @todo Add white_logo with full sizes cuz toggling mode changes height of logo
 */
const Logo = () => {
  const image = useColorModeValue('black', 'white');
  return (
    <Link aria-label="Go back to home" href="/" css={{ outline: 'none' }}>
      <Image
        alt="My logo Meier"
        className="logo"
        src={`/img/logo_${image}.png`}
        width={65}
        height={22}
        key={image}
      />
    </Link>
  );
};

/**
 * @todo Add click on outside to close menu
 */
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('#EDF2F7', '#2D3748');

  const resize = () => {
    if (window.innerWidth > 768) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <>
      {show && (
        <Box
          position="fixed"
          top="0"
          left="0"
          zIndex="1"
          width="100vw"
          height="100vh"
          opacity="0.5"
          background="gray.500"
        ></Box>
      )}
      <Flex
        as="nav"
        align="center"
        bg={bg}
        justify="space-between"
        alignContent="center"
        wrap="wrap"
        padding="0.5rem"
        borderBottom={`1px solid ${borderColor}`}
        borderTop="3px solid #319795"
        className={styles['sticky-navbar']}
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          onClick={handleToggle}
          mr={show ? '17px' : ''}
        >
          <IconButton
            aria-label={`${show ? 'Close menu' : 'Open menu'}`}
            icon={show ? <CloseIcon /> : <HamburgerIcon />}
          />
        </Box>

        <Box
          display={{ base: show ? 'flex' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={`${show ? 'flex-end' : ''}`}
          flexDirection={`${show ? 'column' : ''}`}
          flexGrow={1}
        >
          {MENU_ENTRIES.map((entry) => {
            return (
              <MenuItems
                to={entry.to}
                key={entry.to}
                onClick={() => setShow(false)}
              >
                {entry.name}
              </MenuItems>
            );
          })}
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Box>
            <LayoutToggle />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
