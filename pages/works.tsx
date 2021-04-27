import Layout from "components/layout";
import { Page, PageHeader, StrokeHeader } from "components/page";
import WorkList from "components/page/works";
import { AppPage } from "types";

const Works: AppPage = () => {
  return (
    <Page>
      <StrokeHeader>Latest Works</StrokeHeader>
      <PageHeader>My Works</PageHeader>
      <WorkList />
    </Page>
  );
};

Works.layout = (page: any) => <Layout page="Works" children={page} />;
export default Works;
