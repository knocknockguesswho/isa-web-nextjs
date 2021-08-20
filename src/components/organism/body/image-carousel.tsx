import React from 'react';
import Slider from 'Components/atoms/slider/slider';
import SliderIndicator from 'Components/atoms/slider/slider-indicator';
import Image from 'next/image';
import ButtonRounded from 'Components/molecules/button/button-rounded';

export type ImageCarouselItem = {
  tablet: string,
  phone: string
}
interface IProps {
  items: ImageCarouselItem[]; // as URL
  alt?: string;
}

const ImageCarousel = (props: IProps) => {
  const [selectedSlide, setSelectedSlide] = React.useState<number>(0);
  const handleSlideButton = (slide: 'left' | 'right') => {
    if (slide === 'left' && selectedSlide > 0) setSelectedSlide(selectedSlide - 1);
    if (slide === 'right' && selectedSlide < props.items.length - 1) setSelectedSlide(selectedSlide + 1);
    return false;
  };
  return (
    <div className='flex flex-col items-center space-y-4 relative desktop:hidden small-desktop:hidden'>
      <Slider
        selectCallback={(selected: number) => setSelectedSlide(selected)}
        selected={selectedSlide}
      >
        {props?.items.map((item: ImageCarouselItem, idx: number) => {
          return (
            <div
              key={idx}
              className='mx-auto flex items-center justify-center'
            >
              <div className='phone:hidden w-auto'>
                <Image
                  width={600}
                  height={463}
                  src={item.tablet}
                  loading='lazy'
                  alt={props.alt + ' ' + idx}
                />
              </div>
              <div className='tablet:hidden w-auto'>
                <Image
                  width={350}
                  height={270}
                  src={item.phone}
                  loading='lazy'
                  alt={props.alt + ' ' + idx}
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        <SliderIndicator
          sliderLength={props.items.length}
          dotColor='blue'
          activeItem={selectedSlide}
        />
      </div>
      <div className='absolute z-10 top-1/2 left-0 transform -translate-y-full translate-x-50% phone:hidden'>
        <ButtonRounded
          iconName='chevron-left'
          withShadow
          onClick={() => handleSlideButton('left')}
        />
      </div>
      <div className='absolute z-10 top-1/2 right-0 transform -translate-y-full -translate-x-50% phone:hidden'>
        <ButtonRounded
          iconName='chevron-right'
          withShadow
          onClick={() => handleSlideButton('right')}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
