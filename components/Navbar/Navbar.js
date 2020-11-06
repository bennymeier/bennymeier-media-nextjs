import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  useColorModeValue,
} from '@chakra-ui/core';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmall.module.css';
import LayoutToggle from '../LayoutToggle/LayoutToggle';

const MenuItems = ({ children, to }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <NextLink href={to} passHref>
      <Link aria-label={`Go to ${children}`}>{children}</Link>
    </NextLink>
  </Text>
);

/**
 * @todo Add white_logo with full sizes cuz toggling mode changes height of logo
 */
const Logo = () => {
  const image = useColorModeValue('black', 'white');
  return (
    <NextLink href="/" passHref css={{ outline: 'none' }}>
      <Link aria-label="Go back to home">
        <Image
          alt="My logo Meier"
          className="logo"
          src={`/img/logo_${image}.png`}
          width={65}
          height={22}
          key={image}
        />
      </Link>
    </NextLink>
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
          display={{ base: show ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/projects">Projects</MenuItems>
          <MenuItems to="/references">References</MenuItems>
          <MenuItems to="/contact">Contact</MenuItems>
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
