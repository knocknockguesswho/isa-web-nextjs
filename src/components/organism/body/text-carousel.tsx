import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import Slider from 'Components/atoms/slider/slider';
import { UrlObject } from 'url';
import Link from 'next/link';
import ButtonOutlined from 'Components/molecules/button/button-outlined';
import SliderIndicator from 'Components/atoms/slider/slider-indicator';

export type TextCarouselItem = {
  title: string;
  content: string;
  buttonHref: string | UrlObject;
};
interface IProps {
  items: TextCarouselItem[];
}

const TextCarousel = (props: IProps) => {
  const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (selectedSlide === props.items.length - 1) setSelectedSlide(0);
      else setSelectedSlide(selectedSlide + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [selectedSlide]);
  return (
    <div className="w-full pt-18 phone:pt-16 pb-7 bg-overlay items-center select-none space-y-6">
      <Slider
        selectCallback={(selected: number) => setSelectedSlide(selected)}
        selected={selectedSlide}
      >
        {props?.items.map((item: TextCarouselItem, idx: number) => {
          return (
            <div key={idx} className="w-full h-auto">
              <div className="mx-auto tablet:hidden phone:hidden mini:hidden w-105 flex flex-col items-center whitespace-pre-line">
                <Typography bold className="text-white text-2xl">
                  {item.title}
                </Typography>
                <Typography center className="text-white text-m">
                  {item.content}
                </Typography>
                <Link href={item.buttonHref} scroll>
                  <a className="pt-4">
                    <ButtonOutlined type="secondary" className="text-xs">
                      Read More Services
                    </ButtonOutlined>
                  </a>
                </Link>
              </div>
              <div className="mx-auto desktop:hidden small-desktop:hidden w-82 flex flex-col items-center whitespace-pre-line">
                <Typography bold className="text-white text-xl">
                  {item.title}
                </Typography>
                <Typography center className="text-white text-sm">
                  {item.content}
                </Typography>
                <Link href={item.buttonHref} scroll>
                  <a className="pt-4">
                    <ButtonOutlined type="secondary" className="text-xs">
                      Read More Services
                    </ButtonOutlined>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
      <SliderIndicator
        sliderLength={props.items.length}
        activeItem={selectedSlide}
        dotClickCallback={(dotNth: number) => setSelectedSlide(dotNth)}
      />
    </div>
  );
};

TextCarousel.defaultProps = {
  items: [{ title: '', content: '', buttonHref: '/' }],
};

export default TextCarousel;
