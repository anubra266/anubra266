import { flex } from "styled-system/patterns";
import { ChocUI } from "~/components/routes/index/works/choc-ui";

export function Works() {
  return (
    <div id="works" className={flex({ mt: "24", direction: "column" })}>
      <ChocUI />
    </div>
  );
}
