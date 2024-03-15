import { css, cx } from "styled-system/css";
import { text } from "styled-system/recipes";
import { circle } from "styled-system/patterns";
import { Blob4 } from "~/components/layout/blobs/blob4";

export function Hero() {
  return (
    <div
      className={css({
        pos: "relative",
        w: "full",
        overflowY: "hidden",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "[var(--padding)]",
          maxW: "[var(--maxW)]",
          w: "full",
          mx: "auto",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "6",
            py: "44",
          })}
        >
          <p
            className={cx(
              text({ variant: "64" }),
              css({
                fontWeight: "semibold",
              })
            )}
          >
            Thoughts
          </p>
          <p
            className={cx(
              text({ variant: "28" }),
              css({
                fontWeight: "medium",
                maxW: "[29.3125rem]",
              })
            )}
          >
            Follow my inner monologue as I share my thoughts on software.
          </p>
        </div>
        <div
          className={circle({
            size: "[464px]",
            bg: { base: "grey.005/60", _dark: "grey.06/50" },
            backdropFilter: "[blur(150)]",
            hideBelow: "lg",
          })}
        >
          <img
            src="/assets/images/thoughts_emoji.png"
            alt="Thoughts emoji"
            className={css({
              h: "[88px]",
            })}
          />
        </div>
      </div>
      <Blob4
        css={{
          pos: "absolute",
          zIndex: "[-1]",
          bottom: "[-75%]",
          right: "-20",
          _dark: { display: "none" },
        }}
      />
    </div>
  );
}
