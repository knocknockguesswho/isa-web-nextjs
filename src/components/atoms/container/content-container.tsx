import React from 'react';

interface IProps {
  children: React.ReactNode
}

const ContentContainer = (props: IProps) => {
  return (
    <div className='w-full px-18 tablet:px-10 phone:px-6'>
      {props.children}
    </div>
  );
};

export default ContentContainer;
