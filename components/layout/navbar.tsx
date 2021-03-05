import { UseDisclosureReturn, Box, Stack, useToken } from "@chakra-ui/react";
import React from "react";
import NavLink from "./navlink";

const Navbar = ({ isOpen }: UseDisclosureReturn) => {
  return (
    <Box
      pos="absolute"
      boxSize="full"
      layerStyle="net"
      visibility={isOpen ? "visible" : "hidden"}
      opacity={isOpen ? 1 : 0}
      transform={`scaleX(${isOpen ? 1 : 0})`}
      transformOrigin="left"
      transitionDuration=".6s"
      overflowY="auto"
    >
      <Stack h="full" justify="center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Stack>
    </Box>
  );
};

export default Navbar;
