import Theme from "~/theme";
import { RootApp } from "~/types";

function MyApp({ Component, pageProps }: RootApp) {
  const layout = Component.layout || ((page: any) => page);
  return <Theme>{layout(<Component {...pageProps}></Component>)}</Theme>;
}

export default MyApp;
