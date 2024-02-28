"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

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
          borderColor: "gray.800",
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
                  bg: { _after: "gray.800" },
                },
                _hover: {
                  bg: { _after: "gray.800" },
                },
              })}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <span>@anubra266</span>
    </nav>
  );
}

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
