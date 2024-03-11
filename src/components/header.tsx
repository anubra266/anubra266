"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { link } from "styled-system/recipes";
import Link from "next/link";

import {
  GithubIcon,
  LucideLinkedin,
  Mail,
  MapPinIcon,
  Twitter,
} from "lucide-react";
import { ThemeToggle } from "~/components/theme-toggle";

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
          borderColor: "[fg.default/70]",
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
                color: {
                  base: "[fg.default/60]",
                  _active: "fg.default",
                },
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
                  bg: { _after: "fg.default" },
                },
                _hover: {
                  bg: { _after: "fg.default" },
                },
              })}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={flex({ align: "center", gap: "4" })}>
        <a
          href="https://github.com/anubra266"
          target="_blank"
          className={link()}
        >
          @anubra266
        </a>
        <ThemeToggle />
      </div>
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
