import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { flex } from "styled-system/patterns";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Abraham A. Aremu (aka anubra266) - Software Engineer and Open Source Enthusiast`,
  description: `Software engineer passionate about UI, accessibility and DX.`,
  openGraph: {
    images: ["https://portfolio-anubra266.vercel.app/api/og"],
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="portfolio-anubra266.vercel.app"
        />
        <meta property="twitter:url" content="https://x.com/anubra266" />
        <meta
          name="twitter:title"
          content="Abraham A. Aremu (aka anubra266) - Software Engineer and Open Source Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Software engineer passionate about UI, accessibility and DX."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-anubra266.vercel.app/api/og"
        />

        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/30869823?s=16&v=4"
        />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div
          className={flex({
            direction: "column",
            mx: "auto",
            minH: "screen",
            maxW: "[1288px]",
          })}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
