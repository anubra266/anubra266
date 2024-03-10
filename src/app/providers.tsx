// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: any) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
