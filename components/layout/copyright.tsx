import { chakra, Box, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const CopyRight = () => {
  const [isTallEnough] = useMediaQuery("(min-height: 560px)");
  return (
    isTallEnough && (
      <Stack
        transform="rotate(-90deg)"
        transformOrigin="left top"
        whiteSpace="nowrap"
        pos="absolute"
        bottom="-55px"
        letterSpacing="0.8px"
        lineHeight="80px"
      >
        <Box>
          <chakra.span color="brand.300"> {process.env.myName}</chakra.span>{" "}
          &copy; {new Date().getFullYear()}
        </Box>
      </Stack>
    )
  );
};

export default CopyRight;
