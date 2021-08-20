import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const Close = (props: IProps) => {
  return (
    <svg
      width={props?.size}
      height={props?.size}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.58579 17.5858C2.80474 16.8048 2.80474 15.5384 3.58579 14.7574L17.7279 0.615263C18.509 -0.165785 19.7753 -0.165785 20.5563 0.615263C21.3374 1.39631 21.3374 2.66264 20.5563 3.44369L6.41421 17.5858C5.63316 18.3669 4.36683 18.3669 3.58579 17.5858Z"
        fill={props?.color}
      />
      <path
        d="M20.5858 17.5563C19.8047 18.3374 18.5384 18.3374 17.7574 17.5563L3.61522 3.41421C2.83418 2.63316 2.83418 1.36683 3.61522 0.585786C4.39627 -0.195262 5.6626 -0.195262 6.44365 0.585786L20.5858 14.7279C21.3668 15.509 21.3668 16.7753 20.5858 17.5563Z"
        fill={props?.color}
      />
    </svg>
  );
};

export default Close;
