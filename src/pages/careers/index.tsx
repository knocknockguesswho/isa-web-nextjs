import React from 'react';
import SEOHeader from 'Components/templates/meta/seo-header';
import dynamic from 'next/dynamic';
import { PAGE_NAME } from 'Helpers/page-helper';
import { careersIsaRole } from 'contents/careers';
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'));
const Footer = dynamic(() => import('Components/organism/footer/footer'), { ssr: false });

const About = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.CAREERS} />
      <BlogArticle articleHeader='Careers' articleBody={[careersIsaRole]} />
      <Footer />
    </>
  );
};

export default About;
