import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";

export const StrokeHeader = (props: BoxProps) => {
  return (
    <Text
      textAlign="center"
      textStyle="stroke"
      fontSize={["2xl", "3xl"]}
      fontWeight="700"
      letterSpacing="wide"
      textTransform="uppercase"
      sx={{
        WebkitTextStrokeColor: "var(--chakra-colors-whiteAlpha-400)",
      }}
      {...props}
    />
  );
};

export const PageHeader = (props: BoxProps) => {
  return (
    <Box pos="relative">
      <Text
        textAlign="center"
        fontSize={["3xl", "5xl"]}
        fontWeight="800"
        textTransform="uppercase"
        mt={[, , -3]}
        _after={{
          content: "''",
          pos: "absolute",
          w: "65px",
          ml: "-32.5px",
          left: "50%",
          h: "2px",
          bg: "brand.400",
          bottom: 0,
        }}
        {...props}
      />
    </Box>
  );
};

export const Page = (props: BoxProps) => {
  return <Flex h="full" direction="column" p="6" pt={[16]} {...props} />;
};
