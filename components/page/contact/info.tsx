import Icon from "@chakra-ui/icon";
import { LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { SiGnusocial } from "react-icons/si";
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
      <InfoCard title="Network" icon={SiGnusocial}>
        <Stack>
          <LinkBox>
            <Icon as={FaTwitter} />
            <LinkOverlay ml={2} target="_blank" href={process.env.twitterUrl}>
              @anubra266
            </LinkOverlay>
          </LinkBox>
          <LinkBox>
            <Icon as={FaLinkedin} />
            <LinkOverlay ml={2} target="_blank" href={process.env.linkedinUrl}>
              anubra266
            </LinkOverlay>
          </LinkBox>
          <LinkBox>
            <Icon as={FaGithub} />
            <LinkOverlay ml={2} target="_blank" href={process.env.githubUrl}>
              anubra266
            </LinkOverlay>
          </LinkBox>
        </Stack>
      </InfoCard>
    </Stack>
  );
};

export default Info;
