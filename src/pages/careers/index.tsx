import React from 'react';
import SEOHeader from 'Components/templates/meta/seo-header';
import dynamic from 'next/dynamic';
import { PAGE_NAME } from 'Helpers/page-helper';
import { careersIsaRole } from 'contents/careers';
import Typography from 'Components/atoms/foundation/typography';
const BlogArticle = dynamic(() => import('Components/templates/content/blog-article'));
const Footer = dynamic(() => import('Components/organism/footer/footer'), { ssr: false });

const About = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5035.288831237802!2d106.81755361529794!3d-6.229641188233788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a1e339e897%3A0xec3a7bf9c2bb54d6!2sCentennial%20Tower!5e1!3m2!1sen!2sid!4v1632119188848!5m2!1sen!2sid';
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.CAREERS} />
      <BlogArticle articleHeader='Careers' articleBody={[careersIsaRole]} />
      <div className='w-full flex flex-col space-y-6 items-center'>
        <Typography center bold isTitle className='text-4xl'>
          Visit Us
        </Typography>
        <iframe
          src={mapSrc}
          className='w-full h-150'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default About;
