import Layout from "~/components/layout";
import { Page, PageHeader, StrokeHeader } from "~/components/page";
import GitGraph from "~/components/page/about/git-contribution";
import Intro from "~/components/page/about/intro";
import Services from "~/components/page/about/services";
import Skills from "~/components/page/about/skills";
import { AppPage } from "~/types";

const Home: AppPage = () => {
  return (
    <Page>
      <StrokeHeader>Discover</StrokeHeader>
      <PageHeader>About Me</PageHeader>
      <Intro />
      <Services />
      <Skills />
      <GitGraph />
    </Page>
  );
};

Home.layout = (page: any) => <Layout page="About" children={page} />;
export default Home;
