import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { text } from "styled-system/recipes";

export function FunFacts() {
  return (
    <div
      className={flex({
        direction: "column",
        align: "center",
        mt: { base: "10", lg: "24" },
        pb: "[34px]",
        px: "[var(--padding)]",
        maxW: "[var(--maxW)]",
        w: "full",
      })}
    >
      <div>
        <p
          className={cx(
            text({ variant: "64" }),
            css({
              color: "fg.default",
              fontWeight: "semibold",
            })
          )}
        >
          4 Fun facts about me
        </p>
      </div>
    </div>
  );
}
