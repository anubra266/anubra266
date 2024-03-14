"use client";

import { GoArrowDown } from "react-icons/go";
import { cx } from "styled-system/css";
import { button } from "styled-system/recipes";

export function HeroButton() {
  return (
    <button
      onClick={() => {
        const works = document.querySelector("#works");
        if (works) {
          works.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={cx(button({ variant: "secondary" }))}
    >
      Discover my features <GoArrowDown />
    </button>
  );
}
