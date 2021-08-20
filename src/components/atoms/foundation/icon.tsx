import React from 'react';
import { ColorPalette } from 'Helpers/component-helper';
import { theme } from '../../../../tailwind.config';
import { IconName, IconSize, IconElement } from 'Helpers/icon-helper';

interface IProps {
  name?: IconName;
  size?: IconSize;
  color?: ColorPalette;
}

const Icon = (props: IProps) => {
  const Colors = new Map(Object.entries(theme.extend.colors));
  let size: string = '';
  switch (props.size) {
    case 'xs':
      size = '12px';
      break;
    case 's':
      size = '16px';
      break;
    case 'm':
      size = '24px';
      break;
    case 'l':
      size = '32px';
      break;
    case 'xl':
      size = '40px';
      break;
    case '2xl':
      size = '60px';
      break;
    case '3xl':
      size = '80px';
      break;
    case '4xl':
      size = '120px';
      break;
    case '5xl':
      size = '172px';
      break;
    default:
      size = '16px';
      break;
  }

  return (
    <IconElement
      name={props?.name}
      size={size}
      color={Colors.get(props?.color as string)}
    />
  );
};

Icon.defaultProps = {
  name: 'close',
  size: 's',
  color: 'darkBlue',
  withHeight: true
};

export default Icon;
