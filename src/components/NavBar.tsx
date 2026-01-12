import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack w="100%">
      <Image src={logo} boxSize="60px" />
      <Text>Nav BAr</Text>
      <Spacer />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
