'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

const LayoutToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
      paddingX={{ base: "0.5em" }}
      onClick={toggleColorMode}
      aria-label="Switch to dark mode"
      icon={
        colorMode === 'light' ? (
          <MoonIcon color="gray.800" />
        ) : (
          <SunIcon color="yellow.300" />
        )
      }
    />
  );
};
export default LayoutToggle;
