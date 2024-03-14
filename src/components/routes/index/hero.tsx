import { css, cx } from "styled-system/css";
import { Blob1 } from "~/components/layout/blobs/blob1";
import { button, text } from "styled-system/recipes";
import { circle } from "styled-system/patterns";
import { HeroButton } from "~/components/routes/index/hero-button";

export function Hero() {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "[var(--padding)]",
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
          Hello, I'm <br />
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
          Full Stack Developer and open source enthusiast. Maybe AI <i>guru</i>{" "}
          soon. Gotta keep up with Devin. 😉
        </p>
        <div
          className={css({
            display: "flex",
            gap: "3",
            letterSpacing: "[0.43%]",
          })}
        >
          <a
            href="https://x.com/anubra266"
            target="_blank"
            className={button({ variant: "primary" })}
          >
            Say Hi 👋
          </a>
          <HeroButton />
        </div>
      </div>

      <div
        className={css({
          _dark: {
            display: "none",
          },
          mt: "auto",
          mb: "10",
          mr: "[-9rem]",
          hideBelow: "lg",
        })}
      >
        <Blob1
          css={{
            mt: "[-12rem]",
          }}
        />
      </div>
      <div
        className={circle({
          size: "[464px]",
          bg: "grey.06/50",
          _light: {
            display: "none",
          },
          hideBelow: "lg",
        })}
      >
        <img
          src="/assets/images/hero_emoji.png"
          alt="hero emoji"
          className={css({
            h: "[88px]",
          })}
        />
      </div>
    </div>
  );
}
