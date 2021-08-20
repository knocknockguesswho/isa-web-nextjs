import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const ChevronLeft = (props: IProps) => {
  return (
    <svg
      width={props?.size}
      height={props?.size}
      viewBox="0 0 17 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.648 23.9982C12.7567 24.8894 11.3117 24.8894 10.4205 23.9982L0.738019 14.3157C-0.153227 13.4245 -0.153227 11.9795 0.738019 11.0882C1.62927 10.197 3.07426 10.197 3.96551 11.0882L13.648 20.7707C14.5392 21.6619 14.5392 23.1069 13.648 23.9982Z"
        fill={props?.color}
      />
      <path
        d="M13.5783 1.33506C14.4695 2.22631 14.4695 3.6713 13.5783 4.56255L3.89579 14.245C3.00454 15.1363 1.55955 15.1363 0.668302 14.245C-0.222944 13.3538 -0.222944 11.9088 0.668302 11.0175L10.3508 1.33506C11.242 0.443815 12.687 0.443815 13.5783 1.33506Z"
        fill={props?.color}
      />
    </svg>
  );
};

export default ChevronLeft;
