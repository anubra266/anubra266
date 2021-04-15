import Layout from "components/layout";
import { Page, PageHeader, StrokeHeader } from "components/page";
import Wrapper from "components/page/contact";
import { AppPage } from "types";

const Contact: AppPage = () => {
  return (
    <Page>
      <StrokeHeader>Get in touch</StrokeHeader>
      <PageHeader>Contact Me</PageHeader>
      <Wrapper />
    </Page>
  );
};

Contact.layout = (page: any) => <Layout page="Contact" children={page} />;
export default Contact;
