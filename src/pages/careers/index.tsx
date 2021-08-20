import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import SEOHeader from 'Components/templates/meta/seo-header';
import { PAGE_NAME } from 'Helpers/page-helper';

const Careers = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.CAREERS}/>
      <Typography
        bold
        center
      >Careers</Typography>
    </>
  );
};

export default Careers;
