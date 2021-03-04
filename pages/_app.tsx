import "../styles/globals.css";

import Theme from "~/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />{" "}
    </Theme>
  );
}

export default MyApp;
