import React from 'react';
import ButtonWithIcon from '../button/button-with-icon';

const ContactUs = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <a href='/'>
        <ButtonWithIcon iconName='email'>Contact Via Email</ButtonWithIcon>
      </a>
      <a
        href='https://wa.me/6285883360420'
        target='_blank'
        rel="noreferrer"
      >
        <ButtonWithIcon iconName='whatsapp'>Contact Via Whatsapp</ButtonWithIcon>
      </a>
    </div>
  );
};

export default ContactUs;
