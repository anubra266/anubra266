import { css, cx } from "styled-system/css";
import { center, flex, linkOverlay, stack } from "styled-system/patterns";
import { link, tag, text } from "styled-system/recipes";
import { WORKS } from "~/components/routes/index/works";

export function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
  return (
    <div
      className={cx(
        "group",
        css({
          bg: {
            base: "white/50",
            _dark: { base: "grey.08", _hover: "grey.09" },
          },
          rounded: "[32px]",
          p: "6",
          _light: { _hover: { boxShadow: "03" } },
          transition: "[all 0.3s ease]",
          pos: "relative",
        })
      )}
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
          alt={work.title}
          className={css({
            rounded: "[32px]",
            _dark: { display: "none" },
            h: "full",
          })}
        />
        <img
          src={`/assets/images/works/${work.id}_dark.png`}
          alt={work.title}
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
            text({ variant: "24" }),
            linkOverlay({
              fontWeight: "medium",
              mt: "4",
            })
          )}
        >
          <span
            className={css({
              bgGradient: "to-r",
              gradientFrom: "brand.primary/40",
              gradientTo: "brand.secondary/46",
              bgSize: "0px 10px",
              bgPosition: "left bottom",
              bgRepeat: "no-repeat",
              transition: "[background-size 500ms]",
              _hover: {
                bgSize: "100% 3px",
              },
              _groupHover: {
                bgSize: "100% 10px",
              },
              _dark: {
                gradientFrom: "grey.03/70",
                gradientTo: "grey.04/65",
              },
            })}
          >
            {work.title}
          </span>
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
