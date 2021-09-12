import React from 'react';
import Head from 'next/head';
import { getStatic, PAGE_NAME, pageList } from 'Helpers/page-helper';

interface IProps {
  pageName: PAGE_NAME;
}

const SEOHeader = (props: IProps) => {
  const hostname: string = process.browser ? (window.location.hostname as string) : '';
  const seoData = pageList[props?.pageName] ? pageList[props?.pageName] : pageList[PAGE_NAME.DEFAULT];
  const ogImage = hostname + getStatic('isa-og-image.png');
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name='description' content={seoData.description} key='description' />
      <meta property='og:title' content={seoData.title} key='ogtitle' />
      <meta property='og:description' content={seoData.description} key='ogdescription' />
      <meta property='og:image' content={ogImage} key='ogimage' />
    </Head>
  );
};

export default SEOHeader;
