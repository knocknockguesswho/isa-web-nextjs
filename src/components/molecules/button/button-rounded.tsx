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

const ButtonRounded = ({
  iconName = 'chevron-right',
  iconSize = 'm',
  iconColor = 'darkBlue',
  buttonColor = 'white',
  withBorder = false,
  withShadow = false,
  onClick,
}: IProps) => {
  const className = [
    withBorder ? 'border border-white' : '',
    buttonColor ? convertColor(buttonColor as ColorPalette, 'bg') : '',
    withShadow ? 'shadow-heavy hover:shadow-hover' : '',
    'w-auto h-auto p-3 flex flex-row items-center space-x-2 rounded-full cursor-pointer select-none',
  ].join(' ');
  return (
    <button onClick={onClick} className={className} aria-label='Button Rounded'>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </button>
  );
};

export default ButtonRounded;
