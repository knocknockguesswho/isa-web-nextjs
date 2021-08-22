import { CardArticleItems } from 'Components/organism/body/card-article-content';
import { ImageCarouselItem } from 'Components/organism/body/image-carousel';
import { TextCarouselItem } from 'Components/organism/body/text-carousel';
import { getStatic, pageList, PAGE_NAME } from 'Helpers/page-helper';
import { IProps as HighlightedArticleProps } from 'Components/molecules/article/highlighted-article';

export const heroBannerTextSlide: TextCarouselItem[] = [
  {
    title: 'Accounting Service',
    content:
      'Our tailored Accounting services can help you build trust and confidence through transparency clarity and consistency.',
    buttonHref: { pathname: '/services', query: 'accounting-service' },
  },
  {
    title: 'Tax Services',
    content: 'Our professional is effectively integrated with Tax team.',
    buttonHref: { pathname: '/services', query: 'tax-services' },
  },
  {
    title: 'Business Advisory',
    content: 'ISA Advisory is continually seeking better ways of working.',
    buttonHref: { pathname: '/services', query: 'business-advisory' },
  },
];

export const whyIsaImageCarousel: ImageCarouselItem[] = [
  {
    tablet: getStatic('images/tablet/why-isa-section/1.png'),
    phone: getStatic('images/phone/why-isa-section/1.png'),
  },
  {
    tablet: getStatic('images/tablet/why-isa-section/2.png'),
    phone: getStatic('images/phone/why-isa-section/2.png'),
  },
  {
    tablet: getStatic('images/tablet/why-isa-section/3.png'),
    phone: getStatic('images/phone/why-isa-section/3.png'),
  },
  {
    tablet: getStatic('images/tablet/why-isa-section/4.png'),
    phone: getStatic('images/phone/why-isa-section/4.png'),
  },
];

export const cardArticleItems: CardArticleItems[] = [
  {
    iconName: 'accounting-service',
    articleTitle: 'Accounting Service',
    articleContent:
      'Our tailored Accounting services can help you build trust and confidence through transparency clarity and consistency.',
    articleButtonLabel: 'Read More Services',
    articleButtonClick: { pathname: '/services', query: { section: 'accounting-service' } },
  },
  {
    iconName: 'tax-services',
    articleTitle: 'Tax Services',
    articleContent:
      'Our professional is effectively integrated with Tax team to give you the perspective and support you need to manage your global tax burden effectively.',
    articleButtonLabel: 'Read More Services',
    articleButtonClick: { pathname: '/services', query: { section: 'tax-services' } },
  },
  {
    iconName: 'business-advisory',
    articleTitle: 'Business Advisory',
    articleContent:
      'ISA Advisory is continually seeking better ways of working as we collaborate with clients to help them solve their complex industry issues and capitalize on opportunities to grow, optimize and protect their businesses. ',
    articleButtonLabel: 'Read More Services',
    articleButtonClick: { pathname: '/services', query: { section: 'business-advisory' } },
  },
];

export const insightsArticle: HighlightedArticleProps = {
  title: 'Better Working World',
  subtitle: 'See how we can help build a better working world for you.',
  article:
    'At ISA, we are committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
  buttonType: 'outlined',
};

export const careersArticle: HighlightedArticleProps = {
  title: 'Handling Various Industries',
  subtitle: 'PT. Iradhi Solusindo Abadi (ISA) was established in 2019.',
  article:
    'Our people have wide experiences in handling various industries such as trading, mining, manufacturing, service, IT, etc. The firm has two partners and more than ten staffs member. Thepartners and professional staffs are members of the Indonesia Accountant Association. ',
  buttonLabel: 'See Details',
  buttonType: 'text-chevron',
  buttonClick: { pathname: pageList[PAGE_NAME.CAREERS].route as string },
};
