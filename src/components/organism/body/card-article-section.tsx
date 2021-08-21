import Typography from 'Components/atoms/foundation/typography';
import React from 'react';

interface IProps {
  title: string;
  content: string;
}

const CardArticleSection = (props: IProps) => {
  return (
    <div className='w-full border border-blue' style={{ maxWidth: 664 }}>
      <div className='py-2 px-6 bg-blue'>
        <Typography className='text-xl text-white'>{props.title}</Typography>
      </div>
      <div className='py-4 px-6'>
        <Typography className='text-black text-lg'>{props.content}</Typography>
      </div>
    </div>
  );
};

export default CardArticleSection;
