import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToken } from "@chakra-ui/system";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitGraph = () => {
  const [grade0, grade1, grade2, grade3, grade4] = useToken("colors", [
    "brand.50",
    "brand.300",
    "brand.400",
    "brand.500",
    "brand.700",
  ]);
  const theme = {
    background: "transparent",
    text: "#fff",
    grade0,
    grade1,
    grade2,
    grade3,
    grade4,
  };
  return (
    <Flex display={["none", , "flex"]} direction="column" mt={12}>
      <Box mb={12}>
        <Flex pos="relative" mb={6}>
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
            My Contributions
          </Text>
        </Flex>
        <GitHubCalendar
          username="anubra266"
          theme={theme}
          fontSize={16}
          blockMargin={4}
        >
          <ReactTooltip delayShow={50} html />{" "}
        </GitHubCalendar>
      </Box>
    </Flex>
  );
};

export default GitGraph;
