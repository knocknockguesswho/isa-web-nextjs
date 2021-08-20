import React from 'react';
import Icon from 'Components/atoms/foundation/icon';
import Typography from 'Components/atoms/foundation/typography';
type ButtonTextType = 'primary' | 'secondary'
interface IProps {
  type?: ButtonTextType
  children: string | React.ReactElement;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonText = (props: IProps) => {
  return (
    <button
      onClick={props?.onClick}
      className='w-auto flex flex-row items-center space-x-2 cursor-pointer select-none'
    >
      <Typography className={`${props.className} ${props?.type === 'primary' ? 'text-blue' : 'text-white'}`}>
        {props?.children}
      </Typography>
      {props?.withArrow &&
        <Icon
          name='chevron-right'
          size='xs'
          color={props?.type === 'primary' ? 'blue' : 'white'}
        />
      }
    </button>
  );
};

ButtonText.defaultProps = {
  type: 'primary',
  size: 'm',
  withArrow: false
};

export default ButtonText;
