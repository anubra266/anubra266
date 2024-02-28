import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import DateFormatter from "@/app/components/date-formatter";
import { css, cva } from "styled-system/css";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className={css({ mb: "32" })}>
        <span>{post.title}</span>

        <div
          className={css({
            mb: "8",
            md: { mb: "16" },
            sm: { ml: "0", mr: "0" },
          })}
        >
          <img src={post.coverImage} alt={post.title} />
        </div>
        <div className={css({ maxW: "2xl", ml: "auto", mr: "auto" })}>
          <div className={css({ mb: "6", fontSize: "lg", lineHeight: "snug" })}>
            <DateFormatter dateString={post.date} />
          </div>
        </div>

        <div className={css({ maxW: "2xl", ml: "auto", mr: "auto" })}>
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
    fontSize: "lg",
    lineHeight: "relaxed",

    "& p, & ul, & ol, & blockquote": {
      my: "6",
    },

    "& h2": {
      fontSize: "3xl",
      lineHeight: "snug",
      mt: "12",
      mb: "4",
    },

    "& h3": {
      fontSize: "2xl",
      lineHeight: "snug",
      mt: "8",
      mb: "4",
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
