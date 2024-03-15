import { css, cx } from "styled-system/css";
import { flex, grid, stack } from "styled-system/patterns";
import { text } from "styled-system/recipes";
import { Blob3 } from "~/components/layout/blobs/blob3";
import { ChocUI } from "~/components/routes/index/works/choc-ui";
import { WorkCard } from "~/components/routes/index/works/work-card";

export function Works() {
  return (
    <div
      id="works"
      className={flex({
        mt: "20",
        pt: "4",
        direction: "column",
        w: "full",
      })}
    >
      <ChocUI />
      <div
        className={stack({
          pos: "relative",
        })}
      >
        <div
          className={stack({
            gap: "14",
            mt: "40",
            py: "14",
            px: "[var(--padding)]",
            maxW: "[var(--maxW)]",
            w: "full",
            mx: "auto",
          })}
        >
          <Blob3
            css={{
              position: "absolute",
              bottom: "0",
              left: "0",
              zIndex: "[-1]",
              _dark: { display: "none" },
            }}
          />
          <p
            className={cx(
              text({ variant: "64" }),
              css({ fontWeight: "semibold" })
            )}
          >
            Other projects
          </p>
          <div className={grid({ gap: "2", columns: { base: 1, md: 2 } })}>
            {WORKS.map((work, i) => (
              <WorkCard key={i} work={work} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const WORKS = [
  {
    id: "zagjs",
    title: "Zag.js (Co Maintainer)",
    description:
      "Zag is a collection of framework-agnostic UI component patterns like accordion, menu, and dialog that can be used to build design systems for React, Vue and Solid.js",
    tags: ["State Machines", "Component library"],
    url: "https://zagjs.com",
  },
  {
    id: "pandacss",
    title: "Panda CSS (Co Maintainer)",
    description:
      "CSS-in-JS with build time generated styles, RSC compatible, multi-variant support, and best-in-class developer experience",
    tags: ["Styling", "Design Systems"],
    url: "https://panda-css.com/",
  },
  {
    id: "panda-playground",
    title: "Panda CSS Playground",
    description:
      "Playground to experiment with Panda CSS and generate styles for your project",
    tags: ["DX", "Styling"],
    url: "https://play.panda-css.com/",
  },
];
