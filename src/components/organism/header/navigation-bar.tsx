import React from 'react';
import { pageList } from 'Helpers/page-helper';
import NavigationTab, { Tab } from 'Components/molecules/tab/navigation-tab';
import Icon from 'Components/atoms/foundation/icon';
import Link from 'next/link';

const NavigationBar = () => {
  const [isPhoneNavActive, setIsPhoneNavActive] = React.useState<boolean>(false);
  const pageMap = (pages: typeof pageList): Tab[] => {
    const routes: Tab[] = [];
    for (const [key, value] of Object.entries(pages)) {
      if (key !== 'default') routes.push({ name: key, href: value.route as string });
    }
    return routes;
  };
  return (
    <div className='sticky top-0 right-0 left-0 z-20'>
      <div className='w-full bg-white flex flex-row items-center justify-between h-15 px-10 transform duration-100 shadow-normal desktop:px-18 phone:px-8 phone:h-14'>
        <Link
          href='/'
          scroll
        >
          <a onClick={() => setIsPhoneNavActive(false)}>
            <Icon
              name='isa-logo'
              size='2xl'
            />
          </a>
        </Link>
        <div className='phone:hidden'><NavigationTab tabs={pageMap(pageList)}/></div>
        <div
          className='desktop:hidden small-desktop:hidden tablet:hidden'
          onClick={() => setIsPhoneNavActive(!isPhoneNavActive)}
        >
          <Icon
            name={isPhoneNavActive ? 'close' : 'burger'}
            size='m'
          />
        </div>
      </div>
      {isPhoneNavActive &&
        <div className='desktop:hidden small-desktop:hidden tablet:hidden'>
          <NavigationTab
            tabs={pageMap(pageList)}
            navClickCallback={(status: boolean) => setIsPhoneNavActive(status)}
          />
        </div>
      }
    </div>
  );
};

export default NavigationBar;
