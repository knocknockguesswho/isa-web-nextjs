import React from 'react';
import dynamic from 'next/dynamic';
import { PAGE_NAME } from 'Helpers/page-helper';
import { careersIsaRole } from 'contents/careers';
const SEOHeader = dynamic(() => import('Components/templates/meta/seo-header'), { ssr: false });
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'));
const Footer = dynamic(() => import('Components/organism/footer/footer'), { ssr: false });

const About = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.ABOUT} />
      <BlogArticle articleHeader='Careers' articleBody={[careersIsaRole]} />
      <Footer />
    </>
  );
};

export default About;
