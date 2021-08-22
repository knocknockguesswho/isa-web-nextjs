import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import { IconName } from 'Helpers/icon-helper';
import Icon from 'Components/atoms/foundation/icon';

interface IProps {
  iconName?: IconName;
  children: string | React.ReactElement;
  className?: string;
  onClick?: () => void;
}

const ButtonWithIcon = (props: IProps) => {
  return (
    <button
      onClick={props?.onClick}
      className='rounded-lg border flex flex-row w-55 items-center cursor-pointer select-none overflow-hidden border-blue bg-white'
      aria-label='Button With Icon'
    >
      <div className='bg-blue w-12 h-12 flex justify-center items-center'>
        <Icon name={props.iconName} size='m' color='white' />
      </div>
      <div className='flex-1'>
        <Typography className={`${props.className} text-blue text-s`} center>
          {props?.children}
        </Typography>
      </div>
    </button>
  );
};

ButtonWithIcon.defaultProps = {
  type: 'primary',
  size: 'm',
};

export default ButtonWithIcon;
