import React from 'react';
import Typography from '../foundation/typography';

interface IProps {
  centered?: boolean;
  children: React.ReactNode;
  title?: string;
}

const SectionContainer = (props: IProps) => {
  return (
    <div className={`flex flex-col space-y-6 h-auto ${props.centered ? 'items-center' : ''}`}>
      {props.title &&
        <Typography
          className='text-xl'
          bold
          isTitle
        >
          {props.title}
        </Typography>
      }
      {props.children}
    </div>
  );
};

export default SectionContainer;
