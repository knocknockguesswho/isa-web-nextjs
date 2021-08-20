/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { getStatic, pageList, PAGE_NAME } from 'Helpers/page-helper';
import { cardArticleItems, careersArticle, insightsArticle, whyIsaImageCarousel } from 'contents/home';
import dynamic from 'next/dynamic';

const BodyContainer = dynamic(() => import('Components/atoms/container/body-container'), { ssr: false });
const ImageContainer = dynamic(() => import('Components/atoms/container/image-container'), { ssr: false });
const SectionContainer = dynamic(() => import('Components/atoms/container/section-container'), { ssr: false });
const ImageCarousel = dynamic(() => import('Components/organism/body/image-carousel'), { ssr: false });
const BackgroundedContainer = dynamic(() => import('Components/atoms/container/backgrounded-container'), {
  ssr: false,
});
const HighlightedArticle = dynamic(() => import('Components/molecules/article/highlighted-article'), { ssr: false });
const ButtonOutlined = dynamic(() => import('Components/molecules/button/button-outlined'), { ssr: false });
const CardArticleContainer = dynamic(() => import('Components/organism/body/card-article-content'), { ssr: false });

const HomeContent = () => {
  return (
    <BodyContainer isFromHome>
      <SectionContainer centered title='Why ISA?'>
        <ImageContainer
          width={1092}
          height={541}
          src={getStatic('images/desktop/why-isa-section.png')}
          alt='why-isa-desktop'
          loading='lazy'
        />
        <ImageCarousel items={whyIsaImageCarousel} alt='why-isa-mobile' />
        <ButtonOutlined type='primary' className='text-blue'>
          <Link href={pageList[PAGE_NAME.ABOUT].route as string}>
            <a>About Us</a>
          </Link>
        </ButtonOutlined>
      </SectionContainer>
      <SectionContainer centered title='Insights'>
        <BackgroundedContainer bgImageSrc={getStatic('images/home-insights.png')}>
          <HighlightedArticle {...insightsArticle} />
        </BackgroundedContainer>
        <CardArticleContainer items={cardArticleItems} />
      </SectionContainer>
      <SectionContainer centered title='Careers'>
        <BackgroundedContainer bgImageSrc={getStatic('images/home-careers.png')} imgWidth={1920}>
          <HighlightedArticle {...careersArticle} />
        </BackgroundedContainer>
      </SectionContainer>
    </BodyContainer>
  );
};

export default HomeContent;
