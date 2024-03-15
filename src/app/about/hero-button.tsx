"use client";

import { GoArrowDown } from "react-icons/go";
import { css, cx } from "styled-system/css";
import { button } from "styled-system/recipes";

export function HeroButton() {
  return (
    <button
      onClick={() => {
        const funFacts = document.querySelector("#funFacts");
        if (funFacts) {
          funFacts.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={cx(button({ variant: "secondary" }), css({ w: "fit" }))}
    >
      Learn more <GoArrowDown />
    </button>
  );
}
