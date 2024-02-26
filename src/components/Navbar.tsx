'use client';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MENU_ENTRIES } from 'src/utils/constants';
import LayoutToggle from './LayoutToggle';

const Logo = () => {
  const logo = useColorModeValue(
    '/img/logo/logo_black.svg',
    '/img/logo/logo_white.svg'
  );

  return (
    <Link href="/" aria-label="Go to home" css={{ outline: 'none' }}>
      <Image
        alt="Benny Meier Media Logo"
        height="75"
        src={logo}
        style={{ maxWidth: '100px' }}
        width="100"
      />
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <LayoutToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {MENU_ENTRIES.map((navItem) => (
        <DesktopNavItem key={navItem.name} {...navItem} />
      ))}
    </Stack>
  );
};

const DesktopNavItem = ({ name, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box>
      <Link
        p={2}
        href={href ?? '#'}
        fontSize={'lg'}
        fontWeight="500"
        color={useColorModeValue(
          isActive ? 'teal.500' : 'gray.600',
          isActive ? 'teal.400' : 'gray.200'
        )}
        _hover={{
          textDecoration: 'none',
          color: 'gray',
        }}
      >
        {name}
      </Link>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      borderBottomWidth="2px"
      borderBottomColor="gray.500"
      borderBottomStyle="solid"
    >
      {MENU_ENTRIES.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ name, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Stack spacing={4}>
      <Link
        py={2}
        href={href}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        fontWeight="500"
        fontSize="lg"
        color={useColorModeValue(
          isActive ? 'teal.500' : 'gray.600',
          isActive ? 'teal.400' : 'gray.200'
        )}
      >
        {name}
      </Link>
    </Stack>
  );
};
