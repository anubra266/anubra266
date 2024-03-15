import Link from "next/link";
import { css, cx } from "styled-system/css";
import { center, flex, stack } from "styled-system/patterns";
import { link, tag, text } from "styled-system/recipes";
import { Post } from "~/lib/api";

export function PostCard({ post }: { post: Post }) {
  return (
    <div
      className={stack({
        pos: "relative",
        bg: {
          base: "white/50",
          _dark: { base: "grey.08", _hover: "grey.09" },
        },
        rounded: "[32px]",
        p: "6",
        _light: { _hover: { boxShadow: "03" } },
        transition: "[all 0.3s ease]",
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
          src={post.coverImage}
          alt={post.title}
          className={css({
            rounded: "[32px]",
            h: "full",
          })}
        />
      </div>

      <div
        className={stack({
          gap: "4",
        })}
      >
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[slug]"
          className={cx(
            link(),
            text({ variant: "24" }),
            css({
              fontWeight: "medium",
              pos: "static",
              _before: {
                content: "''",
                cursor: "inherit",
                display: "block",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "[0]",
                width: "full",
                height: "full",
              },
            })
          )}
        >
          {post.title}
        </Link>
        <p className={cx(text({ variant: "17" }), css({ color: "fg.subtle" }))}>
          {post.excerpt}
        </p>
        <div className={flex({ gap: "2" })}>
          {post.tags.map((t, i) => (
            <span key={i} className={tag()}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
