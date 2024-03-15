import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "~/lib/api";
import markdownToHtml from "~/lib/markdownToHtml";
import DateFormatter from "~/components/global/date-formatter";
import { css, cva, cx } from "styled-system/css";
import { flex, grid, stack } from "styled-system/patterns";
import { tag, text } from "styled-system/recipes";
import { Blob6 } from "~/components/layout/blobs/blob6";
import { PostCard } from "~/app/posts/post";
import { Blob7 } from "~/components/layout/blobs/blob7";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const posts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className={css({ mt: "10", w: "full", overflowX: "clip" })}>
      <article>
        <div
          className={css({
            pos: "relative",
            overflowY: "clip",
            pb: "6",
          })}
        >
          <div
            className={css({
              px: "[var(--padding)]",
              maxW: "2xl",
              w: "full",
              mx: "auto",
            })}
          >
            <div className={stack({ gap: "7" })}>
              <div className={flex({ gap: "2" })}>
                {post.tags.map((t, i) => (
                  <span key={i} className={tag()}>
                    {t}
                  </span>
                ))}
              </div>
              <p
                className={cx(
                  text({ variant: "64" }),
                  css({
                    fontWeight: "semibold",
                    maxW: "[47rem]",
                  })
                )}
              >
                {post.title}
              </p>
              <div
                className={css({
                  fontWeight: "medium",
                  color: "fg.subtle",
                })}
              >
                <DateFormatter dateString={post.date} />
              </div>
            </div>

            <div
              className={css({
                mb: "6",
                mt: "10",
              })}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className={css({
                  borderRadius: "[32px]",
                })}
              />
            </div>
          </div>

          <Blob6
            css={{
              pos: "absolute",
              bottom: "[-35rem]",
              right: "[-15.4rem]",
              zIndex: "[-1]",
              _dark: { display: "none" },
            }}
          />
        </div>

        <div
          className={css({
            px: "[var(--padding)]",
            maxW: "2xl",
            w: "full",
            mx: "auto",
            pos: "relative",
          })}
        >
          <div
            className={markdown()}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Blob6
            css={{
              pos: "absolute",
              bottom: "[-15rem]",
              right: "[-45.4rem]",
              zIndex: "[-1]",
              _dark: { display: "none" },
            }}
          />
        </div>

        <div
          className={css({
            pos: "relative",
          })}
        >
          <div
            className={stack({
              gap: "14",
              mt: "40",
              py: "14",
              px: "[calc(var(--padding) + 40px)]",
              maxW: "[calc(var(--maxW) - 80px)]",
              w: "full",
              mx: "auto",
              overflowX: "clip",
            })}
          >
            <p
              className={cx(
                text({ variant: "64" }),
                css({ fontWeight: "semibold" })
              )}
            >
              More articles.
            </p>

            <div className={grid({ gap: "2", columns: { base: 1, md: 2 } })}>
              {posts.map((p, i) => (
                <PostCard key={i} post={p} />
              ))}
            </div>
          </div>
          <Blob7
            css={{
              position: "absolute",
              bottom: "0",
              right: "0",
              zIndex: "[-1]",
              _dark: { display: "none" },
            }}
          />
        </div>
      </article>
    </main>
  );
}

const markdown = cva({
  base: {
    mt: "20",
    color: "fg.subtle",
    fontSize: "[1.0625rem]",
    letterSpacing: "wider",

    "& *:is(:first-child, :last-child)": {
      mt: "0!",
    },

    "& :where(p, details, dl, ol, ul, xmp, plaintext, listing, blockquote, table, figure, hr)":
      {
        my: "2",
      },

    "& p": {
      lineHeight: "normal",
      mt: "5",
      fontFamily: "[var(--inter)]",
    },
    "& ol, & ul": {
      my: "5",
      pl: "[1.625em]",
    },

    "& ol > li, & ul > li": {
      pl: "1.5",
      my: "2",
    },

    "& h2": {
      fontSize: "[2.125rem]",
      lineHeight: "[3rem]",
      mt: "12",
      mb: "4",
    },
    "& h3": {
      fontSize: "[1.75rem]",
      lineHeight: "[2.625rem]",
      mt: "8",
      mb: "4",
    },

    "& li": {
      wordWrap: "break-word",
    },

    "& ul": {
      listStyleType: "disc",
    },

    "& ol": {
      listStyleType: "decimal",
    },

    "& a": {
      textDecoration: "underline 0.1em transparent",
      textUnderlineOffset: "0.125em",
      transitionDuration: "normal",
      transitionProperty: "text-decoration-color",
      transitionTimingFunction: "default",
      _hover: {
        textDecorationColor: "current",
      },
      color: "brand.primary",
    },

    "& :where(b, strong)": {
      fontWeight: "bold",
    },

    "& :where(i, cite, em, var, address, dfn)": { fontStyle: "italic" },

    "& table": {
      borderCollapse: "collapse",
      borderSpacing: "[2px]",
      width: "full",
      textAlign: "center",
    },
    "& th, & td": {
      borderColor: "fg.subtle",
      borderWidth: "[1px]",
      borderStyle: "solid",
    },
    "& th": { p: "2", fontWeight: "medium" },
    "& td": { p: "2", fontWeight: "normal" },

    "& blockquote": {
      borderLeftWidth: "[4px]",
      borderLeftColor: "fg.subtle",
      borderLeftStyle: "solid",
      pl: "4",
      my: "5",
      py: "4",
      display: "flex",
      alignItems: "center",
      bg: "fg.subtle/10",
      color: "fg.default",
      "& p": { p: "0", m: "0" },
    },

    "& pre > code": { rounded: "lg", fontSize: "sm" },

    "& :where(code, kbd, tt, samp)": {
      fontWeight: "medium",
      fontSize: "sm",
      fontFamily: "[var(--font-mono)]",
      px: "1",
      py: "1",
      bg: "fg.subtle/10",
      rounded: "sm",
    },
  },
});

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Abraham's mind`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
