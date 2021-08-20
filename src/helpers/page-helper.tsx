import { Url, UrlObject } from 'url';

export function getStatic(fileName: string) {
  return '/static/' + fileName;
}

export enum PAGE_NAME {
  HOME = 'Home',
  SERVICES = 'Services',
  ABOUT = 'About',
  CAREERS = 'Careers',
  DEFAULT = 'default',
}
export type PageSection = { name: string; route: Url | UrlObject | string };
export interface IPageList {
  [args: string]: {
    title: string;
    description: string;
    route?: Url | UrlObject | string;
    pageSection?: PageSection[];
  };
}
export const pageList: IPageList = {
  [PAGE_NAME.HOME]: {
    title: `${PAGE_NAME.HOME} - PT. Iradhi Solusindo Abadi`,
    description:
      'Committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
    route: '/',
  },
  [PAGE_NAME.SERVICES]: {
    title: `${PAGE_NAME.SERVICES} - PT. Iradhi Solusindo Abadi | Building a better working world for our clients.`,
    description:
      'Committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
    route: '/services',
    pageSection: [
      {
        name: 'Accounting Service',
        route: {
          pathname: '/services',
          query: { section: 'accounting-service' },
        },
      },
      {
        name: 'Tax Services',
        route: { pathname: '/services', query: { section: 'tax-services' } },
      },
      {
        name: 'Business Advisory',
        route: {
          pathname: '/services',
          query: { section: 'business-advisory' },
        },
      },
    ],
  },
  [PAGE_NAME.ABOUT]: {
    title: `${PAGE_NAME.ABOUT} - PT. Iradhi Solusindo Abadi`,
    description:
      'Committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
    route: '/about',
    pageSection: [
      {
        name: 'Work Philosophy',
        route: { pathname: '/about', query: { section: 'work-philosophy' } },
      },
      {
        name: 'History',
        route: { pathname: '/about', query: { section: 'history' } },
      },
      {
        name: 'Our Difference',
        route: { pathname: '/about', query: { section: 'our-difference' } },
      },
    ],
  },
  [PAGE_NAME.CAREERS]: {
    title: `${PAGE_NAME.CAREERS} - PT. Iradhi Solusindo Abadi`,
    description:
      'Committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
    route: '/careers',
    pageSection: [
      {
        // eslint-disable-next-line quotes
        name: "ISA's Role",
        route: { pathname: '/careers', query: { section: 'role' } },
      },
      // { name: 'Existing Client', route: { pathname: '/careers', query: 'existing-client' } },
    ],
  },
  [PAGE_NAME.DEFAULT]: {
    title: 'PT. Iradhi Solusindo Abadi',
    description:
      'Committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory.',
    route: '/',
  },
};
