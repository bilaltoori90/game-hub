import { Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Button onClick={toggleColorMode}>Toggle Theme</Button>
    </HStack>
  );
};

export default ColorModeSwitch;
