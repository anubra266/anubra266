import { GoArrowRight } from "react-icons/go";
import { css, cx } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";
import { button, tag, text } from "styled-system/recipes";
import { Blob2 } from "~/components/layout/blobs/blob2";

export function ChocUI() {
  return (
    <div className={stack({ gap: "[26px]", align: "center" })}>
      <div className={stack({ gap: "4", align: "center" })}>
        <span className={tag()}>Components</span>
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
          href="https://choc-ui.com"
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
            left: "-10",
            right: "0",
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
