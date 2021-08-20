import React from 'react';
import dynamic from 'next/dynamic';
import { PAGE_NAME } from 'Helpers/page-helper';
import { heroBannerTextSlide } from 'contents/home';
const SEOHeader = dynamic(() => import('Components/templates/meta/seo-header'), { ssr: false });
const HomeBannerContainer = dynamic(() => import('Components/atoms/container/home-banner-container'), { ssr: false });
const Stamp = dynamic(() => import('Components/molecules/marker/stamp'), { ssr: false });
const HomeContent = dynamic(() => import('Components/templates/content/home-content'), { ssr: false });
const TextCarousel = dynamic(() => import('Components/organism/body/text-carousel'), { ssr: false });

const Home = () => {
  return (
    <>
      <SEOHeader pageName={PAGE_NAME.HOME}/>
      <HomeBannerContainer>
        <TextCarousel items={heroBannerTextSlide}/>
        <Stamp text='Committed Towards Solutions'/>
      </HomeBannerContainer>
      <HomeContent />
    </>
  );
};

export default Home;
