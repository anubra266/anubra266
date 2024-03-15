import { css, cx } from "styled-system/css";
import { stack } from "styled-system/patterns";
import { text } from "styled-system/recipes";

export function NoThoughts() {
  return (
    <div
      className={stack({
        align: "center",
        mt: { base: "10", lg: "24" },
        pb: "[34px]",
        px: "[var(--padding)]",
        maxW: "[var(--maxW)]",
        w: "full",
      })}
    >
      <p
        className={cx(
          text({ variant: "64" }),
          css({
            color: "fg.default",
            fontWeight: "semibold",
          })
        )}
      >
        Still meditating, nothing to say yet.
      </p>
      <p
        className={cx(
          text({ variant: "24" }),
          css({
            color: "fg.subtle",
            fontWeight: "medium",
          })
        )}
      >
        I'll let you know, once I get my thoughts organized.
      </p>
    </div>
  );
}
