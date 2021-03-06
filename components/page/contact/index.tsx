import { Box, GridItem, SimpleGrid } from "@chakra-ui/layout";
import React from "react";
import Form from "./form";
import Info from "./info";

const Wrapper = () => {
  return (
    <Box mt={8}>
      <SimpleGrid columns={12} spacing={6}>
        <GridItem colSpan={[12, , 4]}>
          <Info />
        </GridItem>
        <GridItem colSpan={[12, , 8]}>
          <Form />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Wrapper;
