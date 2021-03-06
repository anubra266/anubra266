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
  Icon,
  Text,
} from "@chakra-ui/react";
import { schemes } from "./data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiHeart2Line, RiMessage2Line } from "react-icons/ri";
const Post = (props) => {
  return (
    <GridItem rowSpan={1} mx="auto" rounded="lg" shadow="md" bg="gray.700">
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={props.cover_image}
        alt={props.title}
        loading="lazy"
      />

      <Box p={6}>
        <Stack spacing={4}>
          <Wrap spacingY="4">
            {props.tag_list.map((tag: string, tid: number) => (
              <WrapItem key={tid}>
                <Badge
                  key={tid}
                  py={1}
                  px={2}
                  fontWeight="medium"
                  rounded="md"
                  colorScheme={schemes[rIndex()]}
                  w="fit-content"
                >
                  #{tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
          <Stack direction={["column", , "row"]} spacing={[, , 10]}>
            <Stack direction="row">
              <Icon as={RiHeart2Line} my="auto" />
              <Text>{props.public_reactions_count} Reactions </Text>
            </Stack>
            <Stack direction="row">
              <Icon as={RiMessage2Line} my="auto" />
              <Text>{props.comments_count} Comments </Text>
            </Stack>
          </Stack>
          <Link
            display="block"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ textDecor: "underline" }}
            isExternal
            href={props.url}
          >
            {props.title}
          </Link>
          <chakra.p mt={2} fontSize="sm" color="gray.300">
            {props.description}
          </chakra.p>
        </Stack>

        <Box mt={4}>
          <Stack direction="row" alignItems="center">
            <Button
              as={Link}
              isExternal
              href={props.url}
              colorScheme="brand"
              w="fit-content"
              alignSelf="center"
              rightIcon={<FaExternalLinkAlt />}
            >
              Read More
            </Button>
            <chakra.span
              mx={1}
              fontSize="sm"
              letterSpacing="wide"
              fontWeight="semibold"
              color="gray.300"
            >
              {props.readable_publish_date}
            </chakra.span>
          </Stack>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Post;

const rIndex = () => Math.floor(Math.random() * schemes.length);
