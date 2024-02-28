"use client";

import { ROUTES } from "@/app/components/header";
import Link from "next/link";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

export function Footer() {
  return (
    <footer>
      <nav
        className={flex({
          align: "center",
          justify: "space-between",
          mt: "[60px]",
        })}
      >
        <span className={css({ color: "[[black/87]]" })}>Abraham A.</span>

        <ul className={flex({ align: "center", gap: "4" })}>
          {ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={css({
                  px: "6",
                  py: "3",
                  pos: "relative",
                  color: "[black/38]",
                })}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={flex({
            align: "center",
            gap: "3",
            cursor: "pointer",
            transition: "[all ease 0.2s]",
            color: { base: "[black/60]", _hover: "black" },
          })}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span>Back up</span>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.40869 15.8511C5.97705 15.8511 5.66992 15.5522 5.66992 15.1206V4.18848L5.73633 2.41211L3.24609 5.14307L1.35352 7.00244C1.229 7.13525 1.02979 7.20166 0.830566 7.20166C0.415527 7.20166 0.116699 6.88623 0.116699 6.47949C0.116699 6.28027 0.191406 6.10596 0.349121 5.93994L5.85254 0.419922C6.01025 0.253906 6.20117 0.170898 6.40869 0.170898C6.61621 0.170898 6.80713 0.253906 6.96484 0.419922L12.4766 5.93994C12.6343 6.10596 12.7007 6.28027 12.7007 6.47949C12.7007 6.88623 12.4019 7.20166 11.9868 7.20166C11.7876 7.20166 11.5967 7.13525 11.4639 7.00244L9.57129 5.14307L7.08936 2.42041L7.14746 4.18848V15.1206C7.14746 15.5522 6.84033 15.8511 6.40869 15.8511Z" />
          </svg>
        </button>
      </nav>
    </footer>
  );
}
