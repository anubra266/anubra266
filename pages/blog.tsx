import Layout from "components/layout";
import { Page, PageHeader, StrokeHeader } from "components/page";
import Posts from "components/page/blog";
import { AppPage } from "types";

const Blog: AppPage = () => {
  return (
    <Page>
      <StrokeHeader>Recent Posts</StrokeHeader>
      <PageHeader>My Blog</PageHeader>
      <Posts />
    </Page>
  );
};

Blog.layout = (page: any) => <Layout page="Blog" children={page} />;
export default Blog;
