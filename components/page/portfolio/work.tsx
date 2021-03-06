import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Flex, GridItem, Link, Stack, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { WorkProps } from "~/types";

const Work = (props: WorkProps) => {
  const { stacks } = props;
  const stackString = stacks.reduce(
    (acc, nxt, i) => (
      (acc += nxt + (i === stacks.length - 1 ? "" : " / ")), acc
    ),
    ""
  );
  const [loaded, setLoaded] = useState(false);
  return (
    <GridItem colSpan={1} shadow="lg" pos="relative" role="group">
      <Flex
        pos="absolute"
        bg="blackAlpha.800"
        boxSize="full"
        visibility="hidden"
        opacity={0}
        transformOrigin="bottom"
        transform="scaleY(0)"
        _groupHover={
          loaded && {
            visibility: "visible",
            opacity: 1,
            transform: "scaleY(1)",
          }
        }
        transitionDuration=".6s"
        justify="center"
        align="center"
        rounded="md"
      >
        <Stack textAlign="center" spacing={4}>
          <Text fontSize="xl" fontWeight="semibold" letterSpacing="wider">
            {props.name}
          </Text>
          <Text color="brand.300">{stackString}</Text>
          <Button
            as={Link}
            isExternal
            href={props.url}
            colorScheme="brand"
            size="sm"
            w="fit-content"
            alignSelf="center"
            rightIcon={<FaExternalLinkAlt />}
          >
            Visit
          </Button>
        </Stack>
      </Flex>
      <Skeleton isLoaded={loaded} boxSize="full">
        <Image
          src={props.image}
          boxSize="full"
          onLoad={() => setLoaded(true)}
          rounded="md"
          loading="lazy"
        />
      </Skeleton>
    </GridItem>
  );
};

export default Work;
