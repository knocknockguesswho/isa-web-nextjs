import React from 'react';
import Typography from 'Components/atoms/foundation/typography';

interface IProps {
  text?: string;
}

const Stamp = (props: IProps) => {
  // const [bodyWidth, setBodyWidth] = React.useState<number>(0);
  // React.useEffect(() => {
  //   setBodyWidth(document?.body?.clientWidth);
  // }, []);
  return (
    <div className='flex items-center justify-center bg-white shadow-normal absolute bottom-0 left-1/2 transform -translate-x-50% translate-y-50% py-4 px-30 tablet:px-20 tablet:py-3 phone:px-10 phone:py-2 whitespace-pre-line'>
      <Typography
        center
        className='text-lg phone:text-base text-blue whitespace-nowrap'
      >
        {props?.text}
      </Typography>
    </div>
  );
};

Stamp.defaultProps = {
  text: 'Typography'
};

export default Stamp;
