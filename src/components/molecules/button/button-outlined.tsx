import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
export type ButtonOutlinedType = 'primary' | 'secondary';
interface IProps {
  type: ButtonOutlinedType;
  children: string | React.ReactElement;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const ButtonOutlined = (props: IProps) => {
  return (
    <button
      onClick={props?.onClick}
      className={`px-4 py-1 rounded border flex flex-row justify-center items-center w-auto cursor-pointer select-none ${
        props?.type === 'primary' ? 'border-blue' : 'border-white'
      }`}
      aria-label='Button Outlined'
    >
      <Typography className={`${props.className} ${props?.type === 'primary' ? 'text-blue' : 'text-white'}`}>
        {props?.children}
      </Typography>
    </button>
  );
};

export default ButtonOutlined;
