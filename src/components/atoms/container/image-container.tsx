import React from 'react';
import Image from 'next/image';

export type ImageLoading = 'lazy' | 'eager'
interface IProps {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  loading: ImageLoading;
  alt?: string;
}

const ImageContainer = (props: IProps) => {
  return (
    <div className='tablet:hidden phone:hidden'>
      <Image
        width={props.width}
        height={props.height}
        src={props.src}
        loading={props.loading}
        alt={props.alt}
      />
    </div>
  );
};

export default ImageContainer;
