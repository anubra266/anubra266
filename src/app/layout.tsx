import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { css } from "styled-system/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Abraham A. Aremu (aka anubra266) - Software Engineer and Open Source Enthusiast`,
  description: `Software engineer passionate about UI, accessibility and DX.`,
  openGraph: {
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://avatars.githubusercontent.com/u/30869823?s=180&v=4"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://avatars.githubusercontent.com/u/30869823?s=32&v=4"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://avatars.githubusercontent.com/u/30869823?s=16&v=4"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/30869823?s=16&v=4" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div className={css({ minH: "screen" })}>{children}</div>
      </body>
    </html>
  );
}
