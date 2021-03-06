import { Button } from "@chakra-ui/button";
import { Input, InputProps } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import React from "react";

const Form = () => {
  const inputStyles: InputProps & TextareaProps = {
    size: "lg",
    focusBorderColor: "brand.400",
    bg: "blackAlpha.300",
    borderColor: "whiteAlpha.200",
    _hover: {
      borderColor: "whiteAlpha.200",
    },
    _placeholder: {
      color: "whiteAlpha.600",
    },
    isRequired: true,
  };
  return (
    <chakra.form mb={8}>
      <Stack spacing={8}>
        <Input placeholder="Name" type="text" {...inputStyles} />
        <Input placeholder="Email" type="email" {...inputStyles} />
        <Input placeholder="Subject" type="subject" {...inputStyles} />
        <Textarea placeholder="Your Message" {...inputStyles} rows={5} pt={6} />
        <Button
          size="lg"
          textTransform="uppercase"
          w={[, "fit-content"]}
          py={8}
        >
          Send Message
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default Form;
