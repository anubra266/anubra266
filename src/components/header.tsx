"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import Link from "next/link";

import {
  GithubIcon,
  LucideLinkedin,
  Mail,
  MapPinIcon,
  Twitter,
} from "lucide-react";
import { HStack, Stack } from "styled-system/jsx";
import { Avatar } from "~/components/ui/avatar";
import { Link as A } from "~/components/ui/link";
import * as HoverCard from "~/components/ui/hover-card";
import { Icon } from "~/components/ui/icon";
import { Text } from "~/components/ui/text";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={flex({
        align: "center",
        justify: "space-between",
        mt: "[60px]",
      })}
    >
      <Image
        alt="Handsome Abraham 😉"
        src="https://avatars.githubusercontent.com/u/30869823?s=512&v=4"
        width={56}
        height={56}
        className={css({
          borderRadius: "full",
          borderStyle: "solid",
          borderWidth: "[4px]",
          borderColor: "gray.8",
          p: "[1.5px]",
        })}
      />

      <ul className={flex({ align: "center", gap: "4" })}>
        {ROUTES.map((route) => (
          <li key={route.href}>
            <Link
              target={route.external ? "_blank" : undefined}
              data-active={isActive(route.href) ? "" : undefined}
              href={route.href}
              className={css({
                px: "6",
                py: "3",
                pos: "relative",
                color: { base: "[black/60]", _active: "black" },
                _after: {
                  pos: "absolute",
                  content: '""',
                  bottom: "-1",
                  left: "[50%]",
                  transform: "translateX(-50%)",
                  display: "block",
                  height: "1",
                  width: "2",
                  rounded: "full",
                  transition: "[all ease 0.2s]",
                },
                _active: {
                  bg: { _after: "gray.8" },
                },
                _hover: {
                  bg: { _after: "gray.8" },
                },
              })}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <HoverCard.Root openDelay={100}>
        <HoverCard.Trigger asChild>
          <A href="https://github.com/anubra266/">@anubra266</A>
        </HoverCard.Trigger>

        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Stack gap="4" direction="row">
              <Avatar
                name="Abraham A. Aremu"
                src="https://avatars.githubusercontent.com/u/30869823"
              />
              <Stack gap="3">
                <Stack gap="1">
                  <Text size="sm" fontWeight="semibold">
                    @anubra266
                  </Text>
                  <Text size="sm" color="fg.muted">
                    I'd prefer you find me on Github, but here are your choices;
                  </Text>
                </Stack>
                <HStack gap="4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      title={social.label}
                      href={social.href}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </HStack>
                <HStack gap="1" color="fg.subtle">
                  <Icon size="sm">
                    <MapPinIcon />
                  </Icon>
                  <Text size="xs">Fairfield, Iowa. USA</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </HoverCard.Root>
    </nav>
  );
}

const SOCIALS = [
  {
    href: "https://twitter.com/anubra266/",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://github.com/anubra266",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/anubra266/",
    label: "LinkedIn",
    icon: LucideLinkedin,
  },
  {
    href: "mailto:anubra266@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export const ROUTES = [
  {
    href: "/",
    label: "Work",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/resume",
    label: "Resume 👀",
    external: true,
  },
  {
    href: "/posts",
    label: "Blog",
  },
];
