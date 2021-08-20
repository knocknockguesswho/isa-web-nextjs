import React from 'react';
import Head from 'next/head';
import { getStatic, PAGE_NAME, pageList } from 'Helpers/page-helper';

interface IProps {
  pageName: PAGE_NAME;
}

const SEOHeader = (props: IProps) => {
  const seoData = pageList[props?.pageName] ? pageList[props?.pageName] : pageList[PAGE_NAME.DEFAULT];
  const ogImage = 'iradhi.com' + getStatic('og-image.png');
  return (
    <Head>
      <title>{seoData.title}</title>
      <meta
        name="description"
        content={seoData.description}
        key="description"
      />
      <meta
        property="og:title"
        content={seoData.title}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={seoData.description}
        key="ogdescription"
      />
      <meta
        property="og:image"
        content={ogImage}
        key="ogimage"
      />
    </Head>
  );
};

export default SEOHeader;
