import React from 'react';
import dynamic from 'next/dynamic';
import { pageList, PAGE_NAME } from 'Helpers/page-helper';
import { servicesAccountingService, servicesBusinessAdvisory, servicesTaxServices } from 'contents/services';
import { ArticleBody } from 'Components/templates/content/blog-article';
const SEOHeader = dynamic(() => import('Components/templates/meta/seo-header'), { ssr: false });
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'), { ssr: false });
enum BLOG_POSTS {
  ACCOUNTING_SERVICE = 'accounting-service',
  TAX_SERVICES = 'tax-services',
  BUSINESS_ADVISORY = 'business-advisory',
}

const blogPosts: { [args: string]: ArticleBody } = {
  [BLOG_POSTS.ACCOUNTING_SERVICE]: servicesAccountingService,
  [BLOG_POSTS.TAX_SERVICES]: servicesTaxServices,
  [BLOG_POSTS.BUSINESS_ADVISORY]: servicesBusinessAdvisory,
};

const Services = () => {
  // const router = useRouter();
  // React.useEffect(() => {
  //   if (router) {
  //     const pageSection: PageSection[] = pageList[PAGE_NAME.SERVICES].pageSection as PageSection[];
  //     router.replace(pageSection[0].route as UrlObject);
  //   }
  // }, []);
  // const [articleBody, setArticleBody] = React.useState(servicesAccountingService);
  // React.useEffect(() => {
  // // TODO: next will dynamically set article body on each requests as a static props. the data should be from outside this app
  //   if (router.query.section)
  // }, [router]);
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.SERVICES} />
      <BlogArticle
        articleHeader='Building a better working world for our clients.'
        tabContent={pageList[PAGE_NAME.SERVICES].pageSection}
        articleBody={blogPosts[BLOG_POSTS.ACCOUNTING_SERVICE]}
      />
    </>
  );
};

export default Services;
