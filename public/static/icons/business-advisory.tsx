import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const BusinessAdvisory = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size}
      height={props?.size}
      viewBox="0 0 125 109.375"
    >
      <path
        id="briefcase"
        fill={props?.color}
        d="M78.125,106.219a3.905,3.905,0,0,1-3.906,3.906H50.781a3.905,3.905,0,0,1-3.906-3.906V94.5H0v35.156a12.015,12.015,0,0,0,11.719,11.719H113.281A12.015,12.015,0,0,0,125,129.656V94.5H78.125Zm35.156-50.781H93.75V43.719A12.015,12.015,0,0,0,82.031,32H42.969A12.015,12.015,0,0,0,31.25,43.719V55.438H11.719A12.015,12.015,0,0,0,0,67.156V86.688H125V67.156A12.015,12.015,0,0,0,113.281,55.438Zm-35.156,0H46.875V47.625h31.25Z"
        transform="translate(0 -32)"
      />
    </svg>
  );
};

export default BusinessAdvisory;
