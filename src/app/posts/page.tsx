import { css } from "styled-system/css";
import { getAllPosts } from "~/lib/api";
import { Hero } from "~/app/posts/hero";
import { NoThoughts } from "~/app/posts/no-thoughts";
import { PostCard } from "~/app/posts/post";
import { grid } from "styled-system/patterns";
import { Blob5 } from "~/components/layout/blobs/blob5";

export default function Index() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />

      {posts.length > 0 ? (
        <div
          className={css({
            mb: "20",
            py: "[52px]",
            pos: "relative",
            w: "full",
          })}
        >
          <div
            className={grid({
              gap: "4",
              columns: { base: 1, md: 2 },

              px: "[var(--padding)]",
              maxW: "[var(--maxW)]",
              mx: "auto",
            })}
          >
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Blob5
            css={{
              pos: "absolute",
              bottom: "0",
              left: "-20",
              zIndex: "[-1]",
              w: "full",
              _dark: { display: "none" },
            }}
          />
        </div>
      ) : (
        <NoThoughts />
      )}
    </>
  );
}
