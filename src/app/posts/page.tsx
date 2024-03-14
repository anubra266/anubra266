import Link from "next/link";
import DateFormatter from "~/components/global/date-formatter";
import { css } from "styled-system/css";
import { getAllPosts } from "~/lib/api";

export default function Index() {
  const posts = getAllPosts();

  return (
    <main>
      <section>
        <h2
          className={css({
            mb: "8",
            fontSize: "5xl",
            lineHeight: "tight",
            md: { fontSize: "7xl", lineHeight: "tight" },
            fontWeight: "bold",
            letterSpacing: "tighter",
          })}
        >
          More Stories
        </h2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1",
            md: {
              gridTemplateColumns: "2",
              columnGap: "16",
              rowGap: "32",
            },
            lg: { columnGap: "32" },
            rowGap: "20",
            mb: "32",
          })}
        >
          {posts.map((post) => (
            <div key={post.slug}>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
