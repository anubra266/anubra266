"use client";

import { css, cx } from "styled-system/css";
import { flex, grid, stack, wrap } from "styled-system/patterns";
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
          id="blob3"
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
            {Array.from({ length: 4 }).map((_, i) => (
              <WorkCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
