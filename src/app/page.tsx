import Link from "next/link";
import { getAllPosts } from "../lib/api";
import DateFormatter from "~/components/date-formatter";
import { css } from "styled-system/css";

export default function Index() {
  const posts = getAllPosts();

  return (
    <main>
      <section></section>
    </main>
  );
}
