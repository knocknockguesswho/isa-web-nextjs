import React from 'react';
import FooterCopyrightSection from 'Components/molecules/footer/footer-copyright-section';
import CompanyDetails from 'Components/molecules/footer/company-details';
import NavLink from 'Components/molecules/footer/nav-link';
import ContactUs from 'Components/molecules/footer/contact-us';

const Footer = () => {
  return (
    <div>
      {/* Footer Top Section */}
      <div className='w-full flex flex-row justify-center py-6 bg-white shadow-normal space-x-20 tablet:space-x-8 phone:flex-col phone:space-x-0 phone:space-y-6 px-6 desktop:px-0'>
        <CompanyDetails />
        <div className='flex flex-row space-x-20 tablet:space-x-0 tablet:flex-col tablet:space-y-10'>
          <NavLink />
          <div className='phone:hidden'>
            <ContactUs />
          </div>
        </div>
        <div className='desktop:hidden small-desktop:hidden tablet:hidden'>
          <ContactUs />
        </div>
      </div>
      <FooterCopyrightSection />
    </div>
  );
};

export default Footer;
