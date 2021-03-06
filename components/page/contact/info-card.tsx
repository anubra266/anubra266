import React from "react";
import { IconType } from "react-icons/lib";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
const InfoCard = (props: {
  title: string;
  children: any;
  icon: IconType;
  active?: boolean;
}) => {
  return (
    <Stack
      p={8}
      rounded="md"
      bg="blackAlpha.300"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={props.active ? "brand.400" : "blackAlpha.200"}
      _hover={{
        borderColor: "brand.400",
      }}
      transition="all .4s ease-in-out"
      maxW="full"
    >
      <Flex>
        <Stack spacing={5}>
          <Text fontSize="lg" textTransform="uppercase" fontWeight="semibold">
            {props.title}{" "}
          </Text>
          <Box fontSize="sm">{props.children}</Box>
        </Stack>
        <Spacer />
        <Icon
          my={[, "auto"]}
          fontSize={["3xl", "6xl"]}
          as={props.icon}
          color="brand.400"
        />
      </Flex>
    </Stack>
  );
};
export default InfoCard;
