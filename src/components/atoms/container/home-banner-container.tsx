import React from 'react';
import { getStatic } from 'Helpers/page-helper';

interface IProps {
  children: React.ReactNode;
}

const HomeBannerContainer = (props: IProps) => {
  return (
    <div
      className='w-full h-220 tablet:h-200 phone:h-170 relative pt-56 phone:pt-40 bg-blue bg-opacity-50'
      style={{
        backgroundImage: `url(${getStatic('images/home-banner-background.png')})`,
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
      }}
    >
      {props.children}
    </div>
  );
};

export default HomeBannerContainer;
