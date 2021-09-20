import React from 'react';
import SEOHeader from 'Components/templates/meta/seo-header';
import dynamic from 'next/dynamic';
import { aboutOurDifference, aboutOurHistory, aboutWhyIsa, aboutWorkPhilosophy } from 'contents/about';
import { PAGE_NAME } from 'Helpers/page-helper';
import { ArticleBody } from 'Components/templates/content/blog-article';
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'), { ssr: true });
const Footer = dynamic(() => import('Components/organism/footer/footer'));

interface IProps {
  blog: ArticleBody[];
}

// eslint-disable-next-line space-before-function-paren
export const getStaticProps = async () => {
  const blog: ArticleBody[] = [aboutWorkPhilosophy, aboutOurHistory, aboutOurDifference, aboutWhyIsa];
  return {
    props: {
      blog,
    },
  };
};

const About = (props: IProps) => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.ABOUT} />
      <BlogArticle articleHeader='About' articleBody={props.blog} />
      <Footer />
    </>
  );
};

export default About;
