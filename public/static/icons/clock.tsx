import React from 'react';

interface IProps {
  size?: string;
  color?: string;
}

const Clock = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size}
      height={props?.size}
      viewBox="0 0 15.27 15.27"
    >
      <path
        id="clock"
        d="M15.635,8a7.635,7.635,0,1,0,7.635,7.635A7.634,7.634,0,0,0,15.635,8Zm0,13.792a6.157,6.157,0,1,1,6.157-6.157A6.156,6.156,0,0,1,15.635,21.792Zm1.9-3.214-2.614-1.9a.372.372,0,0,1-.151-.3V11.325a.371.371,0,0,1,.369-.369h.985a.371.371,0,0,1,.369.369v4.362l2.057,1.5a.369.369,0,0,1,.08.517l-.579.8a.372.372,0,0,1-.517.08Z"
        transform="translate(-8 -8)"
        fill={props?.color}
      />
    </svg>
  );
};

export default Clock;
