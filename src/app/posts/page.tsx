import Link from "next/link";
import DateFormatter from "~/components/global/date-formatter";
import { css } from "styled-system/css";
import { getAllPosts } from "~/lib/api";
import { Hero } from "~/app/posts/hero";
import { NoThoughts } from "~/app/posts/no-thoughts";
import { PostCard } from "~/app/posts/post";
import { grid } from "styled-system/patterns";

export default function Index() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      {/* <NoThoughts /> */}
      <div
        className={grid({
          gap: "4",
          columns: { base: 1, md: 2 },
          mb: "32",
          //
          py: "[72px]",
          px: "[var(--padding)]",
          maxW: "[var(--maxW)]",
        })}
      >
        {posts.map((post) => (
          <>
            <PostCard key={post.slug} post={post} />
            {/* <div key={post.slug}>
              <h3
                className={css({
                  fontSize: "3xl",
                  lineHeight: "normal",
                  mb: "3",
                })}
              >
                <Link
                  as={`/posts/${post.slug}`}
                  href="/posts/[slug]"
                  className={css({
                    _hover: { textDecorationLine: "underline" },
                  })}
                >
                  {post.title}
                </Link>
              </h3>
              <div
                className={css({
                  fontSize: "lg",
                  lineHeight: "normal",
                  mb: "4",
                })}
              >
                <DateFormatter dateString={post.date} />
              </div>
              <p
                className={css({
                  fontSize: "lg",
                  lineHeight: "relaxed",
                  mb: "4",
                })}
              >
                {post.excerpt}
              </p>
            </div> */}
          </>
        ))}
      </div>
    </>
  );
}
