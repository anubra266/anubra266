import { Flex } from "@chakra-ui/layout";
import React from "react";

const Initial = () => {
  return (
    <Flex
      boxSize="20"
      bg="brand.300"
      color="brand.300"
      justify="center"
      alignItems="center"
      fontSize="6xl"
      fontWeight="700"
      cursor="pointer"
      sx={{
        WebkitTextStrokeColor: "white",
        WebkitTextStrokeWidth: "1px",
      }}
    >
      A
    </Flex>
  );
};

export default Initial;
