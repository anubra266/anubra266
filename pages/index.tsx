import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Layout from "~/components/layout";
import { AppPage } from "~/types";

const Home: AppPage = () => {
  return (
    <>
      <Head>
        <title>Abraham Anuoluwapo</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      wow
    </>
  );
};

Home.layout = (page: any) => <Layout children={page} />;
export default Home;
