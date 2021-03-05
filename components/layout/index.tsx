import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Initial from "./initial";
import NavButton from "./nav-button";
import Navbar from "./navbar";
import Head from "next/head";
import CopyRight from "./copyright";

const Layout = ({ children, page }) => {
  const navProps = useDisclosure();
  return (
    <>
      <Head>
        <title>{page} | Abraham Anuoluwapo</title>
        <link rel="icon" href="/logo.png" />
      </Head>
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
            <CopyRight />
          </Flex>
          <Box pos="relative" w="full">
            <Box boxSize="full" pos="absolute">
              {children}
            </Box>
            <Navbar {...navProps} />
            <Box pos="absolute" display={{ md: "none" }}>
              <NavButton {...navProps} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Layout;
