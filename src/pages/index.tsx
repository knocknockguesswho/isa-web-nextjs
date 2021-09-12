import React from 'react';
import SEOHeader from 'Components/templates/meta/seo-header';
import dynamic from 'next/dynamic';
import { PAGE_NAME } from 'Helpers/page-helper';
import { heroBannerTextSlide } from 'contents/home';
const HomeBannerContainer = dynamic(() => import('Components/atoms/container/home-banner-container'));
const Stamp = dynamic(() => import('Components/molecules/marker/stamp'));
const HomeContent = dynamic(() => import('Components/templates/content/home-content'));
const TextCarousel = dynamic(() => import('Components/organism/body/text-carousel'));
const Footer = dynamic(() => import('Components/organism/footer/footer'), { ssr: false });

const Home = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.HOME} />
      <HomeBannerContainer>
        <TextCarousel items={heroBannerTextSlide} />
        <Stamp text='Committed Towards Solutions' />
      </HomeBannerContainer>
      <HomeContent />
      <Footer />
    </>
  );
};

export default Home;
