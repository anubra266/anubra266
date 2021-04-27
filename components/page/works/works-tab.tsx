import { Tab } from "@chakra-ui/tabs";
import React from "react";

const WTab = (props: any) => {
  return (
    <Tab
      {...props}
      textTransform="uppercase"
      fontWeight="semibold"
      _selected={{ color: "brand.400", shadow: "none" }}
    />
  );
};

export default WTab;
