import React from 'react';
import { getStatic } from 'Helpers/page-helper';

interface IProps {
  children: React.ReactNode;
  bgImageSrc?: string;
  imgWidth?: number;
  paddingVertical?: number;
}

const BackgroundedContainer = (props: IProps) => {
  return (
    <div
      className='w-screen phone:px-6 h-105 phone:h-auto phone:py-6 flex items-center justify-center bg-overlay'
      style={{
        maxWidth: '100%',
        backgroundImage: `url(${props.bgImageSrc})`,
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover'
      }}
    >
      {props.children}
    </div>
  );
};

BackgroundedContainer.defaultProps = {
  bgImageSrc: getStatic('images/home-banner-background.png'),
  imgWidth: 1364,
};

export default BackgroundedContainer;
