import { UseDisclosureReturn, Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const NavButton = ({ onToggle, isOpen }: UseDisclosureReturn) => {
  const barStyle = {
    w: "34px",
    h: "2.2px",
    bg: "brand.400",
    transition: "all .4s ease-in-out",
  };
  return (
    <Stack
      boxSize="20"
      justify="center"
      alignItems="center"
      fontSize="6xl"
      fontWeight="700"
      cursor="pointer"
      bg="blackAlpha.50"
      shadow="base"
      _hover={{
        bg: "blackAlpha.200",
      }}
      onClick={onToggle}
    >
      <Box
        {...barStyle}
        transform={isOpen && "rotate(45deg) translate(6px, 7px)"}
      />
      <Box {...barStyle} w={!isOpen && "20px"} />
      <Box
        {...barStyle}
        transform={isOpen && "rotate(-45deg) translate(7px, -8px)"}
      />
    </Stack>
  );
};

export default NavButton;
