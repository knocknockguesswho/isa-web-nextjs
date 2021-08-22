import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
type ButtonContainedType = 'primary' | 'secondary';
interface IProps {
  type?: ButtonContainedType;
  className?: string;
  children: string | React.ReactElement;
  onClick?: () => void;
}

const ButtonContained = (props: IProps) => {
  return (
    <button
      onClick={props?.onClick}
      className={`px-4 py-1 rounded flex flex-row justify-center items-center w-auto cursor-pointer select-none shadow-normal ${
        props?.type === 'primary' ? 'bg-blue' : 'bg-white'
      }`}
      aria-label='Button Contained'
    >
      <Typography className={`${props.className} ${props?.type === 'primary' ? 'text-white' : 'text-blue'}`}>
        {props?.children}
      </Typography>
    </button>
  );
};

ButtonContained.defaultProps = {
  type: 'primary',
  size: 'm',
};

export default ButtonContained;
