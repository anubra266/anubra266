import { Box, Button, IconButton, Stack, Text } from "@chakra-ui/react";
import Layout from "~/components/layout";
import { AppPage } from "~/types";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Home: AppPage = () => {
  return (
    <Box layerStyle="net" overflowY="auto" boxSize="full">
      <Stack h="full" justify="center" textAlign="center" spacing="7" my={10}>
        <Text
          textStyle="stroke"
          transition="color .2s ease-in-out"
          cursor="pointer"
          fontSize={["4xl", "7xl"]}
          fontWeight="700"
          letterSpacing="wide"
        >
          {process.env.myName}
        </Text>
        <Text fontSize={["xl", "3xl"]}>
          An open source enthusiast & Full Stack Developer
        </Text>
        <Stack justify="center" direction="row" spacing="5">
          <SocialIcon aria-label="Github" icon={<FaGithub />} />
          <SocialIcon aria-label="Twitter" icon={<FaTwitter />} />
          <SocialIcon aria-label="Twitter" icon={<FaLinkedinIn />} />
        </Stack>
        <Button
          textTransform="uppercase"
          w="min-content"
          alignSelf="center"
          size="lg"
          px={16}
          py={8}
          colorScheme="brand"
        >
          Hire me
        </Button>
      </Stack>
    </Box>
  );
};

Home.layout = (page: any) => <Layout page="Home" children={page} />;
export default Home;

const SocialIcon = (props: any) => (
  <IconButton
    aria-label={props["aria-label"]}
    title={props["aria-label"]}
    isRound
    boxSize="12"
    icon={props.icon}
    variant="outline"
    colorScheme="brand"
  />
);
