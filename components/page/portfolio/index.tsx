import React, { useState } from "react";
import { Flex, SimpleGrid, Stack } from "@chakra-ui/layout";
import { TabList, Tabs } from "@chakra-ui/tabs";

import PTab from "./portfolio-tab";
import works from "./works.json";
import Work from "./work";
import { WorkProps } from "~/types";
import { Collapse } from "@chakra-ui/transition";

const Works = () => {
  const [current, setCurrent] = useState<number>(0);
  const sections: string[] = ["all", "frontend", "backend"];
  const section = sections[current];
  return (
    <Flex mt={16}>
      <Stack spacing={7} mb={8}>
        <Tabs
          variant="unstyled"
          index={current}
          onChange={(ind) => setCurrent(ind)}
        >
          <TabList flexDir={["column", , "row"]} justifyContent="flex-start">
            <PTab>All</PTab>
            <PTab>Front end</PTab>
            <PTab>Back end</PTab>
          </TabList>
        </Tabs>
        <SimpleGrid columns={[1, , 2, 3]} spacingX={3} spacingY={6}>
          {works.map((work: WorkProps, i) => (
            <Collapse
              key={i}
              in={current === 0 ? true : work.sections.includes(section)}
              animateOpacity
            >
              <Work {...work} />
            </Collapse>
          ))}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};

export default Works;
