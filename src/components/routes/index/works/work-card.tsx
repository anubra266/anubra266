import { css, cx } from "styled-system/css";
import { center, flex, stack } from "styled-system/patterns";
import { tag, text } from "styled-system/recipes";

export function WorkCard() {
  return (
    <div
      className={stack({
        bg: { base: "white/50", _dark: "grey.08" },
        rounded: "[32px]",
        p: "6",
      })}
    >
      <div
        className={center({
          bg: { base: "grey.005/60", _dark: "grey.06/50" },
          h: "[352px]",
          w: "full",
          rounded: "[32px]",
          backdropFilter: "[blur(150)]",
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

      <div
        className={stack({
          gap: "4",
        })}
      >
        <p
          className={cx(text({ variant: "24" }), css({ fontWeight: "medium" }))}
        >
          Project Title
        </p>
        <p className={cx(text({ variant: "17" }), css({ color: "fg.subtle" }))}>
          Fill your project brief here. It can be the outcome of the project, or
          some success metrics, or a cheesy tagline.
        </p>
        <div className={flex({ gap: "2" })}>
          <span className={tag()}>Mobile App</span>
          <span className={tag()}>Website</span>
          <span className={tag()}>SaaS</span>
        </div>
      </div>
    </div>
  );
}
