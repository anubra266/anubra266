import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Initial from "./initial";
import NavButton from "./nav-button";
import Navbar from "./navbar";
import Slant from "./slant";

const Layout = ({ children }) => {
  const navProps = useDisclosure();
  return (
    <Box h="100vh" p={7}>
      <Flex layerStyle="card" h="full" pos="relative">
        <Flex
          w="20"
          display={["none", null, "inherit"]}
          direction="column"
          shadow="lg"
        >
          <Initial />
          <NavButton {...navProps} />
          <Slant />
        </Flex>
        <Box pos="relative" w="full">
          <Navbar {...navProps} />
          <Box pos="absolute" display={{ md: "none" }}>
            <NavButton {...navProps} />
          </Box>
          <Box w="full">{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
};
//url('../images/bg-over.png') repeat #2a2a2e
export default Layout;
