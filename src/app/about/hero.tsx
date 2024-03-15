import { css, cx } from "styled-system/css";
import { text } from "styled-system/recipes";
import { circle } from "styled-system/patterns";
import { HeroButton } from "./hero-button";
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
            Abraham Aremu
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
            Hi again 👋🏾, I'm a software engineer currently taking my masters in
            computer science, at{" "}
            <u>Maharishi International University, IA, USA.</u>
          </p>
          <p
            className={cx(
              text({ variant: "17" }),
              css({
                color: "fg.subtle",
                maxW: "[27.125rem]",
                letterSpacing: "wider",
              })
            )}
          >
            I'm passionate about <u>open source</u> and developer experience.
          </p>

          <HeroButton />
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
            src="/assets/images/hero_emoji-2.png"
            alt="hero emoji"
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
          bottom: "[-60%]",
          right: "-20",
          _dark: { display: "none" },
        }}
      />
    </div>
  );
}
