import React from 'react';
import Typography from 'Components/atoms/foundation/typography';
import Image from 'next/image';
import { getStatic } from 'Helpers/page-helper';

interface IProps {
  address?: string | React.ReactNode;
  email?: string;
}

const CompanyDetails = (props: IProps) => {
  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex flex-col items-baseline space-y-3'>
        <Image src={getStatic('icons/isa-logo-text.svg')} width={200} height={65} alt='isa-logo-text' loading='lazy' />
        <Typography className='text-sm phone:text-s'>{props.address}</Typography>
      </div>
      <Typography italic className='text-s'>
        {props.email}
      </Typography>
    </div>
  );
};

CompanyDetails.defaultProps = {
  address: (
    <>
      Gedung Epiwalk Lt.5, Unit B547-548,
      <br />
      Jl. H. R. Rasuna Said Rt.2/Rw/5, Karet Kuningan, Jakarta Selatan,
      <br />
      Daerah Khusus Ibukota Jakarta 12940.
      <br />
      <br />
      <i>Crosscoop Co-workingspace</i>
      <br />
      Centennial Tower Lt. 35
      <br />
      l. Gatot Subroto, RT.2/RW.2, Karet Semanggi, Setiabudi, Jakarta Selatan,
      <br />
      Daerah Khusus Ibukota Jakarta 12930
    </>
  ),
  email: 'Email: info@iradhi.com',
};

export default CompanyDetails;
