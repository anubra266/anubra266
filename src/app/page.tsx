import Link from "next/link";
import { getAllPosts } from "../lib/api";
import DateFormatter from "@/app/components/date-formatter";
import { css } from "styled-system/css";

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
            md: { fontSize: "7xl", lineHeight: "7xl" },
            fontWeight: "bold",
            letterSpacing: "tighter",
          })}
        >
          More Stories
        </h2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "cols.1",
            md: {
              gridTemplateColumns: "cols.2",
              columnGap: "x.16",
              rowGap: "y.32",
            },
            lg: { columnGap: "x.32" },
            rowGap: "y.20",
            mb: "32",
          })}
        >
          {posts.map((post) => (
            <div key={post.slug}>
              <h3
                className={css({
                  fontSize: "3xl",
                  lineHeight: "snug",
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
                className={css({ fontSize: "lg", lineHeight: "lg", mb: "4" })}
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
