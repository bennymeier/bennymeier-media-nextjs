import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/core';

const LayoutToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
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
