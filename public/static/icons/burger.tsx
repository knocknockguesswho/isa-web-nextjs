import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const Burger = (props: IProps) => {
  return (
    <svg
      width={props?.size}
      height={props?.size}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2C24 3.10457 23.1046 4 22 4H2C0.89543 4 0 3.10457 0 2Z"
        fill={props?.color}
      />
      <path
        d="M0 8.33333C0 7.22876 0.895431 6.33333 2 6.33333H22C23.1046 6.33333 24 7.22876 24 8.33333C24 9.4379 23.1046 10.3333 22 10.3333H2C0.89543 10.3333 0 9.4379 0 8.33333Z"
        fill={props?.color}
      />
      <path
        d="M0 14.6667C0 13.5621 0.895431 12.6667 2 12.6667H22C23.1046 12.6667 24 13.5621 24 14.6667C24 15.7712 23.1046 16.6667 22 16.6667H2C0.89543 16.6667 0 15.7712 0 14.6667Z"
        fill={props?.color}
      />
    </svg>
  );
};

export default Burger;
