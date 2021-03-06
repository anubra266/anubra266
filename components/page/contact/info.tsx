import { Stack, Text } from "@chakra-ui/layout";
import Link from "next/link";
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
          <Link href={`mailto:${process.env.email1}`}>
            {process.env.email1}
          </Link>
          <Link href={`mailto:${process.env.email2}`}>
            {process.env.email2}
          </Link>
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
