import {
  UseDisclosureReturn,
  Box,
  Stack,
  useEventListener,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NavLink from "./navlink";
import { useRouter } from "next/router";

const Navbar = ({ isOpen, onClose }: UseDisclosureReturn) => {
  const router = useRouter();
  useEffect(() => {
    const closeNav = () => onClose();
    router.events.on("routeChangeComplete", closeNav);
    return () => {
      router.events.off("routeChangeComplete", closeNav);
    };
  }, []);
  
  useEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "escape" && isOpen) {
      event.preventDefault();
      onClose();
    }
  });
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
        <NavLink href="/works">Works</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Stack>
    </Box>
  );
};

export default Navbar;
