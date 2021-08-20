import React from 'react';
import { ColorPalette, convertColor } from 'Helpers/component-helper';

type DotColor = 'white' | 'blue';
interface IProps {
  sliderLength?: number;
  activeItem?: number;
  dotOval?: boolean;
  dotColor?: DotColor;
  dotClickCallback?: (dotNth: number) => void;
}

const SliderIndicator = (props: IProps) => {
  return (
    <div className='flex flex-row space-x-1 items-center justify-center'>
      {Array.from({ length: props?.sliderLength as number }).map((_, idx: number) => {
        return (
          <div
            onClick={() => props.dotClickCallback && props.dotClickCallback(idx)}
            className={`h-2 rounded-full cursor-pointer ${props?.dotOval && idx === props?.activeItem ? 'w-4' : 'w-2'} ${idx === props?.activeItem ? convertColor(props.dotColor as ColorPalette, 'bg') : 'bg-mild'}`}
            key={idx}
          />
        );
      })}
    </div>
  );
};

SliderIndicator.defaultProps = {
  sliderLength: 2,
  activeItem: 0,
  dotColor: 'white'
};

export default SliderIndicator;
