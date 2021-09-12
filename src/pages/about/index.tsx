import React from 'react';
import SEOHeader from 'Components/templates/meta/seo-header';
import dynamic from 'next/dynamic';
import { aboutOurDifference, aboutOurHistory, aboutWhyIsa, aboutWorkPhilosophy } from 'contents/about';
import { PAGE_NAME } from 'Helpers/page-helper';
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'));
const Footer = dynamic(() => import('Components/organism/footer/footer'), { ssr: false });

const About = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.ABOUT} />
      <BlogArticle
        articleHeader='About'
        articleBody={[aboutWorkPhilosophy, aboutOurHistory, aboutOurDifference, aboutWhyIsa]}
      />
      <Footer />
    </>
  );
};

export default About;
