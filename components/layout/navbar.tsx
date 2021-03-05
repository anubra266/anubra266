import { UseDisclosureReturn } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import { useToken } from "@chakra-ui/system";
import React from "react";

const Navbar = ({ isOpen }: UseDisclosureReturn) => {
  const [bg] = useToken("colors", ["gray.700"]);
  return (
    <Box
      pos="absolute"
      boxSize="full"
      display={["none", null, "inherit"]}
      background={`url('/images/bg-over.png') repeat ${bg}`}
      visibility={isOpen ? "visible" : "hidden"}
      opacity={isOpen ? 1 : 0}
      transform={`scaleX(${isOpen ? 1 : 0})`}
      transformOrigin="left"
      transitionDuration=".6s"
      overflowY="auto"
    >
      Navbar
    </Box>
  );
};

export default Navbar;
