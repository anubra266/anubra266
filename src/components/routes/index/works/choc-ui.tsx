import { GoArrowRight } from "react-icons/go";
import { css, cx } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";
import { button, tag, text } from "styled-system/recipes";
import { Blob2 } from "~/components/layout/blobs/blob2";

export function ChocUI() {
  return (
    <div className={stack({ gap: "[26px]", align: "center" })}>
      <div
        className={stack({ gap: "4", align: "center", px: "[var(--padding)]" })}
      >
        <div className={stack({ direction: "row" })}>
          <span className={tag()}>Components</span>
          <span className={tag()}>Made by me</span>
        </div>
        <p
          className={cx(
            text({ variant: "64" }),
            css({ fontWeight: "semibold" })
          )}
        >
          Choc UI
        </p>
        <p
          className={cx(
            text({ variant: "24" }),
            css({
              fontWeight: "medium",
              color: "fg.subtle",
              maxW: "[40.875rem]",
              textAlign: "center",
            })
          )}
        >
          Choc UI is a set of accessible and reusable components that are
          commonly used in web applications.
        </p>
        <a
          href="https://github.com/anubra266/choc-ui"
          target="_blank"
          className={cx(button({ variant: "secondary" }))}
        >
          Check it out <GoArrowRight />
        </a>
      </div>
      <div
        className={css({
          maxW: "[74rem]",
          pos: "relative",
          px: "[var(--padding)]",
        })}
      >
        <Blob2
          css={{
            pos: "absolute",
            left: "-10",
            bottom: "0",
            zIndex: "[-1]",
            _dark: { display: "none" },
          }}
        />
        <img
          src="/assets/images/choc-ui_light.png"
          alt="Choc UI"
          className={css({
            _dark: { display: "none" },
            w: "full",
          })}
        />
        <img
          src="/assets/images/choc-ui_dark.png"
          alt="Choc UI"
          className={css({
            _light: { display: "none" },
          })}
        />
        <div
          className={css({
            pos: "absolute",
            bottom: "0",
            left: { base: "-10", _dark: "[var(--padding)]" },
            right: "[var(--padding)]",
            w: "full",
            h: "[249px]",
            bgGradient: "to-b",
            gradientFrom: "bg.default/0",
            gradientTo: "bg.default",
          })}
        />
      </div>
    </div>
  );
}
