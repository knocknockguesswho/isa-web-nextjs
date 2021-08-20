import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import SEOHeader from 'Components/templates/meta/seo-header';
import { PAGE_NAME } from 'Helpers/page-helper';

const About = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.ABOUT}/>
      <Typography
        bold
        center
      >About</Typography>
    </>
  );
};

export default About;
