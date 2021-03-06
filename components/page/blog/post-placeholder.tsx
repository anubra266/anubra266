import React from "react";
import {
  chakra,
  Box,
  Image,
  Link,
  Badge,
  Stack,
  Button,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
const PostLoader = () => {
  return (
    <GridItem
      rowSpan={1}
      mx="auto"
      rounded="lg"
      shadow="md"
      bg="gray.700"
      maxW="full"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={6}>
        <Stack spacing={4}>
          <Wrap spacingY="4">
            <WrapItem>
              {Array.from({ length: 5 }).map(() => {
                <Badge
                  py={1}
                  px={2}
                  fontWeight="medium"
                  rounded="md"
                  colorScheme="brand"
                >
                  Javascript
                </Badge>;
              })}
            </WrapItem>
          </Wrap>
          <Link
            display="block"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ textDecor: "underline" }}
          >
            I Built A Successful Blog In One Year
          </Link>
          <chakra.p mt={2} fontSize="sm" color="gray.300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </chakra.p>
        </Stack>

        <Box mt={4}>
          <Stack direction="row" alignItems="center">
            <Button>Read More</Button>
            <chakra.span mx={1} fontSize="sm" color="gray.300">
              21 SEP 2015
            </chakra.span>
          </Stack>
        </Box>
      </Box>
    </GridItem>
  );
};

export default PostLoader;
