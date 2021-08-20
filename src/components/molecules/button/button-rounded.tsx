import React from 'react';
import Icon from 'Components/atoms/foundation/icon';
import { IconName, IconSize } from 'Helpers/icon-helper';
import { ColorPalette, convertColor } from 'Helpers/component-helper';
interface IProps {
  iconName?: IconName;
  iconSize?: IconSize;
  iconColor?: ColorPalette;
  buttonColor?: ColorPalette;
  withShadow?: boolean;
  withBorder?: boolean;
  onClick?: () => void;
}

const ButtonRounded = (props: IProps) => {
  const className = [
    props?.withBorder ? 'border border-white' : '',
    props?.buttonColor ? convertColor(props?.buttonColor as ColorPalette, 'bg') : '',
    props?.withShadow ? 'shadow-heavy hover:shadow-hover' : '',
    'w-auto h-auto p-3 flex flex-row items-center space-x-2 rounded-full cursor-pointer select-none',
  ].join(' ');
  return (
    <button
      onClick={props?.onClick}
      className={className}
    >
      <Icon
        name={props?.iconName}
        size={props?.iconSize}
        color={props?.iconColor}
      />
    </button>
  );
};

ButtonRounded.defaultProps = {
  iconName: 'chevron-right',
  iconSize: 'm',
  iconColor: 'darkBlue',
  buttonColor: 'white',
  withBorder: false
};

export default ButtonRounded;
