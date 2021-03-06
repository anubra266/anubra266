import { Box, Flex, useDisclosure, useToken } from "@chakra-ui/react";
import React from "react";
import Initial from "./initial";
import NavButton from "./nav-button";
import Navbar from "./navbar";
import Head from "next/head";
import CopyRight from "./copyright";

const Layout = ({ children, page }) => {
  const navProps = useDisclosure();
  const [themeColor] = useToken("colors", ["brand.400"]);
  return (
    <>
      <Head>
        <meta name="theme-color" content={themeColor} />
        <title>{page} | Abraham Anuoluwapo</title>
        <meta
          name="description"
          content="I'm a Full Stack Developer based in Lagos, Nigeria, with the skills neccessary to build websites, and apps accross all platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="anubra266.tk" />
        <meta property="og:title" content="Abraham Anuoluwapo - Portfolio" />
        <meta
          property="og:image"
          content="https://anubra266.tk/images/preview.png"
        />

        <meta
          property="og:description"
          content="Fullstack Developer in Lagos, Nigeria"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@anubra266" />
        <meta property="twitter:creator" content="@anubra266" />
        <meta property="twitter:url" content="anubra266.tk" />
        <meta
          property="twitter:title"
          content="Abraham Anuoluwapo - Portfolio"
        />
        <meta
          property="twitter:description"
          content="I'm a Full Stack Developer based in Lagos, Nigeria, with the skills neccessary to build websites, and apps accross all platforms."
        />
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
          <Box pos="relative" w="full" h="full">
            <Box w="full" h="full" pos="absolute" overflow="auto">
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
