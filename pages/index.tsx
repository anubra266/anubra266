import {
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "components/layout";
import { AppPage } from "types";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import NextLink from "next/link";
import { Page } from "components/page";

const Home: AppPage = () => {
  return (
    <Page layerStyle="net">
      <Stack h="full" justify="center" textAlign="center" spacing="7">
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
        <Text fontSize={["xl", "3xl"]}>Developer & Open source enthusiast</Text>
        <Stack justify="center" direction="row" spacing="5">
          <SocialIcon
            aria-label="Github"
            icon={<FaGithub />}
            href={process.env.githubUrl}
          />
          <SocialIcon
            aria-label="Twitter"
            icon={<FaTwitter />}
            href={process.env.twitterUrl}
          />
          <SocialIcon
            aria-label="Linkedin"
            icon={<FaLinkedinIn />}
            href={process.env.linkedinUrl}
          />
        </Stack>
        <Stack
          direction={["column", "row"]}
          justify="center"
          spacing={["3", "6"]}
        >
          <Flex gap="3" align="center" fontWeight="medium" fontSize="xl">
            <Image src="/choc-logo.png" boxSize="8" />
            Creator, Choc UI
          </Flex>
        </Stack>
      </Stack>
    </Page>
  );
};

Home.layout = (page: any) => <Layout page="Home" children={page} />;
export default Home;

const SocialIcon = (props: any) => (
  <IconButton
    as={Link}
    href={props.href}
    isExternal
    aria-label={props["aria-label"]}
    title={props["aria-label"]}
    isRound
    boxSize="12"
    icon={props.icon}
    variant="outline"
    colorScheme="brand"
  />
);
