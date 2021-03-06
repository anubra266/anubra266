import Layout from "~/components/layout";
import { Page, PageHeader, StrokeHeader } from "~/components/page";
import Works from "~/components/page/portfolio";
import { AppPage } from "~/types";

const Portfolio: AppPage = () => {
  return (
    <Page>
      <StrokeHeader>Latest Works</StrokeHeader>
      <PageHeader>My Portfolio</PageHeader>
      <Works />
    </Page>
  );
};

Portfolio.layout = (page: any) => <Layout page="Portfolio" children={page} />;
export default Portfolio;
