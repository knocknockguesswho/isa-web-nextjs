import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const ChevronRight = (props: IProps) => {
  return (
    <svg
      width={props?.size}
      height={props?.size}
      viewBox="0 0 12 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.985329 1.33506C1.87658 0.443814 3.32157 0.443814 4.21282 1.33506L13.8953 11.0175C14.7865 11.9088 14.7865 13.3538 13.8953 14.245C13.004 15.1363 11.559 15.1363 10.6678 14.245L0.985329 4.56255C0.094083 3.6713 0.094083 2.22631 0.985329 1.33506Z"
        fill={props?.color}
      />
      <path
        d="M1.05505 23.9982C0.163799 23.1069 0.163799 21.6619 1.05505 20.7707L10.7375 11.0882C11.6288 10.197 13.0738 10.197 13.965 11.0882C14.8562 11.9795 14.8562 13.4245 13.965 14.3157L4.28253 23.9982C3.39129 24.8894 1.94629 24.8894 1.05505 23.9982Z"
        fill={props?.color}
      />
    </svg>
  );
};

export default ChevronRight;
