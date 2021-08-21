import React from 'react';
import dynamic from 'next/dynamic';
import { aboutOurDifference, aboutOurHistory, aboutWhyIsa, aboutWorkPhilosophy } from 'contents/about';
import { PAGE_NAME } from 'Helpers/page-helper';
const SEOHeader = dynamic(() => import('Components/templates/meta/seo-header'), { ssr: false });
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'), { ssr: false });

const About = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.ABOUT} />
      <BlogArticle
        articleHeader='About'
        articleBody={[aboutWorkPhilosophy, aboutOurHistory, aboutOurDifference, aboutWhyIsa]}
      />
    </>
  );
};

export default About;
