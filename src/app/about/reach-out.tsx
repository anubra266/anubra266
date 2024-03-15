import { stack } from "styled-system/patterns";

export function ReachOut() {
  return (
    <div
      className={stack({
        align: "center",
        mt: { base: "10", lg: "44" },
        pb: "[34px]",
        px: "[var(--padding)]",
        maxW: "[var(--maxW)]",
        w: "full",
      })}
    >
      <div>Reach out</div>
    </div>
  );
}
