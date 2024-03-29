import React from "react";
import {
  Flex,
  GridItem,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { diffYears } from "helpers/date";

const Intro = () => {
  return (
    <SimpleGrid columns={12} mt={20} spacing={4}>
      <GridItem colSpan={[12, 5]} h={["320px", "420px"]}>
        <Skeleton
          boxSize="full"
          startColor="blackAlpha.700"
          endColor="blackAlpha.900"
        ></Skeleton>
      </GridItem>
      <GridItem colSpan={[12, 7]} w="full" mt={8}>
        <Stack spacing={6}>
          <Flex pos="relative">
            <Text
              fontSize={["lg", "2xl"]}
              fontWeight="600"
              letterSpacing="wide"
              mb={2}
              _after={{
                content: "''",
                pos: "absolute",
                w: "95px",
                left: "0",
                h: "2px",
                bg: "brand.400",
                bottom: 0,
              }}
            >
              Hello! I am {process.env.myName}
            </Text>
          </Flex>
          <Text lineHeight="9">
            I'm a Full Stack Developer based in Lagos, Nigeria. I’m an
            Open-source enthusiast interested in all forms of programming. I
            help make great Web, Mobile and Desktop Apps. When I’m not building
            great software, you can find me at Viki or Netflix.
          </Text>

          <SimpleGrid
            columns={[1, 2]}
            layerStyle="net"
            p={5}
            pl={[2, 5]}
            spacingY={3}
          >
            <Info title="name" value={process.env.myName} />
            <Info title="age" value="Just a number 😉" />
            <Info
              title="twitter"
              value="@anubra266"
              href={process.env.twitterUrl}
              lowercase
            />
            <Info title="address" value={process.env.presentAddress} />
            <Info
              title="experience"
              value="As much as you need 😎"
            />
            <Info title="Open source" value={process.env.freelanceStatus} />
          </SimpleGrid>
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
};

export default Intro;

const Info = (props: {
  title: string;
  value: any;
  lowercase?: boolean;
  href?: string;
}) => (
  <LinkBox>
    <GridItem
      as={Flex}
      textTransform={props.lowercase ? "inherit" : "capitalize"}
      fontWeight="thin"
      textAlign="left"
    >
      <LinkOverlay
        textTransform="capitalize"
        fontWeight="normal"
        mr={2}
        target="_blank"
        href={props.href}
      >
        {props.title}:
      </LinkOverlay>
      {props.value}
    </GridItem>
  </LinkBox>
);
