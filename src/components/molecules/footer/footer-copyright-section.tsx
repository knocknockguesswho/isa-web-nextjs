import Typography from 'Components/atoms/foundation/typography';
import React from 'react';

const FooterCopyrightSection = () => {
  return (
    <div className='w-full py-6 flex justify-center items-center bg-blue'>
      <Typography
        className='text-s tablet:text-xs phone:text-xs text-white'
        center
      >
      © 2020 PT Iradhi Solusindo Abadi, All Rights Reserved.<br/>All trademarks are the property of their respective owners.
      </Typography>
    </div>
  );
};

export default FooterCopyrightSection;
