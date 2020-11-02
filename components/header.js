import { useState } from 'react';
import { Box, Heading, Flex, Text, IconButton } from '@chakra-ui/core';
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MenuItems = ({ children, to }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    <Link href={to}>
      <a>{children}</a>
    </Link>
  </Text>
);

const Header = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      className="navbar"
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <a>
            <Heading as="h1" size="lg">
              Benny Meier
            </Heading>
          </a>
        </Link>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <IconButton
          aria-label={`${show ? 'Close menu' : 'Open menu'}`}
          icon={show ? <CloseIcon /> : <HamburgerIcon />}
        />
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems to="/about">About</MenuItems>
        <MenuItems to="/projects">Projects</MenuItems>
        <MenuItems to="/references">References</MenuItems>
        <MenuItems to="/contact">Contact</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton aria-label="Switch to dark mode" icon={<MoonIcon />} />
      </Box>
    </Flex>
  );
};

export default Header;
