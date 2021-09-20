import React from 'react';

interface IProps {
  children: React.ReactNode;
  isFromHome?: boolean;
}

const BodyContainer = (props: IProps) => {
  return (
    <div
      id='blog-body-container'
      className={`w-full flex flex-col space-y-37 items-center pt-20 pb-100 tablet:pb-200px phone:pb-200px overflow-x-hidden ${
        !props.isFromHome ? 'phone:pt-10' : 'phone:pt-20'
      }`}
    >
      {props.children}
    </div>
  );
};

export default BodyContainer;
