import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/core';
import { useColorMode } from '@chakra-ui/core';

const LayoutToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Switch to dark mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
};
export default LayoutToggle;
