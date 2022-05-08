import Icon from "@chakra-ui/icon";
import { Flex, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { SiPhotocrowd } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { IoPhonePortrait } from "react-icons/io5";

const Services = () => {
  return (
    <Stack mt={12} spacing={8}>
      <Flex pos="relative">
        <Text
          fontSize={["lg", "3xl"]}
          fontWeight="700"
          letterSpacing="wider"
          textAlign="left"
          textTransform="uppercase"
          mb={2}
          _after={{
            content: "''",
            pos: "absolute",
            w: "65px",
            left: "0",
            h: "2px",
            bg: "brand.400",
            bottom: 0,
          }}
        >
          My Services
        </Text>
      </Flex>
      <SimpleGrid columns={[1, , 2, 3, 4]} spacing="6" mb={8}>
        <Service
          service="Frontend"
          details="I handle your website's user-facing code, and provide an architecture that creates immersive user experiences for your customers."
          icon={SiPhotocrowd}
        />
        <Service
          service="Backend"
          details="I build and maintain the technologies that power the server, applications and database for your sites."
          icon={BsCodeSlash}
        />
        <Service
          service="API"
          details="I help you give your customers the medium to interact with your software through their software."
          icon={AiFillApi}
        />
        <Service
          service="Mobile"
          details="Get a mobile application to accompany your site, so your customers can acess your services at all times."
          icon={IoPhonePortrait}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default Services;

const Service = (props: { service: string; details: string; icon: any }) => (
  <GridItem
    as={Stack}
    spacing={3}
    colSpan={1}
    bg="blackAlpha.300"
    p={8}
    shadow="base"
    rounded="md"
    borderWidth={1}
    borderColor="transparent"
    _hover={{
      borderColor: "brand.400",
    }}
    transition="all .6s ease-in-out"
  >
    <Icon as={props.icon} boxSize={12} color="brand.400" />
    <Text
      fontWeight="600"
      fontSize="xl"
      textTransform="capitalize"
      letterSpacing="wider"
    >
      {props.service}
    </Text>
    <Text fontWeight="thin" letterSpacing="wide">
      {props.details}
    </Text>
  </GridItem>
);
