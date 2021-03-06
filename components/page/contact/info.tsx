import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import InfoCard from "./info-card";

const Info = () => {
  return (
    <Stack spacing={6} mb={8}>
      <InfoCard title="Location" icon={IoLocationOutline}>
        Lagos, Nigeria
      </InfoCard>
      <InfoCard active title="Email" icon={RiMailSendLine}>
        <Stack>
          <Text>{process.env.email1}</Text>
          <Text>{process.env.email2}</Text>
        </Stack>
      </InfoCard>
      <InfoCard title="Phone" icon={IoCallOutline}>
        <Stack>
          <Text>{process.env.phoneNumber1}</Text>
          <Text>{process.env.phoneNumber2}</Text>
        </Stack>
      </InfoCard>
    </Stack>
  );
};

export default Info;
