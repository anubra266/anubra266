import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactChild } from "react";
import NextLink from "next/link";

type NavLink = { children: ReactChild; href: string };

const NavLink = (props: NavLink) => {
  return (
    <Flex w="auto" justify={{ md: "center" }} px={5}>
      <NextLink href={props.href}>
        <Text
          textStyle="stroke"
          _hover={{
            color: "white",
          }}
          w="min-content"
          transition="color .2s ease-in-out"
          cursor="pointer"
          fontSize="6xl"
          fontWeight="700"
          letterSpacing="wide"
        >
          {props.children}
        </Text>
      </NextLink>
    </Flex>
  );
};

export default NavLink;
