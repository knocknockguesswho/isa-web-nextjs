import React, { Children } from 'react';
import { useDrag } from 'react-use-gesture';

export interface IProps {
  selected: number;
  children?: React.ReactNode;
  selectCallback?: (selected: number) => void;
  getDragStatus?: (status: boolean) => void;
  dragIsDisabled?: boolean;
}

export const Slider = (props: IProps): React.ReactElement => {
  const slide = React.useRef<HTMLDivElement>(null);
  const childrenLength: number = Children.toArray(props.children).length;
  const [selected, setSelected] = React.useState<number>(props.selected);
  const [slideWidth, setSlideWidth] = React.useState<number>(0);
  const [active, setActive] = React.useState<boolean>(false);
  const [move, setMove] = React.useState<number>(0);

  React.useEffect(() => {
    if (props.selected < 0 || props.selected > childrenLength - 1) {
      setSelected(selected);
      props.selectCallback && props.selectCallback(selected);
    } else {
      setSelected(props.selected);
    }
    setSlideWidth(-slide.current!.offsetWidth);
  }, [props.selected]);

  React.useEffect(() => {
    setSelected(selected);
    props.selectCallback && props.selectCallback(selected);
  }, [selected]);

  React.useEffect(() => {
    if (!active) {
      const dragTimeOut = setTimeout(() => {
        props.getDragStatus && props.getDragStatus(false);
      }, 50);
      return () => clearTimeout(dragTimeOut);
    }
  }, [active]);

  const bind = props.dragIsDisabled ? () => null : useDrag(({ active, last, movement: [mx] }) => {
    if (Math.abs(mx) > 10) {
      setActive(active);
      setMove(selected * slideWidth + mx);
      if (last) {
        if (childrenLength == 1 || childrenLength == 0) {
          if (mx / window.innerWidth < -0.03 || mx / window.innerWidth > 0.03) {
            setSelected(0);
          }
        } else {
          if (selected == 0) {
            if (mx / window.innerWidth < -0.03) {
              setSelected(selected + 1);
            }
          } else if (selected == childrenLength - 1) {
            if (mx / window.innerWidth > 0.03) {
              setSelected(selected - 1);
            }
          } else {
            if (mx / window.innerWidth < -0.03) {
              setSelected(selected + 1);
            }
            if (mx / window.innerWidth > 0.03) {
              setSelected(selected - 1);
            }
          }
        }
      }
    }
  });

  return (
    <div
      className="overflow-hidden whitespace-nowrap flex flex-col relative w-full h-full"
      {...bind()}
      onMouseMove={() => {
        active && Math.abs(move) > 10 && props.getDragStatus && props.getDragStatus(true);
      }}
      onMouseUp={(e: any) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      ref={slide}
      onDragStart={(e: any) => e.preventDefault()}
    >
      <div className="flex flex-row whitespace-nowrap w-full h-full">
        <div
          style={{
            width: `${childrenLength * 100}%`,
            transform: `translateX(${active ? move : selected * slideWidth}px)`,
            touchAction: 'pan-y',
            transition: `${active ? '' : 'transform 0.5s'}`
          }}
          className="flex flex-none flex-row whitespace-nowrap w-full h-full"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

Slider.defaultProps = {
  selected: 0,
  dragIsDisabled: false
};

export default Slider;
