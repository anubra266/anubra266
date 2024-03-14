import { css, cx } from "styled-system/css";
import { center, flex, stack } from "styled-system/patterns";
import { link, tag, text } from "styled-system/recipes";
import { WORKS } from "~/components/routes/index/works";

export function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
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
          maxH: "[352px]",
          w: "full",
          rounded: "[32px]",
          backdropFilter: "[blur(150)]",
        })}
      >
        <img
          src={`/assets/images/works/${work.id}.png`}
          alt="hero emoji"
          className={css({
            rounded: "[32px]",
            _dark: { display: "none" },
            h: "full",
          })}
        />
        <img
          src={`/assets/images/works/${work.id}_dark.png`}
          alt="hero emoji"
          className={css({
            rounded: "[32px]",
            _light: { display: "none" },
          })}
        />
      </div>

      <div
        className={stack({
          gap: "4",
        })}
      >
        <a
          href={work.url}
          className={cx(
            link(),
            text({ variant: "24" }),
            css({ fontWeight: "medium" })
          )}
        >
          {work.title}
        </a>
        <p className={cx(text({ variant: "17" }), css({ color: "fg.subtle" }))}>
          {work.description}
        </p>
        <div className={flex({ gap: "2" })}>
          {work.tags.map((t, i) => (
            <span key={i} className={tag()}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
