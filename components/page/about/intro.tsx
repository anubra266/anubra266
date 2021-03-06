import React from "react";
import {
  Flex,
  GridItem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { diffYears } from "~/helpers/date";

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
          <Text>
            I'm a Full Stack Developer based in Lagos, Nigeria. I'm passionate
            to my work with {diffYears(process.env.devStartYear)} years
            experience, and I have acquired the skills neccessary to build
            websites, and apps accross all platforms.
          </Text>

          <SimpleGrid
            columns={[1, 2]}
            layerStyle="net"
            p={5}
            pl={[2, 5]}
            spacingY={3}
          >
            <Info title="name" value={process.env.myName} />
            <Info title="age" value={diffYears(process.env.dateOfBirth)} />
            <Info title="phone" value={process.env.phoneNumber1} />
            <Info title="address" value={process.env.presentAddress} />
            <Info
              title="experience"
              value={`${diffYears(process.env.devStartYear)} Years`}
            />
            <Info title="freelance" value={process.env.freelanceStatus} />
          </SimpleGrid>
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
};

export default Intro;

const Info = (props: { title: string; value: any }) => (
  <GridItem
    as={Flex}
    textTransform="capitalize"
    fontWeight="thin"
    textAlign="left"
  >
    <Text fontWeight="normal" mr={2}>
      {props.title}:
    </Text>
    {props.value}
  </GridItem>
);
