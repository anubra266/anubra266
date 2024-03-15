import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "~/lib/api";
import markdownToHtml from "~/lib/markdownToHtml";
import DateFormatter from "~/components/global/date-formatter";
import { css, cva, cx } from "styled-system/css";
import { flex, stack } from "styled-system/patterns";
import { tag, text } from "styled-system/recipes";
import { Blob5 } from "~/components/layout/blobs/blob5";
import { Blob4 } from "~/components/layout/blobs/blob4";
import { Blob6 } from "~/components/layout/blobs/blob6";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className={css({ mt: "10" })}>
      <article>
        <div className={css({ pos: "relative", overflowY: "clip", pb: "6" })}>
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
              right: "[-45.4rem]",
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
          })}
        >
          <div
            className={markdown()}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </main>
  );
}

const markdown = cva({
  base: {
    // color: "fg.subtle",
    // fontSize: "[1.0625rem]",
    // lineHeight: "[1.5rem]",
    // letterSpacing: "wider",
    // "& p, & ul, & ol, & blockquote": {
    //   my: "6",
    // },
    // "& :where(h2, h3)": {
    //   color: "fg.default",
    // },
    // "& h2": {
    //   fontSize: "[2.125rem]",
    //   lineHeight: "[3rem]",
    //   mt: "12",
    //   mb: "4",
    // },
    // "& h3": {
    //   fontSize: "[1.75rem]",
    //   lineHeight: "[2.625rem]",
    //   mt: "8",
    //   mb: "4",
    // },
    // "& p": {
    //   fontFamily: "[var(--inter)]",
    // },
    // "& em": {
    //   fontStyle: "italic",
    // },
    // "& ul": {
    //   listStyleType: "disc",
    // },
    // "& ol": {
    //   listStyleType: "decimal",
    // },
    // "& ul, & ol": {
    //   pl: "8",
    // },
    color: "fg.subtle",
    fontSize: "[1.0625rem]",
    lineHeight: "[1.5rem]",
    letterSpacing: "wide",

    "& em": {
      fontStyle: "italic",
    },
    "& p": {
      lineHeight: "normal",
      mt: "5",
      _first: { mt: "0" },
      fontFamily: "[var(--inter)]",
    },
    "& ol, & ul": {
      my: "5",
      pl: "[1.625em]",
    },
    "& ul": {
      listStyleType: "disc",
    },
    "& ol": {
      listStyleType: "decimal",
    },
    "& ol > li, & ul > li": {
      pl: "1.5",
      my: "2",
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
